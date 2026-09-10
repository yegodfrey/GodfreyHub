---
name: cangjie-faqs/21-interface-abstract-class
title: 仓颉语言中接口和抽象类有什么区别，如何选择
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/21-interface-abstract-class
nodePath: FAQ / 语法 / 仓颉语言中接口和抽象类有什么区别，如何选择
---

# 仓颉语言中接口和抽象类有什么区别，如何选择

仓颉语言中接口（interface）和抽象类（abstract class）都用于定义抽象类型，但二者在设计目的和使用规则上有重要区别。

#### 核心区别

特性 | 接口（interface） | 抽象类（abstract class）  
---|---|---  
多继承/实现 | 支持实现多个接口 | 仅支持单继承  
成员变量 | 不支持 | 支持let/var成员变量  
构造函数 | 不支持 | 支持init和主构造函数  
默认实现 | 支持 | 支持  
访问修饰符 | 成员隐式public | 支持4级访问修饰符  
实现方式 | class Foo <: I | class Foo <: Base  
sealed修饰 | 支持 | 支持  
属性（prop） | 支持 | 支持  
  
#### 接口示例

接口适合定义行为契约，一个类可以实现多个接口：
    
    
    interface Printable {
        func print(): Unit
    }
    
    interface Serializable {
        func serialize(): String
    }
    
    class Document <: Printable & Serializable {
        var content: String = ""
        public func print(): Unit {
            Hilog.info(0, "Cangjie Test", content)
        }
        public func serialize(): String {
            content
        }
    }

调用示例：
    
    
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testInterfaceMultiImpl(): Unit {
        let doc = Document()
        doc.content = "Hello World"
        doc.print()
        Hilog.info(0, "Cangjie Test", "serialized: ${doc.serialize()}")
    }

调用testInterfaceMultiImpl，日志输出结果：
    
    
    Hello World
    serialized: Hello World

#### 抽象类示例

抽象类适合定义具有共同状态和行为的类型层次：
    
    
    abstract class Vehicle {
        var brand: String = ""
        var year: Int64 = 0
    
        public init(brand!: String, year!: Int64) {
            this.brand = brand
            this.year = year
        }
    
        public func maxSpeed(): Float64
    
        public open func info(): String {
            "${brand} (${year}), max speed: ${maxSpeed()} km/h"
        }
    }
    
    class Car <: Vehicle {
        var enginePower: Float64 = 0.0
    
        public init(brand!: String, year!: Int64, enginePower!: Float64) {
            super(brand: brand, year: year)
            this.enginePower = enginePower
        }
    
        public override func maxSpeed(): Float64 {
            enginePower * 2.0
        }
    }
    
    class Bicycle <: Vehicle {
        public init(brand!: String, year!: Int64) {
            super(brand: brand, year: year)
        }
    
        public override func maxSpeed(): Float64 {
            30.0
        }
    }

调用示例：
    
    
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testAbstractClassInherit(): Unit {
        let car = Car(brand: "Toyota", year: 2024, enginePower: 150.0)
        let bike = Bicycle(brand: "Giant", year: 2023)
        Hilog.info(0, "Cangjie Test", "car: ${car.info()}")
        Hilog.info(0, "Cangjie Test", "bike: ${bike.info()}")
    }

调用testAbstractClassInherit，日志输出结果：
    
    
    car: Toyota (2024), max speed: 300.000000 km/h
    bike: Giant (2023), max speed: 30.000000 km/h

#### 选择建议

  1. **使用接口** ：当需要定义纯粹的行为契约、需要多实现、不需要共享状态时
  2. **使用抽象类** ：当需要共享成员变量和代码实现、类型之间有明确的继承层次时
  3. **结合使用** ：抽象类可以实现接口，类在继承抽象类时也可同时实现接口，在共享状态的同时满足多种行为契约



更多接口和抽象类的使用方法，详情请参见[接口](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-interface)和[类](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-class)。
