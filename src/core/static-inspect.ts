import fs from "node:fs";
import path from "node:path";

// IDE 级静态检查的两个盲区补齐(不走 ace-server, 纯文件分析):
//   1) 资源引用模块严格视图: $r('app.<group>.<name>') 必须能被引用方所属模块或 AppScope 解析,
//      跨模块引用(entry 资源被 common 引用)按 IDE 同款规则报错。
//   2) 原生声明符号校验: cpp/types/**/*.d.ts 里 declare 的函数必须能在 lib<name>.so 符表中找到,
//      缺 so 或缺符号都报(运行时会 napi 调用失败)。

export interface StaticFinding {
  file: string;
  line: number;
  severity: 1 | 2;
  message: string;
}

interface ModuleInfo {
  root: string;
  /** resource group -> name set (string/color/integer/float/bool/media/rawfile...) */
  resources: Map<string, Set<string>>;
}

const SKIP_DIRS = new Set(["node_modules", "oh_modules", ".hvigor", "build", ".git", ".preview", ".idea"]);
const ELEMENT_TYPES = new Set(["string", "color", "integer", "float", "bool", "int_array", "long_array", "number_array", "string_array", "plural"]);

function walkFiles(dir: string, exts: string[], out: string[], depth = 8): void {
  if (depth < 0) return;
  let entries: fs.Dirent[] = [];
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (!SKIP_DIRS.has(e.name)) walkFiles(p, exts, out, depth - 1); continue; }
    if (exts.some((x) => e.name.endsWith(x))) out.push(p);
  }
}

function readJson5Loose(file: string): any | null {
  // 依赖中不做 JSON5 完整解析: 先按严格 JSON 试, 失败则剥 //注释再试(覆盖绝大多数配置文件)
  try {
    const raw = fs.readFileSync(file, "utf8");
    try { return JSON.parse(raw); } catch {
      const noComment = raw.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");
      return JSON.parse(noComment);
    }
  } catch { return null; }
}

/** 从 build-profile.json5 取全部模块 srcPath(相对工程根解析)。 */
export function moduleSourcePaths(projectRoot: string): string[] {
  const bp = path.join(projectRoot, "build-profile.json5");
  if (!fs.existsSync(bp)) return [];
  const raw = fs.readFileSync(bp, "utf8");
  const out: string[] = [];
  for (const m of raw.matchAll(/"srcPath"\s*:\s*"([^"]+)"/g)) {
    const abs = path.resolve(projectRoot, m[1]);
    if (fs.existsSync(abs)) out.push(abs);
  }
  return out;
}

function collectModuleResources(moduleRoot: string): Map<string, Set<string>> {
  const res = new Map<string, Set<string>>();
  const resDir = path.join(moduleRoot, "src", "main", "resources");
  const dirs: string[] = [];
  if (fs.existsSync(resDir)) {
    for (const qualifier of fs.readdirSync(resDir, { withFileTypes: true })) {
      if (!qualifier.isDirectory()) continue;
      const elementDir = path.join(resDir, qualifier.name, "element");
      if (fs.existsSync(elementDir)) dirs.push(elementDir);
      const mediaDir = path.join(resDir, qualifier.name, "media");
      if (fs.existsSync(mediaDir)) dirs.push(mediaDir);
    }
  }
  const rawDir = path.join(moduleRoot, "src", "main", "resources", "rawfile");
  if (fs.existsSync(rawDir)) dirs.push(rawDir);
  for (const d of dirs) {
    const group = path.basename(path.dirname(d)) === "element" && path.basename(d) === "element"
      ? null
      : path.basename(d);
    let entries: fs.Dirent[] = [];
    try { entries = fs.readdirSync(d, { withFileTypes: true }); } catch { continue; }
    for (const e of entries) {
      if (e.isDirectory()) continue;
      if (path.basename(d) === "element" && (e.name.endsWith(".json") || e.name.endsWith(".json5"))) {
        const j = readJson5Loose(path.join(d, e.name));
        if (j && typeof j === "object") {
          for (const [type, arr] of Object.entries(j)) {
            if (!ELEMENT_TYPES.has(type) || !Array.isArray(arr)) continue;
            if (!res.has(type)) res.set(type, new Set());
            for (const item of arr as any[]) {
              if (item && typeof item.name === "string") res.get(type)!.add(item.name);
            }
          }
          continue;
        }
      }
      // media/rawfile: 文件名(去扩展名)即资源名
      const g = group ?? "media";
      if (!res.has(g)) res.set(g, new Set());
      res.get(g)!.add(e.name.replace(/\.[^.]+$/, ""));
    }
  }
  return res;
}

