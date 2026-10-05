---
name: document/cn/HMS-References/iap-SubscribeToKeyEventNotifications-v4
title: 订阅关键事件通知
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/iap-SubscribeToKeyEventNotifications-v4
source: portal
---

# 接口功能  
  
用户在购买自动续费订阅型商品后，华为支付服务器调用此接口向开发者服务器发送订阅场景的关键事件通知。

# 调用场景

如果您在AGC申请支付服务时提前配置了订阅通知地址，用户购买订阅型商品后，华为应用内支付服务器会在订阅场景的某些关键事件发生时调用此接口通知已配置的服务器。主要涉及的场景如下：

  * 用户第一次订阅成功；

  * 因特殊原因运营客服主动取消用户的订阅；

  * 已过期的订阅自动续期成功；

  * 用户主动恢复一个已过期的订阅商品；

  * 用户调整订阅商品降级或跨级且在下个续订生效；

  * 用户主动或者App取消一个订阅商品，已经收费的服务仍然有效，但是后续续期会停止；

  * 用户主动恢复一个已经取消的订阅商品的续期状态；

  * 一个订阅商品成功续期后；

  * 一个到期的订阅商品进入账号保留期；

  * 用户同意一个订阅商品的价格上涨，后续续期将以更高的价格进行；




若开发者服务器返回结果为非成功响应（返回的http status code值为200之外的值），将对本次关键事件的通知进行周期性重发。建议在您的服务端完成最小处理后立即返回成功答应，避免通知消息堆积。

说明：

为保证可靠性，系统具备补偿机制，所以可能出现重发的通知比预期的多。

# 接口约束

不允许开发者服务器设置IP允许清单用于限制华为侧的出口IP地址。IP允许清单本身并不能提高安全性且会给业务发展带来约束，在消息层面已有更安全的RSA签名机制条件下，没有存在价值。开发者不遵守该约定而导致的后果将由开发者自行承担。

必须在开发前在AppGallery Connect中配置开发者服务器的回调地址，地址必须支持HTTPS协议且具有合法商用证书。

# 接口原型

承载协议| HTTPS POST  
---|---  
接口方向| 华为应用内支付服务器   -> 开发者服务器  
接口URL| URL由开发者在申请支付服务时配置。  
数据格式| 请求消息：Content-Type:   application/json响应消息：Content-Type:   application/json  
  
# 请求参数

参数名称| 必选(M)/可选(O)| 类型| 参数说明  
---|---|---|---  
statusUpdateNotification| M| String| 通知消息，格式为JSON字符串，具体请参考表 statusUpdateNotification。  
notifycationSignature| M| String| 对statusUpdateNotification字段的签名字符串，签名算法为SHA256WithRSA。开发者服务器在收到签名字符串后，需要参考[对响应消息验签](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/iap-verifying-signature-returned-result-v4)的方法使用支付公钥对statusUpdateNotification的JSON字符串进行验签。公钥获取参考[查询支付服务信息](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/appgallery_querypaymentinfo)。  
  
  


表1 statusUpdateNotification

参数名称| 必选(M)/可选(O)| 类型| 参数说明  
---|---|---|---  
environment| M| String| 发送通知的环境。

  * PROD：正式环境
  * SandBox：沙盒测试

  
