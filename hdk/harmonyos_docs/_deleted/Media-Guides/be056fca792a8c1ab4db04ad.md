---
name: document/cn/Media-Guides/config-agc-0000001050039992
title: 配置AppGallery Connect
uri: https://developer.huawei.com/consumer/cn/doc/Media-Guides/config-agc-0000001050039992
---

# 配置AppGallery Connect

在开发应用前，需要在AppGallery Connect中配置相关信息。  

#### 注册成为开发者

在开发应用前需要在[华为开发者联盟](https://developer.huawei.com/consumer/cn)网站上注册成为开发者并完成实名认证，具体方法请参见[帐号注册认证](https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148)。  
![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260303110906.49056731367315332110976388112309:50001231000000:2800:0C18D6D93C77750E84F145D629CA16F0C1F379A1B19B5604BD920B63DB29C38A.png)  
只有"开发者类型"为"企业开发者"的合作伙伴才能开通WisePlay DRM服务。  

#### 创建应用

参见[创建项目](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createproject-0000001100334664 )和[在项目下创建应用](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createapp-0000001146718717)完成应用的创建，特殊配置如下：

* 选择平台：选择"Android"或"APP（HarmonyOS）"。
* 支持设备：选择"手机"或"大屏"。
* 应用分类：选择"应用"或"游戏"。  

#### 开通数字版权管理服务

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站，点击"我的项目"。
2. 在项目列表中找到您的项目，在项目中选择需要开通数字版权服务的应用。
3. 选择"构建 \> 数字版权管理服务"，请点击"开通"按钮开通华为数字版权服务。

   <br />

   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260303110906.52339767331242776294922109071568:50001231000000:2800:D9FBC2CA89A6339029CB7D8AA5283484FA1FF83FD5D983341BD904CF819C1D17.png)

   <br />

4. 请保存好"服务端接入信息"中的PortalID、AES Key和Sign Key，用于后续调用WisePlay DRM Server API做消息完整性校验和加密内容密钥使用。

   <br />

   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260303110906.08522603176453360293538655073996:50001231000000:2800:80BD59FB7BCEE91299B830E3DF4F4B9E112D56116AF9857DBF7ABDE0B0A34CBD.png)

   <br />

