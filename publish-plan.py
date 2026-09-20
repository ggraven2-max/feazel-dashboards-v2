#!/usr/bin/env python3
"""
Publish the residential plan snapshot that the Sales Overview dashboard reads.

WHY THIS EXISTS
---------------
The weekly sales and production targets and the budget recovery plan used to
live as hand-maintained constants inside calculators/sales-overview.js. Nothing
derived them and nothing detected drift, so on 2026-09-20 they were found to be
five months stale: the dashboard showed a 6.9% recovery uplift while the model
said 41.9%, and a weekly production target 30% light.

The fix is not to copy the numbers more often. It is to derive them from the
V5 model and to make publishing a deliberate, dated, attributable act.

WHY IT IS NOT PART OF THE DAILY BUILD
-------------------------------------
RULE-018 locks these constants against daily churn, and that intent is right:
a weekly target that moves every morning is not a target. There is a second
reason. The recovery window shrinks as the year runs while the shortfall does
not, so the recovery ratio climbs mechanically. Wiring this into the nightly
build would publish a rising quota to the field that nobody approved. So the
daily build READS the snapshot; only this script WRITES it, and only with
--approve.

USAGE
-----
    python3 publish-plan.py --dry-run
    python3 publish-plan.py --approve "Q4 reset, reviewed with Ashton"

Reads v5_budget_solve.pkl and v5_forecast_summary.json from
$FEAZEL_FORECAST_SRC (default: ~/Documents/Claude/Projects/Forecasting Process)
and writes plan/residential-plan.json next to this script.
"""
import argparse, datetime, json, os, sys, warnings
warnings.filterwarnings("ignore")

HERE = os.path.dirname(os.path.abspath(__file__))
DEST = os.path.join(HERE, "plan", "residential-plan.json")


def load_v5(src):
    import pandas as pd
    solve = os.path.join(src, "v5_budget_solve.pkl")
    summary = os.path.join(src, "v5_forecast_summary.json")
    for p in (solve, summary):
        if not os.path.exists(p):
            sys.exit("ERROR: %s not found.\n"
                     "Run the V5 model first, or set FEAZEL_FORECAST_SRC." % p)
    return pd.read_pickle(solve), json.load(open(summary))


def build(bs, summary):
    import pandas as pd
    r = bs["recovery_plan"]
    f = lambda v: int(round(float(v)))

    avg = float(r["avg_adj_sales"])
    orig_avg = float(r["avg_orig_sales"])
    prod = float(r["avg_adj_prod"])
    prod_orig = float(r["avg_orig_prod"])

    jt = {}
    for k, v in r["sales_combo_mix"].items():
        jt[k.split("|")[1]] = jt.get(k.split("|")[1], 0) + v
    tot = sum(jt.values()) or 1
    jt = {k: v / tot for k, v in jt.items()}

    tm = r["sales_trade_mix"]
    bm = r["sales_branch_mix"]
    pbm = r["prod_branch_mix"]
    tp = sum(pbm.values()) or 1

    ml = r["months_label"]
    ob, adj = r["orig_budget_inv"], r["adjusted_monthly_inv"]
    cu, rm = r["monthly_catchup"], r["rev_model"]
    cmi = int(summary.get("cur_month_idx", 0))

    weekly = {
        "avgWeeklyNeed": f(avg),
        "byJobType": [{"type": k, "perWeek": f(avg * v), "mix": round(v * 100, 1)}
                      for k, v in sorted(jt.items(), key=lambda x: -x[1])],
        "byTrade": [{"trade": k, "perWeek": f(avg * v), "mix": round(v * 100, 1)}
                    for k, v in sorted(tm.items(), key=lambda x: -x[1]) if v >= 0.005],
        "byMarket": [{"market": k, "total": f(avg * v),
                      "retNoFin": 0, "ins": 0, "retFin": 0, "deals": 0}
                     for k, v in sorted(bm.items(), key=lambda x: -x[1])],
        "weekSchedule": [{"wk": w["week_start"], "mo": w["month"],
                          "target": f(w["adjusted_target"])} for w in r["sales_weeks"]],
    }

    recovery = {
        "fullYearBudget": f(r["full_year_budget"]),
        "totalToRecover": f(r["total_shortfall"]),
        "upliftPct": round((float(r["recovery_ratio"]) - 1) * 100, 1),
        # q1*/april* are April-vintage names kept so the page-defs keep working.
        # q1* means "closed months year to date"; april* means "active month".
        "q1Budget": f(r["ytd_orig_budget"]),
        "q1Actual": f(r["ytd_actual_rev"]),
        "q1Shortfall": f(r["ytd_shortfall"]),
        "aprilGap": f(r["apr_gap"]),
        "aprilBudget": f(r["apr_budget"]),
        "aprilFcst": f(r["apr_forecast"]),
        "adjWeeklySalesAvg": f(avg),
        "origWeeklySalesAvg": f(orig_avg),
        "salesDeltaPerWeek": f(avg - orig_avg),
        "adjWeeklyProdAvg": f(prod),
        "origWeeklyProdAvg": f(prod_orig),
        "prodDeltaPerWeek": f(prod - prod_orig),
        "monthlyBridge": [
            {"mo": ml[i], "origBudget": f(ob[i]), "fcst": f(rm[i]),
             "recovTarget": f(adj[i]), "catchUp": f(cu[i]),
             "status": "Actual" if i < cmi else ("Forecast" if i == cmi else "Recovery")}
            for i in range(12)],
        "adjSalesByMarket": [
            {"market": k, "recovTarget": f(avg * v), "original": f(orig_avg * v),
             "delta": f(avg * v - orig_avg * v)}
            for k, v in sorted(bm.items(), key=lambda x: -x[1])],
        "adjProdByMarket": [
            {"market": k, "recovTarget": f(prod * v / tp), "pct": round(v / tp * 100, 1)}
            for k, v in sorted(pbm.items(), key=lambda x: -x[1])],
    }
    return weekly, recovery


