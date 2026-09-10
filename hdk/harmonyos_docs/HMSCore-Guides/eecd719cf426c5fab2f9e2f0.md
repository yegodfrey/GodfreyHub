---
name: document/cn/HMSCore-Guides/heart-abnormality-reault-0000001925001633
title: 心律失常结果
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/heart-abnormality-reault-0000001925001633
---

# 心律失常结果

#### 心律失常结果

此数据记录用户使用脉搏波心律失常分析的检测结果。

目前仅支持部分开发者使用，如有需要，可[提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)或者发送邮件至[hihealth@huawei.com](mailto:hihealth@huawei.com)进行咨询。  

#### OAuth权限

联盟卡片申请的权限名称：健康数据 \> 心脏健康数据

* 读权限：https://www.huawei.com/healthkit/hearthealth.read
* 写权限：https://www.huawei.com/healthkit/hearthealth.write

#### 心律失常结果数据类型

名称：com.huawei.health.record.arrhythmia_result  

|特征数据字段列表|描述|类型|可选/必选|单位|取值范围|
|:--------------------|:-----|:--|:----|:-|:-------------------|
|measureType|测量类型|int|M|-|0：自动测量 1：手动测量|
|ppgIrregularHeartbeat|心律失常结果|int|M|-|1：未见异常 4：疑似房颤 5：疑似早搏|

#### 数据开放说明

|开放API|查询及时性|数据源|
|:-----------------------------------------------------------------------------------------------------------------------|:----|:---------|
|[健康记录查询](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/get-health-record-by-datatype-0000001142843917)|分钟级|部分手表、部分手环等|

#### 数据订阅说明

|事件类别|事件类别ID|描述|
|:------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------|:--------------------|
|[健康记录事件](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/subscription-0000001078496860#section13879857154018)|HEALTH_RECORD_EVENT$UPDATE$com.huawei.health.record.arrhythmia_result|订阅心律失常结果数据新增/更新事件类别ID|
|[健康记录事件](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/subscription-0000001078496860#section13879857154018)|HEALTH_RECORD_EVENT$DELETE$com.huawei.health.record.arrhythmia_result|订阅心律失常结果数据删除事件类别ID|

![](https://media:901788166629595658)  
当前心律失常结果数据开放以及订阅能力仅支持部分开发者使用，如有需要，可[提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)或者发送邮件至[hihealth@huawei.com](mailto:hihealth@huawei.com)进行咨询。  
