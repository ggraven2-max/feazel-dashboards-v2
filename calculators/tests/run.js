#!/usr/bin/env node
/* ============================================================
   FEAZEL CALCULATOR SNAPSHOT TESTS
   Runs every calculator under every applicable LOB and compares
   output against snapshots/<lob>__<project>.json. When snapshots
   are present, methodology drift fails the build.

   Update snapshots intentionally with:
     npm run test:calculators -- --update

   Update gating: do NOT auto-update. Methodology snapshots only
   move with sign-off (Greg + Mahlet for residential V5; Greg + Jeff
   for service; Greg + Todd + Lisa + Mahlet for MF).
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const SNAP_DIR = path.join(__dirname, 'snapshots');

// Same matrix the pipeline runs.
const PROJECTS = ['sales-overview', 'revenue-forecast', 'backlog', 'installs-ytd', 'service-calls'];
const LOBS = ['residential', 'multi-family', 'service'];
const SERVICE_PROJECTS = new Set(['revenue-forecast', 'service-calls']);
const SERVICE_ONLY_PROJECTS = new Set(['service-calls']);

const update = process.argv.includes('--update');

// Number tolerance for snapshot comparisons. We accept drift when EITHER:
//   |a - b| < ABS_EPSILON      (covers small rounded display values like
//                                26.5 vs 26.6 where the underlying float is
//                                26.55 and float-print rounds it both ways)
//   |a - b| / max(|a|,|b|) < REL_EPSILON  (covers tiny float drift on big
//                                numbers, e.g. $20.92M vs $20.92M ± a cent)
// REL_EPSILON of 0.001 means "0.1% of value" — plenty tight for catching
// methodology drift, loose enough to ignore platform float quirks.
const ABS_EPSILON = 0.15;
const REL_EPSILON = 0.001;

function deepEqual(a, b, pathStr) {
  pathStr = pathStr || '$';
  if (a === b) return null;
  if (a == null || b == null) return pathStr + ': ' + JSON.stringify(a) + ' vs ' + JSON.stringify(b);
  if (typeof a !== typeof b) return pathStr + ': type mismatch';
  if (Array.isArray(a) !== Array.isArray(b)) return pathStr + ': array mismatch';
  if (Array.isArray(a)) {
    if (a.length !== b.length) return pathStr + ': length ' + a.length + ' vs ' + b.length;
    for (let i = 0; i < a.length; i++) {
      const e = deepEqual(a[i], b[i], pathStr + '[' + i + ']');
      if (e) return e;
    }
    return null;
  }
  if (typeof a === 'object') {
    const ak = Object.keys(a).sort();
    const bk = Object.keys(b).sort();
    if (ak.join(',') !== bk.join(',')) return pathStr + ': key set differs';
    for (const k of ak) {
      const e = deepEqual(a[k], b[k], pathStr + '.' + k);
      if (e) return e;
    }
    return null;
  }
  if (typeof a === 'number' && typeof b === 'number') {
    const diff = Math.abs(a - b);
    if (diff < ABS_EPSILON) return null;
    const scale = Math.max(Math.abs(a), Math.abs(b));
    if (scale > 0 && diff / scale < REL_EPSILON) return null;
    return pathStr + ': ' + a + ' vs ' + b;
  }
  return pathStr + ': ' + JSON.stringify(a) + ' vs ' + JSON.stringify(b);
}

// _meta.builtAt and similar timestamps move every run. Strip volatile keys
// before comparing so the snapshot only locks the math, not the wall clock.
const VOLATILE_KEYS = new Set([
  'builtAt',
  'runDate',
  'lastBuild',
  'latestInvoiceDate',
  'asOf'
]);

function stripVolatile(node) {
  if (Array.isArray(node)) return node.map(stripVolatile);
  if (node && typeof node === 'object') {
    const out = {};
    for (const k of Object.keys(node)) {
      if (VOLATILE_KEYS.has(k)) continue;
      // Drop undefined-valued keys. JSON.stringify removes these on disk, so
      // keeping them in the in-memory tree would create false key-set
      // mismatches against the reloaded snapshot.
      if (node[k] === undefined) continue;
      out[k] = stripVolatile(node[k]);
    }
    return out;
  }
  return node;
}

function jobsForLob(lob) {
  if (lob === 'service') return PROJECTS.filter(p => SERVICE_PROJECTS.has(p));
  return PROJECTS.filter(p => !SERVICE_ONLY_PROJECTS.has(p));
}

function runOne(projectId, lob) {
  // Force a fresh require so module-level state from a prior LOB does not leak.
  const calcPath = path.join(ROOT, 'calculators', projectId + '.js');
  delete require.cache[require.resolve(calcPath)];
  const calc = require(calcPath);
  const inputDir = path.join(ROOT, 'inputs', lob, projectId);
  const snapshotPath = path.join(ROOT, 'redesign', lob, 'shared', 'extracted-data.json');
  return calc.run({ inputDir, snapshotPath, lob });
}

function snapshotName(projectId, lob) {
  return lob + '__' + projectId + '.json';
}

function main() {
  if (!fs.existsSync(SNAP_DIR)) fs.mkdirSync(SNAP_DIR, { recursive: true });
  let pass = 0, fail = 0, created = 0;
  const failures = [];

  for (const lob of LOBS) {
    for (const projectId of jobsForLob(lob)) {
      const label = lob + ' / ' + projectId;
      process.stdout.write('· ' + label + ' ... ');
      let out;
      try {
        out = runOne(projectId, lob);
      } catch (e) {
        console.log('ERROR (' + e.message + ')');
        fail++; failures.push(label + ': ' + e.message); continue;
      }
      const stripped = stripVolatile(out);
      const snapPath = path.join(SNAP_DIR, snapshotName(projectId, lob));
      if (!fs.existsSync(snapPath) || update) {
        fs.writeFileSync(snapPath, JSON.stringify(stripped, null, 2));
        console.log(update ? 'snapshot UPDATED' : 'snapshot CREATED');
        created++;
        continue;
      }
      const existing = JSON.parse(fs.readFileSync(snapPath, 'utf8'));
      const diff = deepEqual(existing, stripped);
      if (diff) {
        console.log('FAIL — ' + diff);
        fail++; failures.push(label + ': ' + diff);
      } else {
        console.log('ok');
        pass++;
      }
    }
  }

  console.log('\n' + pass + ' passed, ' + fail + ' failed, ' + created + ' snapshot(s) ' + (update ? 'updated' : 'created'));
  if (fail > 0) {
    console.log('\nMethodology drift detected. Either:');
    console.log('  1) Fix the calculator to match the locked snapshot');
    console.log('  2) Get sign-off and run: npm run test:calculators -- --update');
    console.log('\nFailures:');
    failures.forEach(f => console.log('  · ' + f));
    process.exit(1);
  }
}

if (require.main === module) main();
