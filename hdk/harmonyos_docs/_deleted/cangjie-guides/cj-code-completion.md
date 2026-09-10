---
name: cangjie-guides/cj-code-completion
title: 代码补全
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-code-completion
nodePath: 编写与调试应用 / 代码编辑 / 代码补全
---

# 代码补全

DevEco Studio 打开仓颉工程中的.cj文件，输入关键字、变量或”.”符号，在光标右侧提示候选内容，如下所示，可以用上下方向键快速选择想要的内容，回车补全或双击选择。当前支持关键字、变量、函数、类、接口、结构体、枚举、别名、宏和包名的仓颉代码补全。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b4/v3/D72PfXYLSaSoDkKx12xdtg/zh-cn_image_0000002701819618.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=62E94CEC35E1A855021EC03EB3ED3B5C111526DF8FF0C7413EBA628639C83E12)

#### 补全使用限制说明

  1. 当前补全方案有一些限制，由于要减少大文件场景下的延迟，在某些场景下补全结果的准确性会受到影响，例如在点补全时实际做的是模糊搜索。
         
         let arr = Array<T>()
         arr[0].
         arr[0..2] // 切片

在如上代码中，arr[0]实际上是调用了Array的下标访问运算符[]，而这种运算符有多种重载形式，模糊搜索无法准确得出函数调用返回值的类型。例如：arr[0]的返回值是类型T；arr[0..2]表示为对数组arr切片，其返回值还是Array类型。所以在点补全时，除了有正确的补全项，也会出现其他可能类型的补全项。

  2. 单行/多行字符串插值补全中，只支持补全定义在字符串以外的变量，不支持补全定义在字符串内的变量，且不支持定义在字符串内的变量的点补全。

例如下图中，输入定义在字符串内的变量index时，无法补全出index。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/15/v3/OuUd2s8PSyejuvwc0650cQ/zh-cn_image_0000002731538899.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=C11E0F40DDA898F6B2CA904CCBC10CA312FC986838FAD5E9072EC3BE0714F892)

定义在字符串内的变量index后输入.，没有补全结果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/74/v3/a4CV0vvaQauxrWPZk2Ie_w/zh-cn_image_0000002701659710.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=B4C894265F3F3DE2F582874E3D20E43AD55B5260389C6BC8F3F832912B3F2252)



