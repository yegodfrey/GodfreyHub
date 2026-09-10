---
name: document/cn/hiai-References/mlscenedetectionanalyzer-0000001054573039
title: MLSceneDetectionAnalyzer
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/mlscenedetectionanalyzer-0000001054573039
---

# MLSceneDetectionAnalyzer

|Class Info|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|com.huawei.hms.mlsdk.scd.MLSceneDetectionAnalyzer 创建场景识别分析器有两种方式： * MLSceneDetectionAnalyzerFactory.getInstance().getSceneDetectionAnalyzer() * MLSceneDetectionAnalyzerFactory.getInstance().getSceneDetectionAnalyzer(MLSceneDetectionAnalyzerSetting） 前者使用MLSceneDetectionAnalyzerSetting中设置的默认值，后者可自定义配置项。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:---------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|SparseArray\<[MLSceneDetection](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlscenedetectionresult-0000001054373028)\>|[analyseFrame](#section4629125912345)([MLFrame](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframe-0000001050167430) frame) 使用同步方法检测输入图像中的场景信息。|
|Task\<List\<[MLSceneDetection](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlscenedetectionresult-0000001054373028)\>\>|[asyncAnalyseFrame](#section1632191815358)([MLFrame](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframe-0000001050167430) frame) 使用异步方法检测输入图像中的场景信息。|
|void|[stop](#section51951213810)() 释放分析器使用的资源。|

#### Public Methods

#### analyseFrame(MLFrame frame)

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public SparseArray\<[MLSceneDetection](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlscenedetectionresult-0000001054373028)\> analyseFrame([MLFrame](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframe-0000001050167430) frame) 使用同步方法检测输入图像中的场景信息。|

Parameters  

|Name|Description|
|:----|:----------|
|frame|待检测图像。|

Returns  

|Type|Description|
|:--------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|SparseArray\<[MLSceneDetection](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlscenedetectionresult-0000001054373028)\>|检测结果。|

#### asyncAnalyseFrame(MLFrame frame)

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public Task\<List\<[MLSceneDetection](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlscenedetectionresult-0000001054373028)\>\> asyncAnalyseFrame([MLFrame](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframe-0000001050167430) frame) 使用异步方法检测输入图像中的场景信息。接口返回的错误码可以参见[错误码](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlsdkscd-errorcode-0000001058769232)进行处理。|

Parameters  

|Name|Description|
|:----|:----------|
|frame|待检测图像。|

Returns  

|Type|Description|
|:---------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|Task\<List\<[MLSceneDetection](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlscenedetectionresult-0000001054373028)\>\>|检测结果。|

Sample code：

```
// 创建场景识别分析器。
MLSceneDetectionAnalyzer analyzer = MLSceneDetectionAnalyzerFactory.getInstance().getSceneDetectionAnalyzer();
// 通过bitmap创建MLFrame，建议图片尺寸不小于224*224像素，不大于4096*4096像素。
MLFrame frame = MLFrame.fromBitmap(bitmap);
Task<List<MLSceneDetection>> task = analyzer.asyncAnalyseFrame(frame);
task.addOnSuccessListener(new OnSuccessListener<List<MLSceneDetection>>() {
    public void onSuccess(List<MLSceneDetection> results) {
        // 对检测结果进行处理。
        for (int i = 0; i < results.size(); i++) {
            MLSceneDetection sceneInfo =  results.get(i);
            String result = sceneInfo.getResult();
            float confidence = sceneInfo.getConfidence();
        }
    }
}).addOnFailureListener(new OnFailureListener() {
    public void onFailure(Exception e) {
        // 检测失败的处理逻辑。
        if (e instanceof MLException) {
            MLException mlException = (MLException) e;
            // 获取错误码，开发者可以对错误码进行处理，根据错误码进行差异化的页面提示。
            int errorCode = mlException.getErrCode();
            // 获取报错信息，开发者可以结合错误码，快速定位问题。
            String errorMessage = mlException.getMessage();
        } else {
            // 其他错误。
        }
    }
});
```

#### stop()

|Method|
|:-----------------------------|
|public void stop() 释放分析器使用的资源。|

