---
name: cangjie-references/cj-runtime_package_funcs
title: 函数
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.runtime / 函数
---

# 函数

#### func blackBox<T>(T)
    
    
    public func blackBox<T>(input: T): T

功能：指示编译器传入的变量进入优化黑盒，无法进行死代码消除等优化。

参数：

  * input: T - 进入优化黑洞的变量。



返回值：

  * T - 若变量仍需被使用，则可使用该返回值进行调用。



示例：
    
    
    import std.runtime.*
    
    main() {
        // 使用blackBox防止编译器优化掉某些计算
        let value = 42
        let result = blackBox(value)
        println("输入值: ${value}")
        println("通过blackBox返回的值: ${result}")
    
        return 0
    }

运行结果：
    
    
    输入值: 42
    通过blackBox返回的值: 42

#### func dumpHeapData(Path)
    
    
    public func dumpHeapData(path: Path): Unit

功能：生成堆内存快照信息，写入指定路径的文件。

参数：

  * path: [Path](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_structs#struct-path) \- 生成堆内存快照文件的文件路径。



异常：

  * MemoryInfoException - 生成堆内存快照失败时，抛出此异常。
  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当路径验证失败时，抛出此异常。



示例：
    
    
    import std.runtime.*
    import std.fs.*
    
    main() {
        // 创建一个临时路径用于存储堆内存快照
        let snapshotPath = Path("heap_snapshot.txt")
    
        // 生成堆内存快照
        dumpHeapData(snapshotPath)
    
        // 删除生成的堆内存快照文件
        removeIfExists(snapshotPath)
        return 0
    }

#### func gc(Bool)
    
    
    public func gc(heavy!: Bool = false): Unit

功能：执行 [gc](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-gcbool)。

参数：

  * heavy!: [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- [gc](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-gcbool) 执行程度，如果为 true，执行会慢，内存收集的多一些，默认值为 false。



示例：
    
    
    import std.runtime.*
    
    main() {
        // 执行轻量级垃圾回收
        gc()
    
        // 执行重量级垃圾回收
        gc(heavy: true)
        return 0
    }

#### func GC(Bool) (deprecated)
    
    
    public func GC(heavy!: Bool = false): Unit

功能：执行 [GC](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-gcbool-deprecated)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e7/v3/iKtbIUBPR_uo5_f4bfoKcA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=AD809A8F4F5888EBA8FDA0EE02F33D2708825079A53D2BBE9EB039D51968E0C1)

未来版本即将废弃，使用[gc](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-gcbool) 替代。

参数：

  * heavy!: [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- [GC](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-gcbool-deprecated) 执行程度，如果为 true，执行会慢，内存收集的多一些，默认值为 false。



示例：
    
    
    import std.runtime.*
    
    main() {
        // 执行轻量级垃圾回收（已弃用，请使用gc()）
        GC()
    
        // 执行重量级垃圾回收（已弃用，请使用gc(heavy: true)）
        GC(heavy: true)
        return 0
    }

#### func getAllocatedHeapSize()
    
    
    public func getAllocatedHeapSize(): Int64

功能：获取仓颉堆已被使用的大小，单位为 byte。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 仓颉堆已被使用的大小，单位为 byte。



示例：
    
    
    import std.runtime.*
    
    main() {
        // 获取当前堆内存使用量
        let allocatedSize = getAllocatedHeapSize()
        println("当前分配的堆内存大小: ${allocatedSize} 字节")
    
        return 0
    }

可能的运行结果：
    
    
    当前分配的堆内存大小: 255208 字节

#### func getBlockingThreadCount()
    
    
    public func getBlockingThreadCount(): Int64

功能：获取阻塞的仓颉线程数。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 阻塞的仓颉线程数。



示例：
    
    
    import std.runtime.*
    
    main() {
        // 获取当前阻塞的线程数
        let blockingThreads = getBlockingThreadCount()
        println("当前阻塞的线程数: ${blockingThreads}")
    
        return 0
    }

运行结果：
    
    
    当前阻塞的线程数: 0

#### func getGCCount()
    
    
    public func getGCCount(): Int64

功能：获取触发 GC 的次数。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 触发 GC 的次数。



示例：
    
    
    import std.runtime.*
    
    main() {
        // 获取GC触发次数
        let gcCount = getGCCount()
        println("GC触发次数: ${gcCount}")
    
        return 0
    }

运行结果：
    
    
    GC触发次数: 0

#### func getGCFreedSize()
    
    
    public func getGCFreedSize(): Int64

功能：获取触发 GC 后，成功回收的内存，单位为 byte。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 触发 GC 后，成功回收的内存，单位为 byte。



示例：
    
    
    import std.runtime.*
    
    main() {
        // 获取GC回收的内存大小
        let gcFreedSize = getGCFreedSize()
        println("GC回收的内存大小: ${gcFreedSize} 字节")
    
        return 0
    }

运行结果：
    
    
    GC回收的内存大小: 0 字节

#### func getGCTime()
    
    
    public func getGCTime(): Int64

功能：获取触发的 GC 总耗时，单位为 us。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 触发的 GC 总耗时，单位为 us。



示例：
    
    
    import std.runtime.*
    
    main() {
        // 获取GC总耗时
        let gcTime = getGCTime()
        println("GC总耗时: ${gcTime} 微秒")
    
        return 0
    }

运行结果：
    
    
    GC总耗时: 0 微秒

#### func getMaxHeapSize()
    
    
    public func getMaxHeapSize(): Int64

功能：获取仓颉堆可以使用的最大值，单位为 byte。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 仓颉堆可以使用的最大值，单位为 byte。



示例：
    
    
    import std.runtime.*
    
    main() {
        // 获取堆的最大大小
        let maxHeapSize = getMaxHeapSize()
        println("堆的最大大小: ${maxHeapSize} 字节")
    
        return 0
    }

可能的运行结果：
    
    
    堆的最大大小: 268435456 字节

#### func getNativeThreadCount()
    
    
    public func getNativeThreadCount(): Int64

功能：获取物理线程数。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 物理线程数。



示例：
    
    
    import std.runtime.*
    
    main() {
        // 获取物理线程数
        let nativeThreadCount = getNativeThreadCount()
        println("物理线程数: ${nativeThreadCount}")
    
        return 0
    }

可能的运行结果：
    
    
    物理线程数: 1

#### func getProcessorCount()
    
    
    public func getProcessorCount(): Int64

功能：获取处理器数量。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 处理器数量。



示例：
    
    
    import std.runtime.*
    
    main() {
        // 获取处理器数量
        let processorCount = getProcessorCount()
        println("处理器数量: ${processorCount}")
    
        return 0
    }

运行结果：
    
    
    处理器数量: 16

#### func getThreadCount()
    
    
    public func getThreadCount(): Int64

功能：获取仓颉当前的线程数量。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 仓颉当前的线程数量。



示例：
    
    
    import std.runtime.*
    
    main() {
        // 获取当前仓颉线程数量
        let threadCount = getThreadCount()
        println("当前仓颉线程数量: ${threadCount}")
    
        return 0
    }

运行结果：
    
    
    当前仓颉线程数量: 1

#### func getUsedHeapSize()
    
    
    public func getUsedHeapSize(): Int64

功能：在 Linux、OpenHarmony、HarmonyOS、Android 平台下获取仓颉堆实际占用的物理内存大小, 单位为 byte。在 Windows、macOS、iOS 平台下获取仓颉进程实际占用的物理内存大小, 单位为 byte。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 仓颉堆或仓颉进程实际占用的物理内存大小，单位为 byte。



示例：
    
    
    import std.runtime.*
    
    main() {
        // 获取当前使用的堆内存大小
        let usedHeapSize = getUsedHeapSize()
        println("当前使用的堆内存大小: ${usedHeapSize} 字节")
    
        return 0
    }

可能的运行结果：
    
    
    当前使用的堆内存大小: 614400 字节

#### func isGCRunning()
    
    
    public func isGCRunning(): Bool

功能：GC 状态查询函数，用于检测当前虚拟机中是否有垃圾回收过程正在执行。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 正在执行返回 true，否则返回 false。



示例：
    
    
    import std.runtime.*
    
    main() {
        // 调用GC状态查询函数
        let gcStatus = isGCRunning()
        println("当前GC运行状态: ${gcStatus}")
    }

运行结果：
    
    
    当前GC运行状态: false

#### func registerSignalHandler(Signal, SignalHandlerFunc)
    
    
    public func registerSignalHandler(sig: Signal, handler: SignalHandlerFunc): Unit

功能：注册信号的处理函数。同一个信号可以注册多个函数，信号触发时函数按照先进先出策略执行。如果 [SignalHandlerFunc](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_types#type-signalhandlerfunc) 的返回值是 true 则停止后续函数的执行，否则继续执行后续函数，直到所有注册的函数执行完。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/17/v3/2ou3LXefRm2-MyJaWL1PEg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=45522E429DE06C55B509BDC265B07BE0D3E903811A4BFF1C30EF340FFFF9EA25)

  * 不支持平台：Windows。
  * 仅支持前 31 个可被捕获的非实时信号。
  * 暂不支持 SIGBUS、SIGFPE、SIGSEGV 等中断信号。
  * handler 暂不支持成员函数和 foreign 函数。



参数：

  * sig: [Signal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_class#class-signal) \- 目标信号。
  * handler: [SignalHandlerFunc](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_types#type-signalhandlerfunc) \- 信号处理函数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 若信号值超过 31 则抛出异常。



示例：
    
    
    import std.runtime.*
    import std.env.*
    import std.posix.*
    
    func signalHandler1(sigValue: Int32): Bool {
        println("signalHandler1 接收到信号: ${sigValue}")
        let stop: Bool = false
        println("signalHandler1 是否停止后续？${stop}")
        return stop
    }
    
    func signalHandler2(sigValue: Int32): Bool {
        println("signalHandler2 接收到信号: ${sigValue}")
        let stop: Bool = false
        println("signalHandler2 是否停止后续？${stop}")
        return stop
    }
    
    func sendSignal(sig: Int32): Unit {
        kill(Int32(getProcessId()), sig)
        sleep(Duration.second)
    }
    
    let signal: Int32 = 3 // 信号值, 3 表示 SIGQUIT
    
    main() {
        // 注册信号处理器
        registerSignalHandler(Signal(signal, "custom"), signalHandler1)
        registerSignalHandler(Signal(signal, "custom"), signalHandler2)
        println("信号处理器注册成功")
    
        spawn {
            sendSignal(signal) // 模拟信号发送
        }
        sleep(Duration.second * 1)
        println("end")
        return 0
    }

可能的运行结果：
    
    
    信号处理器注册成功
    17202 E CJNative Handle signal: 3.
    signalHandler1 接收到信号: 3
    signalHandler1 是否停止后续？false
    signalHandler2 接收到信号: 3
    signalHandler2 是否停止后续？false
    Quit (core dumped)

#### func resetSignalHandler(Array<Signal>)
    
    
    public func resetSignalHandler(sigs: Array<Signal>): Unit

功能：清空注册的信号处理函数，如果输入信号为空，则清空所有信号的注册函数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/76/v3/hWbyt9jURmOBV9S0mFkT1A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=F0945BC960D6BE5B9D47AB76CBB20A27020B2BAFD629E8D4BB0E0E3DABDA4726)

  * 不支持平台：Windows。
  * 仅支持前 31 个可被捕获的非实时信号。
  * 暂不支持 SIGBUS、SIGFPE、SIGSEGV 等中断信号。



参数：

  * sigs: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Signal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_class#class-signal)> \- 需要被重置的信号列表。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 若信号值超过 31 则抛出异常。



示例：
    
    
    import std.runtime.*
    import std.env.*
    import std.posix.*
    
    func signalHandler1(sigValue: Int32): Bool {
        println("signalHandler1 接收到信号: ${sigValue}")
        let stop: Bool = false
        println("signalHandler1 是否停止后续？${stop}")
        return stop
    }
    
    func signalHandler2(sigValue: Int32): Bool {
        println("signalHandler2 接收到信号: ${sigValue}")
        let stop: Bool = false
        println("signalHandler2 是否停止后续？${stop}")
        return stop
    }
    
    func sendSignal(sig: Int32): Unit {
        kill(Int32(getProcessId()), sig)
        sleep(Duration.second)
    }
    
    let signal: Int32 = 10 // 信号值，10 表示 SIGUSR1
    
    main() {
        // 注册信号处理器
        registerSignalHandler(Signal(signal, "custom"), signalHandler1)
        registerSignalHandler(Signal(signal, "custom"), signalHandler2)
        println("信号处理器注册成功")
    
        // 重置信号处理器
        resetSignalHandler([Signal(signal, "custom")])
        println("信号处理器重置成功，期望无处理函数执行")
        spawn {
            sendSignal(signal) // 模拟信号发送
        }
        sleep(Duration.second * 1)
        println("end")
        return 0
    }

可能的运行结果：
    
    
    信号处理器注册成功
    信号处理器重置成功，期望无处理函数执行
    23888 E CJNative Handle signal: 10.
    end

#### func setGCThreshold(UInt64)
    
    
    public func setGCThreshold(value: UInt64): Unit

功能：修改用户期望触发 [gc](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-gcbool) 的内存阈值，当仓颉堆大小超过该值时，触发 [gc](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-gcbool)，单位为 KB。

参数：

  * value: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 用户期望触发 [gc](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-gcbool) 的内存阈值。



示例：

设置用户期望的 [gc](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-gcbool) 的内存阈值为 2MB。
    
    
    import std.runtime.*
    
    main() {
        setGCThreshold(2048)
    }

#### func SetGCThreshold(UInt64) (deprecated)
    
    
    public func SetGCThreshold(value: UInt64): Unit

功能：修改用户期望触发 [GC](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-gcbool-deprecated) 的内存阈值，当仓颉堆大小超过该值时，触发 [GC](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-gcbool-deprecated)，单位为 KB。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/64/v3/UNHv4znCSDWuxYJv7aOH4w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=15C5F632F6B21119E1F4D0FE32DCBDFBD2A0FAEE279E1BCB7AA59B91C734A0D0)

未来版本即将废弃，使用[setGCThreshold(UInt64)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-setgcthresholduint64) 替代。

参数：

  * value: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 用户期望触发 [GC](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-gcbool-deprecated) 的内存阈值。



示例：

设置用户期望的 [GC](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-gcbool-deprecated) 的内存阈值为 2MB。
    
    
    import std.runtime.*
    
    main() {
        SetGCThreshold(2048)
    }

#### func startCPUProfiling()
    
    
    public func startCPUProfiling(): Unit

功能：启动 CPU profiler 跟踪。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ac/v3/qJ8SDZLIR3CU2sGg3pKaSQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=338E2DB1D23E595C53C949C09764702492FC54E95813F4D3536510AC97E97CD9)

[startCPUProfiling](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-startcpuprofiling)与[stopCPUProfiling(Path)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-stopcpuprofilingpath)两个函数必须一一对应。

异常：

  * ProfilingInfoException - 若调用了[startCPUProfiling](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-startcpuprofiling)后，没有调用[stopCPUProfiling(Path)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-stopcpuprofilingpath)，而是又调用了[startCPUProfiling](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-startcpuprofiling)则抛出异常。



示例：
    
    
    import std.runtime.*
    import std.fs.*
    
    main() {
        let output = Path("./cpu_profile.txt")
    
        // 启动CPU性能分析
        startCPUProfiling()
        println("此处执行了一些CPU密集型任务")
        stopCPUProfiling(output)
    
        // 删除输出文件
        removeIfExists(output)
        return 0
    }

运行结果：
    
    
    此处执行了一些CPU密集型任务

#### func stopCPUProfiling(Path)
    
    
    public func stopCPUProfiling(path: Path): Unit

功能：停止 CPU profiler 跟踪，并将记录写入指定路径的文件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1e/v3/bg4iZ6lbQWallI2fd91t_w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=038F291BD8DBFD2DF61EAB8DCE925EC1BFB6FE21E379AA0F146DBFFA1D90434F)

[startCPUProfiling](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-startcpuprofiling) 与 [stopCPUProfiling(Path)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-stopcpuprofilingpath) 两个函数必须一一对应。

参数：

  * path: [Path](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_structs#struct-path) \- 生成记录文件的文件路径。



异常：

  * ProfilingInfoException - 若没有调用了 [startCPUProfiling](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-startcpuprofiling)，直接调用[stopCPUProfiling(Path)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-stopcpuprofilingpath) 则抛出异常。



示例：

参见 func startCPUProfiling 示例。

#### func unregisterSignalHandler(Signal, SignalHandlerFunc)
    
    
    public func unregisterSignalHandler(sig: Signal, handler: SignalHandlerFunc): Unit

功能：取消注册信号的处理函数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/57/v3/O8ShZziOT1Cbd2wzAn8sig/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090211Z&HW-CC-Expire=86400&HW-CC-Sign=1CC5270932C48414615D2A7DCDBEE5FB9C7C7B17F1A1CE69E08B455980BFBBC9)

  * 不支持平台：Windows。
  * 仅支持前 31 个可被捕获的非实时信号。
  * 暂不支持 SIGBUS、SIGFPE、SIGSEGV 等中断信号。
  * handler 暂不支持成员函数和 foreign 函数。



参数：

  * sig: [Signal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_class#class-signal) \- 需要取消注册的信号。
  * handler: [SignalHandlerFunc](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_types#type-signalhandlerfunc) \- 需要取消注册的信号处理函数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 若信号值超过 31 则抛出异常。



示例：
    
    
    import std.runtime.*
    import std.env.*
    
    func signalHandler1(sigValue: Int32): Bool {
        println("signalHandler1 接收到信号: ${sigValue}")
        let stop: Bool = false
        println("signalHandler1 是否停止后续？${stop}")
        return stop
    }
    
    func signalHandler2(sigValue: Int32): Bool {
        println("signalHandler2 接收到信号: ${sigValue}")
        let stop: Bool = false
        println("signalHandler2 是否停止后续？${stop}")
        return stop
    }
    
    func sendSignal(sig: Int32): Unit {
        kill(Int32(getProcessId()), sig)
        sleep(Duration.second)
    }
    
    let signal: Int32 = 10 // 信号值，10 表示 SIGUSR1
    
    main() {
        // 注册信号处理器
        registerSignalHandler(Signal(signal, "custom"), signalHandler1)
        registerSignalHandler(Signal(signal, "custom"), signalHandler2)
        println("信号处理器注册成功")
    
        // 注销信号处理器
        unregisterSignalHandler(Signal(signal, "custom"), signalHandler1)
        println("信号处理器1，注销成功，期望仅调用信号处理器2")
        spawn {
            sendSignal(signal) // 模拟信号发送
        }
        sleep(Duration.second * 1)
        println("end")
        return 0
    }

可能的运行结果：
    
    
    信号处理器注册成功
    信号处理器1，注销成功，期望仅调用信号处理器2
    25973 E CJNative Handle signal: 10.
    signalHandler2 接收到信号: 10
    signalHandler2 是否停止后续？false
    end
