---
name: cangjie-references/cj-runtime_package_overview
title: std.runtime
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_overview
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.runtime
---

# std.runtime

#### 功能介绍

runtime 包的作用是与程序的运行时环境进行交互，提供了一系列函数和变量，用于控制、管理和监视程序的执行。

Cangjie 语言使用自动垃圾回收机制来管理内存，runtime 包提供了手动触发垃圾回收、设置垃圾回收的阈值、获取内存统计信息等功能，用于对垃圾回收进行调控和监测。

#### API 列表

#### [h2]类型别名

类型别名 | 功能  
---|---  
[SignalHandlerFunc](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_types#type-signalhandlerfunc) | 信号处理函数的别名。  
  
#### [h2]函数

函数名 | 功能  
---|---  
[blackBox<T>(T)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-blackboxtt) | 指示编译器传入的变量进入优化黑盒，无法进行死代码消除等优化。  
[dumpHeapData(Path)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-dumpheapdatapath) | 生成堆内存快照信息，写入指定路径的文件。  
[GC(Bool) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-gcbool-deprecated) | 执行 GC。  
[gc(Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-gcbool) | 执行 GC。  
[getAllocatedHeapSize](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-getallocatedheapsize) | 获取仓颉堆已被使用的大小，单位为 byte。  
[getBlockingThreadCount](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-getblockingthreadcount) | 获取阻塞的仓颉线程数。  
[getGCCount](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-getgccount) | 获取触发 GC 的次数。  
[getGCFreedSize](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-getgcfreedsize) | 获取触发 GC 后，成功回收的内存，单位为 byte。  
[getGCTime](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-getgctime) | 获取触发的 GC 总耗时，单位为 us。  
[getMaxHeapSize](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-getmaxheapsize) | 获取仓颉堆可以使用的最大值，单位为 byte。  
[getNativeThreadCount](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-getnativethreadcount) | 获取物理线程数。  
[getProcessorCount](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-getprocessorcount) | 获取处理器数量。  
[getThreadCount](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-getthreadcount) | 获取仓颉当前的线程数量。  
[getUsedHeapSize](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-getusedheapsize) | 在 Linux、OpenHarmony、HarmonyOS、Android 平台下获取仓颉堆实际占用的物理内存大小，单位为 byte。在 Windows、macOS、iOS 平台下获取仓颉进程实际占用的物理内存大小，单位为 byte。  
[SetGCThreshold(UInt64) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-setgcthresholduint64-deprecated) | 修改用户期望触发 GC 的内存阈值，当仓颉堆大小超过该值时，触发 GC，单位为 KB。  
[setGCThreshold(UInt64)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-setgcthresholduint64) | 修改用户期望触发 GC 的内存阈值，当仓颉堆大小超过该值时，触发 GC，单位为 KB。  
[startCPUProfiling](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-startcpuprofiling) | 启动 CPU profiler 跟踪。  
[stopCPUProfiling(Path)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-stopcpuprofilingpath) | 停止 CPU profiler 跟踪，并将记录写入指定路径的文件。  
[unregisterSignalHandler(Signal, SignalHandlerFunc)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs#func-unregistersignalhandlersignal-signalhandlerfunc) | 取消注册信号的处理函数。  
  
#### [h2]结构体

结构体名 | 功能  
---|---  
[MemoryInfo (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_structs#struct-memoryinfo-deprecated) | 提供获取一些堆内存统计数据的接口。  
[ProcessorInfo (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_structs#struct-processorinfo-deprecated) | 提供获取一些处理器信息的接口。  
[ThreadInfo (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_structs#struct-threadinfo-deprecated) | 提供获取一些仓颉线程统计数据的接口。  
  
  * **[类](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_class)**  

  * **[类型别名](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_types)**  

  * **[函数](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_funcs)**  

  * **[结构体](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_structs)**  

  * **[示例教程](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-runtime_package_example)**  



