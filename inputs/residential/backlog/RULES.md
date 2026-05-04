# Backlog & Production, Calculation Rules

> **Owner:** Greg Graven (COO). Operations co-owner: Bruce Lemon Jr (VP Residential Production).
> **Methodology version:** 1.0 (rules encoded)
> **Last reviewed:** 2026-05-02 by Greg
> **Calculator file:** `calculators/backlog.js`

---

## What this dashboard answers

What sits in front of residential production today, at the work-order grain. How much signed contract value is in the book, how the queue is split between active and waiting, where the throughput leaks are (partial jobs, holds, RAS), and which branches, trades, and salespeople carry the most stuck work. Every number ties back to a single job or work order so leadership can drill from a headline KPI to the worksite.

## Expected input files

Drop one Salesforce export in this folder. Naming is flexible. The calculator picks the first XLSX or CSV it finds and reads it as a flat row-per-work-order list (not a job-level rollup). Rollups happen in JS.

| File (typical name) | Source | Cadence | Required columns (exact bracket name) |
|---|---|---|---|
| `Residential Job Backlog-YYYY-MM-DD-...xlsx` | Salesforce, `Residential Job Backlog` or `Residential Work Orders` report | Daily | `Account: Account Name`, `Job Type`, `Job Status`, `Days in Status`, `Status`, `Sub-Status`, `Service Type`, `Service Object`, `Salesperson Name`, `Job: Final Contract Amount`, `Work Order Number`, `Contract Signed On`, `Branch Location to Service`, `Job: Job Number` |

> **Column-name source of truth.** If the kit and a real XLSX disagree, the XLSX wins. The calculator reads columns by exact bracket name. Renaming breaks everything.

> **Days in Status** is provided by Salesforce as a number. The calculator does not compute it from `Last Status Change Date`. Per kit Section C.

> **Filename matching.** First .xlsx or .csv in the folder wins. The calculator does not reach for a second file.

---

## Locked rules (the math)

Every rule gets a number. Numbers persist. New rules append at the end.

### RULE-201 - Row mapping
Each Salesforce row becomes a normalized record with these fields:

| Output field | Source column |
|---|---|
| `account` | `Account: Account Name` |
| `jobType` | `Job Type` |
| `jobStatus` | `Job Status` |
| `daysInStatus` | `Days in Status` (parsed as float, strip `$` and `,`) |
| `woStatus` | `Status` |
| `subStatus` | `Sub-Status` |
| `serviceType` | `Service Type` |
| `trade` | `Service Object` |
| `salesperson` | `Salesperson Name` |
| `contract` | `Job: Final Contract Amount` (parsed as float, strip `$` and `,`) |
| `woNumber` | `Work Order Number` |
| `signed` | `Contract Signed On` |
| `branch` | `Branch Location to Service` |
| `jobNum` | `Job: Job Number` |

Rows without either a `jobNum` or a `woNumber` are dropped (defensive filter for blank trailing rows).

### RULE-202 - WO Status taxonomy
Status comes from the `Status` column verbatim. The dashboard treats these as the canonical buckets:

- `Completed`
- `Scheduled`
- `Dispatched`
- `In Progress`
- `Not Started`
- `On Hold`
- `Ready to Schedule` (RTS)
- `Ready After Service` (RAS, also surfaces in source data as `Requires Additional Service`. The calculator treats both strings as RAS.)
- `Pending Permit` / `Pending Financing` / `Pending Sales Adjustment` are Not Started variants and are surfaced through the `subStatus` axis, not as separate top-level statuses.

Anything else is shown verbatim in the status distribution.

### RULE-203 - Job-level dedupe
A job is identified by `Job: Job Number`. To get job-level metrics:
- Group all rows by `jobNum`.
- The first row in the group is treated as the canonical job record (carries `contract`, `branch`, `jobStatus`, `salesperson`).
- `totalJobs` = count of unique `jobNum` values.
- `totalWOs` = count of all rows.
- `portfolioValue` = sum of `contract` across the unique-job set (NOT the row set, otherwise multi-WO jobs are double-counted).

