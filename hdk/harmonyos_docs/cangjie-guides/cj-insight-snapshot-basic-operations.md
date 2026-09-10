---
name: cangjie-guides/cj-insight-snapshot-basic-operations
title: Snapshot模板基本操作
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-snapshot-basic-operations
nodePath: 优化应用性能 / 内存泄漏分析：Snapshot分析 / Snapshot模板基本操作
---

# Snapshot模板基本操作

#### 查看快照详情

  1. 创建Snapshot场景调优分析任务，操作方法请参见[性能问题定位：深度录制](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-profiler-deep-recording)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3b/v3/xg1kmZQ3RgGeIdcQIbAhJQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=36FC0AEDD1392E95AC4646CEC6513969488CF3835CA703EBA5694D8F87576706)

     * 在任务分析窗口，可以通过“Ctrl+鼠标滚轮”缩放时间轴，通过“Shift+鼠标滚轮”左右移动时间轴，或使用快捷键W/S放大或缩小时间轴，使用A键/D键可以左右移动时间轴。
     * 将鼠标悬停在泳道任意位置，可以通过M键添加单点时间标签。
     * 鼠标框选关注的时间段，可以通过“Shift+M”添加时间段时间标签。
     * 在任务分析窗口，可以通过“Ctrl+, ”向前选中单点时间标签，通过“Ctrl+. ”向后选中单点时间标签。
     * 在任务分析窗口，可以通过“Ctrl+[ ”向前选中时间段时间标签，通过“Ctrl+]”向后选中时间段时间标签。

  2. 设置Snapshot泳道。

单击任务左上角的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e2/v3/5Lu5c8SiSjG7xszMwI-stg/zh-cn_image_0000002713399076.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=1D0FD7D09312FCC2D09F27ED15A5CD1D62A822039FFFD196C8DB58F391431A46)进行泳道的新增和删除，再次单击此按钮可关闭设置并生效。

  3. 开始录制后可观察Memory泳道的内存使用情况，在需要定位的时刻单击任务左上角的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f6/v3/XTRmxbzuRh6LTTeR6v_90w/zh-cn_image_0000002743078041.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=951E0E2642B6862FB47520A7ECC2AC190BD831DAB40636856C1E5454F19F5963)启动一次快照。

“CJ Snapshot”泳道的紫色区块表示一次快照完成。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7e/v3/u74LBMttQQ2ElwJLN0fL6g/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=B29A3589261865A648129C0D17903DA1ED879B2ADCB4BFA6A11466FBABAFB095)

     * 在任务录制过程中，单击分析窗口左上角的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/df/v3/HdjPuTmNSj-z0R8fdjjauA/zh-cn_image_0000002743197985.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=41BA379E441DE6B9E833B8E89582E79F6A31ED5B2926E51D3C6E6321EBAEB6C8)可启动内存回收机制。
     * 当Cangjie的调优对象的某个程序/进程占用的部分内存空间在后续的操作中不再被该对象访问时，内存回收机制会自动将这部分空间归还给系统，降低程序错误概率，减少不必要的内存损耗。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/eb/v3/pLaiuvNTSdeeJRgnLRbQlw/zh-cn_image_0000002713559080.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=36F537D74DCC815FAF44B94E75C406FD6224253CFE79751C1F4C6D5CF8CF42D3)

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
     * 带![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/de/v3/fY-mxiqKQfq6yikvPIV6oA/zh-cn_image_0000002743197993.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=D7FB8D7051D31166012D451B07DA169A1744E546F753378DCFBD5A28DBA71554)标识的对象，表示其可以通过全局window对象直接访问。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d4/v3/my3iK9hQTY6WQifEgGJRAw/zh-cn_image_0000002713399112.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=06F1C4B202E927FB7DBEB8060F08E3E825030A467BE1C5C4EA700C32AFE781BA)




#### 节点属性与引用链

在“Snapshot”的“Statistics”页签和“Comparison”页签中，所有实例对象节点展开后会显示"<fields>"以及"<references>"，这两项节点分别代表该实例对象的属性以及该实例对象的引用链信息。

在“Snapshot”的More区域则展示“Fields”和“References”两个页签，分别代表Details区域所选择对象的属性以及引用链信息，方便快捷查看所选中对象的属性等详细信息，而不需要跳转至对应对象。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/09/v3/AfIdl0xyQvS6haXWb9GEBQ/zh-cn_image_0000002743078043.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=00045FDE5BB78B34BB3A40CD3299EC039C60E6A01343B41DEF30BA406FFC1221)

#### 节点跳转

