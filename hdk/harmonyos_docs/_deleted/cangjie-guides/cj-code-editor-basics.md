---
name: cangjie-guides/cj-code-editor-basics
title: 代码阅读
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-code-editor-basics
nodePath: 编写与调试应用 / 代码编辑 / 代码阅读
---

# 代码阅读

在编写应用阶段，可以通过掌握代码编写的各种常用技巧，来提升编码效率。

#### 代码高亮

DevEco Studio打开仓颉工程中的.cj文件，可以看到默认的高亮效果，如下所示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b2/v3/x_S2inf6QzaTY1w7GbtHCw/zh-cn_image_0000002701819604.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=41E16F05A7A70F750B3948C2FF2F7DCA7F384F1DFECB03A9DAA3942A7CF46E85)

支持对代码运算符、类、注释、函数、关键字、数字、包名、字符串、变量等进行高亮显示，开发者可以自行设置高亮的风格，设置方法如下所示。

  1. 按照如下所示，打开**File > Settings**（macOS为**DevEco Studio > Preferences**）面板，在**Editor > Color Scheme**自定义各字段的高亮显示颜色。默认情况下，开发者可以在**Language Defaults** 中设置源代码中的各种高亮显示方案，该设置将对所有语言生效；也可以选择 **Cangjie** 语言，对Cangjie的源码高亮显示方案进行定制。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/89/v3/6uAeKo2GSvGJa4XIV3vlaQ/zh-cn_image_0000002731538885.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=2915896B7E64BCD6A571BB9E5086C0DE20175D64D365EDECC0E66418AB5D1737)

  2. 在左侧边栏选择**Cangjie** ，然后取消“Inherit values from”选项。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/25/v3/uvHCikXkRAOoBji4opSPCw/zh-cn_image_0000002701659696.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=654DD88AE35012F0938C1DA563D695123DB759D8DEB0E2AF36472A34EA30748F)

  3. 对不同的语句分类可以设置不同的颜色，单击颜色框，进行颜色选择。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7f/v3/-fkhazJ6Q9atCejHM8Mlxw/zh-cn_image_0000002731378909.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=73951640368B81194F42D5F1D925F2037D16FF19C0B5BC8BD148DBD5795959CF)

  4. 设置颜色的方式有三种。

     * 使用取色笔选取颜色。
     * 自行修改RGB参数。
     * 拖动色彩条进行调整。



设置完成后效果如下所示(修改类的颜色为红色)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5b/v3/EvSHwTM8Sp-jhOH0H3BJpA/zh-cn_image_0000002701819606.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=4A6DD0DBE41B810FFD7517FEC9F566079C489CD08249BFA94D2D545F0D813BCF)

#### 代码选中高亮

提供代码选中高亮功能，标记出当前文件下同一符号的定义以及调用处，帮助开发者快速查看到目标符号的使用及位置信息。

DevEco Studio 打开仓颉工程中的.cj文件，光标单击在符号处，可以在当前文件查看到符号定义及调用处的标记内容。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5f/v3/roOanWGMQ-Stkx-suy6o-A/zh-cn_image_0000002731538887.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=CF1F382976D377E29C4F7CC3684FB5A2E4368701719C83B985C828188BB346AF)

#### 代码格式化

代码格式化功能可以帮助开发者快速地调整和规范代码格式，提升代码的美观度和可读性。仓颉支持对文件或选中的代码片段进行格式化。默认情况下，DevEco Studio已预置了仓颉代码格式化的规范，开发者也可以个性化的设置仓颉代码的格式化规范，设置方式如下：打开 **File > Settings > Editor > Code Style > Cangjie** （macOS 系统为**DevEco Studio > Preferences > Editor > Code Style > Cangjie**），自定义格式化规范即可。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/de/v3/db08GJgSTySyEx1EYY9B3A/zh-cn_image_0000002701659698.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=BA107FD7DB64427A4FCD2062CB5F4EF9120019F1154164286C5B8A6BB1C411EC)

格式化前：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/95/v3/Fbs2qwbCR3er984V5Jdeyg/zh-cn_image_0000002731378911.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=3A14476F4B51453297408938C668ED4B4BAD2F97832FE82DE587D2F21E253C2D)

格式化后:

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dc/v3/_VMy_-8_QLmOAXxRf9lF8A/zh-cn_image_0000002701819608.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=8AB53CD268137A16EDB2A9A61FBDE44414390CE93AEAFF089EACB2D9F78774D6)

#### [h2]文件格式化

