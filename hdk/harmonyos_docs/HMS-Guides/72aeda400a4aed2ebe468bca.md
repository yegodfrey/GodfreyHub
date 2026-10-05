---
name: document/cn/HMS-Guides/hms-map-configuringinagc
title: AppGallery Connect配置
uri: https://developer.huawei.com/consumer/cn/doc/HMS-Guides/hms-map-configuringinagc
source: portal
---

在开始开发应用前，需要在AppGallery Connect中配置相关信息。

# 1 注册成为开发者

在开发应用前需要在[华为开发者联盟](https://developer.huawei.com/consumer/cn)网站上注册成为开发者并完成实名认证，具体方法可参考“[帐号注册认证](https://developer.huawei.com/consumer/cn/devservice/doc/20300)”。

# 2 创建应用

参见[创建项目](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-get-started#h1-1587476272328)和[在项目中添加应用](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-get-started#h1-1587476998161)完成应用的创建，特殊配置如下：

  * “选择平台”：必须选择"Android”。

  * “支持设备”：必须选择“手机”。

  * “应用分类”：选择“应用”。




# 3 生成签名证书指纹  


签名证书指纹用于在通过华为HMS SDK调用HMS Core（APK）时，校验应用的真实性。开发者在使用HMS Core（APK）前必须将签名证书指纹配置到AppGallery Connect，在配置前需要根据签名证书在本地生成签名证书指纹。

  


在申请前需要满足以下2个条件：

  * 已创建应用程序的签名文件，签名证书创建属于通用技术，可以参考[生成指纹证书](https://developer.huawei.com/consumer/cn/codelab/HMSPreparation/index.html#3)。

  * 当前开发的PC已经安装JDK。




  


可以使用JDK自带的keytool工具生成指纹，操作步骤如下：

1\. 在命令行工具栏里输入以下内容，其中 _< keystore-file>_为应用签名文件的完整路径。
      
      1. keytool -list -v -keystore <keystore-file>
    
    

2\. 可以看到类似下图所示的输出。在结果中获取对应的SHA256指纹。
      
      1. 别名: <alias-name>
        2. 创建日期: 2019-8-29
        3. 条目类型: PrivateKeyEntry
        4. 证书链长度: 1
        5. 证书[1]:
        6. 所有者: CN=Android Debug, OU=hua, C=zg
        7. 发布者: CN=Android Debug, OU=hua, C=zg
        8. 序列号: 1e46890c
        9. 有效期为 Thu Aug 29 21:09:44 CST 2019 至 Mon Jan 14 21:09:44 CST 2047
        10. 证书指纹:
        11.          MD5:  EC:29:9E:ED:18:35:E0:A0:93:EA:AD:E2:D9:4D:B7:6A
        12.          SHA1: E6:6B:61:C9:E5:86:81:E7:3A:7A:86:11:87:FB:DD:B6:2F:72:9D:80
        13.          SHA256: 39:B1:5E:52:70:8C:07:6D:5A:F7:0B:96:8B:D1:77:A0:8F:CA:09:08:72:90:FD:2A:1E:DB:9A:6C:2F:4E:B5:97
        14. 签名算法名称: SHA256withRSA
        15. 主体公共密钥算法: 2048 位 RSA 密钥
        16. 版本: 3
    
    

# 4 配置签名证书指纹  


1\. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站，选择“我的应用”。

2\. 点击需要配置的应用。

3. 选择“**开发** ”页签，在“**项目配置** ”页面的“应用”区域，将“SHA256证书指纹”配置为生成签名证书指纹中生成的SHA256指纹。

    ![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200430145719.25820107160965365718110512109188:50510509081728:2800:BDF66409C9DB904D75839ED1FD1C743947CDA43A94C019B954F3141ECDDDED4A.png?needInitFileName=true?needInitFileName=true)

4\. 配置完成后点击![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191219172813.51803486294675443383439580695409:50510509081728:2800:EBFA4AC0F24A5DDEFD5A2B9A0B0E20029C3A5EA9B43190EE681305D8E850E1C3.png?needInitFileName=true?needInitFileName=true) 。

# 5 打开相关服务  


使用MAP服务需要开发者在AppGallery Connect上打开MAP服务。

具体操作步骤请参见[开通服务](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-enable_service)。
