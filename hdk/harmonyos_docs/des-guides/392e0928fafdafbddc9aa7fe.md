---
name: document/cn/des-guides/service-basic-0000001092893896
title: 基础信息
uri: https://developer.huawei.com/consumer/cn/doc/des-guides/service-basic-0000001092893896
source: portal
---

# 基础信息

每个元服务有独立的图标、名称、描述、快照。基础信息应能够准确反映服务提供方的特征及服务的核心体验，并与其他关联的应用和服务保持同步最新。

元服务信息将展示在服务中心、搜索等界面。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230630180231.25698437607126914734255982097291:50001231000000:2800:27F6E4E6716D6AB8ED465F5D0107DC95523FFE960BAC6DF27530AC1F26C4FD35.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

#### 图标

元服务图标与应用图标有明显区别，它继承了 HarmonyOS 的设计语言体系，内部圆形表示完整独立，外圈装饰线表示可分可合可流转的特点。

元服务图标需提供尺寸为 512 x 512 px的PNG格式资源，确保图标清晰度以及背景透明。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230630180232.95892785043737603703279801115992:50001231000000:2800:13D601B2D9A615ACC47BE888BDD4B4BDAB6F4BEA9A126F704CB591256D9BE15E.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

[下载服务图标资源](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230630180233.34363477284895945373083832346946:50001231000000:2800:809B898B16AEDF6DE25C80039B966329F0F92F4CBCB4721FED56C39769C35534.zip?needInitFileName=true)

元服务图标必须在华为提供的标准图标底板上设计，分辨率必须为 216x216 或 512x512。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230630180232.94970294728253281271189977443905:50001231000000:2800:13316C0E098E7D0AEB4E71C0620622CB5E8899D93685BF472A225B242CCB5FFC.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

     1. 图标主体内容可沿用应用图标，或根据服务特征专门设计。
     2. 图标主体内容应保持在圆形区域内。
     3. 外圈装饰线可根据主体内容或品牌色填充：单色、双色、渐变色。

以下是图标绘制样例

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230630180232.68220651318725341318759128251282:50001231000000:2800:0FD53F58BFE1B3FC6D7A7F533A365E76713A6469F04DC9B4DF86956ED2E70689.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

#### 名称

元服务名称应精确表示服务内容，不宜过长，确保简短、易懂、易记忆。名称中应体现品牌或服务提供方以便用户区分，可在名称中的不同位置出现，符合阅读习惯。

正确示例如“华为商城购物车”、“微博热搜榜”、“京东直播”，为确保系统界面展示效果，服务名称不超过8个中文字符。

#### 描述

元服务描述应简要而准确地说明服务的功能，做到用户一眼可知。

不允许复用元服务“名称“；不允许出现广告运营或为应用引流的暗示信息；不允许为空或使用非中文语言；不建议描述交互操作或滥用符号。

正确示例如“快速查看购物清单“、“您的个人好物箱“、“即时获取时事新闻“、“边看边购“，为确保系统界面展示效果，服务名称不超过15个中文字符。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230630180232.29275810849208179822836948164095:50001231000000:2800:6E35CBE08B8028F2ED921DA9B34B366B5D21BEA8624736FBF5C2FD0A34BF5BA0.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

#### 快照

快照为与元服务关联的小尺寸服务卡片的截图。截图应为理想的服务状态，让用户一眼可知服务内容。需提供直角图片，由展示快照的应用进行圆角裁切。

快照的详细设计示意可阅读[卡片快照设计原则](https://developer.harmonyos.com/cn/docs/design/des-guides/service-widget-design-0000001098216280#section793518013419)。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230630180232.99523352006118421675749965982489:50001231000000:2800:39A758AECBD25F917DCDF41DDEF57BABFE9C3C577BD7747E29C29DB9B0C5682B.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

     1. 快照分辨率必须为 600*600 ，对应小尺寸（2x2）服务卡片设计
     2. 提供直角图片，由展示界面适配圆角
