#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""鸿蒙仓颉开发文档采集器（内置浏览器桥版）。

鉴权背景：仓颉开发文档需登录，token 在 HttpOnly cookie，纯 Python 取不到，只能在
已登录华为开发者的浏览器页面里 fetch(credentials:"include")。本机曾用 QwenWork
MCP 适配器代理 builtin_browser（~/.qwenworkcn/mcp-adaptor.config），该通道已随
适配器缺配置整体删除；现为**内置浏览器桥**：本地 HTTP 桥（127.0.0.1:8791）下发
动作，浏览器控制通道的 node relay 长轮询取动作、在已登录标签页里 evaluate 执行
并回传结果。运行前提：浏览器已登录开发者账号 + node relay 在跑。

页面侧协议（实测约束）：
  - 须在**同源** https://svc-drcn.developer.huawei.com 上跑**相对**
    fetch('/svc/.../delegate')（文档站该路径不存在；导航后立即 eval 会
    "Promise was collected"，须轮询 origin 就绪再干活）。
  - evaluate 有秒级预算，delegate 网络耗时必须留在页面内：全部请求改「页面内
    踢 async 任务落 window、轮询收数」，后台 async 不跨调用存活但 window 值持久。
  - evaluate 无截断：整批 html 一次 JSON.stringify 拉回本进程内存，再交
    crawl_cangjie.write_doc 转 Markdown 落盘。
  - 对瞬时抖动（EXECUTION_ERROR / 空轮询）重试。

用法（由 hdk.py crawl --target harmonyos-cangjie / incremental-cangjie 调度）：
  python cj_iab.py enumerate fetch [--limit=N]   # 枚举目录树 + 抓取补新
  python cj_iab.py incremental [--limit=N] [--skip-delete]  # 补新+回查已改+判删
