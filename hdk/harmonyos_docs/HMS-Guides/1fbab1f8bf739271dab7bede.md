---
name: document/cn/HMS-Guides/ml-doc-sdk-4
title: 集成文档识别服务SDK
uri: https://developer.huawei.com/consumer/cn/doc/HMS-Guides/ml-doc-sdk-4
source: portal
---

集成文档识别SDK，示例代码如下：
      
      1. dependencies{
        2.     implementation 'com.huawei.hms:ml-computer-vision-cloud:2.0.0.300'
        3. }
    
    

# 文件头增加配置

用上述方式集成SDK后，在文件头添加配置。
      
      1. apply plugin: 'com.huawei.agconnect'
    
    

注意：

此项配置需要在如下配置项后添加。
      
      1. apply plugin: 'com.android.application'
    
    

  


  

