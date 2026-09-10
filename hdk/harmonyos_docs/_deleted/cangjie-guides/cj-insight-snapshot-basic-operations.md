---
name: cangjie-guides/cj-insight-snapshot-basic-operations
title: Snapshot模板基本操作
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-snapshot-basic-operations
nodePath: 优化应用性能 / 内存泄漏分析：Snapshot分析 / Snapshot模板基本操作
---

# Snapshot模板基本操作

#### 查看快照详情

  1. 创建Snapshot场景调优分析任务，操作方法请参见[性能问题定位：深度录制](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-profiler-deep-recording)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c8/v3/l0huatAhSliObIwWxHGoBA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=258AE1B8F6549AB2996CD7AC403B7ABBE5EB290522AEBDD6B3C3B38E8557915F)

     * 在任务分析窗口，可以通过“Ctrl+鼠标滚轮”缩放时间轴，通过“Shift+鼠标滚轮”左右移动时间轴，或使用快捷键W/S放大或缩小时间轴，使用A键/D键可以左右移动时间轴。
     * 将鼠标悬停在泳道任意位置，可以通过M键添加单点时间标签。
     * 鼠标框选关注的时间段，可以通过“Shift+M”添加时间段时间标签。
     * 在任务分析窗口，可以通过“Ctrl+, ”向前选中单点时间标签，通过“Ctrl+. ”向后选中单点时间标签。
     * 在任务分析窗口，可以通过“Ctrl+[ ”向前选中时间段时间标签，通过“Ctrl+]”向后选中时间段时间标签。

  2. 设置Snapshot泳道。

单击任务左上角的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0f/v3/gUIsrqcwRTGSGiPFFpF_fA/zh-cn_image_0000002731538959.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=33B026110E8D39686D834E9169164ADF17FE391D49DFFEB897D4FD53976977ED)进行泳道的新增和删除，再次单击此按钮可关闭设置并生效。

  3. 开始录制后可观察Memory泳道的内存使用情况，在需要定位的时刻单击任务左上角的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a0/v3/TVEDNNzFQSWaja7kpxMiog/zh-cn_image_0000002701659804.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=D1944D8F70A1FB537319209F76FB5A495985FB934A0CEA6A97127AA2E05C0B1D)启动一次快照。

“CJ Snapshot”泳道的紫色区块表示一次快照完成。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/76/v3/ydBVViZsShSbDZLE8QA-nA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=8B94540A7997CFE6FA51EBE367EDEBCB2FCA21B686DBD347826CD6DF502507F7)

     * 在任务录制过程中，单击分析窗口左上角的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/37wLOCAsRhqHDjo5LlXeIA/zh-cn_image_0000002701819708.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=B891BFC8C8EABF52796A12C881E5B66C3C2F1F898DEF7B96577ABAE15A180AEA)可启动内存回收机制。
     * 当Cangjie的调优对象的某个程序/进程占用的部分内存空间在后续的操作中不再被该对象访问时，内存回收机制会自动将这部分空间归还给系统，降低程序错误概率，减少不必要的内存损耗。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f1/v3/dCYDSPaCRwGOE6hSnv5dYA/zh-cn_image_0000002731379019.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=E5EF18529D3B8189228C1659019AF58D516DCD8BB998D950D747EC1DFBBAC8E0)

在“Statistics”页签中显示当前快照的详细信息：

     * Constructor：构造器。
     * Count：该对象的数量。
     * Distance：从GC Root到这个对象的距离。
     * Shallow Size：该对象的实际大小。
     * Retained Size：当前对象释放时，总共可以释放的内存大小。
     * Root Type：根节点类型，类型分为：local（局部根节点）、global（全局根节点）、unknown（终结器根节点）、-（Constructor节点或非根Instance节点）。
     * Array Length：数组对象的元素个数。
     * 构造函数名称后的“x数字”，表示该类型对象的数量，可单击折叠按钮展开。
     * 单击列表中任一对象，右侧区域会显示从GC roots到这个对象的路径，通过这些路径可以看到该对象的句柄被谁持有，从而方便定位问题产生的原因。
     * 带![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2/v3/qLnhWpzPSKOgpEg4ObCmbQ/zh-cn_image_0000002701819716.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=876F812B4C0E997B0CA507DE3FC9972F188EEA3B4612C462F41594DDD27E5838)标识的对象，表示其可以通过全局window对象直接访问。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4c/v3/I8yRHqncRKyCngyN0jmIHg/zh-cn_image_0000002731538995.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=D5EE771347A12283181512EBAA0F06FCF5E561081860ADA70B7CCCBE9838B5F4)




#### 节点属性与引用链

在“Snapshot”的“Statistics”页签和“Comparison”页签中，所有实例对象节点展开后会显示"<fields>"以及"<references>"，这两项节点分别代表该实例对象的属性以及该实例对象的引用链信息。

在“Snapshot”的More区域则展示“Fields”和“References”两个页签，分别代表Details区域所选择对象的属性以及引用链信息，方便快捷查看所选中对象的属性等详细信息，而不需要跳转至对应对象。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d2/v3/YsXrkXbkTQG4MYjF2MVIYA/zh-cn_image_0000002701659806.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=2D16A87C4BB13F3F1A55C6C5D20C8C4A2D4F6AB341ACE24C8A4B08D5681DB3C0)

