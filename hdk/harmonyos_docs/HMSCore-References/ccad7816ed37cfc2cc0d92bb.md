---
name: document/cn/HMSCore-References/situation-0000001050735619
title: Situation
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/situation-0000001050735619
---

# Situation

* 支持的场景：手机。
* 支持的OS：EMUI 7.0及以上，Android 7.0及以上。

|Class Info|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public class [Situation](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/situation-0000001050735619) implements Parcelable 当前天气信息。包括天气ID(CN)、湿度、摄氏度、华氏度、体感温度（℃）、体感温度（℉）、风向、风力等级、风速、气压、紫外线强度、更新时间。|

#### Public Method Summary

|Qualifier and Type|Method Name|
|:-----------------|:-----------------------------------------|
|int|[getCnWeatherId](#section968063275414)()|
|String|[getHumidity](#section1666323845413)()|
|long|[getTemperatureC](#section5602144145418)()|
|long|[getTemperatureF](#section1354618505547)()|
|long|[getRealFeelC](#section201861959195420)()|
|long|[getRealFeelF](#section138381462553)()|
|String|[getWindDir](#section842681315553)()|
|int|[getWindLevel](#section13358171919554)()|
|int|[getWindSpeed](#section1320882765515)()|
|long|[getUpdateTime](#section17917143335514)()|
|long|[getPressure](#section6993741155516)()|
|int|[getUvIndex](#section526619473558)()|

#### Public Method

#### getCnWeatherId

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public int getCnWeatherId() 获取CN天气ID(cnWeatherId)，国内天气使用的天气ID。CN天气ID表示的是当前的天气，每个值都对应不同的天气，例如0表示晴，1表示多云，7表示小雨。更多天气ID对应的天气信息请参见[CNWeatherId](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/cn-weatherid-4-0000001050165072)。|

Returns  

|Type|Description|
|:---|:----------|
|int|CN天气ID。|

#### getHumidity

|Method|
|:---------------------------------------|
|public String getHumidity() 获取空气湿度值，百分制。|

Returns  

|Type|Description|
|:-----|:---------------|
|String|humidity，湿度，百分制。|

#### getTemperatureC

|Method|
|:-------------------------------------------|
|public long getTemperatureC() 获取当前温度，单位：摄氏度。|

Returns  

|Type|Description|
|:---|:-----------|
|long|当前温度，单位：摄氏度。|

#### getTemperatureF

|Method|
|:-------------------------------------------|
|public long getTemperatureF() 获取当前温度，单位：华氏度。|

Returns  

|Type|Description|
|:---|:-----------|
|long|当前温度，单位：华氏度。|

#### getRealFeelC

|Method|
|:----------------------------------------|
|public long getRealFeelC() 获取体感温度，单位：摄氏度。|

Returns  

|Type|Description|
|:---|:-----------|
|long|体感温度，单位：摄氏度。|

#### getRealFeelF

|Method|
|:----------------------------------------|
|public long getRealFeelF() 获取体感温度，单位：华氏度。|

Returns  

|Type|Description|
|:---|:-----------|
|long|体感温度，单位：华氏度。|

#### getWindDir

|Method|
|:------------------------------------------------------------------------------------------------------------------------|
|public String getWindDir() 获取风向，风向值是"NE"（东北风向）、"E"（东风向）、"SE"（东南风向）、"S"（南风向）、"SW"（西南风向）、"W"（西风向）、"N"（北风向）和"NW"（西北风向）八个值之一。|

Returns  

|Type|Description|
|:-----|:-------------------------------------------------------------------------------------------|
|String|风向，风向值是"NE"（东北风向）、"E"（东风向）、"SE"（东南风向）、"S"（南风向）、"SW"（西南风向）、"W"（西风向）、"N"（北风向）和"NW"（西北风向）八个值之一。|

#### getWindLevel

|Method|
|:---------------------------------------------------------|
|public int getWindLevel() 获取风级。风级，实时天气的风级，值区间为0\~17。0表示微风。|

Returns  

|Type|Description|
|:---|:--------------------------|
|int|风级，实时天气的风级，值区间为0\~17。0表示微风。|

#### getWindSpeed

|Method|
|:--------------------------------------|
|public int getWindSpeed() 获取风速，单位：km/h。|

Returns  

|Type|Description|
|:---|:----------|
|int|风速，单位：km/h。|

#### getUpdateTime

|Method|
|:---------------------------------------|
|public long getUpdateTime() 获取当前天气的发布时间。|

Returns  

|Type|Description|
|:---|:-------------|
|long|时间戳，此时天气的发布时间。|

#### getPressure

|Method|
|:------------------------------------|
|public long getPressure() 获取气压，单位：百帕。|

Returns  

|Type|Description|
|:---|:----------|
|long|气压，单位：百帕。|

#### getUvIndex

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public int getUvIndex() 获取当前紫外线强度，紫外线等级划分请参见[WeatherStatus](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/awareness-weatherstatus-4-0000001050167025)。|

Returns  

|Type|Description|
|:---|:----------|
|int|紫外线强度。|

