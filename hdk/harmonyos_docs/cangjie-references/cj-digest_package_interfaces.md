---
name: cangjie-references/cj-digest_package_interfaces
title: 接口
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-digest_package_interfaces
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.crypto.digest / 接口
---

# 接口

#### interface Digest
    
    
    public interface Digest {
        prop size: Int64
        prop blockSize: Int64
        prop algorithm: String
        func write(buffer: Array<Byte>): Unit
        func finish(to!: Array<Byte>): Unit
        func finish(): Array<Byte>
        func reset(): Unit
    }

功能：摘要算法接口，继承该接口的 class、interface、struct 也需要遵守该接口中函数的入参及返回值定义。

#### [h2]prop algorithm
    
    
    prop algorithm: String

功能：获取摘要算法的算法名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### [h2]prop blockSize
    
    
    prop blockSize: Int64

功能：返回 [Block](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-block) 块长度，单位字节。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

#### [h2]prop size
    
    
    prop size: Int64

功能：返回生成的摘要信息长度，单位字节。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

#### [h2]func finish()
    
    
    func finish(): Array<Byte>

功能：返回生成的摘要值。

返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 返回生成摘要值。



#### [h2]func finish(Array<Byte>)
    
    
    func finish(to!: Array<Byte>): Unit

功能：获取生成的信息摘要值，注意调用 finish 后不可以再进行摘要计算，如重新计算需要执行 reset 函数重置上下文。

参数：

  * to!: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 目标数组。



#### [h2]func reset()
    
    
    func reset(): Unit

功能：重置 digest 对象到初始状态。

#### [h2]func write(Array<Byte>)
    
    
    func write(buffer: Array<Byte>): Unit

功能：使用给定的 buffer 更新 digest 对象。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 给定的数组。


