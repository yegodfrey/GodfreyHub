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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b5/v3/831lAeinQHmV8lRUUVEpNA/zh-cn_image_0000002713559062.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=5B4A308AE26DC5569315DD5D555BA22EC4798B2DA32E2A65C5DFF79ED82256BF)

  2. 创建Time任务并录制相关数据，操作方法可参见[性能问题定位：深度录制](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-profiler-deep-recording)，或在会话区选择**Open File** ，导入历史数据。

Time分析任务支持在录制前单击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8d/v3/nLQFSFL4SymUJUOf9OlfrQ/zh-cn_image_0000002713399076.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=C9370F12663FFB770BC1274F4F37C3CC9E8E6CAFE77D09466B64AD95F83598BF)指定要录制的泳道：

     * **User Trace** ：用户自定义打点泳道，基于时间轴展示当前时段内用户使用hiTraceMeter接口自定义的打点任务的具体运行情况。

     * **CJ Callstack** ：Cangjie函数调用泳道，基于时间轴展示CPU使用率和虚拟机的执行状态，以及当前调用栈名称和调用类型。由于隐私安全政策，已上架应用市场的应用不支持录制此泳道。

调用栈分类从语言层面分为Cangjie和Native，从归属层面分为开发者代码和系统代码。从这两个方面可以将调用栈类型归类如下：

       * Cangjie：程序正在执行Cangjie代码；

       * Native：程序正在执行的Native代码；

其中每一个类型的亮色和灰色分别代表开发者和系统的代码。

     * **Callstack** ：Cangjie和Native混合函数调用泳道。基于时间轴展示各线程的CPU使用率，以及在一段时间内的混合调用栈。调用栈类型会分为开发者或系统的Cangjie以及Native代码两类。由于隐私安全政策，已上架应用市场的应用不支持录制此泳道。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e6/v3/YRp-Pvj9RBCyq3axh_G72g/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=427BD77B83E3788170D2D74BA7D01BEB1A3CE36BEF45E9B95DCAB3552024A163)

Callstack基于采样模式采集数据，默认采样间隔是500微秒。耗时小于500微秒的函数，Details区域时间相关数据可能存在误差，可通过录制过程中多次触发该函数，根据其耗时百分比判断是否为热点函数。

     * **Energy** ：展示应用能耗的构成，结合应用生命周期，识别潜在能耗问题。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/52/v3/0_-VZ1flQ2er52wiQX2RNg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=7621926D11B83C9964AF7DC38C73C661BDB7D95C5233F2BE10647137CCEE74DD)

     * 在任务分析窗口，可以通过“Ctrl+鼠标滚轮”缩放时间轴，通过“Shift+鼠标滚轮”左右移动时间轴，或使用快捷键W/S放大或缩小时间轴，使用A键/D键可以左右移动时间轴。
     * 将鼠标悬停在泳道任意位置，可以通过M键添加单点时间标签。
     * 鼠标框选要关注的时间段，可以通过“Shift+M”添加时间段时间标签。
     * 在任务分析窗口，可以通过“Ctrl+, ”向前选中单点时间标签，通过“Ctrl+. ”向后选中单点时间标签。
     * 在任务分析窗口，可以通过“Ctrl+[ ”向前选中时间段时间标签，通过“Ctrl+] ”向后选中时间段时间标签。
     * 将鼠标置于泳道任意位置，可查看到对应时间点的CPU使用率。
     * 单击任意泳道名称后方的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4d/v3/3R_FQfaoQ7uJXizRjOTRJg/zh-cn_image_0000002743197965.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=D3A607AB6B281C789E490CA49B496677CE9FEB452A3CC5CD5129F452DAFAC1E7)可将其置顶。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/19/v3/yRMVlR2MT7WVf7OWfnGr9A/zh-cn_image_0000002743197975.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=C1398B5A5584C4EA5EA6F79798F0CD0357F45E7B762F1B644643D52D9347DADF)

  3. 在“CJ Callstack”泳道、“CJ Callstack”子泳道或“Callstack”子泳道上长按鼠标左键并拖拽，框选要展示分析的时间段。

**Details** 区域会显示所选时间段内的函数栈耗时分布情况，**Heaviest Stack** 区域会展示出“Details”区域选择节点所处的耗时最长的完整调用栈。

其中函数栈耗时分布有两种展现方式：

     * 默认为Call Tree方式，其中“Weight”字段表示当前函数的总执行时间，“Self”字段表示函数自身的执行时间，两者之差为当前函数所调用的子函数执行时间之和，“Average Duration”字段表示函数自身的平均执行时间，“Category”字段表示函数调用类型。

     * 打开页面下方的**Flame Chart** 开关，函数调用栈将以火焰图的形式展示。其中，横轴表示函数的执行时长，纵轴表示调用栈的深度。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/46/v3/nhPuNN5YQ_yRgeo_iQWdhA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=8396F67077289804987455D74A9238A6EB4AC5003ACEB7456B5B6530C7747B0D)

