/* ============================================================
   FEAZEL — Shared NetSuite invoice parser
   ----------------------------------------------------------------
   Reads a NetSuite AR invoice export (e.g., MFInvoicedYTDResults404.csv,
   ResInvoicedYTDResults650.csv). Used by both the residential V5 wrapper
   and the multi-family revenue calculator to source "Invoiced YTD" from
   booked GL invoices instead of Salesforce stage transitions.

   Expected columns:
     Internal ID, Order Type, *, Date, Location, Period, Type,
     Document Number, Name, Account, Memo, Amount

   We only count rows where Type = 'Invoice' (excludes Credit Memos etc).
   ============================================================ */
const fs = require('fs');
const path = require('path');

const FY = 2026;
const MONTH_PERIOD_MAP = {
  'jan': 0, 'january': 0, 'feb': 1, 'february': 1, 'mar': 2, 'march': 2,
  'apr': 3, 'april': 3, 'may': 4, 'jun': 5, 'june': 5,
  'jul': 6, 'july': 6, 'aug': 7, 'august': 7, 'sep': 8, 'sept': 8, 'september': 8,
  'oct': 9, 'october': 9, 'nov': 10, 'november': 10, 'dec': 11, 'december': 11
};

// Branch label normalization to match the rest of the dashboard's branch keys
const BRANCH_REMAP = {
  'detroit metro': 'Detroit',
  'nova': 'DC Metro',
  'greensboro': 'Charlotte',     // collapses tiny markets if needed; can be tuned
};

function findInvoiceFile(inputDir) {
  if (!fs.existsSync(inputDir)) return null;
  const files = fs.readdirSync(inputDir);
  const match = files.find(f => /invoicedytd/i.test(f) && /\.csv$/i.test(f));
  return match ? path.join(inputDir, match) : null;
}

function parsePeriod(periodStr) {
  if (!periodStr) return null;
  // Format like "Jan 2026", "Apr 2026"
  const m = String(periodStr).trim().match(/^(\w+)\s+(\d{4})/);
  if (!m) return null;
  const monthIdx = MONTH_PERIOD_MAP[m[1].toLowerCase()];
  const year = parseInt(m[2], 10);
  if (monthIdx == null || isNaN(year)) return null;
  return { year: year, monthIdx: monthIdx };
}

function parseDate(dateStr) {
  if (!dateStr) return null;
  // Format: M/D/YYYY (NetSuite default)
  const s = String(dateStr).trim();
  const m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);
  if (!m) return null;
  const d = new Date(parseInt(m[3], 10), parseInt(m[1], 10) - 1, parseInt(m[2], 10));
  return isNaN(d.getTime()) ? null : d;
}

function parseAmount(s) {
  if (s == null || s === '') return 0;
  return parseFloat(String(s).replace(/[$,\s]/g, '')) || 0;
}

function normalizeBranch(loc) {
  if (!loc) return '(unassigned)';
  const key = String(loc).trim().toLowerCase();
  return BRANCH_REMAP[key] || String(loc).trim();
}

// Tiny CSV parser tolerant of quoted fields with embedded commas
function parseCsv(text) {
  const rows = [];
  let row = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') { cur += '"'; i++; }   // escaped quote
        else inQuotes = false;
      } else cur += ch;
    } else {
      if (ch === '"') inQuotes = true;
      else if (ch === ',') { row.push(cur); cur = ''; }
      else if (ch === '\n') { row.push(cur); rows.push(row); row = []; cur = ''; }
      else if (ch === '\r') { /* skip */ }
      else cur += ch;
    }
  }
  if (cur || row.length) { row.push(cur); rows.push(row); }
  return rows;
}

/**
 * Parse the NetSuite invoice CSV from inputDir, return aggregates.
 * Returns null if file not found.
 *
 * Result shape:
 *   {
 *     fileName,
 *     totalInvoiced,            // sum of all Invoice rows (all months YTD)
 *     invoiceCount,
 *     monthly: number[12],      // sum per month for FY (zero for months without invoices)
 *     byBranch: { [branch]: { invoiced: number, count: number } },
 *     byMonth:  { [monthKey]: { invoiced: number, count: number } },
 *     latestDate: Date,
 *     periods: string[]         // e.g. ['Jan 2026', 'Feb 2026', ...]
 *   }
 */
function parseInvoices(inputDir) {
  const file = findInvoiceFile(inputDir);
  if (!file) return null;

  const text = fs.readFileSync(file, 'utf8').replace(/^﻿/, '');
  const rows = parseCsv(text);
  if (!rows.length) return null;

  const headers = rows[0].map(h => h.trim().toLowerCase());
  const idx = (name) => headers.indexOf(name.toLowerCase());

  const cDate = idx('date');
  const cLocation = idx('location');
  const cPeriod = idx('period');
  const cType = idx('type');
  const cAmount = idx('amount');

  const monthly = new Array(12).fill(0);
  const byBranch = {};
  const byMonth = {};
  const periodsSeen = new Set();
  let totalInvoiced = 0;
  let invoiceCount = 0;
  let latestDate = null;

  for (let r = 1; r < rows.length; r++) {
    const row = rows[r];
    if (!row || row.every(c => !c || !c.trim())) continue;
    const type = (row[cType] || '').trim();
    if (type.toLowerCase() !== 'invoice') continue;
    const amount = parseAmount(row[cAmount]);
    if (!amount) continue;

    const date = parseDate(row[cDate]);
    const period = parsePeriod(row[cPeriod]);
    const branch = normalizeBranch(row[cLocation]);

    // Use Period as the primary month source; Date as fallback
    let monthIdx = null;
    if (period && period.year === FY) {
      monthIdx = period.monthIdx;
    } else if (date && date.getFullYear() === FY) {
      monthIdx = date.getMonth();
    } else {
      continue;   // skip non-FY rows
    }

    monthly[monthIdx] += amount;
    totalInvoiced += amount;
    invoiceCount++;

    if (!byBranch[branch]) byBranch[branch] = { invoiced: 0, count: 0 };
    byBranch[branch].invoiced += amount;
    byBranch[branch].count++;

    const monthKey = FY + '-' + String(monthIdx + 1).padStart(2, '0');
    if (!byMonth[monthKey]) byMonth[monthKey] = { invoiced: 0, count: 0 };
    byMonth[monthKey].invoiced += amount;
    byMonth[monthKey].count++;

    if (date && (!latestDate || date > latestDate)) latestDate = date;

    if (period) periodsSeen.add(period.monthIdx);
  }

  return {
    fileName: path.basename(file),
    totalInvoiced: totalInvoiced,
    invoiceCount: invoiceCount,
    monthly: monthly,
    byBranch: byBranch,
    byMonth: byMonth,
    latestDate: latestDate,
    monthsWithData: Array.from(periodsSeen).sort((a, b) => a - b)
  };
}

module.exports = { parseInvoices, findInvoiceFile, FY };
