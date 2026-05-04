# Installs YTD, Calculation Rules

> **Owner:** Greg Graven (COO), production co-owner: Bruce Lemon Jr (VP Residential Production)
> **Methodology version:** 1.0 (rules encoded)
> **Last reviewed:** 2026-05-02 by Greg
> **Calculator file:** `calculators/installs-ytd.js`

---

## What this dashboard answers

What is actually closing. Invoiced residential jobs YTD by PM, market, work type, and the multi-trade attach mix. Cycle time and start-time slippage by market and PM. The numbers behind the Residential Installs YTD Dashboard.

## Expected input files

| File | Source | Cadence | Required columns |
|---|---|---|---|
| invoiced-jobs (CSV or XLSX) | Salesforce, all invoiced residential jobs YTD, one row per work order | Weekly or biweekly when month-end revenue is finalized | `Job: Job Number`, `Account Name`, `Branch Location to Service` (or `Branch Location`), `Project Manager` (or `PM`), `Service Object`, `Service Type`, `Date Created` (or `Sold Date`), `Date Moved to Invoiced`, `Contract Amount` (or `Final Contract Amount`), `Created By`, `Date Moved to Completed`, `Date Moved to Started` (or `Start Date`) |

If a column with a slightly different name appears, the calculator falls back to the documented aliases. Anything outside those aliases triggers VAL-401.

## Confidentiality

PM names and creator names appear inside the dashboard tables. Names in chat replies are not allowed unless Greg explicitly asks. Aggregated stats (counts, dollars, medians) are always OK to share.

## Locked rules

### RULE-401 - Required input columns
Calculator reads the first sheet (XLSX) or the CSV body. Required columns (with documented aliases) are:

- `Job: Job Number` (alias: `Job Number`)
- `Branch Location to Service` (alias: `Branch Location`)
- `Project Manager` (alias: `PM`, `Project Manager: Full Name`)
- `Service Object` (the trade tag on a work order, multiple per job)
- `Service Type`
- `Date Moved to Invoiced` (revenue recognition date)
- `Final Contract Amount` (alias: `Contract Amount`, `Amount`)
- `Created By` (alias: `Created By: Full Name`)
- `Date Created` (alias: `Sold Date`)
- `Date Moved to Completed` (alias: `Complete Date`)

Optional columns:
- `Date Moved to Started` (alias: `Start Date`)
- `Account Name`

VAL-401 fires if any required column is missing.

### RULE-402 - Row filter
Drop any row where:
- `Job: Job Number` is blank, or
- `Branch Location` lower-cases to a string containing `confidential`, `copyright`, or `salesforce`, or
- `Date Moved to Invoiced` is blank or fails to parse (revenue must be recognized to count).

### RULE-403 - Job-level dedupe (True Revenue)
Group rows by `Job: Job Number`. Take the first work order per job for revenue. The job-level contract is `Final Contract Amount` from that first WO. Total True Revenue = sum of job-level contract across all unique jobs.

### RULE-404 - Avg Contract Value
True Revenue divided by count of unique jobs.

### RULE-405 - Multi-Trade definition
Count distinct `Service Object` values per `Job: Job Number`. A job is multi-trade if that count is 2 or more. Multi-trade percentage = multi-trade jobs divided by total unique jobs.

### RULE-406 - Cycle metrics (job level)
- Days to Complete = `Date Moved to Invoiced - Date Created` per unique job (job level), median across all jobs.
- Days to Start = `Date Moved to Started - Date Created` per unique job, average. If `Date Moved to Started` is missing, fall back to `Date Moved to Completed - Date Created` so the metric still surfaces. Days to start values outside [0, 365] are dropped as data noise.
- Days to Complete values outside [0, 730] are dropped as data noise.

### RULE-407 - PM revenue, fractional attribution
For each work order, fractional revenue = job's contract amount divided by the count of work orders on that job. Sum fractional revenue by PM. Count WOs and unique jobs per PM. Median complete and avg start are at the PM-job level (one value per job per PM).

PMs displayed in the table must have `WOs >= 5` (RULE-417).

### RULE-408 - Market aggregation
Group unique jobs by `Branch Location`. Per market: revenue (sum of job contracts), job count, avg contract, median complete days, avg start days, multi-trade count, multi-trade pct, median complete for MT subset, median complete for ST subset. Display all markets sorted by revenue descending.

### RULE-409 - Work type aggregation
Group work orders by `Service Object`. Per trade: WO count, fractional revenue (sum), avg contract per WO, median days to complete (job level for the parent jobs of those WOs).

### RULE-410 - Creator aggregation
Group unique jobs by `Created By`. Per creator: jobs, revenue (job-level contract), avg contract, median complete, avg start, multi-trade pct.

Creators displayed in the table must have at least one job. Creators on the Brandon-Vera-and-friends shortlist are ranked by revenue descending.

### RULE-411 - Top multi-trade combinations
For each multi-trade job, build a combination key = sorted distinct `Service Object` values joined with " + " (e.g., "Gutters + Roofing"). Count jobs per combo. Show top 8 by job count.

### RULE-412 - Monthly trend
Group unique jobs by year-month of `Date Moved to Invoiced`. Per month: revenue, job count, median complete days, avg start days. Sort ascending by month.

### RULE-413 - Multi-trade lift KPIs
- Multi-Trade Avg Contract = mean job-level contract for multi-trade jobs.
- Single-Trade Avg Contract = mean job-level contract for single-trade jobs.
- Cycle Gap = MT median complete minus ST median complete (sign preserved, formatted with leading + when positive).

