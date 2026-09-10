# HDK subsystem instructions

## 活跃项目

- 本目录是 GodfreyMCP 的 **HDK 工具子系统**：把华为 HarmonyOS 与仓颉（Cangjie）开发者文档抓取为本地 Markdown，建立 FTS5 全文索引，并以 MCP 服务提供离线检索。它不是独立 Git 仓库，也不是 HarmonyOS 应用。
- 所有爬取 / 增量 / 索引 / 服务都通过统一入口 `hdk.py` 调度；`crawl*.py`、`incremental.py`、`incremental_cj.py`、`indexer.py`、`generate_index.py`、`mcp_server.py` 是其调度的可复用模块。
- 根目录的 `harmonyos_docs/`、`cangjie_docs/` 是爬取语料，属于版本控制内的**长期资产**；`.mcp_cache/*.fts5.db` 是可由 `hdk.py index` 重建的索引，被 Git 忽略。

## Engineering principles

- **No backward compatibility.** Remove obsolete paths instead of adding compatibility layers, fallbacks, or migrations.
- **Simplest implementation that fully meets current requirements.** Avoid speculative abstractions, configuration, and indirection.
- **Grow the system in layers.** Start from the smallest version that works end to end, and add each new capability on top of a product that already works. Never trade a working product for unfinished complexity.
- **Keep components modular** and concerns clearly separated.
- **Prefer established, well-maintained libraries** when they reduce overall complexity or improve reliability. Do not reimplement common functionality without a clear reason.
- **Lean on the dependencies already in the project** before writing your own implementation or adding packages. Do not assume a library lacks a capability without checking its documentation and types.
- **Make architectural decisions for the long term.** Do not accept a stopgap that only works for now and is meant to be replaced later.

## 项目文档

- `Docs/README.md` 是文档索引与维护政策。
- 改变子系统前，只读受影响体系文档（`Docs/ENGINEERING_SYSTEM.md`、`Docs/QUALITY_SYSTEM.md`）。
- 只在变更影响长期项目契约时才更新文档：模块边界、外部抓取源、数据/索引流程、限速/锁/路径等安全不变量、所需质量门禁。
- 就地维护当前事实，替换过时表述，不追加按日期排列的进度条目或任务流水。
- 不记录抓取流水、命令输出、外网 API 手册或文档 ID；这些由代码、测试与已落盘语料说明。
- 本子系统不设 `Docs/decisions/`：只有出现跨模块、难回退且存在真实替代方案的硬选择时才留痕。

## 工作区管理

- 本目录只保留入口脚本、模块、配置、`README.md`/`AGENTS.md`/`CONTRIBUTING.md`、`Docs/` 与语料/state 资产；同步入口在 GodfreyHub 仓库根目录（`sync_projects.py` + OneClick 包装），不在此目录放独立同步脚本。
- `harmonyos_docs/`、`cangjie_docs/` 与 `*state.json` 是长期资产，**必须提交**；`.mcp_cache/`、索引 `*.fts5.db`、`__pycache__/`、`*.lock`、`*.log`、`.workbuddy/` 必须忽略。
- `Docs/` 只放当前有效的项目文档；不要在其中放脚本、日志或临时文件。
- 一次性抓取日志、诊断、草稿在任务结束删除；长期结论进 `Docs/`，可复用脚本进根目录（由 `hdk.py` 调度）。
- 不要 `rm` / `git rm` `Docs/` 下任何文件；清理用 `git status --short --ignored` 核对。

## 变更标准

- 爬取/索引/服务经 `hdk.py` 调度，不长期绕过它直接运行模块。
- 保持运行锁语义：不允许两个进程并发写同一 `*state.json`；爬虫须自带锁或复用现有锁。
- 网络请求带超时与退避，不设会卡死线程池的无限等待；保持 `MAX_FETCHED`/`MAX_DISCOVERED`/`STALL_SECS` 等安全上限。
- 索引只做行级增量；FTS tokenizer 在建表时烧死，分词方案变更须递增 `indexer.SCHEMA_TOKENIZER`，`ensure_index` 检测不匹配即自动全量重建一次（tokenizer=3：jieba 词元索引，索引端/查询端共用 `dict/dict.txt` 与 `dict/stopwords.txt`，两端切词必须逐字一致，改动词典/分词规则须同步两端并跑 `tests/hdk-segment.test.mjs` 一致性测试）；`dict/dict.txt` 是语料贴合自建词典（默认词典∩语料命中词 + `userdict.txt` + `curated.txt` 人工确认词，约 2.5 万词），由 `hdk/dict/build_dict.py` 生成——加词改 `userdict.txt`/`curated.txt` 后重跑生成，勿手改 dict.txt（流程见 `hdk/dict/README.md`）；`dict.txt`/`stopwords.txt` 变更由 `meta.dict_hash` 签名变化自动触发全量重建（已索引词元按旧词典切分，增量只重切变更文件，不重建会静默漏匹配）；重建以旧库改名 `.old` 原子替换，Windows 下旧库被常驻查询服务持有句柄时替换失败，此时保留完整 tmp、记 `meta.rebuild_failed`（含词典签名），查询继续用旧库，后续 tmp 匹配即直接替换（服务重启/句柄释放后自动完成迁移，签名已变则重新构建）；查询分层降级：全词元 AND → 去单字噪声词元 AND → 缺一个词元 → 整词替换为 `cut_for_search` 子词 OR 兜底，标题/摘要从 Markdown 原文渲染；`mcp_server.py` 的检索 `limit` 钳制到 `[1,100]`，文档路径解析不得逃出语料根。
- 鸿蒙仓颉（`harmonyos-cangjie`）依赖已登录 QQ 浏览器且只能串行，不可改为并发。
- 新增爬虫或改依赖时同步 `requirements.txt`（当前显式固定 `mcp==2.0.0`、`jieba==0.42.1`，`crawl_cj` 还需 `beautifulsoup4`+`markdownify`，`crawl_cangjie` 还需 `html2text`）。

## Git 工作流

本目录属于 `D:/Harmony` Monorepo，不能单独提交或推送。HDK 改动与受影响工具、文档和测试作为一个
根仓变更处理；只有用户明确要求时才提交或推送。生成的索引、日志和用户数据不入库；本机路径、签名与
相关设置遵循根 `AGENTS.md` 的用户硬约束。
