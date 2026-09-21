---
name: document/cn/HMSCore-Guides/config-agc-0000001050185569
title: 配置AppGallery Connect
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/config-agc-0000001050185569
---

# 配置AppGallery Connect

在开发应用前，需要在AppGallery Connect中配置相关信息。

## 注册成为开发者

在开发应用前需要在[华为开发者联盟](https://developer.huawei.com/consumer/cn)网站上注册成为开发者并完成实名认证，具体方法请参见[帐号注册认证](https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148)。

## 创建应用

参见[创建项目](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createproject-0000001100334664)和[创建应用](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createapp-0000001146718717)完成应用的创建。

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

  3. 根据结果获取对应的SHA256指纹。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250916154803.56071184727513265361507054713270:50001231000000:2800:CB66C5050FFDBEEF72DA974189C0DE4E9802EE5672F4C72F43E58E7261092A18.png "点击放大")

* macOS
  1. 打开Terminal终端。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250916154803.63902889545554603771721883318773:50001231000000:2800:650243D9357BDA3FA04965FE06A12AFD7B19616A04A6CDEF51373428E6C7AEB8.png)

  2. 执行命令**keytool -list -v -keystore** *<keystore-file>* ，按命令行提示进行操作。*<keystore-file>* 为应用签名证书的完整路径。

     例如：

     ```screen
     keytool -list -v -keystore /Users/admin/Downloads/HmsDemo.jks
     ```

  3. 根据结果获取对应的SHA256指纹。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250916154803.31930836196837721038850447163555:50001231000000:2800:E4DBE0672780BD2A10FB44E64D834C9EFDAA3CADCA4FE017F8ABC941BA82C7EF.png)

## 配置签名证书指纹

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站，点击"我的项目"。
2. 在项目列表中找到您的项目，在项目中点击需要配置签名证书指纹的应用。
3. 在"项目设置 > 常规"页面的"应用"区域，点击"SHA256证书指纹"后的"添加证书指纹"，输入生成的SHA256指纹。

   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250916154803.32233296376405780151453930677092:50001231000000:2800:6E0D8CC67A3A409A3F871D702148A0E7F1DBCDA2734EA5F5752724861E6A6615.png)
   > 说明
   >
   > 在"项目设置"页面的"应用"区域，点击"Client Secret"后面的![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250916154803.97089295832641563283008611912651:50001231000000:2800:F9BE1AC14C232B39911AF568FC5C39B1BF8F5F7AE0D5179961A3023007DA03B5.png)即可复制Client Secret。

4. 配置完成后，点击"保存"。

## 打开相关服务

使用云空间服务功能前，您需要在[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)的"API管理"页面打开云空间服务开关。

1、登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击"我的项目"图标。

2、选择已创建完成的应用。

3、在"API管理"页面打开"云空间服务"的开关。

