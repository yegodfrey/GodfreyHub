---
name: document/cn/hiai-References/mlbcrcapture-callback-0000001204918055
title: MLBcrCapture.Callback
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/mlbcrcapture-callback-0000001204918055
---

# MLBcrCapture.Callback

|Interface Info|
|:---------------------------------------------------------------|
|com.huawei.hms.mlplugin.card.bcr.MLBcrCapture.Callback 检测结果回调接口。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void|[onCanceled](#section5689101651912)() 用户取消。|
|void|[onDenied](#section34812022191910)() 相机不支持。|
|void|[onFailure](#section1522523031913)(int retCode, android.graphics.Bitmap bitmap) 检测失败回调方法。|
|void|[onSuccess](#section1573185910196)([MLBcrCaptureResult](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlbcrcaptureresult-0000001050167574) result) 检测成功回调方法。|

## Public Methods

### onCanceled

|Method|
|:-----------------------------|
|public void onCanceled() 用户取消。|

### onDenied

|Method|
|:----------------------------|
|public void onDenied() 相机不支持。|

### onFailure(int retCode, android.graphics.Bitmap bitmap)

|Method|
|:---------------------------------------------------------------------------|
|public void onFailure(int retCode, android.graphics.Bitmap bitmap) 检测失败回调方法。|

**Parameters**

|Name|Description|
|:------|:----------|
|retCode|错误码。|
|bitmap|检测失败的银行卡图片。|

### onSuccess(MLBcrCaptureResult result)

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void onSuccess([MLBcrCaptureResult](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlbcrcaptureresult-0000001050167574) result) 检测成功回调方法。|

**Parameters**

|Name|Description|
|:-----|:----------|
|result|检测结果。|

