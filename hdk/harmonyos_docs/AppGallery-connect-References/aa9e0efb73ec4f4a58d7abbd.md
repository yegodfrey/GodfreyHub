---
name: document/cn/AppGallery-connect-References/gamemme-hwpgmenginedelegate-0000001323168225
title: HWPGMEngineDelegate
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-hwpgmenginedelegate-0000001323168225
---

# HWPGMEngineDelegate

|Protocol Info|
|:-----------------------------------------------------------------------------------------|
|处理实例接口调用与返回结果交互的协议。 OBJECTIVE-C ``` @protocol HWPGMEngineDelegate <NSObject> @optional ```|

#### - onCreate

创建游戏多媒体实例时，将调用此方法。

OBJECTIVE-C

```
- (void)onCreate:(int)code msg:(NSString* _Nonnull)msg;
```

Parameters  

|Name|Description|
|:---|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|code|结果码。 说明： 返回值为0则表示成功，返回值为其他[错误码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-hwpgmenginedelegate-ios-0000001301189252)则表示失败。|
|msg|结果码描述信息。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEngineDelegate
- (void)onCreate:(int)code msg:(NSString *)msg {
    // 可根据需求将数据进行处理
}
```

#### - onJoinTeamRoom

加入小队房间时，将调用此方法。

OBJECTIVE-C

```
- (void)onJoinTeamRoom:(NSString* _Nonnull)roomId code:(int)code msg:(NSString* _Nonnull)msg;
```

Parameters  

|Name|Description|
|:-----|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|roomId|房间ID。|
|code|结果码。 说明： 返回值为0则表示成功，返回值为其他[错误码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-hwpgmenginedelegate-ios-0000001301189252)则表示失败。|
|msg|结果码描述信息。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEngineDelegate
- (void)onJoinTeamRoom:(NSString* _Nonnull)roomId code:(int)code msg:(NSString *)msg {
    // 可根据需求将数据进行处理
}
```

#### - onJoinNationalRoom

加入国战房间时，将调用此方法。

OBJECTIVE-C

```
- (void)onJoinNationalRoom:(NSString* _Nonnull)roomId code:(int)code msg:(NSString* _Nonnull)msg;
```

Parameters  

|Name|Description|
|:-----|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|roomId|房间ID。|
|code|结果码。 说明： 返回值为0则表示成功，返回值为其他[错误码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-hwpgmenginedelegate-ios-0000001301189252)则表示失败。|
|msg|结果码描述信息。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEngineDelegate
- (void)onJoinNationalRoom:(NSString* _Nonnull)roomId code:(int)code msg:(NSString *)msg {
    // 可根据需求将数据进行处理
}
```

#### - onJoinRangeRoom

加入范围语音房间时，将调用此方法。

OBJECTIVE-C

```
- (void)onJoinRangeRoom:(NSString* _Nonnull)roomId code:(int)code msg:(NSString* _Nonnull)msg;
```

Parameters  

|Name|Description|
|:-----|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|roomId|房间ID。|
|code|结果码。 说明： 返回值为0则表示成功，返回值为其他[错误码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-hwpgmenginedelegate-ios-0000001301189252)则表示失败。|
|msg|结果码描述信息。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEngineDelegate
- (void)onJoinRangeRoom:(NSString* _Nonnull)roomId code:(int)code msg:(NSString *)msg {
    // 可根据需求将数据进行处理
}
```

#### - onLeaveRoom

离开房间时，将调用此方法。

OBJECTIVE-C

```
- (void)onLeaveRoom:(NSString* _Nonnull)roomId code:(int)code msg:(NSString* _Nonnull)msg;
```

Parameters  

|Name|Description|
|:-----|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|roomId|房间ID。|
|code|结果码。 说明： 返回值为0则表示成功，返回值为其他[错误码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-hwpgmenginedelegate-ios-0000001301189252)则表示失败。|
|msg|结果码描述信息。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEngineDelegate
- (void)onLeaveRoom:(NSString* _Nonnull)roomId code:(int)code msg:(NSString *)msg {
    // 可根据需求将数据进行处理
}
```

#### - onDestory

销毁游戏多媒体实例时，将调用此方法。

OBJECTIVE-C

```
- (void)onDestory:(int)code msg:(NSString* _Nonnull)msg;
```

Parameters  

|Name|Description|
|:---|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|code|结果码。 说明： 返回值为0则表示成功，返回值为其他[错误码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-hwpgmenginedelegate-ios-0000001301189252)则表示失败。|
|msg|结果码描述信息。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEngineDelegate
- (void)onDestory:(int)code msg:(NSString *)msg {
    // 可根据需求将数据进行处理
}
```