在“Snapshot”的“Comparison”页签中，查看内存对象、对象属性及其引用链时，若要查看某一对象的详细信息，可以单击该对象所在行行尾的跳转图标跳转至该对象所在的“Statistics”页签并定位至该对象所在的位置，以查看该对象的详细信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3e/v3/sEnpOWNsRwmGUgXcidgAeQ/zh-cn_image_0000002713559082.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=46071BECB245B00257800576F3079BDF38201F0B55AFC8F15D112921CAA53501)

#### 历史节点前进/后退

当在“Comparison”和“Statistics”之间进行节点跳转后，单击详情区域左下角的左右箭头可以前进或者后退至下一个或上一个历史节点，以便快速在多个历史节点之间跳转查看。当箭头为激活状态时，表示前进/后退功能可用，当箭头为灰色状态时则代表无法使用该功能。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ff/v3/s5KkwTdfQ--9re0QHAbKqQ/zh-cn_image_0000002743197995.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=8109736DE2A4E7A62A018F5267ED1BCD156D69700B131035F2A0EAA3BB13B328)

#### 比较快照差异

在“Snapshot”的“Comparison”页签中，以当前选择的快照为base，下拉框选择的快照为Target，即可得到两次快照信息的比较结果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a4/v3/eTHCXHpNQaC3knGG6nkS8A/zh-cn_image_0000002713399114.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=CAEFB5D53B6F10459BC0C2C4A6ADAC78C35110CEF2253F78DA4955B684B26118)

在“Snapshot”的“Comparison”页签中，可进行两次快照的差异比较，比较内容包括新增数、删除数、个数增量、分配大小、释放大小、大小增量等等。通过不断对比，可快速分析和定位内存问题的具体位置。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5a/v3/jZBbA2IZSd2KYz4tVn9m0A/zh-cn_image_0000002743078045.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=16C2AC3F14C66503D37CF75DE2376DD0D58B9389CED46530EFDF09B65F5B5601)

#### 引用链向最小引用距离展开

Snapshot分析支持一键向引用链最小的引用距离方向展开。系统会计算从GC roots垃圾收集器根到选定实例对象的最短路径（最短路径是指Distance逐渐-1的路径，最终抵达Distance = 1的结点），通过最短路径，能够清晰地看到该对象的句柄被哪些对象持有，快速定位问题产生的根源。

选择一个实例结点，底部搜索栏的Path to GC Root按钮成可单击状态。单击该按钮选择搜索模式并确认，系统会计算从GC roots到选定对象的最短路径，并在右侧区域展示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b8/v3/GgFMulizQBiOrRjITNh-Cw/zh-cn_image_0000002713559084.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=D7DA07CE34F3D3CE8F114D96050360ADA24C453102CAAB92B0E594C4397F6C6A)

目前支持单根路径搜索、指定数量的根路径搜索和展示所有根路径三种搜索模式，默认为单根搜索。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6f/v3/HoVboeOdTbOonQDTZE3Udg/zh-cn_image_0000002743197997.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=6C76C0BCFD518E0E29E998121DD6E183A04C1378000E5108A6352C94ECF4DB45)

设置完搜索模式后单击OK，右侧more区域会自动跳转至Shortest Paths页面展示搜索结果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/43/v3/Senmu4yCRy6OFYENn6DIqQ/zh-cn_image_0000002713399116.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=86AFB780C99499585A195BC23FD0039A8FBDAC7460E4C6305EA200B9FF0D62B1)

#### 线程视图

在“Snapshot”的“Thread”页签中，可以查看堆内存快照时刻各线程的栈帧及局部对象。

采用三级树形结构展示：第一层级：线程，第二层级：栈帧（显示方法名、源文件、行号），第三层级：局部对象。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b6/v3/v-27J8mzT7e4qQBezJx5tQ/zh-cn_image_0000002743078047.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=95A2E8B350DD279BA1CEF8720FC5E08476A0AE05DAF6D94FDA120402D33AB7CD)

#### 离线导入内存快照

DevEco Profiler支持离线导入内存快照功能，可导入一个或多个.cjheapdump文件。

您可以在DevEco Profiler主界面的“Create Session”区域中，单击“Open File”，导入.cjheapdump文件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cf/v3/nFHR74yaSviiqV9qUhJGYQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=2E9592B6E90EF732D43B55A43659F4E884B0960D4C2CDED599A86F728EDD5C57)

  * 导入的单个文件大小不超过512MB。
  * 批量导入的文件数量不超过10个。
  * .cjheapdump文件是应用发生Out of Memory现象时产生的原始内存文件。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c8/v3/LMDe1JyvTau5M7RqNEdc-Q/zh-cn_image_0000002713559086.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=2D304099B1D17D7414A67F79AE02793DCAFF01DE306F11C0B8AD262FA3EE019D)

导入后支持查看快照详情，详见Statistics页签；支持进行快照对比，详见Comparison页签；支持查看线程视图，详见Thread页签。
