---
name: document/cn/architecture-guides/regular_highlight-0000002328562941
title: 正则匹配高亮关键字
uri: https://developer.huawei.com/consumer/cn/doc/architecture-guides/regular_highlight-0000002328562941
---

# 正则匹配高亮关键字

## 场景介绍

本示例是新闻阅读类应用的高频使用场景之一，用户可以在文档中搜索关键词并高亮显示搜索内容。

正则匹配高亮关键字基于[正则表达式](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-3)实现了在文档中匹配相关字符的功能，当匹配到相关字段，会将其高亮展示在文档中。

## 效果预览

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b4/v3/gmYUM6WaQiOjGlESEFXGxA/zh-cn_image_0000002727484086.png?HW-CC-KV=V1&HW-CC-Date=20260921T035901Z&HW-CC-Expire=31536000000&HW-CC-Sign=5C6943DC4BCD19327C8829382BCE56CA025FF011BB0A999FFF36B2299355842C "点击放大")

## 实现思路

1. 使用escapeRegExp对子字符串进行正则表达式转义，防止特殊字符干扰正则匹配。

   ```ts
   escapeRegExp(subStr: string): string {
     return subStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
   }
   ```

2. 遍历所有匹配项，记录每个匹配项的起始索引和结束索引。

   ```ts
   processSource(mainStr: string, subStr: string): formatString[] {
     let result: formatString[] = [];
    // 构建正则表达式
     let globalMatchRegex = RegExp(escapedSubStr, 'g');
     let indexList: number[] = [];
     let matchResult: RegExpExecArray | null = null;
   // 记录所有匹配位置的索引
     while ((matchResult = globalMatchRegex.exec(mainStr)) !== null) {
       indexList.push(matchResult.index, globalMatchRegex.lastIndex - 1);
     }
    // ···
   }
   ```

3. 拆分字符串并标记匹配项，将mainStr拆分成多个片段，其中匹配到subStr的部分会被标记为isAim: true，最终返回结果result。

   ```ts
   processSource(mainStr: string, subStr: string): formatString[] {
    // ···
     let cache = '';
     for (let index = 0; index < mainStr.length; index++) {
       if (!indexList.includes(index)) {
         cache = cache + mainStr[index];
         if (index === mainStr.length - 1) {
           result.push({ char: cache, isAim: false });
         }
       } else {
         if (cache.length > 0) {
           result.push({ char: cache, isAim: false });
           cache = '';
         }
         result.push({ char: subStr, isAim: true })
         index = index + subStr.length - 1;
       }
     }
     return result;
   }
   ```

## 环境准备

* 本示例基于DevEco Studio 6.1.1 Release版本进行编译运行。
* 本示例基于API Version 24 Release版本进行开发与验证。

## 工程目录

```ts
├──entry/src/main/ets                     // 代码区
│  ├──entryability
│  │  └──EntryAbility.ets                 // 程序入口类
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  ├──NewsData.ets                     // 新闻文章数据模型及文章列表
│  │  └──HighlightHelper.ets              // 关键词拆分与高亮工具类
│  └──pages
│     ├──Index.ets                        // 搜索主页面（顶部搜索框+文章列表，关键词标红）
│     └──DetailPage.ets                   // 新闻详情二级页面（返回导航栏+正文高亮演示）
└──entry/src/main/resources               //应用资源目录
```

## 参考文档

[如何使用正则表达式](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-3)

## 代码下载

[正则匹配高亮关键字示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260916181333.65423944615416481064553291702423:50001231000000:2800:6759217DA65A8B2368096C36A08AC56CEFAB4C02F9DEEA2A621F34521858BB64.zip?needInitFileName=true)

