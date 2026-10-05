---
name: document/cn/HMS-Guides/event_description_iOS
title: 事件说明
uri: https://developer.huawei.com/consumer/cn/doc/HMS-Guides/event_description_iOS
source: portal
---

华为分析服务提供三类事件供开发者使用，分别为自动采集事件、预置事件、自定义事件。

**自动采集事件：** 无需埋点，只需开启采集系统事件的开关（初始化时自动开启），即可实现此类事件的自动采集。

**预置事件：** 根据常用的使用场景，Analytics SDK预先定义了部分事件ID，推荐优先使用预定义常量进行打点和分析，系统基于预置事件提供了丰富的洞察报告。

**自定义事件** ：针对自动采集事件、预置事件无法满足的个性化分析需求，开发者可上报自定义事件。

# 自动采集事件

自动采集事件的事件ID是华为分析的保留字段，不能被复用。

**事件ID**| **说明**  
---|---  
INSTALLAPP| 应用安装后，首次启动时，触发此事件。  
LAUNCHAPP| 1)  用户打开应用时，上报此事件。2)  切换后台后，超过30s再切回前台，上报此事件。  
UPDATEAPP| 当应用更新到新版本并再次启动时触发。  
APPFIRSTOPEN| 当用户安装或重新安装应用后首次启动时触发。此事件在用户首次使用应用时触发，不会在用户将应用下载到设备时触发。通过此事件可以了解启动类型、安装渠道及时间。  
ENTERSCREEN| 打开自动采集开关，进入页面时触发此事件。  
EXITSCREEN| 打开自动采集开关，退出页面时触发此事件。  
  
# 预置事件    


预置事件和参数是Analytics Kit的保留字段，自定义事件的事件ID不能与预置事件的ID重复，否则会被识别为预置事件。

## **事件ID列表**  

**类型**| **事件ID**| **事件名称**  
---|---|---  
String| CREATEPAYMENTINFO                | 添加支付信息  
String| ADDPRODUCT2CART                | 加入购物车  
String| ADDPRODUCT2WISHLIST                | 加入收藏夹  
String| STARTAPP                | 打开应用  
String| STARTCHECKOUT                | 开始结算  
String| VIEWCAMPAIGN                | 参与营销  
String| VIEWCHECKOUTSTEP                | 查看结算步骤信息  
String| WINVIRTUALCOIN                | 获取虚拟币  
String| COMPLETEPURCHASE                | 支付完成  
String| OBTAINLEADS                | 获取线索  
String| JOINUSERGROUP                | 加入群组  
String| STARTLEVEL                | 开启关卡  
String| COMPLETELEVEL                | 完成关卡  
String| UPGRADELEVEL                | 等级提升  
String| SIGNIN                | 登录  
String| SUBMITSCORE                | 提交分数  
String| CREATEORDER                | 创建订单  
String| REFUNDORDER                | 退款  
String| DELPRODUCTFROMCART                | 移除购物车中商品  
String| SEARCH                | 搜索  
String| VIEWCONTENT                | 点击内容  
String| UPDATECHECKOUTOPTION                | 填写结算选项  
String| SHARECONTENT                | 分享  
String| REGISTERACCOUNT                | 注册  
String| CONSUMEVIRTUALCOIN                | 消费虚拟币  
String| STARTTUTORIAL                | 开启教程  
String| COMPLETETUTORIAL                | 完成教程  
String| OBTAINACHIEVEMENT                | 解锁成就  
String| VIEWPRODUCT                | 查看商品  
String| VIEWPRODUCTLIST                | 查看商品列表  
String| VIEWSEARCHRESULT                | 查看搜索结果  
String| SIGNOUT            | 用户退出登录  
String| UPDATEMEMBERSHIPLEVEL            | 更新会员等级  
String| FILTRATEPRODUCT            | 筛选商品  
String| VIEWCATEGORY            | 查看商品分类  
String| UPDATEORDER            | 更新订单  
String| CANCELORDER            | 取消订单  
String| COMPLETEORDER            | 订单完成  
String| CANCELCHECKOUT            | 取消支付  
String| OBTAINVOUCHER            | 领取优惠券  
  
## 事件参数列表

1.CREATEPAYMENTINFO

结算过程中，用户已经添加付款信息，但尚未发起支付时，上报此事件。

此事件可以与STARTCHECKOUT、COMPLETEPURCHASE组合使用，构建结算过程的漏斗分析。

