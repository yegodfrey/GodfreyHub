---
name: document/cn/games-references/gameobe-serverevent-csharp-0000002361516180
title: ServerEvent
uri: https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-serverevent-csharp-0000002361516180
---

# ServerEvent

|Class Info|
|:--------------------------------------------------------------|
|namespace Com.Huawei.Game.Gobes public class ServerEvent 服务端事件。|

## Property Summary

|Name|Type|Description|
|:---------|:-----|:------------------------------------------------------------------------------------------------------------------------------------|
|EventType|string|事件类型。 * 1：匹配开始 * 6：加入小队 * 7：离开小队 * 8：解散小队 * 9：更新小队|
|EventParam|string|事件参数，JSON对象格式。 示例： ```screen { "roomId":"xxx", "group":{ "groupId":"xxx", "ownerId":"xxx", "players":[ { "playerId":"xxx" } ] } } ```|

