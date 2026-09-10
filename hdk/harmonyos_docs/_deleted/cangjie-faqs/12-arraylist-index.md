---
name: cangjie-faqs/12-arraylist-index
title: 仓颉语言如何通过index获取ArrayList中的元素
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/12-arraylist-index
nodePath: FAQ / 标准库 / 仓颉语言如何通过index获取ArrayList中的元素
---

# 仓颉语言如何通过index获取ArrayList中的元素

仓颉语言在标准库中提供可变长数组的数据结构，详情请参见[std.collection—ArrayList](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-arraylistt)。

#### 使用get获取元素

ArrayList类提供get方法方便开发者获取ArrayList中的元素。
    
    
    public func FAQ30Test1(): Unit {
        let arr = ArrayList<Int64>([1, 2, 3, 4, 5, 6])
        Hilog.info(0, "Cangjie Test", arr.get(0).getOrThrow().toString())
    }

调用FAQ30Test1，日志输出结果：
    
    
    1

详情请参见[std.collection—ArrayList—get](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#func-getint64)。

#### 使用[]获取元素

ArrayList类提供[]操作符重载方便开发者获取ArrayList中的元素。
    
    
    public func FAQ30Test2(): Unit {
        let arr = ArrayList<Int64>([1, 2, 3, 4, 5, 6])
        Hilog.info(0, "Cangjie Test", arr[0].toString())
    }

调用FAQ30Test2，日志输出结果：
    
    
    1

详情请参见[std.collection—ArrayList—[]](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#operator-func-int64)。
