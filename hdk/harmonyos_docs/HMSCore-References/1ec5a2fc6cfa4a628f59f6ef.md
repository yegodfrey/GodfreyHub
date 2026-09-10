---
name: document/cn/HMSCore-References/api-partner-query-sign-info-contract-id-0000001868173309
title: 委托代扣协议ID查询签约信息
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-partner-query-sign-info-contract-id-0000001868173309
---

# 委托代扣协议ID查询签约信息

#### 接口原型

|承载协议|HTTPS GET|
|接口方向|开发者服务器-\> 华为支付服务器|
|接口URL|https://petalpay-developer.cloud.huawei.com.cn/api/v1/partner/contract/sign/contracts/{contractId}|
|数据格式|请求消息：Content-Type: application/json 响应消息：Content-Type: application/json|
|-----|--------------------------------------------------------------------------------------------------|

#### 请求参数

* Request Header  

  |参数|是否必选|参数类型|描述|
  |:-----------|:---|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------|
  |Content-Type|是|String|取值为：application/json; charset=UTF-8|
  |PayMercAuth|是|String|取值为：[PayMercAuth](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-data-model-0000001538219104#section11744172016145)的JSON串|

<!-- -->

* Request Path  

  |参数|是否必选|类型|说明|
  |:---------|:---|:-----|:--------|
  |contractId|是|String|委托代扣协议ID。|

* 请求示例

  ```
  GET /api/v1/partner/contract/sign/contracts/{contractId} HTTP/1.1
  Content-Type: application/json;charset=UTF-8
  PayMercAuth: {"callerId":"10132120***","traceId":"202305151026422776499","time":1684117602555,"authId":"120291744647139***","headerSign":"u+H1Oe3fXV9mGCES89XA7tSjp8+TELYgG4bKyECwrVGwwExHtdWTnKc4WvEpfjLzpzKE2/+KYaq1jDH/+VmefC29ZXpK54c5DwKJH7rMv6SBj/z0UcN9QrxXSeR8r6X46b7491N1jKg/lOG7eAFfwjEWJu5JyvY5KunSeE6DiKs=","bodySign":"yWDtXOBqDoItPgHmF57L6U5G7F/LhsILChu8YSpVV0HwRQCzdGAz53wDkCRLiAEVGDDu6E6KxPAHE0TIkTxHMcUWx7N6405QrcBimTcTN7pBpFA7pvFexUasPj10iUIFeaszpiRT2aQDaqLGaxvta6J5UxIUmAp+wGdV/juGEvQ="}
  ```

#### 响应参数

* Response Header  

  |参数|是否必选|参数类型|描述|
  |:-----------|:---|:-----|:----------------------------------|
  |Content-Type|是|String|取值为：application/json; charset=UTF-8|

<!-- -->

* Response Body  

  |参数|是否必选|参数类型|描述|
  |:---------------|:---|:--------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------|
  |resultCode|是|String|返回码，"000000"表示成功，其他表示见错误码。|
  |resultDesc|是|String|结果描述。|
  |subCode|否|String|业务错误码。|
  |subDesc|否|String|业务错误描述信息。|
  |sign|是|String|签名值。用于开发者对响应报文进行防篡改验证。|
  |spMercNo|否|String|服务商户号。|
  |subMercNo|否|String|特约商户号。|
  |spAppId|否|String|平台类商户/服务商关联的AppID（参考[商户号绑定AppID](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/binding-appid-to-merc-0000001889931817)）。|
  |subappId|否|String|特约商户的AppID（参考[商户号绑定AppID](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/binding-appid-to-merc-0000001889931817)）。|
  |contractId|否|String|委托代扣协议ID。|
  |mercContractCode|否|String|商户签约协议号。|
  |planId|否|String|模板号（默认值100）。|
  |signedTime|否|String|签约时间，格式：yyyy-MM-dd hh:mm:ss。|
  |expireDate|否|String|签约过期时间，格式：yyyy-MM-dd。|
  |signStatus|否|String|签约状态。 * 1：已签约 * 9：已解约|
  |payer|否|[PayerOut](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-data-model-0000001538219104#section14195124713166)|用户支付时客户端信息。|

<!-- -->

* 响应示例

  ```
  HTTP/1.1 200 OK
  Content-Type: application/json; charset=UTF-8
  {
    "mercContractCode": "2024020316555432***",
    "signedTime": "2023-09-01 09:01:25",
    "resultCode": "000000",
    "sign": "MEUCIQDQ206irxpkVWGQPN368FKvCuV5********************zAgsKCEyx/O9Dvy1CaNnXaKU+uZBnrJmdhm5aG4JM=",
    "contractId": "2024070914615843071097***",
    "planId": "1***",
    "expireDate": "2099-12-31",
    "resultDesc": "success",
    "spMercNo": "101540000***",
    "subMercNo":"101320000***"
  }
  ```

#### 错误码

(resultCode非400000的错误码请看[公共错误码说明](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-error-code-description-0000001589053741#section1187515498410))  

|resultCode|resultDesc|subCode|subDesc|
|:---------|:---------|:--------------------|:-----------|
|400000|业务处理失败|UNKNOW_ERROR|服务暂不可用，请稍后重试|
|400000|业务处理失败|CUST_NOT_EXIST|用户不存在或已销户|
|400000|业务处理失败|CHECK_CONTRACT_STATUS|签约号无效|

