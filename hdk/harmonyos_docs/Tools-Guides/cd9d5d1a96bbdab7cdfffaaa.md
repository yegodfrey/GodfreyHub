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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a3/v3/Snc8jZXGS4-xqGj-x-UOgg/zh-cn_image_0000001886130146.png?HW-CC-KV=V1&HW-CC-Date=20261008T174133Z&HW-CC-Expire=31536000000&HW-CC-Sign=76A81E2F40ADAFFB000B405EBA88153486159C59D893749E1DB68926D54A911F)

## UI

UI将单个计划事件表示为切片。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/28/v3/2CGNFPd5Su6l4OMfcLJH_A/zh-cn_image_0000001886290074.png?HW-CC-KV=V1&HW-CC-Date=20261008T174133Z&HW-CC-Expire=31536000000&HW-CC-Sign=440570287FDFF26B20E63E10B5D84DE7B7BB6F3D7396539C03D334705B6E11F7)

单击CPU切片可在详细信息面板中显示相关信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bb/v3/YProx50-TDmDj_EYdIuWkA/zh-cn_image_0000001932090013.png?HW-CC-KV=V1&HW-CC-Date=20261008T174133Z&HW-CC-Expire=31536000000&HW-CC-Sign=833879281ECF692172664E588E4263A7A8FDBF2E90B50A169F2D29E81896FDBC)

向下滚动，当展开单个进程时，调度事件也为每个线程创建一个轨迹，允许跟踪单个线程的状态演变。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a0/v3/6kd3ROBoRcCj0LtQ7g-piw/zh-cn_image_0000001886130150.png?HW-CC-KV=V1&HW-CC-Date=20261008T174133Z&HW-CC-Expire=31536000000&HW-CC-Sign=DEAE5A5DF953047003A3AF6A5EA333F49E85E937BAB1A95AA609232C96816394)

## SQL

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/24/v3/dVyI9CXRTTWBzo1pLl43ww/zh-cn_image_0000001886290078.png?HW-CC-KV=V1&HW-CC-Date=20261008T174133Z&HW-CC-Expire=31536000000&HW-CC-Sign=1D4EFC154C3FBD2EB417E84FF8386E823A5B3DEF81D21AD2881258A9D4F19AEE)

## TraceConfig

要收集此数据，请包含以下数据源。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/68/v3/5530pcvvQD6_PtM1B_jD4Q/zh-cn_image_0000001932090017.png?HW-CC-KV=V1&HW-CC-Date=20261008T174133Z&HW-CC-Expire=31536000000&HW-CC-Sign=A7FB146439EE9B07CC9CD8B2072EA733A18DB80A75D78E5E2782B180782FA68F "点击放大")

## 调度唤醒和延迟分析

通过在TraceConfig中进一步启用以下选项，ftrace数据源还将记录调度唤醒事件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ef/v3/QBVu3m7ESkaGxaY3J5yfCA/zh-cn_image_0000001886130158.png?HW-CC-KV=V1&HW-CC-Date=20261008T174133Z&HW-CC-Expire=31536000000&HW-CC-Sign=D35348132D6F0CB3677D95F16B6CBE8D25332189AEC2E6593AB002EE2D8A189E "点击放大")

虽然sched_switch事件仅在线程处于R(unnable)状态并且正在CPU运行队列上运行时才会触发，但当任何事件导致线程状态改变时，都会触发sched_waking事件。

参考以下示例。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b1/v3/VRIusz1wTOyrS8gQ_vDbcg/zh-cn_image_0000001886290082.png?HW-CC-KV=V1&HW-CC-Date=20261008T174133Z&HW-CC-Expire=31536000000&HW-CC-Sign=275A5532F88B5C6B5750B24EA1EFC8C0DE4A6DD570FC85D87153EEB1BB298348 "点击放大")

当线程A挂起wait()时，它将进入S(sleeping)状态，并从CPU运行队列中移除。当线程B通知变量时，内核会将线程A转变成R(unnable)状态。此时的线程A有资格被放回运行队列。但是，这可能有时不会发生，例如：所有CPU可能都忙于运行其他线程，线程A需要等待以获得分配的运行队列槽（或者其他线程具有更高的优先级）

除非使用实时线程优先级，否则大多数Linux内核调度器配置都不是严格的工作保护。例如，调度器可能更愿意等待当前CPU上运行的线程进入空闲状态，从而避免跨CPU迁移，这在开销和功耗方面可能会更昂贵。

sched_waking和sched_wakeup提供的信息几乎相同。区别在于跨CPU的唤醒事件，这涉及到处理器间的中断。前者在源CPU上发出，后者在目标CPU上发出。

当启用sched_waking事件，选择CPU切片时，UI中将显示以下内容。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/df/v3/11-F2cbkS8OVDg_Hbh-C9Q/zh-cn_image_0000001932090025.png?HW-CC-KV=V1&HW-CC-Date=20261008T174133Z&HW-CC-Expire=31536000000&HW-CC-Sign=C76E3BE9FE6A90C04A67FFC6031180A409B2E95DE0ADF915C156D537DD2BA9D8)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/08/v3/KIYaHA2BSJOjCAzzgdKrRw/zh-cn_image_0000001886130162.png?HW-CC-KV=V1&HW-CC-Date=20261008T174133Z&HW-CC-Expire=31536000000&HW-CC-Sign=899CB7299286C3190DD06AFBD294A9C0ED5889BB7E9ECF23B681AC7D1113E146)

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

