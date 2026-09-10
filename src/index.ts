#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  ListToolsRequestSchema,
  CallToolRequestSchema,
  type Tool,
} from "@modelcontextprotocol/sdk/types.js";
import { toolchain } from "./core/paths.js";
import {
  loadConfig, saveConfig, scanRoot, getProject, allBundlesExcept, configFilePath,
  type ProjectEntry,
} from "./core/registry.js";
import { gitPull, gitPush } from "./core/git.js";
import {
  listInstanceDetails, onlineDevicesClassified, startInstance, stopInstance,
  listImages, createInstance, deleteInstance,
  enableUiTest,
} from "./core/emulator.js";
import { buildAndDeploy, resolveTestTarget, type BuildOpts } from "./core/hvigor.js";
import { runHarmonyTests, type HarmonyTestMode } from "./core/test-runner.js";
import {
  lspHover, lspDefinition, lspReferences, lspSignatureHelp,
  lspDocumentSymbols, lspDiagnosticsMany, cppDiagnostics,
  workspaceSymbolsOffline, disposeArktsSessions, type LspPos,
} from "./core/lsp.js";
import {
  dumpUiTree, uiClick, uiInputText, uiSwipe, uiKey, screenshot,
  startAbility, stopAbility, uninstallApp,
} from "./core/uitest.js";
import { collectAppHilog, collectFilteredHilog, collectFaultlog } from "./core/hilog.js";
import { searchDocuments, getDocument, hdkStatus, closeHdk } from "./core/hdk.js";
import { verifyUi, recordLog, saveScreenshots, verifyEnv } from "./core/verify.js";
import { uiLocateCode, crashLocate, hubCheck } from "./core/linkage.js";

// GodfreyHub — 自包含 HarmonyOS 超级 MCP(全原生, 零子服务代理)
//   hub_*  项目/git 一键同步/构建+同名实例部署   emu_* 模拟器生命周期+窗口命名
//   dev_*  ArkTS/C++ 静态检查(DevEco 语言服务无头)  lsp_* 语义导航(hover/定义/引用/符号)
//   ui_*   设备 UI 自动化(hdc uitest)             hilog_* 日志/崩溃采集
//   hdk_*  离线文档库 FTS5 检索(直查本地索引)      verify_* 视觉模型 UI 自动化校验
//   深度联动: ui_locate_code(UI→源码) hilog_locate_crash(崩溃→源码) hub_check(诊断+构建错误合并)

const server = new Server(
  { name: "godfreyhub-mcp", version: "0.4.0" },
  { capabilities: { tools: {} } },
);

// 并发模型: 多个 MCP 会话(多 agent)共享同一 stdio 进程, 工具 handler 可并发执行。
// 因此本项目上下文不得用可变模块级单例(并发请求互相污染), 一律从 config.lastProject
// 解析默认项目; hub_set_project 是唯一显式写入口(低频, 持久化到 config)。
function resolveProject(name?: string): { entry: ProjectEntry } | { error: string } {
  const cfg = loadConfig();
  const entry = getProject(cfg, name ?? undefined);
  if (!entry) {
    const names = Object.keys(cfg.projects).join(", ") || "(无, 先 hub_scan)";
    return { error: "未指定或未注册项目。在册: " + names };
  }
  return { entry };
}

function curHarmonyRoot(): string | undefined {
  const cfg = loadConfig();
  return cfg.projects[cfg.lastProject ?? ""]?.harmonyRoot;
}

function str(v: unknown): string { return typeof v === "string" ? v : ""; }
function num(v: unknown): number | undefined { return typeof v === "number" ? v : undefined; }
function bool(v: unknown): boolean | undefined { return typeof v === "boolean" ? v : undefined; }
function strings(v: unknown): string[] | undefined {
  if (!Array.isArray(v)) return undefined;
  return v.map(str).map((value) => value.trim()).filter(Boolean);
}
function pos(args: Record<string, unknown>): LspPos {
  const line = num(args.line), character = num(args.character);
  if (line === undefined || character === undefined) throw new Error("缺少 line/character 参数(0 基)");
  return { line, character };
}

function okText(data: unknown) {
  return { content: [{ type: "text" as const, text: JSON.stringify(data, null, 2) }] };
}
function errText(msg: string) {
  return { content: [{ type: "text" as const, text: msg }], isError: true as const };
}
function okMarkdown(md: string) {
  return { content: [{ type: "text" as const, text: md }] };
}

const posProps = {
  filePath: { type: "string", description: "ArkTS(.ets/.ts) 文件绝对路径" },
  line: { type: "number", description: "行号(0 基)" },
  character: { type: "number", description: "列号(0 基)" },
  projectRoot: { type: "string", description: "工程根(省略=自动向上找 build-profile.json5)" },
};

const targetProp = { type: "string", description: "设备目标(127.0.0.1:port), 省略=第一台在线设备" };

// ---------- 工具定义 ----------