### RULE-204 - Partial jobs (the throughput lever)
A job is **Partially Complete** when:
1. `jobStatus` = `In Progress`, AND
2. The job has at least one Completed WO, AND
3. The job has at least one non-Completed WO.

Trapped contract value = sum of `contract` across the partial-job set, deduped per job.

### RULE-205 - Zombie jobs
A job is a **Zombie** when:
1. `jobStatus` = `In Progress`, AND
2. Every WO on the job has `Status` = `Completed`.

These need administrative close-out, not production work.

### RULE-206 - Trailing trades
For each partial job, every non-Completed WO contributes to a trailing-trade rollup keyed by `Service Object` (trade). For each trailing trade emit:
- `trade`
- `openWos` = count of non-Completed WOs with this trade across all partial jobs
- `jobsBlocked` = count of distinct partial jobs the trade touches
- `avgDays` = mean `daysInStatus` across the open WOs
- `value` = sum of `contract` across the distinct jobs the trade blocks (deduped per job, NOT per WO)

Sort by `openWos` desc.

### RULE-207 - Aging
`daysInStatus` is taken from Salesforce as-is. The calculator buckets aging into:

| Bucket | Range |
|---|---|
| `<7d`    | days < 7 |
| `7-14d`  | 7 ≤ days < 14 |
| `14-30d` | 14 ≤ days < 30 |
| `30-60d` | 30 ≤ days < 60 |
| `60-90d` | 60 ≤ days < 90 |
| `90+d`   | days ≥ 90 |

For each WO status, emit avg and max `daysInStatus`.

### RULE-208 - WO status distribution
Count WOs by `Status` (RULE-202 taxonomy). Sort by count desc.

### RULE-209 - Holds breakdown
Filter to rows where `Status` = `On Hold`. Group by `Sub-Status`. For each sub-status emit:
- `subStatus`
- `count` = WO count
- `avgAge` = mean `daysInStatus`
- `oldest` = max `daysInStatus`

Common sub-statuses: `Pending Permit`, `Pending Sales`, `Pending Material`, `Homeowner Request`, `Pending HOA`, `Production`. Empty sub-status renders as `(no sub-status)`.

### RULE-210 - Pending Permit concentration
Filter to rows where `Sub-Status` = `Pending Permit`. Count per `Branch Location to Service`. Sort desc. Surfaces in `computedExtras.permitsByBranch` with `{branch, permits}` rows.

### RULE-211 - RAS (Ready After Service)
Filter to rows where `Status` = `Ready After Service` OR `Status` = `Requires Additional Service` (the source data uses both labels). These are the re-dispatch candidates.

### RULE-212 - Branch breakdown
For each `Branch Location to Service` emit:
- `branch`
- `wos` = total WO count
- `completed`, `onHold`, `rts`, `scheduled`, `inProg`, `ras` = WO counts by status
- `permits` = count of WOs with `Sub-Status` = `Pending Permit`
- `jobCount` = unique `jobNum` count
- `value` = sum of `contract` across unique jobs at the branch

Sort by `wos` desc. Empty branch values render as `(unset)`.

### RULE-213 - Trade breakdown
For each `Service Object` emit:
- `trade`
- `wos`, `completed`, `open` (= wos - completed), `onHold`, `rts`
- `jobCount`, `value` (deduped per job, like the branch rule)

Sort by `wos` desc. Empty trade values render as `(unspecified)`.

### RULE-214 - Salesperson breakdown
For each `Salesperson Name` emit:
- `salesperson`
- `wos`, `jobCount` (unique `jobNum`)
- `stale` = count of WOs with `daysInStatus` > 30
- `pendingSales` = count of WOs with `Sub-Status` = `Pending Sales`
- `staleValue` = sum of `contract`, deduped per `(salesperson, jobNum)` pair, across stale WOs
- `pendingValue` = sum of `contract`, deduped per `jobNum`, across Pending Sales WOs
- `branches` = unique branch count

