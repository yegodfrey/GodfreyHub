---
name: document/cn/HMSCore-References/handlerinfo-0000001233725926
title: HandlerInfo
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/handlerinfo-0000001233725926
---

# HandlerInfo

|Class Info|
|:----------------------------------|
|public class HandlerInfo 路线规划上下文信息。|

#### Public Constructor Summary

|Constructor Name|
|:-----------------------------------------------------------|
|[HandlerInfo](#section33770915211)() HandlerInfo类初始化数据的构造方法。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void|[setTaskId](#section15593154485)(String taskId) 设置路线规划上下文信息的Id。|
|void|[setStartTime](#section343184618186)(long startTime) 设置开始时间。|
|void|[setRouteChange](#section1178734716186)(boolean routeChange) 路线切换参数，请求引导数据时使用，路线切换的时候设置成true。|
|void|[setResult](#section368484841817)(Object result) 设置路线规划信息结果。|
|void|[setErrorCode](#section752517495187)(int errorCode) 设置路线规划信息错误码。|
|void|[setErrorInfo](#section126265021816)(String errorInfo) 设置路线规划错误信息。|
|void|[setRequestId](#section3102175118186)(String requestId) 设置路线规划信息请求Id。|
|void|[setRoutePlanOptSrc](#section1695685131818)([RoutePlanOptSrc](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/routeplanoptsrc-0000001213657930) routePlanOptSrc) 设置路线规划信息来源。|
|void|[setRoutingRequestFavoriteParam](#section9852205219184)([RoutingRequestFavoriteParam](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/routingrequestfavoriteparam-0000001258098839) routeRequestFavoriteParam) 设置收藏路线信息。|
|void|[setMapNaviRoutingTip](#section20333144184012)([MapNaviRoutingTip](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapnavroutingtip-0000001257195647) mapNaviRoutingTip) 设置路线规划成功后的提示信息。|

#### Public Constructors

#### HandlerInfo

|Constructor|
|:--------------------------------------|
|public HandlerInfo() 构建一个HandlerInfo实例。|

#### Public Methods

#### setTaskId

|Method|
|:---------------------------------------------------|
|public void setTaskId(String taskId) 设置路线规划上下文信息的Id。|

Parameters  

|Name|Description|
|:-----|:----------|
|taskId|路线规划的Id。|

#### setStartTime

|Method|
|:---------------------------------------------------|
|public void setStartTime(long startTime) 设置路线规划开始时间。|

Parameters  

|Name|Description|
|:--------|:----------|
|startTime|开始时间。|

#### setRouteChange

|Method|
|:-------------------------------------------------------------------------------|
|public void setRouteChange(boolean routeChange) 路线切换参数，请求引导数据时使用，路线切换的时候设置成true。|

Parameters  

|Name|Description|
|:----------|:---------------------|
|routeChange|路线切换参数，路线切换的时候设置成true。|

#### setResult

|Method|
|:-----------------------------------------------|
|public void setResult(Object result) 设置路线规划信息结果。|

Parameters  

|Name|Description|
|:-----|:----------|
|result|设置路线规划信息结果。|

#### setErrorCode

|Method|
|:---------------------------------------------------|
|public void setErrorCode(int errorCode) 设置路线规划信息错误码。|

Parameters  

|Name|Description|
|:--------|:----------|
|errorCode|路线规划信息错误码。|

#### setErrorInfo

|Method|
|:-----------------------------------------------------|
|public void setErrorInfo(String errorInfo) 设置路线规划错误信息。|

Parameters  

|Name|Description|
|:--------|:----------|
|errorInfo|设置路线规划错误信息。|

#### setRequestId

|Method|
|:-------------------------------------------------------|
|public void setRequestId(String requestId) 设置路线规划信息请求Id。|

Parameters  

|Name|Description|
|:--------|:----------|
|requestId|路线规划信息请求Id。|

#### setRoutePlanOptSrc

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setRoutePlanOptSrc([RoutePlanOptSrc](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/routeplanoptsrc-0000001213657930) routePlanOptSrc) 设置路线规划信息来源。|

Parameters  

|Name|Description|
|:--------------|:----------|
|routePlanOptSrc|路线规划信息来源。|

#### setRoutingRequestFavoriteParam

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setRoutingRequestFavoriteParam([RoutingRequestFavoriteParam](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/routingrequestfavoriteparam-0000001258098839) routeRequestFavoriteParam) 设置收藏路线信息。|

Parameters  

|Name|Description|
|:------------------------|:----------|
|routeRequestFavoriteParam|收藏路线信息。|

#### setMapNaviRoutingTip

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setMapNaviRoutingTip([MapNaviRoutingTip](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapnavroutingtip-0000001257195647) mapNaviRoutingTip) 设置路线规划成功后的提示信息。|

Parameters  

|Name|Description|
|:----------------|:------------|
|mapNaviRoutingTip|路线规划成功后的提示信息。|

