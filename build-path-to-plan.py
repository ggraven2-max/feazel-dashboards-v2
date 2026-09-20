#!/usr/bin/env python3
"""
Path to Plan: the live, forward-looking replacement for the Q1-locked
Budget Recovery view.

WHAT WAS WRONG WITH THE OLD TAB
-------------------------------
It answered one question: "how much more per week must we sell to hit the
annual budget." That number is arithmetic on a shrinking window, so it
inflates on its own as the year runs (41.9% on 2026-09-20), and it was anchored
to Q1 and the April active month, which stopped being meaningful in May.

Worse, it implicitly treated every remaining week as equally useful. It is not.
A sale signed in late December cannot be produced and invoiced before year end,
so its contribution to THIS year's revenue is near zero. Observed median
created-to-invoice is 29 days, p75 is 50.

WHAT THIS COMPUTES
------------------
1. The gap, in the only terms that matter: dollars still to invoice by 12/31.
2. A bridge splitting that gap into work ALREADY SOLD (a production problem)
   and revenue that must be NEWLY SOLD (a sales problem).
3. The selling-window decay: for each remaining week, the share of a sale made
   that week that still invoices in 2026.
4. The production pull-forward lever: what a day of cycle-time reduction on
   the existing backlog is worth, and the completed-but-uninvoiced balance.
5. Scenario bands, replacing the single inflating quota.
6. A plain verdict on whether plan is reachable.

METHOD NOTE, READ THIS BEFORE QUOTING THE NUMBERS
-------------------------------------------------
Conversion probabilities come from the empirical distribution of
days_created_to_invoice over jobs that HAVE invoiced. That is survivorship
biased: jobs that stalled forever are under-represented, so these conversion
rates are optimistic. The pace-based landing zone here therefore runs ABOVE
the V5 model's full-year figure, and both are reported side by side rather
than reconciled. V5 is the locked model and stays the forecast of record;
this view is a decomposition of where the remaining revenue can come from.

Reads V5 outputs from $FEAZEL_FORECAST_SRC, writes plan/path-to-plan.json.
"""
import datetime, json, os, sys, warnings
warnings.filterwarnings("ignore")

HERE = os.path.dirname(os.path.abspath(__file__))
# FEAZEL_PTP_OUT lets the caller write the measurement somewhere other than
# next to this script. revenue-forecast.js uses it: the model runs in an
# ephemeral work dir, so the script is READ from there but the result must
# land in the repo.
OUT_ROOT = os.environ.get("FEAZEL_PTP_OUT", HERE)
DEST = os.path.join(OUT_ROOT, "plan", "path-to-plan.json")

# A stretch above demonstrated pace that is ambitious but not fantasy.
STRETCH_LIFT = 0.15
# Above this required-vs-demonstrated lift, plan is not reachable by selling.
UNREACHABLE_LIFT = 0.35
AT_RISK_LIFT = 0.10


def money(v):
    return float(round(float(v)))


