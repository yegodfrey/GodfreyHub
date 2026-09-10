---
name: document/cn/graphics-References/sampler-0000001282971873
title: Sampler
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/sampler-0000001282971873
---

# Sampler

|Class Info|
|:---------------------------|
|class Sampler 采样器类，用于对纹理的采样。|

#### Public Constructor Summary

|Constructor Name|
|:---------------------------------------|
|[Sampler](#section6228mcpsimp)() 默认构造函数。|

#### Public Destructor Summary

|Destructor Name|
|:-------------------------------------------------|
|virtual [\~Sampler](#section6295mcpsimp)() 默认析构函数。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|bool|[Create](#section1816mcpsimp)(const [SamplerCreateInfo](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/samplercreateinfo-0000001294513129)\& info) 根据[SamplerCreateInfo](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/samplercreateinfo-0000001294513129)信息创建采样器。|
|const [SamplerCreateInfo](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/samplercreateinfo-0000001294513129)\&|[GetSamplerCreateInfo](#section18238209408)() const 获取[SamplerCreateInfo](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/samplercreateinfo-0000001294513129)信息。|

#### Public Constructors

#### Sampler

|Constructor|
|:----------------|
|Sampler() 默认构造函数。|

#### Public Destructors

#### \~Sampler

|Destructor|
|:------------------------|
|virtual \~Sampler() 析构函数。|

#### Public Methods

#### Create

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|bool Create(const [SamplerCreateInfo](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/samplercreateinfo-0000001294513129)\& info) 根据[SamplerCreateInfo](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/samplercreateinfo-0000001294513129)信息创建采样器。|

Parameters  

|Name|Description|
|:---|:--------------------------------------------------------------------------------------------------------------------------------------|
|info|[SamplerCreateInfo](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/samplercreateinfo-0000001294513129)信息。|

Returns  

|Type|Description|
|:---|:-----------------------------|
|bool|返回创建结果。 * true：成功。 * false：失败。|

#### GetSamplerCreateInfo

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|const [SamplerCreateInfo](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/samplercreateinfo-0000001294513129)\& GetSamplerCreateInfo() const 获取[SamplerCreateInfo](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/samplercreateinfo-0000001294513129)信息。|

Returns  

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------|
|[SamplerCreateInfo](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/samplercreateinfo-0000001294513129)\&|返回采样器的[SamplerCreateInfo](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/samplercreateinfo-0000001294513129)信息。|