**参数****ID**| **参数名称**| **参数类型**| **可选****/****必选**| **参数描述**  
---|---|---|---|---  
PAYTYPE| 支付方式| String| 必选| 用户选择的支付方式。  
  
2.ADDPRODUCT2CART

用户添加商品到购物车时，上报此事件。

此事件可以与VIEWPRODUCT、STARTCHECKOUT组合使用，构建商品购买的漏斗分析；也可用于分析用户对开发者的哪些商品感兴趣，进而对这些用户进行营销。

**参数ID**| **参数名称**| **参数类型**| **可选/****必选**| **参数描述**  
---|---|---|---|---  
PRODUCTID| 商品ID| String| 必选| 被添加到购物车中的商品的ID。  
PRODUCTNAME| 商品名称| String| 必选| 被添加到购物车中的商品的名称。  
PRODUCTFEATURE| 商品特征| String| 可选| 被添加到购物车中的商品的特征。  
BRAND| 商品品牌| String| 可选| 被添加到购物车中的商品的品牌。  
CATEGORY| 商品分类| String| 必选| 被添加到购物车中的商品的分类。  
STORENAME| 店铺名称| String| 可选| 被添加到购物车中的商品来自于哪个店铺。  
QUANTITY| 购买数量| Long| 必选| 用户准备购买的数量。  
PRICE| 购买价格| Double| 可选| 商品的价格。  
REVENUE| 预计收入| Double| 可选| 用户购买此商品，预计会给开发者带来的收入。必须与CurrName同时使用。  
CURRNAME| 货币类型| String| 可选| 标识收入的货币类型。与Revenue一起使用。  
PLACEID| 位置ID| String| 可选| 商品所在地标识。  
  
 3.ADDPRODUCT2WISHLIST

用户添加商品到收藏夹时，上报此事件。

可用于分析用户对开发者的哪些商品感兴趣，进而对这些用户进行营销。

**参数ID**| **参数名称**| **参数类型**| **可选/****必选**| **参数描述**  
---|---|---|---|---  
PRODUCTID| 商品ID| String| 必选| 被添加到收藏夹中的商品的ID。  
PRODUCTNAME| 商品名称| String| 必选| 被添加到收藏夹中的商品的名称。  
PRODUCTFEATURE| 商品特征| String| 可选| 被添加到收藏夹中的商品的特征。  
BRAND| 商品品牌| String| 可选| 被添加到收藏夹中的商品的品牌。  
CATEGORY| 商品分类| String| 必选| 被添加到收藏夹中的商品的分类。  
STORENAME| 店铺名称| String| 可选| 被添加到收藏夹中的商品来自于哪个店铺。  
QUANTITY| 购买数量| Long| 必选| 用户准备购买的数量。  
PRICE| 购买价格| Double| 可选| 商品的价格。  
REVENUE| 预计收入| Double| 可选| 用户购买此商品，预计会给开发者带来的收入。必须与CURRNAME同时使用。  
CURRNAME| 货币类型| String| 可选| 标识收入的货币类型。与Revenue一起使用。  
PLACEID| 位置ID| String| 可选| 商品所在地标识。  
  
4.STARTAPP

用户打开应用时，上报此事件。

5.STARTCHECKOUT

用户下单后，点击结算按钮时，触发此事件。可以与VIEWPRODUCT、COMPLETEPURCHASE等事件结合使用，用于分析电商购买漏斗转化情况。

**参数****ID**| **参数名称**| **参数类型**| **可选****/****必选**| **参数描述**  
---|---|---|---|---  
REVENUE| 收入| Double| 可选| 会给开发者带来的收入。必须与CURRNAME同时使用。  
CURRNAME| 货币类型| String| 可选| 标识收入的货币类型。与REVENUE一起使用。  
TRANSACTIONID| 交易ID| String| 可选| 开发者交易系统生成的交易ID。  
BOOKINGDAYS| 入住天数| Long| 可选| 针对预定酒店场景，标识用户入住天数。  
BOOKINGROOMS| 预定房间数| Long| 可选| 针对预定酒店场景，标识用户预定房间数。  
PASSENGERSNUMBER| 旅客人数| Long| 可选| 针对预定酒店场景，标识入住旅客人数。  
ORIGINATINGPLACE| 出发地| String| 可选| 针对预定酒店场景，标识用户出发地。  
DESTINATION| 目的地| String| 可选| 针对预定酒店场景，标识用户目的地。  
BEGINDATE| 入住日期| String| 可选| 针对预定酒店场景，标识用户入住日期。  
ENDDATE| 离开日期| String| 可选| 针对预定酒店场景，标识用户离店日期。  
CLASS| 预定等级| String| 可选| 针对预定酒店场景，标识用户预定房间等级。  
VOUCHER| 优惠券名称| String| 可选| 用户选择的优惠券。  
SOURCE| 营销来源| String| 可选| 营销活动提供者的标识，如Huawei PPS等。  
MEDIUM| 营销类型| String| 可选| 营销活动的类型，如：CPC、Email、运营坑位、Banner等。  
PROMOTIONNAME| 营销名称| String| 可选| 营销活动的名称。  
CONTENT| 营销内容| String| 可选| 营销活动的营销内容。  
KEYWORDS| 关键词| String| 可选| 营销活动的关键词。如：搜索广告的关键词。  
MATERIALNAME| 创意名称| String| 可选| 营销活动使用的创意素材名称。  
MATERIALSLOT| 营销内容展示位置ID| String| 可选| 创意素材被展示的位置信息。  
  
6.VIEWCAMPAIGN

用户参考一个营销活动的内容时，触发此事件。可以用于分析评价营销活动的转化情况。

