---
name: cangjie-faqs/02-function-callback
title: 仓颉语言中如何使用回调函数
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/02-function-callback
nodePath: FAQ / 语法 / 仓颉语言中如何使用回调函数
---

# 仓颉语言中如何使用回调函数

#### 函数是一等公民

在仓颉语言中，函数是一等公民，可以作为参数传递，可以作为返回值，可以被保存在其他数据结构中，可以赋值给一个变量使用。

在需要使用回调函数的场景中，仓颉函数可作为参数使用。

#### 回调函数使用示例
    
    
    let myCallback1: (String) -> Unit = {
        data => Hilog.info(0, "Cangjie Test", "myCallback1 is called, data: ${data}")
    }
    
    func myCallback2(data: String): Unit {
        Hilog.info(0, "Cangjie Test", "myCallback2 is called, data: ${data}")
    }
    
    func foo(cb1: (String) -> Unit, cb2: (String) -> Unit): Unit {
        cb1("cb1")
        cb2("cb2")
    }
    
    public func FAQ07Test(): Unit {
        foo(myCallback1, myCallback2)
    }

调用FAQ07Test，日志输出结果：
    
    
    myCallback1 is called, data: cb1
    myCallback2 is called, data: cb2
