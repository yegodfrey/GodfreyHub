---
name: cangjie-faqs/11-array-string
title: 如何将字节数组转换为字符串
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/11-array-string
nodePath: FAQ / 标准库 / 如何将字节数组转换为字符串
---

# 如何将字节数组转换为字符串

#### Array<Byte>类型的toString成员函数

[toString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#extendt-arrayt-where-t--tostring)函数会把字节数组转换成它的字符串表示，例如：
    
    
    public func FAQ29Test1(): Unit {
        let arr: Array<Byte> = [0, 1, 2, 3]
        Hilog.info(0, "Cangjie Test", arr.toString())
    }

调用FAQ29Test1，日志输出结果：
    
    
    [0, 1, 2, 3]

#### String类型的fromUtf8成员函数

[fromUtf8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#static-func-fromutf8arrayuint8)函数会把字节数组按utf8编码解析成字符串。该函数要求参数中的字节数组是字符串的utf8编码，否则将抛出异常。示例如下：
    
    
    public func FAQ29Test2(): Unit {
        let arr: Array<Byte> = [97, 98, 99, 100]
        Hilog.info(0, "Cangjie Test", String.fromUtf8(arr))
    }

调用FAQ29Test2，日志输出结果：
    
    
    abcd
