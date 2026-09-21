---
name: document/cn/HMSCore-References/hms-push-ohos-hmsmessageservice-0000001153713354
title: HmsMessageService
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hms-push-ohos-hmsmessageservice-0000001153713354
---

# HmsMessageService

|Class Info|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public class HmsMessageService extends Ability 本类用于接收透传消息或者异步返回的Token。 为了接收透传消息或者异步返回的Token，您需要在应用的"config.json"文件中声明HmsMessageService的实现类。在实现类中需要重写基类中的所有方法来处理Push SDK的返回的数据。HmsMessageService类中所有的回调方法需要您保证能够在10s内处理完成，超过10s由您自己起新任务处理。 "config.json"文件中需要包含： ```screen { "backgroundModes": [ ], "skills": [ { "actions": [ "com.huawei.push.action.MESSAGING_EVENT" ] } ], "name": ".DemoHmsMessageServiceAbility", "icon": "$media:icon", "description": "$string:demohmsmessageserviceability_description", "type": "service", "visible": false, "directLaunch": false, "permissions": [] } ```|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void|[onMessageReceived](#section520014264371)([ZRemoteMessage](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/hms-push-ohos-zremotemessage-0000001199433145) message) 接收透传消息方法。|
|void|[onNewToken](#section1633639113715)(String token) 服务端更新Token回调方法。|
|void|[onTokenError](#section7357195612375)(Exception exception) 申请Token失败回调方法。|

## Public Methods

### onMessageReceived(ZRemoteMessage message)

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void onMessageReceived([ZRemoteMessage](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/hms-push-ohos-zremotemessage-0000001199433145) message) 接收服务端推送的透传消息。|

**Parameters**

|Name|Description|
|:------|:----------|
|message|消息数据。|

### onNewToken(String token)

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void onNewToken(String token) 应用调用[HmsInstanceId](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/hms-push-ohos-hmsinstanceid-0000001199553039)中的[getToken](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/hms-push-ohos-hmsinstanceid-0000001199553039#section1427213359368)方法向服务端申请Token，如果服务端当次没有返回Token值，后续服务端返回Token通过此方法返回。|

**Parameters**

|Name|Description|
|:----|:----------------|
|token|Push SDK返回的Token。|

### onTokenError(Exception exception)

|Method|
|:-----------------------------------------------------------|
|public void onTokenError(Exception exception) 申请Token失败回调方法。|

**Parameters**

|Name|Description|
|:--------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|exception|[ZBaseException](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/hms-push-ohos-zbase-exception-0000001153713356)类型，应用调用[getToken](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/hms-push-ohos-hmsinstanceid-0000001199553039#section1427213359368)方法申请Token失败时返回的异常。|

