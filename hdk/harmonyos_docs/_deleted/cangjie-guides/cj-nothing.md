---
name: cangjie-guides/cj-nothing
title: Nothing 类型
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-nothing
nodePath: 基础入门 / 学习仓颉语言 / 基础数据类型 / Nothing 类型
---

# Nothing 类型

Nothing 是一种特殊的类型，它不包含任何值，并且 Nothing 类型是所有类型的子类型（这当中也包括 [Unit 类型](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-unit)）。

break、continue、return 和 throw 表达式的类型是 Nothing，程序执行到这些表达式时，它们之后的代码将不会被执行。return 只能在函数体中使用，break、continue 只能在循环体中使用，参考如下示例：
    
    
    while (true) {
        func f() {
            break // Error, break must be used directly inside a loop
        }
        let g = { =>
            continue // Error, continue must be used directly inside a loop
        }
    }

由于函数的形参和其默认值不属于该函数的函数体，所以下面例子中的 return 表达式缺少包围它的函数体——它既不属于外层函数 f（因为内层函数定义 g 已经开始），也不在内层函数 g 的函数体中（该用例相关内容，请参考[嵌套函数](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-nested_functions)）：
    
    
    func f() {
        func g(x!: Int64 = return) { // Error, return must be used inside a function body
            0
        }
        1
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d8/v3/huKuVBzCSrS_zEG06f8DVg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111549Z&HW-CC-Expire=86400&HW-CC-Sign=E25C4532403796181281D5C7DC3418642084CD6202BBBD5573C3F703882F3D7D)

目前编译器还不允许在使用类型的地方显式地使用 Nothing 类型。