**参数ID**| **参数名称**| **参数类型**| **可选/****必选**| **参数描述**  
---|---|---|---|---  
SOURCE| 营销来源| String| 必选| 营销活动提供者的标识，如Huawei   PPS等。  
MEDIUM| 营销类型| String| 必选| 营销活动的类型，如：CPC、Email等。  
PROMOTIONNAME| 营销名称| String| 必选| 营销活动的名称。  
KEYWORDS| 关键词| String| 可选| 营销活动的关键词。如：搜索广告的关键词。  
CONTENT| 营销内容| String| 可选| 营销活动的营销内容。  
MATERIALNAME| 创意名称| String| 可选| 营销活动使用的创意素材名称。  
MATERIALSLOT| 营销内容展示位置ID| String| 可选| 创意素材被展示的位置信息。  
CLICKID| 广告网络标记参数| String| 可选| 广告网络生成的用于标记广告点击的参数。  
EXTENDPARAM| 自定义参数| String| 可选| 自定义参数。  
MATERIALSLOTTYPE| 展示位置类型| String| 可选| 创意素材被展示的位置类型，如：广告位、运营坑位、Banner。  
  
7.VIEWCHECKOUTSTEP

用户查看结算过程各个步骤时，上报此事件。

**参数ID**| **参数名称**| **参数类型**| **可选/****必选**| **参数描述**  
---|---|---|---|---  
STEP| 结算步骤数| String| 可选| 标识用户当前处于结算过程中的第几个步骤。  
OPTION| 结算选项| String| 可选| 当前结算步骤中用户填写的结算选项。  
  
8.WINVIRTUALCOIN

用户获取到虚拟货币时，上报此事件。可以用于分析用户获取虚拟币的难易程度，优化产品设计。

**参数ID**| **参数名称**| **参数类型**| **可选/****必选**| **参数描述**  
---|---|---|---|---  
VIRTUALCURRNAME| 虚拟货币类型名称| String| 必选| 标识用户获取到的虚拟货币类型。  
REVENUE| 虚拟货币数量| Long or Double| 必选| 用户获取到的虚拟货币数量。  
  
 9.COMPLETEPURCHASE

用户支付完成后，上报此事件。可以用于分析用户对哪些商品或内容更感兴趣，优化运营策略。

**参数****ID**| **参数名称**| **参数类型**| **可选****/****必选**| **参数描述**  
---|---|---|---|---  
PRODUCTID| 商品ID| String| 必选| 被添加到购物车中的商品的ID。  
PRODUCTNAME| 商品名称| String| 必选| 被添加到购物车中的商品的名称。  
QUANTITY| 购买数量| Long| 必选| 用户准备购买的数量。  
OCCURREDTIME| 购买时间| String| 必选| 用户购买商品的时间。  
CURRNAME| 货币类型| String| 可选| 标识收入的货币类型。与$REVENUE一起使用。  
REVENUE| 收入| Double| 可选| 本次交易会给开发者带来的收入。必须与$CURRNAME同时使用。  
TAXFEE| 税费| Double| 可选| 本次交易产生的税费。  
SHIPPING| 运输费| Double| 可选| 本次交易产生的运输费。  
VOUCHER| 优惠券| String| 可选| 用户在本次交易中使用的优惠券。  
PLACE| 位置ID| String| 可选| 商品所在地标识。  
BOOKINGDAYS| 入住天数| Long| 可选| 针对预定酒店场景，标识用户入住天数。  
BOOKINGROOMS| 预定房间数| Long| 可选| 针对预定酒店场景，标识用户预定房间数。  
PASSENGERSNUMBER| 旅客人数| Long| 可选| 针对预定酒店场景，标识入住旅客人数。  
ORIGINATINGPLACE| 出发地| String| 可选| 针对预定酒店场景，标识用户出发地。  
DESTINATION| 目的地| String| 可选| 针对预定酒店场景，标识用户目的地。  
BEGINDATE| 入住日期| String| 可选| 针对预定酒店场景，标识用户入住日期。  
ENDDATE| 离开日期| String| 可选| 针对预定酒店场景，标识用户离店日期。  
BRAND| 商品品牌| String| 可选| 关联的商品品牌。  
CATEGORY| 商品分类| String| 可选| 关联的商品分类。  
ORDERID| 订单ID| String| 可选| 开发者交易系统生成的订单ID。  
TRANSACTIONID| 交易ID| String| 可选| 开发者交易系统生成的交易ID。  
SOURCE| 营销来源| String| 可选| 营销活动提供者的标识，如HUAWEI PPS等。  
MEDIUM| 营销类型| String| 可选| 营销活动的类型，如：CPC、EMAIL、运营坑位、BANNER等。  
PROMOTIONNAME| 营销名称| String| 可选| 营销活动的名称。  
CONTENT| 营销内容| String| 可选| 营销活动的营销内容。  
KEYWORDS| 关键词| String| 可选| 营销活动的关键词。如：搜索广告的关键词。  
MATERIALNAME| 创意名称| String| 可选| 营销活动使用的创意素材名称。  
MATERIALSLOT| 营销内容展示位置ID| String| 可选| 创意素材被展示的位置信息。  
CLASS| 预定等级| String| 可选| 针对预定酒店场景，标识用户预定房间等级。  
  
10.OBTAINLEADS

获取到销售线索时，上报此事件。如开发者投放了广告，用于获取用户的联系方式，用户点击投放广告，填写并提交了联系方式时，可以上报该事件，以评估本次获取到的线索可能会给开发者带来的收入，用于评估投放广告的ROI。

