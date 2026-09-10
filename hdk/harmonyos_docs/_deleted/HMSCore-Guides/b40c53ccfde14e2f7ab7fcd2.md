---
name: document/cn/HMSCore-Guides/faq-0000001476980529
title: FAQ
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/faq-0000001476980529
---

# FAQ

#### REST

#### 调用接口的时候，报错信息为"Invalid Credentials"，是什么原因？

此种情况是token无效时调用API接口返回的提示信息，请按以下情况进行排查：

1. 确认申请token的方式是否采用了开放平台鉴权-授权码模式。
2. 确认申请token时的操作是否与获取的token标准步骤一致。
3. 确认该token是否已经过期。  

#### refresh_token什么场景下会过期，如何处理？

1. refresh token并非永久有效，当前是6个月的有效时间（在使用RT换取AT时，保存新的RT可以有效的减少RT失效情况发生），在接口里没有直接返回有效期，且未来可能会变更。

2. 当以下场景时，会导致refresh_token立即过期：

   * 修改密码
   * 冻结账号
   * 变更、删除账号
   * 销户
   * 删除设备(设备挤掉) ， 用户删除单个设备
   * 客户端APK退出， 用户从当前手机客户端APK（设备）退出
   * 退出当前浏览器， 用户从当前浏览器退出
   * 退出全部浏览器

如果refresh_token过期，刷新access_token时，返回error为1203，sub_error为11205或者31204，具体错误请参见[错误与异常机制](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/open-platform-error-0000001053869182)，此时三方须标记refresh_token过期，在下次用户登录授权时，重走认证授权流程。  

#### 调用接口时，返回错误码 403：Insufficient Permission: Request had insufficient authentication scopes.

该提示是因为scope权限不足，缺少相关scope权限导致。通过Health Service Kit操作用户数据时，需要先拥有对应的权限，才能进行后续操作。

应用所能操作的用户数据，是用户授权和Health Service Kit服务审批通过的数据权限的交集。

可能的原因：

1、未在联盟控制台的Health Service Kit卡片中申请相关的权限。

2、生成授权码Code时填写的appId与Health Service Kit卡片中申请权限的appId不一致。

3、认证鉴权时，用户未勾选相关权限。

解决方案：

