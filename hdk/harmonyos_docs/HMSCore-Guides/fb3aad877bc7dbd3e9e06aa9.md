---
name: document/cn/HMSCore-Guides/basketball-0000001132078568
title: 篮球
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/basketball-0000001132078568
---

# 篮球

篮球相关运动记录类型如下：

|**运动类型**|**描述**|**运动类型常量**|数据来源|
|:---------|:-----|:---------|:-----|
|basketball|篮球|5|篮球精灵手环|

## 专业运动特征统计数据

篮球运动特征统计数据类型：com.huawei.activity.feature.basketball

|**字段**列表|字段描述|**类型**|可选/必选|单位|取值范围|
|:--------------------|:-----|:-----|:----|:-|:-------|
|overall_score|综合评分|int|M|-|[0, 100]|
|burst_score|爆发力得分|int|O|-|[0, 100]|
|jump_score|弹跳滞空得分|int|O|-|[0, 100]|
|run_score|跑动得分|int|O|-|[0, 100]|
|breakthrough_score|突破移动得分|int|O|-|[0, 100]|
|sport_intensity_score|运动强度得分|int|O|-|[0, 100]|

## 关联的采样统计数据类型说明

作为ActivityRecord概要数据的一部分，统一使用运动记录权限，无需每种关联的采样统计数据类型使用单独OAuth权限。

|**采样统计数据类型**|**描述**|可选/必选|备注|
|:---------------------------------------------------|:-------|:----|:-----------------|
|com.huawei.continuous.jump.statistics|跳跃统计|M|-|
|com.huawei.continuous.calories.burnt.total|卡路里统计|M|-|
|com.huawei.continuous.exercise_heart_rate.statistics|运动心率统计|O|用户佩戴华为手表/手环时会包含该数据|
|com.huawei.continuous.steps.total|步数统计|O|-|
|com.huawei.continuous.basketball_speed.statistics|篮球移动速度统计|O|-|
|com.huawei.resting_calories.statistics|静息热量统计|O|  |

## 关联的原子采样数据说明

关联的原子采样数据权限请参考[OAuth权限说明](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/introduction-fitness-record-data-0000001131831088#section27171294263)。

|**原子采样数据类型**|**描述**|可选/必选|备注|
|:-------------------------------------------|:-----|:----|:-----------------|
|com.huawei.continuous.jump|跳跃详情|O|-|
|com.huawei.instantaneous.exercise_heart_rate|运动心率详情|O|用户佩戴华为手表/手环时会包含该数据|
|com.huawei.instantaneous.speed|运动速度详情|O|-|

## 场景示例

[篮球运动记录](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/basketball-scene-0000001212612301)

