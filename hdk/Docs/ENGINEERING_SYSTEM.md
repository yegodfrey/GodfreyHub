# 工程体系

本文维护 HDK 的长期边界与不变量。具体目录、常量与类型以根目录 `*.py` 当前代码为准。

## 生产边界

- HDK 是一个**工具型仓库**：把华为 HarmonyOS 与仓颉（Cangjie）开发者文档抓取为本地 Markdown，建立 FTS5 全文索引，并以 **MCP 服务**对外提供离线检索。它不是 HarmonyOS 应用。
- 所有爬取 / 增量 / 索引 / 服务都由统一入口 `hdk.py` 调度；各 `crawl*.py`、`incremental.py`、`indexer.py`、`generate_index.py`、`mcp_server.py` 是 `hdk.py` 调度的可复用模块，不要绕过 `hdk.py` 单独长期运行它们（一次性调试除外）。
- `harmonyos_docs/`（HarmonyOS 文档，含 `cangjie-*` 分类的鸿蒙仓颉开发文档）与 `cangjie_docs/`（仓颉语言官方文档）是爬取语料，属于版本控制内的长期资产（见下文「版本控制边界」）。

## 模块与职责

```text
hdk.py               统一 CLI：crawl / incremental / incremental-cj / incremental-cangjie / index / serve / stats / manifest / state
  ├─ crawl.py          HarmonyOS 文档：华为云 Developer Knowledge MCP（HTTP，免登录，并发）
  ├─ crawl_cj.py       仓颉语言文档：cj-docs.gitcode.com 静态站（BFS + markdownify，VER 可经 HDK_CJ_VER 覆盖）
  ├─ crawl_cangjie.py  鸿蒙仓颉开发文档：鉴权抓取的可复用模块（TREE_JS/DOC_JS/walk_tree/write_doc/状态）
  ├─ cj_iab.py         鸿蒙仓颉开发文档采集器（单模块自包含）：内置浏览器桥（本地 HTTP 桥 +
  │                     浏览器 evaluate）承载枚举/批量抓取/增量回查/判删；原 cj_mcp.py
  │                     （QwenWork MCP 适配器通道）已整体删除
  ├─ incremental.py    HarmonyOS 增量更新：新/改/删检测（删除即物理删除）
  ├─ incremental_cj.py 仓颉语言文档增量更新：重查 hash 比对 + 404 判删（物理删除）
  ├─ hdk_io.py         共享原子写（临时文件 + fsync + os.replace + 瞬时 OSError 退避），所有状态/语料落盘经它
  ├─ indexer.py        共享 FTS5 索引（全量 build_index + 增量 ensure_index）
  ├─ generate_index.py 各语料 manifest.json / README.md 索引生成
  └─ mcp_server.py     MCP 服务（stdio）：search_documents / get_document / list_categories（+ 兼容别名）
```