const TOOLS: Tool[] = [
  // ---- hub_* ----
  { name: "hub_status", description: "查看 GodfreyHub 状态: 工具链路径/在册项目/当前项目/在线设备/原生能力(arkts-lsp, clangd, hdk, verify)健康度。首次使用先调用本工具。", inputSchema: { type: "object", properties: {} } },
  { name: "hub_scan", description: "扫描一个目录(3 层深度)自动发现 HarmonyOS 工程并注册(解析 bundle/ability, 实例名默认=项目名)。返回本次发现的工程。", inputSchema: { type: "object", properties: { root: { type: "string", description: "要扫描的目录绝对路径" } }, required: ["root"] } },
  { name: "hub_set_project", description: "切换当前项目上下文。之后的 hub_pull/hub_push/hub_build 及检查类工具默认作用于该工程。", inputSchema: { type: "object", properties: { name: { type: "string" } }, required: ["name"] } },
  { name: "hub_pull", description: "一键拉取: 对项目仓库执行 git pull --rebase --autostash(不覆盖本地未提交改动)。", inputSchema: { type: "object", properties: { project: { type: "string", description: "项目名, 省略=当前项目" } } } },
  { name: "hub_push", description: "一键提交推送: add -u(仅已跟踪修改) -> commit -> pull --rebase --autostash -> push。存在未跟踪文件时中止(默认不暂存未跟踪文件, 防 .env/密钥/临时产物误提交); 需提交新文件请先 git add 显式纳入。无改动则跳过。", inputSchema: { type: "object", properties: { project: { type: "string", description: "项目名, 省略=当前项目" }, message: { type: "string", description: "提交说明" } }, required: ["message"] } },
  { name: "hub_build", description: "构建并按目标类型部署: 目标为模拟器(设备名实例/项目同名实例/127.0.0.1 端口)一律用 unsigned 产物(签名不阻塞); 目标为真机(在线序列号/无线 IP, 自动反推或 device 指定)必须 signed 且仅限 debug 产品(debug 自动签名, 签名缺失报错不回退)。模拟器按设备名实例契约拉起(不再自动创建项目同名实例)。流程: ohpm install -> hvigor assembleHap -> 目标解析 -> 防污染校验 -> 安装启动。", inputSchema: { type: "object", properties: { project: { type: "string", description: "项目名, 省略=当前项目" }, product: { type: "string", description: "默认 debug; 真机部署仅支持 debug" }, buildMode: { type: "string", description: "默认 debug" }, port: { type: "number", description: "模拟器 hdc 端口, 省略按设备名实例解析" }, device: { type: "string", description: "真机序列号/无线 IP, 省略=已装本应用包的真机反推或唯一在线真机" }, clean: { type: "boolean", description: "先 hvigor clean" }, noOhpm: { type: "boolean", description: "跳过 ohpm install" }, noDeploy: { type: "boolean", description: "只构建不部署" }, skipStart: { type: "boolean", description: "只安装不启动" }, buildTests: { type: "boolean", description: "额外构建 ohosTest 测试包" }, testTarget: { type: "string", description: "buildTests 时指定 framework: ArkTS/Cangjie, 省略=全部" } } } },
  { name: "hub_test", description: "运行 API 26 测试: local=hvigor test；instrument 在 coverage=false 时原子构建/部署 unsigned HAP 并直接运行 Hypium，覆盖率或 ASan 模式使用官方 onDeviceTest；省略 modules 时仅运行声明了对应测试入口的模块；支持 patch 增量覆盖率及按 tag/domain 采集完整设备 HiLog。", inputSchema: { type: "object", properties: { project: { type: "string", description: "项目名, 省略=当前项目" }, mode: { type: "string", enum: ["local", "instrument"], description: "测试模式" }, modules: { type: "array", items: { type: "string" }, description: "省略=全部声明了当前模式测试入口的模块" }, scopes: { type: "array", items: { type: "string" }, description: "套件或 Suite#case" }, coverage: { type: "boolean", description: "覆盖率, 默认 true；false 时模拟器使用 unsigned 直跑" }, patch: { type: "string", description: "API 26 增量覆盖率补丁的绝对路径，扩展名必须为 .patch 或 .diff" }, asan: { type: "boolean", description: "instrument 模式 C/C++ ASan" }, deviceLogTag: { type: "string", description: "Instrument Test 期间按该 HiLog tag 采集；可与 domain 组合" }, deviceLogDomain: { type: "string", description: "Instrument Test 期间按该 HiLog domain 采集；采集前扩展并清空 app 缓冲区，结束后保存完整日志" }, timeoutMs: { type: "number", description: "默认 300000" }, port: { type: "number" } }, required: ["mode"] } },
  // ---- emu_* ----
  { name: "emu_list", description: "列出本机模拟器实例(运行状态/hdc 端口)与当前在线设备(模拟器 127.0.0.1:port + 真机序列号/无线 IP)。", inputSchema: { type: "object", properties: {} } },
  { name: "emu_start", description: "启动模拟器实例并等待 hdc 上线, 窗口自动改名为实例名。不给 port 时自动探测新上线设备；快照损坏时可用 coldboot 保留数据冷启动。", inputSchema: { type: "object", properties: { name: { type: "string", description: "实例名(emu_list 中的 name)" }, port: { type: "number", minimum: 10000, maximum: 16555, description: "可选约定 hdc 端口(10000-16555)" }, bootMode: { type: "string", enum: ["coldboot", "snapshot", "reset"], description: "可选启动模式；coldboot 保留 userdata，reset 会重置数据" } }, required: ["name"] } },
  { name: "emu_stop", description: "停止指定模拟器实例进程。", inputSchema: { type: "object", properties: { name: { type: "string" } }, required: ["name"] } },
  { name: "emu_enable_uitest", description: "使能设备 UITest testmode(persist.ace.testmode.enabled=1, Instrument Test/Driver 的官方一次性前置; 幂等, 无权限镜像返回 verified=false)。", inputSchema: { type: "object", properties: { target: targetProp } } },
  { name: "emu_create", description: "创建模拟器实例, name=设备名(实例按设备名置备, 如 'Mate 80 Pro'/'Pura X View'; 项目同名实例契约已删除, 仅在线时兼容选中)。deviceType/osVersion 省略=自动选已下载镜像(优先 phone)。", inputSchema: { type: "object", properties: { name: { type: "string", description: "实例名(按设备名置备)" }, deviceType: { type: "string", description: "Phone/Tablet/Foldable/2in1/Wearable/TV, 省略=phone" }, osVersion: { type: "string", description: "省略=已下载镜像自动选" }, screenProfile: { type: "string", description: "预置屏幕型号, 如 'Mate 70'" }, storage: { type: "number", description: "存储 GB, 默认 6" }, memory: { type: "number", description: "内存 GB, 默认 3；适合双模拟器并行测试" }, start: { type: "boolean", description: "创建后立即启动等上线" } }, required: ["name"] } },
  { name: "emu_delete", description: "删除模拟器实例(Emulator -delete, force 跳过交互)。", inputSchema: { type: "object", properties: { name: { type: "string" }, force: { type: "boolean", description: "默认 true" } }, required: ["name"] } },
  { name: "emu_images", description: "列出本机模拟器镜像(默认只列已下载, create 前先看这个)。", inputSchema: { type: "object", properties: { all: { type: "boolean", description: "true=含未下载的全部可用镜像, 默认 false" } } } },
  // ---- dev_* 静态检查 ----
  { name: "dev_check_ets_files", description: "ArkTS 静态检查: 对 .ets/.ts 文件返回 DevEco 同源语言服务(ace-server 无头)的诊断(语法/类型错误)。初始化选项从 .hvigor/cache/project-config.json 还原模块表(需先 DevEco 打开或 hub_build 生成缓存)；冷会话首次调用需完成模块装载(约 10-60s)，文件批量并行等待，未在超时前出结果的文件列入 pending(不伪造空诊断)；已出结果的按文件缓存，重跑秒回。timeoutMs 为就绪等待与批量诊断的总等待超时。", inputSchema: { type: "object", properties: { files: { type: "array", items: { type: "string" }, description: "待检查文件绝对路径列表" }, timeoutMs: { type: "number", description: "就绪等待+批量诊断总超时, 默认 120000" } }, required: ["files"] } },
  { name: "dev_check_cpp_files", description: "C/C++ 静态检查: 用 DevEco 内置 clangd 返回诊断，自动发现 hvigor 生成的共享或模块级 compile_commands.json。", inputSchema: { type: "object", properties: { files: { type: "array", items: { type: "string" }, description: "待检查 C/C++ 文件绝对路径列表" }, timeoutMs: { type: "number", description: "诊断等待超时, 默认 120000" } }, required: ["files"] } },
  // ---- lsp_* 语义导航 ----
  { name: "lsp_hover", description: "光标处悬停信息: 符号类型/文档, 调用处附带给定参数列表签名帮助。", inputSchema: { type: "object", properties: posProps, required: ["filePath", "line", "character"] } },
  { name: "lsp_definition", description: "跳转定义: 返回符号定义位置(文件+行号)。", inputSchema: { type: "object", properties: posProps, required: ["filePath", "line", "character"] } },
  { name: "lsp_references", description: "查找引用: 返回符号全部引用位置(含声明)。", inputSchema: { type: "object", properties: posProps, required: ["filePath", "line", "character"] } },
  { name: "lsp_symbols", description: "符号查找: 给 query=全工程按名称搜索(离线); 给 filePath=该文件符号表(struct/class/function 及行号)。", inputSchema: { type: "object", properties: { query: { type: "string", description: "符号名子串(全工程搜索)" }, filePath: { type: "string", description: "文件路径(文件符号表模式)" }, root: { type: "string", description: "工程根, 省略=当前项目" }, maxResults: { type: "number", description: "默认 50" }, projectRoot: { type: "string" } } } },
  // ---- ui_* 设备自动化 ----
  { name: "ui_tree", description: "获取设备当前界面 UI 树(uitest dumpLayout): 返回节点摘要(前 300 个)+保存的 JSON 文件路径。", inputSchema: { type: "object", properties: { target: targetProp, saveTo: { type: "string", description: "布局 JSON 保存路径, 省略=临时目录" } } } },
  { name: "ui_click", description: "点击设备屏幕指定坐标。", inputSchema: { type: "object", properties: { x: { type: "number" }, y: { type: "number" }, target: targetProp }, required: ["x", "y"] } },
  { name: "ui_input_text", description: "在指定坐标输入文本(uitest inputText)。", inputSchema: { type: "object", properties: { x: { type: "number" }, y: { type: "number" }, text: { type: "string" }, target: targetProp }, required: ["x", "y", "text"] } },
  { name: "ui_swipe", description: "从 (x1,y1) 滑动到 (x2,y2)。", inputSchema: { type: "object", properties: { x1: { type: "number" }, y1: { type: "number" }, x2: { type: "number" }, y2: { type: "number" }, speed: { type: "number", description: "滑动速度, 默认 1000" }, target: targetProp }, required: ["x1", "y1", "x2", "y2"] } },
  { name: "ui_key", description: "模拟按键(如 2=返回, 156=Home? 以 HarmonyOS 键码为准)。", inputSchema: { type: "object", properties: { keyCode: { type: "number" }, target: targetProp }, required: ["keyCode"] } },
  { name: "ui_screenshot", description: "设备截屏并保存到本地。", inputSchema: { type: "object", properties: { savePath: { type: "string", description: "保存路径(jpeg)" }, target: targetProp }, required: ["savePath"] } },
  { name: "app_control", description: "应用控制: start=启动 Ability / stop=强停 / uninstall=卸载(keepData 保留数据)。bundle 省略=当前项目。", inputSchema: { type: "object", properties: { action: { type: "string", enum: ["start", "stop", "uninstall"], description: "操作" }, bundle: { type: "string", description: "包名, 省略=当前项目" }, ability: { type: "string", description: "start 时的 Ability, 省略=项目默认" }, keepData: { type: "boolean", description: "uninstall 时保留数据, 默认 false" }, target: targetProp }, required: ["action"] } },
  // ---- hilog_* ----
  { name: "hilog_app", description: "按 PID 隔离抓取应用 HiLog(project/bundleName 定位; restart=true 先清日志重启再抓)。App 未运行明确报错, 不退化成全设备日志。", inputSchema: { type: "object", properties: { project: { type: "string", description: "项目名, 省略=当前项目" }, bundleName: { type: "string", description: "包名, 优先于 project" }, ability: { type: "string", description: "restart 时的 Ability" }, target: targetProp, restart: { type: "boolean", description: "先清日志并重启 App" }, waitMs: { type: "number", description: "重启后等待, 默认 2000" }, lines: { type: "number", description: "默认 200" }, level: { type: "string", enum: ["D", "I", "W", "E", "F"] }, tag: { type: "string" }, domain: { type: "string", description: "如 0xD002800" }, keyword: { type: "string", description: "正则/子串" }, save: { type: "boolean", description: "保存临时文件, 默认 true" } } } },
  { name: "hilog_query", description: "查询测试进程等短生命周期来源留下的设备 HiLog，不依赖存活 PID。tag/domain/keyword 必须至少提供一项，禁止无过滤返回整机日志。", inputSchema: { type: "object", properties: { target: targetProp, lines: { type: "number", description: "最多返回 1-10000 行，默认 200" }, level: { type: "string", enum: ["D", "I", "W", "E", "F"] }, tag: { type: "string", description: "HiLog 标签" }, domain: { type: "string", description: "如 0xD002800" }, keyword: { type: "string", description: "正则或子串过滤" }, save: { type: "boolean", description: "是否保存到系统临时目录，默认 true" } }, anyOf: [{ required: ["tag"] }, { required: ["domain"] }, { required: ["keyword"] }] } },
  { name: "hilog_fault", description: "读取设备 faultlog(崩溃日志, 最近 3 个文件前 100 行)。", inputSchema: { type: "object", properties: { target: targetProp } } },
  // ---- hdk_* 离线文档 ----
  { name: "hdk_search_documents", description: "HarmonyOS + 仓颉离线文档全文检索(本地 FTS5, 无需外网)。中文按词元分词匹配(与索引同款词典, 支持 1-2 字词与术语整词), 英文 token 支持驼峰/数字边界拆词(如 'String' 可命中 getStringSync)。返回 id/file/title/category/snippet。", inputSchema: { type: "object", properties: { query: { type: "string", description: "关键词(中英文, 词元匹配)" }, limit: { type: "number", description: "默认 10" }, category: { type: "string", description: "如 harmonyos-guides / harmonyos-references" } }, required: ["query"] } },
  { name: "hdk_get_document", description: "按 id 分页读取离线文档 Markdown 正文(id 来自 hdk_search_documents)。结果含 nextOffset 时继续翻页。", inputSchema: { type: "object", properties: { docId: { type: "string" }, offset: { type: "number", description: "起始偏移, 默认 0" }, maxChars: { type: "number", description: "默认 20000" } }, required: ["docId"] } },
  // ---- verify 视觉校验 ----
  { name: "verify", description: "视觉模型 UI 校验: action=run 用自然语言测试计划驱动 click/swipe/input 并判定 / log 取任务日志 / screenshots 导出每步截图。run 需 UI_VERIFY_* 环境变量。", inputSchema: { type: "object", properties: { action: { type: "string", enum: ["run", "log", "screenshots"], description: "操作" }, testPlan: { type: "string", description: "run: 测试步骤与预期(中文)" }, bundleName: { type: "string", description: "run: 被测包名, 省略=当前项目" }, ability: { type: "string", description: "run: 启动 Ability" }, freshStart: { type: "boolean", description: "run: 先强停再启动" }, maxSteps: { type: "number", description: "run: 最大步数, 默认 15" }, id: { type: "string", description: "log/screenshots: 任务 id" }, dirname: { type: "string", description: "screenshots: 保存目录" } }, required: ["action"] } },
  // ---- 深度联动 ----
  { name: "ui_locate_code", description: "UI→源码: 在设备当前界面按文本/id 定位控件(或按坐标取最深命中控件), 反查其 ArkTS 声明位置、所属 struct 及下方最近的事件处理函数(.onClick 等)。文案经字符串资源反查 $r('app.string.x')。", inputSchema: { type: "object", properties: { text: { type: "string", description: "控件文案(子串匹配)" }, id: { type: "string", description: "控件 id(子串匹配)" }, x: { type: "number", description: "X 坐标(与 y 一起, 坐标模式)" }, y: { type: "number", description: "Y 坐标" }, target: targetProp, project: { type: "string", description: "项目名, 省略=当前项目" } } } },
  { name: "hilog_locate_crash", description: "崩溃→源码: 解析 faultlog/原始堆栈中的 .ets 帧(官方格式 at fn (模块/路径.ets:行:列)), 映射到本地源码行并还原所在 struct/函数与源码语句。传 stack 直接解析文本; 省略则从设备读最近 faultlog。", inputSchema: { type: "object", properties: { stack: { type: "string", description: "原始堆栈/faultlog 文本(可整段粘贴)" }, target: targetProp, project: { type: "string", description: "项目名(用于源码映射), 省略=当前项目" }, maxFrames: { type: "number", description: "最多解析帧数, 默认 10" } } } },
  { name: "hub_check", description: "一键修复清单: 对 .ets 文件跑 DevEco 同源 LSP 诊断, 合并最近一次构建日志的编译错误(去重), 输出修复清单。文件集默认=git 变更(HEAD diff+未跟踪)。", inputSchema: { type: "object", properties: { project: { type: "string", description: "项目名, 省略=当前项目" }, files: { type: "array", items: { type: "string" }, description: "待检查 .ets 绝对路径, 省略=git 变更文件" }, timeoutMs: { type: "number", description: "诊断等待超时, 默认 30000" } } } },
];

