# Residential Revenue Forecast: Operating Rules

Owner: Greg Graven, COO, Feazel Roofing
Last revised: 2026-05-11 (required-sales MTD credit, Pass-1)
Audience: Claude agents and human collaborators working on Feazel residential revenue forecasting in any project context.

## Executive summary

This document defines how the Feazel residential revenue forecast is built, refreshed, and reconciled. It covers the two parallel pipelines (an HTML dashboard and a V5 Excel model), the source-of-truth rules for each input, the locked and unlocked methodology elements, the refresh protocol, and known reconciliation gaps. Anything not explicitly stated as locked is open to revision when fresh data warrants it. Anything explicitly locked stays locked until Greg approves a change in chat.

## 1. Business context

Feazel Roofing is a residential and commercial roofing platform across 13 markets (Columbus, Cincinnati, Cleveland, Dayton, Detroit, Grand Rapids, Nashville, Knoxville, DC Metro, Richmond, Raleigh, Charlotte, Greenville). Two lines of business: Residential (in-home sales, retail and insurance, plus DRP) and Commercial / Multi-Family. This rules file applies only to the Residential line.

2026 financial targets at the company level: $185M revenue, $22M EBITDA, $12M net income. Residential is the larger of the two LOBs and the focus of this forecast.

The forecast feeds Greg's weekly PE board book and informs branch-level operating decisions. Confidentiality treatment is described in Section 9.

## 2. Source files (canonical inputs)

The pipelines auto-detect the latest file matching each pattern in the uploads directory. File names use Salesforce report timestamps; the pipeline picks the most recently modified match.

### 2.1 Forecasting Report

Pattern: `Greg Forecasting Report*.xlsx` OR `Residential Forecasting Report*.xlsx` (the report was renamed in 2026-05; both patterns are accepted).
Source: Salesforce production report, exported by Greg or operations.
Granularity: One row per work order (jobs may appear multiple times).
Required columns: `Job Number`, `NetSuite Contract Number`, `Account Name`, `Contract Signed On Date`, `Created Date`, `Scheduled Start`, `Start Date`, `Date Moved to In Progress`, `Date Moved to Completed`, `Date Moved to Invoiced`, `Department`, `Job Type`, `Service Type`, `Billing Type`, `Record Type`, `Branch Location to Service`, `Final Contract Amount`, `Job Status`, `Job Sub-Status`, `Work Order Number`, `Status`, `Sub-Status`, `Service Object`, `Work Order Count`.
Filter applied: `Department == "Residential"`, drop rows missing Job Number, drop confidential / copyright placeholder rows.
Dedup rule: drop_duplicates on Job Number, keep first.
Used for: jobs, WIP timing, cycle times, same-month conversion, profitability matching, job-cohort cross-reference invoicing.
Not used for: invoiced revenue (since 2026-05-04, NetSuite is canonical for that, see Section 5.1).

### 2.2 Contracts Signed YTD

Pattern: `Contracts Signed YTD*.xlsx` (matches both the original `Contracts Signed YTD-*.xlsx` and the renamed `Contracts Signed YTD - Residential-*.xlsx`).
Source: Salesforce opportunities feed.
Granularity: One row per signed contract.
Required columns: `Department`, `Branch Location to Service`, `Opportunity Owner`, `Account Name`, `Opportunity Name`, `Stage`, `Sold Job Department`, `Amount $`, `Lead Source`, `Created Date`, `Date Moved to Sales Action Required`, `Date Moved to Pending PM Review`, `Contract signed on`.
Filter: `Contract signed on` in 2026.
Used for: YTD sales-created KPI, weekly sales rollup, Sales Projection tab, branch sales mix, lead-source breakdown, monthly sales targets.
Important: This file is the source of sales numbers. The Forecasting Report should never be used for sales-created.

### 2.3 Sold Not Processed (SNP)

Pattern: `Sold Not Processed*.xlsx`
Source: Salesforce opportunities filtered to signed-but-not-yet-in-production.
Granularity: One row per pending opportunity.
Required columns: `Opportunity Owner`, `Opportunity Name`, `Branch Location to Service`, `Amount $`, `Stage Duration`, `Last Stage Change Date`, `Type`, `Stage`.
Used for: pipeline tile, near-term invoicing forecast, V5 model's pipeline overlay, Pipeline & Branch tab.
Branch remap: `NOVA` → `DC Metro` (DC Metro consolidation effective 2026-04).

### 2.4 Greg Profitability Results

