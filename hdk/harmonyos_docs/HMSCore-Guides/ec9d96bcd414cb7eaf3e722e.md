---
name: document/cn/HMSCore-Guides/rope-jumping-0000001135051292
title: 跳绳
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/rope-jumping-0000001135051292
---

# 跳绳

跳绳相关运动记录类型如下：

|**活动类型常量**|**描述**|数据来源|
|:------------------------------|:-----|:----------|
|HiHealthActivities.JUMPING_ROPE|跳绳|AI跳绳、智能跳绳设备|

## 专业运动特征统计数据

* 跳绳运动特征统计数据类型：com.huawei.activity.feature.jumping_rope
* Android SDK类型常量：DataType.DT_ACTIVITY_FEATURE_JUMPING_ROPE

|**字段**列表|字段描述|Android SDK常量|**类型**|可选/必选|单位|
|:-----------------|:---|:-----------------------|:-----|:----|:-|
|skip_num|跳绳个数|Field.SKIP_NUM|int|M|个|
|stumbling_rope|绊绳次数|Field.STUMBLING_ROPE|int|O|次数|
|max_skipping_times|最多连跳|Field.MAX_SKIPPING_TIMES|int|O|个|
|double_shake|双摇个数|Field.DOUBLE_SHAKE|int|O|个|
|triple_shake|三摇个数|Field.TRIPLE_SHAKE|int|O|个|

## 关联的采样统计数据类型说明

作为ActivityRecord概要数据的一部分，统一使用运动记录权限，无需每种关联的采样统计数据类型使用单独OAuth权限。

|**采样统计数据类型**|**描述**|可选/必选|备注|
|:---------------------------------------------------|:-----|:----|:-----------------|
|com.huawei.continuous.skip_speed.statistics|跳绳速度统计|M|-|
|com.huawei.continuous.calories.burnt.total|卡路里统计|M|-|
|com.huawei.continuous.exercise_heart_rate.statistics|运动心率统计|O|用户佩戴华为手表/手环时会包含该数据|

## 关联的原子采样数据说明

关联的原子采样数据权限请参考[OAuth权限说明](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/activity-type-constants-0000001135051290#section27171294263)。

|**原子采样数据类型**|**描述**|可选/必选|备注|
|:-------------------------------------------|:-----|:----|:-----------------|
|com.huawei.instantaneous.skip_speed|跳绳速度详情|O|-|
|com.huawei.instantaneous.exercise_heart_rate|运动心率详情|O|用户佩戴华为手表/手环时会包含该数据|

## 场景示例

读取：请参见[读取跳绳运动记录](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/read-jumping-rope-scene-0000001166507265)。

写入：请参见[写入跳绳运动记录](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/write-jumping-rope-scene-0000001119667532)。

