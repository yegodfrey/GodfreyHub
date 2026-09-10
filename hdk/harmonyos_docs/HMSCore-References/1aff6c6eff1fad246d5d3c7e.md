---
name: document/cn/HMSCore-References/harmonyos-activity-record-read-options-0000001184286104
title: ActivityRecordReadOptions
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-activity-record-read-options-0000001184286104
---

# ActivityRecordReadOptions

|Function Info|
|:-----------------------------------------------------------------------------|
|function ActivityRecordReadOptions 读取运动记录的请求参数，用于从Health Service Kit中读取运动记录数据。|

#### Public Constructor Summary

|Constructor Name|
|:-------------------------------------------------------------------------------------------------------------------------------------------------|
|function [ActivityRecordReadOptions](#section1514212502517)(String startTime, String endTime, Array dataTypeNameList) 构造ActivityRecordReadOptions。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:------------------------------------------------------------------------------------------|
|Array|[getDataTypeNameList](#section1472175318415)() 获取读取运动记录数据的参数的读取子数据集合。|
|String|[getEndTime](#section16901252104119)() 获取读取运动记录数据的参数的结束时间。|
|String|[getStartTime](#section885311201506)() 获取读取运动记录数据的参数的开始时间。|
|-|[setDataTypeNameList](#section1973150204219)(Array dataTypeNameList) 设置读取运动记录数据的参数的读取子数据集合。|
|-|[setEndTime](#section13186024210)(String endTime) 设置读取运动记录数据的参数的结束时间。|
|-|[setStartTime](#section677610139158)(String startTime) 设置读取运动记录数据的参数的开始时间。|

#### Public Constructors

#### ActivityRecordReadOptions(String startTime, String endTime, Array dataTypeNameList)

|Constructor|
|:------------------------------------------------------------------------------------------------------------------------|
|function ActivityRecordReadOptions(String startTime, String endTime, Array dataTypeNameList) 构造ActivityRecordReadOptions。|

Parameters  

|Name|Description|
|:---------------|:--------------|
|startTime|将要读取的运动记录开始时间。|
|endTime|将要读取的运动记录结束时间。|
|dataTypeNameList|将要读取的运动记录子数据类型。|

#### Public Methods

#### getStartTime()

|Method|
|:------------------------------------------------------------------------------------|
|ActivityRecordReadOptions.prototype.getStartTime = function () {} 获取读取运动记录数据的参数的开始时间。|

Returns  

|Type|Description|
|:-----|:------------------|
|String|将要读取运动记录数据的参数的开始时间。|

#### getEndTime()

|Method|
|:----------------------------------------------------------------------------------|
|ActivityRecordReadOptions.prototype.getEndTime = function () {} 获取读取运动记录数据的参数的结束时间。|

Returns  

|Type|Description|
|:-----|:------------------|
|String|将要读取运动记录数据的参数的结束时间。|

#### getDataTypeNameList()

|Method|
|:----------------------------------------------------------------------------------------------|
|ActivityRecordReadOptions.prototype.getDataTypeNameList = function () {} 获取读取运动记录数据的参数的读取子数据集合。|

Returns  

|Type|Description|
|:----|:---------------------|
|Array|将要读取运动记录数据的参数的读取子数据集合。|

#### setStartTime(String startTime)

|Method|
|:----------------------------------------------------------------------------------------------------|
|ActivityRecordReadOptions.prototype.setStartTime = function (String startTime) {} 设置读取运动记录数据的参数的开始时间。|

Parameters  

|Name|Description|
|:--------|:------------------|
|startTime|将要读取运动记录数据的参数的开始时间。|

#### setEndTime(String endTime)

|Method|
|:------------------------------------------------------------------------------------------------|
|ActivityRecordReadOptions.prototype.setEndTime = function (String endTime) {} 设置读取运动记录数据的参数的结束时间。|

Parameters  

|Name|Description|
|:------|:------------------|
|endTime|将要读取运动记录数据的参数的结束时间。|

#### setDataTypeNameList(Array dataTypeNameList)

|Method|
|:--------------------------------------------------------------------------------------------------------------------|
|ActivityRecordReadOptions.prototype.setDataTypeNameList = function (Array dataTypeNameList) {} 设置读取运动记录数据的参数的读取子数据集合。|

Parameters  

|Name|Description|
|:---------------|:---------------------|
|dataTypeNameList|将要读取运动记录数据的参数的读取子数据集合。|

