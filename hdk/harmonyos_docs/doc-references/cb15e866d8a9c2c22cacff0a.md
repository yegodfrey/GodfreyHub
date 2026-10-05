---
name: document/cn/doc-references/permissiongroupdef-0000001054838930
title: PermissionGroupDef
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/permissiongroupdef-0000001054838930
source: portal
---

# PermissionGroupDef  
  
[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.security.permission.PermissionGroupDef
    
    public class PermissionGroupDef
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)
    implements [Sequenceable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001)  
  
---  
Provides known system security permission groups. The permission groups correspond to the content of the def-permissiongroups tag in the ohos.profiles file.

**Since:**

3

#### Nested Class Summary

Nested classes/interfaces inherited from interface ohos.utils.[Sequenceable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001)  
---  
[Sequenceable.Producer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable_producer-0000001054678971)<[T](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable_producer-0000001054678971)>  
  
#### Field Summary

Modifier and Type | Field | Description  
---|---|---  
int | [descriptionRes](https://developer.harmonyos.com/cn/docs/documentation/doc-references/permissiongroupdef-0000001054838930#ZH-CN_TOPIC_0000001054838930__descriptionRes) |  A string resource identifier (in the package's resources) of this permissionGroup's detailed description.   
int | [iconRes](https://developer.harmonyos.com/cn/docs/documentation/doc-references/permissiongroupdef-0000001054838930#ZH-CN_TOPIC_0000001054838930__iconRes) |  A string resource identifier (in the package's resources) of this permissionGroup's icon.   
int | [labelRes](https://developer.harmonyos.com/cn/docs/documentation/doc-references/permissiongroupdef-0000001054838930#ZH-CN_TOPIC_0000001054838930__labelRes) |  A string resource identifier (in the package's resources) of this permissionGroup's brief description.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [name](https://developer.harmonyos.com/cn/docs/documentation/doc-references/permissiongroupdef-0000001054838930#ZH-CN_TOPIC_0000001054838930__name) |  The name of this permission group.   
int | [order](https://developer.harmonyos.com/cn/docs/documentation/doc-references/permissiongroupdef-0000001054838930#ZH-CN_TOPIC_0000001054838930__order) |  The priority of permission group, used for sorting when the UI displays permission groups, 0 is the first, 10000 is the last.   
int | [requestRes](https://developer.harmonyos.com/cn/docs/documentation/doc-references/permissiongroupdef-0000001054838930#ZH-CN_TOPIC_0000001054838930__requestRes) |  A string resource identifier (in the package's resources) of interrogation when the application dynamically requests permission from the user.   
  
#### Constructor Summary

Constructor | Description  
---|---  
[PermissionGroupDef](https://developer.harmonyos.com/cn/docs/documentation/doc-references/permissiongroupdef-0000001054838930#ZH-CN_TOPIC_0000001054838930__PermissionGroupDef--)​() |  A constructor used to create a PermissionGroupDef instance.   
[PermissionGroupDef](https://developer.harmonyos.com/cn/docs/documentation/doc-references/permissiongroupdef-0000001054838930#ZH-CN_TOPIC_0000001054838930__PermissionGroupDef-ohos_security_permission_PermissionGroupDef-)​([PermissionGroupDef](https://developer.harmonyos.com/cn/docs/documentation/doc-references/permissiongroupdef-0000001054838930) orig) |  A constructor used to create a PermissionGroupDef instance using an existing PermissionGroupDef instance.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
boolean | [marshalling](https://developer.harmonyos.com/cn/docs/documentation/doc-references/permissiongroupdef-0000001054838930#ZH-CN_TOPIC_0000001054838930__marshalling-ohos_utils_Parcel-)​([Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018) out) |  Marshals a PermissionGroupDef object into a Parcel object.   
boolean | [unmarshalling](https://developer.harmonyos.com/cn/docs/documentation/doc-references/permissiongroupdef-0000001054838930#ZH-CN_TOPIC_0000001054838930__unmarshalling-ohos_utils_Parcel-)​([Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018) in) |  Unmarshals a PermissionGroupDef object from a Parcel object.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
Methods inherited from interface ohos.utils.[Sequenceable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001)  
---  
[hasFileDescriptor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001#ZH-CN_TOPIC_0000001054239001__hasFileDescriptor--)  
  
#### Field Detail

#### [h2]descriptionRes

public int descriptionRes

A string resource identifier (in the package's resources) of this permissionGroup's detailed description. From the "description" attribute or,if not set, 0. 

#### [h2]iconRes

public int iconRes

A string resource identifier (in the package's resources) of this permissionGroup's icon. From the "icon" attribute or,if not set, 0. 

#### [h2]labelRes

public int labelRes

A string resource identifier (in the package's resources) of this permissionGroup's brief description. From the "label" attribute or,if not set, 0. 

#### [h2]name

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) name

The name of this permission group. 

#### [h2]order

public int order

The priority of permission group, used for sorting when the UI displays permission groups, 0 is the first, 10000 is the last. 

#### [h2]requestRes

public int requestRes

A string resource identifier (in the package's resources) of interrogation when the application dynamically requests permission from the user. From the "request" attribute or, if not set, 0. 

#### Constructor Detail

#### [h2]PermissionGroupDef

public PermissionGroupDef​()

A constructor used to create a PermissionGroupDef instance. 

The PermissionGroupDef instance is initialized.

**Since:**

3

#### [h2]PermissionGroupDef

public PermissionGroupDef​([PermissionGroupDef](https://developer.harmonyos.com/cn/docs/documentation/doc-references/permissiongroupdef-0000001054838930) orig)

A constructor used to create a PermissionGroupDef instance using an existing PermissionGroupDef instance. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
orig  |  Indicates the existing PermissionGroupDef instance.  
  
**Since:**

3

#### Method Detail

#### [h2]marshalling

public boolean marshalling​([Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018) out)

Marshals a PermissionGroupDef object into a Parcel object. 

**Specified by:**

[marshalling](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001#ZH-CN_TOPIC_0000001054239001__marshalling-ohos_utils_Parcel-) in interface [Sequenceable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
out  |  Indicates the Parcel object for marshalling.  
  
**Returns:**

Returns true if the marshalling is successful; returns false otherwise.

**Since:**

3

#### [h2]unmarshalling

public boolean unmarshalling​([Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018) in)

Unmarshals a PermissionGroupDef object from a Parcel object. 

**Specified by:**

[unmarshalling](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001#ZH-CN_TOPIC_0000001054239001__unmarshalling-ohos_utils_Parcel-) in interface [Sequenceable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
in  |  Indicates the Parcel object for unmarshalling.  
  
**Returns:**

Returns true if the unmarshalling is successful; returns false otherwise.

**Since:**

3
