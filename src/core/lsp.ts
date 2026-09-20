// LSP 门面: 实现按职责拆分在 src/lsp/ 包。
//   lsp/frame.ts           JSON-RPC 帧协议(唯一接触字节流的模块; clangd 等共用)
//   lsp/project-config.ts  ace-server 初始化选项还原 + 工程根定位 + 诊断类型
//   lsp/offline-symbols.ts 离线符号(documentSymbols/workspaceSymbols, 不依赖语言服务器)
//   lsp/cpp.ts             clangd C++ 诊断(URI 归一化 + pending 语义)
// ArkTS 诊断后端为官方 DevEco CLI `check arkts`(src/core/devecocli.ts);
// ace-server stdio 长会话路径已于 2026-09-20 整体退役(本机环境静默吞诊断, 官方工具同证)。
// 保留本文件维持 dist/core/lsp.js 的既有导入路径(工具层/测试)不变。
export { FrameConnection, spawnFrameProcess, type RpcMsg } from "../lsp/frame.js";
export { ArktsLspError, loadDevEcoProjectModules, findProjectRoot, findHarmonyProjectRoot, ARKTS_INIT_READY_TIMEOUT_MS, type LspDiagnosticsResult } from "../lsp/project-config.js";
export { documentSymbolsOffline, workspaceSymbolsOffline, uriToPath, type LspPos } from "../lsp/offline-symbols.js";
export { cppDiagnostics, resolveCompileCommandsDirectory } from "../lsp/cpp.js";
