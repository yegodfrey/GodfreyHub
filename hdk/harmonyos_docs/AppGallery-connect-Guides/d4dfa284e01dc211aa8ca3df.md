---
name: document/cn/AppGallery-connect-Guides/gamemme-getrtmchannelhistorymessages-minigame-0000001752226765
title: 查询频道历史消息
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/gamemme-getrtmchannelhistorymessages-minigame-0000001752226765
---

# 查询频道历史消息

游戏多媒体实时信令功能支持查询频道历史消息，云侧只保存近7日内的频道历史消息，最多可获取100条历史消息记录。

## 前提条件

* 您已[集成游戏多媒体SDK](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/gamemme-integratingsdk-minigame-0000001604579198)。
* 您已[创建游戏多媒体实例](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/gamemme-engine-minigame-0000001652939493)，且初始化参数中[isEnableRtm](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-enginecreateparams-minigame-0000001666206573#ZH-CN_TOPIC_0000001666206573__p3284173213149)值为true（即RTM为开启状态）。
* 您已[订阅频道](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/gamemme-channel-subscribe-minigame-0000001724621881#section1014421318306)。

## 开发步骤

1. 调用[GameMediaEngine.getRtmChannelHistoryMessages](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-gamemediaengine-minigame-0000001653420005#section159991595542)方法，查询历史消息。

   ```screen
   const req: GetRtmChannelHistoryMessagesReq = {
     channelId: 579457***95,
     startTime: 1698996223000,
     count: 10
   };
   gameMediaEngine.getRtmChannelHistoryMessages(req).catch((error) => {
     // 处理错误信息
   });
   ```

2. 通过在[GameMediaEngine.on](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-gamemediaengine-minigame-0000001653420005#section1487511413163)接口中监听"[onGetRtmChannelHistoryMessages](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-eventname-minigame-0000001604738198#section248618324451)"事件，可以获取频道历史消息的查询结果，并实现回调处理。

   ```screen
   GameMediaEngine.on('onGetRtmChannelHistoryMessages', (result: GetRtmChannelHistoryMessagesResult) =>
     this.onGetRtmChannelHistoryMessage(result)
   );
   onGetRtmChannelHistoryMessage(result: GetRtmChannelHistoryMessagesResult) {
        // 可根据需求将数据进行处理
   }
   ```

