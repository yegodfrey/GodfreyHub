---
name: document/cn/AppGallery-connect-References/harmonyos-arkts-auth-0000001680370685
title: Auth
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-arkts-auth-0000001680370685
---

# Auth

AGC认证服务接口，使用cloud.auth()方式获取服务。  

#### Method Summary

|Qualifier and Type|Method Name and Description|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Promise\<[VerifyCodeResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-arkts-verifycoderesult-0000001632060376)\>|[requestVerifyCode](#section9850751813)(verifyCodeParam: [VerifyCodeParam](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-arkts-verifycodeparam-0000001632060372)) 申请验证码。|
|Promise\<[SignInResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-arkts-signinresult-0000001680900101)\>|[createUser](#section19861514132515)(credentialInfo: [CredentialInfo](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-arkts-credentialinfo-0000001680787821)) 创建账户。|
|Promise\<void\>|[resetPassword](#section184671244192916)(credentialInfo: [CredentialInfo](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-arkts-credentialinfo-0000001680787821)) 重置密码。|
|Promise\<[SignInResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-arkts-signinresult-0000001680900101)\>|[signIn](#section136957141012)(signInParam: [SignInParam](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-arkts-signinparam-0000001631900440)) 登录接口，通过第三方认证来登录AGC平台。|
|Promise\<[SignInResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-arkts-signinresult-0000001680900101)\>|[signInAnonymously](#section1394015509369)() 匿名登录。|
|Promise\<void\>|[deleteUser](#section197703751114)() 在AGC服务器侧删除当前用户信息，并清除缓存信息。|
|Promise\<void\>|[signOut](#section4122193119119)() 登出接口。|
|Promise\<[AuthUser](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-arkts-authuser-0000001680210801) \| null\>|[getCurrentUser](#section87068861218)() 获取当前登录的用户信息。|

#### Methods

#### requestVerifyCode

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|requestVerifyCode(verifyCodeParam: [VerifyCodeParam](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-arkts-verifycodeparam-0000001632060372)): Promise\<[VerifyCodeResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-arkts-verifycoderesult-0000001632060376)\> 申请验证码。|

Parameters  

|Name|Type|Description|
|:--------------|:---------------------------------------------------------------------------------------------------------------------------------------------|:-----------|
|verifyCodeParam|[VerifyCodeParam](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-arkts-verifycodeparam-0000001632060372)|申请验证码的相关参数类。|

Return  

|Type|Description|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------|
|Promise\<[VerifyCodeResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-arkts-verifycoderesult-0000001632060376)\>|验证码结果的Promise对象。|

Sample Code

```
import { Auth, VerifyCodeAction } from '@hw-agconnect/cloud';
import cloud from '@hw-agconnect/cloud';
// 申请手机验证码
cloud.auth().requestVerifyCode({
  action: VerifyCodeAction.REGISTER_LOGIN,
  lang: 'zh_CN',
  sendInterval: 60,
  verifyCodeType: {
      phoneNumber: '138********',
      countryCode: '86',
      kind: 'phone'
  }
}).then(verifyCodeResult => {
    // 验证码申请成功
}).catch(error => {
    // 验证码申请失败
});

// 申请email验证码
cloud.auth().requestVerifyCode({
    action: VerifyCodeAction.REGISTER_LOGIN,
    lang: 'zh_CN',
    sendInterval: 60,
    verifyCodeType: {
        email: 'xxxx@xxx.com',
        kind: 'email',
    }
}).then(verifyCodeResult => {
    // 验证码申请成功  
}).catch(error => {
    // 验证码申请失败      
});
```

#### createUser

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|createUser(credentialInfo: [CredentialInfo](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-arkts-credentialinfo-0000001680787821)): Promise\<[SignInResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-arkts-signinresult-0000001680900101)\> 创建账户。|

Parameters  

|Name|Type|Description|
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------|
|credentialInfo|[CredentialInfo](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-arkts-credentialinfo-0000001680787821)|凭证信息。编译器会根据其中kind自动推断类型，例如其内部kind填为：'phone'，则类型被推断为"PhoneCredentialInfo"。|

Return  

|Type|Description|
|:--------------------------------------------------------------------------------------------------------------------------------------------------|:----------------|
|Promise\<[SignInResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-arkts-signinresult-0000001680900101)\>|登录结果信息的Promise对象。|

Sample Code

```
// 创建手机用户
cloud.auth().createUser({
    kind: 'phone',
    countryCode: '86',
    phoneNumber: '138********',
    password: '123456',// 可以给用户设置初始密码。后续可以用密码来登录
    verifyCode: 'xxxx'
}).then(result => {
    // 创建用户成功
}).catch(error => {
    // 创建用户失败
})
// 创建email用户
cloud.auth().createUser({
    kind: 'email',
    email: 'xxxx@xxx.com',
    password: '123456',// 可以给用户设置初始密码。后续可以用密码来登录
    verifyCode: 'xxxx'
}).then(result => {
    // 创建账号成功后，默认已登录  
}).catch(error => {
    // 创建用户失败  
})
```

#### resetPassword

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|resetPassword(credentialInfo: [CredentialInfo](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-arkts-credentialinfo-0000001680787821)): Promise\<void\> 重置密码。|

Parameters  

|Name|Type|Description|
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------|
|credentialInfo|[CredentialInfo](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-arkts-credentialinfo-0000001680787821)|凭证信息。编译器会根据其中kind自动推断类型，例如其内部kind填为：'phone'，则类型被推断为"PhoneCredentialInfo"。|

Return  

|Type|Description|
|:--------------|:----------------|
|Promise\<void\>|void类型的Promise对象。|

Sample Code

```
// 重置手机账户密码
cloud.auth().resetPassword({
    kind: 'phone',
    password: '123456',
    phoneNumber: '138********',
    countryCode: '86',
    verifyCode: 'xxxx'
  })
// 重置email账户密码
cloud.auth().resetPassword({
    kind: 'email',
    password: '123456',
    email: 'xxxx@xxx.com',
    verifyCode: 'xxxx'
})
```

#### signIn

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|signIn(signInParam: [SignInParam](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-arkts-signinparam-0000001631900440)):Promise\<[SignInResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-arkts-signinresult-0000001680900101)\> 登录接口，通过第三方认证来登录AGC平台。|

Parameters  

|Name|Type|Parameter desc|
|:----------|:-------------------------------------------------------------------------------------------------------------------------------------|:-------------|
|signInParam|[SignInParam](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-arkts-signinparam-0000001631900440)|登录操作的参数类。|

Return  

|Type|Description|
|:--------------------------------------------------------------------------------------------------------------------------------------------------|:----------------|
|Promise\<[SignInResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-arkts-signinresult-0000001680900101)\>|登录结果信息的Promise对象。|

Sample Code

```
// 手机账户登录
cloud.auth().signIn({
    credentialInfo: {
        kind: 'phone',
        phoneNumber: '138********',
        countryCode: '86',
        password: '123456'
    }
}).then(user => {
    // 登录成功
}).catch(error => {
    // 登录失败
});
// email账户登录
cloud.auth().signIn({
    credentialInfo: {
        kind: 'email',
        password: '123456',
        email: 'xxxx@xxx.com'
    }
}).then(user => {
    // 登录成功
}).catch(error => {
    // 登录失败
});
```

#### signInAnonymously

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|signInAnonymously(): Promise\<[SignInResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-arkts-signinresult-0000001680900101)\> 匿名登录。|

Return  

|Type|Description|
|:--------------------------------------------------------------------------------------------------------------------------------------------------|:----------------|
|Promise\<[SignInResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-arkts-signinresult-0000001680900101)\>|登录结果信息的Promise对象。|

Sample Code

```
cloud.auth().signInAnonymously().then(() => {
   // 登录成功
}).catch(error => {
   // 登录失败
})
```

#### deleteUser

|Method|
|:-----------------------------------------------------|
|deleteUser():Promise\<void\> 在AGC服务器侧删除当前用户信息，并清除缓存信息。|

Return  

|Type|Description|
|:--------------|:----------------|
|Promise\<void\>|void类型的Promise对象。|

Sample Code

```
cloud.auth().deleteUser().then(() => {
  // 销户成功
}).catch(error => {
  // 销户失败
})
```

#### signOut

|Method|
|:--------------------------------------------|
|signOut():Promise\<void\> 登出接口。退出登录状态，删除缓存数据。|

Return  

|Type|Description|
|:--------------|:----------------|
|Promise\<void\>|void类型的Promise对象。|

Sample Code

```
cloud.auth().signOut().then(() => {
  // 登出成功
}).catch(error => {
  // 登出失败
})
```

#### getCurrentUser

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|getCurrentUser():Promise\<[AuthUser](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-arkts-authuser-0000001680210801) \| null\> 获取当前登录的用户信息，如果未登录则返回null。|

Return  

|Type|Description|
|:--------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|
|Promise\<[AuthUser](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-arkts-authuser-0000001680210801) \| null\>|用户信息的Promise对象。|

Sample Code

```
cloud.auth().getCurrentUser().then(user=>{
    if(user){
        // 业务逻辑
    }
});
```

