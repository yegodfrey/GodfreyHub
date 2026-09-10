---
name: document/cn/HMSCore-Guides/auth-example-0000001054581058
title: 认证鉴权
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/auth-example-0000001054581058
---

# 认证鉴权

本章节展示应用如何通过客户端ID接入华为账号，生成凭证Access Token（简称AT/at），Access Token是调用华为公开API访问用户授权资源的必填参数。

生成AT的前提条件：开发者已在开发者联盟上申请了账号服务，开通Health Service Kit服务，应用申请的[数据权限](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/data_description-0000001467889369)已审批通过。

生成授权码（Authorization Code）场景示例：

原理：通过重定向用户浏览器（或手机/桌面应用中的浏览器组件）到https://oauth-login.cloud.huawei.com/oauth2/v3/authorize地址上，若有异常可参见[错误与异常机制](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/open-platform-error-0000001053869182)。重定向所需参数如下：  

|参数名称|是否必选|参数说明|
|:------------|:---|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|client_id|是|在开发者联盟上注册应用时获得的App ID。|
|response_type|是|此值固定为"code"。|
|redirect_uri|是|授权后要回调的URI，即接收Authorization Code的URI。如果用户在授权过程中取消授权，会回调该URI，并在URI末尾附上error=access_denied参数。redirect_uri必须与开发者注册应用时应用的产品服务\>账号\>回调地址相匹配。此处需要URLEncode编码。 在此地址后可添加单个其他参数为：https://www.thirdwebdemo.com/redirect_url?somearg=XXXXXX。|
|scope|是|一个字符串数组，以空格分开（URL编码后空格变为加号+），必须包含字符串"openid"，更多权限请参见[OAuth权限](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/steps-0000001177343435#section165119447225)。|
|state|否|随机串，用于防CSRF，在返回授权码Code时原封不动返回。|
|display|是|授权页面展示风格规则：PC端为"page"、移动端为"touch"。默认为"page"。|
|access_type|否|等于"offline"时取到的code，在接下来获取Access Token时，会一并返回refresh_token。|

参数详细说明：

redirect_uri：在上述申请账号服务时注册回调地址中所用的URL，如下图：

![](https://media:901788166608584401 "点击放大")

scope：在联盟上申请的权限，如https://www.huawei.com/healthkit/distance.read https://www.huawei.com/healthkit/distance.write等。

涉及多个权限，以空格隔开（URL编码后空格变为加号+)，URL编码后结果见下方调用示例。

调用示例：

```
https://oauth-login.cloud.huawei.com/oauth2/v3/authorize?response_type=code&state=state_parameter_passthrough_value&client_id=123456789&redirect_uri=https%3A%2F%2Fwww.example.com&scope=openid+https%3A%2F%2Fwww.huawei.com%2Fhealthkit%2Fheightweight.read+https%3A%2F%2Fwww.huawei.com%2Fhealthkit%2Fcalories.read&access_type=offline&display=touch
```

其中，clientId为123456789，redirect_uri（将回调地址https://www.example.com进行URLEncode编码）为https%3A%2F%2Fwww.example.com，

scope为openid+https%3A%2F%2Fwww.huawei.com%2Fhealthkit%2Fheightweight.read+https%3A%2F%2Fwww.huawei.com%2Fhealthkit%2Fcalories.read

access_type为offline，display为touch。

请求响应成功，用户登录之后，将会展现授权页面，如下图所示：

![](https://media:901788166608712402 "点击放大")  

#### 术语和缩略语清单

|术语/缩略语|英文描述|中文描述|
|:-----|:-----------------|:------------|
|code|Authorization Code|授权码。|
|at/AT|Access Token|访问令牌，授权token。|
|rt/RT|Refresh Token|更新令牌，刷新token。|

应用接入Health Service Kit采用OAuth 2.0协议的授权码模式（Authorization Code）进行授权：请参见[授权码模式（Authorization Code）场景示例](#section9339449355)。

* 生成授权码code。
* 使用授权码code生成用户鉴权凭证Access Token。
* Access Token失效后，使用Refresh Token换取Access Token。

#### 授权码模式（Authorization Code）场景示例

1. 生成授权码Code。

   <br />

   其获取方式是通过重定向用户浏览器（或手机/桌面应用中的浏览器组件）到https://oauth-login.cloud.huawei.com/oauth2/v3/authorize地址上，若有异常可参见[错误与异常机制](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/open-platform-error-0000001053869182)。参数列表如下：  

   |参数名称|是否必选|参数说明|
   |:------------|:---|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   |client_id|是|注册应用时获得的App ID。|
   |response_type|是|此值固定为"code"。|
   |redirect_uri|是|授权后要回调的URI，即接收Authorization Code的URI。如果用户在授权过程中取消授权，会回调该URI，并在URI末尾附上error=access_denied参数。redirect_uri必须与开发者注册应用时应用的产品服务\>账号\>回调地址相匹配。此处需要URLEncode编码。 在此地址后可添加单个其他参数为：https://www.thirdwebdemo.com/redirect_url?somearg=XXXXXX。|
   |scope|是|一个字符串数组，以空格分开（URL编码后空格变为加号+），必须包含字符串"openid" ，更多权限请参见[OAuth权限](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/steps-0000001177343435#section165119447225)。|
   |state|否|随机串，用于防CSRF，在返回授权码Code时原封不动返回。|
   |display|是|授权页面展示风格规则：PC端为"page"、移动端为"touch"。默认为"page"。|
   |access_type|否|等于"offline"时取到的code，在接下来获取Access Token时，会一并返回refresh_token。|

   例如："client_id"为"123456789"的应用要请求某个用户的"身高体重数据（https://www.huawei.com/healthkit/heightweight.read）"和"卡路里数据（https://www.huawei.com/healthkit/calories.read）"访问权限，并在授权后需跳转到 https://www.example.com，同时希望在弹出窗口中展现用户登录、授权界面，则应用需要重定向用户的浏览器到如下URL：

   ```
   https://oauth-login.cloud.huawei.com/oauth2/v3/authorize?response_type=code&state=state_parameter_passthrough_value&client_id=123456789&redirect_uri=https%3A%2F%2Fwww.example.com&scope=openid+https%3A%2F%2Fwww.huawei.com%2Fhealthkit%2Fheightweight.read+https%3A%2F%2Fwww.huawei.com%2Fhealthkit%2Fcalories.read&access_type=offline&display=touch
   ```

   请求响应成功，用户登录之后，将会展现授权页面，如下图所示：

   ![](https://media:901788166608874403 "点击放大")

   当用户在此页面同意授权后，授权服务则将重定向到用户浏览器到应用所指定的 "redirect_uri"，并携带授权服务所分配的授权码code，以及state参数（如果请求at时带了这个参数）。

   例如：继续上面的例子，假设授权服务在用户同意授权后生成的Authorization Code为"DQB6e3x9LAmTy2FrNSkgsWZxnzDsU75X9I93/o7S2GrErASX0nXSEVyGJAduOqH/RqmME9NSMYELXdIJz4YiYvI9w0hVbES7EfeEx2sepUBceh4/bUI1YXkawMUZle1o2NkirHK6aGOt/CRZxfGxu5DCqCRONnoAzMBWsXT6Hk0YnysyTZ1SEu5umDhKvWT+b5Fp2XoLtRr1mPlYmMvIKNnwc8PDv4B8RHRryIvGLCO+p2d+TMTnLwySoOX6sZ3XaQ0fGgZpymwhHAAMZEI74IFB/eGWlyvuPwa2MjRwF9/pzeVyjqg9gvwZ/VotYZzQiXbFBsEs+3DTXg=="，则授权服务将会返回如下响应包以重定向用户浏览器到"https://www.example.com"地址上：

   ```
   HTTP / 1.1 302 Found
   Location:https://www.example.com/?code=DQB6e3x9LAmTy2FrNSkgsWZxnzDsU75X9I93%2Fo7S2GrErASX0nXSEVyGJAduOqH%2FRqmME9NSMYELXdIJz4YiYvI9w0hVbES7EfeEx2sepUBceh4%2FbUI1YXkawMUZle1o2NkirHK6aGOt%2FCRZxfGxu5DCqCRONnoAzMBWsXT6Hk0YnysyTZ1SEu5umDhKvWT%2Bb5Fp2XoLtRr1mPlYmMvIKNnwc8PDv4B8RHRryIvGLCO%2Bp2d%2BTMTnLwySoOX6sZ3XaQ0fGgZpymwhHAAMZEI74IFB%2FeGWlyvuPwa2MjRwF9%2FpzeVyjqg9gvwZ%2FVotYZzQiXbFBsEs%2B3DTXg%3D%3D&state=state_parameter_passthrough_value
   ```

   <br />

2. 使用授权码Code获取AT。

   <br />

   通过上面步骤一获得code后，便可以用其换取一个at。获取方式是，应用在其服务端程序中发送请求（必须使用POST方式）到华为OAuth2.0授权服务的"https://oauth-login.cloud.huawei.com/oauth2/v3/token" 地址上，并带上以下5个请求参数：  

   |参数名称|是否必选|参数说明|
   |:------------|:---|:--------------------------------------------------------------|
   |grant_type|是|此值固定为"authorization_code"。|
   |code|是|通过上面第一步所获得的Authorization Code，只有5分钟有效期，并且用完一次就会失效。|
   |client_id|是|应用的App ID。|
   |client_secret|是|应用的Secret Key，在开发者联盟上查看。|
   |redirect_uri|是|该值必须与获取Authorization Code时传递的"redirect_uri"保持一致，即您注册应用时填写的回调地址。|

   请求示例

   ```
   POST /oauth2/v3/token HTTP/1.1
   Host: oauth-login.cloud.huawei.com
   Content-Type: application/x-www-form-urlencoded
   grant_type=authorization_code&code=DQB6e3x9LAmTy2FrNSkgsWZxnzDsU75X9I93%2Fo7S2GrErASX0nXSEVyGJAduOqH%2FRqmME9NSMYELXdIJz4YiYvI9w0hVbES7EfeEx2sepUBceh4%2FbUI1YXkawMUZle1o2NkirHK6aGOt%2FCRZxfGxu5DCqCRONnoAzMBWsXT6Hk0YnysyTZ1SEu5umDhKvWT%2Bb5Fp2XoLtRr1mPlYmMvIKNnwc8PDv4B8RHRryIvGLCO%2Bp2d%2BTMTnLwySoOX6sZ3XaQ0fGgZpymwhHAAMZEI74IFB%2FeGWlyvuPwa2MjRwF9%2FpzeVyjqg9gvwZ%2FVotYZzQiXbFBsEs%2B3DTXg%3D%3D&client_id=123456789&client_secret=0rDdfgyhytRtznPQSzr5pVw2&redirect_uri=http%3A%2F%2Fwww.example.com
   ```

   若参数无误，服务器将返回一段JSON文本，响应体参数如下表所示。若有异常可参见[错误与异常机制](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/open-platform-error-0000001053869182)。  

   |参数名称|是否必选|参数说明|
   |:------------|:---|:------------------------------------------------------------------------------------------------------------|
   |access_token|是|要获取的Access Token。|
   |expires_in|是|Access Token的有效期，以秒为单位。|
   |scope|是|生成的凭证Access Token中包含的scope。|
   |token_type|是|固定返回Bearer，标识返回凭证Access Token的类型。|
   |id_token|是|返回[JWT格式数据](https://jwt.io/introduction/)，包含用户基本账号、用户邮箱等信息。|
   |refresh_token|否|[步骤1](#ZH-CN_TOPIC_0000002516518878__li1118518134711)的入参中包含access_type=offline，则会返回此参数，该参数用于刷新凭证Access Token。|

   响应示例

   ```
   HTTP / 1.1 200 OK
   Content - Type: application / json
   Cache - Control: no - store
   {
       "access_token": "CgB6e3x9JTePMyIg7iCwKkNEvQFEkCYDrPGz7Y69Ddet+xkJgScC7Aay1/dIWmgFhnMCc4PPpa39hPhl0WaqL7pM59VeVWwqdV/1kNeCFR5ZZaZOxBfATd5qmlXXEMnZ3+okNU3YTAvQCshTJnmFfTcAKKJt0OgZoKz92Fd5iUUKheybhg==",
       "expires_in": 3600,
       "id_token": "eyJraWQiOiJkMWNhZWIyM2JmNDBhMGFlOWMwOTUzZWI0NjEzNzQ5MjhiYjVjZmNjYTJjODFkOGI3MDQxYzczMTVjNTEyMjBhIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYif",
       "refresh_token": "
   CgB6e3x9eIW+2aYelXZuZ361MviOwbbBTzFWglSTPwTzWY8MpWydocoU8bYxM253JQABPrR98G1z6hIT6QsoknGpND1eeJgvXfQzEJJJtRQvqFs9N6rmXSJMHOrRta3iXU1i9abcdygqtwgGOi017x5oITcYHAOx1lV4nDF0gqleySVtbg==",
       "scope": "https://www.huawei.com/healthkit/heightweight.read https://www.huawei.com/healthkit/calories.read",
       "token_type": "Bearer"
   }
   ```

   <br />

3. 通过RT获取AT。

   <br />

   使用Refresh Token刷新以获得新的Access Token，需要应用在其服务端发送请求（采用POST方法）到华为OAuth2.0授权服务的"https://oauth-login.cloud.huawei.com/oauth2/v3/token" 地址上，请求参数参见下表：  

   |参数名称|是否必选|参数说明|
   |:------------|:---|:-------------------------------|
   |grant_type|是|固定为"refresh_token"。|
   |refresh_token|是|用于刷新Access Token用的Refresh Token。|
   |client_id|是|应用的App ID。|
   |client_secret|是|应用的Secret Key，在开发者联盟上查看。|

   请求示例

   ```
   POST /oauth2/v3/token HTTP/1.1
   Host: oauth-login.cloud.huawei.com
   Content-Type: application/x-www-form-urlencoded
   grant_type=refresh_token&client_id=123456789&client_secret=0rDdfgyhytRtznPQSzr5pVw2&refresh_token=CgB6e3x9eIW+2aYelXZuZ361MviOwbbBTzFWglSTPwTzWY8MpWydocoU8bYxM253JQABPrR98G1z6hIT6QsoknGpND1eeJgvXfQzEJJJtRQvqFs9N6rmXSJMHOrRta3iXU1i9abcdygqtwgGOi017x5oITcYHAOx1lV4nDF0gqleySVtbg==
   ```

   <br />

   若参数无误，服务器将返回一段JSON文本，响应体参数如下表所示。若有异常可参见[错误与异常机制](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/open-platform-error-0000001053869182)。  

   |参数名称|参数说明|
   |:-----------|:----------------------|
   |access_token|要获取的Access Token。|
   |expires_in|Access Token的有效期，以秒为单位。|
   |scope|用户实际授予的权限列表。|
   |token_type|token类型，目前为"Bearer"。|

   响应示例

   ```
   HTTP / 1.1 200 OK
   Content - Type: application / json
   Cache - Control: no - store
   {
       "access_token": "CgB6e3x9bueBVjXcB+bG0idRpaXj7d9wE5GfP3QeRrn8XeDzHXWodCOT2ks7hYtSrz/HcZ6i51jtxK33i+CgC5wAh6Q88MsXldhyDUHNUnmItqUghYYVoc+YNSaZpCAcb1oy3u6cliUmS4F/gka03imZ+CWiGBEHJjO1Nlnu2bsE4EbVgg==",
       "expires_in": 3600,
       "scope": "https://www.huawei.com/healthkit/heightweight.read https://www.huawei.com/healthkit/calories.read",
       "token_type": " Bearer"
   }
   ```

   ![](https://media:901788166608992404)  
   RT失效异常场景请开发者进行重新授权处理，具体请参见FAQ：[refresh_token什么场景下会过期，如何处理](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/faq-0000001476980529#section5559510131914)。

   <br />

#### Refresh Token授权管理

用户级Access Token存在有效期，过期后不可用，如果继续调用访问用户授权的数据，会导致鉴权失败。在授权码模式中，在生成Access Token的同时也生成Refresh Token（注意：二者不可替用）。Refresh Token的有效期较长（当前默认有效期180天），在有效期内，应用可直接通过Refresh Token调用OAuth服务的接口（https://oauth-login.cloud.huawei.com/oauth2/v3/token），获取新的Access Token，避免重新弹出用户授权页面去引导用户再次进行登录授权。

当以下场景时，会导致Refresh Token立即过期：

* 修改密码
* 冻结账号
* 变更、删除账号
* 销户
* 删除设备（设备挤掉）， 用户删除单个设备
* 客户端APK退出， 用户从当前手机客户端APK（设备）退出
* 退出当前浏览器， 用户从当前浏览器退出
* 退出全部浏览器

如果RT过期，刷新AT时，返回主错误码为1203，子错误码为11205或31204，具体描述请参见[错误与异常机制](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/open-platform-error-0000001053869182)，此时开发者须标记RT过期，在下次用户登录授权时，重走认证授权流程。  

#### 鉴权信息查询接口

详情请参见华为账号服务[解析凭证Access Token](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/account-gettokeninfo-0000001050050585)章节。

更多OAuth 2.0开放鉴权的相关知识，请参见[开放平台鉴权-授权码模式](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/open-platform-oauth-0000001053629189#section1022911426469)。

<br />