**参数ID**| **参数名称**| **参数类型**| **可选/****必选**| **参数描述**  
---|---|---|---|---  
CURRNAME| 货币类型| String| 可选| 标识收入的货币类型。与REVENUE一起使用。  
REVENUE| 预计收入| Double| 可选| 线索转化后会带来的预期收入，而非真实收入。  
  
11.JOINUSERGROUP

用户加入群组时，上报此事件。如社交类App，用户加入群聊。可以用于评价产品的社交特性对用户的吸引力。

**参数ID**| **参数名称**| **参数类型**| **可选/****必选**| **参数描述**  
---|---|---|---|---  
USERGROUPID| 群组ID| String| 必选| 用户加入的用户群组ID。  
  
12.STARTLEVEL

游戏类应用，用户进入某个关卡，开始游戏时，上报此事件。可以与COMPLETELEVEL结合使用，分析游戏关卡设计是否合理，有针对性地制定优化策略。

**参数ID**| **参数名称**| **参数类型**| **可选/****必选**| **参数描述**  
---|---|---|---|---  
LEVELNAME| 关卡名称| Long| 必选| 游戏中的关卡名称。  
  
13.COMPLETELEVEL

游戏类应用，用户完成某个关卡，上报此事件。可以与STARTLEVEL结合使用，分析游戏关卡设计是否合理，有针对性地制定优化策略。

**参数ID**| **参数名称**| **参数类型**| **可选/****必选**| **参数描述**  
---|---|---|---|---  
LEVELNAME| 关卡名称| Long| 必选| 游戏中的关卡名称。  
RESULT| 关卡完成情况| String| 可选| 用户通过关卡情况。  
  
14.UPGRADELEVEL

游戏应用中用户升级时，上报此事件。分析产品的用户等级设置是否合理，有针对性地制定优化策略。

**参数ID**| **参数名称**| **参数类型**| **可选/****必选**| **参数描述**  
---|---|---|---|---  
LEVELID| 用户等级| Long| 必选| 标识用户提升后的等级。  
ROLENAME| 用户角色| String| 可选| 标识用户的角色。  
  
15.SIGNIN

有登录功能的应用，用户登录时上报此事件。分析用户的登录习惯，有针对性地制定运营策略。

**参数ID**| **参数名称**| **参数类型**| **可选/****必选**| **参数描述**  
---|---|---|---|---  
CHANNEL| 登录渠道| String| 必选| 标识用户登录方式。  
EVTRESULT| 登录结果| String| 可选| 登录结果。  
OCCURREDTIME| 登录时间| String| 必选| 登录时间。  
  
16.SUBMITSCORE

游戏/教育类应用中，用户提交分数时，上报此事件。用于分析产品内容的难易程度，有针对性的制定优化策略。

**参数ID**| **参数名称**| **参数类型**| **可选/****必选**| **参数描述**  
---|---|---|---|---  
SCORE| 分数| Long| 必选| 标识用户得分。  
LEVELID| 用户等级| Long| 可选| 用户当前所处级别。  
ROLENAME| 用户角色| String| 可选| 标识用户的角色。  
  
17.CREATEORDER

用户创建订单时，上报此事件。

**参数****ID**| **参数名称**| **参数类型**| **可选****/****必选**| **参数描述**  
---|---|---|---|---  
PRODUCTID| 商品ID| String| 可选| 关联的商品ID。  
PRODUCTNAME| 商品名称| String| 必选| 关联的商品名称。  
PRODUCTFEATURE| 商品特征| String| 可选| 关联的商品特征。  
STORENAME| 店铺名称| String| 可选| 关联的商品来自于哪个店铺。  
QUANTITY| 购买数量| Long| 必选| 用户购买该商品的数量。  
PRICE| 价格| Double| 可选| 商品的价格。  
REVENUE| 收入| Double| 可选| 该交易会给开发者带来的收入。  
CURRNAME| 货币类型| String| 可选| 收入的货币类型。  
PLACEID| 位置ID| String| 可选| 商品所在地标识。  
ORDERID| 订单ID| String| 可选| 开发者交易系统生成的订单ID。  
BRAND| 商品品牌| String| 可选| 关联的商品品牌。  
CATEGORY| 商品分类| String| 必选| 关联的商品分类。  
SOURCE| 营销来源| String| 可选| 营销活动提供者的标识，如Huawei PPS等。  
MEDIUM| 营销类型| String| 可选| 营销活动的类型，如：CPC、Email、运营坑位、Banner等。  
PROMOTIONNAME| 营销名称| String| 可选| 营销活动的名称。  
CONTENT| 营销内容| String| 可选| 营销活动的营销内容。  
KEYWORDS| 关键词| String| 可选| 营销活动的关键词。如：搜索广告的关键词。  
MATERIALNAME| 创意名称| String| 可选| 营销活动使用的创意素材名称。  
MATERIALSLOT| 营销内容展示位置ID| String| 可选| 创意素材被展示的位置信息。  
  
18.REFUNDORDER

用户取消订单后，申请退款时，上报此事件。可以分析退款造成的损失，有针对性得制定优化策略。

