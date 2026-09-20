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

## Known gaps

**Multi-family and service monthly Plan columns are a flat annual/12 split.**
`2026 Commercial Budget.xlsx` and `2026 Service Budget.xlsx` are missing. The
annual budgets are correct, locked board constants ($51,673,207 MF,
$6,800,179 service). The monthly gap columns on those two tabs are not
meaningful until the real budget files land. These were Mahlet's NetSuite
exports and need a new owner. Drop them in the two revenue-forecast input
folders and the flat plan resolves itself.

**Residential plan constants are hand-maintained.** `PLAN_WEEKLY_TARGETS` and
`PLAN_BUDGET_RECOVERY` in `calculators/sales-overview.js` are regenerated from
the V5 model by hand, not by the build. They were five months stale before
2026-09-20. Until they are sourced from the V5 JSON bridge, they will drift
again. Tracked as gap #12 in `FORECASTING_RULES.md` Section 11.

**Small run-to-run variance.** Rebuilding the same inputs can move residential
backlog bucketing by a few tens of thousands of dollars (observed: $28,403 on
$17.6M, 0.16%, reclassified between buckets with the total preserved). Headline
KPIs do not move. Do not chase it.

## Files not routed

Three exports in the daily drop are not claimed by any dashboard:

- `Commercial Completed Jobs-*.xlsx` (the non-YTD variant)
- `Residential Completed Jobs-*.xlsx` (the non-YTD variant)
- `Service Completed Jobs YTD-*.xlsx`

The router names them at the end of its run. If one of these should feed a
tab, add a route in `route-drop.sh` and a requirement in `preflight.sh`.

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
