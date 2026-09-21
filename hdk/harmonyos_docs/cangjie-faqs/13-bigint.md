---
name: cangjie-faqs/13-bigint
title: 仓颉语言如何处理大整数
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/13-bigint
nodePath: FAQ / 标准库 / 仓颉语言如何处理大整数
---

# 仓颉语言如何处理大整数

仓颉语言在标准库中提供了处理大数的相关API以及示例，详情请参见[std.math.numeric](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_overview)。

#### BigInt

可以通过BigInt结构体创建大整数，并对大整数进行运算。
    
    
    public func FAQ31Test1(): Unit {
        let int1: BigInt = BigInt.parse("123456789")
        let int2: BigInt = BigInt.parse("987654321")
        Hilog.info(0, "Cangjie Test", "${int1} + ${int2} = ${int1 + int2}")
        Hilog.info(0, "Cangjie Test", "${int1} - ${int2} = ${int1 - int2}")
        Hilog.info(0, "Cangjie Test", "${int1} * ${int2} = ${int1 * int2}")
        Hilog.info(0, "Cangjie Test", "${int1} / ${int2} = ${int1 / int2}")
        let (quo, mod) = int1.divAndMod(int2)
        Hilog.info(0, "Cangjie Test", "${int1} / ${int2} = ${quo} .. ${mod}")
    }

调用FAQ31Test1，日志输出结果：
    
    
    123456789 + 987654321 = 1111111110
    123456789 - 987654321 = -864197532
    123456789 * 987654321 = 121932631112635269
    123456789 / 987654321 = 0
    123456789 / 987654321 = 0 .. 123456789

BigInt的API详情请参见[std.math.numeric—BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint)。

#### Decimal

除了BigInt以外仓颉语言在标准库中同样支持了Decimal（高精度十进制数类型），方便开发者进行复杂计算。
    
    
    public func FAQ31Test2(): Unit {
        let decimal1: Decimal = Decimal.parse("12345.6789")
        let decimal2: Decimal = Decimal(BigInt.parse("987654321"), 6)
        Hilog.info(0, "Cangjie Test", "${decimal1} + ${decimal2} = ${decimal1 + decimal2}")
        Hilog.info(0, "Cangjie Test", "${decimal1} - ${decimal2} = ${decimal1 - decimal2}")
        Hilog.info(0, "Cangjie Test", "${decimal1} * ${decimal2} = ${decimal1 * decimal2}")
        Hilog.info(0, "Cangjie Test", "${decimal1} / ${decimal2} = ${decimal1 / decimal2}")
        Hilog.info(0, "Cangjie Test", "${decimal1} / ${decimal2} with precision 10 and rounding mode HalfEven = ${decimal1.divWithPrecision(decimal2, 10, roundingMode: HalfEven)}")
        let (quo, rem) = decimal1.divAndMod(decimal2)
        Hilog.info(0, "Cangjie Test", "${decimal1} / ${decimal2} = ${quo} .. ${rem}")
    }

调用FAQ31Test2，日志输出结果：
    
    
    12345.6789 + 987.654321 = 13333.333221
    12345.6789 - 987.654321 = 11358.024579
    12345.6789 * 987.654321 = 12193263.1112635269
    12345.6789 / 987.654321 = 12.49999988609375000142382812498220
    12345.6789 / 987.654321 with precision 10 and rounding mode HalfEven = 12.49999989
    12345.6789 / 987.654321 = 12 .. 493.827048

Decimal的API详情请参见[std.math.numeric—Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal)。
