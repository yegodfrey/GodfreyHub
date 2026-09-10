---
name: cangjie-references/cj-datetime_prop
title: 获取日期时间信息
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-datetime_prop
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.time / 示例教程 / 获取日期时间信息
---

# 获取日期时间信息

该示例演示了如何获取日期时间的年、月、日等信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4e/v3/WQxzxYlaR7WygvVW_wcG8A/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090213Z&HW-CC-Expire=86400&HW-CC-Sign=BE4D9ED63E313784833A5FA8F88847C463BD55B5F0D39A36325038F2E8A2D007)

示例中使用 [TimeZone.load](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-time_package_classes#static-func-loadstring) 函数加载时区信息，在不同平台上加载时区信息有不同的依赖，用户需按要求进行设置。
    
    
    import std.time.*
    
    main() {
        let datetime = DateTime.of(
            year: 2024,
            month: May,
            dayOfMonth: 22,
            hour: 12,
            minute: 34,
            second: 56,
            nanosecond: 789000000,
            timeZone: TimeZone.load("Asia/Shanghai")
        )
    
        let yr = datetime.year
        let mon = datetime.month
        let day = datetime.dayOfMonth
        let hr = datetime.hour
        let min = datetime.minute
        let sec = datetime.second
        let ns = datetime.nanosecond
        let zoneId = datetime.zoneId
        let offset = datetime.zoneOffset
        let dayOfWeek = datetime.dayOfWeek
        let dayOfYear = datetime.dayOfYear
        let (isoYear, isoWeek) = datetime.isoWeek
    
        println("datetime is ${yr}, ${mon}, ${day}, ${hr}, ${min}, ${sec}, ${ns}, ${zoneId}, ${offset}")
        println("datetime.toString() = ${datetime}")
        println("${dayOfWeek}, ${dayOfYear}th day, ${isoWeek}th week of ${isoYear}")
    }

运行结果：
    
    
    datetime is 2024, May, 22, 12, 34, 56, 789000000, Asia/Shanghai, 8h
    datetime.toString() = 2024-05-22T12:34:56.789+08:00
    Wednesday, 143th day, 21th week of 2024
