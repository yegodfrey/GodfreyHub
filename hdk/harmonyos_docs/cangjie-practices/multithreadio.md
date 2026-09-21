---
name: cangjie-practices/multithreadio
title: 多线程操作密集型关系型数据库和文件读写
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-practices/multithreadio
nodePath: 实践 / 多线程操作密集型关系型数据库和文件读写
---

# 多线程操作密集型关系型数据库和文件读写

#### 概述

应用中的每个进程都会有一个主线程，主线程主要承担执行UI绘制操作、管理实例的创建和销毁、分发和处理事件、管理Ability生命周期等职责，具体可参见[应用模型](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-application-models)。 在主线程中执行耗时操作将会引起UI绘制卡顿，因此，开发应用时应当尽量避免将耗时的操作放在主线程中执行。 仓颉提供了多线程并发能力，多线程并发允许在同一时间段内同时执行多段代码，本文介绍如何利用多线程解决密集型文件和数据库读写时造成主线程阻塞的问题。

#### 实现原理

仓颉多线程并发特性可以总结为两点：

  * 用户态线程： 用户态线程是体现仓颉在高并发场景优势的基础，保证开发者以较小的线程创建和调度开销实现高并发。所谓用户态线程，即：仓颉线程的创建、挂起、上下文切换以及退出都在操作系统用户态实现，无需进入内核态，从而获得相比 native 线程更小的创建和调度开销。仓颉运行时负责将仓颉线程调度到 native 线程执行。native 线程的数量以及其创建和销毁由运行时管理，大多数情况下开发者只需要面向仓颉线程编程，而无需感知 native 线程带来的资源开销和管理。
  * 多线程共享内存：仓颉使用多线程共享内存的并发模型，并提供了多线程高效且安全地访问共享内存的机制。开发者通过互斥锁/读写锁或原子操作避免多线程的数据竞争。同时提供了并发数据结构和原子类型让开发者在高并发场景更高效地访问共享内存。



在密集型读写操作时，由于系统会进行大量任务分发和数据拷贝，这两项任务均会阻塞主线程，系统提供了spawn创建线程避免阻塞。

#### 多线程文件读写

#### [h2]开发步骤

  1. 封装writeFile函数进行多线程写文件。等待多个任务结束时，也应当在新线程中进行。
         
         let all = 30
         
         public func writeFile(content: String, onProgress: (Float64) -> Unit, onFinish: () -> Unit) {
             let path = Global.abilityContext.filesDir
             let allTasks = ArrayList<Future<Unit>>()
             for (i in 0..all) {
                 let task = spawn {
                     let fileName = "${path}${CommonConstants.FILE_PREFIX}${i}${CommonConstants.FILE_SUFFIX}"
                     let file = FileIo.open(fileName, mode: OpenMode.READ_WRITE | OpenMode.CREATE)
                     FileIo.write(file.fd, content)
                     FileIo.close(file)
                     launch {
                         onProgress(100.0 / Float64(all))
                     }
                 }
                 allTasks.add(task)
             }
             spawn {
                 for (task in allTasks) {
                     task.get()
                 }
                 onFinish()
             }
         }

  2. 封装readFile函数进行多线程读文件。注意需要权衡线程数量与bufferSize的大小以避免占用过多内存。
         
         public func readFile(onProgress: (Float64) -> Unit, onFinish: (ArrayList<ArrayList<UInt8>>) -> Unit) {
             let path = Global.abilityContext.filesDir
             let result = ArrayList<ArrayList<UInt8>>()
             let allTasks = ArrayList<Future<ArrayList<UInt8>>>()
             for (i in 0..all) {
                 let task = spawn {
                     let fileName = "${path}${CommonConstants.FILE_PREFIX}${i}${CommonConstants.FILE_SUFFIX}"
                     let fileStat = FileIo.stat(fileName)
                     let file = FileIo.open(fileName, mode: OpenMode.READ_ONLY)
                     let result = ArrayList<UInt8>()
                     var bufferSize = 1024
                     let buffer = Array<UInt8>(min(bufferSize, fileStat.size)) { _ => 1 }
                     var len = try {
                         Hilog.debug(0xff00, "MultiThread", "start read ${i}.")
                         FileIo.read(file.fd, buffer, options: ReadOptions(length: UIntNative(bufferSize)))
                     } catch (e: BusinessException) {
                         Hilog.debug(0xff00, "MultiThread", "read ${i} error: ${e.code}, ${e.message}")
                         0
                     }
                     var offset = 0
                     while (len > 0) {
                         offset += len
                         result.add(all: buffer)
                         if (fileStat.size - offset < bufferSize) {
                             bufferSize = fileStat.size - offset
                         }
                         len = try {
                             FileIo.read(file.fd, buffer, options: ReadOptions(offset: offset, length: UIntNative(bufferSize)))
                         } catch (e: BusinessException) {
                             Hilog.debug(0xff00, "MultiThread", "read ${i} error: ${e.code}, ${e.message}")
                             0
                         }
                     }
                     FileIo.close(file)
                     launch {
                         onProgress(100.0 / Float64(all))
                     }
                     Hilog.debug(0xff00, "MultiThread", "finish read: ${i}")
                     result
                 }
                 allTasks.add(task)
             }
             spawn {
                 for (task in allTasks) {
                     try {
                         result.add(task.get())
                         Hilog.debug(0xff00, "MultiThread", "got result")
                     } catch (e: Exception) {
                         Hilog.error(0xff00, "MultiThread", "error: ${e.message}")
                     }
                 }
                 onFinish(result)
             }
         }

  3. 调用writeFile，readFile函数进行文件读写处理。注意与UI相关的操作，需要在主线程进行。使用launch将任务分发到主线程。
         
         // ...
         writeFile(this.content, { progress =>
             synchronized(mtx) {
                 this.progress += progress
             }
         }) {
             this.disabled = false
             launch { this.showToast(@r(app.string.success_remind)) }
         }
         
         // ...
         readFile({ progress =>
             synchronized(mtx) {
                 this.progress += progress
             }
         }) { result =>
             this.disabled = false
             if (result.size == 0) {
                 launch { this.showToast(@r(app.string.empty_remind)) }
                 return
             }
             launch { this.showToast(@r(app.string.success_remind)) }
         }
         
         // ...




