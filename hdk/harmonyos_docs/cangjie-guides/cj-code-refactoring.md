---
name: cangjie-guides/cj-code-refactoring
title: 代码重构
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-code-refactoring
nodePath: 编写与调试应用 / 代码编辑 / 代码重构
---

# 代码重构

#### 代码重命名

提供代码重命名功能，帮助开发者快速重命名某个自定义对象（类、结构体、接口、枚举、函数、别名、泛型、变量和宏）的定义处和调用处。

打开仓颉工程中的.cj文件，使用鼠标右击目标符号，选择 **Refactor > Rename** 触发重命名功能，在弹出的输入框中输入修改后值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f0/v3/0xrHUSwsQJOCHReR7K2zog/zh-cn_image_0000002743077953.png?HW-CC-KV=V1&HW-CC-Date=20260921T111040Z&HW-CC-Expire=86400&HW-CC-Sign=E046E35E6776DF65AF2B8B25A7A30CBDBBFD2AB03F799C4AFA2A96A8C2724EF9)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fa/v3/noohwVwWRFaRdfPSGD9IgQ/zh-cn_image_0000002713558992.png?HW-CC-KV=V1&HW-CC-Date=20260921T111040Z&HW-CC-Expire=86400&HW-CC-Sign=3D87C297EC33CCB000C3E4C5F2C5E6A257CC1608C489F07792F1DFB8CCBC5E4F)

单击 **OK** 按钮，将同步更新修改目标符号的定义处和调用处内容。

#### 文件（夹）重命名

提供仓颉文件夹下的文件（夹）重命名功能，帮助开发者快速更改文件（夹）名称，并同步到所在模块内仓颉中对其引用的位置。

选中需要重新命名的文件（夹），右键单击**Rename...** （或者右键单击**Refactor** ，选择**Rename...** ，或使用快捷键**Shift+F6** ），在弹框中输入新的标识符名称，单击**Refactor** 完成重新命名。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/33ZR5MKkTtSvckzDnulJhQ/zh-cn_image_0000002743197905.png?HW-CC-KV=V1&HW-CC-Date=20260921T111040Z&HW-CC-Expire=86400&HW-CC-Sign=977345A535624563F453AD2A108B53B96934213C85EC4E66BA2E07C3DCF8F98B)

此外，还支持筛选并过滤不需要重命名的引用位置。在**Rename...** 弹窗中单击**Preview** ，在弹出预览窗口中，开发者选中无需重命名的选项，单击右键菜单**Exclude/Remove** 进行过滤/删除，完成筛选后单击左下角**Refactor** ，即可对剩下选项执行重命名操作。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7d/v3/HpB-FDFET-S1PuwWRcBjOg/zh-cn_image_0000002713399024.png?HW-CC-KV=V1&HW-CC-Date=20260921T111040Z&HW-CC-Expire=86400&HW-CC-Sign=B81BABAFD16F8169400AC5948C88F9CB507EB3EC62B0A92D4683CE8FFED7555D)

#### 文件（夹）移动

在文件中单击右键，选择**Refactor > Move File...**，在弹窗中输入或单击...选择指定的目录，单击**Refactor** ，可将当前文件移动至该目录下。勾选**Search for references** ，可查找并更新工程中对该文件的引用；勾选**Open in editor** ，可在编辑器中查看移动的文件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b2/v3/iRdiYlOZR_yqCFrIABLj9A/zh-cn_image_0000002743077955.png?HW-CC-KV=V1&HW-CC-Date=20260921T111040Z&HW-CC-Expire=86400&HW-CC-Sign=F947EB974D343BAEA94BFBA7950FF2D25FF23BA2F45199675C6F0952E8C8CE11)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8e/v3/lLulyKevRYWudW1fnJ2NbQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111040Z&HW-CC-Expire=86400&HW-CC-Sign=4CBE9EFE9D0233C6F2E44B4183704DEECEB46DEBDAE9D2898F619B59AD1CBA4F)

部分场景下文件移动之后工程会报错，比如：将自定义宏移动到非宏包中、将非宏的文件移动到宏包中，或者cj文件移动到非仓颉目录下等。

#### 提取方法

提供**提取方法** 功能，帮助开发者快速将一段独立的代码块抽取为一个全新的函数，并自动在原位置生成该函数的调用代码。

打开仓颉工程中的 .cj 文件，选中目标代码块，使用鼠标右击，选择 **Refactor > Extract Method** 触发提取方法功能，在弹出的输入框中确认新函数的名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5b/v3/D6936rkPTt2XJ6VFFPh85g/zh-cn_image_0000002713558994.png?HW-CC-KV=V1&HW-CC-Date=20260921T111040Z&HW-CC-Expire=86400&HW-CC-Sign=779DA3BB9165A367F248A8B3274BC4CE2B30B81A07B7C2E67B626CEBA4A90822)

#### 提取变量

提供**提取变量** 功能，帮助开发者快速将一个复杂的表达式或字面量提取为一个局部变量，从而提高代码的可读性并减少重复计算。

打开仓颉工程中的 .cj 文件，选中目标表达式，使用鼠标右击，选择 **Refactor > Extract Variable** 触发提取变量功能，在弹出的输入框中输入变量名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3d/v3/_-sTIWDpTciNjZRx5Tx6jw/zh-cn_image_0000002743197907.png?HW-CC-KV=V1&HW-CC-Date=20260921T111040Z&HW-CC-Expire=86400&HW-CC-Sign=6D1E7158DC445D7570B477945E81F2739B4A7E487D469D75AA830C8FF52ED8CE)

