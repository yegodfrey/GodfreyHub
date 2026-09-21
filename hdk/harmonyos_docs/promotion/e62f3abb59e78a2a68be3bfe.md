---
name: document/cn/promotion/marketing-api-advertising-product4-0000001286339298
title: 查询应用详情
uri: https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-advertising-product4-0000001286339298
---

# 查询应用详情

您通过本接口可以查询应用详情。

* **请求地址** ：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/promotion/app_detail/query

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/promotion/app_detail/query

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/promotion/app_detail/query
* **请求方法** ：**GET**
* **请求参数：**

  |-------------|-------|--------|-------------------------------------|
  |**参数名称**|**类型**|**是否必选**|**描述**|
  |advertiser_id|long|否|广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。|
  |filtering|Struct1|是|过滤条件。|

  filtering(Struct1)定义

  |--------|------|--------|-------------|
  |**参数名称**|**类型**|**是否必选**|**描述**|
  |app_id|string|是|华为应用市场的应用 ID。|

  * **请求示例**

    GET /ads/v1/promotion/app_detail/query HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization：Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```codeblock
    {
        "filtering": {
            "app_id": "C100182137"
        }
    }
    ```

  * 响应字段

    |--------|---------|---------------|
    |**参数名称**|**类型**|**描述**|
    |code|string|返回码，200成功，其他失败。|
    |message|string|返回描述。|
    |data|Struct1[]|关键词列表。|

    data(Struct1)定义

    |------------|------|------------|
    |**参数名称**|**类型**|**描述**|
    |app_id|string|华为应用市场应用 ID。|
    |package_name|string|应用包名。|
    |product_name|string|应用名称。|
    |icon_url|string|应用图标地址。|
    |description|string|应用描述/介绍。|

  * **应答示例**

    HTTPS/1.1 200 OK