Sort by `staleValue` desc. Top 15 surface in the dashboard. Empty salesperson values render as `(unassigned)`.

### RULE-215 - Revenue at risk
Sum of `contract` across unique jobs that have at least one WO with `daysInStatus` > 30. Deduped per `jobNum`.

### RULE-216 - Backlog (Not Started) pipeline
Filter to jobs where `jobStatus` = `Not Started`. For each branch emit:
- `branch`
- `jobs` = count of not-started jobs
- `value` = sum of `contract` across those jobs
- `maxDays` = oldest `daysInStatus` among the not-started jobs at that branch

Sort by `jobs` desc.

### RULE-217 - Oldest not-started jobs
Take the 15 oldest not-started jobs across the company by `daysInStatus`. Each row surfaces:
- `jobNum`, `account`, `branch`, `trade`, `subStatus`, `salesperson`, `daysInStatus`, `contract`

The `account` column carries customer names. It is fine inside the dashboard. Confidentiality applies in chat (see below).

### RULE-218 - Average days in status (job-level)
Mean `daysInStatus` across the unique-job set (NOT the WO set). Used in the executive KPI strip.

### RULE-219 - Specialty trade watch
Specialty trades are `Solar` and `Metal` (low-volume, high-value). Emit a small `specialtyWatch` table with WO counts per specialty trade for the watch list.

### RULE-220 - Gutter status breakdown
Gutters is the dominant trailing trade. Emit a `gutterStatusBreakdown` table: rows of `[Status, count]` for `Service Object` = `Gutters`, sorted by count desc. Used by the Trade Analysis page.

### RULE-221 - Header meta
The dashboard header reads:
- `headerMeta.totalJobs`
- `headerMeta.totalWOs`
- `headerMeta.portfolioValue`
- `headerMeta.avgDaysInStatus`
- `headerMeta.lastBuild` (ISO timestamp from the calculator run)

### RULE-222 - KPI strips
Five KPI strips are emitted as arrays of `{label, value, sub, tone}` where `tone` is one of `info`, `good`, `warn`, `crit`, or null.

- `kpisExecutive` (6 cards): Total Jobs, In Progress, Not Started, Partially Complete, Avg Days in Status, Total Portfolio Value
- `kpisRiskOpportunity` (2 cards): Revenue at Risk, Immediate Throughput Opportunity
- `kpisPartial` (5 cards): Partial Jobs, Trapped Value, Open WOs on Partials, RTS Ready Today, Top Trailing Trade
- `kpisHolds` (4 cards): Total Holds, Pending Permit, Pending Sales, Avg Hold Age
- `kpisSales` (4 cards): Active Reps, Stuck Value >30d, Reps with Stuck Work, Top Stuck Rep
- `kpisBacklog` (4 cards): Not Started Jobs, Not Started Value, Oldest Not Started, Top Branch Concentration

### RULE-223 - Charts payload
Charts are emitted as Chart.js-compatible payloads under `charts[]`, each `{id, labels, datasets[]}`. The page-defs file does the styling. The required IDs are:

| Chart ID | Description |
|---|---|
| `ch-wo-status`        | WO status distribution (single dataset) |
| `ch-branch`           | Branch production load, stacked by status (5 datasets: Completed / Open / On Hold / RTS / Scheduled) |
| `ch-wo-aging`         | WO aging by status (2 datasets: Avg Days, Max Days) |
| `ch-trade`            | WO volume by trade (2 datasets: Completed, Open) |
| `ch-incomplete-status`| Open WO status mix on partial jobs |
| `ch-incomplete-age`   | Open WO age distribution on partial jobs (RULE-207 buckets) |
| `ch-backlog`          | Backlog (not started) job count by branch |

