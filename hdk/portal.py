#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""匿名文档站正文接口（documentPortal/getDocumentById）：知识 MCP 覆盖不到的文档的补齐通路。

华为云 Developer Knowledge MCP 只服务它自己索引里的文档；实测官方现役目录清单里有
5730+ 篇（doc-references / harmonyos-center-guides / openharmony-cangjie 等分类）它
返回 `{"code":0,"message":"success"}` 但 resultList 里没有它们（抽样 20/20 全数不供给）。
文档站前端渲染正文用的本接口**匿名可达**，实测可取率 81/84（含上述不供给样本 19/20），
响应形如：

    {"code":0,"message":"success","value":{"title":"…","catalogName":"…",
      "content":{"type":"html","content":"<html>…</html>"},"updatedDate":"…"}}

本模块把它转成与知识 MCP **同形状的 item**（name/title/uri/content），因此落盘路径、
frontmatter 清洗、内容指纹、命名规则全部复用 crawl 的既有通路，不另立第二套口径。

失败分三类，语义与既有删除护栏一致：
  - PortalTransient：传输/结构不合法（限流、降级、非 JSON）→ 不确定，绝不判删；
  - None          ：接口明确答了但没有正文（code=0 且 content 空）→ 可判不可得；
  - item          ：拿到正文。
"""
import json
import time
import urllib.error
import urllib.request

import crawl                 # 复用 frontmatter_value / doc_body 的既有约定
import crawl_cangjie as cj   # 复用同一套 html2text 配置（官方正文 HTML -> Markdown）

URL = ("https://svc-drcn.developer.huawei.com/community/servlet"
       "/consumer/cn/documentPortal/getDocumentById")
REFERER = "https://developer.huawei.com/consumer/cn/doc/"
HEADERS = {"Content-Type": "application/json", "Referer": REFERER,
           "User-Agent": "Mozilla/5.0"}

HTTP_TIMEOUT = 30
NTRY = 3
RETRY_SLEEP = 2.0         # 秒，线性退避
CALL_SLEEP = 0.08         # 单请求最小间隔（调用方多线程，实际速率由线程数决定）

# 接口明确答了「document not found」的业务码。
#
# 实测这个码**不可信为「文档不存在」**：同一个真实 slug 隔 30 分钟先返回 code=0（4294 字符正文）、
# 后返回 92531031。它是负载下的推拒回复，不是结论。因此只多问一次就按「本轮不可得」停放
#（避开每篇垃圾别名白等 3 次退避×12s，一轮能省下几小时），而判删确认一律当不确定。
ABSENT_CODES = {"92531031"}
ABSENT_RETRY = 1          # 额外重问次数（总共 2 次），不再多
ABSENT_SLEEP = 1.0


class PortalTransient(Exception):
    """传输/结构问题：分不清「没有这篇」与「服务没答上」，一律按不确定处理。"""


class PortalAbsent(PortalTransient):
    """接口回了 not-found：负载下会假报，所以仍是「不确定」（继承自 transient），
    但对调用方可单独识别为「本轮不必再重试」。绝不拿它当删除依据。"""


def split_name(name):
    """`document/cn/<catalog>/<slug>` -> (catalog, slug)；不合规返回 (None, None)。"""
    parts = (name or "").split("/")
    if len(parts) != 4 or parts[0] != "document" or parts[1] != "cn":
        return None, None
    return parts[2], parts[3]


def _request(catalog, slug):
    body = json.dumps({"language": "cn", "objectId": slug,
                       "catalogName": catalog}).encode()
    req = urllib.request.Request(URL, data=body, headers=HEADERS, method="POST")
    try:
        raw = urllib.request.urlopen(req, timeout=HTTP_TIMEOUT).read()
    except urllib.error.HTTPError as e:
        # 404/5xx 都是「这一篇没取到」，但只有 404 可信为不存在；其余按不确定
        raise PortalTransient("http %s" % e.code)
    except Exception as e:                                    # noqa
        raise PortalTransient("transport: %s" % e)
    try:
        data = json.loads(raw.decode("utf-8", "replace"))
    except Exception as e:                                    # noqa
        raise PortalTransient("not json: %s" % e)
    if not isinstance(data, dict) or "code" not in data:
        raise PortalTransient("bad shape: %s" % str(data)[:120])
    return data


def _html_of(value):
    c = value.get("content")
    if isinstance(c, dict):
        return c.get("content") or ""
    return c or ""


def to_item(name, data):
    """响应 -> 与知识 MCP 同形状的 item；明确无正文返回 None。

    正文必须是转换后的 Markdown（不是原始 HTML）：`crawl.doc_body` 与磁盘解析出的
    正文要逐字同源，否则指纹永远对不上、每轮被判「已修改」。
    """
    if not isinstance(data, dict):
        raise PortalTransient("bad shape: %s" % str(data)[:120])
    code = str(data.get("code"))
    if code in ABSENT_CODES:
        raise PortalAbsent("code=%s %s" % (code, str(data.get("message"))[:60]))
    if code != "0":
        # 其余非 0 业务码（受限分类/参数错）按不确定处理，绝不等同于「文档不存在」
        raise PortalTransient("code=%s %s" % (code,
                                             str(data.get("message"))[:60]))
    value = data.get("value")
    if not isinstance(value, dict):
        raise PortalTransient("no value")
    html = _html_of(value)
    if not html.strip():
        return None
    md = cj.H.handle(html)
    return {"name": name,
            "title": crawl.frontmatter_value(value.get("title", "")),
            "uri": REFERER + (value.get("catalogName") or split_name(name)[0] or "")
                   + "/" + (value.get("fileName") or split_name(name)[1] or ""),
            "content": md,
            "source": "portal"}


def fetch_item(name):
    """取一篇正文。PortalTransient=不确定（调用方保留原状）；None=接口答了但无正文。

    not-found 只重问一次就抛出 PortalAbsent（调用方按本轮不可得停放），
    避免垃圾别名的退避睡眠把整轮门户补齐拖到几小时。
    """
    catalog, slug = split_name(name)
    if not slug:
        return None
    absent = 0
    last = None
    for attempt in range(NTRY + ABSENT_RETRY):
        try:
            return to_item(name, _request(catalog, slug))
        except PortalAbsent as e:
            absent += 1
            if absent > ABSENT_RETRY:
                raise
            time.sleep(ABSENT_SLEEP)
        except PortalTransient as e:
            last = e
            time.sleep(RETRY_SLEEP * (attempt + 1))
    raise last


def confirm_absent(name):
    """判删用：只有「接口明确答了且没有正文」才算真消失。

    任何传输/结构/业务码不确定都返回 False（保留），与 incremental.confirm_gone 同契约。
    """
    try:
        return fetch_item(name) is None
    except PortalTransient:
        return False
    except Exception:                                          # noqa
        return False
