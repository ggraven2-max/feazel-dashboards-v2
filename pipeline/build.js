#!/usr/bin/env node
/* ============================================================
   FEAZEL DASHBOARD PIPELINE (multi-LOB)
   Runs every calculator twice (once per Line of Business),
   writes per-LOB data.js and extracted-data.json into
   redesign/<lob>/shared/, plus a combined data/data.json for
   the iOS app.

   Usage:
     node pipeline/build.js                              # all LOBs, all projects
     node pipeline/build.js --lob residential            # one LOB, all projects
     node pipeline/build.js --lob residential --project sales-overview
     node pipeline/build.js --validate-only              # don't write output
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PROJECTS = ['sales-overview', 'revenue-forecast', 'backlog', 'installs-ytd'];
const LOBS = ['residential', 'multi-family', 'service'];
// Service is a fee-for-service line. It only has Revenue Forecast for now;
// other projects are skipped via SERVICE_PROJECTS to avoid running calculators
// that have no Service input data.
const SERVICE_PROJECTS = new Set(['revenue-forecast']);
const KEY_MAP = {
  'sales-overview':   'SALES_OVERVIEW',
  'revenue-forecast': 'REVENUE_FORECAST',
  'backlog':          'BACKLOG',
  'installs-ytd':     'INSTALLS_YTD'
};

function parseArgs(argv) {
  const args = { project: null, lob: null, validateOnly: false };
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === '--project' && argv[i + 1]) { args.project = argv[++i]; }
    else if (argv[i] === '--lob' && argv[i + 1]) { args.lob = argv[++i]; }
    else if (argv[i] === '--validate-only') { args.validateOnly = true; }
  }
  return args;
}

function timestamp() {
  return new Date().toISOString();
}

function pathsForLob(lob) {
  return {
    inputBase:    path.join(ROOT, 'inputs', lob),
    sharedDir:    path.join(ROOT, 'redesign', lob, 'shared'),
    snapshotPath: path.join(ROOT, 'redesign', lob, 'shared', 'extracted-data.json'),
    dataJsPath:   path.join(ROOT, 'redesign', lob, 'shared', 'data.js')
  };
}

function buildOne(projectId, lob) {
  const calc = require(path.join(ROOT, 'calculators', projectId + '.js'));
  // Clear cached require — calculators have module-level state we don't want carrying between LOBs
  delete require.cache[require.resolve(path.join(ROOT, 'calculators', projectId + '.js'))];
  const calcFresh = require(path.join(ROOT, 'calculators', projectId + '.js'));

  const lobPaths = pathsForLob(lob);
  const inputDir = path.join(lobPaths.inputBase, projectId);
  const snapshotPath = lobPaths.snapshotPath;

  console.log('\n→ ' + lob + ' / ' + projectId + ' (v' + calcFresh.version + ')');
  const start = Date.now();
  let output;
  try {
    output = calcFresh.run({ inputDir, snapshotPath, lob });
  } catch (err) {
    console.error('  ✗ FAILED: ' + err.message);
    if (process.env.DEBUG) console.error(err.stack);
    return { id: projectId, lob, ok: false, error: err.message };
  }
  const errors = (calcFresh.validate ? calcFresh.validate(output) : []) || [];
  if (errors.length) {
    console.error('  ✗ VALIDATION ERRORS:');
    errors.forEach(e => console.error('    - ' + e));
    return { id: projectId, lob, ok: false, errors };
  }
  const elapsed = Date.now() - start;
  console.log('  ✓ ok (' + elapsed + 'ms)');
  return { id: projectId, lob, ok: true, output, version: calcFresh.version, elapsedMs: elapsed };
}

function writeLobOutputs(lob, combined) {
  const lobPaths = pathsForLob(lob);
  fs.mkdirSync(lobPaths.sharedDir, { recursive: true });

  // window.FZ.data = ... for the dashboards
  const jsContent =
    '/* AUTO-GENERATED — do not edit. Generated ' + combined._meta.builtAt + ' (' + lob + ') */\n' +
    'window.FZ = window.FZ || {};\n' +
    'window.FZ.data = ' + JSON.stringify(combined, null, 2) + ';\n';
  fs.writeFileSync(lobPaths.dataJsPath, jsContent);
  console.log('  ✓ ' + path.relative(ROOT, lobPaths.dataJsPath));

  // JSON snapshot for the next-run fallback
  fs.writeFileSync(lobPaths.snapshotPath, JSON.stringify(combined, null, 2));
  console.log('  ✓ ' + path.relative(ROOT, lobPaths.snapshotPath));
}