**参数****ID**| **参数名称**| **参数类型**| **可选****/****必选**| **参数描述**  
---|---|---|---|---  
CURRNAME| 货币类型| String| 可选| 退款的货币类型。  
REVENUE| 退款额| Double| 可选| 退款给开发者带来的收入损失。  
TRANSACTIONID| 交易ID| String| 可选| 开发者交易系统生成的交易ID。  
ORDERID| 订单ID| String| 可选| 开发者交易系统生成的订单ID  
PRODUCTID| 商品ID| String| 必选| 退款关联订单购买的商品的ID  
PRODUCTNAME| 商品名称| String| 必选| 退款关联订单购买的商品的名称  
QUANTITY| 购买数量| Long| 必选| 用户准备购买的数量。  
BRAND| 商品品牌| String| 可选| 关联的商品品牌。  
CATEGORY| 商品分类| String| 必选| 关联的商品分类。  
SOURCE| 营销来源| String| 可选| 营销活动提供者的标识，如Huawei PPS等。  
MEDIUM| 营销类型| String| 可选| 营销活动的类型，如：CPC、Email、运营坑位、Banner等。  
PROMOTIONNAME| 营销名称| String| 可选| 营销活动的名称。  
CONTENT| 营销内容| String| 可选| 营销活动的营销内容。  
KEYWORDS| 关键词| String| 可选| 营销活动的关键词。如：搜索广告的关键词。  
MATERIALNAME| 创意名称| String| 可选| 营销活动使用的创意素材名称。  
MATERIALSLOT| 营销内容展示位置ID| String| 可选| 创意素材被展示的位置信息。  
REASON| 退款原因| String| 必选| 用户选择退款的原因。  
  
19.DELPRODUCTFROMCART

用户将商品从购物车中移除时，上报此事件。可以对相关用户进行营销。

**参数ID**| **参数名称**| **参数类型**| **可选/****必选**| **参数描述**  
---|---|---|---|---  
QUANTITY| 购买数量| Long| 可选| 从购物车中被移除的商品数量。  
CATEGORY| 商品分类| String| 必选| 从购物车中被移除商品的商品分类。  
PRODUCTNAME| 商品名称| String| 必选| 从购物车中被移除商品的商品名称。  
PRODUCTID| 商品ID| String| 必选| 从购物车中被移除商品的商品ID。  
PRODUCTFEATURE| 商品特征| String| 可选| 从购物车中被移除商品的特征。  
BRAND| 商品品牌| String| 可选| 从购物车中被移除商品的品牌。  
STORENAME| 店铺名称| String| 可选| 从购物车中被移除商品来自于哪个店铺。  
REVENUE| 收入损失| Double| 可选| 本次移除操作预期给开发者带来的收入损失。  
PRICE| 价格| Double| 可选| 从购物车中被移除商品的商品价格。  
CURRNAME| 货币类型| String| 可选| 衡量收入损失的货币类型。  
PLACEID| 位置ID| String| 可选| 商品所在地标识。  
BEGINDATE| 加入购物车时间| String| 可选| 商品被加入购物车时间。  
ENDDATE| 从购物车中移除的时间| String| 可选| 商品被移出购物车时间。  
ORIGINATINGPLACE| 发货地| String| 可选| 发货地。  
DESTINATION| 收货地| String| 可选| 用户收货地。  
  
20.SEARCH

用户在应用内搜索内容时，上报此事件。可以与SEARCH、VIEWPRODUCT等事件结合使用，分析搜索结果的准确性。

**参数ID**| **参数名称**| **参数类型**| **可选/****必选**| **参数描述**  
---|---|---|---|---  
SEARCHKEYWORDS| 搜索关键词| String| 可选| 用户搜索的关键词。  
BOOKINGDAYS| 入住天数| Long| 可选| 针对预定酒店场景，标识用户入住天数。  
BOOKINGROOMS| 预定房间数| Long| 可选| 针对预定酒店场景，标识用户预定房间数。  
PASSENGERSNUMBER| 旅客人数| Long| 可选| 针对预定酒店场景，标识入住旅客人数。  
ORIGINATINGPLACE| 出发地| String| 可选| 针对预定酒店场景，标识用户出发地。  
DESTINATION| 目的地| String| 可选| 针对预定酒店场景，标识用户目的地。  
BEGINDATE| 入住日期| String| 可选| 针对预定酒店场景，标识用户入住日期。  
ENDDATE| 离开日期| String| 可选| 针对预定酒店场景，标识用户离店日期。  
CLASS| 预定等级| String| 可选| 针对预定酒店场景，标识用户预定房间等级。  
  
21.VIEWCONTENT

用户点击内容时，上报此事件。如在电商应用内，点击列表中的某个商品以参考详情。可以分析用户对哪些商品感兴趣。

**参数ID**| **参数名称**| **参数类型**| **可选/****必选**| **参数描述**  
---|---|---|---|---  
CONTENTTYPE| 内容类型| String| 必选| 标识用户点击内容的类型。  
PRODUCTID| 内容ID| String| 必选| 标识用户点击内容的内容ID。  
  
22.UPDATECHECKOUTOPTION

结算过程中，用户填写一些结算选项时，上报此事件。可以分析用户的结算偏好。

**参数ID**| **参数名称**| **参数类型**| **可选/****必选**| **参数描述**  
---|---|---|---|---  
STEP| 结算步骤数| String| 可选| 标识用户当前处于结算过程中的第几个步骤。  
OPTION| 用户填写的结算选项| String| 可选| 当前结算步骤中用户填写的结算选项。  
  
23.SHARECONTENT

用户通过社交渠道分享商品或内容时，上报此事件。可以分析用户对产品的忠诚度。

**参数ID**| **参数名称**| **参数类型**| **可选/****必选**| **参数描述**  
---|---|---|---|---  
CONTENTTYPE| 分享内容类型| String| 必选| 标识用户分享内容的类型。  
PRODUCTID| 分享内容ID| String| 必选| 标识用户点击内容的内容ID。  
CHANNEL| 分享方式| String| 必选| 标识用户分享的渠道信息。  
  
24.REGISTERACCOUNT

用户注册帐号时，上报此事件。可以分析用户来源，有针对性的优化运营策略。

**参数ID**| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
REGISTMETHOD| 用户来源| String| 可选| 用户来源。  
ACOUNTTYPE| 帐号类型| String| 可选| 用户帐号类型，如：邮箱、手机号、微信等。  
OCCURREDTIME| 注册时间| String| 必选| 用户注册帐号的时间。  
  
25.CONSUMEVIRTUALCOIN

用户消费虚拟币时，上报此事件。可以用于分析用户对哪些产品更感兴趣。

**参数ID**| **参数名称**| **参数类型**| **可选/****必选**| **参数描述**  
---|---|---|---|---  
PRODUCTNAME| 购买商品名称| String| 必选| 用户购买的商品名称。  
VIRTUALCURRNAME| 虚拟币单位| String| 必选| 用户使用的虚拟币的货币单位。  
REVENUE| 消费虚拟币金额| Long or Double| 必选| 用户消费的虚拟币数量。  
  
26.STARTTUTORIAL

用户开始使用引导教程时，上报此事件。可以与COMPLETETUTORIAL结合使用，评价引导教程的质量，有针对性的制定优化措施。

27.COMPLETETUTORIAL

用户完成引导教程时，上报此事件。可以与STARTTUTORIAL结合使用，评价引导教程的质量，有针对性得制定优化措施。

28.OBTAINACHIEVEMENT

用户达成某项新成就时，上报此事件。可以衡量成就等级设计是否合理，并有针对性的制定优化策略。

**参数ID**| **参数名称**| **参数类型**| **可选/****必选**| **参数描述**  
---|---|---|---|---  
ACHIEVEMENTID| 成就ID| String| 必选| 标识成就ID。  
  
29.VIEWPRODUCT

用户浏览商品时，上报此事件。可以分析用户对哪些商品感兴趣，也可用和其他事件组合完成漏斗分析。

**参数****ID**| **参数名称**| **参数类型**| **可选****/****必选**| **参数描述**  
---|---|---|---|---  
PRODUCTID| 商品ID| String| 必选| 用户浏览商品的ID。  
PRODUCTNAME| 商品名称| String| 必选| 用户浏览商品的名称。  
PRODUCTFEATURE| 商品特征| String| 可选| 用户浏览商品的特征。  
CATEGORY| 商品分类| String| 必选| 用户浏览商品的分类。  
BRAND| 商品品牌| String| 可选| 用户浏览商品的品牌。  
STORENAME| 店铺名称| String| 可选| 用户浏览商品的来自于哪个店铺。  
PLACEID| 位置ID| String| 可选| 商品所在地标识。  
POSITIONID| 商品索引| String| 可选| 用户浏览的商品在商品列表中的索引。  
PRODUCTLIST| 商品列表| String| 可选| 用户浏览的商品列表。  
PRICE| 商品价格| Double| 可选| 商品的价格。  
QUANTITY| 数量| Long| 可选| 用户准备购买的数量。  
REVENUE| 收入| Double| 可选| 用户购买此商品，预计会给开发者带来的收入。必须与CURRNAME同时使用。  
CURRNAME| 货币类型| String| 可选| 标识收入的货币类型。与REVENUE一起使用。  
REVENUE| 收入| Double| 可选| 用户购买此商品，预计会给开发者带来的收入。必须与CURRNAME同时使用。  
FLIGHTNO| 航班号| String| 可选| 开发者交易系统生成的航班号。  
PASSENGERSNUMBER| 旅客人数| Long| 可选| 针对预定酒店场景，标识入住旅客人数。  
BOOKINGDAYS| 入住天数| Long| 可选| 针对预定酒店场景，标识用户入住天数。  
BOOKINGROOMS| 预定房间数| Long| 可选| 针对预定酒店场景，标识用户预定房间数。  
ORIGINATINGPLACE| 出发地| String| 可选| 针对预定酒店场景，标识用户出发地。  
DESTINATION| 目的地| String| 可选| 针对预定酒店场景，标识用户目的地。  
BEGINDATE| 入住日期| String| 可选| 针对预定酒店场景，标识用户入住日期。  
SEARCHKEYWORDS| 搜索关键词| String| 可选| 用户搜索的关键词。  
CLASS| 预定等级| String| 可选| 针对预定酒店场景，标识用户预定房间等级。  
VOUCHERS| 适用的优惠券| String| 可选| 商品使用的优惠券名称列表。  
SOURCE| 营销来源| String| 可选| 营销活动提供者的标识，如Huawei PPS等。  
MEDIUM| 营销类型| String| 可选| 营销活动的类型，如：CPC、Email、运营坑位、Banner等。  
PROMOTIONNAME| 营销名称| String| 可选| 营销活动的名称。  
CONTENT| 营销内容| String| 可选| 营销活动的营销内容。  
KEYWORDS| 关键词| String| 可选| 营销活动的关键词。如：搜索广告的关键词。  
MATERIALNAME| 创意名称| String| 可选| 营销活动使用的创意素材名称。  
MATERIALSLOT| 营销内容展示位置ID| String| 可选| 创意素材被展示的位置信息。  
  
