---
name: document/cn/hiai-References/mlmodelinputs-factory-0000001051586644
title: MLModelInputs.Factory
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/mlmodelinputs-factory-0000001051586644
---

# MLModelInputs.Factory

|Class Info|
|:-------------------------------------------------------------|
|com.huawei.hms.mlsdk.custom.MLModelInputs.Factory 推理的输入参数构造工厂。|

#### Public Constructor Summary

|Constructor Name|
|:------------------------------------------------|
|[Factory](#section1471122192613)() 推理的输入参数构造工厂实例。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[MLModelInputs.Factory](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlmodelinputs-factory-0000001051586644)|[add](#section31411830102618)(Object input) throws [MLException](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlexception-0000001050169383) 向模型输入对象中添加数据。|
|[MLModelInputs](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlmodelinputs-0000001052426717)|[create](#section1968753612267)() 创建模型输入的数据。|

#### Public Constructors

#### Factory()

|Method|
|:------------------------------|
|public Factory() 推理的输入参数构造工厂实例。|

#### Public Methods

#### add(Object input)

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLModelInputs.Factory](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlmodelinputs-factory-0000001051586644) add(Object input) throws [MLException](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlexception-0000001050169383) 向模型输入对象中添加数据。|

Parameters  

|Name|Description|
|:----|:--------------------------------------------|
|input|待添加的数据内容，要求一维或多维的基本数据类型数组，基本数据类型包括float和byte。|

Returns  

|Type|Description|
|:---------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[MLModelInputs.Factory](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlmodelinputs-factory-0000001051586644)|模型输入的数据对象。|

Throws  

|Name|Description|
|:-------------------------------------------------------------------------------------------------------------------|:-----------------------------------|
|[MLException](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlexception-0000001050169383)|内部错误。|
|NullPointerException|如果输入的内容是null，则抛出空指针异常。|
|IllegalArgumentException|如果输入的不是float和byte的一维或多维数组，则抛出无效参数异常。|

#### create()

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLModelInputs](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlmodelinputs-0000001052426717) create() 创建模型输入的数据。|

Returns  

|Type|Description|
|:-----------------------------------------------------------------------------------------------------------------------|:----------|
|[MLModelInputs](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlmodelinputs-0000001052426717)|模型输入的数据。|

