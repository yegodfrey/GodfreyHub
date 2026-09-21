---
name: document/cn/hiai-References/mldocumentanalyzer-harmonyos-0000001246077637
title: MLDocumentAnalyzer
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/mldocumentanalyzer-harmonyos-0000001246077637
---

# MLDocumentAnalyzer

|Class Info|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|com.huawei.hms.mlsdk.document.MLDocumentAnalyzer 文档检测器：通过调用云端API接口检测文档图像中的文档信息（MLDocument）。 创建文档检测器有两种方式： * 默认方式：MLAnalyzerFactory.getInstance().getRemoteDocumentAnalyzer()，默认情况下系统自动识别语种，不校验证书指纹。 * 自定义方式：MLAnalyzerFactory.getInstance().getRemoteDocumentAnalyzer(MLDocumentSetting setting)，用户可设置检测语种和是否校验证书指纹。|

**Sample code：**

```screen
// 创建使用默认配置的图像文档检测器 
MLDocumentAnalyzer analyzer = MLAnalyzerFactory.getInstance().getRemoteDocumentAnalyzer(); 
// 通过Bitmap创建MLFrame 
MLFrame frame = MLFrame.fromBitmap(bitmap); 
// 创建文档检测任务 
TaskDispatcher globalTaskDispatcher = getGlobalTaskDispatcher(TaskPriority.DEFAULT);
globalTaskDispatcher.syncDispatch(new Runnable() {
    @Override 
    public void run() { 
        try {         
            MLDocument document = analyzer.syncAnalyseFrame(frame);
            // 识别成功的处理逻辑。         
        } catch (Exception exception) { 
            // 识别失败的处理逻辑。
            MLException mlException = (MLException) exception;   
            // 获取错误码，开发者可以对错误码进行处理，根据错误码进行差异化的页面提示。         
            int errorCode = mlException.getErrCode(); 
            // 获取报错信息，开发者可以结合错误码，快速定位问题。         
            String errorMessage = mlException.getMessage();     
        } 
    } 
});
```

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:---------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[MLDocument](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mldocument-harmonyos-0000001246077635)|[syncAnalyseFrame](#section79701908717)([MLFrame](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframe-0000001050167430) frame) throws Exception 从输入的图像中检测文档信息。|
|void|[close](#section280710482307)() throws IOException 释放资源，包括释放输入输出流等资源。|
|void|[stop](#section1341981520473)() throws IOException 释放资源，包括释放输入输出流资源。|

## Public Methods

### syncAnalyseFrame(MLFrame frame)

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLDocument](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mldocument-harmonyos-0000001246077635) syncAnalyseFrame([MLFrame](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframe-0000001050167430) frame) 从输入的图像中检测文档信息。接口返回的错误码可以参见[错误码](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/document-err-harmonyos-0000001201441652)进行处理。|

**Parameters**

|Name|Description|
|:----|:----------|
|frame|待检测图像。|

**Returns**

|Type|Description|
|:---------------------------------------------------------------------------------------------------------------------------|:----------|
|[MLDocument](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mldocument-harmonyos-0000001246077635)|返回检测结果。|

### close()

|Method|
|:--------------------------------------------------------|
|public void close() throws IOException 释放资源，包括释放输入输出流等资源。|

**Throws**

|Name|Description|
|:----------|:-------------------|
|IOException|释放资源过程中产生的输入流、输出流异常。|

### stop()

|Method|
|:------------------------------------------------------|
|public void stop() throws IOException 释放资源，包括释放输入输出流资源。|

**Throws**

|Name|Description|
|:----------|:----------------------|
|IOException|释放资源过程中，可能产生输入流、输出流的异常。|

