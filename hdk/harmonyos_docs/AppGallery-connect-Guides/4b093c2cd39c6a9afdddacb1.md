---
name: document/cn/AppGallery-connect-Guides/agc-auth-ios-associated-0000001053053982
title: 关联账号
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-ios-associated-0000001053053982
---

# 关联账号

## 前提条件

* 您需要在AGC控制台[启用认证服务](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-enable-service-0000001274125746)。
* 您需要先在您的应用中[集成认证服务SDK](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-ios-integration-sdk-0000001326347605)。

## 将身份验证提供方凭据与用户账号关联

您可以将身份验证提供方凭据关联至现有用户账号，允许用户使用多个身份验证提供方服务登录您的应用。无论用户使用哪个身份验证提供方服务登录，均可通过同一AGC用户ID识别用户。例如，使用华为账号登录的用户可以关联微信账号，以后便可使用这两种方法中的任意一种登录。或者，匿名用户可以关联 QQ 账号，以后就可以使用 QQ 登录，然后继续使用您的应用。
> 说明
>
> * 关联账号前，需要为应用增加对两个或多个身份验证提供方（可以包括匿名身份验证）的支持。
> * 关联的认证方式只能有一个账号，例如华为账号关联微信账号，只能关联一个微信账号，不能关联多个。另外被关联的账号需要没有登录过应用，例如已经通过认证服务登录过的微信账号也无法进行关联。

认证服务提供了两种开发方式关联账号：

* 推荐您使用新的统一登录关联方式，请参见[统一登录关联方式](#section170372510199)。
* 同时为了兼容性保留了老的传统接入方式，请参见[传统接入方式](#section10644133118210)。

### 统一登录关联方式

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251218114618.33318020650948320295818760656596:50001231000000:2800:B07B85BC5AFD9139173B72844A198580FF3938D81A79ACB74B08B0067BC3FA48.png "点击放大")

如果使用统一登录进行账号关联，可以调用[[AGCUser link:controller:]](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcuser-ios-0000001054822348#section1065144715382)直接传递要关联的provider即可。

```screen
"Objective-C"
[[[[[AGCAuth getInstance] currentUser] link:AGCAuthProviderTypeFacebook controller:self] addOnSuccessCallback:^(AGCSignInResult * _Nullable result) {
         // onSuccess
         AGCUser *user = result.user;
     }] addOnFailureCallback:^(NSError * _Nonnull error) {
         // onFail
     }];
```

```screen
"Swift"
AGCAuth.instance().currentUser?.link(.facebook, controller:self).onSuccess{ (result) in
    // onSuccess
}.onFailure{ (error) in
    // onFailure
}
```

### 传统接入方式

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251218114618.00399746633403391735754916539755:50001231000000:2800:B8568FE80F8D80BA07EE170D11FBFB078829B648290EAFA0A9675239419EC50F.png "点击放大")

1. 使用任意身份验证提供方让用户登录。
2. 按照新身份验证提供方的登录流程逐步进行，直到调用某一[AGCAuth signIn]方法的前一步时停止。
3. 为新的身份验证提供方获取[AGCAuthCredential](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcauthcredential-ios-0000001054342378)，如下以使用微信登录为例。

   ```screen
   "Objective-C"
   AGCAuthCredential *credential = [AGCWeiXinAuthProvider credentialWithToken:accessToken openId:openid];
   ```

   ```screen
   "Swift"
   let credential = AGCWeiXinAuthProvider.credential(withToken:accessToken, openId:openid)
   ```


4. 将credential传递到已登录用户的[[AGCUser link:]](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcuser-ios-0000001054822348#section151221258135210)接口中。关联成功后，即可以使用任意一个提供方的凭证来登录相同的AppGallery Connect账号。

   ```screen
   "Objective-C"
   [[[[[AGCAuth getInstance] currentUser] link:credential] addOnSuccessCallback:^(AGCSignInResult * _Nullable result) {
            // onSuccess
            AGCUser *user = result.user;
        }] addOnFailureCallback:^(NSError * _Nonnull error) {
            // onFail
        }];
   ```

   ```screen
   "Swift"
   AGCAuth.instance().currentUser?.link(credential).onSuccess{ (result) in
       // onSuccess
   }.onFailure{ (error) in
       // onFailure
   }
   ```

   > 说明
   >
   > 对于关联账号操作，要求用户必须在5分钟内登录过才能执行。若已超时，请参见[账号重认证](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-ios-reauthenticate-0000001127283387)先完成重认证。

## 取消身份验证提供方凭据与用户账号的关联

您也可以取消身份验证提供方凭据与用户账号的关联，以便用户不再使用该身份验证提供方进行登录。

取消关联时，需提供要取消的身份验证提供方ID，然后调用[[AGCUser unlink:]](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcuser-ios-0000001054822348#section16251525533)接口进行取消。
> 注意
>
> 当仅有一个身份验证提供方时不能进行取消关联。

```screen
"Objective-C"
[[[[[AGCAuth getInstance] currentUser] unlink:AGCAuthProviderTypeWeiXin] addOnSuccessCallback:^(AGCSignInResult * _Nullable result) {
         // onSuccess
         AGCUser *user = result.user;
     }] addOnFailureCallback:^(NSError * _Nonnull error) {
         // onFail
     }];
```

```screen
"Swift"
AGCAuth.instance().currentUser?.unlink(AGCAuthProviderTypeWeiXin).onSuccess{ (result) in
    // onSuccess
}.onFailure{ (error) in
    // onFailure
}
```

## 更多信息

* 当用户不需要使用应用，或者需要切换其他账号登录认证，可以先执行[登出](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-ios-sign-out-0000001053692708)。
* 当用户需要注销当前用户，可以进行[销户](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-ios-deleteuser-0000001057460873)。
* 对于销户、修改密码、关联账号以及重置手机账号和邮箱账号等敏感操作，为了提高安全性，需要用户必须在5分钟内登录过才能执行。如果用户执行敏感操作时登录超过5分钟，需要[账号重认证](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-ios-reauthenticate-0000001127283387)后再执行敏感操作。
* 您可以参考[异常处理](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-ios-troubleshooting-0000001054715191)实现自己的异常处理机制，从而减少异常情况的发生。
* 您可以参考[管理用户](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-user-manage-0000001606051705)对用户进行解锁、停用等操作。

