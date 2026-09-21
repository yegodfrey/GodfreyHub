---
name: document/cn/connectivity-References/we-ios-wesauthclient-class-0000001897943254
title: Class
uri: https://developer.huawei.com/consumer/cn/doc/connectivity-References/we-ios-wesauthclient-class-0000001897943254
---

# Class

|----------------------------------------|
|NSObject |---WearEngineSDK.WESAuthClient|

用于权限管理的客户端，开发者可以通过该客户端进行用户权限授权操作。

## Method Summary

|Modifier and Type|Method and Description|
|:----------------|:--------------------------------------------------------|
|void|[authWithClientId](#section12194195011300) 拉起运动健康app请求授予。|
|void|[authWithClientId](#section15405203834110) 拉起运动健康app请求授予。|
|void|[processAuthResultWith](#section6464173116407) 解析授权结果。|

### authWithClientId

- (void)authWithClientId:(NSString *)clientId

scheme:(NSString *)scheme

schemeSecret:(NSString *)schemeSecret

clientSecret:(NSString *)clientSecret

srcPkgName:(NSString *)srcPkgName

destPkgName:(NSString *)destPkgName

callback:(WESAuthCallback)callback;

请求权限。

**Parameters:**

|Parameter Name|Parameter Description|
|:-------------|:---------------------------|
|clientId|第三方app的华为开发者联盟应用id|
|scheme|第三方app的scheme|
|schemeSecret|第三方app的华为开发者联盟应用schemeSecret|
|clientSecret|第三方app的华为开发者联盟应用clientSecret|
|srcPkgName|iOS手机侧的app包名|
|destPkgName|穿戴设备侧的app包名|
|callback|授权结果的回调对象|

## authWithClientId

- (void)authWithClientId:(NSString *)clientId

scheme:(NSString *)scheme

schemeSecret:(NSString *)schemeSecret

clientSecret:(NSString *)clientSecret

srcPkgName:(NSString *)srcPkgName

destPkgName:(NSString *)destPkgName

ulinkType:(WESULinkType)ulinkType

callback:(WESAuthCallback)callback;

请求权限。

**Parameters:**

|Parameter Name|Parameter Description|
|:-------------|:---------------------------|
|clientId|第三方app的华为开发者联盟应用id|
|scheme|第三方app的scheme|
|schemeSecret|第三方app的华为开发者联盟应用schemeSecret|
|clientSecret|第三方app的华为开发者联盟应用clientSecret|
|srcPkgName|iOS手机侧的app包名|
|destPkgName|穿戴设备侧的app包名|
|ulinkType|跳转使用的Universal Link类型|
|callback|授权结果的回调对象|

### processAuthResultWith

- (void)processAuthResultWith:(NSURL *)url;

解析授权结果。

**Parameters:**

|Parameter Name|Parameter Description|
|:-------------|:--------------------|
|url|授权结果的url数据|

