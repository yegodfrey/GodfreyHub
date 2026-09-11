import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

export const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
export const logger = new Proxy({}, { get: () => () => {} });

// Execute production source while replacing only explicit operating-system ports.
// This complements ArkTS compilation and device tests; it is not an ArkTS checker.
//
// The loader is repo-agnostic: createSourceModule pins the base root, so family
// suites stored in a sibling checkout (GFSoftware) can run production sources
// from their own repo through this single implementation.
export function createSourceModule(baseRoot) {
  return function sourceModule(relative, dependencies = {}, globals = {}) {
    const filename = path.join(baseRoot, relative);
    const source = fs.readFileSync(filename, 'utf8');
    const { outputText } = ts.transpileModule(source, { compilerOptions: {
      target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS,
      experimentalDecorators: true,
    } });
    const exports = {};
    const require = (id) => {
      if (Object.hasOwn(dependencies, id)) return dependencies[id];
      throw new Error(`Unspecified host port ${id} in ${relative}`);
    };
    vm.runInNewContext(outputText, { exports, require, Uint8Array, ArrayBuffer, Map, Set,
      Promise, Error, setTimeout, clearTimeout, ...globals }, { filename });
    return exports;
  };
}

export const sourceModule = createSourceModule(repoRoot);
