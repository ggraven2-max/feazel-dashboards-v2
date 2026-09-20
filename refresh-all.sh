#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# Feazel dashboards, full-site refresh. Every page, all three LOBs.
#
#   ./refresh-all.sh ~/Downloads/drop-2026-09-21     # route, then build
#   ./refresh-all.sh                                 # build from what is already in place
#
# Steps: route the drop -> preflight -> build all 10 dashboards -> data-date
# table -> stage the commit. It does NOT push. Review the table first.
#
# STRICT mode is on: if the V5 model cannot run, or an input is stale, the
# build fails loudly instead of quietly republishing yesterday's forecast.
# ---------------------------------------------------------------------------
set -euo pipefail
cd "$(dirname "$0")"

DROP="${1:-}"
export FEAZEL_STRICT=1
export FEAZEL_FORECAST_SRC="${FEAZEL_FORECAST_SRC:-$HOME/Documents/Claude/Projects/Forecasting Process}"

if [ ! -d "$FEAZEL_FORECAST_SRC" ]; then
  echo "ERROR: V5 Python source not found at: $FEAZEL_FORECAST_SRC" >&2
  echo "Set FEAZEL_FORECAST_SRC to the folder holding refresh_v5.py." >&2
  exit 1
fi

# git leaves lock files behind when a previous command was interrupted. They
# block every later commit with a confusing "another git process" error.
rm -f .git/index.lock .git/HEAD.lock 2>/dev/null || true

if [ -n "$DROP" ]; then
  ./route-drop.sh "$DROP"
  echo
fi

./preflight.sh
echo

# Path to Plan is LIVE measurement, built inside the model run itself by
# revenue-forecast.js, so it can never quote a different day's gap than the
# forecast beside it. Sales Overview runs BEFORE revenue-forecast in the
# project order, so it consumes the measurement from this run's model pass;
# a first-ever run therefore needs the model pass to happen first, which is
# what this extra call is for. It costs about four seconds.
echo "==> Running the V5 model and measuring the path to plan"
node pipeline/build.js --lob residential --project revenue-forecast

echo
echo "==> Building all 10 dashboards"
node pipeline/build.js

echo
echo "==> Data dates in the built snapshot"
node -e '
const fs=require("fs");
for(const lob of ["residential","multi-family","service"]){
  const p="redesign/"+lob+"/shared/extracted-data.json";
  if(!fs.existsSync(p)){console.log("  "+lob+": no snapshot");continue;}
  const d=JSON.parse(fs.readFileSync(p,"utf8"));
  console.log("  "+lob);
  const pick=o=>o&&(o.runDate||o.generated||o.asOf||(typeof o.subtitle==="string"?o.subtitle.slice(0,68):null))||"unknown";
  for(const k of Object.keys(d)){ if(k==="_meta")continue;
    console.log("    "+k.padEnd(18)+pick(d[k])); }
}'

echo
echo "==> Changed files"
git status --short redesign/ || true

rm -f .git/index.lock .git/HEAD.lock 2>/dev/null || true
git add redesign/ 2>/dev/null || true

cat <<MSG

Staged and ready. Read the data-date table above before you push: anything
showing an old date did not refresh, which almost always means its input
folder did not get today's file.

  git commit -m "refresh: $(date +%F) all LOBs" && git push

KNOWN, until the budget files land: the multi-family and service monthly
Plan columns are a flat annual/12 split. Annual budgets are correct and
locked. Monthly gap columns on those two tabs are not meaningful yet.
MSG
