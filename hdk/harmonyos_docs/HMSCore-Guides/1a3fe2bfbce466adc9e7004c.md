---
name: document/cn/HMSCore-Guides/activehours-0000001521403798
title: 活动小时数
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/activehours-0000001521403798
---

# 活动小时数

此数据记录用户在一小段时间内的活动小时数（又称站立统计）数据。活动小时数是用户是否每小时进行了站立活动的记录。

## OAuth权限

联盟卡片申请的权限名称：日常活动> 活动小时数据

* 读权限：https://www.huawei.com/healthkit/activehours.read
* 写权限：https://www.huawei.com/healthkit/activehours.write

## 原子采样明细数据类型

* 名称：com.huawei.active_hours

|**字段**列表|字段描述|**类型**|可选/必选|单位|取值范围|
|:-------|:-------|:-----|:----|:-|:-------|
|isActive|是否是活动小时数|int|M|-|1：是 其他：否|

### 数据开放说明

|开放API|查询及时性|数据源|
|:-------------------------------------------------------------------------------------------------------------------------|:----|:--------|
|[采样数据明细查询](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/sampleset_polymerize_detailed-0000001050114864)|小时级|手机、手表、手环等|

### 数据订阅说明

活动小时数数据暂不支持订阅。

## 原子采样统计数据类型

* 名称：com.huawei.active_hours.statistics

|**字段列表**|描述|**类型**|可选/必选|**单位**|
|:----------|:--------|:-----|:----|:-----|
|activeHours|活动小时数完成次数|int|M|个数|

### 数据开放说明

|开放API|查询及时性|统计数据维度|数据源|
|:--------------------------------------------------------------------------------------------------------------------|:----|:------------|:--------|
|[多日统计查询](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/sampleset_daily_polymerize-0000001078113560)|小时级|采样数据按照自然日进行统计|手机、手表、手环等|

### 数据订阅说明

活动小时数统计数据暂不支持订阅。