### RULE-414 - Creator x Market heatmap
Two-dimensional pivot: rows are creators, columns are markets, cells are unique-job counts. Add a Total column (creator's total) and a Total row (market column totals across all creators). Sort creator rows alphabetically. Sort market columns alphabetically.

The heatmap renderer normalizes each row to that row's max market (the largest non-total cell) for color scaling. The calculator returns raw counts, the renderer (page-defs) maps counts to a 7-step heat scale via `value / rowMax`.

### RULE-415 - PM scatter shape
Each PM in the full table is rendered as a scatter point: x = median complete days, y = fractional revenue, point radius = sqrt(WOs). The calculator returns the table rows in the canonical order, page-defs builds the scatter from that.

### RULE-416 - MT vs ST median by market
Per market, compute median complete for the MT subset and the ST subset separately. Display both as paired bars in the Multi-Trade page.

### RULE-417 - PM minimum threshold
Only PMs with at least 5 work orders are included in the PM table and the PM scatter (RULE-415). PMs below that threshold roll into an Unassigned-style aggregate only if their share is large enough to materially shift totals (currently no aggregation, sub-5 PMs are simply omitted).

### RULE-418 - Subtitle composition
Subtitle reads: `Invoiced Jobs - <first invoice date> - <last invoice date> - De-Duplicated at Job Level - <N> Jobs - <M> Markets - <P> PMs`. Dates use `MMM DD, YYYY`.

### RULE-419 - Month labels
Use month full name in the chart labels (January, February, etc.). The monthly object also carries `key` (`YYYY-MM`) and short label (e.g., `2026-01`) for chart x-axes.

### RULE-420 - Tone and language
No em-dashes, anywhere. Use commas, parens, periods, colons. Trustworthy, premium, plain-English voice. KPI sub-text is short. Findings prose pulls live numbers.

### RULE-421 - Empty stub
If no input file is present and `extracted-data.json` lacks the `INSTALLS_YTD` key, calculator returns a schema-valid stub with empty arrays and a `_source` flag noting the reason. The dashboard renders cleanly with empty charts and tables. This protects daily refresh runs that fire before the Salesforce export lands.

### RULE-422 - Chart series IDs (lock list)
The calculator must return these chart IDs in `charts[]` (consumed by `redesign/shared/page-defs-installs-ytd.js`):

1. `ch_monthly` (revenue + job-count combo by month)
2. `ch_efficiency` (median complete + avg start by month)
3. `ch_jobmix` (MT vs ST stacked count, single horizontal bar)
4. `ch_combos` (top 8 multi-trade combinations, horizontal bar)
5. `ch_mt_by_market` (MT pct by market, horizontal bar)
6. `ch_mt_vs_st` (MT median vs ST median by market, paired vertical bars)
7. `ch_mk_rev` (revenue by market, horizontal bar)
8. `ch_mk_days` (median complete by market, horizontal bar)
9. `ch_pm_top` (top 15 PMs by fractional revenue, horizontal bar)
10. `ch_pm_scatter` (all PMs, x=median complete, y=fractional revenue)
11. `ch_wt_pie` (revenue share by work type, doughnut)
12. `ch_wt_days` (median complete by work type, vertical bar)
13. `ch_cb_vol` (job count by creator, vertical bar)
14. `ch_cb_eff` (median complete by creator, vertical bar)
15. `ch_cb_mt` (MT pct by creator, vertical bar)
16. `ch_cb_scatter` (creators, x=median complete, y=avg contract, radius=sqrt(jobs))

Each chart has shape `{ id, labels, datasets: [{ label, data }] }`.

### RULE-423 - Table IDs (lock list)
The calculator must return these table IDs in `tables[]`:

1. `tbl_markets` (headers: Market, Jobs, Revenue, Avg Contract, Median Complete, Avg Start, MT %, MT Median, ST Median)
2. `tbl_pms` (headers: PM, WOs, Jobs, Fractional Revenue, Rev / WO, Median Complete, Avg Start)
3. `tbl_worktypes` (headers: Service Object, WOs, Fractional Revenue, Avg Contract / WO, Median Complete)
4. `tbl_creators` (headers: Creator, Jobs, Revenue, Avg Contract, Median Complete, Avg Start, MT %, Rev / Job)
5. `creatorMarketHeatmap` (headers: Creator, then alphabetical market columns, then Total. Rows: per creator, then a final Total row aggregating each market column.)

### RULE-424 - Commentary buckets
Calculator emits `commentary.areasOfConcern`, `commentary.watchList`, `commentary.positivesToBuildOn` as arrays of plain-English strings drawn from live numbers (no PM names quoted to chat per the confidentiality rule, but names in dashboard prose are fine). Empty arrays are valid when there is no data, the renderer handles that gracefully.

## Validation checks (auto-fail)

- **VAL-401** Required input columns missing (RULE-401).
- **VAL-402** Zero unique jobs after RULE-402 / RULE-403 filters.
- **VAL-403** Zero unique markets after RULE-408.
- **VAL-404** Total invoiced revenue YTD drifts more than 25% from the previous build's value (set `FZ_SKIP_DRIFT_CHECK=1` to bypass).
- **VAL-405** Any of the 14 active markets (Columbus, Cincinnati, Cleveland, Dayton, Detroit Metro, Grand Rapids, Greensboro, Greenville, Knoxville, Nashville, NOVA, DC Metro, Raleigh, Richmond) shows zero jobs after a successful run on a fully-populated export. This is a soft check, it warns rather than fails (markets can legitimately be empty in early Q1).

## Change log

| Date | Version | Change | Approved by |
|---|---|---|---|
| 2026-05-02 | 1.0 | Encoded full rule set, replaced passthrough stub with real calculator. RULE-401 through RULE-424. VAL-401 through VAL-405. | Greg |
| (earlier) | 0.1 | Initial scaffold | Greg |
