---
name: document/cn/promotion/ads_meijuzhi-0000001510863205
title: 枚举值（新）
uri: https://developer.huawei.com/consumer/cn/doc/promotion/ads_meijuzhi-0000001510863205
---

# 枚举值（新）

## 动态词包标识

|--------------------|-----------|
|值|描述|
|DYNAMIC_WORD_DISABLE|未使用动态词包，默认值|
|DYNAMIC_WORD_ENABLE|使用动态词包|

## 元素类型

|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|参数名称|描述|
|images|图片信息|
|icon|icon信息|
|video|视频信息, 视频元素可以同时上传图片作为视频封面，图片尺寸与视频尺寸必须保持一致|
|title|文案|
|description|描述|
|corporate|品牌名称|
|landing_page|落地页|
|deeplink|应用直达地址|
|impression_monitor_url|展示监控地址|
|click_monitor_url|点击监控地址|
|ad_button_text|按钮文案|
|industry_id|行业分类ID，必须填写三级行业分类ID，示例：100100010001； [查询创意行业元数据](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260715152955.26058845335967551927082826551840:50001231000000:2800:520E776396C1DA83C0528A094FE6E79F21040C025F44AC8FF9959630D37B995E.xlsx?needInitFileName=true)|
|industry_labels|行业标签 [查询创意行业元数据](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260715152955.41876206754060183971001550443048:50001231000000:2800:E0A00123DAF1C0CEB8831246189BBB309F26EE87048BBF4A4C9EE467EA8477D3.xlsx?needInitFileName=true) 最多3个.|
|selling_point|卖点|
|template|商品库动态模板|

## 创意审核状态

|-----------|------|
|值|描述|
|AUDIT|审核中|
|APPROVE|审核通过|
|AUDIT_DENY|审核不通过|
|PART_PASSED|部分审核通过|

## 版位样式

|---------------------------------|-----|
|值|描述|
|CREATIVE_SIZE_TYPE_SINGLE_PICTURE|单图（文）|
|CREATIVE_SIZE_TYPE_MULTI_PICTURE|多图（文）|
|CREATIVE_SIZE_TYPE_VIDEO|视频|
|CREATIVE_SIZE_TYPE_TEXT|文字链|
|CREATIVE_SIZE_TYPE_ICON|图标|

## 版位子样式

|-----------------------|---------|
|值|描述|
|SPLASH_PICTURE|开屏图片|
|SPLASH_VIDEO|开屏视频|
|NATIVE_BIG_PICTURE|信息流大图|
|FEED_SMALL_PICTURE|信息流小图|
|FEED_MULTI_PICTURE|信息流组图|
|FEED_VIDEO|信息流视频|
|FEED_PURE_PICTURE|信息流纯图|
|ROLL_VIDEO|视频贴片-视频|
|REWARD_VIDEO_APP|激励视频（应用）|
|REWARD_VIDEO_NOT_APP|激励视频（非应用）|
|APP_ICON|应用图标|
|BANNER|Banner|
|INTERSTITIAL_PICTURE|插屏图片|
|INTERSTITIAL_VIDEO|插屏视频|
|FEED_SMALL_PICTURE_TEXT|信息流小图（摘要）|
|FEED_TEXT|文字链|

## 创意显示状态

|-----------------------------------------|------------|
|值|描述|
|CREATIVE_STATUS_DELETE|已删除（创意删除）|
|CREATIVE_STATUS_DISABLE|已暂停（创意暂停）|
|CREATIVE_STATUS_ADGROUP_DISABLE|已暂停（任务暂停）|
|CREATIVE_STATUS_CAMPAIGN_DISABLE|已暂停（计划暂停）|
|CREATIVE_STATUS_DONE|投放结束|
|CREATIVE_STATUS_AUDIT|审核中|
|CREATIVE_STATUS_AUDIT_DENY|审核不通过|
|CREATIVE_STATUS_NOT_START|未投放（未到投放日期）|
|CREATIVE_STATUS_FROZEN|未投放（账户已冻结）|
|CREATIVE_STATUS_BALANCE_EXCEED|未投放（账户余额不足）|
|CREATIVE_STATUS_ADVERTISER_BUDGET_EXCEED|未投放（账户到达日预算）|
|CREATIVE_STATUS_CAMPAIGN_BUDGET_EXCEED|未投放（计划达到日限额）|
|CREATIVE_STATUS_DELIVERY_OK|投放中|
|CREATIVE_STATUS_DELIVERY_LIMITED|部分元素通过|
|CREATIVE_STATUS_NO_DELETED|所有创意(不包含已删除)|
|CREATIVE_STATUS_ACCOUNT_EXCEPTION|未投放（账号异常）|
|CREATIVE_STATUS_ACCOUNT_CREDITCARD_REFUSE|未投放（信用卡拒付）|

## 计划/任务/创意操作状态

|------------------------|---|
|值|描述|
|OPERATION_STATUS_ENABLE|投放中|
|OPERATION_STATUS_DISABLE|已暂停|
|OPERATION_STATUS_DELETE|已删除|

## 操作类型

|-----------------|--|
|值|描述|
|OPERATION_ENABLE|启用|
|OPERATION_DISABLE|停用|
|OPERATION_DELETE|删除|

## 推广产品

|----------------------|----------------------|
|值|描述|
|WEB|网页|
|ANDROID_APP|应用|
|QUICK_APP|快应用/快游戏|
|PROMOTION|促销活动（旧接口不支持）|
|MINI_APP|微信小程序|
|HARMONYOS_NATIVE_APP|鸿蒙应用|
|HARMONYOS_META_SERVICE|鸿蒙元服务|
|DUAL_OS_APP|通投Android&鸿蒙应用 （仅计划使用）|

