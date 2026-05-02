#!/usr/bin/env node
/* ============================================================
   FEAZEL DASHBOARD PIPELINE
   Runs all (or one) calculator, validates, writes data.js
   and data.json for the web dashboards and the iOS app.

   Usage:
     node pipeline/build.js                    # all projects
     node pipeline/build.js --project sales-overview
     node pipeline/build.js --validate-only    # don't write output
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PROJECTS = ['sales-overview', 'revenue-forecast', 'backlog', 'installs-ytd'];
const KEY_MAP = {
  'sales-overview':   'SALES_OVERVIEW',
  'revenue-forecast': 'REVENUE_FORECAST',
  'backlog':          'BACKLOG',
  'installs-ytd':     'INSTALLS_YTD'
};

function parseArgs(argv) {
  const args = { project: null, validateOnly: false };
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === '--project' && argv[i + 1]) { args.project = argv[++i]; }
    else if (argv[i] === '--validate-only') { args.validateOnly = true; }
  }
  return args;
}

function timestamp() {
  return new Date().toISOString();
}

function buildOne(projectId) {
  const calc = require(path.join(ROOT, 'calculators', projectId + '.js'));
  console.log('\n→ Running calculator: ' + projectId + ' (v' + calc.version + ')');
  const start = Date.now();
  let output;
  try {
    output = calc.run();
  } catch (err) {
    console.error('  ✗ FAILED: ' + err.message);
    if (process.env.DEBUG) console.error(err.stack);
    return { id: projectId, ok: false, error: err.message };
  }
  const errors = (calc.validate ? calc.validate(output) : []) || [];
  if (errors.length) {
    console.error('  ✗ VALIDATION ERRORS:');
    errors.forEach(e => console.error('    - ' + e));
    return { id: projectId, ok: false, errors };
  }
  const elapsed = Date.now() - start;
  console.log('  ✓ ok (' + elapsed + 'ms)');
  return { id: projectId, ok: true, output, version: calc.version, elapsedMs: elapsed };
}

function writeOutputs(combined) {
  const dataDir = path.join(ROOT, 'data');
  const sharedDir = path.join(ROOT, 'redesign', 'shared');

  // Write canonical JSON for the iOS app
  const jsonPath = path.join(dataDir, 'data.json');
  fs.writeFileSync(jsonPath, JSON.stringify(combined, null, 2));
  console.log('\n✓ Wrote ' + path.relative(ROOT, jsonPath));

  // Wrap in window.FZ.data = ... for the web dashboards
  const jsContent =
    '/* AUTO-GENERATED — do not edit. Generated ' + combined._meta.builtAt + ' */\n' +
    'window.FZ = window.FZ || {};\n' +
    'window.FZ.data = ' + JSON.stringify(combined, null, 2) + ';\n';
  const jsPath = path.join(sharedDir, 'data.js');
  fs.writeFileSync(jsPath, jsContent);
  console.log('✓ Wrote ' + path.relative(ROOT, jsPath));

  // Also keep the JSON snapshot in sync (it's used as the passthrough fallback)
  const extractedPath = path.join(sharedDir, 'extracted-data.json');
  fs.writeFileSync(extractedPath, JSON.stringify(combined, null, 2));
  console.log('✓ Wrote ' + path.relative(ROOT, extractedPath));
}

function main() {
  const args = parseArgs(process.argv);
  const projects = args.project ? [args.project] : PROJECTS;

  console.log('═══════════════════════════════════════════════════════════');
  console.log(' FEAZEL DASHBOARD BUILD · ' + timestamp());
  console.log(' Projects: ' + projects.join(', '));
  if (args.validateOnly) console.log(' Mode: VALIDATE-ONLY (no files will be written)');
  console.log('═══════════════════════════════════════════════════════════');

  const results = projects.map(buildOne);
  const failed = results.filter(r => !r.ok);
  if (failed.length) {
    console.error('\n✗ ' + failed.length + ' calculator(s) failed:');
    failed.forEach(f => console.error('  · ' + f.id + ': ' + (f.error || (f.errors || []).join('; '))));
    process.exit(1);
  }

  // Start from the existing on-disk snapshot so a single-project build
  // doesn't wipe the other three projects' data.
  let combined = {};
  const existingPath = path.join(ROOT, 'redesign', 'shared', 'extracted-data.json');
  if (fs.existsSync(existingPath)) {
    try {
      combined = JSON.parse(fs.readFileSync(existingPath, 'utf8'));
    } catch (err) {
      console.warn('  warning: could not parse existing extracted-data.json, starting fresh');
      combined = {};
    }
  }

  // Refresh meta. Preserve other projects' versions, replace the ones we just built.
  const priorMeta = combined._meta || {};
  const priorProjectMeta = (priorMeta.projects || []).reduce((acc, p) => {
    acc[p.id] = p; return acc;
  }, {});
  results.forEach(r => {
    priorProjectMeta[r.id] = { id: r.id, version: r.version, elapsedMs: r.elapsedMs, builtAt: timestamp() };
  });
  combined._meta = {
    builtAt: timestamp(),
    pipelineVersion: '1.0.0',
    lastBuiltProjects: results.map(r => r.id),
    projects: Object.values(priorProjectMeta)
  };

  // Merge this run's outputs over the existing keys
  results.forEach(r => {
    combined[KEY_MAP[r.id]] = r.output;
  });

  if (args.validateOnly) {
    console.log('\n✓ Validation passed. (Skipping write.)');
    return;
  }

  writeOutputs(combined);

  // Regenerate mobile HTML scaffolding so any new sub-tab in pages.js
  // automatically gets a phone-friendly page. Idempotent and fast.
  try {
    require('child_process').execFileSync(
      'node',
      [path.join(ROOT, 'redesign', 'mobile', 'build-mobile.js')],
      { stdio: 'inherit' }
    );
  } catch (err) {
    console.warn('  warning: mobile scaffold regen failed (non-fatal):', err.message);
  }

  console.log('\n═══════════════════════════════════════════════════════════');
  console.log(' BUILD COMPLETE · refresh any dashboard tab to see updates');
  console.log('═══════════════════════════════════════════════════════════');
}

if (require.main === module) main();
module.exports = { buildOne, parseArgs, PROJECTS };
