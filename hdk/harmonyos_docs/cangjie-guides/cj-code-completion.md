---
name: cangjie-guides/cj-code-completion
title: 代码补全
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-code-completion
nodePath: 编写与调试应用 / 代码编辑 / 代码补全
---

# 代码补全

DevEco Studio 打开仓颉工程中的.cj文件，输入关键字、变量或”.”符号，在光标右侧提示候选内容，如下所示，可以用上下方向键快速选择想要的内容，回车补全或双击选择。当前支持关键字、变量、函数、类、接口、结构体、枚举、别名、宏和包名的仓颉代码补全。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3c/v3/pqj0ibfbTtaYzbFRYeQfdw/zh-cn_image_0000002743197897.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=D2B092B4F01918420A379F3A6D203F7BFAB8A8B5BD30585490E095DD81DC9FC8)

#### 补全使用限制说明

  1. 当前补全方案有一些限制，由于要减少大文件场景下的延迟，在某些场景下补全结果的准确性会受到影响，例如在点补全时实际做的是模糊搜索。
         
         let arr = Array<T>()
         arr[0].
         arr[0..2] // 切片

在如上代码中，arr[0]实际上是调用了Array的下标访问运算符[]，而这种运算符有多种重载形式，模糊搜索无法准确得出函数调用返回值的类型。例如：arr[0]的返回值是类型T；arr[0..2]表示为对数组arr切片，其返回值还是Array类型。所以在点补全时，除了有正确的补全项，也会出现其他可能类型的补全项。

  2. 单行/多行字符串插值补全中，只支持补全定义在字符串以外的变量，不支持补全定义在字符串内的变量，且不支持定义在字符串内的变量的点补全。

例如下图中，输入定义在字符串内的变量index时，无法补全出index。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ac/v3/TCkz5vQtR16esDS3TKaNjQ/zh-cn_image_0000002713399016.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=DC628198BB1505A64DD189E6FDF6912D1EE4BC506D4CDDC2707282A2B39B9CBC)

定义在字符串内的变量index后输入.，没有补全结果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/77/v3/R_-F2890SdeKad-KkRPuaQ/zh-cn_image_0000002743077947.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=71C5D142CA9997EA8B51F854A3A938024BA6E86E3CB54F3AD2CD3391A0688392)



