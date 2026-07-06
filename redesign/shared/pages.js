/* ============================================================
   FEAZEL DASHBOARDS — Page Registry
   Single source of truth for sidebar + sub-tab navigation.
   ============================================================ */
window.FZ = window.FZ || {};

window.FZ.dashboards = [
  {
    id: 'sales-overview',
    title: 'Residential Sales Overview',
    short: 'Sales Overview',
    eyebrow: 'YTD ' + new Date().getFullYear(),
    desc: 'Signed contracts, pace vs plan, branch and rep performance, and the levers to close the gap.',
    folder: 'sales-overview',
    icon: 'trending-up',
    // asOf comes from window.FZ.data._meta.builtAt at render time; do not hardcode
    pages: [
      { slug: 'index',           label: 'Dashboard Home',     short: 'Home' },
      { slug: 'executive',       label: 'Executive Overview', short: 'Executive' },
      { slug: 'trends',          label: 'Trends & Momentum',  short: 'Trends' },
      { slug: 'markets',         label: 'Market Deep Dive',   short: 'Markets' },
      { slug: 'people',          label: 'People & Productivity', short: 'People' },
      { slug: 'job-mix',         label: 'Job Type & Service Mix', short: 'Job Mix' },
      { slug: 'cycle',           label: 'Sales Cycle Analysis', short: 'Cycle' },
      { slug: 'risks',           label: 'Risks & Red Flags',  short: 'Risks' },
      { slug: 'strengths',       label: 'Build on the Good',  short: 'Strengths' },
      { slug: 'fixes',           label: 'Fix the Weak Areas', short: 'Fixes' },
      { slug: 'action-plan',     label: 'Action Plan',        short: 'Plan' },
      { slug: 'weekly-targets',  label: 'Weekly Sales Targets', short: 'Targets' },
      { slug: 'budget-recovery', label: 'Budget Recovery',    short: 'Recovery' },
      { slug: 'billing',         label: 'Completed → Billing', short: 'Billing' }
    ]
  },
  {
    id: 'revenue-forecast',
    title: 'Residential Revenue Forecast',
    short: 'Revenue Forecast',
    eyebrow: new Date().getFullYear() + ' Outlook',
    desc: 'Realistic landing for net invoiced revenue against the annual budget, with cycle-aware conversion curves.',
    folder: 'revenue-forecast',
    icon: 'line-chart',
    // asOf comes from window.FZ.data._meta.builtAt at render time; do not hardcode
    pages: [
      { slug: 'index',           label: 'Dashboard Home',       short: 'Home' },
      { slug: 'executive',       label: 'Executive Summary',    short: 'Executive' },
      { slug: 'projection',      label: 'Sales Projection',     short: 'Projection' },
      { slug: 'monthly',         label: 'Monthly Forecast',     short: 'Monthly' },
      { slug: 'budget',          label: 'Budget Requirements',  short: 'Budget' },
      { slug: 'job-types',       label: 'Job Type Analysis',    short: 'Job Types' },
      { slug: 'pipeline',        label: 'Pipeline & Branch',    short: 'Pipeline' },
      { slug: 'cycle',           label: 'Cycle Times',          short: 'Cycle' },
      { slug: 'weekly-targets',  label: 'Weekly Sales Targets', short: 'Targets' },
      { slug: 'production',      label: 'Production Metrics',   short: 'Production' },
      { slug: 'profitability',   label: 'Profitability',        short: 'Profit' },
      { slug: 'budget-recovery', label: 'Budget Recovery',      short: 'Recovery' },
      { slug: 'recommendations', label: 'Strategic Recommendations', short: 'Recs' }
    ]
  },
  {
    id: 'backlog',
    title: 'Job Backlog & Production',
    short: 'Backlog',
    eyebrow: 'Live Operations',
    desc: 'Work-order-level backlog, holds, partial completions, and the cash sitting in unfinished work.',
    folder: 'backlog',
    icon: 'layers',
    // asOf comes from window.FZ.data._meta.builtAt at render time; do not hardcode
    pages: [
      { slug: 'index',         label: 'Dashboard Home',     short: 'Home' },
      { slug: 'executive',     label: 'Executive Summary',  short: 'Executive' },
      { slug: 'partial',       label: 'Partially Complete', short: 'Partial' },
      { slug: 'holds',         label: 'Holds & Blockers',   short: 'Holds' },
      { slug: 'trades',        label: 'Trade Analysis',     short: 'Trades' },
      { slug: 'branches',      label: 'Branch Drilldown',   short: 'Branches' },
      { slug: 'salespeople',   label: 'Salesperson View',   short: 'Reps' },
      { slug: 'pipeline',      label: 'Backlog Pipeline',   short: 'Pipeline' },
      { slug: 'action-plan',   label: 'Action Plan',        short: 'Plan' }
    ]
  },
  {
    id: 'installs-ytd',
    title: 'Residential Installs YTD',
    short: 'Installs YTD',
    eyebrow: 'Invoiced Production',
    desc: 'Invoiced jobs YTD by PM, market, and trade mix. Where the revenue is actually closing.',
    folder: 'installs-ytd',
    icon: 'check-circle',
    // asOf comes from window.FZ.data._meta.builtAt at render time; do not hardcode
    pages: [
      { slug: 'index',       label: 'Dashboard Home',     short: 'Home' },
      { slug: 'kpis',        label: 'Headline KPIs',      short: 'KPIs' },
      { slug: 'trends',      label: 'Monthly Trends',     short: 'Trends' },
      { slug: 'multi-trade', label: 'Multi-Trade Mix',    short: 'Multi-Trade' },
      { slug: 'markets',     label: 'Markets',            short: 'Markets' },
      { slug: 'pms',         label: 'Project Managers',   short: 'PMs' },
      { slug: 'work-types',  label: 'Work Types',         short: 'Work Types' },
      { slug: 'creators',    label: 'Created By',         short: 'Creators' },
      { slug: 'findings',    label: 'Key Findings',       short: 'Findings' }
    ]
  }
];

// Find dashboard + page from a folder/slug pair
window.FZ.findDashboard = function (folder) {
  return window.FZ.dashboards.find(function (d) { return d.folder === folder; });
};
window.FZ.findPage = function (folder, slug) {
  var d = window.FZ.findDashboard(folder);
  if (!d) return null;
  var p = d.pages.find(function (p) { return p.slug === slug; });
  return p ? Object.assign({}, p, { dashboard: d }) : null;
};
