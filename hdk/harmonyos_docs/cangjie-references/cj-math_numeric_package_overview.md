---
name: cangjie-references/cj-math_numeric_package_overview
title: std.math.numeric
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_overview
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.math.numeric
---

# std.math.numeric

#### 功能介绍

math.numeric 包对基础类型可表达范围之外提供扩展能力。

例如：

  1. 支持大整数（BigInt）；
  2. 支持高精度十进制数（Decimal）类型；
  3. 提供常见的数学运算能力包括高精度运算规则。



#### API 列表

#### [h2]函数

函数名 | 功能  
---|---  
[abs(BigInt)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_funcs#func-absbigint) | 求一个 BigInt 的绝对值。  
[abs(Decimal)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_funcs#func-absdecimal) | 求一个 Decimal 的绝对值。  
[countOne(BigInt) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_funcs#func-countonebigint-deprecated) | 计算并返回入参 BigInt 的二进制补码中 1 的个数。  
[countOnes(BigInt)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_funcs#func-countonesbigint) | 计算并返回入参 BigInt 的二进制补码中 1 的个数。  
[gcd(BigInt, BigInt)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_funcs#func-gcdbigint-bigint) | 求两个 BigInt 的最大公约数。总是返回非负数（相当于绝对值的最大公约数）。  
[lcm(BigInt, BigInt)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_funcs#func-lcmbigint-bigint) | 求两个 BigInt 的最小公倍数。入参为 0 时返回 0，其余情形总是返回正数（相当于绝对值的最小公倍数）。  
[round(Decimal, RoundingMode)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_funcs#func-rounddecimal-roundingmode) | 计算 Decimal 的舍入值，根据舍入方式向邻近的整数舍入。  
[sqrt(BigInt)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_funcs#func-sqrtbigint) | 求 BigInt 的算术平方根，向下取整。  
[sqrt(Decimal)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_funcs#func-sqrtdecimal) | 求 Decimal 的算术平方根。结果为无限小数场景时，默认采用 IEEE 754-2019 decimal128 对结果进行舍入。  
[trailingZeros(BigInt)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_funcs#func-trailingzerosbigint) | 求 BigInt 的二进制表达中的从最低位算起，连续位为 0 的个数。如果最低位不是 0，则返回 0。  
  
#### [h2]枚举

枚举 | 功能  
---|---  
[OverflowStrategy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_enums#enum-overflowstrategy) | 溢出策略枚举类，共包含 3 种溢出策略。BigInt 类型、Decimal 类型转换为整数类型时，允许指定不同的溢出处理策略。  
  
#### [h2]结构体

结构体 | 功能  
---|---  
[BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) | BigInt 定义为任意精度（二进制）的有符号整数。仓颉的 struct BigInt 用于任意精度有符号整数的计算，类型转换等。  
[Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) | Decimal 用于表示任意精度的有符号的十进制数。允许操作过程指定上下文，指定结果精度及舍入规则。提供基础类型 （Int、UInt、String、Float 等）与 BigInt 类型互相转换能力，支持 Decimal 对象基本属性查询等能力，支持基础数学运算操作，提供对象比较、hash、字符串打印等基础能力。  
  
  * **[函数](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_funcs)**  

  * **[枚举](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_enums)**  

  * **[结构体](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs)**  

  * **[示例教程](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math-numeric-samples)**  



