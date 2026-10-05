---
name: document/cn/HMS-3-References/81075247
title: HAEventType
uri: https://developer.huawei.com/consumer/cn/doc/HMS-3-References/81075247
source: portal
---

class info  
---  
com.huawei.hms.analytics.type.HAEventType  
此类提供了获取Analytics Kit实例的方法。  
Enum name| Enum  description  
---|---  
String HA_ADD_PAYMENT_INFO| 结算过程中，用户已经添加付款信息，但尚未发起支付时，上报此事件。  
此事件可以与$HA_BEGIN_CHECKOUT、$HA_ECOMMERCE_PURCHASE组合使用，构建结算过程的漏斗分析。  
String $HA_ADD_TO_CART| 用户添加商品到购物车时，上报此事件。  
此事件可以与$HA_VIEW_ITEM、$HA_BEGIN_CHECKOUT组合使用，构建商品购买的漏斗分析；也可用于分析用户对开发者的哪些商品感兴趣，进而对这些用户进行营销。  
String HA_ADD_TO_WISHLIST| 用户添加商品到收藏夹时，上报此事件。  
可用于分析用户对开发者的哪些商品感兴趣，进而对这些用户进行营销。  
String HA_APP_OPEN| 用户打开应用时，上报此事件。  
String HA_BEGIN_CHECKOUT| 用户下单后，点击结算按钮时，触发此事件。可以与$VIEW_ITEM、$HA_ECOMMERCE_PURCHASE等事件结合使用，用于分析电商购买漏斗转化情况。  
String HA_CAMPAIGN_DETAILS| 用户参考一个营销活动的内容时，触发此事件。可以用于分析评价营销活动的转化情况。  
String HA_CHECKOUT_PROGRESS| 用户开始结算后，如果结算过程包括多个步骤，可以在每个步骤完成后，上报此事件。可以用于分析结算过程各个步骤的转化情况，优化产品设计。  
String HA_EARN_VIRTUAL_CURRENCY| 用户获取到虚拟货币时，上报此事件。可以用于分析用户获取虚拟币的难易程度，优化产品设计。  
String HA_ECOMMERCE_PURCHASE| 用户购买商品后，上报此事件。可以用于分析用户对哪些商品或内容更感兴趣，优化运营策略。  
String HA_GENERATE_LEAD| 获取到销售线索时，上报此事件。如开发者投放了广告，用于获取用户的联系方式，用户点击投放广告且填写并提交了联系方式时，可以上报该事件，以评估本次获取到的线索可能会给开发者带来的收入。可以用于评估投放广告的ROI。  
String HA_JOIN_GROUP| 用户加入群组时，上报此事件。如社交类App，用户加入群聊。可以用于评价产品的社交特性对用户的吸引力。  
String HA_LEVEL_END| 游戏类应用，用户完成某个关卡，上报此事件。可以与$HA_LEVEL_START结合使用，分析游戏关卡设计是否合理，有针对性地制定优化策略。  
String HA_LEVEL_START| 游戏类应用，用户进入某个关卡，开始游戏时，上报此事件。可以与$HA_LEVEL_END结合使用，分析游戏关卡设计是否合理，有针对性地制定优化策略。  
String HA_LEVEL_UP| 游戏应用中用户升级时，上报此事件。分析产品的用户等级设置是否合理，有针对性地制定优化策略。  
String HA_LOGIN| 有登录功能的应用，用户登录时上报此事件。分析用户的登录习惯，有针对性的制定运营策略。  
String HA_POST_SCORE| 游戏/教育类应用中，用户提交分数时，上报此事件。用于分析产品内容的难易程度，有针对性的制定优化策略。  
String HA_PRESENT_OFFER| 展示订单详情，用户开始结算之前上报此事件。可以和$HA_VIEW_ITEM、$HA_ECOMMERCE_PURCHASE等事件组合使用，构建分析漏斗，分析用户在各个环节的流失情况，制定优化策略。  
HA_PURCHASE_REFUND| 用户退款成功后，上报此事件。可以分析退款造成的损失，有针对性得制定优化策略。  
String HA_REMOVE_FROM_CART| 用户将商品从购物车中移除时，上报此事件。可以对相关用户进行营销。  
String HA_SEARCH| 用户在应用内搜索内容时，上报此事件。可以与$HA_SEARCH_RESULTS、$HA_VIEW_ITEM等事件结合使用，分析搜索结果的准确性。  
String HA_SELECT_CONTENT| 用户点击内容时，上报此事件。如在电商应用内，点击列表中的某个商品以参考详情。可以分析用户对哪些商品感兴趣。  
String HA_SET_CHECKOUT_OPTION| 结算过程中，用户填写一些结算选项时，上报此事件。可以分析用户的结算偏好。  
String HA_SHARE| 用户通过社交渠道分享商品或内容时，上报此事件。可以分析用户对产品的忠诚度。  
String HA_SIGN_UP| 用户注册账号时，上报此事件。可以分析用户来源，有针对性得优化运营策略。  
String HA_SPEND_VIRTUAL_CURRENCY| 用户消费虚拟币时，上报此事件。可以用于分析用户对哪些产品更感兴趣。  
String HA_TUTORIAL_BEGIN| 用户开始使用引导教程时，上报此事件。可以与$HA_TUTORIAL_COMPLETE结合使用，评价引导教程的质量，有针对性得制定优化措施。  
String HA_TUTORIAL_COMPLETE| 用户完成引导教程时，上报此事件。可以与HA_TUTORIAL_BEGIN结合使用，评价引导教程的质量，有针对性得制定优化措施。  
String HA_UNLOCK_ACHIEVEMENT| 用户达成某项新成就时，上报此事件。可以衡量成就等级设计是否合理，并有针对性得制定优化策略。  
String HA_VIEW_ITEM| 用户浏览商品时，上报此事件。可以分析用户对哪些商品感兴趣，也可用和其他事件组合完成漏斗分析。  
String HA_VIEW_ITEM_LIST| 浏览商品列表时，上报此事件。如用户按分类查看商品列表时。可以分析用户对哪些类型的内容更感兴趣。  
String HA_VIEW_SEARCH_RESULTS| 用户查看搜索结果时，上报此事件。与$HA_VIEW_ITEM、$HA_SEARCH组合使用，衡量搜索算法的准确性。  
String HA_RATE| 用户在应用内给应用内的内容进行评分、评级时，上报此事件。可以分析用户对产品的忠诚度及产品对用户的吸引力。  
String HA_INVITE| 用户在应用内邀请其他用户时，上报此事件。可以分析用户对产品的忠诚度。  
String HA_NOTIFICATION_CLICK| Push点击事件上报。
