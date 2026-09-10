---
name: document/cn/hiai-Guides/model-deployment-and-inference-overview-0000001051704932
title: 概述
uri: https://developer.huawei.com/consumer/cn/doc/hiai-Guides/model-deployment-and-inference-overview-0000001051704932
---

# 概述

机器学习服务支持将模型放在本地集成或通过云端托管模型，可以将模型随应用一起打包，也可以将其上传到ML Kit模型托管平台进行托管，通过ML Kit SDK实现模型的下载和更新。  

#### 准备工作

1. 在进行开发之前，您需要完成必要的[开发准备工作](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/config-agc-0000001050990353)，同时请确保您的工程中已经[配置HMS Core SDK的Maven仓地址](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/config-maven-0000001050040031)，并且完成了本服务的[SDK集成](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/custom-model-sdk-0000001051292475)。同时，请参见[云端鉴权信息使用须知](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/sdk-data-security-0000001229909424#section2688102310166)，设置您应用的鉴权信息。
2. 将您要使用的自定义模型转换为MindSpore Lite格式，具体转换方式请参见[模型转换](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/model-convert-0000001054768865)。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172348.19421242300627885183210025990846:50001231000000:2800:535B0B2DD4862813A60ED1A94B2311E695D845AA3DEA5F54DC924D332204D36A.png)  
如果模型包含个人数据，请确保模型托管的必要最小存留时间。  
