---
name: document/cn/HMSCore-References/api-partner-merc-manage-invite-register-0000002532657540
title: 创建子商户入网邀请链接
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-partner-merc-manage-invite-register-0000002532657540
---

# 创建子商户入网邀请链接

## 功能介绍

平台类商户/服务商可以通过调用此接口创建入网邀请链接。

## 接口原型

|承载协议|HTTPS POST|
|-----|------------------------------------------------------------------------------------------|
|接口方向|开发者服务器-> 华为支付服务器|
|接口URL|https://petalpay-developer.cloud.huawei.com.cn/api/v1/partner/mgmt/submerc/invite/register|
|数据格式|请求消息：Content-Type: application/json 响应消息：Content-Type: application/json|

## 请求参数

* **Request Header**

  |参数|是否必选|参数类型|描述|
  |:-----------|:---|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------|
  |Content-Type|是|String|取值为：application/json; charset=UTF-8|
  |PayMercAuth|是|String|取值为：[PayMercAuth](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-data-model-0000001538219104#section11744172016145)的JSON串|


* **Request Body**

  |参数|是否必填|参数类型|描述|
  |:----------|:---|:-----|:---------------------------------|
  |externalNo|是|String|外部平台关联编号（externalNo）由商户生成，最大长度为64。|
  |mercName|是|String|子商户名。|
  |callbackUrl|是|String|回调通知地址。|

* **请求示例**

  ```screen
  POST /api//v1/partner/mgmt/submerc/invite/register HTTP/1.1
  Content-Type: application/json;charset=UTF-8
  PayMercAuth: 
  {"traceId":"9473889793993714","headerSign":"R/D/l/uLYjbn+BPnipdYvDEmrsgvBEAel9O9qMGKsM5fSeW5LFI3faBqmJ0ELED1R4ho8DLDuHT2xZHyIBbuCJxztrIIrF2+V2wy2Mz0L2Q1j2uig+7tZdSMkALhQ/VlkWQu/rC********************qIQVIbJ4bmlGbxfaIPDpWEQFouEEKXkX7H1VbTfGf2BFxxDuvC04EELDEZWtveWwm6ZiwrJHg/m1t88jYddX7wap7npUz3sIByls=","bodySign":"Evneav5VrpVgy+FRyRlmdjnCoXXBRAYJrFvTfnyUvkeFd8gIAMWhtb4HBWNy/+236OZJbh8fm/830vJRHux/7KtcvduUj/LNVRcEIZJ53+iVFPhKLTeellJaK2a6Coyk1c9/SPQlTD4EY470MMQR2JnL********************gTO52t2jMQrSX1fMg9K7TkEvvPXVfAAEldLOdDTJi5jrvIzQ4zLfSmgFAJ3i2uL1O4v43jZMo9w9jGopccIg=","callerId":"10132120***","time":1690339343089,"authId":"120291744647139***"}
  Accept: application/json
  {
    "externalNo": "78922645***",
    "callbackUrl": "https://www.xxxxxx.com/hw/pay/callback",
    "mercName": "2026062***"
  }
  ```

## 响应参数

* **Response Header**

  |参数|是否必选|参数类型|描述|
  |:-----------|:---|:-----|:----------------------------------|
  |Content-Type|是|String|取值为：application/json; charset=UTF-8|


* **Response Body**

  |参数|是否必填|参数类型|描述|
  |:----------|:---|:-----|:-----------------------|
  |resultCode|是|String|结果码，"000000"表示成功，其他表示失败。|
  |resultDesc|是|String|结果描述。|
  |subCode|否|String|业务错误码。|
  |subDesc|否|String|业务错误描述信息。|
  |sign|是|String|签名值，商户可以对此API做验签处理。|
  |flowId|否|String|入网流程Id（直接提交商户材料注册场景下返回）。|
  |subMercNo|否|String|特约商户号。|
  |registerUrl|否|String|入网邀请链接（邀请注册场景下返回）。|


* **响应示例**

  ```screen
  HTTP/1.1 200 OK
  Content-Type: application/json; charset=UTF-8
  {
    "resultCode": "000000",
    "resultDesc": "success",
    "sign": "BYYCIQD+lWmPzZo+29+5+/zDglR1EG27lK********************ANQFF8xUpxQFamzhMrHjBbXCHQvqK0LlsuZo8iVyt6Sv", 
    "registerUrl": "https://petalpay-developer.cloud.huawei.com.cn/apply?addMercType=1&customerNo=A7154061AE160BC3A8F7C7A9:0AEE1B33********************D0EFF877A1FAC50AA8&customerName=434F33********************9F445:FA80EB8A086D453EFF43E3C42C3DCFAA86DC14D1FFC********************7EDB5112&customerShortName=F322224C634B9D812CA1779E:43B9F125AEE30D********************921414FA08D4563A6D8BF&customerType=1&isAgent=0",
  }
  ```

## 错误码

(**resultCode** 非400000的错误码请看[公共错误码说明](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-error-code-description-0000001589053741#section1187515498410))

|**resultCode**|**resultDesc**|**subCode**|**subDesc**|
|:-------------|:-------------|:----------------|:------------|
|400000|业务处理失败|UNKNOWN_ERROR|服务暂不可用, 请稍后重试|
|400000|业务处理失败|INVALID_ARGUMENTS|参数不合法|

