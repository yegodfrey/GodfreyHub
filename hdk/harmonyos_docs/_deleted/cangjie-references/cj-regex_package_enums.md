---
name: cangjie-references/cj-regex_package_enums
title: 枚举
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_enums
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.regex / 枚举
---

# 枚举

#### enum RegexFlag
    
    
    public enum RegexFlag {
        | IgnoreCase
        | MultiLine
        | Unicode
    }

功能：用于指定正则匹配的模式。

#### [h2]IgnoreCase
    
    
    IgnoreCase

功能：指定匹配模式为忽略大小写。

#### [h2]MultiLine
    
    
    MultiLine

功能：指定匹配模式为多行文本模式。

#### [h2]Unicode
    
    
    Unicode

功能：指定匹配模式支持 Unicode。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e2/v3/I7ooWwpbT3WuXjtxKbGBDA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=5113228B091BA2BE96DF6112DD9CA2CA250AF699E9B9C08CD63699422A0ED213)

处理非 ASCII 字符时必须使用此匹配模式。
