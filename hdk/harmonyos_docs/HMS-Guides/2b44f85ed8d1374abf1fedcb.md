---
name: document/cn/HMS-Guides/account-guide-v4
title: 华为帐号服务开发指南
uri: https://developer.huawei.com/consumer/cn/doc/HMS-Guides/account-guide-v4
source: portal
---

# 1\. 登录华为帐号（ID Token）

## 1.1 场景介绍

华为帐号是用户访问华为云业务的凭证，拥有华为帐号的用户，可以使用华为云业务，如华为云服务、华为游戏中心、华为应用市场等。

华为帐号登录是指基于[OAuth2.0协议标准](https://oauth.net/2/)和[OpenID Connect协议](https://openid.net/connect/)，第三方应用可以获取华为帐号用户身份认证信息(ID Token)或用户的临时授权票据(Authorization Code)，用于用户使用华为帐号安全登录第三方应用。Authorization Code模式仅适用于有自己服务器的应用，ID Token模式同时适合单机应用和有自己服务器的应用。开发者可根据实际情况选择其中一种模式实现。

本章节主要介绍使用ID Token模式登录华为帐号的开发步骤。

## 1.2 业务流程

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200117165453.64945935107906184995348784671394:50510611090058:2800:A92FF17B71EFEAFC2361715033CF3BA96781E9A6F6867A534DA6B5F94C5EE162.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)

整体流程：

1、用户选择华为帐号登录方式登录应用。

2、应用向HUAWEI Account SDK发起登录请求。

3、HUAWEI Account SDK拉起用户登录授权界面，界面上会根据登录请求中携带的授权域(scope)信息， 显式告知用户需要授权的内容。

4、用户确认允许授权后，HUAWEI Account SDK返回ID Token信息。

5、应用选择使用本地方式验证或HUAWEI Account Server方式验证ID Token，具体说明参见验证ID Token有效性。

## 1.3 开发步骤

### **1.3.1 请求授权获取id token**

1、展示华为登录方式图标。  
应用在登录页面展示华为帐号登录方式的图标，华为登录方式图标规范可参考[华为图标规范](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/account-specification)。

