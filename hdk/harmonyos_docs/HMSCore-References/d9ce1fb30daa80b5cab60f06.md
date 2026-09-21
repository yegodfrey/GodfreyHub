---
name: document/cn/HMSCore-References/api-partner-merc-manage-freeze-submerc-0000001593101828
title: 冻结子商户
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-partner-merc-manage-freeze-submerc-0000001593101828
---

# 冻结子商户

## 功能介绍

平台类商户/服务商可以通过调用此接口冻结平台子商户/特约商户。
> 说明
>
> 此接口不支持传入冻结子商户列表，只支持一次调用冻结一个子商户。

## 接口原型

|承载协议|HTTPS POST|
|-----|---------------------------------------------------------------------------------|
|接口方向|开发者服务器-> 华为支付服务器|
|接口URL|https://petalpay-developer.cloud.huawei.com.cn/api/v1/partner/mgmt/submerc/freeze|
|数据格式|请求消息：Content-Type: application/json 响应消息：Content-Type: application/json|

## 请求参数

* **Request Header**

  |参数|是否必选|参数类型|描述|
  |:-----------|:---|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------|
  |Content-Type|是|String|取值为：application/json; charset=UTF-8|
  |PayMercAuth|是|String|取值为：[PayMercAuth](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-data-model-0000001538219104#section11744172016145)的JSON串|


* **Request Body**

  |参数|是否必填|参数类型|描述|
  |:----------|:---|:-----|:--------------|
  |subMercNo|是|String|特约商户号或平台子商户号。|
  |callbackUrl|是|String|回调通知地址，最大长度512。|


* **请求示例**

  ```screen
  POST /api/v1/partner/mgmt/submerc/freeze HTTP/1.1
  Content-Type: application/json;charset=UTF-8
  PayMercAuth: 
  {"traceId":"9473889793993714","headerSign":"R/D/l/uLYjbn+BPnipdYvDEmrsgvBEAel9O9qMGKsM5fSeW5LFI3faBqmJ0ELED1R4ho8DLDuHT2xZHyIBbuCJxztrIIrF2+V2wy2Mz0L2Q1j2uig+7tZdSMkALhQ/VlkWQu/rC********************qIQVIbJ4bmlGbxfaIPDpWEQFouEEKXkX7H1VbTfGf2BFxxDuvC04EELDEZWtveWwm6ZiwrJHg/m1t88jYddX7wap7npUz3sIByls=","bodySign":"Evneav5VrpVgy+FRyRlmdjnCoXXBRAYJrFvTfnyUvkeFd8gIAMWhtb4HBWNy/+236OZJbh8fm/830vJRHux/7KtcvduUj/LNVRcEIZJ53+iVFPhKLTeellJaK2a6Coyk1c9/SPQlTD4EY470MMQR2JnL********************gTO52t2jMQrSX1fMg9K7TkEvvPXVfAAEldLOdDTJi5jrvIzQ4zLfSmgFAJ3i2uL1O4v43jZMo9w9jGopccIg=","callerId":"10132120***","time":1690339343089,"authId":"120291744647139***"}
  Accept: application/json
  {
    "callbackUrl": "https://www.xxxxxx.com/hw/pay/callback",
    "subMercNo": "101320000***"
  }
  ```

## 响应参数

* **Response Header**

  |参数|是否必选|参数类型|描述|
  |:-----------|:---|:-----|:----------------------------------|
  |Content-Type|是|String|取值为：application/json; charset=UTF-8|


* **Response Body**

  |参数|是否必填|参数类型|描述|
  |:---------|:---|:-----|:---------------------------------------|
  |resultCode|是|String|结果码，"000000"表示成功，其他表示失败|
  |resultDesc|是|String|结果描述|
  |subCode|否|String|业务错误码|
  |subDesc|否|String|业务错误描述信息|
  |sign|是|String|签名值|
  |mercNo|否|String|商户号|
  |subMercNo|否|String|特约商户号或平台子商户号|
  |mercStatus|否|String|当前商户状态。 * 20：正常 * 30：冻结 * 40：销户 * 50：预销户|
  |flowId|是|String|审批流程id。|


* **响应示例**

  ```screen
  HTTP/1.1 200 OK
  Content-Type: application/json; charset=UTF-8
  {
    "resultCode": "000000",
    "resultDesc": "success",
    "sign": "MEYCIQD+lWmPzZo+29+5+/zDglR1EG27lK********************ANQFF8xUpxQFamzhMrHjBbXCHQvqK0LlsuZo9iVyt4Sv",
    "mercStatus": "20",
    "flowId": "20230726104223220xxx",
    "mercNo": "czl00120240705***"
  }
  ```

## 错误码

(**resultCode** 非400000的错误码请看[公共错误码说明](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-error-code-description-0000001589053741#section1187515498410))

|**resultCode**|**resultDesc**|**subCode**|**subDesc**|
|:-------------|:-------------|:----------------|:----------|
|400000|业务处理失败|INVALID_ARGUMENTS|参数不合法|
|400000|业务处理失败|CHECK_MERC_STATUS|商户状态异常|
|400000|业务处理失败|FLOW_INVALID|流程异常|