#### - onSpeakerDetection

开启发言人列表检测并且房间内有成员说话时，将调用此方法。

OBJECTIVE-C

```
- (void)onSpeakerDetection:(NSMutableArray<NSString *> *)openIds;
```

Parameters  

|Name|Description|
|:------|:-----------|
|openIds|当前发言人玩家ID列表。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEngineDelegate
- (void)onSpeakerDetection:(NSArray *)openIds {
    // 可根据需求将数据进行处理
}
```

#### - onSpeakerDetectionEx

开启发言人列表检测并且房间内有成员说话时，将调用此方法。

OBJECTIVE-C

```
- (void)onSpeakerDetectionEx:(NSMutableArray<VolumeInfo*> *)userVolumeInfos;
```

Parameters  

|Name|Description|
|:--------------|:----------|
|userVolumeInfos|玩家音量信息。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEngineDelegate
- (void)onSpeakerDetectionEx:(NSMutableArray<VolumeInfo*> *)userVolumeInfos {
    // 可根据需求将数据进行处理
}
```

#### - onForbiddenByOwner

玩家被禁言并且收到禁言指令时，将调用此方法。

OBJECTIVE-C

```
- (void)onForbiddenByOwner:(NSString* _Nonnull)roomId openIds:(NSMutableArray<NSString*> *)openIds isForbidden:(Boolean)isForbidden;
```

Parameters  

|Name|Description|
|:----------|:------------------------|
|roomId|房间ID。|
|openIds|被禁言的玩家ID集合。|
|isForbidden|是否被禁言。 * true：是 * false：否|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEngineDelegate
- (void)onForbiddenByOwner:(NSString* _Nonnull)roomId openIds:(NSArray *)openIds isForbidden:isForbidden {
    // 可根据需求将数据进行处理
}
```

#### - onForbidPlayer

调用房主禁言指定玩家的接口，接口异步调用成功时，将调用此方法。

OBJECTIVE-C

```
- (void)onForbidPlayer:(NSString* _Nonnull)roomId openId:(NSString* _Nonnull)openId code:(int)code msg:(NSString* _Nonnull)msg;
```

Parameters  

|Name|Description|
|:-----|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|roomId|房间ID。|
|openId|被禁言的玩家ID。|
|code|结果码。 说明： 返回值为0则表示成功，返回值为其他[错误码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-hwpgmenginedelegate-ios-0000001301189252)则表示失败。|
|msg|结果码描述信息。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEngineDelegate
- (void)onForbidPlayer:(NSString* _Nonnull) roomId openId:(NSString* _Nonnull)openId isForbidden:(BOOL)isForbidden code:(int)code msg:(NSString*)msg {
    // 可根据需求将数据进行处理
}
```

#### - onForbidAllPlayers

调用房主禁言其他所有玩家的接口，接口异步调用成功时，将调用此方法。

OBJECTIVE-C

```
- (void)onForbidAllPlayers:(NSString* _Nonnull)roomId openIds:(NSArray* _Nonnull)openIds isForbidden:(BOOL)isForbidden code:(int)code msg:(NSString* _Nonnull)msg;
```

Parameters  

|Name|Description|
|:----------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|roomId|房间ID。|
|openIds|被禁言的玩家ID的集合。|
|isForbidden|是否禁言。 * true：是 * false：否|
|code|结果码。 说明： 返回值为0则表示成功，返回值为其他[错误码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-hwpgmenginedelegate-ios-0000001301189252)则表示失败。|
|msg|结果码描述信息。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEngineDelegate
- (void)onForbidAllPlayers:(NSString* _Nonnull)roomId openIds:(NSArray *)openIds isForbidden:(BOOL)isForbidden code:(int)code msg:(NSString*)msg {
    // 可根据需求将数据进行处理
}
```

#### - onSwitchRoom

调用切换房间接口后，将调用此方法。

OBJECTIVE-C

```
- (void)onSwitchRoom:(NSString*)roomId code:(int)code msg:(NSString*)msg;
```

Parameters  

|Name|Description|
|:-----|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|roomId|房间ID。|
|code|结果码。 说明： 返回值为0则表示成功，返回值为其他[错误码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-hwpgmenginedelegate-ios-0000001301189252)则表示失败。|
|msg|结果码描述信息。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEngineDelegate
- (void)onSwitchRoom:(NSString* _Nonnull)roomId code:(int)code msg:(NSString*)msg {
    // 切换房间成功或失败数据处理
}
```

