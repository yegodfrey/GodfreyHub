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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/36/v3/SZ044W-2Q62q1KUL0FYTTQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=41074554A8E4B9A59A257E174A7B06006897D9CAF38B0C5496A550A5A6D89762)

不支持平台：Windows。

#### [h2]static const SIGALRM
    
    
    public static const SIGALRM = Signal(0xe, "alarm clock")

功能：SIGALRM 信号，定时器超时。

类型：[Signal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_class#class-signal)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e0/v3/jKaopv6qTK2V39TKaVTL6A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=6FF53F32816F3547B9F4DCE02E226085F0F523A7F4C359C193855EB9475DA68B)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/46/v3/fLHCOXXPS6KB33eFCMrwmg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=9A2CAA97289A3DD460EDB703EB6B03426128DADF28D106BFDF84EB8767E1F834)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7d/v3/Pd3jyV0UQwuDAT_0mZTwjQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=DC24154CBA9C047262FD4177D4CF77EA5104666412A26CAE965DF397E2BC8786)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4f/v3/DY9ey1IwR2OEn1Ia3tUC_g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=EEA1FDE0E77D6EB0B514ACEFCDBC26B1C774DEBA5E86E5CDC29CCC1D14B15E2C)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/32/v3/xE87WEB7SheXy28mh495Bg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=01ABAF08285EDA44B6FA023455DB8D79323CEE3E7E38495B18B0771A8C81977F)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5a/v3/lg63VK-HT6Kj8c-3b4dXMg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=1637572147BD6A3085754B2CE27210380E260F3D386A2B7E405A46C0EB74CA80)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9a/v3/-T48NYpTRwKf8Y8MsZsxig/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=F9AA138A34A49EEC04367EFC0A6133A2D0FBAB59F512AA04C3139E81CD91535E)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/14/v3/MtnEI6xiTTO5zEeL34E6CQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=941881070302B63CFB40969EE3EB9B4504CE065BB323BC399EB47BA696642D2C)

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
