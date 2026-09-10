---
name: cangjie-faqs/22-datetime
title: 仓颉语言如何处理时间和日期
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/22-datetime
nodePath: FAQ / 标准库 / 仓颉语言如何处理时间和日期
---

# 仓颉语言如何处理时间和日期

仓颉语言通过std.time包提供时间日期处理能力，包括DateTime日期时间类型、MonoTime单调时钟和Duration时间间隔。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fb/v3/LfAsyAnfQyaOpARrmDphXQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260804T120402Z&HW-CC-Expire=86400&HW-CC-Sign=C7A8AC6ECE76BD0D1C0215ACA0BBDDB5B6F21893144FFDFD33A7F31D88B9B7F3)

在HarmonyOS应用环境中，TimeZone.load("Asia/Shanghai")会报错"No valid timezone file is found"，因为应用沙箱无法访问系统时区数据库。应使用TimeZone.Local（本地时区）或TimeZone.UTC（UTC时区）。

#### 获取当前时间
    
    
    import std.time.*
    import kit.PerformanceAnalysisKit.Hilog
    
    func getCurrentTime(): Unit {
        let now = DateTime.now()
        Hilog.info(0, "Cangjie Test", "now = ${now}")
    }

调用getCurrentTime，日志输出结果（不同时间调用结果不同）：
    
    
    now = 2026-04-22T14:19:49.095198862+08:00

#### 构造指定日期时间

使用TimeZone.Local获取本地时区：
    
    
    import std.time.*
    import kit.PerformanceAnalysisKit.Hilog
    
    func createDateTime(): Unit {
        let dt = DateTime.of(
            year: 2024,
            month: May,
            dayOfMonth: 22,
            hour: 12,
            minute: 34,
            second: 56,
            timeZone: TimeZone.Local
        )
        Hilog.info(0, "Cangjie Test", "created = ${dt}")
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e7/v3/Tk8BjCSeQbO9NU5aXzxXLw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260804T120402Z&HW-CC-Expire=86400&HW-CC-Sign=1CB5FFD9ABD57FD5904D6FB96C3BC425662863102C8480CF219A271890D621C7)

  1. Month枚举使用裸标识符，如May而非Month.May。
  2. HarmonyOS应用中使用TimeZone.Local或TimeZone.UTC，避免使用TimeZone.load()。



调用createDateTime，日志输出结果：
    
    
    created = 2024-05-22T12:34:56+08:00

#### 格式化与解析
    
    
    import std.time.*
    import kit.PerformanceAnalysisKit.Hilog
    
    func formatParseDateTime(): Unit {
        let dt = DateTime.of(year: 2024, month: May, dayOfMonth: 22, hour: 12, minute: 34, second: 56)
    
        let formatted = dt.format("yyyy/MM/dd HH:mm:ss")
        Hilog.info(0, "Cangjie Test", "formatted = ${formatted}")
    
        let parsed = DateTime.parse("2024/05/22 12:34:56", "yyyy/MM/dd HH:mm:ss")
        Hilog.info(0, "Cangjie Test", "parsed = ${parsed}")
    }

调用formatParseDateTime，日志输出结果：
    
    
    formatted = 2024/05/22 12:34:56
    parsed = 2024-05-22T12:34:56+08:00

#### 使用MonoTime计时

MonoTime用于精确测量时间间隔，不受系统时钟调整影响：
    
    
    import std.time.*
    import kit.PerformanceAnalysisKit.Hilog
    
    func measureTime(): Unit {
        let startTime = MonoTime.now()
    
        // 等待一小段时间
        for (i in 0..1000000) {
            let _ = i
        }
    
        let endTime = MonoTime.now()
    
        // 计算时间差
        let duration = endTime - startTime
        Hilog.info(0, "Cangjie Test", "cost: ${duration.toNanoseconds()}ns")
    }

调用measureTime，日志可能输出结果：
    
    
    cost: 32903975ns

#### 时区使用说明

时区API | 说明 | HarmonyOS应用可用性  
---|---|---  
TimeZone.Local | 本地时区（系统默认） | ✓ 可用  
TimeZone.UTC | UTC时区 | ✓ 可用  
TimeZone.load(id) | 按IANA名称加载 | ✗ 沙箱限制  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a3/v3/2jZn0xeXT86a-lBnLmkJoQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260804T120402Z&HW-CC-Expire=86400&HW-CC-Sign=2D11674E3A74D9AEFBAE194771C3E11746A30C2BF9F453DF0959A6CF38622FCC)

  1. HarmonyOS应用沙箱无法访问系统时区数据库，TimeZone.load()会报错。
  2. 使用TimeZone.Local获取设备当前时区。
  3. 使用TimeZone.UTC获取UTC时区进行跨时区计算。
  4. DateTime.now()默认使用本地时区。



更多时间日期的使用方法，详情请参见[std.time](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-time_package_overview)。
