---
name: cangjie-faqs/17-closure-capture
title: 仓颉语言闭包如何捕获外部变量
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/17-closure-capture
nodePath: FAQ / 语法 / 仓颉语言闭包如何捕获外部变量
---

# 仓颉语言闭包如何捕获外部变量

闭包是仓颉语言中函数或Lambda表达式与其定义时词法作用域中捕获的变量的组合。理解闭包的捕获规则对编写正确的并发代码至关重要。

#### 什么是变量捕获

当Lambda或函数访问其外部定义的局部变量时，即构成变量捕获：
    
    
    func makeMultiplier(x: Int64): (Int64) -> Int64 {
        return {y: Int64 => x * y}
    }

调用示例：
    
    
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testClosureCaptureMultiplier(): Unit {
        let multiplier3 = makeMultiplier(3)
        let multiplier5 = makeMultiplier(5)
        Hilog.info(0, "Cangjie Test", "multiplier3(4) = ${multiplier3(4)}")
        Hilog.info(0, "Cangjie Test", "multiplier3(7) = ${multiplier3(7)}")
        Hilog.info(0, "Cangjie Test", "multiplier5(4) = ${multiplier5(4)}")
    }

调用testClosureCaptureMultiplier，日志输出结果：
    
    
    multiplier3(4) = 12
    multiplier3(7) = 21
    multiplier5(4) = 20

#### 捕获规则

  1. 被捕获的变量须在闭包定义处可见
  2. 被捕获的变量须在闭包定义前已初始化
  3. 若捕获的变量为引用类型，其可变实例成员可被修改
  4. **捕获var的闭包不能逃逸** ：不能赋给变量、返回、作为参数传递或作为独立表达式，只能直接调用
  5. 若函数f调用了捕获var变量的函数g（该var非f的局部变量），则f也被视为捕获了var，不能逃逸
  6. 静态/全局var变量不算捕获，访问它们的函数仍为一等值



#### 捕获let变量

捕获let变量的闭包可以自由传递，例如存储在数组中或作为函数返回值：
    
    
    func createGreetingTemplates(): Array<(String) -> String> {
        let prefix = "Hello, "
        let suffix = "! "
        // 捕获let变量的闭包可存储在数组中并返回
        return [
            {name: String => "${prefix}${name}${suffix}"},
            {name: String => "${prefix}dear ${name}${suffix}"},
            {name: String => "Hi, ${name}${suffix}"}
        ]
    }

调用示例：
    
    
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testClosureCaptureLet(): Unit {
        let templates = createGreetingTemplates()
        Hilog.info(0, "Cangjie Test", "template0: ${templates[0]("Alice")}")
        Hilog.info(0, "Cangjie Test", "template1: ${templates[1]("Bob")}")
        Hilog.info(0, "Cangjie Test", "template2: ${templates[2]("Charlie")}")
    }

调用testClosureCaptureLet，日志输出结果：
    
    
    template0: Hello, Alice!
    template1: Hello, dear Bob!
    template2: Hi, Charlie!

#### 捕获var变量的限制

捕获var变量的闭包不能逃逸，只能直接调用：
    
    
    func incrementInPlace(n: Int64): Int64 {
        var count = n
        // 捕获var的闭包只能直接调用
        {=> count += 1}()
        // 以下写法会编译报错：
        // let f = { => count += 1 }  // 错误：捕获var的闭包不能赋给变量
        // return { => count += 1 }   // 错误：捕获var的闭包不能返回
        return count
    }

调用示例：
    
    
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testClosureCaptureVar(): Unit {
        let result1 = incrementInPlace(10)
        let result2 = incrementInPlace(20)
        Hilog.info(0, "Cangjie Test", "incrementInPlace(10) = ${result1}")
        Hilog.info(0, "Cangjie Test", "incrementInPlace(20) = ${result2}")
    }

调用testClosureCaptureVar，日志输出结果：
    
    
    incrementInPlace(10) = 11
    incrementInPlace(20) = 21

更多闭包与Lambda的内容，详情请参见[函数](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-closure)。
