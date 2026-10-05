---
name: document/cn/HMS-References/drivekit-permission
title: Permission
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/drivekit-permission
source: portal
---

Class info  
---  
public final class Permission extends GenericJson  
Permission实体，文件权限类。  
  
## Public Constructor Summary

Constructor name  
---  
Permission()  Permission类构造方法。  
  
## Public Method Summary

Return type| Method name  
---|---  
Permission| clone()克隆一个Permission类对象。  
Boolean| getAllowFileDiscovery()获取该权限是否允许文件通过搜索发现。  
Boolean| getDeleted()获取该权限关联的帐号是否已被删除。  
String| getDisplayName()获取用户、组或域的显示名称。  
com.huawei.cloud.base.util.DateTime| getExpirationTime()获取该权限即将过期的时间。  
String| getId()获取该权限的ID。  
String| getCategory()获取资源类型的标识。  
String| getProfilePhotoLink()获取用户头像链接。  
String| getRole()获取该权限授予的角色，取值为owner, writer, reader。  
String| getType()获取被授予人的类型，取值为user, anyone。  
String| getUserAccount()获取用户账号。  
String| getAccountType()获取用户类型。  
Permission| setAccountType()设置用户类型。  
Permission| set(String fieldName, Object value)设置自定义属性及属性值。  
Permission| setAllowFileDiscovery(Boolean allowFileDiscovery)设置该权限是否允许文件通过搜索发现。  
Permission| setDeleted(Boolean deleted)设置该权限关联的帐号是否已被删除。  
Permission| setDisplayName(String displayName)设置用户、组或域的显示名称。  
Permission| setExpirationTime(com.huawei.cloud.base.util.DateTime expirationTime)设置该权限即将过期的时间。  
Permission| setId(String id)设置该权限的ID。  
Permission| setCategory(String category)设置资源类型的标识。  
Permission| setProfilePhotoLink(String profilePhotoLink)设置用户头像链接。  
Permission| setRole(String role)设置该权限授予的角色 ，取值为owner, writer, reader。  
Permission| setType(String type)设置被授予人的类型，取值为user, anyone。  
Permission| setUserAccount(String userAccount)设置用户账号。  
  
## Public Constructors

constructor  
---  
Permission()  
构造一个Permission类对象。  
  
## Public Methods

Method  
---  
public Permission clone()  
克隆一个Permission对象。  
  
**Return**

type| desc  
---|---  
Permission| 返回Permission对象。  
Method  
---  
  
public Boolean getAllowFileDiscovery()  
获取该权限是否允许文件通过搜索发现。  
  
**Return**

type| desc  
---|---  
Boolean| 返回该权限是否允许文件通过搜索发现。  
Method  
---  
  
public Boolean getDeleted()  
获取该权限关联的帐号是否已被删除。  
  
**Return**

type| desc  
---|---  
Boolean| 返回该权限关联的帐号是否已被删除。  
Method  
---  
  
public String getDisplayName()  
获取用户、组或域的显示名称。  
  
**Return**

type| desc  
---|---  
String| 返回用户、组或域的显示名称。  
Method  
---  
  
public com.huawei.cloud.base.util.DateTime getExpirationTime()  
获取该权限即将过期的时间。  
  
**Return**

type| desc  
---|---  
com.huawei.cloud.base.util.DateTime| 返回该权限即将过期的时间。  
Method  
---  
  
public String getId()  
获取该权限的ID。  
  
**Return**

type| desc  
---|---  
String| 返回该权限的ID。  
Method  
---  
  
public String getCategory()  
获取资源类型的标识。  
  
**Return**

type| desc  
---|---  
String| 返回资源类型的标识。  
Method  
---  
  
public String getProfilePhotoLink()  
获取用户头像链接。  
  
**Return**

type| desc  
---|---  
String| 返回用户头像链接。  
Method  
---  
  
public String getRole()  
获取该权限授予的角色，取值为owner, writer, reader。  
  
