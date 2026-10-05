---
name: document/cn/openharmony-cangjie/datetime_compare
title: DateTime 比较
uri: https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/datetime_compare
source: portal
---

DateTime 比较 该示例选取中国标准时间（CST，时区 ID 为“Asia/Shanghai”）和美国东部夏令时时间（EDT，时区 ID 为“America/New_York”）进行时间比较。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240621215220.33222112683343192682853326272696:50001231000000:2800:3A3D5FC63579A6D27C821DE0FEF98B9919CFCA98E0C3F85B55E3365ABF2963E4.png?needInitFileName=true?needInitFileName=true) 示例中使用 [TimeZone.load](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_classes#static-func-loadstring) 函数加载时区信息，在不同平台上加载时区信息有不同的依赖，用户需按其要求进行设置。
    
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