- `crawl.py`：`MCP` 类封装华为云 `connect-api.cloud.huawei.com/.../mcp` 的 streamable-HTTP 会话；通过搜索词 + 文档内链接 BFS 发现文档 ID，批量 `getDocumentsById` 落盘到 `harmonyos_docs/<category>/<sha1>.md`。状态在 `crawl_state.json`（`discovered`/`fetched`/`failed`）。
- `crawl_cj.py`：爬取 `https://cj-docs.gitcode.com/zh/<VER>/`（当前 `VER = "1.2.0"`，只镜像**最新非 beta 版本**，不留历史版本副本）的 VitePress 静态站，用 `BeautifulSoup` + `markdownify` 抽取 `<main class="vp-doc">` 转 Markdown，落盘到 `cangjie_docs/<section>/<sha1>.md`。状态在 `crawl_cj_state.json`。升版本时 `crawl_cj_state.json` 与 `incremental_cj_state.json` 必须一并删除再重爬：两者存的都是 `/zh/<旧ver>/...` 路径，前者非空会跳过种子展开（爬不到任何新页），后者会让 `incremental_cj` 回抓旧版本页面把已废弃语料复活回写进语料目录。落盘文件名是 `sha1(name)` 而 `name` 含版本号，故新旧版本文件天然不冲突——旧版本清理按 frontmatter `name: cj-docs/zh/<旧ver>/` 判定，删完再 `hdk.py manifest` + `hdk.py index --root cangjie`（行级增量自动 `-旧 +新`）。
- `crawl_cangjie.py`：鸿蒙仓颉开发文档的**可复用数据层**——语料常量（`CATALOGS`/`OUT`/`BASE_URL`）、`html2text` 配置 `H`、断点续跑状态 `load_state`/`save_state`（走 `hdk_io`）、运行锁 `acquire_lock`/`release_lock`（`cangjie_crawl.lock`）、`write_doc`（官方正文 HTML→Markdown，落盘到 `harmonyos_docs/<catalog>/<objectId>.md`）。原先的 QQ 浏览器（`qqbrowser-skill.exe`）与 QwenWork MCP 适配器两条鉴权传输路径均已整体删除；枚举/抓取/增量的浏览器传输与 delegate JS 全在 `cj_iab.py`。
- `cj_iab.py`：鸿蒙仓颉开发文档的当前唯一采集模块（编排 + 内置浏览器桥传输自包含）。回查指纹先归一化（抹掉 `HW-CC-Date/Expire/Sign` 与压缩空白）再 sha256，避免华为 CDN 签名图片 URL 与排版空白抖动造成“假修改”；判删以“重枚举的目录树中消失”为候选，单篇 `getDocumentById` 仅在明确空内容时确认，任何不确定一律保留；回查「指纹未变」须同时满足**磁盘文件存在**——状态先于语料入库曾导致 947 篇文档只有哈希没有文件（2026-09-21 发现并经存在性自愈恢复），缺失即视同需要重写。确认删除**直接物理删除**，不留副本（用户 2026-09-21 指令），状态 `deleted` 仅留名称与时间戳。
- `cj_iab.py`：当前唯一浏览器传输层（内置浏览器桥）。原 QwenWork MCP 适配器通道（`~/.qwenworkcn/mcp-adaptor.config`，本机不存在该配置）已被整体替代。机制：本地 HTTP 桥（`127.0.0.1:8791`）下发动作，浏览器控制通道的 node relay 长轮询取动作、在已登录华为开发者的标签页里 `evaluate` 执行并回传；delegate 仍须在**同源** `svc-drcn.developer.huawei.com` 上发**相对** fetch（`credentials:"include"`，CSRF 取自 `developer_userdata` cookie）。evaluate 有秒级预算且网络耗时不能跨调用等待 → 全部网络请求改「页面内踢 async 任务落 `window`、轮询收数」；evaluate 无 50KB 截断 → 整批 html 一次 `JSON.stringify` 拉回内存，落盘交 `crawl_cangjie.write_doc`。运行前提：浏览器已登录开发者账号 + node relay 在跑；子命令 `enumerate` / `fetch`（补新）/ `incremental`（补新 + 回查已改 + 判删）。
- `incremental.py`：复用 `crawl.py` 的 MCP/落盘函数与运行锁；对 HarmonyOS 语料做新发布发现、按 `title+content` 的 sha256 比对检测修改、对消失文档二次确认后**物理删除**（不留副本，用户 2026-09-21 指令）。状态在 `incremental_state.json`（`discovered`/`fetched`/`hashes`/`deleted`），首跑从 `crawl_state.json` 播种。
- `incremental_cj.py`：复用 `crawl_cj.py` 的网络层/落盘函数与运行锁（`crawl_cj.lock`）；对仓颉语料做新发布发现（重查已抓页面时解析链接，官方新增页面被引用即可发现）、按 `title+body` sha256 指纹比对检测修改、重查返回 404（对象存储静态托管无 SPA fallback，404 即确定下线）经二次确认后**物理删除**。状态在 `incremental_cj_state.json`（`discovered`/`fetched`/`hashes`/`deleted`/`failed`），首跑从 `crawl_cj_state.json` 播种。
- `indexer.py`：两个语料各自独立建库，库路径 `.mcp_cache/<root>_docs.fts5.db`（`ROOTS = {"harmonyos": harmonyos_docs, "cangjie": cangjie_docs}`）。仓颉语料 relpath 统一加 `cangjie/` 前缀避免与鸿蒙分类重名。分词方案（schema tokenizer=3）：**单张 `fts` unicode61 词元表**——索引端用 jieba `cut_for_search(HMM=False)` + 驼峰/数字边界拆词（保留原词）+ 停用词/符号/纯数字单字过滤，把 title/body 切为空格分隔词元后入库；查询端（Node `@node-rs/jieba` 与 `mcp_server.py`）加载同一份 `dict/dict.txt` 与 `dict/stopwords.txt`，精确 `cut(HMM=False)`，`cut_for_search` 输出 ⊇ `cut` 故查询词必在索引词元集合内。`dict/dict.txt` 是**语料贴合自建词典**（默认词典∩语料命中词 + userdict + curated 人工确认词，约 2.5 万词），由 `hdk/dict/build_dict.py` 生成，加词走 `userdict.txt`/`curated.txt` 后重跑，勿手改（见 `hdk/dict/README.md`）。检索分层降级：① 全词元 AND MATCH；② 不足时去掉单字噪声词元后重试 AND（长问句切出的"传/参"等）；③ 仍不足允许缺一个词元；④ 最后把含子词的整词替换为 `cut_for_search` 子词 OR 兜底（如"智慧屏"→"智慧"，子词必在索引词元集合内），再以 BM25 和原始标题加权排序；标题与摘要从 Markdown 原文渲染，不暴露索引词元文本。FTS tokenizer 建表时烧死，`SCHEMA_TOKENIZER` 不匹配即全量重建；`dict.txt`/`stopwords.txt` 变更（`meta.dict_hash` 签名变化）同样自动全量重建，避免已索引词元按旧词典切分、新词对存量文档静默漏匹配。重建以"旧库改名 `.old` → 新库就位 → 删 `.old`"原子替换；Windows 下旧库被常驻查询服务（只读连接）持有句柄时替换会失败，此时保留完整 tmp、在旧库 `meta.rebuild_failed` 记录失败原因与词典签名，查询继续用旧库不中断，后续检测 tmp 与当前词典匹配即直接替换（秒级，服务重启/句柄释放后自动完成迁移；签名已变则重新构建，避免误跳过）。其余表：`docmap`（relpath→rowid/size/mtime/category 增量基准，category 带索引）、`docnames`（name→relpath 反查索引）。
- `mcp_server.py`：MCP SDK 2.0.0 的 `MCPServer`，注册 `search_documents` / `get_document` / `list_categories` 以及同名的 `searchDocuments` / `getDocumentsById` 兼容接口。检索走单表词元 MATCH（中文词元 + 英文驼峰拆词，与索引端同一词典）；`get_document` 按 `docnames` 索引反查或 relpath 解析磁盘文件（带路径越界守卫）；`list_categories` 从 `docmap` 聚合。查询端统一分词在 `indexer.segment_text(search=False)`，与 Node 端 `src/core/hdk.ts` 的 `segmentQuery` 保持逐字一致（跨引擎一致性由 `tests/hdk-segment.test.mjs` 回归锁定）。

