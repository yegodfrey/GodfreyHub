---
name: document/cn/HiCar-Guides/data-exchange-description-0000001078307032
title: 数据交互说明
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-Guides/data-exchange-description-0000001078307032
---

# 数据交互说明

## 交互机制

HiCar与音频应用通过MediaSession自定义指令进行数据交互。当用户在HiCar环境中通过点击/语音/按键/旋钮等方式操作音频应用界面时，HiCar会通过MediaSession.Callback类中的onCustomAction(String action,Bundle extras)方法向音频应用发送不同的action指令，音频应用需要在onCustomAction方法中区分不同的action指令并进行针对性处理，将处理结果通过MediaSession.sendSessionEvent(String action,Bundle extras)方法告知HiCar。具体的action指令及出入参说明参见后续章节。

## 数据结构

在进行数据交互之前，音频应用应了解HiCar关于音频应用显示数据的结构。音频应用界面显示数据采用链式存储结构，如[图1](#ZH-CN_TOPIC_0000001078307032__fig198202711614)所示。

**图1**链式结构示意图   
![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220524101404.96538339891264376916236947697709:50530523030437:2800:AE42B1401D612F667EA6C8E1347B045840C4E3BBE48125B4774372A9BB15299F.png?needInitFileName=true?needInitFileName=true "点击放大")

链式结构的每个节点对应一个页签、一个专辑列表或者一首曲目。每个节点通过全局唯一的Media ID进行标识，节点间通过Media ID和hicar.media.bundle.PARENT_ID属性进行连接，子节点的hicar.media.bundle.PARENT_ID属性为父节点的Media ID。例如：A节点Media ID为"tabA"，B节点Media ID为"tabA_B"，其hicar.media.bundle.PARENT_ID属性为"tabA"，F节点Media ID为"tabA_B_F"，其hicar.media.bundle.PARENT_ID属性为"tabA_B"。

一首曲目可以在多个专辑中同时存在，但在不同专辑中需对应不同的节点，应拥有不同的Media ID和hicar.media.bundle.PARENT_ID属性。
> 说明
>
> Media ID需要音频应用自行设置，建议格式为多段式，例如"页签1_1_1"作为页签1中第一个专辑的第一首曲目。
