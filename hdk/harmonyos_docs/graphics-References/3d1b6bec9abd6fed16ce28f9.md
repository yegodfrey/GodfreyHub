---
name: document/cn/graphics-References/ddgi-overview-0000001259716954
title: Overview
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/ddgi-overview-0000001259716954
---

# Overview

图形引擎服务DDGI插件，生成动态的漫反射全局光照，该插件基于Vulkan图形API开发，支持windows平台、带Vulkan驱动的主流安卓/HarmonyOS环境。

## Class Summary

|Class|Description|
|:------------------------------------------------------------------------------------------------------------|:--------------|
|[DDGIAPI](https://developer.huawei.com/consumer/cn/doc/graphics-References/ddgi-api-ddgiapi-0000001259277208)|动态漫反射全局光照算法内核类。|

## Interface Summary

|Method|Description|
|:--------------------------------------------------------------------------------------------------------------------------|:-----------------------------|
|[DDGIUpsampling](https://developer.huawei.com/consumer/cn/doc/graphics-References/ddgi-api-ddgiupsampling-0000001261859978)|shader中使用，返回上采样后的Irradiance结果。|

## Struct Summary

|Struct|Description|
|:--------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------|
|[DDGICamera](https://developer.huawei.com/consumer/cn/doc/graphics-References/ddgi-api-ddgicamera-0000001307437169)|相机设置参数，包括相机位置、欧拉转角、变换矩阵。|
|[DDGIDirectionalLight](https://developer.huawei.com/consumer/cn/doc/graphics-References/ddgi-api-ddgidirectionallight-0000001259596996)|方向光设置参数，包括ID、变换矩阵、颜色、方向和强度。|
|[DDGIMaterial](https://developer.huawei.com/consumer/cn/doc/graphics-References/ddgi-api-ddgimaterial-0000001259277204)|PBR材质数据，用于DDGI SDK内部PBR计算。|
|[DDGIMesh](https://developer.huawei.com/consumer/cn/doc/graphics-References/ddgi-api-ddgimesh-0000001307117081)|网格数据，渲染模型中每个物体的顶点、材质、顶点索引、变换矩阵等信息，DDGI支持Submesh。|
|[DDGISettings](https://developer.huawei.com/consumer/cn/doc/graphics-References/ddgi-api-ddgisettings-0000001307197109)|DDGI设置参数，调整探针的位置、数量、覆盖体积、历史融合系数、偏差值等。|
|[DDGIVertex](https://developer.huawei.com/consumer/cn/doc/graphics-References/ddgi-api-ddgivertex-0000001259437072)|顶点数据，包括Position、Normal、UV、Tangent，用于SkinMesh的Joint、Weight数据。|
|[DDGIVulkanImage](https://developer.huawei.com/consumer/cn/doc/graphics-References/ddgi-api-ddgivulkanimage-0000001259756944)|Vulkan图片资源描述，用来传递材质贴图信息，或者用于保存DDGI渲染结果。|
|[DeviceInfo](https://developer.huawei.com/consumer/cn/doc/graphics-References/ddgi-api-deviceinfo-0000001259756940)|Vulkan环境信息，用于DDGI SDK内部创建、管理Vulkan资源、渲染管线。|
|[Mat4X4](https://developer.huawei.com/consumer/cn/doc/graphics-References/ddgi-api-mat4x4-0000001307317121)|模板化的矩阵数据，4行4列的列主序矩阵。该结构体仅用于数据存储、传递，不支持其他运算。|
|[Vec](https://developer.huawei.com/consumer/cn/doc/graphics-References/ddgi-api-vec-0000001307437165)|模板化的向量数据，特化为Vec2，Vec3，Vec4。该结构体仅用于数据存储、传递，不支持其他运算。|

## Enum Value Summary

|Enum Class|Description|
|:----------------------------------------------------------------------------------------------------------------------------------------|:-----------------|
|[AttachmentTextureType](https://developer.huawei.com/consumer/cn/doc/graphics-References/ddgi-api-attachmenttexturetype-0000001262179846)|指定保存DDGI渲染结果的图像类型。|
|[DDGIResult](https://developer.huawei.com/consumer/cn/doc/graphics-References/ddgi-api-ddgiresult-0000001309179989)|接口返回的结果类型。|
|[CoordSystem](https://developer.huawei.com/consumer/cn/doc/graphics-References/ddgi-api-coordsystem-0000001309340053)|指定坐标系类型。|

