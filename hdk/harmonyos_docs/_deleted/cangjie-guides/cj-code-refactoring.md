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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9e/v3/MktqxSSuSFy7twnNwc9pXg/zh-cn_image_0000002701659716.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=264CAD57E436021491DD2468C206D09686DF5F7259910DC4E6780EA9FBF5A06F)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/70/v3/6dZDSgO8Q5icttGXrTvIzQ/zh-cn_image_0000002731378931.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=BCB47EDDCBF6BF4A4192AA1FCE79AE770266D3725340910AB6DAD44D541FBB54)

单击 **OK** 按钮，将同步更新修改目标符号的定义处和调用处内容。

#### 文件（夹）重命名

提供仓颉文件夹下的文件（夹）重命名功能，帮助开发者快速更改文件（夹）名称，并同步到所在模块内仓颉中对其引用的位置。

选中需要重新命名的文件（夹），右键单击**Rename...** （或者右键单击**Refactor** ，选择**Rename...** ，或使用快捷键**Shift+F6** ），在弹框中输入新的标识符名称，单击**Refactor** 完成重新命名。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1f/v3/i4E-MBfkShyHT0Aj5l6s2g/zh-cn_image_0000002701819626.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=0376D22EC510DB816EBB6D26C5B985C7C9E32A14A6E11F6D2B90A496F529540F)

此外，还支持筛选并过滤不需要重命名的引用位置。在**Rename...** 弹窗中单击**Preview** ，在弹出预览窗口中，开发者选中无需重命名的选项，单击右键菜单**Exclude/Remove** 进行过滤/删除，完成筛选后单击左下角**Refactor** ，即可对剩下选项执行重命名操作。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e8/v3/agnW9pliTxe2TOXOVjMjPA/zh-cn_image_0000002731538907.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=300B2F3BD18BF37A878C8F7C29FA421A42D2C385FEC05244CB5D90E5899D5BC9)

#### 文件（夹）移动

在文件中单击右键，选择**Refactor > Move File...**，在弹窗中输入或单击...选择指定的目录，单击**Refactor** ，可将当前文件移动至该目录下。勾选**Search for references** ，可查找并更新工程中对该文件的引用；勾选**Open in editor** ，可在编辑器中查看移动的文件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1e/v3/grgH7GMYSX-BGAWxRsYOwA/zh-cn_image_0000002701659718.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=F02E14BD546DF36FE672A7518B8683F138AA310E0233AA9E01193FA32CC70770)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ba/v3/-mOUPyJ5Ql6ABEfZqmz_uw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=AE89792B10C7AC66B3928E1FC5C7F02DD343716AB3F5EBA5A2D1430A00A36AE9)

部分场景下文件移动之后工程会报错，比如：将自定义宏移动到非宏包中、将非宏的文件移动到宏包中，或者cj文件移动到非仓颉目录下等。

#### 提取方法

提供**提取方法** 功能，帮助开发者快速将一段独立的代码块抽取为一个全新的函数，并自动在原位置生成该函数的调用代码。

打开仓颉工程中的 .cj 文件，选中目标代码块，使用鼠标右击，选择 **Refactor > Extract Method** 触发提取方法功能，在弹出的输入框中确认新函数的名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/41/v3/0fvzdRQNT5674FpL6tm62w/zh-cn_image_0000002731378933.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=090EAD2C48A335A1F06848666BD6E804466F92DF0EDE58B0D0830BE5AFACFEB1)

#### 提取变量

提供**提取变量** 功能，帮助开发者快速将一个复杂的表达式或字面量提取为一个局部变量，从而提高代码的可读性并减少重复计算。

打开仓颉工程中的 .cj 文件，选中目标表达式，使用鼠标右击，选择 **Refactor > Extract Variable** 触发提取变量功能，在弹出的输入框中输入变量名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dc/v3/K6EzsBWTRbGvG70CHxA6XA/zh-cn_image_0000002701819628.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=26F232DBA8725565B9500FD7AF7C7E6BE41F7838C471753548AE303938EEF8C0)

#### 提取接口

