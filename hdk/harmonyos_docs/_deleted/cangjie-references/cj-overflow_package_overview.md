---
name: cangjie-references/cj-overflow_package_overview
title: std.overflow
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-overflow_package_overview
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.overflow
---

# std.overflow

#### 功能介绍

overflow 包提供了整数运算溢出时的处理能力。

在整数运算时，若运算结果大于其类型最大值或小于其类型最小值即是溢出。默认情况下，出现溢出时会抛出异常。

overflow 包提供了四种溢出处理策略，并定义了对应的接口，列举如下：

策略 | 接口 | 描述  
---|---|---  
返回 Option | [CheckedOp](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-overflow_package_interfaces#interface-checkedopt) | 当整数运算出现溢出，返回 None。  
饱和 | [SaturatingOp](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-overflow_package_interfaces#interface-saturatingopt) | 当计算结果大于目标类型的 MAX 值，返回 MAX 值；当计算结果小于目标类型的 MIN 值，返回 MIN 值。  
抛出异常 | [ThrowingOp](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-overflow_package_interfaces#interface-throwingopt) | 当整数运算出现溢出，抛出异常。  
高位截断 | [WrappingOp](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-overflow_package_interfaces#interface-wrappingopt) | 当整数运算出现溢出，将运算结果中超出目标类型位数的高位截断。  
  
overflow 包中通过扩展为所有的整数类型提供了这些接口的实现，用户可以用同样的方式为其他类型实现 overflow 接口。

#### API 列表

#### [h2]接口

接口名 | 功能  
---|---  
[CarryingOp](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-overflow_package_interfaces#interface-carryingopt) | 提供返回整数运算是否发生了截断以及运算结果的接口。  
[CarryingPow](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-overflow_package_interfaces#interface-carryingpow) | 提供使用 [wrapping](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-overflow_package_interfaces#interface-wrappingopt) 策略的幂运算接口。  
[CheckedOp](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-overflow_package_interfaces#interface-checkedopt) | 当整数运算出现溢出，返回 None。  
[CheckedPow](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-overflow_package_interfaces#interface-checkedpow) | 提供返回 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont) 策略的幂运算接口。  
[SaturatingOp](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-overflow_package_interfaces#interface-saturatingopt) | 当整数运算出现溢出，饱和处理。  
[SaturatingPow](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-overflow_package_interfaces#interface-saturatingpow) | 提供饱和策略的幂运算接口。  
[ThrowingOp](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-overflow_package_interfaces#interface-throwingopt) | 当整数运算出现溢出，抛出异常。  
[ThrowingPow](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-overflow_package_interfaces#interface-throwingpow) | 提供使用抛出异常策略的幂运算接口。  
[WrappingOp](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-overflow_package_interfaces#interface-wrappingopt) | 当整数运算出现溢出，将运算结果中超出目标类型位数的高位截断。  
[WrappingPow](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-overflow_package_interfaces#interface-wrappingpow) | 提供使用高位截断策略的幂运算接口。  
  
#### [h2]异常类

类名 | 功能  
---|---  
[OvershiftException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-overflow_package_exceptions#class-overshiftexception) | 移位运算时移位位数超过操作数位数时抛出的异常。  
[UndershiftException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-overflow_package_exceptions#class-undershiftexception) | 移位运算时移位位数小于 0 时抛出的异常。  
  
  * **[接口](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-overflow_package_interfaces)**  

  * **[异常类](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-overflow_package_exceptions)**  

  * **[示例教程](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-overflow-samples)**  