Pattern: `GregProfitabilityResults*.csv` OR `GregProfitabilityResResults*.csv` (the saved search filename has appeared in both spellings; both are accepted).
Source: NetSuite saved search export, GP/GM by job.
Granularity: One row per job (Internal ID), or `*` rows that mark Sales Effective Date cohorts.
Required columns: `Internal ID`, `Feazel Status`, `Date`, `Name`, `Document Number`, `Class`, `Location`, `Trade`, `Type`, `Primary Sales Rep`, `*`, `Contract Amount`, `Revenue (Stored)`, `Total Expenses (Stored)`, `Material Expenses (stored)`, `Labor Expenses (stored)`, `Other Expenses (stored)`, `Non-GL Expenses (stored)`, `Cap-Out Approved`, `Sales Effective Date`, `Commission (Rep 1)`, `Commission (Rep 2)`.
Filter: drop `Feazel Status == "Overall Total"`, then filter `Sales Effective Date.year == 2026`.
Used for: Profitability tab (GP/GM by class, location, trade), Budget Recovery Plan, gross margin KPIs.
Authority: Mahlet's confirmed numbers. Treat as authoritative for board reporting.

### 2.5 NetSuite Invoiced YTD (canonical for invoicing)

Pattern: `ResInvoicedYTDResults*.csv`
Source: NetSuite saved search filtered to AR Trade invoices on 40001 - Sales account, Residential subsidiary.
Granularity: One row per invoice transaction.
Required columns: `Internal ID`, `Order Type`, `*`, `Date`, `Location`, `Period`, `Type`, `Document Number`, `Name`, `Account`, `Memo`, `Amount`.
Filter: pipeline keeps Type == Invoice, all rows are typically Account `10101 Accounts Receivable : Accounts Receivable - Trade`.
Branch remap: Location `NOVA` → `DC Metro`.
Used for: YTD invoiced KPI, monthly invoiced (Apr Final, May MTD, etc.), V5 Excel `invoiced_ytd`, V5 Actual tab Jan-Apr 40001 - Sales overlay.
Adopted: 2026-05-04, replacing Forecasting Report-derived invoicing.
See Section 5.1 for source-of-truth rules.

### 2.6 Residential Budget 2026.xlsx

Pattern: literal name `Residential Budget 2026.xlsx`, lives in the working folder (not uploads).
Source: extracted from the company-wide `Budget 2026.xlsx` (residential block, rows for the residential subsidiary).
Sheets:
- `Budget`: header row with month labels (Jan 2026 ... Dec 2026), then `40001 - Sales`, `40003 - Sales:Work in Progress`, `Total - 40000 - Revenue`.
- `Actual`: same shape, populated only for closed months. Currently Jan-Apr (Jan-Mar from the original Budget 2026.xlsx ACT columns, April overlaid from NetSuite invoicing 2026-05-04).
Used for: V5 Excel pipeline (refresh_v5.py reads via the budget input).

### 2.7 wip_reference.pkl

Lives in the working folder.
Source: prior V5 calibration baseline, validated WIP timing constants.
Used for: V5 monthly WIP forecast (Section 6 of refresh_v5.py).
Treatment: read-only. Do not regenerate without approval (see Section 4 lock rules).

## 3. Outputs (deliverables)

### 3.1 HTML dashboard (Residential Revenue Forecast.html)

Built by `build_refresh_v2.py` (canonical pipeline since 2026-04-30).
Output filename: `Residential Revenue Forecast.html` (always this name, written to the working folder).
Tabs (12 total, IDs `tab0` through `tab11`):

