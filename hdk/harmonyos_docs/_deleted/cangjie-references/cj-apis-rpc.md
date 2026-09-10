---
name: cangjie-references/cj-apis-rpc
title: ohos.rpc（RPC通信）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-rpc
nodePath: 应用框架 / IPC Kit（进程间通信服务） / 仓颉API / ohos.rpc（RPC通信）
---

# ohos.rpc（RPC通信）

rpc模块提供进程间通信能力，包括设备内的进程间通信（IPC）和设备间的进程间通信（RPC），前者基于Binder驱动，后者基于软总线驱动。

#### 导入模块
    
    
    import kit.IPCKit.*

#### 使用说明

API示例代码使用说明：

  * 若示例代码首行有“// index.cj”注释，表示该示例可在仓颉模板工程的“index.cj”文件中编译运行。
  * 若示例需获取[Context](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-context)应用上下文，需在仓颉模板工程中的“main_ability.cj”文件中进行配置。



上述示例工程及配置模板详见[仓颉示例代码说明](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro#仓颉示例代码说明)。

#### interface Parcelable
    
    
    public interface Parcelable {
        func marshalling(dataOut: MessageSequence): Bool
        func unmarshalling(dataIn: MessageSequence): Bool
    }

**功能：** 在进程间通信（IPC）期间，将类的对象写入MessageSequence并从MessageSequence中恢复它们。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

#### [h2]func marshalling(MessageSequence)
    
    
    func marshalling(dataOut: MessageSequence): Bool

**功能：** 将此可序列对象封送到MessageSequence中。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
dataOut | MessageSequence | 是 | - | 可序列对象将被封送到的MessageSequence对象。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | true：封送成功，false：封送失败。  
  
**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    
    // 此处代码可添加在依赖项定义中
    class MyParcelable <: Parcelable {
        var num: Int32 = 0
        var str: String = ''
    
        init() {}
    
        init(num: Int32, str: String) {
            this.num = num
            this.str = str
        }
        public func marshalling(messageSequence: MessageSequence): Bool {
            messageSequence.writeInt(this.num)
            messageSequence.writeString(this.str)
            return true
        }
        public func unmarshalling(messageSequence: MessageSequence): Bool {
            this.num = messageSequence.readInt()
            this.str = messageSequence.readString()
            return true
        }
    }
    
    let parcelable = MyParcelable(1, "aaa")
    let parcelable2 = MyParcelable(2, "bbb")
    let parcelable3 = MyParcelable(3, "ccc")
    let data = MessageSequence.create()
    data.writeParcelableArray(parcelable,parcelable2,parcelable3)
    let ret: Array<Parcelable> = [MyParcelable(0, ""), MyParcelable(0, ""), MyParcelable(0, "")]
    data.readParcelableArray(ret)

#### [h2]func unmarshalling(MessageSequence)
    
    
    func unmarshalling(dataIn: MessageSequence): Bool

**功能：** 从MessageSequence中解封此可序列对象。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
dataIn | MessageSequence | 是 | - | 已将可序列对象封送到其中的MessageSequence对象。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | true：反序列化成功，false：反序列化失败。  
  
**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    
    // 此处代码可添加在依赖项定义中
    class MyParcelable <: Parcelable {
        var num: Int32 = 0
        var str: String = ''
    
        init() {}
    
        init(num: Int32, str: String) {
            this.num = num
            this.str = str
        }
        public func marshalling(messageSequence: MessageSequence): Bool {
            messageSequence.writeInt(this.num)
            messageSequence.writeString(this.str)
            return true
        }
        public func unmarshalling(messageSequence: MessageSequence): Bool {
            this.num = messageSequence.readInt()
            this.str = messageSequence.readString()
            return true
        }
    }
    
    let parcelable = MyParcelable(1, "aaa")
    let parcelable2 = MyParcelable(2, "bbb")
    let parcelable3 = MyParcelable(3, "ccc")
    let data = MessageSequence.create()
    data.writeParcelableArray(parcelable,parcelable2,parcelable3)
    let ret: Array<Parcelable> = [MyParcelable(0, ""), MyParcelable(0, ""), MyParcelable(0, "")]
    data.readParcelableArray(ret)

#### class Ashmem
    
    
    public class Ashmem {
        public static const PROT_EXEC: UInt32 = 4
        public static const PROT_NONE: UInt32 = 0
        public static const PROT_READ: UInt32 = 1
        public static const PROT_WRITE: UInt32 = 2
    }

**功能：** 提供与匿名共享内存对象相关的方法，包括创建、关闭、映射和取消映射Ashmem、从Ashmem读取数据和写入数据、获取Ashmem大小、设置Ashmem保护。

共享内存只适用于本设备内跨进程通信。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

#### [h2]static const PROT_EXEC
    
    
    public static const PROT_EXEC: UInt32 = 4

**功能：** 映射内存保护类型，代表映射的内存可执行。

**类型：** UInt32

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

#### [h2]static const PROT_NONE
    
    
    public static const PROT_NONE: UInt32 = 0

**功能：** 映射内存保护类型，代表映射的内存不可访问。

**类型：** UInt32

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

#### [h2]static const PROT_READ
    
    
    public static const PROT_READ: UInt32 = 1

**功能：** 映射内存保护类型，代表映射的内存可读。

**类型：** UInt32

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

#### [h2]static const PROT_WRITE
    
    
    public static const PROT_WRITE: UInt32 = 2

**功能：** 映射内存保护类型，代表映射的内存可写。

**类型：** UInt32

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

#### [h2]static func create(String, Int32)
    
    
    public static func create(name: String, size: Int32): Ashmem

**功能：** 静态方法，根据指定的名称和大小创建Ashmem对象。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
name | String | 是 | - | Ashmem名称，用于查询Ashmem信息，其长度不能为0。  
size | Int32 | 是 | - | Ashmem的大小，其大小应大于0，以字节为单位。  
  
**返回值：**

类型 | 说明  
---|---  
Ashmem | 返回创建的Ashmem对象。  
  
**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ashmem = Ashmem.create("ashmem", 1024*1024)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func create(Ashmem)
    
    
    public static func create(ashmem: Ashmem): Ashmem

**功能：** 静态方法，通过复制现有Ashmem对象的文件描述符(fd)来创建Ashmem对象。两个Ashmem对象指向同一个共享内存区域。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
ashmem | Ashmem | 是 | - | 已存在的Ashmem对象。  
  
**返回值：**

类型 | 说明  
---|---  
Ashmem | 返回创建的Ashmem对象。  
  
**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ashmem = Ashmem.create("ashmem", 1024*1024) //static func create(String, Int32)
        let ashmem2 = Ashmem.create(ashmem) //static func create(Ashmem)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func closeAshmem()
    
    
    public func closeAshmem(): Unit

**功能：** 关闭这个Ashmem。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9e/v3/IMRuQZNZQOGUBbECzScM2g/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111728Z&HW-CC-Expire=86400&HW-CC-Sign=64415B559E686ED58DB032A710BD45D472CF65D1E3C9AF6E892D22BE01087B86)

