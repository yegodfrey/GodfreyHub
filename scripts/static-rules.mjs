#!/usr/bin/env node
// static-rules - declarative family source-rule runner (node:test friendly).
//
// Rules live in family/static-rules.json (schema: family/static-rules.schema.json).
// Every rule is data: id, title, severity, apps scope and a list of checks. The
// engine evaluates checks against repository files and reports one failure per
// violated check, so a red run points directly at the violated assertion.
//
// Supported check kinds (check.expect):
//   match           - every file matched by check.file must contain `pattern`
//   no-match        - no file matched by check.file may contain `pattern`
//   exists          - at least one file matches check.file
//   absent          - no file matches check.file
//   json-contains   - JSON at check.file, resolved by check.path, contains an
//                     element whose check.property equals check.value
//   json-count-gte  - JSON array resolved by check.path has >= check.min elements
//   json-count-lte  - JSON array resolved by check.path has <= check.max elements
//
// CLI:
//   node static-rules.mjs --repo <repoRoot> [--rules <path>] [--app <Name>]
//        [--rule <id>] [--json] [--list]
//
// Exit codes: 0 = clean (warnings allowed), 1 = at least one error-severity rule
// failed, 2 = usage/infrastructure error.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DEFAULT_RULES_PATH = "family/static-rules.json";
const IGNORED_DIR_NAMES = new Set([
  ".git", "node_modules", "oh_modules", "build", ".hvigor", ".cxx", ".idea",
  "Workspace", ".test", "dist", "hdk", "outputs", ".trash",
]);

export function globToRegExp(pattern) {
  if (!pattern || typeof pattern !== "string") {
    throw new Error(`static-rules: invalid glob pattern: ${JSON.stringify(pattern)}`);
  }
  let re = "";
  for (let i = 0; i < pattern.length; i++) {
    const ch = pattern[i];
    if (ch === "*") {
      if (pattern[i + 1] === "*") {
        if (pattern[i + 2] === "/" && pattern[i + 3] === "*") {
          // '**/*' suffix: any depth including none, then the trailing wildcard
          re += "(?:.+/)?[^/]*";
          i += 3;
          continue;
        }
        if (pattern[i + 2] === "/") {
          re += "(?:.*/)?";
          i += 2;
          continue;
        }
        re += ".*";
        i++;
        continue;
      }
      re += "[^/]*";
      continue;
    }
    if (ch === "?") { re += "[^/]"; continue; }
    re += ch.replace(/[.+^${}()|[\]\\]/g, "\\$&");
  }
  return new RegExp(`^${re}$`);
}

export function matchesGlobs(relativePath, patterns) {
  const normalized = relativePath.replace(/\\/g, "/");
  return patterns.some((pattern) => globToRegExp(pattern).test(normalized));
}

// Walking the monorepo is expensive; cache the full file listing per resolved
// root so a run with many globs performs exactly one traversal. The mutation
// harness clears this cache after editing its temp tree.
const fileListCache = new Map();

export function clearFileListCache() {
  fileListCache.clear();
}

function listAllFiles(root, relativeBase) {
  const resolved = path.resolve(root);
  const cacheKey = `${resolved}|${path.resolve(relativeBase)}`;
  const cached = fileListCache.get(cacheKey);
  if (cached) return cached;
  const results = [];
  const stack = [resolved];
  while (stack.length > 0) {
    const current = stack.pop();
    let entries;
    try {
      entries = fs.readdirSync(current, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        if (IGNORED_DIR_NAMES.has(entry.name)) continue;
        stack.push(full);
        continue;
      }
      if (!entry.isFile()) continue;
      results.push(full);
    }
  }
  fileListCache.set(cacheKey, results);
  return results;
}

