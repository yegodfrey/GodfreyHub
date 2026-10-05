---
name: document/cn/HMS-Guides/ml-icr-sdk-4
title: 集成身份证识别服务SDK
uri: https://developer.huawei.com/consumer/cn/doc/HMS-Guides/ml-icr-sdk-4
source: portal
---

ML Kit提供两种集成SDK方式，您可以参见[概述（Full SDK和基础SDK）](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides-V5/overview-sdk-0000001051070278-V5)，根据您的应用场景选择不同的集成方式。

# 方式一：Full SDK方式集成（推荐使用）  


您可以通过两种方式，集成身份证识别服务：1、集成身份证识别服务插件，2、集成身份证识别服务SDK。推荐集成身份证识别服务插件包，插件包提供图片质量校验和相机封装功能，以及部分UI，SDK只提供身份证识别的基础服务，其图片质量和相机则需要自行进行处理。

1\. 集成身份证识别服务插件：先集成模型包，然后集成插件，模型包和插件信息如下：

**包类型**| **包名**| **SDK****大小**| **坐标名称**  
---|---|---|---  
插件a| ml-computer-card-icr-cn-plugin| 144K| com.huawei.hms:ml-computer-card-icr-cn-plugin:1.0.4.300  
模型包+算法包| ml-computer-card-icr-cn-model| 5.3M| com.huawei.hms:ml-computer-card-icr-cn-model:1.0.4.300  
  
集成插件包时，当前版本的插件、模型包版本号需要保持一致，否则可能会出现功能无法使用的错误，同时，若您的应用同时集成了ML Kit提供的其他服务的较老版本（[ML Kit最新版本列表](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/ml-history)），可能会出现编译问题，您可以参见[概述（注意事项）](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/ml-sdk-overview)进行处理。

Full SDK方式集成身份证识别插件的示例代码如下：
      
      1. dependencies{
        2.     // 引入身份证识别插件包
        3.     implementation ('com.huawei.hms:ml-computer-card-icr-cn-plugin:1.0.4.300') {
        4.         // 使用端侧能力时，可以排除云侧相关依赖，降低生成的APK包大小
        5.         exclude group: 'com.huawei.hms', module: 'ml-computer-net'
        6.         exclude group: 'com.huawei.hms', module: 'ml-computer-card-qa-plugin'
        7.     }
        8.     // 引入身份证识别模型包
        9.     implementation 'com.huawei.hms:ml-computer-card-icr-cn-model:1.0.4.300'
        10. }
    
    

集成身份证识别服务SDK：先集成基础SDK，然后集成模型包，模型包信息如下：

包类型| 包名| SDK大小| 坐标名称  
---|---|---|---  
模型包+算法包| ml-computer-card-icr-cn-model| 5.3M| com.huawei.hms:ml-computer-card-icr-cn-model:1.0.4.300  
  
Full SDK方式集成身份证识别SDK的示例代码如下：
      
      1. dependencies{
        2.     // 引入基础SDK
        3.     implementation 'com.huawei.hms:ml-computer-vision-icr:1.0.4.300'
        4.     // 引入身份证识别模型包
        5.     implementation 'com.huawei.hms:ml-computer-card-icr-cn-model:1.0.4.300'
        6. }
    
    

# 方式二：基础SDK方式集成

两种集成方式可以选择：1、集成身份证识别服务插件；2、集成身份证识别服务SDK。推荐集成身份证识别服务插件包，插件包提供图片质量校验和相机封装功能，以及部分UI，SDK只提供身份证识别的基础服务，其图片质量和相机则需要自行进行处理。

1. 集成身份证识别服务插件：

  * 如果您的应用使用端侧身份证识别服务，且只需要支持EMUI 5.0以上版本的华为手机，示例代码如下：



      
      1. dependencies{
        2.     // 引入身份证识别plugin包
        3.     implementation ('com.huawei.hms:ml-computer-card-icr-cn-plugin:1.0.4.300') {
        4.         // 使用端侧能力时，可以排除云侧相关依赖，降低生成的APK包大小
        5.         exclude group: 'com.huawei.hms', module: 'ml-computer-net'
        6.         exclude group: 'com.huawei.hms', module: 'ml-computer-card-qa-plugin'
        7.     }
        8. }
    
    

  * 如果您的应用只使用云端身份证识别服务，示例代码如下：



      
      1. dependencies{
        2.     // 引入身份证识别plugin包
        3.     implementation 'com.huawei.hms:ml-computer-card-icr-cn-plugin:1.0.4.300'
        4. }
    
    

2. 集成身份证识别服务SDK，示例代码如下：
      
      1. dependencies{
        2.     // 引入身份证识别SDK包
        3.     implementation ('com.huawei.hms:ml-computer-vision-icr:1.0.4.300')
        4. }
    
    

# 在文件头添加配置

用上述两种方式之一集成SDK后，在文件头添加配置。
      
      1. apply plugin: 'com.huawei.agconnect'
    
    

注意：

此项配置需要在如下配置项后添加。
      
      1. apply plugin: 'com.android.application'
    
    

# 自动更新机器学习模型  


如需使用端侧身份证识别服务，添加如下语句到AndroidManifest.xml文件中，用户从华为应用市场安装您的应用后，将自动更新机器学习模型到设备：
      
      1. <manifest
        2.     ...
        3.     <meta-data
        4.         android:name="com.huawei.hms.ml.DEPENDENCY"
        5.         android:value= "icr"/>
        6.     ...
        7. </manifest>
    
    

  

