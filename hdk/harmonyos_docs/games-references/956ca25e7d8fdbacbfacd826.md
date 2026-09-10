---
name: document/cn/games-references/gameobe-playerinfo-server-ts-0000002395356113
title: PlayerInfo
uri: https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-playerinfo-server-ts-0000002395356113
---

# PlayerInfo

|Interface Info|
|:--------------------------------|
|export interface PlayerInfo 玩家信息。|

#### Property Summary

|Name|Type|Description|
|:---------------------|:-----------------------|:-----------------------------------------------------------|
|playerId|string|只读，玩家ID。 说明： 如果玩家为机器人，则可以使用玩家ID作为随机函数的种子生成一个玩家昵称，如"机器人1001"。|
|status|number|只读，玩家状态。 * 0：在线 * 3：离线|
|customPlayerStatus|number|只读，自定义玩家状态。|
|customPlayerProperties|string|只读，自定义玩家属性。|
|teamId|string|只读，玩家所在队伍ID。|
|isRobot|number|只读，是否为机器人。 * 0：不是 * 1：是 默认值为0。|
|robotName|string|只读，机器人名字。|
|matchParams|Record\<string, string\>|只读，自定义匹配参数，JSON结构。|