notificationType| M| Integer| 通知事件的类型。具体请参考表notificationType。  
subscriptionId| M| String| 订阅ID  
cancellationDate| O| Long| 时间戳，仅在notificationType取值为CANCEL的场景下会传入。  
orderId| M| String| 订阅续费收款订单号。  
latestReceipt| O| String| 最近的一笔收据的token，仅在notificationType取值为INITIAL_BUY 、RENEWAL或INTERACTIVE_RENEWAL并且续期成功情况下传入。  
latestReceiptInfo| O| String| 最近的一笔收据，JSON字符串格式，包含的参数请参见 [InAppPurchaseDetails](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/iap-InAppPurchaseDetails-v4)，在notificationType取值为CANCEL时无值。  
latestReceiptInfoSignature| O| String| 对latestReceiptInfo的签名字符串，签名算法为SHA256WithRSA。开发者服务器在收到签名字符串后，需要参考[对响应消息验签](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/iap-verifying-signature-returned-result-v4)的方法使用支付公钥对latestReceiptInfo的JSON字符串进行验签。公钥获取参考[](https://developer.huawei.com/consumer/cn/service/hms/doc/hmssdk_jointOper_querypayinfoV3.html)[查询支付服务信息](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/appgallery_querypaymentinfo)。  
latestExpiredReceipt| O| String| 最近的一笔过期收据的token，仅在notificationType取值为RENEWAL或INTERACTIVE_RENEWAL时有值。  
latestExpiredReceiptInfo| O| String| 最近的一笔过期收据，JSON字符串格式，在notificationType取值为RENEWAL或INTERACTIVE_RENEWAL时有值。  
latestExpiredReceiptInfoSignature| O| String| 对latestExpiredReceiptInfo的签名字符串，签名算法为SHA256WithRSA。开发者服务器在收到签名字符串后，需要参考[对响应消息验签](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/iap-verifying-signature-returned-result-v4)的方法使用支付公钥对latestExpiredReceiptInfo的JSON字符串进行验签。公钥获取参考[](https://developer.huawei.com/consumer/cn/service/hms/doc/hmssdk_jointOper_querypayinfoV3.html)[查询支付服务信息](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/appgallery_querypaymentinfo)。  
autoRenewStatus| M| Integer| 续期状态。取值说明：

  * 1 ：当前周期到期后正常续期
  * 0 ：用户已终止续期

  
refundPayOrderId| O| String| 退款订单号，在notificationType取值为CANCEL时有值。  
productId| M| String| 订阅商品ID。  
applicationId| O| String| 应用ID。  
expirationIntent| O| Integer  
| 超期原因，仅在notificationType为RENEWAL或INTERACTIVE_RENEWAL时并且续期成功情况下有值。  
  
说明：

支付后拿到的最新的purchaseToken，表示该商品和该用户的对应关系。

latestReceipt表示当前成功收费收据的token。latestExpiredReceipt表示上个周期收据的token。

若该商品付款续期成功，则：

如果是续期订阅，purchaseToken与latestReceipt相同；如果是切换订阅，purchaseToken与latestReceipt不同。

**表2** notificationType说明

取值| 取值说明  
---|---  
INITIAL_BUY(0)| Integer，订阅的第一次购买行为。  
CANCEL(1)| Integer，客服或者App撤销了一个订阅，通过cancellationDate可以获得撤销时间（表示退款）。  
RENEWAL(2)| Integer，一个已经过期的订阅自动续期成功，可以通过收据中的“过期时间“获得下次续期时间。  
INTERACTIVE_RENEWAL(3)| Integer，用户主动恢复一个已经过期的订阅，或者用户在一个已经过期的商品订阅上切换到其他选项，成功后服务马上生效。  
NEW_RENEWAL_PREF(4)| Integer，顾客选择组内其他选项并且在当前订阅到期后生效，当前周期不受影响。也就是降级、跨级在下个周期生效的场景。通知会携带上次有效收据，和新的订阅信息，包括商品、订阅ID。  
RENEWAL_STOPPED(5)| Integer，订阅服务续期被用户、开发者或者HW停止，已经收费的服务仍然有效。通知内容中包含最近收据、商品、应用、订阅Id和订阅Token等信息。  
RENEWAL_RESTORED(6)| Integer，用户主动恢复了一个订阅商品，续期状态恢复正常。通知内容中包含最近收据、商品、应用、订阅Id和订阅Token等信息。  
RENEWAL_RECURRING(7)| Integer，表示一次续期收费成功，包括优惠、免费试用和沙箱。通知内容中包含最近收据、商品、应用、订阅Id和订阅Token等信息。注：INITIAL_BUY ，RENEWAL，INTERACTIVE_RENEWAL情况下，不会有RENEWAL_RECURRING，因为他们本身就表示一次成功的续期。  
IN_GRACE_PERIOD(8)| Integer，表示订阅已经到期，但是启用了Grace期限。注：当前不支持。  
ON_HOLD(9)| Integer，表示一个已经到期的订阅进入账号保留期。注：由于当前不支持Grace，所以一个订阅到期后直接进入账号保留期。  
PAUSED(10)| Integer，顾客设置暂停续期计划后，到期后订阅进入Paused状态。  
PAUSE_PLAN_CHANGED(11)| nteger，顾客设置了暂停续期计划。  
PRICE_CHANGE_CONFIRMED(12)| Integer，顾客同意了涨价。  
DEFERRED(13)| Integer，订阅的续期时间已经延期。  
  
# 返回参数  


注意：

应答HTTP结果码，200表示成功，其余值表示失败，不支持重定向。

参数名称| 必选(M)/可选(O)| 类型| 参数含义  
---|---|---|---  
errorCode| O| String| 处理失败错误码。错误码由开发者自行定义。  
errorMsg| O| String| 失败原因描述。  
  
  