关闭Ashmem对象前需要先解除地址映射。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ashmem = Ashmem.create("ashmem", 1024*1024)
        ashmem.closeAshmem()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getAshmemSize()
    
    
    public func getAshmemSize(): Int32

**功能：** 获取Ashmem对象的内存大小。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Int32 | 返回Ashmem对象的内存大小。  
  
**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ashmem = Ashmem.create("ashmem", 1024*1024)
        let result = ashmem.getAshmemSize()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func mapReadWriteAshmem()
    
    
    public func mapReadWriteAshmem(): Unit

**功能：** 在此进程虚拟地址空间上创建可读写的共享文件映射。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900001 | Failed to call mmap.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ashmem = Ashmem.create("ashmem", 1024*1024)
        ashmem.mapReadWriteAshmem()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func mapReadonlyAshmem()
    
    
    public func mapReadonlyAshmem(): Unit

**功能：** 在此进程虚拟地址空间上创建只读的共享文件映射。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900001 | Failed to call mmap.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ashmem = Ashmem.create("ashmem", 1024*1024)
        ashmem.mapReadonlyAshmem()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func mapTypedAshmem(UInt32)
    
    
    public func mapTypedAshmem(mapType: UInt32): Unit

**功能：** 在此进程的虚拟地址空间上创建共享文件映射，映射区域大小由此Ashmem对象指定。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
mapType | UInt32 | 是 | - | 指定映射的内存区域的保护等级。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900001 | Failed to call mmap.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ashmem = Ashmem.create("ashmem", 1024*1024)
        ashmem.mapTypedAshmem(Ashmem.PROT_READ | Ashmem.PROT_WRITE)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func readDataFromAshmem(Int64, Int64)
    
    
    public func readDataFromAshmem(size: Int64, offset: Int64): Array<Byte>

**功能：** 从此Ashmem对象关联的共享文件中读取数据。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
size | Int64 | 是 | - | 要读取的数据的大小。  
offset | Int64 | 是 | - | 要读取的数据在此Ashmem对象关联的内存区间的起始位置。  
  
**返回值：**