export function listFiles(repoRoot, include, exclude = []) {
  const base = path.resolve(repoRoot);
  // Most rules target explicit app directories. Walking only the top-level
  // prefixes named by the include globs (plus the whole tree when a glob is
  // rooted at a wildcard) keeps one rule evaluation in the milliseconds range
  // instead of scanning the entire monorepo for every check.
  const prefixes = new Set();
  let sawWildcardRoot = false;
  for (const pattern of include) {
    const normalized = pattern.replace(/\\/g, "/");
    if (normalized.startsWith("*")) { sawWildcardRoot = true; break; }
    const top = normalized.split("/")[0];
    if (top.includes("*") || top.includes("?")) { sawWildcardRoot = true; break; }
    prefixes.add(top);
  }
  const scanRoots = sawWildcardRoot || prefixes.size === 0
    ? [base]
    : [...prefixes].map((top) => path.join(base, top)).filter((p) => fs.existsSync(p));
  const directFiles = scanRoots.filter((p) => fs.statSync(p).isFile());
  const dirRoots = scanRoots.filter((p) => !directFiles.includes(p));
  const results = [];
  for (const full of directFiles) {
    const relative = path.relative(base, full).replace(/\\/g, "/");
    if (matchesGlobs(relative, include) && !matchesGlobs(relative, exclude)) {
      results.push(full);
    }
  }
  for (const scanRoot of dirRoots) {
    for (const full of listAllFiles(scanRoot, base)) {
      const relative = path.relative(base, full).replace(/\\/g, "/");
      if (matchesGlobs(relative, include) && !matchesGlobs(relative, exclude)) {
        results.push(full);
      }
    }
  }
  return results.sort();
}

function readText(file) {
  return fs.readFileSync(file, "utf8");
}

function resolveJsonPath(document, jsonPath) {
  if (String(jsonPath) === "$") return document;
  let current = document;
  for (const segment of String(jsonPath).split(".")) {
    if (current === null || current === undefined) return undefined;
    current = current[segment];
  }
  return current;
}

function deepEquals(actual, expected) {
  if (actual === expected) return true;
  return canonicalize(actual) === canonicalize(expected);
}

function canonicalize(value) {
  if (Array.isArray(value)) return `[${value.map(canonicalize).join(",")}]`;
  if (value !== null && typeof value === "object") {
    return `{${Object.keys(value).sort().map((key) =>
      `${JSON.stringify(key)}:${canonicalize(value[key])}`).join(",")}}`;
  }
  if (typeof value === "number" && Number.isInteger(value)) return String(value);
  return JSON.stringify(value);
}

function scalarEquals(actual, expected) {
  if (actual === expected) return true;
  // JSON round-trips through strings in some editors; compare loosely for scalars.
  if (expected === "true") return actual === true;
  if (expected === "false") return actual === false;
  if (typeof actual === "number" && typeof expected === "string" && expected !== "") {
    return actual === Number(expected);
  }
  return false;
}