#### 节点跳转

在“Snapshot”的“Comparison”页签中，查看内存对象、对象属性及其引用链时，若要查看某一对象的详细信息，可以单击该对象所在行行尾的跳转图标跳转至该对象所在的“Statistics”页签并定位至该对象所在的位置，以查看该对象的详细信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e6/v3/w0bSCCIJR_K_eFBL__CkZA/zh-cn_image_0000002731379021.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=1BDD9EA7827106B6C25C8F56A6B0D2A4B8F52975A705FD20D73DA1CB57054611)

#### 历史节点前进/后退

当在“Comparison”和“Statistics”之间进行节点跳转后，单击详情区域左下角的左右箭头可以前进或者后退至下一个或上一个历史节点，以便快速在多个历史节点之间跳转查看。当箭头为激活状态时，表示前进/后退功能可用，当箭头为灰色状态时则代表无法使用该功能。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/07/v3/rG9y1RJlTPmi0MpLCWHn-Q/zh-cn_image_0000002701819718.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=5D6B7483BF579DCCBA1CD8901CB91B546BE3C4A2288E06C9B48DAAD6F857FD10)

#### 比较快照差异

在“Snapshot”的“Comparison”页签中，以当前选择的快照为base，下拉框选择的快照为Target，即可得到两次快照信息的比较结果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3b/v3/bjNxjrh1Qb-4c8T4KoZpvg/zh-cn_image_0000002731538997.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=7998F467820CB278158FF4CFB990DAA1FCD19A6BB60F6CE42837D260F5876E9C)

在“Snapshot”的“Comparison”页签中，可进行两次快照的差异比较，比较内容包括新增数、删除数、个数增量、分配大小、释放大小、大小增量等等。通过不断对比，可快速分析和定位内存问题的具体位置。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fd/v3/sONmb2oZRNq0_4qicT2O6g/zh-cn_image_0000002701659808.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=717E921563324002C07B257AA2F35DDFE0037336C07ADCAFEC1E222E78C78F15)

#### 引用链向最小引用距离展开

Snapshot分析支持一键向引用链最小的引用距离方向展开。系统会计算从GC roots垃圾收集器根到选定实例对象的最短路径（最短路径是指Distance逐渐-1的路径，最终抵达Distance = 1的结点），通过最短路径，能够清晰地看到该对象的句柄被哪些对象持有，快速定位问题产生的根源。

选择一个实例结点，底部搜索栏的Path to GC Root按钮成可单击状态。单击该按钮选择搜索模式并确认，系统会计算从GC roots到选定对象的最短路径，并在右侧区域展示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/61/v3/AgkXRYv7TwCG0SPEJOczLw/zh-cn_image_0000002731379023.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=9B1A3DCA555377AC3B2CCC7B506790A68AF2ED1B77C31D8E3DE23A2884CF7AC5)

目前支持单根路径搜索、指定数量的根路径搜索和展示所有根路径三种搜索模式，默认为单根搜索。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6f/v3/hplHq5WvTU2qo7kWvfmF6A/zh-cn_image_0000002701819720.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=72E53A67D52CABFC86148FB1BDED11F41AC4635568076BA427FE34913FDA19E7)

设置完搜索模式后单击OK，右侧more区域会自动跳转至Shortest Paths页面展示搜索结果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b8/v3/3caXQ3Z1SWqD7EJ-UBg_fQ/zh-cn_image_0000002731538999.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=CA561761FFEEE60E02FF177B82D722FDE7BA9F37B7871C0487DE304C2948FADF)

#### 线程视图

在“Snapshot”的“Thread”页签中，可以查看堆内存快照时刻各线程的栈帧及局部对象。

采用三级树形结构展示：第一层级：线程，第二层级：栈帧（显示方法名、源文件、行号），第三层级：局部对象。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ae/v3/cffb7ohLTOmDlFTDgQG9lg/zh-cn_image_0000002701659810.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=2AC1BD09D31FD24BF516D7FF3D4B35454F28ACABF8C5F3A3CAB15A146E26F327)

#### 离线导入内存快照

DevEco Profiler支持离线导入内存快照功能，可导入一个或多个.cjheapdump文件。

您可以在DevEco Profiler主界面的“Create Session”区域中，单击“Open File”，导入.cjheapdump文件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/50/v3/77kclhdQS6KqgaYXcduzjQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=F171019E52E18F9873915BDD0B0A882E9C745F1EF59EA0B0209C831B31A3168D)

  * 导入的单个文件大小不超过512MB。
  * 批量导入的文件数量不超过10个。
  * .cjheapdump文件是应用发生Out of Memory现象时产生的原始内存文件。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e8/v3/Zz42kxBIQoikJovQ3mCBjg/zh-cn_image_0000002731379025.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=FFB6BFBFD2CAD4B909B7238CFFEA2854D394928AB94789BF8D0CB816AB9B994E)

导入后支持查看快照详情，详见Statistics页签；支持进行快照对比，详见Comparison页签；支持查看线程视图，详见Thread页签。
