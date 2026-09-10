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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8e/v3/DsR9rHodTcayf4eg1ppc-Q/zh-cn_image_0000002713559062.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=B5385062DEC98FB8982705CF00E06E8E4DCE74DE4FCC505C85F8E6C3694D0728)

  2. 创建Allocation分析任务并录制相关数据，操作方法可参见[性能问题定位：深度录制](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-profiler-deep-recording)，或在会话区选择**Open File** ，导入历史数据。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/47/v3/FsE-Ex4RQY2JptlfwC8PbA/zh-cn_image_0000002743197981.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=071A21DF9CDE95E2DE453A8AD8C73CEA1EB0FF0B8308E93E17A5233665266903)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bf/v3/GV0XubTOS6WpuSU3yYQgUg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=D5829E76FEB80C1F5957AFC3C42190BBAAAC907441D5551B699D0D8CF428496C)

     * 在任务分析窗口，可以通过“Ctrl+鼠标滚轮”缩放时间轴，通过“Shift+鼠标滚轮”左右移动时间轴，或使用快捷键W/S放大或缩小时间轴，使用A键/D键可以左右移动时间轴。
     * 将鼠标悬停在泳道任意位置，可以通过M键添加单点时间标签。
     * 鼠标框选要关注的时间段，可以通过“Shift+M”添加时间段时间标签。
     * 在任务分析窗口，可以通过“Ctrl+, ”向前选中单点时间标签，通过“Ctrl+. ”向后选中单点时间标签。
     * 在任务分析窗口，可以通过“Ctrl+[ ”向前选中时间段时间标签，通过“Ctrl+]”向后选中时间段时间标签。
     * Allocation分析支持离线符号解析能力，请参见[离线符号解析](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-time#离线符号解析)。

Allocation分析任务支持在录制前单击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ff/v3/aHnyoBeiS_m639fxXygDfQ/zh-cn_image_0000002713399076.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=A782ED700EED0816F93880005B97BB89F2596E35FDA2C924C7A715B8D9C27342)指定要录制的泳道：

     * Memory泳道：显示当前进程的物理内存使用情况，其度量方式包含：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ab/v3/o8Fv2FApQbujoX7-zsUpAw/zh-cn_image_0000002713399100.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=61C18232F9D03A83D4AF9497A5968F9153D5CDA5BF25D6DFAE6A57198BAE6BA1) PSS：进程独占内存和按比例分配共享库占用内存之和。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9a/v3/bLugC0GgSw-owffBdJORJA/zh-cn_image_0000002743078031.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=D2CD866ABEA69E23EBF77A7F9BDD60DD1ECB7A9CBD6D131A0BAD82874F449833) RSS：进程独占内存和相关共享库占用内存之和。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3b/v3/2_6lUe5ISOm0yp705s_Sdw/zh-cn_image_0000002713559070.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=F7D2AB639456C89B5FFDE9371C8CFAF1776B65E1E66242EE2EA6A4B6DE06B240) USS：进程独占内存。

默认只显示PSS的统计图，如需要查看USS或RSS，需要在Memory泳道的右上角点选相关数据类型。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a3/v3/qt3E_TasQWqHXG5rQfLuGg/zh-cn_image_0000002743197983.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=9824AB29B9FE17ECC8727CCD358C3F9474CEFC56C73C6D3B1EF9E2B7CB2B310E)

展开Memory泳道，子泳道展示的是按照内存类型将进程PSS值拆分开的各个维度的内存信息，类型包含ArkTS Heap/Native Heap/GL/Graph/Guard/AnonPage Other/FilePage Other/Dev/Stack/.hap/.so/.ttf。默认展示其中的五个子泳道，如要显示其他子泳道，可以点击主泳道的options标签并勾选其他泳道来查看。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/54/v3/jiclQ9bxR1OMAsRhqO26ZA/zh-cn_image_0000002713399102.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=72C3D561019D384BD7CAB4E5E93E177753DDA95D8EDCBAC2FBE279C20384A3EB)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f6/v3/7MQspdQpQ96D7_WaANNGZw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=622F286DCD98323F8CA502DFF44CB6531529BF36895A715832DF8DDF47421FB4)

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

     * CJ Allocation泳道：显示Cangjie的内存分配信息。由于隐私安全政策，已上架应用市场的应用不支持录制此泳道。由于较大的性能开销可能导致卡顿/卡死问题，建议避免同时录制CJ Allocation及Native Allocation泳道，避免影响分析准确性。可在录制前单击左上角菜单栏![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/27/v3/Hd9pR5qyRcSoJw6M5axt7g/zh-cn_image_0000002713399076.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=71D5DA6A5A73BC0D0CDD5CB558A005931983BB565C6932EBAAE5760EDE4419E4)图标，取消勾选Native Allocation泳道。

     * Native Allocation泳道：显示具体的Native内存分配情况，包括静态统计数据、分配栈、每层函数栈消耗的Native内存等信息。由于隐私安全政策，已上架应用市场的应用不支持录制此泳道。

单击工具控制栏的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/63/v3/MZiLiBBNSy2312u463sfjA/zh-cn_image_0000002743078033.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=4D878225D33E83F28CEC3E3954A66A7760734B565568778C4E4FB9B6A0E5EB83)按钮，可以设置是否为统计模式、统计间隔、最小跟踪内存、回栈模式、JS回栈、JS回栈深度和Native回栈深度。默认采用统计模式，统计间隔只在统计模式下才需要设置，可设置范围为1s~3600s，默认为10s，默认最小跟踪内存为1024Bytes。FP回栈模式下需要设置JS回栈深度和Native回栈深度，DWARF回栈模式下仅需要设置回栈深度。默认Native回栈深度为10层，JS回栈深度可配置范围为0-128，默认10层。设置完成后，在录制期间小于此大小的内存分配将被忽略，最大回栈深度将达到设置的值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1d/v3/lW8BxL3lR6mywTG3aYGr8w/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=867C6194EB1499C1CF927C9227A6A7207A999B24F94E09DD39A8B2ED80084AD1)

