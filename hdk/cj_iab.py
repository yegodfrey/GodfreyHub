#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""鸿蒙仓颉开发文档采集——内置浏览器桥传输层。

cj_mcp 原走 QwenWork 本地 MCP 适配器（~/.qwenworkcn/mcp-adaptor.config）驱动
builtin_browser；本机无该适配器配置，通道不可用。本模块保持 cj_mcp.CjMcp 的
编排（目录枚举/批量抓取/增量回查/判删/落盘/运行锁）不变，仅替换传输原语
_goto/_raw：起本地 HTTP 桥（127.0.0.1:8791），浏览器侧由内置浏览器控制通道
的 node relay 长轮询取动作、在已登录华为开发者的标签页里 evaluate 执行并回传。

页面侧协议（相对 javascript_tool 的变化）：
  - 网络请求全部改「页面内踢 async 任务落 window、轮询收数」：evaluate 有秒级
    预算，delegate 网络耗时必须留在页面内，不能横跨 evaluate 调用等待。
  - 整批 html 一次 JSON.stringify 拉回（evaluate 无 50KB 截断），get_html 纯
    内存应答，不再 base64 分片。
用法（由 hdk.py crawl --target harmonyos-cangjie / incremental-cangjie 调度）：
  python cj_iab.py incremental [--limit=N] [--skip-delete]
  python cj_iab.py enumerate fetch [--limit=N]
运行前提：node relay 已起（见 hdk.py 提示），浏览器已登录华为开发者账号。
"""
import asyncio
import http.server
import json
import re
import sys
import threading

import crawl_cangjie as cj
import cj_mcp as cm

PORT = 8791


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


# --- 传输层替换：只重写 _goto/_raw 与页面协议，编排全部继承 ---------------- #
class CjIab(cm.CjMcp):
    BATCH = 20

    def __init__(self):
        self.tab = None
        self.bx = None
        self._cache = []
        self._srv = _serve()

    async def _open(self):
        pass

    async def _close(self):
        pass

    async def _goto(self, url):
        bridge_call({"kind": "goto", "url": url}, timeout=90)

    async def _raw(self, tool, args):
        if tool.endswith("javascript_tool"):
            return bridge_call({"kind": "js", "text": args.get("text", "")})
        if tool.endswith("navigate"):
            return bridge_call({"kind": "goto", "url": args.get("url", "")})
        raise RuntimeError("unsupported tool: " + tool)

    # --- 探活：delegate POST 踢进页面内，轮询状态码 ------------------------ #
    async def ensure_origin(self):
        await self._goto(cm.API_ORIGIN)
        for _ in range(8):
            await asyncio.sleep(1.5)
            v = await self._js("location.origin", tries=2)
            if v and "svc-drcn" in v:
                await self._js(self._wrap(
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
        await self._js(self._wrap(self.FLAT_FN +
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
            chunk = await self._js("JSON.stringify(window.__cjdocs.slice(%d,%d))" % (off, off + cm.DOCS_PAGE),
                                   good=lambda v: v and v.strip().startswith("["))
            try:
                part = json.loads(chunk)
            except Exception:
                cj.log("[enum] %s page parse fail at %d" % (catalog, off))
                break
            if not part:
                break
            docs.extend(part)
            off += cm.DOCS_PAGE
        cj.log("[enum] %s: %d docs (expect %d)" % (catalog, len(docs), n))
        return docs

    # --- 抓取：踢批量 getDocumentById → 轮询 → 整批一次拉回内存 ------------ #
    async def store_batch(self, catalog, metas):
        ids = [m["objectId"] for m in metas]
        await self._js(self._wrap(
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


def go(argv):
    """调度入口（hdk.py crawl --target harmonyos-cangjie / incremental-cangjie 调用）。"""
    cj.acquire_lock()
    try:
        app = CjIab()
        app.bx = cm.Bridge()
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
        app.bx.run(app._goto(cm.DOC_ORIGIN), timeout=60)
        app.bx.stop()
    finally:
        cj.release_lock()


if __name__ == "__main__":
    go(sys.argv[1:])