## 应用是否安装标识

|-----------------|-----|
|值|描述|
|APP_INSTALLED|应用已安装|
|APP_NOT_INSTALLED|应用未安装|

## 付费方式

|-------------|-----|
|值|描述|
|PRICING_CPM|CPM|
|PRICING_CPC|CPC|
|PRICING_CPD|CPD|
|PRICING_CPA|CPA|
|PRICING_OCPC|oCPC|
|PRICING_CPCV|CPCV|
|PRICING_CPI|CPI|
|PRICING_TROAS|TROAS|

## 新付费方式

|-----|-------------|
|值|描述|
|CPM|PRICING_CPM|
|CPC|PRICING_CPC|
|CPD|PRICING_CPD|
|CPA|PRICING_CPA|
|OCPC|PRICING_OCPC|
|CPCV|PRICING_CPCV|
|CPI|PRICING_CPI|
|TROAS|PRICING_TROAS|

## 是否选择支持投放时段

|-------------------|-------|
|值|描述|
|TIME_PERIOD_DISABLE|不支持，默认值|
|TIME_PERIOD_ENABLE|支持|

## 是否支持多创意

|----------------------|-------|
|值|描述|
|MULTI_CREATIVE_DISABLE|不支持，默认值|
|MULTI_CREATIVE_ENABLE|支持|

## 落地页类型

|------------------------------|------------------|
|值|描述|
|LANDING_PAGE_TYPE_APP|维纳斯落地页，仅可用于推广产品为应用|
|LANDING_PAGE_TYPE_USER_DEFINED|自定义落地页|

## 定向中additional定义

|------------|-------|
|值|描述|
|REGION_GEO|表示geo|
|REGION_LEVEL|表示level|

## 素材类型

|----------------------|--|
|值|描述|
|CREATIVE_ASSET_PICTURE|图片|
|CREATIVE_ASSET_VIDEO|视频|

## 定向包类型

|-------------------|----|
|值|描述|
|TARGET_TYPE_APP|应用类|
|TARGET_TYPE_NOT_APP|非应用类|

## 素材状态

|----------------------|------|
|值|描述|
|CREATIVE_ASSET_ENABLE|有效，默认值|
|CREATIVE_ASSET_DISABLE|已删除|

## 转化目标