设置的最小跟踪内存数值越小、回栈深度越大，对应用造成的影响就越大，可能会导致DevEco Profiler卡顿。请根据应用实际的调测情况进行合理设置。

统计模式用于不关注单次分配、关注应用较长时间的内存变化情况的场景，将指定的采样间隔内的数据做合并统计，以达到降低处理数据量，提高录制效率和时长的目的。设置的Sampling Interval为近似值，即尽可能地在接近这个时间内做统计汇总，存在一定的偏差，偏差不超过1s，这个偏差不会对内存分配的正确性产生影响。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/91/v3/qJRktu4BQde22IBDrWMbZw/zh-cn_image_0000002713559072.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=635D0E120080458503A5D045FAE8C5009CECF780C902B94513D4D96568FA2CE1)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/36/v3/G8q1ojTfTvCjJoinZtYd7w/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=5514FF50D1E367F196B4D60BF6BA8CDABAF3E26C79D7D2FF4FC0ED9DFF3C5E0A)

     * 在任务录制过程中，单击分析窗口左上角的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1d/v3/Vf9LyplSQDemLYCIP-rNLA/zh-cn_image_0000002743197985.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=56755DCA385F9D2E15ADE049C73399BA272ADBE3F8C31FCC51E76165B243D07F)可启动内存回收机制。
     * 当Cangjie的调优对象的某个程序/进程占用的部分内存空间在后续的操作中不再被该对象访问时，内存回收机制会自动将这部分空间归还给系统，降低程序错误概率，减少不必要的内存损耗。

  3. 在目标泳道上长按鼠标左键并拖拽，框选要展示分析的时间段。

Details区域中显示此时间段内指定类型的内存分析统计信息：

     * Memory泳道：

       * 主泳道的详情区域显示当前框选时间段内各采样点的应用内存PSS总和以及各种内存页面状态的内存占用总和。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/af/v3/b_Us7toISAeXlrMsbJRjqA/zh-cn_image_0000002713399104.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=3B38465229241B9C46D1A05890698FA2EB6B5BA959BC84BF591D562CCCE5854A)

       * 子泳道的详情区域显示该泳道所代表的内存类型的框选时间段内各采样点的PSS总和以及各种内存页面状态的实际占用情况。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b3/v3/P7xacuK-Qzm45OZqBLgRhA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=38EE87329A32298418B046039E9F21043EEAA75862FBC2EEDA2EE53E1FF31D94)

Graph字段统计方式为：计算/proc/process_dmabuf_info节点下该进程使用的内存大小。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e7/v3/E9oLQLQzRS2rMm-Qy98qMA/zh-cn_image_0000002743078035.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=FD5F9AA5E24C131A094740DFB1993D68A39F4D98961B61AC04EAA60F4A1D83DB)

     * CJ Allocation泳道：显示被选择进程所使用的所有Cangjie内存总和，框选后展示此时段内录制到的所有Cangjie实例的对象分配信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/43/v3/zDFKziMJS7mCJtV-ISN4dA/zh-cn_image_0000002713559074.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=9136651E12B74780313988DE5AF6B034571C37B6676657498624B360E583EBA2)

     * Native Allocation泳道：框选子泳道后显示具体的内存分配，包括静态统计数据、分配栈等。

       * Statistics页签中显示该段时间内的静态分配情况，包括分配方式（Malloc或Mmap）、总分配内存大小、总分配次数、尚未释放的内存大小、尚未释放次数、已释放的内存大小、已释放次数。

点击任意对象上的跳转按钮，可跳转至此类对象的详细占用/分配信息。当前统计模式下不支持跳转。

       * Call Trees页签显示线程的内存分配栈情况，包括函数地址或符号、分配大小、占比以及函数栈帧的类别等。单击任一行栈帧，“More”区域将显示经过该栈帧的分配内存最大的调用栈。

       * Allocations List显示内存分配的详细信息，包括内存块起始地址、时间戳、当前活动状态、大小、调用的库、调用库的具体函数、事件类型（与Statistics页签的分配方式对应）等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7d/v3/lqccX1SfSrWTOmNGa_14_w/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=66CD34224D066378929B9366B1ECD2D9DB336A30E9C68D7CBD08B8A85C03E356)

统计模式（Statistics Mode）下不存在Allocations List信息。在工具控制栏的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/22/v3/aAFUiE9BSj6TyHrgKljPIw/zh-cn_image_0000002743078033.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=93E01BC23EA66D2BEB09D4FDAFCB6A6134A9FF0600830613E55D89DE987D34AF)中可以关闭统计模式（Statistics Mode）。

选择任一对象，右侧会展示与该对象相关的所有库和调用者。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fd/v3/Mdv37dyMThinvOrQzZMWZg/zh-cn_image_0000002743197987.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=097AF6F1257A6009FD9D5D2DC6CAD6B213C2E4FC280E6CF7F5B11FB55670E628)

  4. （可选）根据分析结果，双击可能存在问题的调用栈，跳转至相关代码。开发者可根据实际需要进行优化。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/19/v3/nCVMOFTtTZS2-DZIZcbANQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=55228BA6275B28DCA4B556883E85EB1078A7041F615E5B604047370EEDCC4EE4)

Release应用暂不支持跳转到用户侧Native代码。



