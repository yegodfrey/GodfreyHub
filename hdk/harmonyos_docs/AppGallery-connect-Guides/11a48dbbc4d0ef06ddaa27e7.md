---
name: document/cn/AppGallery-connect-Guides/agc-auth-client-rest-associated-0000001323137626
title: 关联账号
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-client-rest-associated-0000001323137626
---

# 关联账号

您可以将身份验证提供方凭据关联至现有用户账号，允许用户使用多个身份验证提供方服务登录您的应用。无论用户使用哪个账号登录，均可通过同一AGC用户ID识别用户。例如，使用手机账号登录的用户可以关联邮箱账号，以后便可使用这两种方法中的任意一种登录。

您也可以取消身份验证提供方与用户账号的关联，以便用户不再使用该身份验证提供方进行登录。

## 前提条件

* 您已[创建项目](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-creat-project-and-app-0000001324725529#section61519217307)。
* 您已[开通认证服务](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-enable-service-0000001274125746#section260491731716)，并已[启用认证方式](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-enable-authentication-method-0000002417916829)。
* 您已[获取客户端API授权](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-obtain-client-apiauthorization-0000001453744605)。

## 开发步骤

1. 调用[用户关联](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/client-rest-auth-userlink-0000001346909381)接口，进行账号关联。

   ```screen
    /**
        * 用户关联
        *
        * @param token API客户端通过AGC平台鉴权后获得的访问API的鉴权凭据
        * @param clientId 客户端ID     
        * @param productId 项目ID
        * @param accessToken 登录接口返回的用户鉴权凭据
        * @param phone 用户账号
        * @return 接口结果
        * @throws IOException 异常
        */
       public static UserLinkRsp userLink(String token, String clientId, String productId, String accessToken, String phone)
           throws IOException {
           UserSigninReq userSigninReq =
               new UserSigninReq()
                   .tokenSet(phone)
   //                .tokenSet("+86-18112345678")
                   .providerSet(11)
                   .extraDataSet("{\"password\":\"xxxxxxxx\"}")
                   .autoCreateUserSet(0);

           HttpClient client = HttpClients.createDefault();

           HttpPost httpPost = new HttpPost("https://connect-drcn.dbankcloud.cn/agc/apigw/oauth2/third/v1/user-link?productId=" + productId);

           httpPost.setEntity(new StringEntity(JSON.toJSONString(userSigninReq), Charset.forName("UTF-8")));

           httpPost.setHeader("Accept", "application/json");
           httpPost.setHeader("Content-Type", "application/json;charset=utf-8");
           httpPost.setHeader("client_id", clientId);
           httpPost.setHeader("Authorization", "Bearer " + token);
           httpPost.setHeader("access_token", accessToken);

           HttpResponse response = client.execute(httpPost);
           return JSON.parseObject(IOUtils.toString(response.getEntity().getContent(), StandardCharsets.UTF_8),
               UserLinkRsp.class);
       }
   ```

2. 调用[取消关联](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/client-rest-auth-unlink-0000001294229000)接口，取消账号关联。

   ```screen
    /**
        *
        *
        * @param token API客户端通过AGC平台鉴权后获得的访问API的鉴权凭据
        * @param clientId 客户端ID     
        * @param productId 项目ID
        * @param accessToken 登录接口返回的用户鉴权凭据
        * @param provider 账号授权提供方
        * @return 接口结果
        * @throws IOException 异常
        */
       public static AuthOperateRsp userUnLink(String token, String clientId, String productId, String accessToken,
           int provider) throws IOException {
           HttpClient client = HttpClients.createDefault();

           HttpPost httpPost = new HttpPost("https://connect-drcn.dbankcloud.cn/agc/apigw/oauth2/third/v1/user-unlink?productId=" + productId + "&provider=" + provider);

           httpPost.setHeader("Accept", "application/json");
           httpPost.setHeader("Content-Type", "application/json;charset=utf-8");
           httpPost.setHeader("client_id", clientId);
           httpPost.setHeader("Authorization", "Bearer " + token);
           httpPost.setHeader("access_token", accessToken);

           HttpResponse response = client.execute(httpPost);
           return JSON.parseObject(IOUtils.toString(response.getEntity().getContent(), StandardCharsets.UTF_8),
               AuthOperateRsp.class);
       }
   ```

## 更多信息

* 当用户不需要使用应用，或者需要切换其他账号登录认证，可以先执行[登出](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-client-rest-logout-0000001374297641)。
* 当用户需要注销当前用户，可以进行[销户](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-client-rest-delete-0000001374377325)。
* 对于销户、修改密码、关联账号以及重置手机账号和邮箱账号等敏感操作，为了提高安全性，需要用户必须在5分钟内登录过才能执行。如果用户执行敏感操作时登录超过5分钟，需要[账号重认证](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-client-rest-reauthen-0000001323297306)后再执行敏感操作。
* 您可以参考[管理用户](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-user-manage-0000001606051705)对用户进行解锁、停用等操作。

