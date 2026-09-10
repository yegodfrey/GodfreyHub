---
name: document/cn/HMSCore-References/routechangeinfo-0000001212443594
title: RouteChangeInfo
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/routechangeinfo-0000001212443594
---

# RouteChangeInfo

|Class Info|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public class RouteChangeInfo 路线切换的对象，在调用[MapNaviListener](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapnavilistener-0000001212215832)类的[onCalBackupGuideSuccess](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapnavilistener-0000001212215832#section1947493511429)方法时会返回该类型的实例。|

#### Public Constructor Summary

|Constructor Name|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[RouteChangeInfo](#section19665112084012)(Integer routeID, [NaviLocation](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/navilocation-0000001213437004) naviLocation, boolean isAutoChange) 使用给定参数创建RouteChangeInfo对象。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------|
|boolean|[getAutoChange](#section14934056164)() 是否自动切换到备选路线。|
|[NaviLocation](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/navilocation-0000001213437004)|[getLocationInfo](#section13735181432115)() 切换路线成功后的location匹配信息。|
|Integer|[getRouteID](#section365865121019)() 切换路线成功所计算的路线ID。|

#### Public Constructors

#### RouteChangeInfo

|Constructor|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|RouteChangeInfo(Integer routeID, [NaviLocation](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/navilocation-0000001213437004) naviLocation, boolean isAutoChange) 使用给定参数创建RouteChangeInfo对象。|

Parameters  

|Name|Description|
|:-----------|:--------------------|
|routeID|切换路线成功所计算的路线ID。|
|naviLocation|切换路线成功后的location匹配信息。|
|isAutoChange|是否自动切换到备选路线。|

#### Public Methods

#### getAutoChange

|Method|
|:--------------------------------------------|
|public boolean getAutoChange() 获取是否自动切换到备选路线。|

Returns  

|Type|Description|
|:------|:---------------|
|boolean|true：是。 false：否。|

#### getLocationInfo

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [NaviLocation](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/navilocation-0000001213437004) getLocationInfo() 获取切换路线成功后的location匹配信息。|

Returns  

|Type|Description|
|:------------------------------------------------------------------------------------------------------------|:--------------------|
|[NaviLocation](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/navilocation-0000001213437004)|切换路线成功后的location匹配信息。|

#### getRouteID

|Method|
|:--------------------------------------------|
|public Integer getRouteID() 获取切换路线成功所计算的路线ID。|

Returns  

|Type|Description|
|:------|:--------------|
|Integer|切换路线成功所计算的路线ID。|

