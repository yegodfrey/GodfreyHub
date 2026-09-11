import fs from "node:fs";
import path from "node:path";
import { z } from "zod";
import { defineTool, type ToolDefinition } from "./types.js";
import { resolveProject, curHarmonyRoot } from "./shared.js";
import { toolchain } from "../core/paths.js";
import { loadConfig, updateConfig, scanRoot, allBundlesExcept, configFilePath } from "../core/registry.js";
import { gitPull, gitPush } from "../core/git.js";
import { buildAndDeploy, resolveTestTarget, type BuildOpts } from "../core/hvigor.js";
import { runHarmonyTests } from "../core/test-runner.js";
import { listInstanceDetails, onlineDevicesClassified } from "../core/emulator.js";
import { hdkStatus } from "../core/hdk.js";
import { verifyEnv } from "../core/verify.js";

// hub_*: 项目注册/git 同步/构建部署/测试(8 个工具)

export const hubTools: ToolDefinition[] = [
  defineTool({
    name: "hub_status",
    description: "查看 GodfreyHub 状态: 工具链路径/在册项目/当前项目/在线设备/原生能力(arkts-lsp, clangd, hdk, verify)健康度。首次使用先调用本工具。",
    inputSchema: {},
    handler: async () => {
      const cfg = loadConfig();
      const tc = toolchain();
      const [instances, online] = await Promise.all([listInstanceDetails(), onlineDevicesClassified()]);
      const hdk = hdkStatus();
      const root = curHarmonyRoot();
      const cfgPath = root ? path.join(root, ".hvigor", "cache", "project-config.json") : null;
      return {
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
            return cfgPath && fs.existsSync(cfgPath)
              ? "正常 (DevEco ace-server 无头, project-config 就绪)"
              : "待预热: 缺 " + (cfgPath ?? "project-config.json") + " (DevEco 打开或 hub_build 一次)";
          })(),
          clangd: tc.clangd ? "正常 (" + tc.clangd + ")" : "不可用: 未找到 DevEco clangd",
          hdk: hdk.ok ? "正常 (" + hdk.roots.join("+") + ", " + hdk.docs + " 篇)" : "不可用: " + hdk.error,
          verifyUi: verifyEnv() ? "正常 (视觉模型已配置)" : "未配置(UI_VERIFY_* 环境变量)",
        },
        configFile: configFilePath(),
      };
    },
  }),

  defineTool({
    name: "hub_scan",
    description: "扫描一个目录(3 层深度)自动发现 HarmonyOS 工程并注册(解析 bundle/ability, 实例名默认=项目名)。返回本次发现的工程。",
    inputSchema: { root: z.string().describe("要扫描的目录绝对路径") },
    handler: async (args) => {
      const found = await scanRoot(args.root);
      const cfg = loadConfig();
      return {
        found: found.map((p) => ({ name: p.name, harmonyRoot: p.harmonyRoot, bundle: p.bundle, module: p.module, modulePath: p.modulePath, target: p.target, instance: p.instance })),
        registeredTotal: Object.keys(cfg.projects).length,
      };
    },
  }),

  defineTool({
    name: "hub_set_project",
    description: "切换当前项目上下文。之后的 hub_pull/hub_push/hub_build 及检查类工具默认作用于该工程。",
    inputSchema: { name: z.string() },
    handler: async (args) => {
      // 读改写走 updateConfig: 跨进程锁内改 lastProject, 避免与并发 hub_scan 互相覆盖。
      const result = await updateConfig((cfg) => {
        const entry = cfg.projects[args.name];
        if (!entry) return { error: "项目不存在: " + args.name } as const;
        cfg.lastProject = entry.name;
        return { currentProject: entry.name, entry } as const;
      });
      if ("error" in result) throw new Error(result.error);
      return result;
    },
  }),

  defineTool({
    name: "hub_pull",
    description: "一键拉取: 对项目仓库执行 git pull --rebase --autostash(不覆盖本地未提交改动)。rebase 冲突时自动 abort 恢复原状并返回失败。",
    inputSchema: { project: z.string().optional().describe("项目名, 省略=当前项目") },
    handler: async (args, ctx) => {
      const r = resolveProject(args.project || undefined);
      if ("error" in r) throw new Error(r.error);
      const res = await gitPull(r.entry.repoRoot, ctx.signal);
      return { project: r.entry.name, ok: res.ok, out: res.out };
    },
  }),

  defineTool({
    name: "hub_push",
    description: "一键提交推送: add -u(仅已跟踪修改) -> commit -> pull --rebase --autostash -> push。存在未跟踪文件时中止(默认不暂存未跟踪文件, 防 .env/密钥/临时产物误提交); 需提交新文件请先 git add 显式纳入。无改动则跳过。rebase 冲突时自动 abort 并拒绝 push。",
    inputSchema: {
      project: z.string().optional().describe("项目名, 省略=当前项目"),
      message: z.string().describe("提交说明"),
    },
    handler: async (args, ctx) => {
      const r = resolveProject(args.project || undefined);
      if ("error" in r) throw new Error(r.error);
      const res = await gitPush(r.entry.repoRoot, args.message, ctx.signal);
      return { project: r.entry.name, ok: res.ok, skipped: res.skipped ?? false, out: res.out };
    },
  }),

  defineTool({
    name: "hub_build",
    description: "构建并按目标类型部署: 目标为模拟器(设备名实例/项目同名实例/127.0.0.1 端口)一律用 unsigned 产物(签名不阻塞); 目标为真机(在线序列号/无线 IP, 自动反推或 device 指定)必须 signed 且仅限 debug 产品(debug 自动签名, 签名缺失报错不回退)。模拟器按设备名实例契约拉起(不再自动创建项目同名实例)。流程: ohpm install -> hvigor assembleHap -> 目标解析 -> 防污染校验 -> 安装启动。",
    inputSchema: {
      project: z.string().optional().describe("项目名, 省略=当前项目"),
      product: z.string().optional().describe("默认 debug; 真机部署仅支持 debug"),
      buildMode: z.string().optional().describe("默认 debug"),
      port: z.number().optional().describe("模拟器 hdc 端口, 省略按设备名实例解析"),
      device: z.string().optional().describe("真机序列号/无线 IP, 省略=已装本应用包的真机反推或唯一在线真机"),
      clean: z.boolean().optional().describe("先 hvigor clean"),
      noOhpm: z.boolean().optional().describe("跳过 ohpm install"),
      noDeploy: z.boolean().optional().describe("只构建不部署"),
      skipStart: z.boolean().optional().describe("只安装不启动"),
      buildTests: z.boolean().optional().describe("额外构建 ohosTest 测试包"),
      testTarget: z.string().optional().describe("buildTests 时指定 framework: ArkTS/Cangjie, 省略=全部"),
    },
    handler: async (args, ctx) => {
      const r = resolveProject(args.project || undefined);
      if ("error" in r) throw new Error(r.error);
      const opts: BuildOpts = {
        product: args.product || undefined,
        buildMode: args.buildMode || undefined,
        port: args.port,
        device: args.device || undefined,
        clean: args.clean,
        noOhpm: args.noOhpm,
        noDeploy: args.noDeploy,
        skipStart: args.skipStart,
        buildTests: args.buildTests,
        testTarget: resolveTestTarget(args.testTarget),
        otherBundles: allBundlesExcept(loadConfig(), r.entry.bundle),
        signal: ctx.signal,
      };
      const res = await buildAndDeploy(r.entry, opts);
      return { project: r.entry.name, code: res.code, hap: res.hap ?? null, testHaps: res.testHaps ?? null, target: res.target ?? null, targetType: res.targetType ?? null, unsignedFallback: res.unsignedFallback ?? false, log: res.log };
    },
  }),

  defineTool({
    name: "hub_test",
    description: "运行 API 26 测试: local=hvigor test；instrument 在 coverage=false 时原子构建/部署 unsigned HAP 并直接运行 Hypium，覆盖率或 ASan 模式使用官方 onDeviceTest；省略 modules 时仅运行声明了对应测试入口的模块；支持 patch 增量覆盖率及按 tag/domain 采集完整设备 HiLog。",
    inputSchema: {
      project: z.string().optional().describe("项目名, 省略=当前项目"),
      mode: z.enum(["local", "instrument"]),
      modules: z.array(z.string()).optional().describe("省略=全部声明了当前模式测试入口的模块"),
      scopes: z.array(z.string()).optional().describe("套件或 Suite#case"),
      coverage: z.boolean().optional().describe("覆盖率, 默认 true；false 时模拟器使用 unsigned 直跑"),
      patch: z.string().optional().describe("API 26 增量覆盖率补丁的绝对路径，扩展名必须为 .patch 或 .diff"),
      asan: z.boolean().optional().describe("instrument 模式 C/C++ ASan"),
      deviceLogTag: z.string().optional().describe("Instrument Test 期间按该 HiLog tag 采集；可与 domain 组合"),
      deviceLogDomain: z.string().optional().describe("Instrument Test 期间按该 HiLog domain 采集；采集前扩展并清空 app 缓冲区，结束后保存完整日志"),
      timeoutMs: z.number().optional().describe("默认 300000"),
      port: z.number().optional(),
    },
    handler: async (args, ctx) => {
      const r = resolveProject(args.project || undefined);
      if ("error" in r) throw new Error(r.error);
      if (args.mode === "local" && args.asan) throw new Error("ASan 仅适用于 Instrument Test");
      const res = await runHarmonyTests(r.entry, {
        mode: args.mode,
        modules: args.modules,
        scopes: args.scopes,
        coverage: args.coverage,
        patch: args.patch || undefined,
        asan: args.asan,
        deviceLogTag: args.deviceLogTag || undefined,
        deviceLogDomain: args.deviceLogDomain || undefined,
        timeoutMs: args.timeoutMs,
        port: args.port,
        signal: ctx.signal,
      });
      return { project: r.entry.name, ...res };
    },
  }),
];