类型 | 说明  
---|---  
Array<Byte> | 返回读取的数据。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900004 | Failed to read data from the shared memory.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ashmem = Ashmem.create("ashmem", 1024*1024)
        ashmem.readDataFromAshmem(1, 0)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func setProtectionType(UInt32)
    
    
    public func setProtectionType(protectionType: UInt32): Unit

**功能：** 设置映射内存区域的保护等级。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
protectionType | UInt32 | 是 | - | 要设置的保护类型。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900002 | Failed to call ioctl.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ashmem = Ashmem.create("ashmem", 1024*1024)
        ashmem.setProtectionType(Ashmem.PROT_READ)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func unmapAshmem()
    
    
    public func unmapAshmem(): Unit

**功能：** 删除该Ashmem对象的地址映射。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ashmem = Ashmem.create("ashmem", 1024*1024)
        ashmem.unmapAshmem()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func writeDataToAshmem(Array<Byte>, Int64, Int64)
    
    
    public func writeDataToAshmem(buf: Array<Byte>, size: Int64, offset: Int64): Unit

**功能：** 将数据写入此Ashmem对象关联的共享文件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0d/v3/Sh6_f5KjTrmo1ogMqdKFrA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111728Z&HW-CC-Expire=86400&HW-CC-Sign=3A81415E594868E9830433C832ADF37706D903CFAAAC3937846CA893C4737E2F)

对Ashmem对象进行写操作时，需要先调用mapReadWriteAshmem进行映射。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
buf | Array<Byte> | 是 | - | 写入Ashmem对象的数据。  
size | Int64 | 是 | - | 要写入的数据大小。  
offset | Int64 | 是 | - | 要写入的数据在此Ashmem对象关联的内存区间的起始位置。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900003 | Failed to write data to the shared memory.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let ashmem = Ashmem.create("ashmem", 1024*1024)
        ashmem.mapReadWriteAshmem()
        ashmem.writeDataToAshmem([1], 1, 0)
        ashmem.unmapAshmem()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class MessageSequence
    
    
    public class MessageSequence {}

**功能：** 在RPC或IPC过程中，发送方可以使用MessageSequence提供的写方法，将待发送的数据以特定格式写入该对象。接收方可以使用MessageSequence提供的读方法从该对象中读取特定格式的数据。数据格式包括：基础类型及数组、IPC对象、接口描述符和自定义序列化对象。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

#### [h2]static func closeFileDescriptor(Int32)
    
    
    public static func closeFileDescriptor(fd: Int32): Unit

**功能：** 静态方法，关闭给定的文件描述符。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
fd | Int32 | 是 | - | 要关闭的文件描述符。  
  
**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let filePath = "path/to/file"
        let file = FileIo.open(filePath, mode: (OpenMode.CREATE | OpenMode.READ_WRITE))
        MessageSequence.closeFileDescriptor(file.fd)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func create()
    
    
    public static func create(): MessageSequence

**功能：** 静态方法，创建MessageSequence对象。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
MessageSequence | 返回创建的MessageSequence对象。  
  
**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func dupFileDescriptor(Int32)
    
    
    public static func dupFileDescriptor(fd: Int32): Int32

**功能：** 静态方法，复制给定的文件描述符。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
fd | Int32 | 是 | - | 表示已存在的文件描述符。  
  
**返回值：**

类型 | 说明  
---|---  
Int32 | 返回新的文件描述符。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900013 | Failed to call dup.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let filePath = "path/to/file"
        let file = FileIo.open(filePath, mode: (OpenMode.CREATE | OpenMode.READ_WRITE))
        let newFd = MessageSequence.dupFileDescriptor(file.fd)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func containFileDescriptors()
    
    
    public func containFileDescriptors(): Bool

**功能：** 检查此MessageSequence对象是否包含文件描述符。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Bool | true：包含文件描述符，false：不包含文件描述符。  
  
**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        let result = data.containFileDescriptors()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getCapacity()
    
    
    public func getCapacity(): UInt32

**功能：** 获取当前MessageSequence对象的容量大小。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
UInt32 | 获取的MessageSequence实例的容量大小。以字节为单位。  
  
**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        let result = data.getCapacity()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getRawDataCapacity()
    
    
    public func getRawDataCapacity(): UInt32

**功能：** 获取MessageSequence可以容纳的最大原始数据量。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
UInt32 | 返回MessageSequence可以容纳的最大原始数据量，即128MB。  
  
**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        let capacity = data.getRawDataCapacity()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getReadPosition()
    
    
    public func getReadPosition(): UInt32

**功能：** 获取MessageSequence的读位置。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
UInt32 | 返回MessageSequence实例中的当前读取位置。  
  
