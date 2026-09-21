---
name: document/cn/games-references/gameobe-player-csharp-0000002395355957
title: Player
uri: https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-player-csharp-0000002395355957
---

# Player

|Class Info|
|:-------------------------------------------------------------------------------------|
|public class Player: Base 联机对战玩家构造类。 > 说明 > Player类的命名空间为Com.Huawei.Game.Gobes.Player。|

## Constructors

|Constructor Name|
|:------------------------------------------------------------------------------|
|public Player(int customStatus, string customProperties): base() 构造Player类的新实例。|

## Property Summary

|Name|Type|Description|
|:-------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------|
|appId|string|应用ID，可通过[GetAppId](#ZH-CN_TOPIC_0000002395355957__p10942142618181)()方法获取。|
|roomId|string|房间ID，可通过[GetRoomId](#ZH-CN_TOPIC_0000002395355957__p10171012194918)()方法获取。|
|groupId|string|队伍ID，可通过[GetGroupId](#ZH-CN_TOPIC_0000002395355957__p630491424920)()方法获取。|
|openId|string|玩家ID，可通过[GetOpenId](#ZH-CN_TOPIC_0000002395355957__p103921916124917)()方法获取。 > 说明 > 可以是您的游戏在第三方平台生成的玩家ID，或者是您的自建账号体系生成的玩家ID。|
|playerId|string|玩家联机对战账号ID，可通过[GetPlayerId](#ZH-CN_TOPIC_0000002395355957__p250318188493)()方法获取。 > 说明 > 联机对战服务在初始化后，根据玩家ID为玩家生成的联机对战账号ID。|
|customStatus|int|自定义玩家状态。|
|customProperties|string|自定义玩家属性，长度最大不超过2048个字符。|
|[OnCustomStatusChangeFailed](#section172787338517)|Action<[BaseResponse](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-baseresponse-csharp-0000002395196101)>|更新玩家状态失败回调。|
|[OnCustomStatusChangeSuccess](#section11494112155219)|Action|更新玩家状态成功回调。|
|[OnCustomPropertiesChangeFailed](#section5902337125215)|Action<[BaseResponse](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-baseresponse-csharp-0000002395196101)>|更新玩家属性失败回调。|
|[OnCustomPropertiesChangeSuccess](#section1186131175316)|Action|更新玩家属性成功回调。|

## Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:-----------------------------------------------------------------------------------|
|Player|[UpdateCustomStatus](#section138221670168)(status, callback) 更新玩家自定义状态。|
|Player|[UpdateCustomProperties](#section154168844210)(customProperties，callback) 更新玩家自定义属性。|

|Methods Inherited from Class Base||
|Method Name|Description|
|:------------|:----------|
|GetAppId()|获取appId。|
|GetRoomId()|获取roomId。|
|GetGroupId()|获取groupId。|
|GetOpenId()|获取openId。|
|GetPlayerId()|获取playerId。|

## Constructors

### constructor

|Constructor|
|:------------------------------------------------------------------------------|
|public Player(int customStatus, string customProperties): base() 构造Player类的新实例。|

**Parameters**

|Name|Type|Description|
|:---------------|:-----|:-------------------------|
|customStatus|int|选填，自定义玩家状态。|
|customProperties|string|选填，自定义玩家属性，长度最大不超过2048个字符。|

## Properties

### OnCustomStatusChangeFailed

|Property|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|OnCustomStatusChangeFailed(Action<[BaseResponse](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-baseresponse-csharp-0000002395196101)>) 更新玩家状态失败回调。|

**CallBack Parameters**

|Name|Type|Description|
|:-------|:---------------------------------------------------------------------------------------------------------------------------------|:----------|
|response|Action<[BaseResponse](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-baseresponse-csharp-0000002395196101)>|回调参数。|

**Sample Code**

```screen
Global.player.OnCustomStatusChangeFailed = (response) => {
    //  更新玩家状态失败,处理游戏逻辑
}
```

### OnCustomStatusChangeSuccess

|Property|
|:----------------------------------------------|
|OnCustomStatusChangeSuccess(Action) 更新玩家状态成功回调。|

**Sample Code**

```screen
Global.player.OnCustomStatusChangeSuccess= () =>{
   //  更新玩家状态成功,处理游戏逻辑
};
```

### OnCustomPropertiesChangeFailed

|Property|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|OnCustomPropertiesChangeFailed(Action<[BaseResponse](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-baseresponse-csharp-0000002395196101)>) 更新玩家属性失败回调。|

**CallBack Parameters**

|Name|Type|Description|
|:-------|:---------------------------------------------------------------------------------------------------------------------------------|:----------|
|response|Action<[BaseResponse](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-baseresponse-csharp-0000002395196101)>|回调参数|

**Sample Code**

```screen
Global.player.OnCustomPropertiesChangeFailed= (response) => {
    //  更新玩家属性失败,处理游戏逻辑
}
```

### OnCustomPropertiesChangeSuccess

|Property|
|:----------------------------------------------|
|OnCustomStatusChangeSuccess(Action) 更新玩家属性成功回调。|

**Sample Code**

```screen
Global.player.OnCustomStatusChangeSuccess= () =>{
    //  更新玩家属性成功,处理游戏逻辑
};
```

## Methods

### UpdateCustomStatus

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public Player UpdateCustomStatus(int status, Action<[BaseResponse](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-baseresponse-csharp-0000002395196101)> callback) 更新玩家自定义状态。|

**Parameters**

|Name|Description|
|:-------|:----------|
|status|玩家自定义状态。|
|callback|回调函数。|

**Return**

|Type|Description|
|:-----|:------------|
|Player|返回Player对象实例。|

**Sample Code**

```screen
int status= 1;
Global.player.UpdateCustomStatus(status, response =>
{
	if (response.RtnCode == 0) {
		// 更新玩家自定义状态成功
	} else {
		// 更新玩家自定义状态失败
	}
});
```

### UpdateCustomProperties

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public Player UpdateCustomProperties(string customProperties, Action<[BaseResponse](https://developer.huawei.com/consumer/cn/doc/games-references/gameobe-baseresponse-csharp-0000002395196101)> callback) 更新玩家自定义属性。|

**Parameters**

|Name|Description|
|:---------------|:----------|
|customProperties|玩家自定义属性。|
|callback|回调函数。|

**Return**

|Type|Description|
|:-----|:------------|
|Player|返回Player对象实例。|

**Sample Code**

```screen
int customProperties = "";
Global.player.UpdateCustomProperties(customProperties, response =>
{
	if (response.RtnCode == 0) {
		// 更新玩家自定义属性成功
	} else {
		// 更新玩家自定义属性失败
	}
});
```

