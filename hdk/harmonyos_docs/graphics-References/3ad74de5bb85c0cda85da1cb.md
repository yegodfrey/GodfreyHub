---
name: document/cn/graphics-References/ndk_hitresult-0000001060971426
title: HwArHitResult
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_hitresult-0000001060971426
---

# HwArHitResult

|Module Info|
|:--------------------------------------|
|定义了射线（如以屏幕的点为起点的射线）与真实世界（如点云、平面等）的碰撞交点。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:----------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[HwArStatus](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_enum_arstatus-0000001060493644)|[HwArHitResult_acquireNewAnchor](#section11547163453310)([HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, [HwArHitResult](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_hitresult-0000001060493737) *hitResult, [HwArAnchor](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_anchor-0000001060971428) **outAnchor) 在碰撞命中位置创建一个新的锚点。|
|void|[HwArHitResult_acquireTrackable](#section15606340175312)(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArHitResult](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_hitresult-0000001060493737) *hitResult, [HwArTrackable](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_trackable-0000001060243335) **outTrackable) 返回被命中的可跟踪对象。|
|void|[HwArHitResult_create](#section17339163312465)(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, [HwArHitResult](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_hitresult-0000001060493737) **outHitResult) 创建一个空的命中结果对象。|
|void|[HwArHitResult_destroy](#section26211220559)([HwArHitResult](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_hitresult-0000001060493737) *hitResult) 释放命中结果对象使用的内存，以及它保存的任何可跟踪引用。|
|void|[HwArHitResult_getDistance](#section11409153115718)(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArHitResult](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_hitresult-0000001060493737) *hitResult, float *outDistance) 返回从相机到命中位置的距离（以米为单位）。|
|void|[HwArHitResult_getHitPose](#section182488201589)(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArHitResult](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_hitresult-0000001060493737) *hitResult, [HwArPose](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_pose-0000001060013677) *outPose) 获取交点的位姿，其平移向量是交点在世界坐标系的坐标，其旋转分量根据碰撞点的不同类型（与平面的交点、与点云的交点）而有不同的定义。|
|void|[HwArHitResultList_create](#section920216825613)(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, [HwArHitResultList](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_hitresultlist-0000001059883369) **outHitResultList) 创建一个命中结果对象列表。|
|void|[HwArHitResultList_destroy](#section124126913567)([HwArHitResultList](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_hitresultlist-0000001059883369) *hitResultList) 释放命中结果对象列表引用，以及其中的所有命中结果对象的引用。|
|void|[HwArHitResultList_getItem](#section10513610205616)(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArHitResultList](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_hitresultlist-0000001059883369) *hitResultList, int32_t index, [HwArHitResult](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_hitresult-0000001060493737) *outHitResult) 在命中结果列表中获取指定索引的命中结果对象。|
|void|[HwArHitResultList_getSize](#section10503151114566)(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArHitResultList](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_hitresultlist-0000001059883369) *hitResultList, int32_t *outSize) 获取命中结果对象列表中包含的对象数。|

## Public Methods

### HwArHitResult_acquireNewAnchor

|Function|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|HwArHitResult_acquireNewAnchor([HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, [HwArHitResult](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_hitresult-0000001060493737) *hitResult, [HwArAnchor](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_anchor-0000001060971428) **outAnchor) 在碰撞命中位置创建一个新的锚点。|

**Parameters**

|Name|Description|
|:--------|:------------------------|
|session|与AR Engine服务交互的Session对象。|
|hitResult|碰撞检测结果对象。|
|outAnchor|新创建的锚点对象。|

**Returns**

|Type|Description|
|:----------------------------------------------------------------------------------------------------------------|:-----------------|
|[HwArStatus](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_enum_arstatus-0000001060493644)|状态返回值类型，表示方法的调用状态。|

### HwArHitResult_acquireTrackable

|Function|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|HwArHitResult_acquireTrackable(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArHitResult](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_hitresult-0000001060493737) *hitResult, [HwArTrackable](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_trackable-0000001060243335) **outTrackable) 获取被命中的Trackable对象。|

**Parameters**

|Name|Description|
|:-----------|:------------------------|
|session|与AR Engine服务交互的Session对象。|
|hitResult|碰撞检测结果对象。|
|outTrackable|被命中的Trackable对象。|

### HwArHitResult_create

|Function|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|HwArHitResult_create(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, [HwArHitResult](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_hitresult-0000001060493737) **outHitResult) 创建一个空的命中结果对象。|

**Parameters**

|Name|Description|
|:-----------|:------------------------|
|session|与AR Engine服务交互的Session对象。|
|outHitResult|待创建的碰撞检测结果对象。|

### HwArHitResult_destroy

|Function|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|HwArHitResult_destroy([HwArHitResult](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_hitresult-0000001060493737) *hitResult) 释放命中结果对象使用的内存，以及它保存的任何可跟踪引用。|

**Parameters**

|Name|Description|
|:--------|:----------|
|hitResult|碰撞检测结果对象。|

### HwArHitResult_getDistance

|Function|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|HwArHitResult_getDistance(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArHitResult](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_hitresult-0000001060493737) *hitResult, float *outDistance) 返回从相机到命中位置的距离（以米为单位）。|

**Parameters**

|Name|Description|
|:----------|:------------------------|
|session|与AR Engine服务交互的Session对象。|
|hitResult|碰撞检测结果对象。|
|outDistance|相机与碰撞点的距离。|

### HwArHitResult_getHitPose

|Function|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|HwArHitResult_getHitPose(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArHitResult](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_hitresult-0000001060493737) *hitResult, [HwArPose](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_pose-0000001060013677) *outPose) 获取交点的位姿，其平移向量是交点在世界坐标系的坐标，其旋转分量根据碰撞点的不同类型（与平面的交点、与点云的交点）而有不同的定义。 * 当射线与平面碰撞时，局部坐标系为：X+垂直于射线，平行于跟踪平面；Y+是跟踪平面的法向量；Z+平行于平面，大致指向摄像头。 * 当射线与点云中的点碰撞时，系统会尝试用点击区域的点云估计一个平面 * 如果[HwArPoint_getOrientationMode](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_point-0000001059883365#section11547163453310)接口返回HWAR_POINT_ORIENTATION_ESTIMATED_SURFACE_NORMAL，则X+垂直于射线，平行于跟踪平面，Y+是跟踪平面的法向量，Z+平行于平面，大致指向摄像头。 * 如果返回HWAR_POINT_ORIENTATION_INITIALIZED_TO_IDENTITY，则坐标的方向不会随平面的角度发生变化，X+垂直于射线且指向右侧（从设备的角度观察），Y+向上，Z+大致指向摄像头，具体参见朝向模式定义。|

**Parameters**

|Name|Description|
|:--------|:------------------------|
|session|与AR Engine服务交互的Session对象。|
|hitResult|碰撞检测结果对象。|
|outPose|交点的位姿。|

### HwArHitResultList_create

|Function|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|HwArHitResultList_create(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, [HwArHitResultList](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_hitresultlist-0000001059883369) **outHitResultList) 创建一个命中结果对象列表。|

**Parameters**

|Name|Description|
|:---------------|:------------------------|
|session|与AR Engine服务交互的Session对象。|
|outHitResultList|待创建的命中检测结果对象列表。|

### HwArHitResultList_destroy

|Function|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|HwArHitResultList_destroy([HwArHitResultList](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_hitresultlist-0000001059883369) *hitResultList) 释放命中结果对象列表引用，以及其中的所有命中结果对象的引用。|

**Parameters**

|Name|Description|
|:------------|:------------|
|hitResultList|待释放的命中结果对象列表。|

### HwArHitResultList_getItem

|Function|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|HwArHitResultList_getItem(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArHitResultList](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_hitresultlist-0000001059883369) *hitResultList, int32_t index, [HwArHitResult](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_hitresult-0000001060493737) *outHitResult) 在命中结果列表中获取指定索引的命中结果对象。|

**Parameters**

|Name|Description|
|:------------|:------------------------|
|session|与AR Engine服务交互的Session对象。|
|hitResultList|命中结果对象列表。|
|index|待获取的命中结果对象索引。|
|outHitResult|待获取的命中结果对象。|

### HwArHitResultList_getSize

|Function|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|HwArHitResultList_getSize(const [HwArSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_session-0000001060385725) *session, const [HwArHitResultList](https://developer.huawei.com/consumer/cn/doc/graphics-References/ndk_struct_hitresultlist-0000001059883369) *hitResultList, int32_t *outSize) 获取命中结果对象列表中包含的对象数。|

**Parameters**

|Name|Description|
|:------------|:------------------------|
|session|与AR Engine服务交互的Session对象。|
|hitResultList|命中结果对象列表。|
|outSize|列表大小。|