function evaluateCheck(check, repoRoot, ruleId) {
  const expect = check.expect;
  const failures = [];
  const describe = (message) => ({ ruleId, check, message });

  if (expect === "match" || expect === "no-match" || expect === "match-count") {
    let regex;
    try {
      regex = new RegExp(check.pattern, check.flags ?? "");
    } catch (error) {
      return [describe(`invalid pattern: ${error.message}`)];
    }
    const files = listFiles(repoRoot, [check.file], check.exclude ?? []);
    if (files.length === 0) {
      return [describe(`no file matched '${check.file}'`)];
    }
    if (expect === "match-count") {
      const total = files.reduce((sum, file) => {
        return sum + (readText(file).match(new RegExp(check.pattern, check.flags ?? "g")) ?? []).length;
      }, 0);
      if (check.min !== undefined && total < check.min) {
        return [describe(`pattern /${check.pattern}/ matched ${total} time(s), expected >= ${check.min}`)];
      }
      if (check.max !== undefined && total > check.max) {
        return [describe(`pattern /${check.pattern}/ matched ${total} time(s), expected <= ${check.max}`)];
      }
      return [];
    }
    for (const file of files) {
      const relative = path.relative(repoRoot, file).replace(/\\/g, "/");
      const hit = regex.test(readText(file));
      if (expect === "match" && !hit) {
        failures.push(describe(`${relative} does not match /${check.pattern}/`));
      }
      if (expect === "no-match" && hit) {
        failures.push(describe(`${relative} matches forbidden /${check.pattern}/`));
      }
    }
    return failures;
  }

  if (expect === "exists" || expect === "absent") {
    const files = listFiles(repoRoot, [check.file], check.exclude ?? []);
    if (expect === "exists" && files.length === 0) {
      return [describe(`no file matched '${check.file}'`)];
    }
    if (expect === "absent" && files.length > 0) {
      const names = files.map((f) => path.relative(repoRoot, f).replace(/\\/g, "/"));
      return [describe(`forbidden file(s) present: ${names.join(", ")}`)];
    }
    return failures;
  }

  if (expect === "json-contains" || expect === "json-count-gte" || expect === "json-count-lte" ||
    expect === "json-count-where-gte" || expect === "json-element-equals") {
    const files = listFiles(repoRoot, [check.file], check.exclude ?? []);
    if (files.length === 0) {
      return [describe(`no file matched '${check.file}'`)];
    }
    for (const file of files) {
      const relative = path.relative(repoRoot, file).replace(/\\/g, "/");
      let document;
      try {
        document = JSON.parse(readText(file));
      } catch (error) {
        failures.push(describe(`${relative} is not valid JSON: ${error.message}`));
        continue;
      }
      const resolved = resolveJsonPath(document, check.path);
      if (expect === "json-contains") {
        if (!Array.isArray(resolved)) {
          failures.push(describe(`${relative}: '${check.path}' is not an array`));
          continue;
        }
        const found = resolved.some((element) => {
          if (element === null || typeof element !== "object") return false;
          if (!(check.property in element)) return false;
          return scalarEquals(element[check.property], check.value);
        });
        if (!found) {
          failures.push(describe(
            `${relative}: '${check.path}' has no element with ${check.property}=${JSON.stringify(check.value)}`));
        }
      } else if (expect === "json-element-equals") {
        if (!Array.isArray(resolved)) {
          failures.push(describe(`${relative}: '${check.path}' is not an array`));
          continue;
        }
        const element = resolved.find((item) => {
          if (item === null || typeof item !== "object") return false;
          return scalarEquals(item[check.property], check.value);
        });
        if (element === undefined) {
          failures.push(describe(
            `${relative}: '${check.path}' has no element with ${check.property}=${JSON.stringify(check.value)}`));
          continue;
        }
        let actual = element;
        if (check.subPath) {
          for (const segment of String(check.subPath).split(".")) {
            actual = actual?.[segment];
          }
        }
        if (!deepEquals(actual, check.equals)) {
          failures.push(describe(
            `${relative}: '${check.path}[${check.property}=${JSON.stringify(check.value)}]${check.subPath ? "." + check.subPath : ""}' is ${JSON.stringify(actual)}, expected ${JSON.stringify(check.equals)}`));
        }
      } else if (expect === "json-count-where-gte") {
        if (!Array.isArray(resolved)) {
          failures.push(describe(`${relative}: '${check.path}' is not an array`));
          continue;
        }
        const matched = resolved.filter((element) => {
          if (element === null || typeof element !== "object") return false;
          for (const condition of check.where ?? []) {
            if (!(condition.property in element)) return false;
            const actual = element[condition.property];
            if (condition.notEmpty) {
              if (typeof actual !== "string" || actual.length === 0) return false;
            }
            if (condition.equals !== undefined && !scalarEquals(actual, condition.equals)) return false;
          }
          return true;
        });
        if (matched.length < (check.min ?? 1)) {
          failures.push(describe(
            `${relative}: '${check.path}' has ${matched.length} element(s) matching where-conditions, expected >= ${check.min}`));
        }
      } else {
        if (!Array.isArray(resolved)) {
          failures.push(describe(`${relative}: '${check.path}' is not an array`));
          continue;
        }
        if (expect === "json-count-gte" && resolved.length < (check.min ?? 1)) {
          failures.push(describe(
            `${relative}: '${check.path}' has ${resolved.length} elements, expected >= ${check.min}`));
        }
        if (expect === "json-count-lte" && resolved.length > (check.max ?? 0)) {
          failures.push(describe(
            `${relative}: '${check.path}' has ${resolved.length} elements, expected <= ${check.max}`));
        }
      }
    }
    return failures;
  }

  return [describe(`unknown expect kind '${expect}'`)];
}

// Collect every repository file referenced by a rule's checks (used by the
// mutation harness to build an isolated temp copy of the rule's world).
export function ruleFiles(rule, repoRoot) {
  const files = new Set();
  for (const check of rule.checks ?? []) {
    if (typeof check.file !== "string") continue;
    for (const file of listFiles(repoRoot, [check.file], check.exclude ?? [])) {
      files.add(path.resolve(file));
    }
  }
  return [...files].sort();
}

export function evaluateRule(rule, repoRoot) {
  const failures = [];
  for (const check of rule.checks ?? []) {
    failures.push(...evaluateCheck(check, repoRoot, rule.id));
  }
  return failures;
}

