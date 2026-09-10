# Contributing

## 开始前

- 本仓库是工具型项目（构建 HarmonyOS / 仓颉离线文档知识库并对外提供 HDK MCP），所有爬取/索引/服务都通过 `hdk.py` 调度。
- 先阅读 `Docs/README.md` 和受影响体系文档，不阅读或追加历史流水账。
- 文档正文、抓取 URL、API 字段通过仓库内已落盘的语料与 `indexer.py` 查询，不把外网文档内容或 API 手册写入仓库。
- 改动涉及模块边界、外部抓取源或限速/锁/索引不变量时，先读 `Docs/ENGINEERING_SYSTEM.md`。

## 文件放置

- 可复用爬取 / 索引 / 服务模块：仓库根目录（由 `hdk.py` 调度）。
- 当前有效的长期说明：`Docs/`。
- 本地 Markdown 语料：`harmonyos_docs/`、`cangjie_docs/`（属于版本控制内的长期资产）。
- 断点续跑状态：`crawl_state.json` / `crawl_cj_state.json` / `cangjie_crawl_state.json`（提交，勿忽略）。
- 检索索引：`.mcp_cache/*.fts5.db`（生成物，忽略，可重建）。
- 抓取日志、临时草稿、诊断：任务结束后删除，不要入库。

不要在子系统根目录或语料目录放临时脚本、日志、数据库副本或任务报告；运行现场统一进入
`D:/Harmony/Workspace/`。

## 必要检查

在仓库根目录运行：

```bash
# 安装依赖（注意：crawl_cj 还需 beautifulsoup4 + markdownify，crawl_cangjie 还需 html2text）
python -m pip install -r requirements.txt

# 运行测试
python -m unittest discover -s tests
```

风险较高的改动还需：

```bash
# 爬虫/状态机改动：用 --limit 冒烟跑
python hdk.py crawl --target cangjie --limit 20

# 索引/服务改动：确认服务启动且检索正常
python hdk.py serve   # 另开会话验证 search_documents / get_document
```

Bug 修复必须增加回归测试或静态守卫。无法自动化的行为应给出最小复现步骤，不要把一次测试日志追加到文档。

## 变更标准

- 所有爬取/索引/服务经 `hdk.py` 调度，不要长期绕过它直接运行模块。
- 保持运行锁（`*.lock`）语义：不要让两个进程并发写同一 `*state.json`；新增爬虫须自带锁或复用现有锁。
- 请求必须带超时与退避，不引入会卡死线程池的无限等待；保持 `MAX_FETCHED` / `MAX_DISCOVERED` / `STALL_SECS` 等安全上限。
- 索引只做行级增量，不整库重建；旧 schema 必须能自动迁移。
- `mcp_server.py` 的检索 `limit` 始终钳制到 `[1,100]`，文档路径解析不得逃出语料根。
- 鸿蒙仓颉（`harmonyos-cangjie`）依赖已登录 QQ 浏览器且只能串行；不要改成并发。
- 提交前检查 `git status --short --ignored`，删除任务临时目录并确认索引/缓存未进入版本控制。
