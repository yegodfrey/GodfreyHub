---
name: cangjie-faqs/14-abstract-class-this
title: 在仓颉abstract class的构造函数中使用this报错
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/14-abstract-class-this
nodePath: FAQ / 语法 / 在仓颉abstract class的构造函数中使用this报错
---

# 在仓颉abstract class的构造函数中使用this报错

#### 问题现象

以下代码编译报错，并提示'this' cannot be used as an expression in the constructor of abstract class Cangjie(310)，该如何解决：
    
    
    import std.collection.*
    
    let list: ArrayList<A> = ArrayList<A>()
    
    abstract class A {
        init() {
            list.add(this)
        }
    }

#### 解决方案

为了避免访问未初始化完成的实例成员变量，仓颉语言禁止了开发者在可被继承的class的构造函数中单独使用this（比如将this作为函数参数传递或者赋值给变量）或通过this调用实例成员函数。这种设计可以避免this逃逸或者动态分派到子类的实例成员函数，进而避免访问未初始化完成的实例成员变量。Java和Kotlin支持上述对this的使用方法，但是可能会在运行时造成空指针异常。如果确实有为被构造的实例添加监听之类的需求，建议手动在构造函数之外添加监听，或者在不可被继承的子类的构造函数中添加监听。
    
    
    let list: ArrayList<A> = ArrayList<A>()
    
    abstract class A {
        func addList() {
            list.add(this)
        }
    }
    
    class B <: A {
        init() {
            this.addList()
        }
    }
    
    public func FAQ63Test() {
        let b = B()
        for (l in list) {
            if (refEq(l, b)) {
                Hilog.info(0, "Cangjie Test", "b has already been added to the list.")
            }
        }
    }

调用FAQ63Test，日志输出结果：
    
    
    b has already been added to the list.
