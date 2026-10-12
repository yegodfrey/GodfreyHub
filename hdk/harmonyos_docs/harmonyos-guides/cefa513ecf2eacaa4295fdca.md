---
name: document/cn/harmonyos-guides/ide-code-completion
title: 代码生成/补全
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-code-completion
---

# 代码生成/补全

## 代码自动补全

提供代码的自动补全能力，编辑器工具会分析上下文，并根据输入的内容，提示可补全的类、方法、字段和关键字的名称等，支持模糊匹配。

自动补全功能默认按最短路径进行排序，如仅需按照最近使用过的类、方法、字段和关键字等名称提供补全内容排序，可以在**File > Settings** （macOS为**DevEco Studio > Preferences/Settings** ）**> Editor > General > Code Completion** 中勾选"Sort suggestions by recently used"。
> 说明
>
> 若已勾选代码补全按最近使用排序但未生效，请检查**Code Completion**页面，确保"Sort suggestions alphabetically"已取消勾选。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/18/v3/GhDJlDL3R-eTpIvRgI-pSA/zh-cn_image_0000002731542621.png?HW-CC-KV=V1&HW-CC-Date=20261010T073008Z&HW-CC-Expire=31536000000&HW-CC-Sign=74B17C45A81B913F06A4B18521DB4C8C737E94A2F0B2D0F84B84C4E82B8D708F)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/24/v3/eBDda9IJSr-7Hy5BW7O6AA/zh-cn_image_0000002701663430.gif?HW-CC-KV=V1&HW-CC-Date=20261010T073008Z&HW-CC-Expire=31536000000&HW-CC-Sign=7A172B2ECF349EE76389FDD7CFFBF7AA67D2F687F205B9FC645CCD16CD1094ED)

## 快速覆写父类

DevEco Studio提供Override Methods，辅助开发者根据父类模板快速生成子类方法，提升开发效率。将光标放于子类定义位置，使用**快捷键Ctrl+O** （macOS为**Control+O** ），或右键单击**Generate** ...，选择**Override Methods** ，指定需要覆写的对象（方法、变量等），点击**OK**将自动生成该对象的覆写代码。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/66/v3/O-7yhq4uTxupZUNegHs82w/zh-cn_image_0000002701823348.gif?HW-CC-KV=V1&HW-CC-Date=20261010T073008Z&HW-CC-Expire=31536000000&HW-CC-Sign=5920D493FFA91B383DAC083493F607FCAE29ECAD4FC47FB25FC1BD91C9387C5A)

## 快速生成构造器

编辑器支持为类快速生成一个对应的构造函数。

在类中使用**快捷键Alt+Insert** （macOS为**Command+N** ），或单击鼠标右键选择**Generate** ...，在弹窗中选择**Constructor** ，选择一个或多个需要生成构造函数的参数，点击**OK** 。若选择**Select None**，则生成不带参数的构造器。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/97/v3/cCYSCI2xTLatVJApPi8FKg/zh-cn_image_0000002731542619.gif?HW-CC-KV=V1&HW-CC-Date=20261010T073008Z&HW-CC-Expire=31536000000&HW-CC-Sign=BB1CF5AA8684C3DFED2B43D9E67ECCC536F474870109DE93F3657184663941AE)

## 快速生成get/set方法

编辑器支持为类成员变量或对象属性快速生成get和set方法。

将光标放置在当前类中，单击右键选择**Generate...>Getter and Setter** ，或者使用快捷键**Alt+Insert** （macOS为**Command+N** ），在菜单中选择**Getter and Setter**，完成方法快速生成。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7d/v3/rIgTLFTiSbC1SckolBSzkg/zh-cn_image_0000002701663426.gif?HW-CC-KV=V1&HW-CC-Date=20261010T073008Z&HW-CC-Expire=31536000000&HW-CC-Sign=2F39EFB20DD9B4AB4005139A9394BE1CB96ADD41FBFB645941B460AE4D827146)

## 快速生成声明信息到Index文件

编辑器支持将HSP和HAR模块中变量、方法、接口、类等需要对外暴露的信息，通过**Generate...>Declarations**功能，批量在Index.ets文件中进行声明，便于其他模块调用。

在HSP或HAR模块内的文件编辑界面，单击右键选择**Generate...>** **Declarations** ，或者使用快捷键**Alt+Insert** （macOS为****Command+N**** ），在菜单中选择**Declarations**，按住快捷键Ctrl并选择需要声明的变量名、方法名、接口名、类名等，即可在模块的Index.ets文件中批量生成相应的声明信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/55/v3/ZmmqkxpDTVKqk6b8t2X0cA/zh-cn_image_0000002731382649.gif?HW-CC-KV=V1&HW-CC-Date=20261010T073008Z&HW-CC-Expire=31536000000&HW-CC-Sign=29C59186DF2AAF3E73DECDA105AD33953BA50F50B9A850497642A64A0DD90277)

