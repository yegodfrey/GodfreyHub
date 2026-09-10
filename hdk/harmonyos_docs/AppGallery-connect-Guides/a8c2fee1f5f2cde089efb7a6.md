---
name: document/cn/AppGallery-connect-Guides/gamemme-getrtmchannelinfo-ios-0000001704467040
title: 查询频道信息
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/gamemme-getrtmchannelinfo-ios-0000001704467040
---

# 查询频道信息

订阅频道的过程中，如需查看指定频道的详细信息，如订阅玩家数量、玩家信息（RTM连接状态、属性等），可通过查询频道信息获取。  

#### 前提条件

* 您已[集成游戏多媒体基础SDK和实时信令模块](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/gamemme-integratingsdk-ios-0000001323104597#ZH-CN_TOPIC_0000001323104597__li16373152113206)。
* 您已[创建游戏多媒体实例](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/gamemme-engine-ios-0000001272544612#section1093713161034)。  

#### 开发步骤

1. 调用[HWPGMEngine.getInstance getRtmChannelInfo](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-hwpgmengine-ios-0000001272768358#section2906134612272)方法，查询频道信息，例如指定频道的用户列表。

   ```
   GetRtmChannelInfoReq *req = [[GetRtmChannelInfoReq alloc] init];
   req.channelId = channel;
   req.isReturnMembers = YES;
   [HWPGMEngine.getInstance getRtmChannelInfo:req];
   ```

2. 在HWPGMEngineDelegate协议的[onGetRtmChannelInfo](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-hwpgmenginedelegate-0000001323168225#section124168761412)回调方法中，可以获取频道信息的查询结果。

   ```
   - (void)onGetRtmChannelInfo:(GetRtmChannelInfoResult *)result {
     // 可根据需求将数据进行处理
   }
   ```

