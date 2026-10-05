---
name: document/cn/HMS-References/playerextrainfo
title: com.huawei.hms.jos.games.player.PlayerExtraInfo
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/playerextrainfo
source: portal
---

PlayerExtraInfo类主要用于返回玩家的附加信息，在调用[PlayersClient](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/playersclient)的getPlayerExtraInfo方法时会返回该对象。

# **Public Method Summary**

Return| Method  
---|---  
boolean| getIsAdult()检查玩家是否成年。  
String| getPlayerId()获取当前玩家对应的playerId。  
int| getPlayerDuration()获取玩家当天的游戏时长，单位为分钟。  
boolean| getIsRealName()检查玩家是否实名。  
  
# Public Methods  


## public boolean getIsAdult()

检查玩家是否成年。

**返回值**

Type| Description  
---|---  
boolean| 玩家是否成年。
     * true：成年
     * false：未成年  
  
## public String getPlayerId()  


获取当前玩家的playerId。

**返回值**

Type| Description  
---|---  
String| 当前玩家的playerId。  
  
## public int getPlayerDuration()  


获取玩家当天的游戏时长。

**返回值**

Type| Description  
---|---  
int| 玩家当天的游戏时长，单位为分钟。不足1分钟则返回1分钟。  
  
## public boolean getIsRealName()  


检查玩家是否实名。

**返回值**

Type| Description  
---|---  
boolean| 玩家是否实名。
     * true：已实名。
     * false：未实名。  
  
  

