---
name: document/cn/AppGallery-connect-References/clouddb-clouddbzoneobjectoperator-serverjava-0000001420347222
title: CloudDBZoneObjectOperator
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzoneobjectoperator-serverjava-0000001420347222
---

# CloudDBZoneObjectOperator

基于指定对象的Class或对象类型的名称，提供了[build](#section296564433319)()、[increment()](#section7617134411476)和[update()](#section289310261498)方法，实现构造操作对象的实例、更新指定字段的值的能力。仅作为[executeBatchUpdate()](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzone-serverjava-0000001127596267#section1771340123818)或者[executeBatchUpdateByCondition()](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzone-serverjava-0000001127596267#section22061653514)方法的参数传入，Cloud DB会基于指定的约束条件执行更新。

## Summary

|Qualifier and Type|Method name|
|:------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------|
|CloudDBZoneObjectOperator|[build](#section296564433319)(object) 获取一个CloudDBZoneObjectOperator实例，并指定Class或对象类型的名称。CloudDBZoneObjectOperator不提供任何构造方法，只能通过此方法来获取一个Operator实例。|
|CloudDBZoneObjectOperator|[increment](#section7617134411476)(fieldName, delta) throws AGConnectCloudDBException 对指定字段的值进行增量操作。|
|CloudDBZoneObjectOperator|[update](#section289310261498)(fieldName, value) throws AGConnectCloudDBException 对指定字段的值进行更新操作。|

## Methods

### build

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static <T extends CloudDBZoneObject> CloudDBZoneObjectOperator<T> build(object) 获取一个CloudDBZoneObjectOperator实例，并指定Class对象或对象类型的名称。CloudDBZoneObjectOperator不提供任何构造方法，只能通过此方法来获取一个CloudDBZoneObjectOperator实例。|

**Parameters**

|Parameter name|Parameter desc|
|:-----------------------------------------|:--------------------------------------------------------------------------------------------------------|
|Class<T> entityClass/String objectTypename|指定对象类型。 取值包含： * 一个Class对象，用于根据条件更新的对象类型实体类。 * 一个字符串类型的对象类型名，用于构建基于泛化对象更新数据所需的CloudDBZoneObjectOperator对象。|

**Return**

|type|desc|
|:------------------------|:-----------------------------|
|CloudDBZoneObjectOperator|CloudDBZoneObjectOperator对象实例。|

### increment

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public CloudDBZoneObjectOperator<T> increment(String fieldName, Number delta) throws AGConnectCloudDBException 调用此方法对指定字段的值进行增量操作。 调用本方法需要遵循以下约束： * 同一个[executeBatchUpdate()](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzone-serverjava-0000001127596267#section1771340123818)或者[executeBatchUpdateByCondition()](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzone-serverjava-0000001127596267#section22061653514)操作中，[increment()](#section7617134411476)和[update()](#section289310261498)方法不能操作同一个字段，否则会抛出错误。 * 不支持对主键字段、加密字段和敏感字段的值进行更新操作。 * 使用[executeBatchUpdate()](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzone-serverjava-0000001127596267#section1771340123818)或者[executeBatchUpdateByCondition()](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzone-serverjava-0000001127596267#section22061653514)进行增量操作时，fieldName对应数据类型仅支持Short、Integer、Long、Float和Double。|

**Parameters**

|Parameter name|Parameter desc|
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|String fieldName|增量更新的字段名称。|
|Number delta|增量更新的数值。 * 在原有值上加："正数"或者"+正数"。 * 在原有值上减："-正数"。 > 说明 > * 若delta值传入1，则表示字段自增1；delta值传入-1，则表示字段自减1。 > * 增量更新的值必须在字段类型对应的数值范围内。如：Short类型，增量值的范围只能在-32768 ~ +32767之间。详细请参考[数据类型](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-clouddb-aboutclouddb-0000001080975612#section13455181316114)。|

**Return**

|type|desc|
|:------------------------|:----------------------------|
|CloudDBZoneObjectOperator|CloudDBZoneObjectOperator对象实例|

### update

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public CloudDBZoneObjectOperator<T> update(fieldName, value) throws AGConnectCloudDBException 调用此方法对某个字段的值进行更新操作。 调用本方法需要遵循以下约束： * 同一个[executeBatchUpdate()](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzone-serverjava-0000001127596267#section1771340123818)或者[executeBatchUpdateByCondition()](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzone-serverjava-0000001127596267#section22061653514)操作中，[increment()](#section7617134411476)和[update()](#section289310261498)方法不能操作同一个字段，否则会抛出错误。 * 不支持对主键字段、加密字段和敏感字段的值进行更新操作。|

**Parameters**

|Parameter name|Parameter desc|
|:---------------|:---------------------------------------------|
|String fieldName|更新的字段名称。|
|value|选定字段对应的更新指定值。 该值的数据类型与选定字段的数据类型必须保持一致，否则会抛出异常。|

**Return**

|type|desc|
|:------------------------|:----------------------------|
|CloudDBZoneObjectOperator|CloudDBZoneObjectOperator对象实例|

