---
name: document/cn/connectivity-References/authclient-0000001059980967
title: AuthClient
uri: https://developer.huawei.com/consumer/cn/doc/connectivity-References/authclient-0000001059980967
---

# AuthClient

|-----------------------------------------------------------------------------------------------------------|
|java.lang.Object |---com.huawei.wearengine.auth.AuthClient public class AuthClient extends java.lang.Object|

用于权限管理的客户端，开发者可以通过该客户端进行用户权限授权操作。

## Method Summary

|Modifier and Type|Method and Description|
|:---------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|com.huawei.hmf.tasks.Task<java.lang.Boolean>|[checkPermission](https://developer.huawei.com/consumer/cn/doc/connectivity-References/authclient-0000001059980967#ZH-CN_TOPIC_0000001919950749__checkPermission-com_huawei_wearengine_auth_Permission-)([Permission](https://developer.huawei.com/consumer/cn/doc/connectivity-References/permission-0000001059433005) permission) 查询权限是否授予。|
|com.huawei.hmf.tasks.Task<java.lang.Boolean[]>|[checkPermissions](https://developer.huawei.com/consumer/cn/doc/connectivity-References/authclient-0000001059980967#ZH-CN_TOPIC_0000001919950749__checkPermissions-com_huawei_wearengine_auth_Permission:A-)([Permission](https://developer.huawei.com/consumer/cn/doc/connectivity-References/permission-0000001059433005)[] permissions) 查询权限组是否授予。|
|com.huawei.hmf.tasks.Task<java.lang.Void>|[requestPermission](https://developer.huawei.com/consumer/cn/doc/connectivity-References/authclient-0000001059980967#ZH-CN_TOPIC_0000001919950749__requestPermission-com_huawei_wearengine_auth_AuthCallback-com_huawei_wearengine_auth_Permission___-)([AuthCallback](https://developer.huawei.com/consumer/cn/doc/connectivity-References/authcallback-0000001059850647) authCallback, [Permission](https://developer.huawei.com/consumer/cn/doc/connectivity-References/permission-0000001059433005)... permissions) 请求权限。|

## Method Detail

### requestPermission

public com.huawei.hmf.tasks.Task<java.lang.Void> requestPermission([AuthCallback](https://developer.huawei.com/consumer/cn/doc/connectivity-References/authcallback-0000001059850647) authCallback, [Permission](https://developer.huawei.com/consumer/cn/doc/connectivity-References/permission-0000001059433005)... permissions)

请求权限。

**Parameters:**

|Parameter Name|Parameter Description|
|:-------------|:--------------------|
|authCallback|授权结果的回调对象|
|permissions|需要申请的权限列表|

**Returns:**

返回一个任务，三方应用可以调用任务的addOnSuccessListener和addOnFailureListener等相关方法来检查任务执行的结果。如果申请的权限之前已经授予了，会返回已经授权的权限。

**Since:**

API level 0 (SDK 5.0.0.301)

### checkPermission

public com.huawei.hmf.tasks.Task<java.lang.Boolean> checkPermission([Permission](https://developer.huawei.com/consumer/cn/doc/connectivity-References/permission-0000001059433005) permission)

查询权限是否授予。

**Parameters:**

|Parameter Name|Parameter Description|
|:-------------|:--------------------|
|permission|需要查询的权限|

**Returns:**

返回一个任务，三方应用可以调用任务的addOnSuccessListener和addOnFailureListener等相关方法来检查任务执行的结果

**Since:**

API level 0 (SDK 5.0.0.301)

### checkPermissions

public com.huawei.hmf.tasks.Task<java.lang.Boolean[]> checkPermissions([Permission](https://developer.huawei.com/consumer/cn/doc/connectivity-References/permission-0000001059433005)[] permissions)

查询权限组是否授予。

**Parameters:**

|Parameter Name|Parameter Description|
|:-------------|:--------------------|
|permissions|需要查询的权限组|

**Returns:**

返回一个任务，三方应用可以调用任务的addOnSuccessListener和addOnFailureListener等相关方法来检查任务执行的结果

**Since:**

API level 0 (SDK 5.0.0.301)

