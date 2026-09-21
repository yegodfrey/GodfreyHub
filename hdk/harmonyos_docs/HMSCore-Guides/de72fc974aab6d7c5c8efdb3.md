---
name: document/cn/HMSCore-Guides/sleep-breathing-record-0000001399223505
title: 睡眠呼吸记录
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/sleep-breathing-record-0000001399223505
---

# 睡眠呼吸记录

家用睡眠呼吸机记录的睡眠呼吸状态数据。

## OAuth权限

联盟卡片申请的权限名称：健康数据 >肺功能数据

* 读权限：https://www.huawei.com/healthkit/pulmonary.read
* 写权限：https://www.huawei.com/healthkit/pulmonary.write

## 睡眠呼吸记录数据类型

名称：com.huawei.health.record.ventilator

|**特征数据字段**列表|描述|**类型**|可选/必选|单位|取值范围|
|:-------------------------|:--------------------|:-----|:----|:------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|sysMode|治疗模式|int|M|ENUM|1：CPAP 单水平：吸气和呼气为同一个压力值且为定值，根据设置的压力值，提供治疗压力。 2：AutoCPAP 自动单水平：吸气和呼气为同一个压力值，且设定的是一个范围值，会随着呼吸事件进行波动。 3：BPAP 双水平：具备吸气和呼气两个压力，两个压力是定值，不会随着呼吸事件进行波动。 4：AutoBPAP 自动双水平：具备吸气和呼气两个压力，设定的只是一个范围值，会随着呼吸事件进行波动。|
|sysSessionDate|生成报告的时间|long|M|ms|-|
|eventAhi|AHI|float|M|times/h|-|
|sysDuration|使用时⻓|int|O|Minutes|-|
|lumisTidvolMedian|潮⽓量-中位数|float|O|ml|-|
|lumisTidvol95|潮⽓量-95％分位数|float|O|ml|-|
|lumisTidvolMax|潮⽓量-最⼤值|float|O|ml|-|
|clinicalRespRateMedian|每分钟呼吸频率中位数|float|O|times|-|
|clinicalRespRate95|95%分位呼吸频率中位数|float|O|times|-|
|clinicalRespRateMax|每分钟呼吸频率最⼤值|float|O|times|-|
|lumisIeratioMedian|吸气时间:呼气时间⽐率-中位数|float|O|-|-|
|lumisIeratioQuantile95|吸气时间:呼气时间⽐率-95％分位数|float|O|-|-|
|lumisIeratioMax|吸气时间:呼气时间⽐率-最⼤值|float|O|-|-|
|maskOff|⾯罩脱落次数|int|O|times|-|
|hypoventilationIndex|低通气指数|float|O|times/h|-|
|obstructiveApneaIndex|阻塞性呼吸暂停指数|float|O|times/h|-|
|pressureBelow95|P95(95%的使用时间内的压力值，小于)|float|O|cmH2O|-|
|hypoventilationEventTimes|低通气事件总次数|int|O|times|-|
|snoringEventTimes|鼾声事件总次数|int|O|times|-|
|obstructiveApneaEventTimes|阻塞(阻塞性呼吸暂停)总次数|int|O|times|-|
|centerApneaEventTimes|中枢(开放式呼吸暂停)总次数|int|O|times|-|
|airflowLimitEventTimes|气流受限总次数|int|O|times|-|
|massiveLeakEventTimes|大量漏气事件总次数|int|O|times|-|
|unknowEventTimes|未知事件总次数|int|O|times|-|
|allEventTimes|所有事件统计总数|int|O|times|-|

## 关联原子采样明细数据说明

睡眠呼吸记录数据当前支持关联[周期性呼吸采样事件](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/sleep-breathing-0000001399183509#section66262302412)和[非周期性呼吸采样事件](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/sleep-breathing-0000001399183509#section95008421155)。

### 数据开放说明

|开放API|查询及时性|数据源|
|:-----------------------------------------------------------------------------------------------------------------------|:----|:------|
|[健康记录查询](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/get-health-record-by-datatype-0000001142843917)|小时级|家用睡眠呼吸机|

### 数据订阅说明

暂不支持订阅功能。

## 场景示例

读取：请参见[读取睡眠呼吸记录数据](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/sleep-breathing-record-0000001349063758#section853514312339)。

写入：请参见[写入睡眠呼吸记录数据](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/sleep-breathing-record-0000001349063758#section721515791911)。

