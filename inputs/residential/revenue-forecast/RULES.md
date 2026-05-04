# Revenue Forecast, Calculation Rules (V5 LOCKED)

> **Owner:** Greg Graven (COO) co-owner: Mahlet Teshome Mandefro (FP&A)
> **Methodology version:** V5 (locked 2026-04-19)
> **Last reviewed:** 2026-04-19 by Greg + Mahlet
> **Calculator file:** `calculators/revenue-forecast.js`
> **Underlying engine:** `refresh_v5.py` + `build_dashboard_v5.py` + `calculators/lib/v5_to_json.py`

---

## What this dashboard answers

How much net invoiced revenue will we book in 2026, by month, against the $125.6M residential budget. What the gap is, what weekly sales rate closes it, and how production needs to flow to deliver the invoiced number. The model treats sales, backlog, WIP, and invoicing as one connected system, which is why one calculator runs end to end and emits all twelve dashboard tabs.

---

## V5 LOCK NOTICE (do not change without sign-off)

The four constants below are LOCKED. Per the cowork project instructions, the V5 model methodology was locked on 2026-04-19 and the items below are immutable unless Greg explicitly approves a change in chat:

1. **WIP constants used in the model** (PCT_NEW, PCT_PRIOR, MARGIN, MATERIAL_PCT, LABOR_PCT). See WIP section below.
2. **Cycle-time hierarchy** used in the forecast (Job Type + Trade Count, then Job Type + Branch, then Job Type, then Trade Count, then Overall). See `RULE-201`.
3. **Same-month conversion rates per job type** (M+0 share by job type). See `RULE-301`.
4. **Material mark-up assumptions (MMU)** baked into the cost-of-revenue split (35% material, 22% labor of new IP value). See `RULE-601`.

If new uploaded data implies a different value for any locked constant, the model must flag it in the run output and refuse to silently update. Changing any locked item requires:

1. Written sign-off from Greg + Mahlet
2. A pull request with the new V_NEXT version number
3. A regenerated snapshot test
4. A note in the change log at the bottom of this file

Silent edits will fail the snapshot test in CI.

---

## How the calculator runs

The Node calculator at `calculators/revenue-forecast.js` is a wrapper. It does not re-implement the math. It:

1. Looks for uploaded inputs in `inputs/revenue-forecast/`.
2. If inputs exist and Python is available at `/sessions/confident-affectionate-turing/mnt/Forecasting Process/refresh_v5.py`, it stages a working directory, writes `forecast_config.json` with explicit input paths, then shells out to:
   - `python3 refresh_v5.py` (produces `v5_dashboard_data.pkl` + `v5_budget_solve.pkl`)
   - `python3 calculators/lib/v5_to_json.py` (loads the pickles and emits the REVENUE_FORECAST JSON)
3. Parses the emitted JSON and returns it as the calculator's output.
4. If Python or inputs are missing, falls back to the existing `extracted-data.json` snapshot.

This wrapper architecture exists because re-porting the V5 math to JavaScript would create two sources of truth. The Python is the source of truth for the math. Node is the source of truth for the dashboard JSON shape.

---

## Expected input files (V5 spec)

`refresh_v5.py` uses pattern matching on filename. Drop the most recent export of each into `inputs/revenue-forecast/`. The wrapper passes explicit paths via `forecast_config.json`, so naming flexibility is preserved.

### 1. Forecasting Report (REQUIRED)

