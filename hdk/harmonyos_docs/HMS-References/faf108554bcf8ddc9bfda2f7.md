---
name: document/cn/HMS-References/MLFaceAnalyzer-4
title: MLFaceAnalyzer
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/MLFaceAnalyzer-4
source: portal
---

class info  
---  
com.huawei.hms.mlsdk.face.MLFaceAnalyzer  
人脸分析器：用于获取图片中人脸对象信息（[MLFace](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/MLFace-4)）。创建人脸分析器有两种方式MLAnalyzerFactory.getInstance().getFaceAnalyzer()和  MLAnalyzerFactory.getInstance().getFaceAnalyzer(MLFaceAnalyzerSetting），前者使用[MLFaceAnalyzerSetting](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/MLFaceAnalyzerSetting-4)中设置的默认值，后者可自定义配置项。  
  
## Public Method Summary

Return type| Method name  
---|---  
android.util.SparseArray<MLFace>| analyseFrame(MLFrame frame)  
com.huawei.hmf.tasks.Task<List<MLFace>>| asyncAnalyseFrame(MLFrame frame)  
boolean| isAvailable()  
void| stop()throws IOException  
  
## Public Methods

Method  
---  
public final android.util.SparseArray<MLFace> analyseFrame(MLFrame frame)  
从提供的图像中检测人脸，同步调用方式。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
frame| 待检测图像。  
  
  
**Return**  


Type| desc  
---|---  
android.util.SparseArray<MLFace>| 返回人脸对象集合。  
Method  
---  
public com.huawei.hmf.tasks.Task<List<MLFace>> asyncAnalyseFrame(MLFrame frame)  
从提供的图像中检测人脸，异步调用方式。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
frame| 待检测图像。  
  
  
**Return**  


Type| desc  
---|---  
com.huawei.hmf.tasks.Task<List<MLFace>>| 返回检测结果的异步任务对象，使用方式参考示例代码。  
  
  
**Sample Code**  
  

    
    
     复制
      
        1. // 创建使用默认配置的人脸分析器
        2. MLFaceAnalyzer analyzer = MLAnalyzerFactory.getInstance().getFaceAnalyzer();
        3. // 通过bitmap创建MLFrame,建议图片尺寸不小于320*320，不大于1920*1920
        4. MLFrame frame = MLFrame.fromBitmap(bitmap);
        5. Task<List<MLFace>> task = analyzer.asyncAnalyseFrame(frame);
        6. task.addOnSuccessListener(new OnSuccessListener<List<MLFace>>() {
        7.    public void onSuccess(List<MLFace> faces) {
        8.       // 对检测结果进行处理
        9.    }
        10. }).addOnFailureListener(new OnFailureListener() {
        11.    public void onFailure(Exception e) {
        12.       // 检测失败
        13.    }
        14. });
    
    

Method  
---  
public boolean isAvailable()  
查询分析器是否可用，即所需资源（算法模型）是否都已经正确加载。  
  
**Return**

Type| desc  
---|---  
boolean| 返回分析器是否可用。  
**true** ：分析器可用。  
**false** ：分析器不可用。  
Method  
---  
public void stop() throws IOException  
释放分析器所使用的资源。  
  
**Throws**

Exception name| Exception desc  
---|---  
IOException| 发生输入/输出异常。
