---
name: document/cn/hiai-References/precisionmode-0000001139140573
title: PrecisionMode
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/precisionmode-0000001139140573
---

# PrecisionMode

> 说明
>
> 此接口从DDK 5.0.1.0版本起废弃，请使用模型管家V1接口[PrecisionMode](https://developer.huawei.com/consumer/cn/doc/hiai-References/precisionmode-0000001058114899)替代。

|Enum Info|
|:--------|
|模型精度配置选项。|

|Enum Value and Description|Value|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----|
|PRECISION_MODE_FP32 目前只对CPUCL生效，使用FP32的精度配置选项。|0|
|PRECISION_MODE_FP16 目前只对CPUCL生效，使用FP16&FP32的精度配置选项，若模型中算子不支持，则使用FP32计算，FP16数据格式是按照[IEEE 754-2008](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8766229)进行运算，需开发者保证模型运行过程中数据范围不超过[IEEE 754-2008](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8766229)指定的FP16数据范围【-65504，65504】，否则结果会被置为Infinities无效值。|1|

