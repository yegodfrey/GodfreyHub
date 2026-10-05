---
name: document/cn/HMS-References/MLTextAnalyzer-4
title: MLTextAnalyzer
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/MLTextAnalyzer-4
source: portal
---

class info  
---  
com.huawei.hms.mlsdk.text.MLTextAnalyzer  
文本分析器：检测图像中的文本信息（MLText）。文本分析器有两种类型，一种是设备端分析器，即在设备上运行检测模型，返回检测结果；另一种是云端分析器，即调用云端API进行检测，检测模型在云端运行。  
创建设备端图像分析器方式为：  
MLAnalyzerFactory.getInstance().getLocalTextAnalyzer()和MLAnalyzerFactory.getInstance().getLocalTextAnalyzer(MLLocalTextSetting settings)，前者使用默认配置，后者使用自定义配置；  
创建云端图像分析器有两种方式：  
MLAnalyzerFactory.getInstance().getRemoteTextAnalyzer()和MLAnalyzerFactory.getInstance().getRemoteTextAnalyzer(MLRemoteTextSetting settings)，  
前者使用默认配置，后者使用自定义配置。  
  
## Sample Code
      
      1. // 本地文本检测示例
        2. MLTextAnalyzer analyzer = MLAnalyzerFactory.getInstance().getLocalTextAnalyzer();
        3. // 通过Bitmap创建MLFrame
        4. MLFrame frame = MLFrame.fromBitmap(bitmap);
        5. // 图像检测
        6. Task<MLText> task = analyzer.asyncAnalyseFrame(frame);
        7. task.addOnSuccessListener(new OnSuccessListener<MLText>() {
        8.     @Override
        9.     public void onSuccess(MLText text) {
        10.     // 检测成功
        11.     }
        12. }).addOnFailureListener(new OnFailureListener() {
        13.     @Override
        14.     public void onFailure(Exception e) {
        15.     // 检测失败
        16.     }
        17. });
    
    
      
      1. // 云端文本检测示例
        2. MLTextAnalyzer analyzer = MLAnalyzerFactory.getInstance().getRemoteTextAnalyzer();
        3. // 通过Bitmap创建MLFrame
        4. MLFrame frame = MLFrame.fromBitmap(bitmap);
        5. // 图像检测
        6. Task<MLText> task = analyzer.asyncAnalyseFrame(frame);
        7. task.addOnSuccessListener(new OnSuccessListener<MLText>() {
        8.     @Override
        9.     public void onSuccess(MLText text) {
        10.         // 检测成功
        11.     }
        12. }).addOnFailureListener(new OnFailureListener() {
        13.     @Override
        14.     public void onFailure(Exception e) {
        15.         // 检测失败
        16.     }
        17. });
    
    

## Constant Summary

Type| Name| Desc  
---|---|---  
int| OCR_LOCAL_TYPE| 本地检测模式。  
int| OCR_REMOTE_TYPE| 云端检测模式。  
  
## Public Method Summary

Return type| Method name  
---|---  
android.util.SparseArray<MLText.Block>| analyseFrame(MLFrame frame)  
com.huawei.hmf.tasks.Task<MLText>| asyncAnalyseFrame(MLFrame frame)  
void| close()throws IOException  
int| getAnalyseType()  
boolean| isAvailable()  
void| stop()  
  
## Constants

Constant  
---  
public static final int OCR_LOCAL_TYPE  
本地检测模式。  
Constant Value: 0  
Constant  
---  
public static final int OCR_REMOTE_TYPE  
云端检测模式。  
Constant Value: 1  
  
## Public Methods

Method  
---  
public android.util.SparseArray<MLText.Block> analyseFrame(MLFrame frame)  
从输入的图像中检测文本信息，只适用于使用MLTextAnalyzer.Factory方式创建分析器的场景。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
frame| 待检测图像。  
  
**Return**  


Type| desc  
---|---  
android.util.SparseArray<MLText.Block>| 返回检测出的文本区块信息，包含内容、语种、文本图像边框等信息。  
Method  
---  
public com.huawei.hmf.tasks.Task<MLText> asyncAnalyseFrame(MLFrame frame)  
异步检测图像文本信息，只适用于处理MLAnalyzerFactory.getInstance().getLocalTextAnalyzer()或者MLAnalyzerFactory.getInstance().getRemoteTextAnalyzer()方式创建分析器的场景。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
frame| 待检测图像。  
  
**Return**  


Type| desc  
---|---  
com.huawei.hmf.tasks.Task<MLText>| 返回封装了检测结果的异步任务对象。  
Method  
---  
public void close() throws IOException  
释放资源，包括释放输入输出流等资源。  
  
**Throws**

Exception name| Exception desc  
---|---  
IOException| 释放资源过程中产生的输入流、输出流异常。  
Method  
---  
public int getAnalyseType()  
获取检测模式。  
  
**Return**

Type| desc  
---|---  
int| 返回检测模式。0：OCR_LOCAL_TYPE，本地检测模式。1：OCR_REMOTE_TYPE，云端检测模式。  
Method  
---  
public boolean isAvailable()  
判断分析器是否可用。  
  
**Return**

Type| desc  
---|---  
boolean| **true** : 表示分析器可用。**false** ：表示分析器不可用。  
Method  
---  
public void stop() throws IOException  
释放资源，包括释放输入输出流等资源。  
  
**Throws**

Exception name| Exception desc  
---|---  
IOException| 释放资源过程中产生的输入流、输出流异常。