#### - onMutePlayer

调用屏蔽指定玩家接口后，将调用此方法。

OBJECTIVE-C

```
- (void)onMutePlayer:(NSString* _Nonnull)roomId openId:(NSString* _Nonnull)openId isMuted:(BOOL)isMuted code:(int)code msg:(NSString*)msg;
```

Parameters  

|Name|Description|
|:------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|roomId|房间ID。|
|openId|被屏蔽的玩家ID。|
|isMuted|是否屏蔽。 * true：是 * false：否|
|code|结果码。 说明： 返回值为0则表示成功，返回值为其他[错误码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-hwpgmenginedelegate-ios-0000001301189252)则表示失败。|
|msg|结果码描述信息。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEngineDelegate
- (void)onMutePlayer:(NSString* _Nonnull)roomId openId:(NSString* _Nonnull)openId isMuted:(BOOL)isMuted code:(int)code msg:(NSString*)msg {
    // 可根据需求将数据进行处理
}
```

#### - onMuteAllPlayers

调用屏蔽其他所有玩家接口后，将调用此方法。

OBJECTIVE-C

```
- (void)onMuteAllPlayers:(NSString* _Nonnull)roomId openIds:(NSArray *)openIds isMuted:(BOOL)isMuted code:(int)code msg:(NSString*)msg;
```

Parameters  

|Name|Description|
|:------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|roomId|房间ID。|
|openIds|被屏蔽玩家ID的集合。|
|isMuted|是否屏蔽。 * true：是 * false：否|
|code|结果码。 说明： 返回值为0则表示成功，返回值为其他[错误码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-hwpgmenginedelegate-ios-0000001301189252)则表示失败。|
|msg|结果码描述信息。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEngineDelegate
- (void)onMuteAllPlayers:(NSString* _Nonnull)roomId openIds:(NSArray *)openIds isMuted:(BOOL)isMuted code:(int)code msg:(NSString*)msg {
    // 可根据需求将数据进行处理
}
```

#### - onPlayerOnline

其他玩家加入房间成功后，将调用此方法。  
![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250813162807.27378792766784651287545358209548:50001231000000:2800:7D224865DFACAF6ADA0BF37772695B59BB48CC5E523812B79B1EF87FFD817588.png)  
当前仅支持小队语音和国战语音房间的玩家通过该回调方法收到某个玩家加入房间的通知。

OBJECTIVE-C

```
- (void)onPlayerOnline:(NSString* _Nonnull)roomId openId:(NSString* _Nonnull)openId;
```

Parameters  

|Name|Description|
|:-----|:----------|
|roomId|房间ID。|
|openId|玩家ID。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEngineDelegate
- (void)onPlayerOnline:(NSString* _Nonnull)roomId openId:(NSString* _Nonnull)openId {
   // 可根据需求将数据进行处理
}
```

#### - onPlayerOffline

其他玩家离开房间后，将调用此方法。  
![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250813162807.42879265116732271943409019122954:50001231000000:2800:FC65F552DBB31F951368917F2F55EEA259EC26BC2F6EFE1CB6FC1E938F40D134.png)  
当前仅支持小队语音和国战语音房间的玩家通过该回调方法收到某个玩家离开房间的通知。

OBJECTIVE-C

```
- (void)onPlayerOffline:(NSString* _Nonnull)roomId openId:(NSString* _Nonnull)openId;
```

Parameters  

|Name|Description|
|:-----|:----------|
|roomId|房间ID。|
|openId|玩家ID。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEngineDelegate
- (void)onPlayerOffline:(NSString* _Nonnull)roomId openId:(NSString* _Nonnull)openId {
   // 可根据需求将数据进行处理
}
```

#### - onTransferOwner

