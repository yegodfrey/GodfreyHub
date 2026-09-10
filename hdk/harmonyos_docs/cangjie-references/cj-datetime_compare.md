---
name: cangjie-references/cj-datetime_compare
title: DateTime 比较
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-datetime_compare
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.time / 示例教程 / DateTime 比较
---

# DateTime 比较

该示例选取中国标准时间（CST，时区 ID 为“Asia/Shanghai”）和美国东部夏令时时间（EDT，时区 ID 为“America/New_York”）进行时间比较。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d5/v3/CYBXjit7SQ6OgtIaKbwiOQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090213Z&HW-CC-Expire=86400&HW-CC-Sign=DE46C00217D021033BD429665F25FEC0179C21B5B5CC19BA1F8AF7E220B37360)

示例中使用 [TimeZone.load](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-time_package_classes#static-func-loadstring) 函数加载时区信息，在不同平台上加载时区信息有不同的依赖，用户需按要求进行设置。
    
    
    import std.time.*
    
    main() {
        let tzSH = TimeZone.load("Asia/Shanghai")
        let tzNY = TimeZone.load("America/New_York")
        // 2024-05-25T00:00:00Z
        let shanghai1 = DateTime.of(year: 2024, month: May, dayOfMonth: 25, hour: 8, timeZone: tzSH)
        let new_york1 = DateTime.of(year: 2024, month: May, dayOfMonth: 24, hour: 20, timeZone: tzNY)
    
        // 2024-05-25T01:00:00Z
        let shanghai2 = DateTime.of(year: 2024, month: May, dayOfMonth: 25, hour: 9, timeZone: tzSH)
        let new_york2 = DateTime.of(year: 2024, month: May, dayOfMonth: 24, hour: 21, timeZone: tzNY)
    
        println(shanghai1 == new_york1)
        println(shanghai1 != new_york2)
        println(shanghai1 <= new_york2)
        println(shanghai1 < new_york2)
        println(shanghai2 >= new_york1)
        println(shanghai2 > new_york1)
    }

运行结果：
    
    
    true
    true
    true
    true
    true
    true
