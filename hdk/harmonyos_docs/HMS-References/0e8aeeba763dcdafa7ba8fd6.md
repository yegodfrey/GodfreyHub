---
name: document/cn/HMS-References/FIDO2_AuthenticatorSelectionCriteria
title: AuthenticatorSelectionCriteria
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/FIDO2_AuthenticatorSelectionCriteria
source: portal
---

CLASS info  
---  
public class AuthenticatorSelectionCriteria  
用于WebAuthn依赖方指定，与认证器相关的配置项。  
  
## Nested Class Summary

Class| Desc  
---|---  
AuthenticatorSelectionCriteria.Builder| AuthenticatorSelectionCriteria的构造工具类。  
  
## Public Constructor Summary

Method name  
---  
**AuthenticatorSelectionCriteria** (Attachment attachment, Boolean resident,UserVerificationRequirement userVerification)构造AuthenticatorSelectionCriteria的实例。  
  
## Public Methods Summary

Return type| Method name  
---|---  
Attachment| **getAuthenticatorAttachment**()获取使用的认证器类型。  
Boolean| **isRequireResidentKey**()是否要求认证器存储密钥。  
UserVerificationRequirement| **getUserVerification**()获取是否校验当前用户为本人： 通过校验指纹、面容、虹膜等个人特征信息。  
  
## Public constructors

Method  
---  
AuthenticatorSelectionCriteria (Attachment attachment, Boolean resident,UserVerificationRequirement userVerification)  
构造AuthenticatorSelectionCriteria对象。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
attachment| Attachment枚举值，描述认证器类型。  
resident| 是否需要认证器存储密钥，保留该属性仅仅是为了兼容老版本。默认false。  
userVerification| 用户认证的要求级别（校验当前使用者是否为本人）。  
  
## Public Methods

Method  
---  
Attachment getAuthenticatorAttachment()  
获取authenticatorAttachment。  
  
**Return**

type| desc  
---|---  
Attachment| 使用的认证器类型： 平台认证——指纹、面容、虹膜等 漫游认证——蓝牙、NFC、USB。  
Method  
---  
Boolean    isRequireResidentKey()  
是否需要认证器存储密钥。  
  
**Return**

type| desc  
---|---  
Boolean| 是否需要需要认证器存储密钥。  
Method  
---  
UserVerificationRequirement    getUserVerification()  
获取配置——是否校验当前使用者为本人。  
  
**Return**

type| desc  
---|---  
UserVerificationRequirement| 是否校验当前使用者为本人具体参看UserVerificationRequirement。
