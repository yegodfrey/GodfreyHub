---
name: cangjie-guides/cj-insight-time
title: 基础耗时分析：Time分析
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-time
nodePath: 优化应用性能 / 基础耗时分析：Time分析
---

# 基础耗时分析：Time分析

#### 函数耗时分析及优化

开发应用的过程中，如果遇到卡顿、加载耗时等性能问题，开发者通常会关注相关函数执行的耗时情况。DevEco Profiler提供的Time场景分析任务，可在应用运行时，展示热点区域内基于CPU和进程耗时分析的调用栈情况，使开发者更便捷地进行代码优化。

在设备连接完成后，可按照如下方法查看耗时分析结果：

  1. 请参见[模块级build-profile.json5文件](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-build_module_build_profile)，增加strip字段并赋值为false。采集函数栈解析符号需要附带符号表信息，无符号表信息可能采集不到函数名称，或CJ Callstack（Cangjie Callstack）泳道无法关联到Native调用栈，因此录制模板前请按照下图进行配置。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ae/v3/fcegwdDbTh26MO4b0IZ7Ag/zh-cn_image_0000002731379001.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=C13A88317FDF798477C306D3D797653B51403B1A201FFCE0AD786C9ED4C888A7)

  2. 创建Time任务并录制相关数据，操作方法可参见[性能问题定位：深度录制](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-profiler-deep-recording)，或在会话区选择**Open File** ，导入历史数据。

Time分析任务支持在录制前单击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/df/v3/A6DlUO1FSYCwz99K2ei4Mw/zh-cn_image_0000002731538959.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=430BB9F8ACCD84FC607427D02C9BD18105A14C39E67C69A1B033EAE43EDB9AD9)指定要录制的泳道：

     * **User Trace** ：用户自定义打点泳道，基于时间轴展示当前时段内用户使用hiTraceMeter接口自定义的打点任务的具体运行情况。

     * **CJ Callstack** ：Cangjie函数调用泳道，基于时间轴展示CPU使用率和虚拟机的执行状态，以及当前调用栈名称和调用类型。由于隐私安全政策，已上架应用市场的应用不支持录制此泳道。

调用栈分类从语言层面分为Cangjie和Native，从归属层面分为开发者代码和系统代码。从这两个方面可以将调用栈类型归类如下：

       * Cangjie：程序正在执行Cangjie代码；

       * Native：程序正在执行的Native代码；

其中每一个类型的亮色和灰色分别代表开发者和系统的代码。

     * **Callstack** ：Cangjie和Native混合函数调用泳道。基于时间轴展示各线程的CPU使用率，以及在一段时间内的混合调用栈。调用栈类型会分为开发者或系统的Cangjie以及Native代码两类。由于隐私安全政策，已上架应用市场的应用不支持录制此泳道。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2c/v3/mYm7a8suSn2KS79eYdI8BA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=E4B4CAE5CF035D3050A05F079528A9BC2AB59167792685CAAEEB005D022084D2)

Callstack基于采样模式采集数据，默认采样间隔是500微秒。耗时小于500微秒的函数，Details区域时间相关数据可能存在误差，可通过录制过程中多次触发该函数，根据其耗时百分比判断是否为热点函数。

     * **Energy** ：展示应用能耗的构成，结合应用生命周期，识别潜在能耗问题。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e2/v3/GZqMK4A1SXaUr-7hesD6rg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=0C7DEFC7B0909001355B8FC36E0E4EFD2D5CD334ECB4A243CC21E2FB157801CF)

     * 在任务分析窗口，可以通过“Ctrl+鼠标滚轮”缩放时间轴，通过“Shift+鼠标滚轮”左右移动时间轴，或使用快捷键W/S放大或缩小时间轴，使用A键/D键可以左右移动时间轴。
     * 将鼠标悬停在泳道任意位置，可以通过M键添加单点时间标签。
     * 鼠标框选要关注的时间段，可以通过“Shift+M”添加时间段时间标签。
     * 在任务分析窗口，可以通过“Ctrl+, ”向前选中单点时间标签，通过“Ctrl+. ”向后选中单点时间标签。
     * 在任务分析窗口，可以通过“Ctrl+[ ”向前选中时间段时间标签，通过“Ctrl+] ”向后选中时间段时间标签。
     * 将鼠标置于泳道任意位置，可查看到对应时间点的CPU使用率。
     * 单击任意泳道名称后方的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/56/v3/VjuqiXmmQN6NspbOPwNYkQ/zh-cn_image_0000002701819688.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=4B77DA50C6AC9CDD5D6CC145C78BB4BE130D563FEBCFD2A463E2C8C2E9ED0337)可将其置顶。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9c/v3/Krh4UGJ7SxGa_fx9YNd2aA/zh-cn_image_0000002701819698.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=8E8314849EAC6D982F90B213E794B20DF69C77404FEC0D4869ED46B5D130CCF4)

  3. 在“CJ Callstack”泳道、“CJ Callstack”子泳道或“Callstack”子泳道上长按鼠标左键并拖拽，框选要展示分析的时间段。

