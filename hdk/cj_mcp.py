#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""鸿蒙仓颉开发文档采集器（浏览器 MCP 版，分片回传）。

背景：仓颉开发文档需登录，鉴权 token 在 HttpOnly cookie，纯 Python 取不到，只能在已登录
浏览器页面里 fetch(credentials:"include")。本机没有 QQ 浏览器 skill，改用 builtin_browser
的 javascript_tool，经 QwenWork 本地 MCP 适配器代理调用；payload 只回传到本进程内存，
再复用 crawl_cangjie.write_doc 转 Markdown 落盘，格式与原工具一致。

关键约束（实测）：
  - 必须在同源 https://svc-drcn.developer.huawei.com 上跑相对 fetch('/svc/.../delegate')；
    文档站 developer.huawei.com 上该路径不存在。导航后紧接 eval 会 "Promise was collected"，
    故落地后轮询 origin 就绪再干活。
  - javascript_tool 单次返回约 50KB 截断，且后台 async 不跨调用存活：故每个 fetch 写成
    单表达式 async IIFE 并把结果挂到 window，再用多片 base64 分片同步取回（切片 < 1万字符，
    base64 后仍 < 50KB）。对 "Unknown tool"/"Promise was collected" 等瞬时抖动做重试。

用法：
  python cj_mcp.py enumerate            # 重新枚举 5 目录树 → state.tree，打印 pending
  python cj_mcp.py fetch [--limit=N]    # 抓取 pending 新文档 → 落盘 + 更新 state
  python cj_mcp.py incremental          # 完整增量：补新 + 回查已改(内容哈希比对) + 判删(树中消失→软删除)
                                        # [--limit=N 限制重查量; --skip-delete 只报不删]