export function loadRules(rulesPath) {
  const raw = fs.readFileSync(rulesPath, "utf8");
  const parsed = JSON.parse(raw);
  if (parsed.schemaVersion !== 1) {
    throw new Error(`static-rules: schemaVersion must be 1, found ${parsed.schemaVersion}`);
  }
  const rules = [];
  const seen = new Set();
  for (const rule of parsed.rules ?? []) {
    if (typeof rule.id !== "string" || rule.id === "") {
      throw new Error("static-rules: every rule needs a non-empty id");
    }
    if (seen.has(rule.id)) {
      throw new Error(`static-rules: duplicate rule id '${rule.id}'`);
    }
    seen.add(rule.id);
    rules.push(rule);
  }
  return rules;
}

export function selectRules(rules, { app, ruleId } = {}) {
  return rules.filter((rule) => {
    if (ruleId && rule.id !== ruleId) return false;
    if (!app) return true;
    const apps = rule.apps ?? ["*"];
    return apps.includes("*") || apps.includes(app);
  });
}

export function runRules({ repoRoot, rulesPath, app, ruleId }) {
  const rules = selectRules(loadRules(rulesPath), { app, ruleId });
  if (rules.length === 0) {
    throw new Error(`static-rules: required selection is empty (app=${app ?? '*'}, rule=${ruleId ?? '*'})`);
  }
  const results = [];
  let errors = 0;
  let warnings = 0;
  for (const rule of rules) {
    const failures = evaluateRule(rule, repoRoot);
    const severity = rule.severity === "warn" ? "warn" : "error";
    if (failures.length > 0) {
      if (severity === "error") errors++;
      else warnings++;
    }
    results.push({ rule, failures, severity });
  }
  return { results, errors, warnings };
}

function parseArgs(argv) {
  const args = { repo: process.cwd(), rules: null, app: null, rule: null, json: false, list: false };
  for (let i = 0; i < argv.length; i++) {
    const value = argv[i + 1];
    switch (argv[i]) {
      case "--repo": args.repo = value; i++; break;
      case "--rules": args.rules = value; i++; break;
      case "--app": args.app = value; i++; break;
      case "--rule": args.rule = value; i++; break;
      case "--json": args.json = true; break;
      case "--list": args.list = true; break;
      default: throw new Error(`static-rules: unknown argument '${argv[i]}'`);
    }
  }
  if (!args.rules) args.rules = path.join(args.repo, DEFAULT_RULES_PATH);
  return args;
}

export function main(argv) {
  let args;
  try {
    args = parseArgs(argv);
  } catch (error) {
    process.stderr.write(`${error.message}\n`);
    return 2;
  }
  let outcome;
  try {
    outcome = runRules({ repoRoot: args.repo, rulesPath: args.rules, app: args.app, ruleId: args.rule });
  } catch (error) {
    process.stderr.write(`static-rules: ${error.message}\n`);
    return 2;
  }
  if (args.list) {
    for (const { rule } of outcome.results) {
      process.stdout.write(`${rule.id}\t${rule.title ?? ""}\n`);
    }
    return 0;
  }
  if (args.json) {
    process.stdout.write(`${JSON.stringify({
      app: args.app,
      errors: outcome.errors,
      warnings: outcome.warnings,
      results: outcome.results.map(({ rule, failures, severity }) => ({
        id: rule.id, severity, failures,
      })),
    }, null, 2)}\n`);
  } else {
    for (const { rule, failures, severity } of outcome.results) {
      if (failures.length === 0) {
        process.stdout.write(`  PASS  ${rule.id}\n`);
        continue;
      }
      process.stdout.write(`  ${severity === "error" ? "FAIL" : "WARN "}  ${rule.id} - ${rule.title ?? ""}\n`);
      for (const failure of failures) {
        process.stdout.write(`        ${failure.message}\n`);
      }
    }
    process.stdout.write(
      `static-rules: ${outcome.results.length} rules, ${outcome.errors} failed, ${outcome.warnings} warned\n`);
  }
  return outcome.errors > 0 ? 1 : 0;
}

const invokedDirectly = process.argv[1] !== undefined &&
  path.resolve(fileURLToPath(import.meta.url)) === path.resolve(process.argv[1]);
if (invokedDirectly && process.argv.length > 2) {
  process.exit(main(process.argv.slice(2)));
}
