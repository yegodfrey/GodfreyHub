---
name: document/cn/doc-guides/wearable-overview-0000001052065839
title: 概述
uri: https://developer.huawei.com/consumer/cn/doc/doc-guides/wearable-overview-0000001052065839
source: portal
---

# 概述

对于智能穿戴，应用可以通过HarmonyOS提供的接口实现音频、传感器、网络连接、UI交互、消息提醒等常规业务的开发。开发者也可以根据智能穿戴的特点，打造针对智能穿戴的独特应用。当前支持产品有：HUAWEI WATCH 3。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113854.01169561930124203866045237209381:50001231000000:2800:4395A8E8A0AE9C6124EE20FA9B8B6171143A139F3A05922CE1DB524BC3C9F944.png?needInitFileName=true?needInitFileName=true)

本文档适用于智能穿戴应用开发，针对轻量级智能穿戴请参考[轻量级智能穿戴开发](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/lite-wearable-overview-0000001197577411)。

基于HarmonyOS，开发者既可以在智能穿戴上开发独立工作的应用，也可以开发跨设备协同工作的应用，为消费者带来更加灵活、智慧的分布式交互体验。

当开发者需要新建一个工程开发智能穿戴应用时，请参考[打造智能穿戴应用](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/wearable-developing-0000001052265837)。当开发者已有一个工程需要添加一个智能穿戴模块时，请参考[添加智能穿戴模块](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/wearable-adding-module-0000001053581601)。

**表1** 智能穿戴应用开发的增强功能功能 | 描述  
---|---  
应用向系统发送通知 | 用于提醒用户有来自应用的信息。当应用向系统发出通知时，通知将按照应用维度在通知中心聚合显示，详情请参考[创建智能穿戴应用通知](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/wearable-notifications-overview-0000001052419149)。  
快速进入日常功能 | 负一屏提供日常功能的快捷入口，为高频应用提供统一平台能力，展示用户最关心的信息，详情请参考[在负一屏展示应用消息](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/wearable-the-minus-1-screen-0000001052673285)。  
利用旋转表冠进行交互 | 旋转表冠是智能穿戴应用特有的交互方式，可以让用户通过旋转电源键进行页面交互，您需要基于支持旋转表冠的智能穿戴进行开发，详情请参考[利用旋转表冠进行页面交互](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/wearable-crown-rotation-intro-0000001158602489)。  
降低应用功耗 | 智能穿戴电池容量有限，为了让应用对用户更友好，开发者应当尽可能降低应用的功耗开销，详情请参考[降低应用功耗](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/wearable-power-consumption-0000001051273063)。  
多样化表盘展示 | 应用提供固定格式的数据给表盘，表盘框架根据表盘主题所定义样式和布局将收到的数据渲染显示在表盘上，可以展示步数、心率、天气等各类丰富多样的数据，详情请参考[多样化数据显示](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/wearable-complication-intro-0000001077863736)。  
  
#### 基本概念

     * **表盘**

智能穿戴配对完成后，开机首界面即为表盘，系统会预置一些表盘，让用户可以通过表盘快速地查看时间、计步、心率、天气等关键信息。用户也可以根据自己的喜好，长按表盘界面以选择切换自己喜爱的表盘。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113854.05004524210140239406657306271904:50001231000000:2800:0C89C5249740E9679C888C49CF519DF1BF381B7AE5CF9714936856F5BF915B62.png?needInitFileName=true?needInitFileName=true)
