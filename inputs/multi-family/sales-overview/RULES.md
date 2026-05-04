# Sales Overview, Calculation Rules

> **Owner:** Greg Graven (COO)
> **Methodology version:** 1.0 (rules encoded)
> **Last reviewed:** 2026-05-01 by Greg
> **Calculator file:** `calculators/sales-overview.js`

---

## What this dashboard answers

How is the residential sales book pacing in 2026, by branch, by rep, by job type, and by week. Where is the rework risk, where is the billing risk, and where is the budget gap.

## Expected input files

Drop these two XLSX files in this folder. Naming is flexible (the calculator matches by leading text, not exact filename).

| File (typical name) | Source | Cadence | Required columns (exact) |
|---|---|---|---|
| `Residential Turned in YTD-YYYY-MM-DD-...xlsx` | Salesforce, "Residential Turned in YTD" report | Daily | `Branch Location to Service`, `Opportunity Name`, `Opportunity Owner`, `Stage`, `Sold job type`, `Sold Job Service Type`, `Date Created`, `Contract signed on`, `Amount $` |
| `Residential Completed Jobs YTD-YYYY-MM-DD-...xlsx` | Salesforce, "Residential Completed Jobs YTD" report | Daily | `Branch Location to Service`, `Salesperson: Full Name`, `PM1/Production Manager: Full Name`, `Job Number`, `Work Order Number`, `Created Date`, `Date Moved to In Progress`, `Date Moved to Completed`, `Date Moved to Invoiced`, `Days to Start Job`, `Days to Complete Job`, `Final Contract Amount`, `Work Order Count`, `Service Object`, `Created By: Full Name` |

> **Column-name source of truth.** If the kit and a real XLSX disagree, the XLSX wins. The calculator reads columns by exact bracket name, so renaming breaks everything.

> **Filename matching.** Use the leading text. The calculator picks the first file containing `turned` (case-insensitive) for sales and the first file containing `completed` for billing.

---

## Locked rules (the math)

Every rule gets a number. Number persists. New rules append at the end.

### RULE-001 - Definition of Signed Contract YTD
A row qualifies as a Signed Contract YTD when:
- `Contract signed on` parses to a date in calendar year 2026
- `Branch Location to Service` is non-empty and does not contain the strings `confidential`, `copyright` (defensive filter for confidentiality-flagged exports)

The fiscal year constant is `FY = 2026`. Update when the year rolls.

### RULE-002 - Stage to Bucket mapping
Map `Stage` to a bucket. Anything not in the table becomes `Other`.

| Stage | Bucket |
|---|---|
| Closed - Sold | Sold |
| Pending PM/Financial Review | Production Review |
| Ops Review | Production Review |
| Contracted | Production Review |
| CMT | Production Review |
| Claim Filed | Production Review |
| Sales Action Required | Sales Action |
| No Show | Sales Action |
| Kicked Back to Salesperson | Kicked Back |

### RULE-003 - Deal-size statistics
- `Avg Deal Size` = sum(`Amount $`) / count(rows) on the full YTD set.
- `Median Deal` = median(`Amount $`).
- `Install Avg` = mean(`Amount $`) where `Sold Job Service Type` = `Install`.
- `Repair Avg` = mean(`Amount $`) where `Sold Job Service Type` = `Repair`.

Service type uses `Sold Job Service Type` (not Job Type). The Install and Repair split is service-type driven.

### RULE-004 - Annualized Sales Rate
`Annualized = (YTD Total / DaysElapsed) x 365` where `DaysElapsed = max(1, today - Jan 1 2026)`. `today` defaults to the current system date. The dashboard renders the result with the `~` prefix to signal an estimate.

### RULE-005 - Days to Close
`Days to Close` = whole-day difference between `Date Created` and `Contract signed on`. Computed only when both dates parse. Negative values and values >= 2000 days are treated as outliers and excluded from the cycle aggregations (RULE-014).

### RULE-006 - Top Producers (top 20 by sales)
Rank salespeople (`Opportunity Owner`) by sum(`Amount $`) signed YTD. Take the top 20. For each, compute:
- `count` = deal count
- `amount` = total sales
- `avg` = amount / count
- `medDays` = median days-to-close (positive only)
- `installs` = count where service type = `Install`
- `repairs` = count where service type = `Repair`
- `jt` = a `{jobType: count}` map across the rep's deals (only non-empty `Sold job type`)