玩家转让房主身份后，将调用此方法。

OBJECTIVE-C

```
- (void)onTransferOwner:(NSString*)roomId code:(int)code msg:(NSString*)msg;
```

Parameters  

|Name|Description|
|:-----|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|roomId|房间ID。|
|code|结果码。 说明： 返回值为0则表示成功，返回值为其他[错误码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-hwpgmenginedelegate-ios-0000001301189252)则表示失败。|
|msg|结果码描述信息。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEngineDelegate
- (void)onTransferOwner:(NSString* _Nonnull)roomId code:(int)code msg:(NSString* _Nonnull)msg {
    // 可根据需求将数据进行处理
}
```

#### - onVoiceToText

调用语音转文本后，将调用此方法。

OBJECTIVE-C

```
- (void)onVoiceToText:(NSString*)text code:(int)code msg:(NSString*)msg;
```

Parameters  

|Name|Description|
|:---|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|text|语音转换后的文本。|
|code|结果码。 说明： 返回值为0则表示成功，返回值为其他[错误码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-hwpgmenginedelegate-ios-0000001301189252)则表示失败。|
|msg|结果码描述信息。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEngineDelegate
- (void)onVoiceToText:(NSString* _Nonnull)text code:(int)code msg:(NSString* _Nonnull)msg {
    // 可根据需求将数据进行处理
}
```

#### - onRemoteMicroStateChanged

其他玩家的麦克风状态有变化时，将调用此方法。

OBJECTIVE-C

```
- (void)onRemoteMicroStateChanged:(NSString* _Nonnull)roomId
                           openId:(NSString* _Nonnull)openId
                           isMute:(BOOL) isMute;
```

Parameters  

|Name|Description|
|:-----|:-----------------------|
|roomId|房间ID。|
|openId|玩家ID。|
|isMute|是否静音。 * true：是 * false：否|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEngineDelegate
- (void)onRemoteMicroStateChanged:(NSString* _Nonnull)roomId openId:(NSString* _Nonnull)openId isMute:(BOOL) isMute{
    // 可根据需求将数据进行处理
}
```

#### - onRecordAudioMsg

录制语音消息完成时，将调用此方法。

OBJECTIVE-C

```
- (void)onRecordAudioMsg:(NSString *_Nonnull)filePath
                    code:(int)code
                     msg:(NSString *_Nonnull)msg;
```

Parameters  

|Name|Description|
|:-------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|filePath|待录制语音消息文件的本地存储地址。|
|code|结果码。 说明： 返回值为0则表示成功，返回值为其他[错误码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-hwpgmenginedelegate-ios-0000001301189252)则表示失败。|
|msg|结果码描述信息。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEngineDelegate
- (void)onRecordAudioMsg:(NSString *_Nonnull)filePath code:(int)code msg:(NSString *_Nonnull)msg {
    // 可根据需求将数据进行处理
}
```

#### - onUploadAudioMsgFile

上传语音消息完成时，将调用此方法。

OBJECTIVE-C

```
- (void)onUploadAudioMsgFile:(NSString *_Nonnull)filePath
                      fileId:(NSString *_Nonnull)fileId
                        code:(int)code
                         msg:(NSString *_Nonnull)msg;
```

Parameters  

|Name|Description|
|:-------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|filePath|待上传语音消息文件的本地地址。|
|fileId|待下载文件唯一标识。|
|code|结果码。 说明： 返回值为0则表示成功，返回值为其他[错误码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-hwpgmenginedelegate-ios-0000001301189252)则表示失败。|
|msg|结果码描述信息。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEngineDelegate
- (void)onUploadAudioMsgFile:(NSString *_Nonnull)filePath fileId:(NSString *_Nonnull)fileId code:(int)code msg:(NSString *_Nonnull)msg {
    // 可根据需求将数据进行处理
}
```

#### - onDownloadAudioMsgFile

下载语音消息完成时，将调用此方法。

OBJECTIVE-C

```
- (void)onDownloadAudioMsgFile:(NSString *_Nonnull)filePath
                        fileId:(NSString *_Nonnull)fileId
                          code:(int)code
                           msg:(NSString *_Nonnull)msg;