|----------------------------------------|-----------|---------------------|
|值|描述|是否具有深度转化目标 详见【深度转化目标】|
|TRACKING_ACTIVE|激活应用|是|
|TRACKING_BROWSER|浏览商品|否|
|TRACKING_COLLECTION|收藏|否|
|TRACKING_ADD_CART|加入购物车|否|
|TRACKING_PRE_ORDER|下单|否|
|TRACKING_REGISTER|注册|否|
|TRACKING_KEY_BEHAVIORS|关键行为|否|
|TRACKING_RETAIN|次日留存|否|
|TRACKING_PAY|付费量|否|
|TRACKING_APP_CUSTOM|自定义（应用）|否|
|TRACKING_FORM_SUBMIT|表单提交|是|
|TRACKING_EFFECTIVE_CONSULT|有效咨询|否|
|TRACKING_EFFECTIVE_CUSTOMER_ACQUISITION|有效获客|否|
|TRACKING_EFFECTIVE_BOOK|有效预定|否|
|TRACKING_WEB_CUSTOM|自定义（网页）|否|
|TRACKING_ACTIVATE_HMS|激活(HMS)|是|
|TRACKING_RETAIN_HMS|次留(HMS)|否|
|TRACKING_SUBMIT_IN_LANDING_PAGE|表单提交(venus)|否|
|TRACKING_SUBSCRIBE|订阅|否|
|TRACKING_LOGIN|登录|否|
|TRACKING_UPDATE|更新|否|
|TRACKING_RESERVATION|预约服务|否|
|TRACKING_THREE_DAY_RETAIN|3日留存|否|
|TRACKING_SEVEN_DAY_RETAIN|7日留存|否|
|TRACKING_DELIVER|订单发货|否|
|TRACKING_ORDER_SIGNING|订单签收|否|
|TRACKING_FIRST_PURCHASE|首次购买|否|
|TRACKING_PURCHASE_MEMBER_CARD|购买会员|否|
|TRACKING_ADD_QUICK_APP|快应用添加|否|
|TRACKING_ADD_TO_WISH_LIST|添加到心愿清单|否|
|TRACKING_OPENED_FROM_PUSH_NOTIFICATION|从推送通知打开|否|
|TRACKING_RE_ENGAGE|用户唤醒|否|
|TRACKING_EFFECTIVE_LEADS_FORM|有效线索-表单|否|
|TRACKING_POTENTIAL_CUSTOMER_FORM|潜在客户线索-表单|否|
|TRACKING_CONSULT_ONLINE|网页咨询|否|
|TRACKING_EFFECTIVE_LEADS_ONLINE|有效线索-咨询|否|
|TRACKING_POTENTIAL_CUSTOMER_ONLINE|潜在客户线索-咨询|否|
|TRACKING_PHONE_DIALING|电话直拨|否|
|TRACKING_EFFECTIVE_LEADS_PHONE|有效线索-电话|否|
|TRACKING_POTENTIAL_CUSTOMER_PHONE|潜在客户线索-电话|否|
|TRACKING_FOLLOW_SCAN|扫码关注|否|
|TRACKING_LEADS_LOTTERY|抽奖线索|否|
|TRACKING_ADD_PAYMENT_INFO|添加付款信息|否|
|TRACKING_START_TRIAL|开始试用|否|
|TRACKING_INITIATED_CHECKOUT|发起结账|否|
|TRACKING_INVITE|邀请|否|
|TRACKING_SEARCH|搜索|否|
|TRACKING_SHARE|分享|否|
|TRACKING_TRAVEL_BOOKING|旅行预订|否|
|TRACKING_RATE|评级|否|
|TRACKING_CONTENT_VIEW|内容视图|否|
|TRACKING_LANDINGPAGE_CLICK|落地页内按钮点击|否|
|TRACKING_COUPON|卡券领取|否|
|TRACKING_NAVIGATE|门店导航|否|
|TRACKING_LOTTERY|抽奖|否|
|TRACKING_VOTE|投票|否|
|TRACKING_REDIRECT|页面跳转|否|
|TRACKING_GAME_PACKAGE_REDEMPTION|礼包兑换|否|
|TRACKING_GAME_PACKAGE_CLAIMING|礼包领取|否|
|TRACKING_CREATE_ROLE|游戏内创建角色|否|
|TRACKING_AUTHORIZE|游戏授权|否|
|TRACKING_TUTORIAL_COMPLETION|游戏完成新手教程|否|
|TRACKING_ACHIEVEMENT_UNLOCKED|解锁成就|否|
|TRACKING_SPENT_CREDITS|花掉积分|否|
|TRACKING_LEVEL_ACHIEVED|达到级别|否|
|TRACKING_LOAN_COMPLETION|完件数|否|
|TRACKING_PRE_CREDIT|预授信数|否|
|TRACKING_CREDIT|授信数|否|
|TRACKING_FOLLOW|关注|否|
|TRACKING_FORWARD|转发|否|
|TRACKING_READ|阅读|否|
|TRACKING_LIKE|点赞|否|
|TRACKING_COMMENT|评论|否|
|TRACKING_SUBMIT_IN_LANDING_PAGE|表单提交(venus)|否|
|TRACKING_SUBSCRIBE|订阅|否|
|TRACKING_LOGIN|登录|否|
|TRACKING_UPDATE|更新|否|
|TRACKING_RESERVATION|预约服务|否|
|TRACKING_THREE_DAY_RETAIN|3日留存|否|
|TRACKING_SEVEN_DAY_RETAIN|7日留存|否|
|TRACKING_DELIVER|订单发货|否|
|TRACKING_ORDER_SIGNING|订单签收|否|
|TRACKING_FIRST_PURCHASE|首次购买|否|
|TRACKING_PURCHASE_MEMBER_CARD|购买会员|否|
|TRACKING_ADD_QUICK_APP|快应用添加|否|
|TRACKING_ADD_TO_WISH_LIST|添加到心愿清单|否|
|TRACKING_OPENED_FROM_PUSH_NOTIFICATION|从推送通知打开|否|
|TRACKING_RE_ENGAGE|用户唤醒|否|
|TRACKING_EFFECTIVE_LEADS_FORM|有效线索-表单|否|
|TRACKING_POTENTIAL_CUSTOMER_FORM|潜在客户线索-表单|否|
|TRACKING_CONSULT_ONLINE|网页咨询|否|
|TRACKING_EFFECTIVE_LEADS_ONLINE|有效线索-咨询|否|
|TRACKING_POTENTIAL_CUSTOMER_ONLINE|潜在客户线索-咨询|否|
|TRACKING_PHONE_DIALING|电话直拨|否|
|TRACKING_EFFECTIVE_LEADS_PHONE|有效线索-电话|否|
|TRACKING_POTENTIAL_CUSTOMER_PHONE|潜在客户线索-电话|否|
|TRACKING_FOLLOW_SCAN|扫码关注|否|
|TRACKING_LEADS_LOTTERY|抽奖线索|否|
|TRACKING_ADD_PAYMENT_INFO|添加付款信息|否|
|TRACKING_QUALITY_ACTIVATE_APP|优质激活|否|
|TRACKING_IAA_FIRST_DAY_ROI|首日ROI(变现)|否|
|SCHEDULED_DOWNLOAD|预约下载|否|
|TRACKING_TRANS_COMPLETED_IN_LANDING_PAGE|已经成单线索|否|
|DAY_1_ROI|首日ROI|否|
|DAY_1_ROI_GAME|首日ROI（游戏）|否|
|DAY_3_ROI_GAME|3日ROI（游戏）|否|
|DAY_7_ROI_GAME|7日ROI（游戏）|否|
|DAY_30_ROI_GAME|30日ROI（游戏）|否|
|TEST_DRIVE_TO_THE_STORE|到店试驾|否|
|HIGH_POTENTIAL_DEAL|高潜成交|否|
|MULTI_PAID|每次付费|否|
|WECOM_FRIEND_REQUEST|好友添加-企微|否|
|WECOM_CUSTOMER_START_CHAT|首次交流-企微|否|
|TRACKING_EVERYDAY_RETAIN|每日留存|否|

## 转化跟踪状态

|--------------------------|---|
|值|描述|
|TRACKING_STATUS_ACTIVE|已激活|
|TRACKING_STATUS_NOT_ACTIVE|未激活|

## 计划修改日限额操作类型

|----------------------------|--------------|
|值|描述|
|UPDATE_TODAY_DAILY_BUDGET|修改当日限额|
|UPDATE_TOMORROW_DAILY_BUDGET|创建/修改计划限额，次日生效|
|DELETE_TOMORROW_DAILY_BUDGET|删除计划次日日限额|

## 时间段类型

|-------------------------|-----------|
|值|描述|
|TIME_PERIOD_ALL|全天|
|TIME_PERIOD_DAY_SPECIFIC|特定时间段|
|TIME_PERIOD_HOUR_SPECIFIC|特定时间段（高级设置）|

## 智能提价标志

|---------------------|-----|
|值|描述|
|DYNAMIC_PRICE_DISABLE|否，默认值|
|DYNAMIC_PRICE_ENABLE|是|

