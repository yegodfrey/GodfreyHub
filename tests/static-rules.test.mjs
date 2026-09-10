import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import {
  clearFileListCache,
  evaluateRule,
  globToRegExp,
  loadRules,
  main,
  matchesGlobs,
  runRules,
} from "../scripts/static-rules.mjs";

function makeTempTree() {
  return fs.mkdtempSync(path.join(os.tmpdir(), "gf-static-rules-"));
}

test("glob matching supports **, * and ? without dependencies", () => {
  assert.ok(globToRegExp("apps/Quiz/entry/src/main/ets/**/*.ets")
    .test("apps/Quiz/entry/src/main/ets/pages/Index.ets"));
  assert.ok(globToRegExp("apps/*/entry/oh-package.json5").test("apps/Quiz/entry/oh-package.json5"));
  assert.ok(!globToRegExp("apps/*/entry/oh-package.json5").test("apps/Quiz/entry/build-profile.json5"));
  assert.ok(globToRegExp("Docs/?.md").test("Docs/A.md"));
  assert.ok(!globToRegExp("Docs/?.md").test("Docs/AB.md"));
  assert.ok(matchesGlobs("a/b/c.txt", ["**/*.txt"]));
});

test("check kinds evaluate on a synthetic tree", () => {
  const root = makeTempTree();
  try {
    fs.mkdirSync(path.join(root, "src"), { recursive: true });
    fs.writeFileSync(path.join(root, "src/a.ets"), "fontSize(12)\nGfButton({ id: 'x.y' })\n");
    fs.writeFileSync(path.join(root, "data.json"),
      JSON.stringify({ items: [{ id: "one", post: [{ anchor: "a" }] }] }));

    assert.deepEqual(evaluateRule({
      id: "r.forbid", checks: [{ expect: "no-match", file: "src/**/*.ets", pattern: "ForbiddenToken" }],
    }, root), []);
    const forbidFailure = evaluateRule({
      id: "r.forbid", checks: [{ expect: "no-match", file: "src/**/*.ets", pattern: "fontSize\\(" }],
    }, root);
    assert.equal(forbidFailure.length, 1);
    assert.match(forbidFailure[0].message, /matches forbidden/);

    assert.deepEqual(evaluateRule({
      id: "r.require", checks: [{ expect: "match", file: "src/**/*.ets", pattern: "GfButton" }],
    }, root), []);
    assert.equal(evaluateRule({
      id: "r.require", checks: [{ expect: "match", file: "src/**/*.ets", pattern: "never-present" }],
    }, root).length, 1);

    assert.deepEqual(evaluateRule({
      id: "r.exists", checks: [{ expect: "exists", file: "src/a.ets" }],
    }, root), []);
    assert.deepEqual(evaluateRule({
      id: "r.absent", checks: [{ expect: "absent", file: "src/missing.ets" }],
    }, root), []);

    assert.deepEqual(evaluateRule({
      id: "r.json",
      checks: [
        { expect: "json-contains", file: "data.json", path: "items", property: "id", value: "one" },
        { expect: "json-element-equals", file: "data.json", path: "items", property: "id",
          value: "one", subPath: "post", equals: [{ anchor: "a" }] },
        { expect: "json-count-gte", file: "data.json", path: "items", min: 1 },
      ],
    }, root), []);
    assert.equal(evaluateRule({
      id: "r.json",
      checks: [{ expect: "json-element-equals", file: "data.json", path: "items", property: "id",
        value: "one", subPath: "post", equals: [{ anchor: "changed" }] }],
    }, root).length, 1);

    assert.deepEqual(evaluateRule({
      id: "r.where",
      checks: [{ expect: "json-count-where-gte", file: "data.json", path: "items", min: 1,
        where: [{ property: "id", equals: "one" }] }],
    }, root), []);

    assert.deepEqual(evaluateRule({
      id: "r.count", checks: [{ expect: "match-count", file: "src/**/*.ets",
        pattern: "GfButton", min: 1, max: 1 }],
    }, root), []);
    assert.equal(evaluateRule({
      id: "r.count", checks: [{ expect: "match-count", file: "src/**/*.ets",
        pattern: "GfButton", max: 0 }],
    }, root).length, 1);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

// loadRules 的输入校验此前只被某个具体仓库的真实规则文件顺带覆盖，规则数据属于调用方，
// 引擎侧必须有自己的 hermetic 覆盖，否则换一份规则就无人验证这些分支。
test("loadRules rejects malformed rule registries", () => {
  const root = makeTempTree();
  try {
    const write = (name, value) => {
      const file = path.join(root, name);
      fs.writeFileSync(file, JSON.stringify(value));
      return file;
    };

    assert.throws(() => loadRules(write("bad-version.json", { schemaVersion: 2, rules: [] })),
      /schemaVersion must be 1/);
    assert.throws(() => loadRules(write("no-id.json", {
      schemaVersion: 1, rules: [{ title: "t", checks: [] }],
    })), /non-empty id/);
    assert.throws(() => loadRules(write("dup-id.json", {
      schemaVersion: 1,
      rules: [{ id: "a", title: "t", checks: [] }, { id: "a", title: "t2", checks: [] }],
    })), /duplicate rule id 'a'/);

    assert.deepEqual(loadRules(write("ok.json", {
      schemaVersion: 1, rules: [{ id: "a", title: "t", checks: [] }],
    })).map((rule) => rule.id), ["a"]);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test("runner scopes by app and main() maps error severity to exit code 1", () => {
  const root = makeTempTree();
  try {
    fs.mkdirSync(path.join(root, "src"), { recursive: true });
    fs.writeFileSync(path.join(root, "src/a.ets"), "GfButton({ id: 'x.y' })\n");
    const rulesPath = path.join(root, "rules.json");
    fs.writeFileSync(rulesPath, JSON.stringify({
      schemaVersion: 1,
      rules: [
        { id: "scoped.green", title: "t", severity: "error", apps: ["AppOne"],
          checks: [{ expect: "match", file: "src/**/*.ets", pattern: "GfButton" }] },
        { id: "scoped.red", title: "t", severity: "error", apps: ["AppTwo"],
          checks: [{ expect: "match", file: "src/**/*.ets", pattern: "never-present" }] },
        { id: "warn.only", title: "t", severity: "warn", apps: ["*"],
          checks: [{ expect: "match", file: "src/**/*.ets", pattern: "never-present" }] },
      ],
    }));

    clearFileListCache();
    const appOne = runRules({ repoRoot: root, rulesPath, app: "AppOne" });
    assert.deepEqual(appOne.results.map((r) => r.rule.id).sort(),
      ["scoped.green", "warn.only"], "app scoping must drop other apps' rules");
    assert.equal(appOne.errors, 0);
    assert.equal(appOne.warnings, 1, "warn severity must not count as an error");

    clearFileListCache();
    const appTwo = runRules({ repoRoot: root, rulesPath, app: "AppTwo" });
    assert.equal(appTwo.errors, 1, "a violated error rule must be counted");

    const silenced = (fn) => {
      const out = process.stdout.write, err = process.stderr.write;
      process.stdout.write = () => true;
      process.stderr.write = () => true;
      try { return fn(); } finally { process.stdout.write = out; process.stderr.write = err; }
    };

    clearFileListCache();
    assert.equal(silenced(() => main(["--repo", root, "--rules", rulesPath,
      "--app", "AppOne", "--rule", "scoped.green"])), 0);

    clearFileListCache();
    assert.equal(silenced(() => main(["--repo", root, "--rules", rulesPath,
      "--app", "AppTwo", "--rule", "scoped.red"])), 1,
      "error severity must surface as exit code 1 through main()");
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test("an empty rule selection is an error, not a silent pass", () => {
  const root = makeTempTree();
  try {
    const rulesPath = path.join(root, "rules.json");
    fs.writeFileSync(rulesPath, JSON.stringify({
      schemaVersion: 1,
      rules: [{ id: "only", title: "t", apps: ["AppOne"], checks: [] }],
    }));
    clearFileListCache();
    assert.throws(() => runRules({ repoRoot: root, rulesPath, app: "NoSuchApp" }),
      /required selection is empty/);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});
