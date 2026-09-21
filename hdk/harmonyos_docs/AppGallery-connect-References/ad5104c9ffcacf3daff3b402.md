---
name: document/cn/AppGallery-connect-References/clouddb-clouddbzoneconfig-0000001542355945
title: CloudDBZoneConfig
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzoneconfig-0000001542355945
---

# CloudDBZoneConfig

|class info|
|:-------------------------------------------------------------------------------------------------------------------------|
|com.huawei.agconnect.cloud.database.CloudDBZoneConfig 该类用于创建CloudDBZoneConfig对象，配置CloudDBZone的同步属性、访问属性、加密存储属性和数据持久化属性等信息。|

## Nested Class Summary

|Type|Name|Desc|
|:----|:-----------------------------------------------|:------------------------------------------------|
|Class|[CloudDBZoneSyncProperty](#section87661561641)|CloudDBZone的数据同步属性，用于定义CloudDBZone端侧与云侧的数据是否进行同步。|
|Class|[CloudDBZoneAccessProperty](#section19377113410)|CloudDBZone的访问属性，用于定义用户应用访问CloudDBZone的安全属性。|

## Public Constructor Summary

|Constructor name|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[CloudDBZoneConfig](#section1417312910414)(String cloudDBZoneNameSource, [CloudDBZoneSyncProperty](#section87661561641) syncPropertySource, [CloudDBZoneAccessProperty](#section19377113410) accessPropertySource) 创建CloudDBZoneConfig对象。|

## Public Method Summary

|Return type|Method name|
|:-----------------------------------------------|:--------------------------------------------------------------------------------------------|
|String|[getCloudDBZoneName](#section07717121358)() 获取端侧CloudDBZone的名称。|
|[CloudDBZoneSyncProperty](#section87661561641)|[getSyncProperty](#section570384817511)() 获取端侧CloudDBZone的数据同步属性。|
|[CloudDBZoneAccessProperty](#section19377113410)|[getAccessProperty](#section189811451859)() 获取端侧CloudDBZone的访问属性。|
|boolean|[isEncrypted](#section171681054251)() 判断端侧CloudDBZone是否加密。|
|void|[setEncryptedKey](#section2165656958)(String key, String rekey) 设置或者修改端侧CloudDBZone数据加密存储的密钥。|
|void|[setPersistenceEnabled](#section1750715589510)(boolean isPerEnable) 设置端侧CloudDBZone的数据持久化属性。|
|boolean|[getPersistenceEnabled](#section157850664)() 获取端侧CloudDBZone的数据持久化信息。|
|void|[setCapacity](#section056911217613)(long capacity) 设置端侧CloudDBZone的存储空间大小。|
|long|[getCapacity](#section827911582414)() 获取端侧CloudDBZone的存储空间大小。|

## Public Constructors

### CloudDBZoneConfig

|constructor|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public CloudDBZoneConfig(String cloudDBZoneNameSource, [CloudDBZoneSyncProperty](#section87661561641) syncPropertySource, [CloudDBZoneAccessProperty](#section19377113410) accessPropertySource) 调用此方法在端侧创建CloudDBZoneConfig对象，CloudDBZoneConfig对象中包含CloudDBZone的名称、同步属性和访问属性等配置信息。 创建CloudDBZone成功后，不允许修改CloudDBZoneConfig中的CloudDBZone名称、同步属性和访问属性。在创建CloudDBZone成功后，当再次调用[openCloudDBZone2()](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-agconnectclouddb-0000001542275989#section139511251101214)时，系统会校验本次CloudDBZoneConfig中指定的属性与创建CloudDBZoneConfig时指定的属性是否一致，如果不一致，系统会抛出异常。|

**Parameters**

|Parameter name|Parameter desc|
|:--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|cloudDBZoneNameSource|CloudDBZone名称，表示一个唯一的数据存储区域。命名方式如下： CloudDBZone名称长度必须大于或等于1个字符，小于或等于20个字符，只能包含以下2种类型，并且至少包含"字母"类型： * 字母（A-Z或a-z） * 数字（0-9） > 说明 > * CloudDBZone名称必须以字母开头。 > * CloudDBZone名称中不区分字母的大小写。|
|syncPropertySource|CloudDBZone的数据同步属性，用于定义CloudDBZone端侧与云侧的数据是否进行同步。 取值包含： * CLOUDDBZONE_LOCAL_ONLY：本地模式，数据只存储在端侧，不同步至云侧。 * CLOUDDBZONE_CLOUD_CACHE： 缓存模式，数据存储在云侧，端侧数据是云侧数据的子集，如果允许持久化，Cloud DB支持将查询的结果自动缓存至端侧。在端侧对云侧数据注册侦听后，云侧数据变化时，才会通知端侧。|
|accessPropertySource|CloudDBZone的访问属性，用于定义用户应用访问CloudDBZone的安全属性。 枚举类型，取值包含： CLOUDDBZONE_PUBLIC：公共存储区，根据开发者定义的权限对访问进行鉴权。|

**Throws**

|------------------------|---------------------------------------|
|Exception name|Exception desc|
|IllegalArgumentException|当入参"cloudDBZoneNameSource"不符合规范时，会抛出异常。|
|NullPointerException|当入参为null时，会抛出异常。|

## Public Methods

### getCloudDBZoneName

|Method|
|:----------------------------------------------------------|
|public String getCloudDBZoneName() 调用此方法获取端侧CloudDBZone的名称。|

**Return**

|type|desc|
|:-----|:--------------|
|String|CloudDBZone的名称。|

### getSyncProperty

|Method|
|:----------------------------------------------------------------------------|
|public CloudDBZoneSyncProperty getSyncProperty() 调用此方法获取端侧CloudDBZone的数据同步属性。|

**Return**

|type|desc|
|:---------------------------------------------|:------------------|
|[CloudDBZoneSyncProperty](#section87661561641)|CloudDBZone的数据同步属性。|

### getAccessProperty

|Method|
|:------------------------------------------------------------------------------|
|public CloudDBZoneAccessProperty getAccessProperty() 调用此方法获取端侧CloudDBZone的访问属性。|

**Return**

|type|desc|
|:-----------------------------------------------|:----------------|
|[CloudDBZoneAccessProperty](#section19377113410)|CloudDBZone的访问属性。|

### isEncrypted

|Method|
|:-----------------------------------------------------|
|public Boolean isEncrypted() 调用此方法判断端侧CloudDBZone是否加密。|

**Return**

|type|desc|
|:------|:-----------------------------------------------------------------------------------|
|boolean|端侧CloudDBZone是否加密。 取值包含： * true：表示该CloudDBZone是加密存储的。 * false：表示该CloudDBZone不是加密存储的。|

**Throws**

|Exception name|Exception desc|
|:-----------------------|:--------------------------|
|IllegalArgumentException|当传入的key和reKey参数不符合规范时，抛出异常。|

### setEncryptedKey

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setEncryptedKey(String key, String rekey) 调用此方法设置或者修改端侧CloudDBZone数据加密存储的密钥，仅在CloudDBZone的数据允许持久化时设置加密密钥才会生效。数据加密以CloudDBZone为粒度进行设置。根据请求参数值的不同，分为如下四种情况： * 当参数"key"的值为null或者空字符串，且参数"rekey"的值为null或者空字符串时，该CloudDBZone不需要加密。 * 当参数"key"的值不为null或者空字符串，且参数"rekey"的值为null或者空字符串时，该CloudDBZone需要加密。 * 当参数"key"的值不为null或者空字符串，且参数"rekey"的值不为null或者空字符串时，将该CloudDBZone的原密钥修改为新密钥。 * 当参数"key"的值为null或者空字符串，且参数"rekey"的值不为null或者空字符串时，为非法入参，系统会发生异常错误。|

**Parameters**

|Parameter name|Parameter desc|
|:-------------|:------------------------------------------------------------------|
|key|端侧CloudDBZone的加密密钥，长度为1~128个字符。 新增密钥时，该参数值必填。|
|rekey|修改后的端侧CloudDBZone加密密钥，长度为1~128个字符。 修改密钥时，该参数值必填；否则，该参数值为null或者空字符串。|

### setPersistenceEnabled

|Method|
|:-----------------------------------------------------------------------------------------------------------------------|
|public void setPersistenceEnabled(boolean isPerEnable) 调用此方法设置端侧CloudDBZone的数据持久化属性。CloudDBZone的数据同步属性为本地模式时，只支持数据持久化存储。|

**Parameters**

|Parameter name|Parameter desc|
|:-------------|:------------------------------------------------------------------------------|
|isPerEnable|CloudDBZone的数据持久化属性。 boolean类型，取值包含： * true：允许持久化存储。 * false：不允许持久化存储。 默认值：true|

### getPersistenceEnabled

|Method|
|:-------------------------------------------------------------------|
|public boolean getPersistenceEnabled() 调用此方法获取端侧CloudDBZone的数据持久化信息。|

**Return**

|type|desc|
|:------|:-----------------------------------------------------------|
|boolean|CloudDBZone的数据持久化属性。 取值包含： * true：允许持久化存储。 * false：不允许持久化存储。|

### setCapacity

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setCapacity(long capacity) 调用此方法设置端侧CloudDBZone的存储空间大小。 CloudDBZone存储空间大小可设置为无限制，也可设置具体的存储空间大小。设置具体值时，必须大于或等于1MB，如未设置或者设置值无效时，系统会设置为默认值100 MB。当CloudDBZone存储的数据超过设定的阈值时，会删除最久未使用且超过阈值范围已同步的数据，未同步的数据不会被删除。CloudDBZone并不能保证存储的数据大小将保持在设置值以下，仅当存储的数据大小超过设置值时才尝试删除数据。 设置CloudDBZone的存储空间大小后，如果存储空间不满足当前所需，可通过该方法修改CloudDBZone的存储空间大小，修改存空间大小后需要重新openCloudDBZone2()，修改的值才会生效。 仅当CloudDBZone的数据同步属性为缓存模式且数据持久化属性为持久化存储时，才允许调用此方法设置存储空间大小。|

**Parameters**

|Parameter name|Parameter desc|
|:-------------|:--------------------------------------------------------------------------------------------------------|
|capacity|CloudDBZone的大小，单位为字节。 long类型，取值包含： * -1：无大小限制。 * 为其它整数时，代表实际的大小，必须大于或等于1048576（1MB）。 默认值：104857600（100MB）|

**Throws**

|Exception name|Exception desc|
|:-----------------------|:---------------------------------|
|IllegalArgumentException|非本地持久化模式下，不支持设置存储空间大小。如果设置了，则抛出异常。|

### getCapacity

|Method|
|:----------------------------------------------------------------------------------------------|
|public long getCapacity() 调用此方法获取端侧当前CloudDBZone的存储空间大小，用于判断是否需要修改该存储空间大小，以便更合理的分配存储资源，提升资源利用率。|

**Return**

|type|desc|
|:---|:------------------------------------------------------------|
|long|CloudDBZone的大小，单位为字节。 * 返回值为-1时，表示无大小限制。 * 返回值为其它整数时，代表实际的大小。|

## CloudDBZoneSyncProperty

|values|
|:------------------------------------------------------------------------------------------------------------------------------------------------------|
|public enum CloudDBZoneSyncProperty **CLOUDDBZONE_LOCAL_ONLY** 本地模式，数据只存储在端侧，不同步至云侧。|
|public enum CloudDBZoneSyncProperty **CLOUDDBZONE_CLOUD_CACHE** 缓存模式，数据存储在云侧，端侧数据是云侧数据的子集，如果允许持久化，Cloud DB支持将查询的结果自动缓存至端侧。在端侧对云侧数据注册侦听后，云侧数据变化时，才会通知端侧。|

## CloudDBZoneAccessProperty

|values|
|:------------------------------------------------------------------------------------|
|public enum CloudDBZoneAccessProperty **CLOUDDBZONE_PUBLIC** 公共存储区，根据开发者定义的权限对访问进行鉴权。|