## 计划日限额状态

|--------------------------------|-----|
|值|描述|
|CAMPAIGN_DAILY_BUDGET_NOT_EXCEED|未达日限额|
|CAMPAIGN_DAILY_BUDGET_EXCEED|到达日限额|

## 任务界面显示的状态

|---------------------------------------|------------|
|值|描述|
|ADGROUP_STATUS_ALL|所有任务（不包含已删除）|
|ADGROUP_STATUS_DELETE|已删除（任务删除）|
|ADGROUP_STATUS_DISABLE|已暂停（任务暂停）|
|ADGROUP_STATUS_CAMPAIGN_DISABLE|已暂停（计划暂停）|
|ADGROUP_STATUS_DONE|投放结束|
|ADGROUP_STATUS_AUDIT|审核中|
|ADGROUP_STATUS_AUDIT_DENY|审核不通过|
|ADGROUP_STATUS_NO_CREATIVE|待上传创意|
|ADGROUP_STATUS_NOT_START|未投放（未到投放日期）|
|ADGROUP_STATUS_FROZEN|未投放（账户已冻结）|
|ADGROUP_STATUS_ADVERTISER_ABNORMALITY|未投放（账号异常）|
|ADGROUP_STATUS_BALANCE_EXCEED|未投放（账户余额不足）|
|ADGROUP_STATUS_ADVERTISER_BUDGET_EXCEED|未投放（账户到达日预算）|
|ADGROUP_STATUS_CAMPAIGN_BUDGET_EXCEED|未投放（计划达到日预算）|
|CAMPAIGN_STATUS_CREDIT_CARD_CHARGEBACK|信用卡拒付|
|ADGROUP_STATUS_DELIVERY_OK|投放中|
|ADGROUP_STATUS_ENABLE|已启用|
|ADGROUP_STATUS_NO_ELEMENT|待上传元素|

【注】ADGROUP_STATUS_ENABLE 只存在于请求参数

## 计划界面显示的状态

|----------------------------------------------|------------|
|值|描述|
|CAMPAIGN_STATUS_ALL|所有计划（不包含已删除）|
|CAMPAIGN_STATUS_DELETE|已删除|
|CAMPAIGN_STATUS_DISABLE|已暂停|
|CAMPAIGN_STATUS_ADVERTISER_FROZEN|未投放（账户已冻结）|
|CAMPAIGN_STATUS_ADVERTISER_ABNORMALITY|未投放（账号异常）|
|CAMPAIGN_STATUS_ADVERTISER_BALANCE_EXCEED|未投放（账户余额不足）|
|CAMPAIGN_STATUS_ADVERTISER_DAILY_BUDGET_EXCEED|未投放（账户到达日预算）|
|CAMPAIGN_STATUS_CAMPAIGN_DAILY_BUDGET_EXCEED|未投放（计划到达日预算）|
|CAMPAIGN_STATUS_DELIVERY_OK|投放中|
|CAMPAIGN_STATUS_CREDIT_CARD_CHARGEBACK|信用卡拒付|
|CAMPAIGN_STATUS_ENABLE|已启用|

【注】CAMPAIGN_STATUS_ENABLE 只存在于请求参数

## oCPC学习状态

|-------------------|---------|
|值|描述|
|OCPC_STATUS_STUDY|学习中（初始状态）|
|OCPC_STATUS_SUCCESS|学习成功|
|OCPC_STATUS_FAIL|学习失败|

## 账户余额状态

|-----------------------------|----|
|值|描述|
|ADVERTISER_BALANCE_NOT_EXCEED|余额充足|
|ADVERTISER_BALANCE_EXCEED|余额不足|

## 推广产品

|----------------------|------------|
|值|描述|
|WEB|网页|
|ANDROID_APP|应用|
|QUICK_APP|快应用|
|PROMOTION|促销活动（旧接口不支持）|
|HARMONYOS_NATIVE_APP|鸿蒙应用|
|HARMONYOS_META_SERVICE|鸿蒙元服务|

## 时间粒度

|-----------------------------|----|
|值|描述|
|STAT_TIME_GRANULARITY_HOURLY|小时粒度|
|STAT_TIME_GRANULARITY_DAILY|天粒度|
|STAT_TIME_GRANULARITY_MONTHLY|月粒度|
|STAT_TIME_GRANULARITY_SUMMARY|汇总粒度|

## 计划状态

|--------------------------|-----|
|值|描述|
|CAMPAIGN_FILTER_ALL|所有计划|
|CAMPAIGN_FILTER_ENABLE|启动|
|CAMPAIGN_FILTER_DISABLE|暂停|
|CAMPAIGN_FILTER_NOT_DELETE|所有未删除|

## RTA请求失败后的策略

|--------------|----|
|值|描述|
|DEFAULT_FILTER|默认过滤|
|DEFAULT_PLAY|默认播放|

## 营销目标

|-------------------|------|-----------------------------------|
|值|描述|与推广产品枚举值关联关系|
|NO_GOAL|无目的|WEB ANDROID_APP QUICK_APP PROMOTION|
|APP_PROMOTION|应用推广|ANDROID_APP|
|QUICK_APP_PROMOTION|快应用推广|QUICK_APP|
|SALE|商品销售|WEB PROMOTION|
|CLUE_COLLECTION|客户线索收集|WEB|

## 资金账户类型

|-------------------------|------|
|值|描述|
|ALL_ACCOUNT|全部资金账户|
|CASH_ACCOUNT|现金账户|
|REBATE_ACCOUNT|返利金账户|
|GIFT_ACCOUNT|赠送金账户|
|FLARE_STAR_TICKET_ACCOUNT|耀星券账户|

## 充值类型

