# HDK — HarmonyOS & 仓颉 离线文档知识库

把华为 **HarmonyOS** 与 **仓颉（Cangjie）** 开发者文档抓取为本地 Markdown，并建立
FTS5 全文索引，对外以 **MCP 服务** 提供检索能力。全部离线、不依赖外网。

## 语料目录

| 目录 | 内容 | 来源 |
|---|---|---|
| `harmonyos_docs/` | HarmonyOS 文档（约 2.6 万篇），含 `cangjie-*` 子目录的**鸿蒙仓颉开发文档**（guides/references/practices/faqs/releases） | 华为云 HarmonyOS Developer Knowledge MCP（免登录） + QQ 浏览器登录态（仓颉开发文档需登录） |
| `cangjie_docs/` | 仓颉**语言**官方文档（dev-guide / libs / tools / release-notes） | `cj-docs.gitcode.com` 静态站 |

## 统一入口 `hdk.py`

所有爬取 / 增量 / 索引 / 服务都通过这一个 CLI 调度，不要直接跑各爬虫模块。

```bash
# 爬取（默认多轮驱动直到无新增；完成后自动增量更新索引）
python hdk.py crawl --target harmonyos          # HarmonyOS 文档（免登录）
python hdk.py crawl --target harmonyos-cangjie  # 鸿蒙仓颉开发文档（需 QQ 浏览器登录态）
python hdk.py crawl --target cangjie            # 仓颉语言文档
python hdk.py crawl --target all                # 三者都跑

# 增量更新（发现新发布 / 重查修改 / 软删除已下线的文档）
python hdk.py incremental

# 索引（默认增量；--full 全量重建）
python hdk.py index --root harmonyos --full
python hdk.py index --root cangjie
python hdk.py index --root all

# MCP 服务（stdio，供 MCP 客户端拉起）
python hdk.py serve            # 等价于 python mcp_server.py

# 维护
python hdk.py stats            # 语料与索引统计
python hdk.py manifest         # 生成各语料 manifest.json / README.md
python hdk.py catalog build    # 枚举官方目录树，写 catalog_inventory.json（确定性完整性基线）
python hdk.py catalog diff     # 清单 vs 磁盘语料双向对账（漏抓/多余）
python hdk.py catalog purge-stale [--dry-run]  # 同词干新旧两版并存时软删除旧版（记录到 catalog_purged.json）
python hdk.py state rebuild    # 以磁盘为准重建 crawl_state.json
```

> 注：`harmonyos-cangjie` 依赖已登录的 QQ 浏览器承载会话（HttpOnly cookie 纯
> Python 读不到），且同一时刻只能串行抓取。

## 发现机制：目录清单为准，搜索兜底

华为知识 MCP 端点只有 `searchDocuments`/`getDocumentsById` 两个工具，没有目录能力，
关键词搜索是概率性发现（实测仅覆盖官方文档 ~46%，FAQ/参考类长尾几乎全漏）。文档站
前端的目录树接口 `POST …/community/servlet/consumer/cn/documentPortal/getCatalogTree`
匿名可达（仅 `cangjie-practices`/`cangjie-references` 等受限分类需登录，由浏览器路
覆盖），`catalog.py` 逐分类枚举整棵树，叶子/中间节点 `relateDocument` 即文档 slug。

- `crawl.py` 把官方清单并入发现集：清单里有、语料没有的文档直接进抓取队列；
- `incremental.py` 用清单做确定性新增/删除检测（删除候选仍经 API 二次确认）；
- 关键词搜索 + 正文链接 BFS 降级为兜底（清单外的历史别名文档仍靠它收回）；
- 日常运维：每周（或大版本前）重跑 `catalog build` 刷新清单，再 `catalog diff` 对账。

## 爬虫模块（被 `hdk.py` 调度的可复用模块）

- `crawl.py` — HarmonyOS 文档（华为云 MCP 接口，免登录，多线程并发，发现集并入官方目录清单）
- `crawl_cj.py` — 仓颉语言文档（静态站，断点续爬）
- `crawl_cangjie.py` — 鸿蒙仓颉开发文档（浏览器鉴权抓取 + Python 编排落盘）
- `catalog.py` — 官方目录树清单（匿名 getCatalogTree 枚举，确定性完整性基线）
- `incremental.py` — HarmonyOS 增量更新器（目录 diff + 新/改/删检测）

