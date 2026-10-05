---
name: document/cn/des-guides/atomic-service-0000001453457642
title: 服务落地页设计
uri: https://developer.huawei.com/consumer/cn/doc/des-guides/atomic-service-0000001453457642
source: portal
---

# 服务落地页设计  
  
元服务以轻量设计为原则，保障系统设计一致性的体验，降低用户学习、操作的成本。

**轻量直接**

元服务应当具备快速加载、便捷使用的基础特征，以用户体验和中心提供服务功能，便于用户学习与分享。减少无关的设计内容、广告信息等，友好的引导用户使用，直接了当的呈现信息。

**服务闭环**

元服务所提供的功能内容，需要能够帮助用户完成独立任务的闭环操作。避免中途引导用户下载完整应用、弹出广告或跳转其他第三方链接。有效且聚焦的服务内容，会更有效的形成需求依赖，确保服务体验。

#### 元服务界面规范

元服务界的落地页面，包括内嵌的网页等，都会在其右上角放置官方面板入口以及系统导航栏。开发者不可修改其现实逻辑，用户可以通过系统面板及导航清晰了解到服务归属，并统一元服务相关的拓展服务与体验。开发者及设计师在设计界面时需要定义界面与导航栏之间的展示逻辑，避免出现重复性的、冲突性的交互与视觉元素。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230630180251.11221020492514179855781157268782:50001231000000:2800:061F7FCFAEFE1A06192D0EEC3979D58DD7D96DD27222523EB4E2064DF1BCFD3E.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

#### 界面适配原则

元服务标题导航提供服务名显示及服务面板入口，请勿重复在界面中出现重复性元素和内容。

避免在拉起服务的首界面出现半模态以及透明界面的情况，导致服务标题显示出现异常。

右上角服务面板入口已经提供了统一的操作面板，请勿在界面内重复出现操作按钮或调用其他系统能力，如服务分享、流转、卡片加桌等操作。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230630180252.08089848081736642324527146414240:50001231000000:2800:289EBB37A049FCA52088FE79824578BB41E45F39D93E597BCF643A9BA5EA16B5.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

#### 导航栏深浅模式

元服务导航栏相应系统深浅模式，服务界面若非为沉浸式，请遵循HarmonyOS的深色模式适配规范进行适配。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230630180252.49306806555030797404719597680710:50001231000000:2800:77E50108E109367AD6CC5C32C45BD444C15ADEA13060FCFBC94819AFA79BCDAE.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

#### 元服务导航逻辑

独立的元服务默认打开进入一级界面，通过点击热区进入到新一级界面时，刷新系统导航标题的界面层级，并提供系统返回操作。

响应系统全局返回等手势操作，当进入到多级界面时，左上角返回始终返回到上一级，直到返回至首界面。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230630180252.22750332864086986986524916095701:50001231000000:2800:F561F460A406F6A253B693C72026656939703C2025B6709DB6FA7A6C909FACC4.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

#### 服务面板

点击元服务右上角操作按钮，拉起系统操作面板。

面板功能集成服务卡片查找、分享、设置等入口，为开发者提供统一的服务能力，帮助服务分发服务及卡片等操作。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230630180252.36161417869151215764212538426043:50001231000000:2800:D19C28EA8B6F93132C39F37C79400998A37DF99CA4893F77760E9214EBDF6944.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)
