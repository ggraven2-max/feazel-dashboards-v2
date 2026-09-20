#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# Feazel dashboards, morning drop router.
#
#   ./route-drop.sh ~/Downloads/drop-2026-09-21
#
# Takes one folder of Salesforce / NetSuite exports and copies each file into
# the input folder(s) that need it, across all three LOBs and ten dashboards.
# Two files feed two dashboards each, which is why this is a script and not a
# thing anyone should do by hand every morning.
#
# Originals are left where they are. Previous inputs are moved into
# _superseded/ inside each folder rather than deleted, so a bad drop is always
# recoverable.
#
# Pattern order matters: the more specific pattern must come first. The
# "* Completed Jobs YTD*" reports are NOT the same as "* Completed Jobs-*".
# ---------------------------------------------------------------------------
set -euo pipefail

DROP="${1:-}"
REPO="$(cd "$(dirname "$0")" && pwd)"
UPLOADS="${FEAZEL_UPLOADS:-$HOME/Documents/Claude/Projects/uploads}"

if [ -z "$DROP" ] || [ ! -d "$DROP" ]; then
  echo "usage: ./route-drop.sh <folder-with-this-mornings-exports>" >&2
  echo "       the folder you unzipped the Salesforce and NetSuite exports into" >&2
  exit 1
fi

# pattern -> one or more destination folders, pipe separated
ROUTES=(
  # ---- residential ----
  "Residential Turned in YTD*.xlsx|residential/sales-overview"
  "Closing Percent By Branch*.xlsx|residential/sales-overview"
  "Residential Completed Jobs YTD*.xlsx|residential/sales-overview|residential/installs-ytd"
  "Residential Forecasting Report*.xlsx|residential/revenue-forecast"
  "Sold Not Processed*.xlsx|residential/revenue-forecast"
  "Contracts Signed YTD - Residential*.xlsx|residential/revenue-forecast"
  "ResInvoicedYTDResults*.csv|residential/revenue-forecast"
  "GregProfitabilityResResults*.csv|residential/revenue-forecast"
  "Residential Budget*.xlsx|residential/revenue-forecast"
  "Jobs with Work Orders - Residential*.xlsx|residential/backlog"
  # ---- multi-family (Commercial exports) ----
  "Commercial Turned in YTD*.xlsx|multi-family/sales-overview"
  "Commercial Completed Jobs YTD*.xlsx|multi-family/sales-overview|multi-family/installs-ytd"
  "Commercial Forecasting Report*.xlsx|multi-family/revenue-forecast"
  "Contracts Signed YTD - Commercial*.xlsx|multi-family/revenue-forecast"
  "MFInvoicedYTDResults*.csv|multi-family/revenue-forecast"
  "GregProfitabilityMFResults*.csv|multi-family/revenue-forecast"
  "*Commercial Budget*.xlsx|multi-family/revenue-forecast"
  "Jobs with Work Orders - Commercial*.xlsx|multi-family/backlog"
  # ---- service ----
  "ServiceInvoicedYTDResults*.csv|service/revenue-forecast"
  "GregProfitabilityServiceResults*.csv|service/revenue-forecast"
  "All Jobs with WOs and SAs*.xlsx|service/revenue-forecast"
  "*Service Budget*.xlsx|service/revenue-forecast"
  "Service Appointments YTD*.xlsx|service/service-calls"
)

STAMP="$(date +%Y%m%d-%H%M%S)"
declare -A PLACED=()
ROUTED=0

echo "==> Routing $(ls -1 "$DROP" | wc -l | tr -d ' ') files from $(basename "$DROP")"
echo

for route in "${ROUTES[@]}"; do
  IFS='|' read -r pattern rest <<< "$route"
  dests="$(echo "$route" | cut -d'|' -f2-)"

  # find -name with a QUOTED pattern: these patterns contain spaces and an
  # unquoted glob would word-split them into nonsense.
  matches=()
  while IFS= read -r -d "" x; do matches+=("$x"); done \
    < <(find "$DROP" -maxdepth 1 -type f -name "$pattern" -print0 2>/dev/null)
  [ ${#matches[@]} -eq 0 ] && continue

  # newest match wins if the drop has more than one
  src="$(ls -t "${matches[@]}" | head -1)"
  base="$(basename "$src")"

  IFS='|' read -ra dirs <<< "$dests"
  for d in "${dirs[@]}"; do
    target="$REPO/inputs/$d"
    [ -d "$target" ] || { echo "  !! no such input folder: inputs/$d" >&2; continue; }

    # retire anything already there that this file replaces
    mkdir -p "$target/_superseded/$STAMP"
    while IFS= read -r -d "" old; do
      [ "$(basename "$old")" = "$base" ] && continue
      mv "$old" "$target/_superseded/$STAMP/" 2>/dev/null || true
    done < <(find "$target" -maxdepth 1 -type f -name "$pattern" -print0 2>/dev/null)

    cp "$src" "$target/$base"
    printf '  %-46s -> %s\n' "${base:0:46}" "$d"
    PLACED["$base"]=1
    ROUTED=$((ROUTED+1))
  done
done

# The residential V5 Python model reads from its own uploads folder, not the
# repo. Give it the whole drop; find_file() picks the newest match per pattern.
mkdir -p "$UPLOADS"
cp "$DROP"/* "$UPLOADS/" 2>/dev/null || true
echo
echo "  full drop also copied to $UPLOADS (the V5 model reads from there)"

echo
UNROUTED=0
for f in "$DROP"/*; do
  b="$(basename "$f")"
  [ -f "$f" ] || continue
  if [ -z "${PLACED[$b]:-}" ]; then
    [ $UNROUTED -eq 0 ] && echo "==> Not routed (no dashboard claims these):"
    printf '  %s\n' "$b"
    UNROUTED=$((UNROUTED+1))
  fi
done
[ $UNROUTED -eq 0 ] && echo "==> Every file in the drop was routed."

echo
echo "$ROUTED placements made. Previous inputs retired to _superseded/$STAMP/"
