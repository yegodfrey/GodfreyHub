---
name: document/cn/HMS-Guides/configuring-app-information-in-appgallery-connect
title: AppGallery Connect配置
uri: https://developer.huawei.com/consumer/cn/doc/HMS-Guides/configuring-app-information-in-appgallery-connect
source: portal
---

在开始开发应用前，需要在AppGallery Connect中配置相关信息。

## 注册成为开发者

在开发应用前需要在[华为开发者联盟](https://developer.huawei.com/consumer/cn/)网站上注册成为开发者并完成实名认证，具体方法可参考[帐号注册认证](https://developer.huawei.com/consumer/cn/devservice/doc/20300)。

## 创建应用

参见[创建项目](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-get-started#h1-1587476272328)和[在项目中添加应用](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-get-started#createapp)完成应用的创建。特殊配置如下：

  * 选择平台：必须选择“Android应用”。

  * 支持设备：必须选择“手机”。

  * 应用包名：必须与最终发布的APK包名一致，否则会导致审核不通过。

  * 应用分类：选择“应用”。




## 生成签名证书指纹

签名证书指纹用于在通过华为HMS SDK调用HMS服务时，校验应用的真实性。开发者在使用HMS服务前必须将签名证书指纹配置到AppGallery Connect的，在配置前需要根据签名证书在本地生成签名证书指纹。

在申请前需要满足以下2个条件：

  * 已创建应用程序的签名文件，签名证书创建属于通用技术，可参考Android官方提供的[文档](https://developer.android.com/studio/publish/app-signing)。

  * 当前开发的PC已经安装JDK。




操作步骤如下：

1.    打开命令行工具（使用CMD命令），执行cd命令进入keytool.exe所在的目录（图中样例为PC上java程序安装在C盘的Program Files (x86)目录）。

**           ![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191224113051.40508612118894111602694809124767:50510430071845:2800:89ACFC4F7FA606FFE1BB559F239BC9B528B269535F656E347B6FDC90FA525D9E.png?needInitFileName=true)**

2.    执行命令**keytool -list -v -keystore** _< keystore-file>_，按命令行提示进行操作。

<keystore-file>为应用签名文件的完整路径。

例如：
    
    
    C:\Program Files (x86)\Java\jdk1.7.0_25\bin>keytool -list -v -keystore   
    E:\HMS_SDK_2.5.1.300\Sample\HMSSdkSample_2.5.1.300_AS\HmsSample\android.keystore

3.    根据结果获取对应的SHA256指纹。

**          ![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200311110807.76395008751196335437260431037767:50510430071845:2800:F5CF3A60B22EC20EEE84178B18680D7037D1EA9F9C176CA35FE43D7170E69447.png?needInitFileName=true)**  


****

## 配置签名证书指纹

1.    登录 [AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html) 网站，选择“我的应用”。

2.    点击需要配置的应用。

3.    选择**“开发”** 页签，在**“项目设置”** 页面的“应用”区域，将“SHA256证书指纹”配置为生成签名证书指纹中生成的SHA256指纹。

**![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191224113128.96077562493789660404872307404913:50510430071845:2800:FB724C8C11370AA5C09931FD9DF492664FCDE037F66DC66E41073D9433875226.png?needInitFileName=true)**  


****

4.     配置完成后点击![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191224113138.59900376127428011202576031441355:50510430071845:2800:B9DB128B9AA8EA11F334BA5F4CC41E3E7E6DCCAEAB629FF2EE51DEA8ABA63004.png?needInitFileName=true)。
