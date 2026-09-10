#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""HDK 落盘 I/O 共享工具：原子写 + 瞬时锁退避重试。

背景（实测）：Windows 上反复重写多 MB 状态 JSON（crawl_state.json /
incremental_state.json 等）偶发 `OSError(22, 'Invalid argument')`——杀软/索引器
抢在 truncate 前打开刚写完的文件，令就地 `open(path,'w')` 失败，一次抖动即可打断
整轮长跑。所有状态与语料写入统一走本模块：写唯一临时文件 → fsync → 原子
`os.replace`，对瞬时 OSError 退避重试。调用方序列化格式不变。
"""
import json
import os
import time


def atomic_write_text(path, text, tries=6, encoding="utf-8"):
    """原子写文本：临时文件 + fsync + os.replace，瞬时 OSError 退避重试。"""
    tmp = f"{path}.tmp.{os.getpid()}.{int(time.time() * 1000)}"
    last = None
    for attempt in range(tries):
        try:
            with open(tmp, "w", encoding=encoding) as f:
                f.write(text)
                f.flush()
                os.fsync(f.fileno())
            os.replace(tmp, path)
            return
        except OSError as e:
            last = e
            try:
                if os.path.exists(tmp):
                    os.remove(tmp)
            except OSError:
                pass
            time.sleep(0.5 * (attempt + 1))
    raise last


def atomic_write_json(path, obj, *, tries=6, **kw):
    """原子写 JSON：tries 传给文本写作的重试次数，其余关键字参数透传给 json.dumps。"""
    atomic_write_text(path, json.dumps(obj, **kw), tries=tries)
