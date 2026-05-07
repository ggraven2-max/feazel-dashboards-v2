# Service Calls YTD — RULES (Service-v1)

> **Owners:** Greg Graven (COO), Jeff Craft (National Director of Service), Scott Nowell (Director of CX)
> **Methodology version:** Service-Calls-v1.1 (header-based column lookup, 2026-05-07)
> **Calculator file:** `calculators/service-calls.js`

---

## What this dashboard answers

How many service calls Feazel ran YTD, who ran them, where, for which accounts, and where the productivity outliers and aging concerns are. It is the operating dashboard for Jeff Craft and the Service desk; it complements the Service Revenue Forecast (which is finance-anchored) by being execution-anchored.

---

## Operating definitions (LOCKED Service-Calls-v1)

1. **Appointment grain.** One row per Service Appointment in the Salesforce export. The calculator aggregates up to Work Order, Tech, Branch, and Account.
2. **Hours measure.** Sum of `Actual Duration (Minutes)` ÷ 60. Appointments without an `Actual End` are excluded from the hours total but counted as "Open Appointments" so we can flag the data-hygiene gap.
3. **Billable Man-Hours.** Sum of the `Billable Time` column. This is laborers × hours billed and does NOT equal `hours × # Laborers` exactly because billable time is what was charged, not what was clocked.
4. **Network bill ratio.** `Total Billable / Total Hours`. A ratio of ~1.4x is typical (1 person + change). Ratios > 2x suggest oversized crews; ratios < 1x suggest under-billing.
5. **Aging thresholds.**
    - In Progress ≥ 14 days: flagged in Aging tab (service work normally moves fast)
    - Multi-touch WO: 3+ appointments on the same WO
    - Stuck WO (legacy): ≥ 60-day span across multiple appointments on the same WO
    - Disproportionate hours: contract ≥ $200, hours ≥ 5, hours-per-$100-of-contract ≥ 3
6. **Branch normalization.** `Detroit Metro` → `Detroit`, `NOVA` → `DC Metro`. Same conventions as the rest of the suite.
7. **Tech outlier benchmarks.** Bill-ratio outlier flagged when a tech's ratio exceeds 1.4 × network average AND the tech has ≥ 30 appointments. Avg-minutes outlier flagged at 1.5 × network average AND ≥ 50 appointments. Volume thresholds prevent false positives from low-sample techs.

Changes to thresholds require sign-off from Greg + Jeff and a snapshot test refresh.

---

## Required inputs (drop in this folder)

| File pattern | What it is | Source |
|---|---|---|
| `Service Appointments YTD*.xlsx` | Salesforce Service Appointments export | Salesforce report, all FY 2026 appointments |

The calculator looks up columns by **header name**, not by position, so column reordering in the Salesforce report does not break the build. If a required column is renamed or removed, the calculator throws with the missing column list and the headers it actually saw.

### Required columns (case-insensitive header match)

- `Primary Resource: Name`
- `Account: Account Name`
- `Job Number` (or legacy alias `Job`)
- `Service Type` (Repair, Maintenance, etc.)
- `Final Contract Amount`
- `Work Order Number`
- `# Laborers`
- `Billable Time`
- `Actual Start`
- `Actual End`
- `Actual Duration (Minutes)`
- `Branch Location to Service`

### Optional columns

- `Appointment Number` (older exports had this; current ones do not). If present, surfaced in the Appointments and Long Appointments tables. If absent, those tables omit the column.

### Sibling lookup: Jobs with WOs and SAs

The Aging tab also reads the `All Jobs with WOs and SAs*.xlsx` file from the **sibling** `inputs/service/revenue-forecast/` folder so we can show WO-level Status and Days in Status. If that file is missing, the In Progress 14+ Days and Not Started Aged sections degrade to empty.

The sibling file's expected columns: `Account: Account Name`, `Days in Status`, `Status`, `Sub-Status`, `Service Type`, `Service Object`, `Work Order Number`, `Branch Location to Service`, `Final Contract Amount`, `Service Appointment Start Date/Time`, `Contract Signed On Date`.

---

## What the calculator computes

For each FY 2026 month:

```
appointments[M] = count of rows where Actual Start ∈ month M
hours[M]        = Σ Actual Duration / 60 where Actual Start ∈ month M
billable[M]     = Σ Billable Time where Actual Start ∈ month M
contract[M]     = Σ Final Contract Amount where Actual Start ∈ month M
```

Per Tech, Per Branch, Per Account:

```
count, hours, billable, contract, avg minutes per appointment, bill ratio
```

Aging:

```
in_progress_14_plus = WOs from sibling Jobs/WOs/SAs file where Status='In Progress' AND Days in Status >= 14
not_started_aged    = WOs from sibling file where Status in {New, Ready to Schedule, Scheduled, Pending Estimate Approval, On Hold, Pending Insurance Claim, Pending Sales}, sorted by Days in Status
multi_touch         = WOs with 3+ appointments
disproportionate    = WOs where contract >= $200 AND hours >= 5 AND hours per $100 of contract >= 3
```

---

## Sanity-check guardrails

The calculator surfaces warnings (in the build log) for:

- **Missing required columns.** Hard fail with the missing list and the headers actually present. This was the v1.0 silent-zero bug; v1.1 makes it impossible.
- **Open appointments.** When `aptsOpen > 0`, the Findings tab notes that some appointments have no Actual End, which is either work-in-progress or a Salesforce hygiene issue.
- **Low single-visit close rate.** When average appointments per WO drops below 1.3x, that is surfaced as a positive (most tickets close in one visit).

---

## Versioning

This is **Service-Calls-v1.1**. The v1.0 version used positional column lookup which silently emitted zeros when Salesforce reordered columns in the export (caught 2026-05-07). v1.1 moves to header-based lookup and fails loudly on missing columns.

Future versions will likely add:

- **v1.2:** First-time-fix-rate metric (appointments per WO, sliced by Service Type)
- **v1.3:** Tech performance scorecard with the bill-ratio + min-per-appt + close-rate combined into a single rank
- **v2:** Cross-link to the Salesforce.com customer record so we can group accounts that have multiple Salesforce Account IDs (a common data-hygiene issue, especially for property-management clients)

---

## Out of scope (intentional)

- Cost mix and gross profit per appointment (no per-appointment cost columns; lives in `GregProfitabilityServiceResults*.csv` rolled up to the job)
- Forecasted appointment volume (no model; Service appointments are demand-driven)
- Customer satisfaction / NPS (lives in CX systems, not in the Salesforce service object today)

---

## Source-of-truth rules

The Salesforce Service Appointments export is canonical for the operating dashboard. Hours, billable time, and tech attribution all come from it.

NetSuite (`ServiceInvoicedYTDResults*.csv`, in the sibling revenue-forecast folder) is canonical for revenue. The two will not exactly reconcile (Salesforce contract amounts on appointments do not equal NetSuite invoiced totals because of partial billing, change orders, and cross-month posting). The dashboard reports both numbers honestly without forcing a tie.
