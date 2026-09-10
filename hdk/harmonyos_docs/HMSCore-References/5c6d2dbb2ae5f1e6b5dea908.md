---
name: document/cn/HMSCore-References/payment-merc-coup-api-ucoup-distribute-0000001872004165
title: 发放优惠券
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/payment-merc-coup-api-ucoup-distribute-0000001872004165
---

# 发放优惠券

#### 功能介绍

发放商家券，支持一个请求最大发放10张券，可以是一个批次下的多张，也可以是多个批次下的券，多个批次一起发放时一个批次发放失败，不影响其它批次的处理。  

#### 接口原型

|承载协议|HTTPS POST|
|接口方向|开发者服务器-\> 华为支付服务器|
|接口URL|https://petalpay-developer.cloud.huawei.com.cn/api/merchantgrow/v1/merchantcoupon/couponbatch/distribute|
|数据格式|请求消息：Content-Type: application/json 响应消息：Content-Type: application/json|
|-----|--------------------------------------------------------------------------------------------------------|

#### 请求参数

* Request Header  

  |参数|是否必选|参数类型|描述|
  |:-----------|:---|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------|
  |Content-Type|是|String|取值为：application/json; charset=UTF-8|
  |PayMercAuth|是|String|取值为：[PayMercAuth](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-data-model-0000001538219104#section11744172016145)的JSON串|

* Request Body  

  |参数|是否必选|类型|说明|
  |:---------|:---|:------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------|
  |requestNo|是|String|请求号，由商户随机生成，不同请求要求唯一。最小长度为1，最大长度为64。 注意： 用于保证幂等。对不同请求，requestNo的值要求不一样；对于相同请求，值要求一样，比如超时场景，可通过requestNo一样进行重试。|
  |appId|是|String|当前调用接口商户号有绑定关系的AppID。最小长度为1，最大长度为32。|
  |openId|是|String|用户的OpenId。最小长度为1，最大长度为256。|
  |coupons|是|List\<[SendCouponInfo](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/payment-merc-coup-model-0000001892914453#section1110971445819)\>|待发券的批次信息和券码。列表最小长度为1，最大长度为10。|
  |deviceInfo|否|[DeviceInfo](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/payment-merc-coup-model-0000001892914453#section10235105184413)|用户的设备信息，风控时使用，提升风控的准确度。|

* 请求示例

  ```
  POST /api/merchantgrow/v1/merchantcoupon/couponbatch/create HTTP/1.1
  PayMercAuth: {"callerId":"10132120***","traceId":"202305151026422776499","time":1684117602555,"authId":"120291744647139***","headerSign":"u+H1Oe3fXV9mGCES89XA7tSjp8+TELYgG4bKyECwrVGwwExHtdWTnKc4WvEpfjLzpzKE2/+K*********************/z0UcN9QrxXSeR8r6X46b7491N1jKg/lOG7eAFfwjEWJu5JyvY5KunSeE6DiKs=","bodySign":"yWDtXOBqDoItPgHmF57L6U5G7F/LhsILChu8YSpVV0HwRQCzdGAz53wDkCRLiAEVGDDu6E6KxPAHE0TIkTxH*********************iUIFeaszpiRT2aQDaqLGaxvta6J5UxIUmAp+wGdV/juGEvQ="}
  Content-Type: application/json
  {
    "requestNo": "REQ000003",
    "appId": "App00001",
    "openId": "Open00001232",
    "coupons": [
      {
        "batchNo": "PV1202602041321081878538742919089024",
        "sendNum": 1
      }
    ],
    "deviceInfo": {
      "deviceId": "DEV002321",
      "deviceIdType": "UDID",
      "deviceModel": "MODEL00001",
      "riskToken": "TOKEN000023124",
      "clientIp": "10.10.10.10",
      "clientVersion": "V100100100",
      "packageName": "com.huawei.coupon"
    }
  }
  ```

  ![](https://media:201774590632226632)  
  示例对应的签名串以及字段排序如下，如果报签名相关错误，先检查对应的body签名串是否一致。

"appId=App00001\&coupons=batchNo=PV1202602041321081878538742919089024\&sendNum=1\&deviceInfo=clientIp=10.10.10.10\&clientVersion=V100100100\&deviceId=DEV002321\&deviceIdType=UDID\&deviceModel=MODEL00001\&packageName=com.huawei.coupon\&riskToken=TOKEN000023124\&openId=Open00001232\&requestNo=REQ000003"。  

#### 响应参数

* Response Header  

  |参数|是否必选|参数类型|描述|
  |:-----------|:---|:-----|:----------------------------------|
  |Content-Type|是|String|取值为：application/json; charset=UTF-8|

* Response Body  

  |参数|是否必选|参数类型|描述|
  |:-------------|:---|:---------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  |resultCode|是|String|返回码，"000000"表示成功，其他表示见错误码。|
  |resultDesc|是|String|结果描述。|
  |subCode|否|String|业务错误码。|
  |subDesc|否|String|业务错误描述信息。|
  |sign|是|String|签名信息，除"sign"字段以外的其他字段参与签名。|
  |signType|否|String|签名类型。华为支付生成签名字符串使用的算法，当前为SM2算法。|
  |certNo|否|String|签名所使用的证书编号。|
  |distributeTime|否|String|系统成功发券的时间，格式为yyyy-MM-dd'T'HH:mm:ss.SSSZ，yyyy-MM-DD表示年月日，T出现在字符串中，表示time元素的开头，HH:mm:ss.SSS表示时分秒，Z为对应的时区。例如：2023-03-28T17:50:12.000+0800表示，北京时间2023年3月28日 17点50分12秒。注意：要使用必须传准确的UTC时间。|
  |succResults|否|List\<[BatchCoupons](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/payment-merc-coup-model-0000001892914453#section101141685820)\>|成功发券的结果信息。|
  |failResults|否|List\<[FailResult](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/payment-merc-coup-model-0000001892914453#section516701216583)\>|失败发券的结果信息。|

* 响应示例

  ```
  HTTP/1.1 200 OK
  Content-Type: application/json; charset=UTF-8
  {
    "resultCode": "000000",
    "resultDesc": "Success.",
    "sign":"MEQCIEIWzdpziRyTi8vhwWHFuDdxf********************CHljer0YAMabeCgTDG77e+2XJItvq/ZkIcCN5/B20pQ==",
    "batchNo": "PV1202403211136181382014597367613568",
    "openId": "OPEN_02032411234234",
    "distributeTime": "2024-03-23T16:42:12.000+0800",
    "succResults": [
      {
        "batchNo": "PV1202403211136181382014597367613568",
        "couponCodes": ["C1"]
      }
    ]
  }
  ```

#### 错误码

(resultCode非400000的错误码请看[公共错误码说明](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-error-code-description-0000001589053741#section1187515498410))  

|----------|----------|------------------------------------|-------------------------------------------------------------|
|resultCode|resultDesc|subCode|subDesc|
|400000|业务处理失败|UNKNOW_ERROR|服务暂不可用, 请稍后重试|
|400000|业务处理失败|INVALID_ARGUMENTS|参数不合法|
|400000|业务处理失败|INVALID_MERC_NO|无效商户号|
|400000|业务处理失败|CHECK_MERC_STATUS|商户状态校验失败|
|400000|业务处理失败|INVALID_APPID|Current appId does not match the appId bound to the merchant.|
|400000|业务处理失败|INSUFFICIENT_PERMISSION|商户权限受限|
|400000|业务处理失败|CUST_NOT_EXIST|用户不存在或已销户|
|400000|业务处理失败|COUPON_BATCH_NOT_EXIST|未找到待发券批次|
|400000|业务处理失败|COUPON_BATCH_INVALID_STATUS|批次已过期或暂停|
|400000|业务处理失败|COUPON_NOT_MATCH_SEND_RULE|不满足发券条件|
|400000|业务处理失败|COUPON_EXCEED_SEND_LIMIT_PER_REQUEST|超过单个请求发放上限|

