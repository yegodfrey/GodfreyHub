---
name: cangjie-faqs/05-option
title: 仓颉没有null，变量如何赋空值或判空
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/05-option
nodePath: FAQ / 语法 / 仓颉没有null，变量如何赋空值或判空
---

# 仓颉没有null，变量如何赋空值或判空

#### 问题描述

仓颉为了内存安全，要求变量使用前必须赋值，但仓颉不提供null或undefined的值，如何给变量赋一个空值，以及如何判断变量是否为空值？

#### 解决措施

仓颉提供Option<T>类型来表示一个类型为T的变量可能有值，也可能没值。具体可参考仓颉编程语言开发指南的[Option类型](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-option_type)章节。

#### [h2]方式一：在仓颉中实现一个单例类
    
    
    public class CacheManager {
        // 静态成员变量 instance 初始化为 None，即为空值状态
        private static var instance: Option<CacheManager> = Option<CacheManager>.None
    
        private init() {}
    
        public static func getInstance(): CacheManager {
            if (instance.isNone()) {
                instance = CacheManager()
            }
            return instance.getOrThrow()
        }
    }

#### [h2]方式二：使用let pattern的if表达式

详见[let pattern的if表达式](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-expression#涉及-let-pattern-的条件示例)。
    
    
    public func FAQ10Test2(): Unit {
        let result: Option<Int64> = 2025
        if (let Some(value) <- result) {
            Hilog.info(0, "Cangjie Test", "Result is not None. Value is ${value}.")
        } else {
            Hilog.info(0, "Cangjie Test", "Result is None.")
        }
    }

调用FAQ10Test2，日志输出结果：
    
    
    Result is not None. Value is 2025.

#### [h2]方式三：使用match表达式
    
    
    public func FAQ10Test3(): Unit {
        let result: Option<Int64> = 2025
        match (result) {
            case Some(value) => Hilog.info(0, "Cangjie Test", "Result is not None. Value is ${value}")
            case None => Hilog.info(0, "Cangjie Test", "Result is None.")
        }
    }

调用FAQ10Test3，日志输出结果：
    
    
    Result is not None. Value is 2025.