```

Parameters  

|Name|Description|
|:-------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|filePath|待下载语音消息文件的本地地址。|
|fileId|待下载文件唯一标识。|
|code|结果码。 说明： 返回值为0则表示成功，返回值为其他[错误码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-hwpgmenginedelegate-ios-0000001301189252)则表示失败。|
|msg|结果码描述信息。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEngineDelegate
- (void)onDownloadAudioMsgFile:(NSString *_Nonnull)filePath fileId:(NSString *_Nonnull)fileId code:(int)code msg:(NSString *_Nonnull)msg {
    // 可根据需求将数据进行处理
}
```

#### - onStartDetectAudioFile

语音消息风控请求完成时，将调用此方法。

OBJECTIVE-C

```
- (void)onStartDetectAudioFile:(NSString *)fileId code:(int)code msg:(NSString *)msg;
```

Parameters  

|Name|Description|
|:-----|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|fileId|待风控文件唯一标识。|
|code|结果码。 说明： 返回值为0则表示成功，返回值为其他[错误码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-hwpgmenginedelegate-ios-0000001301189252)则表示失败。|
|msg|结果码描述信息。|

Sample Code

OBJECTIVE-C

```
- (void)onStartDetectAudioFile:(NSString *)fileId code:(int)code msg:(NSString *)msg {
NSLog(@"fileId: %@, code: %d, msg: %@",fileId, code, msg);
// 可根据需求将数据进行数据处理
}
```

#### - onAudioClipStateChangedNotify

音效播放状态更新时，将调用此方法。

OBJECTIVE-C

```
- (void) onAudioClipStateChangedNotify:(LocalAudioClipStateInfo *)stateInfo；
```

Parameters  

|Name|Description|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[LocalAudioClipStateInfo](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gamemme-localaudioclipstateinfo-ios-0000001655716341)|音效播放回调信息。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEngineDelegate
- (void)onAudioClipStateChangedNotify:(LocalAudioClipStateInfo *)stateInfo {
// 可根据需求将数据进行处理
}
```

#### - onSubscribeRtmChannel

订阅RTM频道时，将调用此方法。

OBJECTIVE-C

```
- (void)onSubscribeRtmChannel:(SubscribeRtmChannelResult *)result;
```

Parameters  

|Name|Description|
|:-----|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|result|订阅RTM频道回调结果，具体请参见[SubscribeRtmChannelResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/subscribertmchannelresult-ios-0000001746902729)。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEDelegate</div><div>
- (void)onSubscribeRtmChannel:(SubscribeRtmChannelResult *)result {
 // 可根据需求将数据进行处理
}
```

#### - onUnSubscribeRtmChannel

取消订阅RTM频道时，将调用此方法。

OBJECTIVE-C

```
- (void)onUnSubscribeRtmChannel:(UnSubscribeRtmChannelResult *)result;
```

Parameters  

|Name|Description|
|:-----|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|result|取消订阅RTM频道回调结果，具体请参见[UnSubscribeRtmChannelResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/unsubscribertmchannelresult-ios-0000001698943316)。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEDelegate
- (void)onUnSubscribeRtmChannel:(UnSubscribeRtmChannelResult *)result {
  // 可根据需求将数据进行处理
}
```

#### - onPublishRtmChannelMessage

发布RTM频道消息时，将调用此方法。

OBJECTIVE-C

```
- (void)onPublishRtmChannelMessage:(PublishRtmChannelMessageResult *)result;
```

Parameters  

|Name|Description|
|:-----|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|result|发布RTM频道消息回调结果，具体请参见[PublishRtmChannelMessageResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/publishrtmchannelmessageresult-ios-0000001699102792)。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEDelegate
- (void)onPublishRtmChannelMessage:(PublishRtmChannelMessageResult *)result {
  // 可根据需求将数据进行处理
}
```

#### - onPublishRtmPeerMessage

发送RTM点对点消息时，将调用此方法。

OBJECTIVE-C

```
- (void)onPublishRtmPeerMessage:(PublishRtmPeerMessageResult *)result;
```

Parameters  

