---
name: document/cn/graphics-References/ndk_facegeometry-0000001060493632
title: HwArFaceGeometry
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_facegeometry-0000001060493632
---

# HwArFaceGeometry

|Module Info|
|:------------------|
|用于描述人脸拓扑结构，即人脸Mesh。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void|[HwArFaceGeometry_acquireTexCoord](#section11547163453310)(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArFaceGeometry](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_facegeometry-0000001060653624) *geometry, const float **data) 获取人脸Mesh纹理坐标点数组。在渲染时，与HwArFaceGeometry_acquireVertices返回的顶点数据配合使用。|
|void|[HwArFaceGeometry_acquireTriangleIndices](#section699215357477)(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArFaceGeometry](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_facegeometry-0000001060653624) *geometry, const int32_t **data) 获取人脸Mesh三角面下标数组，可在渲染时使用。|
|void|[HwArFaceGeometry_acquireTriangleLabels](#section2899621499)(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArFaceGeometry](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_facegeometry-0000001060653624) *geometry, const [HwArAnimojiTriangleLabel](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_enum_animojitrianglelabel-0000001060653628) **data) 获取人脸Mesh三角面标签，取值：人脸Mesh的所有三角形对应的label值。|
|void|[HwArFaceGeometry_acquireVertices](#section11390163325117)(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArFaceGeometry](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_facegeometry-0000001060653624) *geometry, const float **data) 获取人脸Mesh顶点数组，数据格式为[x0，y0，z0，x1，y1，z1，...]，返回的顶点在人脸的局部坐标系下，需经过人脸pose转换到其他坐标系。|
|void|[HwArFaceGeometry_getTexCoordSize](#section11105045165319)(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArFaceGeometry](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_facegeometry-0000001060653624) *geometry, int32_t *count) 获取人脸Mesh纹理坐标点数组大小。|
|void|[HwArFaceGeometry_getTriangleCount](#section879111219566)(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArFaceGeometry](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_facegeometry-0000001060653624) *geometry, int32_t *count) 获取人脸Mesh三角面个数。|
|void|[HwArFaceGeometry_getTriangleLabelsSize](#section17625191015915)(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArFaceGeometry](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_facegeometry-0000001060653624) *geometry, int32_t *count) 获取人脸Mesh三角面标签个数。|
|void|[HwArFaceGeometry_getVerticesSize](#section15531512155714)(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArFaceGeometry](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_facegeometry-0000001060653624) *geometry, int32_t *count) 获取人脸Mesh顶点数组大小。|
|void|[HwArFaceGeometry_release](#section1297418301523)([HwArFaceGeometry](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_facegeometry-0000001060653624) *geometry) 释放HwArFaceGeometry对象。 > 注意 > 在使用[HwArFaceGeometry](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_facegeometry-0000001060493632)结束后调用，否则会导致内存泄露。|

## Public Methods

### HwArFaceGeometry_acquireTexCoord

|Function|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|HwArFaceGeometry_acquireTexCoord(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArFaceGeometry](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_facegeometry-0000001060653624) *geometry, const float **data) 获取人脸Mesh纹理坐标点数组，在渲染时，与[HwArFaceGeometry_acquireVertices](#section11390163325117)返回的顶点数据配合使用。|

**Parameters**

|Name|Description|
|:-------|:------------------------|
|session|与AR Engine服务交互的Session对象。|
|geometry|人脸Mesh对象。|
|data|人脸Mesh纹理坐标点数组。|

### HwArFaceGeometry_acquireTriangleIndices

|Function|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|HwArFaceGeometry_acquireTriangleIndices(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArFaceGeometry](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_facegeometry-0000001060653624) *geometry, const int32_t **data) 获取人脸Mesh三角面下标数组，可在渲染时使用。|

**Parameters**

|Name|Description|
|:-------|:------------------------|
|session|与AR Engine服务交互的Session对象。|
|geometry|人脸Mesh对象。|
|data|人脸Mesh三角面下标数组。|

### HwArFaceGeometry_acquireTriangleLabels

|Function|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|HwArFaceGeometry_acquireTriangleLabels(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArFaceGeometry](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_facegeometry-0000001060653624) *geometry, const [HwArAnimojiTriangleLabel](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_enum_animojitrianglelabel-0000001060653628)**data) 获取人脸Mesh三角面标签，取值：人脸Mesh的所有三角面对应的label值。用于区分三角形是属于哪个关键部位，对应部位参见[HwArAnimojiTriangleLabel](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_enum_animojitrianglelabel-0000001060653628)。|

**Parameters**

|Name|Description|
|:-------|:------------------------|
|session|与AR Engine服务交互的Session对象。|
|geometry|人脸Mesh对象。|
|data|三角形标签数组。|

### HwArFaceGeometry_acquireVertices

|Function|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|HwArFaceGeometry_acquireVertices(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArFaceGeometry](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_facegeometry-0000001060653624) *geometry, const float **data) 获取人脸Mesh顶点数组，数据格式为[x0，y0，z0，x1，y1，z1，...]，返回的顶点在人脸的局部坐标系下，需经过人脸pose转换到其他坐标系。|

**Parameters**

|Name|Description|
|:-------|:------------------------|
|session|与AR Engine服务交互的Session对象。|
|geometry|人脸Mesh对象。|
|data|人脸Mesh顶点数组。|

### HwArFaceGeometry_getTexCoordSize

|Function|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|HwArFaceGeometry_getTexCoordSize(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArFaceGeometry](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_facegeometry-0000001060653624) *geometry, int32_t *count) 获取人脸Mesh纹理坐标点数组大小。|

**Parameters**

|Name|Description|
|:-------|:------------------------|
|session|与AR Engine服务交互的Session对象。|
|geometry|人脸Mesh对象。|
|count|坐标点数组大小。|

### HwArFaceGeometry_getTriangleCount

|Function|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|HwArFaceGeometry_getTriangleCount(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArFaceGeometry](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_facegeometry-0000001060653624) *geometry, int32_t *count) 获取人脸Mesh三角面个数。|

**Parameters**

|Name|Description|
|:-------|:------------------------|
|session|与AR Engine服务交互的Session对象。|
|geometry|人脸Mesh对象。|
|count|三角面数量。|

### HwArFaceGeometry_getTriangleLabelsSize

|Function|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|HwArFaceGeometry_getTriangleLabelsSize(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArFaceGeometry](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_facegeometry-0000001060653624) *geometry, int32_t *count) 获取人脸Mesh三角面标签个数。|

**Parameters**

|Name|Description|
|:-------|:------------------------|
|session|与AR Engine服务交互的Session对象。|
|geometry|人脸Mesh对象。|
|count|三角面标签个数。|

### HwArFaceGeometry_getVerticesSize

|Function|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|HwArFaceGeometry_getVerticesSize(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArFaceGeometry](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_facegeometry-0000001060653624) *geometry, int32_t *count) 获取人脸Mesh顶点数组大小。|

**Parameters**

|Name|Description|
|:-------|:------------------------|
|session|与AR Engine服务交互的Session对象。|
|geometry|人脸Mesh对象。|
|count|人脸Mesh顶点数组大小。|

### HwArFaceGeometry_release

|Function|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|HwArFaceGeometry_release([HwArFaceGeometry](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_facegeometry-0000001060653624) *geometry) 释放[HwArFaceGeometry](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_facegeometry-0000001060653624)对象。 > 注意 > 在使用[HwArFaceGeometry](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_facegeometry-0000001060493632)结束后调用，否则会导致内存泄露。|

**Parameters**

|Name|Description|
|:-------|:----------|
|geometry|人脸Mesh对象。|