- **Filename pattern:** `*Forecasting Report*` (xlsx)
- **Source:** Salesforce, "Residential Forecasting Report" (job-row level, includes work-order rows)
- **Cadence:** Daily
- **Required columns** (all must be present, names match exactly):
  - `Job Number`
  - `Job Status` (terminal values: Closed & Capped Out, Canceled, Written Off, Paid In Full, Invoiced; active values: Not Started, In Progress, Completed)
  - `Job Type` (Insurance, Retail-Financing, Retail-No Financing, Repair, Warranty, Unknown)
  - `Service Type`
  - `Record Type`
  - `Branch Location to Service` (NOVA gets remapped to DC Metro per RULE-401)
  - `Service Object` (the trade per work order, eg Roofing, Gutters, Siding)
  - `Status` (work order status; rows where Status is Completed or Canceled are excluded from "trades remaining" counts)
  - `Work Order Count` (numeric, defaults to 1 if missing)
  - `Final Contract Amount` (numeric)
  - `Account Name`
  - `Contract Signed On Date` (date)
  - `Created Date` (date)
  - `Scheduled Start` (date, nullable)
  - `Start Date` (date, nullable)
  - `Date Moved to In Progress` (date, nullable)
  - `Date Moved to Completed` (date, nullable)
  - `Date Moved to Invoiced` (date, nullable)
  - `NetSuite Contract Number` (used as the join key to Profitability)

Rows where `Job Number` is null or contains "Confidential" or "Copyright" are dropped (RULE-001).

### 2. Sold Not Processed, "SNP" (REQUIRED)

- **Filename pattern:** `*Sold Not Processed*` (xlsx)
- **Source:** Salesforce, opportunities sold but not yet processed into a job
- **Cadence:** Daily
- **Required columns:**
  - `Opportunity Name`
  - `Last Stage Change Date` (date)
  - `Branch Location to Service`
  - `Amount $`

Zero-dollar SNP rows are skipped. SNP is treated as a Retail-No Financing single-trade job for cycle assignment (RULE-501).

### 3. Contracts Signed YTD (REQUIRED)

- **Filename pattern:** `*Contracts Signed*` (xlsx)
- **Source:** Salesforce, all contracts signed in 2026
- **Cadence:** Daily
- **Required columns:**
  - `Department` (filter to Residential or Direct Repair)
  - `Contract signed on` (date)
  - `Branch Location to Service`
  - `Amount $`

Future-dated contracts (signed-on date > today) are pulled back to "yesterday" so they enter the trailing weekly average (RULE-701). The count and dollars moved are surfaced in the run output as `n_moved` / `amt_moved`.

### 4. Residential Budget (RECOMMENDED)

- **Filename pattern:** `*Residential Budget*` or `*Budget*` (xlsx, multiple sheets allowed)
- **Source:** FP&A monthly budget (NetSuite plan), authored by Mahlet
- **Cadence:** Monthly (only when the plan changes)
- **Required structure:**
  - First sheet must contain a header row that includes the literal cell value `Jan 2026` somewhere (the loader scans for it).
  - First column has GL row labels. The loader looks for these specific rows:
    - `40001 - Sales` (Invoiced Sales) -> `budget_inv`
    - `40003 - Work in Progress` (WIP change) -> `budget_wip_chg`
    - any row containing both `Total` and `40000` -> `budget_net`
  - Optional `Actual` sheet, same shape, used to overlay Jan-Mar actuals onto the budget rows (RULE-801).

If the budget file is missing, the model still runs but recovery-plan deltas will be zero.

### 5. Profitability (OPTIONAL, sensitive)

