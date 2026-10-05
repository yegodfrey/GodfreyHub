---
name: document/cn/openharmony-cangjie/time_package_structs
title: 结构体
uri: https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs
source: portal
---

结构体 struct DateTime
    
    public struct DateTime <: ToString & Hashable & Comparable<DateTime>

功能：[DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 表示日期时间，是一个描述某一时间点的时间类型，提供了基于时区的日期时间读取、计算、比较、转换，以及序列化和反序列化等功能。
    * [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 是不可变的类型，包含了日期，时间和时区信息。可表示的时间区间为 [-999,999,999-01-01T00:00:00.000000000, 999,999,999-12-31T23:59:59.999999999]，该区间适用于任何合法的时区。
    * 以下为 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 中 now 和 nowUTC 函数获取当前时间使用的系统调用函数： 系统 | 系统调用函数 | 时钟类型  
---|---|---  
Linux | clock_gettime | CLOCK_REALTIME  
Windows | clock_gettime | CLOCK_REALTIME  
macOS | clock_gettime | CLOCK_REALTIME  
[h2]static prop UnixEpoch
    
    public static prop UnixEpoch: DateTime

功能：获取 Unix 时间纪元，即表示零时区 1970年1月1日0时0分0秒0纳秒 的 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。 类型：[DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) [h2]prop dayOfMonth
    
    public prop dayOfMonth: Int64

功能：获取 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例基于当前月第几日。 类型：[Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) [h2]prop dayOfWeek
    
    public prop dayOfWeek: DayOfWeek

功能：获取 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例基于当前周的第几日。 类型：[DayOfWeek](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_enums#enum-dayofweek) [h2]prop dayOfYear
    
    public prop dayOfYear: Int64

功能：获取 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例基于当前年份的第几日。 类型：[Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) [h2]prop hour
    
    public prop hour: Int64

功能：获取 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例的小时。 类型：[Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) [h2]prop isoWeek
    
    public prop isoWeek: (Int64, Int64)

功能：获取 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例基于 ISO8601 标准的年份和基于年的周数。 类型：([Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64), [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64)) [h2]prop minute
    
    public prop minute: Int64

功能：获取 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例的分钟。 类型：[Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) [h2]prop month
    
    public prop month: Month

功能：获取 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例的月份。 类型：[Month](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_enums#enum-month) [h2]prop monthValue
    
    public prop monthValue: Int64

功能：获取 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例以数字形式表示的月份。 类型：[Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) [h2]prop nanosecond
    
    public prop nanosecond: Int64

功能：获取 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例的纳秒。 类型：[Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) [h2]prop second
    
    public prop second: Int64

功能：获取 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例的秒。 类型：[Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) [h2]prop year
    
    public prop year: Int64

功能：获取 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例的年份。 类型：[Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) [h2]prop zone
    
    public prop zone: TimeZone

功能：获取 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例所关联的时区。 类型：[TimeZone](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_classes#class-timezone) [h2]prop zoneId
    
    public prop zoneId: String

功能：获取 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例所关联的 [TimeZone](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_classes#class-timezone) 实例的时区 ID。 类型：[String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) [h2]prop zoneOffset
    
    public prop zoneOffset: Duration

功能：获取 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例所关联的 [TimeZone](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_classes#class-timezone) 实例的时间偏移。 类型：[Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) [h2]static func fromUnixTimeStamp(Duration)
    
    public static func fromUnixTimeStamp(d: Duration): DateTime

功能：获取自 UnixEpoch 开始，参数 d 指定时间间隔后的日期时间。 参数：
    * d: [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) \- 时间间隔。
返回值：
    * [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- 自 UnixEpoch 开始，指定 d 后的日期时间。
异常：
    * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-arithmeticexception) \- 当结果超过日期时间的表示范围时，抛出异常。
[h2]static func now(TimeZone)
    
    public static func now(timeZone!: TimeZone = TimeZone.Local): DateTime

功能：获取参数 timeZone 指定时区的当前时间。该方法获取的当前时间受系统时间影响，如存在使用不受系统时间影响的计时场景，可使用 [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime).now() 替代。 参数：
    * timeZone!: [TimeZone](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_classes#class-timezone) \- 时区，默认为本地时区。
返回值：
    * [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- 返回指定时区当前时间。
[h2]static func nowUTC()
    
    public static func nowUTC(): DateTime

功能：获取 UTC 时区的当前时间。该方法获取的当前时间受系统时间影响，如存在使用不受系统时间影响的计时场景，可使用 [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime).now() 替代。 返回值：
    * [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- UTC 时区当前时间。
[h2]static func of(Int64, Int64, Int64, Int64, Int64, Int64, Int64, TimeZone)
    
    public static func of(
        year!: Int64,
        month!: Int64,
        dayOfMonth!: Int64,
        hour!: Int64 = 0,
        minute!: Int64 = 0,
        second!: Int64 = 0,
        nanosecond!: Int64 = 0,
        timeZone!: TimeZone = TimeZone.Local
    ): DateTime

功能：根据参数指定的年、月、日、时、分、秒、纳秒、时区构造 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。 参数：
    * year!: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 年，范围[-999,999,999, 999,999,999]。
    * month!: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 月，范围[1, 12]。
    * dayOfMonth!: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 日，范围[1, 31]，最大取值需要跟 month 匹配，可能是 28、29、30、31。
    * hour!: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 时，范围[0, 23]。
    * minute!: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 分，范围[0, 59]。
    * second!: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 秒，范围[0, 59]。
    * nanosecond!: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 纳秒，范围[0, 999,999,999]。
    * timeZone!: [TimeZone](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_classes#class-timezone) \- 时区。
返回值：
    * [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- 根据指定参数构造的 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。
异常：
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 当参数值超出指定范围，抛出异常。
[h2]static func of(Int64, Month, Int64, Int64, Int64, Int64, Int64, TimeZone)
    
    public static func of(
        year!: Int64,
        month!: Month,
        dayOfMonth!: Int64,
        hour!: Int64 = 0,
        minute!: Int64 = 0,
        second!: Int64 = 0,
        nanosecond!: Int64 = 0,
        timeZone!: TimeZone = TimeZone.Local
    ): DateTime

功能：根据参数指定的年、月、日、时、分、秒、纳秒、时区构造 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。 参数：
    * year!: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 年，范围[-999,999,999, 999,999,999]。
    * month!: [Month](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_enums#enum-month) \- 月，[Month](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_enums#enum-month) 类型。
    * dayOfMonth!: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 日，范围[1, 31]，最大取值需要跟 month 匹配，可能是 28、29、30、31。
    * hour!: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 时，范围[0, 23]。
    * minute!: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 分，范围[0, 59]。
    * second!: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 秒，范围[0, 59]。
    * nanosecond!: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 纳秒，范围[0, 999,999,999]。
    * timeZone!: [TimeZone](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_classes#class-timezone) \- 时区。
返回值：
    * [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- 根据指定参数构造的 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。
异常：
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 当参数值超出指定范围，抛出异常。
[h2]static func ofEpoch(Int64, Int64)
    
    public static func ofEpoch(second!: Int64, nanosecond!: Int64): DateTime

功能：根据入参 second 和 nanosecond 构造 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。入参 second 表示 unix 时间的秒部分，nanosecond 表示 unix 时间的纳秒部分。unix 时间以 UnixEpoch 开始计算，nanosecond 的范围不可以超过[0, 999,999,999]，否则抛出异常。 参数：
    * second!: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- unix 时间的秒部分。
    * nanosecond!: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- unix 时间的纳秒部分，范围不可以超过[0, 999,999,999]。
返回值：
    * [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- 自 UnixEpoch 开始，指定 second 和 nanosecond 后的时间。
异常：
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 当 nanosecond 值超出指定范围时，抛出异常。
    * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-arithmeticexception) \- 当结果超过日期时间的表示范围时，抛出异常。
[h2]static func ofUTC(Int64, Int64, Int64, Int64, Int64, Int64, Int64, TimeZone)
    
    public static func ofUTC(
        year!: Int64,
        month!: Int64,
        dayOfMonth!: Int64,
        hour!: Int64 = 0,
        minute!: Int64 = 0,
        second!: Int64 = 0,
        nanosecond!: Int64 = 0
    ): DateTime

功能：根据参数指定的年、月、日、时、分、秒、纳秒构造 UTC 时区 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。 参数：
    * year!: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 年，范围[-999,999,999, 999,999,999]。
    * month!: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 月，范围[1, 12]。
    * dayOfMonth!: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 日，范围[1, 31]，最大取值需要跟 month 匹配，可能是 28、29、30、31。
    * hour!: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 时，范围[0, 23]。
    * minute!: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 分，范围[0, 59]。
    * second!: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 秒，范围[0, 59]。
    * nanosecond!: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 纳秒，范围[0, 999,999,999]。
返回值：
    * [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- 根据指定参数构造的 UTC 时区 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。
异常：
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 当参数值超出指定范围时，抛出异常
[h2]static func ofUTC(Int64, Month, Int64, Int64, Int64, Int64, Int64, TimeZone)
    
    public static func ofUTC(
        year!: Int64,
        month!: Month,
        dayOfMonth!: Int64,
        hour!: Int64 = 0,
        minute!: Int64 = 0,
        second!: Int64 = 0,
        nanosecond!: Int64 = 0
    ): DateTime

功能：根据参数指定的年、月、日、时、分、秒、纳秒构造 UTC 时区 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。 参数：
    * year!: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 年，范围[-999,999,999, 999,999,999]。
    * month!: [Month](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_enums#enum-month) \- 月，[Month](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_enums#enum-month) 类型
    * dayOfMonth!: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 日, 范围[1, 31]，最大取值需要跟 month 匹配，可能是 28、29、30、31。
    * hour!: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 时，范围[0, 23]。
    * minute!: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 分，范围[0, 59]。
    * second!: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 秒，范围[0, 59]。
    * nanosecond!: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 纳秒，范围[0, 999,999,999]。
返回值：
    * [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- 根据指定参数构造的 UTC 时区 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。
异常：
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 当参数值超出指定范围时，抛出异常。
[h2]static func parse(String)
    
    public static func parse(str: String): DateTime

功能：从参数 str 中解析得到时间，解析成功时返回 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。 参数：
    * str: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 时间字符串，格式为 RFC3339 中 date-time 格式，可包含小数秒，如 "2023-04-10T08:00:00[.123456]+08:00"([] 中的内容表示可选项)。
返回值：
    * [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- 从参数 str 中解析出的 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。
异常：
    * [TimeParseException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_exceptions#class-timeparseexception) \- 无法正常解析时，抛出异常。
[h2]static func parse(String, String)
    
    public static func parse(str: String, format: String): DateTime

功能：根据 format 指定的时间格式，从字符串 str 中解析得到时间，解析成功时返回 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例，解析具体规格可见下文“从字符串中解析得到时间”模块。 参数：
    * str: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 时间字符串，例如："2023/04/10 08:00:00 +08:00"。
    * format: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 时间字符串的格式，例如："yyyy/MM/dd HH:mm:ss OOOO"。格式说明详见[时间字符串格式](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_overview#时间字符串格式)。
返回值：
    * [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- 根据参数 format 指定的时间格式，从参数 str 中解析出的 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。
异常：
    * [TimeParseException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_exceptions#class-timeparseexception) \- 当无法正常解析时，或存在同一 format 的多次取值时，抛出异常。
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 当 format 格式不正确时，抛出异常。
[h2]func addDays(Int64)
    
    public func addDays(n: Int64): DateTime

功能：获取 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例 n 天之后的时间，返回新的 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。 参数：
    * n: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 自 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例后多少天的数量。
返回值：
    * [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例 n 天后的时间。
异常：
    * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-arithmeticexception) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例 n 天后的日期时间超过表示范围时，抛出异常。
[h2]func addHours(Int64)
    
    public func addHours(n: Int64): DateTime

功能：获取 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例 n 小时之后的时间，返回新的 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。 参数：
    * n: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 自 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例后多少小时的数量。
返回值：
    * [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例 n 小时后的时间。
异常：
    * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-arithmeticexception) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例 n 小时后的日期时间超过表示范围时，抛出异常。
[h2]func addMinutes(Int64)
    
    public func addMinutes(n: Int64): DateTime

功能：获取 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例 n 分钟之后的时间，返回新的 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。 参数：
    * n: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 自 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例后多少分钟的数量。
返回值：
    * [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例 n 分钟后的时间。
异常：
    * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-arithmeticexception) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例 n 分钟后的日期时间超过表示范围时，抛出异常。
[h2]func addMonths(Int64)
    
    public func addMonths(n: Int64): DateTime

功能：获取 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例 n 月之后的时间，返回新的 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240621215220.03650858974207347697063342714918:50001231000000:2800:AD590436C104CAA9E03B082DE5D2839D6DBFDB7A2224C88E1947D14487593DB7.png?needInitFileName=true?needInitFileName=true) 由于月的间隔不固定，若设 dt 表示 “2020年3月30日”，dt.addMonths(1) 不会返回非法日期“2020年3月31日”。为了尽量返回有效的日期，会偏移到当月最后一天，返回“2020年4月30日”。 参数：
    * n: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 自 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例后多少月的数量。
返回值：
    * [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例 n 月后的时间。
异常：
    * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-arithmeticexception) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例 n 月后的日期时间超过表示范围时，抛出异常。
[h2]func addNanoseconds(Int64)
    
    public func addNanoseconds(n: Int64): DateTime

功能：获取 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例 n 纳秒之后的时间，返回新的 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。 参数：
    * n: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 自 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例后多少纳秒的数量。
返回值：
    * [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例 n 纳秒后的时间。
异常：
    * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-arithmeticexception) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例 n 纳秒后时间的日期时间超过表示范围时，抛出异常。
[h2]func addSeconds(Int64)
    
    public func addSeconds(n: Int64): DateTime

功能：获取 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例 n 秒之后的时间，返回新的 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。 参数：
    * n: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 自 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例后多少秒的数量。
返回值：
    * [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例 n 秒后的时间。
异常：
    * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-arithmeticexception) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例 n 秒后的日期时间超过表示范围时，抛出异常。
[h2]func addWeeks(Int64)
    
    public func addWeeks(n: Int64): DateTime

功能：获取 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例 n 周之后的时间，返回新的 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。 参数：
    * n: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 自 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例后多少周的数量。
返回值：
    * [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例 n 周后的时间。
异常： 功能：获取入参 n 周之后的时间，返回新的 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。 [h2]func addYears(Int64)
    
    public func addYears(n: Int64): DateTime

功能：获取 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例 n 年之后的时间，返回新的 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240621215220.57434834858446473748166498820252:50001231000000:2800:9B94B3C06B5258071E7375C5DBE9E97DA6353B775AABBB37732DF239E8AC59E8.png?needInitFileName=true?needInitFileName=true) 由于年的间隔不固定，若设 dt 表示 “2020年2月29日”，dt.addYears(1) 不会返回非法日期“2021年2月29日”。为了尽量返回有效的日期，会偏移到当月最后一天，返回 “2021年2月28日”。 参数：
    * n: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 自 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例后多少年的数量。
返回值：
    * [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例 n 年后的时间。
异常：
    * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-arithmeticexception) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例 n 年后的日期时间超过表示范围时，抛出异常。
[h2]func compare(DateTime)
    
    public func compare(rhs: DateTime): Ordering

功能：判断一个 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例与参数 rhs 的大小关系。如果大于，返回 [Ordering](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-ordering).GT；如果等于，返回 [Ordering](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-ordering).EQ；如果小于，返回 [Ordering](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-ordering).LT。 参数：
    * rhs: [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- 参与比较的 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。
返回值：
    * [Ordering](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-ordering) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例与 rhs 大小关系。
[h2]func hashCode()
    
    public func hashCode(): Int64

功能：获取 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例的哈希值。 返回值：
    * [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 哈希值。
[h2]func inLocal()
    
    public func inLocal(): DateTime

功能：获取 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例在本地时区的时间。 返回值：
    * [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例在本地时区的时间。
异常：
    * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-arithmeticexception) \- 当返回的 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例表示的日期时间超过表示范围时，抛出异常。
[h2]func inTimeZone(TimeZone)
    
    public func inTimeZone(timeZone: TimeZone): DateTime

功能：获取 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例在参数 timeZone 指定时区的时间。 参数：
    * timeZone: [TimeZone](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_classes#class-timezone) \- 目标时区。
返回值：
    * [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例在参数 timezone 指定时区的时间。
异常：
    * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-arithmeticexception) \- 当返回的 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例表示的日期时间超过表示范围时，抛出异常。
[h2]func inUTC()
    
    public func inUTC(): DateTime

功能：获取 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例在 UTC 时区的时间。 返回值：
    * [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例在 UTC 时区的时间。
异常：
    * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-arithmeticexception) \- 当返回的 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例表示的日期时间超过表示范围时，抛出异常。
[h2]func toString()
    
    public func toString(): String

功能：返回一个表示 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例的字符串，其格式为 RFC3339 中 date-time 格式，如果时间包含纳秒信息（不为零），会打印出小数秒。 返回值：
    * [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例的字符串表示。
[h2]func toString(String)
    
    public func toString(format: String): String

功能：返回一个表示 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例的字符串，其格式由参数 format 指定。格式说明详见[时间字符串格式](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_overview#时间字符串格式) 参数：
    * format: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 返回字符串的格式，其格式可为 "yyyy/MM/dd HH:mm:ss OOOO"。
返回值：
    * [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例在 format 指定格式下的字符串。
异常：
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 当 format 格式不正确时，抛出异常。
[h2]func toUnixTimeStamp()
    
    public func toUnixTimeStamp(): Duration

功能：获取当前实例自 UnixEpoch 的时间间隔。 返回值：
    * [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) \- 当前实例自 UnixEpoch 的时间间隔。
[h2]operator func !=(DateTime)
    
    public operator func !=(r: DateTime): Bool

功能：判断当前 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例是否不等于 r。 若两个 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 不相等，那么它们指向的不是同一 UTC 时间。 参数：
    * r: [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。
返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- true 或 false。当前 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例不等于 r 时，返回 true；否则，返回 false。
[h2]operator func +(Duration)
    
    public operator func +(r: Duration): DateTime

功能：实现 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 类型和 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 类型加法，即 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \+ [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 运算。 参数：
    * r: [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) \- 加法的右操作数。
返回值：
    * [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 类型实例和 r 的和。
异常：
    * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-arithmeticexception) \- 当结果超过日期时间的表示范围时，抛出异常。
[h2]operator func -(DateTime)
    
    public operator func -(r: DateTime): Duration

功能：实现 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 类型之间的减法，即 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 运算。 参数：
    * r: [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- 减法的右操作数。
返回值：
    * [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 类型实例和 r 的差。
[h2]operator func -(Duration)
    
    public operator func -(r: Duration): DateTime

功能：实现 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 类型和 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 类型减法，即 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 运算。 参数：
    * r: [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) \- 减法的右操作数。
返回值：
    * [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 类型实例和 r 的差。
异常：
    * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-arithmeticexception) \- 当结果超过日期时间的表示范围时，抛出异常。
[h2]operator func <(DateTime)
    
    public operator func <(r: DateTime): Bool

功能：判断当前 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例是否早于 r（指向更早的 UTC 时间的 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 更小）。 参数：
    * r: [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。
返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- true 或 false。当前 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例早于 r 时，返回 true；否则，返回 false。
[h2]operator func <=(DateTime)
    
    public operator func <=(r: DateTime): Bool

功能：判断当前 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例是否早于或等于 r（指向更早的 UTC 时间的 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 更小）。 参数：
    * r: [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。
返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- true 或 false。当前 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例早于或等于 r 时，返回 true；否则，返回 false。
[h2]operator func ==(DateTime)
    
    public operator func ==(r: DateTime): Bool

功能：判断当前 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例是否等于 r。 若两个 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 相等，那么它们指向同一 UTC 时间。 参数：
    * r: [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。
返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- true 或 false。当前 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例等于 r 时，返回 true；否则，返回 false。
[h2]operator func >(DateTime)
    
    public operator func >(r: DateTime): Bool

功能：判断当前 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例是否晚于 r（指向更晚的 UTC 时间的 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 更大）。 参数：
    * r: [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。
返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- true 或 false。当前 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例晚于 r 时，返回 true；否则，返回 false。
[h2]operator func >=(DateTime)
    
    public operator func >=(r: DateTime): Bool

功能：判断当前 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例是否晚于或等于 r（指向更晚的 UTC 时间的 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 更大）。 参数：
    * r: [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。
返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- true 或 false。当前 [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例晚于或等于 r 时，返回 true；否则，返回 false。
struct Duration
    
    public struct Duration <: ToString & Hashable & Comparable<Duration>

功能：[Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 表示时间间隔，是一个描述一段时间的时间类型，提供了常用的静态实例，以及计算、比较等功能。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240621215220.91995633285719592547937661888078:50001231000000:2800:1933594A4FCC328083F9A3A5A51AF032029DDD7A98DB7122E9C0DD98BB6F6D1F.png?needInitFileName=true?needInitFileName=true)
    * [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 表示范围为 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration).Min 至 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration).Max，数值表示为 [-263, 263)（单位为秒），精度为纳秒。
    * [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 每个时间单位均用整数表示，如果实际值不为整数，则向绝对值小的方向取整。例如表示 1小时30分46秒 的 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例调用 toHours 方法，将返回结果 1 而不是 1.5 或 2。
[h2]static prop Max
    
    public static prop Max: Duration

功能：表示最大时间间隔的 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例。 类型：[Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) [h2]static prop Min
    
    public static prop Min: Duration

功能：表示最小时间间隔的 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例。 类型：[Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) [h2]static prop Zero
    
    public static prop Zero: Duration

功能：表示 0 纳秒时间间隔的 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例。 类型：[Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) [h2]static prop day
    
    public static prop day: Duration

功能：表示 1 天时间间隔的 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例。 类型：[Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) [h2]static prop hour
    
    public static prop hour: Duration

功能：表示 1 小时时间间隔的 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例。 类型：[Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) [h2]static prop microsecond
    
    public static prop microsecond: Duration

功能：表示 1 微秒时间间隔的 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例。 类型：[Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) [h2]static prop millisecond
    
    public static prop millisecond: Duration

功能：表示 1 毫秒时间间隔的 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例。 类型：[Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) [h2]static prop minute
    
    public static prop minute: Duration

功能：表示 1 分钟时间间隔的 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例。 类型：[Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) [h2]static prop nanosecond
    
    public static prop nanosecond: Duration

功能：表示 1 纳秒时间间隔的 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例。 类型：[Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) [h2]static prop second
    
    public static prop second: Duration

功能：表示 1 秒时间间隔的 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例。 类型：[Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) [h2]static func since(DateTime)
    
    public static func since(t: DateTime): Duration

功能：计算从参数 t 开始到当前时间为止的时间间隔。 参数：
    * t: [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。
返回值：
    * [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) \- [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例。
[h2]static func until(DateTime)
    
    public static func until(t: DateTime): Duration

功能：计算从当前时间开始到参数 t 为止的时间间隔。 参数：
    * t: [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) \- [DateTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-datetime) 实例。
返回值：
    * [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) \- [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例。
[h2]func abs()
    
    public func abs(): Duration

功能：返回一个新的 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例，其值大小为当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例绝对值。 返回值：
    * [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) \- 当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例取绝对值的结果。
异常：
    * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-arithmeticexception) \- 如果当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例等于 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration).Min，会因为取绝对值超出 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 表示范围而抛异常。
[h2]func compare(Duration)
    
    public func compare(rhs: Duration): Ordering

功能：比较当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例与另一个 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例的关系，如果大于，返回 [Ordering](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-ordering).GT；如果等于，返回 [Ordering](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-ordering).EQ；如果小于，返回 [Ordering](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-ordering).LT。 参数：
    * rhs: [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) \- 参与比较的 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例。
返回值：
    * [Ordering](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-ordering) \- 当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例与 rhs 的大小关系。
[h2]func hashCode()
    
    public func hashCode(): Int64

功能：获得当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例的哈希值。 返回值：
    * [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例的哈希值。
[h2]func toDays()
    
    public func toDays(): Int64

功能：获得当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例以天为单位的整数大小。 返回值：
    * [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例以天为单位的大小。
[h2]func toHours()
    
    public func toHours(): Int64

功能：获得当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例以小时为单位的整数大小。 返回值：
    * [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例以小时为单位的大小。
[h2]func toMicroseconds()
    
    public func toMicroseconds(): Int64

功能：获得当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例以微秒为单位的整数大小。 返回值：
    * [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例以微秒为单位的大小。
异常：
    * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-arithmeticexception) \- 当 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例以微秒为单位的大小超过 [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) 表示范围时，抛出异常。
[h2]func toMilliseconds()
    
    public func toMilliseconds(): Int64

功能：获得当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例以毫秒为单位的整数大小。 返回值：
    * [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例以毫秒为单位的大小。
异常：
    * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-arithmeticexception) \- 当 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例以毫秒为单位的大小超过 [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) 表示范围时，抛出异常。
[h2]func toMinutes()
    
    public func toMinutes(): Int64

功能：获得当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例以分钟为单位的整数大小。 返回值：
    * [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例以分钟为单位的大小。
[h2]func toNanoseconds()
    
    public func toNanoseconds(): Int64

功能：获得当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例以纳秒为单位的整数大小，向绝对值小的方向取整。 返回值：
    * [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例以纳秒为单位的大小。
异常：
    * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-arithmeticexception) \- 当 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例以“纳秒”为单位的大小超过 [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) 表示范围时，抛出异常。
[h2]func toSeconds()
    
    public func toSeconds(): Int64

功能：获得当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例以秒为单位的整数大小。 返回值：
    * [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例以秒为单位的大小。
[h2]func toString()
    
    public func toString(): String

功能：获得当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例的字符串表示，格式形如："1d2h3m4s5ms6us7ns"，表示“1天2小时3分钟4秒5毫秒6微秒7纳秒”。某个单位下数值为 0 时此项会被省略，特别地，当所有单位下数值都为 0 时，返回 "0s"。 返回值：
    * [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例的字符串表示。
[h2]operator func !=(Duration)
    
    public operator func !=(r: Duration): Bool

功能：判断当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例是否不等于 r。 参数：
    * r: [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) \- [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例。
返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- true 或 false。当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例不等于 r 时，返回 true；否则，返回 false。
[h2]operator func *(Float64)
    
    public operator func *(r: Float64): Duration

功能：实现 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 类型与 [Float64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float64) 类型的乘法，即 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) * [Float64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float64) 运算。 参数：
    * r: [Float64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float64) \- 乘法的右操作数。
返回值：
    * [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) \- [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 类型实例和 r 的乘积。
异常：
    * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-arithmeticexception) \- 当相乘后的结果超出 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 的表示范围时，抛出异常。
[h2]operator func *(Int64)
    
    public operator func *(r: Int64): Duration

功能：实现 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 类型与 [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) 类型的乘法，即 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) * [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) 运算。 参数：
    * r: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 乘法的右操作数。
返回值：
    * [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) \- [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 类型实例和 r 的乘积。
异常：
    * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-arithmeticexception) \- 当相乘后的结果超出 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 的表示范围时，抛出异常。
[h2]operator func +(Duration)
    
    public operator func +(r: Duration): Duration

功能：实现 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 类型之间的加法，即 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) \+ [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 运算。 参数：
    * r: [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) \- 加法的右操作数。
返回值：
    * [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) \- [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 类型实例和 r 的和。
异常：
    * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-arithmeticexception) \- 当相加后的结果超出 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 的表示范围时，抛出异常。
[h2]operator func -(Duration)
    
    public operator func -(r: Duration): Duration

功能：实现 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 类型之间的减法，即 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) \- [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 运算。 参数：
    * r: [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) \- 减法的右操作数。
返回值：
    * [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) \- [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 类型实例和 r 的差。
异常：
    * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-arithmeticexception) \- 当相减后的结果超出 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 的表示范围时，抛出异常。
[h2]operator func /(Duration)
    
    public operator func /(r: Duration): Float64

功能：实现 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 类型与 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 类型的除法，即 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) / [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 运算。 参数：
    * r: [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) \- 除数。
返回值：
    * [Float64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float64) \- [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 类型实例和 r 的商。
异常：
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 当 r 等于 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration).Zero 时，抛出异常。
[h2]operator func /(Float64)
    
    public operator func /(r: Float64): Duration

功能：实现 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 类型与 [Float64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float64) 类型的除法，即 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) / [Float64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float64) 运算。 参数：
    * r: [Float64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float64) \- 除数。
返回值：
    * [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) \- [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 类型实例和 r 的商。
异常：
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 当 r 等于 0 时，抛出异常。
    * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-arithmeticexception) \- 当相除后的结果超出 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 的表示范围时，抛出异常。
[h2]operator func /(Int64)
    
    public operator func /(r: Int64): Duration

功能：实现 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 类型与 [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) 类型的除法，即 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) / [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) 运算。 参数：
    * r: [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 除数。
返回值：
    * [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) \- [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 类型实例和 r 的商。
异常：
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 当 r 等于 0 时，抛出异常。
    * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-arithmeticexception) \- 当相除后的结果超出 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 的表示范围时，抛出异常。
[h2]operator func <(Duration)
    
    public operator func <(r: Duration): Bool

功能：判断当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例是否小于 r。 参数：
    * r: [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) \- [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例。
返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- true 或 false。当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例小于 r 时，返回 true；否则，返回 false。
[h2]operator func <=(Duration)
    
    public operator func <=(r: Duration): Bool

功能：判断当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例是否小于等于 r。 参数：
    * r: [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) \- [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例。
返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- true 或 false。当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例小于等于 r 时，返回 true；否则，返回 false。
[h2]operator func ==(Duration)
    
    public operator func ==(r: Duration): Bool

功能：判断当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例是否等于 r。 参数：
    * r: [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) \- [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例。
返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- true 或 false。当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例等于 r 时，返回 true；否则，返回 false。
[h2]operator func >(Duration)
    
    public operator func >(r: Duration): Bool

功能：判断当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例是否大于 r。 参数：
    * r: [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) \- [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例。
返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- true 或 false。当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例大于 r 时，返回 true；否则，返回 false。
[h2]operator func >=(Duration)
    
    public operator func >=(r: Duration): Bool

功能：判断当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例是否大于等于 r。 参数：
    * r: [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) \- [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例。
返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- true 或 false。当前 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 实例大于等于 r 时，返回 true；否则，返回 false。
struct MonoTime
    
    public struct MonoTime <: Hashable & Comparable<MonoTime>

功能：[MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) 表示单调时间，是一个用来衡量经过时间的时间类型，类似于一直运行的秒表，提供了获取当前时间，计算和比较等功能。
    * [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) 可表示的范围为 Duration.Zero 至 Duration.Max，数值表示为 [0, 263)（单位为秒），精度为纳秒。通过 now 方法创建的 [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) 总是晚于先使用该方式创建的 [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime)，常用于性能测试和时间优先的任务队列。
    * 以下为 [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) 中 now 函数获取当前时间使用的系统调用函数： 系统 | 系统调用函数 | 时钟类型  
---|---|---  
Linux | clock_gettime | CLOCK_MONOTONIC  
Windows | clock_gettime | CLOCK_MONOTONIC  
macOS | clock_gettime | CLOCK_MONOTONIC  
[h2]static func now()
    
    public static func now(): MonoTime

功能：获取与当前时间对应的 [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime)。 返回值：
    * [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) \- 与当前时间对应的 [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime)。
[h2]func compare(MonoTime)
    
    public func compare(rhs: MonoTime): Ordering

功能：判断一个 [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) 实例与参数 rhs 的大小关系。如果大于，返回 [Ordering](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-ordering).GT；如果等于，返回 [Ordering](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-ordering).EQ；如果小于，返回 [Ordering](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-ordering).LT。 参数：
    * rhs: [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) \- 参与比较的 [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) 实例。
返回值：
    * [Ordering](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-ordering) \- 当前 [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) 实例与 rhs 大小关系。
[h2]func hashCode()
    
    public func hashCode(): Int64

功能：获取当前 [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) 实例的哈希值。 返回值：
    * [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 哈希值。
[h2]operator func !=(MonoTime)
    
    public operator func !=(r: MonoTime): Bool

功能：判断当前 [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) 实例是否不等于 r。 参数：
    * r: [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) \- 单调时间。
返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- true 或 false。当前 [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) 实例不等于 r 时，返回 true；否则，返回 false。
[h2]operator func +(Duration)
    
    public operator func +(r: Duration): MonoTime

功能：实现 [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) 类型和 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 类型加法，即 [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) \+ [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 运算。 参数：
    * r: [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) \- 时间间隔。
返回值：
    * [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) \- 参数 r 表示时间间隔后的单调时间。
异常：
    * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-arithmeticexception) \- 当结果超过单调时间的表示范围时，抛出异常。
[h2]operator func -(Duration)
    
    public operator func -(r: Duration): MonoTime

功能：实现 [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) 类型和 [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 类型减法，即 [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) \- [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) 运算。 参数：
    * r: [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) \- 时间间隔。
返回值：
    * [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) \- 参数 r 表示时间间隔前的单调时间。
异常：
    * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-arithmeticexception) \- 当结果超过单调时间的表示范围时，抛出异常。
[h2]operator func -(MonoTime)
    
    public operator func -(r: MonoTime): Duration

功能：实现 [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) 类型之间的减法，即 [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) \- [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) 运算。 参数：
    * r: [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) \- 单调时间。
返回值：
    * [Duration](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-duration) \- 当前实例距 r 经过的时间间隔。
[h2]operator func <(MonoTime)
    
    public operator func <(r: MonoTime): Bool

功能：判断当前 [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) 实例是否早于 r。 参数：
    * r: [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) \- 单调时间。
返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- true 或 false。当前 [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) 实例早于 r 时，返回 true；否则，返回 false。
[h2]operator func <=(MonoTime)
    
    public operator func <=(r: MonoTime): Bool

功能：判断当前 [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) 实例是否早于或等于 r。 参数：
    * r: [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) \- 单调时间。
返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- true 或 false。当前 [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) 实例早于或等于 r 时，返回 true；否则，返回 false。
[h2]operator func ==(MonoTime)
    
    public operator func ==(r: MonoTime): Bool

功能：判断当前 [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) 实例是否等于 r。 参数：
    * r: [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) \- 单调时间。
返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- true 或 false。当前 [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) 实例等于 r 时，返回 true；否则，返回 false。
[h2]operator func >(MonoTime)
    
    public operator func >(r: MonoTime): Bool

功能：判断当前 [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) 实例是否晚于 r。 参数：
    * r: [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) \- 单调时间。
返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- true 或 false。当前 [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) 实例晚于 r 时，返回 true；否则，返回 false。
[h2]operator func >=(MonoTime)
    
    public operator func >=(r: MonoTime): Bool

功能：判断当前 [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) 实例是否晚于或等于 r。 参数：
    * r: [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) \- 单调时间。
返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- true 或 false。当前 [MonoTime](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/time_package_structs#struct-monotime) 实例晚于或等于 r 时，返回 true；否则，返回 false。
