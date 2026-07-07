#!/usr/bin/env python3
"""
v5_to_json.py — Companion emitter for the V5 revenue forecast.

Run AFTER refresh_v5.py in the same working directory. Reads:
  - v5_dashboard_data.pkl
  - v5_budget_solve.pkl

Emits:
  - revenue_forecast.json   (the REVENUE_FORECAST JSON shape consumed by
                             redesign/shared/page-defs-revenue-forecast.js
                             and the iOS app)

Owner: Greg Graven (COO). Methodology locked V5 2026-04-19.
This file does NOT change any V5 math. It is purely a serializer.
"""
import json
import math
import os
import pickle
import sys
import datetime as dt

import numpy as np

DASH_PKL = 'v5_dashboard_data.pkl'
BUDGET_PKL = 'v5_budget_solve.pkl'
OUT_PATH = 'revenue_forecast.json'


# ---- JSON-safety helpers ---------------------------------------------------
def safe(v):
    """Recursively coerce numpy / pandas values into JSON-safe Python types."""
    if v is None:
        return None
    if isinstance(v, (np.integer,)):
        return int(v)
    if isinstance(v, (np.floating,)):
        return None if (isinstance(v, float) and math.isnan(v)) else round(float(v), 4)
    if isinstance(v, float):
        return None if math.isnan(v) else round(v, 4)
    if isinstance(v, np.ndarray):
        return [safe(x) for x in v]
    if isinstance(v, dict):
        return {str(k): safe(val) for k, val in v.items()}
    if isinstance(v, (list, tuple)):
        return [safe(x) for x in v]
    if isinstance(v, (dt.date, dt.datetime)):
        return v.isoformat()
    if hasattr(v, 'isoformat'):
        try:
            return v.isoformat()
        except Exception:
            return str(v)
    return v


def fmt_money_short(v):
    """Mirror of Node fmt.money({short:true}) for use in narrative strings."""
    try:
        v = float(v)
    except Exception:
        return '$0'
    a = abs(v)
    if a >= 1e9:
        return '${:.1f}B'.format(v / 1e9).replace('.0B', 'B')
    if a >= 1e6:
        return '${:.1f}M'.format(v / 1e6).replace('.0M', 'M')
    if a >= 1e3:
        return '${:.0f}K'.format(v / 1e3)
    return '${:,.0f}'.format(v)