|----------------|------|
|值|描述|
|ALL_RECHARGE|全部充值类型|
|ONLINE_RECHARGE|线上充值|
|OFFLINE_RECHARGE|线下充值|

## 充值状态

|-----------------------|-----------|
|值|描述|
|ALL_RECHARGE|全部充值状态|
|AWAITING_PAYMENT|待付款|
|RECHARGE_SUCCEEDED|充值成功|
|RECHARGE_CANCELED|充值订单已取消|
|RECHARGE_CLOSED|充值订单已关闭|
|REJECTED|审核不通过|
|REFUNDS_AWAITING_REVIEW|退款待审核|
|REFUNDED|退款成功|
|PAYMENT_AWAITING_REVIEW|已付款待审核|
|REVIEW_FAILED|审核不通过（驳回关闭）|
|AWAITING_REVIEW|待审核|

## 发票状态

|------------------|----|
|值|描述|
|ALL_RECEIPT|全部发票|
|NOT_WRITE_RECEIPT|未开发票|
|WROTE_RECEIPT|已开发票|
|REFUND_RECEIPT|已退发票|
|NO_NEED_RECEIPT|无需发票|
|PROCESSING_RECEIPT|开票中|

## 充值用途

|-------------------------|-----|
|值|描述|
|ALL|全部|
|CASH|现金|
|CREDIT|授信|
|VIRTUAL|虚拟金|
|FLARE_STAR_TICKET_ACCOUNT|耀星券账户|

## 转账类型

|------------|----|
|值|描述|
|ALL_TRANSFER|全部转账|
|TRANSFER_IN|转入|
|TRANSFER_OUT|转出|

## 计划类型

|----------------------|--------------|
|值|描述|
|CAMPAIGN_TYPE_DISPLAY|展示广告|
|CAMPAIGN_TYPE_SHOPPING|商品广告（需要单独申请权限）|

## 采买模式

|--------------------|--|
|值|描述|
|PROMOTION_TYPE_BID|竞价|
|PROMOTION_TYPE_SHARE|分成|

## 商品库库存状态（适用于DPA）

|--------------------|---|
|值|描述|
|INVENTORY_STATUS_NO|无库存|
|INVENTORY_STATUS_YES|有库存|

## 投放状态

|-----------------|----|
|值|描述|
|LAUNCH_STATUS_NO|不可投放|
|LAUNCH_STATUS_YES|可投放|

## 日志操作类型

|-------|--|
|值|描述|
|ADD|新增|
|MODIFY|修改|
|DELETE|删除|
|APPROVE|审核|

## 日志操作者类型

|----------|---|
|值|描述|
|ADVERTISER|广告主|
|REVIEWER|审核员|

## 日志操作对象类型

|------------------|----|
|值|描述|
|CAMPAIGN|计划|
|ADGROUP|任务|
|CREATIVE|创意|
|TARGETING_TEMPLATE|定向包|
|ACCOUNT|广告账户|

## 时间口径

|-------------------|------|
|值|描述|
|STAT_REQUEST_TIME|请求时间口径|
|STAT_REPORTING_TIME|上报时间口径|

## 投放策略

|--------------------------------|-----|
|值|描述|
|OCPC_STRATEGY_STANDARD|稳定拿量|
|OCPC_STRATEGY_MAXIMIZE_QUANTITY|优先跑量|
|OCPC_STRATEGY_MINIMIZE_COST|优先低成本|
|OCPC_STRATEGY_MAXIMUM_CONVERSION|最大转化|

## 深度转化目标

|-------------------------------------------|-------------|-------------------------------|
|值|描述|归属于浅层转化目标的值|
|TRACKING_BROWSER|浏览商品|TRACKING_ACTIVE|
|TRACKING_COLLECTION|收藏|TRACKING_ACTIVE|
|TRACKING_ADD_CART|加入购物车|TRACKING_ACTIVE|
|TRACKING_PRE_ORDER|下单|TRACKING_ACTIVE|
|TRACKING_REGISTER|注册|TRACKING_ACTIVE|
|TRACKING_RETAIN|次日留存|TRACKING_ACTIVE|
|TRACKING_PAY|付费量|TRACKING_ACTIVE|
|TRACKING_APP_CUSTOM|自定义（应用）|TRACKING_ACTIVE|
|TRACKING_RETAIN_HMS|次留(HMS)|TRACKING_ACTIVATE_HMS|
|TRACKING_EFFECTIVE_CONSULT|有效咨询|TRACKING_FORM_SUBMIT|
|TRACKING_EFFECTIVE_CUSTOMER_ACQUISITION|有效获客|TRACKING_FORM_SUBMIT|
|TRACKING_EFFECTIVE_BOOK|有效预定|TRACKING_FORM_SUBMIT|
|TRACKING_WEB_CUSTOM|自定义（网页）|TRACKING_FORM_SUBMIT|
|TRACKING_VALID_LEAD_IN_LANDING_PAGE|有效线索(venus)|TRACKING_SUBMIT_IN_LANDING_PAGE|
|TRACKING_INTENTION_CUSTOMER_IN_LANDING_PAGE|潜在客户线索(venus)|TRACKING_SUBMIT_IN_LANDING_PAGE|
|TRACKING_TRANS_COMPLETED_IN_LANDING_PAGE|已经成单线索(venus)|TRACKING_SUBMIT_IN_LANDING_PAGE|

## 深度转化目标映射表

