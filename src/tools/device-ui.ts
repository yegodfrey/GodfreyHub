import { z } from "zod";
import { defineTool, type ToolDefinition } from "./types.js";
import { resolveProject } from "./shared.js";
import {
  dumpUiTree, uiClick, uiInputText, uiSwipe, uiKey, screenshot,
  startAbility, stopAbility, uninstallApp,
} from "../core/uitest.js";
import { collectAppHilog, collectFilteredHilog, collectFaultlog } from "../core/hilog.js";

// ui_* / app_control / hilog_*: 设备侧 UI 自动化与日志采集(10 个工具)。
// 破坏性操作(点击/输入/卸载)在多台设备在线时要求显式 target(错误提示列出设备)。

const targetProp = z.string().optional().describe("设备目标(127.0.0.1:port), 省略=唯一在线设备");

const levelEnum = z.enum(["D", "I", "W", "E", "F"]).optional();

export const deviceUiTools: ToolDefinition[] = [
  defineTool({
    name: "ui_tree",
    description: "获取设备当前界面 UI 树(uitest dumpLayout): 返回节点摘要(前 300 个)+保存的 JSON 文件路径。",
    inputSchema: {
      target: targetProp,
      saveTo: z.string().optional().describe("布局 JSON 保存路径, 省略=临时目录"),
    },
    handler: async (args) => dumpUiTree({ target: args.target || undefined, saveTo: args.saveTo || undefined }),
  }),

  defineTool({
    name: "ui_click",
    description: "点击设备屏幕指定坐标。",
    inputSchema: { x: z.number(), y: z.number(), target: targetProp },
    handler: async (args) => ({ result: await uiClick(args.x, args.y, args.target || undefined) }),
  }),

  defineTool({
    name: "ui_input_text",
    description: "在指定坐标输入文本(uitest inputText)。",
    inputSchema: { x: z.number(), y: z.number(), text: z.string(), target: targetProp },
    handler: async (args) => ({ result: await uiInputText(args.x, args.y, args.text, args.target || undefined) }),
  }),

  defineTool({
    name: "ui_swipe",
    description: "从 (x1,y1) 滑动到 (x2,y2)。",
    inputSchema: {
      x1: z.number(), y1: z.number(), x2: z.number(), y2: z.number(),
      speed: z.number().optional().describe("滑动速度, 默认 1000"),
      target: targetProp,
    },
    handler: async (args) => ({ result: await uiSwipe(args.x1, args.y1, args.x2, args.y2, args.speed ?? 1000, args.target || undefined) }),
  }),

  defineTool({
    name: "ui_key",
    description: "模拟按键(如 2=返回, 156=Home? 以 HarmonyOS 键码为准)。",
    inputSchema: { keyCode: z.number(), target: targetProp },
    handler: async (args) => ({ result: await uiKey(args.keyCode, args.target || undefined) }),
  }),

  defineTool({
    name: "ui_screenshot",
    description: "设备截屏并保存到本地。",
    inputSchema: {
      savePath: z.string().describe("保存路径(jpeg)"),
      target: targetProp,
    },
    handler: async (args) => ({ file: await screenshot(args.savePath, args.target || undefined) }),
  }),

  defineTool({
    name: "app_control",
    description: "应用控制: start=启动 Ability / stop=强停 / uninstall=卸载(keepData 保留数据)。bundle 省略=当前项目。",
    inputSchema: {
      action: z.enum(["start", "stop", "uninstall"]),
      bundle: z.string().optional().describe("包名, 省略=当前项目"),
      ability: z.string().optional().describe("start 时的 Ability, 省略=项目默认"),
      keepData: z.boolean().optional().describe("uninstall 时保留数据, 默认 false"),
      target: targetProp,
    },
    handler: async (args) => {
      let bundle = args.bundle ?? "";
      let ability = args.ability ?? "";
      if (!bundle) {
        const r = resolveProject();
        if ("error" in r) throw new Error(r.error);
        bundle = r.entry.bundle;
        ability = ability || r.entry.ability;
      }
      if (args.action === "start") {
        if (!ability) throw new Error("缺少 ability(或当前项目未解析到默认 ability)");
        return { result: await startAbility(bundle, ability, args.target || undefined) };
      }
      if (args.action === "stop") return { result: await stopAbility(bundle, args.target || undefined) };
      return uninstallApp(bundle, args.target || undefined, args.keepData ?? false);
    },
  }),

  defineTool({
    name: "hilog_app",
    description: "按 PID 隔离抓取应用 HiLog(project/bundleName 定位; restart=true 先清日志重启再抓)。App 未运行明确报错, 不退化成全设备日志。",
    inputSchema: {
      project: z.string().optional().describe("项目名, 省略=当前项目"),
      bundleName: z.string().optional().describe("包名, 优先于 project"),
      ability: z.string().optional().describe("restart 时的 Ability"),
      target: targetProp,
      restart: z.boolean().optional().describe("先清日志并重启 App"),
      clearBeforeRestart: z.boolean().optional(),
      waitMs: z.number().optional().describe("重启后等待, 默认 2000"),
      lines: z.number().optional().describe("默认 200"),
      level: levelEnum,
      tag: z.string().optional(),
      domain: z.string().optional().describe("如 0xD002800"),
      keyword: z.string().optional().describe("正则(最长 200 字符)/子串"),
      save: z.boolean().optional().describe("保存临时文件, 默认 true"),
    },
    handler: async (args) => {
      let bundleName = args.bundleName ?? "";
      let ability = args.ability ?? "";
      const project = args.project;
      if (!bundleName || project) {
        const resolved = resolveProject(project || undefined);
        if ("error" in resolved) throw new Error(resolved.error);
        bundleName = bundleName || resolved.entry.bundle;
        ability = ability || resolved.entry.ability;
      }
      return collectAppHilog({
        bundleName,
        ability: ability || undefined,
        target: args.target || undefined,
        restart: args.restart,
        clearBeforeRestart: args.clearBeforeRestart,
        waitMs: args.waitMs,
        lines: args.lines,
        level: args.level || undefined,
        tag: args.tag || undefined,
        domain: args.domain || undefined,
        keyword: args.keyword || undefined,
        save: args.save,
      });
    },
  }),

  defineTool({
    name: "hilog_query",
    description: "查询测试进程等短生命周期来源留下的设备 HiLog，不依赖存活 PID。tag/domain/keyword 必须至少提供一项，禁止无过滤返回整机日志。",
    inputSchema: {
      target: targetProp,
      lines: z.number().optional().describe("最多返回 1-10000 行，默认 200"),
      level: levelEnum,
      tag: z.string().optional().describe("HiLog 标签"),
      domain: z.string().optional().describe("如 0xD002800"),
      keyword: z.string().optional().describe("正则(最长 200 字符)或子串过滤"),
      save: z.boolean().optional().describe("是否保存到系统临时目录，默认 true"),
    },
    handler: async (args) => {
      if (!args.tag && !args.domain && !args.keyword) {
        throw new Error("tag、domain、keyword 必须至少提供一项，禁止无过滤采集整机日志");
      }
      return collectFilteredHilog({
        target: args.target || undefined,
        lines: args.lines,
        level: args.level || undefined,
        tag: args.tag || undefined,
        domain: args.domain || undefined,
        keyword: args.keyword || undefined,
        save: args.save,
      });
    },
  }),

  defineTool({
    name: "hilog_fault",
    description: "读取设备 faultlog(崩溃日志, 最近 3 个文件前 100 行; 可按 bundle/进程名过滤)。",
    inputSchema: { target: targetProp, bundleName: z.string().optional() },
    handler: async (args) => collectFaultlog({ target: args.target || undefined, bundleName: args.bundleName }),
    markdown: true,
  }),
];
