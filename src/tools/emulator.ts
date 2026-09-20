import { z } from "zod";
import { defineTool, type ToolDefinition } from "./types.js";
import {
  listInstanceDetails, onlineDevicesClassified, startInstance, stopInstance,
  listImages, createInstance, deleteInstance, enableUiTest, BOOT_WAIT_TIMEOUT_MS,
} from "../core/emulator.js";

// emu_*: 模拟器生命周期(7 个工具)。启停/创建/删除的并发互斥在 core 层实施。

const targetProp = z.string().optional().describe("设备目标(127.0.0.1:port), 省略=唯一在线设备");

export const emulatorTools: ToolDefinition[] = [
  defineTool({
    name: "emu_list",
    description: "列出本机模拟器实例(运行状态/hdc 端口)与当前在线设备(模拟器 127.0.0.1:port + 真机序列号/无线 IP)。",
    inputSchema: {},
    handler: async () => {
      const [instances, online] = await Promise.all([listInstanceDetails(), onlineDevicesClassified()]);
      return { instances, onlineDevices: [...online.emulators, ...online.realDevices], emulators: online.emulators, realDevices: online.realDevices };
    },
  }),

  defineTool({
    name: "emu_start",
    description: "启动模拟器实例并等待 hdc 上线, 窗口自动改名为实例名。不给 port 时自动探测新上线设备；快照损坏时可用 coldboot 保留数据冷启动。",
    inputSchema: {
      name: z.string().describe("实例名(emu_list 中的 name)"),
      port: z.number().min(10000).max(16555).optional().describe("可选约定 hdc 端口(10000-16555)"),
      bootMode: z.enum(["coldboot", "snapshot", "reset"]).optional().describe("可选启动模式；coldboot 保留 userdata，reset 会重置数据"),
    },
    handler: async (args, ctx) => {
      const target = await startInstance(args.name, args.port, ctx.signal, args.bootMode);
      if (!target) throw new Error("实例 '" + args.name + "' 启动后等待 hdc 上线超时(" + Math.round(BOOT_WAIT_TIMEOUT_MS / 1000) + "s)");
      return { instance: args.name, target };
    },
  }),

  defineTool({
    name: "emu_stop",
    description: "停止指定模拟器实例进程。",
    inputSchema: { name: z.string() },
    handler: async (args) => stopInstance(args.name),
  }),

  defineTool({
    name: "emu_enable_uitest",
    description: "使能设备 UITest testmode(persist.ace.testmode.enabled=1, Instrument Test/Driver 的官方一次性前置; 幂等, 无权限镜像返回 verified=false)。",
    inputSchema: { target: targetProp },
    handler: async (args) => enableUiTest(args.target || undefined),
  }),

  defineTool({
    name: "emu_create",
    description: "创建模拟器实例, name=设备名(实例按设备名置备, 如 'Mate 80 Pro'/'Pura X View'; 项目同名实例契约已删除, 仅在线时兼容选中)。deviceType/osVersion 省略=自动选已下载镜像(优先 phone)。",
    inputSchema: {
      name: z.string().describe("实例名(按设备名置备)"),
      deviceType: z.string().optional().describe("Phone/Tablet/Foldable/2in1/Wearable/TV, 省略=phone"),
      osVersion: z.string().optional().describe("省略=已下载镜像自动选"),
      screenProfile: z.string().optional().describe("预置屏幕型号, 如 'Mate 70'"),
      storage: z.number().optional().describe("存储 GB, 默认 6"),
      memory: z.number().optional().describe("内存 GB, 默认 3；适合双模拟器并行测试"),
      start: z.boolean().optional().describe("创建后立即启动等上线"),
    },
    handler: async (args, ctx) => createInstance({
      name: args.name,
      deviceType: args.deviceType || undefined,
      osVersion: args.osVersion || undefined,
      screenProfile: args.screenProfile || undefined,
      storage: args.storage,
      memory: args.memory,
      start: args.start,
      signal: ctx.signal,
    }),
  }),

  defineTool({
    name: "emu_delete",
    description: "删除模拟器实例(Emulator -delete, force 跳过交互)。",
    inputSchema: {
      name: z.string(),
      force: z.boolean().optional().describe("默认 true"),
    },
    handler: async (args) => deleteInstance(args.name, args.force ?? true),
  }),

  defineTool({
    name: "emu_images",
    description: "列出本机模拟器镜像(默认只列已下载, create 前先看这个)。",
    inputSchema: { all: z.boolean().optional().describe("true=含未下载的全部可用镜像, 默认 false") },
    handler: async (args) => listImages(!(args.all ?? false)),
  }),
];