|-------------------------------------------|-------------|-----------------------------------------------------------------------------------|
|值|描述|归属于浅层转化目标的值|
|TRACKING_BROWSER|浏览商品|TRACKING_ACTIVE (deep_optimize_type=DOUBLE_PRICE)|
|TRACKING_COLLECTION|收藏|TRACKING_ACTIVE (deep_optimize_type=DOUBLE_PRICE)|
|TRACKING_ADD_CART|加入购物车|TRACKING_ACTIVE (deep_optimize_type=DOUBLE_PRICE)|
|TRACKING_PRE_ORDER|下单|TRACKING_ACTIVE (deep_optimize_type=DOUBLE_PRICE)|
|TRACKING_REGISTER|注册|TRACKING_ACTIVE (deep_optimize_type=DOUBLE_PRICE)|
|TRACKING_RETAIN|次日留存|TRACKING_ACTIVE (deep_optimize_type=DOUBLE_PRICE or DOUBLE_STAGE or SINGLE_ENHANCE)|
|TRACKING_PAY|付费量|TRACKING_ACTIVE (deep_optimize_type=DOUBLE_PRICE or DOUBLE_STAGE)|
|TRACKING_PAY|付费量|TRACKING_RE_ENGAGE (deep_optimize_type=DOUBLE_PRICE)|
|TRACKING_APP_CUSTOM|自定义（应用）|TRACKING_ACTIVE (deep_optimize_type=DOUBLE_PRICE)|
|TRACKING_EFFECTIVE_LEADS_FORM|有效线索|TRACKING_FORM_SUBMIT (deep_optimize_type=DOUBLE_PRICE)|
|TRACKING_CREDIT|授信|TRACKING_FORM_SUBMIT (deep_optimize_type=DOUBLE_PRICE)|
|TRACKING_CREDIT|授信|TRACKING_REGISTER (deep_optimize_type=DOUBLE_PRICE)|
|TRACKING_EFFECTIVE_LEADS_FORM|有效线索|TRACKING_SUBMIT_IN_LANDING_PAGE (deep_optimize_type=DOUBLE_PRICE)|
|TRACKING_POTENTIAL_CUSTOMER_FORM[d5]|潜在客户线索|TRACKING_SUBMIT_IN_LANDING_PAGE (deep_optimize_type=DOUBLE_PRICE)|
|TRACKING_RETAIN_HMS|次留(HMS)|TRACKING_ACTIVATE_HMS (deep_optimize_type=DOUBLE_PRICE)|
|TRACKING_EFFECTIVE_CONSULT|有效咨询|TRACKING_FORM_SUBMIT (deep_optimize_type=DOUBLE_PRICE)|
|TRACKING_EFFECTIVE_CUSTOMER_ACQUISITION|有效获客|TRACKING_FORM_SUBMIT (deep_optimize_type=DOUBLE_PRICE)|
|TRACKING_EFFECTIVE_BOOK|有效预定|TRACKING_FORM_SUBMIT (deep_optimize_type=DOUBLE_PRICE)|
|TRACKING_WEB_CUSTOM|自定义（网页）|TRACKING_FORM_SUBMIT (deep_optimize_type=DOUBLE_PRICE)|
|TRACKING_VALID_LEAD_IN_LANDING_PAGE|有效线索(venus)|TRACKING_SUBMIT_IN_LANDING_PAGE (deep_optimize_type=DOUBLE_PRICE)|
|TRACKING_INTENTION_CUSTOMER_IN_LANDING_PAGE|潜在客户线索(venus)|TRACKING_SUBMIT_IN_LANDING_PAGE (deep_optimize_type=DOUBLE_PRICE)|
|TRACKING_TRANS_COMPLETED_IN_LANDING_PAGE|已经成单线索(venus)|TRACKING_SUBMIT_IN_LANDING_PAGE (deep_optimize_type=DOUBLE_PRICE)|

## 版位商务类型

|---------------------|------|
|值|描述|
|CONTRACT|品牌合约资源|
|BIDDING|效果竞价资源|
|APPLICATION_PROMOTION|图标竞价资源|

## 签约主体

|-------------|--------|
|值|描述|
|HW_SOFT|华为软件|
|ASPIEGEL|阿斯比格|
|HW_SERVICE_HK|华为服务（香港）|
|HW_SI_YI|华为思义|
|HW_R|R国华为|

## 虚拟账户类型

|---------------|------|
|值|描述|
|GENERIC_ACCOUNT|通用账户|
|SELF_ACCOUNT|自有媒体|
|AG_ACCOUNT|应用推广账户|

## 商务类型

|----------------------|----|
|值|描述|
|NON_SHINING_STAR|非耀星|
|SHINING_STAR_PROMOTION|耀星推广|

## 人群来源

|----------------------|-----------|
|值|描述|
|ADV_UPLOAD_AUDIENCE|广告主创建的人群|
|SYS_RECOMMEND_AUDIENCE|运营从DMP推送的人群|

## 覆盖人数排序

|----|-------|
|值|描述|
|ASC|按覆盖人数升序|
|DESC|按覆盖人数降序|

## 切换oCPC状态

|---------------------------------|----------|
|值|描述|
|CHANGE_TO_OCPC_STATUS_NOT_ALLOWED|不允许切换到oCPC|
|CHANGE_TO_OCPC_STATUS_ALLOWED|允许切换到oCPC|
|CHANGE_TO_OCPC_STATUS_DONE|已切换到oCPC|

## 深度优化类型

|--------------------------------------|------|
|值|描述|
|OCPC_DEEP_OPTIMIZE_TYPE_DOUBLE_PRICE|双出价|
|OCPC_DEEP_OPTIMIZE_TYPE_DOUBLE_STAGE|双阶段|
|OCPC_DEEP_OPTIMIZE_TYPE_SINGLE_ENHANCE|单目标加强点|

## 商品库类型

|-----------|---|
|值|描述|
|E_COMMERCE|电商|
|SHORT_VIDEO|短视频|
|REAL_ESTATE|房产|

## 广告主与商品库关系

