---
name: document/cn/doc-references/permission-0000001054558977
title: Permission
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/permission-0000001054558977
source: portal
---

# Permission

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.security.permission.Permission
    
    public class Permission
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Provides methods for permission management, such as granting, revoking, and requesting permissions.

**Since:**

3

#### Nested Class Summary

Modifier and Type | Class | Description  
---|---|---  
static interface  | [Permission.OnRequestPermissionsResult](https://developer.harmonyos.com/cn/docs/documentation/doc-references/permission_onrequestpermissionsresult-0000001060996906) |  Deprecated. This change is effective since API version 4.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
static boolean | [canRequestPermissionFromRemote](https://developer.harmonyos.com/cn/docs/documentation/doc-references/permission-0000001054558977#ZH-CN_TOPIC_0000001054558977__canRequestPermissionFromRemote-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) permission, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) nodeId) |  Deprecated. This change is effective since API version 4.   
static void | [requestPermissionsFromRemote](https://developer.harmonyos.com/cn/docs/documentation/doc-references/permission-0000001054558977#ZH-CN_TOPIC_0000001054558977__requestPermissionsFromRemote-java_lang_String:A-ohos_security_permission_Permission_OnRequestPermissionsResult-java_lang_String-java_lang_String-int-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] permissions, [Permission.OnRequestPermissionsResult](https://developer.harmonyos.com/cn/docs/documentation/doc-references/permission_onrequestpermissionsresult-0000001060996906) callback, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) nodeId, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) bundleName, int reasonResId) |  Deprecated. This change is effective since API version 4.   
static int | [verifyPermissionFromRemote](https://developer.harmonyos.com/cn/docs/documentation/doc-references/permission-0000001054558977#ZH-CN_TOPIC_0000001054558977__verifyPermissionFromRemote-java_lang_String-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) permission, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) nodeId, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) appIdInfo) |  Deprecated. This change is effective since API version 4.   
static int | [verifySelfPermissionFromRemote](https://developer.harmonyos.com/cn/docs/documentation/doc-references/permission-0000001054558977#ZH-CN_TOPIC_0000001054558977__verifySelfPermissionFromRemote-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) permission, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) nodeId) |  Deprecated. This change is effective since API version 4.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Method Detail

#### [h2]canRequestPermissionFromRemote

[@Deprecated](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deprecated-0000001054838412) public static boolean canRequestPermissionFromRemote​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) permission, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) nodeId)

Deprecated. This change is effective since API version 4.

Checks whether this application can request a specified sensitive permission from a remote device. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
permission  |  Indicates the permission name.  
nodeId  |  Indicates the network ID of the remote device. It cannot be null.  
  
**Returns:**

Returns true if this application can request the specified sensitive permission from the remote device; returns false otherwise.

**Since:**

4

#### [h2]requestPermissionsFromRemote

[@Deprecated](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deprecated-0000001054838412) public static void requestPermissionsFromRemote​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] permissions, [Permission.OnRequestPermissionsResult](https://developer.harmonyos.com/cn/docs/documentation/doc-references/permission_onrequestpermissionsresult-0000001060996906) callback, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) nodeId, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) bundleName, int reasonResId)

Deprecated. This change is effective since API version 4.

Requests a list of sensitive permissions from a specified remote device. 

The request result is returned through [OnRequestPermissionsResult](https://developer.harmonyos.com/cn/docs/documentation/doc-references/permission_onrequestpermissionsresult-0000001060996906).

**Parameters:**

Parameter Name | Parameter Description  
---|---  
permissions  |  Indicates the list of sensitive permissions to request.  
callback  |  Indicates the callback to notify the request result. For details, see [OnRequestPermissionsResult](https://developer.harmonyos.com/cn/docs/documentation/doc-references/permission_onrequestpermissionsresult-0000001060996906).  
nodeId  |  Indicates the network ID of the remote device. It cannot be null.  
bundleName  |  Indicates the bundle name of the application that requests the permissions.  
reasonResId  |  Indicates the ID of the resource that will use the requested permissions.  
  
**Since:**

4

#### [h2]verifyPermissionFromRemote

[@Deprecated](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deprecated-0000001054838412) public static int verifyPermissionFromRemote​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) permission, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) nodeId, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) appIdInfo)

Deprecated. This change is effective since API version 4.

Checks whether a specified application has the given permission to access a remote device. 

**This method can only check for a sensitive permission.**

**Parameters:**

Parameter Name | Parameter Description  
---|---  
permission  |  Indicates the permission to check for.  
nodeId  |  Indicates the network ID of the remote device. It cannot be null.  
appIdInfo  |  Indicates the application information. It is a JSON string that consists of the application UID and PID, for example, "{\"uid\":10888,\"pid\":555}".  
  
**Returns:**

Returns 0 if the application has the given permission; returns -1 if the application does not have the given permission or the permission to check for is a non-sensitive permission.

**Since:**

4

#### [h2]verifySelfPermissionFromRemote

[@Deprecated](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deprecated-0000001054838412) public static int verifySelfPermissionFromRemote​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) permission, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) nodeId)

Deprecated. This change is effective since API version 4.

Checks whether this application has the given permission to access a specified remote device. 

**This method can only check for a sensitive permission.**

**Parameters:**

Parameter Name | Parameter Description  
---|---  
permission  |  Indicates the permission to check for.  
nodeId  |  Indicates the network ID of the remote device. It cannot be null.  
  
**Returns:**

Returns 0 if this application has the given permission; returns -1 if this application does not have the given permission or the permission to check for is a non-sensitive permission.

**Since:**

4
