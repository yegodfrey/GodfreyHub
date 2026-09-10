---
name: document/cn/HMSCore-Guides/open-platform-apikey-0000001053869211
title: 基于API Key开放鉴权
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/open-platform-apikey-0000001053869211
---

# 基于API Key开放鉴权

#### 概述

API Key是一种访问华为服务的简单令牌，长期有效（请您妥善保管），在华为开发者联盟的[API Console](https://developer.huawei.com/consumer/cn/console#/credentials/projectKey=dev7519896637536769923)上创建生成，您可直接通过此令牌调用支持此类鉴权的华为公开API。  

#### 获取API密钥

您可直接在华为开发者联盟的[API Console](https://developer.huawei.com/consumer/cn/console#/credentials/projectKey=dev7519896637536769923)上创建生成，具体步骤及支持此类鉴权的公开API类型表，请参见[API Console操作指南](https://developer.huawei.com/consumer/cn/doc/start/api-0000001062522591)。  

#### 调用华为公开API

应用调用华为公开API时，把生成的API Key密钥作为请求参数来进行鉴权。  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220623171204.57560871755614018335984230360748:50001231000000:2800:E2099ED544CD690A423168F262AA974CC369BDD97985409DF24C9ED908A91913.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)  
使用API Key前请进行URL编码，如：

编码前：ABC/DFG+，编码后：ABC%2FDFG%2B。

示例：

```
GET /v1/demo/indexes?key=CV3X1%2FJG7mdNZm03l9puvwPAktmfw1aj8XvBb6sm696MqoW57ehnUC
Host: oauth-api.cloud.huawei.com
```