|-----|--------------------------|
|值|描述|
|OWN|拥有此商品库（包括广告主自己创建的和经理账户代建的）|
|SHARE|接口共享的商品库|

## 导入方式

|-----------|----|
|值|描述|
|TIME_PULL|定时拉取|
|FILE_UPLOAD|文件上传|

## oCPX学习期状态

|------------------------------------------|-------|
|值|描述|
|OCPC_TASK_STATUS_STUDY_FAILED|学习失败|
|OCPC_TASK_STATUS_STUDY_OPTIMIZING|学习期优化中|
|OCPC_TASK_STATUS_TARGET_OPTIMIZING|转化目标优化中|
|OCPC_TASK_STATUS_SHALLOW_TARGET_OPTIMIZING|浅层目标优化中|
|OCPC_TASK_STATUS_DEEP_TARGET_OPTIMIZING|深层目标优化中|

## 采买模式

|---|--|
|值|描述|
|RTB|竞价|

## 投放网络

|--------------------|------|
|值|描述|
|FLOW_RESOURCE_SHOWAD|展示广告网络|

## 定向类型

|-------|----|
|值|描述|
|PRIVATE|私有定向|
|SHARE|公有定向|

## 创意模式

|----------------------|----|
|值|描述|
|TEMPLATE_MODE|模板模式|
|DIRECT_INVESTMENT_MODE|直投模式|

## 渠道包状态

|-------|----|
|值|描述|
|APPROVE|审核通过|

## 商品推荐方式

|----------------------------|---------|
|值|描述|
|BEHAVIOR_DATA_RECOMMENDATION|行为库推荐(默认)|
|LBS_RECOMMENDATION|LBS推荐|

## 创意投放方式

|--------|----|
|值|描述|
|TEMPLATE|模板投放|
|DIRECT|直投|

## 商品过滤维度

|------------------|------|
|值|描述|
|CATEGORY|官方商品类目|
|DESIGNATED_PRODUCT|指定商品|
|UNLIMITED|不限|

## 商品库数据上传方式

|-------|----|
|值|描述|
|REGULAR|定时拉取|

## 商品库数据更新方式

|------------------|----|
|值|描述|
|FULL_UPDATE|全量更新|
|INCREMENTAL_UPDATE|增量更新|

## URL地址类型

|-----------|-----------|
|值|描述|
|XML|xml|
|XML_SITEMAP|xml sitemap|
|CSV|csv|
|CSV_SITEMAP|csv_sitemap|

## 筛选条件类别

|------------------------------|-------|
|值|描述|
|DPA_DIMENSION|商品库筛选条件|
|DPA_PRICE_ADJUSTMENT_DIMENSION|商品组细分依据|

## 推广目的

|--------------------|------|
|值|描述|
|APP_DOWNLOAD|应用下载|
|APP_ACTIVE|应用促活|
|APP_RESERVE_DOWNLOAD|应用预约下载|

## 应用详情查询模式

|------------------------------|------------------|
|值|描述|
|QUERY_APP_ONSHELVE|查询已上架应用信息|
|QUERY_APP_ONSHELVE_AND_RESERVE|同时查询已上架应用信息、预约应用信息|

## 动态模板类型

|-----|--|
|值|描述|
|IMAGE|图片|
|VIDEO|视频|

## 模板类型

|---------------------|--------------------------|
|值|描述|
|LEFT_IMAGE_RIGHT_TEXT|1: left image, right text,|
|RIGHT_IMAGE_LEFT_TEXT|2: right image, left text,|
|LEFT_AND_RIGHT|3: 1 and 2|
|IMAGE_ONLY|4: image only|

## VIP版位

|---------------------|--|
|值|描述|
|CREATIVE_SIZE_VIP_YES|是|
|CREATIVE_SIZE_VIP_NO|否|

## 是否支持关键字类型

|-------------------------|--|
|值|描述|
|CREATIVE_SIZE_KEYWORD_YES|是|
|CREATIVE_SIZE_KEYWORD_NO|否|

## 维纳斯落地页风格类型

|-------------------|--------|
|值|描述|
|VENUS_STYLE_GENERAL|普通维纳斯落地页|
|VENUS_STYLE_DYNAMIC|动态维纳斯落地页|

## 维纳斯落地页类型

|---------------------|----------|
|值|描述|
|LANDING_PAGE_TYPE_APP|安卓应用维纳斯落地页|
|LANDING_PAGE_TYPE_WEB|网页维纳斯落地页|

## 优先跳转链接

|---------------------|----------|
|值|描述|
|DEEPLINK_PRIORITY|优先跳转应用直达链接|
|LANDING_PAGE_PRIORITY|优先跳转落地页|

## 线索状态

|------------------------------|-----|
|值|描述|
|LEAD_STATUS_UNKNOWN|未定义线索|
|LEAD_STATUS_DEPRECATED|无效线索|
|LEAD_STATUS_INVALID|确认意向|
|LEAD_STATUS_POTENTIAL_CUSTOMER|加为好友|
|LEAD_STATUS_TRANS_COMPLETED|高潜成交|

## 线索类型

|----------------------|----|
|值|描述|
|LEAD_TYPE_FORM_SUBMIT|表单提交|
|LEAD_TYPE_ORDER_SUBMIT|订单提交|

## 线索无效原因

|----------------------------------------|-----|
|值|描述|
|LEAD_INEFFECT_REASON_EMPTY|无效空|
|LEAD_INEFFECT_REASON_IDENTITY_MISMATCHED|不是本人|
|LEAD_INEFFECT_REASON_REGION_MISMATCHED|地域外定向|
|LEAD_INEFFECT_REASON_DATA_DUPLICATION|重复数据|
|LEAD_INEFFECT_REASON_TEL_NOT_CONNECTED|电话未接通|
|LEAD_INEFFECT_REASON_NO_INTENTION|没有意向|
|LEAD_INEFFECT_REASON_UNKNOWN|未知原因|

