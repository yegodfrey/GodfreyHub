---
name: cangjie-guides/cj-insight-allocation-memory
title: 内存分析及优化
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-allocation-memory
nodePath: 优化应用性能 / Native内存泄漏分析：Allocation分析 / 内存分析及优化
---

# 内存分析及优化

应用在开发过程中，可能会因为API使用错误、变量未及时释放、异常频繁创建/释放内存等情况引发各种内存问题。

DevEco Profiler提供了基础的内存场景分析功能Allocation，您可以使用Allocation来分析应用在运行时的内存分配及使用情况，识别和定位内存泄漏、内存抖动以及内存溢出等问题，对应用的内存使用进行优化。

在设备连接完成后，可按照如下方法查看内存分析结果：

  1. 请参见[模块级build-profile.json5文件](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-build_module_build_profile)，增加strip字段并赋值为false。采集函数栈解析符号需要附带符号表信息，无符号表信息可能采集不到函数名称，因此录制模板前请按照下图进行配置。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9f/v3/oV9gsBfgQFGve6QvpWvc5A/zh-cn_image_0000002731379001.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=1DC8101477BED27667EA2D3FBBF44A4F3EBF5E3F1965C192760894F748E16FB6)

  2. 创建Allocation分析任务并录制相关数据，操作方法可参见[性能问题定位：深度录制](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-profiler-deep-recording)，或在会话区选择**Open File** ，导入历史数据。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2a/v3/4VeNHPSmS2ekSJNOXbJFwQ/zh-cn_image_0000002701819704.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=149D2935E46C1DFFA498E57BA02E8F8A2835DB471ED215DEDFF6956FF8B75F0E)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5c/v3/MDVwr1J7TYKpNLjmneoGcA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=A967F235FEE39B7A166CA5CA862B36D0D93F7DFBDDD683E8F0E05EE98FF2EDB4)

     * 在任务分析窗口，可以通过“Ctrl+鼠标滚轮”缩放时间轴，通过“Shift+鼠标滚轮”左右移动时间轴，或使用快捷键W/S放大或缩小时间轴，使用A键/D键可以左右移动时间轴。
     * 将鼠标悬停在泳道任意位置，可以通过M键添加单点时间标签。
     * 鼠标框选要关注的时间段，可以通过“Shift+M”添加时间段时间标签。
     * 在任务分析窗口，可以通过“Ctrl+, ”向前选中单点时间标签，通过“Ctrl+. ”向后选中单点时间标签。
     * 在任务分析窗口，可以通过“Ctrl+[ ”向前选中时间段时间标签，通过“Ctrl+]”向后选中时间段时间标签。
     * Allocation分析支持离线符号解析能力，请参见[离线符号解析](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-time#离线符号解析)。

Allocation分析任务支持在录制前单击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e3/v3/6Fx1Di0yTRq9W14HDFPGxw/zh-cn_image_0000002731538959.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=D9E76E434E9EBE0F5F0C7889309DF553F361FE1C9CD7B1460CFC73DBC428BC3A)指定要录制的泳道：

     * Memory泳道：显示当前进程的物理内存使用情况，其度量方式包含：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b/v3/LLsryc2OTkav-SIflXu1Yg/zh-cn_image_0000002731538983.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=4F2C89A7923A3D0C560E933F75D94B05D1F3EEF38F131430EC1643E53D857458) PSS：进程独占内存和按比例分配共享库占用内存之和。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/37/v3/tHlKS4aJR6aB4-ZRRdqqoA/zh-cn_image_0000002701659794.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=A5D5F507C6B051E662E1B6228A37B16C85D91D6D189FFC0F4E40AF504A4C1115) RSS：进程独占内存和相关共享库占用内存之和。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/47/v3/ccHDTnp-StinKagDpu58nA/zh-cn_image_0000002731379009.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=41DD405EEECF559BD5C88BA3AC6F7607551CFDDA771E02FED86BE7B5F69B84C7) USS：进程独占内存。

默认只显示PSS的统计图，如需要查看USS或RSS，需要在Memory泳道的右上角点选相关数据类型。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ee/v3/F3m2yQg6QQeEpMsoc0NGaw/zh-cn_image_0000002701819706.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=C1C69DF6E7DEF9BF8F97DE7B9DD836792D872956411D9FB9B17E5F482B2120B8)

