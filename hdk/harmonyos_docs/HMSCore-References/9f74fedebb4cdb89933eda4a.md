---
name: document/cn/HMSCore-References/api-alloc-finish-to-merc-0000001643419481
title: 商户订单号解冻剩余可分账金额
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-alloc-finish-to-merc-0000001643419481
---

# 商户订单号解冻剩余可分账金额

## 接口原型

|承载协议|HTTPS GET|
|-----|-------------------------------------------------------------------------------------------------|
|接口方向|开发者服务器-> 华为支付服务器|
|接口URL|https://petalpay-developer.cloud.huawei.com.cn/api/v1/allocation/merc-orders/finish/{mercOrderNo}|
|数据格式|请求消息：Content-Type: application/json 响应消息：Content-Type: application/json|

## 请求参数

* **Request Header**

  |参数|是否必选|参数类型|描述|
  |:-----------|:---|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------|
  |Content-Type|是|String|取值为：application/json; charset=UTF-8|
  |PayMercAuth|是|String|取值为：[PayMercAuth](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-data-model-0000001538219104#section11744172016145)的JSON串|


* **request path**

  |参数|是否必填|参数类型|描述|
  |:----------|:---|:-----|:-------|
  |mercOrderNo|是|String|商户交易订单号。|


* **请求示例**

  ```screen
  GET /api/v1/allocation/merc-orders/finish/1230725095828000084796934278
  Content-Type: application/json;charset=UTF-8
  PayMercAuth: 
  {"traceId":"20230725095800028","headerSign":"Pp03IvhdGponalVqLuO6/7iRvoF3Ad5HEFCgqvDOAd7TMfCovnnmbjmW5A/qG7a9q/ObNyEEWQORfHKUxgrgC5+Qe6MwaehEj9qzbsOgwJEIeeVNsNKB6kl2gvbIIn8EnOMlRCjMp1M70TZduCJCkrj/QdcwPXIvZl5Vb+WBU6Ev7AkmLHc7NB3vh5uGWgUr6DOSZQ********************zw0OCrKLKHiIcFBvkhW1p4RhxdMTe7eJ6nCrc=","bodySign":"Eg/2Qll0PE5GvsMedDCpxoe3TRphrX+74AYbub/vErheizZaHL6Db3b+6gg4n********************OITe1U211GfZQ0HSXsde1jJMgVoTI9Y1QsfHQjfESKuJDa2W4olz9gi/1aPftBiKIYfwKTeYT3ZK5f2VGrK9ka+mIhIzLF5KyETXPPCsprqGph14=","callerId":"10132120***","time":1690250308435,"authId":"120291744647139***"}
  ```

## 响应参数

* **Response Header**

  |参数|是否必选|参数类型|描述|
  |:-----------|:---|:-----|:----------------------------------|
  |Content-Type|是|String|取值为：application/json; charset=UTF-8|


* **Response Body**

  |参数|是否必填|参数类型|描述|
  |:---------|:---|:-----|:----------------------|
  |resultCode|是|String|结果码，"000000"表示成功，其他表示失败|
  |resultDesc|是|String|结果描述|
  |subCode|否|String|业务错误码|
  |subDesc|否|String|业务错误描述信息|
  |sign|是|String|签名值|


* **响应示例**

  ```screen
  HTTP/1.1 200 OK
  Content-Type: application/json; charset=UTF-8
  {
    "resultCode": "000000",
    "resultDesc": "Success.",
    "sign": "MEYCIQDn9A2upvUdc5cSg9io6eqXh3Bygu********************uwQ4GDNtF95HZqbpT6DFD3l9y14+ZDkpbW6STInV"
  }
  ```

## 错误码

(**resultCode** 非400000的错误码请看[公共错误码说明](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-error-code-description-0000001589053741#section1187515498410))

|**resultCode**|**resultDesc**|**subCode**|**subDesc**|
|:-------------|:-------------|:-----------------------------|:-----------|
|400000|业务处理失败|INVALID_ARGUMENTS|参数不合法|
|400000|业务处理失败|CHECK_TRANSACTION_ORDER_STATUS|交易订单状态异常|
|400000|业务处理失败|MERC_ORDER_NOT_EXIST|商户订单号不存在|
|400000|业务处理失败|ORDER_NOT_SUPPORT|订单不支持|
|400000|业务处理失败|CHECK_ORDER_STATUS|订单状态异常|
|400000|业务处理失败|UNKNOW_ERROR|服务暂不可用，请稍后重试|

