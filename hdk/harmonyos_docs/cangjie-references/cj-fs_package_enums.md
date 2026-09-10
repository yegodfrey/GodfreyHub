---
name: cangjie-references/cj-fs_package_enums
title: 枚举
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_enums
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.fs / 枚举
---

# 枚举

#### enum OpenMode
    
    
    public enum OpenMode <: ToString & Equatable<OpenMode> {
        | Read
        | Write
        | Append
        | ReadWrite
    }

功能：表示不同的文件打开模式。

父类型：

  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)
  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<[OpenMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_enums#enum-openmode)>



#### [h2]Append
    
    
    Append

功能：构造一个 [OpenMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_enums#enum-openmode) 实例，指定以追加写入的方式打开文件。如果文件不存在，则将创建文件。

#### [h2]Read
    
    
    Read

功能：构造一个 [OpenMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_enums#enum-openmode) 实例，指定以只读的方式打开文件。如果文件不存在，则将引发 [FSException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_exceptions#class-fsexception) 异常。

#### [h2]ReadWrite
    
    
    ReadWrite

功能：构造一个 [OpenMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_enums#enum-openmode) 实例，指定以可读可写的方式打开文件。如果文件不存在，则将创建文件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3c/v3/wu4EQJunR8Cu1F609EyyIQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090204Z&HW-CC-Expire=86400&HW-CC-Sign=DD26349965FBB5B2C36F0BA9E35FD6B5EC4D89630AF334D52C58506CE024DF10)

ReadWrite 模式不会使文件被截断为零字节大小。

#### [h2]Write
    
    
    Write

功能：构造一个 [OpenMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_enums#enum-openmode) 实例，指定以只写的方式打开文件，即文件存在时会将该文件截断为零字节大小，文件不存在则将创建文件。

#### [h2]func toString()
    
    
    public func toString(): String

功能：文件打开模式的字符串表示。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件打开模式名称。



示例：
    
    
    import std.fs.*
    
    main(): Unit {
        // 创建不同的OpenMode实例
        let readMode = OpenMode.Read
        let writeMode = OpenMode.Write
        let appendMode = OpenMode.Append
        let readWriteMode = OpenMode.ReadWrite
    
        // 获取它们的字符串表示
        println("Read mode: ${readMode.toString()}")
        println("Write mode: ${writeMode.toString()}")
        println("Append mode: ${appendMode.toString()}")
        println("ReadWrite mode: ${readWriteMode.toString()}")
    }

运行结果：
    
    
    Read mode: Read
    Write mode: Write
    Append mode: Append
    ReadWrite mode: ReadWrite

#### [h2]operator func !=(OpenMode)
    
    
    public operator func !=(other: OpenMode): Bool

功能：比较 [OpenMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_enums#enum-openmode) 实例是否不等。

参数：

  * other: [OpenMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_enums#enum-openmode) \- 待比较的 [OpenMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_enums#enum-openmode) 实例。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果不相等，则返回 true，否则返回 false。



示例：
    
    
    import std.fs.*
    
    main(): Unit {
        // 创建不同的OpenMode实例
        let readMode = OpenMode.Read
        let writeMode = OpenMode.Write
    
        // 比较不等的实例
        let notEqualResult = (readMode != writeMode)
        println("Read mode not equals Write mode: ${notEqualResult}")
    
        // 比较相等的实例
        let equalResult = (readMode != readMode)
        println("Read mode not equals Read mode: ${equalResult}")
    }

运行结果：
    
    
    Read mode not equals Write mode: true
    Read mode not equals Read mode: false

#### [h2]operator func ==(OpenMode)
    
    
    public operator func ==(other: OpenMode): Bool

功能：比较 [OpenMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_enums#enum-openmode) 实例是否相等。

参数：

  * other: [OpenMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_enums#enum-openmode) \- 待比较的 [OpenMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_enums#enum-openmode) 实例。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果相等，则返回 true，否则返回 false。



示例：
    
    
    import std.fs.*
    
    main(): Unit {
        // 创建相同的OpenMode实例
        let readMode1 = OpenMode.Read
        let readMode2 = OpenMode.Read
        let writeMode = OpenMode.Write
    
        // 比较相等的实例
        let equalResult = (readMode1 == readMode2)
        println("Read mode 1 equals Read mode 2: ${equalResult}")
    
        // 比较不等的实例
        let notEqualResult = (readMode1 == writeMode)
        println("Read mode equals Write mode: ${notEqualResult}")
    }

运行结果：
    
    
    Read mode 1 equals Read mode 2: true
    Read mode equals Write mode: false