2、调用[HuaweiIdAuthParamsHelper.setIdToken](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiidauthparamsHelper#setIdToken)方法请求授权。
      
      1. HuaweiIdAuthParams authParams = new HuaweiIdAuthParamsHelper(HuaweiIdAuthParams.DEFAULT_AUTH_REQUEST_PARAM).setIdToken().createParams();
    
    

3、调用[HuaweiIdAuthManager](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthmanager)的[getService](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthmanager#getService)方法初始化[HuaweiIdAuthService](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthservice)对象。
      
      1. HuaweiIdAuthService service = HuaweiIdAuthManager.getService(MainActivity.this, authParams);
    
    

4、调用[HuaweiIdAuthService.getSignInIntent](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthservice#getSignInIntent)方法并拉起华为帐号登录授权页面。
      
      1. startActivityForResult(service.getSignInIntent(), 8888);
    
    

5、登录授权完成后在页面的onActivityResult中调用[HuaweiIdAuthManager.parseAuthResultFromIntent](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthmanager#parseAuthResultFromIntent)方法从登录结果中获取华为帐号信息。
      
      1. @Override
        2. protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        3.     //授权登录结果处理，从AuthHuaweiId中获取ID Token
        4.     super.onActivityResult(requestCode, resultCode, data);
        5.     if (requestCode == 8888) {
        6.     Task<AuthHuaweiId> authHuaweiIdTask = HuaweiIdAuthManager.parseAuthResultFromIntent(data);
        7.         if (authHuaweiIdTask.isSuccessful()) {
        8.             //登录成功，获取用户的华为帐号信息和ID Token
        9.             AuthHuaweiId huaweiAccount = authHuaweiIdTask.getResult();
        10.             Log.i(TAG, "idToken:" + huaweiAccount.getIdToken());
        11.         } else {
        12.              //登录失败，不需要做处理，打点日志方便定位
        13.              Log.e(TAG, "sign in failed : " +((ApiException)authHuaweiIdTask.getException()).getStatusCode());
        14.         }
        15.     }
        16. }
    
    

### **1.3.2 验证ID Token有效性**

● 方式1：本地验证

注意：

如果用户手机的当前时间比标准时间慢，则可能导致本地校验失败，抛出异常com.auth0.jwt.exception.InvalidClaimException并提示“The Token cann't be used before ...”，请开发者酌情处理（如：校准用户手机时间）。

1、从<https://oauth-login.cloud.huawei.com/.well-known/openid-configuration>中的jwks_uri字段获取公钥URI，访问公钥URI获取公钥。公钥每天更新一次，应用服务器可以缓存公钥的值。
      
      1. private void getJwks(ICallBack iCallBack) {
        2.       OkHttpClient okHttpClient = new OkHttpClient();
        3.       final Request request = new Request.Builder()
        4.               .url(Constant.CERT_URL)
        5.               .build();
        6.       Call call = okHttpClient.newCall(request);
        7.       call.enqueue(new Callback() {
        8.           @Override
        9.           public void onFailure(Call call, IOException e) {
        10.               Log.i(TAG, "Get ID Token failed.");
        11.               iCallBack.onFailed();
        12.           }
        13.           @Override
        14.           public void onResponse(Call call, Response response) {
        15.               if (response.isSuccessful()) {
        16.                   try {
        17.                       String res = response.body().string();
        18.                       JSONObject jsonObject = new JSONObject(res);
        19.                       mJsonArray = jsonObject.getJSONArray("keys");
        20.                       iCallBack.onSuccess();
        21.                   } catch (NullPointerException | JSONException | IOException e) {
        22.                       Log.i(TAG, "parse JsonArray failed." + e.getMessage());
        23.                       iCallBack.onFailed();
        24.                   }
        25.               }
        26.           }
        27.       });
        28. }
    
    

2、验证签名。ID Token是JWT格式的，验证ID Token的签名可以采用通用的JWT库，例如[jwt.io](https://jwt.io/)。
      
      1. DecodedJWT decoder = JWT.decode(idToken);
        2. Algorithm algorithm = Algorithm.RSA256(mRSAPublicKey , null);
        3. JWTVerifier verifier = JWT.require(algorithm).build();
        4. // 验证签名
        5. verifier.verify(decoder);
    
    

3、验证ID Token中iss字段的值是否等于“https://accounts.huawei.com”。
      
      1. decoder.getIssuer().equals(ID_TOKEN_ISSUE);
    
    

4、验证ID Token中aud字段的值等于应用的client_id。
      
      1. decoder.getAudience().get(0).equals(CLIENT_ID);
    
    

5、验证ID Token中的过期时间（exp字段）是否已过期。
      
      1. // 过期，会抛出TokenExpiredException异常
        2. verifier.verify(decoder);
    
    

6、如果以上验证均通过，则表示用户ID Token验证通过，应用可使用登录结果中的用户信息。  

      
      1. JSONObject jsonObject = new JSONObject(new String(Base64.decode(decoder.getPayload(), Base64.URL_SAFE), DEFAULT_CHARSET));
    
    

具体代码可以参考[客户端示例代码](https://developer.huawei.com/consumer/cn/doc/development/HMS-Examples/account-example-v4)中的IDTokenParser.java。

● 方式2：服务器验证

应用调用[ID Token合法性验证接口](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-verify-id-token)向华为帐号服务器发送ID Token验证请求，华为帐号服务器向应用直接返回验证结果。  


**注意** ：

由于调用“[ID Token合法性验证接口](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-verify-id-token)”会带来耗时，并且受网络状况的影响，所以服务器验证方式只能用于调试目的，在商用环境需要采用本地验证的方式。

请求样例：
      
      1. POST/oauth2/v3/tokeninfo? 
        2. id_token=eyJraWQiOiI2YTI4ODBjNWQ2YTg4Y2M0NjQzZTg4ZWI2ODBlMDUxOTdkNWJlYmQ4NTVhNDdiNzE3NTdmYzFiOTUzMDgwOWNhIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJhdF9oYXNoIjoiRHg1V1V3VXpQZWxBTC1TS3VBdldVZyIsInN1YiI6Ik1ERUxhWkd4UTlXaHFIVnFrRVZZcVZYblF5TFhqcDhyVmhmbWxScHg4SjlYclEiLCJob21lX2NvdW50cnlfY29kZSI6IkNOIiwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy5odWF3ZWkuY29tIiwiZ2l2ZW5fbmFtZSI6IuiWm-aMr-WNjiIsImxvY2FsZSI6InpoLWNuIiwiZGlzcGxheV9uYW1lIjoi56m65oyH6ZKIMeWPtyIsIm5vbmNlIjoic2FsZmRqb2p1aWV3cnJsa2pkc2Zmc2QiLCJyZWdpc3Rlcl9jb3VudHJ5X2NvZGUiOiJDTiIsImF1ZCI6IjMwMDAzNTIzMyIsImF6cCI6IjMwMDAzNTIzMyIsIm5hbWUiOiLolpvmjK_ljY4iLCJleHAiOjE1NjM4MjM5MDksImlhdCI6MTU2MzgyMDMwOSwiZW1haWwiOiIxNTIyMDI2NjU4MyJ9.cQdyVC7RPl9V6xjPjsRYdKapPb3ZNZPu4FLNMuPZxhoSwENDvvQBRc5_W-kNBmWMh-HxhDwmVPWValubXy-vPey6grUuwDmOQQRYyIsg0nHTBA91LmRIVrWLllpiEbqij_ExsDz2ThCcFoTZ2kXGEoJ2jnBIb17pHuG7USNLTGb7NayBZJrKBl85lo9V8lgMjj3hcMMPVWrF1pRWhWVNy3hOvMSf9n_l309Xn1Rd6lVUaTJtqC0NbpjmLMSj4OGGtvKICIBQlUw46-6rZqxY0DaU8ZrvK8mcWIf9XaHMAZIucOkVdgT3u3sUw1Dy8m8Cr-9zt_wixJMPEm4CMPHA-Q 
        3. Host: oauth-login.cloud.huawei.com 
        4. Content-Type: application/x-www-form-urlencoded
    
    

返回样例：
      
      1. HTTP/1.1 200 OK 
        2. Content-Type: application/json;charset=UTF-8 
        3. Cache-Control: no-store 
        4. Pragma: no-cache 
        5. { 
        6.     "at_hash": "Dx5WUwUzPelAL-SKuAvWUg", 
        7.     "sub": "MDELaZGxQ9WhqHVqkEVYqVXnQyLXjp8rVhfmlRpx8J9XrQ", 
        8.     "kid": "6a2880c5d6a88cc4643e88eb680e05197d5bebd855a47b71757fc1b9530809ca", 
        9.     "iss": "https://accounts.huawei.com", 
        10.     "typ": "JWT", 
        11.     "given_name": "张三", 
        12.     "locale": "zh-cn", 
        13.     "display_name": "Jack", 
        14.     "nonce": "salfdjojuiewrrlkjdsffsd", 
        15.     "register_country_code": "CN", 
        16.     "aud": "300035233", 
        17.     "azp": "300035233", 
        18.     "name": "张三", 
        19.     "exp": 1563823909, 
        20.     "iat": 1563820309, 
        21.     "alg": "RS256", 
        22.     "email": "zhangsan@example.com" 
        23. }
    
    

# 2\. 登录华为帐号（Authorization Code）

## 2.1 场景介绍

华为帐号是用户访问华为云业务的凭证，拥有华为帐号的用户，可以使用华为云业务，如华为云服务、华为游戏中心、华为应用市场等。

华为帐号登录是指基于[OAuth2.0协议标准](https://oauth.net/2/)和[OpenID Connect协议](https://openid.net/connect/)，第三方应用可以获取华为帐号用户身份认证信息(ID Token)或用户的临时授权票据(Authorization Code)，用于用户使用华为帐号安全登录第三方应用。Authorization Code模式仅适用于有自己服务器的应用，ID Token模式同时适合单机应用和有自己服务器的应用。开发者可根据实际情况选择其中一种模式实现。

本章节主要介绍使用Authorization Code模式登录华为帐号的开发步骤。

## 2.2 业务流程

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200320092848.98341389009874506176470010866801:50510611090058:2800:4EFF11E4428D52E4C407CB0E8D07F5908225E71FD28C8E2B06F71F75001CC926.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)

整体流程：

1、用户选择华为帐号登录方式登录应用。

2、应用向HUAWEI Account SDK发起登录请求。

3、华为帐号拉起用户登录授权界面，界面上会根据登录请求中携带的授权域(scope)信息， 显式告知用户需要授权的内容。

4、用户确认允许授权后，华为帐号返回Authorization Code信息。

5、应用通过Authorization Code换取Access Token，Refresh Token，ID Token信息。

6、应用服务端可以根据Access Token可以从华为帐号服务器获取用户的openId。

7、如果Access Token或ID Token过期，可以使用Refresh Token获取新的Access Token，ID Token信息。

## 2.3 开发步骤

1、展示华为登录方式图标。  
应用在登录页面展示华为帐号登录方式的图标，华为登录方式图标规范可参考[华为图标规范](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/account-specification)。

2、调用[HuaweiIdAuthParamsHelper.setAuthorizationCode](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiidauthparamsHelper#setAuthorizationCode)方法请求授权。
      
      1. HuaweiIdAuthParams authParams = new HuaweiIdAuthParamsHelper(HuaweiIdAuthParams.DEFAULT_AUTH_REQUEST_PARAM).setAuthorizationCode().createParams();
    
    

3、调用[HuaweiIdAuthManager](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthmanager)的[getService](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthmanager#getService)方法初始化[HuaweiIdAuthService](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthservice)对象。
      
      1. HuaweiIdAuthService service = HuaweiIdAuthManager.getService(MainActivity.this, authParams);
    
    

4、调用[HuaweiIdAuthService.getSignInIntent](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthservice#getSignInIntent)方法并拉起华为帐号登录授权页面。
      
      1. startActivityForResult(service.getSignInIntent(), 8888);
    
    

5、登录授权完成后处理登录结果。
      
      1. @Override
        2. protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        3.   //授权登录结果处理，从AuthHuaweiId中获取Authorization Code
        4.   super.onActivityResult(requestCode, resultCode, data);
        5.   if (requestCode == 8888) {
        6.     Task<AuthHuaweiId> authHuaweiIdTask = HuaweiIdAuthManager.parseAuthResultFromIntent(data);
        7.     if (authHuaweiIdTask.isSuccessful()) {
        8.           //登录成功，获取用户的华为帐号信息和Authorization Code
        9.           AuthHuaweiId huaweiAccount = authHuaweiIdTask.getResult();
        10.           Log.i(TAG, "Authorization code:" + huaweiAccount.getAuthorizationCode());
        11.      } else {
        12.           //登录失败
        13.           Log.e(TAG, "sign in failed : " + ((ApiException)authHuaweiIdTask.getException()).getStatusCode()); 
        14.        }
        15.   }
        16. }
    
    

6、登录成功后应用调用[Token获取接口](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-obtain-token)向华为帐号服务器请求获取ID Token、Access Token、Refresh Token。该请求为POST请求，需在body体中包含如下参数:

参数名| 描述  
---|---  
grant_type| authorization_code  
code| 在前一步获取的授权码  
client_id| AppGallery Connect中的App ID  
client_secret| AppGallery Connect中的App secret   
redirect_uri| AppGallery Connect中设置的回调地址  
  
请求样例：
      
      1. POST/oauth2/v3/token HTTP/1.1
        2. Host: oauth-login.cloud.huawei.com
        3. Content-Type: application/x-www-form-urlencoded
        4. grant_type=authorization_code&
        5. code=CF3L7XyCVZi52XMdsUzD7Z6ap0/N2qExcNe0AMqTselTtNd1B4DUwTsQ/23FPZasC8yI29v+N2s2jMT/T2MXiuc+178I/sYuWVoTyqwBaDqVW82KCMqaxbeWBguH4hEENxmDSUIE61Qg5R1F074PiS+qJYnbLI2IBqatS37px8pn5qnuq5oX+UX8XN3/w8HLt4GpakW5Dk1v7hGs&
        6. client_id={app_id}&
        7. client_secret={app_secret}&
        8. redirect_uri=https%3A%2F%2F/www.example.com/%2Fredirect_uri
    
    

返回样例：
      
      1. HTTP/1.1 200 OK
        2. Content-Type: application/json;charset=UTF-8
        3. Cache-Control: no-store
        4. Pragma: no-cache 
        5. {"access_token": "CFyJ21sNODl16eV9y2vu3CwQk9DBr32BkOcxxgAd7MZUR5th1giyTk5\/kA+QDAyxou+\/5U2zzBRcf3qgLkkFdtbbC+mM3zFV7xj7CCEMHc5Tw92al0Y=",
        6. "refresh_token": "CF13G0sRaGybtYt7SIyeUILNORtTFwMgz4ao5C7j7vtgLPt6ogmXKjdI8RS\/YlyS71z4DyP6kEMnOrRlmNK0KhdOUNWd+qVLLRsEEHkqRIKpuAkPvL8=",    
        7. "expires_in": 3600,
        8. "id_token": "eyJraWQiOiI3YTNlYjRkNTJmMDdhODM0NDU4MmRhOGQ3MWE1MGQ5MDlmNWM0YmRiZTFkNDQ3MjQ2MDNhZTA2NGM0ZTlkZGYyIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJhdF9oYXNoIjoiM0hPdFZYOEdMcG1GSDBWRVlSc1BjdyIsImF1ZCI6IjEwMDczNTE2NyIsInN1YiI6Ik1ERTlYaWFoc3MwaWFFNXU2c09PaEY5Mlhvell0Rkt4bUdtbWlhNGtTaEJ3dklLR2ciLCJhenAiOiIxMDA3MzUxNjciLCJpc3MiOiJodHRwczovL2FjY291bnRzLmh1YXdlaS5jb20iLCJuYW1lIjoi6Jab5oyv5Y2OIiwiZXhwIjoxNTczMDQ2NDI4LCJnaXZlbl9uYW1lIjoi6Jab5oyv5Y2OIiwiZGlzcGxheV9uYW1lIjoi5rKh5pyJ562U5qGIIiwiaWF0IjoxNTczMDQyODI4LCJwaWN0dXJlIjoiaHR0cHM6Ly91cGZpbGUtZHJjbi5wbGF0Zm9ybS5oaWNsb3VkLmNvbS9GaWxlU2VydmVyL2ltYWdlL2IuMDI2MDA4NjAwMDIzMjQ3MjUxMS4yMDE5MDgyMDExNTQ0Mi5tbmRjWTZyN2JUT0xNcVdiNVBhZDIzZExWNXh0b1Z2WC4xMDAwLkI0QkUyQTdEM0I3NkFGMzBCMkJDNjlBQ0JFNjg3NDIxMTQwMjhEQzYwREZFOTVCMjM5QkI0QzM2OUQwOUVEMkEuanBnIn0.mqy2C3ZNYEM8FKt8r1LX0VFosJjpqVl7E7mw2N-uEhnmAJq3blBco8fp2TCEyUzi1qFMN7-cjv87mQqCEpgfozyU7xV0VXMGdcd9ZhOxtabZtQGxUXRpIPiK5iysp68d95_QJAf2YZIdA4P_1zU8ZGxH57njIXRUVdQWDB8poeuB9gOc72bufe3DmSkqYD9aKvcibpA44Iln58aj-I9xs-FpcDwE6Y9hTfLGT5vk_5hXs32qwt54kEH1JjKbzZRW7B-OaELJIzzOM49oZKrdkViG6c2Tco1xX1WcKSz298Wckj4suLBAqkam4AprQgoSETC__ORTfy9OHIS1m4_8uQ",
        9. "scope": "openid profile email",
        10. "token_type": "Bearer"
        11. }
    
    

7、由于access token的有效期（目前是60分钟）较短, 当Access Token失效, 或者即将失效时,可以使用Refresh Token（当前默认有效期180天）通过[Token获取接口](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-obtain-token)向华为帐号服务器请求获取新的Access Token。

**注意** ：

Access Token获取时会有次数限制，且Access Token有效期一个小时，所以建议缓存Access Token而不是每次都调用接口获取。关于如何规范使用 Access Token，请参考“[应用级Access Token共享方案](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/account-other-shared-app-access-token)”。

请求样例：
      
      1. POST /oauth2/v3/token HTTP/1.1 
        2. Host: oauth-login.cloud.huawei.com 
        3. Content-Type: application/x-www-form-urlencoded 
        4. grant_type=refresh_token& 
        5. client_id=12345& 
        6. client_secret=bKaZ0VE3EYrXaXCdCe3d2k9few& 
        7. refresh_token=CF2Mm03n0aos9iZZ8nIhfyDtoXy74CXeBi50gVVhMpB0IUzlv9ZwizEvTBhVoF820ZPim0JwNR9j2p1qgEQWnIVYZRlp4T6ezMgekUnsHBkvNev5rd2MdfQMLP
    
    

返回样例：
      
      1. HTTP/1.1 200 OK 
        2. Content-Type: application/json;charset=UTF-8 
        3. Cache-Control: no-store 
        4. Pragma: no-cache 
        5. { 
        6. "access_token": "CFyJ4J\/l6wuwcFqYOJG4maq2ca8RAV+g0i+mel6qCV5lvqH0PYtW0+BNwfHWg0AqMnW6ZdBvUgs7ijkxMFh1xVP\/B+vQXz3PWsivkKCuL78XtbLt7vs=", 
        7. "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjExOGRmMjU0YjgzNzE4OWQxYmMyYmU5NjUwYTgyMTEyYzAwZGY1YTQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI3ODI0NTY2Njc4OTgtc2M0MzE3Y2l0NGEwMjB0NzdrbGdsbWo1ZjA4YWtnMWIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI3ODI0NTY2Njc4OTgtN2NkNGJpYWRkaGVwNGc4cnZic2VlOGtwcDA5Zm1hNzIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDE3MTIxMzkwMzgwNDE2MDc0MTQiLCJlbWFpbCI6Inh1ZXpoZW5odWF0anVAc2luYS5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGljdHVyZSI6Imh0dHBzOi8vbGg1Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tMm9lTTllT09zNTAvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQkkvMVpOSC0xdmxxc3cvczk2LWMvcGhvdG8uanBnIiwiaWF0IjoxNTYxNDUxMTUyLCJleHAiOjE1NjE0NTQ3NTJ9.Eo9IHMkid596jvt1YYzNsRtDq9c9K9dbougkU41Noh7TXNiko86_RuWwHID6k1kDg398AwC3wwH-t2hLcUjgrXPNd9XYU96Jp4-UxdDszP6ywEJgvvBCyTHzsi2auvKt_MnfSrs3qOKfh7noJvXq8AY-Hi3vqSUks5kGqbZKVzCHhBDO3RD9Fs9YHsB6w0XVKZojPOBDaAT_TiijoChn-Q-e8NbSGUx52OgeH-Nw5lOj6JVb_7fb6ucWRzlhiQuzFjklevLVw2pjw1MxKbl1vfRp0X699uZBVjgl9hj1L7LSDObuPzLiXF7ojji5JKYC6zIwAtZQUZ_VUmSk01GDLQ", 
        8. "expires_in": 3600, 
        9. "scope": "openid profile email", 
        10. "token_type": "Bearer" 
        11. }
    
    

# 3\. 登出华为帐号

## 3.1 场景介绍

华为帐号登出是指应用向用户提供入口可以退出当前华为帐号登录，用户退出登录后应用需要通知HUAWEI Account SDK清除本地当前已经登录的华为帐号信息。

## 3.2 业务流程

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200117165519.49130006237161801040624201879194:50510611090058:2800:99B930E8AFA58099A5D999BB9C1C7377D693E828FC949EEE591036CDEA38CD1C.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)

1、用户在已经登录应用，在应用中执行登出操作。

2、应用调用[HuaweiIdAuthService.signOut](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthservice#signOut)方法向HUAWEI Account SDK请求退出华为帐号。

3、HUAWEI Account SDK清理华为帐号登录信息后向应用返回登出结果。

## 3.3 开发步骤

华为帐号登出功能涉及应用的关键开发步骤如下：

1、使用华为帐号登录授权时创建的[HuaweiIdAuthService](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthservice)实例调用[signOut](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthservice#signOut)接口。
      
      1. //service为登录授权时使用getService方法生成的HuaweiIdAuthService实例
        2. Task<Void> signOutTask = service.signOut();
    
    

2、signOut完成后的处理。
      
      1. signOutTask.addOnCompleteListener(new OnCompleteListener<Void>() {
        2.     @Override   
        3.     public void onComplete(Task<Void> task) {      
        4.         //完成登出后的处理       
        5.         Log.i(TAG, "signOut complete");
        6.     }
        7. });
    
    

# 4\. 静默登录

## 4.1 场景介绍

用户首次使用华为帐号登录应用后，再次登录时，无需重复授权。

## 4.2 业务流程

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200117165533.44798224574348254846012891589620:50510611090058:2800:585DA116F2ED7C806D6B4DF59BC655FA89EBB524A31281CFB9E8811201006C23.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)

1、用户进行了触发静默登录的场景，根据应用实际场景由开发者自行设定。

2、应用调用[HuaweiIdAuthParamsHelper](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiidauthparamsHelper)的默认构造方法配置鉴权参数。

3、HUAWEI Account SDK向应用返回包含授权参数的[HuaweiIdAuthParams](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiidauthparams)对象。

4、应用调用[HuaweiIdAuthManager](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthmanager)的[getService](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthmanager#getService)方法初始化[HuaweiIdAuthService](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthservice)实例。

5、HUAWEI Account SDK向应用返回[HuaweiIdAuthService](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthservice)对象。

6、应用调用[HuaweiIdAuthService.silentSignIn](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthservice#silentSignIn)方法向HUAWEI Account SDK发起静默登录请求。

7、HUAWEI Account SDK检查用户是否符合静默登录的授权，并向应用返回授权结果。

8、应用根据授权结果自行确定后续处理。

## 4.3 开发步骤

静默登录功能涉及应用的关键开发步骤如下：

1、调用[HuaweiIdAuthParamsHelper](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiidauthparamsHelper)的默认构造方法配置授权参数。
      
      1. HuaweiIdAuthParams authParams = new HuaweiIdAuthParamsHelper(HuaweiIdAuthParams.DEFAULT_AUTH_REQUEST_PARAM).createParams();
    
    

2、调用[HuaweiIdAuthManager](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthmanager)的[getService](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthmanager#getService)方法初始化[HuaweiIdAuthService](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthservice)对象。
      
      1. HuaweiIdAuthService service = HuaweiIdAuthManager.getService(MainActivity.this, authParams);
    
    

3、调用[HuaweiIdAuthService.silentSignIn](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthservice#silentSignIn)方法发起静默登录请求。
      
      1. Task<AuthHuaweiId> task = service.silentSignIn();
    
    

4、处理授权结果。  
如果授权成功，可获取用户的华为帐户信息，允许用户登录。
      
      1. task.addOnSuccessListener(new OnSuccessListener<AuthHuaweiId>() {
        2.     @Override  
        3.     public void onSuccess(AuthHuaweiId authHuaweiId) {      
        4.         //获取华为帐户信息      
        5.         Log.i(TAG, "displayName:" + authHuaweiId.getDisplayName());
        6.     }
        7. });
    
    

如果授权失败，可能是用户之前未进行过登录授权，应用可自行确认是否需要调用[HuaweiIdAuthService](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthservice)的[getSignInIntent](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthservice#getSignInIntent)方法显式拉起登录授权页面。
      
      1. task.addOnFailureListener(new OnFailureListener() {
        2.     @Override
        3.     public void onFailure(Exception e) {      
        4.         //登录失败，您可以尝试使用getSignInIntent()方法显式登录
        5.         if (e instanceof ApiException) {
        6.              ApiException apiException = (ApiException)e;
        7.              Log.i(TAG, "sign failed status:" + apiException.getStatusCode());
        8.         }
        9.     }
        10.  });
    
    

# 5\. 华为帐号取消授权

## 5.1 场景介绍

为了提升应用隐私安全，应用可以提供入口，供用户取消对应用的授权。

## 5.2 业务流程

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200117165547.78426735217426050040116160064321:50510611090058:2800:86EB0B24BA2AE9E9222B98545E177EB3827E42BFA3C9C33001CF61F306B44B19.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)

1、用户在已经登录应用并授权，在应用中执行取消授权。

2、应用调用[HuaweiIdAuthService.cancelAuthorization](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthservice#cancelAuthorization)方法向HUAWEI Account SDK请求取消授权。

3、HUAWEI Account SDK清理华为帐号授权信息后向应用返回取消结果。

## 5.3 开发步骤

华为帐号注销授权功能涉及应用的关键开发步骤如下：

1、应用设置取消授权入口，此部分由应用自行开发。

2、应用调用[HuaweiIdAuthService.cancelAuthorization](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-huaweiIdauthservice#cancelAuthorization)方法，并处理返回结果。
      
      1. //service为登录授权时使用getService方法生成的HuaweiIdAuthService实例
        2. service.cancelAuthorization().addOnCompleteListener(new OnCompleteListener<Void>() {
        3.     @Override
        4.     public void onComplete(Task<Void> task) {  
        5.         if (task.isSuccessful()) {   
        6.             //取消授权成功后的处理      
        7.             Log.i(TAG, "onSuccess: ");
        8.         } else {       
        9.             //异常处理       
        10.             Exception exception = task.getException();       
        11.             if (exception instanceof ApiException){          
        12.                 int statusCode = ((ApiException) exception).getStatusCode();
        13.                 Log.i(TAG, "onFailure: " + statusCode);
        14.             }
        15.         }
        16.     }
        17.  });
    
    

# 6\. 自动读取短信验证码（可选）

## 6.1 场景介绍

如果您的应用需要用户输入手机号并通过短信验证码核实用户身份，可以通过集成ReadSmsManager服务，使您的应用在无需申请短信读取权限的前提下具备自动读取针对您应用的短信验证码的能力。用户在验证过程中可以省去手动输入短信验证码的操作，从而极大提升用户的使用体验。

## 6.2 业务流程

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200324152321.50886918801175807095806224806289:50510611090058:2800:28977C2804B09252F4C33EA1A1E2E5E0E6CF027DCC76DFAA2EBD43DBEC2CB913.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)

1、用户在应用客户端需要验证手机号的界面中输入手机号，并请求获取验证码。

2、应用调用[ReadSmsManager.start(Activity activity)](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-readsmsmanager#start)方法向HUAWEI Account SDK请求开启读取短信服务，HUAWEI Account SDK将请求发送到HMS Core（APK）。

3、HMS Core（APK）开启读取短信服务，并通过HUAWEI Account SDK向应用客户端返回开启结果。

4、应用客户端将用户手机号传递给应用服务端。

5、应用服务端根据手机号生成短信验证码，并且按照[一定格式的短信模板](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-readsmsmanager#messagerule)发送短信到用户手机。

6、HMS Core（APK）监听短信，校验短信与应用客户端的匹配，将符合规则的短信通过定向广播的方式发送给应用客户端。

7、应用客户端收到HMS Core（APK）发送的定向内容，解析出短信验证码，并在应用界面中展示读取到的验证码。

8、用户确认验证码无误后确认发送验证码请求。

9、应用客户端将用户发送的验证码发送给应用服务端验证。

10、应用服务端确认验证码无误后向应用客户端返回验证结果。

## 6.3 注意事项

●  ReadSmsManager提供了完全自动化的用户体验，但是它也要求开发者在短信消息体中设置一个自定义的hash值，如果开发者不是该消息的发送者，那么不建议使用ReadSmsManager。

●  HMS Core（APK）需要用户授予移动设备的短信读取权限，应用客户端已不需要申请短信的接收和读取权限。

## 6.4 开发步骤

自动读取短信验证码功能涉及应用的关键开发步骤如下：

1、应用调用[ReadSmsManager.start(Activity activity)](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/account-readsmsmanager#start)方法请求开启短信读取服务。
      
      1. Task<Void> task = ReadSmsManager.start(MainActivity.this);
        2. task.addOnCompleteListener(new OnCompleteListener<Void>() {
        3.     @Override
        4.     public void onComplete(Task<Void> task) {
        5.         if (task.isSuccessful()) {
        6.             // 开启服务成功，可以继续后续流程
        7.             doSomethingWhenTaskSuccess();
        8.         }
        9.     }
        10. });
    
    

2、应用客户端将手机号发送给应用服务端，应用服务端生成一条验证消息，并通过SMS将其发送到用户的手机号。此部分由开发者自行完成。

3、当用户的设备接收到验证消息时，HMS会显式地向应用客户端发送广播，intent里面包含消息的文本。应用客户端可以使用广播接收此验证消息。
      
      1. public class MySMSBroadcastReceiver extends BroadcastReceiver {
        2.     @Override
        3.     public void onReceive(Context context, Intent intent) {
        4.         Bundle bundle = intent.getExtras();
        5.         if (bundle != null) {
        6.             Status status = bundle.getParcelable(ReadSmsConstant.EXTRA_STATUS);
        7.             if (status.getStatusCode() == CommonStatusCodes.TIMEOUT) {
        8.                 // 服务已经超时，未读取到符合要求的短信，服务关闭
        9.                 doSomethingWhenTimeOut();
        10.             } else if (status.getStatusCode() == CommonStatusCodes.SUCCESS) {
        11.                 if (bundle.containsKey(ReadSmsConstant.EXTRA_SMS_MESSAGE)) {
        12.                     // 服务读取到了符合要求的短信，服务关闭
        13.                     doSomethingWhenGetMessage(bundle.getString(ReadSmsConstant.EXTRA_SMS_MESSAGE));
        14.                 }
        15.             }
        16.         }
        17.     }
        18. }
    
    

应用客户端读取到验证消息的文本后，可以使用正则表达式或其他逻辑从消息中获得验证码，验证码的格式由应用客户端和服务端自行定义。

# 7\. AppTouch ID服务开发指南

## 7.1 场景介绍

AppTouch ID是基于AppTouch平台开放的帐号服务。AppTouch是指由华为提供技术支持的、由第三方（例如电信运营商）运营的、向最终用户展示、分发或推广应用和内容等产品的平台。

如果您想了解AppTouch帐号服务，请参考[AppTouch ID服务开发指南](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/account-2b2c-guide-v4)。

注意：

AppTouch ID未发布，待发布后此接口可用。
