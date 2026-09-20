# Daily refresh runbook

Full site, all three lines of business, ten dashboards, one command.

## The whole thing

```bash
cd ~/Documents/GitHub/feazel-dashboards-v2
./refresh-all.sh ~/Downloads/drop-YYYY-MM-DD
```

Then read the data-date table it prints, and if it looks right:

```bash
git commit -m "refresh: $(date +%F) all LOBs" && git push
```

Netlify deploys on push. Nothing else to do.

## What it does, in order

1. **Routes the drop.** `route-drop.sh` copies each export into the input
   folder(s) that need it. Two files feed two dashboards each, which is why
   this is a script rather than something to do by hand. Previous inputs are
   moved into `_superseded/<timestamp>/` rather than deleted, so a bad drop is
   always recoverable.
2. **Preflight.** `preflight.sh` reports, per dashboard, whether every required
   input is present and how old it is. If anything required is missing it
   **stops before building**, because the alternative is quietly republishing
   yesterday's numbers under today's date.
3. **Builds all ten dashboards** with `FEAZEL_STRICT=1`.
4. **Prints the data dates** per LOB per tab.
5. **Stages** `redesign/`. It does not commit and does not push.

Run `./refresh-all.sh` with no argument to rebuild from inputs already in
place, skipping the routing step.

## The ten dashboards

| LOB | Dashboards |
|---|---|
| residential | sales-overview, revenue-forecast, backlog, installs-ytd |
| multi-family | sales-overview, revenue-forecast, backlog, installs-ytd |
| service | revenue-forecast, service-calls |

## Reading the data-date table

This is the one step that needs a human. Each tab prints the date of the data
behind it. Anything showing an old date did not refresh, which almost always
means its input folder did not get today's file.

Two dates are expected to look "wrong" and are not:

- **Residential revenue forecast lags by a day or two.** It shows the newest
  booked NetSuite invoice, not the clock, because AR lags Salesforce. Two days
  is normal. More than five trips the staleness gate.
- **Sales overview shows "YTD 2026"** rather than a date. That tab is a
  year-to-date rollup and has no single as-of date.

## When the drift gate fires

`VAL-005` stops the build when a headline number moves more than its threshold
against the previous build. It is doing its job, so do not reflexively bypass
it. Check whether the movement is real first: open the source export and look
at what changed. If it is real, rerun with `FZ_SKIP_DRIFT_CHECK=1` and say why
in the commit message.

It fired on 2026-09-20 for multi-family at 26%, and the movement was real: the
baseline was a 39-day-old build and August closed at $7.99M, the strongest
month of the year.

## The Path to Plan tab

The residential Budget Recovery tab is now **Path to Plan**, rebuilt on every
refresh rather than anchored to Q1. It answers four questions the old tab did
not:

1. **How big is the gap**, in dollars still to invoice by 12/31 and days left.
2. **How much is already sold.** Work in the backlog converts on throughput
   alone. Separating it from what must be newly sold turns one vague number
   into a production problem and a sales problem, which have different owners.
3. **What a sale is still worth.** Median sale-to-invoice is 29 days, p75 is
   50. A sale made in late December cannot be produced and billed before year
   end. The tab shows, week by week, what a dollar sold then is actually worth
   this year. It falls below 75% in mid-November and below half in early
   December.
4. **Is plan reachable**, stated plainly, with the reasons underneath.

Plus the production lever: finished-but-unbilled work broken out by what is
blocking it, and what a day of cycle-time reduction is worth as year end
approaches (small in September, large in December).

It is built by `build-path-to-plan.py`, which runs **inside** the V5 model pass
in `revenue-forecast.js`. That placement is deliberate: the model runs in an
ephemeral work directory with its date set to the DATA date, so measuring
anywhere else would quote a different day's gap than the forecast beside it.
Sales Overview refuses to build under `FEAZEL_STRICT` if the two disagree.

A caveat the tab states on itself: conversion rates come from jobs that *did*
invoice, so they read optimistic, and the hold-pace landing zone sits above the
V5 model's number. V5 remains the forecast of record. This tab decomposes where
the remaining revenue can come from; it is not a competing forecast.

## Known gaps

**Budget reconciliation: monthly cells do not sum to the Total 2026 cell.**
Resolved 2026-09-20 in the sense that real monthly plans are now loaded, but
the underlying workbook does not tie out and the build says so on every run:

