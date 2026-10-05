---
name: document/cn/HMS-Guides/wallet-preparations-agc
title: AppGallery Connect配置
uri: https://developer.huawei.com/consumer/cn/doc/HMS-Guides/wallet-preparations-agc
source: portal
---

在开始开发应用前，需要在AppGallery Connect中配置相关信息。

# 1 注册成为开发者

在开发应用前需要在[华为开发者联盟](https://developer.huawei.com/consumer/cn)网站上注册成为开发者并完成实名认证，具体方法可参考“[帐号注册认证](https://developer.huawei.com/consumer/cn/doc/start/20300)”。

注：华为开发者联盟网站是所有开发者的注册入口，AppGallery Connect是针对开发者开发的kit管理平台，实现对各类APP的一站式管理

# 2 创建应用

参见AppGallery Connect帮助中心的[创建应用](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-create_app)章节创建应用，特殊配置如下：

  * 软件包类型：必须选择“APK(Android应用)”(此处仅做配置用，接入方法也支持无Android应用接入,下同)。



  * 支持设备：必须选择“手机”。

  * 应用包名：必须与最终发布的APK包名一致，必须以“.HUAWEI”或者“.huawei”结尾，否则会导致审核不通过。

  * 应用分类：选择“应用”或“游戏”。




# 3 生成签名证书指纹

签名证书指纹用于在通过华为HMS SDK调用HMS Core时，校验应用的真实性。开发者在使用HMS Core前必须将签名证书指纹配置到华为开发者联盟，在配置前需要根据签名证书在本地生成签名证书指纹。

在申请前需要满足以下2个条件：

  * 已创建应用程序的签名文件，签名证书创建属于通用技术，此处不详细描述。

  * 当前开发的PC已经安装JDK。




操作步骤如下：

**步骤1：** 打开命令行工具（使用CMD命令），执行cd命令进入keytool.exe所在的目录（图中样例为PC上java程序安装在C盘的Program Files (x86)目录）。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200327144827.53475807094276466031633535547252:50510327083203:2800:5DE1B2940AF1AEAA6EE3C02662CBBAED9B12303796609270B52E9F2AAA6FAE91.png)

**步骤2：** 执行命令**keytool -list -v -keystore** _< keystore-file>_，按命令行提示进行操作。

<keystore-file>为应用签名文件的完整路径。

例如：
    
    
    复制
      
        1. C:\Program Files (x86)\Java\jdk1.7.0_25\bin>keytool -list -v -keystore E:\HMS_SDK_2.5.1.300\Sample\HMSSdkSample_2.5.1.300_AS\HmsSample\android.keystore
    
    

**步骤3：** 根据结果获取对应的SHA256指纹。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200327144910.77245027292996567202171985261353:50510327083203:2800:7695D32A670996A23EA7B12FBFF6BFABABB0007600539C4061B5CB6F17FDFD04.png)

# 4 配置签名证书指纹

**步骤1：** 登录 [AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html) 网站，选择“我的应用”。

**步骤2：** 找到对应应用产品，选择并单击“Android应用”链接，进入应用开发页面。

**步骤3：** 在“开发 > 概览”页面的“应用”区域，在“SHA256证书指纹”配置栏，输入生成签名证书指纹中生成的SHA256指纹。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200226231211.45193012936889790335972705075837:50510327083203:2800:C0344F3C00AAE5861BD0CAA4078A85BEE8BFDE4F9FC0F9DDE1173212C20BD2BF.png)

**步骤4：** 配置完成后点击![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200327144943.79281832466680941381982019080019:50510327083203:2800:0DD330EE14FA921F70CDC9F7838FB4269666A98AD9D9D0F8B9FC79C360E5AAB2.png)。

# 5 打开相关服务

请在服务列表中勾选wallet kit服务即开通wallet kit服务。

具体操作步骤请参见[开通服务](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-enable_service)。

  

