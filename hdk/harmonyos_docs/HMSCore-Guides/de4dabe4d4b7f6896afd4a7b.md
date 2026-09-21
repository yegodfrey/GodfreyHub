---
name: document/cn/HMSCore-Guides/sport-goal-0000001656873341
title: 运动目标
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/sport-goal-0000001656873341
---

# 运动目标

此数据记录用户设置的运动目标。包含了用户步数、活动热量、锻炼时长、活动小时数的运动目标值。

## OAuth权限

联盟卡片申请的权限名称：日常活动> 运动目标

* 读权限：https://www.huawei.com/healthkit/goals.read
* 写权限：暂不支持写入

### 数据开放说明

|开放API|查询及时性|数据源|
|:-------------------------------------------------------------------------------------------------------------|:----|:--|
|[查询运动目标](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/query-sports-target-0000001657230865)|小时级|手机|

### 数据订阅说明

|事件类别|事件类别ID|描述|
|:------------------------------------------------------------------------------------------------------------------------|:-------------------------|:-----|
|[配置变更事件](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/subscription-0000001078496860#section13879857154018)|SAMPLE_CONFIG_EVENT$UPDATE|配置更新事件|