### RULE-007 - Job Type taxonomy
Job Type uses `Sold job type`. The three primary buckets are:
- `Insurance`
- `Retail-Financing`
- `Retail-No Financing`

Anything else (rare) is shown verbatim in `jobTypeTotals` but excluded from the three-way mix charts.

### RULE-008 - Markets (Branch)
Use `Branch Location to Service` verbatim. `NOVA` is a synonym for DC Metro / Northern Virginia. Per Section C of the kit, do not auto-merge unless explicitly requested.

### RULE-009 - Monthly aggregation
Group rows by `monthKey(Contract signed on)` = `YYYY-MM`. For each month emit:
- `key`, `label` (English month name)
- `count`, `amount`
- `installs`, `repairs` (service-type counts)
- `avgDeal` = amount / count
- `repairPct` = repairs / count x 100
- `installAvg`, `repairAvg` = mean amount within the install / repair subsets

Months are sorted ascending by key.

### RULE-010 - Weekly aggregation
Group by ISO-style week-of-year computed from `Contract signed on`. Emit `{w, count, amount}` per week.

The dashboard cycle-time JS uses a simple "week of year" formula that combines the day diff with the week-1 weekday offset; the calculator uses the same formula (`weekOfYear`) for parity.

### RULE-011 - Market Scorecard
For each market emit a row of:
`[branch, sales, deals, avgDeal, installs, repairs, repairPct, medianDaysToClose]`. Sorted by sales desc.
- `medianDaysToClose` is computed across deals where days-to-close is defined and non-negative.
- `repairPct` = repairs / deals x 100.

Headers in order: `Branch, Sales, Deals, Avg Deal, Installs, Repairs, Repair %, Median Days`.

### RULE-012 - Market Kickbacks
For each market: count of rows in the `Kicked Back` bucket and their summed amount. Sort by kicked count desc. Top 6 retained.

### RULE-013 - Speed Sellers and Repair-Heavy
- `speedSellers` = reps with count >= 10 deals and median days-to-close <= 3 days. Top 8 by speed.
- `repairHeavy` = reps with >= 5 repairs. Top 3 by repair rate (repairs / count).

### RULE-014 - Sales Cycle aggregations
Filter to rows where days-to-close is defined, >= 0, and < 2000.
- `Overall Median` and `Overall Mean` across all qualifying rows
- `Retail` = median across rows where `Sold job type` contains `retail` (case-insensitive)
- `Insurance` = median across rows where `Sold job type` = `Insurance` (also report mean)
- `Repair` = median across rows where service type = `Repair`
- `byJobType`: median, mean, count for each of `Retail-No Financing`, `Retail-Financing`, `Insurance`, `Repair`, `Install`
- `byMarket`: median, mean, count per market, restricted to markets with count >= 5, sorted ascending by median
- `starInsuranceClosers`: insurance reps with count >= 3 and median <= 5 days; sorted ascending by median; top 5

### RULE-015 - Job Type Mix by Month
For each of the three primary job types, emit a `{monthKey: amount}` map across all months in the dataset.

### RULE-016 - Pipeline Buckets
Aggregate by bucket (RULE-002). Emit `[{label, count, amount}]` ordered: Sold, Production Review, Kicked Back, Sales Action, Other (Other only if non-empty).

### RULE-017 - Completed Billing aggregation
Reads the Completed Jobs file. Each work-order row is a unit. Defensively filter rows where `Branch Location to Service` is empty or contains `confidential` or `copyright`.

> **Column-name caveat.** The kit references `Job Status`, `Job Sub Status`, `Account Name`, `NetSuite Contract Number`, and `Age` columns. The actual current XLSX export does not contain those columns; it instead has `Date Moved to Completed`, `Date Moved to Invoiced`, `Days to Start Job`, `Days to Complete Job`, etc. The calculator handles both shapes:
> - If `Job Status`/`Account Name` exist, use them directly (legacy "Completed Awaiting Billing" report).
> - Otherwise compute `age` = days between `Date Moved to Completed` and today, and treat any row without `Date Moved to Invoiced` as unbilled.

