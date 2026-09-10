---
name: cangjie-references/cj-datetime_parse
title: DateTime 与 String 类型的转换
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-datetime_parse
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.time / 示例教程 / DateTime 与 String 类型的转换
---

# DateTime 与 String 类型的转换

该示例演示了如何通过格式化字符串 pattern，对时间进行格式化打印，以及从格式化字符串中解析时间。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/af/v3/jijCk-F3SpiVX0YOssza8A/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111719Z&HW-CC-Expire=86400&HW-CC-Sign=81F5D9527E75E14FF8F47E2FCC86DA21BC9D43E0CE763EE9A1025B3BAD90AA13)

示例中使用 [TimeZone.load](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-time_package_classes#static-func-loadstring) 函数加载时区信息，在不同平台上加载时区信息有不同的依赖，用户需按要求进行设置。
    
    
    import std.time.*
    
    main() {
        let pattern = "yyyy/MM/dd HH:mm:ssSSS OO"
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
        let str = datetime.format(pattern)
        println(str)
        println(DateTime.parse(str, pattern))
    }

运行结果：
    
    
    2024/05/22 12:34:56789000000 +08:00
    2024-05-22T12:34:56.789+08:00
