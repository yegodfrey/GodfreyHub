---
name: document/cn/HMSCore-Guides/surfing-0000002463495592
title: 冲浪
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/surfing-0000002463495592
---

# 冲浪

**冲浪运动记录类型如下：**

|**运动类型**|**描述**|**运动类型常量**|数据来源|
|:-------|:-----|:---------|:----|
|surfing|冲浪|80|手表、手环|

## 专业运动特征统计数据

无

## 关联的采样统计数据类型说明

作为ActivityRecord概要数据的一部分，统一使用运动记录权限，无需每种关联的采样统计数据类型使用单独OAuth权限。

|**采样统计数据类型**|**描述**|可选/必选|备注|
|:---------------------------------------------------|:--------|:----|:-------------------|
|com.huawei.continuous.calories.burnt.total|活动热量统计|M|-|
|com.huawei.continuous.exercise_heart_rate.statistics|运动心率统计|O|- 用户佩戴华为手表/手环时会包含该数据|
|com.huawei.resting_calories.statistics|静息热量统计|O|- 用于计算总卡路里和活动卡路里|
|com.huawei.location.statistics|GPS（位置）统计|O|-|

## 关联的采样明细数据类型说明

关联的原子采样数据权限请参考[OAuth权限说明](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/introduction-fitness-record-data-0000001131831088#section27171294263)。

|**原子采样数据类型**|**描述**|可选/必选|备注|
|:-------------------------------------------|:--------|:----|:-------------------|
|com.huawei.instantaneous.exercise_heart_rate|运动心率详情|O|- 用户佩戴华为手表/手环时会包含该数据|
|com.huawei.instantaneous.location.sample|GPS（位置）详情|O|- 手表、手环等|

