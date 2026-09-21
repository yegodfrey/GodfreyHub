---
name: document/cn/hiai-References/mllivenesscapture-callback-0000001205196607
title: MLLivenessCapture.Callback
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/mllivenesscapture-callback-0000001205196607
---

# MLLivenessCapture.Callback

|Interface Info|
|:--------------------------------------------------------------------------|
|com.huawei.hms.mlsdk.livenessdetection.MLLivenessCapture.Callback 检测结果回调接口。|

**Sample code** ：

```screen
private MLLivenessCapture.Callback callback = new MLLivenessCapture.Callback() {
    public void onSuccess(MLLivenessCaptureResult result){
        // 检测完成，结果回调处理。
    }
    public void onFailure(int errorCode) {
        // 检测异常。
    }
};
```

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void|[onFailure](#section35295584199)(int errorCode) 检测失败回调。|
|void|[onSuccess](#section162411636206)([MLLivenessCaptureResult](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mllivenesscaptureresult-0000001052424288) result) 静默活体检测完成回调函数。|

## Public Methods

### onFailure

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void onFailure(int errorCode) 检测失败回调，当未获取相机权限或者调用相机失败以及用户取消时回调。返回的错误码可以参见[错误码](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlsdklivenessdetection-errorcode-0000001057529345)进行处理。|

**Parameters**

|Name|Description|
|:--------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|errorCode|静默活体检测错误码（错误码请参见[errorCode](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mllivenesscaptureerror-0000001053023497#section1284816312208)）。|

### onSuccess

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void onSuccess([MLLivenessCaptureResult](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mllivenesscaptureresult-0000001052424288) result) 静默活体检测完成回调函数。|

**Parameters**

|Name|Description|
|:-----|:----------------------------------------------|
|result|静默活体检测结果，包含是否活体，检测完成时对应的图像帧，活体置信度（量化分数），面部姿态角度。|

