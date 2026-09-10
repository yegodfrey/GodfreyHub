---
name: document/cn/HMSCore-Guides/middle-high-intensity-0000001131264002
title: 中高强度
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/middle-high-intensity-0000001131264002
---

# 中高强度

此数据记录用户在一小段时间内的中高强度活动。  

#### OAuth权限

联盟卡片申请的权限名称：日常活动\> 中高强度数据

* 读权限：https://www.huawei.com/healthkit/strength.read
* 写权限：https://www.huawei.com/healthkit/strength.write  

#### 原子采样明细数据类型

* 名称：com.huawei.continuous.exercise_intensity.v2

|字段列表|字段描述|类型|可选/必选|单位|取值范围|
|:------------|:---|:--|:----|:-|:----------------------------------------|
|exercise_type|活动类型|int|M|-|1：步行 2：跑步 3：骑行 4：训练 5：心率（无实际意义） 6：爬高 7：游泳|

#### 数据开放说明

|开放API|查询及时性|数据源|
|:-------------------------------------------------------------------------------------------------------------------------|:----|:--------|
|[采样数据明细查询](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/sampleset_polymerize_detailed-0000001050114864)|小时级|手机、手表、手环等|

#### 数据订阅说明

|事件类别|事件类别ID|描述|
|:------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------|:------------------|
|[采样数据事件](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/subscription-0000001078496860#section13879857154018)|SAMPLESET_EVENT$UPDATE$com.huawei.continuous.exercise_intensity.v2|订阅中高强度数据新增/更新事件类别ID|
|[采样数据事件](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/subscription-0000001078496860#section13879857154018)|SAMPLESET_EVENT$DELETE$com.huawei.continuous.exercise_intensity.v2|订阅中高强度数据删除事件类别ID|

#### 原子采样统计数据类型

* 名称：com.huawei.continuous.exercise_intensity.v2.statistics

|字段列表|描述|类型|可选/必选|单位|
|:-------------|:----|:----------------------|:----|:----------------------------------------------------------------------------------------------------|
|intensity_map|中高强度|Map\<Integer, Integer\>|M|key是exercise_type，参考com.huawei.continuous.exercise_intensity.v2； value是统计时间内对应的exercise_type的时长，单位：分钟|
|totalIntensity|总锻炼时长|int|M|分钟|

#### 数据开放说明

|开放API|查询及时性|统计数据维度|数据源|
|:--------------------------------------------------------------------------------------------------------------------|:----|:------------|:--------|
|[多日统计查询](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/sampleset_daily_polymerize-0000001078113560)|小时级|采样数据按照自然日进行统计|手机、手表、手环等|

#### 数据订阅说明

|事件类别|事件类别ID|描述|
|:------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------|:--------------------|
|[采样数据事件](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/subscription-0000001078496860#section13879857154018)|SAMPLESET_EVENT$UPDATE$com.huawei.continuous.exercise_intensity.v2.statistics|订阅中高强度统计数据新增/更新事件类别ID|
|[采样数据事件](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/subscription-0000001078496860#section13879857154018)|SAMPLESET_EVENT$DELETE$com.huawei.continuous.exercise_intensity.v2.statistics|订阅中高强度统计数据删除事件类别ID|

