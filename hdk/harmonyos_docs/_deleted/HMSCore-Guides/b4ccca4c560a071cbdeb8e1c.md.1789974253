---
name: document/cn/HMSCore-Guides/android-sdk-config-agc-0000001050158579
title: 配置AppGallery Connect
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-sdk-config-agc-0000001050158579
---

# 配置AppGallery Connect

在开发应用前，需要在[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)中配置相关信息。

## 注册成为开发者

在开发应用前需要在[华为开发者联盟](https://developer.huawei.com/consumer/cn)网站上注册成为开发者并完成实名认证，具体方法请参见[帐号注册认证](https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148)。

## 创建项目

参见[创建项目](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createproject-0000001100334664)。

## 开通付费

自2021年1月1日起，位置服务对部分接口制定了收费方案，详情请参见[服务定价](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/about-charging-0000001052557393)。请到"我的项目 > 我的套餐"，进行套餐升级。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250506195607.91485643010895735823438019687616:50001231000000:2800:380F86C68923C58CFDA5C826A4D8ACA0BE1849F6BDF1A4B5333637DF6A12236C.png "点击放大")

## 创建应用

在项目下[创建应用](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createapp-0000001146718717)完成应用的创建，特殊配置如下：

* 选择平台：选择"Android"。
* 支持设备：选择"手机"。
* 应用分类：选择"应用"或"游戏"。

## 生成签名证书指纹

签名证书指纹用于校验应用的真实性，您需要根据签名证书在本地生成签名证书指纹，并在应用上架前将签名证书指纹配置到AppGallery Connect。

在生成签名证书指纹前需要满足以下两个条件：

* 已创建应用程序的签名证书，签名证书创建请参见[生成签名证书](https://developer.huawei.com/consumer/cn/codelab/HMSPreparation/index.html#2)。
* 当前PC已经安装[JDK](https://www.oracle.com/java/technologies/javase-downloads.html)。

操作步骤如下：

* Windows
  1. 执行CMD命令打开命令行工具，执行**cd** 命令进入keytool.exe所在的目录（以下样例为JDK安装在C盘的Program Files目录）。

     ```screen
     cd C:\Program Files\Java\jdk\bin
     ```

  2. 执行命令**keytool -list -v -keystore** *<keystore-file>* ，按命令行提示进行操作。*<keystore-file>* 为应用签名证书的完整路径。

     例如：

     ```screen
     keytool -list -v -keystore C:\TestApp.jks
     ```

  3. 根据结果获取对应的SHA256指纹。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250506195608.64264676051394690189805601830996:50001231000000:2800:168C2078C7FEBB1226D7804DC3FF817493A7C5B5D4178783F469B66725B750E8.png "点击放大")

* macOS
  1. 打开Terminal终端。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250506195608.10155891236236169826667789010036:50001231000000:2800:41DE0E9976736EE46B5FB204367AE83A27C4DE12810A7611C4517E96E553A5D2.png)

  2. 执行命令**keytool -list -v -keystore** *<keystore-file>* ，按命令行提示进行操作。*<keystore-file>* 为应用签名证书的完整路径。

     例如：

     ```screen
     keytool -list -v -keystore /Users/admin/Downloads/HmsDemo.jks
     ```

  3. 根据结果获取对应的SHA256指纹。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250506195608.94088886849837268973940537619310:50001231000000:2800:FB7EE5F96D8A6E73D6A5EB9A229B5D4CEF2AD0072C0B9A9F9B2B17FA02E21185.png)

## 配置签名证书指纹

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站，点击"我的项目"。
2. 在项目列表中找到您的项目，在项目中点击需要配置签名证书指纹的应用。
3. 在"项目设置 > 常规"页面的"应用"区域，点击"SHA256证书指纹"后的"添加证书指纹"，输入生成的SHA256指纹。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250506195608.09198344364925134855432607147807:50001231000000:2800:3757329B0BE933826C29881873818D67199F261D589D81565B5F7395A0C860B7.png)
   > 说明
   >
   > 在"项目设置"页面的"应用"区域，点击"Client Secret"后面的![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250506195608.79028575911284980297306409971410:50001231000000:2800:0CBA5DC378CD6428B15AF2D82365AC3101A34D70DD9410EAE623152D2C315045.png)即可复制Client Secret。

4. 配置完成后，点击"保存"。

## 打开相关服务

使用位置服务需要您在[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)上打开Site Kit。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站，选择"我的项目"。
2. 在项目列表中找到您的项目，在项目下的应用列表中选择需要开通位置服务的应用。
3. 前往"项目设置 > API管理"中开启"Site Kit"权限。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250506195608.50357130977865587410353352533941:50001231000000:2800:C8ACD0540E0681AE556383C3443DFB642164DC7123787E9E3682CDDF46619BB4.png "点击放大")

开通服务后，您可以在"项目设置"配置数据处理位置和[数据处理位置策略](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-datalocation-strategy-0000001283213602)，具体操作步骤请参见[数据处理位置](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-datalocation-0000001160439813)。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250506195608.90447957399212244062974547165403:50001231000000:2800:0D08FBA86908C4CABF4FFD7FFEE287502EA3EAE19D7DCF90EB2472C1AB6E7F7B.png "点击放大")

## 获取API密钥。

服务使用前，需要在[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)上获取"API密钥"。获取API密钥的步骤如下：

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站，点击"我的项目"。
2. 在项目列表中找到您的项目，在项目中点击对应的应用名称。
3. 在"项目设置"页面的"项目"区域，点击"API密钥（凭据）"后面的![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250506195608.69924140354180867763606672098208:50001231000000:2800:7B3FEF37BF6786E8F02D2EC49F606F1B9B372016E85E181DA2A4391CE5D86FF1.png)即可获取。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250506195608.70602631384706899360712727564535:50001231000000:2800:01343F2373E8421DDDCD9659F0675FC360C4CBB25D037444E932EE1336FDEA04.png "点击放大")

> 说明
>
> * 使用"API密钥"需要进行encodeURI编码。例如：原始API密钥为ABC/DFG+ ，转换后结果为ABC%2FDFG%2B。
> * 建议"API密钥"设置安全保护措施，具体请参见[如何保护API密钥](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/faq-0000001050166997#section1484016438711)。

