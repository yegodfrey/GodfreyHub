---
name: document/cn/AppGallery-connect-References/agcauthexception-0000001054083804
title: AGCAuthException
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcauthexception-0000001054083804
---

# AGCAuthException

|Exception Info|
|:----------------------------------------------------------------------------------------------------------------------|
|public class AGCAuthException extends Exception 捕捉 AGConnect Auth SDK 的异常，其中 2038XXXXX 的错误码为后端服务器的错误信息，其他的为 SDK 内部错误信息。|

## Public Constructor Summary

|Constructor Name And Description|
|:-----------------------------------------------------------------------------------------------|
|[AGCAuthException](#section1449134615189)(String msg, int code) 默认构造函数。|
|[AGCAuthException](#section582353913236)(BaseResponse baseResponse) 根据Http请求返回的Response所构造的异常函数。|

## Public Constructors

### AGCAuthException(String msg, int code)

默认构造函数。

**Parameters**

|Name|Description|
|:---|:----------|
|msg|异常消息。|
|code|异常错误码。|

**错误码**

|类型|错误码|错误码值|说明|
|:----------------------|:------------------------------------|:--------|:-------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int|NULL_TOKEN|1|AccessToken为空，建议重新登录。|
|public static final int|NOT_SIGN_IN|2|未登录时去获取AccessToken信息。|
|public static final int|USER_LINKED|3|用户已经关联此Provider。|
|public static final int|USER_UNLINKED|4|用户尚未关联此Provider。|
|public static final int|ALREADY_SIGN_IN_USER|5|已经使用一个账号登录，在未登出情况下使用此账号或者其他账号登录。|
|public static final int|EMAIL_VERIFICATION_IS_EMPTY|6|邮件验证码为空。|
|public static final int|PHONE_VERIFICATION_IS_EMPTY|7|电话验证码为空。|
|public static final int|USER_CANCEL|100|用户取消登录。|
|public static final int|AUTH_MODE_NOT_SUPPORTED|101|认证方式不支持，开发者检查login接口输入的name是否正确。|
|public static final int|GET_MAIN_ACTIVITY_ERROR|102|获取主activity失败，开发者需要在onCreate中调用AGConnectApi.getInstance().activityLifecycle().onCreate。|
|public static final int|INIT_GOOGLE_CLIENT_ERROR|103|初始化谷歌客户端失败。|
|public static final int|INVALID_EMAIL|203817223|输入的邮箱地址不合法。|
|public static final int|INVALID_PHONE|203817224|输入的手机号码不合法。|
|public static final int|GET_UID_ERROR|203817728|获取用户id失败。|
|public static final int|UID_PRODUCTID_NOT_MATCH|203817729|用户id和产品id不匹配。|
|public static final int|GET_USER_INFO_ERROR|203817730|获取用户信息失败。|
|public static final int|AUTH_METHOD_NOT_SUPPORT|203817732|当前Auth微服务部署了4个局点，每个局点支持的认证方式不同。|
|public static final int|PRODUCT_STATUS_ERROR|203817744|产品没有开通认证服务。|
|public static final int|PASSWORD_VERIFICATION_CODE_OVER_LIMIT|203817811|密码验证码次数超过限制。|
|public static final int|INVALID_TOKEN|203817984|Client Token 不可用。|
|public static final int|INVALID_ACCESS_TOKEN|203817985|Access Token 不可用。|
|public static final int|INVALID_REFRESH_TOKEN|203817986|Refresh Token 不可用。 用户的Refresh Token 过期，重新登录，获取新的Refresh Token。|
|public static final int|TOKEN_AND_PRODUCTID_NOT_MATCH|203817987|Token和Product Id不匹配，建议检查agconnect-services.json是否与平台上申请的信息一致。|
|public static final int|AUTH_METHOD_IS_DISABLED|203817988|不支持的认证方式。|
|public static final int|FAIL_TO_GET_THIRD_USER_INFO|203817989|获取第三方用户信息失败。|
|public static final int|FAIL_TO_GET_THIRD_USER_UNION_ID|203817990|获取第三方Union id失败。|
|public static final int|ACCESS_TOKEN_OVER_LIMIT|203817991|AccessToken数量超过了限定数量，配额是每个项目每个用户每小时500个。|
|public static final int|FAIL_TO_USER_LINK|203817992|link用户失败。|
|public static final int|FAIL_TO_USER_UNLINK|203817993|unlink用户失败。|
|public static final int|ANONYMOUS_SIGNIN_OVER_LIMIT|203818019|同一IP下的匿名用户登录超过限制，配额是每小时100个请求。|
|public static final int|INVALID_APPID|203818020|appid 不可用。|
|public static final int|INVALID_APPSECRET|203818021|app secret 不可用。|
|public static final int|GET_QQ_USERINFO_ERROR|203818023|获取qq 第三方用户信息失败。|
|public static final int|QQINFO_RESPONSE_IS_NULL|203818024|获取QQInfo 返回为空。|
|public static final int|GET_QQ_UID_ERROR|203818025|获取QQ uid 返回为空。|
|public static final int|PASSWORD_VERIFY_CODE_ERROR|203818032|密码和验证码错误。|
|public static final int|GOOGLE_RESPONSE_NOT_EQUAL_APPID|203818033|GOOGLE返回信息与appid不匹配。|
|public static final int|SIGNIN_USER_STATUS_ERROR|203818036|用户被CP停用。|
|public static final int|SIGNIN_USER_PASSWORD_ERROR|203818037|用户密码错误。|
|public static final int|PROVIDER_USER_HAVE_BEEN_LINKED|203818038|提供者已经被其他用户绑定。|
|public static final int|PROVIDER_HAVE_LINKED_ONE_USER|203818039|账号中该提供者类型已经被绑定过。|
|public static final int|FAIL_GET_PROVIDER_USER|203818040|获取提供者用户失败。|
|public static final int|CANNOT_UNLINK_ONE_PROVIDER_USER|203818041|不能对单一的提供者做unlink操作。|
|public static final int|VERIFY_CODE_INTERVAL_LIMIT|203818048|在发送间隔内发送验证码。|
|public static final int|VERIFY_CODE_EMPTY|203818049|验证码为空。|
|public static final int|VERIFY_CODE_LANGUAGE_EMPTY|203818050|验证码发送语言为空。|
|public static final int|VERIFY_CODE_RECEIVER_EMPTY|203818051|验证码接收器为空。|
|public static final int|VERIFY_CODE_ACTION_ERROR|203818052|验证码类型为空。|
|public static final int|VERIFY_CODE_TIME_LIMIT|203818053|验证码发送次数超过限制。|
|public static final int|ACCOUNT_PASSWORD_SAME|203818064|用户名密码一致。|
|public static final int|PASSWORD_STRENGTH_LOW|203818065|密码强度太低。|
|public static final int|UPDATE_PASSWORD_ERROR|203818066|更新密码失败。|
|public static final int|PASSWORD_SAME_AS_BEFORE|203818067|密码与老密码相同。|
|public static final int|PASSWORD_IS_EMPTY|203818068|密码为空。|
|public static final int|PASSWORD_LENGTH_ERROR|203818071|密码长度错误，请在AGC"认证服务-配置"页面确认密码复杂度。|
|public static final int|SENSITIVE_OPERATION_TIMEOUT|203818081|敏感操作的最近登录时间超时，请参见[账号重认证](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-android-reauthenticate-0000001127287737)。|
|public static final int|ACCOUNT_HAVE_BEEN_REGISTERED|203818082|账号已经被注册。|
|public static final int|UPDATE_ACCOUNT_ERROR|203818084|更新账号失败。|
|public static final int|USER_NOT_REGISTERED|203818087|用户没有注册。|
|public static final int|VERIFY_CODE_ERROR|203818129|验证码错误。|
|public static final int|USER_HAVE_BEEN_REGISTERED|203818130|用户已经被注册。|
|public static final int|REGISTER_ACCOUNT_IS_EMPTY|203818132|注册账号为空。|
|public static final int|VERIFY_CODE_FORMAT_ERROR|203818134|验证码格式错误。|
|public static final int|VERIFY_CODE_AND_PASSWORD_BOTH_NULL|203818135|验证码和密码都为空。|
|public static final int|SEND_EMAIL_FAIL|203818240|发送邮件失败。|
|public static final int|SEND_MESSAGE_FAIL|203818241|发送短信失败。|
|public static final int|CONFIG_LOCK_TIME_ERROR|203818261|密码/验证码最大尝试次数超过设定值后对账号进行冻结处理，冻结期间用户无法使用该账号进行密码验证/验证码验证。|

### AGCAuthException(BaseResponse baseResponse)

根据请求响应的构造函数。

**Parameters**

|Name|Description|
|:-----------|:----------|
|baseResponse|网络请求响应。|

