---
name: cangjie-references/cj-runtime_package_types
title: 类型别名
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_types
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.runtime / 类型别名
---

# 类型别名

#### type SignalHandlerFunc
    
    
    public type SignalHandlerFunc = (Int32) -> Bool

功能：定义一个信号处理函数 (Int32) -> Bool，在注册信号回调函数时，可以同一个信号注册多个回调函数组成函数处理链。函数返回值是 true 则停止后续函数的执行，否则继续执行后续函数，直到所有注册的函数执行完。如果该信号的处理的最后一个函数返回值是 false 则会继续执行该信号的默认行为，否则不会执行该信号的默认行为。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/71/v3/6g7FOv6yT1uH3Bn9dDPPJg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=4C2A495FACDE75BDB8012C6CD87875A8CCEC23ED8764CA3318DB07B11D1B8A7D)

不支持平台：Windows。

示例：
    
    
    import std.runtime.*
    
    func signalHandler(sigValue: Int32): Bool {
        println("signalHandler 接收到信号: ${sigValue}")
        let stop: Bool = false
        println("signalHandler 是否停止后续？${stop}")
        return stop
    }
    
    main() {
        let isSignalHandlerFunc = {_: Int32 => return true} is SignalHandlerFunc
        println("是否是信号处理函数: ${isSignalHandlerFunc}")
        println("是否是信号处理函数: ${signalHandler is SignalHandlerFunc}")
    }

可能的运行结果：
    
    
    是否是信号处理函数: true
    是否是信号处理函数: true
