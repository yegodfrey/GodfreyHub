---
name: document/cn/harmonyos-guides/ide-commemory
title: UI组件内存：ComMemory分析
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-commemory
---

# UI组件内存：ComMemory分析

## 功能介绍

从DevEco Studio 6.1.1 Beta1版本开始，DevEco Profiler新增ComMemory模板，可以分析UI界面各组件内存的分配情况，帮助定位UI组件内存泄漏问题。

ComMemory模板支持的泳道包括：Memory、ArkUI Snapshot、ArkTS Snapshot、All Heap & Anonymous VM、All Heap、All Anonymous VM、System Resources、Graphic Memory。本文介绍ArkUI Snapshot泳道，其他泳道的详细信息请参考对应模板内容。

* Memory、All Heap & Anonymous VM、All Heap、All Anonymous VM、System Resources、Graphic Memory泳道的介绍请参考[基础内存：Allocation分析](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-insight-session-allocations)。
* ArkTS Snapshot泳道的介绍请参考[内存泄漏：Snapshot分析](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-insight-session-snapshot)。

> 说明
>
> 任务分析前，需创建ComMemory分析任务并录制相关数据，操作方法可参考[性能问题定位：深度录制](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/deep-recording)，或在[会话区](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-profiler-session)选择**Open File**，导入历史数据。

## 查看组件树和组件信息

1. 开始录制后观察**Memory** 泳道的内存使用情况，在需要定位的时刻单击任务左上角的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/69/v3/9dsj1rW2TdqemtWrtv1bug/zh-cn_image_0000002731381907.png?HW-CC-KV=V1&HW-CC-Date=20261010T073008Z&HW-CC-Expire=31536000000&HW-CC-Sign=FB6D3FF128304F186DE77EDA82C5395D3FF5F113E9867BED76B4B379F8B682CF "点击放大")启动一次快照，一次快照完成后会在**ArkUI Snapshot**泳道出现紫色区块。

   **Details** 区域显示当前快照的详细信息，点击**Open** ，将在[ArkUI Inspector](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-arkui-inspector)中打开相应的.arkli文件。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/db/v3/MoLU5hJARiCLRI_1EmQFaA/zh-cn_image_0000002701822608.png?HW-CC-KV=V1&HW-CC-Date=20261010T073008Z&HW-CC-Expire=31536000000&HW-CC-Sign=1B23752B96827311D560EF534961E2052A54A4187993465A609583AB42A13986 "点击放大")

2. 在ArkUI Inspector中查看组件树。26.0.0版本新增Show Free-Node Components。

   默认勾选**Show Component Size** 和**Show Free-Node Components** ，Show Component Size显示各组件的内存占用情况，Show Free-Node Components显示游离组件（未在组件树上的组件）。点击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2d/v3/OAyGH8XhTma3TN-uZdbY8w/zh-cn_image_0000002731381913.png?HW-CC-KV=V1&HW-CC-Date=20261010T073008Z&HW-CC-Expire=31536000000&HW-CC-Sign=AD32576981BE2A9D73643754791DCE61E0A950894A6A3057045E6EFD423D9FB0 "点击放大")，勾选**Show Recursive Size**，显示各组件为根的子树的内存占用情况。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9f/v3/LLEHqPWvROiCLQlVj2gh8g/zh-cn_image_0000002701662696.png?HW-CC-KV=V1&HW-CC-Date=20261010T073008Z&HW-CC-Expire=31536000000&HW-CC-Sign=DBAF5AA22F5018B6AF2FEF2689D453C0C9F1EC35BDB98772280603968A80B0F3)

