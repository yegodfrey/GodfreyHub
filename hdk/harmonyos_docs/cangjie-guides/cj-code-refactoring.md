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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f0/v3/0xrHUSwsQJOCHReR7K2zog/zh-cn_image_0000002743077953.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=FFC7DA860A09DCF266AE0DB5CB42B55A62D655E4AD298A0F54C961041CBB7D4C)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fa/v3/noohwVwWRFaRdfPSGD9IgQ/zh-cn_image_0000002713558992.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=6DC4FBA46AD508656ABB01539C1D5FE9FF05B813E96504470241C4110BD21B53)

单击 **OK** 按钮，将同步更新修改目标符号的定义处和调用处内容。

#### 文件（夹）重命名

提供仓颉文件夹下的文件（夹）重命名功能，帮助开发者快速更改文件（夹）名称，并同步到所在模块内仓颉中对其引用的位置。

选中需要重新命名的文件（夹），右键单击**Rename...** （或者右键单击**Refactor** ，选择**Rename...** ，或使用快捷键**Shift+F6** ），在弹框中输入新的标识符名称，单击**Refactor** 完成重新命名。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/33ZR5MKkTtSvckzDnulJhQ/zh-cn_image_0000002743197905.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=8248653D1198DFE9D0684F8D428C303FAA0D12FB6AADDB0C93747894C99EA1BD)

此外，还支持筛选并过滤不需要重命名的引用位置。在**Rename...** 弹窗中单击**Preview** ，在弹出预览窗口中，开发者选中无需重命名的选项，单击右键菜单**Exclude/Remove** 进行过滤/删除，完成筛选后单击左下角**Refactor** ，即可对剩下选项执行重命名操作。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7d/v3/HpB-FDFET-S1PuwWRcBjOg/zh-cn_image_0000002713399024.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=DAF545156A14C4440C2494BD91CDD12904A8213719DC5C9BFD66868C587B31FB)

#### 文件（夹）移动

在文件中单击右键，选择**Refactor > Move File...**，在弹窗中输入或单击...选择指定的目录，单击**Refactor** ，可将当前文件移动至该目录下。勾选**Search for references** ，可查找并更新工程中对该文件的引用；勾选**Open in editor** ，可在编辑器中查看移动的文件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b2/v3/iRdiYlOZR_yqCFrIABLj9A/zh-cn_image_0000002743077955.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=E24C30A52B5B2FDFDF3EFFFCB585F0428F4D3D10FEB1281ABC97CF1F4864040E)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8e/v3/lLulyKevRYWudW1fnJ2NbQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=8A8679747B783588217B3A9E402BCFFD841DAF26B97E5BB48D56539A2A5B83FC)

部分场景下文件移动之后工程会报错，比如：将自定义宏移动到非宏包中、将非宏的文件移动到宏包中，或者cj文件移动到非仓颉目录下等。

#### 提取方法

提供**提取方法** 功能，帮助开发者快速将一段独立的代码块抽取为一个全新的函数，并自动在原位置生成该函数的调用代码。

打开仓颉工程中的 .cj 文件，选中目标代码块，使用鼠标右击，选择 **Refactor > Extract Method** 触发提取方法功能，在弹出的输入框中确认新函数的名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5b/v3/D6936rkPTt2XJ6VFFPh85g/zh-cn_image_0000002713558994.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=867C2B885F3AF70D86FB743F8E8BAFBE00994EC4F3C83BBAE56DD1B97F635C7F)

#### 提取变量

提供**提取变量** 功能，帮助开发者快速将一个复杂的表达式或字面量提取为一个局部变量，从而提高代码的可读性并减少重复计算。

打开仓颉工程中的 .cj 文件，选中目标表达式，使用鼠标右击，选择 **Refactor > Extract Variable** 触发提取变量功能，在弹出的输入框中输入变量名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3d/v3/_-sTIWDpTciNjZRx5Tx6jw/zh-cn_image_0000002743197907.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=5BA49904B522FCAB94291C10294D737B2DF0DA2A5378E2FFF91249D2E37252A1)

#### 提取接口

