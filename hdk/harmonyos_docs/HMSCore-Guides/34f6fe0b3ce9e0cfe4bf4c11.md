---
name: document/cn/HMSCore-Guides/accountservertool-summary-0000001116343162
title: accountservertool.jar工具包使用说明
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/accountservertool-summary-0000001116343162
---

# accountservertool.jar工具包使用说明

## 场景介绍

[accountservertool.jar](https://github.com/HMS-Core/huawei-account-demo/blob/java_accountservertool/accountservertool-1.0.jar)提供了基于Java语言的Authorization Code模式服务器端REST接口的封装和ID Token模式服务器端校验工具类，让您快速完成服务器端代码开发，您也可以参见[accountservertool样例代码](https://github.com/HMS-Core/huawei-account-demo/tree/java_accountservertool/AccountServerTool_Java)用自己的方式实现对应功能。具体方法如下：

|**序号**|**方法**|**使用场景**|
|:-----|:--------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|1|AuthCodeUtil.getTokensByCode(String code, String appId, String appSecret, String redirectUri)|Authorization Code模式下使用，根据Code换取Access Token和Refresh Token，详细REST接口信息请参见[获取凭证Access Token](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/account-obtain-token_hms_reference-0000001050048618)。|
|2|AuthCodeUtil.parseAccessToken(String accessToken)|Authorization Code模式下使用，解析Access Token，详细REST接口信息请参见[解析凭证Access Token](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/account-gettokeninfo-0000001050050585)。|
|3|AuthCodeUtil.updateAccessToken(String refreshToken, String appId, String appSecret)|Authorization Code模式下使用，使用Refresh Token 刷新Access Token，详细REST接口信息请参见[获取凭证Access Token](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/account-obtain-token_hms_reference-0000001050048618)。|
|4|AuthCodeUtil.getUserInfos(String accessToken, String getNickName)|Authorization Code模式下使用，使用Access Token获取用户信息，详细REST接口信息请参见[获取用户信息](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/get-user-info-0000001060261938)。|
|5|IdTokenUtil.getUserInfosByIdToken(String idToken, String appId)|ID-Token模式下服务器校验ID Token使用，如果校验通过从ID Token中解析出用户信息。|

## Code模式调用示例

```screen
public class AuthCodeDemo {
    private static final Logger logger = LoggerFactory.getLogger(AuthCodeDemo.class);
    /**
     * your client id
     */
    private static final String appId = "10436***3";
    /**
     * your client secret
     */
    private static final String appSecret = "600746***8784e5dc00106f956cdcb652136b658bff71d5910ba5d31d";
    /**
     * your redirect uri
     */
    private static final String redirectUri = "https://com.hxb.codemodeldemo1";
    /**
     * you can configurate getNickName parameter as 0/1
     */
    private static final int getNickName = 0;

    private static String accessToken = "";

    private static String refreshToken = "";

    public static void main(String[] args) {
        /**
         * your code get from client
         */
        String code = "DQB6e3x***zYd9jsctUU2NJkqowd5PrTEWKe4i7hNPSiZKZKjZFXm+UvGPJ1Pephy9UulKDhXbkz6omXzzMJFduZ7YTtfmQh";
        getAccessToken(code, appId, appSecret, redirectUri);
        getUserInfos(getNickName);
    }

    private static void getAccessToken(String code, String appId, String appSecret, String redirectUri) {
        ResponseInfos tokensByCode = null;
        tokensByCode = AuthCodeUtil.getTokensByCode(code, appId, appSecret, redirectUri);
        if (tokensByCode == null) {
            logger.error("get tokens by code failed");
            return;
        }
        JSONObject tokensByCodeRespBody = (JSONObject) JSON.parse(tokensByCode.getBody());
        // handle error code
        if (tokensByCode.getBody().contains(Constants.ERROR_FLAG)) {
            ErrorInfos errorInfos = tokensByCodeRespBody.toJavaObject(ErrorInfos.class);
            if (errorInfos.getError() == Constants.CODE_INVALID_ERROR
                    && (errorInfos.getSubError() == Constants.CODE_EXPIORE_SUBERROR
                    || errorInfos.getSubError() == Constants.CODE_IS_USED_SUBERROR)) {
                logger.error("code is invalid,please obtain it again!");
                //TODO you need get code again and use new code to get new access token,refresh token

            } else {
                logger.error("get access token by code error:" + errorInfos.toString());
            }
        } else {
            TokensEntity tokensEntity = tokensByCodeRespBody.toJavaObject(TokensEntity.class);
            accessToken = tokensEntity.getAccessToken();
            refreshToken = tokensEntity.getRefreshToken();
            //TODO accessToken and refreshToken need to persist

        }
    }

    private static void getUserInfos(int getNickName) {
        ResponseInfos userInfosByAccessToken = AuthCodeUtil.getUserInfos(accessToken, getNickName);
        if (userInfosByAccessToken == null) {
            return;
        }
        if (handeAccessTokenExpire(userInfosByAccessToken, refreshToken, appId, appSecret)) {
            userInfosByAccessToken = AuthCodeUtil.getUserInfos(accessToken, getNickName);
        }
        if (!userInfosByAccessToken.getBody().contains(Constants.ERROR_FLAG)
                && userInfosByAccessToken.getNspStatus() == Constants.NSP_STATUS_OK) {
            logger.info("get user infos by access token success!");
            JSONObject userInfosByAccessTokenRespBody = (JSONObject) JSON.parse(userInfosByAccessToken.getBody());
            UserInfos userInfos = userInfosByAccessTokenRespBody.toJavaObject(UserInfos.class);
            System.out.println(userInfos.toString());
            //TODO you can do what you want after you get user infos

        } else {
            logger.error("get user infos by access token error," + userInfosByAccessToken.toString());
        }
    }

    private static boolean handeAccessTokenExpire(ResponseInfos responseInfos, String refreshToken, String appId, String appSecret) {
        if (responseInfos.getNspStatus() == Constants.ACCESS_TOKEN_EXPIRE_ERROR
                || responseInfos.getNspStatus() == Constants.ACCESS_TOKEN_INVALID_ERROR) {
            ResponseInfos updateAccessTokenResp = AuthCodeUtil.updateAccessToken(refreshToken, appId, appSecret);
            if (updateAccessTokenResp.getBody().contains(Constants.ERROR_FLAG)) {
                ErrorInfos errorInfos = ((JSONObject) JSON.parse(updateAccessTokenResp.getBody())).toJavaObject(ErrorInfos.class);
                // handle error code when refresh token invalid
                handleRefreshTokenExpire(errorInfos);
            } else {
                TokensEntity tokensEntity = ((JSONObject) JSON.parse(updateAccessTokenResp.getBody())).toJavaObject(TokensEntity.class);
                accessToken = tokensEntity.getAccessToken();
            }
            return true;
        }
        return false;
    }

    private static void handleRefreshTokenExpire(ErrorInfos errorInfos) {
        if (errorInfos.getError() == Constants.REFRESH_TOKEN_INVALID_ERROR
                && (errorInfos.getError() == Constants.REFRESH_TOKEN_EXPIRE_SUBERROR
                || errorInfos.getError() == Constants.REFRESH_TOKEN_INVALID_SUBERROR)) {
            logger.error("refresh token is invalid,please obtain it again!");
            //TODO you need get refresh token again,and refresh access token

        } else {
            logger.error("update access token by refresh token error:" + errorInfos.toString());
        }
    }
}
```

全部样例代码请参见[github](https://github.com/HMS-Core/huawei-account-demo/blob/java_accountservertool/AccountServerTool_Java/src/main/java/com/huawei/hms/account/AuthCodeDemo.java)。

## ID Token服务端校验与解析示例

```screen
public class IdTokenDemo {
    public static void main(String[] args) {
        /**
        * your idToken
        */
        String idToken = "eyJra****iIzOTJkOWZiOWI0NDU1NWM3MDJjNzZmZDIzODgxZjg2ODEyZjliZTcyMzkxYjViYzFiNDAyNjM1NTY4N2U2OWEzIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJhdF9oYXNoIjoiUHhkdVcyZHJ";
        /**
        * your client id
        */
        String appId = "104***83";
        String userInfos = IdTokenUtil.getUserInfosByIdToken(idToken, appId);
        if (userInfos == null) {
            //TODO id token invalid, first,you should get a new id token,second, use getUserInfosByIdToken(idToken,appId) again.
        } else {
            //TODO do what you want after get user infos,for example,print log
            System.out.println(userInfos);
        }
    }
}
```

全部样例代码请参见[github](https://github.com/HMS-Core/huawei-account-demo/blob/java_accountservertool/AccountServerTool_Java/src/main/java/com/huawei/hms/account/IdTokenDemo.java)。
