/* ============================================================
   FEAZEL — V5 Excel Model cross-check
   ----------------------------------------------------------------
   Reads the V5 "Revenue Forecast Model.xlsx" output (when present
   in the inputs folder) and surfaces a few headline KPIs so the
   calculator can verify the JSON output it produces matches what
   Mahlet sees in Excel. Logs warnings on divergence beyond a small
   tolerance, never blocks the build.

   Drop the file at:
     inputs/residential/revenue-forecast/Revenue Forecast Model.xlsx
   The pipeline picks it up automatically.
   ============================================================ */
const fs = require('fs');
const path = require('path');

function findFile(inputDir) {
  if (!fs.existsSync(inputDir)) return null;
  const files = fs.readdirSync(inputDir);
  // Match both "Revenue Forecast Model.xlsx" and any timestamped variant
  const match = files.find(f => /revenue forecast model/i.test(f) && /\.xlsx?$/i.test(f));
  return match ? path.join(inputDir, match) : null;
}

// Pull the headline KPIs from the Executive Summary sheet by scanning for known label cells.
function extractHeadlineKpis(filePath) {
  const xlsx = require('xlsx');
  const wb = xlsx.readFile(filePath, { cellDates: false });
  if (!wb.SheetNames.includes('Executive Summary')) return null;

  const sheet = wb.Sheets['Executive Summary'];
  const rows = xlsx.utils.sheet_to_json(sheet, { header: 1, defval: null });

  // Helper: find the value next to a label cell anywhere in the sheet
  function valueNextTo(label, opts) {
    opts = opts || {};
    const labelLow = label.toLowerCase();
    for (let r = 0; r < rows.length; r++) {
      const row = rows[r] || [];
      for (let c = 0; c < row.length; c++) {
        const cell = row[c];
        if (cell == null) continue;
        const s = String(cell).toLowerCase();
        if (s.includes(labelLow)) {
          // Return the next non-null numeric cell in the same row (after this column)
          for (let cc = c + 1; cc < row.length; cc++) {
            const v = row[cc];
            if (typeof v === 'number') return v;
          }
        }
      }
    }
    return null;
  }

  return {
    invoicedYTD:           valueNextTo('Invoiced YTD'),
    ytdSalesCreated:       valueNextTo('YTD Sales (Jobs Created)'),
    fourWeekAvgSales:      valueNextTo('4-Week Avg Weekly Sales'),
    weeklyTrend:           valueNextTo('Weekly Sales Trend'),
    aprilNetRevenue:       valueNextTo('April Net Revenue'),
    mayNetRevenue:         valueNextTo('May Net Revenue'),
    annualBudgetNet:       valueNextTo('Budget Net Revenue'),
    annualModelNet:        valueNextTo('Model Net Revenue'),
    annualVariance:        valueNextTo('Annual Variance')
  };
}

// Pull per-month invoiced from the Monthly Forecast sheet.
function extractMonthlyInvoiced(filePath) {
  const xlsx = require('xlsx');
  const wb = xlsx.readFile(filePath, { cellDates: false });
  if (!wb.SheetNames.includes('Monthly Forecast')) return null;

  const sheet = wb.Sheets['Monthly Forecast'];
  const rows = xlsx.utils.sheet_to_json(sheet, { header: 1, defval: null });

  // Find the "Model Invoiced Revenue" row and the month-header row above it
  let monthHeaderRow = null;
  let invoicedRow = null;
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r] || [];
    const first = row[0];
    if (first && /apr 2026/i.test(String(first))) monthHeaderRow = row;
    // The label "Apr 2026" might be in any column; look at column 0
    for (let c = 0; c < row.length; c++) {
      const v = row[c];
      if (v && /^apr 2026/i.test(String(v))) { monthHeaderRow = row; break; }
    }
    if (first && /model invoiced revenue/i.test(String(first))) invoicedRow = row;
  }
  if (!monthHeaderRow || !invoicedRow) return null;

  // Build month → invoiced map. Headers and data align by column index.
  const result = {};
  for (let c = 0; c < monthHeaderRow.length; c++) {
    const label = monthHeaderRow[c];
    const value = invoicedRow[c];
    if (label && /^[A-Za-z]{3} 2026$/.test(String(label).trim()) && typeof value === 'number') {
      result[String(label).trim()] = value;
    }
  }
  return result;
}

/**
 * Compare calculator output against the Excel model. Logs warnings on divergence.
 * Returns the cross-check report object so the calculator can attach it to its output.
 */
function crossCheck(out, inputDir) {
  const file = findFile(inputDir);
  if (!file) return null;

  let kpis, monthly;
  try {
    kpis = extractHeadlineKpis(file);
    monthly = extractMonthlyInvoiced(file);
  } catch (err) {
    console.log('  [v5-crosscheck] parse error: ' + err.message);
    return null;
  }
  if (!kpis) return null;

  const fname = path.basename(file);
  console.log('  [v5-crosscheck] reading ' + fname);

  // Compare Excel vs calculator output. Tolerance: $50K or 1%, whichever is larger.
  function divergence(label, excel, calc) {
    if (excel == null || calc == null) return null;
    const diff = calc - excel;
    const tol = Math.max(50000, Math.abs(excel) * 0.01);
    const drift = Math.abs(diff) > tol;
    return { label, excel, calc, diff, drift };
  }

  const checks = [];

  // Check Invoiced YTD: Excel headline vs NetSuite total
  const nsTotal = (out.netsuiteInvoiced && out.netsuiteInvoiced.totalInvoiced) || null;
  if (nsTotal != null && kpis.invoicedYTD != null) {
    checks.push(divergence('Invoiced YTD', kpis.invoicedYTD, nsTotal));
  }

  // Check April invoiced specifically (should be locked actual)
  const nsApril = (out.netsuiteInvoiced && out.netsuiteInvoiced.monthly && out.netsuiteInvoiced.monthly[3]) || null;
  if (monthly && monthly['Apr 2026'] != null && nsApril != null) {
    checks.push(divergence('April Invoiced', monthly['Apr 2026'], nsApril));
  }

  const valid = checks.filter(Boolean);
  const driftedItems = valid.filter(c => c.drift);

  if (valid.length === 0) {
    console.log('  [v5-crosscheck] no comparable values found');
  } else if (driftedItems.length === 0) {
    console.log('  [v5-crosscheck] ✓ ' + valid.length + ' KPI(s) reconcile with Excel within tolerance');
  } else {
    console.log('  [v5-crosscheck] ⚠ ' + driftedItems.length + ' divergence(s) beyond tolerance:');
    driftedItems.forEach(c => {
      console.log('    · ' + c.label + ': Excel $' + Math.round(c.excel).toLocaleString() +
        ' vs Calc $' + Math.round(c.calc).toLocaleString() +
        ' (Δ ' + (c.diff >= 0 ? '+' : '') + '$' + Math.round(c.diff).toLocaleString() + ')');
    });
  }

  return {
    source: fname,
    kpis: kpis,
    monthly: monthly,
    checks: valid,
    drifted: driftedItems.length
  };
}

module.exports = { crossCheck, findFile, extractHeadlineKpis, extractMonthlyInvoiced };