**Details** 区域会显示所选时间段内的函数栈耗时分布情况，**Heaviest Stack** 区域会展示出“Details”区域选择节点所处的耗时最长的完整调用栈。

其中函数栈耗时分布有两种展现方式：

     * 默认为Call Tree方式，其中“Weight”字段表示当前函数的总执行时间，“Self”字段表示函数自身的执行时间，两者之差为当前函数所调用的子函数执行时间之和，“Average Duration”字段表示函数自身的平均执行时间，“Category”字段表示函数调用类型。

     * 打开页面下方的**Flame Chart** 开关，函数调用栈将以火焰图的形式展示。其中，横轴表示函数的执行时长，纵轴表示调用栈的深度。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/47/v3/jL3CD1IqTPGGBiutPdf9pg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=FB86C2A7132EAC73CB5BC6A730DBBD7FD3C5AE4CEACC14B89AF1EB8376084D1B)

火焰图条块支持搜索，搜索结果不匹配的条块会被置灰。

“Ctrl+鼠标滚轮”的操作，或单击该区域右上角的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7e/v3/6QgjxZu9TMmYNuvQxp7edQ/zh-cn_image_0000002731378987.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=788F4E15616083B2ABF054C6EEAE6EF943640E1E21E52F1F967B9EFC3B4D8EDB)、![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ff/v3/bgB8GP9dTECpPAfIP_tecA/zh-cn_image_0000002701819682.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=14CB95BE8EC086597668AF0A6B0BA76C389F14603F56AFC828146EC75D112E77)可放大和缩小火焰图的时间轴比例，单击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1d/v3/kalU5A4aT9-xrV0M61C3Nw/zh-cn_image_0000002701659772.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=1B264FFB68DEF9690D1628C74F40FCAB1C39FBA16CE42E496E854CAC7955D89A)可恢复时间轴比例为初始状态。

“Shift+鼠标滚轮”的操作可左右横向调整可视区间，单独操作滚轮可上下纵向调整可视区间。

选中节点，单击该区域右上角的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b6/v3/lsQgB0l4QtyfuoDAVLzF-g/zh-cn_image_0000002731538977.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=6F7906A263AABC0F8E491209684A08FF658F07D514A2CAD687B030FA8D9FDA2D)，点击添加面包屑。添加面包屑后，该节点成为根节点，耗时占比为100%，子节点的耗时占比相对于该节点重新计算。

在火焰图中选中任一节点，使用“Alt+左键”可将该节点左置底并将其占比放大到100%，其上从属节点按同比例放大显示。该快捷操作同样适用于列表方式，用于将指定节点置顶并截取所属下级节点。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9f/v3/HqraAYGnQeW7fNwen6swoA/zh-cn_image_0000002701659788.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=084E3F16D9CB3770DF46C3F31410BFCE5C1C2501045253307C056B80170EBE63)

  4. 在**Callstack** 泳道上长按鼠标左键并拖拽，框选要展示分析的时间段。

     * **Summary** 列表展示框选时段内，所有Native和Cangjie线程的CPU占用率的峰值、谷值、平均值。
     * **Callstack** 列表展示框选时段内，所有Native和Cangjie线程的函数热点。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a5/v3/fnEnPXy1RCCZ9g2C8Dfaqw/zh-cn_image_0000002731379003.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=D6E5EE8BCB07BCECE2DCEE1C9783E18A3160871348BA5044E04FE34CEADB677C)

     * 悬浮到节点，显示以此节点为根按钮，点击添加面包屑。添加面包屑后，该节点成为根节点，耗时占比为100%，子节点的耗时占比相对于该节点重新计算。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/99/v3/cakyDoKSTgi7p648CF6n3g/zh-cn_image_0000002701819700.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=5D653DB6112EEE44C4A2AA521E7C2B1ED1A7C4092D8E30322551A2BC60039D4D)

  5. （可选）在Details中双击需要优化的节点（例如耗时超过预期），可快速跳转至对应工程源码，为开发者节省定位代码路径的时间。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/27/v3/A7rlkMwuSyqi3s8TwuZiqA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=4CB87A57A6B5FB784188BC6FCA924C8FC700068226DD77CFF6291907384648AF)

Release应用暂不支持跳转到用户侧Native和Cangjie代码。

静态链接的系统库无法支持源码跳转。如libunwind.a，在编译过程中该系统库会以静态链接的方式集成。该系统库的符号信息在调用栈中会被识别成用户侧定义的函数，实际上无法跳转到源码。

Cangjie部分函数为在编译中自动生成的函数，如packageName.appEntry()函数为在编译过程中生成的入口注册所用函数，在源码中不存在，无法跳转到源码。

Cangjie未解析出符号名的节点不支持源码跳转，格式为0x****,由地址代替符号名称。导入离线符号后格式为"_C"开头，同样不支持跳转。




#### 多实例函数热点分析

