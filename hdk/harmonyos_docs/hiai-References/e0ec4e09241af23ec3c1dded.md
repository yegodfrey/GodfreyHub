---
name: document/cn/hiai-References/mllivenesscaptureresult-0000001052424288
title: MLLivenessCaptureResult
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/mllivenesscaptureresult-0000001052424288
---

# MLLivenessCaptureResult

|Class Info|
|:-----------------------------------------------------------------------|
|com.huawei.hms.mlsdk.livenessdetection.MLLivenessCaptureResult 静默活体检测结果。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:----------------------------------------------------|
|Bitmap|[getBitmap](#section1168805511204)() 获取静默活体检测结果的图像帧。|
|float|[getPitch](#section126157032110)() 获取人脸俯仰角度。|
|float|[getRoll](#section1614513542116)() 获取图像中人脸在竖直平面的旋转角度。|
|float|[getScore](#section158081199219)() 检测为活体的置信度（量化分数）。|
|float|[getYaw](#section18680613172118)() 获取人脸左右旋转角度。|
|boolean|[isLive](#section98851811212)() 判断是否为活体。|

## Public Methods

### getBitmap()

|Method|
|:---------------------------------------------------------|
|public android.graphics.Bitmap getBitmap() 获取静默活体检测结果的图像帧。|

**Returns**

|Type|Description|
|:----------------------|:------------|
|android.graphics.Bitmap|静默活体检测结果的图像帧。|

### getPitch()

|Method|
|:--------------------------------|
|public float getPitch() 获取人脸俯仰角度。|

**Returns**

|Type|Description|
|:----|:------------------------------------|
|float|返回人脸俯仰角度： * 正值表示人脸低头角度。 * 负值表示人脸仰头角度。|

### getRoll()

|Method|
|:----------------------------------------|
|public float getRoll() 获取图像中人脸在竖直平面的旋转角度。|

**Returns**

|Type|Description|
|:----|:-------------------------------------------------------------|
|float|返回图像中人脸在竖直平面的旋转角度： * 正值表示人脸在图像竖直平面顺时针旋转。 * 负值表示人脸在图像竖直平面逆时针旋转。|

### getScore()

|Method|
|:-------------------------------------------------------------|
|public float getScore() 检测为活体的置信度，量化分数为0.0、10.0、50.0、90.0四个分级。|

**Returns**

|Type|Description|
|:----|:----------------------------------|
|float|活体的置信度，量化分数为0.0、10.0、50.0、90.0四个分级。|

### getYaw()

|Method|
|:--------------------------------|
|public float getYaw() 获取人脸左右旋转角度。|

**Returns**

|Type|Description|
|:----|:--------------------------------------|
|float|返回人脸左右旋转角度，正值表示人脸转向图像的右侧，负值表示人脸转向图像的左侧。|

### isLive()

|Method|
|:-------------------------------|
|public boolean isLive() 判断是否为活体。|

**Returns**

|Type|Description|
|:------|:--------------------------------|
|boolean|静默活体检测结果。 * true：活体。 * false：非活体。|