function findModuleRoots(projectRoot: string): string[] {
  const roots: string[] = [];
  for (const src of moduleSourcePaths(projectRoot)) {
    if (fs.existsSync(path.join(src, "src", "main", "module.json5"))) roots.push(path.resolve(src));
  }
  return roots;
}

function nearestModuleRoot(file: string, moduleRoots: string[]): string | null {
  const abs = path.resolve(file);
  let best: string | null = null;
  for (const r of moduleRoots) {
    if ((abs + path.sep).startsWith(r + path.sep)) {
      if (!best || r.length > best.length) best = r;
    }
  }
  return best;
}

const REF_RE = /\$r\(\s*['"]app\.([a-zA-Z_]+)\.([A-Za-z0-9_$]+)['"]\s*\)/g;

/** 资源引用模块严格视图检查: 返回 IDE 同款"Unknown resource name"类问题。 */
export function checkResourceRefs(files: string[], projectRoot: string): StaticFinding[] {
  const moduleRoots = findModuleRoots(projectRoot);
  const appScope = path.join(projectRoot, "AppScope");
  const scopeRes = collectModuleResources(appScope);
  const moduleRes = new Map<string, Map<string, Set<string>>>();
  for (const r of moduleRoots) moduleRes.set(r, collectModuleResources(r));
  const findings: StaticFinding[] = [];
  for (const file of files) {
    let text: string;
    try { text = fs.readFileSync(file, "utf8"); } catch { continue; }
    const owner = nearestModuleRoot(file, moduleRoots);
    const ownerRes = owner ? (moduleRes.get(owner) ?? new Map()) : new Map();
    const lines = text.split("\n");
    for (let i = 0; i < lines.length; i++) {
      REF_RE.lastIndex = 0;
      let m: RegExpExecArray | null;
      while ((m = REF_RE.exec(lines[i]))) {
        const [, group, name] = m;
        const inOwner = ownerRes.get(group)?.has(name);
        const inScope = scopeRes.get(group)?.has(name);
        if (inOwner || inScope) continue;
        findings.push({
          file,
          line: i + 1,
          severity: 1,
          message: `Unknown resource name '${name}' (app.${group}.${name} 不在所属模块或 AppScope 资源中; 跨模块引用按 IDE 严格视图报错)`,
        });
      }
    }
  }
  return findings;
}

export interface NativeDeclFinding extends StaticFinding {
  function: string;
}

/** 原生声明符号校验: cpp/types 下 d.ts 的 declare function 必须能在配套 .so 中找到。 */
export function checkNativeDecls(projectRoot: string): NativeDeclFinding[] {
  const findings: NativeDeclFinding[] = [];
  const dtsFiles: string[] = [];
  walkFiles(projectRoot, [".d.ts"], dtsFiles);
  const nativeDts = dtsFiles.filter((f) => f.includes(`${path.sep}cpp${path.sep}types${path.sep}`) || f.includes(`${path.sep}cpp${path.sep}lib`));
  if (nativeDts.length === 0) return findings;
  // 收集工程内全部 so(build 产物 + 源码 libs 目录)
  const sos: string[] = [];
  walkFiles(projectRoot, [".so"], sos);
  const soBufs = sos.map((f) => ({ f, buf: fs.readFileSync(f) }));
  const FUNC = /export\s+declare\s+function\s+([A-Za-z0-9_$]+)\s*\(/g;
  for (const dts of nativeDts) {
    let text: string;
    try { text = fs.readFileSync(dts, "utf8"); } catch { continue; }
    FUNC.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = FUNC.exec(text))) {
      const fn = m[1];
      const line = text.slice(0, m.index).split("\n").length;
      const found = soBufs.some(({ buf }) => buf.includes(Buffer.from(fn)));
      if (!found) {
        findings.push({
          file: dts, line, severity: 1, function: fn,
          message: `Declared function '${fn}' has no native implementation in external so(已扫描 ${sos.length} 个 so; 若 so 尚未就位请先构建)`,
        });
      }
    }
  }
  return findings;
}
