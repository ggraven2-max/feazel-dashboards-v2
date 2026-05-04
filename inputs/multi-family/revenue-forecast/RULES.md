# Revenue Forecast, Multi-Family — RULES (MF-v1)

> **Owners:** Greg Graven (COO), Todd Sandler (President MF & Commercial), Lisa Gibson (VP Commercial Ops), Mahlet Teshome Mandefro (FP&A)
> **Methodology version:** MF-v1 (locked 2026-05-04)
> **Calculator file:** `calculators/revenue-forecast-mf.js`

---

## What this dashboard answers

How much net invoiced revenue multi-family will book in 2026, by month, against the **$51,673,207** annual budget (sourced from `2026 Commercial Budget.xlsx` row 6, "Total - 40000 - Revenue"). What the gap is, what's in WIP today, and which jobs drove each month.

Unlike residential V5 (statistical conversion curves over many small jobs), the MF model is **event-driven and job-by-job**. Each MF job has explicit Salesforce date stamps that define when revenue gets recognized.

---

## Operating definitions (LOCKED MF-v1)

1. **Revenue trigger.** A job's `Date Moved to Invoiced` is when the contract value hits revenue. Full contract value, completion-billed.
2. **Job-level dedup (parity with residential RULE-403).** The Salesforce export emits one row per Work Order. Multi-WO jobs appear multiple times with the same `Job Number` and the same `Final Contract Amount`. The calculator groups rows by `Job Number`, takes the FIRST Work Order's `Final Contract Amount` as the job-level contract, and coalesces dates from any WO so we don't lose date stamps when one WO's row has blank dates. This avoids 5x-10x revenue inflation from WO duplicates. The calculator logs the dedup count on every run.
3. **WIP definition.** A job is "in WIP" at month-end if `Date Moved to In Progress` ≤ month-end AND (`Date Moved to Invoiced` is null OR > month-end).
4. **Start trigger.** A job is "started this month" if `Date Moved to In Progress` falls in the month (or `Start Date` if In Progress is missing).
5. **Annual budget.** Sourced from the Commercial Budget XLSX row 6 "Total - 40000 - Revenue". Per-month plan numbers come from the same row (cells 1-12). The annual "Total 2026" cell is the headline. If the explicit total and the sum of months diverge by >10%, calculator warns and uses the summed months.
6. **Year filter.** Only events in FY 2026 are counted.

Changes to any of these require sign-off from Greg + Mahlet, a version bump (MF-v2), and a snapshot test refresh.

---

## Required inputs (drop in this folder)

| File pattern | What it is | Source |
|---|---|---|
| `Commercial Forecasting Report*.xlsx` | Per-job export with all date stamps | Salesforce report, filtered to Department = Commercial |
| `*Commercial Budget*.xlsx` | Monthly plan with 40000/40001/40003 GL rows | NetSuite export from Mahlet |

Optional (improves the dashboard but not required):

| File pattern | What it is | Source |
|---|---|---|
| `Contracts Signed YTD - Commercial*.xlsx` | YTD signed pipeline | Salesforce report, currently informational only |
| `GregProfitabilityMFResults*.csv` | Per-job profitability | Profitability report, parsing TBD in v2 |

**Note:** Multi-family does NOT have a "Sold Not Processed" report. Don't expect one.

---

## What the calculator computes

For each FY 2026 month:

```
revenue[M]      = Σ Final Contract Amount where Date Moved to Invoiced ∈ month M
starts[M]       = Σ Final Contract Amount where Date Moved to In Progress ∈ month M
wip_end[M]      = Σ Final Contract Amount of jobs with In Progress ≤ month-end
                  AND (Invoiced is null OR Invoiced > month-end)
plan[M]         = monthly cell from Commercial Budget row 6
gap[M]          = revenue[M] − plan[M]
```

Annual:

```
annual_revenue       = Σ revenue[M] across all months
ytd_plan             = Σ plan[1..months_elapsed]
ytd_gap              = annual_revenue − ytd_plan
plan_rest_forecast   = annual_revenue + Σ plan[months_elapsed+1..12]
naive_pace           = annual_revenue / months_elapsed × 12
budget               = "Total 2026" cell (or summed months if discrepancy ≤10%)
gap_to_budget        = plan_rest_forecast − budget
```

Both `plan_rest_forecast` and `naive_pace` are surfaced as KPIs because they answer different questions:
- **Plan-Rest Forecast** assumes the rest of the year hits plan. Conservative, useful when YTD has lumpy outliers.
- **Naive Pace** annualizes the YTD run-rate. Sensitive to single-month spikes; tells you "if every month from now on looks like the average so far."

---

## Sanity-check guardrails

The calculator surfaces warnings (in build log) for:

