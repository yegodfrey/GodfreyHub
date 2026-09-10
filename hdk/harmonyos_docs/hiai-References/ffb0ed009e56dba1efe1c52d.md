---
name: document/cn/hiai-References/imageclassificationanalyzer-0000001050167514
title: MLImageClassificationAnalyzer
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/imageclassificationanalyzer-0000001050167514
---

# MLImageClassificationAnalyzer

|Class Info|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|com.huawei.hms.mlsdk.classification.MLImageClassificationAnalyzer 图像分类器：用于在提供的图像中查找图像类别（MLImageClassification）。 图像分类器有两种类型，一种是设备端分类器，即在设备上运行分类模型，返回分类结果；另一种是云端分类器，即调用云端API进行分类，分类模型在云端运行。 创建设备端图像分类器有两种方式： * MLAnalyzerFactory.getInstance().getLocalImageClassificationAnalyzer() * MLAnalyzerFactory.getInstance().getLocalImageClassificationAnalyzer(MLLocalClassificationAnalyzerSetting) 前者使用MLLocalClassificationAnalyzerSetting中设置的默认配置，后者可自定义配置项。|

Sample code：

```
// 创建使用默认配置的设备端图像分类器。
MLImageClassificationAnalyzer analyzer = MLAnalyzerFactory.getInstance().getLocalImageClassificationAnalyzer();
// 也可以通过用同样的方式创建云端图像分类器。
MLImageClassificationAnalyzer analyzer = MLAnalyzerFactory.getInstance().getRemoteImageClassificationAnalyzer();
// 通过bitmap创建MLFrame。建议图片尺寸不小于224*224。
MLFrame frame = MLFrame.fromBitmap(bitmap);
Task<List<MLImageClassification>> task = analyzer.asyncAnalyseFrame(frame);
task.addOnSuccessListener(new OnSuccessListener<List<MLImageClassification>>() {
   public void onSuccess(List<MLImageClassification> classifications) {
   // 对分类结果进行处理。
   }
}).addOnFailureListener(new OnFailureListener() {
    @Override
    public void onFailure(Exception e) {
        // 识别失败,获取相关异常信息。    
        try {        
            MLException mlException = (MLException) e;
            // 获取错误码，开发者可以对错误码进行处理，根据错误码进行差异化的页面提示。        
            int errorCode = mlException.getErrCode();
            // 获取报错信息，开发者可以结合错误码，快速定位问题。        
            String errorMessage = mlException.getMessage();    
        } catch (Exception error) {
            // 转换错误处理。  
        }
    }
});
```

#### Nested Class Summary

|Qualifier and Type|Class Name and Description|
|:-----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|static class|[MLImageClassificationAnalyzer.ImageClassificationType](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/imageclassificationtype-0000001050169469) 图像分类器类型的抽象接口，实现注解。|

#### Public Field Summary

|Qualifier and Type|Field and Description||
|:-----------------|:-|-|
|int|[TYPE_LOCAL](#section798632165114) 图像分类器使用设备端模型。||
|int|[TYPE_REMOTE](#section123452815112) 图像分类器使用云端模型。||

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|SparseArray\<[MLImageClassification](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/imageclassification-0000001050169467)\>|[analyseFrame](#section22163825118)([MLFrame](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframe-0000001050167430) frame) 对图像进行分类，同步处理方式。|
|[Task](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/task_tresult-0000001050121148)\<List\<[MLImageClassification](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/imageclassification-0000001050169467)\>\>|[asyncAnalyseFrame](#section1973015554518)([MLFrame](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframe-0000001050167430) frame) 对图像进行分类，异步处理方式。|
|int|[getAnalyzerType](#section1370615293527)() 获取图像分析器类型。|
|void|[stop](#section5114154245212)() throws IOException 关闭分类器所使用的资源。|

#### Public Fields

#### TYPE_LOCAL

|Field|
|:----------------------------------------------------------------|
|public static final int TYPE_LOCAL 图像分类器使用设备端模型。 Constant Value：0|

#### TYPE_REMOTE

|Field|
|:----------------------------------------------------------------|
|public static final int TYPE_REMOTE 图像分类器使用云端模型。 Constant Value：1|

#### Public Methods

#### analyseFrame(MLFrame frame)

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public SparseArray\<[MLImageClassification](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/imageclassification-0000001050169467)\> analyseFrame([MLFrame](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframe-0000001050167430) frame) 对图像进行分类，同步处理方式。|

Parameters  

|Name|Description|
|:----|:----------|
|frame|待分类图像。|

Returns  

|Type|Description|
|:----------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|SparseArray\<[MLImageClassification](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/imageclassification-0000001050169467)\>|返回分类结果集合。|

#### asyncAnalyseFrame(MLFrame frame)

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [Task](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/task_tresult-0000001050121148)\<List\<[MLImageClassification](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/imageclassification-0000001050169467)\>\> asyncAnalyseFrame([MLFrame](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframe-0000001050167430) frame) 对图像进行分类，异步处理方式。接口返回的错误码可以参见[错误码](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlsdkclassification-errorcode-0000001058927444)进行处理。|

Parameters  

|Name|Description|
|:----|:----------|
|frame|待分类图像。|

Returns  

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|
|[Task](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/task_tresult-0000001050121148)\<List\<[MLImageClassification](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/imageclassification-0000001050169467)\>\>|返回分类结果的异步任务对象，使用方式参见[示例代码](https://developer.huawei.com/consumer/cn/doc/development/hiai-Examples/sample-code-0000001050265470#section462213815301)。|

#### getAnalyzerType()

|Method|
|:--------------------------------------|
|public int getAnalyzerType() 获取图像分析器类型。|

Returns  

|Type|Description|
|:---|:-----------------------------------------------------------------------|
|int|返回图像分析器类型。 * 0：TYPE_LOCAL，表示图像分类器使用设备端模型。 * 1：TYPE_REMOTE，表示图像分类器使用云端模型。|

#### stop()

|Method|
|:-------------------------------------------------|
|public void stop() throws IOException 关闭分类器所使用的资源。|

Throws  

|Name|Description|
|:----------|:----------|
|IOException|发生输入/输出异常。|

