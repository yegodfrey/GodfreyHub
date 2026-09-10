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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a7/v3/3Aq1FO13TQmqkEcxFrAThg/zh-cn_image_0000002743197999.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=6FB3651361FC8157D74A465D08568C34980EEDA8B3579D6E3187D4D41F3E06F9)

  2. 创建好模板后，点击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d0/v3/RC6UFIOpRjm87MNFvZd2hA/zh-cn_image_0000002743197973.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=1BC6EBED830ED7C4C1E4075A560B3A9B0B2A70F3E44053CCB2678C51C5260F39)即开始录制。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5/v3/t2BUEUHsTBa2HzBMKvKJnA/zh-cn_image_0000002713399118.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=A18C307AABF7EFF932552AC043D0601E0C6D069D2C108BB960B13F50E32B9DD9)

  3. 待右侧泳道全部显示recording后则表明正在录制中，此时点击下图中方块按钮或者左侧暂停按钮都可结束录制。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/06/v3/fdMfn9ZUSomT7jfOy7JHCQ/zh-cn_image_0000002743078049.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=45C6B0C9CA7506451FDAA3F6C274F85EB27EA76A549BD443946146A651814A4E)

  4. 拍摄快照：开始录制后，待右侧泳道全部显示recording后点击图中①处拍摄按钮，待②处显示出紫色条块表示快照拍摄完成。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f0/v3/luonTvkKSgCuQ1sT_f_l6A/zh-cn_image_0000002713559088.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=92C374B0CA47850542A16F11F332BF1187C9FE4C9804C5284F190CE1129473E9)

  5. 录制完成后可点击下图①处按钮将录制文件导出，而点击下图②处的按钮即可导入之前录制好的导出件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/27/v3/OHnU5KeQTmKscyIMKxvv4Q/zh-cn_image_0000002743198001.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=D14D2FFFFED6E781CB55B3737ACD7C95830F05F395A69896EF033DCCDFECCB35)




#### 分析Cangjie Heap

在每次拍摄堆快照之前，虚拟机都会触发GC，所以理论上堆快照内存在的对象都是当前虚拟机已经无法GC掉的对象。可以将两个堆快照进行比较，来查看哪些对象是在触发问题场景时新增了且不能释放的。切换到窗口下方详情区域的“Comparison”页签，将两次快照进行对比。图中数据的含义是以Snapshot2作为基准，Snapshot2对比Snapshot1的数据变化量。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d8/v3/-alp2VhiTf2I60f-Y4BnMw/zh-cn_image_0000002713399120.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=07714B463B561DE23C6BBFC07CB6B90B2896899C3619D9AE5AED719D39FBD6C1)

#### 分析Snapshot数据

#### [h2]分析方法

**查看对象名称**

对于声明对象，可以通过constructor属性来确定对象名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/84/v3/nhSHMQp9TISdn_cOaWm3hQ/zh-cn_image_0000002743078051.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=F81C51B254D9298AF7A81F2A6DEE929D1ED54EADB4E87E1C3EE833F7AC3424F5)