提供**提取接口** 功能，帮助开发者快速从现有的类或结构体中抽取出一组方法声明，自动生成一个新的接口，并让原类/结构体实现该接口。

打开仓颉工程中的 .cj 文件，将光标定位在目标类或结构体名称上，使用鼠标右击，选择 **Refactor > Extract Interface** 触发提取接口功能，在弹出的窗口中勾选需要包含的方法并输入接口名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6f/v3/v6Z4SPSTRK61c-S936n-0A/zh-cn_image_0000002731538909.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=9A982EECFD686CD486144EDC322CB380E9CA1D7DC62C9DD835E648DD0B77F1A7)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bd/v3/elW3_5HDQPeJXD4HDONfpQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=515CB9DC1CD55074192618F28E4F586180B6873F58F7BB0016433F711CEBF862)

在宏、跨包二次提取接口场景下不支持提取接口功能。

#### 引入字段

提供**引入字段** 功能，帮助开发者快速将方法内部的局部变量或表达式提升为当前类/结构体的成员变量（字段），以便在类的其他方法中共享。

打开仓颉工程中的 .cj 文件，选中目标变量或表达式，使用鼠标右击，选择 **Refactor > Introduce Field** 触发引入字段功能，在弹出的配置框中设置字段的名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f8/v3/TjNUi-NNS-ugajfXuckaEQ/zh-cn_image_0000002701659720.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=1F3FB4DFCFF92EB9F73428A5D8A1959E64706508D341DD9A56A30FD9D19A2165)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1f/v3/mQrPcL2CTUO8VVee9CZUMA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=AAD22F355D3E1323BB996E202500105C13C2EABEA7559555D39598FC853ADD51)

在引入索引、init初始化、const变量、if-let表达式、位运算、宏场景下不支持引入字段功能。

#### 引入入参

提供**引入入参** 功能，帮助开发者快速将函数内部的某个表达式或局部变量提取为该函数的输入参数，并自动更新所有调用该函数的地方。

打开仓颉工程中的 .cj 文件，选中目标表达式或变量，使用鼠标右击，选择 **Refactor > Introduce Parameter** 触发引入入参功能，在弹出的配置框中确认参数名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6e/v3/RNu6wK39RBOO2U-gB82g8w/zh-cn_image_0000002731378935.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=B1F6485E52599D4B10B53B7B77AE84BCAC28E6EF53C6BE187243F7D42518DE13)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cb/v3/Y-qKoyhwSNW1hZzubnUbNw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=6DC0459018204D75DCAA0E64654ADC9F995F8D604E95119EBDAA79DB066373BD)

在引入索引、init初始化、if-let表达式、宏场景下不支持引入入参功能。

#### 内联方法

提供**内联方法** 功能，帮助开发者快速将函数调用，替换为该函数的实际实现。

打开仓颉工程中的 .cj 文件，选中目标方法调用，使用鼠标右击，选择 **Refactor > Inline Method** 触发内联方法功能。

内联前：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/i9Yb7QiMT7qXwYaLLfLqpw/zh-cn_image_0000002701819630.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=BCAEA5F8AE59487F9F4F7608E8B243A2F4B7E943ADE047027F25BB70CCC6E217)

内联后：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/63/v3/KuC8sF6rR7eypiV08HZ0tw/zh-cn_image_0000002731538911.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=707C15BDA4EB434B3EBFA6873558DC7ABC61243DEFD48752DBB8A0450D602089)

#### 内联变量

提供**内联变量** 功能，帮助开发者快速将某个变量替换为其初始化值。

打开仓颉工程中的 .cj 文件，选中目标变量使用，使用鼠标右击，选择 **Refactor > Inline Variable** 触发内联变量功能。

内联前：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/39/v3/HWZxilzRT4Clo94PE1vLGg/zh-cn_image_0000002701659722.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=C35E306C8DF030D4F235F94BC24CCE0E54CD8E46D281325D8CE328150AFA120F)

内联后：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6c/v3/G2r2Df0EQNirkxOwoDzR5w/zh-cn_image_0000002731378937.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=D394DA938DF58C43E2F30ACED4BF3FB6DF74541BD68DED41C3025271E0BA9A91)
