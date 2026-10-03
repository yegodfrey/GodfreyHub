---
name: document/cn/harmonyos-faqs/faqs-performance-13
title: 滑动浏览长图时有卡顿的情况
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-performance-13
---

# 滑动浏览长图时有卡顿的情况

## 问题现象

滑动操作浏览长图时，滑动过程十分卡顿，有阻塞感。

## 背景知识

* 刷新频率：每秒钟屏幕会刷新的次数，如120Hz是一秒内刷新120次，周期8.33ms。
* [Profiler Frame](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-insight-session-frame)：DevEco Profiler是DevEco Studio提供的场景化调优工具，其中Frame可以帮助开发者深度分析性能问题，通过录制应用运行过程中的关键数据，从而识别卡顿丢帧、耗时长等问题的原因所在。
* [PanGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pangesture)为滑动手势事件接口，应用通过其监听用户在页面内容上的滑动操作，当滑动的最小距离达到设定的最小值时会触发滑动手势事件，应用收到该事件后会执行相应的业务流程。

## 问题定位

1. 查看帧率信息。 首先查看屏幕刷新率，Frame泳道下的Display Vsync子泳道会显示对应时间段的屏幕刷新率，支持对框选的时间段内的vsync进行分布统计，如下图中，屏幕刷新率为119Hz。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f3/v3/MmKZzl8yT3aQp9olGLYpAA/zh-cn_image_0000002658914329.png?HW-CC-KV=V1&HW-CC-Date=20260920T112701Z&HW-CC-Expire=31536000000&HW-CC-Sign=9C73FFE8B9E12CC70009B38D7EB2B02574B22705D3950C354F711DE3635E65BE "点击放大")

   然后查看应用主线程请求绘制渲染的周期，Trace中找到应用包名的泳道，通过H:SendCommands关键字查看应用发送的渲染请求，其中相邻的两个transactionFlag的时间间距，就是主线程请求绘制渲染的周期。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7e/v3/LC0bjKoSQZq2wvOIAtnw0A/zh-cn_image_0000002658794375.png?HW-CC-KV=V1&HW-CC-Date=20260920T112701Z&HW-CC-Expire=31536000000&HW-CC-Sign=B57B6E12C6F50CBFDA051E7DD3323420A75379E366CD88A16D6C4594609E0F8B "点击放大")

   正常情况下主线程请求绘制渲染周期（如8.3ms）会与屏幕刷新率（如120Hz）对应，但如果主线程在执行耗时操作时，会导致两次请求绘制渲染的时间间隔变长，在120Hz屏幕刷新率下应用绘制的帧率少于120，出现卡顿、丢帧的情况。
2. 查看滑动手势事件是否使用animateTo。 抓取日志发现使用了PanGesture滑动手势事件：

   ```screen
   I C03951/com.example.myapplication/InputKeyFlow: [(100002:100002:scope)] Pan accepted, tag = Stack
   ```

   通过Trace发现只能看到多次状态变量刷新，在应用收到手指离开屏幕的事件处，仅更新页面偏移状态，没有调用animateTo启动动画：

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/95/v3/8lJUMAeURZytOPraLJHAOw/zh-cn_image_0000002628555010.png?HW-CC-KV=V1&HW-CC-Date=20260920T112701Z&HW-CC-Expire=31536000000&HW-CC-Sign=E22BEE3579CDBE650FD45CB49B20C0E99DBFB3D96D9C60B75C54591FAB827A5F "点击放大")

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/54/v3/kaa0JYTdQe68cEkrGnEMOQ/zh-cn_image_0000002628395110.png?HW-CC-KV=V1&HW-CC-Date=20260920T112701Z&HW-CC-Expire=31536000000&HW-CC-Sign=5AEDC654086D21D7E54A7AFE71EAE0E3342EBBFE3B647F69DB7266B59D51A30C "点击放大")

## 分析结论

使用PanGesture滑动手势事件时没有设置惯性动画，致使滑动手势停止时长图的滑动效果立刻停止，即表现为滑动卡顿。

## 修改建议

在滑动离手后增加滑动动效。

