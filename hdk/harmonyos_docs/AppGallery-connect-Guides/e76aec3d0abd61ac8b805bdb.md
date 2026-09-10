---
name: document/cn/AppGallery-connect-Guides/agc-auth-server-verifytoken-0000001727548362
title: 验证用户凭据
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-server-verifytoken-0000001727548362
---

# 验证用户凭据

为了识别用户身份，您可以通过认证服务的Server SDK验证已经颁发的用户凭据并且检查用户凭据是否已经撤销。  

#### 前提条件

您需要在您的开发工程中集成认证服务的Server SDK，请参见[集成SDK](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-server-js-integration-sdk-0000001727548354)。

<br />

#### 开发步骤

调用[Auth.verifyAccessToken](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/nodejs-auth-0000001732781480#section17674113992615)方法验证已颁发的用户凭据，用户凭据验证结果有四种：验证成功、验证失败、用户凭据已过期和用户凭据已撤销。

```
cloud.auth().verifyAccessToken({accessToken:"your-access-token",checkRevoked:false}).then(authAccessToken =>{ 
// 验证成功
}).catch(e=>{
 if (e.getCode() == AuthErrorCode.VERIFY_ACCESS_TOKEN_ACCESS_TOKEN_IS_NULL.code) {
     // 用户访问凭据为空
  } else if (e.getCode() == AuthErrorCode.JWT_VERIFY_FAILED.code) {
     // 用户访问凭据验证失败
  } else if (e.getCode() == AuthErrorCode.JWT_EXPIRE.code) {
     // 用户访问凭据已过期
  } else if (e.getCode() == AuthErrorCode.JWT_REVOKED.code) {
     // 用户访问凭据已撤销
  } 
})
```

或者

```
cloudInstance.auth().verifyAccessToken({accessToken:"your-access-token",checkRevoked:false}).then(authAccessToken =>{ 
// 验证成功
}).catch(e=>{
 if (e.getCode() == AuthErrorCode.VERIFY_ACCESS_TOKEN_ACCESS_TOKEN_IS_NULL.code) {
     // 用户访问凭据为空
  } else if (e.getCode() == AuthErrorCode.JWT_VERIFY_FAILED.code) {
     // 用户访问凭据验证失败
  } else if (e.getCode() == AuthErrorCode.JWT_EXPIRE.code) {
     // 用户访问凭据已过期
  } else if (e.getCode() == AuthErrorCode.JWT_REVOKED.code) {
     // 用户访问凭据已撤销
  } 
})
```