#### 多线程数据库读写

#### [h2]开发步骤

  1. 封装writeDatabase函数进行多线程写数据库。
         
         let STORE_CONFIG = StoreConfig(RelationalStoreSecurityLevel.S1, name: "RDB2.db")
         
         public func writeDatabase(onFinish: () -> Unit) {
             spawn {
                 let rdbStore = getRdbStore(Global.abilityContext, STORE_CONFIG)
                 rdbStore.executeSql(CommonConstants.SQL_CREATE)
                 let valueBucketArray = Array<Map<String, RelationalStoreValueType>>(1000) { index =>
                     let map = HashMap<String, RelationalStoreValueType>()
                     map.add("NAME", RelationalStoreValueType.StringValue("LISA"))
                     map.add("AGE", RelationalStoreValueType.Integer(15))
                     map.add("SALARY", RelationalStoreValueType.Double(100.5))
                     map
                 }
                 rdbStore.batchInsert("EMPLOYEE", valueBucketArray)
                 onFinish()
             }
         }

  2. 封装readDatabase函数进行多线程读取数据库。
         
         public func readDatabase(onFinish: (ArrayList<Map<String, RelationalStoreValueType>>) -> Unit) {
             spawn {
                 let rdbStore = getRdbStore(Global.abilityContext, STORE_CONFIG)
                 rdbStore.executeSql(CommonConstants.SQL_CREATE)
                 let resultSet = rdbStore.query(RdbPredicates("EMPLOYEE"))
                 if (resultSet.rowCount == 0) {
                     onFinish(ArrayList())
                     return
                 }
                 resultSet.goToFirstRow()
                 let result = ArrayList<Map<String, RelationalStoreValueType>>()
                 var hasNext: Bool = false
                 do {
                     result.add(resultSet.getRow())
                     try {
                         resultSet.goToNextRow()
                         hasNext = true
                     } catch (e: BusinessException) {
                         hasNext = false
                     }
                 } while (hasNext)
                 resultSet.close()
                 onFinish(result)
                 return
             }
         }

  3. 调用writeDatabase，readDataBase函数进行文件读写处理。注意与UI相关的操作，需要在主线程进行。使用launch将任务分发到主线程。
         
         // ...
         writeDatabase { =>
             this.disabled = false
             launch { this.showToast(@r(app.string.success_remind)) }
         }
         
         //...
         readDatabase { result =>
             this.disabled = false
             if (result.size == 0) {
                 launch { this.showToast(@r(app.string.empty_remind)) }
                 return
             }
             launch { this.showToast(@r(app.string.success_remind)) }
         }
         
         //...




#### 示例代码

[多线程操作密集型关系型数据库和文件读写示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260728183054.79749529815045993041504644191142:20260922191119:2800:BA34F6315E7A405E41065808C2D019253489322A12B79B76C388DD0177EA2BBC.zip?needInitFileName=true)
