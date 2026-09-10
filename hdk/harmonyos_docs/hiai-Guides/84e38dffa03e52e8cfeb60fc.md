---
name: document/cn/hiai-Guides/doc-sdk-harmonyos-0000001251877049
title: 集成文档识别服务SDK
uri: https://developer.huawei.com/consumer/cn/doc/hiai-Guides/doc-sdk-harmonyos-0000001251877049
---

# 集成文档识别服务SDK

文档识别服务支持基础SDK方式集成，示例代码如下：

```
dependencies{
    implementation 'com.huawei.hms:ml-computer-harmony-mlkit-ocr-bolt:3.7.0.302'
}
```

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172359.22604162764124713713038636335262:50001231000000:2800:6EFBF17DAD35156A66260F422547792F96ECA6C1966411FBB6CBE922EE3BE44D.png)  
若您的应用同时集成了ML Kit提供的多个服务（[ML Kit服务列表](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/overview-sdk-harmonyos-0000001252277009#ZH-CN_TOPIC_0000001252277009__li1842231414318)），可能会出现编译问题，您需要将您集成的其他服务升级到最新版本。  

#### 添加AGCP插件配置

用上述方式集成SDK后，添加AGCP插件配置：  
在文件头部声明下一行添加如下配置。

```
apply plugin: 'com.huawei.agconnect'
```

