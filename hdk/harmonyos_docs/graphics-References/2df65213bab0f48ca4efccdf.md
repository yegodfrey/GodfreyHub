---
name: document/cn/graphics-References/api-permission-util-0000001071246334
title: PermissionUtil
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/api-permission-util-0000001071246334
---

# PermissionUtil

|Class Info|
|:-----------------------------------|
|public class PermissionUtil 权限管理工具类。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:-----------------------------------------------------------------------------------------|
|static boolean|[checkARPermissions](#section15900154515418)(Activity activity) 检查当前Activity是否满足AR场景所需的权限。|
|static void|[requestARPermissions](#section08372161575)(Activity activity) 申请当前Activity在AR场景下所需的权限。|

#### Public Methods

#### checkARPermissions

|Method|
|:-------------------------------------------------------------------------------------|
|public static boolean checkARPermissions(Activity activity) 检查当前Activity是否满足AR场景所需的权限。|

Parameters  

|Name|Description|
|:-------|:----------|
|activity|当前Activity。|

Returns  

|Type|Description|
|:------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|boolean|当前Activity是否满足AR场景所需权限。 * true：此Activity满足所需权限。 * false：此Activity不满足所需权限，请参见[添加权限](https://developer.huawei.com/consumer/cn/doc/graphics-Guides/add-permissions-0000001063528677)增加相应权限。|

#### requestARPermissions

|Method|
|:----------------------------------------------------------------------------------|
|public static void requestARPermissions(Activity activity) 申请当前Activity在AR场景下所需的权限。|

Parameters  

|Name|Description|
|:-------|:----------|
|activity|当前Activity。|