"""
import json
import os
import re
import sys
import time
import base64
import hashlib
import threading
import asyncio

import httpx2
from mcp import ClientSession
from mcp.client.streamable_http import streamable_http_client, create_mcp_http_client

import crawl_cangjie as cj

HERE = os.path.dirname(os.path.abspath(__file__))
ADAPTOR_CFG = os.path.join(os.path.expanduser("~"), ".qwenworkcn", "mcp-adaptor.config")
API_ORIGIN = "https://svc-drcn.developer.huawei.com/"
DOC_ORIGIN = "https://developer.huawei.com/consumer/cn/doc/"
DELEGATE = "/svc/community/common/v1/delegate"
SLICE = 9000          # HTML 分片字符数（base64 后仍 <50KB）
DOCS_PAGE = 200       # 目录树 flat docs 分片条数
BATCH = 5             # 每次浏览器 fetch 的文档数

# --- 内容指纹（增量回查用）：只比对正文 Markdown（去掉 front-matter），标题/uri 变动不算内容变更 #
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


def load_adaptor():
    with open(ADAPTOR_CFG, encoding="utf-8") as f:
        c = json.load(f)
    return c["url"].rstrip("/") + "/mcp", (c.get("headers", {}) or {}).get("x-api-key") or c.get("token")


def _txt(res):
    for p in res.content:
        if getattr(p, "type", "") == "text":
            return p.text
    return None


class Bridge:
    """在独立线程跑事件循环，暴露同步 run()。"""
    def __init__(self):
        self.loop = asyncio.new_event_loop()
        threading.Thread(target=self.loop.run_forever, daemon=True).start()
    def run(self, coro, timeout=180):
        return asyncio.run_coroutine_threadsafe(coro, self.loop).result(timeout)
    def stop(self):
        self.loop.call_soon_threadsafe(self.loop.stop)


class CjMcp:
    def __init__(self):
        self.url, self.key = load_adaptor()
        self.tab = None
        self._s = None

    async def _open(self):
        self._hc = create_mcp_http_client(headers={"x-api-key": self.key}, timeout=httpx2.Timeout(150))
        hc = await self._hc.__aenter__()
        self._streams = streamable_http_client(self.url, http_client=hc)
        r, w = await self._streams.__aenter__()
        self._s = ClientSession(r, w)
        await self._s.__aenter__()
        await self._s.initialize()
        out = _txt(await self._s.call_tool("qwenwork_mcp_tool_call", {"toolName": "mcp__builtin_browser__tabs_context", "arguments": {}}))
        ids = [int(m) for m in re.findall(r"\[(\d+)\]", out or "")]
        if not ids:
            raise RuntimeError("no tabs: " + str(out)[:160])
        self.tab = ids[0]

    async def _close(self):
        try:
            await self._s.__aexit__(None, None, None)
            await self._streams.__aexit__(None, None, None)
            await self._hc.__aexit__(None, None, None)
        except Exception:
            pass

    async def _raw(self, tool, args):
        return _txt(await self._s.call_tool("qwenwork_mcp_tool_call", {"toolName": tool, "arguments": args}))

    async def _goto(self, url):
        await self._raw("mcp__builtin_browser__navigate", {"tabId": self.tab, "url": url})

    # --- 带重试的 JS 执行：处理 Unknown tool / Promise was collected / undefined 抖动 -- #
    async def _js(self, text, tries=6, good=None):
        last = None
        for _ in range(tries):
            try:
                v = await self._raw("mcp__builtin_browser__javascript_tool", {"tabId": self.tab, "text": text})
            except Exception as e:
                v = "EXC:" + repr(e)[:80]
            last = v
            if v and "Unknown tool" not in v and "Promise was collected" not in v and "EXECUTION_ERROR" not in v:
                if good is None or good(v):
                    return v
            await asyncio.sleep(1.2)
        return last

    async def _js_retry(self, text, tries=6):
        return await self._js(text, tries=tries)

    async def ensure_origin(self):
        await self._goto(API_ORIGIN)
        for _ in range(8):
            await asyncio.sleep(1.5)
            v = await self._js("location.origin")
            if v and "svc-drcn" in v:
                # 探活：一次相对 fetch 能否拿数（走 _wrap 提供同源相对 fetch + csrf 头）
                ok = await self._js(self._wrap(
                    "return fetch('/svc/community/common/v1/delegate',{method:'POST',credentials:'include',headers:{'Content-Type':'application/json;charset=UTF-8','X-HD-DATE':nn(),'X-HD-CSRF':csrf||''},body:'{}'}).then(r=>String(r.status)).catch(e=>'E');"))
                if ok and re.search(r"\d{3}", ok):
                    cj.log("[origin] ready", v, "probe:", ok)
                    return True
        raise RuntimeError("API origin not ready")

    # 用完整 async IIFE 包装（返回单表达式 promise，awaited）
    def _wrap(self, body):
        return "(async()=>{" + self._head_body() + body + "})()"

    def _head_body(self):
        # 不含 return (async) 的头（在 IIFE 内）
        return ("const cookie=document.cookie;let csrf=null;const mm=cookie.match(/developer_userdata=([^;]+)/);"
                "if(mm){try{csrf=JSON.parse(decodeURIComponent(mm[1])).csrftoken}catch(e){}}"
                "if(!csrf){const m2=cookie.match(/X-HD-CSRF=([^;]+)/i);if(m2)csrf=m2[1];}"
                "function nn(){const d=new Date();const p=n=>String(n).padStart(2,'0');return d.getUTCFullYear()+p(d.getUTCMonth()+1)+p(d.getUTCDate())+'T'+p(d.getUTCMinutes())+p(d.getUTCHours())+p(d.getUTCSeconds())+'Z';}"
                "async function dg(svc,o){const b={svc:svc,reqType:1,reqJson:JSON.stringify(o)};"
                "const r=await fetch('/svc/community/common/v1/delegate',{method:'POST',credentials:'include',headers:{'Content-Type':'application/json;charset=UTF-8','X-HD-DATE':nn(),'X-HD-SERIALNO':String(Math.floor(Math.random()*1e7)),'X-HD-CSRF':csrf||''},body:JSON.stringify(b)});"
                "return await r.json();}")

    # --- 枚举：JS 内扁平化目录树挂到 window.__cjdocs，Python 分片取回 ------------ #
    FLAT_FN = ("function walk(ns,path,out){for(const n of (ns||[])){if(!n||typeof n!=='object')continue;"
               "const nm=n.nodeName||'';const kids=n.children||n.childList||n.catalogTreeList||[];"
               "const sub=nm?path.concat([nm]):path;const rel=n.relateDocument;"
               "if(rel){out.push({objectId:rel,title:(n.title||nm||rel),nodePath:sub.filter(Boolean).join(' / ')});}"
               "if(Array.isArray(kids)&&kids.length)walk(kids,sub,out);}}")

    async def enumerate_catalog(self, catalog):
        store = self._wrap(self.FLAT_FN +
                           "const b=await dg('/partnerDocumentService/v1/developer/getCatalogTree',{language:'cn',catalogName:%s});"
                           "let bi;try{bi=JSON.parse(b.resJson)}catch(e){window.__cjdocs=[];return 'PARSEERR'}"
                           "const tree=(bi.value&&bi.value.catalogTreeList)||[];const out=[];walk(tree,[],out);"
                           "const seen={};const dd=[];for(const d of out){if(!seen[d.objectId]){seen[d.objectId]=1;dd.push(d);}}"
                           "window.__cjdocs=dd;return String(dd.length);" % json.dumps(catalog))
        cnt_raw = await self._js(store, good=lambda v: v and re.match(r"^\d+$", v.strip()) is not None)
        try:
            n = int((cnt_raw or "").strip())
        except Exception:
            cj.log("[enum] %s bad count: %r" % (catalog, (cnt_raw or "")[:80]))
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

    # --- 抓取：一批 fetch 挂到 window.__cjres[{objectId,title,total,html}]，逐篇分片取回 #
    async def store_batch(self, catalog, metas):
        ids = [m["objectId"] for m in metas]
        body = ("const ids=%s;" % json.dumps(ids) +
                "const res=await Promise.all(ids.map(async oid=>{try{"
                "const b=await dg('/partnerDocumentService/v1/developer/getDocumentById',{language:'cn',objectId:oid});"
                "const bi=JSON.parse(b.resJson);const v=bi.value||{};const html=(v.content&&v.content.content)||'';"
                "return {objectId:oid,total:html.length,html:html};}catch(e){return {objectId:oid,total:0,err:String(e)};}}));"
                "window.__cjres=res;return String(res.length);")
        js = self._wrap(body)
        cnt = await self._js(js, good=lambda v: v and re.match(r"^\d+$", v.strip()) is not None)
        try:
            return int((cnt or "").strip())
        except Exception:
            return None

    async def get_html(self, idx):
        total = await self._js("(()=>{const e=window.__cjres[%d];return e?String(e.total||0):'0'})()" % idx,
                               good=lambda v: v and re.match(r"^\d+$", v.strip()) is not None)
        try:
            total = int((total or "0").strip())
        except Exception:
            total = 0
        if total == 0:
            return ""
        buf = []
        off = 0
        while off < total:
            enc = await self._js("(()=>{const e=window.__cjres[%d];return e?btoa(unescape(encodeURIComponent(e.html.slice(%d,%d)))):''})()" % (idx, off, off + SLICE),
                                 good=lambda v: v is not None and re.match(r"^[A-Za-z0-9+/=]*$", v.strip()) is not None)
            if not enc:
                break
            try:
                buf.append(base64.b64decode(enc.strip()).decode("utf-8"))
            except Exception:
                cj.log("[html] b64 decode fail idx=%d off=%d" % (idx, off))
                break
            off += SLICE
        return "".join(buf)

    # --- 顶层流程 --- #
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
                cnt = bx.run(self.store_batch(cat, batch), timeout=200)
                if cnt is None:
                    cj.log("[fetch] store fail, skip batch"); continue
                for idx, m in enumerate(batch):
                    html = bx.run(self.get_html(idx), timeout=300)
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
        js = self._wrap(
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
            cnt = bx.run(self.store_batch(cat, metas), timeout=200)
            if cnt is None:
                cj.log("[inc] store fail %s batch@%d (skipped)" % (cat, i))
                continue
            for idx, o in enumerate(batch):
                name = "%s/%s" % (cat, o)
                html = bx.run(self.get_html(idx), timeout=300)
                if not html:
                    if is_new and name not in s["failed"]:
                        s["failed"].append(name)
                    continue
                h = _md_hash(_md_from_html(html))
                old = hashes.get(name)
                if old is not None and old == h:
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

        # 3) 确认删除并软删除
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
                dst_dir = os.path.join(cj.OUT, "_deleted", cat)
                os.makedirs(dst_dir, exist_ok=True)
                dst = os.path.join(dst_dir, oid + ".md")
                if os.path.exists(dst):
                    dst = dst + "." + str(int(time.time()))
                if os.path.exists(src):
                    os.rename(src, dst)
                s["deleted"].append({"name": name, "at": time.strftime("%Y-%m-%dT%H:%M:%S")})
                fetched_list = [x for x in fetched_list if x != name]
                hashes.pop(name, None)
                fetched_set.discard(name)
                stats["deleted"] += 1
                cj.log("[DELETE] %s -> _deleted" % name)
            s["fetched"] = fetched_list

        cj.save_state(s)
        cj.log("[inc] DONE new=%d updated=%d unchanged=%d deleted=%d fetched=%d failed=%d"
              % (stats["new"], stats["updated"], stats["unchanged"], stats["deleted"],
                 len(s["fetched"]), len(s["failed"])))
        return stats

    def go(self, argv):
        cj.acquire_lock()
        try:
            self.bx = Bridge()
            self.bx.run(self._open(), timeout=90)
            self.bx.run(self.ensure_origin(), timeout=120)
            try:
                limit = None
                for a in argv:
                    if a.startswith("--limit"):
                        limit = int(a.split("=")[1]) if "=" in a else int(a[len("--limit"):])
                if "enumerate" in argv:
                    self.enumerate_all()
                if "fetch" in argv:
                    self.fetch_pending(limit)
                if "incremental" in argv:
                    self.incremental_all(limit=limit, skip_delete=("--skip-delete" in argv))
            finally:
                try:
                    self.bx.run(self._goto(DOC_ORIGIN), timeout=60)
                except Exception:
                    pass
                self.bx.run(self._close(), timeout=30)
                self.bx.stop()
        finally:
            cj.release_lock()


if __name__ == "__main__":
    CjMcp().go(sys.argv[1:])
