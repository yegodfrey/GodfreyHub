---
name: document/cn/Tools-Guides/cpu-scheduling-events-0000001932090009
title: Scheduling details
uri: https://developer.huawei.com/consumer/cn/doc/Tools-Guides/cpu-scheduling-events-0000001932090009
---

# Scheduling details

允许获取细粒度的调度事件，例如：

* 在任意时间点哪个CPU核心上调度了哪些线程，精度为纳秒级。
* 正在运行的线程被取消调度的原因（例如，抢占、在互斥锁上阻塞、阻塞syscalls或阻塞任何其他等待队列）。
* 一个线程有资格被执行的时间点，即使它没有被立即放入任何CPU运行队列，以及使其可执行的源线程。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a3/v3/Snc8jZXGS4-xqGj-x-UOgg/zh-cn_image_0000001886130146.png?HW-CC-KV=V1&HW-CC-Date=20260909T164259Z&HW-CC-Expire=31536000000&HW-CC-Sign=2C7F0435CE65DCA94B1AE6A69C0ECF0C16AF48D569AF15B847199ECC4E8103D6)

## UI

UI将单个计划事件表示为切片。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/28/v3/2CGNFPd5Su6l4OMfcLJH_A/zh-cn_image_0000001886290074.png?HW-CC-KV=V1&HW-CC-Date=20260909T164259Z&HW-CC-Expire=31536000000&HW-CC-Sign=C3AB4DFBE4350312FB2A23CC2342EF48590D3522A1D8C3D287D99DD300C71AC7)

单击CPU切片可在详细信息面板中显示相关信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bb/v3/YProx50-TDmDj_EYdIuWkA/zh-cn_image_0000001932090013.png?HW-CC-KV=V1&HW-CC-Date=20260909T164259Z&HW-CC-Expire=31536000000&HW-CC-Sign=064D2F887BA8C9BE0A5BAFE82B7875FE4915247C31F29C783A095A1CC88ED387)

向下滚动，当展开单个进程时，调度事件也为每个线程创建一个轨迹，允许跟踪单个线程的状态演变。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a0/v3/6kd3ROBoRcCj0LtQ7g-piw/zh-cn_image_0000001886130150.png?HW-CC-KV=V1&HW-CC-Date=20260909T164259Z&HW-CC-Expire=31536000000&HW-CC-Sign=CA7880FF0C1579571DF43E1A46C746E2D3FA1E591B98FABCF22EEA5E1FDA4436)

## SQL

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/24/v3/dVyI9CXRTTWBzo1pLl43ww/zh-cn_image_0000001886290078.png?HW-CC-KV=V1&HW-CC-Date=20260909T164259Z&HW-CC-Expire=31536000000&HW-CC-Sign=00A6F8D6C94B0FF47C34BAFAF3FFB739BDF070857FABDA3F2688D0D1CA528A4E)

## TraceConfig

要收集此数据，请包含以下数据源。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/68/v3/5530pcvvQD6_PtM1B_jD4Q/zh-cn_image_0000001932090017.png?HW-CC-KV=V1&HW-CC-Date=20260909T164259Z&HW-CC-Expire=31536000000&HW-CC-Sign=702EF05549C15F1E04742106BB241A05B91C6C880C1D77C4F7BDE109245E687B "点击放大")

## 调度唤醒和延迟分析

通过在TraceConfig中进一步启用以下选项，ftrace数据源还将记录调度唤醒事件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ef/v3/QBVu3m7ESkaGxaY3J5yfCA/zh-cn_image_0000001886130158.png?HW-CC-KV=V1&HW-CC-Date=20260909T164259Z&HW-CC-Expire=31536000000&HW-CC-Sign=1B844462AE8A0E441301279D5A2136A72E74B79413BCEC72D5EF1762926C6151 "点击放大")

虽然sched_switch事件仅在线程处于R(unnable)状态并且正在CPU运行队列上运行时才会触发，但当任何事件导致线程状态改变时，都会触发sched_waking事件。

参考以下示例。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b1/v3/VRIusz1wTOyrS8gQ_vDbcg/zh-cn_image_0000001886290082.png?HW-CC-KV=V1&HW-CC-Date=20260909T164259Z&HW-CC-Expire=31536000000&HW-CC-Sign=A79F228F8BD365618925AFC2C03B212294F1FEBFB626048F1E231E44DC44401E "点击放大")

当线程A挂起wait()时，它将进入S(sleeping)状态，并从CPU运行队列中移除。当线程B通知变量时，内核会将线程A转变成R(unnable)状态。此时的线程A有资格被放回运行队列。但是，这可能有时不会发生，例如：所有CPU可能都忙于运行其他线程，线程A需要等待以获得分配的运行队列槽（或者其他线程具有更高的优先级）

除非使用实时线程优先级，否则大多数Linux内核调度器配置都不是严格的工作保护。例如，调度器可能更愿意等待当前CPU上运行的线程进入空闲状态，从而避免跨CPU迁移，这在开销和功耗方面可能会更昂贵。

sched_waking和sched_wakeup提供的信息几乎相同。区别在于跨CPU的唤醒事件，这涉及到处理器间的中断。前者在源CPU上发出，后者在目标CPU上发出。

当启用sched_waking事件，选择CPU切片时，UI中将显示以下内容。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/df/v3/11-F2cbkS8OVDg_Hbh-C9Q/zh-cn_image_0000001932090025.png?HW-CC-KV=V1&HW-CC-Date=20260909T164259Z&HW-CC-Expire=31536000000&HW-CC-Sign=6088078112CE38DC5FAB1DE0B22411095AC29385093C7413040BA0A8BAE6FCF5)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/08/v3/KIYaHA2BSJOjCAzzgdKrRw/zh-cn_image_0000001886130162.png?HW-CC-KV=V1&HW-CC-Date=20260909T164259Z&HW-CC-Expire=31536000000&HW-CC-Sign=5E689A0574DFB569A3C09685CE43D6551B4BA27705CCADBAA921E259FC453A94)

表中的每一行显示给定线程utid何时开始运行ts，在哪个内核上运行cpu，运行了多长时间dur，以及为什么停止运行：end_state。

end_state被编码为一个或多个ascii字符。UI使用以下将end_state翻译为可理解的文本。

|end_state|Translation|
|:--------|:--------------------|
|R|Runnable|
|R+|Runnable (Preempted)|
|S|Sleeping|
|D|Uninterruptible Sleep|
|T|Stopped|
|t|Traced|
|X|Exit (Dead)|
|Z|Exit (Zombie)|
|x|Task Dead|
|I|Idle|
|K|Wake Kill|
|W|Waking|
|P|Parked|
|N|No Load|