### RULE-224 - Tables payload
Tables are emitted under `tables[]` as `{id, title, headers, rows}` where rows are arrays of primitives (the page-defs file maps them to renderer rows). The required IDs are:

| Table ID | Headers |
|---|---|
| `branchDetail` | Branch, WOs, Completed, On Hold, RTS, Scheduled, In Progress, RAS, Permits, Jobs, Value |
| `holdsBySubStatus` | Sub-Status, WOs, Avg Age (d), Oldest (d) |
| `trailingTrades` | Trade, Open WOs, Jobs Blocked, Trapped Value |
| `gutterStatusBreakdown` | Status, Count |
| `tradeDetail` | Trade, WOs, Completed, Open, Jobs, Value |
| `specialtyWatch` | Trade, WOs |
| `salesTop15ByStuck` | Salesperson, WOs, Jobs, Stuck Value, Stale WOs, Branches |
| `backlogByBranch` | Branch, Jobs, Value, Oldest (d) |
| `oldest15NotStarted` | Job #, Account, Branch, Trade, Sub-Status, Salesperson, Days, Contract |

### RULE-225 - Computed extras
The dashboard reads two scalar arrays from `computedExtras`:
- `permitsByBranch` (RULE-210): `[{branch, permits}, ...]`
- (Reserved for future expansion. Add new entries here, do not relocate existing ones.)

### RULE-226 - Action plan
The Action Plan tab reads from `actionPlan`:
- `strategicGoal` (string, plain English)
- `immediate[]`, `structural[]`, `cadence[]` (arrays of bullet strings)
- `bottomLine` (string)

The calculator generates these programmatically from the live numbers (no hard-coded customer or rep names). The strategic-goal headline interpolates the partial value, the at-risk value, and the RTS-on-partial count.

---

## Confidentiality

The backlog includes customer names and dollar amounts. They are FINE inside the rendered dashboard (it is meant for internal leadership). Outside the dashboard:
- Do not list individual customers, salespeople, or specific job dollars in chat responses.
- Summary stats by branch, trade, status, and sub-status are OK in chat (e.g. "840 open WOs across 13 branches, 120 days median age" is fine; "Customer Smith owes $X" is not).
- The build pipeline writes name-bearing data to `data.json` and `data.js`. Do not paste those files outside this repo.

The calculator runs a defensive name-strip when `Branch Location to Service` contains `confidential` or `copyright`, in case a Salesforce export is accidentally re-saved with redaction watermarks.

---

## Validation checks (auto-fail)

The calculator throws (causing the pipeline to fail and refuse to write output) when:

- **VAL-201** A required column from RULE-201 is missing in the input file.
- **VAL-202** Zero rows after RULE-201 dedupe (likely an empty export or a header-row mismatch).
- **VAL-203** Zero unique jobs after RULE-203 (the `Job: Job Number` column did not parse).
- **VAL-204** Zero unique branches after RULE-212 (the branch column did not parse).
- **VAL-205** Total open WO count drifts more than 30 percent up or down from the previous build (sanity check against day-over-day drift). Bypass with `FZ_SKIP_DRIFT_CHECK=1` for legitimate large jumps (e.g. a new branch onboarding).
- **VAL-206** Any branch with prior history shows zero WOs (likely a stage-filter bug). Warn only, do not fail.

The drift check (VAL-205) reads the previous `redesign/shared/extracted-data.json` BACKLOG.headerMeta.totalWOs. If the file is missing or the previous count cannot be parsed, the check is skipped (first-build mode).

---

## Change log

| Date | Version | Change | Approved by |
|---|---|---|---|
| 2026-04-15 | 0.1 | Initial passthrough scaffold | Greg |
| 2026-05-02 | 1.0 | Rules encoded against the canonical Salesforce export. RULE-201 through RULE-226 added. VAL-201 through VAL-206 added. Calculator builds the full BACKLOG shape (header meta, five KPI strips, seven charts, nine tables, computed extras, action plan). | Greg |