## 索引 `indexer.py`

- 每个语料根独立建索引：`.mcp_cache/<root>_docs.fts5.db`
  - `harmonyos` → `harmonyos_docs`（仓颉开发文档因位于此目录下，自动归入本索引）
  - `cangjie`  → `cangjie_docs`（relpath 统一加 `cangjie/` 前缀，避免与鸿蒙分类重名）
- 使用 jieba **词元索引**（schema tokenizer=3）：单张 FTS5 `unicode61` 表，索引端
  `cut_for_search(HMM=False)` + 驼峰/数字边界拆词 + 停用词/符号过滤；查询端（Node
  `@node-rs/jieba` 与本仓库 `mcp_server.py`）加载同一份 `dict/dict.txt`（含用户词典）
  与 `dict/stopwords.txt`，精确 `cut(HMM=False)`，两端切词逐字一致（回归测试
  `tests/hdk-segment.test.mjs` 锁定）。中文 2 字词/术语整词匹配，英文支持驼峰拆词
  （如查询 `String` 命中 `getStringSync` 文档）。检索先做全词元 AND，不足时允许缺
  一个词元；结果使用 BM25 与原始标题加权，标题和摘要从 Markdown 原文渲染。
- 增量更新：库内 `docmap` 记录 `relpath→(行id, 大小, 修改时间)`，每次仅对
  新增/变更/删除的文档做行级增删改，**不整库重建**；分词方案/词典版本变更
  （`SCHEMA_TOKENIZER` 递增）时自动全量重建一次。

## MCP 服务 `mcp_server.py`

已在 `~/.workbuddy/mcp.json` 注册为 `HDK`（stdio，由 WorkBuddy 自带 Python 拉起 `mcp_server.py`）。项目本地 `.venv`（`D:\Project\GodfreyHub\hdk\.venv`，由 `requirements.txt` 重建）是开发与命令行运行环境，不参与 MCP 注册。提供工具：

- `search_documents(query, limit, category)` — 全文检索，返回高亮摘要
- `get_document(doc_id)` — 按 id 取完整 Markdown 正文
- `list_categories()` — 列出所有分类及文档数
- `searchDocuments` / `getDocumentsById` — 与华为云官方 MCP 同名的兼容接口

启动后会在首次检索时按需执行增量索引（确保覆盖最新落盘的文档）。

## 运行环境与 MCP 入口约定

```bash
python -m venv .venv                              # 首次：建项目本地虚拟环境
.venv\Scripts\python.exe -m pip install -r requirements.txt
.venv\Scripts\python.exe mcp_server.py           # 对外 MCP 入口（stdio）
```

- **对外入口**：`mcp_server.py`（stdio）。`hdk.py serve` 是其等价包装（复用同一个 `mcp` server 对象与 logger），二者对外行为一致；外部客户端统一连 `mcp_server.py`。
- **运行环境**：开发与命令行使用项目本地 `.venv`（`D:\Project\GodfreyHub\hdk\.venv`，由 `requirements.txt` 重建）；当前 WorkBuddy 的 MCP 注册（`~/.workbuddy/mcp.json` 中 `HDK` 条目）使用其自带 Python（`~/.workbuddy/binaries/python/envs/default`）拉起 `mcp_server.py`，两者均需安装 `requirements.txt` 中的依赖。
- **日志通道**：服务日志经 `logging` 写到 **stderr**（`mcp_server.py` 启动即 `basicConfig(stream=sys.stderr)`）；**stdout 专用于 MCP 协议帧**，禁止向 stdout `print` 任何内容（`hdk.py serve` 的启动日志同样走 stderr，无独立日志文件）。

WorkBuddy 已注册 `HDK`（服务名见 `~/.workbuddy/mcp.json`），使用 MCP Python SDK 2.0.0 和本地 stdio 服务。

## 规则入口

- [Agent 规则](AGENTS.md)
- [项目文档索引](Docs/README.md)
- [工程体系](Docs/ENGINEERING_SYSTEM.md)（含版本控制边界与本地产物出口）
- [质量体系](Docs/QUALITY_SYSTEM.md)
- [贡献规则](CONTRIBUTING.md)
