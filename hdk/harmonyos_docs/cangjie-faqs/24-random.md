---
name: cangjie-faqs/24-random
title: 仓颉语言如何生成随机数
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/24-random
nodePath: FAQ / 标准库 / 仓颉语言如何生成随机数
---

# 仓颉语言如何生成随机数

仓颉语言通过std.random包提供Random类，支持生成各种类型的随机数。

#### 基本用法

调用示例：
    
    
    import std.random.*
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testRandomBasic(): Unit {
        let rng = Random(42)
    
        let n = rng.nextInt64(100)
        Hilog.info(0, "Cangjie Test", "random int [0,100): ${n}")
    
        let f = rng.nextFloat64()
        Hilog.info(0, "Cangjie Test", "random float [0,1): ${f}")
    
        let b = rng.nextBool()
        Hilog.info(0, "Cangjie Test", "random bool: ${b}")
    
        let bytes = rng.nextBytes(4)
        Hilog.info(0, "Cangjie Test", "random bytes size: ${bytes.size}")
    }

调用testRandomBasic，日志可能输出结果：
    
    
    random int [0,100): 42
    random float [0,1): 0.123456
    random bool: true
    random bytes size: 4

#### 常用方法

方法 | 返回类型 | 说明  
---|---|---  
nextBool() | Bool | 随机布尔值  
nextInt8() ~ nextInt64() | IntN | 随机有符号整数  
nextUInt8() ~ nextUInt64() | UIntN | 随机无符号整数  
nextFloat32() / nextFloat64() | FloatN | [0.0, 1.0) 随机浮点数  
nextInt64(upper) | Int64 | [0, upper) 随机整数  
nextBytes(length) | Array<Byte> | 随机字节数组  
  
#### 指定种子

相同种子产生相同序列，适合可复现测试：
    
    
    import std.random.*
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testRandomSeed(): Unit {
        let rng1 = Random(42)
        let rng2 = Random(42)
        let n1 = rng1.nextInt64(100)
        let n2 = rng2.nextInt64(100)
        Hilog.info(0, "Cangjie Test", "rng1=${n1}, rng2=${n2}")
    }

调用testRandomSeed，日志可能输出结果：
    
    
    rng1=42, rng2=42

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b0/v3/WxaRI_u0RKCCSwLk86MVwA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085437Z&HW-CC-Expire=86400&HW-CC-Sign=ABA5ED3AB300485ADE72F87B41D85E35A854FE28F05C9E360202F9FDC271D02A)

  1. Random非线程安全，多线程场景应各自创建实例。
  2. nextInt64(upper)参数必须大于0，否则抛异常。
  3. nextFloat32()/nextFloat64()返回[0.0, 1.0)左闭右开区间。



更多随机数的使用方法，详情请参见[std.random](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-random_package_overview)。