30.VIEWPRODUCTLIST

浏览商品列表时，上报此事件。如用户按分类查看商品列表时。可以分析用户对哪些类型的内容更感兴趣。

**参数ID**| **参数名称**| **参数类型**| **可选/****必选**| **参数描述**  
---|---|---|---|---  
CATEGORY| 商品分类| String| 必选| 用户浏览的商品列表的分类。  
  
31.VIEWSEARCHRESULT

用户查看搜索结果时，上报此事件。与VIEWPRODUCT、SEARCH组合使用，衡量搜索算法的准确性。

**参数ID**| **参数名称**| **参数类型**| **可选/****必选**| **参数描述**  
---|---|---|---|---  
SEARCHKEYWORDS| 搜索关键词| String| 可选| 用户搜索的关键词。  
  
32.SIGNOUT  

用户通过Account Kit退出时，上报此事件。 

**参数ID**| **参数名称**| **参数类型**| **可选/****必选**| **参数描述**  
---|---|---|---|---  
CHANNEL| 登出渠道| String| 必选| 登出渠道。  
EVTRESULT| 登出结果| String| 必选| 登出结果。  
OCCURREDTIME | 登出时间| String| 必选| 登出时间。  
  
33.UPDATEMEMBERSHIPLEVEL

用户购买会员或者会员失效后首次登录时，上报此事件，用于分析会员用户行为习惯等。

**参数ID**| **参数名称**| **参数类型**| **可选/****必选**| **参数描述**  
---|---|---|---|---  
PREVLEVEL| 变更前级别| String| 必选| 变更前级别。  
CURRVLEVE| 当前级别| String| 必选| 当前级别。  
REASON| 变更原因| String| 必选| 变更原因。  
  
34.FILTRATEPRODUCT  

用户选择一定条件筛选查看上报的范围时，上报此事件。可用于分析用户的喜好。   

**参数****ID**| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
LISTID| 商品列表ID| String| 可选| 商品列表ID。  
CATEGORY| 商品分类| String| 可选| 商品分类。  
FILTERS| 过滤条件| String| 可选| 过滤条件。  
SORTS| 排序条件| String| 可选| 排序条件。  
KEYWORDS| 关键词| String| 可选| 搜索关键词。  
  
35.VIEWCATEGORY

用户点击商品分类时，上报此事件。可用于分析热门类别商品或者分析的喜好。

**参数****ID**| **参数名称**| **参数类型**| **可选/必选**| **参数描述**  
---|---|---|---|---  
CATEGORY| 商品分类| String| 必选| 用户查看的商品分类名称。  
POSITIONID| 位置索引编号| String| 可选| 点击的商品分类在分离列表中的位置索引。  
  
36.UPDATEORDER  

用户修改订单时，上报此事件。  

**参数****ID**| **参数名称**| **参数类型**| **可选****/****必选**| **参数描述**  
---|---|---|---|---  
PRODUCTID| 商品ID| String| 可选| 关联的商品ID。  
PRODUCTNAME| 商品名称| String| 必选| 关联的商品名称。  
PRODUCTFEATURE| 商品特征| String| 可选| 关联的商品特征。  
STORENAME| 店铺名称| String| 可选| 关联的商品来自于哪个店铺。  
QUANTITY| 购买数量| Long| 必选| 用户购买该商品的数量。  
PRICE| 价格| Double| 可选| 商品的价格。  
REVENUE| 收入| Double| 可选| 该交易会给开发者带来的收入。  
CURRNAME| 货币类型| String| 可选| 收入的货币类型。  
PLACEID| 位置ID| String| 可选| 商品所在地标识。  
ORDERID| 订单ID| String| 可选| 开发者交易系统生成的订单ID。  
BRAND| 商品品牌| String| 可选| 关联的商品品牌。  
CATEGORY| 商品分类| String| 必选| 关联的商品分类。  
SOURCE| 营销来源| String| 可选| 营销活动提供者的标识，如Huawei PPS等。  
MEDIUM| 营销类型| String| 可选| 营销活动的类型，如：CPC、Email、运营坑位、Banner等。  
PROMOTIONNAME| 营销名称| String| 可选| 营销活动的名称。  
CONTENT| 营销内容| String| 可选| 营销活动的营销内容。  
KEYWORDS| 关键词| String| 可选| 营销活动的关键词。如：搜索广告的关键词。  
MATERIALNAME| 创意名称| String| 可选| 营销活动使用的创意素材名称。  
MATERIALSLOT| 营销内容展示位置ID| String| 可选| 创意素材被展示的位置信息。  
  
