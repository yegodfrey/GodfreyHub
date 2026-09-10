---
name: document/cn/connectivity-References/notificationtemplate-0000001059433015
title: NotificationTemplate
uri: https://developer.huawei.com/consumer/cn/doc/connectivity-References/notificationtemplate-0000001059433015
---

# NotificationTemplate

|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|java.lang.Object \|---java.lang.Enum\<[NotificationTemplate](https://developer.huawei.com/consumer/cn/doc/connectivity-References/notificationtemplate-0000001059433015)\> \|---\|---com.huawei.wearengine.notify.NotificationTemplate ``` public enum NotificationTemplate extends java.lang.Enum<NotificationTemplate> ```|

通知模板  

#### Enum Constant Summary

|Enum Constant and Description|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[NOTIFICATION_TEMPLATE_NO_BUTTON](https://developer.huawei.com/consumer/cn/doc/connectivity-References/notificationtemplate-0000001059433015#ZH-CN_TOPIC_0000001919950729__NOTIFICATION_TEMPLATE_NO_BUTTON) 50：没有按钮|
|[NOTIFICATION_TEMPLATE_ONE_BUTTON](https://developer.huawei.com/consumer/cn/doc/connectivity-References/notificationtemplate-0000001059433015#ZH-CN_TOPIC_0000001919950729__NOTIFICATION_TEMPLATE_ONE_BUTTON) 51：一个按钮|
|[NOTIFICATION_TEMPLATE_THREE_BUTTONS](https://developer.huawei.com/consumer/cn/doc/connectivity-References/notificationtemplate-0000001059433015#ZH-CN_TOPIC_0000001919950729__NOTIFICATION_TEMPLATE_THREE_BUTTONS) 53：三个按钮|
|[NOTIFICATION_TEMPLATE_TWO_BUTTONS](https://developer.huawei.com/consumer/cn/doc/connectivity-References/notificationtemplate-0000001059433015#ZH-CN_TOPIC_0000001919950729__NOTIFICATION_TEMPLATE_TWO_BUTTONS) 52：两个按钮|

#### Method Summary

|Modifier and Type|Method and Description|
|:----------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|static [NotificationTemplate](https://developer.huawei.com/consumer/cn/doc/connectivity-References/notificationtemplate-0000001059433015)|[getTemplateForTemplateId](https://developer.huawei.com/consumer/cn/doc/connectivity-References/notificationtemplate-0000001059433015#ZH-CN_TOPIC_0000001919950729__getTemplateForTemplateId-int-)(int templateId) 通过templateId获取通知模板|

#### Enum Constant Detail

#### NOTIFICATION_TEMPLATE_NO_BUTTON

public static final [NotificationTemplate](https://developer.huawei.com/consumer/cn/doc/connectivity-References/notificationtemplate-0000001059433015) NOTIFICATION_TEMPLATE_NO_BUTTON

50：没有按钮

Since:

API level 2 (SDK 5.0.1.300)

<br />

#### NOTIFICATION_TEMPLATE_ONE_BUTTON

public static final [NotificationTemplate](https://developer.huawei.com/consumer/cn/doc/connectivity-References/notificationtemplate-0000001059433015) NOTIFICATION_TEMPLATE_ONE_BUTTON

51：一个按钮

Since:

API level 2 (SDK 5.0.1.300)

<br />

#### NOTIFICATION_TEMPLATE_TWO_BUTTONS

public static final [NotificationTemplate](https://developer.huawei.com/consumer/cn/doc/connectivity-References/notificationtemplate-0000001059433015) NOTIFICATION_TEMPLATE_TWO_BUTTONS

52：两个按钮

Since:

API level 2 (SDK 5.0.1.300)

<br />

#### NOTIFICATION_TEMPLATE_THREE_BUTTONS

public static final [NotificationTemplate](https://developer.huawei.com/consumer/cn/doc/connectivity-References/notificationtemplate-0000001059433015) NOTIFICATION_TEMPLATE_THREE_BUTTONS

53：三个按钮

Since:

API level 2 (SDK 5.0.1.300)

<br />

#### Method Detail

#### getTemplateForTemplateId

public static [NotificationTemplate](https://developer.huawei.com/consumer/cn/doc/connectivity-References/notificationtemplate-0000001059433015) getTemplateForTemplateId(int templateId)

通过templateId获取通知模板

Parameters:  

|Parameter Name|Parameter Description|
|:-------------|:--------------------------|
|templateId|模板id，参见NotificationTemplate|

Returns:

通知模板

Since:

API level 2 (SDK 5.0.1.300)

<br />

