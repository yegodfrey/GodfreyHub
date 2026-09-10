---
name: document/cn/HMSCore-Guides/faq-0000001050173864
title: FAQ
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/faq-0000001050173864
---

# FAQ

如果您在下面没有找到需要的问题，请加入[Stack Overflow](https://stackoverflow.com/questions/tagged/huawei-mobile-services?tab=Frequent)社区参与讨论。  

#### Wallet Kit对手机和软件有哪些要求？

安装了4.0.0.300版本以上的HMS Core（APK）即可，用户可以通过多种方式添加卡券。  

#### 华为Wallet Kit服务支持哪些国家/地区？

华为Wallet Kit服务支持的国家/地区范围和华为帐号服务一致。  

#### 开发者应用使用Wallet Kit服务，是否需要集成华为帐号服务？

不需要，但用户添加卡券时，需要登录华为帐号。  

#### 如果用户没有登录华为帐号，添加卡券时如何处理？

如果用户没有登录华为帐号，Wallet Kit先会拉起华为帐号注册登录页面，用户注册或登录华为帐号后才能保存卡券到华为钱包。  

#### 现有提供的几种接入方式中，比较常用的是那种？

从现有调研情况分析，目前比较常用的是用户申领后，通过邮件/短信方式保存卡券，瘦JWE的方式链接内容较少，对网络资源依赖较小。  

#### 是否涉及用户隐私信息，是否存在跨境转移数据的风险？

会员卡等卡券中可能存在部分非敏感的用户个人信息，服务器会区分中国/俄罗斯/亚非拉/欧洲分别部署服务器，对应国家/地区的数据都存储在对应服务器中，不存在跨境转移数据问题。  

#### 如何快速体验Wallet Kit添加卡券能力？

建议按照[codelab](https://developer.huawei.com/consumer/cn/codelab/HMSWalletKit/index.html#0)添加卡券。  

#### 添加卡券时商户服务器主要需要执行哪些步骤？

1. 推送模板数据至华为服务器。
2. 用户点击"按钮"或"链接"时将实例加密成JWE数据后推送给华为服务器。  

#### 如何查看已添加卡券？

在手机中下载最新版本华为钱包应用（Wallet Kit最低支持钱包9.0.7.300版本），登录已绑定卡券的帐号即可查看已添加的卡券。  

#### 用户领取了同一商户的多张卡券，但是打开华为钱包后只显示一张卡券？

请检查卡券实例中的SerialNumber和OrganizationPassId字段是否都是唯一的。  

#### 用户删卡时会删除那些信息？

用户删卡时华为服务器会将卡券实例Instance和绑定的用户信息删除。  

#### 推送模板或实例时报错405？

请确认开发者联盟申请应用时Wallet Kit服务开关是否已开启，请参见[打开相关服务](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/config-agc-0000001050193505#section382112213818)。  

#### 推送模板或实例时报错400？

400为参数错误，可通过返回的错误描述进行定位处理，并且需要确认商户服务器JDK版本需要大于1.8.211。