3. 在ArkUI Inspector中查看组件的信息。

   * 在ArkUI Inspector的**Memory** >**Statistics** 中，查看组件的内存统计信息。
     * Current：当前组件ArkTS内存和Native内存的占用情况。
     * ArkTS：当前组件对应的ArkTS堆快照对象的[Retained Size](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-snapshot-basic-operations#li1323381634912)。
     * Native：当前组件新增占用的Native内存。
     * Subtree：当前组件及其子组件的Current内存之和。
     * nativeCount：当前组件存活的Native分配内存个数。
     * arktsCount：当前组件的ArkTS堆快照对象个数。
     * recursive：递归统计信息。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3c/v3/vngM9yMDRtqcLjWOdCBmnA/zh-cn_image_0000002701662692.png?HW-CC-KV=V1&HW-CC-Date=20261010T073008Z&HW-CC-Expire=31536000000&HW-CC-Sign=F7FA931FF6E6C85F460B754794B8A19FE740478568EFBF820421BD5A41405735 "点击放大")
   * 在ArkUI Inspector的**Memory** > **Details** 中，点击Details中任一项后，打开DevEco Profiler查看显示组件的详情。
     * ShowAllocationDetail：显示当前组件的Allocation详情。
     * ShowSnapshotDetail：显示当前组件的Snapshot详情，系统组件不显示该项。
     * ShowRecursiveAllocationDetail：显示当前组件及其子组件的Allocation详情。
     * ShowRecursiveSnapshotDetail：显示当前组件及其子组件的Snapshot详情。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d7/v3/lWyIBiTGROGly5Y7Lbbtig/zh-cn_image_0000002701822612.png?HW-CC-KV=V1&HW-CC-Date=20261010T073008Z&HW-CC-Expire=31536000000&HW-CC-Sign=F91123D744E11F9C069E4A2E4CC9A617D8E30BE3576CEEC21550405245766742 "点击放大")
   * 在ArkUI Inspector的**Memory** >**State** **s** 中，查看UI组件的状态变量内存。

     memory字段表示该状态变量在对应组件的ArkTS堆快照中的Retained Size，更多请参考[查看UI组件的状态变量](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-arkui-inspector#section19923158103412)。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/21/v3/DKkcqaWmQU2k5jS_tY3bGQ/zh-cn_image_0000002731541881.png?HW-CC-KV=V1&HW-CC-Date=20261010T073008Z&HW-CC-Expire=31536000000&HW-CC-Sign=7391C415BB18F1B6A9FD155007CD708EACAC88030CEA4B6B77BA4F78876A8534)

4. 在中间栏点击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1e/v3/34ef3EmDRq-JnxHxv025gg/zh-cn_image_0000002701662688.png?HW-CC-KV=V1&HW-CC-Date=20261010T073008Z&HW-CC-Expire=31536000000&HW-CC-Sign=4C80C8F1324B4978995FCE25391B900A3B900BA4C323F24A79F609EB448ECC92)可以将包含内存信息的组件树快照导出到本地。

## .arkli文件对比

从26.0.0版本开始，支持对比.arkli文件，通过对比快速定位异常增多的组件。

1. 开始录制后观察**Memory** 泳道的内存使用情况，在需要定位的时刻单击任务左上角的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/eb/v3/J6DjPyv0QfykK-oJRt1kQg/zh-cn_image_0000002701822616.png?HW-CC-KV=V1&HW-CC-Date=20261010T073008Z&HW-CC-Expire=31536000000&HW-CC-Sign=43B2E1A20ACCA01A9A18A5EE6FE705B47ABE6A83651D89CB39A4A67118B30DB9 "点击放大")启动一次快照，一次快照完成后会在**ArkUI Snapshot**泳道出现紫色区块。

   **Details** 区域显示当前快照的详细信息，点击**Open** ，将在[ArkUI Inspector](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-arkui-inspector)中打开相应的.arkli文件。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/22/v3/kxbZWDBHQUyANXr3KnkK7g/zh-cn_image_0000002731541889.png?HW-CC-KV=V1&HW-CC-Date=20261010T073008Z&HW-CC-Expire=31536000000&HW-CC-Sign=B14DF8578379B8FC7C6280D229071BBFBA142CB5A957A06383519889168ED54B "点击放大")

2. 当前打开的.arkli文件作为base文件，在Component Tree下拉框选择的.arkli文件作为Target文件，查看两个.arkli文件的比较结果，从比较结果可查看：新增组件（绿色，如Column）、删除组件（红色，如NavBar）、游离组件（灰色，如JsView），及其子组件新增（绿色，如+1576）和删除个数（红色，如-8）。点击异常增多的组件，在右侧属性面板展示组件所在代码文件，点击可跳转至具体代码。

   > 说明
   >
   > Target文件需要先点击**Open**按钮在ArkUI Inspector中打开，否则在下拉框中选不到。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3d/v3/gzsYpFMJSciz29abZcHFPQ/zh-cn_image_0000002731541885.png?HW-CC-KV=V1&HW-CC-Date=20261010T073008Z&HW-CC-Expire=31536000000&HW-CC-Sign=87D5FBF3D628EFF4820FEE73DEAD79EDF967C6EDBCE0CE39E7BF927D989EA5F3)

