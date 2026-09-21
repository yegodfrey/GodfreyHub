---
name: document/cn/games-references/gameobe-createroomconfig-csharp-0000002395355969
title: CreateRoomConfig
uri: https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-createroomconfig-csharp-0000002395355969
---

# CreateRoomConfig

|Class Info|
|:----------------------------------------------------------------------|
|namespace Com.Huawei.Game.Gobes public class CreateRoomConfig 创建房间参数配置。|

## Property Summary

|Name|Type|Mandatory/Optional|Description|
|:---------------------|:-------------------------|:-----------------|:----------------------------------------------------|
|RoomName|string|Optional|房间名称，长度不超过64个字符。|
|RoomType|string|Optional|房间类型。|
|IsPrivate|int|Optional|房间是否私有。 * 0：公开 * 1：私有 默认为公开状态。|
|IsLock|int|Optional|房间是否锁定，锁定状态的房间允许查询获取，但不允许加入。 * 0：非锁定 * 1：锁定 默认为非锁定状态。|
|CustomRoomProperties|string|Optional|自定义房间属性。|
|MatchParams|Dictionary<string, string>|Optional|自定义匹配参数，JSON对象格式，最多支持5条匹配规则。|
|CustomPlayerStatus|int?|Optional|自定义玩家状态。|
|CustomPlayerProperties|string|Optional|自定义玩家属性。|
|MaxPlayers|int|Mandatory|房间最大支持人数，取值范围为[1, 100]。|

