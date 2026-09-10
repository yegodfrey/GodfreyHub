---
name: cangjie-faqs/03-function-overloading
title: 仓颉语言是否支持函数重载
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/03-function-overloading
nodePath: FAQ / 语法 / 仓颉语言是否支持函数重载
---

# 仓颉语言是否支持函数重载

在仓颉语言中，如果一个作用域中，一个函数名对应多个函数定义，这种现象称为函数重载。详情请参见[函数重载](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-function_overloading)。

在仓颉语言中，函数构成重载条件为函数参数不同，函数参数不同的表现主要分两个方面：

  * 函数参数数量不同；
  * 函数参数数量相同，函数参数类型不同。



由于仓颉语言支持泛型，以下将泛型和非泛型情景分类讨论。

#### 非泛型情景
    
    
    func f(a: Int64): Unit {
        Hilog.info(0, "Cangjie Test", "This is f with Int64.")
    }
    
    func f(a: Int64, b: Float64): Unit {
        Hilog.info(0, "Cangjie Test", "This is f with Int64 and Float64.")
    }
    
    func f(a: Float64): Unit {
        Hilog.info(0, "Cangjie Test", "This is f with Float64.")
    }
    
    public func FAQ08Test1(): Unit {
        f(1)
        f(1.0)
        f(1, 1.0)
    }

调用FAQ08Test1，日志输出结果：
    
    
    This is f with Int64.
    This is f with Float64.
    This is f with Int64 and Float64.

#### 泛型场景
    
    
    func f<X, Y>(a: X, b: Y) {
        Hilog.info(0, "Cangjie Test", "This is f1.")
    }
    
    func f<Y, X>(a: X, b: Y) {
        Hilog.info(0, "Cangjie Test", "This is f2.")
    }
    
    public func FAQ08Test2(): Unit {
        f<Int64, Float64>(1, 1.0)
        f<Float64, Int64>(1, 1.0)
        // f<Int64, Int64>(1, 2) // error: ambiguous match for function call 'f'
    }

调用FAQ08Test2，日志输出结果：
    
    
    This is f1.
    This is f2.

但是仓颉语言规定，类型变元的约束不参与函数重载的判断。
    
    
    interface I1 {}
    
    interface I2 {}
    
    func f<T>(a: T) where T <: I1 {}
    
    // func f<T>(a: T) where T <: T2 {} // error: function 'f' has overload conflicts, generic constraints are not involved in the overloading