**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        let pos = data.getReadPosition()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getReadableBytes()
    
    
    public func getReadableBytes(): UInt32

**功能：** 获取MessageSequence的可读字节空间。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
UInt32 | 获取到的MessageSequence实例的可读字节空间。以字节为单位。  
  
**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        let bytes = data.getReadableBytes()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getSize()
    
    
    public func getSize(): UInt32

**功能：** 获取当前创建的MessageSequence对象的数据大小。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
UInt32 | 获取的MessageSequence实例的数据大小。以字节为单位。  
  
**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        let size = data.getSize()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getWritableBytes()
    
    
    public func getWritableBytes(): UInt32

**功能：** 获取MessageSequence的可写字节空间大小。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
UInt32 | 获取到的MessageSequence实例的可写字节空间。以字节为单位。  
  
**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        let bytes = data.getWritableBytes()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getWritePosition()
    
    
    public func getWritePosition(): UInt32

**功能：** 获取MessageSequence的写位置。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
UInt32 | 返回MessageSequence实例中的当前写入位置。  
  
**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        let pos = data.getWritePosition()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func readAshmem()
    
    
    public func readAshmem(): Ashmem

**功能：** 从MessageSequence读取匿名共享对象。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Ashmem | 返回匿名共享对象。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900004 | Failed to read data from the shared memory.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        let ashMem = data.readAshmem()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func readBoolean()
    
    
    public func readBoolean(): Bool

**功能：** 从MessageSequence实例读取布尔值。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Bool | 返回读取到的布尔值。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900010 | Failed to read data from the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        let result = data.readBoolean()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func readBooleanArray()
    
    
    public func readBooleanArray(): Array<Bool>

**功能：** 从MessageSequence实例中读取布尔数组。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Array<Bool> | 返回布尔数组。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900010 | Failed to read data from the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.readBooleanArray()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func readByte()
    
    
    public func readByte(): Int8

**功能：** 从MessageSequence实例读取字节值。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Int8 | 返回字节值。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900010 | Failed to read data from the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        let result = data.readByte()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func readByteArray()
    
    
    public func readByteArray(): Array<Int8>

**功能：** 从MessageSequence实例中读取字节数组。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Array<Int8> | 返回字节数组。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900010 | Failed to read data from the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.readByteArray()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func readChar()
    
    
    public func readChar(): UInt8

**功能：** 从MessageSequence实例中读取单个字符值。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
UInt8 | 返回单个字符值。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900010 | Failed to read data from the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        let result = data.readChar()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func readCharArray()
    
    
    public func readCharArray(): Array<UInt8>

**功能：** 从MessageSequence实例读取单个字符数组。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Array<UInt8> | 返回单个字符数组。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900010 | Failed to read data from the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.readCharArray()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func readDouble()
    
    
    public func readDouble(): Float64

**功能：** 从MessageSequence实例读取双精度浮点值。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Float64 | 返回双精度浮点值。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900010 | Failed to read data from the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        let result = data.readDouble()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func readDoubleArray()
    
    
    public func readDoubleArray(): Array<Float64>

**功能：** 从MessageSequence实例读取所有双精度浮点数组。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Array<Float64> | 返回双精度浮点数组。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900010 | Failed to read data from the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import std.collection.ArrayList
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.readDoubleArray()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func readException()
    
    
    public func readException(): Unit

**功能：** 从MessageSequence中读取异常。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900010 | Failed to read data from the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.readException()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func readFileDescriptor()
    
    
    public func readFileDescriptor(): Int32

**功能：** 从MessageSequence中读取文件描述符。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Int32 | 返回文件描述符。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900010 | Failed to read data from the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        let fd = data.readFileDescriptor()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func readFloat()
    
    
    public func readFloat(): Float32

**功能：** 从MessageSequence实例中读取单精度浮点值。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Float32 | 返回单精度浮点值。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900010 | Failed to read data from the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        let result = data.readFloat()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func readFloatArray()
    
    
    public func readFloatArray(): Array<Float32>

**功能：** 从MessageSequence实例中读取单精度浮点数组。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Array<Float32> | 返回单精度浮点数组。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900010 | Failed to read data from the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.readFloatArray()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func readInt()
    
    
    public func readInt(): Int32

**功能：** 从MessageSequence实例读取整数值。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Int32 | 返回整数值。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900010 | Failed to read data from the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        let result = data.readInt()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func readIntArray()
    
    
    public func readIntArray(): Array<Int32>

**功能：** 从MessageSequence实例中读取整数数组。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Array<Int32> | 返回整数数组。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900010 | Failed to read data from the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.readIntArray()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func readInterfaceToken()
    
    
    public func readInterfaceToken(): String

