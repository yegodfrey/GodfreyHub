---
name: cangjie-faqs/23-null-safety
title: 仓颉语言如何处理空安全问题
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/23-null-safety
nodePath: FAQ / 语法 / 仓颉语言如何处理空安全问题
---

# 仓颉语言如何处理空安全问题

仓颉语言不使用null引用，而是通过Option<T>类型（简写?T）表示值可能不存在，从语言层面避免空指针异常。

#### Option类型

Option<T>是一个枚举类型，包含Some(T)和None两个构造器。

#### 解构Option的方式

#### [h2]模式匹配
    
    
    func matchOption(opt: ?Int64): Unit {
        match (opt) {
            case Some(v) => Hilog.info(0, "Cangjie Test", "value = ${v}")
            case None => Hilog.info(0, "Cangjie Test", "none")
        }
    }

调用示例：
    
    
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testNullSafetyMatch(): Unit {
        matchOption(Some(42))
        matchOption(None)
    }

调用testNullSafetyMatch，日志输出结果：
    
    
    value = 42
    none

#### [h2]if-let条件解构
    
    
    func ifLetOption(opt: ?Int64): Unit {
        if (let Some(v) <- opt) {
            Hilog.info(0, "Cangjie Test", "value = ${v}")
        } else {
            Hilog.info(0, "Cangjie Test", "none")
        }
    }

调用示例：
    
    
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testNullSafetyIfLet(): Unit {
        ifLetOption(Some(100))
        ifLetOption(None)
    }

调用testNullSafetyIfLet，日志输出结果：
    
    
    value = 100
    none

#### [h2]合并运算符??

e1 ?? e2：若e1为Some(v)返回解包值，否则返回e2：
    
    
    func coalesceOption(opt: ?String): String {
        opt ?? "default"
    }

调用示例：
    
    
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testNullSafetyCoalesce(): Unit {
        let result1 = coalesceOption(Some("hello"))
        let result2 = coalesceOption(None)
        Hilog.info(0, "Cangjie Test", "result1 = ${result1}")
        Hilog.info(0, "Cangjie Test", "result2 = ${result2}")
    }

调用testNullSafetyCoalesce，日志输出结果：
    
    
    result1 = hello
    result2 = default

#### [h2]getOrThrow()

Some(v)返回解包值，None抛出NoneValueException：
    
    
    func unwrapOption(opt: ?Int64): Int64 {
        opt.getOrThrow()
    }

调用示例：
    
    
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testNullSafetyGetOrThrow(): Unit {
        let result = unwrapOption(Some(42))
        Hilog.info(0, "Cangjie Test", "result = ${result}")
    }

调用testNullSafetyGetOrThrow，日志输出结果：
    
    
    result = 42

#### 与ArkTS null/undefined的对比

场景 | ArkTS | 仓颉  
---|---|---  
可空类型 | T | null | ?T（即Option<T>）  
空值 | null / undefined | None  
安全取值 | obj?.prop | obj?.prop  
默认值 | obj ?? default | obj ?? default  
非空断言 | obj! | obj.getOrThrow()  
  
更多Option类型的使用方法，详情请参见[Option类型](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-option_type)。