- **Filename pattern:** `*Profitability*` (xlsx, xls, or csv)
- **Source:** NetSuite job profitability extract, owned by Mahlet
- **Cadence:** Monthly
- **Required columns:**
  - `Document Number` (NetSuite contract number, joins to Forecasting Report's `NetSuite Contract Number`)
  - `Revenue (Stored)`
  - `Total Expenses (Stored)`
  - `Material Expenses (stored)`
  - `Labor Expenses (stored)`
  - `Other Expenses (stored)`
  - `Non-GL Expenses (stored)`
  - `Commission (Rep 1)` and `Commission (Rep 2)` (combined into `Commission`)
  - `Feazel Status`
  - `Cap-Out Approved`

Confidentiality: Profitability totals must not appear in chat output. They are embedded in the dashboard only. See "Confidentiality" section.

---

## STEP-BY-STEP RULES

### RULE-001 - Row hygiene (Forecasting Report)

- Drop rows with null `Job Number`.
- Drop rows where `Job Number` contains the strings `Confidential` or `Copyright` (Salesforce footer artifacts).
- Coerce `Service Object` to string, replacing the literal `nan` with NaN.
- Coerce `Work Order Count` to int, default 1.
- Default `Job Type` to `Unknown` when missing.

### RULE-002 - Date columns

The following columns must be parsed as datetimes with `errors='coerce'`:
`Contract Signed On Date`, `Created Date`, `Scheduled Start`, `Start Date`, `Date Moved to In Progress`, `Date Moved to Completed`, `Date Moved to Invoiced`.

### RULE-003 - Job aggregation

After the row hygiene pass, jobs are grouped by `Job Number`. For each job:
- `contract_date` = first Contract Signed On Date
- `created_date` = first Created Date
- `amount` = first Final Contract Amount
- `job_status` = first Job Status
- `job_type` = first Job Type
- `branch` = first Branch Location to Service (after NOVA remap)
- `trade_count` = first Work Order Count
- `earliest_ip` = min of Date Moved to In Progress
- `latest_completed` = max of Date Moved to Completed
- `earliest_invoiced` = min of Date Moved to Invoiced
- `earliest_scheduled` = min of Scheduled Start
- `trades` = comma-joined sorted unique non-null Service Object values

---

### RULE-101 - Forecast formula (per-month invoiced revenue)

For each future month M, projected invoiced revenue =

```
sum over (job type J, prior month P) of:
  signed[P, J] times conversionCurve[J][M minus P]
```

Implemented in `refresh_v5.py` via the `C_mat` 12 by 15 convolution matrix, where columns 0-2 are Oct/Nov/Dec 2025 carryover sales, columns 3-6 are Jan-Apr 2026 known sales, and columns 7-14 are May-Dec 2026 sales solved by the optimizer. See RULE-501.

### RULE-102 - WIP bridge

```
Net Revenue = Invoiced Revenue + Delta WIP
Delta WIP = WIP_endOfMonth minus WIP_startOfMonth
```

April and May get a detailed WIP build via `wip_src` (see RULE-203). All other months use the FP&A `budget_wip_chg` plan number from the Budget file.

### RULE-103 - Gap to budget

```
Annual Gap = sum(orig_budget_inv) minus sum(rev_model)
```

A positive gap means the model is below plan and recovery is needed. The recovery plan in RULE-901 reallocates the gap as a uniform percent uplift across May-Dec.

### RULE-104 - Required sales per month (`required_sales`)

The optimizer (`scipy.optimize.minimize`, L-BFGS-B) solves for the eight unknown sales months May-Dec such that, when convolved with the overall conversion curve, they reproduce the invoiced budget month by month. The objective:

- Squared error of (modeled invoiced minus budget invoiced), with weights ramping from 0.3 in Jan to 1.0 from Apr onward.
- Smoothness penalty `lambda = 0.05` on month-over-month differences.
- Initial guess `$14M`/month, bounds `[$3M, $40M]`/month.

`required_sales[t]` is `S_full[t+3]` (the optimizer's answer in contract dollars). It already accounts for the fact that May sales produce revenue in May, Jun, Jul, etc., so callers must NOT divide a single month's revenue gap by `conv[0]`.

### RULE-105 - Run-rate sanity

The 4-week trailing weekly average must reconcile to within 5% of the V5 implied weekly target (`weeklyTargetsHeader.avgWeeklyNeed`). If it diverges by more than 5% for two consecutive weeks, escalate to Greg + Mahlet for off-cycle methodology review.

---

### RULE-201 - Cycle hierarchy (V5 LOCKED)

`get_cycle(job_type, branch, trade_count)` returns three integers (days): created-to-IP, IP-to-complete, complete-to-invoice. The lookup walks this hierarchy and stops at the first level with at least 5 historical jobs:

| Level | Lookup key | Notes |
|---|---|---|
| 1 | Job Type + Trade Count | Greg's "best predictor" combo |
| 2 | Job Type + Branch | catches local productivity differences |
| 3 | Job Type alone | broad fallback |
| 4 | Trade Count alone | last per-segment fallback |
| 5 | Overall medians | absolute fallback |

Each level uses the median over its slice. Negative or > 365 day gaps are nulled before the median is taken (RULE-202).

### RULE-202 - Outlier scrub

For `days_created_to_ip`, `days_ip_to_complete`, `days_complete_to_invoice`, `days_created_to_invoice`: any value < 0 or > 365 is set to NaN before any aggregation.

### RULE-203 - WIP source preference

For the April and May detailed WIP build:

1. If `wip_reference.pkl` exists in the working directory, use it (this is the validated baseline pickled on 2026-04-16, lives in the Forecasting Process folder).
2. Else if `v4_forecast_detail.pkl` exists, fall back to V4.
3. Else use the V5 forecast itself (`mjobs.copy()`).

The reference exists because Greg validated specific cycle assumptions against actual Q1 invoicing and pickled the result. Re-using that baseline keeps the WIP number defensible to the auditors.

### RULE-204 - WIP categories (April detailed)

```
cat1 = jobs with eff_ip_date  < April start AND eff_invoice_date > April end, valued at PCT_PRIOR (0.90)
cat2 = jobs with April start <= eff_ip_date < TODAY  AND eff_invoice_date > April end, valued at PCT_NEW (0.75)
cat3 = jobs with TODAY <= eff_ip_date <= April end   AND eff_invoice_date > April end, valued at PCT_NEW (0.75)
ending_wip_april = cat1 + cat2 + cat3
beg_wip_april = (jobs IP'd before April AND not invoiced before April).amount.sum() * PCT_PRIOR
wip_change_april = ending_wip_april minus beg_wip_april
net_rev_april = invoiced_april + wip_change_april
```

### RULE-205 - WIP categories (May forecast)

```
ending_wip_may = (jobs IP'd in May, valued at PCT_NEW)
              + (jobs IP'd before May AND not yet invoiced by May end, valued at PCT_PRIOR)
wip_change_may = ending_wip_may minus ending_wip_april
net_rev_may   = invoiced_may + wip_change_may
```

---

### RULE-301 - Conversion curves (V5 LOCKED reference values)

Conversion curves are computed from the historical jobs slice (`days_created_to_invoice` floor-divided by 30.44 to get month offset) and stored in `v5_conv_by_type.pkl`. The locked values that ship with the V5 model:

| Job Type            | M+0 | M+1 | M+2 | M+3+ |
|---------------------|-----|-----|-----|------|
| Insurance           | 10% | 30% | 35% | 25%  |
| Retail-Financing    | 45% | 40% | 10% | 5%   |
| Retail-No Financing | 50% | 35% | 10% | 5%   |
| Repair              | 85% | 10% | 5%  | 0%   |

The model also tracks an Overall curve (across all job types) which is the one used by the optimizer in RULE-104. The per-job-type curves are surfaced on the Cycle Times tab and are what Greg refers to as the "same-month conversion rates per job type" lock item.

---

### RULE-401 - Branch mergers

NOVA branch (Northern Virginia) was merged into DC Metro effective April 2026. The remap is applied at load time to:

- `df['Branch Location to Service']`
- `snp['Branch Location to Service']`
- `contracts_clean['Branch Location to Service']`

Any new branch merger requires editing `BRANCH_REMAP` in `refresh_v5.py` AND a note in this file's change log.

### RULE-402 - Branch mix for future sales

When projecting future weekly sales by branch and job type, the model uses:

- `branch_mix` = share of 2026 contract dollars by branch (from `contracts_clean`)
- `jt_mix` = share of historical contract dollars by job type (from `hist`, excluding Warranty, Repair, Unknown)

Future entries with branch_jt amount < $100 are skipped to avoid noise.

---

### RULE-501 - Sold Not Processed (SNP) treatment

Each SNP row is forecast as a Retail-No Financing single-trade job:

```
fc_ip       = TODAY + 2 days + (Retail-NoFin C-to-IP per branch)
fc_complete = fc_ip + (Retail-NoFin IP-to-C per branch)
fc_invoice  = fc_complete + (bill days per branch)
```

SNP dollars are added to April sales via `apr_with_snp` for the budget solve (RULE-104).

### RULE-502 - Future weekly sales generation

Starting the Monday after `current_week_start`, through 2026-07-13, generate a "Future Wk MM/DD" row for every (branch, job type) combo at:

```
amount = base_proj * branch_share * job_type_share
```

where `base_proj = max(linear trend on last 8 weeks, 0.80 * recent_4wk_avg)`. Job types Warranty, Repair, Unknown are excluded.

### RULE-503 - Pipeline classification (current state)

For active jobs (status in Not Started, In Progress, Completed), the forecast logic is:

- **Completed**: invoice in 2-28 days based on how long it has been waiting (recently, overdue, stalled).
- **In Progress**: if all WOs done, complete in 3 days. Else complete in `max(3, ip2c minus days_in_ip)` days.
- **Not Started**: use scheduled start if it is in the future. Else `max(created_date + c2ip, today + 3 days)`.

---

### RULE-601 - Cost-of-revenue assumptions (V5 LOCKED)

For April and May only (the detailed P&L months):

```
MARGIN        = 0.40   (assumed gross margin on new IP value)
MATERIAL_PCT  = 0.35   (material as % of contract value of NEW IP this month)
LABOR_PCT     = 0.22   (labor as % of contract value of NEW IP this month)
PCT_NEW       = 0.75   (% of NEW-month IP value carried as WIP)
PCT_PRIOR     = 0.90   (% of PRIOR-month IP value carried as WIP)
```

These are the "WIP constants" lock item. Material 35% + Labor 22% is the implied MMU baseline (effectively 43% gross margin on new IP, then trued up against actual invoicing).

### RULE-602 - April / May derived KPIs

```
month_mat = total_new_ip_val_month * MATERIAL_PCT
month_lab = total_new_ip_val_month * LABOR_PCT
month_gp  = net_rev_month minus month_mat minus month_lab
month_gm  = month_gp / net_rev_month
```

These show on the Profitability tab. Profitability of months other than the current and next month uses the actual NetSuite Profitability join (RULE-603), not these synthetic numbers.

### RULE-603 - Profitability join (when Profitability file present)

- Join key: `Forecasting Report.NetSuite Contract Number` <-> `Profitability.Document Number`.
- Both are stripped of trailing `.0` (Excel artifact) and trimmed.
- Rows with key in {nan, None, blank} are excluded to prevent cross joins.
- `Commission = Commission (Rep 1) + Commission (Rep 2)` (zero-fill missing).
- `gross_profit = Final Contract Amount minus Total Expenses (Stored)`.
- Splits computed: Overall, Invoiced, Not Invoiced, Invoiced 2025, Invoiced 2026, by Job Type, by Market, by Market x Job Type, by Feazel Status (not invoiced).

---

### RULE-701 - Weekly sales rollup

- Week starts on Monday (Sunday is treated as the previous week).
- "Completed weeks" = weeks where week_start < current_week_start.
- The trailing 4-week average drives the run-rate KPI.
- The trailing 8-week trend (linear regression slope + intercept) drives forward projection.
- "Current week (projected)" = WTD-actual + (avg of WTD-daily-rate and trend-implied-daily-rate) * days_remaining.

### RULE-702 - Future-dated contract scrub

Any contract with `Contract signed on > today` is pulled back to `today minus 1 day` so it counts in the trailing weekly. The count and dollars moved are surfaced as `n_moved` and `amt_moved` in the run output, primarily as a data-quality signal back to Salesforce admins.

---

### RULE-801 - Actuals overlay (Jan-Mar)

If the Budget workbook contains an `Actual` sheet with the same row structure (a header row with `Jan 2026` and a `40001 - Sales` row), the values for Jan, Feb, Mar are overlaid onto `budget_inv`, `budget_wip_chg`, `budget_net` in the model. This is what makes the year-to-date numbers "actuals" rather than "plan" inside the forecast.

The original budget is preserved as `orig_budget_inv` for shortfall math (RULE-901).

---

### RULE-901 - Budget recovery plan

YTD shortfall = `orig_budget_inv[Jan..Mar].sum() minus budget_inv[Jan..Mar].sum()` (positive = behind plan).
April gap = `orig_budget_inv[Apr] minus rev_model[Apr]` (positive = April forecast also short).
Total to recover = YTD shortfall + April gap.

May-Dec gets reallocated:

```
adjusted_monthly_inv[Jan..Mar] = budget_inv[Jan..Mar]   (locked actuals)
adjusted_monthly_inv[Apr]      = rev_model[Apr]         (accept April forecast)
adjusted_monthly_inv[May..Dec] = orig_budget_inv[May..Dec] + total_shortfall * may_dec_weight
```

`may_dec_weight` is the per-month share of the original May-Dec budget. Recovery weekly sales targets scale by `recovery_ratio = adjusted_may_dec_total / model_may_dec_total`.

This is what populates the (red) Budget Recovery tab and what feeds `budgetRecoveryHeader.upliftPct` in the dashboard JSON.

### RULE-902 - Recovery weekly schedule

`recovery_sales_weeks` and `recovery_prod_weeks` are generated from `2026-04-19` (the chosen Saturday start of the next full week at lock time) through `2026-12-31`, with each week's target prorated by days-in-month.

---

### RULE-1001 - Pipeline stages (current snapshot)

The current pipeline broken into stages, each with by-market detail and average / median days in stage:

- **New Sales** = SNP rows. Days = today - Contract Signed Date.
- **Backlog** = Processed jobs in Not Started. Days = today - Created Date.
- **In Progress** = Processed jobs in In Progress.
- **Completed** = Processed jobs in Completed (awaiting invoice).

### RULE-1002 - Strategic ranking (revenue per day)

For historical jobs with `days_created_to_invoice > 0`:

```
rev_per_day = amount / days_created_to_invoice
```

Three rankings published, each filtered to combos with at least 10 historical jobs:

- Job Type + Primary Trade
- Job Type + Branch
- Job Type + Trade Count

These power the Strategic Recommendations tab. They're advisory, not used in the budget math.

---

## Validation checks (auto-fail)

The Node calculator validates the JSON shape; the Python validates the inputs. Together:

| Check | Layer | Action |
|---|---|---|
| Required Forecasting Report columns missing | Python | `sys.exit(1)` |
| Budget file missing the `Jan 2026` header row | Python | `raise ValueError` |
| Budget file missing the `40001 - Sales` row | Python | `raise ValueError` |
| Output `kpis` array missing | Node | validation error |
| Output `execSummary` missing | Node | validation error |
| Output `pipelineSnapshot` missing | Node | validation error |
| Annual forecast deviates more than 10% from previous build | Node | warn only (logged, does not fail) |
| Any month forecasts to negative revenue | Python | warn in stdout |
| Conversion curve weights for a job type don't sum to 1.0 (within 1e-3) | Python | warn in stdout |
| Python exit code non-zero | Node | throw with stderr in error message |
| `v5_dashboard_data.pkl` not produced | Node | throw "Python ran but produced no output pickle" |

---

## Confidentiality

The Profitability tab and the Budget Recovery tab contain sensitive numbers. The cowork project instructions require that these values not appear in chat responses unless Greg explicitly asks. The calculator and dashboard handle this implicitly by embedding the numbers in the HTML/JSON only and never printing them to stdout summaries beyond aggregate GP percentages.

If a downstream consumer (eg an iOS app, a Slack digest) is added, the Profitability and Budget Recovery sections must be access-gated.

---

## Output JSON shape (REVENUE_FORECAST key)

The wrapper returns an object with these top-level keys (consumed by `redesign/shared/page-defs-revenue-forecast.js`):

| Key | Type | Notes |
|---|---|---|
| `_source` | string | "calculator/revenue-forecast.js v5-locked-2026-04-19-shell-1.0" |
| `title` | string | "Residential Revenue Forecast" |
| `subtitle` | string | "V5 Model with Job Type Analysis - Data as of YYYY-MM-DD" |
| `runDate` | string | ISO date of the run |
| `kpis` | array | Top-line KPI tiles for the executive page |
| `tabs` | array | Twelve tab definitions (matches the kit) |
| `execSummary` | object | `{ budget, modelAnnualInvoiced, gap, narrative }` |
| `monthRevenue` | object | `{ april: {invoiced, wipChange, netRevenue, ...}, may: {...} }` |
| `weeklyTargetsHeader` | object | `{ avgWeeklyNeed, recent4WkAvg, gap, productionAvgWeeklyNeed, productionCycleStart, productionCycleComplete, productionTotalCycle }` |
| `budgetRecoveryHeader` | object | `{ fullYearBudget, gap, upliftPct, aprilGap, q1OriginalBudget, q1Actual, q1Shortfall }` |
| `profitabilitySummary` | object | `{ combinedGP, combinedGP_pct, combinedRevenue, y2025_*, y2026_*, materialCost, laborCost, commissions, ... }` |
| `pipelineSnapshot` | object | `{ stages: [{ label, subtitle, value, jobs, color }, ...] }` |
| `commentary` | object | `{ actionableRecommendations: [...], strategyHighlights: [...] }` |
| `tables` | array | `[{ id, title, headers, rows }, ...]` for every table the dashboard renders |
| `charts` | array | `[{ id, labels, datasets: [{ label, data }, ...] }, ...]` |

The full enumeration of table and chart IDs lives in `calculators/lib/v5_to_json.py` so the page-defs and the emitter never drift.

---

## Change log

| Date | Version | Change | Approved by |
|---|---|---|---|
| 2026-04-19 | V5 | Locked: cycle hierarchy + conversion curves + WIP factor 0.18 + MMU 35/22 split | Greg + Mahlet |
| 2026-04-19 | V5 | NOVA branch merged into DC Metro | Greg |
| 2026-05-01 | V5-shell-1.0 | Calculator wired to shell out to Python (`refresh_v5.py` + `v5_to_json.py`); fallback to extracted-data.json preserved | Greg |

---

## NetSuite invoice override

V5 derives Invoiced YTD from Salesforce stage transitions. NetSuite AR is the GAAP source of truth (booked invoices, not stage events). Drop a NetSuite invoice CSV into this folder named like `ResInvoicedYTDResults###.csv` (the digits are the report ID Mahlet exports).

The calculator detects any `*InvoicedYTD*.csv` file, sums all rows where `Type = Invoice`, and uses that to override:

- The "Invoiced YTD" KPI value (sub becomes "NetSuite AR · N invoices booked")
- The per-month invoiced totals visible in the dashboard (when V5 tabs reference them)
- A `netsuiteInvoiced` block on the output (totalInvoiced, monthly, byBranch, invoiceCount)

Other V5 fields (forecast model, WIP, conversion curves, weekly targets) stay untouched. NetSuite only knows about invoiced jobs, not in-flight ones, so the Salesforce-derived numbers still drive everything forward-looking.

Expected columns:
`Internal ID, Order Type, *, Date, Location, Period, Type, Document Number, Name, Account, Memo, Amount`

Branch labels are normalized: `Detroit Metro` → `Detroit`, `NOVA` → `DC Metro`. Add more aliases in `calculators/lib/netsuite-invoices.js` if exports use unexpected branch names.
