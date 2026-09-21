---
name: cangjie-faqs/10-type-cast
title: 仓颉语言如何进行类型转换
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/10-type-cast
nodePath: FAQ / 语法 / 仓颉语言如何进行类型转换
---

# 仓颉语言如何进行类型转换

仓颉不支持不同类型之间的隐式转换，类型转换必须显式地进行。主要有以下两种方式：

  * T(e)(T为类型名，e为需要类型转换的值)直接转换，使用范围：数值类型之间、Rune和UInt32之间。其中数值类型包括：Int8，Int16，Int32，Int64，IntNative，UInt8，UInt16，UInt32，UInt64，UIntNative，Float16，Float32，Float64；
  * 使用as关键字进行类型转换，转换失败返回None。



详情请参见[类型转换](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-typecast)。
