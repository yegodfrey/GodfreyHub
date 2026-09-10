---
name: cangjie-references/cj-cipher_package_interfaces
title: 接口
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-cipher_package_interfaces
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.crypto.cipher / 接口
---

# 接口

#### interface BlockCipher
    
    
    public interface BlockCipher {
        prop blockSize: Int64
        prop algorithm: String
        func encrypt(input: Array<Byte>): Array<Byte>
        func decrypt(input: Array<Byte>): Array<Byte>
        func encrypt(input: Array<Byte>, to!: Array<Byte>): Int64
        func decrypt(input: Array<Byte>, to!: Array<Byte>): Int64
    }

功能：分组加解密算法接口，继承该接口的 class、interface、struct 也需要遵守该接口中函数的入参及返回值定义。

#### [h2]prop algorithm
    
    
    prop algorithm: String

功能：获取分组加解密算法的算法名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### [h2]prop blockSize
    
    
    prop blockSize: Int64

功能：分组块长度，单位字节。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

#### [h2]func decrypt(Array<Byte>)
    
    
    func decrypt(input: Array<Byte>): Array<Byte>

功能：提供解密函数。

参数：

  * input: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 待解密的数据。



返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 解密后的结果。



#### [h2]func decrypt(Array<Byte>, Array<Byte>)
    
    
    func decrypt(input: Array<Byte>,  to!: Array<Byte>): Int64

功能：提供解密函数。

参数：

  * input: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 待解密的数据。
  * to!: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 输出数组。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 输出长度。



#### [h2]func encrypt(Array<Byte>)
    
    
    func encrypt(input: Array<Byte>): Array<Byte>

功能：提供加密函数。

参数：

  * input: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 待加密的数据。



返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 加密后的结果。



#### [h2]func encrypt(Array<Byte>, Array<Byte>)
    
    
    func encrypt(input: Array<Byte>, to!: Array<Byte>): Int64

功能：提供加密函数。

参数：

  * input: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 待加密的数据。
  * to!: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 输出数组。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 输出长度。


