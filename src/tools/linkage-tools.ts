import { z } from "zod";
import { defineTool, type ToolDefinition } from "./types.js";
import { resolveProject } from "./shared.js";
import { uiLocateCode, crashLocate, hubCheck } from "../core/linkage.js";

// 深度联动: UI→源码 / 崩溃→源码 / 一键修复清单(3 个工具)

const targetProp = z.string().optional().describe("设备目标(127.0.0.1:port), 省略=唯一在线设备");

export const linkageTools: ToolDefinition[] = [
  defineTool({
    name: "ui_locate_code",
    description: "UI→源码: 在设备当前界面按文本/id 定位控件(或按坐标取最深命中控件), 反查其 ArkTS 声明位置、所属 struct 及下方最近的事件处理函数(.onClick 等)。文案经字符串资源反查 $r('app.string.x')。",
    inputSchema: {
      text: z.string().optional().describe("控件文案(子串匹配)"),
      id: z.string().optional().describe("控件 id(子串匹配)"),
      x: z.number().optional().describe("X 坐标(与 y 一起, 坐标模式)"),
      y: z.number().optional().describe("Y 坐标"),
      target: targetProp,
      project: z.string().optional().describe("项目名, 省略=当前项目"),
    },
    handler: async (args) => {
      const r = resolveProject(args.project || undefined);
      if ("error" in r) throw new Error(r.error);
      return uiLocateCode({
        harmonyRoot: r.entry.harmonyRoot,
        text: args.text || undefined,
        id: args.id || undefined,
        x: args.x,
        y: args.y,
        target: args.target || undefined,
      });
    },
  }),

  defineTool({
    name: "hilog_locate_crash",
    description: "崩溃→源码: 解析 faultlog/原始堆栈中的 .ets 帧(官方格式 at fn (模块/路径.ets:行:列)), 映射到本地源码行并还原所在 struct/函数与源码语句。传 stack 直接解析文本; 省略则从设备读最近 faultlog。",
    inputSchema: {
      stack: z.string().optional().describe("原始堆栈/faultlog 文本(可整段粘贴)"),
      target: targetProp,
      project: z.string().optional().describe("项目名(用于源码映射), 省略=当前项目"),
      maxFrames: z.number().optional().describe("最多解析帧数, 默认 10"),
    },
    handler: async (args) => {
      const stack = args.stack ?? "";
      const proj = args.project;
      let harmonyRoot: string | undefined;
      // stack 直传时项目可选(无项目则只解析不映射)
      if (proj || !stack) {
        const r = resolveProject(proj || undefined);
        if ("error" in r) {
          if (!stack) throw new Error(r.error);
          // 有 stack: 继续纯解析
        } else {
          harmonyRoot = r.entry.harmonyRoot;
        }
      }
      return crashLocate({ harmonyRoot, stack: stack || undefined, target: args.target || undefined, maxFrames: args.maxFrames });
    },
  }),

  defineTool({
    name: "hub_check",
    description: "一键修复清单: 对 .ets 文件跑 DevEco 同源 LSP 诊断, 合并最近一次构建日志的编译错误(去重), 输出修复清单。文件集默认=git 变更(HEAD diff+未跟踪)。",
    inputSchema: {
      project: z.string().optional().describe("项目名, 省略=当前项目"),
      files: z.array(z.string()).optional().describe("待检查 .ets 绝对路径, 省略=git 变更文件"),
      timeoutMs: z.number().optional().describe("诊断等待超时, 默认 30000"),
    },
    handler: async (args) => {
      const r = resolveProject(args.project || undefined);
      if ("error" in r) throw new Error(r.error);
      return hubCheck({
        entry: r.entry,
        files: args.files && args.files.length > 0 ? args.files : undefined,
        timeoutMs: args.timeoutMs,
      });
    },
  }),
];
