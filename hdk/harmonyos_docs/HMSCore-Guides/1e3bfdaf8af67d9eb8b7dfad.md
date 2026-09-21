---
name: document/cn/HMSCore-Guides/restrictions-0000001050040064
title: 受限说明
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/restrictions-0000001050040064
---

# 受限说明

## 影响送达率的因素说明

推送服务致力于提供安全可靠的消息发送通道，保障消息成功送达。影响消息送达率的因素：

* 终端设备是否在线。 如果设备离线，推送服务会缓存消息，待设备上线后，再将消息推送给设备。

* 终端设备上集成推送服务SDK的应用是否被卸载。
* 终端设备的网络状况是否稳定。
* 终端设备的安全控制策略。
* 不同厂商终端设备对HMS Core（APK）的支持度。
* 透传消息的送达受Android系统和应用是否驻留在后台影响。

## 推送消息的及时性

在终端设备网络条件良好且不拥堵情况下，推送服务将智能使用推送策略以减少推送消息的时延。

## 推送消息长度限制

消息中的应用包名最大支持128字节，消息内容最大支持4KB字节（不包括Push Token）。

## 网络受限说明

如果终端设备连接的网络配置了防火墙，也会影响消息的到达率，请检查以下端口号是否被禁用。

端口号：

* 443
* 5223

## 特定功能的适用范围说明

|**功能点**|**EMUI版本（及以上）**|**推送服务应用版本（及以上）**|**其他要求**|
|:-------------------|:----------------|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|统一消息中心（NC）|4.0.0|-|-|
|通知栏消息点击事件上报|4.0.0|-|需要[开启华为分析](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/service-enabling-0000001050745155)功能并且[接入Analytics](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/android-accessing-0000001050161888)。|
|设置是否显示通知栏消息|5.1.0|-|-|
|基于应用驻留在前台的通知栏消息展示|9.1.0|9.1.1|-|
|通知栏消息语言本地化|9.1.0|9.1.1|-|
|通知栏消息大文本样式|9.1.0|9.1.1|-|
|通知栏消息Inbox样式|9.1.0|9.1.1|-|
|语音播报|9.1.0|9.1.1|需要[申请权限](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/faq-0000001050042183#section037425218509)。|
|设置应用角标展示的数量（set_num）|9.1.0|10.1.0|-|
|设置应用角标累加的数字（add_num）|8.0.0|8.0.0|-|
|指定action打开自定义页面|9.1.0|10.1.0.306|-|
|多发送者|9.1.0|11.0.1.400|仅适用于华为设备。|
|帐号校验|9.1.0|11.0.1.400|仅适用于华为设备通知栏消息。|
|地理围栏|9.1.0|10.1.2.300|-|
|自定义通知渠道|10.0.0|10.0.0|应用数据处理位置为中国区不适用。|
|通知消息智能分类|10.0.0|10.0.0|不同消息类型呈现和提醒方式上的差异请参见[消息分类管理方案](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/message-classification-0000001149358835#section153801515616)。 仅支持中国大陆设备并且是中文消息。|
|通知消息动作按钮|10.0.0|10.1.0|-|
|高优先级透传消息|10.0.0|-|需要[申请权限](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/faq-0000001050042183#section037425218509)。|
|Web应用推送消息|-|-|仅支持向Web应用（PC端浏览器）推送消息，浏览器类型及版本要求请参见[开发环境](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/web-dev-progress-0000001080676256#ZH-CN_TOPIC_0000001652491976__p1061210021418)。|
|iOS应用推送消息|-|-|仅支持向iOS 10.0及以上的真机推送消息。|
|引导用户打开通知功能|-|11.1.16.300及以上|仅支持华为设备。|
|消息订阅功能|Harmony OS 4.0及以上|11.1.19.300及以上|仅支持华为设备。|

如果您想展示复杂样式的通知栏消息，在[下行消息](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/https-send-api-0000001050986197)使用以下字段需要满足以下版本：

|**字段**|**EMUI版本（及以上）**|**推送服务应用版本（及以上）**|
|:-----------------------------------------------|:--------------|:----------------|
|message.data|9.1.0|9.1.1|
|message.android.data|9.1.0|9.1.1|
|message.notification.image|9.1.0|9.1.1|
|message.android.notification.tag|9.1.0|9.1.1|
|message.android.notification.icon|9.1.0|9.1.1|
|message.android.notification.when|9.1.0|9.1.1|
|message.android.notification.ticker|9.1.0|9.1.1|
|message.android.notification.image|9.1.0|9.1.1|
|message.android.notification.sound|9.1.0|9.1.1|
|message.android.notification.visibility|9.1.0|9.1.1|
|message.android.notification.big_title|9.1.0|9.1.1|
|message.android.notification.big_body|9.1.0|9.1.1|
|message.android.notification.notify_id|9.1.0|9.1.1|
|message.android.notification.title_loc_key|9.1.0|9.1.1|
|message.android.notification.body_loc_key|9.1.0|9.1.1|
|message.android.notification.multi_lang_key|9.1.0|9.1.1|
|message.android.notification.default_sound|9.1.0|9.1.1|
|message.android.notification.inbox_content|9.1.0|9.1.1|
|message.android.notification.notify_summary|9.1.0|9.1.1|
|message.android.notification.badge.add_num|8.0.0|8.0.0|
|message.android.notification.badge.set_num|9.1.0|10.1.0|
|message.android.notification.click_action.action|9.1.0|10.1.0.306|
|message.android.notification.buttons|10.0.0|10.1.0|
|message.android.notification.importance|10.0.0|10.0.0|
|message.android.notification.channel_id|10.0.0|10.0.0|
|message.android.notification.light_settings|10.0.0|10.1.0|
|message.android.notification.use_default_vibrate|10.0.0|10.1.0|
|message.android.notification.use_default_light|10.0.0|10.1.0|