火焰图条块支持搜索，搜索结果不匹配的条块会被置灰。

“Ctrl+鼠标滚轮”的操作，或单击该区域右上角的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1a/v3/EGe_CEC5S5qEqQdKLKXD5w/zh-cn_image_0000002713559048.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=8DDF95DBA005CEFCA3F8FA342D2422B49384DA7F189A7694AC1D7B2AE3302CDB)、![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d1/v3/8lqHoiRmTtqv2IiKub3qow/zh-cn_image_0000002743197961.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=81B52DD76EBD775DF0FCF999205770A05E8616C93BF76A43DDCF91F72446A502)可放大和缩小火焰图的时间轴比例，单击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d7/v3/rIWsABLTSzK9c2k0P_vKcQ/zh-cn_image_0000002743078009.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=49E43B92A874DC97A6693E9DD07FCC8091E0822A69F5CA8D032DD7FFC1B2709E)可恢复时间轴比例为初始状态。

“Shift+鼠标滚轮”的操作可左右横向调整可视区间，单独操作滚轮可上下纵向调整可视区间。

选中节点，单击该区域右上角的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/77/v3/aUmShyUNQd-Zv2ubVAALsg/zh-cn_image_0000002713399094.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=3AC9F5E51DD77986316804C3C2BB7578D5BFDC6AAF2B5CA345901CB13FC06D06)，点击添加面包屑。添加面包屑后，该节点成为根节点，耗时占比为100%，子节点的耗时占比相对于该节点重新计算。

在火焰图中选中任一节点，使用“Alt+左键”可将该节点左置底并将其占比放大到100%，其上从属节点按同比例放大显示。该快捷操作同样适用于列表方式，用于将指定节点置顶并截取所属下级节点。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8d/v3/oX_FEwegRNK-i8-T6j_4uA/zh-cn_image_0000002743078025.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=862134C3DC6DCB9AC65ADCF13E5B6B76448E818FA8A4544BC2688076382B8E63)

  4. 在**Callstack** 泳道上长按鼠标左键并拖拽，框选要展示分析的时间段。

     * **Summary** 列表展示框选时段内，所有Native和Cangjie线程的CPU占用率的峰值、谷值、平均值。
     * **Callstack** 列表展示框选时段内，所有Native和Cangjie线程的函数热点。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6e/v3/FHkx7jkwTzyiStRbhqfv7w/zh-cn_image_0000002713559064.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=DE64599090226735389CC4C3A88B697B225604A20FA327775B95A21E512F0D77)

     * 悬浮到节点，显示以此节点为根按钮，点击添加面包屑。添加面包屑后，该节点成为根节点，耗时占比为100%，子节点的耗时占比相对于该节点重新计算。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9b/v3/2gjiU0BlS62yaZ1_gXJfMQ/zh-cn_image_0000002743197977.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=50FF75B3E86C796D89154813780183F4E417408739E948E1FC32C3792AE360D1)

  5. （可选）在Details中双击需要优化的节点（例如耗时超过预期），可快速跳转至对应工程源码，为开发者节省定位代码路径的时间。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5a/v3/G_2LM38qTh-FNxF_RAmjJw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=25C3C0B1ABF7B58EFA5782507F9D09A38F04EC0FCB005EC6E463490AC9D9943A)

Release应用暂不支持跳转到用户侧Native和Cangjie代码。

静态链接的系统库无法支持源码跳转。如libunwind.a，在编译过程中该系统库会以静态链接的方式集成。该系统库的符号信息在调用栈中会被识别成用户侧定义的函数，实际上无法跳转到源码。

Cangjie部分函数为在编译中自动生成的函数，如packageName.appEntry()函数为在编译过程中生成的入口注册所用函数，在源码中不存在，无法跳转到源码。

Cangjie未解析出符号名的节点不支持源码跳转，格式为0x****,由地址代替符号名称。导入离线符号后格式为"_C"开头，同样不支持跳转。




#### 多实例函数热点分析

在应用开发过程中，可能存在一些耗时操作，则需要引入Worker线程或者TaskPool任务池来协同处理。这些线程也可能会像主线程一样存在性能问题，所以需要同时对这些子线程进行性能调优。其中，主线程以及每一个Work线程或者TaskPool工作线程，都会对应一个Cangjie实例，通过连接这些Cangjie实例，开启性能采样，从而可以获取更全面的采样信息。

  * 父泳道内可以看到被选择进程的CPU使用率，框选后展示此时段内录制到的所有Cangjie实例的函数栈信息。
  * 子泳道框选后展示此时段内录制到的该Cangjie实例的函数栈信息。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e4/v3/b_rQWVc6SC6ufKQ6qumVGw/zh-cn_image_0000002713399096.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=474FF04E315E9598E45376AF9A91A4FD13E4B802078448B21C54D4FC0371C79D)