37.CANCELORDER

用户取消订单时，上报此事件。

参数ID| 参数名称| 参数类型| 可选/必选| 参数描述  
---|---|---|---|---  
PRODUCTID| 商品ID| String| 可选| 关联的商品ID。  
PRODUCTNAME| 商品名称| String| 必选| 关联的商品名称。  
PRODUCTFEATURE| 商品特征| String| 可选| 关联的商品特征。  
STORENAME| 店铺名称| String| 可选| 关联的商品来自于哪个店铺。  
QUANTITY| 购买数量| Long| 必选| 用户购买该商品的数量。  
PRICE| 价格| Double| 可选| 商品的价格。  
REVENUE| 收入| Double| 可选| 该交易会给开发者带来的收入。  
CURRNAME| 货币类型| String| 可选| 收入的货币类型。  
PLACEID| 位置ID| String| 可选| 商品所在地标识。  
ORDERID| 订单ID| String| 可选| 开发者交易系统生成的订单ID。  
BRAND| 商品品牌| String| 可选| 关联的商品品牌。  
CATEGORY| 商品分类| String| 必选| 关联的商品分类。  
SOURCE| 营销来源| String| 可选| 营销活动提供者的标识，如Huawei PPS等。  
MEDIUM| 营销类型| String| 可选| 营销活动的类型，如：CPC、Email、运营坑位、Banner等。  
PROMOTIONNAME| 营销名称| String| 可选| 营销活动的名称。  
CONTENT| 营销内容| String| 可选| 营销活动的营销内容。  
KEYWORDS| 关键词| String| 可选| 营销活动的关键词。如：搜索广告的关键词。  
MATERIALNAME| 创意名称| String| 可选| 营销活动使用的创意素材名称。  
MATERIALSLOT| 营销内容展示位置ID| String| 可选| 创意素材被展示的位置信息。  
REASON| 取消原因| String| 必选| 用户取消订单的原因。  
  
38.COMPLETEORDER

用户确认收货后，上报此事件。

