#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Autonomous concurrent crawler for the HarmonyOS Developer Knowledge MCP (HTTP).

- Initializes MCP streamable-HTTP sessions (no auth needed for this endpoint).
- Discovers document IDs via BFS over in-page links + broad search queries.
- Fetches full documents with 6 worker threads (getDocumentsById, batches of 10)
  and saves each as markdown under harmonyos_docs/<category>/<name>.md.
- State persisted to crawl_state.json so it can be resumed; safety caps bound runtime.
"""
import hashlib
import json
import os
import re
import sys
import time
import threading
import queue
import urllib.request
import urllib.error
from http.cookiejar import CookieJar
from urllib.parse import unquote

import hdk_io              # 原子写 + 瞬时锁退避（状态/语料落盘统一走它）

# Per-call hard wall-clock timeout via a standalone daemon thread + join(timeout).
# We deliberately do NOT use a fixed-size shared executor: an abandoned request
# would otherwise occupy a pool thread and a full pool makes submit() block with
# no timeout -> deadlock. A daemon thread just dies on its own (socket timeout) and
# never blocks process exit.
HTTP_TIMEOUT = 30          # socket-level timeout for the actual request
CALL_TIMEOUT = 40         # hard wall-clock deadline per MCP call

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "harmonyos_docs")
STATE = os.path.join(HERE, "crawl_state.json")
MCP_URL = "https://connect-api.cloud.huawei.com/api/developerknowledge/mcp"
BASE = "https://developer.huawei.com/consumer/cn/doc/"
LINK_RE = re.compile(r"https?://developer\.huawei\.com/consumer/cn/doc/([^\s\"')\]|>]+)")

NWORK = 2                # lowered from 4: fewer concurrent connections -> far fewer wedged batches
MAXQ = 20                # smaller backpressure -> less in-flight buildup that can wedge workers
NSEARCH = 2              # 搜索发现并发度（搜索线程各自持有独立 MCP 会话）
STALL_SECS = 900         # allow slow batches much more time before giving up (was hard-coded 180)
MAX_FETCHED = 500000     # safety cap on number of docs written (足够大，正常情况下不会触及)
MAX_DISCOVERED = 120000   # safety cap on discovered ID set size（官方目录清单 ~4 万，需留足余量）

QUERIES = [
    "HarmonyOS", "ArkTS", "ArkUI", "ArkCompiler", "Stage模型", "FA模型",
    "UIAbility", "ExtensionAbility", "AbilityStage", "UIExtensionAbility",
    "元服务 原子化服务", "服务卡片 Form Kit", "Want", "WindowStage",
    "分布式 跨设备", "分布式数据管理", "分布式文件系统", "DeviceManager",
    "AbilityContext", "Context", "应用模型", "应用包结构 HAP",
    "ArkData", "关系型数据库 RDB", "键值存储 KV", "偏好数据库", "DataAbility",
    "ArkWeb", "Web组件", "HTTP请求", "Remote Communication Kit", "WebSocket",
    "Socket", "网络管理 Network Kit", "WiFi", "蓝牙", "NFC", "近场通信",
    "媒体 Media Kit", "AVPlayer", "AVRecorder", "AudioRenderer", "AudioCapturer",
    "AVSession", "音视频", "相机 Camera Kit", "图像 Image Kit", "扫码",
    "图形 ArkGraphics 2D", "XComponent", "绘制 Canvas", "图形加速 Graphics Accelerate",
    "动画", "布局", "组件", "状态管理", "装饰器", "渲染控制", "自定义组件",
    "通知 Notification Kit", "Push Kit", "后台任务 Background Tasks Kit",
    "Work Scheduler", "代理提醒", "定时任务", "长时任务", "延迟任务",
    "安全管理 权限", "AccessToken", "访问控制", "应用权限", "隐私",
    "MDM Kit", "企业设备", "数据防泄漏", "Device Security", "加密",
    "生物识别", "用户认证", "账号 Account Kit", "OAuth", "华为账号",
    "位置服务 Location Kit", "地图", "地理编码", "传感器 Sensor",
    "加速度", "方向传感器", "健康 Health Kit", "运动健康",
    "AI  arkts", "Intents Kit 意图框架", "CANN Kit", "Core AI", "机器学习",
    "自然语言", "语音识别", "图像识别", "二维码", "条形码",
    "输入法 IME Kit", "软键盘", "无障碍 Accessibility Kit", "语音播报",
    "全球化 国际化 Localization Kit", "多语言", "时区", "日历",
    "文件管理 Core File Kit", "文件选择器", "文件分享", "压缩", "归档",
    "IPC Kit 进程间通信", "RPC", "公共事件 CES", "EventHub",
    "通知增强 ANS", "剪贴板", "锁屏", "后台代理",
    "UI Design Kit", "UX设计", "设计指南", "HarmonyOS Symbol", "图标",
    "字体", "色彩", "动效设计", "交互规范", "信息架构",
    "游戏 Game Service Kit", "游戏开发", "3D图形", "OpenGL", "Vulkan",
    "应用上架", "AppGallery Connect", "AGC", "发布", "签名", "证书",
    "应用测试", "DevEco Studio", "Profiler", "性能调优", "功耗",
    "稳定性", "兼容性", "UX测试", "安全测试", "分布式测试",
    "版本说明 release notes", "API参考", "API变更", "废弃 API",
    "FAQ 常见问题", "最佳实践 best practice", "Codelabs", "示例 Sample",
    "故障排查", "调试 Debug", "日志 hilog", "断点", "性能分析",
    "NDK 开发", "Native API", "Node-API", "C++", "交叉编译", "ABI",
    "方舟运行时 ArkRuntime", "垃圾回收", "并发", "TaskPool", "Worker",
    "多线程", "异步", "Promise", "状态管理 V2", "LocalStorage", "AppStorage",
    "PersistentStorage", "Environment", "弹窗", "路由 Router", "Navigation",
    "Tabs", "List", "Grid", "Swiper", "Scroll", "Refresh", "WaterFlow",
    "嵌入式 元服务", "ASC", "EmbeddableUIAbility", "跨端迁移", "多端协同",
    "流转", "超级终端", "Cast+", "DV Kit", "碰一碰", "隔空传送",
    "实况窗", "LiveView", "胶囊", "桌面卡片", "锁屏卡片",
    "端云一体化", "云函数", "云数据库", "云存储", "认证", "Serverless",
    "应用链接 App Linking", "Deep Link", "Universal Link", "二维码分享",
    "小艺 智能体", "Agent", "MCP", "意图", "技能", "插件",
    "穿戴 Wearable", "智能穿戴", "手表", "智慧屏", "TV", "车机 Car",
    "PC 2in1", "平板 Tablet", "折叠屏", "悬浮窗", "自由窗口",
    "多窗口", "窗口管理", "悬浮窗 自由窗口", "画中画", "大图预览",
    "DFX", "HiTrace", "HiLog", "HiCollie", "FaultLogger", "崩溃",
    "Watchdog", "资源调度", "功耗优化", "内存优化", "启动优化", "流畅度",
]


class MCP:
    def __init__(self):
        self.cj = CookieJar()
        self.opener = urllib.request.build_opener(
            urllib.request.HTTPCookieProcessor(self.cj))
        self.session = None
        self._init()

    def _post(self, body):
        data = json.dumps(body).encode()
        headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
        if self.session:
            headers["Mcp-Session-Id"] = self.session

        box = {}

        def do():
            try:
                req = urllib.request.Request(MCP_URL, data=data, headers=headers, method="POST")
                r = self.opener.open(req, timeout=HTTP_TIMEOUT)
                self.session = r.headers.get("Mcp-Session-Id", self.session)
                raw = r.read()
                if not raw.strip():
                    box["val"] = None
                    return
                ct = r.headers.get("Content-Type", "")
                if "text/event-stream" in ct:
                    box["val"] = self._parse_sse(raw)
                else:
                    box["val"] = json.loads(raw.decode())
            except Exception as e:  # noqa
                box["err"] = e

        last = None
        for attempt in range(4):
            box.clear()
            th = threading.Thread(target=do, daemon=True)
            th.start()
            th.join(timeout=CALL_TIMEOUT)   # never blocks past CALL_TIMEOUT
            if th.is_alive():
                # wedged in the network layer; abandon the daemon thread
                last = TimeoutError("MCP call exceeded %ss" % CALL_TIMEOUT)
                time.sleep(1)
                continue
            if "err" in box:
                e = box["err"]
                if isinstance(e, urllib.error.HTTPError) and e.code == 429:
                    time.sleep(5 * (attempt + 1))
                    continue
                last = e
                time.sleep(2 * (attempt + 1))
                continue
            return box.get("val")
        if last:
            raise last
        return None

    @staticmethod
    def _parse_sse(raw):
        text = raw.decode(errors="replace")
        last = None
        for line in text.splitlines():
            if line.startswith("data:"):
                d = line[5:].strip()
                if d and d != "[DONE]":
                    try:
                        last = json.loads(d)
                    except Exception:
                        pass
        return last

    def _init(self):
        self._post({"jsonrpc": "2.0", "id": 1, "method": "initialize",
                    "params": {"protocolVersion": "2024-11-05", "capabilities": {},
                               "clientInfo": {"name": "crawler", "version": "1"}}})
        try:
            self._post({"jsonrpc": "2.0", "method": "notifications/initialized"})
        except Exception:
            pass

    def call_tool(self, name, args):
        return self._post({"jsonrpc": "2.0", "id": int(time.time() * 1000),
                           "method": "tools/call",
                           "params": {"name": name, "arguments": args}})


def load_state():
    if os.path.exists(STATE):
        with open(STATE, encoding="utf-8") as f:
            s = json.load(f)
        # 过滤历史状态里已入库的旧版快照，避免过滤规则上线后被断点续爬重新抓取
        s["discovered"] = [d for d in s.get("discovered", [])
                           if not is_version_snapshot(d)]
        s["fetched"] = [d for d in s.get("fetched", [])
                        if not is_version_snapshot(d)]
        s.setdefault("discovered", [])
        s.setdefault("fetched", [])
        s.setdefault("failed", [])
        return s
    return {"discovered": [], "fetched": [], "failed": []}


def save_state(disc, fetched, failed):
    hdk_io.atomic_write_json(
        STATE,
        {"discovered": sorted(disc),
         "fetched": sorted(fetched),
         "failed": sorted(failed)},
        ensure_ascii=False, separators=(",", ":"))


# --------------------------------------------------------------------------- #
# 运行锁：防止多个 crawl 进程（手动 run_full.py 与定时自动化）并发写同一个
# state 文件而互相覆盖，导致 discovered/fetched 被回退成陈旧数据。
# --------------------------------------------------------------------------- #
LOCK = os.path.join(HERE, "crawl.lock")
LOCK_MAX_AGE = 40 * 60  # 秒；超过此年龄的锁视为陈旧（来自崩溃的进程），直接接管


def _lock_owner_alive(pid_text):
    """Windows 上判断锁内 PID 对应的进程是否仍在运行。"""
    import subprocess
    pid = pid_text.strip()
    if not pid.isdigit():
        return False
    try:
        out = subprocess.run(
            ["tasklist", "/FI", f"PID eq {pid}", "/NH"],
            capture_output=True, text=True, timeout=8)
        return pid in out.stdout
    except Exception:
        return False  # 无法确认存活时按陈旧处理，避免锁永久卡死


def acquire_lock():
    now = time.time()
    if os.path.exists(LOCK):
        owner_alive = False
        try:
            with open(LOCK, encoding="utf-8") as f:
                owner_alive = _lock_owner_alive(f.read())
        except Exception:
            owner_alive = False
        try:
            age = now - os.path.getmtime(LOCK)
        except Exception:
            age = 0
        # 锁龄在窗口内且持有者进程仍存活 → 确有另一个 crawl 在运行；
        # 其余情况（持有者已退出 / 锁龄超限）一律视为陈旧锁，接管。
        if age < LOCK_MAX_AGE and owner_alive:
            print(f"[lock] 另一个 crawl 正在运行（pid={open(LOCK).read().strip()}，锁龄 {int(age)}s）；"
                  f"为避免覆盖状态文件，直接退出。", flush=True)
            sys.exit(0)
        print(f"[lock] 发现陈旧锁（pid={open(LOCK).read().strip()}，锁龄 {int(age)}s），接管。", flush=True)
    with open(LOCK, "w", encoding="utf-8") as f:
        f.write(str(os.getpid()))


def release_lock():
    try:
        os.remove(LOCK)
    except Exception:
        pass


# 华为文档站按 API 版本在线保留整套历史文档，URL 分类段形如 harmonyos-guides-V14。
# 这是同一篇文档的旧版快照（约占语料三分之一），对当前开发只有误导价值，
# 发现、抓取、状态继承一律丢弃，只保留现行版。
VERSIONED_CAT_RE = re.compile(r"-V\d+$")


def is_version_snapshot(name):
    """旧版快照判定：路径中任一段以 -V<数字> 结尾（如 harmonyos-guides-V14/xxx、
    development/HMSCore-Guides-V5/yyy）。华为旧版 URL 的分类段与 slug 段会成对
    携带版本后缀；全语料扫描确认现行文档没有任何段带该后缀，不会误杀。"""
    if not name:
        return False
    rel = name[len("document/cn/"):] if name.startswith("document/cn/") else name
    return any(VERSIONED_CAT_RE.search(seg) for seg in rel.split("/"))


def norm_docname(n):
    """规范化文档名：去掉 # 锚点与 ?query 查询串、末尾斜杠，统一加 document/cn/ 前缀；
    旧版快照（分类段带 -V<数字>）拒绝并返回 None。避免同一篇文档的不同链接形态
    （如带 ?catalogVersion=V13）被当成多个待抓取项。"""
    if not n:
        return None
    n = unquote(n).split("#")[0].split("?")[0].split("&")[0].strip().rstrip("/")
    if not n:
        return None
    if not n.startswith("document/cn/"):
        n = "document/cn/" + n
    if is_version_snapshot(n):
        return None
    return n


def to_parent(uri):
    if "developer.huawei.com/consumer/cn/doc/" in uri:
        m = LINK_RE.search(uri)
        if not m:
            return None
        path = m.group(1)
    elif uri.startswith(BASE):
        path = uri[len(BASE):]
    else:
        return None
    return norm_docname("document/cn/" + path)


def doc_relpath(name):
    """落盘用的 (分类, 文件名)；文件名取全名 sha1 哈希，避免不同文档路径映射到
    同一 <分类>/<文件名>.md 互相覆盖（旧命名用 '_'.join(parts[1:]) 存在碰撞）。"""
    rel = name[len("document/cn/"):] if name.startswith("document/cn/") else name
    parts = rel.split("/")
    cat = parts[0] if len(parts) > 1 else "_root"
    h = hashlib.sha1(name.encode("utf-8")).hexdigest()[:24]
    return cat, h + ".md"


def _frontmatter_value(value):
    """frontmatter 值清洗: 去掉换行等不可打印字符。

    frontmatter 是 `key: value` 行式格式, 值混入换行会截断记录, 导致磁盘文件的
    disk_hash(按解析出的 title+正文计算)与 API 的 doc_hash 永远对不上——该文档
    每轮增量都被误判为 updated 无限重写。标题/URI 是远端外部输入, 写入前必须清洗。
    """
    if value is None:
        return ""
    return "".join(ch for ch in str(value) if ch.isprintable()).strip()


def write_doc(item):
    name = item.get("name")
    if not name:
        return
    cat, fname = doc_relpath(name)
    d = os.path.join(OUT, cat)
    os.makedirs(d, exist_ok=True)
    text = (
        "---\n"
        f"name: {_frontmatter_value(name)}\n"
        f"title: {_frontmatter_value(item.get('title',''))}\n"
        f"uri: {_frontmatter_value(item.get('uri',''))}\n"
        "---\n\n"
        + (item.get("content", "") or "(empty)\n")
    )
    hdk_io.atomic_write_text(os.path.join(d, fname), text)


def main():
    acquire_lock()
    try:
        _run()
    finally:
        release_lock()


# 函数化入口: 与 crawl_cj.run 同款命名, 供 hdk.py 统一调度(本模块不解析 argv, 两者等价)。
run = main


def _run():
    os.makedirs(OUT, exist_ok=True)
    s = load_state()
    disc = set(s["discovered"])
    fetched = set(s["fetched"])
    failed = set(s.get("failed", []))

    seed_file = os.path.join(HERE, "seeds.json")
    if os.path.exists(seed_file):
        for p in json.load(open(seed_file, encoding="utf-8")):
            n = norm_docname(p)
            if n:
                disc.add(n)

    # 官方目录树清单是确定性的完整性基线：并入发现集后，清单里语料没有的
    # 文档会直接进入抓取队列，不再依赖概率性的关键词搜索兜底。
    import catalog
    # 防复活护栏: 已清理(purged)的同词干旧版变体不得经持久化发现集重返,
    # 否则与 purge_stale_variants 形成 抓<->删 反复横跳。
    purged = catalog.load_purged()
    if purged:
        dropped = len(disc & purged)
        disc -= purged
        if dropped:
            print(f"[catalog] 防复活过滤: 发现集剔除已清理旧版 {dropped} 篇",
                  flush=True)
    inv = {n for n in catalog.names() if not is_version_snapshot(n)}
    if inv:
        disc |= inv
        print(f"[catalog] 并入官方目录清单 {len(inv)} 篇 "
              f"(disc={len(disc)})", flush=True)

    qidx = 0
    lock = threading.Lock()
    local_mcp = threading.local()

    def get_mcp():
        if not hasattr(local_mcp, "mcp"):
            local_mcp.mcp = MCP()
        return local_mcp.mcp

    def maybe_search():
        """搜索一个关键词并吸收发现的文档 ID；线程安全（qidx 锁内步进）。

        由独立搜索线程并发调用（每线程一个 MCP 会话），发现瓶颈不再串行阻塞。
        """
        nonlocal qidx
        with lock:
            if qidx >= len(QUERIES):
                return False
            q = QUERIES[qidx]
            qidx += 1
        try:
            r = get_mcp().call_tool("searchDocuments",
                                    {"SearchDocumentsReq": {"query": q}})
            text = r["result"]["content"][0]["text"]
            data = json.loads(text)
            added = 0
            with lock:
                for it in data.get("resultList", []):
                    p = norm_docname(it.get("parent"))
                    if p and p not in disc and p not in purged                             and len(disc) < MAX_DISCOVERED:
                        disc.add(p)
                        added += 1
            if added:
                print(f"[search] '{q}' -> +{added} (disc={len(disc)})", flush=True)
            return added > 0
        except Exception as e:
            print(f"[search-err] '{q}': {e}", flush=True)
            return False

    def fetch_batch(batch):
        m = get_mcp()
        for attempt in range(4):
            try:
                r = m.call_tool("getDocumentsById",
                                {"GetDocumentsByIdRequest": {"names": batch}})
                text = r["result"]["content"][0]["text"]
                data = json.loads(text)
                # 响应结构守卫: 限流/降级时服务端可能返回 200 + 错误 JSON(无 resultList)。
                # 不校验就把"响应异常"当成"整批死链"永久拉黑, 语料会静默出现空洞。
                # 结构异常走重试路径, 4 次后按 transient 处理(下一轮再试, 不持久化)。
                if not isinstance(data, dict) or not isinstance(data.get("resultList"), list):
                    raise RuntimeError("API 响应缺少 resultList(可能被限流/降级): "
                                       + text[:200])
                returned = set()
                with lock:
                    for it in data["resultList"]:
                        name = it.get("name")
                        if not name:
                            continue
                        returned.add(name)
                        if name in purged:
                            # 最后闸门: 已清理旧版即使被链接 BFS/状态复活也不落盘,
                            # 且不计入 fetched(下一轮对账不会把它当作语料事实)。
                            continue
                        try:
                            write_doc(it)
                            fetched.add(name)
                        except Exception:
                            # 写盘失败：不计为已抓取，避免状态与实际文件不一致
                            failed.add(name)
                            continue
                        for mm in LINK_RE.finditer(it.get("content", "") or ""):
                            p = to_parent(mm.group(0))
                            if p and p not in disc and p not in purged                                     and len(disc) < MAX_DISCOVERED:
                                disc.add(p)
                    # 本批中 API 明确返回且不含的 name：文档不存在 / 已删除 / 别名，
                    # 永久不可抓取，记入 failed 以免反复重试、污染 fetched 计数。
                    # (仅当响应结构合法时才做此判定, 见上方守卫。)
                    for nm in batch:
                        if nm not in returned:
                            failed.add(nm)
                return
            except Exception as e:
                if attempt == 3:
                    with lock:
                        transient.update(batch)
                    print(f"[batch-err] {e}", flush=True)
                time.sleep(2 * (attempt + 1))

    in_flight = set()
    # 本轮内重试 4 次仍网络失败的批次：不再排队，但也不持久化拉黑，
    # 下一轮/下次运行照常重试；failed 只留给 API 明确不返回的真死链。
    transient = set()

    def worker():
        while True:
            batch = q.get()
            if batch is None:
                q.task_done()
                break
            fetch_batch(batch)
            with lock:
                in_flight.difference_update(batch)
            q.task_done()

    q = queue.Queue()
    workers = [threading.Thread(target=worker, daemon=True) for _ in range(NWORK)]
    for w in workers:
        w.start()

    # 独立搜索线程：并发消费 QUERIES（发现瓶颈不再串行拖累抓取循环）。
    search_active = [NSEARCH]

    def search_worker():
        while True:
            with lock:
                if qidx >= len(QUERIES):
                    break
            maybe_search()
            time.sleep(0.1)   # 轻微背压，避免瞬时打满服务端搜索接口
        with lock:
            search_active[0] -= 1

    search_threads = [threading.Thread(target=search_worker, daemon=True)
                      for _ in range(NSEARCH)]
    for t in search_threads:
        t.start()

    with lock:
        save_state(disc, fetched, failed)
    print(f"[start] disc={len(disc)} fetched={len(fetched)}", flush=True)

    last_save = time.time()
    last_print = time.time()
    last_fetch = len(fetched)
    last_fetch_time = time.time()
    while True:
        with lock:
            if len(fetched) >= MAX_FETCHED:
                print("[cap reached]", flush=True)
                break
        room = MAXQ - q.qsize()
        if room <= 0:
            time.sleep(0.05)
            continue
        # pending 只在有队列空间时重建，q 满时空转不再做 O(discovered) 集合差
        with lock:
            pending = [p for p in disc if p not in fetched and p not in failed
                       and p not in transient and p not in in_flight]
        if not pending:
            if search_active[0] == 0 and q.qsize() == 0:
                q.join()
                break
            time.sleep(0.05)
            continue
        take = pending[:room * 20]
        with lock:
            in_flight.update(take)
        for i in range(0, len(take), 10):
            q.put(take[i:i + 10])
        now = time.time()
        with lock:
            cur = len(fetched)
        if cur != last_fetch:
            last_fetch = cur
            last_fetch_time = now
        elif now - last_fetch_time > STALL_SECS:
            print(f"[STALL] no new docs for {STALL_SECS}s (fetched={cur}); stopping.",
                  flush=True)
            break
        if now - last_save > 60:   # 状态落盘降频 + 紧凑格式，减小写放大
            with lock:
                save_state(disc, fetched, failed)
            last_save = now
        if now - last_print > 15:
            with lock:
                print(f"[progress] disc={len(disc)} fetched={len(fetched)} "
                      f"pending={len(disc)-len(fetched)-len(failed)-len(in_flight)} "
                      f"inflight={len(in_flight)} q={q.qsize()}", flush=True)
            last_print = now
        time.sleep(0.02)

    for _ in workers:
        q.put(None)
    q.join()
    with lock:
        save_state(disc, fetched, failed)
        print(f"[DONE] disc={len(disc)} fetched={len(fetched)} failed={len(failed)}",
              flush=True)


if __name__ == "__main__":
    main()