def main():
    ap = argparse.ArgumentParser(add_help=True)
    ap.add_argument("--approve", metavar="REASON",
                    help="publish, recording who approved and why")
    ap.add_argument("--dry-run", action="store_true",
                    help="show what would change, write nothing")
    a = ap.parse_args()
    if not a.approve and not a.dry_run:
        print(__doc__)
        sys.exit("ERROR: pass --dry-run to preview, or --approve \"<reason>\" to publish.")

    src = os.environ.get("FEAZEL_FORECAST_SRC",
                         os.path.expanduser("~/Documents/Claude/Projects/Forecasting Process"))
    bs, summary = load_v5(src)
    weekly, recovery = build(bs, summary)

    prev = {}
    if os.path.exists(DEST):
        try:
            prev = json.load(open(DEST))
        except Exception:
            prev = {}

    pw = (prev.get("weeklyTargets") or {})
    pr = (prev.get("budgetRecovery") or {})
    print("                        current published      new")
    for label, old, new in [
        ("avgWeeklyNeed", pw.get("avgWeeklyNeed"), weekly["avgWeeklyNeed"]),
        ("weekSchedule rows", len(pw.get("weekSchedule") or []), len(weekly["weekSchedule"])),
        ("upliftPct", pr.get("upliftPct"), recovery["upliftPct"]),
        ("totalToRecover", pr.get("totalToRecover"), recovery["totalToRecover"]),
        ("adjWeeklyProdAvg", pr.get("adjWeeklyProdAvg"), recovery["adjWeeklyProdAvg"]),
    ]:
        print("  %-22s %18s %18s" % (label, old if old is not None else "-", new))

    if recovery["upliftPct"] >= 25:
        print("\n  NOTE: a %.1f%% recovery uplift is arithmetic from a shrinking window,"
              % recovery["upliftPct"])
        print("  not a quota anyone agreed to. Late in the year this rises on its own.")
        print("  Consider resetting the budget rather than publishing this to the field.")

    if a.dry_run:
        print("\n--dry-run: nothing written.")
        return 0

    payload = {
        "_comment": "Generated by publish-plan.py. Do not hand-edit: the next "
                    "publish overwrites it and hand edits are how this drifted "
                    "five months out of date in the first place.",
        "generatedAt": datetime.datetime.now().astimezone().isoformat(timespec="seconds"),
        "modelRunDate": summary.get("as_of"),
        "modelActiveMonth": summary.get("cur_month_label"),
        "approvedReason": a.approve,
        "weeklyTargets": weekly,
        "budgetRecovery": recovery,
    }
    os.makedirs(os.path.dirname(DEST), exist_ok=True)
    with open(DEST, "w") as fh:
        json.dump(payload, fh, indent=2)
        fh.write("\n")
    print("\n  published %s" % os.path.relpath(DEST, HERE))
    print("  model run date %s, active month %s" %
          (payload["modelRunDate"], payload["modelActiveMonth"]))
    print("  reason: %s" % a.approve)
    return 0


if __name__ == "__main__":
    sys.exit(main())
