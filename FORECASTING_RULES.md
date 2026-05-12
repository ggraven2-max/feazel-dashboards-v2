# Residential Revenue Forecast: Operating Rules

Owner: Greg Graven, COO, Feazel Roofing
Last revised: 2026-05-11
Audience: Claude agents and human collaborators working on Feazel residential revenue forecasting in any project context.

## Executive summary

This document defines how the Feazel residential revenue forecast is built, refreshed, and reconciled. It covers the two parallel pipelines (an HTML dashboard and a V5 Excel model), the source-of-truth rules for each input, the locked and dynamically-computed methodology elements, the refresh protocol, and known reconciliation gaps. As of 2026-05-11, almost every previously-hardcoded methodology constant has been moved to a data-derived value that recomputes each refresh. The exceptions are explicitly listed in the methodology table. Anything not flagged as locked is open to revision when fresh data warrants it. Anything explicitly locked stays locked until Greg approves a change in chat.

## 1. Business context

Feazel Roofing operates across 13 markets (Columbus, Cincinnati, Cleveland, Dayton, Detroit, Grand Rapids, Nashville, Knoxville, DC Metro, Richmond, Raleigh, Charlotte, Greenville). Two lines of business: Residential (in-home sales, retail and insurance, plus DRP) and Commercial / Multi-Family. This rules file applies only to the Residential line.

2026 financial targets at the company level: $185M revenue, $22M EBITDA, $12M net income. Residential is the larger of the two LOBs and the focus of this forecast.

The forecast feeds Greg's weekly PE board book and informs branch-level operating decisions. Confidentiality treatment is described in Section 10.

## 2. Source files (canonical inputs)

Both pipelines auto-detect the latest file matching each pattern in the uploads directory. File names use Salesforce or NetSuite report timestamps; the pipeline picks the most recently modified match.

### 2.1 Forecasting Report

Pattern: `Greg Forecasting Report*.xlsx` OR `Residential Forecasting Report*.xlsx` (the report was renamed in 2026-05; both patterns are accepted).
Source: Salesforce production report, exported by Greg or operations.
Granularity: One row per work order (jobs may appear multiple times).
Required columns: `Job Number`, `NetSuite Contract Number`, `Account Name`, `Contract Signed On Date`, `Created Date`, `Scheduled Start`, `Start Date`, `Date Moved to In Progress`, `Date Moved to Completed`, `Date Moved to Invoiced`, `Department`, `Job Type`, `Service Type`, `Billing Type`, `Record Type`, `Branch Location to Service`, `Final Contract Amount`, `Job Status`, `Job Sub-Status`, `Work Order Number`, `Status`, `Sub-Status`, `Service Object`, `Work Order Count`.
Filter applied: `Department == "Residential"`, drop rows missing Job Number, drop confidential / copyright placeholder rows.
Dedup rule: drop_duplicates on Job Number, keep first.
Used for: jobs, WIP timing, cycle times, same-month conversion, profitability matching, job-cohort cross-reference invoicing, observed percent-of-completion, MTD sales actuals, 2025 historical sales (for `S_known` Oct/Nov/Dec 2025 slots).
Not used for: invoiced revenue (NetSuite is canonical for that; see Section 6.1).

### 2.2 Contracts Signed YTD

Pattern: `Contracts Signed YTD*.xlsx` (matches both the original `Contracts Signed YTD-*.xlsx` and the renamed `Contracts Signed YTD - Residential-*.xlsx`).
Source: Salesforce opportunities feed.
Granularity: One row per signed contract.
Required columns: `Department`, `Branch Location to Service`, `Opportunity Owner`, `Account Name`, `Opportunity Name`, `Stage`, `Sold Job Department`, `Amount $`, `Lead Source`, `Created Date`, `Date Moved to Sales Action Required`, `Date Moved to Pending PM Review`, `Contract signed on`.
Filter: `Contract signed on` in 2026.
Used for: YTD sales-created KPI, weekly sales rollup, Sales Projection tab, branch sales mix, lead-source breakdown, monthly sales targets.
Important: This file is the source of sales numbers. The Forecasting Report should not be used for sales-created in the dashboard, though it is used in V5 for `actual_sales` by month (different cohort definition).

### 2.3 Sold Not Processed (SNP)

Pattern: `Sold Not Processed*.xlsx`
Source: Salesforce opportunities filtered to signed-but-not-yet-in-production.
Granularity: One row per pending opportunity.
Required columns: `Opportunity Owner`, `Opportunity Name`, `Branch Location to Service`, `Amount $`, `Stage Duration`, `Last Stage Change Date`, `Type`, `Stage`.
Used for: pipeline tile, near-term invoicing forecast, V5 model's pipeline overlay, Pipeline & Branch tab.
Branch remap: `NOVA` → `DC Metro` (DC Metro consolidation effective 2026-04).

### 2.4 Profitability Results

Pattern: `GregProfitabilityResults*.csv` OR `GregProfitabilityResResults*.csv` (the saved search filename has appeared in both spellings; both are accepted).
Source: NetSuite saved search export, GP/GM by job.
Granularity: One row per job (Internal ID), or `*` rows that mark Sales Effective Date cohorts.
Required columns: `Internal ID`, `Feazel Status`, `Date`, `Name`, `Document Number`, `Class`, `Location`, `Trade`, `Type`, `Primary Sales Rep`, `*`, `Contract Amount`, `Revenue (Stored)`, `Total Expenses (Stored)`, `Material Expenses (stored)`, `Labor Expenses (stored)`, `Other Expenses (stored)`, `Non-GL Expenses (stored)`, `Cap-Out Approved`, `Sales Effective Date`, `Commission (Rep 1)`, `Commission (Rep 2)`.
Filter: drop `Feazel Status == "Overall Total"`, then filter `Sales Effective Date.year == 2026`.
Used for: Profitability tab (GP/GM by class, location, trade), Budget Recovery Plan, gross margin KPIs, dynamic `MARGIN`, `MATERIAL_PCT`, `LABOR_PCT` constants (Section 5.3).
Authority: Mahlet's confirmed numbers. Treat as authoritative for board reporting.