支持单文件、多文件和文件目录下所有文件进行代码格式化。

  * 仓颉文件右击选择 **Reformat Code** 对仓颉文件进行格式化。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/BtcpwjQPR6qndJlEnsUe9g/zh-cn_image_0000002731538889.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=F769542E351AFE15DE8603B02C92CFAE3123C74508E5E44B6C5EF03680C40E41)

  * 多选仓颉文件右击选择 **Reformat Code** 对目录中仓颉文件进行格式化。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a0/v3/qfzsxJTpSWKpE9ZZgWOfAA/zh-cn_image_0000002701659700.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=00A199B8246FD07C39073066DEDBB50EC43F557A0A30F2CC25E58F51FC3A5B61)

  * 仓颉目录右击选择 **Reformat Code** 对目录中仓颉文件进行格式化。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/25/v3/UM96BO9FTZKpBdIwbA_xDg/zh-cn_image_0000002731378915.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=226485E05C23F0892494115162100D06544252E9EB1AFF4DB549D60EC4F0BE9D)

#### [h2]片段格式化

选中仓颉代码，使用快捷键**Ctrl + Alt + L** （macOS为**Option+Command +L** ）快速对选定范围的代码进行格式化。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b1/v3/VqMFu_JXQtyPCvqW2iNDRw/zh-cn_image_0000002701819610.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=54D68F9BF14BAAE6DFDF464239301FFB404C94C5190DDD2D99A676D56CF91B3A)

#### 代码跳转

在编辑器中，可以按住**Ctrl** 键（macOS为**Command** 键），鼠标单击代码中引用的类、结构体、接口、枚举、函数、别名、泛型、变量和宏等名称，自动跳转到定义处。若单击定义处的类、变量等名称，当仅有一处引用时，可直接跳转到引用位置；若有多处引用，在弹窗中可以选择想要查看的引用位置。

  * 在符号使用处使用定义跳转，光标会跳转到符号定义处，支持跨文件跳转。
  * 如果在符号定义处使用跳转，光标会跳转到变量使用处的首字母前。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7e/v3/Vq62erFEQ9m96osfHvpvpw/zh-cn_image_0000002731538891.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=D118BF66BD512B4720E381A50570D4C173EB2F46853F3F7486C4249975FEA314)

#### 代码悬浮提示

提供代码悬浮提示功能，帮助开发者快速查看代码的声明位置、类型以及赋值等信息。

DevEco Studio 打开仓颉工程中的.cj文件，光标悬浮在符号处，可以查看到符号相关的信息内容。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/af/v3/e5C-jsf3SGujd4i1JZYZZg/zh-cn_image_0000002701659702.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=8B277F7FE9D1B368F38E7D7A659E9CAC373B8E86E31657B1B3AEB40C21F30C48)

#### 代码查找引用

提供Find Usages代码引用查找功能，帮助开发者快速查看某个对象（类、结构体、接口、枚举、函数、别名、泛型、变量和宏）被引用的地方，用于后续的代码重构，可以极大的提升开发者的开发效率。

打开仓颉工程中的.cj文件，在要查找的对象上，单击鼠标**右键 > Find Usages**或使用快捷键**Alt +F7** （macOS为**Option + F7** ），执行符号引用预览，单击预览条目，可以查看到对应引用处。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/27/v3/RGnVjyv8Rd2XUYPFPIYxHw/zh-cn_image_0000002731378917.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=AA239DD49910DC7E04416FCD231A5246993C0A2B963F9FAAF094D6784284F39B)

双击预览条目，也可以跳转到对应引用处。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a6/v3/bZiKm6TdSvaBz-T4AiGEkA/zh-cn_image_0000002701819612.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=8B6D00A637DA9D5647EAF8F24EB18C875A1602D2B89BB4FB114CD8CB131DE304)

#### 快速查阅API接口及组件参考文档

在编辑器中调用ArkTS/JS API或组件时，支持在编辑器中快速、精准调取出对应的参考文档。

可在编辑器中，鼠标悬停在需要查阅的接口或组件，弹窗将显示当前接口/组件的参数等信息，单击弹窗中的**Show in API Reference** ，或选中接口或组件，右键点击**Show in API Reference** ，可以快速查阅更详细的API文档。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ac/v3/VpReuU73Qlqb184U1jJKBw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=15DBCC9BBFCC0A34BC1E2344D3F30614F02C9FF0B6A15E84E9E6EB9CB6A729EA)