**功能：** 从MessageSequence对象中读取接口描述符，接口描述符按写入MessageSequence的顺序读取，本地对象可使用该信息检验本次通信。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 返回读取到的接口描述符。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900010 | Failed to read data from the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        let result = data.readInterfaceToken()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func readLong()
    
    
    public func readLong(): Int64

**功能：** 从MessageSequence实例中读取长整数值。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Int64 | 返回长整数值。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900010 | Failed to read data from the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        let result = data.readLong()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func readLongArray()
    
    
    public func readLongArray(): Array<Int64>

**功能：** 从MessageSequence实例中读取长整数数组。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Array<Int64> | 返回长整数数组。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900010 | Failed to read data from the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.readLongArray()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func readParcelable<T>(T) where T <: Parcelable
    
    
    public func readParcelable<T>(dataIn: T): Unit where T <: Parcelable

**功能：** 从MessageSequence实例中读取成员变量到指定的对象（dataIn）。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
dataIn | T | 是 | - | 需要从MessageSequence读取成员变量的对象。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900010 | Failed to read data from the message sequence.  
1900012 | Failed to call the JS callback function.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    // 此处代码可添加在依赖项定义中
    class MyParcelable <: Parcelable {
        var num: Int32 = 0
        var str: String = ''
    
        init() {}
    
        init(num: Int32, str: String) {
            this.num = num
            this.str = str
        }
        public func marshalling(messageSequence: MessageSequence): Bool {
            messageSequence.writeInt(this.num)
            messageSequence.writeString(this.str)
            return true
        }
        public func unmarshalling(messageSequence: MessageSequence): Bool {
            this.num = messageSequence.readInt()
            this.str = messageSequence.readString()
            return true
        }
    }
    
    try {
        let parcelable = MyParcelable(1, "aaa")
        let data = MessageSequence.create()
        data.writeParcelable(parcelable)
        let ret = MyParcelable()
        data.readParcelable(ret)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func readParcelableArray<T>(Array<T>) where T <: Parcelable
    
    
    public func readParcelableArray<T>(parcelableArray: Array<T>): Unit where T <: Parcelable

**功能：** 从MessageSequence实例读取可序列化对象数组。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
parcelableArray | Array<T> | 是 | - | 要读取的可序列化对象数组。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900010 | Failed to read data from the message sequence.  
1900012 | Failed to call the JS callback function.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    // 此处代码可添加在依赖项定义中
    class MyParcelable <: Parcelable {
        var num: Int32 = 0
        var str: String = ''
    
        init() {}
    
        init(num: Int32, str: String) {
            this.num = num
            this.str = str
        }
        public func marshalling(messageSequence: MessageSequence): Bool {
            messageSequence.writeInt(this.num)
            messageSequence.writeString(this.str)
            return true
        }
        public func unmarshalling(messageSequence: MessageSequence): Bool {
            this.num = messageSequence.readInt()
            this.str = messageSequence.readString()
            return true
        }
    }
    
    try {
        let parcelable = MyParcelable(1, "aaa")
        let parcelable2 = MyParcelable(2, "bbb")
        let parcelable3 = MyParcelable(3, "ccc")
        let data = MessageSequence.create()
        data.writeParcelableArray(parcelable,parcelable2,parcelable3)
        let ret: Array<Parcelable> = [MyParcelable(0, ""), MyParcelable(0, ""), MyParcelable(0, "")]
        data.readParcelableArray(ret)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func readRawDataBuffer(Int64)
    
    
    public func readRawDataBuffer(size: Int64): Array<Byte>

**功能：** 从MessageSequence读取原始数据。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
size | Int64 | 是 | - | 要读取的原始数据的大小。  
  
**返回值：**

类型 | 说明  
---|---  
Array<Byte> | 返回原始数据（以字节为单位）。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900010 | Failed to read data from the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.readRawDataBuffer(1)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func readShort()
    
    
    public func readShort(): Int16

**功能：** 从MessageSequence实例读取短整数值。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Int16 | 返回短整数值。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900010 | Failed to read data from the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        let result = data.readShort()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func readShortArray()
    
    
    public func readShortArray(): Array<Int16>

**功能：** 从MessageSequence实例中读取短整数数组。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Array<Int16> | 返回短整数数组。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900010 | Failed to read data from the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.readShortArray()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func readString()
    
    
    public func readString(): String

**功能：** 从MessageSequence实例读取字符串值。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 返回字符串值。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900010 | Failed to read data from the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        let result = data.readString()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func readStringArray()
    
    
    public func readStringArray(): Array<String>

**功能：** 从MessageSequence实例读取字符串数组。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Array<String> | 返回字符串数组。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900010 | Failed to read data from the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.readStringArray()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func readUInt16Array()
    
    
    public func readUInt16Array(): Array<UInt16>

**功能：** 从MessageSequence实例中读取Array<UInt16>类型数据。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Array<UInt16> | 返回Array<UInt16>类型数据（以字节为单位）。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900010 | Failed to read data from the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.readUInt16Array()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func readUInt32Array()
    
    
    public func readUInt32Array(): Array<UInt32>

**功能：** 从MessageSequence实例中读取Array<UInt32>类型数据。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Array<UInt32> | 返回Array<UInt32>类型数据（以字节为单位）  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900010 | Failed to read data from the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.readUInt32Array()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func readUInt64Array()
    
    
    public func readUInt64Array(): Array<UInt64>

**功能：** 从MessageSequence实例中读取Array<UInt64>类型数据。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Array<UInt64> | 返回Array<UInt64>类型数据（以字节为单位）。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900010 | Failed to read data from the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.readUInt64Array()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func readUInt8Array()
    
    
    public func readUInt8Array(): Array<UInt8>

**功能：** 从MessageSequence实例中读取Array<UInt8>类型数据。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Array<UInt8> | 返回Array<UInt8>类型数据（以字节为单位）  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900010 | Failed to read data from the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.readUInt8Array()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func reclaim()
    
    
    public func reclaim(): Unit

**功能：** 释放不再使用的MessageSequence对象。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.reclaim()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func rewindRead(UInt32)
    
    
    public func rewindRead(pos: UInt32): Unit

**功能：** 重新偏移读取位置到指定的位置。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
pos | UInt32 | 是 | - | 开始读取数据的目标位置。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900010 | Failed to read data from the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.rewindRead(0)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func rewindWrite(UInt32)
    
    
    public func rewindWrite(pos: UInt32): Unit

**功能：** 重新偏移写位置到指定的位置。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
pos | UInt32 | 是 | - | 开始写入数据的目标位置。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.rewindWrite(0)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func setCapacity(UInt32)
    
    
    public func setCapacity(size: UInt32): Unit

**功能：** 设置MessageSequence对象的存储容量。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
size | UInt32 | 是 | - | MessageSequence实例的存储容量。以字节为单位。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
1900011 | Memory allocation failed.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.setCapacity(100)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func setSize(UInt32)
    
    
    public func setSize(size: UInt32): Unit

**功能：** 设置MessageSequence对象中包含的数据大小。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
size | UInt32 | 是 | - | MessageSequence实例的数据大小。以字节为单位。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.setSize(16)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func writeAshmem(Ashmem)
    
    
    public func writeAshmem(ashmem: Ashmem): Unit

**功能：** 将指定的匿名共享对象写入此MessageSequence。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
ashmem | Ashmem | 是 | - | 要写入MessageSequence的匿名共享对象。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900003 | Failed to write data to the shared memory.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        let ashmem = Ashmem.create("ashmem", 1024)
        data.writeAshmem(ashmem)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func writeBoolean(Bool)
    
    
    public func writeBoolean(val: Bool): Unit

**功能：** 将布尔值写入MessageSequence实例。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
val | Bool | 是 | - | 要写入的布尔值。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.writeBoolean(false)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func writeBooleanArray(Array<Bool>)
    
    
    public func writeBooleanArray(booleanArray: Array<Bool>): Unit

**功能：** 将布尔数组写入MessageSequence实例。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
booleanArray | Array<Bool> | 是 | - | 要写入的布尔数组。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.writeBooleanArray([false, true, false])
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func writeByte(Int8)
    
    
    public func writeByte(val: Int8): Unit

**功能：** 将字节值写入MessageSequence实例。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
val | Int8 | 是 | - | 要写入的字节值。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.writeByte(2)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func writeByteArray(Array<Int8>)
    
    
    public func writeByteArray(byteArray: Array<Int8>): Unit

**功能：** 将字节数组写入MessageSequence实例。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
byteArray | Array<Int8> | 是 | - | 要写入的字节数组。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.writeByteArray([1])
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func writeChar(UInt8)
    
    
    public func writeChar(val: UInt8): Unit

**功能：** 将单个字符值写入MessageSequence实例。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
val | UInt8 | 是 | - | 要写入的单个字符值。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.writeChar(97)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func writeCharArray(Array<UInt8>)
    
    
    public func writeCharArray(charArray: Array<UInt8>): Unit

**功能：** 将单个字符数组写入MessageSequence实例。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
charArray | Array<UInt8> | 是 | - | 要写入的单个字符数组。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.writeCharArray([97, 98, 88])
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func writeDouble(Float64)
    
    
    public func writeDouble(val: Float64): Unit

**功能：** 将双精度浮点值写入MessageSequence实例。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
val | Float64 | 是 | - | 要写入的双精度浮点值。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.writeDouble(10.2)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func writeDoubleArray(Array<Float64>)
    
    
    public func writeDoubleArray(doubleArray: Array<Float64>): Unit

**功能：** 将双精度浮点数组写入MessageSequence实例。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
doubleArray | Array<Float64> | 是 | - | 要写入的双精度浮点数组。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.writeDoubleArray([1.1])
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func writeFileDescriptor(Int32)
    
    
    public func writeFileDescriptor(fd: Int32): Unit

**功能：** 写入文件描述符到MessageSequence。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
fd | Int32 | 是 | - | 文件描述符。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        let filePath = "path/to/file"
        let file = FileIo.open(filePath, mode: (OpenMode.CREATE | OpenMode.READ_WRITE))
        data.writeFileDescriptor(file.fd)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func writeFloat(Float32)
    
    
    public func writeFloat(val: Float32): Unit

**功能：** 将单精度浮点值写入MessageSequence实例。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
val | Float32 | 是 | - | 要写入的单精度浮点值。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.writeFloat(1.2)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func writeFloatArray(Array<Float32>)
    
    
    public func writeFloatArray(floatArray: Array<Float32>): Unit

**功能：** 将单精度浮点数组写入MessageSequence对象。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
floatArray | Array<Float32> | 是 | - | 要写入的单精度浮点数组。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.writeFloatArray([1.1])
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func writeInt(Int32)
    
    
    public func writeInt(val: Int32): Unit

**功能：** 将整数值写入MessageSequence实例。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
val | Int32 | 是 | - | 要写入的整数值。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.writeInt(10)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func writeIntArray(Array<Int32>)
    
    
    public func writeIntArray(intArray: Array<Int32>): Unit

**功能：** 将整数数组写入MessageSequence实例。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
intArray | Array<Int32> | 是 | - | 要写入的整数数组。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.writeIntArray([1])
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func writeInterfaceToken(String)
    
    
    public func writeInterfaceToken(token: String): Unit

**功能：** 将接口描述符写入MessageSequence对象，远端对象可使用该信息校验本次通信。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
token | String | 是 | - | 字符串类型描述符，其长度应小于40960字节。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.writeInterfaceToken("aaa")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func writeLong(Int64)
    
    
    public func writeLong(val: Int64): Unit

**功能：** 将长整数值写入MessageSequence实例。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
val | Int64 | 是 | - | 要写入的长整数值。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.writeLong(10000)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func writeLongArray(Array<Int64>)
    
    
    public func writeLongArray(longArray: Array<Int64>): Unit

**功能：** 将长整数数组写入MessageSequence实例。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
longArray | Array<Int64> | 是 | - | 要写入的长整数数组。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.writeLongArray([1])
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func writeNoException()
    
    
    public func writeNoException(): Unit

**功能：** 向MessageSequence写入“指示未发生异常”的信息。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.writeNoException()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func writeParcelable<T>(T) where T <: Parcelable
    
    
    public func writeParcelable<T>(val: T): Unit where T <: Parcelable

**功能：** 将自定义序列化对象写入MessageSequence实例。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
val | T | 是 | - | 要写入的可序列对象。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    // 此处代码可添加在依赖项定义中
    class MyParcelable <: Parcelable {
        var num: Int32 = 0
        var str: String = ''
    
        init() {}
    
        init(num: Int32, str: String) {
            this.num = num
            this.str = str
        }
        public func marshalling(messageSequence: MessageSequence): Bool {
            messageSequence.writeInt(this.num)
            messageSequence.writeString(this.str)
            return true
        }
        public func unmarshalling(messageSequence: MessageSequence): Bool {
            this.num = messageSequence.readInt()
            this.str = messageSequence.readString()
            return true
        }
    }
    
    try {
        let parcelable = MyParcelable(1, "aaa")
        let data = MessageSequence.create()
        data.writeParcelable(parcelable)
        let ret = MyParcelable()
        data.readParcelable(ret)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func writeParcelableArray<T>(Array<T>) where T <: Parcelable
    
    
    public func writeParcelableArray<T>(parcelableArray: Array<T>): Unit where T <: Parcelable

**功能：** 将可序列化对象数组写入MessageSequence实例。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
parcelableArray | Array<T> | 是 | - | 要写入的可序列化对象数组。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    // 此处代码可添加在依赖项定义中
    class MyParcelable <: Parcelable {
        var num: Int32 = 0
        var str: String = ''
    
        init() {}
    
        init(num: Int32, str: String) {
            this.num = num
            this.str = str
        }
        public func marshalling(messageSequence: MessageSequence): Bool {
            messageSequence.writeInt(this.num)
            messageSequence.writeString(this.str)
            return true
        }
        public func unmarshalling(messageSequence: MessageSequence): Bool {
            this.num = messageSequence.readInt()
            this.str = messageSequence.readString()
            return true
        }
    }
    
    try {
        let parcelable = MyParcelable(1, "aaa")
        let parcelable2 = MyParcelable(2, "bbb")
        let parcelable3 = MyParcelable(3, "ccc")
        let data = MessageSequence.create()
        data.writeParcelableArray(parcelable,parcelable2,parcelable3)
        let ret: Array<Parcelable> = [MyParcelable(0, ""), MyParcelable(0, ""), MyParcelable(0, "")]
        data.readParcelableArray(ret)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func writeRawDataBuffer(Array<Byte>, Int64)
    
    
    public func writeRawDataBuffer(rawData: Array<Byte>, size: Int64): Unit

**功能：** 将原始数据写入MessageSequence对象

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/16/v3/gzr0xa3QRdiQkDNCdseMbA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111728Z&HW-CC-Expire=86400&HW-CC-Sign=16BA5A9588CD78E524A39627F596C81768EC4BBBCA0DD2A53C9B4664BFC82109)

  * 该接口是一次性接口，不允许在一次parcel通信中多次调用该接口。
  * 该接口在传输数据时，当数据量较大时（超过32KB），会使用共享内存传输数据，此时需注意selinux配置。



**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
rawData | Array<Byte> | 是 | - | 要写入的原始数据，大小不能超过128MB。  
size | Int64 | 是 | - | 发送的原始数据大小，以字节为单位。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.writeRawDataBuffer([1], 1)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func writeShort(Int16)
    
    
    public func writeShort(val: Int16): Unit

**功能：** 将短整数值写入MessageSequence实例。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
val | Int16 | 是 | - | 要写入的短整数值。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.writeShort(8)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func writeShortArray(Array<Int16>)
    
    
    public func writeShortArray(shortArray: Array<Int16>): Unit

**功能：** 将短整数数组写入MessageSequence实例。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
shortArray | Array<Int16> | 是 | - | 要写入的短整数数组。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.writeShortArray([1])
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func writeString(String)
    
    
    public func writeString(val: String): Unit

**功能：** 将字符串值写入MessageSequence实例。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
val | String | 是 | - | 要写入的字符串值，其长度应小于40960字节。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.writeString('abc')
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func writeStringArray(Array<String>)
    
    
    public func writeStringArray(stringArray: Array<String>): Unit

**功能：** 将字符串数组写入MessageSequence实例。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
stringArray | Array<String> | 是 | - | 要写入的字符串数组，数组单个元素的长度应小于40960字节。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.writeStringArray(["abc", "def"])
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func writeUInt16Array(Array<UInt16>)
    
    
    public func writeUInt16Array(buf: Array<UInt16>): Unit

**功能：** 将Array<UInt16>类型数据写入MessageSequence对象。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
buf | Array<UInt16> | 是 | - | 要写入的Array<UInt16>数据。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.writeUInt16Array([1])
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func writeUInt32Array(Array<UInt32>)
    
    
    public func writeUInt32Array(buf: Array<UInt32>): Unit

**功能：** 将Array<UInt32>类型数据写入MessageSequence对象。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
buf | Array<UInt32> | 是 | - | 要写入的Array<UInt32>数据。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.writeUInt32Array([1])
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func writeUInt64Array(Array<UInt64>)
    
    
    public func writeUInt64Array(buf: Array<UInt64>): Unit

**功能：** 将Array<UInt64>类型数据写入MessageSequence对象。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
buf | Array<UInt64> | 是 | - | 要写入的Array<UInt64>数据。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.writeUInt64Array([1])
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func writeUInt8Array(Array<UInt8>)
    
    
    public func writeUInt8Array(buf: Array<UInt8>): Unit

**功能：** 将Array<UInt8>类型数据写入MessageSequence对象。

**系统能力：** SystemCapability.Communication.IPC.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
buf | Array<UInt8> | 是 | - | 要写入的Array<UInt8>数据。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[RPC错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-rpc)。

错误码ID | 错误信息  
---|---  
1900009 | Failed to write data to the message sequence.  
  



**示例：**
    
    
    // index.cj
    
    import kit.IPCKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let data = MessageSequence.create()
        data.writeUInt8Array([1])
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }
