---
name: cangjie-references/cj-runtime_package_structs
title: 结构体
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_structs
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.runtime / 结构体
---

# 结构体

#### struct MemoryInfo (deprecated)
    
    
    public struct MemoryInfo {}

功能：提供获取一些堆内存统计数据的接口。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9f/v3/VaWY8uOcS8a4rxvEsuyzPA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=A5BD8074E01F7831AD26C7578B653F2827F29588D3F0DB21CA02E5502FBD90D4)

未来版本即将废弃，使用全局函数[getAllocatedHeapSize](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-getallocatedheapsize)，[getUsedHeapSize](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-getusedheapsize)，[getMaxHeapSize](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-getmaxheapsize)替代相关静态属性成员。

#### [h2]static prop allocatedHeapSize
    
    
    public static prop allocatedHeapSize: Int64

功能：获取仓颉堆已被使用的大小，单位为 byte。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

示例：
    
    
    import std.runtime.*
    
    main() {
        println("已分配的堆大小: ${MemoryInfo.allocatedHeapSize} bytes")
    
        return 0
    }

可能的运行结果：
    
    
    已分配的堆大小: 2097152 bytes

#### [h2]static prop heapPhysicalMemory
    
    
    public static prop heapPhysicalMemory: Int64

功能：在 Linux、OpenHarmony、HarmonyOS、Android 平台下获取仓颉堆实际占用的物理内存大小, 单位为 byte。在 Windows、macOS、iOS 平台下获取仓颉进程实际占用的物理内存大小, 单位为 byte。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

示例：
    
    
    import std.runtime.*
    
    main() {
        println("堆物理内存占用: ${MemoryInfo.heapPhysicalMemory} bytes")
    
        return 0
    }

可能的运行结果：
    
    
    堆物理内存占用: 614400 bytes

#### [h2]static prop maxHeapSize
    
    
    public static prop maxHeapSize: Int64

功能：获取仓颉堆可以使用的最大值，单位为 byte。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

示例：
    
    
    import std.runtime.*
    
    main() {
        println(MemoryInfo.maxHeapSize)
    }

可能的运行结果：
    
    
    268435456

#### struct ProcessorInfo (deprecated)
    
    
    public struct ProcessorInfo {}

功能：提供获取一些处理器信息的接口。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/58/v3/k8t0y9OiTc6rGlXjH0V3sA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=C4E13F4B371B3B02B7118A7FD824F32192AFF5C0744086DBDFD6785966F3DEC5)

未来版本即将废弃，使用[getProcessorCount](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-getprocessorcount)替代相关静态属性成员。

#### [h2]static prop processorCount
    
    
    public static prop processorCount: Int64

功能：获取处理器数量。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

示例：
    
    
    import std.runtime.*
    
    main() {
        println("处理器数量: ${ProcessorInfo.processorCount}")
    
        return 0
    }

可能的运行结果：
    
    
    处理器数量: 16

#### struct ThreadInfo (deprecated)
    
    
    public struct ThreadInfo {}

功能：提供获取一些仓颉线程统计数据的接口。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/72/v3/o7fInWkXRoi1YlXw-Srfww/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=A13480F438031D637E8EAFDB99B52B0CB8E8DAF508FCC9CD97E2F2DB0F380C55)

未来版本即将废弃，使用[getBlockingThreadCount](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-getblockingthreadcount)，[getNativeThreadCount](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-getnativethreadcount)， [getThreadCount](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-getthreadcount) 替代相关静态属性成员。

#### [h2]static prop blockingThreadCount
    
    
    public static prop blockingThreadCount: Int64

功能：获取阻塞的仓颉线程数。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

示例：
    
    
    import std.runtime.*
    
    main() {
        println("阻塞的线程数: ${ThreadInfo.blockingThreadCount}")
    
        return 0
    }

可能的运行结果：
    
    
    阻塞的线程数: 0

#### [h2]static prop nativeThreadCount
    
    
    public static prop nativeThreadCount: Int64

功能：获取物理线程数。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

示例：
    
    
    import std.runtime.*
    
    main() {
        println("物理线程数: ${ThreadInfo.nativeThreadCount}")
    
        return 0
    }

可能的运行结果：
    
    
    物理线程数: 1

#### [h2]static prop threadCount
    
    
    public static prop threadCount: Int64

功能：获取仓颉当前的线程数量。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

示例：
    
    
    import std.runtime.*
    
    main() {
        println("当前线程数: ${ThreadInfo.threadCount}")
    
        return 0
    }

可能的运行结果：
    
    
    当前线程数: 1