| LOB | Months sum to | Total 2026 cell | Gap |
|---|---|---|---|
| Multi-family | $49,728,651 | $51,673,207 | **$1,944,556** |
| Service | $6,942,033 | $6,800,179 | -$141,853 |
| Residential | $123,956,895 | $125,932,927 | $1,976,033 |

$1,799,826 of the multi-family gap is a **sign flip**: the `40003 - Sales:Work
in Progress` row's monthly cells sum to -$899,913 while its Total 2026 cell
reads +$899,913, same magnitude, opposite sign.

The locked board constants match the Total 2026 cells, so the headline annual
budgets are unaffected and the calculators keep using them. The consequence is
that monthly gaps will never sum to the annual gap. Until the workbook ties
out, treat the annual number and the monthly variance as two separate
statements, and do not add the monthly gaps up expecting the annual one.

**A consolidated budget splits automatically.** Drop `Budget <year>.xlsx`
(all three LOBs stacked in one sheet) into the daily drop and `route-drop.sh`
generates the per-LOB files with `split-budget.py`. Do not point the
calculators at the consolidated file directly: both the MF and Service parsers
take the FIRST "Total 40000 Revenue" row in the first sheet, which in that file
is the COMPANY row, so multi-family would read the $181M company plan as its
own. Residential is deliberately not regenerated, because its existing budget
file carries a second "Actual" sheet the consolidated export does not have.

**Residential plan is now derived, not stored.** Closed 2026-09-20. The weekly
targets and budget recovery plan live in `plan/residential-plan.json`, derived
from the V5 model. `calculators/sales-overview.js` reads that snapshot; the old
constants remain only as a loud fallback.

Publishing is deliberate and never part of the daily build:

```bash
python3 publish-plan.py --dry-run                  # preview the change
python3 publish-plan.py --approve "<reason>"       # publish, recording why
```

It is separate from the build on purpose. The recovery window shrinks as the
year runs while the shortfall does not, so the uplift climbs on its own. A
nightly republish would push a rising quota to the field that nobody approved.
The publisher warns when the uplift is 25% or more for exactly that reason.

Staleness is measured against the model run behind the snapshot, so a stale
model does not also read as a stale plan. Warn at 21 days, hard fail at 45.
If the snapshot goes missing the build still runs, on the frozen fallback
constants, and says loudly that it did.

**Small run-to-run variance.** Rebuilding the same inputs can move residential
backlog bucketing by a few tens of thousands of dollars (observed: $28,403 on
$17.6M, 0.16%, reclassified between buckets with the total preserved). Headline
KPIs do not move. Do not chase it.

## Files not routed

All exports in the daily drop are now routed. Three of them are **staged but
inert**: they land in a folder but no calculator reads them yet.

| File | Routed to | What it is |
|---|---|---|
| `Residential Completed Jobs-*.xlsx` | residential/revenue-forecast | 111 jobs, $1.93M, sitting in Completed awaiting invoice, with an `Age` column |
| `Commercial Completed Jobs-*.xlsx` | multi-family/revenue-forecast | same shape, 5 jobs, $427K |
| `Service Completed Jobs YTD-*.xlsx` | service/revenue-forecast | 1,841 rows with full cycle-time stamps |

Note the two patterns are disjoint: the literal `-` after "Jobs" is what
separates `Completed Jobs-*` (awaiting invoice) from `Completed Jobs YTD-*`
(cycle times). Do **not** route the non-YTD file into a `sales-overview`
folder: that calculator picks its completed file with a bare `/completed/i`
match and the 111-row file could silently displace the 4,682-row YTD one.

## Inputs do not travel with the repo

`inputs/**/*.xlsx` and `*.csv` are gitignored on purpose: they carry customer
account names, salesperson and production manager names, contract amounts and
per-job profitability, and this repo is public. Keep it that way. The exports
live on your machine only.

The residential V5 Python model reads from `~/Documents/Claude/Projects/uploads/`
rather than the repo. The router copies the full drop there too, so both
halves of the pipeline see the same morning's data.

## If git complains about index.lock

`refresh-all.sh` clears stale lock files at the start and end of its run. If
you hit it outside the script:

```bash
rm -f .git/index.lock .git/HEAD.lock
```
