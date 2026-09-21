---
name: document/cn/promotion/marketing-api-tool-dpa12-0000001338263153
title: 批量下架商品
uri: https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-dpa12-0000001338263153
---

# 批量下架商品

您通过本接口可以批量下架商品。
> 说明
>
> 只有商品成功上架，才可以调用该接口。

* **请求地址** ：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/tools/dpa/product/offline

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/tools/dpa/product/offline

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/tools/dpa/product/offline
* **请求方法** ：**POST**
* **请求参数：**

  |-------------|--------|--------|-------------------------------------|
  |**参数名称**|**类型**|**是否必选**|**描述**|
  |advertiser_id|long|否|广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。|
  |product_ids|string[]|是|商品ID列表，最多100个。|
  |store_id|long|是|商品库ID，请登录华为商品广告系统-商品库列表页面获取。|

  * **请求示例**

    POST /ads/v1/tools/dpa/product/offline HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer DAEAALpy3envCfdLiOZRerq2oopxMPmzJmgZOVXs1o27CRO8kHr5z2nyH6bXPxvZIadBeVYgOo1qg3rkXNVd13f9kqn%252F65sm%252Bev7G8h1VT9l3rDMl00q

    ```codeblock
    {
        "product_ids": [
            "62608",
            "62609"
        ],
        "store_id": 848986076793265200
    }
    ```

  * 响应字段

    |--------|------|------|
    |**参数名称**|**类型**|**描述**|
    |code|string|返回码。|
    |message|string|返回描述。|

  * **应答示例**

    HTTPS/1.1 200 OK

    ```codeblock
    {
        "code": "200",
        "message": true
    }
    ```

