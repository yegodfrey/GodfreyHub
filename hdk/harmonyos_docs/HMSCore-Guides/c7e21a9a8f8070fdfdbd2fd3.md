---
name: document/cn/HMSCore-Guides/freediving-0000001192970763
title: 自由潜水
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/freediving-0000001192970763
---

# 自由潜水

自由潜水相关运动记录类型如下：

|**活动类型常量**|**描述**|数据来源|
|:-----------------------------|:-----|:--------|
|HiHealthActivities.FREE_DIVING|自由潜水|部分专业手表、手环|

## 专业运动特征统计数据

* 自由潜水运动特征统计数据类型：com.huawei.activity.feature.freediving
* Android SDK类型常量：DataType.DT_ACTIVITY_FEATURE_FREEDIVING

|**字段**列表|字段描述|Android SDK常量|**类型**|可选/必选|单位|取值范围|
|:----------------|:-------|:------------------------|:-----|:----|:-|:------------|
|divingTime|潜水时间|Field.DIVING_TIME|int|M|秒|-|
|divingCount|潜水次数|Field.DIVING_COUNT|int|O|次|-|
|maxDepth|潜水最大深度|Field.MAX_DEPTH|double|M|米|-|
|avgDepth|潜水平均深度|Field.AVG_DEPTH|double|O|米|-|
|maxUnderwaterTime|单次水下最长时间|Field.MAX_UNDERWATER_TIME|int|O|秒|-|
|noFlyTime|禁飞时间|Field.NO_FLY_TIME|int|O|小时|-|
|waterType|水体类型|Field.WATER_TYPE|int|O|-|* 1：淡水 * 2：海水|
|surfaceTime|水上时间|Field.SURFACE_TIME|int|M|秒|-|

## 关联的采样统计数据类型说明

作为ActivityRecord概要数据的一部分，统一使用运动记录权限，无需每种关联的采样统计数据类型使用单独OAuth权限。

|**采样统计数据类型**|**描述**|可选/必选|备注|
|:--------------------------------------|:-----|:----|:-|
|com.huawei.diving_depth.statistics|潜水深度统计|O|-|
|com.huawei.location.statistics|运动位置统计|O|-|
|com.huawei.water_temperature.statistics|水温统计|O|-|

## 关联的原子采样数据说明

关联的原子采样数据权限请参考[OAuth权限说明](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/activity-type-constants-0000001135051290#section27171294263)。

|**原子采样数据类型**|**描述**|可选/必选|备注|
|:---------------------------|:-----|:----|:-|
|com.huawei.diving_depth|潜水深度|O|-|
|com.huawei.water_temperature|水温|O|-|

## 自由潜水数据分段说明

作为ActivityRecord概要数据的一部分，统一使用运动记录权限，无需每种关联的采样统计数据类型使用单独OAuth权限。

|**采样统计数据类型**|**描述**|可选/必选|备注|
|:--------------------------------------|:-------|:----|:------------|
|com.huawei.diving.statistics|自由潜水采样统计|O|自由潜水按潜水趟数自动分段|
|com.huawei.water_temperature.statistics|水温统计|O|-|

* 潜水统计数据类型：com.huawei.diving.statistics
* Android SDK类型常量：DataType.DT_DIVING_STATISTICS

|**字段**列表|字段描述|Android SDK常量|**类型**|可选/必选|单位|取值范围|
|:----------------|:-----|:------------------------|:-----|:----|:-|:---|
|maxUnderwaterTime|水下最长时间|Field.MAX_UNDERWATER_TIME|int|M|秒|-|
|maxDepth|潜水最大深度|Field.MAX_DEPTH|double|M|米|-|
|surfaceTime|水上时间|Field.SURFACE_TIME|int|M|秒|-|

## 场景示例

读取：[读取自由潜水运动记录](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/read-freediving-scene-0000001192852181)。

写入：[写入自由潜水运动记录](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/write-freediving-scene-0000001147052228)。