Outputs:
- `totalUnbilled` = sum(`Final Contract Amount`) over unbilled rows
- `totalJobs` = count of unique unbilled `Job Number`
- `avgAge` = mean(age days)
- `medAge` = median(age days)
- `tiers` = bucketed by age:
  - `Critical (60+ days)` (red)
  - `Warning (30-59 days)` (orange)
  - `Watch (14-29 days)` (blue)
  - `Fresh (0-13 days)` (green)
- `bySubStatus` (only when sub-status column present)
- `byMarket` with urgency tag: avgAge >= 30 = HIGH, >= 15 = MEDIUM, else LOW
- `byRepTop15` (top 15 reps by unbilled amount)
- `fullJobList`: array of `[jobNumber, account, rep, market, subStatus, amount, age, jobType]` rows, sorted age desc

### RULE-018 - Live KPIs feeding budget pages
The Weekly Targets and Budget Recovery pages display **locked plan constants** alongside **live actuals**:
- Plan constants (`avgWeeklyNeed`, `byJobType`, `byMarket`, `weekSchedule`, `monthlyBridge`, etc) are sourced from the Revenue Forecast V5 model dated 2026-04-19. They do not change on a daily refresh.
- Live actuals come from the YTD signed-contract rows: weekly sales (last 4 ISO weeks), live monthly totals, and the live 4-week average. The plan-vs-actual gap displayed on the Budget Recovery tab uses these live actuals.

The calculator emits `weeklyTargets_BUDGET` and `budgetRecovery` blocks that combine both the locked constants and the live actuals.

### RULE-019 - Commentary block
The dashboard renders six narrative arrays:
- `whatsWorking`, `whatNeedsAttention`, `criticalRisks`, `strengthsToAmplify`, `fixList`, `actionPlan` (with `thisWeek`, `thisMonth`, `thisQuarter`)

The calculator generates these programmatically from the live numbers (no hard-coded names). Any name-bearing strings (like rep callouts) are sourced from the live data, not hand-edited.

### RULE-020 - Last signed date
`lastSigned` = max(`Contract signed on`). Formatted as `YYYY-MM-DD`. Used in the page header.

### RULE-021 - Row count
`rowCount` = count of qualifying signed-contract rows after RULE-001. Used in the meta row.

---

## Confidentiality

Salesperson names, opportunity owners, and customer names appear in the data. They are FINE inside the rendered dashboard (it is meant for internal leadership). Outside the dashboard:
- Do not list individual salespeople, customers, or owner names in chat responses.
- Summary stats by market, branch, stage, or job type are OK in chat.
- The build pipeline writes name-bearing data to `data.json` and `data.js` for the dashboard. Do not paste those files outside this repo.

The calculator also runs a defensive name-strip when `Branch Location to Service` contains `confidential` or `copyright`, in case a Salesforce export is accidentally re-saved with redaction watermarks.

---

## Validation checks (auto-fail)

The calculator throws (causing the pipeline to fail and refuse to write output) when:

- **VAL-001** Required column missing from the Turned-In file (any of the 9 columns in the table above)
- **VAL-002** Total signed YTD = 0 after RULE-001 (likely a date-parse or filter bug)
- **VAL-003** Zero unique markets after RULE-001 (the branch column did not parse)
- **VAL-004** No monthly aggregations (zero months in the dataset)
- **VAL-005** Total signed YTD differs from the previous build by more than 25 percent up or down (sanity check against day-over-day drift). Bypass with `FZ_SKIP_DRIFT_CHECK=1` for legitimate large jumps.
- **VAL-006** Any branch shows zero deals after passing RULE-001 (likely a stage-filter bug; warn only, do not fail)

The drift check (VAL-005) reads the previous `redesign/shared/extracted-data.json` SALES_OVERVIEW.kpis[0] value. If the file is missing or the previous total cannot be parsed, the check is skipped.

---

## Change log

| Date | Version | Change | Approved by |
|---|---|---|---|
| 2026-04-15 | 0.1 | Initial passthrough scaffold | Greg |
| 2026-05-01 | 1.0 | Rules encoded against real XLSX columns. Added RULE-001 through RULE-021. Added VAL-001 through VAL-006. Added RULE-018 budget-page passthrough handling. | Greg |
