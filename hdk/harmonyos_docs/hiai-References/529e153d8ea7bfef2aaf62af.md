---
name: document/cn/hiai-References/mlremoteproductvisionsearchanalyzer-0000001050167554
title: MLRemoteProductVisionSearchAnalyzer
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/mlremoteproductvisionsearchanalyzer-0000001050167554
---

# MLRemoteProductVisionSearchAnalyzer

|Class Info|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|com.huawei.hms.mlsdk.productvisionsearch.cloud.MLRemoteProductVisionSearchAnalyzer 拍照购检测器：用于在提供的图像中，识别商品信息。拍照购检测器，调用云端API，检测模型在云端运行。可通过以下方式创建拍照购检测器： ```screen // 使用自定义的参数配置。 MLRemoteProductVisionSearchAnalyzer analyzer =  MLAnalyzerFactory.getInstance().getRemoteProductVisionSearchAnalyzer(setting); ```|

**Sample code：**

```screen
// 设置apiKey。
MLApplication.getInstance().setApiKey("apiKey"); // apiKey的设置是独立的，可放在应用的Application中
```

```screen
// 使用自定义的参数配置。
MLRemoteProductVisionSearchAnalyzerSetting settings = new MLRemoteProductVisionSearchAnalyzerSetting.Factory()
// 设置检测结果最大数量。    
.setLargestNumOfReturns(16) 
// 设置商品集ID（默认为AGC配置中的project_id下的第一个商品集ID）。
.setProductSetId("vmall")
// 设置访问的站点区域。
.setRegion(MLRemoteProductVisionSearchAnalyzerSetting.REGION_DR_CHINA)
.create();
// 创建拍照购检测器对象。
MLRemoteProductVisionSearchAnalyzer analyzer = MLAnalyzerFactory.getInstance().getRemoteProductVisionSearchAnalyzer(settings);
// 通过Bitmap构造MLFrame。
MLFrame mlFrame = new MLFrame.Creator().setBitmap(bitmap).create();
// 商品信息识别。
Task<List<MLProductVisionSearch>> task = analyzer.asyncAnalyseFrame(mlFrame);
task.addOnSuccessListener(new OnSuccessListener<List<MLProductVisionSearch>>() {
    public void onSuccess(List<MLProductVisionSearch> resultList) {
        // 识别成功的处理逻辑。
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

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[Task](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/task_tresult-0000001050121148)<List<[MLProductVisionSearch](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlproductvisionsearch-0000001050169505)>>|[asyncAnalyseFrame](#section8787184984819)([MLFrame](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframe-0000001050167430) frame) 从提供的图像中识别商品信息。|
|[MLRemoteProductVisionSearchAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremoteproductvisionsearchanalyzer-0000001050167554)|[create](#section1064210172498)([MLApplication](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlapplication-0000001050167420) app, [MLRemoteProductVisionSearchAnalyzerSetting](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremoteproductvisionsearchanalyzers-0000001050169509) setting) 创建拍照购检测器对象。|
|void|[stop](#section38410624917)() 释放资源，包括释放输入输出流资源。|

## Public Methods

### asyncAnalyseFrame(MLFrame frame)

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [Task](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/task_tresult-0000001050121148)<List<[MLProductVisionSearch](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlproductvisionsearch-0000001050169505)>> asyncAnalyseFrame([MLFrame](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframe-0000001050167430) frame) 从提供的图像中识别商品信息。接口返回的错误码可以参见[错误码](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlsdkproductvisionsearch-errorcode-0000001059087050)进行处理。|

**Parameters**

|Name|Description|
|:----|:----------|
|frame|图片对象。|

**Returns**

|Type|Description|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[Task](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/task_tresult-0000001050121148)<List<[MLProductVisionSearch](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlproductvisionsearch-0000001050169505)>>|返回异步的任务对象。|

### create(MLApplication app, MLRemoteProductVisionSearchAnalyzerSetting setting)

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static synchronized [MLRemoteProductVisionSearchAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremoteproductvisionsearchanalyzer-0000001050167554) create([MLApplication](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlapplication-0000001050167420) app, [MLRemoteProductVisionSearchAnalyzerSetting](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremoteproductvisionsearchanalyzers-0000001050169509) setting) 创建拍照购检测器对象。|

**Parameters**

|Name|Description|
|:------|:---------------|
|app|MLApplication实例。|
|setting|拍照购检测参数配置器实例。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
|[MLRemoteProductVisionSearchAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremoteproductvisionsearchanalyzer-0000001050167554)|返回拍照购识别检测器对象。|

### stop()

|Method|
|:-----------------------------------|
|public void stop() 释放资源，包括释放输入输出流资源。|

