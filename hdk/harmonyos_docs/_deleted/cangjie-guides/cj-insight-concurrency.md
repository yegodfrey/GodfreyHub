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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4/v3/d3qdyPdeRlOAKkCZQaol7Q/zh-cn_image_0000002701819750.png?HW-CC-KV=V1&HW-CC-Date=20260903T111624Z&HW-CC-Expire=86400&HW-CC-Sign=8AC1B2E8C974AA7729F25E844F033100F5DB73DBDD23D26199CB1A6487038FF6)

  2. 框选某段时间范围，详情区会出现该时段内，泳道对应执行状态下，并行并发任务的统计信息。

  3. 点击Task Name的跳转按钮可跳转到对应的Task泳道。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7c/v3/ZM3o84tYTdidZXOT5fIn_g/zh-cn_image_0000002731539029.png?HW-CC-KV=V1&HW-CC-Date=20260903T111624Z&HW-CC-Expire=86400&HW-CC-Sign=D66E23FB147F106A0EEEC8C629B1BD05FC7FCEA31B402FE3B8358D67087FDBAA)




#### 查看某一个Task的所有状态

  1. 选择展开某个泳道，可以用options下拉框筛选不同进程。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4a/v3/8lyeN69ITei57lsphlteIw/zh-cn_image_0000002701659840.png?HW-CC-KV=V1&HW-CC-Date=20260903T111624Z&HW-CC-Expire=86400&HW-CC-Sign=37C90A2324A5D5D491247170D075A8223E0A91E5F52F67C77794114473746032)

  2. 框选某段时间范围，可以看到该Task在框选时间范围内的任务状态。

  3. 点击Task Name的跳转按钮可跳转到对应线程的泳道，可查看在该Task执行时间范围内，trace文件的打点信息，反映的是线程该时段内的函数执行情况。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/89/v3/W1MScPt7RlGK_W_N1yeRxw/zh-cn_image_0000002731379055.png?HW-CC-KV=V1&HW-CC-Date=20260903T111624Z&HW-CC-Expire=86400&HW-CC-Sign=BB19049697911BE089D06D7C190991BDE4668EFAD4A63328A49DCF17CE3CEDFF)




#### 查看某一个Cangjie Thread的状态

  1. 选择展开某个泳道，可以用options下拉框筛选不同进程。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/df/v3/3qhT-j2rQfmtJwx0_unY1g/zh-cn_image_0000002701819752.png?HW-CC-KV=V1&HW-CC-Date=20260903T111624Z&HW-CC-Expire=86400&HW-CC-Sign=96FF935C8447C806020CBE5DEB2BED545F888B23235A159685E56EF6A2BDC2C8)

  2. 框选某段时间范围，可以看到该Thread在框选时间范围内的任务状态。

  3. 点击Thread Name的跳转按钮可跳转到对应线程的泳道，可查看在该Thread执行时间范围内，trace文件的打点信息，反映的是线程该时段内的函数执行情况。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/71/v3/1bgcan8wRxC7UqdZ_Jaqvg/zh-cn_image_0000002731539031.png?HW-CC-KV=V1&HW-CC-Date=20260903T111624Z&HW-CC-Expire=86400&HW-CC-Sign=6AF36FDFBDBB52B3E65F9D68B2B190561D4231C2BEE19486A8286E44F51B4244)




#### 查看Task的某个状态

点击Task子泳道的某个执行节点，Details详情区里会出现task在该状态下的详细信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/40/v3/UpmknggAR3uQyAsO06f0Tw/zh-cn_image_0000002701659842.png?HW-CC-KV=V1&HW-CC-Date=20260903T111624Z&HW-CC-Expire=86400&HW-CC-Sign=877E70EAE6BD0D5B6124A187209FD717F3D77F1CBBC4F33697C7057C59965DA5)
