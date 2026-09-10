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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a6/v3/6IHLz4RjT8-4GHCOxpvbvw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=1A70679D51004341FFBA0FBFD3533B27C5C41419C430FB4455F710FD4CE5B689)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/05/v3/yKxhX2tdRz-wd7Y80M1IQQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=DBF749B3A18DB907C77AB14722D646FA4170CCB0CFF35ABA09FFF57FCD4788AF)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/wxi2i2PhQw2Yv77zmH5XGA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=CDA5E89BEAB4FBAA6BBD6B4E78643E4066732DC7E37AC69A301A2F72018D67D3)

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
