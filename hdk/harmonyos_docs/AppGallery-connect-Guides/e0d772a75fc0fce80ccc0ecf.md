---
name: document/cn/AppGallery-connect-Guides/agc-auth-miniprogram-process-0000001275614146
title: 开发流程
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-miniprogram-process-0000001275614146
---

# 开发流程

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250723180919.30255495123778110475094571424783:50001231000000:2800:D4D9264E1C8BD87B03C8EEB012713519411E117282E786292F925307E2D67E7E.png)

|序号|任务|说明|
|:-|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------|
|1|[创建项目与应用](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-creat-project-and-app-0000001324725529)|项目是您在AGC资源的组织实体，您可以将一个应用的不同平台版本添加到同一个项目中。 > 说明 > 您可以通过创建不同的项目，实现分别在测试环境和开发环境使用认证服务。|
|2|[开通认证服务](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-enable-service-0000001274125746)|-|
|3|[集成SDK](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-miniprogram-integration-sdk-0000001276634492)|使用微信小程序集成认证服务SDK。|
|4|根据业务需要，实现不同账号的登录认证。 * [手机号码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-miniprogram-phone-0000001113041270) * [邮箱](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-miniprogram-email-0000001159321099) * [自有账号](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-miniprogram-self-0000001159441097) * [匿名账号](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-miniprogram-anonymous-0000001113041278) * [关联账号](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-miniprogram-associated-0000001159321107)|-|
|5|[登出](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-miniprogram-sign-out-0000001113201172)|当用户不需要使用应用，或者需要切换其他账号登录认证，可以进行登出。登出后，端侧保留的用户信息和Token将被删除。|
|6|[销户](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-miniprogram-deleteuser-0000001159441105)|当用户需要注销当前账号，可以进行销户。|

