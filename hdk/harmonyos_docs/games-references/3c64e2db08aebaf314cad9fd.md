---
name: document/cn/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656
title: IGameMMEEventHandler
uri: https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-igamemmeeventhandler-csharp-native-0000002358963656
---

# IGameMMEEventHandler

|Class Info|
|:---------------------------------------------------------------------------------------------------|
|public class IGameMMEEventHandler : AndroidJavaProxy 游戏多媒体事件回调。 说明： IGameMMEEventHandler类的命名空间为GMME。|

#### Constructor Summary

|Constructor Name And Description|
|:-------------------------------------------------------|
|[IGameMMEEventHandler](#section115936418437)() 创建回调函数实例。|

#### Callback Function Summary

|Function name|Description|
|:-----------------------------------------------------------|:-----------------|
|[onCreate](#section151452274152)|创建游戏多媒体实例回调。|
|[onDestroy](#section1746965416512)|销毁游戏多媒体实例回调。|
|[onJoinTeamRoom](#section96445565560)|加入小队房间回调。|
|[onJoinNationalRoom](#section749132701515)|加入国战房间回调。|
|[onJoinRangeRoom](#section814317513315)|加入范围房间回调。|
|[onSwitchRoom](#section14294132012584)|切换房间回调。|
|[onLeaveRoom](#section14884122855918)|离开房间回调。|
|[onPlayerOnline](#section54244215818)|其他玩家加入房间回调。|
|[onPlayerOffline](#section10559163812911)|其他玩家离开房间回调。|
|[onMutePlayer](#section245672811533)|屏蔽指定玩家语音回调。|
|[onMuteAllPlayers](#section188981513185516)|屏蔽所有玩家语音回调。|
|[onForbidPlayer](#section3467121210212)|房主禁言指定玩家回调。|
|[onForbidAllPlayers](#section1664320353312)|房主禁言所有玩家回调。|
|[onForbiddenByOwner](#section189623262617)|被禁言玩家收到禁言指令回调。|
|[onRemoteMicroStateChanged](#section17686241151113)|其他玩家麦克风状态变化回调。|
|[onVoiceToText](#section1289143220123)|语音转文本回调。|
|[onSpeakersDetection](#section11456134011813)|获取当前房间发言玩家回调。|
|[onSpeakersDetectionEx](#section160693412018)|获取当前房间发言玩家回调。|
|[onRecordAudioMsg](#section117424200518)|录制语音消息回调。|
|[onUploadAudioMsgFile](#section17164622185117)|上传语音消息文件回调。|
|[onDownloadAudioMsgFile](#section666142318513)|下载语音消息文件回调。|
|[onPlayAudioMsg](#section12566624125110)|播放语音消息回调。|
|[onStartDetectAudioFile](#section8901620145810)|语音消息文件风控送检回调。|
|[onAudioClipStateChangedNotify](#section12505121617242)|播放本地音效状态回调。|
|[onRtmConnectionChanged](#section849534113402)|RTM连接状态变更回调。|
|[onGetRtmChannelInfo](#section077413479404)|获取RTM频道信息回调。|
|[onSubscribeRtmChannel](#section544225013401)|订阅RTM频道回调。|
|[onUnSubscribeRtmChannel](#section1482719513406)|取消订阅RTM频道回调。|
|[onPublishRtmPeerMessage](#section20547175215406)|发布RTM点对点消息回调。|
|[onPublishRtmChannelMessage](#section14274195316409)|发布RTM频道消息回调。|
|[onReceiveRtmPeerMessage](#section135185414017)|接收RTM点对点消息回调。|
|[onReceiveRtmChannelMessage](#section10815195494017)|接收RTM频道消息回调。|
|[onSetRtmChannelPlayerProperties](#section46641355134017)|设置RTM频道内玩家自定义属性回调。|
|[onGetRtmChannelPlayerProperties](#section1954656104011)|查询RTM频道内玩家自定义属性回调。|
|[onDeleteRtmChannelPlayerProperties](#section13452195617409)|删除RTM频道内玩家自定义属性回调。|
|[onSetRtmChannelProperties](#section34195712402)|设置RTM频道自定义属性回调。|
|[onGetRtmChannelProperties](#section31161736105311)|查询RTM频道自定义属性回调。|
|[onDeleteRtmChannelProperties](#section28041345520)|删除RTM频道自定义属性回调。|
|[onGetRtmChannelHistoryMessages](#section210693212533)|查询RTM频道历史消息回调。|
|[onRtmChannelPlayerPropertiesChanged](#section946143315318)|RTM频道内玩家属性变更回调。|
|[onRtmChannelPropertiesChanged](#section127441335185313)|RTM频道属性变更回调。|

#### Constructors

#### IGameMMEEventHandler

|Constructor Name And Description|
|:--------------------------------------|
|public IGameMMEEventHandler() 创建回调函数实例。|

#### Callback Function

#### onCreate

创建游戏多媒体实例回调。  

|回调原型|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|``` public void onCreate(int code, string msg) { Debug.LogFormat("handler onCreate. code={0}, msg={1}", code, msg); OnEngineCreateCompleteEvent?.Invoke(code, msg); } ```|

|函数原型|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void EngineCreateCompleteCallback(int code, string msg); // 事件函数 public event EngineCreateCompleteCallback OnEngineCreateCompleteEvent;|

Parameters  

|Name|Description|
|:---|:-------------------------------------------------------------------------------------------------------------------------------------------------|
|code|结果码。 说明： 返回值为0则表示成功，返回值为[其他](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gmmeerror-csharp-native-0000002359123668)则表示失败。|
|msg|结果码描述信息。|

#### onDestroy

销毁游戏多媒体实例回调。  

|回调原型|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|``` public void onDestroy(int code, string msg) { Debug.LogFormat("handler onDestroy. code={0}, msg={1} ", code, msg); OnDestroyEngineCompleteEvent?.Invoke(code, msg); } ```|

|函数原型|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void DestroyEngineCompleteCallback(int code, string msg); // 事件函数 public event DestroyEngineCompleteCallback OnDestroyEngineCompleteEvent;|

Parameters  

|Name|Description|
|:---|:-------------------------------------------------------------------------------------------------------------------------------------------------|
|code|结果码。 说明： 返回值为0则表示成功，返回值为[其他](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gmmeerror-csharp-native-0000002359123668)则表示失败。|
|msg|结果码描述信息。|

#### onJoinTeamRoom

加入小队房间回调。  

|回调原型|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|``` public void onJoinTeamRoom(string roomId, int code, string msg) { Debug.LogFormat("handler onJoinTeamRoom.roomId ={0}, code={1}, msg={2}", roomId, code, msg); OnJoinTeamRoomCompleteEvent?.Invoke(roomId, code, msg); } ```|

|函数原型|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void JoinTeamRoomCompleteCallback(string roomId, int code, string msg); // 事件函数 public event JoinTeamRoomCompleteCallback OnJoinTeamRoomCompleteEvent;|

Parameters  

|Name|Description|
|:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------|
|roomId|房间ID。|
|code|结果码。 说明： 返回值为0则表示成功，返回值为[其他](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gmmeerror-csharp-native-0000002359123668)则表示失败。|
|msg|结果码描述信息。|

#### onJoinNationalRoom

加入国战房间回调。  

|回调原型|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|``` public void onJoinNationalRoom(string roomId, int code, string msg) { Debug.LogFormat("handler onJoinNationalRoom.roomId ={0}, code={1}, msg={2}", roomId, code, msg); OnJoinNationalRoomCompleteEvent?.Invoke(roomId, code, msg); } ```|

|函数原型|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void JoinNationalRoomCompleteCallback(string roomId, int code, string msg); // 事件函数 public event JoinNationalRoomCompleteCallback OnJoinNationalRoomCompleteEvent;|

Parameters  

|Name|Description|
|:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------|
|roomId|房间ID。|
|code|结果码。 说明： 返回值为0则表示成功，返回值为[其他](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gmmeerror-csharp-native-0000002359123668)则表示失败。|
|msg|结果码描述信息。|

#### onJoinRangeRoom

加入范围房间回调。  

|回调原型||
|:-|-|
|``` public void onJoinRangeRoom(string roomId, int code, string msg) { Debug.LogFormat("handler onJoinRangeRoom.roomId ={0}, code={1}, msg={2}", roomId, code, msg); OnJoinRangeRoomCompleteEvent?.Invoke(roomId, code, msg); } ```||

|函数原型|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void JoinRangeRoomCompleteCallback(string roomId, int code, string msg); // 事件函数 public event JoinRangeRoomCompleteCallback OnJoinRangeRoomCompleteEvent;|

#### onSwitchRoom

切换房间回调。  

|回调原型|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|``` public void onSwitchRoom(string roomId, int code, string msg) { Debug.LogFormat("handler onSwitchRoom.roomId ={0}, code={1}, msg={2}", roomId, code, msg); OnSwitchRoomCompleteEvent?.Invoke(roomId, code, msg); } ```|

|函数原型|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void SwitchRoomCompleteCallback(string roomId, int code, string msg); // 事件函数 public event SwitchRoomCompleteCallback OnSwitchRoomCompleteEvent;|

Parameters  

|Name|Description|
|:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------|
|roomId|房间ID。|
|code|结果码。 说明： 返回值为0则表示成功，返回值为[其他](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gmmeerror-csharp-native-0000002359123668)则表示失败。|
|msg|结果码描述信息。|

#### onLeaveRoom

离开房间回调。  

|回调原型|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|``` public void onLeaveRoom(string roomId, int code, string msg) { Debug.LogFormat("handler onLeaveRoom.roomId ={0}, code={1}, msg={2}", roomId, code, msg); OnLeaveRoomCompleteEvent?.Invoke(roomId, code, msg); } ```|

|函数原型|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void LeaveRoomCompleteCallback(string roomId, int code, string msg); // 事件函数 public event LeaveRoomCompleteCallback OnLeaveRoomCompleteEvent;|

Parameters  

|Name|Description|
|:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------|
|roomId|房间ID。|
|code|结果码。 说明： 返回值为0则表示成功，返回值为[其他](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gmmeerror-csharp-native-0000002359123668)则表示失败。|
|msg|结果码描述信息。|

#### onPlayerOnline

其他玩家加入房间回调。  

|回调原型|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|``` public void onPlayerOnline(string roomId, string openId) { Debug.LogFormat("handler onPlayerOnline. roomId={0}, openId={1}", roomId, openId); OnPlayerOnlineCompleteEvent?.Invoke(roomId, openId); } ```|

|函数原型|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void PlayerOnlineCompleteCallback(string roomId, string openId); // 事件函数 public event PlayerOnlineCompleteCallback OnPlayerOnlineCompleteEvent;|

Parameters  

|Name|Description|
|:-----|:-------------------------------------------------|
|roomId|房间ID。|
|openId|玩家ID。 说明： 可以是您的游戏在第三方平台生成的玩家ID，或者是您的自建账号体系生成的玩家ID。|

#### onPlayerOffline

其他玩家离开房间回调。  

|回调原型|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|``` public void onPlayerOffline(string roomId, string openId) { Debug.LogFormat("handler onPlayerOffline. roomId={0}, openId={1}", roomId, openId); OnPlayerOfflineCompleteEvent?.Invoke(roomId, openId); } ```|

|函数原型|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void PlayerOfflineCompleteCallback(string roomId, string openId); // 事件函数 public event PlayerOfflineCompleteCallback OnPlayerOfflineCompleteEvent;|

Parameters  

|Name|Description|
|:-----|:-------------------------------------------------|
|roomId|房间ID。|
|openId|玩家ID。 说明： 可以是您的游戏在第三方平台生成的玩家ID，或者是您的自建账号体系生成的玩家ID。|

#### onMutePlayer

屏蔽指定玩家语音回调。  

|回调原型|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|``` public void onMutePlayer(string roomId, string openId, bool isMuted, int code, string msg) { Debug.LogFormat("handler onMutePlayer.roomId ={0}, openId=={1}, isMuted={2}, code={3}, msg={4}", roomId, openId, isMuted, code, msg); OnMutePlayerCompleteEvent?.Invoke(roomId, openId, isMuted, code, msg); } ```|

|函数原型|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void MutePlayerCompleteCallback(string roomId, string openId, bool isMuted, int code, string msg); // 事件函数 public event MutePlayerCompleteCallback OnMutePlayerCompleteEvent;|

Parameters  

|Name|Description|
|:------|:-------------------------------------------------------------------------------------------------------------------------------------------------|
|roomId|房间ID。|
|openId|用户ID。|
|isMuted|是否被屏蔽。 * true：开启屏蔽 * false：取消屏蔽|
|code|结果码。 说明： 返回值为0则表示成功，返回值为[其他](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gmmeerror-csharp-native-0000002359123668)则表示失败。|
|msg|结果码描述信息。|

#### onMuteAllPlayers

屏蔽所有玩家语音回调。  

|回调原型|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|``` #if UNITY_ANDROID && !UNITY_EDITOR public void onMuteAllPlayers(string roomId, AndroidJavaObject openIds, bool isMuted, int code, string msg) { List<string> openIdList = openIds == null ? new List<string>() : ConvertJavaList(openIds); string openIdListStr = string.Join(",", openIdList); Debug.LogFormat("handler onMutePlayer.roomId ={0}, openIdListStr =={1}, isMuted={2}, code={3}, msg={4}", roomId, openIdListStr, isMuted, code, msg); OnMuteAllPlayersCompleteEvent?.Invoke(roomId, openIdList, isMuted, code, msg); } #else public void onMuteAllPlayers(string roomId, string openIds, bool isMuted, int code, string msg) { List<string> openIdList = new List<string>(openIds.Split(',')); Debug.LogFormat("handler onMutePlayer.roomId ={0}, openIdListStr =={1}, isMuted={2}, code={3}, msg={4}", roomId, openIds, isMuted, code, msg); OnMuteAllPlayersCompleteEvent?.Invoke(roomId, openIdList, isMuted, code, msg); } #endif ```|

|函数原型|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void MuteAllPlayersCompleteCallback(string roomId, List\<string\> openIds, bool isMuted, int code, string msg); // 事件函数 public event MuteAllPlayersCompleteCallback OnMuteAllPlayersCompleteEvent;|

Parameters  

|Name|Description|
|:------|:-------------------------------------------------------------------------------------------------------------------------------------------------|
|roomId|房间ID。|
|openIds|用户ID集合。|
|isMuted|是否被屏蔽。 * true：屏蔽 * false：取消屏蔽|
|code|结果码。 说明： 返回值为0则表示成功，返回值为[其他](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gmmeerror-csharp-native-0000002359123668)则表示失败。|
|msg|结果码描述信息。|

#### onForbidPlayer

房主禁言指定玩家回调。  

|回调原型|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|``` public void onForbidPlayer(string roomId, string openId, bool isForbidden, int code, string msg) { Debug.LogFormat("handler onForbidPlayer.roomId ={0}, openId ={1}, isForbidden={2}, code={3}, msg={4} ", roomId, openId, isForbidden, code, msg); OnForbidPlayerCompleteEvent?.Invoke(roomId, openId, isForbidden, code, msg); } ```|

|函数原型|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void ForbidPlayerCompleteCallback(string roomId, string openIds, bool isForbidden, int code, string msg); // 事件函数 public event ForbidPlayerCompleteCallback OnForbidPlayerCompleteEvent;|

Parameters  

|Name|Description|
|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------|
|roomId|房间ID。|
|openId|用户ID。|
|isForbidden|是否被禁言。 * true：是 * false：否|
|code|结果码。 说明： 返回值为0则表示成功，返回值为[其他](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gmmeerror-csharp-native-0000002359123668)则表示失败。|
|msg|结果码描述信息。|

#### onForbidAllPlayers

房主禁言所有玩家回调。  

|回调原型|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|``` #if UNITY_ANDROID && !UNITY_EDITOR public void onForbidAllPlayers(string roomId, AndroidJavaObject openIds, bool isForbidden, int code, string msg) { List<string> openIdList = openIds == null ? new List<string>() : ConvertJavaList(openIds); string openIdListStr = string.Join(",", openIdList); Debug.LogFormat("handler onForbidAllPlayers.roomId ={0}, openIds={1}, isForbidden={2}, code={3}, msg={4} ", roomId, openIds, isForbidden, code, msg); OnForbidAllPlayersCompleteEvent?.Invoke(roomId, openIdList, isForbidden, code, msg); } #else public void onForbidAllPlayers(string roomId, string openIds, bool isForbidden, int code, string msg) { List<string> openIdList = new List<string>(openIds.Split(',')); Debug.LogFormat("handler onForbidAllPlayers.roomId ={0}, openIds={1}, isForbidden={2}, code={3}, msg={4} ", roomId, openIds, isForbidden, code, msg); OnForbidAllPlayersCompleteEvent?.Invoke(roomId, openIdList, isForbidden, code, msg); } #endif ```|

|函数原型|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void ForbidAllPlayersCompleteCallback(string roomId, List\<string\> openIds, bool isForbidden, int code, string msg); // 事件函数 public event ForbidAllPlayersCompleteCallback OnForbidAllPlayersCompleteEvent;|

Parameters  

|Name|Description|
|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------|
|roomId|房间ID。|
|openIds|用户ID集合。|
|isForbidden|是否被禁言。 * true：是 * false：否|
|code|结果码。 说明： 返回值为0则表示成功，返回值为[其他](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gmmeerror-csharp-native-0000002359123668)则表示失败。|
|msg|结果码描述信息。|

#### onForbiddenByOwner

被禁言玩家收到禁言指令回调。  

|回调原型|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|``` #if UNITY_ANDROID && !UNITY_EDITOR public void onForbiddenByOwner(string roomId, AndroidJavaObject openIds, bool isForbidden) { List<string> openIdList = openIds == null ? new List<string>() : ConvertJavaList(openIds); Debug.LogFormat("handler onForbiddenByOwner.roomId ={0}, openIds size ={1}, isForbidden={2} ", roomId, openIdList.Count, isForbidden); OnForbiddenByOwnerCompleteEvent?.Invoke(roomId, openIdList, isForbidden); } #else public void onForbiddenByOwner(string roomId, string openIds, bool isForbidden) { List<string> openIdList = new List<string>(openIds.Split(',')); Debug.LogFormat("handler onForbiddenByOwner.roomId ={0}, openIds size ={1}, isForbidden={2} ", roomId, openIdList.Count, isForbidden); OnForbiddenByOwnerCompleteEvent?.Invoke(roomId, openIdList, isForbidden); } #endif ```|

|函数原型|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void ForbiddenByOwnerCompleteCallback(string roomId, List\<string\> openIds, bool isForbidden); // 事件函数 public event ForbiddenByOwnerCompleteCallback OnForbiddenByOwnerCompleteEvent;|

Parameters  

|Name|Description|
|:----------|:------------------------|
|roomId|房间ID。|
|openIds|用户ID集合。|
|isForbidden|是否被禁言。 * true：是 * false：否|

#### onRemoteMicroStateChanged

其他玩家麦克风状态变化回调。  

|回调原型|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|``` public void onRemoteMicroStateChanged(string roomId, string openId, bool isMute) { Debug.LogFormat("handler onRemoteMicroStateChanged. roomId={0}, openId={1}, isMute={2} ", roomId, openId, isMute); OnRemoteMicroStateChangedCompleteEvent?.Invoke(roomId, openId, isMute); } ```|

|函数原型|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void OnRemoteMicroStateChangedCompleteCallback(string roomId, string openId, bool isMute); // 事件函数 public event OnRemoteMicroStateChangedCompleteCallback OnRemoteMicroStateChangedCompleteEvent;|

Parameters  

|Name|Description|
|:-----|:-----------------------|
|roomId|房间ID。|
|openId|玩家ID。|
|isMute|是否静音。 * true：是 * false：否|

#### onVoiceToText

语音转文本回调。  

|回调原型|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|``` public void onVoiceToText(string text, int code, string msg) { Debug.LogFormat("handler onVoiceToText.text ={0}, code={1}, msg={2} ", text, code, msg); OnVoiceToTextCompleteEvent?.Invoke(text, code, msg); } ```|

|函数原型|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void VoiceToTextCompleteCallback(string text, int code, string msg); // 事件函数 public event VoiceToTextCompleteCallback OnVoiceToTextCompleteEvent;|

Parameters  

|Name|Description|
|:---|:-------------------------------------------------------------------------------------------------------------------------------------------------|
|text|语音转换后的文本。|
|code|结果码。 说明： 返回值为0则表示成功，返回值为[其他](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gmmeerror-csharp-native-0000002359123668)则表示失败。|
|msg|结果码描述信息。|

#### onSpeakersDetection

获取当前房间发言玩家回调。  

|回调原型|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|``` #if UNITY_ANDROID && !UNITY_EDITOR public void onSpeakersDetection(AndroidJavaObject openIds) { List<string> openIdList = openIds == null ? new List<string>() : ConvertJavaList(openIds); Debug.LogFormat("handler onSpeakersDetection.openIds size ={0} ", openIdList.Count); OnSpeakersDetectionCompleteEvent?.Invoke(openIdList); } #else public void onSpeakersDetection(string openIds) { List<string> openIdList = new List<string>(openIds.Split(",")); Debug.LogFormat("handler onSpeakersDetection.openIds size ={0} ", openIdList.Count); OnSpeakersDetectionCompleteEvent?.Invoke(openIdList); } #endif ```|

|函数原型|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void OnSpeakersDetectionCompleteCallback(List\<string\> openIds); // 事件函数 public event OnSpeakersDetectionCompleteCallback OnSpeakersDetectionCompleteEvent;|

Parameters  

|Name|Description|
|:------|:-------------------------------------------------|
|openIds|玩家ID。 说明： 可以是您的游戏在第三方平台生成的玩家ID，或者是您的自建账号体系生成的玩家ID。|

#### onSpeakersDetectionEx

获取当前房间发言玩家回调。  
![](https://media:801773304273571171)  
1.8.1.300（含）及以上版本SDK可使用。  

|回调原型|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|``` #if UNITY_ANDROID && !UNITY_EDITOR public void onSpeakersDetectionEx(AndroidJavaObject userVolumeInfos) { List<VolumeInfo> list = new List<VolumeInfo>(); if (userVolumeInfos == null) { OnSpeakersDetectionExCompleteEvent?.Invoke(list); return; } AndroidJavaObject[] userVolumeInfoArray = userVolumeInfos.Call<AndroidJavaObject[]>("toArray"); List<string> openIdList = new List<string>(list.Count); foreach (AndroidJavaObject userVolumeInfo in userVolumeInfoArray) { VolumeInfo volumeInfo = new VolumeInfo(); volumeInfo.OpenId = userVolumeInfo.Call<string>("getOpenId"); volumeInfo.Volume = userVolumeInfo.Call<int>("getVolume"); list.Add(volumeInfo); openIdList.Add(volumeInfo.OpenId); } OnSpeakersDetectionExCompleteEvent?.Invoke(list); OnSpeakersDetectionCompleteEvent?.Invoke(openIdList); } #else public void onSpeakersDetectionEx(string userVolumeInfos) { List<VolumeInfo> list = JsonUtil.FromJson<List<VolumeInfo>>(userVolumeInfos); Debug.LogFormat("handler onSpeakersDetectionEx.userVolumeInfos size ={0} ", list.Count); OnSpeakersDetectionExCompleteEvent?.Invoke(list); List<string> openIdList = new List<string>(list.Count); foreach (var volumeInfo in list) { openIdList.Add(volumeInfo.OpenId); } OnSpeakersDetectionCompleteEvent?.Invoke(openIdList); } #endif ```|

|函数原型|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void OnSpeakersDetectionExCompleteCallback(List\<VolumeInfo\> userVolumeInfos); // 事件函数 public event OnSpeakersDetectionExCompleteCallback OnSpeakersDetectionExCompleteEvent;|

Parameters  

|Name|Description|
|:------|:-------------------------------------------------|
|openIds|玩家ID。 说明： 可以是您的游戏在第三方平台生成的玩家ID，或者是您的自建账号体系生成的玩家ID。|

#### onRecordAudioMsg

录制语音消息回调。  

|回调原型|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|``` public void onRecordAudioMsg(string filePath, int code, string msg) { Debug.LogFormat("handler onRecordAudioMsg."); OnRecordAudioMsgCompleteEvent?.Invoke(filePath, code, msg); } ```|

|函数原型|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void RecordAudioMsgCompleteCallback(string filePath, int code, string msg); // 事件函数 public event RecordAudioMsgCompleteCallback OnRecordAudioMsgCompleteEvent;|

Parameters  

|Name|Description|
|:-------|:-------------------------------------------------------------------------------------------------------------------------------------------------|
|filePath|录制的音频文件本地保存地址。|
|code|结果码。 说明： 返回值为0则表示成功，返回值为[其他](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gmmeerror-csharp-native-0000002359123668)则表示失败。|
|msg|结果码描述信息。|

#### onUploadAudioMsgFile

上传语音消息文件回调。  

|回调原型|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|``` public void onUploadAudioMsgFile(String filePath, String fileId, int code, String msg) { LogUtil.i(ROOM_TAG, "filePath:" + filePath + ",fileId:" + fileId + ",code:" + code + ",message:" + msg); OnUploadAudioMsgFileCompleteEvent?.Invoke(filePath, fileId, code, msg); } ```|

|函数原型|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void UploadAudioMsgFileCompleteCallback(String filePath, String fileId, int code, String msg); // 事件函数 public event UploadAudioMsgFileCompleteCallback OnUploadAudioMsgFileCompleteEvent;|

Parameters  

|Name|Description|
|:-------|:-------------------------------------------------------------------------------------------------------------------------------------------------|
|filePath|语音消息文件的待上传路径。|
|fileId|待上传文件的唯一标识，即文件ID。|
|code|结果码。 说明： 返回值为0则表示成功，返回值为[其他](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gmmeerror-csharp-native-0000002359123668)则表示失败。|
|msg|结果码描述信息。|

#### onDownloadAudioMsgFile

下载语音消息文件回调。  

|回调原型|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|``` public void onDownloadAudioMsgFile(String filePath, String fileId, int code, String msg) { LogUtil.i(ROOM_TAG, "filePath:" + filePath + ",fileId:" + fileId + ",message:" + msg); OnDownloadAudioMsgFileCompleteEvent?.Invoke(filePath, fileId, code, msg); } ```|

|函数原型|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void DownloadAudioMsgFileCompleteCallback(String filePath, String fileId, int code, String msg); // 事件函数 public event DownloadAudioMsgFileCompleteCallback OnDownloadAudioMsgFileCompleteEvent;|

Parameters  

|Name|Description|
|:-------|:-------------------------------------------------------------------------------------------------------------------------------------------------|
|filePath|语音消息文件的存储路径。|
|fileId|待下载文件的唯一标识，即文件ID。|
|code|结果码。 说明： 返回值为0则表示成功，返回值为[其他](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gmmeerror-csharp-native-0000002359123668)则表示失败。|
|msg|结果码描述信息。|

#### onPlayAudioMsg

播放语音消息回调。  

|回调原型|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|``` public void onPlayAudioMsg(String filePath, int code, String msg) { LogUtil.i(ROOM_TAG, "filePath:" + filePath + ",code:" + code + ",message:" + msg); OnPlayAudioMsgCompleteEvent?.Invoke(filePath, code, msg); } ```|

|函数原型|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void PlayAudioMsgCompleteCallback(String filePath, int code, String msg); // 事件函数 public event PlayAudioMsgCompleteCallback OnPlayAudioMsgCompleteEvent;|

Parameters  

|Name|Description|
|:-------|:-------------------------------------------------------------------------------------------------------------------------------------------------|
|filePath|待播放语音消息文件的本地地址。|
|code|结果码。 说明： 返回值为0则表示成功，返回值为[其他](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gmmeerror-csharp-native-0000002359123668)则表示失败。|
|msg|结果码描述信息。|

#### onStartDetectAudioFile

语音消息文件风控送检回调。  

|回调原型|
|:--------------------------------------------------------------------------------------------------------------------------------------------------|
|``` public void onStartDetectAudioFile(string fileId, int code, string msg) { OnStartDetectAudioFileCompleteEvent?.Invoke(fileId, code, msg); } ```|

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void StartDetectAudioFileCompleteCallback(string fileId, int code, string msg); // 事件函数 public event StartDetectAudioFileCompleteCallback OnStartDetectAudioFileCompleteEvent;|

Parameters  

|Name|Description|
|:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------|
|fileId|语音消息音频文件ID。|
|code|结果码。 说明： 返回值为0则表示成功，返回值为[其他](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-gmmeerror-csharp-native-0000002359123668)则表示失败。|
|msg|结果码描述信息。|

#### onAudioClipStateChangedNotify

播放本地音效状态回调。  

|回调原型|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|``` #if UNITY_IOS public void onAudioClipStateChangedNotify(string audioPlayStateInfoStr) { Debug.LogFormat("handler onAudioClipStateChangedNotify. the value is : {0}", audioPlayStateInfoStr); AudioPlayStateInfo audioPlayStateInfo = JsonUtil.FromJson<AudioPlayStateInfo>(audioPlayStateInfoStr); audioPlayStateInfo.StateEnum =  (HWAudioClipsStateEnum) Enum.ToObject(typeof(HWAudioClipsStateEnum), audioPlayStateInfo.State); OnAudioClipStateChangedNotifyEvent?.Invoke(audioPlayStateInfo); } #endif # if UNITY_ANDROID && !UNITY_EDITOR public void onAudioClipStateChangedNotify(AndroidJavaObject audioPlayStateInfoJavaObject) { Debug.LogFormat("handler onAudioClipStateChangedNotify. the value is : {0}", audioPlayStateInfoJavaObject.ToString()); AudioPlayStateInfo audioPlayStateInfo = AudioPlayStateInfo.ConvertAudioPlayStateInfo(audioPlayStateInfoJavaObject); OnAudioClipStateChangedNotifyEvent?.Invoke(audioPlayStateInfo); } # endif ```|

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void AudioClipStateChangedNotifyCallback([AudioPlayStateInfo](https://developer.huawei.com/consumer/cn/doc/games-references/gamemme-audioplaystateinfo-csharp-native-0000002392643781) audioPlayStateInfo); // 事件函数 public event AudioClipStateChangedNotifyCallback OnAudioClipStateChangedNotifyEvent;|

Parameters  

|Name|Description|
|:-----------------|:----------|
|audioPlayStateInfo|音效文件状态信息。|

#### onRtmConnectionChanged

RTM连接状态变更回调。  

|回调原型|
|:----------------------------------------------------------------------------------------------------------------------------|
|``` public void onRtmConnectionChanged(RtmConnectionStatusNotify notify) { OnRtmConnectionChangedEvent?.Invoke(notify); } ```|

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void OnRtmConnectionChangedCallback([RtmConnectionStatusNotify](https://developer.huawei.com/consumer/cn/doc/games-references/rtmconnectionstatusnotify-csharp-native-0000002392643689) notify); // 事件函数 public event OnRtmConnectionChangedCallback OnRtmConnectionChangedEvent;|

Parameters  

|Name|Description|
|:-----|:----------|
|notify|RTM连接状态通知。|

#### onGetRtmChannelInfo

获取RTM频道信息回调。  

|回调原型|
|:--------------------------------------------------------------------------------------------------------------------|
|``` public void onGetRtmChannelInfo(GetRtmChannelInfoResult result) { OnGetRtmChannelInfoEvent?.Invoke(result); } ```|

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void OnGetRtmChannelInfoCallback([GetRtmChannelInfoResult](https://developer.huawei.com/consumer/cn/doc/games-references/getrtmchannelinforesult-csharp-native-0000002358963708) result); // 事件函数 public event OnGetRtmChannelInfoCallback OnGetRtmChannelInfoEvent;|

Parameters  

|Name|Description|
|:-----|:-----------|
|result|获取RTM频道信息结果。|

#### onSubscribeRtmChannel

订阅RTM频道回调。  

|回调原型|
|:--------------------------------------------------------------------------------------------------------------------------|
|``` public void onSubscribeRtmChannel(SubscribeRtmChannelResult result) { OnSubscribeRtmChannelEvent?.Invoke(result); } ```|

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void OnSubscribeRtmChannelCallback([SubscribeRtmChannelResult](https://developer.huawei.com/consumer/cn/doc/games-references/subscribertmchannelresult-csharp-native-0000002358963676) result); // 事件函数 public event OnSubscribeRtmChannelCallback OnSubscribeRtmChannelEvent;|

Parameters  

|Name|Description|
|:-----|:----------|
|result|订阅RTM频道结果。|

#### onUnSubscribeRtmChannel

取消订阅RTM频道回调。  

|回调原型|
|:--------------------------------------------------------------------------------------------------------------------------------|
|``` public void onUnSubscribeRtmChannel(UnSubscribeRtmChannelResult result) { OnUnSubscribeRtmChannelEvent?.Invoke(result); } ```|

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void OnUnSubscribeRtmChannelCallback([UnSubscribeRtmChannelResult](https://developer.huawei.com/consumer/cn/doc/games-references/unsubscribertmchannelresult-csharp-native-0000002359123580) result); // 事件函数 public event OnUnSubscribeRtmChannelCallback OnUnSubscribeRtmChannelEvent;|

Parameters  

|Name|Description|
|:-----|:-----------|
|result|取消订阅RTM频道结果。|

#### onPublishRtmPeerMessage

发布RTM点对点消息回调。  

|回调原型|
|:--------------------------------------------------------------------------------------------------------------------------------|
|``` public void onPublishRtmPeerMessage(PublishRtmPeerMessageResult result) { OnPublishRtmPeerMessageEvent?.Invoke(result); } ```|

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void OnPublishRtmPeerMessageCallback([PublishRtmPeerMessageResult](https://developer.huawei.com/consumer/cn/doc/games-references/publishrtmpeermessageresult-csharp-native-0000002392643697) result); // 事件函数 public event OnPublishRtmPeerMessageCallback OnPublishRtmPeerMessageEvent;|

Parameters  

|Name|Description|
|:-----|:------------|
|result|发布RTM点对点消息结果。|

#### onPublishRtmChannelMessage

发布RTM频道消息回调。  

|回调原型|
|:-----------------------------------------------------------------------------------------------------------------------------------------|
|``` public void onPublishRtmChannelMessage(PublishRtmChannelMessageResult result) { OnPublishRtmChannelMessageEvent?.Invoke(result); } ```|

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void OnPublishRtmChannelMessageCallback([PublishRtmChannelMessageResult](https://developer.huawei.com/consumer/cn/doc/games-references/publishrtmchannelmessageresult-csharp-native-0000002392723557) result); // 事件函数 public event OnPublishRtmChannelMessageCallback OnPublishRtmChannelMessageEvent;|

Parameters  

|Name|Description|
|:-----|:-----------|
|result|发布RTM频道消息结果。|

#### onReceiveRtmPeerMessage

接收RTM点对点消息通知。  

|回调原型|
|:--------------------------------------------------------------------------------------------------------------------------------|
|``` public void onReceiveRtmPeerMessage(ReceiveRtmPeerMessageNotify notify) { OnReceiveRtmPeerMessageEvent?.Invoke(notify); } ```|

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void OnReceiveRtmPeerMessageCallback([ReceiveRtmPeerMessageNotify](https://developer.huawei.com/consumer/cn/doc/games-references/receivertmpeermessagenotify-csharp-native-0000002358963684) notify); // 事件函数 public event OnReceiveRtmPeerMessageCallback OnReceiveRtmPeerMessageEvent;|

Parameters  

|Name|Description|
|:-----|:------------|
|notify|接收RTM点对点信息结果。|

#### onReceiveRtmChannelMessage

接收RTM频道消息通知。  

|回调原型|
|:-----------------------------------------------------------------------------------------------------------------------------------------|
|``` public void onReceiveRtmChannelMessage(ReceiveRtmChannelMessageNotify notify) { OnReceiveRtmChannelMessageEvent?.Invoke(notify); } ```|

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void OnReceiveRtmChannelMessageCallback([ReceiveRtmChannelMessageNotify](https://developer.huawei.com/consumer/cn/doc/games-references/receivertmchannelmessagenotify-csharp-native-0000002392643701) notify); // 事件函数 public event OnReceiveRtmChannelMessageCallback OnReceiveRtmChannelMessageEvent;|

Parameters  

|Name|Description|
|:-----|:-----------|
|notify|接收RTM频道信息结果。|

#### onSetRtmChannelPlayerProperties

设置RTM频道内玩家自定义属性回调。  

|回调原型|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------|
|``` public void onSetRtmChannelPlayerProperties(SetRtmChannelPlayerPropertiesResult result) { OnSetRtmChannelPlayerPropertiesEvent?.Invoke(result); } ```|

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void OnSetRtmChannelPlayerPropertiesCallback([SetRtmChannelPlayerPropertiesResult](https://developer.huawei.com/consumer/cn/doc/games-references/setrtmchannelplayerpropertiesresult-csharp-native-0000002358963688) result); // 事件函数 public event OnSetRtmChannelPlayerPropertiesCallback OnSetRtmChannelPlayerPropertiesEvent;|

Parameters  

|Name|Description|
|:-----|:-----------|
|result|设置频道内玩家属性结果。|

#### onGetRtmChannelPlayerProperties

查询RTM频道内玩家自定义属性回调。  

|回调原型|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------|
|``` public void onGetRtmChannelPlayerProperties(GetRtmChannelPlayerPropertiesResult result) { OnGetRtmChannelPlayerPropertiesEvent?.Invoke(result); } ```|

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void OnGetRtmChannelPlayerPropertiesCallback([GetRtmChannelPlayerPropertiesResult](https://developer.huawei.com/consumer/cn/doc/games-references/getrtmchannelplayerpropertiesresult-csharp-native-0000002359123592) result); // 事件函数 public event OnGetRtmChannelPlayerPropertiesCallback OnGetRtmChannelPlayerPropertiesEvent;|

Parameters  

|Name|Description|
|:-----|:-----------|
|result|查询频道内玩家属性结果。|

#### onDeleteRtmChannelPlayerProperties

删除RTM频道内玩家自定义属性回调。  

|回调原型|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|``` public void onDeleteRtmChannelPlayerProperties(DeleteRtmChannelPlayerPropertiesResult result) { OnDeleteRtmChannelPlayerPropertiesEvent?.Invoke(result); } ```|

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void OnDeleteRtmChannelPlayerPropertiesCallback([DeleteRtmChannelPlayerPropertiesResult](https://developer.huawei.com/consumer/cn/doc/games-references/deletertmchannelplayerpropertiesres-csharp-native-0000002358963692) result); // 事件函数 public event OnDeleteRtmChannelPlayerPropertiesCallback OnDeleteRtmChannelPlayerPropertiesEvent;|

Parameters  

|Name|Description|
|:-----|:-----------|
|result|删除频道内玩家属性结果。|

#### onSetRtmChannelProperties

设置RTM频道自定义属性回调。  

|回调原型|
|:--------------------------------------------------------------------------------------------------------------------------------------|
|``` public void onSetRtmChannelProperties(SetRtmChannelPropertiesResult result) { OnSetRtmChannelPropertiesEvent?.Invoke(result); } ```|

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void OnSetRtmChannelPropertiesCallback([SetRtmChannelPropertiesResult](https://developer.huawei.com/consumer/cn/doc/games-references/setrtmchannelpropertiesresult-csharp-native-0000002358963696) result); // 事件函数 public event OnSetRtmChannelPropertiesCallback OnSetRtmChannelPropertiesEvent;|

Parameters  

|Name|Description|
|:-----|:----------|
|result|设置频道属性结果。|

#### onGetRtmChannelProperties

查询RTM频道自定义属性回调。  

|回调原型|
|:--------------------------------------------------------------------------------------------------------------------------------------|
|``` public void onGetRtmChannelProperties(GetRtmChannelPropertiesResult result) { OnGetRtmChannelPropertiesEvent?.Invoke(result); } ```|

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void OnGetRtmChannelPropertiesCallback([GetRtmChannelPropertiesResult](https://developer.huawei.com/consumer/cn/doc/games-references/getrtmchannelpropertiesresult-csharp-native-0000002359123600) result); // 事件函数 public event OnGetRtmChannelPropertiesCallback OnGetRtmChannelPropertiesEvent;|

Parameters  

|Name|Description|
|:-----|:----------|
|result|查询频道属性结果。|

#### onDeleteRtmChannelProperties

删除RTM频道自定义属性回调。  

|回调原型|
|:-----------------------------------------------------------------------------------------------------------------------------------------------|
|``` public void onDeleteRtmChannelProperties(DeleteRtmChannelPropertiesResult result) { OnDeleteRtmChannelPropertiesEvent?.Invoke(result); } ```|

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void OnDeleteRtmChannelPropertiesCallback([DeleteRtmChannelPropertiesResult](https://developer.huawei.com/consumer/cn/doc/games-references/deletertmchannelpropertiesresult-csharp-native-0000002358963700) result); // 事件函数 public event OnDeleteRtmChannelPropertiesCallback OnDeleteRtmChannelPropertiesEvent;|

Parameters  

|Name|Description|
|:-----|:----------|
|result|删除频道属性结果。|

#### onGetRtmChannelHistoryMessages

查询RTM频道历史消息回调。  

|回调原型|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
|``` public void onGetRtmChannelHistoryMessages(GetRtmChannelHistoryMessagesResult result) { OnGetRtmChannelHistoryMessagesEvent?.Invoke(result); } ```|

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void OnGetRtmChannelHistoryMessagesCallback([GetRtmChannelHistoryMessagesResult](https://developer.huawei.com/consumer/cn/doc/games-references/getrtmchannelhistorymessagesresult-csharp-native-0000002392643765) result); // 事件函数 public event OnGetRtmChannelHistoryMessagesCallback OnGetRtmChannelHistoryMessagesEvent;|

Parameters  

|Name|Description|
|:-----|:----------|
|result|查询频道历史消息结果。|

#### onRtmChannelPlayerPropertiesChanged

RTM频道内玩家属性变更回调。  

|回调原型|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
|``` public void onRtmChannelPlayerPropertiesChanged(RtmChannelPlayerPropertiesNotify notify) { OnRtmChannelPlayerPropertiesChangedEvent?.Invoke(notify); } ```|

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void OnRtmChannelPlayerPropertiesChangedCallback([RtmChannelPlayerPropertiesNotify](https://developer.huawei.com/consumer/cn/doc/games-references/rtmchannelplayerpropertiesnotify-csharp-native-0000002392643709) notify); // 事件函数 public event OnRtmChannelPlayerPropertiesChangedCallback OnRtmChannelPlayerPropertiesChangedEvent;|

Parameters  

|Name|Description|
|:-----|:-----------|
|notify|频道内玩家属性变更通知。|

#### onRtmChannelPropertiesChanged

RTM频道属性变更回调。  

|回调原型|
|:-------------------------------------------------------------------------------------------------------------------------------------------|
|``` public void onRtmChannelPropertiesChanged(RtmChannelPropertiesNotify notify) { OnRtmChannelPropertiesChangedEvent?.Invoke(notify); } ```|

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|// 委托函数 public delegate void OnRtmChannelPropertiesChangedCallback([RtmChannelPropertiesNotify](https://developer.huawei.com/consumer/cn/doc/games-references/rtmchannelpropertiesnotify-csharp-native-0000002392643721) notify); // 事件函数 private event OnRtmChannelPropertiesChangedCallback OnRtmChannelPropertiesChangedEvent;|

Parameters  

|Name|Description|
|:-----|:----------|
|notify|频道属性变更通知。|

