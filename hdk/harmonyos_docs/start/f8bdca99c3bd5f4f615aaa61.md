---
name: document/cn/start/dev-mall-marketplace-spapi-logininstance-0000001330128166
title: 免登接口
uri: https://developer.huawei.com/consumer/cn/doc/start/dev-mall-marketplace-spapi-logininstance-0000001330128166
---

# 免登接口

#### 功能介绍

API服务免登接口，生态市场会根据[同步配额](https://developer.huawei.com/consumer/cn/doc/start/dev-mall-marketplace-spapi-queryquota-0000001381008801)接口返回的authUrl，免密登录到API服务管理后台。  

#### 使用约束

仅支持管理台的API服务提供商需要实现免登接口。  

#### 接口原型

|承载协议|HTTPS GET|
|接口URL|[同步配额](https://developer.huawei.com/consumer/cn/doc/start/dev-mall-marketplace-spapi-queryquota-0000001381008801)接口返回的authUrl|
|接口方向|华为服务器 -\> 商户服务器|
|数据格式|请求：Content-Type: application/json 响应：Content-Type: application/json|
|-----|-----------------------------------------------------------------------------------------------------------------------------|

![](https://media:401788750502473183)  
除[安全校验规则](https://developer.huawei.com/consumer/cn/doc/start/dev-mall-marketplace-spapi-autodeliveryprg-0000001380928181#section26527379136)中参数外，此接口还会将请求参数拼入params参数中，参与签名计算。  

#### 请求参数

Body

下表列出了请求Body中使用JSON格式携带的信息，请求验签需要携带的URL参数请参见[安全校验规则](https://developer.huawei.com/consumer/cn/doc/start/dev-mall-marketplace-spapi-autodeliveryprg-0000001380928181#section26527379136)。  

|参数名|必选(M)/可选(O)|类型|描述|
|:--------|:----------|:-----|:-------------|
|action|M|String|固定为verify。|
|requestId|M|String|请求ID，每次请求均不相同。|

#### 响应参数

|参数名|必选(M)/可选(O)|类型|描述|
|:------|:----------|:-----|:--------------------------------------------------------------------------------------------|
|ret|M|String|包含返回码及描述信息的JSON字符串，格式为{"code":retcode, "msg": "description"}，retcode为返回码，description为返回码描述信息。|
|authUrl|O|String|免密登录请求的authUrl。|

#### 响应示例

```
{
    "ret": {
        "code": 0,
        "msg": "success"
    },
    "authUrl": "https://example.com"
}
```

