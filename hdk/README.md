# HDK — HarmonyOS & 仓颉 离线文档知识库

把华为 **HarmonyOS** 与 **仓颉（Cangjie）** 开发者文档抓取为本地 Markdown，并建立
FTS5 全文索引，对外以 **MCP 服务** 提供检索能力。全部离线、不依赖外网。

## 语料目录

| 目录 | 内容 | 来源 |
|---|---|---|
| `harmonyos_docs/` | HarmonyOS 文档（约 2.6 万篇），含 `cangjie-*` 子目录的**鸿蒙仓颉开发文档**（guides/references/practices/faqs/releases） | 华为云 HarmonyOS Developer Knowledge MCP（免登录）+ 文档站 `documentPortal` 匿名正文接口（知识 MCP 不供给的文档）+ 内置浏览器已登录会话（仓颉开发文档需登录，经 cj_iab 桥） |
| `cangjie_docs/` | 仓颉**语言**官方文档（dev-guide / libs / tools / release-notes） | `cj-docs.gitcode.com` 静态站 |

## 统一入口 `hdk.py`

所有爬取 / 增量 / 索引 / 服务都通过这一个 CLI 调度，不要直接跑各爬虫模块。

```bash
# 爬取（默认多轮驱动直到无新增；完成后自动增量更新索引）
python hdk.py crawl --target harmonyos          # HarmonyOS 文档（免登录）
python hdk.py crawl --target harmonyos-cangjie  # 鸿蒙仓颉开发文档（需已登录内置浏览器 + node relay）
python hdk.py crawl --target cangjie            # 仓颉语言文档
python hdk.py crawl --target all                # 三者都跑

# 增量更新（发现新发布 / 重查修改 / 物理删除已下线的文档 / 门户补齐不供给文档）
python hdk.py incremental
python hdk.py incremental --skip-portal     # 只跑知识 MCP，不走门户补齐
python hdk.py incremental --portal-refresh  # 重查已入库的门户文档以检测变更

# 索引（默认增量；--full 全量重建）
python hdk.py index --root harmonyos --full
python hdk.py index --root cangjie
python hdk.py index --root all

# MCP 服务（stdio，供 MCP 客户端拉起）
python hdk.py serve            # 等价于 python mcp_server.py

# 维护
python hdk.py stats            # 语料与索引统计 + 基线新鲜度/未采分类/不可达读数
python hdk.py manifest         # 生成各语料 manifest.json / README.md
python hdk.py catalog build    # 枚举官方分类全集，写 catalog_inventory.json（完整性基线）
python hdk.py catalog diff     # 基线 vs 磁盘语料对账（漏抓拆成「知识 MCP 不供给」与真漏）
python hdk.py catalog dups     # 只读扫描逐字重复与同名多文件（不删文件）
python hdk.py catalog adopt X  # 把官方分类 X 纳入采集范围（随后 build + incremental）
python hdk.py state rebuild    # 以磁盘为准重建 crawl_state.json
```

> 注：`harmonyos-cangjie` 经 `cj_iab.py`（内置浏览器桥）在已登录华为开发者的浏览器标签页内
> 鉴权抓取（HttpOnly cookie 纯 Python 读不到），同一时刻只能串行抓取。运行前提：浏览器已登录
> 开发者账号，且 browser-use 控制通道的 node relay 在本机 127.0.0.1:8791 提供动作轮询。

## 发现机制：目录清单为准，搜索兜底

华为知识 MCP 端点只有 `searchDocuments`/`getDocumentsById` 两个工具，没有目录能力，
关键词搜索是概率性发现（实测仅覆盖官方文档 ~46%，FAQ/参考类长尾几乎全漏）。文档站
前端两个接口匿名可达：`getAllCatalog` 给出**官方分类全集**，`getCatalogTree` 逐分类
枚举整棵树，叶子/中间节点 `relateDocument` 即文档 slug；`catalog.py` 据此生成基线。

- **采集范围（scope）= `harmonyos_docs/` 下已存在的分类目录**；官方全集中不在范围内的
  分类写进清单的 `unadoptedCategories`（附篇数）上报，由 `catalog adopt <分类>` 显式纳入。
  旧实现用磁盘目录反推分类，基线只能确认已采过的东西：实测官方现役分类里有 98 个
  （约 1.37 万篇）因此结构性采不到。
- **落盘只写已采纳分类**（`crawl.in_scope`）：链接 BFS 与门户补齐碰到未采纳分类的文档时直接拒写，
  不让发现通路静默把语料扩到业主没批的分类上。
- `-V<数字>` 形态的历史快照分类与旧版文档快照一律丢弃，只保留现行版。
- `crawl.py` 把官方清单并入发现集：清单里有、语料没有的文档直接进抓取队列；
- `incremental.py` 用清单做确定性新增/删除检测（删除候选仍经 API 二次确认）；
- 关键词搜索 + 正文链接 BFS 降级为兜底（清单外的历史别名文档仍靠它收回）；
- **清单必须每周（或大版本前）重跑 `catalog build`**：`crawl`/`incremental`/`stats` 开头都会
  报清单年龄，超过 7 天直接打提醒（实测：14 天旧清单让官方新上的一整套星闪 NearLink
  文档一直没入库）；刷新后再 `catalog diff` 对账。
