---
name: document/cn/HMSCore-References/api-partner-combined-apply-refund-0000001970239409
title: 申请退款
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-partner-combined-apply-refund-0000001970239409
---

# 申请退款

## 功能介绍

此接口提供给用户退款使用。

> 说明
>
> 1. 不支持对同一笔交易单进行并发退款。
>    * 一笔普通收单多次退款，时间间隔要在1分钟以上。
>    * 合单多笔子单退款，时间间隔要在1分钟以上。
> 2. 订单退款只支持180天内的订单。
> 3. 申请退款成功不代表退款成功，退款场景是异步处理，需收到退款成功的异步回调通知才表示退款成功。
> 4. 服务商代特约商户退款，需要服务商在[华为支付商户平台](https://petalpay-merchant.cloud.huawei.com/)上[申请API退款授权](https://developer.huawei.com/consumer/cn/doc/pay-docs/hwzf-apituikuan-0000002371871965)。

## 使用约束

换单重试，视为新的业务订单，需开发者自行将新的业务订单关联业务原订单。接口重入规则说明如下（供参考）：

|重入判定字段|支持原单重入场景|建议换单重试场景|
|:------------------------|:-----------------------------------------------------------|:--------------------------------------------------------------|
|商户退款订单（mercRefundOrderNo）|发起退款请求失败，建议根据错误码（400000 RETRY_TOO_MANY错误码场景，需要换单重试）排查后，原单重试。|1. 400000 RETRY_TOO_MANY错误码场景，需要换单重试。 2. 多次部分退款场景下，每次需要换单后发起请求。|

## 接口原型

|承载协议|HTTPS POST|
|-----|---------------------------------------------------------------------------------------|
|接口方向|开发者服务器-> 华为支付服务器|
|接口URL|https://petalpay-developer.cloud.huawei.com.cn/api/v1/partner/aggr/transactions/refunds|
|数据格式|请求消息：Content-Type: application/json 响应消息：Content-Type: application/json|

## 请求参数

* **Request Header**

  |参数|是否必选|参数类型|描述|
  |:-----------|:---|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------|
  |Content-Type|是|String|取值为：application/json; charset=UTF-8|
  |PayMercAuth|是|String|取值为：[PayMercAuth](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-data-model-0000001538219104#section11744172016145)的JSON串|


* **Request Body**

  |参数|是否必选|类型|说明|
  |:----------------|:---|:-----|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  |mercOrderNo|否|String|商户订单号，由商户自己生成，商户需保证订单信息唯一性。最大长度46。sysTransOrderNo与该参数必选其一。|
  |sysTransOrderNo|否|String|华为支付系统订单号。mercOrderNo与该参数必选其一，同时传递则以sysTransOrderNo为准。|
  |extInfo|否|String|附加信息。|
  |mercRefundOrderNo|是|String|商户退款订单号，商户需要保证字段唯一性。最大长度64。 相同的退款订单号多次请求只退一笔。 退款失败场景，请使用原单重试。如果换单重试，将视作新的退款请求，可能出现金额校验失败的错误。|
  |reason|否|String|退款原因，账单详情中显示。|
  |callbackUrl|是|String|回调通知地址，通知URL必须为外网环境可直接访问的URL，要求为https地址。具体要求参考[通知回调接口说明](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-notification-description-0000001538374180#section2091445712409)。最大长度为512。|
  |refundAmount|否|long|需要退款的金额，该金额不能大于订单金额，单位为分。 注：如果正向交易使用了营销，该退款金额包含营销金额，华为支付会按业务规则分配营销和买家自有资金分别退多少，默认按比例退款。如不填则默认全额退款。|
  |payload|否|String|商户预留信息，在查询和回调通知时会原样返回。最大长度255。|


* **请求示例**

  ```screen
  POST /v1/partner/aggr/transactions/refunds HTTP/1.1
  Content-Type: application/json;charset=UTF-8
  PayMercAuth: {"callerId":"10132120***","traceId":"202305151442062977847","time":1684132926969,"authId":"120291744647139***","headerSign":"BpOBa8o+gJnKG+vHVI7u8gz7SWuCR/ZWHvhcY5a+l1C65Jl/4EECjXDdooYZoBXgpRlnzgVBpEKTD1gpsSCSVZ6n6eNV/CskNPEvYZtwG9SH8E+75YpdApZ/hz5MJuTp/gsuqJFgNcAAMR0dOXqKJV27fPLsl22UWFoqcG/V9OyGWdFHEwM9ZgYZo6QUDkJCtAfqUSYE2Z6uImuufUvJnLJlRqtnqpifK8h6cFIcj87bW+OU+svQhuaaM1gLDenNWKvQtcBDs9OlEZ5KCtzK7otSHFDxVpMovP3z3/dbl35rCMjbjk8tWPiaXCcoABKG55GB6ZDhO/gadZ+HJmnhI09zgwP3+UtKAbEi3dk5k7LNm7KCI2foqkGKXt15ccG7YXByF1KkooPbxFXjxihGMuxZT8CW0RzRRJhO2neCnhjvCbWpkZASwQoMauIxLTIMOkfHnWSOB5yAoZ3UEa9aS2Fb6pgnmvF9U0l+aB+3g6K6zupArc+uKcerMWabqWmFvqLiDf9pZ1gxUJXqQphUyWjNwVPg+F9y1thlxyQofs9mgp5nbPofs3nQjQLEt5n3xmB+Atrr1RLaptl6S96jUl1iCvu0ZeMGltInUI+4mbfOMvDM1HkawuMmqcKq1INRFUomVuKDV8iPqNJ+Y8b4XDpSi3FHgjozsWH+uLoTSIg=","bodySign":"lHjrX3dv44zyfu+PO1G+oa9tJi2EVUOIKSzE9VHKazmLtg6APjtxoz8OTvo+B5qP0JglSpRuXnVlp0NyZGoT2cVIMC00hQsK6mVWTwkunmaPI2/G+MCnItDyE2+ItrmauATGdGPa8HXTb936SMInaIY+31zq7EdND9jbAenxUyMjoApXA+RWE7tbqUZPA1eLwOK2rMD2u49Fc8zhRLIkoEnxD9PEkeECoV9iyvWM7DqRWqCxoCaZehURNCi5E37aCQBFh6RPEuNvDOTbPFK9GsKlCc0hjneLGAr7JgEs7mTOR1cf5odyjyuKR9A8k5pH3z/xT2Y3O9Y1qB/NTWb/IewOUbk9a1OqSllyTXFiHmqYaDZH0+H0hxrEid4UvYtsmmkzy95l+1ZiCv+1S3W42T9jYJWEc5C5WzpnW8K57GQ2Xdmxhb+5UskgXkAcv67ZhsA0/jF5qGtATFQ/5noMKURyYNGXLgJtcA9toD4W8F3SxA9hOgbXOqB929dvMKGrNtmnNm9NkxJFrmfYgAyyi0OYYo0/171f1GKYXdFBALWvOrgdDyrzEHcHYcNuyk9y3iJP6S/RAycme+ibB4qcg1Oj2KbyUUY0Fkj3zXm98TkuZ8dl65RQeBVksrKTgqn/XUqAzZpcQppxLE/2gXJHBuereHiEatA8QTjLPsSPKfM="}
  Accept: application/json
  {
    "mercOrderNo": "qapp2820231401240800",
    "extInfo": "2121312",
    "mercRefundOrderNo": "202303281684132926235",
    "reason": "123456",
    "callbackUrl": "https://www.xxxxxx.com/hw/pay/callback",
    "refundAmount": 2,
    "payload": "example-payload"
  }
  ```

## 响应参数

* **Response Header**

  |参数|是否必选|参数类型|描述|
  |:-----------|:---|:-----|:----------------------------------|
  |Content-Type|是|String|取值为：application/json; charset=UTF-8|


* **Response Body**

  |参数|是否必选|参数类型|描述|
  |:----------------|:---|:-----|:----------------------|
  |resultCode|是|String|结果码，"000000"表示成功，其他表示失败|
  |resultDesc|是|String|结果描述|
  |subCode|否|String|业务错误码|
  |subDesc|否|String|业务错误描述信息|
  |sign|是|String|签名值|
  |mercRefundOrderNo|否|String|商户退款订单号|
  |sysRefundOrderNo|否|String|华为支付退款订单号|
  |sysTransOrderNo|否|String|华为支付系统订单号|
  |mercOrderNo|否|String|商户订单号|
  |refundAmount|否|long|退款金额|
  |payerRefundAmount|否|long|用户退款金额|


* **响应示例**

  ```screen
  HTTP/1.1 200 OK
  Content-Type: application/json; charset=UTF-8
  {
    "resultCode": "000000",
    "resultDesc": "Success.",
    "sign": "MEUCIEhVD6FuZ5iIh41AWOScve51HrS********************k6r98H76j1CbI1CdiWp/WVE8SoZOSXWMI0JGRXrj0=",
    "mercRefundOrderNo": "202303281684132926235",
    "sysRefundOrderNo": "1230515144208008700005826043",
    "sysTransOrderNo": "12407030857530004914518***",
    "mercOrderNo": "qapp2820231401240800",
    "refundAmount": 2,
    "payerRefundAmount": 2
  }
  ```

## 错误码

(**resultCode** 非400000的错误码请看[公共错误码说明](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-error-code-description-0000001589053741#section1187515498410))

|**resultCode**|**resultDesc**|**subCode**|**subDesc**|
|:-------------|:-------------|:------------------------------|:--------------------------------------------------------------------------|
|400000|业务处理失败|UNKNOW_ERROR|系统未知错误，请稍后重试或联系华为工程师处理|
|400000|业务处理失败|INVALID_ARGUMENTS|参数不合法|
|400000|业务处理失败|INVALID_MERCNO|无效商户号|
|400000|业务处理失败|REJECTED_BY_RISK_CONTROL|风控拒绝|
|400000|业务处理失败|NO_MATCH_MATCHING_PRODUCT|未匹配到商户产品|
|400000|业务处理失败|CHECK_ORDER_STATUS|订单状态异常|
|400000|业务处理失败|BANK_CARD_NOT_SUPPORT|银行卡不支持|
|400000|业务处理失败|CHECK_ACCOUNT_STATUS|账号异常|
|400000|业务处理失败|CHECK_MERC_STATUS|商户状态异常|
|400000|业务处理失败|MERC_NOT_SUPPORT_REFUND|商户不支持退款|
|400000|业务处理失败|CHECK_AMOUNT_INVALID|金额校验失败|
|400000|业务处理失败|CHECK_ACCOUNT_BALANCE|账户余额不足|
|400000|业务处理失败|RETRY_TOO_MANY|重试次数超限，请换单重试|
|400000|业务处理失败|ORDER_CONCURRENT_ERROR|订单退款并发错误 > 说明 > 解决方案： > 1. 一笔普通收单多次退款，时间间隔要在1分钟以上 > 2. 合单多笔子单退款，时间间隔要在1分钟以上|
|400000|业务处理失败|OPERATION_NOT_AUTHORIZED|操作未授权|
|400000|业务处理失败|NOT_IN_VALIDITY_PERIOD|不在有效期内|
|400000|业务处理失败|NOT_SUPPORTED_OPERATION|不支持的操作。|
|400000|业务处理失败|RESTRICTED_USER_ACCOUNT|用户账户受限|
|400000|业务处理失败|RESTRICTED_USER_TRANSACTION|用户交易受限|
|400000|业务处理失败|RESTRICTED_MERCHANT_TRANSACTION|商户交易受限|

