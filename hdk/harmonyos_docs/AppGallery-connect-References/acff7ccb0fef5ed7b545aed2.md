---
name: document/cn/AppGallery-connect-References/phoneauthprovider-0000001054083788
title: PhoneAuthProvider
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/phoneauthprovider-0000001054083788
---

# PhoneAuthProvider

|Class Info|
|:-----------------------------------------------------|
|public class PhoneAuthProvider extends Object 手机凭证提供者。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:----------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|static [AGConnectAuthCredential](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agconnectauthcredential-0000001054802472)|[credentialWithPassword](#section76521732214)(String countryCode,String phoneNumber, String password) 通过手机号和密码获取凭证。|
|static [AGConnectAuthCredential](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agconnectauthcredential-0000001054802472)|[credentialWithVerifyCode](#section79451137232)(String countryCode,String phoneNumber, String password, String verifyCode) 通过手机号和验证码获取凭证。|
|static Task<[VerifyCodeResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/verifycoderesult-0000001054083802)>|[requestVerifyCode](#section14619414125812)(String countryCode, String phoneNumber, VerifyCodeSettings settings) 手机号申请验证码。 此方法已废弃，请调用[AGConnectAuth. requestVerifyCode](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agconnectauth-0000001054482530#section17501913124213)(String countryCode, String phoneNumber, VerifyCodeSettings settings)|
|static void|[verifyPhoneCode](#section152201139172417)(String countryCode, String phoneNumber, VerifyCodeSettings settings, VerifyCodeSettings.OnVerifyCodeCallBack callBack） 手机号申请验证码。 此方法已废弃，请调用[AGConnectAuth. requestVerifyCode](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agconnectauth-0000001054482530#section17501913124213)(String countryCode, String phoneNumber, VerifyCodeSettings settings)|

## Public Methods

### credentialWithPassword

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static [AGConnectAuthCredential](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agconnectauthcredential-0000001054802472) credentialWithPassword(String countryCode,String phoneNumber,String password) 通过手机号和密码获取凭证。 如果需要关联Phone账号，为了确保Phone账号为您所有，请调用[credentialWithVerifyCode](#section79451137232)(String countryCode,String phoneNumber, String password, String verifyCode)接口。|

**Parameters**

|Name|Description|
|:----------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|countryCode|国家码。是指国际电话区号，例如中国为86，德国49，俄罗斯7，新加坡65。 本字段支持多种格式（以中国为例）：86，+86。|
|phoneNumber|手机号。需要去掉"+"号 和国家（地区）码，例如：+86132xxxxxxxx，则取值132xxxxxxxx。|
|password|密码。 默认密码规则如下，若您参考[安全配置](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-security-configuration-0000001324925609)自定义了密码复杂度请满足自定义的复杂度： 1. 密码长度至少8个字符； 2. 密码必须包含如下至少两种字符的组合： * 至少一个小写字母； * 至少一个大写字母； * 至少一个数字； * 至少一个特殊字符：`!@#$%^&*()-_=+\|[{}];:'",<.>/? 和空格。 3. 密码不能和手机号码或者邮箱一样。|

**Return**

|Type|Description|
|:----------------------|:------------|
|AGConnectAuthCredential|AGConnect 凭证。|

### credentialWithVerifyCode

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static [AGConnectAuthCredential](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agconnectauthcredential-0000001054802472) credentialWithVerifyCode(String countryCode,String phoneNumber, String password, String verifyCode) 通过手机号和验证码获取凭证。 如果verifyCode为空，此函数会调用credentialWithPassword接口。 Link操作时，verifyCode必填。|

**Parameters**

|Name|Description|
|:----------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|countryCode|国家码。是指国际电话区号，例如中国为86，德国49，俄罗斯7，新加坡65。 本字段支持多种格式（以中国为例）：86，+86。|
|phoneNumber|手机号码。需要去掉"+"号 和国家（地区）码，例如：+86132xxxxxxxx，则取值132xxxxxxxx。|
|password|密码（可以为空）。 默认密码规则如下，若您参考[安全配置](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-security-configuration-0000001324925609)自定义了密码复杂度请满足自定义的复杂度： 1. 密码长度至少8个字符； 2. 密码必须包含如下至少两种字符的组合： * 至少一个小写字母； * 至少一个大写字母； * 至少一个数字； * 至少一个特殊字符：`!@#$%^&*()-_=+\|[{}];:'",<.>/? 和空格。 3. 密码不能和手机号码或者邮箱一样。|
|verifyCode|验证码。|

**Return**

|Type|Description|
|:----------------------|:-----------|
|AGConnectAuthCredential|AGConnect凭证。|

### requestVerifyCode

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static Task<[VerifyCodeResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/verifycoderesult-0000001054083802)> requestVerifyCode(String countryCode, String phoneNumber, VerifyCodeSettings settings) 申请手机的验证码。 此方法已废弃，请调用[AGConnectAuth. requestVerifyCode](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agconnectauth-0000001054482530#section17501913124213)(String countryCode, String phoneNumber, VerifyCodeSettings settings)|

**Parameters**

|Name|Description|
|:----------|:-------------------------------------------------------------|
|countryCode|国家码。是指国际电话区号，例如中国为86，德国49，俄罗斯7，新加坡65。 本字段支持多种格式（以中国为例）：86，+86。|
|phoneNumber|手机号。需要去掉"+"号 和国家（地区）码，例如：+86132xxxxxxxx，则取值132xxxxxxxx。|
|settings|验证码属性的配置，包括验证码应用场景（注册登录或者重置密码），发送验证码的语言，发送验证码的时间间隔。|

**Return**

|Type|Description|
|:---------------------|:---------------------------|
|Task<VerifyCodeResult>|VerifyCodeResult的异步返回Task对象。|

### verifyPhoneCode

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static void verifyPhoneCode(PhoneNumber phoneNumber, VerifyCodeSettings settings, VerifyCodeSettings.OnVerifyCodeCallBack callBack) 申请手机的验证码。 此方法已废弃，请调用[AGConnectAuth. requestVerifyCode](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agconnectauth-0000001054482530#section17501913124213)(String countryCode, String phoneNumber, VerifyCodeSettings settings)|

**Parameters**

|Name|Description|
|:----------|:-------------------------------------------------------------|
|countryCode|国家码。是指国际电话区号，例如中国为86，德国49，俄罗斯7，新加坡65。 本字段支持多种格式（以中国为例）：86，+86。|
|phoneNumber|手机号。需要去掉"+"号 和国家（地区）码，例如：+86132xxxxxxxx，则取值132xxxxxxxx。|
|settings|验证码属性的配置，包括验证码应用场景（注册登录或者重置密码），发送验证码的语言，发送验证码的时间间隔。|
|callBack|申请验证码异步回调结果。|