- **Budget total discrepancy.** If the "Total 2026" cell and the summed months differ by >10%, falls back to summed months and prints both numbers.
- **Lumpy revenue months.** If any single month exceeds 3x its plan, flag in the dashboard narrative.
- **WIP balance growth.** If WIP grows by >20% in one month, the recommendations text calls it out.
- **Missing in-progress dates.** Jobs with no In Progress date (and no Start Date) are excluded from WIP calculations and logged.

---

## Versioning

This is **MF-v1**. Future versions will likely add:

- **v1.1:** Slice by Job Type (currently aggregated)
- **v1.2:** Parse the Profitability CSV for cost-of-revenue data
- **v2:** Pipeline view from Contracts Signed (signed but not yet started)
- **v2.1:** Progress billing support (currently assumes completion-billed)
- **v3:** Forward-looking commit signed contracts to expected start/complete months

When the methodology changes, document the diff in this file and bump `MF_VERSION` in the calculator.

---

## Out of scope (intentional)

- Cost mix and gross profit analysis (no per-job cost columns in the current upload)
- Cycle-time analytics (start-to-complete; possible from existing date columns but not yet implemented)
- WIP aging (how long has each job been in WIP)
- Pipeline of contracts signed but not yet started

---

## Monthly schedule format (Lisa's job-level forecasts)

In addition to the Salesforce reports above, **Lisa (VP Commercial Ops)** maintains a job-level monthly forecast as a Google Sheet, exported as CSV and dropped into:

```
inputs/multi-family/revenue-forecast/monthly-schedules/
```

Filename convention: `[Month] [YYYY].csv` (e.g., `April 2026.csv`, `May 2026.csv`). One file per month. Old months stay in the folder; calculator reads all of them.

### CSV structure

The calculator parses two sections:

**Section 1: "Jobs to be completed [Month] [Year]"**
Branch-grouped list of every job expected to invoice that month. Branches recognized: Cincinnati, Cleveland, Columbus, Detroit, DC, DC Metro, Nashville, Raleigh, Indianapolis, Knoxville, Charlotte, Grand Rapids, Greenville, Dayton, Richmond, Memphis.

For each branch:
- Branch name in column 0 (with optional column headers: Contract Amount, Job #, NS Contract, Current Status, Estimated GM, then budget breakdown)
- One row per job with: Job Name, Contract Amount ($X), Job #, NS Contract, Current Status (Invoiced/In Progress/Not Started/Completed), Estimated GM (%)
- Branch subtotal row at the end (total $, average GM%)

Section ends with a "Total invoice" row.

**Section 2: "Jobs that will be in progress" (and optionally "New jobs that will be in progress")**
List of jobs in WIP at month-end with: Job Name, Contract Amount, Job #, NS Contract, Status, Status Detail ("WIP starting in April", "WIP since November 2025", etc.), % Complete by EOM, Anticipated Completion month, Estimated GM.

Section ends with a "Total WIP" row showing both Contract Amount and WIP Amount.

### What the calculator does with these

- **Forecast vs Actual variance** — computes per-month variance between Lisa's schedule (forecast) and Salesforce-derived invoiced revenue (actual). Shown as KPI ("YTD vs Forecast"), as a chart (variance bars), and as a table (per-month).
- **Forecasted WIP schedule** — surfaces all jobs Lisa flagged as in-WIP-at-month-end with their % complete and anticipated completion month.
- **Branch-level forecast** — per-month revenue by branch, with average GM% per branch.

The calculator logs a warning if the spreadsheet's "Total invoice" hand-sum disagrees with the calculated branch sum (we caught this in May 2026 — the Total cell forgot to add Indianapolis's $139K).

### Maintenance

- Lisa updates the schedule monthly (or as deal status changes mid-month).
- Greg pulls the export when running the daily refresh.
- No naming required for the CSV; just make sure the title row in cell A1 says "Jobs to be completed [Month] [Year]" so the parser can identify the month.

---

## NetSuite invoice override (MF-v1.2)

The Salesforce Forecasting Report's `Date Moved to Invoiced` is informative but it can drift from booked revenue (jobs invoiced without a stage update, or with WO duplicates that need dedup logic). NetSuite AR is the GAAP source of truth.

Drop a NetSuite invoice CSV into this folder named like `MFInvoicedYTDResults###.csv` (the digits are the Salesforce-style report ID Mahlet exports).

The calculator detects any `*InvoicedYTD*.csv` file, sums all rows where `Type = Invoice`, and uses the result to override:

- The "Invoiced YTD" KPI value
- The per-month `revenue` array (replaces Salesforce-derived monthly invoiced)
- The branch breakdown's "completed" column (jobs by branch)

Salesforce-derived data still drives WIP, starts, in-flight job-level detail (since NetSuite doesn't track in-progress work).

The expected columns:
`Internal ID, Order Type, *, Date, Location, Period, Type, Document Number, Name, Account, Memo, Amount`

Branch labels are normalized: `Detroit Metro` → `Detroit`, `NOVA` → `DC Metro`. Add more aliases in `calculators/lib/netsuite-invoices.js` if Mahlet's exports use unexpected branch names.
