---
name: document/cn/AppGallery-connect-References/agconnectappmessagingonclicklistener-android-0000001059041586
title: AGConnectAppMessagingOnClickListener
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agconnectappmessagingonclicklistener-android-0000001059041586
---

# AGConnectAppMessagingOnClickListener

|Interface Info|
|:---------------------------------------------------------------|
|public interface AGConnectAppMessagingOnClickListener 消息点击时的监听器。|

#### Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:-------------------------------------------------------------------------------------------------------------|
|void|[onMessageClick](#section1949116516345)(@NonNull AppMessage appMessage， @NonNull Action action) 消息被点击时，此方法会回调。|

#### Methods

#### onMessageClick

|Method|
|:------------------------------------------------------------------------------------------------|
|public void onMessageClick(@NonNull AppMessage appMessage, @NonNull Action action) 消息被点击时，此方法会回调。|

Parameters  

|Name|Description|
|:---------|:-------------------------------------------------------------------------------------------------------------------------------------|
|appMessage|包含消息信息的[AppMessage](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/appmessage-android-0000001059201578)实例。|
|action|点击按钮的跳转信息。|

