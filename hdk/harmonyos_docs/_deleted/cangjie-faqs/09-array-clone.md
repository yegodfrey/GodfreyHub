---
name: cangjie-faqs/09-array-clone
title: 仓颉语言Array<T>如何拷贝
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/09-array-clone
nodePath: FAQ / 标准库 / 仓颉语言Array<T>如何拷贝
---

# 仓颉语言Array<T>如何拷贝

#### 赋值操作

对数组类型变量进行赋值操作时，会发生对Array<T>实例的浅拷贝。Array<T>实例的底层数据存储在仓颉堆上，Array<T>实例持有其引用。拷贝后两个Array<T>实例将指向同样的底层堆上数组数据，修改其中之一，另一个会相应发生改变。

效果示例：
    
    
    public func FAQ27Test1(): Unit {
        let arr: Array<Byte> = [1, 2, 3, 4, 5, 6, 7]
        var arr1 = arr
        arr1[0] = 2
        Hilog.info(0, "Cangjie Test", arr.toString())
    }

调用FAQ27Test1，日志输出结果：
    
    
    [2, 2, 3, 4, 5, 6, 7]

#### clone函数

Array<T>类型的成员函数[clone](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#func-clone)会进行深拷贝，返回一个新的数组实例，两个数组实例相互独立。

效果示例：
    
    
    public func FAQ27Test2(): Unit {
        let arr: Array<Byte> = [1, 2, 3, 4, 5, 6, 7]
        var arr1 = arr.clone()
        arr1[0] = 2
        Hilog.info(0, "Cangjie Test", arr.toString())
    }

调用FAQ27Test2，日志输出结果：
    
    
    [1, 2, 3, 4, 5, 6, 7]
