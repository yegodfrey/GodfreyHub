---
name: document/cn/HMSCore-Guides/web-api-preparations-0000001097891749
title: 开发准备
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/web-api-preparations-0000001097891749
---

# 开发准备

## 注册成为开发者

在开发应用前需要在[华为开发者联盟](https://developer.huawei.com/consumer/cn)网站上注册成为开发者并完成实名认证，具体方法请参见[帐号注册认证](https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148)。

## 创建项目

参见[创建项目](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createproject-0000001100334664)。

## 创建应用

在项目下[创建应用](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createapp-0000001146718717)完成应用的创建，特殊配置如下：

选择平台：选择"Web"。

## 打开相关服务

使用位置服务需要您在[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)上打开Site Kit。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站，选择"我的项目"。
2. 在项目列表中找到您的项目，在项目下的应用列表中选择需要开通位置服务的应用。
3. 前往"项目设置 > API管理"中开启"Site Kit"权限。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250506195632.96610302021721104325796924767450:50001231000000:2800:CB23A1D4635BB92E676C0B4A1555D2B6CB57C55445EED34DAF161270B4C19904.png "点击放大")

## 获取API密钥

服务使用前，需要在[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)上获取"API密钥"。获取API密钥的步骤如下：

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站，点击"我的项目"。
2. 在项目列表中找到您的项目，在项目中点击对应的应用名称。
3. 在"项目设置"页面的"项目"区域，点击"API密钥（凭据）"后面的![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250506195633.10871984346653529718402059958800:50001231000000:2800:D7DEC2AD64AAB43388DBBB905251783A395D75DB29F765D5E36B00AB7621F4DF.png)即可获取。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250506195633.57657832303445361950631207101870:50001231000000:2800:524CD46810D48E5A847269BFD63D6B2154FBF393E297BC42C412B15F4BBE78C8.png "点击放大")

> 说明
>
> * 使用"API密钥"有2种方式：
>
>   1 拼接URL中：调用URLEncoder.encode("Your apiKey", "UTF-8")方法对API密钥进行encodeURI编码。例如，原始API密钥：ABC/DFG+ ，转换结果：ABC%2FDFG%2B。
>
>   2 放在Header内：参考**Request Header** 中**Authorization**字段，推荐使用该方式。
>
>
> * 建议"API密钥"设置安全保护措施，具体请参见[如何保护API密钥](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/faq-0000001050166997#section1484016438711)。