提供**提取接口** 功能，帮助开发者快速从现有的类或结构体中抽取出一组方法声明，自动生成一个新的接口，并让原类/结构体实现该接口。

打开仓颉工程中的 .cj 文件，将光标定位在目标类或结构体名称上，使用鼠标右击，选择 **Refactor > Extract Interface** 触发提取接口功能，在弹出的窗口中勾选需要包含的方法并输入接口名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/60/v3/y2Tt3BHAShStcnLiXEDp9A/zh-cn_image_0000002713399026.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=60C7B24BCAB771C5D5DC51ED296A4D78AD3A1F8D3AB321313CB40E2E9B04B8F9)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fa/v3/5_xoJwrSTISunhxhTkydIQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=DBCED65A23C4468294C995A1670F2F9A9D47B3CE6649E0B3167C7E619E6AB6E7)

在宏、跨包二次提取接口场景下不支持提取接口功能。

#### 引入字段

提供**引入字段** 功能，帮助开发者快速将方法内部的局部变量或表达式提升为当前类/结构体的成员变量（字段），以便在类的其他方法中共享。

打开仓颉工程中的 .cj 文件，选中目标变量或表达式，使用鼠标右击，选择 **Refactor > Introduce Field** 触发引入字段功能，在弹出的配置框中设置字段的名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/74/v3/5GvBQ1PRTs2OOGr3XCLCzw/zh-cn_image_0000002743077957.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=D05448F1E71782A8E47C556D39D594BC35AF670E881AF42457D45BBB198603CB)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/61/v3/OTV84UcBSIiu8TmfEKg7TA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=22594D285B88C9715CE137B4AB18BF8BD9B4198E25773C0F95FF66F4315C5BE5)

在引入索引、init初始化、const变量、if-let表达式、位运算、宏场景下不支持引入字段功能。

#### 引入入参

提供**引入入参** 功能，帮助开发者快速将函数内部的某个表达式或局部变量提取为该函数的输入参数，并自动更新所有调用该函数的地方。

打开仓颉工程中的 .cj 文件，选中目标表达式或变量，使用鼠标右击，选择 **Refactor > Introduce Parameter** 触发引入入参功能，在弹出的配置框中确认参数名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6a/v3/jB0NZlLMQNa5xcdyFikXgg/zh-cn_image_0000002713558996.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=DCC079C24E279559A2A5F46C0267D4AD47633CD3D39A347681BFEE4266E36727)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/84/v3/2xgUi2cYSTKKcxMeRMRp-w/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=8FF4155C234D110C4B69A032E53CE1E05429C8DF533FA75D7DA70CFDC8F88A77)

在引入索引、init初始化、if-let表达式、宏场景下不支持引入入参功能。

#### 内联方法

提供**内联方法** 功能，帮助开发者快速将函数调用，替换为该函数的实际实现。

打开仓颉工程中的 .cj 文件，选中目标方法调用，使用鼠标右击，选择 **Refactor > Inline Method** 触发内联方法功能。

内联前：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/10/v3/SAa4Pd9gTue1gVJVPxWkhQ/zh-cn_image_0000002743197909.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=611D549FA80387AEC6BCAD24DEFE6ABBAFA9C8D5DD2207ABD3B677E9DDAEB003)

内联后：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/36/v3/DngXtD5UTX2A7hEGSQPo_g/zh-cn_image_0000002713399028.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=66A1156B7127C10D23109B1BAE7B9F9E0977D33C026047149A7122B2DB97B3BE)

#### 内联变量

提供**内联变量** 功能，帮助开发者快速将某个变量替换为其初始化值。

打开仓颉工程中的 .cj 文件，选中目标变量使用，使用鼠标右击，选择 **Refactor > Inline Variable** 触发内联变量功能。

内联前：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/45/v3/nwkOSkihQYWkFDaJkKBgxQ/zh-cn_image_0000002743077959.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=C1E815825798F1F4A6EBFDDB3966519FB7A82F1BB5EAA025AADA3E892D8DDBDB)

内联后：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b0/v3/P-kosFrwRSuVC18W00GO7w/zh-cn_image_0000002713558998.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=05F98D1377C83EA6D00BCA92C9A383AA366528A7F124C00301D8439472B559CD)