**Return**

type| desc  
---|---  
String| 返回该权限授予的角色，取值为owner, writer, reader。  
Method  
---  
  
public String getType()  
获取被授予人的类型，取值为user, anyone。  
  
**Return**

type| desc  
---|---  
String| 返回被授予人的类型，取值为user, anyone。  
Method  
---  
  
public String getUserAccount()  
获取用户账号。  
  
**Return**

type| desc  
---|---  
String| 返回用户账号。  
Method  
---  
  
public Permission set(String fieldName, Object value)  
设置自定义属性及属性值。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
fieldName| 属性名称。  
value| 属性值。  
  
**Return**  


type| desc  
---|---  
Permission| 返回Permission对象。  
Method  
---  
  
public Permission setAllowFileDiscovery(Boolean allowFileDiscovery)  
设置该权限是否允许文件通过搜索发现。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
allowFileDiscovery| 该权限是否允许文件通过搜索发现。  
  
**Return**  


type| desc  
---|---  
Permission| 返回Permission对象。  
Method  
---  
  
public Permission setDeleted(Boolean deleted)  
设置该权限关联的帐号是否已被删除。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
deleted| 该权限关联的帐号是否已被删除。  
  
**Return**  


type| desc  
---|---  
Permission| 返回Permission对象。  
Method  
---  
  
public Permission setDisplayName(String displayName)  
设置用户、组或域的显示名称。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
displayName| 设置用户、组或域的显示名称。  
  
**Return**  


type| desc  
---|---  
Permission| 返回Permission对象。  
Method  
---  
  
public Permission setExpirationTime(com.huawei.cloud.base.util.DateTime expirationTime)  
设置该权限即将过期的时间。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
expirationTime| 该权限即将过期的时间。  
  
**Return**  


type| desc  
---|---  
Permission| 返回Permission对象。  
Method  
---  
  
public Permission setId(String id)  
设置该权限的ID。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
id| 该权限的ID。  
  
**Return**  


type| desc  
---|---  
Permission| 返回Permission对象。  
Method  
---  
  
public Permission setCategory(String category)  
设置资源类型的标识。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
category| 资源类型的标识。固定值：drive#permission。  
  
**Return**  


type| desc  
---|---  
Permission| 返回Permission对象。  
Method  
---  
  
public void setProfilePhotoLink(String profilePhotoLink)  
设置用户头像链接。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
profilePhotoLink| 用户头像链接。  
  
**Return**  


type| desc  
---|---  
Permission| 返回Permission对象。  
Method  
---  
  
public Permission setRole(String role)  
设置该权限授予的角色 ，取值为owner, writer, reader。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
role| 设置该权限授予的角色 ，取值为owner, writer, reader。  
  
**Return**  


type| desc  
---|---  
Permission| 返回Permission对象。  
Method  
---  
  
public Permission setType(String type)  
设置被授予人的类型，取值为user, anyone。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
type| 被授予人的类型，取值为user, anyone。  
  
**Return**  


type| desc  
---|---  
Permission| 返回Permission对象。  
Method  
---  
  
public Permission setUserAccount(String userAccount)  
设置用户账号。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
userAccount| 用户账号。  
  
**Return**  


type| desc  
---|---  
Permission| 返回Permission对象。  
Method  
---  
  
public Permission setAccountType (String accountType)  
设置用户类型。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
accountType| 用户类型。在调用Permission.create接口创建权限的时候，需要传入accoutType，让服务器识别该账号的类型。目前支持的值：0：普通账号（默认用户类型），1：邮箱账号 ，2：手机号码账号。  
  
**Return**  


type| desc  
---|---  
Permission| 返回Permission对象。  
Method  
---  
  
public String getAccountType ()  
获取用户类型。  
  
**Return**

type| desc  
---|---  
String| 返回用户类型。目前支持的值：0：普通账号（默认用户类型），1：邮箱账号 ，2：手机号码账号。
