---
name: document/cn/connectivity-Guides/in-app-customized-calling-config-agc-0000001050783122
title: 配置AppGallery Connect
uri: https://developer.huawei.com/consumer/cn/doc/connectivity-Guides/in-app-customized-calling-config-agc-0000001050783122
---

# 配置AppGallery Connect

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

  3. 根据结果获取对应的SHA256指纹。 ![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20221017155808.88265892282548042615357238970986:50531024064228:2800:0B78E3478297872DA2C7A6D4DD3D480921F53DAB7A8B569C4D62AE327CBC26A0.png?needInitFileName=true?needInitFileName=true "点击放大")

* macOS
  1. 打开Terminal终端。 ![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20221017155808.29107509442750688631450099790872:50531024064228:2800:7EE119D504F993BE21175F3DDD348800AD9A175C129C8F620EC724EE6065309B.png?needInitFileName=true?needInitFileName=true)

  2. 执行命令**keytool -list -v -keystore** *<keystore-file>* ，按命令行提示进行操作。*<keystore-file>* 为应用签名证书的完整路径。

     例如：

     ```screen
     keytool -list -v -keystore /Users/admin/Downloads/HmsDemo.jks
     ```

  3. 根据结果获取对应的SHA256指纹。 ![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20221017155808.65073220252250797236988242269077:50531024064228:2800:FF5FB482E4EC8338CC4429D4FF5DF6158D6A98BF9C1914B5009703B27EBF3F26.png?needInitFileName=true?needInitFileName=true)

## 配置签名证书指纹

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站，点击"我的项目"。
2. 在项目列表中找到您的项目，在项目中点击需要配置签名证书指纹的应用。
3. 在"项目设置 > 常规"页面的"应用"区域，点击"SHA256证书指纹"后的"添加证书指纹"，输入生成的SHA256指纹。

   ![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20221017155808.13297667236431709241267159050332:50531024064228:2800:62AB47C72167FD73DBA68E53688864D10D253997E5C9B742825BB90B548BF4F5.png?needInitFileName=true?needInitFileName=true)
   > 说明
   >
   > 在"项目设置"页面的"应用"区域，点击"Client Secret"后面的![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20221017155808.31308663560360047496087450298980:50531024064228:2800:2AA08A1D6173C5365BF0F38BEB858572595A9F13E4D360E4743C5DFB13DC9D38.png?needInitFileName=true?needInitFileName=true)即可复制Client Secret。
4. 配置完成后，点击"保存"。
