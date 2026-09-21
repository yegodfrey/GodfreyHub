---
name: document/cn/AppGallery-connect-References/functioncallable-web-0000001060808272
title: FunctionCallable
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/functioncallable-web-0000001060808272
---

# FunctionCallable

设置需要调用的云函数后，可以通过此类的方法调用云函数或设置超时时间。

## Method Summary

|Qualifier and Type|Method Name and Description|
|:----------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Promise<[FunctionResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/functionresult-web-0000001060650068)>|[call](#section318632915452)(reqBody?:any) 调用云函数，参数可选。|
|[FunctionCallable](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/functioncallable-web-0000001060808272)|[clone](#section20199844184513)(timeout:number) 创建一个[FunctionCallable](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/functioncallable-web-0000001060808272)实例，使用指定的超时时长（单位：毫秒）。 快应用不支持通过此种方式设置超时时间，仅支持修改全局网络连接超时时间，详见[config.network说明](https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickapp-manifest-0000001073698621#ZH-CN_TOPIC_0000001073698621__table68054224439)。 快游戏暂不支持通过此种方式设置超时时间。 > 注意 > 此方法已废弃。|

## Property Summary

|Name|Type|Description|
|:------|:-----|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|timeout|number|调用云函数的超时时长（单位：毫秒），默认5000毫秒。 快应用不支持通过此种方式设置超时时间，仅支持修改全局网络连接超时时间，详见[config.network说明](https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickapp-manifest-0000001073698621#ZH-CN_TOPIC_0000001073698621__table68054224439)。 快游戏暂不支持通过此种方式设置超时时间。|

## Methods

### call

|Method|
|:------------------------------------------------------|
|call(reqBody?:any): Promise<FunctionResult> 调用云函数，参数可选。|

**Parameters**

|Name|Description|
|:------|:------------------------------------------|
|reqBody|可选参数，包含云函数入参值的对象。对象中包含的入参值需要与创建云函数时设置的入参对应。|

**Return**

|Type|Description|
|:----------------------------------------------------------------------------------------------------------------------------------------|:-------------------|
|Promise<[FunctionResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/functionresult-web-0000001060650068)>|以异步方式返回的包含函数执行结果的对象。|

### clone

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|clone(timeout:number): FunctionCallable 创建一个[FunctionCallable](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/functioncallable-web-0000001060808272)实例，使用指定的超时时间（单位：毫秒）。 > 注意 > 此方法已废弃。|

**Parameters**

|Name|Description|
|:------|:------------------|
|timeout|需要设置的函数超时时长（单位：毫秒）。|

**Return**

|Type|Description|
|:-----------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------|
|[FunctionCallable](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/functioncallable-web-0000001060808272)|返回新创建的[FunctionCallable](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/functioncallable-web-0000001060808272)对象。|

