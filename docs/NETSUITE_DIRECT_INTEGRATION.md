# NetSuite direct integration: replacing the manual invoice export

Owner: Greg Graven (COO)
Implementer: Ben Caplan
Access needed from: Ted Hutchins
Drafted: 2026-08-11
Status: interim automation live, permanent integration not yet built

---

## 1. Purpose

The daily refresh currently depends on someone exporting three saved-search results from
NetSuite, downloading them, and copying them into `inputs/<lob>/revenue-forecast/`. That manual
step is the most failure-prone part of the pipeline. It has already caused one stale refresh
(2026-07-06) and, as of 2026-08-11, the dashboards were riding a snapshot five weeks old.

This document specifies the query that replaces the export so the refresh can source invoiced
revenue directly from the NetSuite GL.

Nothing here changes forecast methodology. V5 and Realistic are untouched. The 2026-05-22
period-bucketing rule is preserved and, if anything, strengthened, because the posting period
comes straight from `accountingperiod` rather than from a CSV column that could be blank.

---

## 2. Scope decisions (confirmed by Greg, 2026-08-11)

| Decision | Value |
| --- | --- |
| Consolidation basis | Four operating subsidiaries: Feazel Roofing (8), Shanco (5), Kearns (6), Music City (10). Holdings (1), Elimination (7), and the consolidated roll-ups (-1, -9) are excluded. |
| Margin basis (for later phases) | Gross, before commissions and before MMU |
| Revenue source line | The AR trade line of the invoice, account `10101` |
| Transaction scope | Posted invoices only (`t.type = 'CustInvc'`, `tal.posting = 'T'`). Credit memos and other AR types excluded, matching the existing parser. |

Note the subsidiary filter is applied implicitly today because account `10101` postings only
originate in the operating entities. Make it explicit (`AND t.subsidiary IN (5,6,8,10)`) if
Holdings ever posts AR.

---

## 3. The line-of-business split rule

The three exports are not distinguished by any single NetSuite field. The rule below was
reverse-engineered from the 2026-07-06 export set and validated against it.

```
SERVICE       if transactionline.department = 102 (Service)
                 OR classification.name IN ('T&M', 'Repair', 'Warranty')
MULTI-FAMILY  else if customercategory.name = 'Commercial Client'
RESIDENTIAL   otherwise
```

Customers with no category fall to Residential, which matches the export behaviour.

### Validation evidence

Reproduced against the 2026-07-06 snapshot, filtered to `trandate <= 2026-07-06`:

| Period | Residential | Multi-Family | Service |
| --- | --- | --- | --- |
| Jan 2026 | exact | exact | exact |
| Feb 2026 | exact | exact | exact |
| Mar 2026 | exact | exact | exact |
| Apr 2026 | +8,700 | -8,700 | exact |
| May 2026 | +42,000 | -42,000 | exact |
| Jun 2026 | +53,432 | -53,432 | exact |
| Jul 2026 | +179,796 (partial export) | n/a | +2,508 |

January through March tie to the penny across all three lines. The April through June variances
are equal and offsetting between Residential and Multi-Family, which means a small number of
customers had their category changed after the export was taken. That is source-data drift, not
a rule defect. The July variance is back-dated entries booked after the export.

**Do not change this rule without re-running the validation.** If Finance ever introduces a
proper LOB field on the transaction, switch to it and retire this heuristic.

---

## 4. The query

Shared SELECT and FROM for all three lines:

```sql
SELECT t.id                                    AS internalid,
       TO_CHAR(t.trandate,'FMMM/FMDD/YYYY')    AS trandate_,
       NVL(l.name,'')                          AS location_,
       ap.periodname                           AS period_,
       t.tranid                                AS docnum,
       NVL(cu.entityid,'')                     AS custid_,
       NVL(cu.companyname,'')                  AS custname_,
       tal.amount                              AS amount_
FROM   transactionaccountingline tal
JOIN   transaction        t   ON t.id  = tal.transaction
JOIN   transactionline    tl  ON tl.transaction = tal.transaction
                             AND tl.id = tal.transactionline
JOIN   accountingperiod   ap  ON ap.id = t.postingperiod
JOIN   account            a   ON a.id  = tal.account
JOIN   customer           cu  ON cu.id = t.entity
LEFT   JOIN customercategory cc ON cc.id = cu.category
LEFT   JOIN classification   c  ON c.id  = tl.class
LEFT   JOIN location         l  ON l.id  = tl.location
WHERE  tal.posting   = 'T'
AND    t.type        = 'CustInvc'
AND    a.acctnumber  = '10101'
AND    ap.startdate >= TO_DATE('2026-01-01','YYYY-MM-DD')
AND    ap.startdate  < TO_DATE('2027-01-01','YYYY-MM-DD')
```

Append exactly one predicate, then `ORDER BY t.id`:

```sql
-- Residential
AND NOT (tl.department = 102 OR c.name IN ('T&M','Repair','Warranty'))
AND NVL(cc.name,'x') <> 'Commercial Client'

-- Multi-Family
AND NOT (tl.department = 102 OR c.name IN ('T&M','Repair','Warranty'))
AND cc.name = 'Commercial Client'

-- Service
AND (tl.department = 102 OR c.name IN ('T&M','Repair','Warranty'))
```

SuiteQL notes that bite: no `WITH` / CTE support, string concatenation is `||` not `+`, and date
literals need `TO_DATE`. Paginate at 1000 rows; Residential and Service both exceed one page.

