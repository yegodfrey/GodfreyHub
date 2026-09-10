---
name: document/cn/AppGallery-connect-References/clouddb-0000001127834753
title: Overview
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-0000001127834753
---

# Overview

#### Annotations

|Interface name|Interface description|
|:-----------------------------------------------------------------------------------------------------------------------------------------|:--------------------|
|[DefaultValue](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-defaultvalue-0000001127717607)|定义对象类型中字段的默认值。|
|[Indexes](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-indexes-0000001080698452)|定义对象类型的索引。|
|[NotNull](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-notnull-0000001080569970)|定义对象类型中字段的非空属性。|
|[PrimaryKeys](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-primarykeys-0000001081018020)|定义对象类型的主键。|
|[EntireEncrypted](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-entireencrypted-0000001127495857)|定义对象类型中字段的加密属性。|
|[ObjectTypeMapping](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-objecttypemapping-0000001409504328)|定义对象类型的映射名。|
|[FieldMapping](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-fieldmapping-0000001409344356)|定义对象类型中字段的映射名。|

#### Interfaces

|Interface name|Interface description|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------|
|[OnSnapshotListener](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-onsnapshotlistener-0000001127495859)|通过实现该接口，来定义自己的侦听器，用于快照侦听。|
|[OnDataEncryptionKeyChangeListener](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-agconnectclouddb-0000001127717605#section72891136122317)|通过实现该接口，来定义自己的侦听器，用于数据密钥更新侦听。|
|[EventListener](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-agconnectclouddb-0000001127717605#section181811627183111)|通过实现该接口，来定义自己的侦听器，用于用户密码变更事件侦听。|
|[Transaction.Function](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-transaction-0000001080698454#section05618289355)|通过实现该接口，并重写apply方法，来定义事务需要执行的操作。|

#### Classes

|Class name|Class description|
|:-------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[AGConnectCloudDB](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-agconnectclouddb-0000001127717605)|初始化AGConnectCloudDB，每个数据处理位置有且仅有一个AGConnectCloudDB实例。获取对应数据处理位置的实例后，然后基于该实例，可实现新建、打开、关闭或者删除CloudDBZone等功能。|
|[CloudDBZoneConfig](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzoneconfig-0000001127600371)|用于创建CloudDBZoneConfig对象，配置CloudDBZone的同步属性、访问属性和数据加密存储属性等信息。|
|[CloudDBZone](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzone-0000001081018016)|一个CloudDBZone对象表示一个Cloud DB的存储区域，通过该类提供的方法实现对CloudDBZone中数据的增、删、改、查和事务等操作。|
|[CloudDBZoneObject](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzoneobject-0000001080698450)|CloudDBZoneObject类是一个抽象类，属于对象类型的基类，您可以通过添加AppGallery Connect控制台导出的对象类型来实现创建继承此类的对象类型。|
|[CloudDBZoneQuery](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzonequery-0000001080569968)|提供诸如where()、equalTo()、notEqualTo()、in()等一系列谓词查询来构造查询条件。您可以基于上述谓词查询构造自己的CloudDBZoneQuery对象。|
|[CloudDBZoneSnapshot](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzonesnapshot-0000001127834755)|用于描述本次查询到的快照数据，包含全量的对象集合、新增和修改的对象集合和新删除的对象集合等，您可以调用不同的方法获取需要的数据结果。|
|[Transaction](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-transaction-0000001080698454)|通过事务实现对云侧存储区数据的管理操作，包含数据的增、删、改、查等。一个事务内可以进行多次数据操作，读操作必须在写操作之前进行。|
|[ListenerHandler](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-listenerhandler-0000001080858058)|表示一个快照侦听，当且仅当调用CloudDBZone类中的subscribeSnapshot()方法成功注册快照侦听时才会获取一个ListenerHandler对象。|
|[CloudDBZoneObjectList](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzoneobjectlist-0000001080858056)|描述了一种存储对象的列表，支持get()、next()、size()和hasNext()等基础的列表操作方法。|
|[Text](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-text-0000001127600375)|文本类型，是CloudDBZone的一个基本数据类型。|
|[ObjectTypeInfo](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-objecttypeinfo-0000001127834757)|对象类型的信息，包含对象类型的版本和对象类型定义等，用于createObjectType()方法调用，实现本地开发环境中对象类型的创建。|
|[ServerStatus](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-serverstatus-0000001497467461)|服务器状态信息。当调用CloudDBZone类中的[executeServerStatusQuery](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzone-0000001081018016#section13707182311265)()方法成功查询云侧服务器状态时才会获取ServerStatus对象。|

#### Enums

|Enum name|Enum description|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------|
|[CloudDBZoneSyncProperty](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzoneconfig-0000001127600371#section87661561641)|CloudDBZone的数据同步属性，用于定义CloudDBZone端侧与云侧的数据是否进行同步。|
|[CloudDBZoneAccessProperty](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzoneconfig-0000001127600371#section19377113410)|CloudDBZone的访问属性，用于定义用户应用访问CloudDBZone的安全属性。|
|[CloudDBZoneQueryPolicy](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzonequery-0000001080569968#section674451616598)|查询的策略，指定查询的数据来源。|
|[EventType](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-agconnectclouddb-0000001127717605#section38571657193812)|发生的变更事件类型，包含用户密码变更事件。|

#### Exceptions

|Exceptions name|Exceptions description|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------|
|[AGConnectCloudDBException](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-agconnectclouddbexception-0000001127495855)|Cloud DB的异常基类，继承自AGCException。AGConnectCloudDBException提供了相应的方法供开发者获取异常相关的信息，包含错误码和详细错误信息。|