### 2.5 NetSuite Invoiced YTD (canonical for invoicing)

Pattern: `ResInvoicedYTDResults*.csv`
Source: NetSuite saved search filtered to AR Trade invoices on 40001 - Sales account, Residential subsidiary.
Granularity: One row per invoice transaction.
Required columns: `Internal ID`, `Order Type`, `*`, `Date`, `Location`, `Period`, `Type`, `Document Number`, `Name`, `Account`, `Memo`, `Amount`.
Filter: pipeline keeps Type == Invoice, all rows are typically Account `10101 Accounts Receivable : Accounts Receivable - Trade`.
Branch remap: Location `NOVA` → `DC Metro`.
Used for: YTD invoiced KPI, monthly invoiced (closed month Final, active month MTD), V5 Excel `invoiced_ytd`, V5 Actual tab Jan-through-closed-month 40001 - Sales overlay.
Adopted: 2026-05-04, replacing Forecasting Report-derived invoicing.
See Section 6.1 for source-of-truth rules.

### 2.6 Residential Budget 2026.xlsx

Pattern: literal name `Residential Budget 2026.xlsx`, lives in the working folder (not uploads).
Source: extracted from the company-wide `Budget 2026.xlsx` (residential block, rows for the residential subsidiary).
Sheets:
- `Budget`: header row with month labels (Jan 2026 ... Dec 2026), then `40001 - Sales`, `40003 - Sales:Work in Progress`, `Total - 40000 - Revenue`.
- `Actual`: same shape, populated only for closed months. The V5 pipeline auto-overlays closed-month 40001 - Sales values from the latest NetSuite CSV each refresh (Section 9.1).
Used for: V5 Excel pipeline (refresh_v5.py reads via the budget input).

### 2.7 wip_reference.pkl

Lives in the working folder.
Source: prior V5 calibration baseline, validated WIP timing constants.
Used for: V5 monthly WIP forecast (Section 8 of refresh_v5.py).
Treatment: read-only. Do not regenerate without approval (Section 5.2 lock rules).

## 3. Outputs (deliverables)

### 3.1 HTML dashboard (Residential Revenue Forecast.html)

Built by `build_refresh_v2.py` (canonical pipeline since 2026-04-30).
Output filename: `Residential Revenue Forecast.html` (always this name, written to the working folder).
Tabs (12 total, IDs `tab0` through `tab11`):

