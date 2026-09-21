---
name: document/cn/HMSCore-References/insightintent-0000001556686061
title: InsightIntent
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061
---

# InsightIntent

* 支持的场景：手机。
* 支持的OS：HarmonyOS 2.0及以上。

|Class Info|
|:------------------------------------------------------------------|
|public class InsightIntent 共享的意图数据，包括意图名称、版本号、标识、Action信息、Entity信息。|

## Public Constructor Summary

|Constructor Name|
|:---------------------------------------------------------|
|[InsightIntent(String name)](#section420201416532) 构造意图实例。|

## Public Method Summary

|Qualifier and Type|Method Name|
|:--------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------|
|String|[getIntentName](#section19154135004811)()|
|[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061)|[setIntentName](#section4168113220114)(String intentName)|
|String|[getIntentVersion](#section1854272819512)()|
|[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061)|[setIntentVersion](#section1454382813514)(String intentVersion)|
|String|[getIdentifier](#section1396193117514)()|
|[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061)|[setIdentifier](#section1239710310519)(String identifier)|
|JSONObject|[getIntentActionInfo](#section143706341255)()|
|[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061)|[setIntentActionInfo](#section1037112348512)(JSONObject intentActionInfo)|
|JSONObject|[getIntentEntityInfo](#section782910384113)()|
|[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061)|[setIntentEntityInfo](#section1682953816114)(JSONObject intentEntityInfo)|
|JSONObject|[getCustomFormInfo](#section6971114019119)()|
|[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061)|[setCustomFormInfo](#section397324021115)(JSONObject customFormInfo)|
|JSONObject|[getIntentTargetInfo](#section3287546151114)()|
|[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061)|[setIntentTargetInfo](#section172870469116)(JSONObject intentTargetInfo)|
|[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061)|[addIntentInfo](#section56231114394)(String key, JSONObject intentInfo)|

## Public Constructors

### InsightIntent(String name)

|Constructor|
|:----------------------------------------|
|public InsightIntent(String name) 构造意图实例。|

**Parameters**

|Name|Description|
|:---|:----------|
|name|意图名称。|

## Public Methods

## getIntentName

|Method|
|:-----------------------------------|
|publicString getIntentName() 获取意图名称。|

**Returns**

|Type|Description|
|:-----|:----------|
|String|意图名称。|

## setIntentName

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061) setIntentName(String intentName) 设置意图名称。|

**Parameters**

|Name|Description|
|:---------|:----------|
|intentName|意图名称。|

**Returns**

|Type|Description|
|:--------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------|
|[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061)|当前[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061)对象。|

## getIntentVersion

|Method|
|:---------------------------------------|
|publicString getIntentVersion() 获取意图版本号。|

**Returns**

|Type|Description|
|:-----|:----------|
|String|意图版本号。|

## setIntentVersion

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061) setIntentVersion(String intentVersion) 设置意图版本号。|

**Parameters**

|Name|Description|
|:------------|:----------|
|intentVersion|意图版本号。|

**Returns**

|Type|Description|
|:--------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------|
|[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061)|当前[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061)对象。|

## getIdentifier

|Method|
|:-----------------------------------|
|publicString getIdentifier() 获取意图标识。|

**Returns**

|Type|Description|
|:-----|:----------|
|String|意图标识。|

## setIdentifier

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061) setIdentifier(String identifier) 设置意图标识。|

**Parameters**

|Name|Description|
|:---------|:----------|
|identifier|意图标识。|

**Returns**

|Type|Description|
|:--------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------|
|[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061)|当前[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061)对象。|

## getIntentActionInfo

|Method|
|:---------------------------------------------------|
|publicJSONObject getIntentActionInfo() 获取意图Action信息。|

**Returns**

|Type|Description|
|:---------|:----------|
|JSONObject|意图Action信息。|

## setIntentActionInfo

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061) setIntentActionInfo(JSONObject intentActionInfo) 设置意图Action信息。|

**Parameters**

|Name|Description|
|:---------------|:---------------|
|intentActionInfo|需要设置的意图Action信息。|

**Returns**

|Type|Description|
|:--------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------|
|[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061)|当前[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061)对象。|

## getIntentEntityInfo

|Method|
|:---------------------------------------------------|
|publicJSONObject getIntentEntityInfo() 获取意图Entity信息。|

**Returns**

|Type|Description|
|:---------|:----------|
|JSONObject|意图Entity信息。|

## setIntentEntityInfo

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061) setIntentEntityInfo(JSONObject intentEntityInfo) 设置意图Entity信息。|

**Parameters**

|Name|Description|
|:---------------|:---------------|
|intentEntityInfo|需要设置的意图Entity信息。|

**Returns**

|Type|Description|
|:--------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------|
|[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061)|当前[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061)对象。|

## getCustomFormInfo

|Method|
|:------------------------------------------------|
|publicJSONObject getCustomFormInfo() 获取意图自定义卡片信息。|

**Returns**

|Type|Description|
|:---------|:----------|
|JSONObject|意图自定义卡片信息。|

## setCustomFormInfo

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061) setCustomFormInfo(JSONObject customFormInfo) 设置意图自定义卡片信息。|

**Parameters**

|Name|Description|
|:-------------|:--------------|
|customFormInfo|需要设置的意图自定义卡片信息。|

**Returns**

|Type|Description|
|:--------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------|
|[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061)|当前[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061)对象。|

## getIntentTargetInfo

|Method|
|:-----------------------------------------------|
|publicJSONObject getIntentTargetInfo() 获取意图目标信息。|

**Returns**

|Type|Description|
|:---------|:----------|
|JSONObject|意图目标信息。|

## setIntentTargetInfo

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061) setIntentTargetInfo(JSONObject intentTargetInfo) 设置意图目标信息。|

**Parameters**

|Name|Description|
|:---------------|:-----------|
|intentTargetInfo|需要设置的意图目标信息。|

**Returns**

|Type|Description|
|:--------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------|
|[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061)|当前[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061)对象。|

## addIntentInfo

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061) addIntentInfo(String key, JSONObject intentInfo) 意图内添加指定键及对应信息。|

**Parameters**

|Name|Description|
|:---------|:----------|
|key|意图信息key值。|
|intentInfo|意图信息value值。|

**Returns**

|Type|Description|
|:--------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------|
|[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061)|当前[InsightIntent](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/insightintent-0000001556686061)对象。|

