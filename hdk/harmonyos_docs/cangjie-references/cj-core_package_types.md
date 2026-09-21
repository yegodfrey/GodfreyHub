---
name: cangjie-references/cj-core_package_types
title: 类型别名
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.core / 类型别名
---

# 类型别名

#### type Byte
    
    
    public type Byte = UInt8

功能：[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte) 类型是内置类型 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 的别名。

示例：
    
    
    main() {
        let u8: UInt8 = 10
        let isByte = u8 is Byte
        println("UInt8 is Byte? ${isByte}")
    }

运行结果：
    
    
    UInt8 is Byte? true

#### type Int
    
    
    public type Int = Int64

功能：[Int](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-int) 类型是内置类型 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 的别名。

示例：
    
    
    main() {
        let i64: Int64 = 10
        let isInt = i64 is Int
        println("Int64 is Int? ${isInt}")
    }

运行结果：
    
    
    Int64 is Int? true

#### type UInt
    
    
    public type UInt = UInt64

功能：[UInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-uint) 类型是内置类型 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 的别名。

示例：
    
    
    main() {
        let u64: UInt64 = 10
        let isUInt = u64 is UInt
        println("UInt64 is UInt? ${isUInt}")
    }

运行结果：
    
    
    UInt64 is UInt? true
