---
name: cangjie-references/cj-datetime_tz
title: 同一时间在不同时区的本地时间
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-datetime_tz
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.time / 示例教程 / 同一时间在不同时区的本地时间
---

# 同一时间在不同时区的本地时间

该示例演示了如何将一个中国标准时间，转换为同一时间下 UTC 和美国东部夏令时时间。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d1/v3/qmiY6Q6DQfKBk8_lAoPcrg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090213Z&HW-CC-Expire=86400&HW-CC-Sign=BB4DD51A13CE046749C95FC58C512D31444EAA922CD25C102FCEBA3B29A5D23B)

示例中使用 [TimeZone.load](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-time_package_classes#static-func-loadstring) 函数加载时区信息，在不同平台上加载时区信息有不同的依赖，用户需按要求进行设置。
    
    
    import std.time.*
    
    main() {
        let datetime = DateTime.of(year: 2024, month: May, dayOfMonth: 22, hour: 12,
            timeZone: TimeZone.load("Asia/Shanghai"))
    
        println("CST: ${datetime}")
        println("UTC: ${datetime.inUTC()}")
        println("EDT: ${datetime.inTimeZone(TimeZone.load("America/New_York"))}")
    }

运行结果：
    
    
    CST: 2024-05-22T12:00:00+08:00
    UTC: 2024-05-22T04:00:00Z
    EDT: 2024-05-22T00:00:00-04:00
