import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

// Behavior-level regression chain for the shared HDC target helper: the
// PowerShell self-test drives the real helper with fake hdc executables
// (bounded retry convergence, exhaustion, transport-failure classifier, and
// the "[Fail] ... connected" cross-case). Keeping it inside `npm test` makes
// the helper's contract executable evidence, not prose.
test('hdc-targets helper passes its behavioral self-test', {
  skip: process.platform !== 'win32',
}, () => {
  const script = fileURLToPath(new URL('../scripts/hdc-targets-self-test.ps1', import.meta.url));
  const result = spawnSync('pwsh', ['-NoProfile', '-File', script], {
    encoding: 'utf8',
    timeout: 120_000,
  });
  const output = `${result.stdout ?? ''}\n${result.stderr ?? ''}`;
  assert.equal(result.status, 0, output);
  assert.match(output, /HDC target helper self-test: PASS/);
});
