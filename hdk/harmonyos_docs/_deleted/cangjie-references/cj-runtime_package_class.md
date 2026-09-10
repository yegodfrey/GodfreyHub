---
name: cangjie-references/cj-runtime_package_class
title: 类
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_class
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.runtime / 类
---

# 类

#### class Signal
    
    
    public class Signal {
        public static const SIGHUP = Signal(0x1, "hangup")
        public static const SIGINT = Signal(0x2, "interrupt")
        public static const SIGQUIT = Signal(0x3, "quit")
        public static const SIGTRAP = Signal(0x5, "trace/breakpoint trap")
        public static const SIGALRM = Signal(0xe, "alarm clock")
        public static const SIGTERM = Signal(0xf, "terminated")
        public const init(value: Int32, comment: String)
    }

功能：信号类，用于向操作系统、其他进程或进程自身传递事件的通知。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b8/v3/x8HJ8syWTLWpljtMlC18JA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=5334F2B1BF0468948A9B680EDF74E6FFEC5021F0380A658E38BD5907D45C4E81)

不支持平台：Windows。

#### [h2]static const SIGALRM
    
    
    public static const SIGALRM = Signal(0xe, "alarm clock")

功能：SIGALRM 信号，定时器超时。

类型：[Signal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_class#class-signal)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f5/v3/aPNOw8N3Q3qJupEl5zC1BQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=BF392BF7C34DD3F68027CC8DA420BF3AD22AFA95F4192A085F75E450F0F9EC7A)

不支持平台：Windows。

示例：
    
    
    import std.runtime.*
    
    main() {
        // 使用预定义的SIGALRM信号
        println("SIGALRM信号值: ${Signal.SIGALRM.value}")
        return 0
    }

运行结果：
    
    
    SIGALRM信号值: 14

#### [h2]static const SIGHUP
    
    
    public static const SIGHUP = Signal(0x1, "hangup")

功能：SIGHUP 信号，终端挂起或进程父进程退出。

类型：[Signal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_class#class-signal)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/70/v3/aUV2s2MeSdKBdflWGFC76w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=1A378DBB6910836770001FABF967DED06DE85E50A37B29875379378124DBC200)

不支持平台：Windows。

示例：
    
    
    import std.runtime.*
    
    main() {
        // 使用预定义的SIGHUP信号
        println("SIGHUP信号值: ${Signal.SIGHUP.value}")
        return 0
    }

运行结果：
    
    
    SIGHUP信号值: 1

#### [h2]static const SIGINT
    
    
    public static const SIGINT = Signal(0x2, "interrupt")

功能：SIGINT 信号，表示用户中断。

类型：[Signal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_class#class-signal)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/58/v3/oddaLoJlTZ6qCKvJhfKLlQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=645C5B5CCB9FE100F8BA798A5E55DFBB844D1953C016766A1C9B822121D3E901)

不支持平台：Windows。

示例：
    
    
    import std.runtime.*
    
    main() {
        // 使用预定义的SIGINT信号
        println("SIGINT信号值: ${Signal.SIGINT.value}")
        return 0
    }

运行结果：
    
    
    SIGINT信号值: 2

#### [h2]static const SIGQUIT
    
    
    public static const SIGQUIT = Signal(0x3, "quit")

功能：SIGQUIT 信号，表示用户退出。

类型：[Signal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_class#class-signal)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d0/v3/8V47tUxfTJqlWNd54vo85Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=973BFC538A579AEF1792CA68F2FB5841E6EA24894DB07076633822454CA9C4B4)

不支持平台：Windows。

示例：
    
    
    import std.runtime.*
    
    main() {
        // 使用预定义的SIGQUIT信号
        println("SIGQUIT信号值: ${Signal.SIGQUIT.value}")
        return 0
    }

运行结果：
    
    
    SIGQUIT信号值: 3

#### [h2]static const SIGTERM
    
    
    public static const SIGTERM = Signal(0xf, "terminated")

功能：SIGTERM 信号，终止请求。

类型：[Signal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_class#class-signal)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/86/v3/RfsMIN5cRQ6IX41RhgmpSg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=DE0292100A870C680144E4B6A1D8D1577EFEC3817BD436FDDCD0F417731B5030)

不支持平台：Windows。

示例：
    
    
    import std.runtime.*
    
    main() {
        // 使用预定义的SIGTERM信号
        println("SIGTERM信号值: ${Signal.SIGTERM.value}")
        return 0
    }

运行结果：
    
    
    SIGTERM信号值: 15

#### [h2]static const SIGTRAP
    
    
    public static const SIGTRAP = Signal(0x5, "trace/breakpoint trap")

功能：SIGTRAP 信号，调试断点触发。

类型：[Signal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_class#class-signal)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b6/v3/ERW44Q4OT4CeabW65uX4Aw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=2FDD84C2A06B8DD3507A5F40C85BF4D7FFD883160C19F3DA3CC40D2B216387A7)

不支持平台：Windows。

示例：
    
    
    import std.runtime.*
    
    main() {
        // 使用预定义的SIGTRAP信号
        println("SIGTRAP信号值: ${Signal.SIGTRAP.value}")
        return 0
    }

运行结果：
    
    
    SIGTRAP信号值: 5

#### [h2]prop value
    
    
    public prop value: Int32

功能：获取信号的值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/GKHfrEgPT--k_tkuQ-AMJQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=F0998FC92AEF160BE5B052A24E40DC4E9BCFF20E78A0F23F463B67B73D4B0BCA)

不支持平台：Windows。

示例：
    
    
    import std.runtime.*
    
    main() {
        // 获取预定义信号的值
        let signalValue = Signal.SIGTERM.value
        println("SIGTERM信号的值: ${signalValue}")
    
        // 创建自定义信号并获取值
        let customSignal = Signal(15, "my custom signal")
        println("自定义信号的值: ${customSignal.value}")
    
        return 0
    }

运行结果：
    
    
    SIGTERM信号的值: 15
    自定义信号的值: 15

#### [h2]init(Int32, String)
    
    
    public const init(value: Int32, comment: String)

功能：创建信号。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e2/v3/13Ob8KFSR6-usbAmxc2hBg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=4C995584E265F9D5CC60DD082E644BB615B9A7343B1D4FBE0F82E45308CA9386)

不支持平台：Windows。

参数：

  * value: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 信号值。
  * comment: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 信号描述。



示例：
    
    
    import std.runtime.*
    
    main() {
        // 创建一个自定义信号
        let customSignal = Signal(10, "custom signal")
        println("创建的信号值: ${customSignal.value}")
        return 0
    }

运行结果：
    
    
    创建的信号值: 10
