import { loadConfig, getProject, type ProjectEntry } from "../core/registry.js";

// 工具层共享上下文: 项目解析与目标提示。集中一处, 供各域工具模块复用。

/** 解析当前/指定项目; 未注册时给出可操作的错误提示。 */
export function resolveProject(name?: string): { entry: ProjectEntry } | { error: string } {
  const cfg = loadConfig();
  const entry = getProject(cfg, name ?? undefined);
  if (!entry) {
    const names = Object.keys(cfg.projects).join(", ") || "(无, 先 hub_scan)";
    return { error: "未指定或未注册项目。在册: " + names };
  }
  return { entry };
}

/** 当前项目的 harmonyRoot(未设置当前项目时为 undefined)。 */
export function curHarmonyRoot(): string | undefined {
  const cfg = loadConfig();
  return cfg.projects[cfg.lastProject ?? ""]?.harmonyRoot;
}

/** 静态检查与语义导航工具的工程根提示: 显式参数 > 当前项目的 harmonyRoot。 */
export function projectRootHint(explicit?: string): string | undefined {
  if (explicit) return explicit;
  return curHarmonyRoot();
}
