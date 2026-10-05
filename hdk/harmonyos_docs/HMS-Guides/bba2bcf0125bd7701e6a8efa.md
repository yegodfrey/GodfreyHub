---
name: document/cn/HMS-Guides/iap-subscription-service-purchase-token-verification-v4
title: Subscription服务验证购买Token
uri: https://developer.huawei.com/consumer/cn/doc/HMS-Guides/iap-subscription-service-purchase-token-verification-v4
source: portal
---

在完成一笔支付后，华为IAP客户端会返回商品购买单详情JSON字符串[](https://developer.huawei.com/consumer/cn/doc/HMS-References/iap-InAppPurchaseData)[InAppPurchaseData](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/iap-InAppPurchaseData)和签名字符串inAppDataSignature。[InAppPurchaseData](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/iap-InAppPurchaseData)中有用于唯一标识商品和用户对应关系的purchaseToken。

通过签名验证，可确保[InAppPurchaseData](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/iap-InAppPurchaseData)有效性。您还可以解析出[InAppPurchaseData](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/iap-InAppPurchaseData)中的purchaseToken数据，调用华为应用内支付服务器提供的Subscription服务验证购买Token接口，用于对已经购买的商品提供服务之前，对购买进行校验。一般应该判断商品是否已经成功购买，对于订阅商品返回最近的收费情况，包括什么时候收费以及是否在有效期内。

注意：

该接口只针对订阅型商品。

具体实现可参考 [Subscription 服务验证购买 Token](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/iap-api-subscription-service-purchase-token-verification-v4)。

  

