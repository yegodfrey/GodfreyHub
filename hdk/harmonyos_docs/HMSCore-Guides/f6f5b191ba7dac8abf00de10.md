---
name: document/cn/HMSCore-Guides/pedaling-rate-0000001135217314
title: 脚踏节奏
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/pedaling-rate-0000001135217314
---

# 脚踏节奏

此数据记录用户的脚踏转速，每一条数据都代表该时刻的脚踏转速。每条数据不能存在交叉，后一条数据的开始时间应该大于或等于前一条数据的结束时间。

## OAuth权限

联盟卡片申请的权限名称：锻炼记录 > 锻炼记录详情数据

* 读权限：Scopes.HEALTHKIT_ACTIVITY_READ
* 写权限：Scopes.HEALTHKIT_ACTIVITY_WRITE

## 原子采样明细数据类型

* 名称：com.huawei.instantaneous.pedaling_rate
* Android SDK类型常量：DataType.DT_INSTANTANEOUS_PEDALING_RATE

|**字段**列表|描述|Android SDK常量|**类型**|可选/必选|单位|取值范围|
|:-------|:---|:--------------|:-----|:----|:---|:---|
|rpm|脚踏节奏|Field.FIELD_RPM|double|M|转/分钟|-|

### 数据开放说明

|开放API|查询及时性|数据源|
|:----------------------------------------------------------------------------------------------------------------------------------------|:----|:---------------|
|[运动记录数据查询](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/activityrecordscontroller-0000001050091295#section34819155446)|分钟级|动感单车、室内单车（生态设备）等|

## 原子采样统计数据类型

* 名称：com.huawei.continuous.pedaling_rate.statistics
* Android SDK类型常量：DataType.DT_CONTINUOUS_PEDALING_RATE_STATISTICS

|**字段列表**|描述|Android SDK常量|**类型**|可选/必选|**单位**|
|:-------|:-----|:--------------|:-----|:----|:-----|
|avg|平均脚踏节奏|Field.FIELD_AVG|double|M|转/分钟|
|max|最大脚踏节奏|Field.FIELD_MAX|double|M|转/分钟|
|min|最小脚踏节奏|Field.FIELD_MIN|double|M|转/分钟|

### 数据开放说明

|开放API|及时性|统计数据维度|数据源|
|:----------------------------------------------------------------------------------------------------------------------------------------|:--|:-------|:---------------|
|[运动记录数据查询](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/activityrecordscontroller-0000001050091295#section34819155446)|分钟级|运动记录概要统计|动感单车、室内单车（生态设备）等|