1、检查[生成授权码Code](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/auth-example-0000001054581058#section9339449355)时填写的appId是否已在[联盟控制台](https://developer.huawei.com/consumer/cn/console#/openCard/AppService/1044)的Health Service Kit卡片中申请Health Service Kit权限。如果未申请，可以根据"[申请Health Service Kit服务](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/apply-kitservice-0000001050707556)"指南，结合数据类型指南中对应的[OAuth权限](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/steps-0000001177343435#section165119447225)描述进行申请。

2、检查生成授权码Code时填写的appId与Health Service Kit卡片中申请权限的appId是否一致。

3、检查当前用户的AccessToken(简称：AT)是否已授予相关scope权限。可以借助"[鉴权信息查询接口](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/auth-example-0000001054581058#section1493911718178)"进行查看，如果当前用户已授予相关权限，会在响应体scope字段中返回。  

#### 调用运动记录查询的接口时，返回错误码 403：The query time is out of range.

查询数据时，出于对用户的数据保护，只允许开发者查询在用户授权之后的数据。例如用户是在2022年2月14日授权，那么2022年2月14日之前的数据将不可查询。

如果需要查询用户授权前的数据，开发者需要得到用户"读取历史数据"相关的授权。

当开发者设置的查询时间早于可查询的用户数据时间范围，这将导致查询异常，返回错误码403。更多请参考[读取历史数据](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/historydata-open-0000001209921350)。  

#### 配置正确的情况下，请求的响应为代码为"400"、"Bad Request"、"invalidArgument"，可能有哪些原因？

此类型响应说明发送的请求内参数有误，如果URL中包含用户输入的请求参数，请检查相关输入是否符合参数规范，如果请求中存在请求体，还需要检查对应的参数格式及类型是否符合相关的参数要求。  

#### 创建订阅记录时，请求的响应代码为"400"、"Bad Request"、"Failed to connect to the URL."，是什么原因？

当调用创建订阅记录接口返回如上信息时，请依次检查您应用填写的订阅回调地址网络是否通畅、您应用填写的订阅回调地址的http code响应码是否为204。检查方式可通过登录开发者联盟网站，在Health Service Kit服务卡片中找到您当初申请的应用，点击管理，再点击测试连通性按钮，确保显示"连通性测试检查成功"，再调用创建订阅记录接口。

![](https://media:901788166607866393 "点击放大")  

#### 创建数据时，提示"Application package name (xxx) provided by un-trusted source."，需要如何处理？

说明此时填入的应用名称未在开发者联盟进行注册，请申请并通过后再使用该应用名称进行相关操作。  

#### 接口访问失败，HTTP状态码403，响应错误码121001。

在请求涉及跨地域站点访问时(如注册地在欧洲的用户在中国区访问)，Health Service Kit会拒绝该请求，HTTP状态码403，响应错误码121001，响应体中返回的具体错误信息如下，同时会在响应头中添加Location，内容为需重定向获取数据的Health Service Kit具体域名。三方应在遵从Health Service Kit开发者协议中的个人数据隐私条款的前提下使用响应头中的域名信息重新发起请求获取数据。

```
{
  "error": {
    "code": 121001,
    "message": "request forbidden due to site cross"
  }
}
```

举注册地欧洲的用户在中国区Health Service Kit请求获取步数统计数据为例

请求示例，请参见[采样数据统计查询](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/sampleset_polymerize_aggregated-0000001176294110#section984123664716)接口

```
POST
https://health-api.cloud.huawei.com/healthkit/v2/sampleSet:polymerize
```

请求体

```
Content-Type: application/json
Authorization: Bearer ***
x-client-id: ***
x-version: ***
x-caller-trace-id: ***
{
 "polymerizeWith": [
  {
   "dataTypeName": "com.huawei.continuous.steps.delta"  
  }
 ],
 "endTime": 1590422399000,
 "startTime": 1590336000000,
 "groupByTime": {
     "groupPeriod": {
         "unit": "day",
         "value": 1,
         "timeZone": "+0800"
    }
  }
}
```

响应体

```
HTTP/1.1 403 ACCESS FORBIDDEN
Content-type: application/json;charset=utf-8
Location：https://health-api.cloud.huawei.eu/healthkit/v2/sampleSet:polymerize
{
  "error": {
    "code": 121001,
    "message": "request forbidden due to site cross"
  }
}
```

使用响应头Location重新发起请求

```
POST
https://health-api.cloud.huawei.eu/healthkit/v2/sampleSet:polymerize
```

请求体

```
Content-Type: application/json
Authorization: Bearer ***
x-client-id: ***
x-version: ***
x-caller-trace-id: ***
{
 "polymerizeWith": [
  {
   "dataTypeName": "com.huawei.continuous.steps.delta"  
  }
 ],
 "endTime": 1590422399000,
 "startTime": 1590336000000,
 "groupByTime": {
     "groupPeriod": {
         "unit": "day",
         "value": 1,
         "timeZone": "+0800"
    }
  }
}
```

响应体

```
HTTP/1.1 200 OK
Content-type: application/json;charset=utf-8
x-health-app-privacy: 1
{
    "group": [
        {
            "startTime": 1590336000000,
            "endTime": 1590422399000,
            "sampleSet": [
                {
                    "dataCollectorId": "ZGVyaXZlZDpjb250aW51b3VzLnN0ZXBzLnRvdGFsEwMTI3ODUwMTpqEF7rB3uBcGykpv6T2TisfTMhfZAvz1BP2Kcz70d1Sg",
                    "samplePoints": [
                        {
                            "startTime": 1590373495000000000,
                            "endTime": 1590377095000000000,
                            "dataTypeName": "com.huawei.continuous.steps.total",
                            "originalDataCollectorId": "cmF3OmNjb250aW51b3VzLnN0ZXBzLmRlbHRhEwMTI3ODUwMTpqEF7rB3uBcGykpv6T2TisfTMhfZAvz1BP2Kcz70d1Sg",
                            "value": [
                                {
                                    "fieldName": "steps",
                                    "integerValue": 2600
                                },
                                {
                                    "fieldName": "duration",
                                    "integerValue": 20
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
```

#### 使用HTTP订阅方式，若收不到订阅通知消息，如何排查？

若使用HTTP订阅功能时，获取不到订阅通知信息，可以按照以下方式进行排查：

1. 确保应用是否已启用订阅功能，并确认回调地址网络请求正常。

检查方式：使用企业级开发者联盟账号登录开发者联盟网站，进入管理中心 \> Health Service Kit服务卡片 \> 编辑您的应用，确认是否勾选注册订阅通知能力开关。填写回调地址，且测试连通性成功；若测试连通性不成功，请检查您填写的回调地址的网络是否正常。

![](https://media:901788166607897394)

2. 确保用户在您的应用下已创建成功订阅记录。

检查方式：调用[查询订阅记录接口](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/subscriber-records-list-0000001088432141#section1918419017812)，查询用户是否在您应用下创建订阅记录成功。如有报错，报错信息请参见[错误码](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/error-code-0000001054236973)。

3. 确保创建用户订阅记录的应用appid与您的应用appid一致。

4. 确保用户授权您应用的账号与用户登录华为运动健康App的账号一致。

5. 在创建订阅记录成功后，确保用户在华为运动健康App上生成新的数据。  

#### 如何获取华为用户的union_id/unionID、open_id/openID、scope等信息？

应用已经获取到Access Token，当需要对其进行解析鉴权，以获取Access Token中包含的union_id、open_id、expire_in、scope等信息时，可参考[解析凭证Access Token](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/account-gettokeninfo-0000001050050585)进行操作。  
