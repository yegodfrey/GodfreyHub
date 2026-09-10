---
name: cangjie-guides/cj-insight-snapshot-memory-leak-analysis
title: Cangjie内存泄露分析
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-snapshot-memory-leak-analysis
nodePath: 优化应用性能 / 内存泄漏分析：Snapshot分析 / Cangjie内存泄露分析
---

# Cangjie内存泄露分析

#### 分析步骤

分析内存泄漏问题步骤如下：

  1. 在内存泄漏前拍摄快照；
  2. 触发内存泄漏操作后，再次拍摄快照；
  3. 对比两次快照的数据，可快速找到泄漏对象并做进一步分析；
  4. 当有多个对象在比较视图都存在时，可以重复多次步骤2的操作，分别和未进行操作时对比，观察是否有对象出现明显的线性变化趋势，进一步缩小泄漏对象的范围。



#### 录制Snapshot模板数据

  1. 连接好设备后启动应用，点击应用选择框选择需要录制的应用，选择**Snapshot** 模板，点击**Create Session** 或双击Snapshot图标即可创建一个Snapshot的录制模板。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ba/v3/jUCxLVU4RlOQ-b5E4s_zkA/zh-cn_image_0000002701819722.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=ED4BB1435E8B197E72AB7F90D62749FA88695BB088AEFAFADDCA438F44E7D1FA)

  2. 创建好模板后，点击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ab/v3/wRA-ke1UR3yEU1Su45PJ1Q/zh-cn_image_0000002701819696.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=EEEB270BD844E142CD56D80927049D509FBCA01F78CBB2D4CAEF9A9518A22ECB)即开始录制。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/16/v3/M6QZYVxMTDGaXZ3MRf5vPg/zh-cn_image_0000002731539001.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=2F62EFF2620C6B1A6581BA4C4E613F0A54724806B06D7B49FA73160C907A311F)

  3. 待右侧泳道全部显示recording后则表明正在录制中，此时点击下图中方块按钮或者左侧暂停按钮都可结束录制。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/52/v3/2wOEhtKDSCq5iywjpsXsTQ/zh-cn_image_0000002701659812.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=16591050AA3F96DD18D71D1AF2E6ECDB6F58340A349CBD16B9EF676E4296B739)

  4. 拍摄快照：开始录制后，待右侧泳道全部显示recording后点击图中①处拍摄按钮，待②处显示出紫色条块表示快照拍摄完成。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e9/v3/P0pEGphiTTSuC8PwG5Gsug/zh-cn_image_0000002731379027.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=8EBC705FCA3FF89BB73D7C252E9EB898F6FDE80E6FFC5A4DA3C8121F9873202E)

  5. 录制完成后可点击下图①处按钮将录制文件导出，而点击下图②处的按钮即可导入之前录制好的导出件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/59/v3/Y3tB-FgUQjOGh8ZYPaUvYQ/zh-cn_image_0000002701819724.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=8E34DE89FC02EA6CF460BD1BC3014EE3B935AF97081D98DA83427385F3683D34)




#### 分析Cangjie Heap

在每次拍摄堆快照之前，虚拟机都会触发GC，所以理论上堆快照内存在的对象都是当前虚拟机已经无法GC掉的对象。可以将两个堆快照进行比较，来查看哪些对象是在触发问题场景时新增了且不能释放的。切换到窗口下方详情区域的“Comparison”页签，将两次快照进行对比。图中数据的含义是以Snapshot2作为基准，Snapshot2对比Snapshot1的数据变化量。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8e/v3/GiV9XxnMSXqbNGYyQXTnMg/zh-cn_image_0000002731539003.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=08036EA194F6EA42E95B5DCC7D1ED3E555DB779A9AFF9490820AF30B5ADA3728)

#### 分析Snapshot数据

#### [h2]分析方法

**查看对象名称**

对于声明对象，可以通过constructor属性来确定对象名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ab/v3/rONiR1rXTuSBgzTY-LLE9g/zh-cn_image_0000002701659814.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=C54747A63D8B2771B9BDC4A15F106DDFA8A0BA42E1FEFAC09A270C7B8DD96FF3)