def main():
    src = os.environ.get("FEAZEL_FORECAST_SRC",
                         os.path.expanduser("~/Documents/Claude/Projects/Forecasting Process"))
    import pandas as pd
    import numpy as np

    need_files = ["v5_forecast_summary.json", "v5_dashboard_data.pkl", "v5_hist_jobs.pkl"]
    for n in need_files:
        if not os.path.exists(os.path.join(src, n)):
            sys.exit("ERROR: %s not found in %s. Run the V5 model first." % (n, src))

    summary = json.load(open(os.path.join(src, "v5_forecast_summary.json")))
    dd = pd.read_pickle(os.path.join(src, "v5_dashboard_data.pkl"))
    jobs = pd.read_pickle(os.path.join(src, "v5_hist_jobs.pkl"))

    as_of = pd.Timestamp(summary.get("as_of"))
    fy = int(str(summary["months_label"][0]).split()[-1])
    ye = pd.Timestamp(fy, 12, 31)
    days_left = int((ye - as_of).days)

    # ---- cycle-time distributions -------------------------------------
    def clean(col):
        v = pd.to_numeric(jobs[col], errors="coerce").dropna()
        return v[(v >= 0) & (v < 400)]

    d_ci = clean("days_created_to_invoice")                       # sale -> invoice
    ip_c = pd.to_numeric(jobs["days_ip_to_complete"], errors="coerce")
    c_iv = pd.to_numeric(jobs["days_complete_to_invoice"], errors="coerce")
    d_ip = (ip_c + c_iv).dropna()
    d_ip = d_ip[(d_ip >= 0) & (d_ip < 400)]

    cdf_ci = lambda n: float((d_ci <= n).mean()) if len(d_ci) else 0.0
    cdf_ip = lambda n: float((d_ip <= n).mean()) if len(d_ip) else 0.0

    # ---- the gap -------------------------------------------------------
    budget = float(summary["budget_full_year"])
    invoiced = float(summary["invoiced_ytd"])
    still_to_invoice = budget - invoiced

    # ---- source 1: already sold ---------------------------------------
    ip = float(dd.get("pipeline_ip", 0))
    ns = float(dd.get("pipeline_ns", 0))
    snp = float(dd.get("pipeline_snp", 0))
    cap_ip, cap_ns = cdf_ip(days_left), cdf_ci(days_left)
    already = ip * cap_ip + ns * cap_ns + snp * cap_ns

    bridge = [
        {"label": "In Progress", "amount": money(ip), "convertPct": round(cap_ip * 100, 1),
         "lands": money(ip * cap_ip),
         "note": "Already installing. Needs completion and billing only."},
        {"label": "Not Started", "amount": money(ns), "convertPct": round(cap_ns * 100, 1),
         "lands": money(ns * cap_ns),
         "note": "Sold and processed, awaiting schedule. Throughput decides this."},
        {"label": "Sold Not Processed", "amount": money(snp), "convertPct": round(cap_ns * 100, 1),
         "lands": money(snp * cap_ns),
         "note": "Signed but not yet a job. Processing delay is pure lost time."},
    ]

    # ---- source 2: must be newly sold ----------------------------------
    must_sell_net = still_to_invoice - already
    weeks = []
    wk = as_of
    while wk <= ye:
        n = int((ye - wk).days)
        c = cdf_ci(n)
        weeks.append({"weekStart": wk.strftime("%m/%d/%Y"), "daysToYearEnd": n,
                      "capturePct": round(c * 100, 1),
                      "valueOfOneMillion": money(1_000_000 * c)})
        wk += pd.Timedelta(days=7)
    caps = [w["capturePct"] / 100.0 for w in weeks]
    mean_cap = float(np.mean(caps)) if caps else 0.0
    n_weeks = len(weeks)

    gross_needed = must_sell_net / mean_cap if mean_cap > 0 else 0.0
    req_per_week = gross_needed / n_weeks if n_weeks else 0.0
    demonstrated = float(dd.get("weekly_avg_4wk", 0))
    trend = float(dd.get("weekly_trend_slope", 0))
    lift = (req_per_week / demonstrated - 1) if demonstrated else None

    # last week where a majority of what you sell still lands this year
    majority_cut = next((w["weekStart"] for w in weeks if w["capturePct"] < 50), None)
    three_q_cut = next((w["weekStart"] for w in weeks if w["capturePct"] < 75), None)

    # ---- production pull-forward ---------------------------------------
    # Finished work that is not billed. This is the part of the production
    # lever that needs no schedule change at all, only a process fix, and the
    # sub-status says which process. Optional input: skipped if absent.
    completed = None
    try:
        import glob
        cand = sorted(glob.glob(os.path.join(OUT_ROOT, "inputs", "residential",
                                             "revenue-forecast",
                                             "Residential Completed Jobs-*.xlsx")))
        if cand:
            cdf_df = pd.read_excel(cand[-1])
            amt = pd.to_numeric(cdf_df["Final Contract Amount"], errors="coerce").fillna(0)
            age = pd.to_numeric(cdf_df["Age"], errors="coerce")
            buckets = []
            for lo, hi, lab in [(0, 15, "0-15 days"), (15, 30, "15-30 days"),
                                (30, 60, "30-60 days"), (60, 90, "60-90 days"),
                                (90, 10 ** 6, "over 90 days")]:
                m = (age >= lo) & (age < hi)
                if int(m.sum()):
                    buckets.append({"bucket": lab, "jobs": int(m.sum()),
                                    "amount": money(amt[m].sum())})
            by_reason = []
            if "Job Sub Status" in cdf_df.columns:
                g = cdf_df.groupby(cdf_df["Job Sub Status"].fillna("Unspecified"))
                for reason, idx in g.groups.items():
                    sub = amt.loc[list(idx)]
                    by_reason.append({"reason": str(reason), "jobs": int(len(idx)),
                                      "amount": money(sub.sum())})
                by_reason.sort(key=lambda r: -r["amount"])
            completed = {
                "total": money(amt.sum()),
                "jobs": int(len(cdf_df)),
                "medianAgeDays": int(age.median()) if age.notna().any() else None,
                "agingBuckets": buckets,
                "byReason": by_reason,
                "note": "Work finished but not invoiced. No selling and no scheduling "
                        "required, only the blocking process cleared.",
            }
    except Exception as e:
        print("    (completed-awaiting-invoice detail unavailable: %s)" % e)

    backlog_total = ip + ns + snp
    # One day earlier across the backlog moves whatever sits within one day of
    # the year-end boundary across it. Measure it rather than assuming.
    per_day = (ip * (cdf_ip(days_left + 1) - cap_ip)
               + (ns + snp) * (cdf_ci(days_left + 1) - cap_ns))
    week_pull = (ip * (cdf_ip(days_left + 7) - cap_ip)
                 + (ns + snp) * (cdf_ci(days_left + 7) - cap_ns))

    # What one day of pull-forward is worth as year end approaches.
    leverage_curve = []
    for horizon in (days_left, 60, 45, 30, 21, 14, 7):
        if horizon > days_left:
            continue
        v = (ip * (cdf_ip(horizon + 1) - cdf_ip(horizon))
             + (ns + snp) * (cdf_ci(horizon + 1) - cdf_ci(horizon)))
        leverage_curve.append({
            "daysBeforeYearEnd": int(horizon),
            "onDate": (ye - pd.Timedelta(days=int(horizon))).strftime("%m/%d/%Y"),
            "worthPerDay": money(v)})

    # ---- scenarios ------------------------------------------------------
    def lands(rate):
        return sum(rate * c for c in caps)

    scenarios = [
        {"name": "Hold current pace", "weeklySales": money(demonstrated),
         "newSalesRevenue": money(lands(demonstrated)),
         "landsAt": money(invoiced + already + lands(demonstrated)),
         "note": "Trailing 4-week average, carried flat."},
        {"name": "Stretch +%d%%" % int(STRETCH_LIFT * 100),
         "weeklySales": money(demonstrated * (1 + STRETCH_LIFT)),
         "newSalesRevenue": money(lands(demonstrated * (1 + STRETCH_LIFT))),
         "landsAt": money(invoiced + already + lands(demonstrated * (1 + STRETCH_LIFT))),
         "note": "Ambitious but inside what the team has produced before."},
        {"name": "Required to hit plan", "weeklySales": money(req_per_week),
         "newSalesRevenue": money(lands(req_per_week)),
         "landsAt": money(invoiced + already + lands(req_per_week)),
         "note": "What closing the full gap by selling alone would take."},
    ]

    # ---- verdict ---------------------------------------------------------
    if lift is None:
        band, headline = "unknown", "Not enough sales history to judge reachability."
    elif lift >= UNREACHABLE_LIFT:
        band = "not-reachable"
        headline = ("Plan is not reachable by selling alone. Closing the gap needs a "
                    "production pull-forward, a budget reset, or both.")
    elif lift >= AT_RISK_LIFT:
        band = "at-risk"
        headline = "Plan is at risk. It needs a sustained lift above current pace."
    else:
        band = "on-track"
        headline = "Plan is reachable at close to current pace."

    reasons = []
    if lift is not None:
        reasons.append("Required %s/wk against a demonstrated %s/wk, a %.0f%% lift."
                       % (fmt_money(req_per_week), fmt_money(demonstrated), lift * 100))
    if trend < 0:
        reasons.append("Sales are trending down %s per week, not flat."
                       % fmt_money(abs(trend)))
    if three_q_cut:
        reasons.append("After %s, under 75%% of what is sold still invoices this year."
                       % three_q_cut)
    reasons.append("%s of the gap is already sold and needs production, not selling."
                   % fmt_money(already))

    payload = {
        "_comment": "Generated by build-path-to-plan.py from live V5 output. "
                    "Conversion rates are survivorship-biased optimistic; see the "
                    "module docstring. V5 remains the forecast of record.",
        "generatedAt": datetime.datetime.now().astimezone().isoformat(timespec="seconds"),
        "modelRunDate": summary.get("as_of"),
        "fiscalYear": fy,
        "gap": {
            "fullYearBudget": money(budget),
            "invoicedYtd": money(invoiced),
            "stillToInvoice": money(still_to_invoice),
            "daysRemaining": days_left,
            "weeksRemaining": n_weeks,
        },
        "bridge": {
            "rows": bridge,
            "alreadySoldLands": money(already),
            "mustBeNewlySoldNet": money(must_sell_net),
            "mustBeNewlySoldGross": money(gross_needed),
            "meanCapturePct": round(mean_cap * 100, 1),
        },
        "sellingWindow": {
            "weeks": weeks,
            "belowThreeQuartersFrom": three_q_cut,
            "belowHalfFrom": majority_cut,
        },
        "pullForward": {
            "backlogTotal": money(backlog_total),
            "perDay": money(per_day),
            "perWeek": money(week_pull),
            # The cycle-time lever is nearly worthless at this distance, because
            # almost everything in the backlog already clears year end. It grows
            # sharply as the boundary approaches. Showing the curve stops anyone
            # concluding the lever does not exist.
            "leverageCurve": leverage_curve,
            "strandedBacklog": money(max(0.0, backlog_total - already)),
            "completedAwaitingInvoice": completed,
            "note": "Revenue moved into %d by finishing and billing existing work "
                    "sooner. Requires no new selling." % fy,
        },
        "capacity": {
            "requiredPerWeek": money(req_per_week),
            "demonstratedPerWeek": money(demonstrated),
            "liftRequiredPct": round(lift * 100, 1) if lift is not None else None,
            "trendPerWeek": money(trend),
        },
        "scenarios": scenarios,
        "modelComparison": {
            "v5FullYear": money(summary.get("model_full_year", 0)),
            "paceLandingZone": money(invoiced + already + lands(demonstrated)),
            "note": "V5 is the forecast of record. The pace landing zone runs higher "
                    "because these conversion rates are drawn from jobs that did "
                    "invoice and because V5 also carries a declining sales trend.",
        },
        "verdict": {"band": band, "headline": headline, "reasons": reasons},
    }

    os.makedirs(os.path.dirname(DEST), exist_ok=True)
    with open(DEST, "w") as fh:
        json.dump(payload, fh, indent=2)
        fh.write("\n")

    print("  path-to-plan: %s still to invoice in %d days (%d weeks)"
          % (fmt_money(still_to_invoice), days_left, n_weeks))
    print("    already sold -> %s | must newly sell -> %s net, %s gross at %.0f%% capture"
          % (fmt_money(already), fmt_money(must_sell_net), fmt_money(gross_needed), mean_cap * 100))
    print("    required %s/wk vs demonstrated %s/wk%s"
          % (fmt_money(req_per_week), fmt_money(demonstrated),
             (" (+%.0f%%)" % (lift * 100)) if lift is not None else ""))
    if completed:
        top = completed["byReason"][0] if completed["byReason"] else None
        print("    completed not invoiced: %s across %d jobs%s"
              % (fmt_money(completed["total"]), completed["jobs"],
                 (", largest cause %s (%s)" % (top["reason"], fmt_money(top["amount"]))) if top else ""))
    print("    VERDICT [%s] %s" % (band, headline))
    return 0


def fmt_money(v):
    return "$%s" % format(float(v), ",.0f")


if __name__ == "__main__":
    sys.exit(main())
