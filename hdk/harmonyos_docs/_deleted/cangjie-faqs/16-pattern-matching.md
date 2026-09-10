---
name: cangjie-faqs/16-pattern-matching
title: 仓颉语言如何使用模式匹配
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/16-pattern-matching
nodePath: FAQ / 语法 / 仓颉语言如何使用模式匹配
---

# 仓颉语言如何使用模式匹配

仓颉语言通过match表达式支持模式匹配，可以对不同类型的值进行分支处理。编译器会对match表达式的穷尽性做检查，要求其覆盖所有可能值，常用_通配符兜底。

#### match表达式基本用法
    
    
    func getLevel(x: Int64): String {
        match (x) {
            case 1 => "one"
            case 2 => "two"
            case _ => "other"
        }
    }

调用示例：
    
    
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testPatternMatchBasic(): Unit {
        Hilog.info(0, "Cangjie Test", "1 => ${getLevel(1)}")
        Hilog.info(0, "Cangjie Test", "2 => ${getLevel(2)}")
        Hilog.info(0, "Cangjie Test", "3 => ${getLevel(3)}")
    }

调用testPatternMatchBasic，日志输出结果：
    
    
    1 => one
    2 => two
    3 => other

#### 枚举模式匹配

match表达式常用于对枚举类型进行模式匹配：
    
    
    enum Color {
        | Red(Int64)
        | Green(Int64)
        | Blue(Int64)
    }
    
    func getColorName(c: Color): String {
        match (c) {
            case Red(v) => "Red(${v})"
            case Green(v) => "Green(${v})"
            case Blue(v) => "Blue(${v})"
        }
    }

调用示例：
    
    
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testPatternMatchEnum(): Unit {
        let colors: Array<Color> = [Red(255), Green(128), Blue(64)]
        for (c in colors) {
            Hilog.info(0, "Cangjie Test", "color = ${getColorName(c)}")
        }
    }

调用testPatternMatchEnum，日志输出结果：
    
    
    color = Red(255)
    color = Green(128)
    color = Blue(64)

#### 模式守卫

在match表达式的每个case中可以使用where关键字添加额外的匹配条件：
    
    
    func getGrade(score: Int64): String {
        match (score) {
            case s where s >= 90 => "A"
            case s where s >= 80 => "B"
            case s where s >= 70 => "C"
            case _ => "D"
        }
    }

调用示例：
    
    
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testPatternMatchGuard(): Unit {
        Hilog.info(0, "Cangjie Test", "score 95 => ${getGrade(95)}")
        Hilog.info(0, "Cangjie Test", "score 85 => ${getGrade(85)}")
        Hilog.info(0, "Cangjie Test", "score 75 => ${getGrade(75)}")
        Hilog.info(0, "Cangjie Test", "score 60 => ${getGrade(60)}")
    }

调用testPatternMatchGuard，日志输出结果：
    
    
    score 95 => A
    score 85 => B
    score 75 => C
    score 60 => D

#### 类型模式匹配

使用id: Type语法检查运行时类型并绑定变量：
    
    
    open class Animal {
        public open func name(): String {
            "Animal"
        }
    }
    
    class Dog <: Animal {
        public override func name(): String {
            "Dog"
        }
    }
    
    class Cat <: Animal {
        public override func name(): String {
            "Cat"
        }
    }
    
    func describe(animal: Animal): String {
        match (animal) {
            case d: Dog => "This is a ${d.name()}"
            case c: Cat => "This is a ${c.name()}"
            case _ => "Unknown animal"
        }
    }

调用示例：
    
    
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testPatternMatchType(): Unit {
        let dog = Dog()
        let cat = Cat()
        let animal = Animal()
        Hilog.info(0, "Cangjie Test", "${describe(dog)}")
        Hilog.info(0, "Cangjie Test", "${describe(cat)}")
        Hilog.info(0, "Cangjie Test", "${describe(animal)}")
    }

调用testPatternMatchType，日志输出结果：
    
    
    This is a Dog
    This is a Cat
    Unknown animal

#### if-let条件匹配

仓颉提供if-let语法，允许在条件表达式中使用模式匹配，这可以简化Option<T>等类型的使用：
    
    
    func printValue(opt: ?Int64): Unit {
        if (let Some(v) <- opt) {
            Hilog.info(0, "Cangjie Test", "value = ${v}")
        } else {
            Hilog.info(0, "Cangjie Test", "none")
        }
    }

调用示例：
    
    
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testPatternMatchIfLet(): Unit {
        printValue(Some(42))
        printValue(None)
    }

调用testPatternMatchIfLet，日志输出结果：
    
    
    value = 42
    none

更多模式匹配使用方法，详情请参见[模式匹配](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-pattern_overview)。