DevEco Studio集成了离线版API参考类文档，最新版本请参考官网HarmonyOS API参考。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e2/v3/U31vzXbhR8uZRNpwMXtghw/zh-cn_image_0000002731538893.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=F6A24FEB27527116008A6623D27EF60099352127DE377FB445681FAB94885D68)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/86/v3/C50LRYlGRXiW0dnH78U-VQ/zh-cn_image_0000002701659704.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=E65B21A90DC74FDBD89A45BF646DA1FC62F8F2B1312BA3D72D9E9710009DBD71)

#### 代码类型层次结构视图

提供类型层次结构查看功能，帮助开发者快速查看目标变量的子类或父类继承关系。

该功能仅在仓颉结构体、接口和类型上可以激活触发，打开仓颉工程中的.cj文件，鼠标单击选中目标类型，在菜单栏选择 **Navigate > Type Hierarchy** 触发类型层次结构。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e2/v3/wgNYO65nRrKgzAi-P1DAEg/zh-cn_image_0000002731378919.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=38D682EA2A9525D4A148C75241354C9D47A3FD4EFF8AA184FC19322AFB9BFAE4)

右侧弹出类型层次结构视图，默认打开查看的是目标变量的子类结构视图，可通过单击按钮切换父类子类关系。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a6/v3/kJi3if3vTpSzYTIB8zQGSA/zh-cn_image_0000002701819614.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=468EA3B6EE0A12A6E2A609F1BD10671FE73E56B5EDED4041C2B965A7EB078278)

单击按钮切换查看目标类型父类关系结构视图。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c5/v3/GE-ba_KgS6K4P3MEHNcpsQ/zh-cn_image_0000002731538895.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=976381B6F6B1E9AAB85A1540D310296F94D6CFB65F176BAC5C227BE6FF81EB56)

#### 代码调用层次结构视图

提供调用层次结构查看功能，帮助开发者快速查看目标函数调用与被调用的相关内容。

该功能仅在仓颉函数上可以激活触发，打开仓颉工程中的.cj文件，鼠标单击选中目标变量，在菜单栏选择 **Navigate > Call Hierarchy** 触发调用层次结构。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/37/v3/xRs5Lug9QOC-DlzyunXwNg/zh-cn_image_0000002701659706.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=2A66EB921EC5E0E5BCE691EA4FE6DBCCB896DF9BD527388B73E50883C4C813CC)

右侧弹出调用层次结构视图，默认打开查看的是目标函数被调用的结构视图，可通过单击按钮切换函数调用与被调用关系。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cb/v3/rvqVXGyIROCHwsKECwle3Q/zh-cn_image_0000002731378921.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=A4B94BADD89B50A5D7332610DB820C0701DAA3196EAA205B7312F856504F8FBE)

单击按钮切换查看目标函数调用关系结构视图。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e5/v3/9WRQ6lSYTD-JhXwW7-305Q/zh-cn_image_0000002701819616.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=4563918743DB512526A17EEBF141A5CEC9EBDBACC0FE15E3D3028CA10D79E66B)

#### 自定义代码折叠

自定义代码折叠功能可以帮助开发者快速地折叠指定范围的代码，并以用户自定义的描述信息替换，提升代码的美观度和可读性。仓颉支持对选中的代码片段进行自定义的代码折叠，通过选中需要折叠的代码范围，并点击 **Code > Surround With** 或使用快捷键**Ctrl + Alt + T** （macOS为**Option + Command + T** ），选择 **< editor-fold...> Comments**或**region...endregion Comments** 对代码块进行包裹，实现代码的折叠效果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6b/v3/8cXSATe6TlCcEpYSn06VEg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=2445CAB1BA49DFC901D5B840A47F3C302E6701246057572E0CF68A546879FF78)

除选中代码折叠外，通过人为书写<editor-fold...> 或region...endregion 注释也可以实现同样效果，但要确保被折叠的代码属于同一层级，不支持跨层级折叠

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/40/v3/h8y1wwgpQU2kTzgOmE2WjQ/zh-cn_image_0000002731538897.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=4532C13969E395DF94B6F3A1713173645357EF7817547EB6B7575E2F4126ADD7)

折叠自定义范围后，可以通过更改**desc** 描述信息，自定义折叠后的代码显示内容

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dc/v3/a62OzZHgSLi22vUkGwruKg/zh-cn_image_0000002701659708.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=25DF5FA6E05DE88CB91EAF25D59D9335649896BD4D455F0D80D273F97F2E4BFE)

点击左侧的折叠后，效果如下：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/86/v3/TxpEWZzqTRKKZIPQ3fTVQA/zh-cn_image_0000002731378923.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=1F8A7FD8E86B834A15EE02C5A57F9E04A4658A024DDEDD8C03366A0A257A8170)
