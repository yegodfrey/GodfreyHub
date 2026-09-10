---
name: cangjie-guides/cj-insight-concurrency
title: 并行并发：Concurrency分析
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-concurrency
nodePath: 优化应用性能 / 并行并发：Concurrency分析
---

# 并行并发：Concurrency分析

任务池（TaskPool）是为应用程序提供一个多线程的运行环境，降低整体资源的消耗、提高系统的整体性能，且无需关心线程实例的生命周期。开发者可以使用任务池API创建后台任务（Task），并对所创建的任务进行如任务执行、任务取消的操作。

DevEco Profiler提供的Concurrency场景分析能力，帮助开发者针对并行并发场景，录制并行并发关键数据，分析Task的生命周期、吞吐量、耗时等性能问题。Concurrency模板支持展示CJThread、ArkTS异步接口、NAPI异步接口、FFRT并发模型相关信息，并集成CJ Callstack、ArkTS Callstack、Callstack、Process信息，支持开发者从Task生命周期关联到具体调用栈信息，方便开发者定位并行并发性能问题。

#### 查看Task统计信息

  1. 选择展开某个泳道，可以用options下拉框筛选不同进程。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d2/v3/ZwGQjNLKS3qEbgfZjN3jqQ/zh-cn_image_0000002743198027.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=960AFC0C81FD3945FB585CEA71B6FC118F37DE216B567E85A930CB2576D2F24B)

  2. 框选某段时间范围，详情区会出现该时段内，泳道对应执行状态下，并行并发任务的统计信息。

  3. 点击Task Name的跳转按钮可跳转到对应的Task泳道。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a5/v3/uxxVTzOlSOOGaIvy1qNB3A/zh-cn_image_0000002713399146.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=7FC3CF845D95B85E24F2304E2A7AB65E7E857FCE6C01ADB76AFC4456E0349D7D)




#### 查看某一个Task的所有状态

  1. 选择展开某个泳道，可以用options下拉框筛选不同进程。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f5/v3/FCW7YqsvSVq_fZrnAy2RCg/zh-cn_image_0000002743078077.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=35B8300AFD12222DE051228D9F4B1D579B71D7E4142AE88182FEA469B8B45644)

  2. 框选某段时间范围，可以看到该Task在框选时间范围内的任务状态。

  3. 点击Task Name的跳转按钮可跳转到对应线程的泳道，可查看在该Task执行时间范围内，trace文件的打点信息，反映的是线程该时段内的函数执行情况。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/11/v3/Ix3AugdORASe9UPjheYK0A/zh-cn_image_0000002713559116.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=F3ACDF8B189F0A00A0B873064D9A29FEEF32E70268CF1FD47E97E5B9F4511159)




#### 查看某一个Cangjie Thread的状态

  1. 选择展开某个泳道，可以用options下拉框筛选不同进程。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f1/v3/rOs6iynST5ysJqMViXHkrQ/zh-cn_image_0000002743198029.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=11DAFCF5DFD4A6604947BF485500DE6EB08F76E84716FC79B86DF9E9A2A5B5C3)

  2. 框选某段时间范围，可以看到该Thread在框选时间范围内的任务状态。

  3. 点击Thread Name的跳转按钮可跳转到对应线程的泳道，可查看在该Thread执行时间范围内，trace文件的打点信息，反映的是线程该时段内的函数执行情况。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e7/v3/HUMHlGRnS8mRG8Ug8TIxaQ/zh-cn_image_0000002713399148.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=40BFC23B1869F89CE06EB1B3B9B46B87842051B2E3B354C70F86007E516BA976)




#### 查看Task的某个状态

点击Task子泳道的某个执行节点，Details详情区里会出现task在该状态下的详细信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2e/v3/HqdR-BJ1QPiWtviNhCjJKw/zh-cn_image_0000002743078079.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=B4410D4B4EBCFE1E7B58BF665B194F8871D1C973AEBDC2C5682CA5F0283D75AC)
