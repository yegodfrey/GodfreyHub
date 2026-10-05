---
name: document/cn/HMS-References/MLRemoteIcrAnalyzer-4
title: MLRemoteIcrAnalyzer
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/MLRemoteIcrAnalyzer-4
source: portal
---

class info  
---  
com.huawei.hms.mlsdk.card.icr.cloud.MLRemoteIcrAnalyzer  
云侧身份证识别检测器：用于在提供的图像中，识别身份证信息。云侧身份证检测器，调用云端API，检测模型在云端运行。创建云侧身份证检测器有两种方式，根据实际情况二选一// 方式1：使用默认的参数配置 MLRemoteIcrAnalyzer analyzer = MLCardAnalyzerFactory.getInstance().getRemoteIcrAnalyzer(); // 方式2：使用自定义的参数配置 MLRemoteIcrAnalyzer analyzer = MLCardAnalyzerFactory.getInstance().getRemoteIcrAnalyzer(setting);  
  
## Sample Code
    
    
    复制
      
        1. // 方式1：使用默认的参数配置
        2. MLRemoteIcrAnalyzer analyzer = MLCardAnalyzerFactory.getInstance().getRemoteIcrAnalyzer();
        3. // 方式2：使用自定义的参数配置
        4. // setSideType 身份证正面或反面
        5. // MLRemoteIcrAnalyzerSetting.FRONT：值为”FRONT”，即正面。
        6. // MLRemoteIcrAnalyzerSetting.BACK：值为”BACK”，即反面。
        7. MLRemoteIcrAnalyzerSetting settings = new MLRemoteIcrAnalyzerSetting.Factory()
        8.    .setSideType(MLRemoteIcrAnalyzerSetting.FRONT)
        9.    .create();
        10. MLRemoteIcrAnalyzer analyzer = MLCardAnalyzerFactory.getInstance().getRemoteIcrAnalyzer(settings);
        11. // 通过Bitmap构造MLFrame，建议图片尺寸不小于512*512
        12. MLFrame mlFrame = new MLFrame.Creator().setBitmap(bitmap).create();
        13. // 身份证识别
        14. Tasktask = analyzer.asyncAnalyseFrame(mlFrame);
        15. task.addOnSuccessListener(new OnSuccessListener() {
        16.    public void onSuccess(MLIdCard idCard) {
        17.        //检测成功的处理逻辑
        18. }})
        19. .addOnFailureListener(new OnFailureListener() {
        20.    public void onFailure(Exception e) {
        21.        //检测失败的处理逻辑
        22. }});
    
    

## Public Method Summary

Return type| Method name  
---|---  
com.huawei.hmf.tasks.Task<MLIdCard>| asyncAnalyseFrame(MLFrame frame)  
void| stop()throws IOException  
MLRemoteIcrAnalyzer| create(MLApplication app, MLRemoteIcrAnalyzerSetting setting)  
  
## Public Methods

Method  
---  
public com.huawei.hmf.tasks.Task<MLIdCard> asyncAnalyseFrame(MLFrame frame)  
从提供的图像中识别身份证信息。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
frame| 待检测图片对象，支持传入bitmap。  
  
**Return**  


Type| desc  
---|---  
com.huawei.hmf.tasks.Task<MLIdCard>| 返回异步的任务对象  
Method  
---  
public void stop()  
终止检测并释放资源。  
Method  
---  
public static synchronized MLRemoteIcrAnalyzer create(MLApplication app, MLRemoteIcrAnalyzerSetting setting)  
创建云侧身份证识别检测器对象。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
app| MLApplication实例  
setting| 身份证检测参数配置器实例。  
  
**Return**  


Type| desc  
---|---  
MLRemoteIcrAnalyzer| 返回云侧身份证识别检测器对象。
