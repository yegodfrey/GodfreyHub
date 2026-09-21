---
name: document/cn/HMSCore-References/api-partner-subsidies-cancel-0000001966012880
title: 取消补差
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-partner-subsidies-cancel-0000001966012880
---

# 取消补差

## 功能介绍

对于需要补差的订单，可在发起分账前，调用该接口取消补差，取消补差后可发起分账。
> 说明
>
> 1. 取消补差含义为取消需要补差的原订单，已经请求过补差的订单且成功的，或者补差状态未知的订单（异常情况), 不支持调用取消补差。
> 2. 发起补差请求失败后可以再次发起取消补差。

## 接口原型

|承载协议|HTTPS POST|
|-----|------------------------------------------------------------------------------|
|接口方向|开发者服务器-> 华为支付服务器|
|接口URL|https://petalpay-developer.cloud.huawei.com.cn/api/v1/partner/subsidies/cancel|
|数据格式|请求消息：Content-Type: application/json 响应消息：Content-Type: application/json|

## 请求参数

* **Request Header**

  |参数|是否必选|参数类型|描述|
  |:-----------|:---|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------|
  |Content-Type|是|String|取值为：application/json; charset=UTF-8|
  |PayMercAuth|是|String|取值为：[PayMercAuth](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-data-model-0000001538219104#section11744172016145)的JSON串|

* **Request Body**

  |参数|是否必选|类型|说明|
  |:--------------|:---|:-----|:---------|
  |subMercNo|是|String|收单商户号。|
  |sysTransOrderNo|是|String|华为支付系统订单号。|

* **请求示例**

  ```screen
  POST /api/v1/partner/subsidies/cancel HTTP/1.1
  Content-Type: application/json;charset=UTF-8
  PayMercAuth: {"callerId":"10132120***","traceId":"202305151026342776499","time":1684117602555,"authId":"120291744647139***","headerSign":"u+H1Oe3fXV9mGCES89XA7tSj********************DwKJH7rMv6SBj/z0UcN9QrxXSeR8r6X46b7491N1jKg/lOG7eAFfwjEWJu5JyvY5KunSeE6DiKs=","bodySign":"yWDtXOBqDoItPgHmF57L6U5G7F/LhsILChu8YSp********************imTcTN7pBpFA7pvFexUasPj10iUIFeaszpiRT2aQDaqLGaxvta6J5UxIUmAp+wGdV/juGEvQ="}
  Accept: application/json
  {
    "subMercNo": "10156000***",
    "sysTransOrderNo": "124070308575300049145189***"
  }
  ```

## 响应参数

* **Response Header**

  |参数|是否必选|参数类型|描述|
  |:-----------|:---|:-----|:----------------------------------|
  |Content-Type|是|String|取值为：application/json; charset=UTF-8|

* **Response Body**

  |参数|是否必选|参数类型|描述|
  |:--------------|:---|:-----|:-------------------------|
  |resultCode|是|String|返回码，"000000"表示成功，其他表示见错误码。|
  |resultDesc|是|String|结果描述。|
  |subCode|否|String|业务错误码。|
  |subDesc|否|String|业务错误描述信息。|
  |sign|是|String|签名值。用于开发者对响应报文进行防篡改验证。|
  |subMercNo|否|String|收单商户号。|
  |sysTransOrderNo|否|String|华为支付系统订单号。|

* **响应示例**

  ```screen
  HTTP/1.1 200 OK
  Content-Type: application/json; charset=UTF-8
  {
    "resultCode": "000000",
    "resultDesc": "Success.",
    "sign": "GNDttQbJsRM/tTAzAkoe/VUQokrU9EKTnhGJxiZd6M/MleDUJAEg8gL9w+/FFlr6********************SxEOM9XPjTnyT0FZ6LUeYB3e1S3cHxnXQEs9OyVjEgLe88gpA=",
    "subMercNo": "10156000***",
    "sysTransOrderNo": "124070308575300049145189***"
  }
  ```

## 错误码

(**resultCode** 非400000的错误码请看[公共错误码说明](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-error-code-description-0000001589053741#section1187515498410))

|--------------|--------------|-------------------------|----------------------|
|**resultCode**|**resultDesc**|**subCode**|**subDesc**|
|400000|业务处理失败|UNKNOW_ERROR|系统未知错误，请稍后重试或联系华为工程师处理|
|400000|业务处理失败|INVALID_ARGUMENTS|参数不合法|
|400000|业务处理失败|INVALID_MERCNO|无效商户号|
|400000|业务处理失败|MERC_ORDER_NOT_EXIST|商户订单号不存在|
|400000|业务处理失败|PAY_ORDER_NOT_EXIST|支付订单号不存在|
|400000|业务处理失败|CHECK_MERC_STATUS|商户状态异常|
|400000|业务处理失败|NO_MATCH_MATCHING_PRODUCT|未匹配到商户产品|
|400000|业务处理失败|NOT_IN_VALIDITY_PERIOD|不在有效期内|