**参数****ID**| **参数名称**| **参数类型**| **可选****/****必选**| **参数描述**  
---|---|---|---|---  
PRODUCTID| 商品ID| String| 可选| 关联的商品ID。  
PRODUCTNAME| 商品名称| String| 必选| 关联的商品名称。  
PRODUCTFEATURE| 商品特征| String| 可选| 关联的商品特征。  
STORENAME| 店铺名称| String| 可选| 关联的商品来自于哪个店铺。  
QUANTITY| 购买数量| Long| 必选| 用户购买该商品的数量。  
PRICE| 价格| Double| 可选| 商品的价格。  
REVENUE| 收入| Double| 可选| 该交易会给开发者带来的收入。  
CURRNAME| 货币类型| String| 可选| 收入的货币类型。  
PLACEID| 位置ID| String| 可选| 商品所在地标识。  
ORDERID| 订单ID| String| 可选| 开发者交易系统生成的订单ID。  
BRAND| 商品品牌| String| 可选| 关联的商品品牌。  
CATEGORY| 商品分类| String| 必选| 关联的商品分类。  
SOURCE| 营销来源| String| 可选| 营销活动提供者的标识，如Huawei PPS等。  
MEDIUM| 营销类型| String| 可选| 营销活动的类型，如：CPC、Email、运营坑位、Banner等。  
PROMOTIONNAME| 营销名称| String| 可选| 营销活动的名称。  
CONTENT| 营销内容| String| 可选| 营销活动的营销内容。  
KEYWORDS| 关键词| String| 可选| 营销活动的关键词。如：搜索广告的关键词。  
MATERIALNAME| 创意名称| String| 可选| 营销活动使用的创意素材名称。  
MATERIALSLOT| 营销内容展示位置ID| String| 可选| 创意素材被展示的位置信息。  
  
39.CANCELCHECKOUT

用户已经下单，并开始支付，支付过程中，取消支付时，上报此事件。可用于分析用户流失原因。  

参数ID| 参数名称| 参数类型| 可选/必选| 参数描述  
---|---|---|---|---  
REASON| 取消支付原因| String| 必选| 用户取消支付原因。  
STEP| 结算步骤数| String| 必选| 标识用户当前处于结算过程中的第几个步骤。  
REVENUE| 收入| Double| 可选| 会给开发者带来的收入。必须与CURRNAME同时使用。  
CURRNAME| 货币类型| String| 可选| 标识收入的货币类型。与REVENUE一起使用。  
TRANSACTIONID| 交易ID| String| 可选| 开发者交易系统生成的交易ID。  
BOOKINGDAYS| 入住天数| Long| 可选| 针对预定酒店场景，标识用户入住天数。  
BOOKINGROOMS| 预定房间数| Long| 可选| 针对预定酒店场景，标识用户预定房间数。  
PASSENGERSNUMBER| 旅客人数| Long| 可选| 针对预定酒店场景，标识入住旅客人数。  
ORIGINATINGPLACE| 出发地| String| 可选| 针对预定酒店场景，标识用户出发地。  
DESTINATION| 目的地| String| 可选| 针对预定酒店场景，标识用户目的地。  
BEGINDATE| 入住日期| String| 可选| 针对预定酒店场景，标识用户入住日期。  
ENDDATE| 离开日期| String| 可选| 针对预定酒店场景，标识用户离店日期。  
CLASS| 预定等级| String| 可选| 针对预定酒店场景，标识用户预定房间等级。  
VOUCHER| 优惠券名称| String| 可选| 用户选择的优惠券。  
SOURCE| 营销来源| String| 可选| 营销活动提供者的标识，如Huawei PPS等。  
MEDIUM| 营销类型| String| 可选| 营销活动的类型，如：CPC、Email、运营坑位、Banner等。  
PROMOTIONNAME| 营销名称| String| 可选| 营销活动的名称。  
CONTENT| 营销内容| String| 可选| 营销活动的营销内容。  
KEYWORDS| 关键词| String| 可选| 营销活动的关键词。如：搜索广告的关键词。  
MATERIALNAME| 创意名称| String| 可选| 营销活动使用的创意素材名称。  
MATERIALSLOT| 营销内容展示位置ID| String| 可选| 创意素材被展示的位置信息。  
  
40.OBTAINVOUCHER

用户领取优惠券时，上报此事件。

**参数****ID**| **参数名称**| **参数类型**| **可选****/****必选**| **参数描述**  
---|---|---|---|---  
VOUCHER| 优惠券名称| String| 必选| 用户选择的优惠券。  
EXPIREDATE| 过期时间| Optional| 可选| 优惠券过期时间。  
VOUCHERTYPE| 优惠券类型| String| 必选| 优惠券类型。  
  
 自定义事件

开发者可能有个性化的事件需要打点分析，华为分析也支持开发者自定义事件并扩展事件参数， 或是对预定义事件新增个性化参数。

比如对教育类的应用，可以添加自定义事件“begin_examination”来表示“进入新考试”的事件， 并给该事件增加参数“exam_difficulty”来定义“考试难度”，以此满足特定业务场景的分析。

自定义事件示例如下：
      
      1. //设置用户属性
        2. [HiAnalytics setUserProfile:@"student_id" setValue:@"009527"];
        3. //自定义打点，在工程合适位置插入打点代码
        4. [HiAnalytics onEvent:@"begin_examination" setParams:@{@"exam_difficulty":@"high",@"exam_level":@"1-1",@"exam_time":@"20190520-08"}];
    
    
