#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# Feazel dashboards, preflight.
#
#   ./preflight.sh
#
# Reports, per dashboard, whether each required input is present and how old
# it is, BEFORE spending five minutes on a build. Exits non-zero if anything
# required is missing, so refresh-all.sh can stop rather than quietly
# republishing yesterday's numbers.
#
# REQUIRED means the dashboard is wrong or empty without it.
# OPTIONAL means the dashboard degrades to a clear empty state.
# ---------------------------------------------------------------------------
set -uo pipefail
REPO="$(cd "$(dirname "$0")" && pwd)"
MAX_AGE_DAYS="${FEAZEL_MAX_AGE_DAYS:-3}"

# dashboard|REQ:pattern,REQ:pattern|OPT:pattern,...
SPECS=(
  "residential/sales-overview|Residential Turned in YTD*.xlsx,Residential Completed Jobs YTD*.xlsx|Closing Percent By Branch*.xlsx"
  "residential/revenue-forecast|Residential Forecasting Report*.xlsx,ResInvoicedYTDResults*.csv,Residential Budget*.xlsx|Sold Not Processed*.xlsx,Contracts Signed YTD - Residential*.xlsx,GregProfitabilityResResults*.csv"
  "residential/backlog|Jobs with Work Orders - Residential*.xlsx|"
  "residential/installs-ytd|Residential Completed Jobs YTD*.xlsx|"
  "multi-family/sales-overview|Commercial Turned in YTD*.xlsx,Commercial Completed Jobs YTD*.xlsx|"
  "multi-family/revenue-forecast|Commercial Forecasting Report*.xlsx|*Commercial Budget*.xlsx,Contracts Signed YTD - Commercial*.xlsx,MFInvoicedYTDResults*.csv,GregProfitabilityMFResults*.csv"
  "multi-family/backlog|Jobs with Work Orders - Commercial*.xlsx|"
  "multi-family/installs-ytd|Commercial Completed Jobs YTD*.xlsx|"
  "service/revenue-forecast|ServiceInvoicedYTDResults*.csv|*Service Budget*.xlsx,GregProfitabilityServiceResults*.csv,All Jobs with WOs and SAs*.xlsx"
  "service/service-calls|Service Appointments YTD*.xlsx|"
)

MISSING_REQ=0; STALE=0; MISSING_OPT=0
NOW=$(date +%s)

check() {   # folder pattern kind
  local dir="$1" pat="$2" kind="$3"
  # find -name with a QUOTED pattern: these patterns contain spaces
  # ("Residential Turned in YTD*.xlsx") and an unquoted glob expansion
  # word-splits them into nonsense. This was a real bug, not paranoia.
  local m=()
  while IFS= read -r -d "" x; do m+=("$x"); done \
    < <(find "$REPO/inputs/$dir" -maxdepth 1 -type f -name "$pat" -print0 2>/dev/null)
  if [ ${#m[@]} -eq 0 ]; then
    if [ "$kind" = REQ ]; then
      printf '    %-9s %-46s MISSING\n' "REQUIRED" "${pat:0:46}"; MISSING_REQ=$((MISSING_REQ+1))
    else
      printf '    %-9s %-46s absent\n' "optional" "${pat:0:46}"; MISSING_OPT=$((MISSING_OPT+1))
    fi
    return
  fi
  local f; f="$(ls -t "${m[@]}" | head -1)"
  local mt; mt=$(stat -c %Y "$f" 2>/dev/null || stat -f %m "$f" 2>/dev/null || echo "$NOW")
  local age=$(( (NOW - mt) / 86400 ))
  local flag=""
  if [ "$age" -gt "$MAX_AGE_DAYS" ]; then flag="  <-- ${age}d old"; [ "$kind" = REQ ] && STALE=$((STALE+1)); fi
  printf '    %-9s %-46s ok%s\n' "$([ "$kind" = REQ ] && echo REQUIRED || echo optional)" "$(basename "$f" | cut -c1-46)" "$flag"
}

echo "==> Preflight, inputs for all 10 dashboards (stale threshold ${MAX_AGE_DAYS}d)"
for spec in "${SPECS[@]}"; do
  IFS='|' read -r dir req opt <<< "$spec"
  echo
  echo "  $dir"
  IFS=',' read -ra R <<< "$req"; for p in "${R[@]}"; do [ -n "$p" ] && check "$dir" "$p" REQ; done
  IFS=',' read -ra O <<< "$opt"; for p in "${O[@]}"; do [ -n "$p" ] && check "$dir" "$p" OPT; done
done

echo
echo "─────────────────────────────────────────────────────────────"
printf 'required missing: %d   required stale: %d   optional absent: %d\n' "$MISSING_REQ" "$STALE" "$MISSING_OPT"

if [ "$MISSING_REQ" -gt 0 ]; then
  echo
  echo "STOP: a required input is missing. That dashboard would publish stale or"
  echo "empty numbers. Route the drop first, or drop the named file in by hand."
  exit 1
fi
if [ "$STALE" -gt 0 ]; then
  echo
  echo "WARNING: a required input is older than ${MAX_AGE_DAYS} days. The build will run,"
  echo "but check the data-date table afterwards before pushing."
fi
exit 0
