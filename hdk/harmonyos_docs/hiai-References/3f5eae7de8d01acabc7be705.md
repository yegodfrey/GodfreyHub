---
name: document/cn/hiai-References/mlframecreator-0000001050169385
title: MLFrame.Creator
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/mlframecreator-0000001050169385
---

# MLFrame.Creator

|Class Info|
|:------------------------------------------------|
|com.huawei.hms.mlsdk.common.MLFrame.Creator 帧构建器。|

## Public Constructor Summary

|Constructor Name|
|:----------------------------------------|
|[Creator](#section14891049614)() 实例化帧构建器。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:--------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------|
|[MLFrame](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframe-0000001050167430)|[create](#section13297001626)() 构建帧实例。|
|[MLFrame.Creator](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframecreator-0000001050169385)|[setBitmap](#section201046155214)(android.graphics.Bitmap bitmap) 设置图片帧位图数据。|
|[MLFrame.Creator](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframecreator-0000001050169385)|[setItemIdentity](#section109697173319)(int itemIdentity) 设置帧ID。|
|[MLFrame.Creator](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframecreator-0000001050169385)|[setQuadrant](#section71764711912)(int quad) 设置帧相机屏幕方向。|
|[MLFrame.Creator](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframecreator-0000001050169385)|[setTimestamp](#section1988041113106)(long timestamp) 设置帧时间戳。|
|[MLFrame.Creator](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframecreator-0000001050169385)|[writeByteBufferData](#section13201194916107)(java.nio.ByteBuffer data, int width, int height, int formatType) 设置视频帧数据（帧图像数据，图像宽度，高度和格式）。|

## Public Constructors

### Creator()

|Constructor|
|:------------------------|
|public Creator() 实例化帧构建器。|

## Public Methods

### create()

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------|
|public [MLFrame](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframe-0000001050167430) create() 构建帧实例。|

**Returns**

|Type|Description|
|:-----------------------------------------------------------------------------------------------------------|:----------|
|[MLFrame](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframe-0000001050167430)|帧实例。|

### setBitmap(android.graphics.Bitmap bitmap)

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLFrame.Creator](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframecreator-0000001050169385) setBitmap(android.graphics.Bitmap bitmap) 设置图片帧位图数据，不同算法对于处理的图片尺寸有不同的建议值，另外处理大图片会带来更多的内存和CPU消耗，建议输入图片大小不要超过4096*2160像素。|

**Parameters**

|Name|Description|
|:-----|:----------|
|bitmap|图片帧位图数据。|

**Returns**

|Type|Description|
|:--------------------------------------------------------------------------------------------------------------------------|:----------|
|[MLFrame.Creator](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframecreator-0000001050169385)|帧构建器实例。|

### setItemIdentity(int itemIdentity)

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLFrame.Creator](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframecreator-0000001050169385) setItemIdentity(int itemIdentity) 设置帧ID。|

**Parameters**

|Name|Description|
|:-----------|:--------------------------------------------|
|itemIdentity|帧ID：相机每生成一帧，都会对该帧进行编号，编号按次序不断加1，用于识别帧之间的生成次序。|

**Returns**

|Type|Description|
|:--------------------------------------------------------------------------------------------------------------------------|:----------|
|[MLFrame.Creator](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframecreator-0000001050169385)|帧构建器实例。|

### setQuadrant(int quad)

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLFrame.Creator](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframecreator-0000001050169385) setQuadrant(int quad) 设置帧相机屏幕方向。|

**Parameters**

|Name|Description|
|:---|:----------------------------------------------|
|quad|相机屏幕方向： * 0：正向横屏。 * 1：正向竖屏。 * 2：反向横屏。 * 3：反向竖屏。|

**Returns**

|Type|Description|
|:--------------------------------------------------------------------------------------------------------------------------|:----------|
|[MLFrame.Creator](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframecreator-0000001050169385)|帧构建器实例。|

### setTimestamp(long timestamp)

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLFrame.Creator](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframecreator-0000001050169385) setTimestamp(long timestamp) 设置帧时间戳，帧时间戳：记录系统启动到帧生成的毫秒数，包含设备深度休眠的时间。该时钟被保证是单调的，即使CPU在省电模式下，该时间也会继续计时。该时钟可以被使用在当测量时间间隔可能跨越系统睡眠的时间段。|

**Parameters**

|Name|Description|
|:--------|:----------|
|timestamp|帧时间戳。|

**Returns**

|Type|Description|
|:--------------------------------------------------------------------------------------------------------------------------|:----------|
|[MLFrame.Creator](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframecreator-0000001050169385)|帧构建器实例。|

### writeByteBufferData(java.nio.ByteBuffer data, int width, int height, int formatType)

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLFrame.Creator](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframecreator-0000001050169385) writeByteBufferData(java.nio.ByteBuffer data, int width, int height, int formatType) 设置视频帧数据（帧图像数据，图像宽度，高度和格式）。|

**Parameters**

|Name|Description|
|:---------|:-------------|
|data|视频帧图像数据。|
|width|视频帧图像宽度，单位：像素。|
|height|视频帧图像高度，单位：像素。|
|formatType|视频帧图像数据格式。|

**Returns**

|Type|Description|
|:--------------------------------------------------------------------------------------------------------------------------|:----------|
|[MLFrame.Creator](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframecreator-0000001050169385)|帧构建器实例。|