#### 离线符号解析

DevEco Profiler提供离线符号解析能力，基于携带符号表信息的so库进行分析，可把符号地址解析为具体函数名称，便于定位函数位置。

对于有so库路径和偏移地址的采样数据，如图所示，通过导入对应的携带符号表信息的so库进行解析，补充release so库中缺失的符号表信息（包括系统so库，用户自编译的so库，三方库）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b0/v3/QwEBexkvROSzMpMH11GNAg/zh-cn_image_0000002743078027.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=E6C48817A74E84154673D9249CB7C636C83A775E3A6E91289B81BB00A39F5DDB)

您可以通过点击工具栏![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cd/v3/-Cpg-GQ3Qpqfz4fH7fTyWw/zh-cn_image_0000002713559066.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=C52200A9CDBAE4B7E264375D8781C7D7B1FBF497F164ECDF414091E3C1C4D06A)按钮，导入包含debug信息的so库。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6a/v3/QiGmCph5SRaoOIKAcwzh4g/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=FB6D2237CCD1480F975CCA2E66A94A7E9F9A8F81519507C99E2108EB055F45FC)

  * 离线导入携带符号表信息的so库，需要严格保证与release版本的so库保持同一优化等级（如-O1, -O2, -O3等）。可以在CMakeLists.txt文件中查看或配置编译优化等级。
  * 离线导入携带符号表信息的so库，需要尽可能与release版本的so库编译选项保持一致，防止so库起始地址不一致，影响解析正确性。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6d/v3/BjEfStqaTyaMw5m2cGWPuw/zh-cn_image_0000002743197979.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=C694B4DF63BAFD139337B997B1549CC0DFC52805B10ADAC6120B49DCDA233B7B)

#### 查询自定义打点信息

相较于异步调度，DevEco Profiler当前基于采样分析的Time任务更善于分析同步性能问题。如开发者需要分析异步调度延时等问题，可先在Cangjie代码中进行自定义打点，当应用在Time分析过程中触发打点后，DevEco Profiler会将这些打点的Trace数据解析后，以任务方块形式呈现在“User Trace”泳道中。

您可以在“User Trace”子泳道上长按鼠标左键并拖拽，框选要展示分析的时间段，获取该时间段内的用户打点信息。

单击User Trace泳道的“options”下拉列表，可以设置是按照Task Name维度还是Thread ID维度显示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/4mu1vQoPTtymDnEbfKgKyA/zh-cn_image_0000002713399098.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=7ED7057DA1D988D1BB0F245A362B262EE948E195861866B37B71714AAAAD1FE6)

  * Statistics页签：显示当前任务泳道在所选时间段内的打点任务统计信息，包括任务的名称、同一任务执行的次数、平均持续时长、最长持续时间和最短持续时间。通过这些统计信息，开发者可直观地了解打点任务的执行频率、持续时间偏差等，方便定位。
  * User Trace页签：将所选时间段内的所有任务都一一列举出来，包括任务的名称、ID、起始/结束时间、持续时长等。



同时，您也可以单击“User Trace”子泳道中的任意一个任务块，“Details”区域将展示该任务块的详细信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1a/v3/HB8kZmk4SICh4hIjZANxaQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=07E5B6FB2C258E3DF57B410FF5D2C2AAC8BD4C851CBE3D9403883DA83AB2A27C)

此外，用户自定义打点信息，还可以在Frame分析、Network分析任务中查看到。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/aa/v3/xIuLf92ZQ5mR5Q_DCJo8tA/zh-cn_image_0000002743078029.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=1C39D78D25CFF223E57CC63136F38780C75011A04E7B8FA97C1DDF32C2CB27A8)

#### 能耗分析

DevEco Profiler提供Energy泳道，旨在帮助开发者了解应用能耗的构成，结合应用生命周期，识别潜在能耗问题。

鼠标悬浮在Energy泳道数据上，显示器件能耗使用情况。器件包含：CPU、Display、GPU、Location、Camera、Bluetooth、Flashlight、Audio、Wifi、Modem。框选Energy泳道数据，Details中呈现框选时间段内的详情信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/66/v3/CB951NsoQvGb5pbdq9o-RA/zh-cn_image_0000002713559068.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=2F36A424422C2EA39FB222A0555C2507F8BC1B154070B999613CB7DB27CCC594)
