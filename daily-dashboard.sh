#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# Feazel dashboards, daily refresh.
#
#   1. Drop the morning Salesforce / NetSuite exports into
#      inputs/<lob>/<project>/  (see each folder's RULES.md for what goes where)
#   2. ./daily-dashboard.sh                 # residential, the default
#      ./daily-dashboard.sh multi-family    # or another LOB
#   3. Review the freshness table it prints, then push when it looks right.
#
# STRICT mode is on: if the V5 model cannot run, or its inputs are stale, the
# build fails loudly instead of quietly republishing yesterday's forecast.
# ---------------------------------------------------------------------------
set -euo pipefail
cd "$(dirname "$0")"

LOB="${1:-residential}"

export FEAZEL_STRICT=1
export FEAZEL_FORECAST_SRC="${FEAZEL_FORECAST_SRC:-$HOME/Documents/Claude/Projects/Forecasting Process}"

if [ ! -d "$FEAZEL_FORECAST_SRC" ]; then
  echo "ERROR: V5 Python source not found at: $FEAZEL_FORECAST_SRC" >&2
  echo "Set FEAZEL_FORECAST_SRC to the folder holding refresh_v5.py." >&2
  exit 1
fi

echo "==> Building $LOB"
node pipeline/build.js --lob "$LOB"

echo
echo "==> Data dates in the built snapshot"
node -e '
const fs=require("fs");
const lob=process.argv[1];
const p="redesign/"+lob+"/shared/extracted-data.json";
if(!fs.existsSync(p)){console.log("  no snapshot at "+p);process.exit(0);}
const d=JSON.parse(fs.readFileSync(p,"utf8"));
const pick=o=>o&&(o.runDate||o.generated||o.asOf||(typeof o.subtitle==="string"?o.subtitle.slice(0,72):null))||"unknown";
for(const k of Object.keys(d)){
  if(k==="_meta")continue;
  console.log("  "+k.padEnd(18)+pick(d[k]));
}
' "$LOB"

echo
echo "==> Changed files"
git status --short redesign/ || true

cat <<MSG

Review the numbers above. Anything showing an old date did not refresh,
which usually means its input folder is empty. When it looks right:

  git add redesign/ && git commit -m "refresh: $(date +%F) $LOB" && git push

MSG
