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

1. 开始录制后观察**Memory** 泳道的内存使用情况，在需要定位的时刻单击任务左上角的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9a/v3/1iuoOgHtRpGDKJ9DsXCuyA/zh-cn_image_0000002731381907.png?HW-CC-KV=V1&HW-CC-Date=20260915T011704Z&HW-CC-Expire=31536000000&HW-CC-Sign=F57B0E89A58BDC70A84FD6588128A0E134CA2F88FBE006169FEC8C8F64FEB8F2 "点击放大")启动一次快照，一次快照完成后会在**ArkUI Snapshot**泳道出现紫色区块。

   **Details** 区域显示当前快照的详细信息，点击**Open** ，将在[ArkUI Inspector](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-arkui-inspector)中打开相应的.arkli文件。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/81/v3/5Yxu277bQW-S9nN2SI2oyQ/zh-cn_image_0000002701822608.png?HW-CC-KV=V1&HW-CC-Date=20260915T011704Z&HW-CC-Expire=31536000000&HW-CC-Sign=499FFA81F3BCA581BE56CD228590E8929A4ED8B4AFDB227E640EF5764BB8662E "点击放大")

2. 在ArkUI Inspector中查看组件树。26.0.0版本新增Show Free-Node Components。

   默认勾选**Show Component Size** 和**Show Free-Node Components** ，Show Component Size显示各组件的内存占用情况，Show Free-Node Components显示游离组件（未在组件树上的组件）。点击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e5/v3/AwrPPu2yR0S6w8zACxapiA/zh-cn_image_0000002731381913.png?HW-CC-KV=V1&HW-CC-Date=20260915T011704Z&HW-CC-Expire=31536000000&HW-CC-Sign=B59660612B11044C877698DAD36265C24574F35F78180F03F054F8B5B036A42E "点击放大")，勾选**Show Recursive Size**，显示各组件为根的子树的内存占用情况。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4d/v3/HntLFHAsTMGCJBkO-7kn4Q/zh-cn_image_0000002701662696.png?HW-CC-KV=V1&HW-CC-Date=20260915T011704Z&HW-CC-Expire=31536000000&HW-CC-Sign=36536910ED6B235D13363988EF2A9CECDA56F52DA4E3FE1EE8C697EA92A622E1)

3. 在ArkUI Inspector中查看组件的信息。

   * 在ArkUI Inspector的**Memory** >**Statistics** 中，查看组件的内存统计信息。
     * Current：当前组件ArkTS内存和Native内存的占用情况。
     * ArkTS：当前组件对应的ArkTS堆快照对象的[Retained Size](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-snapshot-basic-operations#li1323381634912)。
     * Native：当前组件新增占用的Native内存。
     * Subtree：当前组件及其子组件的Current内存之和。
     * nativeCount：当前组件存活的Native分配内存个数。
     * arktsCount：当前组件的ArkTS堆快照对象个数。
     * recursive：递归统计信息。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d8/v3/lCQFqOABTPKNKz7589jjaA/zh-cn_image_0000002701662692.png?HW-CC-KV=V1&HW-CC-Date=20260915T011704Z&HW-CC-Expire=31536000000&HW-CC-Sign=DF3646A6E150DF6A2AEB739109C4C443BED38718E5F3A11A1DFB879041071E66 "点击放大")
   * 在ArkUI Inspector的**Memory** > **Details** 中，点击Details中任一项后，打开DevEco Profiler查看显示组件的详情。
     * ShowAllocationDetail：显示当前组件的Allocation详情。
     * ShowSnapshotDetail：显示当前组件的Snapshot详情，系统组件不显示该项。
     * ShowRecursiveAllocationDetail：显示当前组件及其子组件的Allocation详情。
     * ShowRecursiveSnapshotDetail：显示当前组件及其子组件的Snapshot详情。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bb/v3/hl0eS1oQSPih5nTUXRNMtg/zh-cn_image_0000002701822612.png?HW-CC-KV=V1&HW-CC-Date=20260915T011704Z&HW-CC-Expire=31536000000&HW-CC-Sign=B1CA230CD9BFA216BD9CBF3B6B27E3B686558D0C92E031C9108BD9C263D99CB9 "点击放大")
   * 在ArkUI Inspector的**Memory** >**State** **s** 中，查看UI组件的状态变量内存。

     memory字段表示该状态变量在对应组件的ArkTS堆快照中的Retained Size，更多请参考[查看UI组件的状态变量](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-arkui-inspector#section19923158103412)。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/60/v3/v-KCSNPpQRucxDDygcwR2A/zh-cn_image_0000002731541881.png?HW-CC-KV=V1&HW-CC-Date=20260915T011704Z&HW-CC-Expire=31536000000&HW-CC-Sign=D5A377F60F4756338E727EFCAD53AAE2B2587C2B4FB3DCB4DF05DCC3E0045EB6)

4. 在中间栏点击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/19/v3/xKq6VqxoQky7NYikHJvFOg/zh-cn_image_0000002701662688.png?HW-CC-KV=V1&HW-CC-Date=20260915T011704Z&HW-CC-Expire=31536000000&HW-CC-Sign=0947E949BAF0DF1394ED7C9560890FB5FA82EDB9264825945FD12EBD28D0267E)可以将包含内存信息的组件树快照导出到本地。

## .arkli文件对比

从26.0.0版本开始，支持对比.arkli文件，通过对比快速定位异常增多的组件。

1. 开始录制后观察**Memory** 泳道的内存使用情况，在需要定位的时刻单击任务左上角的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d8/v3/jKvmqT7kTqWhxJnZrA_g1w/zh-cn_image_0000002701822616.png?HW-CC-KV=V1&HW-CC-Date=20260915T011704Z&HW-CC-Expire=31536000000&HW-CC-Sign=BB8F6D0E57D698C7CCE404F0682B3F7DDD3A893FD8BC509813E7A3AF8A04D6A4 "点击放大")启动一次快照，一次快照完成后会在**ArkUI Snapshot**泳道出现紫色区块。

   **Details** 区域显示当前快照的详细信息，点击**Open** ，将在[ArkUI Inspector](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-arkui-inspector)中打开相应的.arkli文件。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e3/v3/wSnHjp0eSP6bOB4Wk4M2Bg/zh-cn_image_0000002731541889.png?HW-CC-KV=V1&HW-CC-Date=20260915T011704Z&HW-CC-Expire=31536000000&HW-CC-Sign=C947EAF875BFEBB48B5080AADA8DE1340E4575ED8CC45776D2557E15D4072676 "点击放大")

2. 当前打开的.arkli文件作为base文件，在Component Tree下拉框选择的.arkli文件作为Target文件，查看两个.arkli文件的比较结果，从比较结果可查看：新增组件（绿色，如Column）、删除组件（红色，如NavBar）、游离组件（灰色，如JsView），及其子组件新增（绿色，如+1576）和删除个数（红色，如-8）。点击异常增多的组件，在右侧属性面板展示组件所在代码文件，点击可跳转至具体代码。

   > 说明
   >
   > Target文件需要先点击**Open**按钮在ArkUI Inspector中打开，否则在下拉框中选不到。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f6/v3/DhC47HH2RryjOZKw8lmiCQ/zh-cn_image_0000002731541885.png?HW-CC-KV=V1&HW-CC-Date=20260915T011704Z&HW-CC-Expire=31536000000&HW-CC-Sign=6732D2965803334E5842F3FA08AE951CA25C839E3A1B7E246B292BB972C8EA00)

