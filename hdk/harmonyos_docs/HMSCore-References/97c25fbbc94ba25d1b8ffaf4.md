---
name: document/cn/HMSCore-References/json-inapppurchasedata-0000001050986125
title: InAppPurchaseData
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/json-inapppurchasedata-0000001050986125
---

# InAppPurchaseData

InAppPurchaseData JSON类型用于保存用户购买信息，包括消耗型商品、非消耗型商品以及订阅型商品。

|参数|是否必选|类型|说明|
|:-------------------|:---|:------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|applicationId|是|Long|应用ID。|
|autoRenewing|是|Boolean|消耗型商品或者非消耗型商品：固定为false。 订阅型商品： * true：订阅处于活动状态并且将在下一个结算日期自动续订。 * false：用户已经取消订阅。 用户可以在下一个结算日期之前访问订阅内容，并且在该日期后将无法访问，除非重新启用自动续订。 如果提供了宽限期，只要宽限期未过，此值就会对所有订阅保持设置为true。 下一次结算日期每天都会自动延长，直至宽限期结束，或者用户更改付款方式。|
|orderId|是|String|订单ID，唯一标识一笔需要收费的收据，由华为应用内支付服务器在创建订单以及订阅型商品续费时生成。 每一笔新的收据都会使用不同的orderId。|
|kind|是|Integer|商品类别，取值包括： * 0：消耗型商品 * 1：非消耗型商品 * 2：订阅型商品|
|packageName|否|String|应用安装包名。|
|productId|是|String|商品ID。每种商品必须有唯一的ID，由应用在PMS中维护，或者应用发起购买时传入。 > 说明 > 为避免资金损失，您在对支付结果验签成功后，必须对其进行校验。|
|productName|否|String|商品名称。|
|purchaseTime|否|Long|商品购买时间，UTC时间戳，以毫秒为单位。 如果没有完成购买，则没有值。|
|purchaseTimeMillis|否|Long|历史接口兼容用，同purchaseTime，新接入无需关注本字段。|
|purchaseState|是|Integer|订单交易状态。 * -1：初始化 * 0：已购买 * 1：已取消 * 2：已退款 * 3：待处理|
|developerPayload|否|String|商户侧保留信息，由您在调用支付接口时传入。|
|developerChallenge|否|String|应用发起消耗请求时自定义的挑战字，可唯一标识此次消耗请求，仅一次性商品存在。|
|consumptionState|否|Integer|消耗状态，仅一次性商品存在，取值包括： * 0：未消耗 * 1：已消耗|
|confirmed|否|Integer|确认状态，取值包括： * 0 ：未确认 * 1：已确认 * 没有值表示不需要确认 > 说明 > 该字段当前仅做兼容用，您无需关注。|
|purchaseToken|是|String|用于唯一标识商品和用户对应关系的购买令牌，在支付完成时由华为应用内支付服务器生成。 > 说明 > * 该字段是唯一标识商品和用户对应关系的，在订阅型商品正常续订时不会改变。 > * 当前92位，后续存在扩展可能，如要进行存储，建议您预留128位的长度。 > * 如要进行存储，为保证安全，建议加密存储。|
|purchaseType|否|Integer|购买类型。 * 0：沙盒环境。 * 1：促销，暂不支持。 正式购买不会返回该参数。|
|currency|否|String|定价货币的币种，请参见[ISO 4217](https://www.iso.org/iso-4217-currency-codes.html)标准。 > 说明 > 为避免资金损失，您在对支付结果验签成功后，必须对其进行校验。|
|price|否|Long|商品实际价格*100以后的值。商品实际价格精确到小数点后2位，例如此参数值为501，则表示商品实际价格为5.01。 > 说明 > 为避免资金损失，您在对支付结果验签成功后，必须对其进行校验。|
|country|否|String|国家/地区码，用于区分国家/地区信息，请参见[ISO 3166](https://www.iso.org/iso-3166-country-codes.html)标准。|
|payType|否|String|支付方式，取值请参见[payType说明](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/server-data-model-0000001050986133#section135412662210)。|
|payOrderId|否|String|交易单号，用户支付后生成。|
|**以下参数只在订阅场景返回**。||||
|lastOrderId|是|String|上次续期收款的订单ID，由支付服务器在续期扣费时生成。首次购买订阅型商品时的lastOrderId与orderId数值相同。|
|productGroup|否|String|订阅型商品所属的订阅组ID。|
|oriPurchaseTime|否|Long|原购买时间，UTC时间戳，以毫秒为单位。|
|subscriptionId|否|String|订阅ID。|
|oriSubscriptionId|否|String|原订阅ID。有值表示当前订阅是从其他商品切换来的，该值可以关联切换前的商品订阅信息|
|quantity|否|Integer|购买数量。|
|daysLasted|否|Long|已经付费订阅的天数，免费试用和促销期周期除外。|
|numOfPeriods|否|Long|成功标准续期（没有设置促销的续期）的期数，为0或者不存在表示还没有成功续期。|
|numOfDiscount|否|Long|成功促销续期期数。|
|expirationDate|否|Long|订阅型商品过期时间，UTC时间戳，以毫秒为单位。 对于一个成功收费的自动续订收据，该时间表示续期日期或者超期日期。如果商品最近的收据的该时间是一个过去的时间，则订阅已经过期。|
|expirationIntent|否|Integer|对于已经过期的订阅，表示过期原因，取值包括： * 1：用户取消 * 2：商品不可用 * 3：用户签约信息异常 * 4：Billing错误 * 5：用户未同意涨价 * 6：未知错误 同时有多个异常时，优先级为：1 > 2 > 3...|
|retryFlag|否|Integer|一个过期的订阅，系统是否仍然在尝试自动完成续期处理。取值包括： * 0：终止尝试 * 1：仍在尝试完成续期|
|introductoryFlag|否|Integer|是否处于促销价续期周期内。 * 1：是 * 0：否|
|trialFlag|否|Integer|是否处于免费试用周期内。 * 1：是 * 0：否|
|cancelTime|否|Long|订阅撤销时间，发生退款且服务立即不可用，UTC时间戳，以毫秒为单位。 在顾客投诉，通过客服撤销订阅，或者顾客升级、跨级到同组其他商品并且立即生效场景下，需要撤销原有订阅的上次收据时有值。 > 说明 > 已经撤销的收据等同于没有完成购买。|
|cancelReason|否|Integer|取消原因。 * 0：其他原因取消，比如顾客错误地订阅了商品。 * 1：顾客因为在App内遇到了问题而取消了订阅。 * 2：顾客升级、跨级等。 * 3：您主动发起的退款、撤销等。如果cancelTime同时为空，表示是返还订阅费用场景。 * 4：订阅失效且超出保留期。 * 7：订阅切换。 > 说明 > 如果为空且cancelTime有值，表示是升级等操作导致的取消。|
|appInfo|否|String|App信息，预留。|
|notifyClosed|否|Integer|用户是否已经关闭订阅上的通知。 * 1：是 * 0：否 关闭状态下，订阅相关的通知均不会发送给用户。|
|renewStatus|否|Integer|续期状态。 * 1：当前周期到期时自动续期 * 0：用户停止了续期 仅针对自动续期订阅，对有效和过期的订阅均有效，并不代表顾客的订阅状态。通常，取值为0时，应用可以给顾客提供其他的订阅选项，例如推荐一个同组更低级别的商品。该值为0通常代表着顾客主动取消了该订阅。|
|priceConsentStatus|否|Integer|商品提价时的用户意见。 * 1：用户已经同意提价 * 0：用户未采取动作，超期后订阅失效|
|renewPrice|否|Long|下次续期价格。在有priceConsentStatus情况下，供客户端参考，用于提示用户新的续期价格。|
|subIsvalid|否|Boolean|* true：表示商品已经收费且未过期，也没有发生退款；商品处于宽限期。您可以基于该标志为顾客提供服务。 * false：未完成购买或者已经过期，或者购买后已经退款。 > 说明 > 如果顾客已经取消订阅，在已经购买的商品过期之前，subIsvalid仍然为True。|
|deferFlag|否|Integer|是否延迟结算。 * 1：是 * 其他：否|
|cancelWay|否|Integer|取消订阅途径。 * 0：顾客 * 1：您 * 2：华为|
|cancellationTime|否|Long|取消订阅时间，UTC时间戳，以毫秒为单位。 > 说明 > cancellationTime特指订阅续期停止，不涉及退款。|
|cancelledSubKeepDays|否|Integer|用户取消后订阅关系保留的天数，并不表示本订阅已经取消。|
|resumeTime|否|Long|一个暂停的订阅恢复的时间，UTC时间戳，以毫秒为单位。|
|graceExpirationTime|否|Long|订阅型商品宽限期过期的时间，UTC时间戳，以毫秒为单位。|