判删以「重枚举的目录树中消失」为候选，单篇仅在明确返回空内容时确认（任何不确定
一律保留）；确认删除即**直接物理删除**，不留旧版本副本（用户 2026-09-21 指令），
仅在状态 `deleted` 里留名称与时间戳。
"""
import asyncio
import hashlib
import http.server
import json
import os
import re
import sys
import threading
import time

import crawl_cangjie as cj

API_ORIGIN = "https://svc-drcn.developer.huawei.com/"
DOC_ORIGIN = "https://developer.huawei.com/consumer/cn/doc/"
PORT = 8791
DOCS_PAGE = 200   # 目录树 flat docs 分片条数
BATCH = 20        # 每次浏览器批量 fetch 的文档数


# --- 内容指纹（增量回查用）：只比对正文 Markdown（去 front-matter），标题/uri 变动不算内容变更 #
_FM_RE = re.compile(r"^---\s*\n.*?\n---\s*\n(?:\n)?(.*)$", re.DOTALL)


def _sha(t):
    return hashlib.sha256(t.encode("utf-8")).hexdigest()


_VOL_RE = re.compile(r"HW-CC-(?:Date|Expire|Sign)=[0-9A-Za-z]+")
_WS_RE = re.compile(r"\s+")


def _normalize(t):
    # 1) 华为 CDN 签名图片 URL 每次请求带秒级 HW-CC-Date / 轮换 HW-CC-Sign，与正文无关；
    # 2) html2text/服务端会偶发产出不同的换行与行尾空格（纯排版噪声）。
    # 归一化这两类波动后再取指纹：只按“压缩空白后的文本内容”判是否真的改动，
    # 既不把含图/排版抖动误判为“已修改”，又能捕捉真正的文字/代码变更。
    t = _VOL_RE.sub("HW-CC-Volatile=REDACTED", t or "")
    return _WS_RE.sub(" ", t).strip()


def _md_hash(md):
    return _sha(_normalize(md or ""))


def _md_from_html(html):
    return cj.H.handle(html)


def _path_of(cat, oid):
    return os.path.join(cj.OUT, cat, oid + ".md")


def _body_of_file(path):
    try:
        txt = open(path, encoding="utf-8").read()
    except Exception:
        return None
    m = _FM_RE.match(txt)
    return m.group(1) if m else txt


def _disk_hash(name):
    cat, oid = name.split("/", 1)
    body = _body_of_file(_path_of(cat, oid))
    return _md_hash(body) if body is not None else None


# --- 本地 HTTP 桥：动作下发 / 结果回传 ------------------------------------- #
class _State:
    def __init__(self):
        self.cv = threading.Condition()
        self.action = None
        self.results = {}
        self.seq = 0


ST = _State()


class _Handler(http.server.BaseHTTPRequestHandler):
    def log_message(self, *a):
        pass

    def _json(self, obj, code=200):
        b = json.dumps(obj).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(b)))
        self.end_headers()
        self.wfile.write(b)

    def do_GET(self):
        if self.path != "/action":
            return self._json({"error": "not found"}, 404)
        with ST.cv:
            if ST.action is None:
                ST.cv.wait(timeout=75)
            if ST.action is None:
                return self._json({"idle": True})
            act = dict(ST.action)
        self._json(act)

    def do_POST(self):
        if self.path != "/result":
            return self._json({"error": "not found"}, 404)
        n = int(self.headers.get("Content-Length", 0) or 0)
        req = json.loads(self.rfile.read(n) or b"{}")
        with ST.cv:
            ST.results[int(req.get("id", -1))] = str(req.get("value", ""))
            ST.action = None
            ST.cv.notify_all()
        self._json({"ok": True})


def bridge_call(payload, timeout=170):
    """投递动作并阻塞等结果（阻塞的是 Bridge 事件循环线程，其上无并发任务）。"""
    with ST.cv:
        ST.seq += 1
        payload["id"] = ST.seq
        ST.action = payload
        ST.cv.notify_all()
        if not ST.cv.wait_for(lambda: payload["id"] in ST.results, timeout=timeout):
            ST.action = None
            return None
        return ST.results.pop(payload["id"])


def _serve():
    srv = http.server.ThreadingHTTPServer(("127.0.0.1", PORT), _Handler)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    return srv


class Bridge:
    """在独立线程跑事件循环，暴露同步 run()。"""

    def __init__(self):
        self.loop = asyncio.new_event_loop()
        threading.Thread(target=self.loop.run_forever, daemon=True).start()

    def run(self, coro, timeout=180):
        return asyncio.run_coroutine_threadsafe(coro, self.loop).result(timeout)

    def stop(self):
        self.loop.call_soon_threadsafe(self.loop.stop)


# --- 页面侧 delegate JS ---------------------------------------------------- #
# 不含 return 的头（在 async IIFE 内）：csrf + X-HD-DATE + delegate POST 封装
_HEAD_BODY = (
    "const cookie=document.cookie;let csrf=null;const mm=cookie.match(/developer_userdata=([^;]+)/);"
    "if(mm){try{csrf=JSON.parse(decodeURIComponent(mm[1])).csrftoken}catch(e){}}"
    "if(!csrf){const m2=cookie.match(/X-HD-CSRF=([^;]+)/i);if(m2)csrf=m2[1];}"
    "function nn(){const d=new Date();const p=n=>String(n).padStart(2,'0');return d.getUTCFullYear()+p(d.getUTCMonth()+1)+p(d.getUTCDate())+'T'+p(d.getUTCMinutes())+p(d.getUTCHours())+p(d.getUTCSeconds())+'Z';}"
    "async function dg(svc,o){const b={svc:svc,reqType:1,reqJson:JSON.stringify(o)};"
    "const r=await fetch('/svc/community/common/v1/delegate',{method:'POST',credentials:'include',headers:{'Content-Type':'application/json;charset=UTF-8','X-HD-DATE':nn(),'X-HD-SERIALNO':String(Math.floor(Math.random()*1e7)),'X-HD-CSRF':csrf||''},body:JSON.stringify(b)});"
    "return await r.json();}"
)

# 目录树扁平化：relateDocument 即文档 slug
_FLAT_FN = (
    "function walk(ns,path,out){for(const n of (ns||[])){if(!n||typeof n!=='object')continue;"
    "const nm=n.nodeName||'';const kids=n.children||n.childList||n.catalogTreeList||[];"
    "const sub=nm?path.concat([nm]):path;const rel=n.relateDocument;"
    "if(rel){out.push({objectId:rel,title:(n.title||nm||rel),nodePath:sub.filter(Boolean).join(' / ')});}"
    "if(Array.isArray(kids)&&kids.length)walk(kids,sub,out);}}"
)


def _wrap(body):
    return "(async()=>{" + _HEAD_BODY + body + "})()"


class CjIab:
    def __init__(self):
        self.bx = None
        self._cache = []
        self._srv = _serve()

    # --- 传输原语：经本地桥驱动浏览器标签页 -------------------------------- #
    async def _goto(self, url):
        bridge_call({"kind": "goto", "url": url}, timeout=90)

    async def _js(self, text, tries=6, good=None):
        last = None
        for _ in range(tries):
            v = bridge_call({"kind": "js", "text": text})
            if v is None:
                v = "EXECUTION_ERROR: bridge timeout"
            last = v
            if v and "EXECUTION_ERROR" not in v:
                if good is None or good(v):
                    return v
            await asyncio.sleep(1.2)
        return last

    # --- 探活：delegate POST 踢进页面内，轮询状态码 ------------------------ #
    async def ensure_origin(self):
        await self._goto(API_ORIGIN)
        for _ in range(8):
            await asyncio.sleep(1.5)
            v = await self._js("location.origin", tries=2)
            if v and "svc-drcn" in v:
                await self._js(_wrap(
                    "window.__probe=null;"
                    "window.__pp=fetch('/svc/community/common/v1/delegate',{method:'POST',credentials:'include',"
                    "headers:{'Content-Type':'application/json;charset=UTF-8','X-HD-DATE':nn(),'X-HD-CSRF':csrf||''},body:'{}'})"
                    ".then(r=>String(r.status)).catch(e=>'E').then(x=>{window.__probe=x;});"
                    "return 'KICKED';"), tries=2)
                for _ in range(30):
                    await asyncio.sleep(0.5)
                    r = await self._js("String(window.__probe)", tries=1,
                                       good=lambda x: x is not None and "null" not in x)
                    if r and re.search(r"\d{3}", r):
                        cj.log("[origin] ready", v, "probe:", r.strip())
                        return True
        raise RuntimeError("API origin not ready（检查 node relay 与登录会话）")

    # --- 枚举：踢 getCatalogTree → 轮询条数 → 分片取回 --------------------- #
    async def enumerate_catalog(self, catalog):
        await self._js(_wrap(_FLAT_FN +
            "window.__cjdocs=null;"
            "window.__cjp=(async()=>{"
            "const b=await dg('/partnerDocumentService/v1/developer/getCatalogTree',{language:'cn',catalogName:%s});"
            "let bi;try{bi=JSON.parse(b.resJson)}catch(e){window.__cjdocs=[];return 'PARSEERR'}"
            "const tree=(bi.value&&bi.value.catalogTreeList)||[];const out=[];walk(tree,[],out);"
            "const seen={};const dd=[];for(const d of out){if(!seen[d.objectId]){seen[d.objectId]=1;dd.push(d);}}"
            "window.__cjdocs=dd;return dd.length;})();return 'KICKED';" % json.dumps(catalog)), tries=3)
        n = None
        for _ in range(60):
            await asyncio.sleep(1.0)
            v = await self._js("window.__cjdocs===null||window.__cjdocs===undefined?'':String(window.__cjdocs.length)",
                               tries=1, good=lambda x: bool(x and x.strip()))
            if v and v.strip().isdigit():
                n = int(v.strip())
                break
        if n is None:
            cj.log("[enum] %s bad count" % catalog)
            return []
        docs = []
        off = 0
        while off < n:
            chunk = await self._js("JSON.stringify(window.__cjdocs.slice(%d,%d))" % (off, off + DOCS_PAGE),
                                   good=lambda v: v and v.strip().startswith("["))
            try:
                part = json.loads(chunk)
            except Exception:
                cj.log("[enum] %s page parse fail at %d" % (catalog, off))
                break
            if not part:
                break
            docs.extend(part)
            off += DOCS_PAGE
        cj.log("[enum] %s: %d docs (expect %d)" % (catalog, len(docs), n))
        return docs

    # --- 抓取：踢批量 getDocumentById → 轮询 → 整批一次拉回内存 ------------ #
    async def store_batch(self, catalog, metas):
        ids = [m["objectId"] for m in metas]
        await self._js(_wrap(
            "window.__cjres=null;"
            "window.__cjp=(async()=>{const ids=%s;"
            "const res=await Promise.all(ids.map(async oid=>{try{"
            "const b=await dg('/partnerDocumentService/v1/developer/getDocumentById',{language:'cn',objectId:oid});"
            "const bi=JSON.parse(b.resJson);const v=bi.value||{};const html=(v.content&&v.content.content)||'';"
            "return {objectId:oid,total:html.length,html:html};}catch(e){return {objectId:oid,total:0,err:String(e)};}}));"
            "window.__cjres=res;return res.length;})();return 'KICKED';" % json.dumps(ids)), tries=3)
        for _ in range(120):
            await asyncio.sleep(0.5)
            v = await self._js("window.__cjres===null||window.__cjres===undefined?'':String(window.__cjres.length)",
                               tries=1, good=lambda x: bool(x and x.strip()))
            if v and v.strip().isdigit():
                break
        else:
            return None
        raw = await self._js("JSON.stringify(window.__cjres)",
                             good=lambda x: x and x.strip().startswith("["))
        try:
            self._cache = json.loads(raw)
            return len(self._cache)
        except Exception:
            cj.log("[fetch] batch pull/parse fail")
            return None

    async def get_html(self, idx):
        try:
            return self._cache[idx].get("html", "")
        except Exception:
            return ""

    # --- 顶层流程 ----------------------------------------------------------- #
    def enumerate_all(self):
        bx = self.bx
        s = cj.load_state()
        for cat in cj.CATALOGS:
            s["tree"].pop(cat, None)
        cj.save_state(s)
        for cat in cj.CATALOGS:
            docs = bx.run(self.enumerate_catalog(cat), timeout=200)
            s["tree"][cat] = {"docs": docs}
            cj.save_state(s)
        fetched = set(s["fetched"])
        total = pending = 0
        for cat in cj.CATALOGS:
            d = s["tree"][cat]["docs"]
            p = sum(1 for x in d if ("%s/%s" % (cat, x["objectId"])) not in fetched)
            total += len(d); pending += p
        cj.log("[enum] TOTAL docs=%d pending=%d fetched=%d" % (total, pending, len(fetched)))
        return pending

    def fetch_pending(self, limit=None):
        bx = self.bx
        s = cj.load_state()
        if not any(s["tree"].get(c, {}).get("docs") for c in cj.CATALOGS):
            cj.log("[fetch] tree empty; run enumerate first")
            return
        fetched = set(s["fetched"]); failed = set(s["failed"])
        done = 0
        for cat in cj.CATALOGS:
            metas = s["tree"][cat]["docs"]
            pending = [m for m in metas if ("%s/%s" % (cat, m["objectId"])) not in fetched and ("%s/%s" % (cat, m["objectId"])) not in failed]
            if not pending:
                cj.log("[fetch] %s: none pending (of %d)" % (cat, len(metas)))
                continue
            cj.log("[fetch] %s: %d pending" % (cat, len(pending)))
            meta_by_id = {m["objectId"]: m for m in metas}
            for i in range(0, len(pending), BATCH):
                if limit is not None and done >= limit:
                    cj.log("[fetch] limit reached"); return
                batch = pending[i:i + BATCH]
                cnt = bx.run(self.store_batch(cat, batch), timeout=600)
                if cnt is None:
                    cj.log("[fetch] store fail, skip batch"); continue
                for idx, m in enumerate(batch):
                    html = bx.run(self.get_html(idx), timeout=600)
                    if not html:
                        s["failed"].append("%s/%s" % (cat, m["objectId"]))
                        failed.add("%s/%s" % (cat, m["objectId"]))
                        cj.log("[fetch]   %s empty/err" % m["objectId"]); continue
                    meta = meta_by_id[m["objectId"]]
                    try:
                        cj.write_doc(cat, meta, html)
                        s["fetched"].append("%s/%s" % (cat, m["objectId"]))
                        fetched.add("%s/%s" % (cat, m["objectId"]))
                    except Exception as e:
                        s["failed"].append("%s/%s" % (cat, m["objectId"]))
                        cj.log("[fetch]   write err %s" % e)
                cj.save_state(s)
                done += len(batch)
                cj.log("[fetch]   %s %d/%d (fetched=%d failed=%d)" % (cat, min(i + BATCH, len(pending)), len(pending), len(s["fetched"]), len(s["failed"])))
        cj.save_state(s)
        cj.log("[fetch] DONE fetched=%d failed=%d" % (len(s["fetched"]), len(s["failed"])))

    async def confirm_present(self, oid):
        """单查确认文档是否仍在官方存在。仅在明确返回空内容时判 'GONE'；
        任何解析/传输不确定一律 'PRESENT'（绝不因瞬时抖动误删）。"""
        js = _wrap(
            "const b=await dg('/partnerDocumentService/v1/developer/getDocumentById',{language:'cn',objectId:%s});"
            "try{const bi=JSON.parse(b.resJson);const v=(bi&&bi.value)||{};const html=(v.content&&v.content.content)||'';"
            "return html?'PRESENT':'GONE';}catch(e){return 'PRESENT';}" % json.dumps(oid))
        v = await self._js(js, good=lambda x: (x or "").strip() in ("PRESENT", "GONE"))
        return "GONE" if (v or "PRESENT").strip() == "GONE" else "PRESENT"

    def _fetch_and_handle(self, cat, oids, meta_by, hashes, s, fetched_set, is_new):
        """抓取一批 (cat,oids)，转 MD、比对哈希，按需落盘；返回 (updated, unchanged, written_new)。"""
        bx = self.bx
        upd = unch = wnew = 0
        for i in range(0, len(oids), BATCH):
            batch = oids[i:i + BATCH]
            metas = [meta_by[o] for o in batch]
            cnt = bx.run(self.store_batch(cat, metas), timeout=600)
            if cnt is None:
                cj.log("[inc] store fail %s batch@%d (skipped)" % (cat, i))
                continue
            for idx, o in enumerate(batch):
                name = "%s/%s" % (cat, o)
                html = bx.run(self.get_html(idx), timeout=600)
                if not html:
                    if is_new and name not in s["failed"]:
                        s["failed"].append(name)
                    continue
                h = _md_hash(_md_from_html(html))
                old = hashes.get(name)
                # 哈希相同但磁盘文件缺失（历史状态先于语料入库导致 947 篇从未落盘，
                # 2026-09-21 发现）→ 视同需要写盘，回查同时承担文件存在性自愈
                if old is not None and old == h and os.path.exists(_path_of(cat, o)):
                    unch += 1
                    continue
                try:
                    cj.write_doc(cat, meta_by[o], html)
                    hashes[name] = h
                    if is_new:
                        if name not in fetched_set:
                            s["fetched"].append(name)
                            fetched_set.add(name)
                        wnew += 1
                    else:
                        upd += 1
                except Exception as e:
                    cj.log("[inc] write err %s: %s" % (name, e))
            cj.save_state(s)
            done = min(i + BATCH, len(oids))
            if done % 200 < BATCH or done == len(oids):
                cj.log("[inc]   %s %d/%d" % (cat, done, len(oids)))
        return upd, unch, wnew

    def incremental_all(self, limit=None, skip_delete=False):
        bx = self.bx
        s = cj.load_state()
        s.setdefault("hashes", {})
        s.setdefault("deleted", [])
        hashes = s["hashes"]

        cj.log("=== incremental: re-enumerate trees ===")
        for cat in cj.CATALOGS:
            s["tree"].pop(cat, None)
        cj.save_state(s)
        tree_ids = {}
        for cat in cj.CATALOGS:
            docs = bx.run(self.enumerate_catalog(cat), timeout=200)
            s["tree"][cat] = {"docs": docs}
            cj.save_state(s)
            tree_ids[cat] = {d["objectId"]: d for d in docs}

        fetched_set = set(s["fetched"])
        in_tree = lambda name: name.split("/", 1)[1] in tree_ids.get(name.split("/", 1)[0], {})

        # 首跑：为缺哈希的已抓取文档从磁盘补齐指纹（不触发重写）
        seeded = 0
        for name in list(fetched_set):
            if name not in hashes:
                dh = _disk_hash(name)
                if dh:
                    hashes[name] = dh
                    seeded += 1
        if seeded:
            cj.save_state(s)
            cj.log("[inc] seeded %d hashes from disk" % seeded)

        # 新文档 = 树中且未抓取
        new_by_cat = {c: [] for c in cj.CATALOGS}
        for cat in cj.CATALOGS:
            for oid in tree_ids[cat]:
                if "%s/%s" % (cat, oid) not in fetched_set:
                    new_by_cat[cat].append(oid)
        n_new = sum(len(v) for v in new_by_cat.values())

        # 删除候选 = 已抓取但已从树中消失
        delc = [n for n in s["fetched"] if not in_tree(n)]

        cj.log("[inc] new=%d delete_candidates=%d to_recheck=%d"
               % (n_new, len(delc), len(fetched_set)))

        stats = {"new": 0, "updated": 0, "unchanged": 0, "deleted": 0}

        # 1) 先补新文档
        for cat in cj.CATALOGS:
            if new_by_cat[cat]:
                u, n, w = self._fetch_and_handle(cat, new_by_cat[cat], tree_ids[cat], hashes, s, fetched_set, True)
                stats["new"] += w

        # 2) 回查已抓取且仍在树中的文档（检测内容修改）
        checked = 0
        for cat in cj.CATALOGS:
            to_check = [o for o in tree_ids[cat]
                        if ("%s/%s" % (cat, o)) in fetched_set and ("%s/%s" % (cat, o)) in hashes]
            if not to_check:
                continue
            if limit is not None and checked >= limit:
                cj.log("[inc] recheck limit %d reached" % limit)
                break
            if limit is not None:
                to_check = to_check[:max(0, limit - checked)]
            checked += len(to_check)
            u, n, w = self._fetch_and_handle(cat, to_check, tree_ids[cat], hashes, s, fetched_set, False)
            stats["updated"] += u
            stats["unchanged"] += n

        # 3) 确认删除并物理删除（用户 2026-09-21：旧版本/已下线不留任何副本）
        if delc:
            fetched_list = s["fetched"]
            for name in delc:
                cat, oid = name.split("/", 1)
                present = bx.run(self.confirm_present(oid), timeout=120)
                if present == "PRESENT":
                    cj.log("[keep] %s 树中消失但单查仍在，保留" % name)
                    continue
                if skip_delete:
                    stats["deleted"] += 1
                    cj.log("[DELETE] %s (--skip-delete 未删)" % name)
                    continue
                src = _path_of(cat, oid)
                if os.path.exists(src):
                    os.remove(src)
                s["deleted"].append({"name": name, "at": time.strftime("%Y-%m-%dT%H:%M:%S")})
                fetched_list = [x for x in fetched_list if x != name]
                hashes.pop(name, None)
                fetched_set.discard(name)
                stats["deleted"] += 1
                cj.log("[DELETE] %s (物理删除)" % name)
            s["fetched"] = fetched_list

        cj.save_state(s)
        cj.log("[inc] DONE new=%d updated=%d unchanged=%d deleted=%d fetched=%d failed=%d"
               % (stats["new"], stats["updated"], stats["unchanged"], stats["deleted"],
                  len(s["fetched"]), len(s["failed"])))
        return stats


def go(argv):
    """调度入口（hdk.py crawl --target harmonyos-cangjie / incremental-cangjie 调用）。"""
    cj.acquire_lock()
    try:
        app = CjIab()
        app.bx = Bridge()
        app.bx.run(app.ensure_origin(), timeout=180)
        limit = None
        for a in argv:
            if a.startswith("--limit"):
                limit = int(a.split("=")[1]) if "=" in a else int(a[len("--limit"):])
        if "enumerate" in argv:
            app.enumerate_all()
        if "fetch" in argv:
            app.fetch_pending(limit)
        if "incremental" in argv:
            app.incremental_all(limit=limit, skip_delete=("--skip-delete" in argv))
        app.bx.run(app._goto(DOC_ORIGIN), timeout=60)
        app.bx.stop()
    finally:
        cj.release_lock()


if __name__ == "__main__":
    go(sys.argv[1:])