0. Executive Summary: KPI tiles (YTD Sales Created, Invoiced YTD, 4-Week Avg Weekly Sales, Current Week Projected); active-month Revenue Forecast box (full-month forecast pulled from V5's `v5_forecast_summary.json`, MTD reference shown in footnote); active-month Sales (MTD) box; closed-month Final box; closed-month Sales (Closed) box; Budget vs Model Revenue chart; Job Type Impact table.
1. Sales Projection: weekly sales chart, weekly sales history table, by Lead Source.
2. Monthly Forecast: budget vs forecast by month with variance.
3. Budget Requirements: budget targets, what's needed.
4. Job Type Analysis: cycle and conversion by Insurance / Retail-Financing / Retail-No Financing.
5. Pipeline & Branch: SNP by branch, stage, type; current sales by branch.
6. Cycle Times: four-stage cycle (Signed → Created → In Progress → Completed → Invoiced), per job type.
7. Weekly Sales Targets: targets by week.
8. Production Metrics: invoiced jobs, WIP, avg job size.
9. Profitability: GP/GM by trade, class, location.
10. Budget Recovery Plan: shortfall recovery math.
11. Strategic Recommendations: carry-forward narrative.

Styling: governed by `DASHBOARD_STYLE_GUIDE.md` in the working folder. Brand banner embedded as base64. Page-shell + brand-bar + page-header structure. Tab nav uses `class="page-nav"`. Profitability and Budget Recovery tabs use the `kpi good` / `kpi crit` modifier classes for green/red emphasis (mandatory call-outs).

Subtitle format: `V5 Model with Job Type Analysis &bull; Data as of <Month DD, YYYY> &bull; Deduped by Job Number &bull; Cycle &amp; conversion unlocked`.

### 3.2 V5 Excel model (Revenue Forecast Model.xlsx)

Built by `refresh_v5.py` (data and modeling) followed by `build_excel_v5.py` (workbook formatting).
Output filename: `Revenue Forecast Model.xlsx`, written to the working folder.
Sheets (12):
1. Executive Summary
2. Sales Projection
3. Monthly Forecast
4. April-May Detail (current month + next month, deeper breakdown)
5. Job Type Analysis
6. Pipeline & Branch
7. Job Detail
8. Weekly Sales Targets
9. Production Metrics
10. Profitability
11. Budget Recovery Plan
12. Model Notes

Pipeline writes intermediate pickles (`v5_dashboard_data.pkl`, `v5_budget_solve.pkl`, `v5_forecast_detail.pkl`, `v5_hist_jobs.pkl`, `v5_conv_by_type.pkl`) consumed by `build_excel_v5.py`. Both scripts must run from the same working directory so relative pickle paths resolve.

`refresh_v5.py` also writes a small JSON bridge file `v5_forecast_summary.json` to the working folder. This contains the closed-month and active-month full-month forecasts that the HTML pipeline reads for the active-month Revenue Forecast box. See Section 7.4 for the schema.

## 4. Methodology (rules and locks)

### 4.1 Current state (as of 2026-05-08)

| Element | Source | Locked? | Notes |
|---|---|---|---|
| Cycle time hierarchy | YTD signed cohort, deduped | Unlocked 2026-04-30 | Recomputed each refresh, four stages |
| Same-month conversion | Sales-cohort YTD | Unlocked 2026-04-30 | Recomputed each refresh |
| WIP percent-complete | 0.75 (75%) | Locked | `PCT_COMPLETE = 0.75` in build_refresh_v2.py |
| MMU (material mark-up) | n/a | Removed entirely 2026-04-30 | Not in either pipeline |
| Closed-month invoiced (V5 overlay) | NetSuite | Auto-overlaid each refresh | Closed months are auto-detected: any month whose end date is strictly before max(NetSuite Date) is treated as closed. `actual_months` is populated dynamically. No more hardcoded month list. |
| WIP reference baseline | wip_reference.pkl | Locked | Conservative cycles, do not regenerate without approval |
| Branch consolidation | NOVA → DC Metro | Locked | Effective 2026-04 |
| Invoicing source of truth | NetSuite | Adopted 2026-05-04 | See Section 5.1 |

### 4.2 Lock change protocol

Anything in the locked column above stays locked until Greg approves a change explicitly in chat. If new uploaded data implies a different value for any locked constant, flag it in the response and do not silently update. This rule was set on 2026-04-19 and it still binds.

### 4.3 Methodology unlock history

- 2026-04-19: V5 methodology locked. WIP constants, cycle hierarchy, same-month conversion, MMU all frozen.
- 2026-04-30: V5 methodology unlocked. WIP/MMU/cycle/conversion no longer locked. MMU removed entirely. Cycle is now four-stage, recomputed YTD each refresh. Conversion is now sales-cohort YTD, recomputed each refresh.
- 2026-04-30: Pipeline ownership locked. `build_refresh_v2.py` is the canonical HTML build. Auto-globs latest inputs. Format locked, no surgical HTML edits.
- 2026-05-04: NetSuite invoicing CSV (`ResInvoicedYTDResults*.csv`) adopted as canonical source for invoiced revenue in both deliverables. April closed, May became active forecast month.
- 2026-05-04 (post-automation): `TODAY` in `build_refresh_v2.py` auto-set to today's calendar date. Subtitle "Data as of" auto-populates from max date across uploaded inputs. `_auto_overlay_netsuite_actuals()` added to `refresh_v5.py` so the Actual tab is recomputed each refresh from NetSuite, with closed months auto-detected. Closed-month lock generalized to whichever month is most recently closed.
- 2026-05-05: Glob patterns made flexible to handle source-system renames. `Greg Forecasting Report*` and `Residential Forecasting Report*` both accepted. `GregProfitabilityResults*` and `GregProfitabilityResResults*` both accepted. `Contracts Signed YTD*` continues to match including the `- Residential` suffix.
- 2026-05-05: Pipeline order locked V5-first. `refresh_v5.py` writes `v5_forecast_summary.json` containing closed-month and active-month full-month forecasts. `build_refresh_v2.py` reads that file and uses V5's full-month forecast in the active-month Revenue Forecast box (MTD shown in footnote). Standard refresh order is `refresh_v5.py` → `build_excel_v5.py` → `build_refresh_v2.py`.

### 4.4 Cycle time stages

Cycle is computed across four stages on the YTD signed cohort, deduped by Job Number:

1. Signed → Created (`Contract Signed On Date` to `Created Date`)
2. Created → In Progress (`Created Date` to `Date Moved to In Progress`)
3. In Progress → Complete (`Date Moved to In Progress` to `Date Moved to Completed`)
4. Complete → Invoiced (`Date Moved to Completed` to `Date Moved to Invoiced`)

Per stage, compute median, mean, and count over jobs with both endpoints populated and non-negative durations. Also compute the full Signed → Invoiced cycle. Per job type (Insurance, Retail-Financing, Retail-No Financing).

### 4.5 Same-month conversion

For every job in the YTD signed cohort with a populated Date Moved to Invoiced, mark `same = (signed_month == invoiced_month)`. Compute the rate per job type:
- `same_month_conv_all_ytd`: full YTD cohort (includes jobs signed in the current month, which haven't had time to invoice).
- `same_month_conv_mature`: cohort signed before the current month, more representative of true rate.

Both are reported in the dashboard.

### 4.6 WIP definitions (two of them, do not conflate)

- HTML dashboard WIP: 0.75 × FCA(jobs in progress or completed but not invoiced) at date X minus same at date Y. Job-cohort, empirical, used for the April Final and May Forecast tiles. PCT_COMPLETE = 0.75.
- V5 Excel WIP (40003): NetSuite GL movement on the 40003 - Sales:Work in Progress account. GL-anchored, used in the Excel model for budget vs forecast variance.

These two will not reconcile exactly. The HTML uses the empirical proxy because there is no NetSuite WIP movement file currently available. If Mahlet provides one, swap the V5 overlay accordingly and consider switching the HTML proxy.

### 4.7 April overlay note

The V5 Actual tab April 40003 (WIP) value currently uses the FR 75% pct-complete proxy (-$204K) until a NetSuite GL WIP movement file is supplied. Flag this as a known approximation.

## 5. Source-of-truth rules

### 5.1 Invoiced revenue

NetSuite `ResInvoicedYTDResults*.csv` is canonical for invoiced revenue in both deliverables, effective 2026-05-04. Do not derive invoicing from the Forecasting Report. The Forecasting Report's `Date Moved to Invoiced` column reflects the Salesforce production-stage transition, which lags or leads NetSuite invoice issuance by hours to days. Salesforce stage transition counts also miss partial billings, change orders, and AJEs that NetSuite captures.

Reconciliation example as of 2026-05-04:
- NetSuite YTD invoiced: $20.92M (1,151 invoices)
- FR-derived YTD invoiced: $20.15M (deduped by Job Number)
- Delta: +$776K (NetSuite higher)

The delta is structural and does not need to be reconciled away. It just needs to be documented when reporting.

### 5.2 Sales-created

Contracts Signed YTD is the canonical source for sales-created. The Forecasting Report's contracts signed cohort will undercount because it filters out non-residential and dedupes by Job Number, while Contracts Signed includes every signed opportunity.

### 5.3 Profitability

Mahlet's `GregProfitabilityResults*.csv` is canonical for GP/GM. Treat as authoritative for board reporting.

### 5.4 Budget

`Residential Budget 2026.xlsx` (extracted from the company-wide Budget 2026.xlsx residential block) is the canonical residential budget. The `Budget` sheet holds the original budget. The `Actual` sheet holds month-by-month actuals; the V5 pipeline overlays Actual values onto the budget for closed months.

## 6. Refresh protocol

### 6.1 Triggering a refresh

A refresh is triggered when any of the following arrive:
- New `Greg Forecasting Report*.xlsx`
- New `Contracts Signed YTD*.xlsx`
- New `Sold Not Processed*.xlsx`
- New `GregProfitabilityResults*.csv`
- New `ResInvoicedYTDResults*.csv`
- New `Budget 2026.xlsx` (rare)

A partial refresh is fine: any subset of these may arrive. Files not refreshed carry their prior values forward; note "carried forward" in the chat response, not in the dashboard.

### 6.2 Auto-detection

Both pipelines auto-glob the latest matching file from the uploads directory by mtime. Do not specify file names manually unless overriding via `forecast_config.json`.

### 6.3 Standard refresh sequence

V5 must run before HTML so the HTML can read the V5 full-month forecast bridge (`v5_forecast_summary.json`).

1. Read each new file with pandas, confirm column-to-tab mapping matches Section 2.
2. Run V5 pipeline: `python3 refresh_v5.py`. Outputs intermediate pickles, `v5_forecast_summary.json` (working folder), and overlays the Actual tab from NetSuite automatically.
3. Build the V5 Excel: `python3 build_excel_v5.py`. Output: `Revenue Forecast Model.xlsx`.
4. Build the HTML dashboard: `python3 build_refresh_v2.py`. Reads `v5_forecast_summary.json` for the active-month full-month forecast in the Tab 0 box. Output: `Residential Revenue Forecast.html`.
5. Verify outputs (Section 6.5).
6. Surface KPIs to Greg in chat. Confidentiality rule: do not include Profitability or Budget Recovery numbers in chat (see Section 9). Embed them in the HTML, confirm regeneration is complete.

### 6.4 Subtitle date

Update the subtitle's data-as-of date in build_refresh_v2.py to the most recent date across all uploaded files. Keep the rest of the subtitle string identical to the prior version.

### 6.5 Verification checks

After each refresh:
- HTML: 12 tabs present (`onclick="showTab(0)"` through `showTab(11)`); subtitle updated; KPI tiles populated; no `NaN`, `None,`, `Traceback`, `undefined`, `[object Object]`, or `Error:` markers in the file; brand banner present; `class="page-shell"` and `class="brand-bar"` present.
- Excel: 12 sheets present; April locked to NetSuite actual; May has a forecast value; full-year Budget vs Model variance computed; SNP count matches the input file count.
- Cross-deliverable: April Final invoiced, April Net Revenue, and Q2 variance should match between HTML and Excel within rounding ($1K). YTD Invoiced should match exactly (both pull from NetSuite CSV).

### 6.6 Charts and configs

Keep all chart configurations (axes, color palette, legends) identical to the prior version when refreshing. Do not redesign charts as part of a data refresh.

## 7. Pipelines (technical detail)

### 7.1 build_refresh_v2.py

Path: `<working folder>/build_refresh_v2.py`.
Constants:
- `WORK`: resolved from the script's own location (`Path(__file__).resolve().parent`) when the script lives in the working folder. Falls back to a session-bearing path if needed.
- `UP`: derived as `WORK.parent / "uploads"` when present.
- `TODAY = datetime(*datetime.now().timetuple()[:3])` — auto-set to today's calendar date each run. No manual patching needed across sessions.
- `DATA_AS_OF`: max date across the latest NetSuite invoicing CSV's Date column and the Forecasting Report's `Date Moved to Invoiced`. Drives the dashboard subtitle ("Data as of <Month D, YYYY>").
- `PCT_COMPLETE = 0.75` (locked WIP scaling factor).

The `latest()` helper picks the newest matching file by mtime in `UP`. Cross-session resilience: the path-resolution preamble lets the same script run in any Cowork session without a manual edit.

Key sections:
1. Load and dedupe (Forecasting Report, Contracts, SNP, Profitability, NetSuite invoicing). Forecasting Report glob accepts both `Greg Forecasting Report*` and `Residential Forecasting Report*`. Profitability glob accepts both `GregProfitabilityResults*` and `GregProfitabilityResResults*`.
2. Optionally read `v5_forecast_summary.json` from the working folder. If present, use V5's active-month full-month forecast values in the Tab 0 active-month box (with MTD shown in the footnote). If absent, fall back to MTD-only display.
3. Compute metrics (YTD invoiced from NetSuite, sales from Contracts Signed, weekly rollup, slope, MTD invoiced for active month, WIP at month-end snapshots).
4. Format helpers, methodology JSON dump, KPI computations.
5. Per-tab HTML generation (Tab 0 through Tab 11).
6. Final subtitle string and HTML write.

Output: writes `Residential Revenue Forecast.html` (~740KB with embedded base64 banner).

### 7.2 refresh_v5.py

Path: `<working folder>/refresh_v5.py`.
Reads:
- Forecasting Report: glob `*Forecasting Report*.xlsx` (matches both Greg and Residential variants).
- SNP: glob `*Sold Not Processed*.xlsx`.
- Contracts Signed YTD: glob `*Contracts Signed*.xlsx`.
- Budget: `Residential Budget 2026.xlsx` (working folder), passed via `forecast_config.json` or auto-detected as `*Residential Budget*.xlsx` or `*Budget*.xlsx` in uploads.
- Profitability: glob set `*Profitability*Results*.csv|xlsx|xls` (optional, picked up if present).
- NetSuite invoicing: `ResInvoicedYTDResults*.csv` from uploads. Used to override `invoiced_ytd`, auto-overlay the Actual tab Jan-through-closed-month 40001 - Sales values, and lock those months in the model.

Config file: `forecast_config.json` may be placed in the working directory to override file paths. Schema:
```json
{
  "forecast_report": "<absolute path>",
  "snp": "<absolute path>",
  "contracts_ytd": "<absolute path>",
  "budget": "<absolute path>",
  "profitability": "<absolute path>",
  "date": "YYYY-MM-DD"
}
```

Stage flow:
1. Load raw data, dedupe, branch remap.
2. Build cycle times by Job Type and Trade Count.
3. Build active pipeline (NS = Not Started, IP = In Progress, Comp = Completed but not Invoiced).
4. Forecast with cycle-time conversion curves.
5. Solve budget requirements (least-squares match between model output and budget).
5b. Seasonal sales projection (uses 2025 weekly pattern as proxy).
5c. Weekly sales and production targets.
5d. Budget recovery plan (shortfall and recovery ratio).
6. Monthly WIP forecast (uses wip_reference.pkl). Lock April to actuals here when overlay applied.
7. Strategic analysis.
8. Pickle dump.

`actual_months`: dynamic. The script auto-detects closed months from NetSuite each refresh via `_auto_overlay_netsuite_actuals()` (helper added 2026-05-04). A month is considered closed when its month-end date is strictly before `max(NetSuite Date)`. The auto-overlay function writes the NetSuite invoicing total into `actuals_tab` (in memory) for each closed month, preserving the existing 40003 WIP value. `actual_months` is then set to the sorted list of auto-detected closed months.

Closed-month lock override (formerly the "April-lock"): now generalized. The block looks at the most recently closed month in `actual_months`, looks up its index via `_MONTHS_INDEX`, and writes the locked values into `total_inv_apr`, `wip_change_apr`, `net_rev_apr`, `actual_invoiced_apr`, and `rev_model[<index>]`. Earlier closed months also get their `rev_model[<index>]` locked so the model's monthly path matches NetSuite truth for any month already closed.

Note on naming: the "apr_" variable prefix is historical (V5 was originally written when April was the just-closed month). After this refactor those names actually mean "the most recently closed month from V5 perspective." When TODAY rolls into June and May closes, May becomes the locked month and inherits the "apr_" variable values. A future refactor should rename these to `prev_month_*` and `cur_month_*` for clarity.

### 7.3 build_excel_v5.py

Path: `<working folder>/build_excel_v5.py`.
Reads pickles produced by refresh_v5.py.
Writes: `mnt/Forecasting Process/Revenue Forecast Model.xlsx`.

Styling: Arial font, blue (#2F5496) headers, green (#E2EFDA) actual fills, red (#FCE4EC) warn fills, yellow (#FFF2CC) highlight fills. Currency format `$#,##0;($#,##0);"-"`. Percent format `0.0%`. Ratio format `0.00"x"`.

### 7.4 v5_forecast_summary.json bridge file

Written by `refresh_v5.py` at the end of its run, into the working folder. Read by `build_refresh_v2.py` at startup. Schema:

```json
{
  "as_of": "YYYY-MM-DD",
  "closed_month_label": "Apr 2026",
  "closed_month_inv_total": 8413545.0,
  "closed_month_wip_change": -204234.75,
  "closed_month_net_rev": 8209310.21,
  "active_month_inv_total_full_month": 13825533.02,
  "active_month_wip_change_full_month": 232525.68,
  "active_month_net_rev_full_month": 14058058.70,
  "invoiced_ytd": 21074795.39,
  "budget_full_year": 121880929.71,
  "model_full_year": 120611720.27
}
```

The HTML uses `active_month_*_full_month` for the Tab 0 active-month Revenue Forecast box. Closed-month values are also available for cross-checking. If the file is absent, the HTML falls back to MTD-only display in the active-month box and prints a note in the footer.

### 7.5 Working folder layout

```
<working folder>/
  build_refresh_v2.py             # canonical HTML pipeline
  refresh_v5.py                   # V5 data/modeling pipeline
  build_excel_v5.py               # V5 Excel formatter
  build_dashboard_v5.py           # legacy V5 HTML (superseded by build_refresh_v2.py)
  run_forecast.py                 # legacy entry point (rarely used)
  build_methodology.js            # legacy methodology JS (not used by build_refresh_v2.py)
  Residential Budget 2026.xlsx    # extracted residential block from company budget
  Residential Revenue Forecast.html # HTML output
  Revenue Forecast Model.xlsx     # Excel output
  Topline Forecasting - 4.03.26.xlsx # legacy budget reference
  Monthly Revenue Summary.xlsx    # legacy monthly summary
  brand_banner.png                # banner image (base64 embedded into HTML)
  wip_reference.pkl               # locked WIP baseline
  v5_*.pkl                        # intermediate pickles (regenerated each refresh)
  v5_forecast_summary.json        # JSON bridge from V5 to HTML (see Section 7.4)
  DASHBOARD_STYLE_GUIDE.md        # mandatory dashboard styling rules
  FORECASTING_RULES.md            # this file
```

## 8. Maintenance procedures

### 8.1 Refreshing the Residential Budget Actual tab

This is now automatic. `refresh_v5.py` calls `_auto_overlay_netsuite_actuals()` every run, which reads the latest `ResInvoicedYTDResults*.csv` from uploads, identifies closed months by comparing each month-end against the NetSuite max Date, and writes the NetSuite invoicing totals into the Actual tab DataFrame in memory. The on-disk `Residential Budget 2026.xlsx` does not need to be manually edited each refresh; the in-memory overlay drives the V5 budget overlay logic in the same run.

The on-disk Actual tab still holds the most recent manually-set values as a fallback, so if the NetSuite CSV is missing for some reason, V5 falls back to whatever is in the file.

WIP values (40003) in the Actual tab continue to come from the FR 75% pct-complete proxy. Replace with NetSuite 40003 GL movements when the extract becomes available.

### 8.2 Closing a month

The V5 side is mostly automatic now. As long as a fresh NetSuite invoicing CSV is uploaded and includes a Date past the prior month's end, the auto-overlay picks the new month up as closed and the closed-month lock applies to it.

Manual steps still required:
1. Update `build_refresh_v2.py` Tab 0 to relabel the prior "Active" month box as "Final (Closed)" and create a new "Active" box for the next month. The HTML pipeline does not auto-detect the active month yet (the box labels are hardcoded in the t0 builder). Pattern: rename "May 2026 Revenue Forecast (Active)" to "May 2026 Final (Closed)" and add a new "Jun 2026 Revenue Forecast (Active)" card with `jun_inv`, `jun_wip_net`, `jun_net_revenue` variables computed analogous to May.
2. Re-run both pipelines and confirm the two deliverables agree on the newly-closed month within rounding.

Future enhancement: make the HTML active-month boxes dynamic too, so the only required manual step at month-close is uploading the new NetSuite CSV.

### 8.3 Adding a new tab

Both deliverables have 12 tabs and that count is locked. If a new analysis is needed:
- For HTML: replace an existing tab's content rather than adding tab 12. Update the tab nav and `showTab` handlers.
- For Excel: add a sheet to build_excel_v5.py and update the tabs list. New sheets need column widths, headers, data writes; reuse the helper functions in build_excel_v5.py (`write_header_row`, `write_data_row`, `section_hdr`).

### 8.4 Branch remap changes

Branch consolidations affect every pipeline. Update the remap dict everywhere it appears (currently `{"NOVA":"DC Metro"}` in refresh_v5.py and build_refresh_v2.py applied to the NetSuite CSV Location field). Add a memory note when consolidation effective date changes.

### 8.5 Adding a new input file pattern

1. Add a new `latest()` call in build_refresh_v2.py after the existing block.
2. Add corresponding logic in refresh_v5.py if relevant to the V5 model.
3. Document the file pattern, source, columns, dedup rule, and use in Section 2 of this doc.

## 9. Confidentiality

### 9.1 Sensitivity tiers

- Public-equivalent (safe to share with internal collaborators): methodology, file conventions, refresh process.
- Confidential (do not share without authorization): YTD revenue figures, monthly invoiced totals, budget vs forecast variance, branch-level sales, sales rep names.
- Highly confidential (board-only): GP/GM by class, profitability by location, Budget Recovery Plan numbers, individual carrier DRP metrics, personnel personality reads.

### 9.2 Chat handling

When responding to Greg in chat:
- Profitability and Budget Recovery numbers go into the dashboard / Excel only. Do not surface in chat unless Greg explicitly asks.
- Just confirm regeneration is complete and surface high-level KPIs (YTD sales, YTD invoiced, monthly variance directionally).
- Personnel and carrier-relationship details (Matt Sherry's transition, DRP carrier SLAs, Justin Hook / Ron Hart involvement) are confidential by default.

### 9.3 File-handling

The HTML and Excel outputs both contain confidential numbers. Treat them as confidential at rest. Do not check into public repos or share via public channels.

## 10. Reconciliation protocols

### 10.1 NetSuite vs Forecasting Report invoicing

Expected delta: NetSuite is +$30K to +$600K higher per month vs FR-derived (deduped). Direction can flip in the current month if FR has a stage-transition lead. Treat NetSuite as truth.

### 10.2 HTML vs V5 Excel

Expected differences (by design, not a bug):
- May invoiced: HTML = MTD from NetSuite (small early in the month); Excel = full-month forecast from V5 model. They should not match.
- April invoiced: should match exactly (both are NetSuite locked actuals).
- YTD invoiced: should match exactly (both are NetSuite YTD).
- WIP delta for April: HTML uses 0.75 × FCA proxy; Excel uses GL-style movement. Different but related; expect deltas of $50K-$300K.
- Cycle times: HTML shows medians per stage; Excel shows means in some places. Not a bug.

### 10.3 Sales-created (Contracts Signed) vs Forecasting Report

Contracts Signed is the source. The FR's contracts cohort is a different population (deduped, residential-only, excludes some pipeline stages) and undercounts. Do not reconcile; they answer different questions.

## 11. Known gaps and open issues

1. NetSuite WIP movement (40003 GL) extract is not yet available. Mahlet may have one. The FR 75% pct-complete proxy is a stand-in for both the HTML April Final card and the V5 Actual tab 40003 row.
2. Active-month MTD invoiced number in the HTML can swing 25-50% within a single trading day as NetSuite catches up to Salesforce stage transitions. Refresh frequency should match Greg's reporting cadence.
3. The legacy `build_dashboard_v5.py` and `Topline Forecasting - 4.03.26.xlsx` files in the working folder are not used by the canonical pipeline. They can be archived but doing so requires Greg's approval.
4. The wip_reference.pkl baseline was calibrated before the 2026-04-30 unlock. Once a few more closed months are available, recalibrate against actuals.
5. Branch remap dictionary is duplicated across pipelines. A future cleanup should centralize it. Not urgent.
6. V5 internal variable names (`total_inv_apr`, `wip_change_apr`, `inv_may`, etc.) are historical: they actually mean "previous closed month" and "current active month" relative to TODAY. After two more month-closes, refactor to `prev_month_*` and `cur_month_*` for clarity.
7. The HTML Tab 0 active-month and previous-month box labels and variable names are still hardcoded (May / April). When May closes, Tab 0 needs a manual edit. Roughly 25 lines of the t0 builder. Future enhancement: derive from TODAY.
8. **Required-sales Pass-2 (structural fix, deferred)**: The current model's `S_known` lumps all of `snp_total` into the April slot (as `apr_with_snp = S_apr + snp_total`). This means May-signed contracts that are now in SNP get attributed to April vintage, not May. The Pass-1 fix (added 2026-05-11) credits current-month MTD actuals against `required_sales` post-hoc via `remaining_required_sales`, but it does not re-architect `S_known`. The full structural fix requires re-attributing SNP by signing month so MTD can be added to `S_known` without double-counting. Defer until Q3 unless required-sales numbers begin to diverge materially from operating reality.

## 12. Glossary

- ABC: ABC Supply (a major roofing materials supplier).
- AJE: Adjusting Journal Entry.
- Backlog: signed contracts in production but not yet invoiced.
- DRP: Direct Repair Program (insurance carrier partnership; West Hill is the partner; covers Travelers, Hartford, State Farm).
- FCA: Final Contract Amount.
- FR: Forecasting Report (`Greg Forecasting Report*.xlsx`).
- GP / GM: Gross Profit / Gross Margin.
- HDZ: GAF Timberline HDZ shingles.
- LOB: Line of Business.
- MMU: Material Mark-Up (supplier credit). Removed from methodology 2026-04-30.
- MTD: Month To Date.
- NS: NetSuite, or in pipeline-stage context, Not Started.
- Pipeline: contracts signed but not yet in production.
- SED: Sales Effective Date (NetSuite cohort field).
- SNP: Sold Not Processed (the file pattern).
- SRS: SRS Distribution (a major roofing materials supplier).
- WIP: Work In Progress.
- WTD: Week To Date.
- Y / YTD: Year / Year To Date.

## 13. Change log

- 2026-05-11: Required-sales MTD-credit fix (Pass-1). `refresh_v5.py` now computes `remaining_required_sales` by subtracting current-month MTD actual sales from `required_sales` for the active month, and zeroing the closed months. Exposed via `v5_forecast_summary.json` fields `required_sales`, `remaining_required_sales`, `cur_month_idx`, `cur_month_label`, `cur_month_mtd_actual`. HTML Tab 3 (Budget Requirements) now reads V5 live values when present and shows full target / MTD / remaining side by side. HTML Tab 7 (Weekly Sales Targets) computes the implied weekly target as `remaining_required_sales[cur_month] ÷ weeks_left_in_month`. Excel "Monthly Forecast" tab adds three new rows: "Remaining Required Sales (MTD-Credited)", "Active-Month MTD Actual", and "Required Weekly Sales (from Remaining)". Pass-2 (structural fix that re-architects SNP-by-signing-month) is documented in Section 11 gap #8 and is deferred.
- 2026-05-08: Glob patterns made flexible to handle source-system renames (`Greg Forecasting Report*` and `Residential Forecasting Report*` both accepted; `GregProfitabilityResults*` and `GregProfitabilityResResults*` both accepted; `Contracts Signed YTD*` continues to match the `- Residential` suffix variant). Pipeline order locked V5-first. `refresh_v5.py` writes `v5_forecast_summary.json` with closed-month and active-month full-month forecasts. `build_refresh_v2.py` reads that file and uses V5's full-month forecast in the active-month Revenue Forecast box on Tab 0; MTD remains visible in the footnote.
- 2026-05-04 (post-automation): TODAY in build_refresh_v2.py auto-set to today's calendar date (no manual patch). Subtitle "Data as of" auto-populated from max date across uploaded inputs. V5 auto-overlay function `_auto_overlay_netsuite_actuals()` added — the Actual tab is recomputed each refresh from the latest NetSuite CSV, with closed months auto-detected. The closed-month lock block generalized to whichever month is the most recently closed (no longer hardcoded to April). WORK and UP paths derived from script location for cross-session resilience.
- 2026-05-04: NetSuite invoicing CSV adopted as canonical for invoiced revenue. April closed and locked. May became active forecast month. April overlay added to V5 Actual tab and to refresh_v5.py `actual_months` list. April-lock override block added to refresh_v5.py.
- 2026-04-30: Methodology unlocked (cycle, conversion, MMU). MMU removed entirely. Cycle four-stage YTD. Conversion sales-cohort YTD. Pipeline ownership locked to build_refresh_v2.py.
- 2026-04-19: V5 methodology locked. Initial constants frozen.