## 数据流

```text
外部文档源（华为云 MCP / cj-docs 静态站 / builtin_browser MCP 鉴权）
        │  crawl*.py / incremental*.py
        ▼
harmonyos_docs/  cangjie_docs/   （Markdown + frontmatter：name/title/uri/category）
        │  + *state.json（各爬虫/增量器的断点续跑状态）
        ▼
indexer.py  →  .mcp_cache/<root>_docs.fts5.db  （fts unicode61 词元表 + docmap/docnames）
        │
        ▼
mcp_server.py  →  MCP 客户端（HDK MCP 工具）
```

## 关键入口

- 爬取：`python hdk.py crawl --target harmonyos|harmonyos-cangjie|cangjie|all`（默认多轮驱动直到两轮无新增；完成后自动 `indexer.ensure_index`）。`harmonyos-cangjie` 经 `cj_iab`（内置浏览器桥）单次枚举+抓取补新，需已登录华为开发者账号 + node relay。
- 增量：`python hdk.py incremental [--no-recheck] [--skip-delete] [--limit N]`（HarmonyOS）；`python hdk.py incremental-cj [--no-recheck] [--skip-delete] [--limit N]`（仓颉语言，静态站 404 判删）；`python hdk.py incremental-cangjie [--skip-delete] [--limit N]`（鸿蒙仓颉开发，经浏览器 MCP：补新+回查已改+判删）。
- 索引：`python hdk.py index --root harmonyos|cangjie|all [--full]`。
- 服务：`python hdk.py serve`（等价于 `python mcp_server.py`）；仅建索引用 `python mcp_server.py build`。
- 维护：`python hdk.py stats` / `manifest` / `state rebuild`（以磁盘为准重建 `crawl_state.json`）。

