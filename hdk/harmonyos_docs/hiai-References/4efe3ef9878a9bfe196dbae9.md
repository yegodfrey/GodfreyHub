---
name: document/cn/hiai-References/mllivenesscaptureresult-0000001183586844
title: MLInteractiveLivenessCaptureResult
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/mllivenesscaptureresult-0000001183586844
---

# MLInteractiveLivenessCaptureResult

|Class Info|
|:-------------------------------------------------------------------------------------|
|com.huawei.hms.mlsdk.interactiveliveness.MLInteractiveLivenessCaptureResult 动作活体检测结果类。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Bitmap|[getBitmap](#section1168805511204)() 获取动作活体检测结果的图像帧。|
|int|[getStateCode](#section126157032110)() 获取动作活体检测结果状态码，详见[InteractiveLivenessStateCode](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mllivenessdetectstates-0000001287743616)。|
|int|[getActionType](#section1614513542116)() 获取当前检测动作类型。|

#### Public Methods

#### getBitmap()

|Method|
|:----------------------------------------|
|public Bitmap getBitmap() 获取动作活体检测结果的图像帧。|

Returns  

|Type|Description|
|:-----|:------------|
|Bitmap|动作活体检测结果的图像帧。|

#### getStateCode()

|Method|
|:-----------------------------------------|
|public float getStateCode() 获取动作活体检测结果状态码。|

Returns  

|Type|Description|
|:---|:-------------|
|int|返回动作活体检测结果状态码。|

#### getActionType()

|Method|
|:---------------------------------------|
|public float getActionType() 获取当前检测动作类型。|

Returns  

|Type|Description|
|:---|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|int|获取当前检测动作类型。取值参考[MLInteractiveLivenessConfig](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/ml-kit-livenessdetectview-0000001340263605)。|

