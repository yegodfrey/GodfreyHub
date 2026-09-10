---
name: cangjie-guides/cj-code-check-real-time
title: 代码实时检查
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-code-check-real-time
nodePath: 编写与调试应用 / 代码编辑 / 代码检查 / 代码实时检查
---

# 代码实时检查

编辑器会实时的进行代码分析，如果输入的语法不符合编码规范，或者出现语义语法错误，将在代码中突出显示错误或警告，将鼠标放置在错误代码处，会提示详细的错误信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/de/v3/CknOXOG8SBedtJN6BxG-2w/zh-cn_image_0000002731378925.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=55281EADB5632B07B9AEFC45BF4569DF877289BA28E3719932659DDE04B200A7)

#### 快速修复

编辑器当前提供删除未使用 import 语句、自动导入未定义符号、删除未使用符号定义和生成未实现抽象方法的快速修复，可以通过将鼠标放置在错误代码处使用。

#### [h2]删除未使用 import 语句

对于未使用 import 语句的诊断提示，编辑器提供快速删除 import 语句的快速修复。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/90/v3/yMWH2lddT9a5aImvfM9c1g/zh-cn_image_0000002701819620.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=8B1333D71625E610E944F99CC547AFEB0E755CFD9E11BBB861B98FAB64C02E65)

如果文件中存在多个未使用 import 语句的诊断提示，提供一键删除文件中所有未使用 import 语句的快速修复。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4c/v3/NJ1p5dOwTSaeAKA5AvJS6Q/zh-cn_image_0000002731538901.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=53510B2BE51646A50F320512050A3A871EF64585AC43E1E10B83596545A87AE7)

#### [h2]自动导入未定义符号

对于未定义符号的诊断提示，编辑器根据是否存在可导入同名符号提供导入符号的快速修复。当前仅支持顶层声明符号的自动导入。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2c/v3/_WpeGJl6RnWVOhXCQIU9JA/zh-cn_image_0000002701659712.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=820300C7E75DA3901F54F0090BAA8E61DAF35921FA576CB4A4A233210EF026BB)

如果一个诊断提示中存在多个未定义符号，提供一键导入多个未定义符号的快速修复。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/11/v3/0jx5boh9RMK1ZJx0gq4JnA/zh-cn_image_0000002731378927.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=6A89B73FEFE70F1B30CB50216D4B6F20C699C02374CAB9514067B34768C5F548)

#### [h2]删除未使用符号定义

对于未使用符号的诊断提示，编辑器提供快速删除该符号定义的快速修复。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/59/v3/jIqd8pPHQJiZSH7sSFoQ0w/zh-cn_image_0000002701819622.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=44B9774CE130EC66B13558717B90A8518090F3B333C3B0BE92F30D9C2DB70109)

#### [h2]生成未实现抽象方法

对于子类中存在未实现抽象方法的诊断提示，编辑器提供一键生成所有未实现抽象方法的快速修复。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/97/v3/tvDY0RqKQkelKgyqTyB0EA/zh-cn_image_0000002731538903.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=E75B6993938D7CB0952D0CF27F0E1D0E34E1D9B23F7AA029C407E65EB7CCC187)