## 依赖

- `requirements.txt` 固定全部运行依赖：`mcp==2.0.0`（MCP 服务与 SDK）、`jieba==0.42.1`（分词，索引端与查询端共用 `dict/dict.txt` 词典）、`beautifulsoup4` + `markdownify`（`crawl_cj.py`）、`html2text`（`crawl_cangjie.py`）。
- 运行环境直接使用系统 Python（`python -m pip install -r requirements.txt`），不依赖任何固定虚拟环境路径；外部 MCP 客户端可用任意装好依赖的 Python 拉起 `mcp_server.py`。
- 鸿蒙仓颉开发文档由 `cj_iab.py` 经内置浏览器桥（本地 HTTP 桥 + 浏览器控制通道的 node relay，已登录华为开发者账号的标签页内 evaluate）鉴权抓取；不再是 pip 依赖，也不依赖 QQ 浏览器、QwenWork MCP 适配器或 `builtin_browser`。`hdk_io.py` 仅用标准库，无新依赖。
- 新增爬虫或改依赖时须同步更新 `requirements.txt`。

## 外部服务 / API

- HarmonyOS 文档：华为云 HarmonyOS Developer Knowledge MCP（`connect-api.cloud.huawei.com`，免登录）。
- 仓颉语言文档：cj-docs.gitcode.com 静态站（免登录）。
- 鸿蒙仓颉开发文档：华为开发者站点，经 `builtin_browser` MCP 用已登录会话访问（同源 `svc-drcn.developer.huawei.com` 的 `/svc/.../delegate`）。
- 这些外部源均属于第三方站点的实时内容；项目不缓存其账号凭据，仅落盘公开文档正文。

## 安全与不变式

- **运行锁**：`crawl.py` / `incremental.py` 共用 `crawl.lock`，`crawl_cj.py` 用 `crawl_cj.lock`，`crawl_cangjie.py` 与 `cj_iab.py` 共用 `cangjie_crawl.lock`。锁内写入 PID，`acquire_lock()` 在锁龄小于 `LOCK_MAX_AGE`（40 分钟）且持有进程仍存活时直接退出，避免并发进程互相覆盖 `*state.json`；锁龄超限或持有者已退出视为陈旧锁并接管。
- **落盘原子性**：所有状态 JSON 与语料 `.md` 写入一律经 `hdk_io.atomic_write_json` / `atomic_write_text`（写唯一临时文件 → `fsync` → 原子 `os.replace`，对瞬时 `OSError` 退避重试）。因为 Windows 上杀软/索引器会抢在 truncate 前打开刚写完的多 MB 状态文件，令就地 `open(path,'w')` 偶发 `OSError(22, 'Invalid argument')`——一次抖动即可打断整轮长跑。
- **请求超时与防死锁**：每个 MCP / HTTP 调用用 daemon 线程 + `join(CALL_TIMEOUT)` 强制上限（crawl.py `HTTP_TIMEOUT=30`/`CALL_TIMEOUT=40`，crawl_cj.py `CALL_TIMEOUT=45`），避免线程池被卡死请求占满。
- **限速与退避**：crawl.py 遇 HTTP 429 时按 `5*(attempt+1)` 秒退避；crawl_cj.py 使用固定短睡眠（`time.sleep(0.05)`，crawl.py 主循环为 0.02）与 `2*(attempt+1)` 秒退避。
- **安全上限**：`MAX_FETCHED` / `MAX_DISCOVERED`（crawl.py 50万/4万，crawl_cj.py 20万/2万）与 `STALL_SECS`（crawl.py 900s，crawl_cj.py 600s）防止失控或卡死。
- **断点续跑**：crawl.py / crawl_cj.py 把 `discovered`/`fetched`/`failed` 周期落盘到对应 `*state.json`；`crawl_cangjie.py` 使用 `tree`/`fetched`/`failed`（`tree` 按目录表记录发现集），`cj_iab.py` 的增量再补 `hashes`/`deleted`；`incremental.py` / `incremental_cj.py` 的增量状态另存 `hashes` 基线（仓颉另存 `failed`），首跑均从磁盘现有文件计算指纹，不会造成全量重写。
- **删除即物理删除（用户 2026-09-21 指令）**：incremental / incremental_cj / catalog purge-stale 对已下线文档与旧版变体直接 `os.remove`，不留 `_deleted/` 持有区或任何副本（历史持有区已清空删除）；仅在各状态文件的 `deleted` 列表与 `catalog_purged.json` 留名称/时间戳审计记录，`names()`/索引据此防"抓↔删"反复横跳。
- **索引只做行级增量**：`indexer.py` 用 `docmap` 表记录 `relpath→(rowid,size,mtime,category)`，每次 `ensure_index()` 只 stat 对比、对新增/变更/删除文件做 FTS5 增删改（`docnames` 与主表 `fts` 同事务、同 rowid 同步），不整库重建。**FTS tokenizer 在建表时烧死**，分词方案变更（`SCHEMA_TOKENIZER` 递增）无法行级迁移，`ensure_index` 检测 `meta.tokenizer` 不匹配即自动全量重建一次（一次性的自动迁移）。`ensure_index(force=True)` 跳过 30s 节流，供爬虫/增量完成后主动触发。
- **服务侧边界**：`mcp_server.py` 把 `search_documents` 的 `limit` 钳制到 `[1,100]`；`_resolve_fp` 用 `os.path.commonpath` 校验路径不逃出语料根，阻止 `../` 越界读取。
- **stdio MCP 日志通道**：`mcp_server.py` 启动即 `logging.basicConfig(stream=sys.stderr)`，所有日志走 **stderr**；**stdout 专用于 MCP 协议帧**，任何 `print(...)` 到 stdout 都会破坏 stdio 握手。`hdk.py serve` 与 `mcp_server.py` 的模块日志（logger 名 `hdk-mcp`）统一经 stderr 输出，不产生日志文件。
- **鸿蒙仓颉串行约束**：`harmonyos-cangjie` 经 `cj_iab.py`（内置浏览器桥）在单个已登录标签内抓取，HttpOnly 会话 + 单标签决定了同一时刻只能串行；`hdk.py` 在多 target 模式下逐个串行执行，并与直连 `crawl_cangjie` 共用 `cangjie_crawl.lock` 互斥。

