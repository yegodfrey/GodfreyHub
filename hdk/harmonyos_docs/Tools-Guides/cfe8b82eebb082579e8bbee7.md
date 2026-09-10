---
name: document/cn/Tools-Guides/ml-conversion-0000001050062241
title: ML Kit手工转换指导书
uri: https://developer.huawei.com/consumer/cn/doc/Tools-Guides/ml-conversion-0000001050062241
---

# ML Kit手工转换指导书

#### 开发准备

您若需要应用支持ML Kit，必须完成接入准备，请参见[开发准备](https://developer.huawei.com/consumer/cn/doc/development/hiai-Guides/config-agc-0000001050990353)。  

#### 接口转换

#### FirebaseVision.getInstance

|Google API|To HMS API|
|:--------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|FirebaseVision.getInstance(com.google.firebase.FirebaseApp app)|[com.huawei.hms.mlsdk.MLAnalyzerFactory.getInstance](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlsdk-mlanalyzerfactory-0000001264474532) ([com.huawei.hms.mlsdk.common.MLApplication](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlapplication-0000001050167420) app) 参数app需手动添加代码创建，对应原参数com.google.firebase.FirebaseApp的创建方法FirebaseApp.getInstance()获取默认FirebaseApp实例或使用FirebaseApp.getInstance(String appName)根据App名称获取FirebaseApp实例，可使用[MLApplication.getInstance](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlapplication-0000001050167420#section1252015527125)()获取默认[MLApplication](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlapplication-0000001050167420)实例。|

To HMS API代码示例：

```
com.huawei.hms.mlsdk.common.MLApplication app = com.huawei.hms.mlsdk.common.MLApplication.getInstance("appName");
com.huawei.hms.mlsdk.MLAnalyzerFactory factory = com.huawei.hms.mlsdk.MLAnalyzerFactory.getInstance(app);
```

#### FaceDetector.finalize

|Google API|To HMS API|
|:---------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|com.google.android.gms.vision.face.FaceDetector.finalize()|[com.huawei.hms.mlsdk.face.MLFaceAnalyzer.stop](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlfaceanalyzer-0000001050167440#section11274122510131)() [MLFaceAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlfaceanalyzer-0000001050167440)不支持重写finalize方法，可以调用[stop](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlfaceanalyzer-0000001050167440#section11274122510131)方法释放资源。|

#### 废弃的常量

|Google API|Add HMS API|To HMS API|
|:------------------------------------------------------------------------------|:----------|:---------|
|com.google.firebase.ml.vision.face.FirebaseVisionFace.INVALID_ID|不提供|不提供|
|com.google.firebase.ml.vision.label.FirebaseVisionImageLabeler.ON_DEVICE_AUTOML|不提供|不提供|

#### switch-case语句中使用常量

如果在Google API代码中使用了switch-case语句，在Add HMS API场景下，需要将其转换为if-else语句，示例如下。

Google API代码：

```
int rotation;//rotation值由您自己设置
int rotationDegree = 0;
switch (rotation) {
    case FirebaseVisionImageMetadata.ROTATION_90:
        rotationDegree = 90;
        break;
    case FirebaseVisionImageMetadata.ROTATION_180:
        rotationDegree = 180;
        break;
    case FirebaseVisionImageMetadata.ROTATION_270:
        rotationDegree = 270;
        break;
    default:
        break;
 }
```

Add HMS API代码：

```
int rotation;//rotation值由您自己设置
int rotationDegree = 0;
if (rotation == ExtensionVisionImageMetadata.getROTATION_90()) {
    rotationDegree = 90;
} else if (rotation == ExtensionVisionImageMetadata.getROTATION_180()) {
    rotationDegree = 180;
} else if (rotation == ExtensionVisionImageMetadata.getROTATION_270()) {
    rotationDegree = 270;
} else {
    Log.i("rotation Degree","Unknown rotation");
}
```