展开Memory泳道，子泳道展示的是按照内存类型将进程PSS值拆分开的各个维度的内存信息，类型包含ArkTS Heap/Native Heap/GL/Graph/Guard/AnonPage Other/FilePage Other/Dev/Stack/.hap/.so/.ttf。默认展示其中的五个子泳道，如要显示其他子泳道，可以点击主泳道的options标签并勾选其他泳道来查看。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/06/v3/gMyFO4q4R3WC_FyezT3xuA/zh-cn_image_0000002731538985.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=A93545CD387544D2AB5A123B30A4AFCCB8B9F7F13D8536E6AA76C75361BD75FB)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/84/v3/D1R1GYDGQ-6n5Ne6tV9ODQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=4F155BEAD9F93DEC7ABA5D9FFE573C8E720E257F039FDB01B7BEDBFC111CC91E)

**ArkTS Heap** ：ArkTS堆的内存占用。

**Native Heap** ：Native层（主要是应用依赖的so库的C/C++代码）使用new/malloc分配的堆内存。

**GL** ：应用：纹理内存，RS：纹理+图形渲染内存。

**Graph** ：该进程按去重规则统计的dma内存占用，包括直接通过接口申请的dma buffer和通过allocator_host申请的dma buffer。

**Guard** ：保护段所占内存。

**AnonPage Other** ：其他有匿名页所占内存（非heap、anon:native_heap、anon:ArkTS heap开头的匿名页）。

**FilePage Other** ：其他没有被映射到文件的页所占内存。

**Dev** ：进程加载的以/dev开头的文件所占内存。

**Stack** ：栈内存。

**.hap** ：进程加载的.hap文件所占内存

**.so** ：进程加载的.so动态库所占内存。

**.ttf** ：进程加载的.ttf字体文件所占内存。

     * CJ Allocation泳道：显示Cangjie的内存分配信息。由于隐私安全政策，已上架应用市场的应用不支持录制此泳道。由于较大的性能开销可能导致卡顿/卡死问题，建议避免同时录制CJ Allocation及Native Allocation泳道，避免影响分析准确性。可在录制前单击左上角菜单栏![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b2/v3/1WOLTi1eS4KGuU_3vl0mOQ/zh-cn_image_0000002731538959.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=3EA84FCD47517A2A645E6363418E0AB1E9A00484FAD456917C70BE0770641F47)图标，取消勾选Native Allocation泳道。

     * Native Allocation泳道：显示具体的Native内存分配情况，包括静态统计数据、分配栈、每层函数栈消耗的Native内存等信息。由于隐私安全政策，已上架应用市场的应用不支持录制此泳道。

单击工具控制栏的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6e/v3/RLv_ATtIQ5mpf94NuoE6mQ/zh-cn_image_0000002701659796.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=33C8CC7B107786467C5F9B478573FAD8ED7AA7ECC244F4E4F4176A1BC235D67F)按钮，可以设置是否为统计模式、统计间隔、最小跟踪内存、回栈模式、JS回栈、JS回栈深度和Native回栈深度。默认采用统计模式，统计间隔只在统计模式下才需要设置，可设置范围为1s~3600s，默认为10s，默认最小跟踪内存为1024Bytes。FP回栈模式下需要设置JS回栈深度和Native回栈深度，DWARF回栈模式下仅需要设置回栈深度。默认Native回栈深度为10层，JS回栈深度可配置范围为0-128，默认10层。设置完成后，在录制期间小于此大小的内存分配将被忽略，最大回栈深度将达到设置的值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/58/v3/hrnFaiz0QL-mNbnPNjPFbw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=7A91B044DAFEAA7F3E4A7C40E58EF39B39005D4BE998044F3CBC5C67195F917F)

设置的最小跟踪内存数值越小、回栈深度越大，对应用造成的影响就越大，可能会导致DevEco Profiler卡顿。请根据应用实际的调测情况进行合理设置。

