---
name: document/cn/HMSCore-Guides/web-refresh-access-token-0000001050048952
title: 更新凭证
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/web-refresh-access-token-0000001050048952
---

# 更新凭证

Access Token存在有效期（有效期1小时），过期后则不可用，如果继续调用会导致鉴权失败。因此建议应用在发起[接入华为帐号](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/web-get-access-token-0000001050048946#section1139031473110)时，增加access_type=offline的入参，则在生成Access Token的同时，也生成Refresh Token。

其中Refresh Token的有效期较长（有效期180天），在有效期内，应用可直接通过Refresh Token调用OAuth服务的https://oauth-login.cloud.huawei.com/oauth2/v3/token接口获取新的Access Token，避免重新弹出用户授权页面去引导用户再次进行登录授权。

**请求示例**

请通过POST方式调用，示例如下：

```screen
POST /oauth2/v3/token HTTP/1.1
Host: oauth-login.cloud.huawei.com
Content-Type: application/x-www-form-urlencoded
 
grant_type=refresh_token&
client_id=<APP ID>&
client_secret=<APP SECRET>&
refresh_token=<已经授权获取的Refresh Token>
```

|参数名称|必选(M)/可选(O)|参数说明|
|:------------|:----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|grant_type|M|OAuth 2.0规范定义的字段，更新凭证时必须为"refresh_token"。|
|refresh_token|M|应用获取到并进行存储的Refresh Token。|
|client_id|M|[开发准备](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/web-preparations-0000001050050891)中创建的服务器应用的APP ID。对于AppGallery Connect类应用，该值为应用中OAuth 2.0客户端ID（凭据）的Client ID。|
|client_secret|M|[开发准备](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/web-preparations-0000001050050891)中给创建服务器应用ID分配的密钥APP SECRET。对于AppGallery Connect类应用，该值为应用中OAuth 2.0客户端ID（凭据）的Client Secret。|

**响应示例**

```screen
HTTP/1.1 200 OK
Content-Type: text/html;charset=UTF-8
Cache-Control: no-store
 
{
  "access_token": "<新的Access Token>",
  "expires_in": 3600,
  "id_token": "<返回的JWT格式的ID Token>",
  "scope": "profile openid",
  "token_type": "Bearer"
}
```

|参数名称|必选(M)/可选(O)|参数说明|
|:-----------|:----------|:----------------------------------------------------------|
|access_token|M|用户的Access Token。|
|expires_in|M|Access Token的剩余有效期，单位：秒。|
|scope|M|生成的Access Token中包含的scope。|
|token_type|M|固定返回Bearer，标识返回Access Token的类型。|
|id_token|M|返回[JWT格式数据](https://jwt.io/introduction/)，包含用户基本帐号、用户邮箱等信息。|