0. Executive Summary: KPI tiles (YTD Sales Created, Invoiced YTD, 4-Week Avg Weekly Sales, Current Week Projected); active-month Revenue Forecast box (full-month forecast pulled from V5's `v5_forecast_summary.json`, MTD shown in footnote); active-month Sales (MTD) box; closed-month Final box; closed-month Sales (Closed) box; Budget vs Model Revenue chart; Job Type Impact table.
1. Sales Projection: weekly sales chart, weekly sales history table (all weeks for trend visibility), by Lead Source.
2. Monthly Forecast: budget vs forecast by month with variance. **Forecast-tab rule: active month + future months only.**
3. Budget Requirements: full-month target / MTD booked / remaining required per month. **Forecast-tab rule: active month + future months only.**
4. Job Type Analysis: cycle and conversion by Insurance / Retail-Financing / Retail-No Financing (YTD computed).
5. Pipeline & Branch: SNP by branch, stage, type; current sales by branch.
6. Cycle Times: four-stage cycle (Signed → Created → In Progress → Completed → Invoiced), per job type (YTD computed).
7. Weekly Sales Targets: implied weekly target derived from `remaining_required_sales[active_month] / weeks_left_in_month`. Variance table shows all weeks for historical comparison.
8. Production Metrics: invoiced jobs, WIP, avg job size. Invoiced/Completed by Month tables show all months as historical actuals.
9. Profitability: GP/GM by trade, class, location (YTD from Profitability CSV).
10. Budget Recovery Plan: recovery math with dynamic weeks remaining and forward-looking weekly target.
11. Strategic Recommendations: carry-forward editorial narrative.

Styling: brand banner embedded as base64. Page-shell + brand-bar + page-header structure. Tab nav uses `class="page-nav"`. Profitability and Budget Recovery tabs use the `kpi good` / `kpi crit` modifier classes for green/red emphasis (mandatory call-outs). Right-aligned table headers use `<th class="right">` which is now selected by `table.data th.right` for correct CSS specificity.

Subtitle format: `V5 Model with Job Type Analysis &bull; Data as of <Month DD, YYYY> &bull; Deduped by Job Number &bull; Cycle &amp; conversion unlocked`. The data-as-of date is the max date across NetSuite invoicing and Forecasting Report inputs.

### 3.2 V5 Excel model (Revenue Forecast Model.xlsx)

Built by `refresh_v5.py` (data and modeling) followed by `build_excel_v5.py` (workbook formatting).
Output filename: `Revenue Forecast Model.xlsx`, written to the working folder.
Sheets (12):
1. Executive Summary
2. Sales Projection
3. Monthly Forecast (includes Required New Sales, Remaining Required Sales (MTD-Credited), Active-Month MTD Actual, Required Weekly Sales rows)
4. April-May Detail (most-recently-closed month and active month, deeper breakdown)
5. Job Type Analysis
6. Pipeline & Branch
7. Job Detail
8. Weekly Sales Targets
9. Production Metrics
10. Profitability
11. Budget Recovery Plan
12. Model Notes

Pipeline writes intermediate pickles (`v5_dashboard_data.pkl`, `v5_budget_solve.pkl`, `v5_forecast_detail.pkl`, `v5_hist_jobs.pkl`, `v5_conv_by_type.pkl`) consumed by `build_excel_v5.py`. Both scripts must run from the same working directory so relative pickle paths resolve.

`refresh_v5.py` also writes a JSON bridge file `v5_forecast_summary.json` to the working folder. This contains the closed-month and active-month full-month forecasts, the required-sales arrays, the monthly forecast arrays, and the dynamic methodology constants. The HTML pipeline reads this file. Schema in Section 8.4.

## 4. Methodology rules

### 4.1 Current state (as of 2026-05-11)

| Element | Source | Status | Notes |
|---|---|---|---|
| Cycle time hierarchy | YTD signed cohort, deduped | Dynamic | Recomputed each refresh, four stages |
| Same-month conversion | Sales-cohort YTD | Dynamic | Recomputed each refresh |
| MARGIN | Profitability invoiced 2026 cohort | Dynamic 2026-05-11 | `gross_profit / revenue`. Fallback 40% if Profitability CSV missing. |
| MATERIAL_PCT | Profitability invoiced 2026 cohort | Dynamic 2026-05-11 | `material / revenue`. Fallback 35%. |
| LABOR_PCT | Profitability invoiced 2026 cohort | Dynamic 2026-05-11 | `labor / revenue`. Fallback 22%. |
| PCT_NEW (V5 WIP scaling) | Observed cycle timing | Dynamic 2026-05-11 | FCA-weighted mean of `days_in_IP ÷ (overall_ip2c + overall_bill)` for jobs that went IP this month, clamped 0-1. Fallback 75%. |
| PCT_PRIOR (V5 WIP scaling) | Observed cycle timing | Dynamic 2026-05-11 | Same formula for jobs IP before this month, still WIP. Fallback 90%. |
| PCT_COMPLETE (HTML WIP) | Observed cycle timing | Dynamic 2026-05-11 | Blended mean of PCT_NEW and PCT_PRIOR. Fallback 75%. |
| Closed-month invoiced (V5 overlay) | NetSuite | Auto-overlaid each refresh | Closed months are auto-detected: any month whose end date is strictly before max(NetSuite Date) is treated as closed. `actual_months` populated dynamically. |
| Closed-month lock | NetSuite | Auto-applied | The most recently closed month's values are forced into V5's `rev_model`, `total_inv_apr`, `wip_change_apr`, `net_rev_apr` regardless of optimizer output. Earlier closed months also get `rev_model[idx]` locked. |
| Required sales (full-month target) | V5 optimizer (convolution solve) | Dynamic | Recomputed each refresh from budget vs `rev_from_known`. Limitation: does not credit MTD actuals (Pass-2 deferred; see Section 11). |
| Remaining required sales (MTD-credited) | Derived | Dynamic 2026-05-11 | `max(0, required_sales[active_month] - cur_month_mtd_actual)`. Surfaces correctly in dashboard and Excel. |
| Weekly sales target (HTML Tab 7) | Derived | Dynamic 2026-05-11 | `remaining_required_sales[active_month] / weeks_left_in_month`. |
| Weeks remaining (HTML Tab 10) | Derived | Dynamic 2026-05-11 | `(2026-12-31 - TODAY) / 7`. Was hardcoded 35. |
| 2025 sales seed (Oct/Nov/Dec) | Forecasting Report historical jobs | Dynamic 2026-05-11 | Replaces `est_2025` placeholder. Fallback to placeholder per-month if hist data missing. |
| WIP reference baseline | wip_reference.pkl | Locked | Conservative cycles, do not regenerate without approval |
| Branch consolidation | NOVA → DC Metro | Locked | Effective 2026-04 |
| Invoicing source of truth | NetSuite | Adopted 2026-05-04 | Section 6.1 |
| Optimizer smoothness penalty (`lam`) | n/a | Locked | Tuning parameter (0.05), not a business assumption |
| MMU (material mark-up) | n/a | Removed 2026-04-30 | Not in either pipeline |

### 4.2 Lock change protocol

Anything marked Locked stays locked until Greg approves a change explicitly in chat. If new uploaded data implies a different value for any locked constant, flag it in the response and do not silently update. This rule was set on 2026-04-19 and still binds.

### 4.3 Methodology unlock history

2026-04-19: V5 methodology locked. WIP constants, cycle hierarchy, same-month conversion, MMU all frozen.
2026-04-30: V5 methodology unlocked. Cycle, same-month conversion, and pipeline ownership unlocked. MMU removed entirely. Cycle is now four-stage YTD. Conversion is now sales-cohort YTD. `build_refresh_v2.py` is the canonical HTML build.
2026-05-04: NetSuite invoicing CSV adopted as canonical source for invoiced revenue. April closed and locked. May became active forecast month.
2026-05-04 (post-automation): `TODAY` in `build_refresh_v2.py` auto-set to today's calendar date. Subtitle "Data as of" auto-populates from max date across uploaded inputs. V5 auto-overlay function added. Closed-month lock generalized to whichever month is the most recently closed.
2026-05-05: Glob patterns made flexible. Pipeline order locked V5-first. JSON bridge file `v5_forecast_summary.json` introduced.
2026-05-11: Required-sales MTD-credit fix (Pass-1). HTML Tab 2 wired to live V5 monthly arrays. CSS specificity fix for right-aligned headers. Forecast tabs (2 and 3) now hide closed months. MARGIN, MATERIAL_PCT, LABOR_PCT, PCT_NEW, PCT_PRIOR, PCT_COMPLETE all dynamized. 2025 sales seed switched to actual hist data. Weeks remaining made dynamic.

### 4.4 Cycle time stages

Cycle is computed across four stages on the YTD signed cohort, deduped by Job Number:

1. Signed → Created (`Contract Signed On Date` to `Created Date`)
2. Created → In Progress (`Created Date` to `Date Moved to In Progress`)
3. In Progress → Complete (`Date Moved to In Progress` to `Date Moved to Completed`)
4. Complete → Invoiced (`Date Moved to Completed` to `Date Moved to Invoiced`)

Per stage, compute median, mean, and count over jobs with both endpoints populated and non-negative durations. Also compute the full Signed → Invoiced cycle. Per job type (Insurance, Retail-Financing, Retail-No Financing).

`overall_ip2c` (median days IP→Complete) and `overall_bill` (median Complete→Invoice) together define the `expected_ip2inv` cycle, which feeds the dynamic percent-of-completion calculation.

### 4.5 Same-month conversion

For every job in the YTD signed cohort with a populated `Date Moved to Invoiced`, mark `same = (signed_month == invoiced_month)`. Compute the rate per job type:
- `same_month_conv_all_ytd`: full YTD cohort (includes jobs signed in the current month, which haven't had time to invoice).
- `same_month_conv_mature`: cohort signed before the current month, more representative of true rate.

Both are reported in the dashboard.

### 4.6 WIP definitions (two of them, do not conflate)

HTML dashboard WIP: `PCT_COMPLETE × FCA(jobs in progress or completed but not invoiced)` at date X minus same at date Y. Job-cohort, empirical, used for the closed-month Final and active-month Forecast tiles. `PCT_COMPLETE` is now data-derived (Section 4.1).

V5 Excel WIP (40003): NetSuite GL movement on the 40003 - Sales:Work in Progress account. GL-anchored, used in the Excel model for budget vs forecast variance. The Actual tab's 40003 values for April are currently filled by the FR-derived 75% pct-complete proxy; replace with NetSuite GL movements when extract becomes available.

These two will not reconcile exactly. The HTML uses the empirical proxy because there is no NetSuite WIP movement file currently available.

### 4.7 Percent-of-completion formula

For each job that is in-progress or completed-but-not-invoiced at a snapshot date:

```
days_in_ip = max(0, snapshot_date - actual_in_progress_date)
pct = min(1.0, days_in_ip / expected_ip2inv_days)
```

Where `expected_ip2inv_days = overall_ip2c + overall_bill` (the median IP→Complete plus median Complete→Invoice, both recomputed YTD).

The cohort average is FCA-weighted: `sum(pct_i × FCA_i) / sum(FCA_i)`.

`PCT_NEW`: cohort = jobs with `actual_in_progress_date >= cur_month_start`.
`PCT_PRIOR`: cohort = jobs with `actual_in_progress_date < cur_month_start`.
`PCT_COMPLETE`: blended mean of the two (used by HTML).

Caveat: the 100% cap means jobs that have been in progress longer than the expected cycle are treated as "ready to invoice." Some of these may actually be stuck (permit hold, customer issue, etc). A future enhancement could add a `days_in_ip > N × expected` "stuck" classification.

## 5. Required sales (model and reporting)

### 5.1 Convolution model

The V5 optimizer solves for required monthly sales by minimizing a weighted residual between `rev_from_known + C_unknown @ S_unknown` and `budget_inv`, with a smoothness penalty.

`S_known = [oct_2025, nov_2025, dec_2025, S_jan, S_feb, S_mar, apr_with_snp]` (7 entries)
`S_unknown = [S_may, S_jun, ..., S_dec]` (8 entries)
`apr_with_snp = S_apr + snp_total`
`C_mat[t, s]` = conversion fraction of sales month `s` that invoices in month `t`. Conv curve is YTD-computed.

As of 2026-05-11, the Oct/Nov/Dec 2025 slots use actual hist values rather than a placeholder.

### 5.2 Full-month target vs remaining (MTD credit)

The optimizer's `required_sales[t]` is a full-month target and does not credit MTD actuals against the active month. Pass-1 fix (2026-05-11) introduces:

`remaining_required_sales[active_month] = max(0, required_sales[active_month] - cur_month_mtd_actual)`
`remaining_required_sales[closed_months] = 0`
`remaining_required_sales[future_months] = required_sales[future_months]`

The HTML Tab 3 surfaces all three (full target, MTD booked, remaining) and the Excel Monthly Forecast tab adds rows for "Remaining Required Sales (MTD-Credited)", "Active-Month MTD Actual", and "Required Weekly Sales (from Remaining)".

The HTML Tab 7 weekly target is computed as `remaining_required_sales[active_month] / weeks_left_in_month`.

### 5.3 Pass-2 (deferred)

The Pass-1 fix is post-hoc. The cleaner structural fix would re-architect SNP attribution by signing month so MTD can flow into `S_known` without double-counting May-signed SNP contracts. Documented in Section 11 (Known gaps). Defer until Q3 unless required-sales numbers begin to diverge materially from operating reality.

## 6. Source-of-truth rules

### 6.1 Invoiced revenue

NetSuite `ResInvoicedYTDResults*.csv` is canonical for invoiced revenue in both deliverables, effective 2026-05-04. Do not derive invoicing from the Forecasting Report. The Forecasting Report's `Date Moved to Invoiced` column reflects the Salesforce production-stage transition, which lags or leads NetSuite invoice issuance by hours to days. Salesforce stage transition counts also miss partial billings, change orders, and AJEs that NetSuite captures.

Reconciliation as of 2026-05-04: NetSuite YTD invoiced $20.92M (1,151 invoices) vs FR-derived $20.15M deduped (delta +$776K). The delta is structural and does not need to be reconciled away.

### 6.2 Sales-created

Contracts Signed YTD is the canonical source for sales-created in the dashboard. The Forecasting Report's contracts cohort is a different population (deduped, residential-only, excludes some pipeline stages) and undercounts. Do not reconcile; they answer different questions.

For V5's internal `actual_sales` by month (used in `S_known`), V5 uses the Forecasting Report's deduped jobs because the convolution model needs the same cohort that produced the cycle times.

### 6.3 Profitability

Mahlet's `GregProfitabilityResults*.csv` (or `GregProfitabilityResResults*.csv`) is canonical for GP/GM. Treat as authoritative for board reporting. Also drives the dynamic `MARGIN`, `MATERIAL_PCT`, `LABOR_PCT` constants.

### 6.4 Budget

`Residential Budget 2026.xlsx` (extracted from the company-wide Budget 2026.xlsx residential block) is the canonical residential budget. The `Budget` sheet holds the original budget. The `Actual` sheet holds month-by-month actuals; the V5 pipeline auto-overlays NetSuite-sourced actuals onto closed months each refresh.

## 7. Refresh protocol

### 7.1 Triggering a refresh

A refresh is triggered when any of the following arrive:

`Greg Forecasting Report*.xlsx` or `Residential Forecasting Report*.xlsx`
`Contracts Signed YTD*.xlsx`
`Sold Not Processed*.xlsx`
`GregProfitabilityResults*.csv` or `GregProfitabilityResResults*.csv`
`ResInvoicedYTDResults*.csv`
`Budget 2026.xlsx` (rare)

A partial refresh is fine: any subset of these may arrive. Files not refreshed carry their prior values forward; note "carried forward" in the chat response, not in the dashboard.

### 7.2 Auto-detection

Both pipelines auto-glob the latest matching file from the uploads directory by mtime. Do not specify file names manually unless overriding via `forecast_config.json`.

### 7.3 Standard refresh sequence

V5 must run before HTML so the HTML can read the V5 full-month forecast and dynamic methodology constants from the JSON bridge.

1. Read each new file with pandas, confirm column-to-tab mapping matches Section 2.
2. Run V5 pipeline: `python3 refresh_v5.py`. Outputs intermediate pickles, `v5_forecast_summary.json` (working folder), and overlays the Actual tab from NetSuite automatically.
3. Build the V5 Excel: `python3 build_excel_v5.py`. Output: `Revenue Forecast Model.xlsx`.
4. Build the HTML dashboard: `python3 build_refresh_v2.py`. Reads `v5_forecast_summary.json` for full-month forecast, monthly arrays, required sales, and dynamic PCT_COMPLETE. Output: `Residential Revenue Forecast.html`.
5. Verify outputs (Section 7.5).
6. Surface KPIs to Greg in chat. Confidentiality rule: do not include Profitability or Budget Recovery numbers in chat (see Section 10). Embed them in the HTML, confirm regeneration is complete.

### 7.4 Subtitle date

The HTML subtitle's data-as-of date is auto-populated from the max date across uploaded inputs (NetSuite Date and FR Date Moved to Invoiced). No manual editing.

### 7.5 Verification checks

After each refresh:

HTML: 12 tabs present (`onclick="showTab(0)"` through `showTab(11)`); subtitle updated; KPI tiles populated; no `NaN`, `None,`, `Traceback`, `undefined`, `[object Object]`, or `Error:` markers in the file; brand banner present; `class="page-shell"` and `class="brand-bar"` present; Tab 2 and Tab 3 start at active month (not at January).

Excel: 12 sheets present; closed months locked to NetSuite actual; active month has a forecast value; full-year Budget vs Model variance computed; SNP count matches the input file count; Monthly Forecast tab includes Remaining Required Sales rows.

Cross-deliverable: closed-month Final invoiced, closed-month Net Revenue, and Q2 variance should match between HTML and Excel within rounding ($1K). YTD Invoiced should match exactly (both pull from NetSuite CSV). May Net Revenue should match exactly between Tab 0 and Tab 2 of the HTML (both read from the JSON bridge).

### 7.6 Charts and configs

Keep all chart configurations (axes, color palette, legends) identical to the prior version when refreshing. Do not redesign charts as part of a data refresh.

## 8. Pipelines (technical detail)

### 8.1 build_refresh_v2.py

Path: `<working folder>/build_refresh_v2.py`.

Constants and resolved values:
- `WORK`: resolved from the script's own location (`Path(__file__).resolve().parent`) when the script lives in the working folder. Falls back to a session-bearing path if needed.
- `UP`: derived as `WORK.parent / "uploads"` when present.
- `TODAY = datetime(*datetime.now().timetuple()[:3])`. Auto-set to today's calendar date each run.
- `DATA_AS_OF`: max date across the latest NetSuite invoicing CSV's Date column and the Forecasting Report's `Date Moved to Invoiced`. Drives the dashboard subtitle.
- `PCT_COMPLETE`: dynamic. Pulled from `v5_forecast_summary.json` field `dyn_pct_complete`. Fallback 0.75.

The `latest()` helper picks the newest matching file by mtime in `UP`. Cross-session resilience: the path-resolution preamble lets the same script run in any Cowork session without a manual edit.

Key sections:
1. Load and dedupe (Forecasting Report, Contracts, SNP, Profitability, NetSuite invoicing). Forecasting Report glob accepts both `Greg Forecasting Report*` and `Residential Forecasting Report*`. Profitability glob accepts both `GregProfitabilityResults*` and `GregProfitabilityResResults*`.
2. Optionally read `v5_forecast_summary.json` from the working folder. If present, use V5's active-month full-month forecast values in the Tab 0 active-month box, override `PCT_COMPLETE`, populate Tab 2 monthly arrays, populate Tab 3 required-sales arrays.
3. Compute metrics (YTD invoiced from NetSuite, sales from Contracts Signed, weekly rollup, slope, MTD invoiced for active month, WIP at month-end snapshots).
4. Format helpers, methodology JSON dump, KPI computations.
5. Per-tab HTML generation. Tabs 2 and 3 apply the forecast-tab rule (active month + future only).
6. Final subtitle string and HTML write.

Output: writes `Residential Revenue Forecast.html` (~740KB with embedded base64 banner).

### 8.2 refresh_v5.py

Path: `<working folder>/refresh_v5.py`.

Reads:
- Forecasting Report: glob `*Forecasting Report*.xlsx` (matches both Greg and Residential variants).
- SNP: glob `*Sold Not Processed*.xlsx`.
- Contracts Signed YTD: glob `*Contracts Signed*.xlsx`.
- Budget: `Residential Budget 2026.xlsx` (working folder), passed via `forecast_config.json` or auto-detected.
- Profitability: glob set `*Profitability*Results*.csv|xlsx|xls` (optional).
- NetSuite invoicing: `ResInvoicedYTDResults*.csv` from uploads.

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
2. Build profitability rollups (`profitability_data`). Drives dynamic `MARGIN`, `MATERIAL_PCT`, `LABOR_PCT`.
3. Build cycle times by Job Type and Trade Count.
4. Build active pipeline (NS = Not Started, IP = In Progress, Comp = Completed but not Invoiced).
5. Forecast with cycle-time conversion curves.
6. Solve budget requirements (least-squares match between model output and budget). Uses `S_known` with 2025 actual hist values.
6b. Seasonal sales projection (uses 2025 weekly pattern as proxy).
6c. Weekly sales and production targets.
6d. Budget recovery plan (shortfall and recovery ratio).
7. Auto-overlay Actual tab from NetSuite (closed-month detection). Compute dynamic methodology constants (MARGIN, MATERIAL_PCT, LABOR_PCT, PCT_NEW, PCT_PRIOR). Build monthly WIP forecast.
8. Closed-month lock override. Strategic analysis. Pickle dump. JSON summary write.

`actual_months`: dynamic. Auto-detected via `_auto_overlay_netsuite_actuals()`. A month is considered closed when its month-end date is strictly before `max(NetSuite Date)`.

Closed-month lock override: looks at the most recently closed month in `actual_months`, looks up its index via `_MONTHS_INDEX`, and writes the locked values into `total_inv_apr`, `wip_change_apr`, `net_rev_apr`, `actual_invoiced_apr`, and `rev_model[<index>]`. Earlier closed months also get their `rev_model[<index>]` locked.

Note on naming: the "apr_" variable prefix is historical (V5 was originally written when April was the just-closed month). After the closed-month lock refactor, those names mean "the most recently closed month from V5 perspective." A future refactor should rename these to `prev_month_*` and `cur_month_*` for clarity.

### 8.3 build_excel_v5.py

Path: `<working folder>/build_excel_v5.py`.
Reads pickles produced by refresh_v5.py.
Writes: `mnt/Forecasting Process/Revenue Forecast Model.xlsx`.

Styling: Arial font, blue (#2F5496) headers, green (#E2EFDA) actual fills, red (#FCE4EC) warn fills, yellow (#FFF2CC) highlight fills. Currency format `$#,##0;($#,##0);"-"`. Percent format `0.0%`. Ratio format `0.00"x"`.

### 8.4 v5_forecast_summary.json bridge file

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
  "model_full_year": 120611720.27,

  "months_label": ["Jan 2026", ..., "Dec 2026"],
  "required_sales": [12 values, contract $ per month],
  "remaining_required_sales": [12 values, MTD-credited],
  "cur_month_idx": 4,
  "cur_month_label": "May 2026",
  "cur_month_mtd_actual": 3806057.62,

  "budget_inv_monthly": [12 values],
  "budget_wip_monthly": [12 values],
  "budget_net_monthly": [12 values],
  "rev_model_monthly": [12 values],
  "model_wip_monthly": [12 values],
  "model_net_monthly": [12 values],

  "dyn_margin": 0.414,
  "dyn_material_pct": 0.370,
  "dyn_labor_pct": 0.214,
  "dyn_pct_new": 0.308,
  "dyn_pct_prior": 1.000,
  "dyn_pct_complete": 0.654,
  "expected_ip2inv_days": 9.0,

  "est_2025_actual": {
    "oct": 7281534.04,
    "nov": 4875341.66,
    "dec": 1790339.36,
    "placeholder_was": 3695996.42
  }
}
```

The HTML uses these fields:
- `active_month_*_full_month` for the Tab 0 active-month Revenue Forecast box.
- `months_label`, `budget_*_monthly`, `model_*_monthly` for Tab 2 (Monthly Forecast).
- `required_sales`, `remaining_required_sales`, `cur_month_idx`, `cur_month_mtd_actual` for Tab 3 (Budget Requirements) and Tab 7 (Weekly Sales Targets).
- `dyn_pct_complete` to override the HTML's local `PCT_COMPLETE` constant.

If the file is absent, the HTML falls back to MTD-only display in the active-month box, hardcoded carry-forward arrays elsewhere, and `PCT_COMPLETE = 0.75`.

### 8.5 Working folder layout

```
<working folder>/
  build_refresh_v2.py             # canonical HTML pipeline
  refresh_v5.py                   # V5 data/modeling pipeline
  build_excel_v5.py               # V5 Excel formatter
  build_dashboard_v5.py           # legacy V5 HTML (superseded by build_refresh_v2.py)
  run_forecast.py                 # legacy entry point (rarely used)
  build_methodology.js            # legacy methodology JS (not used)
  Residential Budget 2026.xlsx    # extracted residential block from company budget
  Residential Revenue Forecast.html # HTML output
  Revenue Forecast Model.xlsx     # Excel output
  Topline Forecasting - 4.03.26.xlsx # legacy budget reference
  Monthly Revenue Summary.xlsx    # legacy monthly summary
  brand_banner.png                # banner image (base64 embedded into HTML)
  wip_reference.pkl               # locked WIP baseline
  v5_*.pkl                        # intermediate pickles (regenerated each refresh)
  v5_forecast_summary.json        # JSON bridge from V5 to HTML (see Section 8.4)
  Permit Flow vs BAU Comparison.* # standalone sensitivity analysis
  Permit Improvement Sensitivity.html
  Permit Improvement Model.xlsx
  FORECASTING_RULES.md            # this file
```

## 9. Maintenance procedures

### 9.1 Refreshing the Residential Budget Actual tab

This is automatic. `refresh_v5.py` calls `_auto_overlay_netsuite_actuals()` every run, which reads the latest `ResInvoicedYTDResults*.csv` from uploads, identifies closed months by comparing each month-end against the NetSuite max Date, and writes the NetSuite invoicing totals into the Actual tab DataFrame in memory. The on-disk `Residential Budget 2026.xlsx` does not need to be manually edited each refresh; the in-memory overlay drives the V5 budget overlay logic in the same run.

The on-disk Actual tab still holds the most recent manually-set values as a fallback.

WIP values (40003) in the Actual tab continue to come from the FR percent-of-completion proxy. Replace with NetSuite 40003 GL movements when the extract becomes available.

### 9.2 Closing a month

The V5 side is automatic. As long as a fresh NetSuite invoicing CSV is uploaded and includes a Date past the prior month's end, the auto-overlay picks the new month up as closed, the closed-month lock applies to it, and the forecast-tab rule (Tab 2 and Tab 3) hides the newly-closed month.

Manual steps still required:
1. Update `build_refresh_v2.py` Tab 0 to relabel the prior "Active" month box as "Final (Closed)" and create a new "Active" box for the next month. The HTML pipeline does not auto-detect the active month yet (the Tab 0 box labels are hardcoded). Pattern: rename "May 2026 Revenue Forecast (Active)" to "May 2026 Final (Closed)" and add a new "Jun 2026 Revenue Forecast (Active)" card. Roughly 25 lines of the t0 builder.
2. Re-run both pipelines and confirm the two deliverables agree on the newly-closed month within rounding.

Future enhancement: make the HTML Tab 0 active-month boxes fully dynamic, so the only required step at month-close is uploading the new NetSuite CSV.

### 9.3 Adding a new tab

Both deliverables have 12 tabs and that count is locked. If a new analysis is needed:
- For HTML: replace an existing tab's content rather than adding tab 12. Update the tab nav and `showTab` handlers.
- For Excel: add a sheet to build_excel_v5.py and update the tabs list. New sheets need column widths, headers, data writes; reuse the helper functions in build_excel_v5.py (`write_header_row`, `write_data_row`, `section_hdr`).

### 9.4 Branch remap changes

Branch consolidations affect every pipeline. Update the remap dict everywhere it appears (currently `{"NOVA":"DC Metro"}` in refresh_v5.py and build_refresh_v2.py applied to the NetSuite CSV Location field, the FR Branch Location to Service field, and the SNP Branch Location to Service field).

### 9.5 Adding a new input file pattern

1. Add a new `latest()` call (HTML) or `find_file()` call (V5).
2. Add corresponding logic in refresh_v5.py if relevant to the V5 model.
3. Document the file pattern, source, columns, dedup rule, and use in Section 2 of this doc.

## 10. Confidentiality

### 10.1 Sensitivity tiers

Public-equivalent (safe to share with internal collaborators): methodology, file conventions, refresh process.
Confidential (do not share without authorization): YTD revenue figures, monthly invoiced totals, budget vs forecast variance, branch-level sales, sales rep names.
Highly confidential (board-only): GP/GM by class, profitability by location, Budget Recovery Plan numbers, individual carrier DRP metrics, personnel personality reads.

### 10.2 Chat handling

When responding to Greg in chat:
- Profitability and Budget Recovery numbers go into the dashboard and Excel only. Do not surface in chat unless Greg explicitly asks.
- Just confirm regeneration is complete and surface high-level KPIs (YTD sales, YTD invoiced, monthly variance directionally).
- Personnel and carrier-relationship details (Matt Sherry's transition, DRP carrier SLAs, Justin Hook / Ron Hart involvement) are confidential by default.

### 10.3 File handling

The HTML and Excel outputs both contain confidential numbers. Treat them as confidential at rest. Do not check into public repos or share via public channels.

## 11. Known gaps and open issues

1. NetSuite WIP movement (40003 GL) extract is not yet available. Mahlet may have one. The FR percent-of-completion proxy is a stand-in for both the HTML active-month card and the V5 Actual tab 40003 row.
2. Active-month MTD invoiced number in the HTML can swing significantly within a single trading day as NetSuite catches up to Salesforce stage transitions. Refresh frequency should match Greg's reporting cadence.
3. The legacy `build_dashboard_v5.py` and `Topline Forecasting - 4.03.26.xlsx` files in the working folder are not used by the canonical pipeline. They can be archived but doing so requires Greg's approval.
4. The wip_reference.pkl baseline was calibrated before the 2026-04-30 unlock. Once a few more closed months are available, recalibrate against actuals.
5. Branch remap dictionary is duplicated across pipelines. A future cleanup should centralize it. Not urgent.
6. V5 internal variable names (`total_inv_apr`, `wip_change_apr`, `inv_may`, etc.) are historical: they actually mean "previous closed month" and "current active month" relative to TODAY. After two more month-closes, refactor to `prev_month_*` and `cur_month_*` for clarity.
7. The HTML Tab 0 active-month and previous-month box labels and variable names are still hardcoded (May / April). When May closes, Tab 0 needs a manual edit. Roughly 25 lines of the t0 builder. Future enhancement: derive from TODAY and from V5's `cur_month_label` / `closed_month_label`.
8. **Required-sales Pass-2 (structural fix, deferred)**: The current model's `S_known` lumps all of `snp_total` into the April slot (as `apr_with_snp = S_apr + snp_total`). This means May-signed contracts that are now in SNP get attributed to April vintage, not May. The Pass-1 fix (added 2026-05-11) credits current-month MTD actuals against `required_sales` post-hoc via `remaining_required_sales`, but does not re-architect `S_known`. The full structural fix requires re-attributing SNP by signing month so MTD can be added to `S_known` without double-counting. Defer until Q3 unless required-sales numbers begin to diverge materially from operating reality.
9. PCT_PRIOR currently caps at 100% for jobs in IP longer than the expected cycle. Some of these are likely stuck (permit hold, customer issue). Future enhancement: add a `days_in_ip > N × expected` "stuck" classification that excludes those jobs from forecast WIP.
10. `months_label` is hardcoded to 2026 months. When 2027 planning begins, extend the list and update related indexing.

## 12. Glossary

ABC: ABC Supply (a major roofing materials supplier).
AJE: Adjusting Journal Entry.
Backlog: signed contracts in production but not yet invoiced.
DRP: Direct Repair Program (insurance carrier partnership; West Hill is the partner; covers Travelers, Hartford, State Farm).
FCA: Final Contract Amount.
FR: Forecasting Report (the Salesforce export).
GP / GM: Gross Profit / Gross Margin.
HDZ: GAF Timberline HDZ shingles.
LOB: Line of Business.
MMU: Material Mark-Up (supplier credit). Removed from methodology 2026-04-30.
MTD: Month To Date.
NS: NetSuite, or in pipeline-stage context, Not Started.
Pipeline: contracts signed but not yet in production.
SED: Sales Effective Date (NetSuite cohort field).
SNP: Sold Not Processed (the file pattern).
SRS: SRS Distribution (a major roofing materials supplier).
WIP: Work In Progress.
WTD: Week To Date.
Y / YTD: Year / Year To Date.

## 13. Change log

### 2026-05-11 (methodology dynamization, forecast tab rule, fixes)

- `MARGIN`, `MATERIAL_PCT`, `LABOR_PCT` now data-derived from Profitability YTD invoiced 2026 cohort. Fallbacks preserve prior values when source data missing.
- `PCT_NEW`, `PCT_PRIOR`, `PCT_COMPLETE` (HTML) now data-derived from observed cycle timing via FCA-weighted `days_in_IP / expected_ip2inv` formula.
- `est_2025` placeholders for Oct/Nov/Dec 2025 sales in `S_known` replaced with actual hist values from the Forecasting Report.
- `weeks_remaining` in HTML Tab 10 now dynamic (`(2026-12-31 - TODAY) / 7`); was hardcoded 35.
- Pass-1 required-sales fix: `remaining_required_sales` array added, MTD-credited for the active month. Exposed in V5 outputs and surfaced in HTML Tab 3, HTML Tab 7 weekly target, and Excel Monthly Forecast tab.
- HTML Tab 2 (Monthly Forecast) wired to live V5 monthly arrays (budget_inv, budget_wip, budget_net, rev_model, model_wip, model_net) via the JSON bridge. Was running on hardcoded carry-forward.
- Forecast-tab rule: Tabs 2 and 3 hide closed months, show active month + future only. Driven by V5's `cur_month_idx`.
- CSS specificity fix for right-aligned table headers (`.right` was being overridden by `table.data th { text-align: left }`). Added qualified selectors for `table.data th.right` and `table.data td.right`. Affects every right-aligned column header on every tab.
- WIP card label changed from "(75% pct-complete)" to "(data-derived pct-complete)" to reflect the new dynamic value.

### 2026-05-05 to 2026-05-08 (glob flexibility, V5-first pipeline, Tab 0 V5 bridge)

- Glob patterns made flexible to handle source-system renames. `Greg Forecasting Report*` and `Residential Forecasting Report*` both accepted. `GregProfitabilityResults*` and `GregProfitabilityResResults*` both accepted. `Contracts Signed YTD*` continues to match the `- Residential` suffix variant.
- Pipeline order locked V5-first. `refresh_v5.py` writes `v5_forecast_summary.json` with closed-month and active-month full-month forecasts.
- `build_refresh_v2.py` reads the JSON bridge and uses V5's full-month forecast in the active-month Revenue Forecast box on Tab 0; MTD remains visible in the footnote.

### 2026-05-04 (NetSuite adoption, automation)

- NetSuite invoicing CSV (`ResInvoicedYTDResults*.csv`) adopted as canonical source for invoiced revenue in both deliverables. April closed and locked. May became active forecast month.
- `TODAY` in `build_refresh_v2.py` auto-set to today's calendar date. Subtitle "Data as of" auto-populates from max date across uploaded inputs.
- V5 auto-overlay function `_auto_overlay_netsuite_actuals()` added. Actual tab recomputed each refresh from the latest NetSuite CSV, with closed months auto-detected.
- Closed-month lock block generalized to whichever month is the most recently closed (no longer hardcoded to April).
- WORK and UP paths derived from script location for cross-session resilience.

### 2026-04-30 (methodology unlock, pipeline ownership)

- V5 methodology unlocked. Cycle, same-month conversion, and pipeline ownership unlocked. MMU removed entirely.
- Cycle is now four-stage YTD. Conversion is now sales-cohort YTD.
- `build_refresh_v2.py` is the canonical HTML build. Auto-globs latest inputs. Format locked, no surgical HTML edits.

### 2026-04-19 (initial lock)

- V5 methodology locked. Initial constants frozen.