# ---- Main ------------------------------------------------------------------
def main():
    if not os.path.exists(DASH_PKL) or not os.path.exists(BUDGET_PKL):
        print('v5_to_json.py: missing input pickles', file=sys.stderr)
        sys.exit(1)

    dd = pickle.load(open(DASH_PKL, 'rb'))
    bs = pickle.load(open(BUDGET_PKL, 'rb'))

    months = dd['months_label']
    # budget_inv from the solve pickle is the ACTUALS-OVERLAID series
    # (closed months = NetSuite actuals, remaining months = adjusted solve
    # targets). Per Greg's 2026-06-12 budget-display decision, that blend
    # stays INTERNAL; every displayed budget figure uses the ORIGINAL
    # board plan (recovery_plan.orig_budget_inv, $125.89M invoiced FY2026).
    # Fix 2026-07-06: the emitter previously summed the blend and labeled
    # it "Annual Budget", so the dashboard showed a plan that shrank or
    # grew with actuals and read as "budget from April on".
    budget_solve_inv = list(bs.get('budget_inv', dd['budget_inv']))
    _rp0 = bs.get('recovery_plan', {}) or {}
    budget_inv = [float(x) for x in _rp0.get('orig_budget_inv', budget_solve_inv)]
    full_year_budget_plan = float(_rp0.get('full_year_budget', sum(budget_inv)))
    rev_model = list(bs.get('rev_model', dd['rev_model']))
    rev_known = list(dd.get('rev_from_known', bs.get('rev_from_known', [0] * 12)))
    required_sales = list(dd.get('required_sales', []))
    backlog_data = dd.get('backlog_data', [])
    conv_curve = dd.get('conversion_curve', {})
    conv_by_type = dd.get('conv_by_type', {})
    jt_cycle_times = dd.get('jt_cycle_times', {})
    branch_mix = dd.get('branch_mix', {})

    # -- Header / KPIs -------------------------------------------------------
    run_date = dd.get('run_date', dt.date.today().strftime('%B %d, %Y'))
    ytd_sales = float(dd.get('ytd_sales', 0))
    invoiced_ytd = float(dd.get('invoiced_ytd', 0))
    weekly_avg = float(dd.get('weekly_avg_4wk', 0))
    weekly_slope = float(dd.get('weekly_trend_slope', 0))
    cw_wtd = float(dd.get('current_week_wtd', 0))
    cw_proj = float(dd.get('current_week_projected', 0))
    actual_backlog = float(dd.get('actual_backlog', 0))
    snp_total = float(dd.get('snp_total', 0))

    apr_inv = float(dd.get('apr_inv_total', rev_model[3] if len(rev_model) > 3 else 0))
    apr_wip = float(dd.get('apr_wip_change', 0))
    apr_net = float(dd.get('apr_net_rev', apr_inv + apr_wip))
    may_inv = float(dd.get('may_inv_total', rev_model[4] if len(rev_model) > 4 else 0))
    may_wip = float(dd.get('may_wip_change', 0))
    may_net = float(dd.get('may_net_rev', may_inv + may_wip))

    annual_budget = full_year_budget_plan
    annual_model = sum(rev_model)
    annual_gap = annual_budget - annual_model

    # -- Tabs (matches the kit and the redesign URLs) -----------------------
    tabs = [
        {'id': 'executive',       'label': 'Executive Summary'},
        {'id': 'projection',      'label': 'Sales Projection'},
        {'id': 'monthly',         'label': 'Monthly Forecast'},
        {'id': 'budget',          'label': 'Budget Requirements'},
        {'id': 'job-types',       'label': 'Job Type Analysis'},
        {'id': 'pipeline',        'label': 'Pipeline & Branch'},
        {'id': 'cycle',           'label': 'Cycle Times'},
        {'id': 'weekly-targets',  'label': 'Weekly Sales Targets'},
        {'id': 'production',      'label': 'Production Metrics'},
        {'id': 'profitability',   'label': 'Profitability'},
        {'id': 'budget-recovery', 'label': 'Budget Recovery'},
        {'id': 'recommendations', 'label': 'Strategic Recommendations'},
    ]

    kpis = [
        {'label': 'YTD Sales (Created)',     'value': fmt_money_short(ytd_sales),    'sub': 'Jobs processed into system'},
        {'label': 'Invoiced YTD',            'value': fmt_money_short(invoiced_ytd), 'sub': 'Based on actual invoice dates'},
        {'label': '4-Week Avg Weekly Sales', 'value': fmt_money_short(weekly_avg),   'sub': 'Trend: {:+,.0f}/week'.format(weekly_slope)},
        {'label': 'Current Week (Projected)','value': fmt_money_short(cw_proj),      'sub': 'WTD: ' + fmt_money_short(cw_wtd)},
        {'label': 'Annual Forecast',         'value': fmt_money_short(annual_model), 'sub': 'Model invoiced revenue'},
        {'label': 'Annual Budget',           'value': fmt_money_short(annual_budget),'sub': 'Board plan · full year'},
        {'label': 'Forecast vs Budget',      'value': '{}{}'.format('-' if annual_gap > 0 else '+', fmt_money_short(abs(annual_gap))).replace('--', '-'),
         'sub': '{:.1f}% {} plan'.format(abs(annual_gap) / annual_budget * 100 if annual_budget else 0,
                                         'under' if annual_gap > 0 else 'over')},
        {'label': 'Active Pipeline',         'value': fmt_money_short(actual_backlog), 'sub': 'Backlog + IP + SNP'},
    ]

    exec_summary = {
        'budget': annual_budget,
        'modelAnnualInvoiced': annual_model,
        'gap': annual_gap,
        'narrative': (
            'The V5 model projects ' + fmt_money_short(annual_model) +
            ' in annual invoiced revenue against a ' + fmt_money_short(annual_budget) +
            ' plan. The challenge is timing, not volume: Q1 ramped slowly so Q2 invoicing will lag. '
            'If the current weekly pace of ' + fmt_money_short(weekly_avg) +
            ' holds, H2 should catch up as earlier sales convert to invoiced revenue.'
        )
    }

    month_revenue = {
        'april': {'invoiced': apr_inv, 'wipChange': apr_wip, 'netRevenue': apr_net,
                  'beginningWip': float(dd.get('apr_beg_wip', 0)),
                  'endingWip': float(dd.get('apr_end_wip', 0)),
                  'materialCost': float(dd.get('apr_mat', 0)),
                  'laborCost': float(dd.get('apr_lab', 0)),
                  'grossProfit': float(dd.get('apr_gp', 0)),
                  'grossMarginPct': float(dd.get('apr_gm', 0)) * 100},
        'may':   {'invoiced': may_inv, 'wipChange': may_wip, 'netRevenue': may_net,
                  'beginningWip': float(dd.get('may_beg_wip', 0)),
                  'endingWip': float(dd.get('may_end_wip', 0)),
                  'materialCost': float(dd.get('may_mat', 0)),
                  'laborCost': float(dd.get('may_lab', 0)),
                  'grossProfit': float(dd.get('may_gp', 0)),
                  'grossMarginPct': float(dd.get('may_gm', 0)) * 100},
    }

    # -- Weekly targets header ---------------------------------------------
    wt = bs.get('weekly_targets', {}) or {}
    pt = bs.get('production_targets', {}) or {}
    wt_avg = float(wt.get('avg_weekly_total', 0))
    pt_avg = float(pt.get('avg_weekly_total', 0))
    weekly_targets_header = {
        'avgWeeklyNeed': wt_avg,
        'recent4WkAvg': weekly_avg,
        'gap': max(0, wt_avg - weekly_avg),
        'productionAvgWeeklyNeed': pt_avg,
        'productionCycleStart': int(round(float(pt.get('overall_c2ip', 0) or 0))),
        'productionCycleComplete': int(round(float(pt.get('overall_ip2c', 0) or 0))),
        'productionTotalCycle': int(round(float(pt.get('overall_c2ip', 0) or 0) + float(pt.get('overall_ip2c', 0) or 0))),
    }

    # -- Budget recovery header --------------------------------------------
    rp = dd.get('recovery_plan', {}) or bs.get('recovery_plan', {}) or {}
    full_year_budget = float(rp.get('full_year_budget', annual_budget))
    total_short = float(rp.get('total_shortfall', max(0, annual_gap)))
    uplift_pct = 0.0
    rp_orig = list(rp.get('orig_budget_inv', budget_inv))
    rp_adj = list(rp.get('adjusted_monthly_inv', budget_inv))
    if len(rp_orig) >= 12 and sum(rp_orig[4:]) > 0:
        uplift_pct = (sum(rp_adj[4:]) - sum(rp_orig[4:])) / sum(rp_orig[4:]) * 100

    budget_recovery_header = {
        'fullYearBudget': full_year_budget,
        'gap': total_short,
        'upliftPct': round(uplift_pct, 1),
        'aprilGap': float(rp.get('apr_gap', 0)),
        'q1OriginalBudget': float(rp.get('ytd_orig_budget', sum(rp_orig[:3]) if len(rp_orig) >= 3 else 0)),
        'q1Actual': float(rp.get('ytd_actual_rev', 0)),
        'q1Shortfall': float(rp.get('ytd_shortfall', 0)),
        'recoveryRatio': float(rp.get('recovery_ratio', 1)),
    }

    # -- Profitability summary --------------------------------------------
    prof = dd.get('profitability', {}) or bs.get('profitability', {}) or {}
    inv_overall = prof.get('invoiced', {}) or {}
    inv_2025 = prof.get('invoiced_2025', {}) or {}
    inv_2026 = prof.get('invoiced_2026', {}) or {}
    profitability_summary = {
        'combinedGP': float(inv_overall.get('gross_profit', 0)),
        'combinedGP_pct': float(inv_overall.get('gp_pct', 0)),
        'combinedRevenue': float(inv_overall.get('revenue', 0)),
        'y2025_GP_pct': float(inv_2025.get('gp_pct', 0)),
        'y2025_revenue': float(inv_2025.get('revenue', 0)),
        'y2025_jobs': int(inv_2025.get('jobs', 0)),
        'y2026_GP_pct': float(inv_2026.get('gp_pct', 0)),
        'y2026_revenue': float(inv_2026.get('revenue', 0)),
        'y2026_jobs': int(inv_2026.get('jobs', 0)),
        'materialCost': float(inv_overall.get('material', 0)),
        'laborCost': float(inv_overall.get('labor', 0)),
        'commissions': float(inv_overall.get('commission', 0)),
        'materialPctContract': (float(inv_overall.get('material', 0)) / float(inv_overall.get('revenue', 1)) * 100) if inv_overall.get('revenue') else 0,
        'laborPctContract': (float(inv_overall.get('labor', 0)) / float(inv_overall.get('revenue', 1)) * 100) if inv_overall.get('revenue') else 0,
        'commissionPctContract': (float(inv_overall.get('commission', 0)) / float(inv_overall.get('revenue', 1)) * 100) if inv_overall.get('revenue') else 0,
    }

    # -- Pipeline snapshot (donut on executive page) -----------------------
    ps = dd.get('pipeline_stages', {}) or {}
    color_map = {
        'New Sales':   '#3b82f6',
        'Backlog':     '#f97316',
        'In Progress': '#22c55e',
        'Completed':   '#a855f7',
    }
    stages = []
    for key in ('new_sales', 'backlog', 'in_progress', 'completed'):
        s = ps.get(key) or {}
        if not s:
            continue
        label = s.get('label', key.replace('_', ' ').title())
        avg_days = s.get('avg_days')
        subtitle = '{} jobs'.format(int(s.get('jobs', 0)))
        if avg_days is not None:
            subtitle += ' · ' + '{:.0f}d avg'.format(float(avg_days))
        stages.append({
            'label': label,
            'subtitle': subtitle,
            'value': float(s.get('value', 0)),
            'jobs': int(s.get('jobs', 0)),
            'color': color_map.get(label, '#3b82f6'),
            'byMarket': [{'market': r.get('market'),
                          'jobs': int(r.get('jobs', 0)),
                          'value': float(r.get('value', 0))} for r in s.get('by_market', [])],
            'avgDays': avg_days,
            'medianDays': s.get('median_days'),
        })
    pipeline_snapshot = {
        'stages': stages,
        'totalJobs': int(ps.get('total_jobs', sum(int(s['jobs']) for s in stages))),
        'totalValue': float(ps.get('total_value', sum(float(s['value']) for s in stages))),
    }

    # -- Commentary (editorial; carry forward unless explicitly updated) ----
    commentary = {
        'actionableRecommendations': [
            'Hold weekly sales pace at or above ' + fmt_money_short(wt_avg) + ' to defend the May invoicing target.',
            'Prioritize Retail-No Financing and Insurance work in Columbus and Detroit Metro — they carry the highest revenue-per-day.',
            'Clear the Completed-pending-invoice queue inside seven days to keep April WIP realistic.',
            'Audit Sold-Not-Processed dollars older than 14 days; they delay April-May conversion.'
        ],
        'strategyHighlights': [
            'V5 cycle-time hierarchy locked: Job Type + Trade Count is the strongest predictor.',
            'NOVA reporting now consolidated under DC Metro for cleaner branch math.',
            'Recovery plan reallocates the YTD shortfall as a uniform uplift across May-Dec rather than a one-month spike.',
            'WIP bridge uses the validated wip_reference.pkl baseline so April net revenue is defensible.'
        ]
    }

    # -- Tables -------------------------------------------------------------
    MF_START, MF_END = 3, 12
    mf_months = months[MF_START:MF_END]
    mf_budget_net = list(bs.get('budget_net', budget_inv))[MF_START:MF_END]
    mf_model_net = []
    mf_wip = list(dd.get('model_wip_chg', [0] * 12))
    for i in range(len(mf_months)):
        mf_model_net.append(rev_model[MF_START + i] + mf_wip[MF_START + i])
    mf_backlog = [bd.get('total_backlog', 0) for bd in backlog_data[MF_START:MF_END]]
    mf_adj_req = [bd.get('adjusted_required_sales', bd.get('budget_rev', 0))
                  for bd in backlog_data[MF_START:MF_END]]

    # Monthly forecast table
    monthly_forecast_rows = []
    for i, mo in enumerate(mf_months):
        var = mf_model_net[i] - mf_budget_net[i]
        monthly_forecast_rows.append([
            mo,
            mf_budget_net[i],
            mf_backlog[i],
            mf_adj_req[i],
            mf_model_net[i],
            var,
        ])

    # Forecasted backlog vs required sales
    forecast_backlog_rows = []
    for bd in backlog_data[MF_START:MF_END]:
        rfb = bd.get('rev_from_backlog', 0)
        rev_gap = bd.get('revenue_gap', max(0, bd.get('budget_rev', 0) - rfb))
        forecast_backlog_rows.append([
            bd.get('month'),
            bd.get('total_backlog', 0),
            rfb,
            rev_gap,
            bd.get('adjusted_required_sales', bd.get('budget_rev', 0)),
        ])

    # Trend-based annual table
    trend_rows = []
    for sp in dd.get('seasonal_projection', []):
        label = sp.get('month', '')
        if sp.get('is_actual'):
            label += ' [Actual]'
        trend_rows.append([
            label,
            float(sp.get('seasonal_pct', 0)) * 100,
            float(sp.get('actual', 0)),
            float(sp.get('budget_path', 0)),
            float(sp.get('forecast_path', 0)),
        ])

    # Adjusted weekly run rate (recovery sales weeks)
    adj_run_rate_rows = []
    for w in rp.get('sales_weeks', []) or []:
        adj_run_rate_rows.append([
            w.get('week_label', w.get('week_start', '')),
            float(w.get('adjusted_target', 0)),
            float(w.get('original_target', 0)),
            float(w.get('delta', 0)),
        ])

    # Job type impact table
    jt_impact_rows = []
    for jt in ('Insurance', 'Retail-Financing', 'Retail-No Financing'):
        ct = jt_cycle_times.get(jt) or {}
        cv0 = (conv_by_type.get(jt) or {}).get(0, (conv_by_type.get(jt) or {}).get('0', 0))
        rpd = (ct.get('avg_job', 0) / ct.get('total', 1)) if ct.get('total') else 0
        jt_impact_rows.append([
            jt,
            float(ct.get('avg_job', 0)),
            int(ct.get('total', 0)),
            rpd,
            float(cv0) * 100,
            float(ct.get('total_rev', 0)),
        ])

    # Pipeline by market tables
    def stage_market_rows(stage_key):
        s = ps.get(stage_key) or {}
        return [[r.get('market'), int(r.get('jobs', 0)), float(r.get('value', 0))]
                for r in s.get('by_market', [])]

    # Cycle by job type
    cycle_rows = []
    for jt in ('Insurance', 'Retail-Financing', 'Retail-No Financing', 'Repair'):
        ct = jt_cycle_times.get(jt) or {}
        cycle_rows.append([
            jt,
            int(ct.get('c2ip', 0)),
            int(ct.get('ip2c', 0)),
            int(ct.get('total', 0)),
            int(ct.get('count', 0)),
            float(ct.get('avg_job', 0)),
        ])

    # Weekly targets by job type
    jt_mix = wt.get('jt_mix', {}) or {}
    wt_jt_rows = []
    for jt, share in sorted(jt_mix.items(), key=lambda x: -float(x[1] or 0))[:10]:
        wt_jt_rows.append([jt, wt_avg * float(share or 0), float(share or 0) * 100])

    # Weekly targets by trade
    trade_mix = wt.get('trade_mix', {}) or {}
    wt_trade_rows = []
    for tr, share in sorted(trade_mix.items(), key=lambda x: -float(x[1] or 0))[:10]:
        wt_trade_rows.append([tr, wt_avg * float(share or 0), float(share or 0) * 100])

    # Weekly schedule (next ~12 weeks)
    week_schedule_rows = []
    for w in (wt.get('weeks') or [])[:16]:
        week_schedule_rows.append([
            w.get('week_label', w.get('week_start', '')),
            w.get('month', ''),
            float(w.get('target', 0)),
        ])

    tables = [
        {'id': 'monthlyForecast', 'title': 'Monthly Forecast (Apr-Dec)',
         'headers': ['Month', 'Budget Net Revenue', 'Forecast Backlog', 'Required Sales', 'Forecast Net Revenue', 'Variance'],
         'rows': monthly_forecast_rows},
        {'id': 'forecastBacklog', 'title': 'Forecasted Backlog vs Required Sales',
         'headers': ['Month', 'Forecasted Backlog', 'Revenue From Backlog', 'Revenue Gap', 'Total Sales Needed'],
         'rows': forecast_backlog_rows},
        {'id': 'trendBasedAnnual', 'title': 'Trend-Based Annual Sales Projection',
         'headers': ['Month', '2025 Seasonal %', 'YTD Actual', 'Budget Path', 'Forecast Path'],
         'rows': trend_rows},
        {'id': 'adjustedWeeklyRunRate', 'title': 'Adjusted Weekly Run Rate (Recovery)',
         'headers': ['Week', 'Adjusted Target', 'Original Target', 'Delta'],
         'rows': adj_run_rate_rows},
        {'id': 'jobTypeImpact', 'title': 'Job Type Impact on Revenue',
         'headers': ['Job Type', 'Avg Job $', 'Cycle Days', 'Rev/Day', 'Same-Mo Conv %', 'Historical Revenue'],
         'rows': jt_impact_rows},
        {'id': 'cycleByJobType', 'title': 'Cycle Times by Job Type',
         'headers': ['Job Type', 'Created -> IP', 'IP -> Complete', 'Total Days', 'Job Count', 'Avg Job $'],
         'rows': cycle_rows},
        {'id': 'backlogByMarket', 'title': 'Backlog by Market',
         'headers': ['Market', 'Jobs', 'Value'],
         'rows': stage_market_rows('backlog')},
        {'id': 'inProgressByMarket', 'title': 'In Progress by Market',
         'headers': ['Market', 'Jobs', 'Value'],
         'rows': stage_market_rows('in_progress')},
        {'id': 'newSalesByMarket', 'title': 'New Sales (SNP) by Market',
         'headers': ['Market', 'Jobs', 'Value'],
         'rows': stage_market_rows('new_sales')},
        {'id': 'completedByMarket', 'title': 'Completed Awaiting Invoice by Market',
         'headers': ['Market', 'Jobs', 'Value'],
         'rows': stage_market_rows('completed')},
        {'id': 'weeklyTargetsByJobType', 'title': 'Weekly Sales Targets by Job Type',
         'headers': ['Job Type', 'Weekly Target', 'Mix %'],
         'rows': wt_jt_rows},
        {'id': 'weeklyTargetsByTrade', 'title': 'Weekly Sales Targets by Trade',
         'headers': ['Trade', 'Weekly Target', 'Mix %'],
         'rows': wt_trade_rows},
        {'id': 'weeklyScheduleNext', 'title': 'Weekly Schedule (Next 16 Weeks)',
         'headers': ['Week', 'Month', 'Target'],
         'rows': week_schedule_rows},
    ]

    # -- Empty stubs for tables the page-defs reference --------------------
    # These tables are documented in page-defs-revenue-forecast.js but the V5
    # emitter does not currently compute them. Empty stubs prevent the page
    # from crashing on T.<id>.rows.map(...) lookups; .map([]) returns [].
    # When you wire real data into any of these, replace the empty rows array.
    stub_tables = [
        ('budgetRecoveryMonthlyBridge', 'Recovery Plan Monthly Bridge',
            ['Month', 'Original Budget', 'Forecast', 'Recovery Target', 'Catch-Up', 'Status']),
        ('productionByJobType', 'Production by Job Type',
            ['Job Type', 'WOs', 'Median Days', 'Avg Days', 'Volume', 'Revenue']),
        ('productionByMarketJobType', 'Production by Market & Job Type',
            ['Market', 'Insurance', 'Retail-Fin', 'Retail-No-Fin', 'Repair', 'Total']),
        ('productionByTrade', 'Production by Trade',
            ['Trade', 'WOs', 'Median Days', 'Avg Days', 'Revenue', 'Share']),
        ('profitabilityByJobType2025', 'Profitability by Job Type (2025)',
            ['Job Type', 'Jobs', 'Revenue', 'Material', 'Labor', 'GP', 'GP %']),
        ('profitabilityByJobType2026', 'Profitability by Job Type (2026 YTD)',
            ['Job Type', 'Jobs', 'Revenue', 'Material', 'Labor', 'GP', 'GP %']),
        ('profitabilityByMarket2026', 'Profitability by Market (2026 YTD)',
            ['Market', 'Jobs', 'Revenue', 'GP', 'GP %']),
        ('strategicBestMarketsRevEff', 'Strategic: Best Markets by Revenue Efficiency',
            ['Market', 'Jobs', 'Revenue', 'Median Days', '$ / Day']),
        ('weeklyTargetByMarketJobType', 'Weekly Target by Market & Job Type',
            ['Market', 'Total / Wk', 'Retail-No Fin', 'Insurance', 'Retail-Fin', 'Deals / Wk']),
    ]
    for stub_id, stub_title, stub_headers in stub_tables:
        tables.append({
            'id': stub_id,
            'title': stub_title,
            'headers': stub_headers,
            'rows': [],
            '_stub': True,
            '_note': 'Not yet emitted by V5; render skips empty body. Wire real rows when ready.'
        })

    # -- Charts -------------------------------------------------------------
    # salesChart: weekly actual + projected
    weekly_actual_pairs = dd.get('weekly_actual', []) or []
    weekly_actual_labels = []
    weekly_actual_data = []
    for entry in weekly_actual_pairs:
        wk, val = entry if isinstance(entry, (list, tuple)) else (entry, 0)
        wk_str = str(wk)[:10]
        weekly_actual_labels.append(wk_str)
        weekly_actual_data.append(float(val))
    cw = dd.get('current_week', {}) or {}
    if cw:
        weekly_actual_labels.append(str(cw.get('start', ''))[:10])
        weekly_actual_data.append(float(cw.get('projected', 0) or cw.get('wtd', 0)))
    for entry in (dd.get('future_weeks', []) or []):
        wk, val = entry if isinstance(entry, (list, tuple)) else (entry, 0)
        weekly_actual_labels.append(str(wk)[:10])
        weekly_actual_data.append(float(val))

    sales_chart = {
        'id': 'salesChart',
        'labels': weekly_actual_labels,
        'datasets': [{'label': 'Weekly Sales', 'data': weekly_actual_data}],
    }

    # monthlyChart: budget vs model net (Apr-Dec)
    monthly_chart = {
        'id': 'monthlyChart',
        'labels': mf_months,
        'datasets': [
            {'label': 'Budget Net Revenue',   'data': mf_budget_net},
            {'label': 'Forecast Net Revenue', 'data': mf_model_net},
        ],
    }

    # budgetSalesChart: required sales by month
    budget_sales_chart = {
        'id': 'budgetSalesChart',
        'labels': mf_months,
        'datasets': [{'label': 'Required Sales', 'data': mf_adj_req}],
    }

    # execChart: 12-month budget / model / known
    exec_chart = {
        'id': 'execChart',
        'labels': months,
        'datasets': [
            {'label': 'Budget',           'data': budget_inv},
            {'label': 'Model Revenue',    'data': rev_model},
            {'label': 'From Known Sales', 'data': rev_known},
        ],
    }

    # branchChart: top branches by historical revenue mix
    branch_chart_labels = []
    branch_chart_data = []
    for b, share in sorted(branch_mix.items(), key=lambda x: -float(x[1] or 0))[:10]:
        branch_chart_labels.append(b)
        branch_chart_data.append(float(share or 0) * 100)
    branch_chart = {
        'id': 'branchChart',
        'labels': branch_chart_labels,
        'datasets': [{'label': 'Mix %', 'data': branch_chart_data}],
    }

    # convChart: conversion curves by job type
    conv_labels = ['M+0', 'M+1', 'M+2', 'M+3', 'M+4', 'M+5']
    conv_datasets = []
    for jt in ('Insurance', 'Retail-Financing', 'Retail-No Financing', 'Repair'):
        curve = conv_by_type.get(jt)
        if not curve:
            continue
        data = []
        for i in range(6):
            v = curve.get(i, curve.get(str(i), 0))
            data.append(float(v) * 100)
        conv_datasets.append({'label': jt, 'data': data})
    conv_chart = {'id': 'convChart', 'labels': conv_labels, 'datasets': conv_datasets}

    # cycleChart: cycle days by job type
    cycle_chart_labels = []
    cycle_c2ip = []
    cycle_ip2c = []
    for jt in ('Insurance', 'Retail-Financing', 'Retail-No Financing', 'Repair'):
        ct = jt_cycle_times.get(jt) or {}
        if not ct:
            continue
        cycle_chart_labels.append(jt)
        cycle_c2ip.append(int(ct.get('c2ip', 0)))
        cycle_ip2c.append(int(ct.get('ip2c', 0)))
    cycle_chart = {
        'id': 'cycleChart',
        'labels': cycle_chart_labels,
        'datasets': [
            {'label': 'Created -> In Progress', 'data': cycle_c2ip},
            {'label': 'In Progress -> Complete', 'data': cycle_ip2c},
        ],
    }

    charts = [sales_chart, monthly_chart, budget_sales_chart, exec_chart,
              branch_chart, conv_chart, cycle_chart]

    # -- Final assembly -----------------------------------------------------
    out = {
        'title': 'Residential Revenue Forecast',
        'subtitle': 'V5 Model with Job Type Analysis · Data as of ' + str(run_date),
        'runDate': str(run_date),
        'tabs': tabs,
        'kpis': kpis,
        'execSummary': exec_summary,
        'monthRevenue': month_revenue,
        'weeklyTargetsHeader': weekly_targets_header,
        'budgetRecoveryHeader': budget_recovery_header,
        'profitabilitySummary': profitability_summary,
        'pipelineSnapshot': pipeline_snapshot,
        'commentary': commentary,
        'tables': tables,
        'charts': charts,
        # Raw arrays so downstream consumers can recompute without re-running Python:
        'monthsLabel': months,
        'budgetInv': budget_inv,
        'budgetSolveInv': budget_solve_inv,
        'revModel': rev_model,
        'revFromKnown': rev_known,
        'requiredSales': required_sales,
        'backlogData': backlog_data,
        'methodologyLock': {
            'version': 'V5',
            'lockedOn': '2026-04-19',
            'items': [
                'WIP constants (PCT_NEW=0.75, PCT_PRIOR=0.90, MARGIN=0.40)',
                'Cycle hierarchy (JT+TC, JT+Branch, JT, TC, Overall)',
                'Same-month conversion rates per job type',
                'Material mark-up assumptions (35% material, 22% labor of new IP)',
            ]
        }
    }

    safe_out = safe(out)
    with open(OUT_PATH, 'w') as f:
        json.dump(safe_out, f, indent=2, default=str)
    print('v5_to_json.py: wrote ' + OUT_PATH +
          ' (' + str(len(json.dumps(safe_out))) + ' bytes)')


if __name__ == '__main__':
    try:
        main()
    except Exception as e:
        print('v5_to_json.py FAILED: ' + str(e), file=sys.stderr)
        import traceback
        traceback.print_exc()
        sys.exit(1)