- 两条供给路互补：知识 MCP 能批量返回但只覆盖自己索引里的文档（实测新采纳的 3 个分类
  20/20 不供给）；`portal.py` 走文档站前端的 `documentPortal/getDocumentById`（匿名、单篇、
  实测可取率 81/84）把不供给的文档补齐，落盘带 `source: portal` 标量。
- 门户文档**不进知识 MCP 重查队列**（否则永远不返回会被当成官方已删除而误删）；它们的
  判删确认走门户自己，任何传输/业务码不确定一律保留。两条路都明确无正文的（链接 BFS
  带回的别名/死链）停进 `portalAbsent`。
- 拿不到正文且已确认不供给的 name 记在 `incremental_state.json` 的 `unreachable` 里，不再
  每轮重问；**下次 `catalog build`（清单换代）自动释放 `unreachable`/`portalAbsent` 重试**。

## 爬虫模块（被 `hdk.py` 调度的可复用模块）

- `crawl.py` — HarmonyOS 文档（华为云 MCP 接口，免登录，多线程并发，发现集并入官方目录清单）
- `crawl_cj.py` — 仓颉语言文档（静态站，断点续爬）
- `crawl_cangjie.py` — 鸿蒙仓颉开发文档（浏览器鉴权抓取 + Python 编排落盘）
- `cj_iab.py` — 鸿蒙仓颉开发文档采集器（内置浏览器桥：本地 HTTP 桥 + 浏览器 evaluate，
  枚举/批量抓取/增量回查/判删/落盘单模块自包含；原 QwenWork 适配器通道已删除）
- `catalog.py` — 官方分类全集与目录树清单（完整性基线、对账分桶、只读重复扫描、分类 adopt）
- `portal.py` — 文档站匿名正文接口（`documentPortal/getDocumentById`）：知识 MCP 不供给的文档的补齐通路
- `incremental.py` — HarmonyOS 增量更新器（目录 diff + 新/改/删检测 + 不可达名单 + 门户补齐）

## 重复文档怎么处理

语料里存在重复（实测 harmonyos 语料 913 篇逐字副本 + 1 组同名多文件），它们来自两条不同通路：

- **官方按 Kit 复制同文模板**（如「开发后自检」在 12 个分类下各有一份）——内容相同但确实是
  不同文档名，删除会丢名字与链接可达性。因此**不在语料层删**，而由检索端按 `title+正文`
  内容指纹收敛：同一内容只占一个结果位（`src/core/hdk.ts` 与 `mcp_server.py` 两端同规则）。
- **两条抓取路撞同一命名空间**：`cangjie-*` 分类归浏览器路所有（按 `<分类>/<objectId>.md` 落盘），
  匿名路按 `sha1(name).md` 落盘会写出第二个文件。现在 `crawl.write_doc` 遇到 `cangjie-*` 直接拒写。

曾提供的 `catalog purge-stale`（同词干抹掉 `-000000NNN` 文档号就判旧版并物理删）**已整体删除**：
实测该判据把 Overview / FAQ / Class Summary 这类跨 Kit 通用页名当成同一篇的两版（最大一组 42 名
成员分属 42 个不同 API 包），1716 名所称“旧版”里只有 48 篇与保留版逐字相同，继续用会永久删掉
上千篇真实文档。`hdk.py catalog dups` 只报告不删除。

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

独立的 stdio MCP 服务，供外部 MCP 客户端直接拉起（GodfreyHub 主 MCP 已原生提供
`hdk_*` 检索工具，无需重复注册）。提供工具：

- `search_documents(query, limit, category)` — 全文检索，返回高亮摘要
- `get_document(doc_id)` — 按 id 取完整 Markdown 正文
- `list_categories()` — 列出所有分类及文档数
- `searchDocuments` / `getDocumentsById` — 与华为云官方 MCP 同名的兼容接口

启动后会在首次检索时按需执行增量索引（确保覆盖最新落盘的文档）。

## 运行环境与 MCP 入口约定

```bash
python -m pip install -r requirements.txt   # 安装依赖（mcp / jieba / 爬虫专用包）
python mcp_server.py                        # 独立 MCP 入口（stdio）
```

- **主消费路径**：GodfreyHub MCP 服务原生提供 `hdk_search_documents` / `hdk_get_document`
  等工具，Node 查询端（`@node-rs/jieba`）与 Python 索引端共用同一份 `dict/dict.txt` 与
  同一 FTS5 索引，直接随 GodfreyHub 使用，无需另行注册本服务的 `HDK`。
- **独立入口**：`mcp_server.py`（stdio）供外部 MCP 客户端直接拉起；`hdk.py serve` 是其
  等价包装（复用同一个 `mcp` server 对象与 logger），二者对外行为一致。
- **运行环境**：直接使用系统 Python（`python -m pip install -r requirements.txt`），不依赖
  任何固定虚拟环境路径。
- **日志通道**：服务日志经 `logging` 写到 **stderr**（`mcp_server.py` 启动即
  `basicConfig(stream=sys.stderr)`）；**stdout 专用于 MCP 协议帧**，禁止向 stdout `print`
  任何内容（`hdk.py serve` 的启动日志同样走 stderr，无独立日志文件）。

## 规则入口

- [仓库 Agent 规则](../AGENTS.md)（含「HDK 离线文档子系统」一节）
- [工程体系](Docs/ENGINEERING_SYSTEM.md)（含版本控制边界与本地产物出口）
- [质量体系](Docs/QUALITY_SYSTEM.md)