## 版本控制边界

判断标准不是扩展名，而是文件是否需要被下一位维护者从 Git 中稳定获得。

必须提交：

- 根目录生产源码 `*.py`（入口、爬虫、索引、服务）、`requirements.txt`、`seeds.json`。
- `harmonyos_docs/` 与 `cangjie_docs/` 下的本地 Markdown 语料（含 `manifest.json`、子目录 `README.md`）——这是本工具的**长期资产**，与索引区分开（索引可重建，语料是来源）。
- `crawl_state.json` / `crawl_cj_state.json` / `cangjie_crawl_state.json`（断点续跑状态，丢失会导致重新全量爬取）。`incremental_state.json` 在运行后生成，同样应提交。
- `Docs/` 中仍然有效的体系说明。

禁止提交：

- `.mcp_cache/` 下的 `*.fts5.db` 及其 `-wal`/`-shm`（约 857MB，可由 `hdk.py index` 重建）。
- `__pycache__/`、`.pyc`/`.pyo`。
- `*.lock`（运行锁，进程退出应释放）、`*.log`。
- `.vscode/`、`.idea/`、`.DS_Store`、`Thumbs.db`、`.workbuddy/`（本机/工具内部数据）。
- `.venv/`（项目本地虚拟环境，由 `requirements.txt` 重建，不入库）。

> 与多数爬虫不同：本仓库**故意把爬取语料和状态文件纳入版本控制**，因为语料是离线知识库的唯一来源、重建成本极高；只有可廉价重建的 FTS5 索引被忽略。新增大体积语料前先确认其属于长期资产，不要为了“临时查看”而提交一次性抓取结果。

## 本地产物出口

临时工作产物（截图、测试输出、诊断、一次性脚本）落点由调用方指定，不入版本库；本仓库不假定任何外部 Workspace 布局，也不维护第二个 Workspace。语料、索引等长期产物仍落在 `harmonyos_docs/`、`cangjie_docs/` 与 `.mcp_cache/`。任务收尾时确认新增文件归类正确（语料/状态应 committed，索引应 ignored）、生成物未进入根目录或 `Docs/`。

## 何时更新本文

只有模块边界、抓取/索引流程、外部源、或上述限速/锁/索引/路径守卫等安全不变量改变时更新。新增一个抓取关键词、修正一篇文档落盘或微调某常量通常不需要更新本文。
