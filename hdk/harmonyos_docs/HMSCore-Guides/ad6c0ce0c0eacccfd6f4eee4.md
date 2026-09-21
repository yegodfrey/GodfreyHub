---
name: document/cn/HMSCore-Guides/wheel-rotation-speed-0000001135057518
title: 车轮转速
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/wheel-rotation-speed-0000001135057518
---

# 车轮转速

此数据记录用户的车轮转速，每一条数据都代表该时刻的车轮转速。每条数据不能存在交叉，后一条数据的开始时间应该大于或等于前一条数据的结束时间。

## OAuth权限

联盟卡片申请的权限名称：锻炼记录 > 锻炼记录详情数据

* 读权限：https://www.huawei.com/healthkit/activity.read
* 写权限：https://www.huawei.com/healthkit/activity.write

## 原子采样明细数据类型

* 名称：com.huawei.instantaneous.wheel_rotation

|**字段**列表|字段描述|**类型**|可选/必选|单位|取值范围|
|:-------|:---|:-----|:----|:---|:---|
|rpm|车轮转速|float|M|转/分钟|-|

### 数据开放说明

|开放API|查询及时性|数据源|
|:--------------------------------------------------------------------------------------------------------------|:----|:---------------|
|[运动记录查询](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/activityrecords_list-0000001050114862)|分钟级|动感单车、室内单车（生态设备）等|

### 数据订阅说明

车轮转速数据不支持订阅。

