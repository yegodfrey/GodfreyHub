---
name: cangjie-faqs/07-this
title: 仓颉语言支持this吗
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/07-this
nodePath: FAQ / 语法 / 仓颉语言支持this吗
---

# 仓颉语言支持this吗

仓颉语言支持在自定义类型enum、struct和class内部使用this，也同样支持在extend语法中使用this，具体示例分情况讨论。

#### enum内部使用this

在仓颉语言中，enum支持this关键字。以下是代码示例：
    
    
    enum Theme {
        | LIGHT
        | DARK
    
        public func toString(): String {
            match (this) {
                case LIGHT => "LIGHT"
                case DARK => "DARK"
            }
        }
    }

this代表调用toString()方法的枚举类型Color实例。

#### struct内部使用this

在仓颉语言中，struct支持this关键字。以下是代码示例：
    
    
    struct Square {
        private var length: Int64
    
        public init(length: Int64) {
            this.length = length
        }
    
        public func getLength(): Int64 {
            return this.length
        }
    
        public mut func setLength(length: Int64) {
            this.length = length
            // let f1 = { => this} // error: 'this' cannot be captured in the mutable function 'setLength'
            // let f2 = { => this.length = 2} // error: 'length' cannot be captured in the mutable function 'setLength'
            // this // error: 'this' cannot be used as an expression in the mutable function 'setLength'
        }
    
        public func getArea(): Int64 {
            return this.length * this.length
        }
    }

仓颉语言对于在struct内部使用this有一定限制。在struct中mut函数中的this不能被捕获，也不能作为表达式。mut函数中的lambda或嵌套函数不能对struct的实例成员变量进行捕获。

#### class内部使用this

在仓颉语言中，class支持this关键字，以下是代码示例：
    
    
    open class C1 {
        func f1() {
            return this
        }
    
        public open func f2() {
            return this
        }
    }
    
    class C2 <: C1 {
        public override func f2() {
            return this
        }
    }
    
    public func FAQ12Test1() {
        let o1: C1 = C2()
        let o2: C2 = C2()
        if (o1.f1() is C1) {
            Hilog.info(0, "Cangjie Test", "Return C1.")
        }
        if (o1.f1() is C2) {
            Hilog.info(0, "Cangjie Test", "Return C2.")
        }
        if (o2.f2() is C2) {
            Hilog.info(0, "Cangjie Test", "Return C2.")
        }
    }

调用FAQ12Test1，日志输出结果：
    
    
    Return C1.
    Return C2.
    Return C2.

#### extend内部使用this

在仓颉语言中，extend支持this关键字，以下是代码示例：
    
    
    extend String {
        public func printSize() {
            Hilog.info(0, "Cangjie Test", "Size is ${this.size}.")
        }
    }
    
    public func FAQ12Test2() {
        let s = "Hello Cangjie"
        s.printSize()
    }

调用FAQ12Test2，日志输出结果：
    
    
    Size is 13.
