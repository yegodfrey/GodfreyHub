---
name: cangjie-references/cj-sync_package_constants_vars
title: 常量&变量
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_constants_vars
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.sync / 常量&变量
---

# 常量&变量

#### let DefaultMemoryOrder (deprecated)
    
    
    public let DefaultMemoryOrder: MemoryOrder = MemoryOrder.SeqCst

功能：默认内存顺序，详见枚举 [MemoryOrder (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_enums#enum-memoryorder-deprecated)。

类型：[MemoryOrder (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_enums#enum-memoryorder-deprecated)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1/v3/cfsph1-rQReX02cxGjKWHA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=5922508575D9D2AF3257772CC3AB9B067927803FDB1200D9066C5E556C1454A0)

未来版本即将废弃。

示例：
    
    
    import std.sync.*
    
    main(): Unit {
        // 创建一个 AtomicBool 实例
        let atomicBool = AtomicBool(false)
        println("初始值: ${atomicBool.load()}")
    
        // 使用 deprecated 的 compareAndSwap 方法（带 MemoryOrder 参数）
        let result = atomicBool.compareAndSwap(false, true, successOrder: DefaultMemoryOrder,
            failureOrder: DefaultMemoryOrder)
        println("使用 deprecated 的 compareAndSwap 方法结果: ${result}")
        println("操作后值: ${atomicBool.load()}")
    }

运行结果：
    
    
    初始值: false
    使用 deprecated 的 compareAndSwap 方法结果: true
    操作后值: true
