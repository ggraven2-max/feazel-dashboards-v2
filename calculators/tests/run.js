#!/usr/bin/env node
/* ============================================================
   FEAZEL CALCULATOR SNAPSHOT TESTS
   Runs each calculator and compares output against snapshots/<id>.json.
   When snapshots are present, methodology drift fails the build.

   Update snapshots intentionally with:  npm run test:calculators -- --update
   (which is gated by sign-off — don't auto-update).
   ============================================================ */
const fs = require('fs');
const path = require('path');

const SNAP_DIR = path.join(__dirname, 'snapshots');
const PROJECTS = ['sales-overview', 'revenue-forecast', 'backlog', 'installs-ytd'];
const update = process.argv.includes('--update');

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
    return Math.abs(a - b) < 0.001 ? null : (pathStr + ': ' + a + ' vs ' + b);
  }
  return pathStr + ': ' + JSON.stringify(a) + ' vs ' + JSON.stringify(b);
}

function main() {
  if (!fs.existsSync(SNAP_DIR)) fs.mkdirSync(SNAP_DIR, { recursive: true });
  let pass = 0, fail = 0, created = 0;

  for (const p of PROJECTS) {
    process.stdout.write('· ' + p + ' ... ');
    const calc = require(path.join('..', p + '.js'));
    let out;
    try {
      out = calc.run();
    } catch (e) {
      console.log('ERROR (' + e.message + ')');
      fail++; continue;
    }
    const snapPath = path.join(SNAP_DIR, p + '.json');
    if (!fs.existsSync(snapPath) || update) {
      fs.writeFileSync(snapPath, JSON.stringify(out, null, 2));
      console.log(update ? 'snapshot UPDATED' : 'snapshot CREATED');
      created++;
      continue;
    }
    const existing = JSON.parse(fs.readFileSync(snapPath, 'utf8'));
    const diff = deepEqual(existing, out);
    if (diff) {
      console.log('FAIL — ' + diff);
      fail++;
    } else {
      console.log('ok');
      pass++;
    }
  }

  console.log('\n' + pass + ' passed, ' + fail + ' failed, ' + created + ' snapshot(s) ' + (update ? 'updated' : 'created'));
  if (fail > 0) {
    console.log('\nMethodology drift detected. Either:');
    console.log('  1) Fix the calculator to match the locked snapshot');
    console.log('  2) Get sign-off and run: npm run test:calculators -- --update');
    process.exit(1);
  }
}

if (require.main === module) main();
