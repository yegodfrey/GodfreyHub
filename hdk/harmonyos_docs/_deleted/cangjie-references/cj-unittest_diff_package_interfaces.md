---
name: cangjie-references/cj-unittest_diff_package_interfaces
title: 接口
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_diff_package_interfaces
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.unittest.diff / 接口
---

# 接口

#### interface AssertPrintable<T>
    
    
    public interface AssertPrintable<T> {
        prop hasNestedDiff: Bool
        func pprintForAssertion(
            pp: PrettyPrinter,
            that: T,
            thisPrefix: String,
            thatPrefix: String,
            level: Int64
        ): PrettyPrinter
    }

功能：提供打印 [@Assert](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#assert-宏)/[@Expect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#expect-宏) 的检查结果的方法。

#### [h2]prop hasNestedDiff
    
    
    prop hasNestedDiff: Bool

功能：获取是否有嵌套 diff 层级。

类型：[Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool)

#### [h2]func pprintForAssertion(PrettyPrinter, T, String, String, Int64)
    
    
    func pprintForAssertion(
        pp: PrettyPrinter, that: T, thisPrefix: String, thatPrefix: String, level: Int64
    ): PrettyPrinter

功能：打印 [@Assert](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#assert-宏)/[@Expect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#expect-宏) 的检查结果的方法。

参数：

  * pp: [PrettyPrinter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-prettyprinter) \- 打印器。
  * that: T - 待打印的信息。
  * thisPrefix: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 预期内容的前缀。
  * thatPrefix: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 实际内容的前缀。
  * level: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 嵌套层级。



返回值：

  * PrettyPrinter - 打印器。



#### [h2]extend Float16 <: AssertPrintable<Float16>
    
    
    extend Float16 <: AssertPrintable<Float16>

功能：对 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 的扩展。

**prop hasNestedDiff**
    
    
    public prop hasNestedDiff: Bool

功能：获取是否有嵌套 diff 层级。

类型：[Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool)

**func pprintForAssertion(PrettyPrinter, Float16, String, String, Int64)**
    
    
    public func pprintForAssertion(pp: PrettyPrinter, right: Float16, leftPrefix: String, rightPrefix: String,
            level: Int64):PrettyPrinter

功能：打印 [@Assert](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#assert-宏)/[@Expect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#expect-宏) 的检查结果的方法。

参数：

  * pp: [PrettyPrinter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-prettyprinter) \- 打印器。
  * right: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 待打印的信息。
  * leftPrefix: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 预期内容的前缀。
  * rightPrefix: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 实际内容的前缀。
  * level: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 嵌套层级。



返回值：

  * PrettyPrinter - 打印器。



#### [h2]extend Float32 <: AssertPrintable<Float32>
    
    
    extend Float32  <: AssertPrintable<Float32>

功能：对 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 的扩展。

**prop hasNestedDiff**
    
    
    public prop hasNestedDiff: Bool

功能：获取是否有嵌套 diff 层级。

类型：[Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool)

**func pprintForAssertion(PrettyPrinter, Float32, String, String, Int64)**
    
    
    public func pprintForAssertion(
        pp: PrettyPrinter, right: Float32, leftPrefix: String, rightPrefix: String, level: Int64
    ): PrettyPrinter

功能：打印 [@Assert](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#assert-宏)/[@Expect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#expect-宏) 的检查结果的方法。

参数：

  * pp: [PrettyPrinter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-prettyprinter) \- 打印器。
  * right: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 待打印的信息。
  * leftPrefix: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 预期内容的前缀。
  * rightPrefix: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 实际内容的前缀。
  * level: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 嵌套层级。



返回值：

  * PrettyPrinter - 打印器。



#### [h2]extend Float64 <: AssertPrintable<Float64>
    
    
    extend Float64 <: AssertPrintable<Float64>

功能：对 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 的扩展。

**prop hasNestedDiff**
    
    
    public prop hasNestedDiff: Bool

功能：获取是否有嵌套 diff 层级。

类型：[Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool)

**func pprintForAssertion(PrettyPrinter, Float64, String, String, Int64)**
    
    
    public func pprintForAssertion(
        pp: PrettyPrinter, right: Float64, leftPrefix: String, rightPrefix: String, level: Int64
    ): PrettyPrinter

功能：打印 [@Assert](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#assert-宏)/[@Expect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#expect-宏) 的检查结果的方法。

参数：

  * pp: [PrettyPrinter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-prettyprinter) \- 打印器。
  * right: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 待打印的信息。
  * leftPrefix: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 预期内容的前缀。
  * rightPrefix: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 实际内容的前缀。
  * level: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 嵌套层级。



返回值：

  * PrettyPrinter - 打印器。



#### [h2]extend<T> Option<T> <: AssertPrintable<Option<T>> where T <: Equatable<T>
    
    
    extend<T> Option<T> <: AssertPrintable<Option<T>> where T <: Equatable<T> 

功能：对 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<T> 的扩展。

**prop hasNestedDiff**
    
    
    public prop hasNestedDiff: Bool

功能：获取是否有嵌套 diff 层级。

类型：[Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool)

**func pprintForAssertion(PrettyPrinter, Option <T>, String, String, Int64)**
    
    
    public func pprintForAssertion(
        pp: PrettyPrinter, right:  Option<T>, leftPrefix: String, rightPrefix: String, level: Int64
    ): PrettyPrinter

功能：打印 [@Assert](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#assert-宏)/[@Expect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#expect-宏) 的检查结果的方法。

参数：

  * pp: [PrettyPrinter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-prettyprinter) \- 打印器。
  * right: [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<T> \- 待打印的信息。
  * leftPrefix: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 预期内容的前缀。
  * rightPrefix: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 实际内容的前缀。
  * level: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 嵌套层级。



返回值：

  * PrettyPrinter - 打印器。



#### [h2]extend String <: AssertPrintable<String>
    
    
    extend String <: AssertPrintable<String>

功能：对 [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) 的扩展。

**prop hasNestedDiff**
    
    
    public prop hasNestedDiff: Bool

功能：获取是否有嵌套 diff 层级。

类型：[Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool)

**func pprintForAssertion(PrettyPrinter, String, String, String, Int64)**
    
    
    public func pprintForAssertion(
        pp: PrettyPrinter, right: String, leftPrefix: String, rightPrefix: String, level: Int64
    ): PrettyPrinter

功能：打印 [@Assert](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#assert-宏)/[@Expect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#expect-宏) 的检查结果的方法。

参数：

  * pp: [PrettyPrinter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-prettyprinter) \- 打印器。
  * right: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 待打印的信息。
  * leftPrefix: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 预期内容的前缀。
  * rightPrefix: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 实际内容的前缀。
  * level: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 嵌套层级。



返回值：

  * PrettyPrinter - 打印器。


