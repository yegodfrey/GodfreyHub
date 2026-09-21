---
name: cangjie-faqs/20-operator-overloading
title: 仓颉语言如何重载运算符
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/20-operator-overloading
nodePath: FAQ / 语法 / 仓颉语言如何重载运算符
---

# 仓颉语言如何重载运算符

仓颉语言支持在class、struct、interface、enum和extend中通过operator修饰符重载运算符，使自定义类型支持原生运算符语法。

#### 基本语法

在func前使用operator修饰符声明运算符函数：
    
    
    struct Point {
        let x: Float64
        let y: Float64
    
        public init(x!: Float64, y!: Float64) {
            this.x = x
            this.y = y
        }
    
        public operator func +(right: Point): Point {
            Point(x: this.x + right.x, y: this.y + right.y)
        }
    
        public operator func -(): Point {
            Point(x: -this.x, y: -this.y)
        }
    }

调用示例：
    
    
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testOperatorOverloading(): Unit {
        let p1 = Point(x: 1.0, y: 2.0)
        let p2 = Point(x: 3.0, y: 4.0)
        let p3 = p1 + p2
        let p4 = -p1
        Hilog.info(0, "Cangjie Test", "p3 = (${p3.x}, ${p3.y})")
        Hilog.info(0, "Cangjie Test", "p4 = (${p4.x}, ${p4.y})")
    }

调用testOperatorOverloading，日志输出结果：
    
    
    p3 = (4.000000, 6.000000)
    p4 = (-1.000000, -2.000000)

#### 可重载的运算符

类别 | 运算符  
---|---  
一元 | !、-（取负）  
二元算术 | +、-、*、/、%、**  
位运算 | <<、>>、&、^、|  
比较 | <、<=、>、>=、==、!=  
索引 | []（取值和赋值）  
函数调用 | ()  
  
#### 规则与限制

  1. 一元运算符重载函数无参数（操作this），二元运算符重载函数一个参数（右操作数）
  2. 运算符重载函数不能为static函数，不能为泛型函数
  3. 运算符重载函数不改变原有优先级或结合性
  4. 运算符重载函数不能创建自定义运算符
  5. 运算符重载函数不能重新重载类型已原生支持的运算符
  6. 重载二元运算符时，若返回类型与左操作数类型匹配，自动启用对应复合赋值（如重载+后自动支持+=）



更多运算符重载的使用方法，详情请参见[运算符重载](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-operator_overloading)。
