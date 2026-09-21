---
name: document/cn/AppGallery-connect-References/gpm-android-api-gpmmanager-0000002022527745
title: GPMManager
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gpm-android-api-gpmmanager-0000002022527745
---

# GPMManager

|Class Info|
|:----------------------------------|
|public class GPMManager 游戏性能管理SDK类。|

## Method Summary

> 说明
>
> GPMManager类的方法均为异步方法。

|Qualifier and Type|Method Name and Description|
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static void|[init](#section1155613935519)([GPMInitParams](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gpm-gpminitparams-apis-0000001754248880) initParams) 初始化游戏性能管理SDK，该方法需在主线程中调用，初始化结果通过子线程回调GPMCallback.[onInitResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gpm-android-api-gpmcallback-0000001988789820#section17111102111920)方法来通知。|
|public static void|[enableCollector](#section6902152315716)() 开启数据采集器，开启结果通过子线程回调GPMCallback.[onEnableCollector](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gpm-android-api-gpmcallback-0000001988789820#section34206581277)方法来通知。|
|public static void|[disableCollector](#section443314117810)() 关闭数据采集器，关闭结果通过子线程回调GPMCallback.[onDisableCollector](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gpm-android-api-gpmcallback-0000001988789820#section1395511531215)方法来通知。|
|public static void|[setSceneStart](#section83450342099)(String sceneName) 加载场景，加载结果通过子线程回调GPMCallback.[onSetSceneStart](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gpm-android-api-gpmcallback-0000001988789820#section19300172281214)方法来通知。|
|public static void|[setLoadSceneCompleted](#section5837142071217)() 场景加载完成，设置结果通过子线程回调GPMCallback.[onSetLoadSceneCompleted](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gpm-android-api-gpmcallback-0000001988789820#section165421225121210)方法来通知。|
|public static void|[setSceneEnd](#section165425913151)() 结束场景，设置结果通过子线程回调GPMCallback.[onSetSceneEnd](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gpm-android-api-gpmcallback-0000001988789820#section12972162819129)方法来通知。|
|public static void|[setTagStart](#section1015212671720)(String tagName) 标签开始，开启结果通过子线程回调GPMCallback.[onSetTagStart](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gpm-android-api-gpmcallback-0000001988789820#section20787131151218)方法来通知。|
|public static void|[setTagEnd](#section18108163414405)() 结束标签，设置结果通过子线程回调GPMCallback.[onSetTagEnd](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gpm-android-api-gpmcallback-0000001988789820#section13736234181215)方法来通知。|
|public static void|[setGameConfigurations](#section636113398576)(String gameConfigurations) 设置游戏配置信息，设置结果通过子线程回调GPMCallback.[onSetGameConfigurations](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gpm-android-api-gpmcallback-0000001988789820#section164848368126)方法来通知。|

## Methods

### init

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static void init([GPMInitParams](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gpm-gpminitparams-apis-0000001754248880) initParams) 初始化游戏性能管理SDK，该方法需在主线程中调用，初始化结果通过子线程回调GPMCallback.[onInitResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gpm-android-api-gpmcallback-0000001988789820#section17111102111920)方法来通知。|

**Parameters**

|Name|Description|
|:---------|:----------|
|initParams|GPM初始化配置参数。|

**Sample Code**

```screen
GPMCallback callback = new GPMCallbackImpl();            // GPMCallbackImpl需要自行实现
GPMInitParams initParams = new GPMInitParams();
initParams.setContext(context);
initParams.setAppId(appId);
initParams.setClientId(clientId);
initParams.setAccessToken(accessToken); 
initParams.setLogLevel(3);
initParams.setUserIdentity(userIdentity);
initParams.setCallback(callback);
GPMManager.init(initParams);
```

### enableCollector

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static void enableCollector() 开启数据采集器，开启结果通过子线程回调GPMCallback.[onEnableCollector](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gpm-android-api-gpmcallback-0000001988789820#section34206581277)方法来通知。|

**Sample Code**

```screen
GPMManager.enableCollector();
```

### disableCollector

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static void disableCollector() 关闭数据采集器，关闭结果通过子线程回调GPMCallback.[onDisableCollector](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gpm-android-api-gpmcallback-0000001988789820#section1395511531215)方法来通知。|

**Sample Code**

```screen
GPMManager.disableCollector();
```

### setSceneStart

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static void setSceneStart(String sceneName) 加载场景，加载结果通过子线程回调GPMCallback.[onSetSceneStart](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gpm-android-api-gpmcallback-0000001988789820#section19300172281214)方法来通知。|

**Parameters**

|Name|Description|
|:--------|:-------------------------------------|
|sceneName|场景名称，采用UTF-8编码，限制1024个字节。不支持特殊字符; 和 '。|

**Sample Code**

```screen
GPMManager.setSceneStart("场景1");
```

### setLoadSceneCompleted

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static void setLoadSceneCompleted() 场景加载完成，设置结果通过子线程回调GPMCallback.[onSetLoadSceneCompleted](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gpm-android-api-gpmcallback-0000001988789820#section165421225121210)方法来通知。|

**Sample Code**

```screen
GPMManager.setLoadSceneCompleted();
```

### setSceneEnd

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static void setSceneEnd() 结束场景，设置结果通过子线程回调GPMCallback.[onSetSceneEnd](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gpm-android-api-gpmcallback-0000001988789820#section12972162819129)方法来通知。|

**Sample Code**

```screen
GPMManager.setSceneEnd();
```

### setTagStart

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static void setTagStart(String tagName) 标签开始，开启结果通过子线程回调GPMCallback.[onSetTagStart](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gpm-android-api-gpmcallback-0000001988789820#section20787131151218)方法来通知。|

**Parameters**

|Name|Description|
|:------|:----------------------|
|tagName|标签名称，UTF-8编码，限制1024个字节。|

**Sample Code**

```screen
GPMManager.setTagStart("场景标签1");
```

### setTagEnd

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static void setTagEnd() 结束标签，设置结果通过子线程回调GPMCallback.[onSetTagEnd](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gpm-android-api-gpmcallback-0000001988789820#section13736234181215)方法来通知。|

**Sample Code**

```screen
GPMManager.setTagEnd();
```

### setGameConfigurations

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static void setGameConfigurations(String gameConfigurations) 设置游戏配置信息，设置结果通过子线程回调GPMCallback.[onSetGameConfigurations](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/gpm-android-api-gpmcallback-0000001988789820#section164848368126)方法来通知。|

**Parameters**

|Name|Description|
|:-----------------|:------------------------------------------|
|gameConfigurations|游戏配置信息，内容自定义，建议根据自身情况设置统一的编码规范，长度在0,1024之间。|

**Sample Code**

```screen
GPMManager.setGameConfigurations("3;3;50;1280*720;true;true;true;true;true");
```