|Name|Description|
|:-----|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|result|发送RTM点对点消息回调结果，具体请参见[PublishRtmPeerMessageResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/publishrtmpeermessageresult-ios-0000001746982893)。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEDelegate
- (void)onPublishRtmPeerMessage:(PublishRtmPeerMessageResult *)result {
   // 可根据需求将数据进行处理
}
```

#### - onGetRtmChannelInfo

查询RTM频道信息时，将调用此方法。

OBJECTIVE-C

```
- (void)onGetRtmChannelInfo:(GetRtmChannelInfoResult *)result;
```

Parameters  

|Name|Description|
|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|result|查询RTM频道信息回调结果，具体请参见[GetRtmChannelInfoResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/getrtmchannelinforesult-ios-0000001746902737)。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEDelegate
- (void)onGetRtmChannelInfo:(GetRtmChannelInfoResult *)result {
  // 可根据需求将数据进行处理
}
```

#### - onReceiveRtmPeerMessage

接收RTM点对点消息时，将调用此方法。

OBJECTIVE-C

```
- (void)onReceiveRtmPeerMessage:(ReceiveRtmPeerMessageNotify *)notify;
```

Parameters  

|Name|Description|
|:-----|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|notify|RTM点对点消息通知，具体请参见[ReceiveRtmPeerMessageNotify](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/receivertmpeermessagenotify-ios-0000001746982901)。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEDelegate
- (void)onReceiveRtmPeerMessage:(ReceiveRtmPeerMessageNotify *)notify { 
  // 可根据需求将数据进行处理
}
```

#### - onReceiveRtmChannelMessage

接收RTM频道消息时，将调用此方法。

OBJECTIVE-C

```
- (void)onReceiveRtmChannelMessage:(ReceiveRtmChannelMessageNotify *)notify;
```

Parameters  

|Name|Description|
|:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|notify|RTM频道消息通知，具体请参见[ReceiveRtmChannelMessageNotify](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/receivertmchannelmessagenotify-ios-0000001699102800)。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEDelegate
- (void)onReceiveRtmChannelMessage:(ReceiveRtmChannelMessageNotify *)notify {
   // 可根据需求将数据进行处理
}
```

#### - onRtmConnectionChanged

RTM连接状态变更时，将调用此方法。

OBJECTIVE-C

```
- (void)onRtmConnectionChanged:(RtmConnectionStatusNotify *)notify;
```

Parameters  

|Name|Description|
|:-----|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|notify|RTM连接状态变更通知，具体请参见[RtmConnectionStatusNotify](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/rtmconnectionstatusnotify-ios-0000001746902741)。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEDelegate
- (void)onRtmConnectionChanged:(RtmConnectionStatusNotify *)notify {
   // 可根据需求将数据进行处理
}
```

#### - onSetRtmChannelPlayerProperties

设置RTM频道内用户自定义属性时，将调用此方法。

OBJECTIVE-C

```
- (void)onSetRtmChannelPlayerProperties:(SetRtmChannelPlayerPropertiesResult *)result;
```

Parameters  

|Name|Description|
|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|result|设置RTM频道内用户自定义属性回调结果，具体请参见[SetRtmChannelPlayerPropertiesResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/setrtmchannelplayerpropertiesresult-ios-0000001698943328)。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEDelegate
- (void)onSetRtmChannelPlayerProperties:(SetRtmChannelPlayerPropertiesResult *)result {
   // 可根据需求将数据进行处理
}
```

#### - onGetRtmChannelPlayerProperties

查询RTM频道内用户自定义属性时，将调用此方法。

OBJECTIVE-C

```
- (void)onGetRtmChannelPlayerProperties:(GetRtmChannelPlayerPropertiesResult *)result;
```

Parameters  

|Name|Description|
|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|result|查询RTM频道内用户自定义属性回调结果，具体请参见[GetRtmChannelPlayerPropertiesResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/getrtmchannelplayerpropertiesresult-ios-0000001699102804)。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEDelegate
- (void)onGetRtmChannelPlayerProperties:(GetRtmChannelPlayerPropertiesResult *)result {
   // 可根据需求将数据进行处理
}
```

#### - onDeleteRtmChannelPlayerProperties

删除RTM频道内用户自定义属性时，将调用此方法。

OBJECTIVE-C

```
- (void)onDeleteRtmChannelPlayerProperties:(DeleteRtmChannelPlayerPropertiesResult *)result;
```

Parameters  

|Name|Description|
|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|result|删除RTM频道内用户自定义属性回调结果，具体请参见[DeleteRtmChannelPlayerPropertiesResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/deletertmchannelplayerpropertiesresult-ios-0000001746982905)。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEDelegate
- (void)onDeleteRtmChannelPlayerProperties:(DeleteRtmChannelPlayerPropertiesResult *)result {
  // 可根据需求将数据进行处理
}
```