---

## 5. Output contract

The pipeline's shared parser (`calculators/lib/netsuite-invoices.js`) matches any file in the
input folder whose name contains `invoicedytd` (case-insensitive) and ends in `.csv`, and picks
the most recently modified match. Header must be exactly:

```
Internal ID,Order Type,*,Date,Location,Period,Type,Document Number,Name,Account,Memo,Amount
```

| Column | Value |
| --- | --- |
| Internal ID | `internalid` |
| Order Type | empty |
| `*` | the literal character `*` |
| Date | `trandate_`, format `M/D/YYYY` |
| Location | `location_` |
| Period | `period_`, format `MMM YYYY` |
| Type | the literal word `Invoice` |
| Document Number | `docnum` |
| Name | `custid_` + single space + `custname_` |
| Account | `10101 Accounts Receivable : Accounts Receivable - Trade` |
| Memo | empty |
| Amount | 2 decimal places, no separators, no currency symbol |

CSV must be UTF-8 without BOM, quoted minimally (customer names contain commas and colons).

The parser reads only Date, Location, Period, Type and Amount. The other columns exist so the
file stays diff-comparable against a manual export and so `refresh_v5.py` keeps working.

**Verification that the contract holds:** running the repo's own parser against generated files
returns `format: 'per-invoice'`, `aggregatedOnly: false`, `bucketingRule: 'period-only-v2026-05-22'`
and `skippedMissingPeriod: 0`. Branch labels normalize correctly, including
`Detroit Metro -> Detroit` and `NOVA -> DC Metro`. Any generator change must keep all four true.

---

## 6. Why the saved searches cannot be used directly

`ns_runSavedSearch` against `customsearch8118` (Res Invoiced YTD), `8117` (MF) and `8119`
(Service) returns the summary level only: Location internal ID plus a summed Amount. The parser
detects that shape as the aggregated fallback format, which zeroes the monthly array and breaks
the forecast. The per-invoice detail Greg exports today is the drill-down view of those
searches, which the connector does not expose.

Hence SuiteQL rather than saved searches.

---

## 7. Access request for Ted

Create a NetSuite integration role with:

- Token-based authentication (TBA), or OAuth 2.0 client credentials
- `SuiteAnalytics Workbook` / SuiteQL REST access
- **Read-only.** No create, edit, or delete permission on any transaction or entity record.
- Scoped to the four operating subsidiaries

The MCP connector currently in use exposes `ns_createRecord` and `ns_updateRecord`. A reporting
pipeline has no business holding write access. Please confirm the role excludes them.

---

## 8. Failure modes to guard

| Risk | Guard |
| --- | --- |
| Pinning on report or search titles | 693 reports include 67 duplicate titles, and there are 1,368 saved searches with heavy near-duplicate naming. Pin numeric or script IDs only, never titles. |
| Script-owned searches | Several searches are tagged `SCRIPT USE - DO NOT EDIT` or `FOR WORKFLOW DO NOT EDIT`. Never run or modify those from the pipeline. |
| Future-dated postings | September through December 2026 already carry posted expense (recurring amortization). Any actuals or annualization query needs a period fence, otherwise it overstates. The invoice query above is unaffected but sibling queries are not. |
| Silent LOB drift | Log the row count and period total per line every run. Alert when a closed-month total moves at all: closed months should be immutable. |
| New Location values | `Indianapolis` currently appears in the Multi-Family and Service data but is not in the 13-market list. Log unrecognized branch names rather than dropping them. |
| Partial page reads | The connector caps at 5,000 rows without pagination. Always read `totalResults` and `numberOfPages` and loop; never assume one page is the whole set. |

---

## 9. Interim state, until this is built

A scheduled task (`Feazel: daily NetSuite invoice pull`, trigger `trig_01TZ5mCyp98mkBJGc8hWfm1F`)
runs every morning at 06:30 ET. It executes the three queries, writes the CSVs in the format
above, delivers them to Greg, and writes them into the dashboard input folders on his Mac.

Limits of the interim path, and the reasons the permanent version is still worth building:

1. It runs in a hosted session, not on the Mac, so it depends on the desktop app being
   reachable to land files on disk.
2. It does not stage the Residential CSV into the `Forecasting Process` folder that
   `refresh_v5.py` reads. That folder is not currently shared with the session, so Greg still
   copies it across, or adds the folder.
3. It does not run `daily_refresh.sh`. Greg runs that himself, deliberately, so the drift gate
   and the V5 pass stay under human review.

---

## 10. Open items for Finance

1. **Definitional reconciliation.** Posted GL revenue on the four operating subsidiaries was
   $84.1M through July. That does not obviously map to the $185M enterprise target or to the
   $125.89M invoiced budget line carried in the dashboards. Three different definitions are in
   use and none of them has been reconciled. Ashton Lacaze to settle the basis.
2. **Closed-month detection.** `refresh_v5.py` still determines a closed month from
   `ns['Date'].max()`. Strictly a month is closed when its Period is finalized in NetSuite,
   which can lag the latest invoice date by a close cycle. Now that the pull is period-native,
   switching this is cheap. It needs Greg's approval because it touches locked behaviour.
3. **MMU.** No saved search in the account references MMU or mark-up, and V5 removed MMU on
   2026-04-30. Material mark-up is currently unmeasured in both systems. The only handles are
   `Item GAF Multiplier` and `Purchase Price and Base Price` at the item level.
