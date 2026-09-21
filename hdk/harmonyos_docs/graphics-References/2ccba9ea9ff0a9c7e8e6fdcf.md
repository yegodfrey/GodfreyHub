---
name: document/cn/graphics-References/ndk_faceblendshapes-0000001060653620
title: HwArFaceBlendShapes
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_faceblendshapes-0000001060653620
---

# HwArFaceBlendShapes

|Module Info|
|:-------------------|
|用于管理人脸微表情，包含若干个表情参数。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void|[HwArFaceBlendShapes_acquireData](#section11547163453310)(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArFaceBlendShapes](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_faceblendshapes-0000001060811838) *blendshapes, const float **data) 获取所有的表情参数。|
|void|[HwArFaceBlendShapes_acquireTypes](#section1656005216266)(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArFaceBlendShapes](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_faceblendshapes-0000001060811838) *blendshapes, const [HwArAnimojiBlendShape](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_enum_animojiblendshape-0000001060811840) **types) 获取所有表情参数类型。|
|void|[HwArFaceBlendShapes_getCount](#section5437828283)(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArFaceBlendShapes](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_faceblendshapes-0000001060811838) *blendshapes, int32_t *count) 获取表情参数个数。|
|void|[HwArFaceBlendShapes_release](#section17571111314294)([HwArFaceBlendShapes](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_faceblendshapes-0000001060811838) *blendshapes) 释放HwARFaceBlendShapes对象。 > 注意 > 确保在[HwARFaceBlendShapes](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_faceblendshapes-0000001060811838)对象使用结束后调用，否则将导致内存泄露。|

## Public Methods

### HwArFaceBlendShapes_acquireData

|Function|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|HwArFaceBlendShapes_acquireData(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArFaceBlendShapes](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_faceblendshapes-0000001060811838) *blendshapes, const float **data) 获取所有表情参数，数值范围0~1，表示每种表情的表现程度，每个参数的含义可根据相同数组下标从[HwArFaceBlendShapes_acquireTypes](#section1656005216266)接口返回的数组中查询获得。如：data是HwArFaceBlendShapes_acquireData返回值，types是[HwArFaceBlendShapes_acquireTypes](#section1656005216266)返回值，types[0] = Animoji_Eye_Blink_Left，data[0]=1表示左眼完全闭合。|

**Parameters**

|Name|Description|
|:----------|:------------------------|
|session|与AR Engine服务交互的Session对象。|
|blendShapes|人脸表情对象。|
|data|表情参数数组。|

### HwArFaceBlendShapes_acquireTypes

|Function|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|HwArFaceBlendShapes_acquireTypes(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArFaceBlendShapes](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_faceblendshapes-0000001060811838) *blendshapes, const [HwArAnimojiBlendShape](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_enum_animojiblendshape-0000001060811840) **types) 获取所有表情参数类型数组，该数组成员与[HwArFaceBlendShapes_acquireData](#section11547163453310)接口返回的数组成员一一对应，值为[HwArAnimojiBlendShape](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_enum_animojiblendshape-0000001060811840)对应的枚举名称。|

**Parameters**

|Name|Description|
|:----------|:------------------------|
|session|与AR Engine服务交互的Session对象。|
|blendshapes|人脸表情对象。|
|types|表情参数类型数组。|

### HwArFaceBlendShapes_getCount

|Function|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|HwArFaceBlendShapes_getCount(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArFaceBlendShapes](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_faceblendshapes-0000001060811838) *blendshapes, int32_t *count) 获取表情参数个数。|

**Parameters**

|Name|Description|
|:----------|:------------------------|
|session|与AR Engine服务交互的Session对象。|
|blendshapes|人脸表情对象。|
|count|表情参数个数。|

### HwArFaceBlendShapes_release

|Function|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|HwArFaceBlendShapes_release([HwArFaceBlendShapes](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_faceblendshapes-0000001060811838) *blendshapes) 释放HwARFaceBlendShapes对象。 > 注意 > 确保在[HwARFaceBlendShapes](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_faceblendshapes-0000001060811838)对象使用结束后调用，否则将导致内存泄露。|

**Parameters**

|Name|Description|
|:----------|:----------|
|blendshapes|人脸表情对象。|