统计模式用于不关注单次分配、关注应用较长时间的内存变化情况的场景，将指定的采样间隔内的数据做合并统计，以达到降低处理数据量，提高录制效率和时长的目的。设置的Sampling Interval为近似值，即尽可能地在接近这个时间内做统计汇总，存在一定的偏差，偏差不超过1s，这个偏差不会对内存分配的正确性产生影响。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3e/v3/5hn41iMzSYKUT1NqEzIZGQ/zh-cn_image_0000002731379011.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=8CC76D4895699655A49DCD9B503842513C9DC35C4E4C047F1A5BA04DFF0BE1F2)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c1/v3/d1rg_fFdQcaptTisHNfjbg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=AEA43F17691A52770A24BA3504CE2B808CD66E24FE019CDA1B624874A25F7AB1)

     * 在任务录制过程中，单击分析窗口左上角的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5/v3/I95Tn19BQViOI6gykKpFMw/zh-cn_image_0000002701819708.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=2155C6D69A16BF93F9B9AD07D12E3166E6324B82C62808E9D59E7F01F3522084)可启动内存回收机制。
     * 当Cangjie的调优对象的某个程序/进程占用的部分内存空间在后续的操作中不再被该对象访问时，内存回收机制会自动将这部分空间归还给系统，降低程序错误概率，减少不必要的内存损耗。

  3. 在目标泳道上长按鼠标左键并拖拽，框选要展示分析的时间段。

Details区域中显示此时间段内指定类型的内存分析统计信息：

     * Memory泳道：

       * 主泳道的详情区域显示当前框选时间段内各采样点的应用内存PSS总和以及各种内存页面状态的内存占用总和。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d5/v3/hsiSyPFmQD2yYt7qlIjulw/zh-cn_image_0000002731538987.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=0DC644987466FD20B07D9F7ADEC76BEA0A911940544F7564D74A5108F876D60F)

       * 子泳道的详情区域显示该泳道所代表的内存类型的框选时间段内各采样点的PSS总和以及各种内存页面状态的实际占用情况。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/12/v3/NMRibFBtTK2QLmaAC2H81A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=A83B438AD210F7314B7C36A0CAC816A23251617610AFAB7945C801223288D246)

Graph字段统计方式为：计算/proc/process_dmabuf_info节点下该进程使用的内存大小。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/24/v3/2YoURxiUSRStrqWORFY_Sg/zh-cn_image_0000002701659798.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=7A7DA09A98AFD274E06D39E674FB0269894F1728D7173A06A2E387A7EFD3245C)

     * CJ Allocation泳道：显示被选择进程所使用的所有Cangjie内存总和，框选后展示此时段内录制到的所有Cangjie实例的对象分配信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/02/v3/9WisXMjKQs-139chSacTsg/zh-cn_image_0000002731379013.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=94B3C615F966E301F8891533760772C9DC7DC5FA3000752B6C8A935590D20EDA)

     * Native Allocation泳道：框选子泳道后显示具体的内存分配，包括静态统计数据、分配栈等。

       * Statistics页签中显示该段时间内的静态分配情况，包括分配方式（Malloc或Mmap）、总分配内存大小、总分配次数、尚未释放的内存大小、尚未释放次数、已释放的内存大小、已释放次数。

点击任意对象上的跳转按钮，可跳转至此类对象的详细占用/分配信息。当前统计模式下不支持跳转。

       * Call Trees页签显示线程的内存分配栈情况，包括函数地址或符号、分配大小、占比以及函数栈帧的类别等。单击任一行栈帧，“More”区域将显示经过该栈帧的分配内存最大的调用栈。

       * Allocations List显示内存分配的详细信息，包括内存块起始地址、时间戳、当前活动状态、大小、调用的库、调用库的具体函数、事件类型（与Statistics页签的分配方式对应）等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8f/v3/TrR3VbcAT7yNctECkW9hCg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=1C08372F202B0BAAE55871F529E81BE43EDFDB1C3E72DC5E1832C5D5CFB15B95)

统计模式（Statistics Mode）下不存在Allocations List信息。在工具控制栏的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b7/v3/GfBKHTIpSVmVDaRMUnHyiw/zh-cn_image_0000002701659796.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=2D4565AD4971224EC02014864FBE8EAEC6951DD4013BAAA5F0C07095F3F72C7F)中可以关闭统计模式（Statistics Mode）。

选择任一对象，右侧会展示与该对象相关的所有库和调用者。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/55/v3/khAVGQe9Sme661zET4JE8Q/zh-cn_image_0000002701819710.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=C1CE6C2AC0D2A69EA8EECC236979DBF25588A759A5C23AD92916550BCFB40F93)

  4. （可选）根据分析结果，双击可能存在问题的调用栈，跳转至相关代码。开发者可根据实际需要进行优化。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1d/v3/Ko560ZYSS6uQeko4C4L7Yg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=C38E88FCD779E197485F1C54A93DB1FA1C2C978583519366E24963E901300715)

Release应用暂不支持跳转到用户侧Native代码。



