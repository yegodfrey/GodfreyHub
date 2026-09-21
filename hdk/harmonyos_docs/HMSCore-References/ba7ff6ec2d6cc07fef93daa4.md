---
name: document/cn/HMSCore-References/dailyweather-0000001050695588
title: DailyWeather
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/dailyweather-0000001050695588
---

# DailyWeather

* 支持的场景：手机。
* 支持的OS：EMUI 7.0及以上，Android 7.0及以上。

|Class Info|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public class [DailyWeather](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/dailyweather-0000001050695588) implements Parcelable 当天和未来六到七天的天气信息。包括月出、月落、日出、日落、最低最高温度（摄氏度）、最低最高温度（华氏度）、综合空气指数（国外不支持）、当地时间凌晨时间戳、月相、白天天气情况（[DailySituation](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/dailysituation-0000001050735617)）、夜间天气情况（[DailySituation](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/dailysituation-0000001050735617)）。|

## Public Method Summary

|Qualifier and Type|Method Name|
|:----------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------|
|String|[getMoonphase](#section1125855619496)()|
|long|[getMoonRise](#section953916525017)()|
|long|[getMoonSet](#section16966111925015)()|
|long|[getSunRise](#section1488319297507)()|
|long|[getSunSet](#section1193215367503)()|
|long|[getMaxTempC](#section7336194665016)()|
|long|[getMinTempC](#section143841857205017)()|
|long|[getMaxTempF](#section1359416316522)()|
|long|[getMinTempF](#section6923219125218)()|
|int|[getAqiValue](#section9990112635212)()|
|long|[getDateTimeStamp](#section12624123365212)()|
|[DailySituation](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/dailysituation-0000001050735617)|[getSituationDay](#section12364154314521)()|
|[DailySituation](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/dailysituation-0000001050735617)|[getSituationNight](#section1148085010529)()|

## Public Methods

### getMoonphase

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------|
|public String getMoonphase() 获取该天的月相。月相moonPhase共有8种值，分别是"New"、"Waxingcrescent"、"First"、"WaxingGibbous"、"Full"、"WaningGibbous"、"Last"和"WaningCrescent"。|

**Returns**

|Type|Description|
|:-----|:-----------------------------------------------------------------------------------------------------------------------|
|String|该天的月相。月相moonPhase共有8种值，分别是"New"、"Waxingcrescent"、"First"、"WaxingGibbous"、"Full"、"WaningGibbous"、"Last"和"WaningCrescent"。|

### getMoonRise

|Method|
|:-----------------------------------|
|public long getMoonRise() 获取该天的月出时间。|

**Returns**

|Type|Description|
|:---|:----------|
|long|该天的月出时间。|

### getMoonSet

|Method|
|:----------------------------------|
|public long getMoonSet() 获取该天的月落时间。|

**Returns**

|Type|Description|
|:---|:----------|
|long|该天的月落时间。|

### getSunRise

|Method|
|:----------------------------------|
|public long getSunRise() 获取该天的日出时间。|

**Returns**

|Type|Description|
|:---|:----------|
|long|该天的日出时间。|

### getSunSet

|Method|
|:---------------------------------|
|public long getSunSet() 获取该天的日落时间。|

**Returns**

|Type|Description|
|:---|:----------|
|long|该天的日落时间。|

### getMaxTempC

|Method|
|:------------------------------------------|
|public long getMaxTempC() 获取该天的最高温度，单位：摄氏度。|

**Returns**

|Type|Description|
|:---|:--------------|
|long|该天的最高温度，单位：摄氏度。|

### getMinTempC

|Method|
|:------------------------------------------|
|public long getMinTempC() 获取该天的最低温度，单位：摄氏度。|

**Returns**

|Type|Description|
|:---|:--------------|
|long|该天的最低温度，单位：摄氏度。|

### getMaxTempF

|Method|
|:------------------------------------------|
|public long getMaxTempF() 获取该天的最高温度，单位：华氏度。|

**Returns**

|Type|Description|
|:---|:--------------|
|long|该天的最高温度，单位：华氏度。|

### getMinTempF

|Method|
|:------------------------------------------|
|public long getMinTempF() 获取该天的最低温度，单位：华氏度。|

**Returns**

|Type|Description|
|:---|:--------------|
|long|该天的最低温度，单位：华氏度。|

### getAqiValue

|Method|
|:--------------------------------------------|
|public int getAqiValue() 获取空气质量指数。 国外版本可能不支持。|

**Returns**

|Type|Description|
|:---|:----------------|
|int|空气质量指数。国外版本可能不支持。|

### getDateTimeStamp

|Method|
|:----------------------------------------------------------|
|public long getDateTimeStamp() 获取某天天气对应该天的时间戳，表示的是当地凌晨的时间戳。|

**Returns**

|Type|Description|
|:---|:-------------------------|
|long|某天天气对应该天的时间戳，表示的是当地凌晨的时间戳。|

### getSituationDay

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [DailySituation](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/dailysituation-0000001050735617) getSituationDay() 获取白天的天气信息，具体包括的值请参见[DailySituation](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/dailysituation-0000001050735617)。|

**Returns**

|Type|Description|
|:----------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------|
|[DailySituation](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/dailysituation-0000001050735617)|白天的天气信息，具体包括的值请参见[DailySituation](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/dailysituation-0000001050735617)。|

### getSituationNight

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public DailySituation getSituationNight() 获取晚上的天气信息，具体包括的值可以参见[DailySituation](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/dailysituation-0000001050735617)。|

**Returns**

|Type|desc|
|:----------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------|
|[DailySituation](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/dailysituation-0000001050735617)|晚上的天气信息，具体包括的值请参见[DailySituation](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/dailysituation-0000001050735617)。|

