---
name: document/cn/games-references/gameobe-overview-csharp-0000002361676000
title: 概览
uri: https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-overview-csharp-0000002361676000
---

# 概览

#### 核心类

|Class|Description|
|:----------------------------------------------------------------------------------------------------------------------|:----------|
|[Client](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-client-csharp-0000002361516112)|联机对战客户端构造类。|
|[Room](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-room-csharp-0000002395196057)|联机对战房间管理类。|
|[Group](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-group-csharp-0000002361676004)|联机对战队伍管理类。|
|[Player](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-player-csharp-0000002395355957)|联机对战玩家构造类。|
|[RandomUtil](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-randomutils-csharp-0000002361516116)|伪随机数生成器。|

#### 对象定义

|Class|Description|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------|
|客户端对象||
|[ClientConfig](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-clientconfig-csharp-0000002361516120)|客户端初始化参数。|
|[Signature](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-signature-csharp-0000002395196065)|初始化签名参数。|
|[CreateRoomConfig](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-createroomconfig-csharp-0000002395355969)|创建房间参数。|
|[JoinRoomConfig](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-joinroomconfig-csharp-0000002361516128)|加入房间参数。|
|[GetAvailableRoomsConfig](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-getavailableroomsconfig-csharp-0000002395196073)|查询可用房间参数。|
|[CreateGroupConfig](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-creategroupconfig-csharp-0000002395355977)|创建小队参数。|
|[JoinGroupConfig](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-joingroupconfig-csharp-0000002361516132)|加入小队参数。|
|[LeaveGroupConfig](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-leavegroupconfig-csharp-0000002395196077)|离开小队参数。|
|[DismissGroupConfig](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-dismissgroupconfig-csharp-0000002361676024)|解散小队参数。|
|[PlayerConfig](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-playerconfig-csharp-0000002361516136)|玩家信息参数。|
|[RemovePlayerConfig](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-kickplayerconfig-0000002395196081)|踢人匹配参数。|
|[MatchRoomConfig](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-matchroomconfig-csharp-0000002395355985)|房间匹配参数。|
|[MatchGroupConfig](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-matchgroupconfig-csharp-0000002361516140)|小队匹配参数。|
|[MatchPlayerConfig](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-matchplayerconfig-csharp-0000002395196085)|在线匹配参数。|
|[MatchPlayerInfoParam](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-matchplayerinfoparam-csharp-0000002361676032)|玩家匹配规则参数。|
|[MatchTeamInfoParam](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-matchteaminfoparam-csharp-0000002395355989)|队伍匹配规则参数。|
|房间对象||
|[RoomInfo](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-roominfo-csharp-0000002395196089)|房间信息。|
|[RouterInfo](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-routerinfo-csharp-0000002361676036)|路由信息。|
|[UpdateRoomPropertiesConfig](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-updateroompropertiesconfig-csharp-0000002395355993)|更新房间信息参数。|
|[SendToClientInfo](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-sendtoclientinfo-csharp-0000002361516148)|发送房间内消息参数。|
|[RecvFromClientInfo](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-recvfromclientinfo-csharp-0000002395196093)|房间内消息广播回调参数。|
|队伍对象||
|[GroupInfo](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-groupinfo-csharp-0000002395355997)|小队信息。|
|[ModifyGroupConfig](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-modifygroupconfig-csharp-0000002361516156)|修改小队信息参数。|
|玩家对象||
|[PlayerInfo](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-playerinfo-csharp-0000002395356001)|玩家信息。|
|响应信息||
|[BaseResponse](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-baseresponse-csharp-0000002395196101)|基础响应。|
|[LoginBaseResponse](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-loginbaseresponse-csharp-0000002361676048)|登录响应。|
|[CreateRoomBaseResponse](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-createroombaseresponse-csharp-0000002395356005)|创建房间响应。|
|[JoinRoomBaseResponse](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-joinroombaseresponse-csharp-0000002361516172)|加入房间响应。|
|[GetAvailableRoomsBaseResponse](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-getavailableroomsbaseresponse-csharp-0000002395196109)|查询可用房间响应。|
|[CreateGroupBaseResponse](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-creategroupbaseresponse-csharp-0000002361676052)|创建小队响应。|
|[MatchResponse](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-matchresponse-csharp-0000002395356009)|匹配响应。|
|[GetRoomBaseResponse](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-getroombaseresponse-csharp-0000002361516176)|获取房间信息响应。|
|帧数据对象||
|[ServerEvent](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-serverevent-csharp-0000002361516180)|服务端事件。|
|[ServerFrameMessage](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-serverframemessage-csharp-0000002395196117)|服务端推送消息。|
|[FrameInfo](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-frameinfo-csharp-0000002361676064)|帧数据信息。|
|[FramePlayerInfo](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-frameplayerinfo-csharp-0000002395356021)|帧数据玩家信息。|
|[FrameExtInfo](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-frameextinfo-0000002361675988)|附加信息。|
|[FramePlayerState](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-frameplayerstate-csharp-0000002395196125)|自定义玩家状态信息。|
|[FramePlayerProp](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-frameplayerprop-csharp-0000002361676068)|自定义玩家属性信息。|
|实时消息对象||
|[SendToServerInfo](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-sendtoserverinfo-csharp-0000002395196129)|发送实时服务器消息参数。|
|[RecvFromServerInfo](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-recvfromserverinfo-csharp-0000002361676072)|实时服务器消息广播回调参数。|
|工具类对象||
|[SDKDebugLogger](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-sdkdebuglogger-csharp-0000002361516196)|SDK日志对象。|

#### 返回码

|Enum|Description|
|:-------------------------------------------------------------------------------------------------------------------|:----------|
|[ErrorCode](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-errorcode-csharp-0000002395196133)|返回码。|

