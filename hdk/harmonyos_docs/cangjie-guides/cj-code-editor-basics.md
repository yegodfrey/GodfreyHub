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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2b/v3/cYnjj-1ORUSIMXKb9r7dJA/zh-cn_image_0000002743197883.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=485FC12C4A974895B7DC02D447729D6516CC94FBE6594A2D645AD0E5DB55786E)

支持对代码运算符、类、注释、函数、关键字、数字、包名、字符串、变量等进行高亮显示，开发者可以自行设置高亮的风格，设置方法如下所示。

  1. 按照如下所示，打开**File > Settings**（macOS为**DevEco Studio > Preferences**）面板，在**Editor > Color Scheme**自定义各字段的高亮显示颜色。默认情况下，开发者可以在**Language Defaults** 中设置源代码中的各种高亮显示方案，该设置将对所有语言生效；也可以选择 **Cangjie** 语言，对Cangjie的源码高亮显示方案进行定制。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7f/v3/h3_kH3wHTCKNq2w3keM_fw/zh-cn_image_0000002713399002.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=89FE0F770A53B430261BD05F07D16A23E474DC4384FAB165BC1694DDBA8BCE45)

  2. 在左侧边栏选择**Cangjie** ，然后取消“Inherit values from”选项。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fa/v3/1seV6bd1TaqKpL2o8xWtvg/zh-cn_image_0000002743077933.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=F8F7E98706A5CA3D982E898C060EC67E6BD6A2F856B56AB83C88B33EF917D8E9)

  3. 对不同的语句分类可以设置不同的颜色，单击颜色框，进行颜色选择。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5e/v3/xVvk4UxdRQOENzsVqG7frg/zh-cn_image_0000002713558972.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=639E57AD6A4F868418DEE81B0B84EA798A9FAB706755C45D30DEAA1C7BF23E32)

  4. 设置颜色的方式有三种。

     * 使用取色笔选取颜色。
     * 自行修改RGB参数。
     * 拖动色彩条进行调整。



设置完成后效果如下所示(修改类的颜色为红色)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f6/v3/tWHZj5WMTVKeMMe-xioZ7w/zh-cn_image_0000002743197885.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=E4E1F996955CDDEDE6BFBAD0E4371FDE240CC4DD47BA63F5285B295E7BDFF708)

#### 代码选中高亮

提供代码选中高亮功能，标记出当前文件下同一符号的定义以及调用处，帮助开发者快速查看到目标符号的使用及位置信息。

DevEco Studio 打开仓颉工程中的.cj文件，光标单击在符号处，可以在当前文件查看到符号定义及调用处的标记内容。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/46/v3/OiCv0gJMTeq2JiEAyPSC6A/zh-cn_image_0000002713399004.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=B98B3D92CFB30954C3A2AA7515A625F6383ECC0932CAF25912F5BDC6BA8E2DC0)

#### 代码格式化

代码格式化功能可以帮助开发者快速地调整和规范代码格式，提升代码的美观度和可读性。仓颉支持对文件或选中的代码片段进行格式化。默认情况下，DevEco Studio已预置了仓颉代码格式化的规范，开发者也可以个性化的设置仓颉代码的格式化规范，设置方式如下：打开 **File > Settings > Editor > Code Style > Cangjie** （macOS 系统为**DevEco Studio > Preferences > Editor > Code Style > Cangjie**），自定义格式化规范即可。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dd/v3/aaYcIio3TQOj3KpoUqMVLg/zh-cn_image_0000002743077935.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=0EA892FF850E9FB42164B021BB028FE910FF2476ECF0A9BF170A8C0573B397D0)

格式化前：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b5/v3/pTCL-HLbRlSKxcDMabgq1w/zh-cn_image_0000002713558974.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=43DC8DC347059136444202B8EE35A6DF7A9C865AEDAA61B3525A05F166308A1E)

格式化后:

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d9/v3/TJ0Q_T5mRsueQfGLJXXfsA/zh-cn_image_0000002743197887.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=19E62DEC563DFE92E5DB7E6A516A0DAA864479FA7B34B716211CD6304FD84C37)

#### [h2]文件格式化

