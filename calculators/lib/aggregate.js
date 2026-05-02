/* ============================================================
   FEAZEL CALCULATORS — Aggregation helpers
   Group-by, sum-by, median, percentiles, etc.
   ============================================================ */

function groupBy(rows, keyFn) {
  const out = {};
  rows.forEach(r => {
    const k = typeof keyFn === 'function' ? keyFn(r) : r[keyFn];
    if (k == null) return;
    (out[k] = out[k] || []).push(r);
  });
  return out;
}

function sumBy(rows, keyFn) {
  return rows.reduce((a, r) => a + (typeof keyFn === 'function' ? keyFn(r) : (Number(r[keyFn]) || 0)), 0);
}

function avgBy(rows, keyFn) {
  if (!rows.length) return 0;
  return sumBy(rows, keyFn) / rows.length;
}

function median(values) {
  if (!values.length) return 0;
  const sorted = values.slice().filter(v => typeof v === 'number' && !isNaN(v)).sort((a, b) => a - b);
  if (!sorted.length) return 0;
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

function percentile(values, p) {
  if (!values.length) return 0;
  const sorted = values.slice().filter(v => typeof v === 'number' && !isNaN(v)).sort((a, b) => a - b);
  const idx = (p / 100) * (sorted.length - 1);
  const lo = Math.floor(idx);
  const hi = Math.ceil(idx);
  if (lo === hi) return sorted[lo];
  return sorted[lo] + (sorted[hi] - sorted[lo]) * (idx - lo);
}

function unique(values) {
  return Array.from(new Set(values));
}

function topN(rows, keyFn, n) {
  return rows.slice().sort((a, b) => {
    const av = typeof keyFn === 'function' ? keyFn(a) : a[keyFn];
    const bv = typeof keyFn === 'function' ? keyFn(b) : b[keyFn];
    return bv - av;
  }).slice(0, n);
}

function pctChange(now, prev) {
  if (!prev) return 0;
  return ((now - prev) / prev) * 100;
}

/** ISO-week of a Date. Returns { year, week }. */
function isoWeek(d) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
  return { year: date.getUTCFullYear(), week: weekNo };
}

function ymKey(d) {
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
}

function monthLabel(ym) {
  const [y, m] = ym.split('-').map(Number);
  return new Date(y, m - 1, 1).toLocaleString('en-US', { month: 'long' });
}

module.exports = {
  groupBy, sumBy, avgBy, median, percentile, unique, topN, pctChange,
  isoWeek, ymKey, monthLabel
};
