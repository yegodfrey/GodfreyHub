---
name: cangjie-faqs/10-array-size
title: 仓颉语言Array<T>的长度上限是多少
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/10-array-size
nodePath: FAQ / 标准库 / 仓颉语言Array<T>的长度上限是多少
---

# 仓颉语言Array<T>的长度上限是多少

仓颉语言提供数组类型Array<T>，初始化大小参数size为Int64类型，最大长度为$2^{63}-1$。

但是，由于设备内存的局限，Array<T>申请的内存可能会超过设备内存大小，出现超出内存的情况。
    
    
    func test() {
        let arr = Array<Int64>(Int64.Max, repeat: 0)
        return 0
    }

运行结果：
    
    
    An exception has occurred:
        Out of memory
