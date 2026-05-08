/* ============================================================
   FEAZEL CALCULATORS — Input/Output helpers
   Read CSV / XLSX files into arrays of objects.
   ============================================================ */
const fs = require('fs');
const path = require('path');

/** Synchronously read all files in a folder, SORTED NEWEST-FIRST by mtime.
 *  FORECASTING_RULES.md spec: "the pipeline picks the most recently modified
 *  match." Calculators do `files.find(pred)`, which returns the first match;
 *  with this sort, the newest dated XLSX wins when older copies are still
 *  on disk (e.g., yesterday's "...2026-05-07-..." file alongside today's
 *  "...2026-05-08-..." file).
 *  Returns [{name, ext, fullPath, mtime}]. */
function listInputs(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => !f.startsWith('.') && !/\.(md|gitkeep|README)$/i.test(f))
    .map(f => {
      const fullPath = path.join(dir, f);
      let mtime = 0;
      try { mtime = fs.statSync(fullPath).mtimeMs; } catch (e) {}
      return {
        name: f,
        ext: path.extname(f).toLowerCase().replace('.', ''),
        fullPath: fullPath,
        mtime: mtime
      };
    })
    .filter(f => ['csv', 'xlsx', 'xls', 'json', 'tsv'].includes(f.ext))
    .sort(function (a, b) { return b.mtime - a.mtime; });
}

/** Read a CSV file and return an array of row objects. */
function readCsv(filePath, opts = {}) {
  let Papa;
  try { Papa = require('papaparse'); }
  catch (e) {
    throw new Error('papaparse is not installed. Run: npm install');
  }
  const text = fs.readFileSync(filePath, 'utf8');
  const parsed = Papa.parse(text, Object.assign({
    header: true,
    skipEmptyLines: true,
    dynamicTyping: false,    // keep as strings so we control parsing
    transformHeader: h => String(h).trim()
  }, opts));
  if (parsed.errors && parsed.errors.length) {
    parsed.errors.forEach(e => console.warn('  CSV parse warning:', e.message, '(row ' + e.row + ')'));
  }
  return parsed.data;
}

/** Read an XLSX/XLS file. Returns { sheetName: [rows...] } for all sheets, or array for first sheet if single. */
function readXlsx(filePath, sheetName) {
  let XLSX;
  try { XLSX = require('xlsx'); }
  catch (e) {
    throw new Error('xlsx is not installed. Run: npm install');
  }
  const wb = XLSX.readFile(filePath, { cellDates: true });
  if (sheetName) {
    const sheet = wb.Sheets[sheetName];
    if (!sheet) throw new Error('Sheet "' + sheetName + '" not found in ' + filePath);
    return XLSX.utils.sheet_to_json(sheet, { defval: null, raw: false });
  }
  // Return all sheets
  const out = {};
  wb.SheetNames.forEach(name => {
    out[name] = XLSX.utils.sheet_to_json(wb.Sheets[name], { defval: null, raw: false });
  });
  return out;
}

/** Read any supported file by extension. */
function readAny(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.csv' || ext === '.tsv') return readCsv(filePath);
  if (ext === '.xlsx' || ext === '.xls') return readXlsx(filePath);
  if (ext === '.json') return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  throw new Error('Unsupported extension: ' + ext);
}

/** Pretty-print a number → "$24.5M" / "1,234". */
function formatMoney(v, opts = {}) {
  if (v == null || isNaN(v)) return '—';
  const abs = Math.abs(v);
  if (opts.short) {
    if (abs >= 1e9) return '$' + (v / 1e9).toFixed(1).replace(/\.0$/, '') + 'B';
    if (abs >= 1e6) return '$' + (v / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
    if (abs >= 1e3) return '$' + (v / 1e3).toFixed(0) + 'K';
  }
  return '$' + Math.round(v).toLocaleString('en-US');
}

/** Coerce strings to numbers safely. */
function toNumber(v) {
  if (v == null || v === '') return 0;
  if (typeof v === 'number') return v;
  const cleaned = String(v).replace(/[$,\s]/g, '');
  const n = parseFloat(cleaned);
  return isNaN(n) ? 0 : n;
}

/** Coerce to date. Returns null on failure. */
function toDate(v) {
  if (!v) return null;
  if (v instanceof Date) return v;
  const d = new Date(v);
  return isNaN(d.getTime()) ? null : d;
}

module.exports = { listInputs, readCsv, readXlsx, readAny, formatMoney, toNumber, toDate };
