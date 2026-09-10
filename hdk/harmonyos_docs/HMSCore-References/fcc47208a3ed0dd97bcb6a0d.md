---
name: document/cn/HMSCore-References/playerroleinfo-0000001606802348
title: PlayerRoleInfo
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/playerroleinfo-0000001606802348
---

# PlayerRoleInfo

|Class Info|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public class PlayerRoleInfo extends Object PlayerRoleInfo 类主要用于保存玩家在游戏内的角色信息，例如区服、角色名称等，供开发者在调用[PlayersClient](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/playersclient-0000001050121668)的savePlayerRole方法时使用。|

#### Public Method Summary

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250424141808.03110952404090436633411480760918:50001231000000:2800:00C97005D0E7FEE0487669070955A35E5DDA84B1C7B20308480A0558DF0FC2F1.png)  
1. roleId和roleName必传，且不能传""和null。
2. playerId、openId、unionId只能传1个，请上传游戏当前正在使用的玩家标识。  

|Qualifier and Type|Method Name and Description|
|:-----------------|:------------------------------------------------------------------------------------------------------------------------------------------|
|void|[setServerId](#section1946916196810)(String serverId) 设置玩家在游戏内的区服ID。|
|void|[setServerName](#section1897716281495)(String serverName) 设置玩家在游戏内的区服名称。|
|void|[setRoleId](#section1789519341016)(String roleId) 设置玩家在游戏内的角色ID。|
|void|[setRoleName](#section4748230101010)(String roleName) 设置玩家在游戏内的角色名称。|
|void|[setPlayerId](#section1660563512114)(String playerId) 设置玩家在游戏中的playerId。 注意： playerId、openId、unionId只能传1个，如当前使用playerId作为用户标识，则只能传playerId。|
|void|[setOpenId](#section83579225113)(String openId) 设置玩家在游戏中的openId。 注意： playerId、openId、unionId只能传1个，如当前使用openId作为用户标识，则只能传openId。|
|void|[setUnionId](#section360012545314)(String unionId) 设置玩家在游戏中的unionId。 注意： playerId、openId、unionId只能传1个，如当前使用unionId作为用户标识，则只能传unionId。|

#### Public Methods

#### setServerId

|Method|
|:------------------------------------------------------|
|public void setServerId(String serverId) 设置玩家在游戏内的区服ID。|

Parameters  

|Name|Description|
|:-------|:-----------|
|serverId|玩家在游戏内的区服ID。|

#### setServerName

|Method|
|:----------------------------------------------------------|
|public void setServerName(String serverName) 设置玩家在游戏内的区服名称。|

Parameters  

|Name|Description|
|:---------|:-----------|
|serverName|玩家在游戏内的区服名称。|

#### setRoleId

|Method|
|:--------------------------------------------------|
|public void setRoleId(String roleId) 设置玩家在游戏内的角色ID。|

Parameters  

|Name|Description|
|:-----|:-----------------|
|roleId|玩家在游戏内的角色ID。此参数必传。|

#### setRoleName

|Method|
|:------------------------------------------------------|
|public void setRoleName(String roleName) 设置玩家在游戏内的角色名称。|

Parameters  

|Name|Description|
|:-------|:-----------------|
|roleName|玩家在游戏内的角色名称。此参数必传。|

#### setPlayerId

|Method|
|:----------------------------------------------------------|
|public void setPlayerId(String playerId) 设置玩家在游戏中的playerId。|

Parameters  

|Name|Description|
|:-------|:------------------------------------------------------|
|playerId|玩家的playerId。 playerId、openId、unionId只能选择使用其中一个，并且值不能为空。|

#### setOpenId

|Method|
|:----------------------------------------------------|
|public void setOpenId(String openId) 设置玩家在游戏中的openId。|

Parameters  

|Name|Description|
|:-----|:--------------------------------------------------------|
|openId|玩家在游戏中的openId。 playerId、openId、unionId只能选择使用其中一个，并且值不能为空。|

#### setUnionId

|Method|
|:-------------------------------------------------------|
|public void setUnionId(String unionId) 设置玩家在游戏中的unionId。|

Parameters  

|Name|Description|
|:------|:---------------------------------------------------------|
|unionId|玩家在游戏中的unionId。 playerId、openId、unionId只能选择使用其中一个，并且值不能为空。|

