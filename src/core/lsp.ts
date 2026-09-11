// LSP 门面: 实现已按职责拆分到 src/lsp/ 包。
//   lsp/frame.ts           JSON-RPC 帧协议(唯一接触字节流的模块)
//   lsp/diagnostics-cache.ts publishDiagnostics 缓存(pending 语义)
//   lsp/project-config.ts  ace-server 初始化选项还原(spawn 前的纯同步校验)
//   lsp/arkts-session.ts   会话状态机(spawning→initializing→ready→dying) + 文档打开
//   lsp/diagnostics.ts     ArkTS 批量诊断收集(不伪造空诊断)
//   lsp/navigation.ts      hover/定义/引用/符号 + 离线符号回退
//   lsp/cpp.ts             clangd C++ 诊断(URI 归一化 + pending 语义)
// 保留本文件维持 dist/core/lsp.js 的既有导入路径(工具层/测试)不变。
export { FrameConnection, spawnFrameProcess, type RpcMsg } from "../lsp/frame.js";
export { DiagnosticCache } from "../lsp/diagnostics-cache.js";
export { ArktsLspError, loadDevEcoProjectModules } from "../lsp/project-config.js";
export {
  ensureOpen, disposeArktsSessions, findProjectRoot, getArktsSession, withArkts,
  ARKTS_INIT_READY_TIMEOUT_MS, type Session,
} from "../lsp/arkts-session.js";
export { lspDiagnosticsMany, type LspDiagnosticsResult } from "../lsp/diagnostics.js";
export {
  lspHover, lspDefinition, lspReferences, lspSignatureHelp, lspDocumentSymbols,
  normalizeHover, documentSymbolsOffline, workspaceSymbolsOffline, uriToPath,
  type LspPos,
} from "../lsp/navigation.js";
export { cppDiagnostics, resolveCompileCommandsDirectory } from "../lsp/cpp.js";
