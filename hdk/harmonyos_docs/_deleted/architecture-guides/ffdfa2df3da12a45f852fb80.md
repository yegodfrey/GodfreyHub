---
name: document/cn/architecture-guides/lock_speed-0000002317513156
title: 视频播放倍速锁定及取消
uri: https://developer.huawei.com/consumer/cn/doc/architecture-guides/lock_speed-0000002317513156
---

# 视频播放倍速锁定及取消

## 场景介绍

锁定视频播放倍速是影音娱乐类应用的高频使用场景之一，如用户在视频播放时，需要锁定或取消倍速。

本示例通过长按手势和拖动手势的顺序识别[组合手势](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-gesture-events-combined-gestures)，实现长按边缘加速、下滑锁定倍速、再次下滑取消锁定的功能。

## 效果预览

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f2/v3/eRK5d3ZnS5i1LWdGjzJ1Nw/zh-cn_image_0000002517191358.gif?HW-CC-KV=V1&HW-CC-Date=20260920T083700Z&HW-CC-Expire=31536000000&HW-CC-Sign=B81667A5C65E64FD5254A8641CE3135BBB7D3A8EF44FD3E605B370294D3E03EC "点击放大")

## 实现思路

1. 绑定[LongPressGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-longpressgesture)，长按边缘实现视频加速播放。

   ```ts
   LongPressGesture({ repeat: true })
     .onAction((event: GestureEvent | undefined) => {
       this.isAccelerate = true;
       this.curRate = PlaybackSpeed.Speed_Forward_2_00_X;
     })
   ```


2. 绑定[PanGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pangesture)，下滑到指定位置松手后锁定倍速播放。

   ```ts
   PanGesture()
     .onActionUpdate((event: GestureEvent) => {
       // 获取拖动位置的y坐标
       for (let i = 0; i < event.fingerList.length; i++) {
         this.positionY = event.fingerList[i].localY;
       }
     })
     .onActionEnd(() => {
       this.isLocked = true;
     })
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```ts
├──entry/src/main/ets            // 代码区
│  ├──common 
│  │  └──Constants.ets           // 常量
│  ├──component
│  │  ├──ShortVideo.ets          // 视频组件
│  │  └──VideoDes.ets            // 视频信息组件 
│  ├──entryability 
│  │  └──EntryAbility.ets
│  ├──entrybackupability 
│  │  └──EntryBackupAbility.ets    
│  └──pages
│     └──LockSpeed.ets           // 主页   
└──entry/src/main/resources      // 应用资源目录
```

## 参考文档

[组合手势](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-gesture-events-combined-gestures)

[LongPressGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-longpressgesture)

[PanGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-pangesture)

## 代码下载

[视频播放倍速锁定及取消示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260626173445.10570139758427671689676175986871:50001231000000:2800:B65B66FBE2823978FA69BE6B5D2D8648AB24B0EE89F939E3E08564FE36B0F5A5.zip?needInitFileName=true)

