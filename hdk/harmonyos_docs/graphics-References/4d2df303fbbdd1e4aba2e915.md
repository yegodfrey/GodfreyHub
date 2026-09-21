---
name: document/cn/graphics-References/taarenderapi-0000001110249172
title: TaaRenderAPI
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/taarenderapi-0000001110249172
---

# TaaRenderAPI

|Class Info|
|:---------------------------------------------------------|
|TaaRenderAPI 用来进行时域抗锯齿渲染的类，包含环境初始化、参数传递、抗锯齿渲染以及资源申请和释放等功能。|

## Public Constructor Summary

|Constructor Name|
|:-----------------------------------------------|
|[TaaRenderAPI](#section15152155911424)() 默认构造函数。|

## Public Destructor Summary

|Destructor Name|
|:----------------------------------------------------|
|[~TaaRenderAPI](#section197561455204114)() 析构函数，释放内存。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|bool|[InitTaaProcess](#section788322516435)(unsigned int width, unsigned int height) 初始化时域抗锯齿插件资源，并设定默认渲染参数。|
|bool|[UpdateTaaParam](#section1350194774313)(float blendParam[], unsigned int paramLength, unsigned int renderWidth, unsigned int renderHeight) 更新时域抗锯齿插件渲染的参数列表。|
|bool|[GetJitterMatrix](#section040011254285)(float(&mat)[16], float cameraParam[], unsigned int cameraParamLength, bool cameraMode) 更新相机抖动矩阵，抖动矩阵写入mat数组。|
|bool|[RunTaaProcess](#section37355811295)(void* [taaRenderRes](#ZH-CN_TOPIC_0000001110249172__p13219113834316), void* motionVector, void* source) 执行时域抗锯齿后处理渲染流程，抗锯齿渲染结果写入纹理[taaRenderRes](#ZH-CN_TOPIC_0000001110249172__p13219113834316)上。|
|void|[FreeTaaResources](#section182617331513)() 释放时域抗锯齿插件的环境和资源。|
|bool|[GetTaaProcessError](#section543194314457)() 获取当前插件运行错误状态。|

## Public Constructors

### TaaRenderAPI

|Constructor|
|:---------------------|
|TaaRenderAPI() 无参构造函数。|

## Public Destructors

### ~TaaRenderAPI

|Destructor|
|:--------------------|
|~TaaRenderAPI() 析构函数。|

## Public Methods

### InitTaaProcess

|Method|
|:-----------------------------------------------------------------------------------|
|bool InitTaaProcess(unsigned int width, unsigned int height) 初始化时域抗锯齿插件资源，并设定默认渲染参数。|

**Parameters**

|Name|Description|
|:-----|:-------------------|
|width|渲染窗口的宽度，最大宽度为4680像素。|
|height|渲染窗口的高度，最大高度为4680像素。|

**Returns**

|Type|Description|
|:---|:-----------------------------------------|
|bool|判断时域抗锯齿插件资源是否初始化成功。 * true：成功。 * false：失败。|

### UpdateTaaParam

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------|
|bool UpdateTaaParam(float blendParam[], unsigned int paramLength, unsigned int renderWidth, unsigned int renderHeight) 更新时域抗锯齿插件渲染的参数列表。|

**Parameters**

|Name|Description|
|:-----------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|blendParam|该参数是长度为4的数组，存储控制抗锯齿的参数。 * blendParam[0]：sharpness。取值范围为[0, 1)，推荐值为0.25。 * blendParam[1]：stationary blending。取值范围为[0, 1)，推荐值为0.95。 * blendParam[2]：motion blending。取值范围为[0, 1)，推荐值为0.85。 * blendParam[3]：AABB scale。取值范围为[0, 2]，推荐值为1.0。|
|paramLength|[blendParam](#ZH-CN_TOPIC_0000001110249172__p1748765418156)数组的长度，该参数必须为4。|
|renderWidth|纹理内存的宽度，最大宽度为4680像素。|
|renderHeight|纹理内存的长度，最大长度为4680像素。|

**Returns**

|Type|Description|
|:---|:------------------------------------|
|bool|判断抗锯齿参数是否更新成功。 * true：成功。 * false：失败。|

### GetJitterMatrix

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|bool GetJitterMatrix(float(&mat)[16], float cameraParam[], unsigned int cameraParamLength, bool cameraMode) 更新相机抖动投影矩阵，抖动矩阵写入[mat](#ZH-CN_TOPIC_0000001110249172__p15401825122814)数组。|

**Parameters**

|Name|Description|
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|mat|相机的投影矩阵。|
|cameraParam|该参数是长度为8的数组，用于存放相机参数。 * cameraParam[0]：jitterSpread。取值范围为(0, 1]。 * cameraParam[1]：renderWidth。 * cameraParam[2]：renderHeight。 * cameraParam[3]：aspect。 * cameraParam[4]：fieldOfView。 * cameraParam[5]：nearClipPlane。 * cameraParam[6]：farClipPlane。 * cameraParam[7]：orthographicSize。|
|cameraParamLength|[cameraParam](#ZH-CN_TOPIC_0000001110249172__p1640182562811)数组的长度，该参数必须为8。|
|cameraMode|该参数表示当前相机是否为透视投影。 * true：透视投影。 * false：正交投影。|

**Returns**

|Type|Description|
|:---|:-------------------------------------|
|bool|判断相机抖动矩阵是否更新成功。 * true：成功。 * false：失败。|

### RunTaaProcess

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|bool RunTaaProcess(void* [taaRenderRes](#ZH-CN_TOPIC_0000001110249172__p13219113834316), void* motionVector, void* source) 执行时域抗锯齿后处理渲染流程，抗锯齿渲染结果写入纹理[taaRenderRes](#ZH-CN_TOPIC_0000001110249172__p13219113834316)上。|

**Parameters**

|Name|Description|
|:-----------|:------------------------------------------|
|taaRenderRes|用于存放绘制抗锯齿结果的纹理内存，该内存由用户申请。|
|motionVector|用于存放场景运动矢量motion vector的纹理内存，该内存由用户申请并写入数据。|
|source|未做抗锯齿的原始图像。|

**Returns**

|Type|Description|
|:---|:--------------------------------------|
|bool|判断抗锯齿渲染流程是否运行成功。 * true：成功。 * false：失败。|

### FreeTaaResources

|Method|
|:---------------------------------------|
|void FreeTaaResources() 释放时域抗锯齿插件的环境和资源。|

### GetTaaProcessError

|Method|
|:--------------------------------------|
|bool GetTaaProcessError() 获取当前插件运行错误状态。|

**Returns**

|Type|Description|
|:---|:---------------------------------------|
|bool|判断插件当前运行是否有错误。 * true：存在错误。 * false：无异常。|

