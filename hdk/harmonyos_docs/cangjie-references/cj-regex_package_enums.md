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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/45/v3/PNjxWFRpTD63OYCYxGCaew/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090210Z&HW-CC-Expire=86400&HW-CC-Sign=3734C88B57D338889F5C055941CC6D547EB2D2E62E850598A7EDE75CD9963FDC)

处理非 ASCII 字符时必须使用此匹配模式。
