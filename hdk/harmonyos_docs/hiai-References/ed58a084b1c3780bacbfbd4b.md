---
name: document/cn/hiai-References/mlbcrcapture-0000001050169523
title: MLBcrCapture
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/mlbcrcapture-0000001050169523
---

# MLBcrCapture

|Class Info|
|:-----------------------------------------------------|
|com.huawei.hms.mlplugin.card.bcr.MLBcrCapture 银行卡检测插件。|

#### Nested Interface Summary

|Qualifier and Type|Interface Name and Description|
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|
|interface|[MLBcrCapture.Callback](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlbcrcapture-callback-0000001204918055) 检测结果回调接口。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void|[captureFrame](#section1778513427181)(Context context, [MLBcrCapture.Callback](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlbcrcapture-callback-0000001204918055) callback) 视频帧检测银行卡信息。|

#### Public Methods

#### captureFrame(Context context, MLBcrCapture.Callback callback)

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void captureFrame(Context context, [MLBcrCapture.Callback](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlbcrcapture-callback-0000001204918055) callback) 视频帧检测银行卡信息。|

Parameters  

|Name|Description|
|:-------|:----------|
|context|上下文。|
|callback|检测结果回调。|

Sample code：

```
 MLBcrCaptureConfig config = new MLBcrCaptureConfig.Factory()
     // 设置银行卡识别期望返回的结果类型。
     // MLBcrCaptureConfig.SIMPLE_RESULT：仅识别卡号、生效期和持卡人（限信用卡）信息。
     // MLBcrCaptureConfig.ALL_RESULT：识别卡号、生效期、持卡人（限信用卡）、发卡行和卡类别等信息。
     .setResultType(MLBcrCaptureConfig.RESULT_SIMPLE)
     // 设置插件页面屏幕方位。
     // MLBcrCaptureConfig.ORIENTATION_AUTO: 自适应模式，由物理感应器决定显示方向。
     // MLBcrCaptureConfig.ORIENTATION_LANDSCAPE: 横屏，显示时宽度大于高度。
     // MLBcrCaptureConfig.ORIENTATION_PORTRAIT: 竖屏，显示时高度大于宽度。
     .setOrientation(MLBcrCaptureConfig.ORIENTATION_AUTO)
     .create();
 MLBcrCapture bankCapture = MLBcrCaptureFactory.getInstance().getBcrCapture(config);
 // 将定义的回调方法（callback）传入银行卡识别器的captureFrame接口，进行银行卡识别。
 bankCapture.captureFrame(this, callback);
```

