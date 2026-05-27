# CLAUDE.md — feazel-dashboards-v2

This is a working repo, not the orientation hub. Read the master orientation file first:
`/Users/greggraven/Documents/Claude/Projects/Feazel Command Center/CLAUDE.md`
It covers who Greg is, how he wants you to work, confidentiality (§10.2), the daily refresh
routine, and the locked rules. What follows is the repo-specific short version.

---

## What this repo is

The dashboards build. Node calculators fan out from `pipeline/build.js` into the Residential,
Multi-Family, and Service line-of-business dashboards, plus the Expo app shell. It reads the
residential V5 model output (`v5_forecast_summary.json`) produced by the sibling repo at
`/Users/greggraven/Documents/Claude/Projects/Forecasting Process`.

## Daily build

```bash
node pipeline/build.js              # full build, all LOBs
node pipeline/build.js --validate-only
FZ_SKIP_DRIFT_CHECK=1 node pipeline/build.js   # bypass the VAL drift gate (see below)
```

Inputs stage under `inputs/<lob>/<dashboard>/`. When more than one match is present, the
pipeline picks the most recently modified file (mtime-newest-wins). Built data lands at
`redesign/data/data.json`.

The canonical end-to-end refresh (V5 Python pass then this build) is the one-shot
`Forecasting Process/daily_refresh.sh` on Greg's Mac. This Cowork sandbox has no scipy, so the
residential V5 pass cannot run here and the Residential calculator falls back to the
`extracted-data.json` snapshot. MF and Service build fine in the sandbox.

## Rules that bite (do not change without Greg's approval)

- **V5 methodology is locked (2026-04-19).** Do not touch locked WIP constants or the cycle-time
  hierarchy without explicit approval. Canonical rules: `FORECASTING_RULES.md` in this repo (this
  copy is the one kept current).
- **Monthly bucketing by Period, not Date (2026-05-22).** Monthly invoiced revenue buckets by the
  NetSuite posting Period column, not invoice Date. Strict Period only, no Date fallback. Credit
  Memos and non-Invoice AR types are filtered out. Implemented in
  `calculators/lib/netsuite-invoices.js` (shared parser, all JS calculators).
- **VAL drift gate.** The build fails when a headline metric swings past threshold versus the
  prior snapshot. Only bypass with `FZ_SKIP_DRIFT_CHECK=1` after confirming the swing is a real
  data change, and flag it for Greg.

## Push

Do not push on Greg's behalf without his go-ahead. Stage, summarize, then let him confirm.

```bash
git add -A && git commit -m "<date> daily refresh" && git push
```

Keep profitability and margin out of chat (§10.2). When in doubt, read `FORECASTING_RULES.md`.
