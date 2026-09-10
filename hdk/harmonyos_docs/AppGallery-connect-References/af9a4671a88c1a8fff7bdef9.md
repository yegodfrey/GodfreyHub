---
name: document/cn/AppGallery-connect-References/gameobe-clientconfig-js-0000001192790646
title: ClientConfig
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gameobe-clientconfig-js-0000001192790646
---

# ClientConfig

|Interface Info|
|:-------------------------------------|
|export interface ClientConfig 客户端参数配置。|

#### Property Summary

|Name|Type|Mandatory/Optional|Description|
|:--------------|:----------------------------------------------------------------------------------------------------------------------------------------------|:-----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|clientId|string|Mandatory|客户端ID。 说明： 您可登录[AGC控制台](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，进入"我的项目 \> 项目设置 \> 常规 \> 项目" 获取客户端ID中的"Client ID"信息。|
|clientSecret|string|Optional|客户端密钥。 说明： * 您可登录[AGC控制台](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，进入"我的项目 \> 项目设置 \> 常规 \> 项目" 获取客户端ID中的"Client Secret"信息。 * "clientSecret"和"[accessToken](#ZH-CN_TOPIC_0000001192790646__p17478135420533)"二者传其一即可，如果同时传入，将使用传入的accessToken作为最终AGC接入凭证。|
|appId|string|Mandatory|应用ID。 说明： 您可登录[AGC控制台](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，进入"我的项目 \> 项目设置 \> 常规 \> 应用" 获取"APP ID"信息。|
|openId|string|Mandatory|玩家ID，取值范围为1\~128个字符。 说明： 可以是您的游戏在第三方平台生成的玩家ID，或者是您的自建账号体系生成的玩家ID。|
|createSignature|() =\> Promise\<[Signature](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gameobe-signature-js-0000001223758712)\>|Optional|签名函数，仅使用签名初始化SDK时必填。|
|accessToken|string|Optional|AGC接入凭证。 说明： "[clientSecret](#ZH-CN_TOPIC_0000001192790646__p17842174115117)"和"accessToken"二者传其一即可，如果同时传入，将使用传入的accessToken作为最终AGC接入凭证。|
|platform|[PlatformType](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gameobe-platformtype-js-0000001355509481)|Optional|平台类型。 说明： * 当在Cocos Creator引擎中发布Android版游戏时，需填入GOBE.PlatformType.ANDROID。此字段与[cerPath](#ZH-CN_TOPIC_0000001192790646__p24071828583)字段配套使用。|
|cerPath|string|Optional|证书路径。 说明： 当[platform](#ZH-CN_TOPIC_0000001192790646__p4465162115816)字段为GOBE.PlatformType.ANDROID时，需要填该字段，值为cer证书路径。|