支持单文件、多文件和文件目录下所有文件进行代码格式化。

  * 仓颉文件右击选择 **Reformat Code** 对仓颉文件进行格式化。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e4/v3/vUuh6tn3SyWiZLBOI4r-Ug/zh-cn_image_0000002713399006.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=F7D6475DB9B20FF9D5F27C0421DCD308F47AE30A8AAC90F3ECA7956FC02B0C55)

  * 多选仓颉文件右击选择 **Reformat Code** 对目录中仓颉文件进行格式化。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/df/v3/WH3SpbZORTeO-zT1FwVHiw/zh-cn_image_0000002743077937.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=CF193FD6A9FD547E31CEB2CE5F55E2F744C7BE9FCE2376AB7CE5A30FF87A36D5)

  * 仓颉目录右击选择 **Reformat Code** 对目录中仓颉文件进行格式化。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3/v3/I0tYldoER5C4naadbIShdg/zh-cn_image_0000002713558976.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=38DB9DEE350F238EB6365DDFE550A71B702CF2FEE743E0A148AB271BE48DA106)

#### [h2]片段格式化

选中仓颉代码，使用快捷键**Ctrl + Alt + L** （macOS为**Option+Command +L** ）快速对选定范围的代码进行格式化。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/49/v3/qAklGfrFTrWRUj1Z-qZHEA/zh-cn_image_0000002743197889.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=1FFDDDF1A70E8C9210F8A08FAFF8F43879C08054D935C85D395404B45FE5DDE6)

#### 代码跳转

在编辑器中，可以按住**Ctrl** 键（macOS为**Command** 键），鼠标单击代码中引用的类、结构体、接口、枚举、函数、别名、泛型、变量和宏等名称，自动跳转到定义处。若单击定义处的类、变量等名称，当仅有一处引用时，可直接跳转到引用位置；若有多处引用，在弹窗中可以选择想要查看的引用位置。

  * 在符号使用处使用定义跳转，光标会跳转到符号定义处，支持跨文件跳转。
  * 如果在符号定义处使用跳转，光标会跳转到变量使用处的首字母前。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d7/v3/_AgJc_VDQ5SplN772ahPsA/zh-cn_image_0000002713399008.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=1E8DAFBAD541C7BD0537C4B39314A86BC5D3B5EC78BD9B1E25D1A0B91A0C38FA)

#### 代码悬浮提示

提供代码悬浮提示功能，帮助开发者快速查看代码的声明位置、类型以及赋值等信息。

DevEco Studio 打开仓颉工程中的.cj文件，光标悬浮在符号处，可以查看到符号相关的信息内容。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5b/v3/9qwlAObwSwyRXeNVTx29CQ/zh-cn_image_0000002743077939.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=EEC6519913A15989C4B6D77A3B2D88145464AA541B583ACAC452FAFB7AAC7547)

#### 代码查找引用

提供Find Usages代码引用查找功能，帮助开发者快速查看某个对象（类、结构体、接口、枚举、函数、别名、泛型、变量和宏）被引用的地方，用于后续的代码重构，可以极大的提升开发者的开发效率。

打开仓颉工程中的.cj文件，在要查找的对象上，单击鼠标**右键 > Find Usages**或使用快捷键**Alt +F7** （macOS为**Option + F7** ），执行符号引用预览，单击预览条目，可以查看到对应引用处。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ac/v3/HXeS6um-RF-VX7qj0gS7RQ/zh-cn_image_0000002713558978.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=86236560A4B036992C3AF0F12A63DEE3A6FA60A8D8D11C24F327CCB208DE7214)

双击预览条目，也可以跳转到对应引用处。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ed/v3/d0gNybU_Tg2xFqn2wkCl_A/zh-cn_image_0000002743197891.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=662C8A30ADA3B88E06129F0D153F2AD8C0D6C0EC8D6D4799C15A3097354E524A)

#### 快速查阅API接口及组件参考文档

在编辑器中调用ArkTS/JS API或组件时，支持在编辑器中快速、精准调取出对应的参考文档。

可在编辑器中，鼠标悬停在需要查阅的接口或组件，弹窗将显示当前接口/组件的参数等信息，单击弹窗中的**Show in API Reference** ，或选中接口或组件，右键点击**Show in API Reference** ，可以快速查阅更详细的API文档。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c9/v3/U_3K_5n7SuiWXa8M1OWX6Q/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=F0738C6D54D6EEF0D205EF9DD4C18678EF1B733442FDB1E75D24C03F460A04CC)

DevEco Studio集成了离线版API参考类文档，最新版本请参考官网HarmonyOS API参考。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7e/v3/SYVLdlJYSFuY7CsdavBvIw/zh-cn_image_0000002713399010.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=CE5ADC2376532A8C6D846D2474EDC85922D0EF1B5B2960CF16B277FDFECF15F1)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/62/v3/9Y05NFiCS9Swuhi36gIi4g/zh-cn_image_0000002743077941.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=7E99ED5CAC76A8F568AE33E9627EC31AAD30281A6C5827EEB98C44ED1FF84C7F)

