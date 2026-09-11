# GodfreyHub repository instructions

## Active application

- 自包含的 HarmonyOS 超级 MCP 服务器（Node.js，TypeScript）。仓库根目录即生产工程。
- `src/`：TypeScript 源码（`index.ts` 引导 + `tools/` 按域工具注册表（zod schema + 类型化 handler）+ `core/` 核心模块 + `lsp/` 语言服务包（帧协议/会话状态机/诊断/导航/clangd）+ `cli/` 子进程入口），构建产出 `dist/index.js`。
- `hdk/`：离线 HarmonyOS + Cangjie 文档语料（`harmonyos_docs/` + `cangjie_docs/` + 爬虫/索引器 `hdk.py`），FTS 二进制索引 `hdk/.mcp_cache/` 不入 git。
- `scripts/`：设备执行、构建互斥、证据解析、声明式规则引擎与探测/冒烟脚本（`GfDeviceRunner.ps1` 为薄入口，实体按职责拆分在 `scripts/runner/`，调用方 dot-source 契约不变）；`tests/`：Node 回归测试（`*.test.mjs`）。
- 能力覆盖：多项目 git 一键同步、同名实例构建部署、模拟器生命周期与窗口命名、ArkTS/C++ 静态检查（headless DevEco）、LSP 导航、设备 UI 自动化、HiLog/崩溃采集、离线文档检索、视觉校验与跨域深度联动。零子 MCP 代理。

## Responsibility boundary

本仓库只提供**领域无关的通用原语**：构建、部署、设备、日志、LSP、UI 自动化、文档检索、视觉比对、声明式规则引擎。

**不属于本仓库**：任何具体产品家族的测试矩阵、通过标准、发布策略、质量门禁与候选冻结规则。这些由调用方仓库拥有，经下列接缝注入：

- `--rules` / `--repo`：`scripts/static-rules.mjs` 的规则数据与被检仓库
- `-TemplateDir`：`scripts/install-git-hooks.ps1` 的钩子模板（钩子策略属调用方，安装机制属本仓）
- `-AnchorRulePath` / `-UiAuditScript`：`GfDeviceRunner` 的锚点审计能力
- `GF_GODFREYHUB_NODE` / `_DEVICE_PREPARE` / `_VISUAL_COMPARE` / `_HDC`：子进程 provider 路径
- `GODFREYHUB_BUILD_MUTEX_NAME` / `GODFREYHUB_DEVICE_MUTEX_PREFIX`：串行域命名
- `GODFREYHUB_CONFIG_DIR` / `GODFREYHUB_HDK_ROOT` / `DEVECO_PATH`：本机环境

新增能力前先问：它是否需要知道某个具体仓库的目录布局或产品清单？若是，它属于调用方。

## Engineering principles

- **No backward compatibility.** Remove obsolete paths instead of adding compatibility layers, fallbacks, or migrations.
- **Simplest implementation that fully meets current requirements.** Avoid speculative abstractions, configuration, and indirection.
- **Grow the system in layers.** Start from the smallest version that works end to end, and add each new capability on top of a product that already works.
- **Keep components modular** and concerns clearly separated.
- **Prefer established, well-maintained libraries** when they reduce overall complexity or improve reliability.
- **Lean on the dependencies already in the project** before adding packages or writing your own implementation.
- **Make architectural decisions for the long term.** Do not accept a stopgap that only works for now.

## Build and test

```bash
npm install            # 安装依赖（better-sqlite3 原生编译，须本机有编译工具链或预编译包）
npm run build          # tsc -> dist/
npm test               # 构建 + node --test tests/*.test.mjs
npm run smoke          # 冒烟验证 scripts/smoke.mjs
npm run hdk:index      # 离线文档索引（新克隆后首次运行）
```

测试必须 hermetic：断言引擎行为用临时目录合成树，不得读取任何外部仓库的真实数据文件。

注意：`dist/` 是构建产物，不入 git（.gitignore 覆盖）；`hdk/.mcp_cache/` 是本地 FTS 索引，不入 git；`config/local.config.json` 是 `hub_scan` 生成的本机工程注册表（含本机绝对路径与设备名），不入 git。

## HDK 离线文档子系统

- 爬取/增量/索引/服务统一经 `hdk.py` 调度，不长期绕过它直接运行各模块；检索入口是 MCP 的 `hdk_*` 工具（Node 原生直查 FTS5 索引，`mcp_server.py` 仅为外部客户端备用的独立 stdio 入口）。
- 语料 `hdk/harmonyos_docs/`、`hdk/cangjie_docs/` 与 `hdk/*state.json` 是长期资产，**必须提交**；`hdk/.mcp_cache/*.fts5.db`、`__pycache__/`、`*.lock`、`*.log` 忽略不入库。
- 索引端（Python indexer）与查询端（Node `@node-rs/jieba`、`mcp_server.py`）共用 `hdk/dict/dict.txt`：改词典/分词规则须两端同步并跑 `tests/hdk-segment.test.mjs` 一致性回归；分词方案变更递增 `indexer.SCHEMA_TOKENIZER` 触发自动全量重建。
- 新增爬虫或改依赖须同步 `hdk/requirements.txt`；网络请求带超时与退避，保持运行锁语义，鸿蒙仓颉抓取只能串行。
- 深层不变量与版本控制边界见 `hdk/Docs/ENGINEERING_SYSTEM.md`；文档只记录当前事实与长期约束，不追加按日期流水。

## Workspace management

- `src/`（源码）、`hdk/`（语料与索引器）、`scripts/`（辅助脚本）、`tests/`（测试）为版本化内容。
- `dist/`、`node_modules/`、`hdk/.mcp_cache/`、`config/local.config.json` 为生成物或本机状态，Git 忽略。
- 本地证据落点由调用方指定；本仓库不假定任何外部 Workspace 布局，也不维护第二个 Workspace。
- 不把临时脚本、日志、截图放进仓库根目录。

## Change standards

- 保持零子 MCP 代理的单一进程架构；新能力加在现有 `core/` 模块内。
- LSP 按 UTF-8 字节解析协议帧；设备 shell 参数统一安全引用；子进程有超时与有界输出。
- 新增工具须补 `tests/*.test.mjs` 回归测试。
- 包名/导出变更时同步更新 `README.md` 的注册示例。
- 不得在源码中硬编码任何调用方仓库的绝对路径或产品清单；本机位置一律经 env 或参数注入。

## Git workflow

- 提交与推送遵循维护者当前明确要求；未经要求不推送远程。
- 清理本地临时文件后提交；不削弱 `.gitignore`。