#### - onRtmChannelPlayerPropertiesChanged

RTM频道内用户自定义属性变更时，将调用此方法。

OBJECTIVE-C

```
- (void)onRtmChannelPlayerPropertiesChanged:(RtmChannelPlayerPropertiesNotify *)notify;
```

Parameters  

|Name|Description|
|:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|notify|RTM频道内用户自定义属性变更通知，具体请参见[RtmChannelPlayerPropertiesNotify](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/rtmchannelplayerpropertiesnotify-ios-0000001746902745)。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEDelegate
- (void)onRtmChannelPlayerPropertiesChanged:(RtmChannelPlayerPropertiesNotify *)notify {
  // 可根据需求将数据进行处理
}
```

#### - onSetRtmChannelProperties

设置RTM频道自定义属性时，将调用此方法。

OBJECTIVE-C

```
- (void)onSetRtmChannelProperties:(SetRtmChannelPropertiesResult *)result;
```

Parameters  

|Name|Description|
|:-----|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|result|设置RTM频道自定义属性回调结果，具体请参见[SetRtmChannelPropertiesResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/setrtmchannelpropertiesresult-ios-0000001699102808)。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEDelegate
- (void)onSetRtmChannelProperties:(SetRtmChannelPropertiesResult *)result {
  // 可根据需求将数据进行处理
}
```

#### - onGetRtmChannelProperties

查询RTM频道自定义属性时，将调用此方法。

OBJECTIVE-C

```
- (void)onGetRtmChannelProperties:(GetRtmChannelPropertiesResult *)result;
```

Parameters  

|Name|Description|
|:-----|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|result|查询RTM频道自定义属性回调结果，具体请参见[GetRtmChannelPropertiesResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/getrtmchannelpropertiesresult-ios-0000001746982909)。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEDelegate
- (void)onGetRtmChannelProperties:(GetRtmChannelPropertiesResult *)result {
  // 可根据需求将数据进行处理
}
```

#### - onDeleteRtmChannelProperties

删除RTM频道自定义属性时，将调用此方法。

OBJECTIVE-C

```
- (void)onDeleteRtmChannelProperties:(DeleteRtmChannelPropertiesResult *)result;
```

Parameters  

|Name|Description|
|:-----|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|result|删除RTM频道自定义属性回调结果，具体请参见[DeleteRtmChannelPropertiesResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/deletertmchannelpropertiesresult-ios-0000001746902749)。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEDelegate
- (void)onDeleteRtmChannelProperties:(DeleteRtmChannelPropertiesResult *)result {
 // 可根据需求将数据进行处理
}
```

#### - onRtmChannelPropertiesChanged

RTM频道自定义属性变更时，将调用此方法。

OBJECTIVE-C

```
- (void)onRtmChannelPropertiesChanged:(RtmChannelPropertiesNotify *)notify;
```

Parameters  

|Name|Description|
|:-----|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|notify|RTM频道自定义属性变更通知，具体请参见[RtmChannelPropertiesNotify](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/rtmchannelpropertiesnotify-ios-0000001698943336)。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEDelegate
- (void)onRtmChannelPropertiesChanged:(RtmChannelPropertiesNotify *)notify {
   // 可根据需求将数据进行处理
}
```

#### - onGetRtmChannelHistoryMessages

查询RTM频道历史消息时，将调用此方法。

OBJECTIVE-C

```
- (void)onGetRtmChannelHistoryMessages:(GetRtmChannelHistoryMessagesResult *)result;
```

Parameters  

|Name|Description|
|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|result|查询RTM频道历史消息回调结果，具体请参见[GetRtmChannelHistoryMessagesResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/getrtmchannelhistorymessagesresult-ios-0000001699102812)。|

Sample Code

OBJECTIVE-C

```
#pragma mark - HWPGMEDelegate
- (void)onGetRtmChannelHistoryMessages:(GetRtmChannelHistoryMessagesResult *)result {
 // 可根据需求将数据进行处理
}
```

