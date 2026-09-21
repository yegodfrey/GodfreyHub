---
name: document/cn/HMSCore-Guides/harmonyos-js-login-0000001151310900
title: 登录华为帐号
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/harmonyos-js-login-0000001151310900
---

# 登录华为帐号

## 场景介绍

华为帐号是用户访问华为生态应用的凭证，拥有华为帐号的用户，可以使用华为终端云服务，如华为游戏中心、华为应用市场、华为视频、华为音乐等。

华为帐号登录基于[OAuth 2.0协议标准](https://oauth.net/2/)和[OpenID Connect协议](https://openid.net/connect/)，您的应用可以通过获取华为帐号用户身份认证信息（ID Token）或用户的临时授权票据（Authorization Code），使用户通过华为帐号安全登录您的应用。华为帐号支持Authorization Code和ID Token两种登录模式。您可根据实际情况选择其中一种模式实现。

* Authorization Code模式：首次登录时，要求用户同意授权，当身份验证信息到期时，只需要从服务器端通过刷新令牌（Refresh Token）刷新访问令牌（Access Token），从而更快，更可靠，更方便。Authorization Code模式仅适用于有自己服务器的应用。
* ID Token模式：首次登录时，要求用户同意授权，当身份验证信息到期时，用户每次登录时都应同意授权。ID Token模式同时适用于单机应用和有自己服务器的应用。

## 支持的设备

|设备类型|OS版本|HMS Core（APK）版本|
|:---------------------------------------|:---------------|:--------------|
|手机、平板|HarmonyOS 2.0及以上|5.0.0.300及以上|
|车机|HarmonyOS 2.0及以上|6.2.0.300及以上|
|华为智慧屏、智能手表（wearable，不支持运动手表liteWearable）|HarmonyOS 2.0及以上|6.5.0.300及以上|

> 说明
>
> 1. HarmonyOS（JavaScript）必须在单HAP包场景下使用，暂不支持多HAP包场景。
> 2. HarmonyOS（JavaScript）暂不支持混合打包场景。

## Authorization Code登录

本章节主要介绍使用Authorization Code模式登录华为帐号的开发步骤。

### 业务流程

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230921155618.77412976740234047822408405253125:50001231000000:2800:584009BE6D4A94B797AEF36560872C7D81C4C1D3DA6DEB04FACA9B80DC93CF47.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

整体流程：

1. 用户选择华为帐号登录方式登录应用客户端。
2. 应用客户端向华为帐号SDK发送请求，获取Authorization Code。
3. 华为帐号SDK向华为帐号服务器发送请求，获取Authorization Code。
4. 华为帐号SDK展示华为帐号服务器的用户登录授权界面，界面上会根据登录请求中携带的授权域（scopes）信息，显式告知用户需要授权的内容。
5. 用户允许授权。
6. 华为帐号服务器返回Authorization Code信息给华为帐号SDK。
7. 华为帐号SDK返回Authorization Code信息给应用客户端。
8. 应用客户端将获取到的Authorization Code信息发给应用服务器。
9. 应用服务器向华为帐号服务器发送请求，获取Access Token、Refresh Token、ID Token信息。
10. 华为帐号服务器返回Access Token、Refresh Token、ID Token信息。

### 开发步骤

1. 展示华为登录方式图标。

   应用在登录页面展示华为帐号登录方式的图标，华为登录方式图标规范请参见[华为帐号登录管理细则](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/detailedrules-0000001585092746)。
2. 调用[HuaweiIdAuthParamsHelper.setAuthorizationCode](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/harmonyos-js-huaweiidauthparamshelper-0000001064109899#section287005922714)方法请求授权。

   ```screen
   import {HuaweiIdAuthParamsHelper, HuaweiIdAuthManager} from '@hw-hmscore/hms-jsb-account';

   var signInOption = new HuaweiIdAuthParamsHelper().setId().setProfile().setAuthorizationCode().build();
   ```

3. 调用[HuaweiIdAuthManager.getAuthApi().getSignInIntent](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/harmonyos-js-huaweiidauth-0000001063960185#section169782218282)方法拉起华为帐号登录授权页面，处理登录结果。

   ```javascript
   // HuaweiIdAuthManager.getAuthApi方法返回huaweiIdAuth对象，在huaweiIdAuth对象中调用huaweiIdAuth.getSignInIntent方法
   HuaweiIdAuthManager.getAuthApi().getSignInIntent(signInOption).then((result)=>{
       // 登录成功，获取用户的华为帐号信息
       console.info("signIn success");
       console.info(JSON.stringify(result));
       console.info("昵称: " + result.getDisplayName());
       console.info("头像: " + result.getAvatarUri());
   }).catch((error)=>{
       // 登录失败
       console.error("signIn fail");
       console.error(JSON.stringify(error));
   });
   ```

4. 登录成功后应用服务器调用[获取凭证Access Token](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/account-obtain-token_hms_reference-0000001050048618)的接口向华为帐号服务器请求获取ID Token、Access Token、Refresh Token。

   **请求参数**

   |**参数**名|**描述**|
   |:------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   |grant_type|OAuth 2.0规范定义的字段，该值固定填"authorization_code"。|
   |code|获取的授权码Authorization Code。|
   |client_id|应用中OAuth 2.0客户端ID（凭据）的Client ID，在创建应用后由华为开发者联盟为应用分配的唯一标识。Client ID的查询方法请参见[查看应用](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-appinfo-0000001100014694)。|
   |client_secret|应用中OAuth 2.0客户端ID（凭据）的Client Secret，在创建应用后由华为开发者联盟为应用分配公钥。Client Secret查询方法请参见[查看应用](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-appinfo-0000001100014694)。|
   |redirect_uri|AppGallery Connect中设置的[回调地址](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/set-redirect-uri-0000001055126949)，用于应用服务器在获取用户授权后接收Authorization Code和[获取凭证Access Token](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/account-obtain-token_hms_reference-0000001050048618)。|

   **请求示例**

   ```screen
   POST /oauth2/v3/token HTTP/1.1
   Host: oauth-login.cloud.huawei.com
   Content-Type: application/x-www-form-urlencoded
   grant_type=authorization_code&
   code={code}&
   client_id={client_id}&
   client_secret={client_secret}&
   redirect_uri=https%3A%2F%2F/www.example.com/%2Fredirect_uri
   ```

   **响应参数**

   |**参数**名|**描述**|
   |:------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   |access_token|用户的Access Token。|
   |refresh_token|如果应用申请华为帐号服务时，入参中包含access_type=offline，则会返回此参数，该参数用于刷新Access Token。|
   |expires_in|Access Token的过期时间，以秒为单位。60分钟过期。|
   |id_token|如果应用申请华为帐号服务时，入参scope中包含OpenID，则会返回此参数（[JWT格式数据](https://jwt.io/introduction/)），包含用户基本帐号、用户邮箱等信息。ID Token的描述信息请参见[ID Token验证接口](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/account-verify-id-token_hms_reference-0000001050050577)中ID Token描述。|
   |scope|生成的凭证Access Token中包含的scope。|
   |token_type|固定返回Bearer，标识返回Access Token的类型。|

   **响应示例**

   ```screen
   HTTP/1.1 200 OK
   Content-Type: application/json;charset=UTF-8
   Cache-Control: no-store
   Pragma: no-cache 
   {
   "access_token": "CFyJ21sNODl16eV9y2vu3CwQk9DBr32********************yTk5\/kA+QDAyxou+\/5U2zzBRcf3qgLkkFdtbbC+mM3zFV7xj7CCEMHc5Tw92al0Y=",
   "refresh_token": "CF13G0sRaGybtYt7SIyeUILNORtTFw********************mXKjdI8RS\/YlyS71z4DyP6kEMnOrRlmNK0KhdOUNWd+qVLLRsEEHkqRIKpuAkPvL8=",
   "expires_in": 3600,
   "id_token": "eyJraWQiOiI3YTNlYjRkNTJmMDdhODM0NDU4MmRhOGQ*******************0YmRiZTFkNDQ3MjQ2MDNhZTA2NGM0ZTlkZGYyIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJhdF9oYXNoIjoiM0hPdFZYOEdMcG1GSDBWRVlSc1BjdyIsImF1ZCI6IjEwMDczNTE2NyIsInN1YiI6Ik1ERTlYaWFoc3MwaWFFNXU2c09PaEY5Mlhvell0Rkt4bUdtbWlhNGtTaEJ3dklLR2ciLCJhenAiOiIxMDA3MzUxNjciLCJpc3MiOiJodHRwczovL2FjY291bnRzLmh1YXdlaS5jb20iLCJuYW1lIjoi6Jab5oyv5Y2OIiwiZXhwIjoxNTczMDQ2NDI4LCJnaXZlbl9uYW1lIjoi6Jab5oyv5Y2OIiwiZGlzcGxheV9uYW1lIjoi5rKh5pyJ562U5qGIIiwiaWF0IjoxNTczMDQyODI4LCJwaWN0dXJlIjoiaHR0cHM6Ly91cGZpbGUtZHJjbi5wbGF0Zm9ybS5oaWNsb3VkLmNvbS9GaWxlU2VydmVyL2ltYWdlL2IuMDI2MDA4NjAwMDIzMjQ3MjUxMS4yMDE5MDgyMDExNTQ0Mi5tbmRjWTZyN2JUT0xNcVdiNVBhZDIzZExWNXh0b1Z2WC4xMDAwLkI0QkUyQTdEM0I3NkFGMzBCMkJDNjlBQ0JFNjg3NDIxMTQwMjhEQzYwREZFOTVCMjM5QkI0QzM2OUQwOUVEMkEuanBnIn0.mqy2C3ZNYEM8FKt8r1LX0VFosJjpqVl7E7mw2N-uEhnmAJq3blBco8fp2TCEyUzi1qFMN7-cjv87mQqCEpgfozyU7xV0VXMGdcd9ZhOxtabZtQGxUXRpIPiK5iysp68d95_QJAf2YZIdA4P_1zU8ZGxH57njIXRUVdQWDB8poeuB9gOc72bufe3DmSkqYD9aKvcibpA44Iln58aj-I9xs-FpcDwE6Y9hTfLGT5vk_5hXs32qwt54kEH1JjKbzZRW7B-OaELJIzzOM49oZKrdkViG6c2Tco1xX1WcKSz298Wckj4suLBAqkam4AprQgoSETC__ORTfy9OHIS1m4_8uQ",
   "scope": "openid profile email",
   "token_type": "Bearer"
   }
   ```

5. 由于Access Token的有效期（目前是60分钟）较短，当Access Token失效或者即将失效时，可以使用Refresh Token（有效期180天）通过[获取凭证Access Token](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/account-obtain-token_hms_reference-0000001050048618)向华为帐号服务器请求获取新的Access Token。 说明
   > 1. 当Access Token失效时，若您不使用Refresh Token向帐号服务器请求获取新的Access Token，帐号的授权信息将会失效，导致使用Access Token的功能都会失败。
   > 2. 当Access Token非正常失效（如修改密码，退出帐号，删除设备）时，业务可通过调用退出帐号接口后再调用静默登录接口获取新的Access Token。

   **请求示例**

   ```screen
   POST /oauth2/v3/token HTTP/1.1 
   Host: oauth-login.cloud.huawei.com 
   Content-Type: application/x-www-form-urlencoded 
   grant_type={refresh_token}& 
   client_id={client_id}&
   client_secret={client_secret}& 
   refresh_token=CF2Mm03n0aos***********74CXeBi50gVVhMpB0IUzlv9ZwizEvTBhVoF820ZPim0JwNR9j2p1qgEQWnIVYZRlp4T6ezMgekUnsHBkvNev5rd2MdfQMLP
   ```

   **响应示例**

   ```screen
   HTTP/1.1 200 OK 
   Content-Type: application/json;charset=UTF-8 
   Cache-Control: no-store 
   Pragma: no-cache 
   { 
   "access_token": "CFyJ4J\/l6wuwcFqYOJG4ma****************el6qCV5lvqH0PYtW0+BNwfHWg0AqMnW6ZdBvUgs7ijkxMFh1xVP\/B+vQXz3PWsivkKCuL78XtbLt7vs=", 
   "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjExOGRmMj******************YmU5NjUwYTgyMTEyYzAwZGY1YTQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI3ODI0NTY2Njc4OTgtc2M0MzE3Y2l0NGEwMjB0NzdrbGdsbWo1ZjA4YWtnMWIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI3ODI0NTY2Njc4OTgtN2NkNGJpYWRkaGVwNGc4cnZic2VlOGtwcDA5Zm1hNzIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDE3MTIxMzkwMzgwNDE2MDc0MTQiLCJlbWFpbCI6Inh1ZXpoZW5odWF0anVAc2luYS5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGljdHVyZSI6Imh0dHBzOi8vbGg1Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tMm9lTTllT09zNTAvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQkkvMVpOSC0xdmxxc3cvczk2LWMvcGhvdG8uanBnIiwiaWF0IjoxNTYxNDUxMTUyLCJleHAiOjE1NjE0NTQ3NTJ9.Eo9IHMkid596jvt1YYzNsRtDq9c9K9dbougkU41Noh7TXNiko86_RuWwHID6k1kDg398AwC3wwH-t2hLcUjgrXPNd9XYU96Jp4-UxdDszP6ywEJgvvBCyTHzsi2auvKt_MnfSrs3qOKfh7noJvXq8AY-Hi3vqSUks5kGqbZKVzCHhBDO3RD9Fs9YHsB6w0XVKZojPOBDaAT_TiijoChn-Q-e8NbSGUx52OgeH-Nw5lOj6JVb_7fb6ucWRzlhiQuzFjklevLVw2pjw1MxKbl1vfRp0X699uZBVjgl9hj1L7LSDObuPzLiXF7ojji5JKYC6zIwAtZQUZ_VUmSk01GDLQ", 
   "expires_in": 3600, 
   "scope": "openid profile email", 
   "token_type": "Bearer" 
   }
   ```

## ID Token登录

本章节主要介绍使用ID Token模式登录华为帐号的开发步骤。

### 业务流程

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230921155619.57481204338759184614168001664126:50001231000000:2800:9709024E4B29E2982A6B48E7B46141D461C38A3A2D9AF383B615B9EE709AD1AE.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

整体流程：

1. 用户选择华为帐号登录方式登录应用。
2. 应用向华为帐号SDK发起登录请求。
3. 华为帐号SDK根据登录请求中携带的授权域（scopes）信息， 显式告知用户需要授权的内容。
4. 华为帐号SDK拉起用户登录授权界面。
5. 用户确认允许授权。
6. 华为帐号SDK返回ID Token信息。
7. 应用客户端获取到ID Token后，去华为帐号服务器[验证ID Token有效性](#section96317186371)。

### 开发步骤

1. 展示华为登录方式图标。

   应用在登录页面展示华为帐号登录方式的图标，华为登录方式图标规范请参见[华为帐号登录管理细则](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/detailedrules-0000001585092746)。
2. 调用[HuaweiIdAuthParamsHelper.setIdToken](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/harmonyos-js-huaweiidauthparamshelper-0000001064109899#section15241254171915)方法请求授权。

   ```screen
   import {HuaweiIdAuthParamsHelper, HuaweiIdAuthManager} from '@hw-hmscore/hms-jsb-account';

   var signInOption = new HuaweiIdAuthParamsHelper().setId().setProfile().setIdToken().build();
   ```

3. 调用[HuaweiIdAuthManager.getAuthApi().getSignInIntent](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/harmonyos-js-huaweiidauth-0000001063960185#section169782218282)方法拉起华为帐号登录授权页面，处理登录结果。

   ```javascript
   // HuaweiIdAuthManager.getAuthApi方法返回huaweiIdAuth对象，在huaweiIdAuth对象中调用huaweiIdAuth.getSignInIntent方法
   HuaweiIdAuthManager.getAuthApi().getSignInIntent(signInOption).then((result)=>{
       // 登录成功，获取用户的华为帐号信息
       console.info("signIn success");
       console.info(JSON.stringify(result));
       console.info("ID Token:" + result.getIdToken());
   }).catch((error)=>{
       // 登录失败
       console.error("signIn fail");
       console.error(JSON.stringify(error));
   });
   ```

### 验证ID Token有效性

**方式一：应用服务器验证（推荐）**

步骤请参见应用服务器的[ID Token验证签名](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/open-platform-oauth-0000001053629189#section1991115414569)。

**方式二：华为服务器验证**

应用调用[验证ID Token有效性](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/account-verify-id-token_hms_reference-0000001050050577)的接口向华为帐号服务器发送ID Token验证请求，华为帐号服务器向应用直接返回验证结果。
> 说明
>
> 由于调用[验证ID Token有效性](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/account-verify-id-token_hms_reference-0000001050050577)的接口会带来耗时，并且受网络状况的影响，所以服务器验证方式只能用于调试目的，在商用环境需要采用应用服务器验证的方式。

**请求示例**

```screen
POST /oauth2/v3/tokeninfo? HTTP/1.1
Host: oauth-login.cloud.huawei.com
Content-Type: application/x-www-form-urlencoded
id_token=eyJraWQiOiI2YTI4ODBjNWQ2YTg4Y2M0****************dkNWJlYmQ4NTVhNDdiNzE3NTdmYzFiOTUzMDgwOWNhIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJhdF9oYXNoIjoiRHg1V1V3VXpQZWxBTC1TS3VBdldVZyIsInN1YiI6Ik1ERUxhWkd4UTlXaHFIVnFrRVZZcVZYblF5TFhqcDhyVmhmbWxScHg4SjlYclEiLCJob21lX2NvdW50cnlfY29kZSI6IkNOIiwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy5odWF3ZWkuY29tIiwiZ2l2ZW5fbmFtZSI6IuiWm-aMr-WNjiIsImxvY2FsZSI6InpoLWNuIiwiZGlzcGxheV9uYW1lIjoi56m65oyH6ZKIMeWPtyIsIm5vbmNlIjoic2FsZmRqb2p1aWV3cnJsa2pkc2Zmc2QiLCJyZWdpc3Rlcl9jb3VudHJ5X2NvZGUiOiJDTiIsImF1ZCI6IjMwMDAzNTIzMyIsImF6cCI6IjMwMDAzNTIzMyIsIm5hbWUiOiLolpvmjK_ljY4iLCJleHAiOjE1NjM4MjM5MDksImlhdCI6MTU2MzgyMDMwOSwiZW1haWwiOiIxNTIyMDI2NjU4MyJ9.cQdyVC7RPl9V6xjPjsRYdKapPb3ZNZPu4FLNMuPZxhoSwENDvvQBRc5_W-kNBmWMh-HxhDwmVPWValubXy-vPey6grUuwDmOQQRYyIsg0nHTBA91LmRIVrWLllpiEbqij_ExsDz2ThCcFoTZ2kXGEoJ2jnBIb17pHuG7USNLTGb7NayBZJrKBl85lo9V8lgMjj3hcMMPVWrF1pRWhWVNy3hOvMSf9n_l309Xn1Rd6lVUaTJtqC0NbpjmLMSj4OGGtvKICIBQlUw46-6rZqxY0DaU8ZrvK8mcWIf9XaHMAZIucOkVdgT3u3sUw1Dy8m8Cr-9zt_wixJMPEm4CMPHA-Q
```

**响应示例**

```screen
HTTP/1.1 200 OK 
Content-Type: application/json;charset=UTF-8 
Cache-Control: no-store 
Pragma: no-cache 
{
    "at_hash": "Dx5WUwUzPelAL-SKuAvWUg",
    "sub": "MDELaZGxQ9WhqHVqkEVYqVXnQyLXjp8rVhfmlRpx8J9XrQ",
    "kid": "6a2880c5d6a88cc4643e88eb680e05197d5bebd855a47b71757fc1b9530809ca",
    "iss": "https://accounts.huawei.com",
    "typ": "JWT",
    "given_name": "张三",
    "locale": "zh-cn",
    "display_name": "Jack",
    "nonce": "salfdjojuiewrrlkjdsffsd",
    "register_country_code": "CN",
    "aud": "300035233",
    "azp": "300035233",
    "name": "张三",
    "exp": 1563823909,
    "iat": 1563820309,
    "alg": "RS256",
    "email": "zhangsan@example.com"
}
```