function writeCombinedDataJson(allLobOutputs) {
  // data/data.json gets the per-LOB structure, useful for the iOS app or any
  // consumer that wants both LOBs in one fetch.
  const dataDir = path.join(ROOT, 'data');
  fs.mkdirSync(dataDir, { recursive: true });
  const combined = {
    _meta: {
      builtAt: timestamp(),
      pipelineVersion: '2.0.0',
      lobs: Object.keys(allLobOutputs)
    }
  };
  Object.keys(allLobOutputs).forEach(function (lob) {
    // Use camelCase key in the combined doc to keep iOS / JS consumers happy
    const camelKey = lob.replace(/-([a-z])/g, function (_, c) { return c.toUpperCase(); });
    combined[camelKey] = allLobOutputs[lob];
  });
  const jsonPath = path.join(dataDir, 'data.json');
  fs.writeFileSync(jsonPath, JSON.stringify(combined, null, 2));
  console.log('\n✓ Wrote combined ' + path.relative(ROOT, jsonPath));
}

function buildLob(lob, projectsToRun) {
  console.log('\n───────────────────────────────────────────────────────────');
  console.log(' LOB: ' + lob);
  console.log('───────────────────────────────────────────────────────────');

  const lobPaths = pathsForLob(lob);

  // Start from the existing on-disk snapshot so a single-project build
  // doesn't wipe the other three projects' data for this LOB.
  let combined = {};
  if (fs.existsSync(lobPaths.snapshotPath)) {
    try {
      combined = JSON.parse(fs.readFileSync(lobPaths.snapshotPath, 'utf8'));
    } catch (err) {
      console.warn('  warning: could not parse existing snapshot for ' + lob + ', starting fresh');
      combined = {};
    }
  }

  // Service only ships with a subset of projects today (Revenue Forecast).
  // Skip the rest so the build doesn't fail on missing input directories.
  const filteredProjects = (lob === 'service')
    ? projectsToRun.filter(function (p) { return SERVICE_PROJECTS.has(p); })
    : projectsToRun;
  if (lob === 'service' && filteredProjects.length === 0) {
    console.log('  [service] no Service-supported projects in this build, skipping LOB.');
    return { lob, ok: true, combined: {} };
  }
  const results = filteredProjects.map(function (p) { return buildOne(p, lob); });
  const failed = results.filter(function (r) { return !r.ok; });
  if (failed.length) {
    return { lob, ok: false, failed, combined: null };
  }

  // Refresh meta. Preserve other projects' versions, replace the ones we just built.
  const priorMeta = combined._meta || {};
  const priorProjectMeta = (priorMeta.projects || []).reduce(function (acc, p) {
    acc[p.id] = p; return acc;
  }, {});
  results.forEach(function (r) {
    priorProjectMeta[r.id] = { id: r.id, version: r.version, elapsedMs: r.elapsedMs, builtAt: timestamp() };
  });
  combined._meta = {
    builtAt: timestamp(),
    pipelineVersion: '2.0.0',
    lob: lob,
    lastBuiltProjects: results.map(function (r) { return r.id; }),
    projects: Object.values(priorProjectMeta)
  };

  // Merge this run's outputs over the existing keys
  results.forEach(function (r) {
    combined[KEY_MAP[r.id]] = r.output;
  });

  return { lob, ok: true, combined };
}

function main() {
  const args = parseArgs(process.argv);
  const projects = args.project ? [args.project] : PROJECTS;
  const lobs = args.lob ? [args.lob] : LOBS;

  console.log('═══════════════════════════════════════════════════════════');
  console.log(' FEAZEL DASHBOARD BUILD · ' + timestamp());
  console.log(' LOBs: ' + lobs.join(', '));
  console.log(' Projects: ' + projects.join(', '));
  if (args.validateOnly) console.log(' Mode: VALIDATE-ONLY (no files will be written)');
  console.log('═══════════════════════════════════════════════════════════');

  const allLobOutputs = {};
  let anyFailures = false;

  lobs.forEach(function (lob) {
    const result = buildLob(lob, projects);
    if (!result.ok) {
      anyFailures = true;
      console.error('\n✗ ' + lob + ' had failures:');
      result.failed.forEach(function (f) {
        console.error('  · ' + f.id + ': ' + (f.error || (f.errors || []).join('; ')));
      });
      return;
    }
    allLobOutputs[lob] = result.combined;
  });

  if (anyFailures) process.exit(1);

  if (args.validateOnly) {
    console.log('\n✓ Validation passed across all LOBs. (Skipping write.)');
    return;
  }

  console.log('\n────────────────────────────  WRITING  ────────────────────────────');
  Object.keys(allLobOutputs).forEach(function (lob) {
    console.log('\n→ ' + lob);
    writeLobOutputs(lob, allLobOutputs[lob]);
  });
  writeCombinedDataJson(allLobOutputs);

  // Regenerate mobile HTML scaffolding so any new sub-tab in pages.js
  // automatically gets a phone-friendly page for both LOBs. Idempotent and fast.
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
module.exports = { buildOne, parseArgs, PROJECTS, LOBS };