#### 提取接口

提供**提取接口** 功能，帮助开发者快速从现有的类或结构体中抽取出一组方法声明，自动生成一个新的接口，并让原类/结构体实现该接口。

打开仓颉工程中的 .cj 文件，将光标定位在目标类或结构体名称上，使用鼠标右击，选择 **Refactor > Extract Interface** 触发提取接口功能，在弹出的窗口中勾选需要包含的方法并输入接口名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/60/v3/y2Tt3BHAShStcnLiXEDp9A/zh-cn_image_0000002713399026.png?HW-CC-KV=V1&HW-CC-Date=20260921T111040Z&HW-CC-Expire=86400&HW-CC-Sign=CE4566C7331C779D4FED61D8AA1081D12D07E09DADF0AF786B2EFD260F61EC1E)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fa/v3/5_xoJwrSTISunhxhTkydIQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111040Z&HW-CC-Expire=86400&HW-CC-Sign=5279B1A35A543A182DAEBA326BA778124A5AB8AC07C07AA0C6E79857B5AEC135)

在宏、跨包二次提取接口场景���不支持提取接口功能。

#### 引入字段

提供**引入字段** 功能，帮助开发者快速将方法内部的局部变量或表达式提升为当前类/结构体的成员变量（字段），以便在类的其他方法中共享。

打开仓颉工程中的 .cj 文件，选中目标变量或表达式，使用鼠标右击，选择 **Refactor > Introduce Field** 触发引入字段功能，在弹出的配置框中设置字段的名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/74/v3/5GvBQ1PRTs2OOGr3XCLCzw/zh-cn_image_0000002743077957.png?HW-CC-KV=V1&HW-CC-Date=20260921T111040Z&HW-CC-Expire=86400&HW-CC-Sign=C9272C8F604A47A72DA33BD0D050C89E10D8CAC2FBF58FF11950DB2EFFB7B841)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/61/v3/OTV84UcBSIiu8TmfEKg7TA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111040Z&HW-CC-Expire=86400&HW-CC-Sign=92E0C93BCE7D7EFA60554EC964690A9C4F9B08E3D9D5E1A5CC5CCE24F8B649FE)

在引入索引、init初始化、const变量、if-let表达式、位运算、宏场景下不支持引入字段功能。

#### 引入入参

提供**引入入参** 功能，帮助开发者快速将函数内部的某个表达式或局部变量提取为该函数的输入参数，并自动更新所有调用该函数的地方。

打开仓颉工程中的 .cj 文件，选中目标表达式或变量，使用鼠标右击，选择 **Refactor > Introduce Parameter** 触发引入入参功能，在弹出的配置框中确认参数名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6a/v3/jB0NZlLMQNa5xcdyFikXgg/zh-cn_image_0000002713558996.png?HW-CC-KV=V1&HW-CC-Date=20260921T111040Z&HW-CC-Expire=86400&HW-CC-Sign=39E833552C6428343199C887FA16DAD2B01C0BCAFDA905BC0101D06C1DDF90FB)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/84/v3/2xgUi2cYSTKKcxMeRMRp-w/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111040Z&HW-CC-Expire=86400&HW-CC-Sign=F30B78D08623BE136A2C39765907A251CC52F59B5F760B5022DB40797BCE0348)

在引入索引、init初始化、if-let表达式、宏场景下不支持引入入参功能。

#### 内联方法

提供**内联方法** 功能，帮助开发者快速将函数调用，替换为该函数的实际实现。

打开仓颉工程中的 .cj 文件，选中目标方法调用，使用鼠标右击，选择 **Refactor > Inline Method** 触发内联方法功能。

内联前：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/10/v3/SAa4Pd9gTue1gVJVPxWkhQ/zh-cn_image_0000002743197909.png?HW-CC-KV=V1&HW-CC-Date=20260921T111040Z&HW-CC-Expire=86400&HW-CC-Sign=BC65B6932EF7B598898087EAB6EE0594B2510346E3F68352A8ABDB771D5B7AC0)

内联后：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/36/v3/DngXtD5UTX2A7hEGSQPo_g/zh-cn_image_0000002713399028.png?HW-CC-KV=V1&HW-CC-Date=20260921T111040Z&HW-CC-Expire=86400&HW-CC-Sign=54403C2AA51160EDB1B1AEB730912FC1D9AAEBC29C5E457997C2C0E28D454FE7)

#### 内联变量

提供**内联变量** 功能，帮助开发者快速将某个变量替换为其初始化值。

打开仓颉工程中的 .cj 文件，选中目标变量使用，使用鼠标右击，选择 **Refactor > Inline Variable** 触发内联变量功能。

内联前：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/45/v3/nwkOSkihQYWkFDaJkKBgxQ/zh-cn_image_0000002743077959.png?HW-CC-KV=V1&HW-CC-Date=20260921T111040Z&HW-CC-Expire=86400&HW-CC-Sign=7CFF21327FB2678D01912FF28B091B14AB666A32702B4470591D13FA6B7E18BA)

内联后：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b0/v3/P-kosFrwRSuVC18W00GO7w/zh-cn_image_0000002713558998.png?HW-CC-KV=V1&HW-CC-Date=20260921T111040Z&HW-CC-Expire=86400&HW-CC-Sign=DC3E68FEAD7EA01E486FAF00753E2411CAAB7FC85D21EBF5B0E12173E666F319)