## 关键词定向拓展开关

|----------------------------------------|----|
|值|描述|
|CREATIVE_SIZE_KEYWORD_TARGET_EXTENDS_YES|开关打开|
|CREATIVE_SIZE_KEYWORD_TARGET_EXTENDS_NO|开关关闭|

## 智能扩量

|----------------|-----|
|值|描述|
|LOCATION|地域|
|GENDER|性别|
|AGE|年龄|
|DEVICE|设备|
|NETWORK_TYPE|联网方式|
|APP_INSTALL|APP安装|
|AUDIENCE|自定义人群|
|FEATURE_AUDIENCE|细分受众|
|MEDIA_TYPE|媒体类型|

## 智能扩量开关

|-----------------|--|
|值|描述|
|AI_TARGET_ENABLE|打开|
|AI_TARGET_DISABLE|关闭|

## 版位所属分类

|----------------------------------|------|
|值|描述|
|CREATIVE_SIZE_CATEGORY_THIRD_PARTY|三方媒体资源|
|CREATIVE_SIZE_CATEGORY_SELF_OWNED|自有媒体资源|
|CREATIVE_SIZE_CATEGORY_OTHER|其他首选资源|

## 转化渠道

|---------|----|
|值|描述|
|NATURAL|自然量|
|HUAWEI|华为|
|TENCENT|腾讯|
|BYTEDANCE|字节跳动|
|KUAISHOU|快手|
|ALIBABA|阿里|
|BAIDU|百度|
|OTHERS|其他|
|UNKNOWN|未知|
|NEGATIVE|负样本|

## 服务类型

|-----------|------|
|值|描述|
|PPS|Ads|
|AG_PROMOTE|应用推广|
|CASH_COMMON|联盟通用账户|

## 账户推广业务类型

|---|---------|
|值|描述|
|ADS|展示广告网络|
|AG|应用市场广告网络|
|AA|AA融合双权限直客|

## 服务商查询用户过滤类型

|----------|---------|
|值|描述|
|AGENCY|子客服务商用户类型|
|ADVERTISER|子客用户类型|
|ALL|全部|

## 任务类型

|-----------------|--|
|值|描述|
|OPERATION_ENABLE|启用|
|OPERATION_DISABLE|停用|
|OPERATION_DELETE|删除|

## 全域智投版位

|--------------------------------|-----|
|值|描述|
|CREATIVE_SIZE_SMART_DELIVERY_NO|否（默认）|
|CREATIVE_SIZE_SMART_DELIVERY_YES|是|
|CREATIVE_SIZE_SMART_DELIVERY_ALL|全部|

## 元素形状

|----------------------------------|--------|
|值|描述|
|SHAPE_FIXED_WIDTH_AND_FIXED_HEIGHT|固定宽度固定高度|
|SHAPE_FIXED_WIDTH_HEIGHT_RATIO|固定宽高比例|
|SHAPE_FIXED_WIDTH|固定宽度|
|SHAPE_FIXED_HEIGHT|固定高度|

## 视频是否有封面

|-------------------|--|
|值|描述|
|VIDEO_HAS_COVER_YES|有|
|VIDEO_HAS_COVER_NO|无|

## 元素类型

|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|值|描述|
|images|图片信息|
|icon|icon信息|
|video|视频信息, 视频元素可以同时上传图片作为视频封面，图片尺寸与视频尺寸必须保持一致|
|title|文案|
|description|描述|
|corporate|品牌名称|
|landing_page|落地页|
|deeplink|应用直达地址|
|impression_monitor_url|展示监控地址|
|click_monitor_url|点击监控地址|
|ad_button_text|按钮文案|
|industry_id|行业分类ID，必须填写三级行业分类ID，示例：100100010001； [查询创意行业元数据](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260715152955.90640806358234551773312803705121:50001231000000:2800:3CDD1B755F8A127FF70CFB440FAD97E1BE4B6DDA2FB64BA500CA5131F18DDF63.xlsx?needInitFileName=true)|
|industry_labels|行业标签 [查询创意行业元数据](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260715152956.78246175935926717968701249006588:50001231000000:2800:2FF25254A79AEC3BEFE9D87ABB7AF92C474BE00393B5E7468586CEB59C9C64FD.xlsx?needInitFileName=true) 最多3个.|
|selling_point|卖点|

## 新付费方式

|-----|-------------|
|值|描述|
|CPM|PRICING_CPM|
|CPC|PRICING_CPC|
|CPC|PRICING_CPC|
|CPA|PRICING_CPA|
|OCPC|PRICING_OCPC|
|CPCV|PRICING_CPCV|
|CPI|PRICING_CPI|
|TROAS|PRICING_TROAS|

## 素材来源

|-----------------|------|
|值|描述|
|VENUS_SYNC|维纳斯同步|
|AIGC|AIGC素材|
|ADVERTISER_UPLOAD|本地上传|

## 账户类型

|-------------------------|-------|
|值|描述|
|DIRECT_ADVERTISER_ACCOUNT|直客账户|
|AGENCY_ACCOUNT|一级服务商账户|
|SUB_AGENCY_ACCOUNT|子客服务商账户|
|AGENT_ACCOUNT|子客账户|
|MANAGER_ACCOUNT|经理账户|

## 赠送金类型

|-------------|----|
|值|描述|
|PURE_GIFT|纯赠|
|RECHARGE_GIFT|充值赠送|

## 创意智能拓展功能

|-----------------------------|---|
|值|描述|
|USE_IMAGE_SMART_EXPANSION_NO|不启用|
|USE_IMAGE_SMART_EXPANSION_YES|启用|