// ---------- handlers ----------

// 按需裁剪: config.disabledTools 支持通配(如 "hdk_*"), 命中的工具不进清单
function toolDisabled(name: string, patterns: string[] | undefined): boolean {
  if (!patterns || patterns.length === 0) return false;
  const re = new RegExp("^" + patterns.map((p) => p.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*")).join("$|^") + "$");
  return re.test(name);
}

server.setRequestHandler(ListToolsRequestSchema, async () => {
  const disabled = loadConfig().disabledTools;
  return { tools: TOOLS.filter((t) => !toolDisabled(t.name, disabled)) };
});

server.setRequestHandler(CallToolRequestSchema, async (request, extra) => {
  const name = request.params.name;
  const args = (request.params.arguments ?? {}) as Record<string, unknown>;
  // 请求级取消信号: 客户端发 notifications/cancelled 或断连时被 SDK abort
  // (SDK 为每个请求建 AbortController, 见 protocol.handleRequest)。长任务
  // (hub_build/hub_test/emu_start/hub_push)透传到子进程, 取消即终止进程树。
  const signal = extra.signal;
  try {
    const projectRootHint = str(args.projectRoot) || curHarmonyRoot();
    switch (name) {
      // ---- hub_* ----
      case "hub_status": {
        const cfg = loadConfig();
        const tc = toolchain();
        const [instances, online] = await Promise.all([listInstanceDetails(), onlineDevicesClassified()]);
        const hdk = hdkStatus();
        return okText({
          toolchain: tc,
          currentProject: cfg.lastProject ?? null,
          projects: Object.values(cfg.projects).map((p) => ({ name: p.name, repoRoot: p.repoRoot, harmonyRoot: p.harmonyRoot, bundle: p.bundle, ability: p.ability, module: p.module, modulePath: p.modulePath, target: p.target, instance: p.instance, port: p.port ?? null })),
          onlineDevices: [...online.emulators, ...online.realDevices],
          emulators: online.emulators,
          realDevices: online.realDevices,
          emulatorInstances: instances,
          capabilities: {
            arktsLsp: (() => {
              if (!tc.deveco) return "不可用: 未找到 DevEco";
              const root = curHarmonyRoot();
              const cfgPath = root ? path.join(root, ".hvigor", "cache", "project-config.json") : null;
              return cfgPath && fs.existsSync(cfgPath)
                ? "正常 (DevEco ace-server 无头, project-config 就绪)"
                : "待预热: 缺 " + (cfgPath ?? "project-config.json") + " (DevEco 打开或 hub_build 一次)";
            })(),
            clangd: tc.clangd ? "正常 (" + tc.clangd + ")" : "不可用: 未找到 DevEco clangd",
            hdk: hdk.ok ? "正常 (" + hdk.roots.join("+") + ", " + hdk.docs + " 篇)" : "不可用: " + hdk.error,
            verifyUi: verifyEnv() ? "正常 (视觉模型已配置)" : "未配置(UI_VERIFY_* 环境变量)",
          },
          configFile: configFilePath(),
        });
      }
      case "hub_scan": {
        const root = str(args.root);
        if (!root) return errText("缺少 root 参数");
        const cfg = loadConfig();
        const found = await scanRoot(root, cfg);
        return okText({ found: found.map((p) => ({ name: p.name, harmonyRoot: p.harmonyRoot, bundle: p.bundle, module: p.module, modulePath: p.modulePath, target: p.target, instance: p.instance })), registeredTotal: Object.keys(cfg.projects).length });
      }
      case "hub_set_project": {
        const cfg = loadConfig();
        const entry = cfg.projects[str(args.name)];
        if (!entry) return errText("项目不存在: " + str(args.name));
        cfg.lastProject = entry.name;
        saveConfig(cfg);
        return okText({ currentProject: entry.name, entry });
      }
      case "hub_pull": {
        const r = resolveProject(str(args.project) || undefined);
        if ("error" in r) return errText(r.error);
        const res = await gitPull(r.entry.repoRoot, signal);
        return okText({ project: r.entry.name, ok: res.ok, out: res.out });
      }
      case "hub_push": {
        const msg = str(args.message);
        if (!msg) return errText("缺少 message 参数");
        const r = resolveProject(str(args.project) || undefined);
        if ("error" in r) return errText(r.error);
        const res = await gitPush(r.entry.repoRoot, msg, signal);
        return okText({ project: r.entry.name, ok: res.ok, skipped: res.skipped ?? false, out: res.out });
      }
      case "hub_build": {
        const r = resolveProject(str(args.project) || undefined);
        if ("error" in r) return errText(r.error);
        const cfg = loadConfig();
        const opts: BuildOpts = {
          product: str(args.product) || undefined,
          buildMode: str(args.buildMode) || undefined,
          port: num(args.port),
          device: str(args.device) || undefined,
          clean: bool(args.clean),
          noOhpm: bool(args.noOhpm),
          noDeploy: bool(args.noDeploy),
          skipStart: bool(args.skipStart),
          buildTests: bool(args.buildTests),
          testTarget: resolveTestTarget(str(args.testTarget)),
          otherBundles: allBundlesExcept(cfg, r.entry.bundle),
          signal,
        };
        const res = await buildAndDeploy(r.entry, opts);
        return okText({ project: r.entry.name, code: res.code, hap: res.hap ?? null, testHaps: res.testHaps ?? null, target: res.target ?? null, targetType: res.targetType ?? null, unsignedFallback: res.unsignedFallback ?? false, log: res.log });
      }
      case "hub_test": {
        const r = resolveProject(str(args.project) || undefined);
        if ("error" in r) return errText(r.error);
        const mode = str(args.mode) as HarmonyTestMode;
        if (mode !== "local" && mode !== "instrument") return errText("mode 必须是 local 或 instrument");
        if (mode === "local" && bool(args.asan)) return errText("ASan 仅适用于 Instrument Test");
        const res = await runHarmonyTests(r.entry, {
          mode,
          modules: strings(args.modules),
          scopes: strings(args.scopes),
          coverage: bool(args.coverage),
          patch: str(args.patch) || undefined,
          asan: bool(args.asan),
          deviceLogTag: str(args.deviceLogTag) || undefined,
          deviceLogDomain: str(args.deviceLogDomain) || undefined,
          timeoutMs: num(args.timeoutMs),
          port: num(args.port),
          signal,
        });
        return okText({ project: r.entry.name, ...res });
      }
      // ---- emu_* ----
      case "emu_list": {
        const [instances, online] = await Promise.all([listInstanceDetails(), onlineDevicesClassified()]);
        return okText({ instances, onlineDevices: [...online.emulators, ...online.realDevices], emulators: online.emulators, realDevices: online.realDevices });
      }
      case "emu_start": {
        const inst = str(args.name);
        if (!inst) return errText("缺少 name 参数");
        const target = await startInstance(inst, num(args.port), signal,
          str(args.bootMode) || undefined);
        if (!target) return errText("实例 '" + inst + "' 启动后等待 hdc 上线超时(240s)");
        return okText({ instance: inst, target });
      }
      case "emu_stop": return okText(await stopInstance(str(args.name)));
      case "emu_enable_uitest": return okText(await enableUiTest(str(args.target) || undefined));
      case "emu_create": return okText(await createInstance({
        name: str(args.name),
        deviceType: str(args.deviceType) || undefined,
        osVersion: str(args.osVersion) || undefined,
        screenProfile: str(args.screenProfile) || undefined,
        storage: num(args.storage), memory: num(args.memory),
        start: bool(args.start),
        signal,
      }));
      case "emu_delete": return okText(await deleteInstance(str(args.name), bool(args.force) ?? true));
      case "emu_images": return okText(await listImages(!bool(args.all)));
      // ---- dev_* ----
      case "dev_check_ets_files": {
        const files = Array.isArray(args.files) ? (args.files as string[]).map(str) : [];
        if (files.length === 0) return errText("缺少 files 参数");
        // 批量并行诊断：冷会话首次调用需完成模块装载（数秒~数十秒），
        // 顺序逐文件等待会超过 MCP 客户端请求时限。未在截止前出结果的
        // 文件标记 pending（区别于已确认的零错误），不伪造空诊断。
        const results = await lspDiagnosticsMany(files, { projectRoot: projectRootHint, timeoutMs: num(args.timeoutMs) });
        const out: Record<string, any[]> = {};
        const pending: string[] = [];
        let totalErr = 0;
        for (const f of files) {
          const r = results[f];
          if (!r) { pending.push(f); continue; }
          out[f] = r.diagnostics;
          if (r.pending) pending.push(f);
          totalErr += r.diagnostics.filter((x: any) => x.severity === 1).length;
        }
        return okText({ files: out, totalErrors: totalErr, pending: pending.length ? pending : undefined });
      }
      case "dev_check_cpp_files": {
        const files = Array.isArray(args.files) ? (args.files as string[]).map(str) : [];
        if (files.length === 0) return errText("缺少 files 参数");
        const out = await cppDiagnostics(files, { projectRoot: projectRootHint, timeoutMs: num(args.timeoutMs) });
        return okText(out);
      }
      // ---- lsp_* ----
      case "lsp_hover": {
        const [hover, signature] = await Promise.all([
          lspHover(str(args.filePath), pos(args), projectRootHint),
          lspSignatureHelp(str(args.filePath), pos(args), projectRootHint).catch(() => null),
        ]);
        return okText({ hover, signature });
      }
      case "lsp_definition": return okText(await lspDefinition(str(args.filePath), pos(args), projectRootHint));
      case "lsp_references": return okText(await lspReferences(str(args.filePath), pos(args), projectRootHint));
      case "lsp_symbols": {
        const fp = str(args.filePath);
        if (fp) {
          const viaLsp = await lspDocumentSymbols(fp, str(args.projectRoot) || projectRootHint);
          if (Array.isArray(viaLsp) && viaLsp.length > 0) return okText(viaLsp);
          // LSP 不可用/空结果时退回离线正则
          const fs = await import("node:fs");
          const { documentSymbolsOffline } = await import("./core/lsp.js");
          return okText(documentSymbolsOffline(fs.readFileSync(fp, "utf8")));
        }
        const query = str(args.query);
        if (!query) return errText("query(全工程搜索) 与 filePath(文件符号表) 至少给一个");
        const root = str(args.root) || curHarmonyRoot();
        if (!root) return errText("缺少 root(或先 hub_set_project)");
        return okText(workspaceSymbolsOffline(root, query, num(args.maxResults) ?? 50));
      }
      // ---- ui_* ----
      case "ui_tree": return okText(await dumpUiTree({ target: str(args.target) || undefined, saveTo: str(args.saveTo) || undefined }));
      case "ui_click": return okText({ result: await uiClick(num(args.x)!, num(args.y)!, str(args.target) || undefined) });
      case "ui_input_text": return okText({ result: await uiInputText(num(args.x)!, num(args.y)!, str(args.text), str(args.target) || undefined) });
      case "ui_swipe": return okText({ result: await uiSwipe(num(args.x1)!, num(args.y1)!, num(args.x2)!, num(args.y2)!, num(args.speed) ?? 1000, str(args.target) || undefined) });
      case "ui_key": return okText({ result: await uiKey(num(args.keyCode)!, str(args.target) || undefined) });
      case "ui_screenshot": return okText({ file: await screenshot(str(args.savePath), str(args.target) || undefined) });
      case "app_control": {
        const action = str(args.action);
        let bundle = str(args.bundle);
        let ability = str(args.ability);
        const target = str(args.target) || undefined;
        if (!bundle) {
          const r = resolveProject();
          if ("error" in r) return errText(r.error);
          bundle = r.entry.bundle;
          ability = ability || r.entry.ability;
        }
        if (action === "start") {
          if (!ability) return errText("缺少 ability(或当前项目未解析到默认 ability)");
          return okText({ result: await startAbility(bundle, ability, target) });
        }
        if (action === "stop") return okText({ result: await stopAbility(bundle, target) });
        if (action === "uninstall") return okText(await uninstallApp(bundle, target, bool(args.keepData) ?? false));
        return errText("action 必须是 start/stop/uninstall");
      }
      // ---- hilog_* ----
      case "hilog_app": {
        let bundleName = str(args.bundleName);
        let ability = str(args.ability);
        const project = str(args.project);
        if (!bundleName || project) {
          const resolved = resolveProject(project || undefined);
          if ("error" in resolved) return errText(resolved.error);
          bundleName = bundleName || resolved.entry.bundle;
          ability = ability || resolved.entry.ability;
        }
        return okText(await collectAppHilog({
          bundleName,
          ability: ability || undefined,
          target: str(args.target) || undefined,
          restart: bool(args.restart),
          clearBeforeRestart: bool(args.clearBeforeRestart),
          waitMs: num(args.waitMs),
          lines: num(args.lines),
          level: str(args.level) as any || undefined,
          tag: str(args.tag) || undefined,
          domain: str(args.domain) || undefined,
          keyword: str(args.keyword) || undefined,
          save: bool(args.save),
        }));
      }
      case "hilog_query": return okText(await collectFilteredHilog({
        target: str(args.target) || undefined,
        lines: num(args.lines),
        level: str(args.level) as any || undefined,
        tag: str(args.tag) || undefined,
        domain: str(args.domain) || undefined,
        keyword: str(args.keyword) || undefined,
        save: bool(args.save),
      }));
      case "hilog_fault": return okMarkdown(await collectFaultlog({ target: str(args.target) || undefined }));
      // ---- hdk_* ----
      case "hdk_search_documents": return okText(searchDocuments(str(args.query), num(args.limit) ?? 10, str(args.category)));
      case "hdk_get_document": return okMarkdown(getDocument(str(args.docId), num(args.offset), num(args.maxChars)));
      // ---- verify ----
      case "verify": {
        const action = str(args.action);
        if (action === "log") return okMarkdown(recordLog(str(args.id)));
        if (action === "screenshots") return okText({ files: saveScreenshots(str(args.id), str(args.dirname)) });
        if (action !== "run") return errText("action 必须是 run/log/screenshots");
        let bundle = str(args.bundleName);
        let ability = str(args.ability);
        if (!bundle) {
          const r = resolveProject();
          if ("error" in r) return errText(r.error);
          bundle = r.entry.bundle;
          ability = ability || r.entry.ability;
        }
        const rec = await verifyUi({ bundleName: bundle, ability: ability || undefined, testPlan: str(args.testPlan), freshStart: bool(args.freshStart), maxSteps: num(args.maxSteps) });
        return okText({ id: rec.id, successPart: rec.successPart, failPart: rec.failPart, finished: rec.finished, steps: rec.steps.length });
      }
      // ---- 深度联动 ----
      case "ui_locate_code": {
        const r = resolveProject(str(args.project) || undefined);
        if ("error" in r) return errText(r.error);
        return okText(await uiLocateCode({
          harmonyRoot: r.entry.harmonyRoot,
          text: str(args.text) || undefined, id: str(args.id) || undefined,
          x: num(args.x), y: num(args.y), target: str(args.target) || undefined,
        }));
      }
      case "hilog_locate_crash": {
        const stack = str(args.stack);
        const proj = str(args.project);
        let harmonyRoot: string | undefined;
        // stack 直传时项目可选(无项目则只解析不映射)
        if (proj || !stack) {
          const r = resolveProject(proj || undefined);
          if ("error" in r) { if (stack) { /* 继续纯解析 */ } else return errText(r.error); }
          else harmonyRoot = r.entry.harmonyRoot;
        }
        return okText(await crashLocate({ harmonyRoot, stack: stack || undefined, target: str(args.target) || undefined, maxFrames: num(args.maxFrames) }));
      }
      case "hub_check": {
        const r = resolveProject(str(args.project) || undefined);
        if ("error" in r) return errText(r.error);
        const files = Array.isArray(args.files) ? (args.files as string[]).map(str) : undefined;
        return okText(await hubCheck({ entry: r.entry, files: files && files.length > 0 ? files : undefined, timeoutMs: num(args.timeoutMs) }));
      }
      default:
        return errText("未知工具: " + name);
    }
  } catch (e) {
    return errText("[" + name + "] " + (e instanceof Error ? e.message : String(e)));
  }
});

// ---------- 启动 ----------

process.on("uncaughtException", (e) => console.error("[godfreyhub] uncaught:", e));
process.on("unhandledRejection", (e) => console.error("[godfreyhub] unhandled:", e));
// 退出清理顺序关键: 必须先 closeHdk() 再退出。better-sqlite3 的 Statement 在
// 进程退出清理阶段(DisposeIsolate)析构时会调用 node::RemoveEnvironmentCleanupHook,
// 若 env 已销毁则原生断言崩溃(Assertion failed: (env) != nullptr, 2026-08-18 实证,
// 崩溃栈 Statement::scalar deleting destructor)。多 agent 并发 hdk 查询使退出瞬间
// 存活 Statement 数量激增, 大幅提高崩溃概率。db.close() 在 C++ 层同步释放全部
// Statement, 之后再退出即干净关闭(客户端可正常重启连接而非 failed 卡死)。
process.on("exit", () => {
  try { closeHdk(); } catch { /* 已关闭 */ }
  disposeArktsSessions();
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("[godfreyhub] MCP server ready (stdio, native)");
}
main().catch((e) => { console.error(e); process.exit(1); });
