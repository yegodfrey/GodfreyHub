---
name: document/cn/promotion/ads_new_api34-0000001405360444
title: 获取文件上传凭证
uri: https://developer.huawei.com/consumer/cn/doc/promotion/ads_new_api34-0000001405360444
---

# 获取文件上传凭证

【简介】通过此接口可以获取文件上传凭证

请求地址

https://ads.cloud.huawei.com/ads/v1/tools/file/token/query

请求方法

GET

请求参数  

|-------------|----|----|------------------------------------------------------------------------------|
|参数名称|类型|是否必选|描述|
|advertiser_id|long|否|广告主ID，当登录授权的华为账号为如下场景时此字段必填： 1）授权账号关联的是经理账户； 2）授权账号关联的是服务商账户； 3）授权账号关联了多个子客账户。|

<br />

请求示例

GET /ads/v1/tools/file/token/query HTTP/1.1

Accept:application/json

Content-Type:application/json

Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

<br />

```
{
"advertiser_id": "494008260362282880"
}
```

<br />

响应字段  

|-------|-------|-------------|
|参数名称|类型|描述|
|code|string|返回码|
|message|string|返回描述|
|data|Struct1|上传身份标识，5分钟有效期|

<br />

data (Struct1)定义  

|----------|------|-------------|
|参数名称|类型|描述|
|file_token|string|上传身份标识，5分钟有效期|

<br />

应答示例

HTTPS/1.1 200 OK

```
{
"code": "200",
"data": {
"file_token": "a294d4e03e44c3539031f29632dcae47"
}
}
```

