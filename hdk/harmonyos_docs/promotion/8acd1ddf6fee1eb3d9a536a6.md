---
name: document/cn/promotion/ads-cxglzhlb-0000002561468775
title: 查询关联账户列表
uri: https://developer.huawei.com/consumer/cn/doc/promotion/ads-cxglzhlb-0000002561468775
---

# 查询关联账户列表

您通过本接口获取Token关联账户列表信息

* **请求地址：**请根据您的就近区域进行选择

亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/account/profile/query

俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/account/profile/query

欧洲：https://ads-dre.cloud.huawei.com/ads/v1/account/profile/query

* **请求方法：** **GET**


* **请求参数**：

无

* **请求示例**

GET ads/v1/account/profile/query HTTP/1.1

Accept:application/json

Content-Type:application/json

Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

* **响应字段**

|--------|---------|------|
|**参数名称**|**类型**|**描述**|
|code|string|返回码|
|message|string|返回描述|
|data|Struct1[]|返回数据|

Struct1定义

|---------------|------|----------------------------------------------------------------------------------------------------------------------------------------------|
|**参数名称**|**类型**|**描述**|
|accountId|string|账户ID|
|accountName|string|账户昵称|
|corpName|string|账户名称|
|accountType|string|账户类型 详见[账户类型](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section1068310101011)|
|userServiceType|string|用户服务推广范围类型 详见[账户推广业务类型](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section12306205591715)|

* **应答示例**

HTTPS/1.1 200 OK

```codeblock
{
    "code": "200",
    "data": {
        "total": 1,
        "accountList": [
            {
                "accountId": 123123123,
                "accountType": "AGENCY_ACCOUNT",
                "corpName": "纽约曼哈孙一代",
                "accountName": "纽约曼哈孙一代",
                "userServiceType": "ADS"
            }
        ]
    }
}
```

