---
name: document/cn/HMSCore-References/ohos-java-support-subres-0000001680700117
title: SubscribeResult
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ohos-java-support-subres-0000001680700117
---

# SubscribeResult

* 支持的场景：手机、平板。
* 支持的OS：HarmonyOS 4.0及以上。

|Interface Info|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public interface SubscribeResult 您调用[requestSubscribeNotification](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/hms-push-ohos-noti-sub-0000001627079566#section193261440453)方法返回的结果。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------|
|List\<[SubscribedItem](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/ohos-java-notification-sub-0000001681745385)\>|[getSubscribedItems](#section193261440453)() 获取消息订阅的结果列表。|
|String|[getErrorMsg()](#section19267455155817)() 获取消息订阅错误信息。|

#### Public Methods

#### getSubscribedItems()

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public List\<[SubscribedItem](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/ohos-java-notification-sub-0000001681745385)\> getSubscribedItems() 获取消息订阅的结果列表。|

Returns  

|Type|Description|
|:------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|List\<[SubscribedItem](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/ohos-java-notification-sub-0000001681745385)\>|用户订阅的模板列表。|

#### getErrorMsg()

|Method|
|:--------------------------------------|
|public String getErrorMsg() 获取消息订阅失败信息。|

Returns  

|Type|Description|
|:-----|:----------|
|String|消息订阅失败信息。|

