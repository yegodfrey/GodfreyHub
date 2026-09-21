---
name: document/cn/HMSCore-Guides/location-0000001177336823
title: 位置
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/location-0000001177336823
---

# 位置

此数据类型记录用户在一段时间内的地理坐标位置。

## OAuth权限

联盟卡片申请的权限名称：锻炼记录 >锻炼记录位置详情数据

* 读权限：Scopes.HEALTHKIT_LOCATION_READ
* 写权限：Scopes.HEALTHKIT_LOCATION_WRITE

## 原子采样明细数据类型

* 名称：com.huawei.instantaneous.location.sample
* Android SDK类型常量：DataType.DT_INSTANTANEOUS_LOCATION_SAMPLE

|**字段**列表|描述|Android SDK常量|**类型**|可选/必选|单位|取值范围|
|:---------|:--|:---------------------|:-----|:----|:-|:-----------------------------|
|latitude|纬度|Field.FIELD_LATITUDE|double|M|度|-|
|longitude|经度|Field.FIELD_LONGITUDE|double|M|度|-|
|precision|精度|Field.FIELD_PRECISION|double|O|米|-|
|coordinate|坐标系|Field.FIELD_COORDINATE|int|M|-|* 1：WGS84 * 2：GCJ-02 * 3：BD-09|

### 数据开放说明

|开放API|查询及时性|数据源|
|:----------------------------------------------------------------------------------------------------------------------------------------|:----|:--------|
|[运动记录数据查询](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/activityrecordscontroller-0000001050091295#section34819155446)|分钟级|手机、手表、手环等|

## 原子采样统计数据类型

* 名称：com.huawei.location.statistics
* Android SDK类型常量：DataType.POLYMERIZE_LOCATION

|**字段**列表|字段描述|Android SDK常量|**类型**|可选/必选|单位|取值范围|
|:---------|:----|:---------------------|:-----|:----|:-|:-----------------------------|
|startLat|起始点纬度|Field.START_LAT|double|M|度|-|
|startLon|起始点经度|Field.START_LON|double|M|度|-|
|endLat|结束点纬度|Field.END_LAT|double|M|度|-|
|endLon|结束点经度|Field.END_LON|double|M|度|-|
|coordinate|坐标系|Field.FIELD_COORDINATE|int|M|-|* 1：WGS84 * 2：GCJ-02 * 3：BD-09|

### 数据开放说明

|开放API|查询及时性|数据源|
|:----------------------------------------------------------------------------------------------------------------------------------------|:----|:--------|
|[运动记录数据查询](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/activityrecordscontroller-0000001050091295#section34819155446)|分钟级|手机、手表、手环等|