在应用开发过程中，可能存在一些耗时操作，则需要引入Worker线程或者TaskPool任务池来协同处理。这些线程也可能会像主线程一样存在性能问题，所以需要同时对这些子线程进行性能调优。其中，主线程以及每一个Work线程或者TaskPool工作线程，都会对应一个Cangjie实例，通过连接这些Cangjie实例，开启性能采样，从而可以获取更全面的采样信息。

  * 父泳道内可以看到被选择进程的CPU使用率，框选后展示此时段内录制到的所有Cangjie实例的函数栈信息。
  * 子泳道框选后展示此时段内录制到的该Cangjie实例的函数栈信息。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2e/v3/go0BHqn1RqWmOi9MzmpN-A/zh-cn_image_0000002731538979.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=8145EF084578900814F3D55743CEDCB20E3222308E2F36DE86256393ED7C745F)

#### 离线符号解析

DevEco Profiler提供离线符号解析能力，基于携带符号表信息的so库进行分析，可把符号地址解析为具体函数名称，便于定位函数位置。

对于有so库路径和偏移地址的采样数据，如图所示，通过导入对应的携带符号表信息的so库进行解析，补充release so库中缺失的符号表信息（包括系统so库，用户自编译的so库，三方库）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ea/v3/4bGtDmYOQ5aSddRS5Uu1DA/zh-cn_image_0000002701659790.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=5E671304D3C3DCE787E1E384BEEDE1DC51F04A0B34D75E9B10C182A7B49CD942)

您可以通过点击工具栏![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dc/v3/QkA_xw42QJW4iwK7WDgciw/zh-cn_image_0000002731379005.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=BA102AA201EFCBDE9AC3D67482A0B3268DDD092C03CB2A7EBD9E86CF28119101)按钮，导入包含debug信息的so库。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7e/v3/gtGvaq6bQFmWmvuZs1zuGg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=1001907A9A567B5281FE7FB0AAD48726C3EC6623734C7582E464F997DAAB13B4)

  * 离线导入携带符号表信息的so库，需要严格保证与release版本的so库保持同一优化等级（如-O1, -O2, -O3等）。可以在CMakeLists.txt文件中查看或配置编译优化等级。
  * 离线导入携带符号表信息的so库，需要尽可能与release版本的so库编译选项保持一致，防止so库起始地址不一致，影响解析正确性。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c2/v3/U2WoF8bwSXWxOv6hWGug2w/zh-cn_image_0000002701819702.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=D8ECEEDB580E6A76720B6E0C44D246AEF8FC2D2DB85668A9BB00E380C7DD06A4)

#### 查询自定义打点信息

相较于异步调度，DevEco Profiler当前基于采样分析的Time任务更善于分析同步性能问题。如开发者需要分析异步调度延时等问题，可先在Cangjie代码中进行自定义打点，当应用在Time分析过程中触发打点后，DevEco Profiler会将这些打点的Trace数据解析后，以任务方块形式呈现在“User Trace”泳道中。

您可以在“User Trace”子泳道上长按鼠标左键并拖拽，框选要展示分析的时间段，获取该时间段内的用户打点信息。

单击User Trace泳道的“options”下拉列表，可以设置是按照Task Name维度还是Thread ID维度显示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/47/v3/RIRDl7PiQN2B4P6l1brF1g/zh-cn_image_0000002731538981.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=1F374626AD76C4056D6DDF9587C709724EED20BAAE1B5102BF66F1DE15097479)

  * Statistics页签：显示当前任务泳道在所选时间段内的打点任务统计信息，包括任务的名称、同一任务执行的次数、平均持续时长、最长持续时间和最短持续时间。通过这些统计信息，开发者可直观地了解打点任务的执行频率、持续时间偏差等，方便定位。
  * User Trace页签：将所选时间段内的所有任务都一一列举出来，包括任务的名称、ID、起始/结束时间、持续时长等。



同时，您也可以单击“User Trace”子泳道中的任意一个任务块，“Details”区域将展示该任务块的详细信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e4/v3/71xDWCGPRxK1QyebXFmFVg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=A38B6EBFA0FFAAFE53DF5C8F4273B4BF1F110BEE4108063D969BA89798D4C44A)

此外，用户自定义打点信息，还可以在Frame分析、Network分析任务中查看到。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9b/v3/NhZmcK6hSQS4p8vtfKUYQw/zh-cn_image_0000002701659792.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=5C01132892168475F321A1342D426B0CD10F2FDC581B067A55CD3DB2151C3D29)

#### 能耗分析

DevEco Profiler提供Energy泳道，旨在帮助开发者了解应用能耗的构成，结合应用生命周期，识别潜在能耗问题。

鼠标悬浮在Energy泳道数据上，显示器件能耗使用情况。器件包含：CPU、Display、GPU、Location、Camera、Bluetooth、Flashlight、Audio、Wifi、Modem。框选Energy泳道数据，Details中呈现框选时间段内的详情信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/90/v3/oll8jofhTHeyX2AeB1xrPA/zh-cn_image_0000002731379007.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=8E2A4CBDFAAEF809CF9B17CEF2E135A5DCCD547BE16D18570EA7DB1901EA06DF)
