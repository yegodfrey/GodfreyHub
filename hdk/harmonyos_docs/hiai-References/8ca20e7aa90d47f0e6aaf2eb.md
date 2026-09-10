---
name: document/cn/hiai-References/precisionmode-0000001139140573
title: PrecisionMode
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/precisionmode-0000001139140573
---

# PrecisionMode

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260104150633.04293113903965291093955389085709:50001231000000:2800:EBDE4812417B592C0EDA3948FED8CBCD74BB43D3D5306708518F00B848A80575.png)  
此接口从DDK 5.0.1.0版本起废弃，请使用模型管家V1接口[PrecisionMode](https://developer.huawei.com/consumer/cn/doc/hiai-References/precisionmode-0000001058114899)替代。  

|Enum Info|
|:--------|
|模型精度配置选项。|

|Enum Value and Description|Value|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----|
|PRECISION_MODE_FP32 目前只对CPUCL生效，使用FP32的精度配置选项。|0|
|PRECISION_MODE_FP16 目前只对CPUCL生效，使用FP16\&FP32的精度配置选项，若模型中算子不支持，则使用FP32计算，FP16数据格式是按照[IEEE 754-2008](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8766229)进行运算，需开发者保证模型运行过程中数据范围不超过[IEEE 754-2008](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8766229)指定的FP16数据范围【-65504，65504】，否则结果会被置为Infinities无效值。|1|