#### 代码类型层次结构视图

提供类型层次结构查看功能，帮助开发者快速查看目标变量的子类或父类继承关系。

该功能仅在仓颉结构体、接口和类型上可以激活触发，打开仓颉工程中的.cj文件，鼠标单击选中目标类型，在菜单栏选择 **Navigate > Type Hierarchy** 触发类型层次结构。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f8/v3/g0WFvrZ1QcmufA7L4UbxeQ/zh-cn_image_0000002713558980.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=A6AF78633FEDF32796D397B0DBF7448ACC6F61CEDAC8145050A52F58ED267094)

右侧弹出类型层次结构视图，默认打开查看的是目标变量的子类结构视图，可通过单击按钮切换父类子类关系。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dd/v3/uBInbf9wQbqkKTKfWaRDYw/zh-cn_image_0000002743197893.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=A6009C8DA7755409CFBDAC37D40B0ADD9F1DD75614B88B5FB916F69FE0DE4A41)

单击按钮切换查看目标类型父类关系结构视图。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c2/v3/Px4Y9KEbQp6Ey4w-8SnbOg/zh-cn_image_0000002713399012.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=10DEAB2121A896A00394F725E6F726D2B748E32BED3FEE120F2205DE44E224DC)

#### 代码调用层次结构视图

提供调用层次结构查看功能，帮助开发者快速查看目标函数调用与被调用的相关内容。

该功能仅在仓颉函数上可以激活触发，打开仓颉工程中的.cj文件，鼠标单击选中目标变量，在菜单栏选择 **Navigate > Call Hierarchy** 触发调用层次结构。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/16/v3/GthvTnAKRIe4v6XluLw8lQ/zh-cn_image_0000002743077943.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=A425B365C07B734B31DA602F1E24561F7D2F9EF96F67E76B9DD959DABF2E4AAB)

右侧弹出调用层次结构视图，默认打开查看的是目标函数被调用的结构视图，可通过单击按钮切换函数调用与被调用关系。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2f/v3/jqFT8H0eTKyPv-hCMJZ9Ng/zh-cn_image_0000002713558982.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=14ED455B5B8BBDB33CAB2DCC73401E7651CA56C5FF9189F06D2F168A4ACCAE81)

单击按钮切换查看目标函数调用关系结构视图。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/62/v3/FJawS3BXTQ602VUdoLXa_A/zh-cn_image_0000002743197895.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=F928B822DF27A62A35571212C44E0B53B6A815884B4D0CA294E471CC16834AF1)

#### 自定义代码折叠

自定义代码折叠功能可以帮助开发者快速地折叠指定范围的代码，并以用户自定义的描述信息替换，提升代码的美观度和可读性。仓颉支持对选中的代码片段进行自定义的代码折叠，通过选中需要折叠的代码范围，并点击 **Code > Surround With** 或使用快捷键**Ctrl + Alt + T** （macOS为**Option + Command + T** ），选择 **< editor-fold...> Comments**或**region...endregion Comments** 对代码块进行包裹，实现代码的折叠效果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/20/v3/XIZNmfTNTCyowj7HAlJlew/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=2A14FDD0F58BC1C1A4BB8419C7C9990E269ABFB79B73F888C1EFB66006D07A1D)

除选中代码折叠外，通过人为书写<editor-fold...> 或region...endregion 注释也可以实现同样效果，但要确保被折叠的代码属于同一层级，不支持跨层级折叠

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/Wr6LxjUHQkyQYt7jyXMRhQ/zh-cn_image_0000002713399014.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=F067E5FF77A692A8355A9E06D660CF541347CEC5F9367751FEB4BBF136BC531E)

折叠自定义范围后，可以通过更改**desc** 描述信息，自定义折叠后的代码显示内容

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/af/v3/oZHATnv_Rgi3_kh0hzankA/zh-cn_image_0000002743077945.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=F23A4D37D6505D3BF1F71D87FCC2922EE66CC1DE9C0CCF0321FCD554E5EEEF12)

点击左侧的折叠后，效果如下：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d8/v3/Em_TEJ__SROIS2wHyScX3Q/zh-cn_image_0000002713558984.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=25657D4BBB66B0DE0414C6559EF7EBB3883C9C4264EF874714A2901796B3F0D3)
