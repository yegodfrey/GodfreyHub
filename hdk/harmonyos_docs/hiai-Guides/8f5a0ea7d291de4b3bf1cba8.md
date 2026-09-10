---
name: document/cn/hiai-Guides/text-image-super-resolution-sdk-0000001054884261
title: 集成文字图像超分辨率服务SDK
uri: https://developer.huawei.com/consumer/cn/doc/hiai-Guides/text-image-super-resolution-sdk-0000001054884261
---

# 集成文字图像超分辨率服务SDK

ML Kit支持Full SDK和基础SDK两种集成方式，您可以参见[Full SDK和基础SDK](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/overview-sdk-0000001051070278#ZH-CN_TOPIC_0000001051070278__li65649285438)，根据您的应用场景选择不同的集成方式。  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172252.72633967189469150402153928125963:50001231000000:2800:8D07709E52DC6EFE28B7E0D35850FAB426E54C363D7DCDDDDC20CBC3111C8276.png)  
若您的应用同时集成了ML Kit提供的多个服务（[ML Kit服务列表](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/overview-sdk-0000001051070278#ZH-CN_TOPIC_0000001051070278__li1842231414318)），可能会出现编译问题，您需要参见[升级指南](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/upgrade-guide-0000001050038074)将您集成的其他服务升级到最新版本。  

#### 方式一：Full SDK方式集成（推荐使用）

先集成SDK基础包，再集成模型包，模型包信息如下：  

|包类型|作用|包名|SDK大小|坐标名称|
|:----------|:--------------|:------------------------------------------------|:----|:--------------------------------------------------------------------------|
|文字图像超分辨率模型包|对原始图像进行文字超分辨率处理|ml-computer-vision-textimagesuperresolution-model|2.79M|com.huawei.hms:ml-computer-vision-textimagesuperresolution-model:3.11.0.303|

Full SDK方式集成的示例代码如下：

```
dependencies{
    // 引入基础SDK
    implementation 'com.huawei.hms:ml-computer-vision-textimagesuperresolution:3.11.0.303'
    // 引入文字图像超分辨率模型包
    implementation 'com.huawei.hms:ml-computer-vision-textimagesuperresolution-model:3.11.0.303'
}
```

#### 方式二：基础SDK方式集成

示例代码如下：

```
dependencies{
    // 引入基础SDK
    implementation 'com.huawei.hms:ml-computer-vision-textimagesuperresolution:3.11.0.303'
}
```

#### 添加AGCP插件配置

用上述两种方式之一集成SDK后，请根据实际情况选择添加AGCP插件配置：

* 方式一：在文件头部声明下一行添加如下配置。

  ```
  apply plugin: 'com.huawei.agconnect'
  ```

* 方式二：在plugins中添加如下配置。

  ```
  plugins {
      id 'com.android.application'
      // 添加如下配置
      id 'com.huawei.agconnect'
  }
  ```

#### 更新机器学习模型

添加如下语句到AndroidManifest.xml文件中，用户从华为应用市场安装您的应用后，将自动更新机器学习模型到设备：

```
<meta-data
    android:name="com.huawei.hms.ml.DEPENDENCY"
    android:value= "tisr"
/>
```

