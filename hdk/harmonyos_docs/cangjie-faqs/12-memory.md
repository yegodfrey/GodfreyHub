---
name: cangjie-faqs/12-memory
title: 仓颉语言中A引用B，B引用A的场景会不会导致内存泄漏
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/12-memory
nodePath: FAQ / 语法 / 仓颉语言中A引用B，B引用A的场景会不会导致内存泄漏
---

# 仓颉语言中A引用B，B引用A的场景会不会导致内存泄漏

仓颉语言中对象间循环引用不会导致内存泄漏。

仓颉采用了Tracing GC算法，而不是基于引用计数的自动内存管理。该算法通过判断对象是否能从根对象出发被访问到，来决定对象是否可回收，因此能够自动解决循环引用问题。
