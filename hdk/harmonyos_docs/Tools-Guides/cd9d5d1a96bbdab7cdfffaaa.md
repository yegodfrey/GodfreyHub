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

![](https://media:201778750896112296)  

#### UI

UI将单个计划事件表示为切片。

![](https://media:201778750896138297)

单击CPU切片可在详细信息面板中显示相关信息。

![](https://media:201778750896169298)

向下滚动，当展开单个进程时，调度事件也为每个线程创建一个轨迹，允许跟踪单个线程的状态演变。

![](https://media:201778750896202299)  

#### SQL

![](https://media:201778750896239300)  

#### TraceConfig

要收集此数据，请包含以下数据源。

![](https://media:201778750896268301 "点击放大")  

#### 调度唤醒和延迟分析

通过在TraceConfig中进一步启用以下选项，ftrace数据源还将记录调度唤醒事件。

![](https://media:201778750896294302 "点击放大")

虽然sched_switch事件仅在线程处于R(unnable)状态并且正在CPU运行队列上运行时才会触发，但当任何事件导致线程状态改变时，都会触发sched_waking事件。

参考以下示例。

![](https://media:201778750896326303 "点击放大")

当线程A挂起wait()时，它将进入S(sleeping)状态，并从CPU运行队列中移除。当线程B通知变量时，内核会将线程A转变成R(unnable)状态。此时的线程A有资格被放回运行队列。但是，这可能有时不会发生，例如：所有CPU可能都忙于运行其他线程，线程A需要等待以获得分配的运行队列槽（或者其他线程具有更高的优先级）

除非使用实时线程优先级，否则大多数Linux内核调度器配置都不是严格的工作保护。例如，调度器可能更愿意等待当前CPU上运行的线程进入空闲状态，从而避免跨CPU迁移，这在开销和功耗方面可能会更昂贵。

sched_waking和sched_wakeup提供的信息几乎相同。区别在于跨CPU的唤醒事件，这涉及到处理器间的中断。前者在源CPU上发出，后者在目标CPU上发出。

当启用sched_waking事件，选择CPU切片时，UI中将显示以下内容。

![](https://media:201778750896364304)

![](https://media:201778750896391305)

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

