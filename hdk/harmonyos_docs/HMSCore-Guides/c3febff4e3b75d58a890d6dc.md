---
name: document/cn/HMSCore-Guides/payment-merchant-withhold-quick-app-dev-0000001827755660
title: 快速接入
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/payment-merchant-withhold-quick-app-dev-0000001827755660
---

# 快速接入

## 接入流程

商户签约接入代扣流程：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/72/v3/f5lq0nJzRWOobiuxDL8TJg/zh-cn_image_0000002512199999.png?HW-CC-KV=V1&HW-CC-Date=20260910T132632Z&HW-CC-Expire=31536000000&HW-CC-Sign=A67828FC418E2F3EDCD6EB03FC05F4751C9DC2C7A235CB253D92623FCEB35D22)

1. 用户发起签约后，商户快应用向商户服务器发起创建签约订单请求。
2. 商户服务器携带商户签约协议号和协议模板Id，请求[快应用预签约](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-partner-quickapp-presign-0000001868173305)接口。
3. 华为支付服务器返回预签约号（preSignNo）,再由服务器组客户端拉起华为支付服务签约界面的入参（[contractStr](#ZH-CN_TOPIC_0000002512279643__li44301824802)）返回给商户客户端。
4. 商户快应用调用[signContract](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/quick-app-client-hms-aggrpay-0000001538347902#section178573211111)接口调起华为支付服务签约界面。
5. 用户在华为支付签约界面完成签约。
6. 签约成功后，华为支付服务器会调用商户入参的callbackUrl接口，返回签约结果给商户服务器，签约失败不会有签约结果回调通知。
7. 商户服务器收到签约结果回调响应后，使用SM2验签方式对签约结果进行验签。
8. 签约完成后，商户可以调用[免密代扣](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-partner-apply-withhold-0000001868173313)接口，进行用户扣款。
9. 扣款成功，华为支付服务器会返回异步结果给商户服务器，使用SM2验签方式对签约结果进行验签；代扣失败场景可能不会有代扣结果回调通知。

> 说明
>
> 代扣是否成功可以通过回调通知中的orderStatus的返回状态判断：
>
> * TRX_SUCCESS：交易成功
> * TRX_FAILED：交易失败

## 客户端开发

* **获取contractStr接口入参**

商户服务器通过调用[快应用预签约](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-partner-quickapp-presign-0000001868173305)获取预签约号（preSignNo）后商户服务器需要组 contractStr返回给客户端。

* **contractStr参数说明**

|**参数**|**参数类型**|**是否必填**|**描述**|
|:--------|:-------|:-------|:-----------------------------------------------------------------------------------------------------------------------------------------|
|appId|String|是|应用ID。|
|preSignNo|String|是|预签约号，使用[快应用预签约](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-partner-quickapp-presign-0000001868173305)请求生成，有效期2小时。|

* **contractStr** **示例**

  ```screen
  "{\"appId\":\"***\",\"preSignNo\": \"12314834585462\"}"
  ```

* **调起签约界面**

开发者可使用@hw-hmscore/hms-payment的HMSPAYMENT对象方法拉起签约页面。

```screen
const contractStr = "{\"preSignNo\": \"12314834585462\"}";
const appId = "***";
HMSPAYMENT.signContract(contractStr, appId).then(res => {
        console.info("contract res: "+ JSON.stringify(res));
        // 参考下表解析res,此处可以处理支付结果，界面刷新和跳转等操作
      }).catch(err => {
            console.error("contract err: "+ JSON.stringify(err));
         })
```

签约结果获取和处理

1. 调用signContract接口后同步返回签约结果，通过Handler发送消息在主线程处理签约结果。 **回调结果说明**

   |**参数**|**参数类型**|**描述**|**参考示例**|
   |:------|:-------|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   |errCode|String|返回码|见[HMS Core SDK错误码](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/error-code-0000001050045846)说明|
   |errMsg|String|返回信息描述|示例："{\"ContractResult\":\"{\\\"openId\\\":\\\"*****\\\",\\\"returnCode\\\":\\\"0\\\",\\\"returnMsg\\\":\\\"success\\\",\\\"signNo\\\":\\\"*******\\\"}\"}" **returnCode为0时表示成功，具体返回参考[错误码](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/quick-app-client-error-code-0000001538667594)**|

2. 商户在构建预签约请求参数时，传入了一个callbackUrl。在华为支付服务器完成签约后，将以post方式调用callbackUrl，将签约结果返回给商户服务器。

> 注意
>
> **最终签约结果，需以服务器接收到的结果通知或者查询API返回为准。**

## API列表

APP签约API列表

|功能列表|描述|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[快应用预签约](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-partner-quickapp-presign-0000001868173305)|通过本接口提交华为支付快应用签约订单信息，同时获取华为支付预签约号（preSignNo）。|
|[快应用调起签约代扣界面](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/quick-app-client-hms-aggrpay-0000001538347902#section178573211111)|商户服务器通过[快应用预签约](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-partner-quickapp-presign-0000001868173305)获取必要参数preSignNo,按照接口规则组参orderStr返回给客户端，客户端通过华为支付服务 JS SDK拉起APP签约。|
|[签约结果通知回调](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-partner-notify-sign-result-0000001821573668)|华为支付服务器调用[快应用预签约](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-partner-quickapp-presign-0000001868173305)传入的callbackUrl接口，将用户签约关键事件通知给商户。|
|[查询签约订单](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-partner-query-sign-info-0000001868213497)|通过本接口查询某笔签约订单信息。|
|[申请解约](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-partner-apply-unsign-0000001868213501)|当用户申请解约时，商户可以调用此接口解除签约关系。|
|[解约结果通知回调](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-partner-notify-unsign-result-0000001821413860)|当用户申请解约完成后，华为支付服务器会调用签约模板中配置的callbackUrl回调地址，将解约的关键事件返回给商户服务器。|
|[发起免密代扣](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-partner-apply-withhold-0000001868173313)|已签约的用户，商户可以直接调用接口发起免密代扣服务。|
|[代扣结果回调通知](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-partner-withhold-notify-result-0000001970239429)|华为支付代扣完成后，华为支付服务器调用开发者请求申请代扣接口时传入的Url向开发者服务器发送支付关键事件通知。|
|[查询代扣订单](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-partner-withhold-query-order-0000001943240294)|商户用此接口查询已经存在的交易订单状态。|
|[申请代扣退款](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-partner-withhold-apply-refund-0000001970239433)|此接口提供给用户退款使用。|
|[代扣退款结果通知回调](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-partner-withhold-notify-refund-result-0000001943240298)|开发者完成退款申请成功后，华为支付服务器调用开发者请求代扣退款接口时传入的Url向开发者服务器发送退款关键事件。|
|[查询代扣退款订单](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-partner-withhold-query-refund-0000001943080970)|调用退款申请后，调用此接口查询退款订单状态。|
|[查询对账单](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-partner-base-payment-load-trade-bill-0000001644250229#section0108144213416)|提供给商户下载对账账单。|
|[查询结算账单](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-partner-base-payment-load-settle-bill-0000001644012081#section0108144213416)|提供给商户下载结算账单。|

