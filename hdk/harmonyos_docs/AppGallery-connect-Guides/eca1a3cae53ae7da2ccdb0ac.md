---
name: document/cn/AppGallery-connect-Guides/gamemme-muteplayer-ios-0000001300634596
title: 屏蔽其他玩家
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/gamemme-muteplayer-ios-0000001300634596
---

# 屏蔽其他玩家

在语音房间中，玩家如果不想接收房间内某个玩家的发言内容，可通过屏蔽其语音实现，但房间内其他玩家依然可以接收到被屏蔽语音玩家的发言。例如在同一房间内，玩家A屏蔽了玩家B的语音后，其他玩家依然可以正常接收玩家B的发言。

## 前提条件

您已[加入房间](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/gamemme-joinroom-roomid-ios-0000001323024589)。

## 屏蔽/打开指定玩家语音

> 说明
>
> * 当前，仅支持小队语音和国战语音房间屏蔽指定玩家语音。
> * 如需屏蔽指定玩家A，需确保A玩家正在当前语音房间内。

1. 调用[HWPGMEngine.getInstance mutePlayer](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-hwpgmengine-ios-0000001272768358#section14673857841)方法屏蔽/打开房间内指定玩家语音。

   ```screen
   HWPGMEngine *pgmeEngine = [HWPGMEngine getInstance];
   [pgmeEngine mutePlayer:roomId openId:openId isMuted:isMuted]; // roomId：房间ID; openId：玩家ID; isMuted：true表示屏蔽语音,false表示取消屏蔽
   ```

2. 当玩家屏蔽指定玩家语音时，可在HWPGMEngineDelegate接口的[onMutePlayer](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-hwpgmenginedelegate-0000001323168225#section128743336226)方法实现相关回调处理。

   ```screen
   - (void)onMutePlayer:(NSString* _Nonnull)roomId openId:(NSString* _Nonnull)openId isMuted:(BOOL)isMuted code:(int)code msg:(NSString*)msg {
       // 可根据需求将数据进行处理
   }
   ```

## 屏蔽/打开其他全部玩家语音

> 说明
>
> * 屏蔽所有玩家后，不允许解除单个指定玩家的语音屏蔽。
> * 如需屏蔽所有玩家语音，需确保已解除房间内其他所有玩家的语音屏蔽。

1. 调用[HWPGMEngine.getInstance muteAllPlayers](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-hwpgmengine-ios-0000001272768358#section572960850)方法屏蔽/打开其他全部玩家语音。

   ```screen
   HWPGMEngine *pgmeEngine = [HWPGMEngine getInstance];
   [pgmeEngine muteAllPlayers:roomId isMuted:isMuted]; // roomId：房间ID; isMuted：true表示屏蔽语音,false表示取消屏蔽
   ```

2. 当玩家屏蔽/打开其他全部玩家语音时，可在HWPGMEngineDelegate接口的[onMuteAllPlayers](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-hwpgmenginedelegate-0000001323168225#section1522517359224)方法实现相关回调处理。

   ```screen
   - (void)onMuteAllPlayers:(NSString* _Nonnull)roomId openIds:(NSArray *)openIds isMuted:(BOOL)isMuted code:(int)code msg:(NSString*)msg {
       // 可根据需求将数据进行处理
   }
   ```

