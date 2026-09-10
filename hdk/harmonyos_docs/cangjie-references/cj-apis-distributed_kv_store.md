---
name: cangjie-references/cj-apis-distributed_kv_store
title: ohos.data.distributed_kv_store（分布式键值数据库）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-distributed_kv_store
nodePath: 应用框架 / ArkData（方舟数据管理） / 仓颉API / ohos.data.distributed_kv_store（分布式键值数据库）
---

# ohos.data.distributed_kv_store（分布式键值数据库）

分布式键值数据库为应用程序提供不同设备间数据库的分布式协同能力。通过调用分布式键值数据库各个接口，应用程序可将数据保存到分布式键值数据库中，并可对分布式键值数据库中的数据进行增加、删除、修改、查询、同步等操作。

该模块提供以下分布式键值数据库相关的常用功能：

  * KVManager：分布式键值数据库管理实例，用于获取数据库的相关信息。
  * KVStoreResultSet：提供获取数据库结果集的相关方法，包括查询和移动数据读取位置等。
  * Query：使用谓词表示数据库查询，提供创建Query实例、查询数据库中的数据和添加谓词的方法。
  * SingleKVStore：单版本分布式键值数据库，不对数据所属设备进行区分，设备之间修改相同的key会覆盖，提供查询数据和同步数据的方法。
  * DeviceKVStore：设备协同数据库，继承自SingleKVStore，以设备维度对数据进行区分，不存在冲突，支持按照设备的维度提供查询数据和同步数据的方法。



#### 导入模块
    
    
    import kit.ArkData.*

#### 权限列表

ohos.permission.DISTRIBUTED_DATASYNC

#### 使用说明

API示例代码使用说明：

  * 若示例代码首行有“// index.cj”注释，表示该示例可在仓颉模板工程的“index.cj”文件中编译运行。
  * 若示例需获取[Context](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-context)应用上下文，需在仓颉模板工程中的“main_ability.cj”文件中进行配置。



上述示例工程及配置模板详见[仓颉示例代码说明](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro#仓颉示例代码说明)。

#### class Constants
    
    
    public class Constants {
        public static let MAX_KEY_LENGTH: Int32 = 1024
        public static let MAX_VALUE_LENGTH: Int32 = 4194303
        public static let MAX_KEY_LENGTH_DEVICE: Int32 = 896
        public static let MAX_STORE_ID_LENGTH: Int32 = 128
        public static let MAX_QUERY_LENGTH: Int32 = 512000
        public static let MAX_BATCH_SIZE: Int32 = 128
    }

**功能：** 分布式键值数据库常量。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]static let MAX_BATCH_SIZE
    
    
    public static let MAX_BATCH_SIZE: Int32 = 128

**功能：** 值为128，表示最大批处理操作数量。

**类型：** Int32

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]static let MAX_KEY_LENGTH
    
    
    public static let MAX_KEY_LENGTH: Int32 = 1024

**功能：** 值为1024，表示数据库中Key允许的最大长度，单位字节。

**类型：** Int32

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]static let MAX_KEY_LENGTH_DEVICE
    
    
    public static let MAX_KEY_LENGTH_DEVICE: Int32 = 896

**功能：** 值为896，表示设备协同数据库中Key允许的最大长度，单位字节。

**类型：** Int32

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]static let MAX_QUERY_LENGTH
    
    
    public static let MAX_QUERY_LENGTH: Int32 = 512000

**功能：** 值为512000，表示最大查询长度，单位字节。

**类型：** Int32

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]static let MAX_STORE_ID_LENGTH
    
    
    public static let MAX_STORE_ID_LENGTH: Int32 = 128

**功能：** 值为128，表示数据库标识符允许的最大长度，单位字节。

**类型：** Int32

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]static let MAX_VALUE_LENGTH
    
    
    public static let MAX_VALUE_LENGTH: Int32 = 4194303

**功能：** 值为4194303，表示数据库中Value允许的最大长度，单位字节。

**类型：** Int32

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### class DeviceKVStore
    
    
    public class DeviceKVStore <: SingleKVStore {}

**功能：** 设备协同数据库，继承自SingleKVStore，提供查询数据和端端同步数据的方法，可以使用SingleKVStore的方法例如：put、putBatch等。

设备协同数据库，以设备维度对数据进行区分，每台设备仅能写入和修改本设备的数据，其它设备的数据对其是只读的，无法修改其它设备的数据。

比如，可以使用设备协同数据库实现设备间的图片分享，可以查看其他设备的图片，但无法修改和删除其他设备的图片。

在调用DeviceKVStore的方法前，需要先通过getKVStore构建一个DeviceKVStore实例。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**起始版本：** 22

**父类型：**

  * SingleKVStore



#### [h2]func get(String)
    
    
    public func get(key: String): KVValueType

**功能：** 获取本设备指定键的值。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
key | String | 是 | - | 要查询数据的key，不能为空且长度不大于MAX_KEY_LENGTH_DEVICE。  
  
**返回值：**

类型 | 说明  
---|---  
KVValueType | 返回查询获取的值。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[分布式键值数据库错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-distributed_kv_store)。

错误码ID | 错误信息  
---|---  
15100003 | Database corrupted.  
15100004 | Not found.  
15100005 | Database or result set already closed.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let manager = DistributedKVStore.createKVManager(KVManagerConfig(Global.abilityContext, "test_kvstore")) // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let store = (manager.getKVStore<DeviceKVStore>("test", KVOptions(KVSecurityLevel.S1)) as DeviceKVStore).getOrThrow()
        store.put("key", KVValueType.StringValue("value"))
        store.get("key")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getEntries(String)
    
    
    public func getEntries(keyPrefix: String): Array<Entry>

**功能：** 获取匹配本设备指定键前缀的所有键值对。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
keyPrefix | String | 是 | - | 表示要匹配的键前缀。不能包含'^'，包含'^'将导致谓词失效，查询结果会返回数据库中的所有数据。  
  
**返回值：**

类型 | 说明  
---|---  
Array<Entry> | 返回匹配指定前缀的键值对列表。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[分布式键值数据库错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-distributed_kv_store)。

错误码ID | 错误信息  
---|---  
15100003 | Database corrupted.  
15100005 | Database or result set already closed.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let manager = DistributedKVStore.createKVManager(KVManagerConfig(Global.abilityContext, "test_kvstore")) // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let store = (manager.getKVStore<DeviceKVStore>("test", KVOptions(KVSecurityLevel.S1)) as DeviceKVStore).getOrThrow()
        store.put("key", KVValueType.StringValue("value"))
        store.getEntries("key")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getEntries(Query)
    
    
    public func getEntries(query: Query): Array<Entry>

**功能：** 获取本设备与指定Query对象匹配的键值对列表。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
query | Query | 是 | - | 表示查询对象。  
  
**返回值：**

类型 | 说明  
---|---  
Array<Entry> | 返回本设备与指定Query对象匹配的键值对列表。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[分布式键值数据库错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-distributed_kv_store)。

错误码ID | 错误信息  
---|---  
15100003 | Database corrupted.  
15100005 | Database or result set already closed.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let manager = DistributedKVStore.createKVManager(KVManagerConfig(Global.abilityContext, "test_kvstore")) // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let store = (manager.getKVStore<DeviceKVStore>("test", KVOptions(KVSecurityLevel.S1)) as DeviceKVStore).getOrThrow()
        store.put("key", KVValueType.StringValue("value"))
        store.getEntries(Query())
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getResultSet(String)
    
    
    public func getResultSet(keyPrefix: String): KVStoreResultSet

**功能：** 从DeviceKVStore数据库中获取本设备具有指定前缀的结果集。允许同时打开的结果集的最大数量为8个。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
keyPrefix | String | 是 | - | 表示要匹配的键前缀。不能包含'^'，包含'^'将导致谓词失效，查询结果会返回数据库中的所有数据。  
  
**返回值：**

类型 | 说明  
---|---  
KVStoreResultSet | 返回具有指定前缀的结果集。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[分布式键值数据库错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-distributed_kv_store)。

错误码ID | 错误信息  
---|---  
15100001 | Over max limits.  
15100003 | Database corrupted.  
15100005 | Database or result set already closed.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let manager = DistributedKVStore.createKVManager(KVManagerConfig(Global.abilityContext, "test_kvstore")) // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let store = (manager.getKVStore<DeviceKVStore>("test", KVOptions(KVSecurityLevel.S1)) as DeviceKVStore).getOrThrow()
        store.put("key", KVValueType.StringValue("value"))
        store.getResultSet("key")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getResultSet(Query)
    
    
    public func getResultSet(query: Query): KVStoreResultSet

**功能：** 获取与指定设备ID和Query对象匹配的KVStoreResultSet对象。允许同时打开的结果集的最大数量为8个。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
query | Query | 是 | - | 表示查询对象。  
  
**返回值：**

类型 | 说明  
---|---  
KVStoreResultSet | 获取与本设备指定Query对象匹配的KVStoreResultSet对象。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[分布式键值数据库错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-distributed_kv_store)。

错误码ID | 错误信息  
---|---  
15100001 | Over max limits.  
15100003 | Database corrupted.  
15100005 | Database or result set already closed.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let manager = DistributedKVStore.createKVManager(KVManagerConfig(Global.abilityContext, "test_kvstore")) // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let store = (manager.getKVStore<DeviceKVStore>("test", KVOptions(KVSecurityLevel.S1)) as DeviceKVStore).getOrThrow()
        store.put("key", KVValueType.StringValue("value"))
        store.getResultSet(Query())
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getResultSize(Query)
    
    
    public func getResultSize(query: Query): Int32

**功能：** 获取与本设备指定Query对象匹配的结果数。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
query | Query | 是 | - | 表示查询对象。  
  
**返回值：**

类型 | 说明  
---|---  
Int32 | 返回与本设备指定Query对象匹配的结果数。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[分布式键值数据库错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-distributed_kv_store)。

错误码ID | 错误信息  
---|---  
15100003 | Database corrupted.  
15100005 | Database or result set already closed.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let manager = DistributedKVStore.createKVManager(KVManagerConfig(Global.abilityContext, "test_kvstore")) // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let store = (manager.getKVStore<DeviceKVStore>("test", KVOptions(KVSecurityLevel.S1)) as DeviceKVStore).getOrThrow()
        store.put("key", KVValueType.StringValue("value"))
        let result = store.getResultSize(Query())
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class DistributedKVStore
    
    
    public class DistributedKVStore {}

**功能：** 用于创建KVManager类。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**起始版本：** 22

#### [h2]static func createKVManager(KVManagerConfig)
    
    
    public static func createKVManager(config: KVManagerConfig): KVManager

**功能：** 创建一个KVManager对象实例，用于管理数据库对象。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
config | KVManagerConfig | 是 | - | 提供KVManager实例的配置信息，包括调用方的包名（不能为空）和用户信息。  
  
**返回值：**

类型 | 说明  
---|---  
KVManager | 返回创建的KVManager对象实例。  
  
**示例：**
    
    
    // index.cj
    
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let kvManager = DistributedKVStore.createKVManager(KVManagerConfig(Global.abilityContext, "com.example.myapplication")) // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class Entry
    
    
    public class Entry {
        public var key: String
        public var value: KVValueType
    
        public init(key: String, value: KVValueType)
    }

**功能：** 存储在数据库中的键值对。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]var key
    
    
    public var key: String

**功能：** 键值。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]var value
    
    
    public var value: KVValueType

**功能：** 值对象。

**类型：** KVValueType

**读写能力：** 可读写

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]init(String, KVValueType)
    
    
    public init(key: String, value: KVValueType)

**功能：** 用于创建Entry实例的构造函数。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
key | String | 是 | - | 键值。  
value | KVValueType | 是 | - | 值对象。  
  
#### class FieldNode
    
    
    public class FieldNode {
        public var default: String
        public var nullable: Bool
        public var nodeType: Int32
    
        public init(name: String, nullable: Bool, default: String, nodeType: Int32)
    }

**功能：** 表示 Schema 实例的节点，提供定义存储在数据库中的值的方法。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**起始版本：** 22

#### [h2]var default
    
    
    public var default: String

**功能：** 表示FieldNode的默认值。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**起始版本：** 22

#### [h2]var nodeType
    
    
    public var nodeType: Int32

**功能：** 表示指定节点对应的数据类型，取值为KVValueType对应的枚举值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a8/v3/TQsg9Z9xSCKuCX7HKpWdrw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090141Z&HW-CC-Expire=86400&HW-CC-Sign=E11E9411A08EF181F32139F90617D2707EC5C1716BCC9995DF49F61CB62A2015)

当前版本不支持BYTE_ARRAY，使用此类型会导致getKVStore失败。

**类型：** Int32

**读写能力：** 可读写

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**起始版本：** 22

#### [h2]var nullable
    
    
    public var nullable: Bool

**功能：** 表示数据库字段是否可以为空。true表示此节点数据可以为空，false表示此节点数据不能为空。

**类型：** Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**起始版本：** 22

#### [h2]init(String, Bool, String, Int32)
    
    
    public init(name: String, nullable: Bool, default: String, nodeType: Int32)

**功能：** 用于创建带有String字段FieldNode实例的构造函数。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
name | String | 是 | - | FieldNode的值，不能为空，且不大于64个字符。  
nullable | Bool | 是 | - | 表示数据库字段是否可以为空。true表示此节点数据可以为空，false表示此节点数据不能为空。  
default | String | 是 | - | 表示FieldNode的默认值。  
nodeType | Int32 | 是 | - | 表示指定节点对应的数据类型，取值为KVValueType对应的枚举值。暂不支持BYTE_ARRAY，使用此类型会导致getKVStore失败。  
  
#### class KVManager
    
    
    public class KVManager {}

**功能：** 分布式键值数据库管理实例，用于获取分布式键值数据库的相关信息。在调用KVManager的方法前，需要先通过createKVManager构建一个KVManager实例。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]func closeKVStore(String, String)
    
    
    public func closeKVStore(appId: String, storeId: String): Unit

**功能：** 通过storeId的值关闭指定的分布式键值数据库。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
appId | String | 是 | - | 应用的BundleName，不可为空且长度不大于256。  
storeId | String | 是 | - | 要关闭的数据库唯一标识符，长度不大于MAX_STORE_ID_LENGTH，且只能包含字母数字或下划线_。  
  
**示例：**
    
    
    // index.cj
    
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let kvManager = DistributedKVStore.createKVManager(KVManagerConfig(Global.abilityContext, "com.example.myapplication")) // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        kvManager.closeKVStore("com.example.myapplication", "myStore")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func deleteKVStore(String, String)
    
    
    public func deleteKVStore(appId: String, storeId: String): Unit

**功能：** 通过storeId的值删除指定的分布式键值数据库。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
appId | String | 是 | - | 应用的BundleName，不可为空且长度不大于256。  
storeId | String | 是 | - | 要删除的数据库唯一标识符，长度不大于MAX_STORE_ID_LENGTH，且只能包含字母数字或下划线_。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[分布式键值数据库错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-distributed_kv_store)。

错误码ID | 错误信息  
---|---  
15100004 | Not found.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let kvManager = DistributedKVStore.createKVManager(KVManagerConfig(Global.abilityContext, "com.example.myapplication")) // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        kvManager.deleteKVStore("com.example.myapplication", "myStore")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getAllKVStoreId(String)
    
    
    public func getAllKVStoreId(appId: String): Array<String>

**功能：** 获取所有通过getKVStore方法创建的且没有调用deleteKVStore方法删除的分布式键值数据库的storeId。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
appId | String | 是 | - | 应用的BundleName，不可为空且长度不大于256。  
  
**返回值：**

类型 | 说明  
---|---  
Array<String> | 返回所有创建的分布式键值数据库的storeId。  
  
**示例：**
    
    
    // index.cj
    
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let kvManager = DistributedKVStore.createKVManager(KVManagerConfig(Global.abilityContext, "com.example.myapplication")) // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        kvManager.getAllKVStoreId("com.example.myapplication")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getKVStore<T>(String, KVOptions) where T <: SingleKVStore
    
    
    public func getKVStore<T>(storeId: String, options: KVOptions): T where T <: SingleKVStore

**功能：** 指定options和storeId，创建并获取分布式键值数据库。

注意：

获取已有的分布式键值数据库时，如果数据库文件无法打开（如文件头损坏），将触发自动重建逻辑，并返回新创建的分布式键值数据库实例。建议对重要且无法重新生成的数据使用备份恢复功能，防止数据丢失。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
storeId | String | 是 | - | 数据库唯一标识符，长度不大于MAX_STORE_ID_LENGTH，且只能包含字母数字或下划线_。  
options | KVOptions | 是 | - | 创建分布式键值实例的配置信息。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回创建的分布式键值数据库实例（根据kvStoreType的不同，可以创建SingleKVStore实例和DeviceKVStore实例）。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[分布式键值数据库错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-distributed_kv_store)。

错误码ID | 错误信息  
---|---  
15100002 | Open existed database with changed options.  
15100003 | Database corrupted.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let kvManager = DistributedKVStore.createKVManager(KVManagerConfig(Global.abilityContext, "com.example.myapplication")) // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let opt = KVOptions(
            KVSecurityLevel.S4,
            createIfMissing: true,
            encrypt: false,
            backup: true,
            autoSync: false,
        )
        let kvStore = kvManager.getKVStore("myStoreId", opt)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class KVManagerConfig
    
    
    public class KVManagerConfig {
        public var bundleName: String
        public var context: BaseContext
    
        public init(context: BaseContext, bundleName: String)
    }

**功能：** 提供KVManager实例的配置信息，包括调用方的包名和应用的上下文。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]var bundleName
    
    
    public var bundleName: String

**功能：** 调用方的包名。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]var context
    
    
    public var context: BaseContext

**功能：** 应用的上下文。

**类型：** [BaseContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability#class-basecontext)

**读写能力：** 可读写

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]init(BaseContext, String)
    
    
    public init(context: BaseContext, bundleName: String)

**功能：** 用于创建KVManagerConfig的构造函数。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
context | [BaseContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability#class-basecontext) | 是 | - | 应用的上下文。  
bundleName | String | 是 | - | 调用方的包名。  
  
#### class KVStoreResultSet
    
    
    public class KVStoreResultSet {}

**功能：** 提供获取数据库结果集的相关方法，包括查询和移动数据读取位置等。同时允许打开的结果集的最大数量为8个。

KVStoreResultSet实例不会实时刷新。使用结果集后，如果数据库中的数据发生变化（如增删改操作），需要重新查询才能获取到最新的数据。

在调用KVStoreResultSet的方法前，需要先通过getKVStore构建一个SingleKVStore或者DeviceKVStore实例。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/df/v3/mfubecO4Rbion47DMmYARw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090141Z&HW-CC-Expire=86400&HW-CC-Sign=9EC3A3BD7C6D55BD7B5655BFAED76FEF5B514A3342CFA82243A1B783B846D8B3)

KVStoreResultSet的游标起始位置为-1。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]func getCount()
    
    
    public func getCount(): Int32

**功能：** 获取结果集的总行数。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Int32 | 返回数据的总行数。  
  
**示例：**
    
    
    // index.cj
    
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let kvManager = DistributedKVStore.createKVManager(KVManagerConfig(Global.abilityContext, "test_kvstore")) // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let store = (kvManager.getKVStore<DeviceKVStore>("test", KVOptions(KVSecurityLevel.S1)) as DeviceKVStore).getOrThrow()
        store.put("key", KVValueType.StringValue("value"))
        var resultSet = store.getResultSet("key")
        let count = resultSet.getCount()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class KVOptions
    
    
    public class KVOptions {
        public var createIfMissing: Bool
        public var encrypt: Bool
        public var backup: Bool
        public var autoSync: Bool
        public var securityLevel: KVSecurityLevel
        public var schema:?Schema
    
        public init(securityLevel: KVSecurityLevel, createIfMissing!: Bool = true, encrypt!: Bool = false,
            backup!: Bool = true, autoSync!: Bool = false, schema!: ?Schema = None)
    }

**功能：** 用于提供创建数据库的配置信息。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]var autoSync
    
    
    public var autoSync: Bool

**功能：** 设置数据库文件是否自动同步。默认为false，即手动同步。配置为true，即只支持在跨设备Call调用实现的多端协同中生效，其他场景无法生效。

**类型：** Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]var backup
    
    
    public var backup: Bool

**功能：** 设置数据库文件是否备份，true为备份，false为不备份，默认为true。

**类型：** Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]var createIfMissing
    
    
    public var createIfMissing: Bool

**功能：** 当数据库文件不存在时是否创建数据库，true为创建，false为不创建，默认为true。

**类型：** Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]var encrypt
    
    
    public var encrypt: Bool

**功能：** 设置数据库文件是否加密，true为加密，false为不加密，默认为false。

**类型：** Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]var schema
    
    
    public var schema:?Schema

**功能：** 设置定义存储在数据库中的值，默认为None，即不使用Schema。

**类型：** ?Schema

**读写能力：** 可读写

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**起始版本：** 22

#### [h2]var securityLevel
    
    
    public var securityLevel: KVSecurityLevel

**功能：** 设置数据库安全级别。

**类型：** KVSecurityLevel

**读写能力：** 可读写

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]init(KVSecurityLevel, Bool, Bool, Bool, Bool, ?Schema)
    
    
    public init(securityLevel: KVSecurityLevel, createIfMissing!: Bool = true, encrypt!: Bool = false,
        backup!: Bool = true, autoSync!: Bool = false, schema!: ?Schema = None)

**功能：** 用于创建KVOptions实例的构造函数。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
securityLevel | KVSecurityLevel | 是 | - | 设置数据库安全级别。  
createIfMissing | Bool | 否 | true | **命名参数。** 当数据库文件不存在时是否创建数据库，true为创建，false为不创建，默认为true。  
encrypt | Bool | 否 | false | **命名参数。** 设置数据库文件是否加密，true为加密，false为不加密，默认为false。  
backup | Bool | 否 | true | **命名参数。** 设置数据库文件是否备份，true为备份，false为不备份，默认为true。  
autoSync | Bool | 否 | false | **命名参数。** 设置数据库是否支持跨设备自动同步。默认为false，即只支持手动同步。  
schema | ?Schema | 否 | None | **命名参数。** 设置定义存储在数据库中的值，默认为None，即不使用Schema。  
  
#### class Query
    
    
    public class Query {
        public init()
    }

**功能：** 使用谓词表示数据库查询，提供创建Query实例、查询数据库中的数据和添加谓词的方法。一个Query对象中谓词数量上限为256个。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]init()
    
    
    public init()

**功能：** 用于创建Query实例的构造函数。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### class Schema
    
    
    public class Schema {
        public var root: FieldNode
        public var indexes: Array<String>
        public var mode: Int32
        public var skip: Int32
    
        public init(root: FieldNode, indexes: Array<String>, mode: Int32, skip: Int32)
    }

**功能：** 表示数据库模式，可以在创建或打开数据库时创建Schema对象并将它们放入KVOptions中。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**起始版本：** 22

#### [h2]var indexes
    
    
    public var indexes: Array<String>

**功能：** 索引字段定义，只有通过此字段指定的FieldNode才会创建索引，格式为：'$.field1', '$.field2'。

**类型：** Array<String>

**读写能力：** 可读写

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**起始版本：** 22

#### [h2]var mode
    
    
    public var mode: Int32

**功能：** Schema的模式，可以取值0或1，0表示COMPATIBLE模式，1表示STRICT模式。

STRICT：STRICT模式要求用户插入的值必须与Schema定义严格匹配，字段数量和格式都不能有差异。如果不匹配，数据库将在插入数据时返回错误。

COMPATIBLE：选择为COMPATIBLE模式时，数据库在检查Value格式时较为宽松，只要Value具有Schema描述的特征即可，允许存在额外字段。例如，定义了id、name字段时，可以插入id、name、age等多个字段。

**类型：** Int32

**读写能力：** 可读写

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**起始版本：** 22

#### [h2]var root
    
    
    public var root: FieldNode

**功能：** 存放了Value中所有字段的定义。

**类型：** FieldNode

**读写能力：** 可读写

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**起始版本：** 22

#### [h2]var skip
    
    
    public var skip: Int32

**功能：** 支持在检查Value时跳过skip指定的字节数，取值范围为[0, 4 * 1024 * 1024 - 2]字节。

**类型：** Int32

**读写能力：** 可读写

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**起始版本：** 22

#### [h2]init(FieldNode, Array<String>, Int32, Int32)
    
    
    public init(root: FieldNode, indexes: Array<String>, mode: Int32, skip: Int32)

**功能：** 表示数据库模式，可以在创建或打开数据库时创建Schema对象并将它们放入KVOptions中。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.DistributedKVStore

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
root | FieldNode | 是 | - | 存放了Value中所有字段的定义。  
indexes | Array<String> | 是 | - | 索引字段定义，只有通过此字段指定的FieldNode才会创建索引，格式为：'$.field1', '$.field2'。  
mode | Int32 | 是 | - | Schema的模式，可以取值0或1，0表示COMPATIBLE模式，1表示STRICT模式。  
skip | Int32 | 是 | - | 支持在检查Value时，跳过skip指定的字节数，且取值范围为[0, 4 * 1024 * 1024 - 2]字节。  
  
#### class SingleKVStore
    
    
    public open class SingleKVStore {}

**功能：** SingleKVStore数据库实例，提供增加数据、删除数据和订阅数据变更、订阅数据端端同步完成的方法。

在调用SingleKVStore的方法前，需要先通过getKVStore构建一个SingleKVStore实例。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]func backup(String)
    
    
    public open func backup(file: String): Unit

**功能：** 以指定名称备份数据库。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
file | String | 是 | - | 备份数据库的指定名称，不能为空且长度不大于MAX_KEY_LENGTH。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[分布式键值数据库错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-distributed_kv_store)。

错误码ID | 错误信息  
---|---  
15100005 | Database or result set already closed.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let kvManager = DistributedKVStore.createKVManager(KVManagerConfig(Global.abilityContext, "test_kvstore")) // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let opt = KVOptions(
            KVSecurityLevel.S4,
            createIfMissing: true,
            encrypt: false,
            backup: true,
            autoSync: false,
        )
        let singleKVStore = kvManager.getKVStore("myStoreId", opt)
        singleKVStore.backup("myBackupfile")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func commit()
    
    
    public open func commit(): Unit

**功能：** 提交SingleKVStore数据库中的事务。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[分布式键值数据库错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-distributed_kv_store)。

错误码ID | 错误信息  
---|---  
15100005 | Database or result set already closed.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let kvManager = DistributedKVStore.createKVManager(KVManagerConfig(Global.abilityContext, "test_kvstore")) // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let opt = KVOptions(
            KVSecurityLevel.S4,
            createIfMissing: true,
            encrypt: false,
            backup: true,
            autoSync: false,
        )
        let singleKVStore = kvManager.getKVStore("myStoreId", opt)
        singleKVStore.commit()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func delete(String)
    
    
    public open func delete(key: String): Unit

**功能：** 从数据库中删除指定键值的数据。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
key | String | 是 | - | 要删除数据的key，不能为空且长度不大于MAX_KEY_LENGTH。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[分布式键值数据库错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-distributed_kv_store)。

错误码ID | 错误信息  
---|---  
15100003 | Database corrupted.  
15100005 | Database or result set already closed.  
  
  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[关系型数据库错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-data-rdb)。

错误码ID | 错误信息  
---|---  
14800047 | The WAL file size exceeds the default limit.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let kvManager = DistributedKVStore.createKVManager(KVManagerConfig(Global.abilityContext, "test_kvstore")) // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let opt = KVOptions(
            KVSecurityLevel.S4,
            createIfMissing: true,
            encrypt: false,
            backup: true,
            autoSync: false,
        )
        let singleKVStore = kvManager.getKVStore("myStoreId", opt)
        singleKVStore.delete("myKey")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func deleteBatch(Array<String>)
    
    
    public open func deleteBatch(keys: Array<String>): Unit

**功能：** 批量删除SingleKVStore数据库中的键值对。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
keys | Array<String> | 是 | - | 表示要批量删除的键值对，不能为空。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[分布式键值数据库错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-distributed_kv_store)。

错误码ID | 错误信息  
---|---  
15100003 | Database corrupted.  
15100005 | Database or result set already closed.  
  
  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[关系型数据库错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-data-rdb)。

错误码ID | 错误信息  
---|---  
14800047 | The WAL file size exceeds the default limit.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let kvManager = DistributedKVStore.createKVManager(KVManagerConfig(Global.abilityContext, "test_kvstore")) // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let opt = KVOptions(
            KVSecurityLevel.S4,
            createIfMissing: true,
            encrypt: false,
            backup: true,
            autoSync: false,
        )
        let deviceKVStore = (kvManager.getKVStore<DeviceKVStore>("myStoreId", opt) as DeviceKVStore).getOrThrow()
        deviceKVStore.deleteBatch(["myBackupfile", "BK002"])
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func enableSync(Bool)
    
    
    public open func enableSync(enabled: Bool): Unit

**功能：** 设定是否开启同步。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
enabled | Bool | 是 | - | 设定是否开启端端同步，true表示开启端端同步，false表示不启用端端同步。  
  
**示例：**
    
    
    // index.cj
    
    import kit.ArkData.*
    import std.collection.ArrayList
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let kvManager = DistributedKVStore.createKVManager(KVManagerConfig(Global.abilityContext, "test_kvstore")) // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let opt = KVOptions(
            KVSecurityLevel.S4,
            createIfMissing: true,
            encrypt: false,
            backup: true,
            autoSync: false,
        )
        let singleKVStore = kvManager.getKVStore("myStoreId", opt)
        singleKVStore.enableSync(true)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func get(String)
    
    
    public open func get(key: String): KVValueType

**功能：** 获取指定键的值。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
key | String | 是 | - | 要查询数据的key，不能为空且长度不大于MAX_KEY_LENGTH。  
  
**返回值：**

类型 | 说明  
---|---  
KVValueType | 返回获取查询的值。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[分布式键值数据库错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-distributed_kv_store)。

错误码ID | 错误信息  
---|---  
15100003 | Database corrupted.  
15100004 | Not found.  
15100005 | Database or result set already closed.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ArkData.*
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    
    let kvManager = DistributedKVStore.createKVManager(KVManagerConfig(Global.abilityContext, "test_kvstore")) // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
    let kvStore = (kvManager.getKVStore<DeviceKVStore>("test", KVOptions(KVSecurityLevel.S1)) as DeviceKVStore).getOrThrow()
    try {
        let value = kvStore.get("myKey")
        match (value) {
            case StringValue(v) => Hilog.info(0, "test", "The obtained value is a String: ${v}", "")
            case Integer(v) => Hilog.info(0, "test", "The obtained value is a Int32: ${v}", "")
            case Double(v) => Hilog.info(0, "test", "The obtained value is a Float64: ${v}", "")
            case _ => Hilog.info(0, "test", "The obtained value is of another type.", "")
        }
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "get failed.", "")
    }

#### [h2]func put(String, KVValueType)
    
    
    public open func put(key: String, value: KVValueType): Unit

**功能：** 添加指定类型键值对到数据库。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
key | String | 是 | - | 要添加数据的Key，不能为空且长度不大于MAX_KEY_LENGTH。  
value | KVValueType | 是 | - | 要添加数据的value，支持Array<UInt8>、Int32、Float32、Float64、String、Bool，Array<UInt8>、String 的长度不大于MAX_VALUE_LENGTH。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[分布式键值数据库错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-distributed_kv_store)。

错误码ID | 错误信息  
---|---  
15100003 | Database corrupted.  
15100005 | Database or result set already closed.  
  
  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[关系型数据库错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-data-rdb)。

错误码ID | 错误信息  
---|---  
14800047 | The WAL file size exceeds the default limit.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ArkData.*
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    
    let kvManager = DistributedKVStore.createKVManager(
        KVManagerConfig(Global.abilityContext, "test_kvstore")) // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
    let kvStore = (kvManager.getKVStore<DeviceKVStore>("test", KVOptions(KVSecurityLevel.S1)) as DeviceKVStore).getOrThrow()
    try {
        kvStore.put("myKey", StringValue("myValue"))
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "put failed.", "")
    }

#### [h2]func putBatch(Array<Entry>)
    
    
    public open func putBatch(entries: Array<Entry>): Unit

**功能：** 批量插入键值对到SingleKVStore数据库中。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
entries | Array<Entry> | 是 | - | 表示要批量插入的键值对。一个entries对象中允许的最大数据量为512M。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[分布式键值数据库错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-distributed_kv_store)。

错误码ID | 错误信息  
---|---  
15100003 | Database corrupted.  
15100005 | Database or result set already closed.  
  
  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[关系型数据库错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-data-rdb)。

错误码ID | 错误信息  
---|---  
14800047 | The WAL file size exceeds the default limit.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ArkData.*
    import std.collection.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let kvManager = DistributedKVStore.createKVManager(
            KVManagerConfig(Global.abilityContext, "test_kvstore")) // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let opt = KVOptions(
            KVSecurityLevel.S4,
            createIfMissing: true,
            encrypt: false,
            backup: true,
            autoSync: false,
        )
        let singleKVStore = kvManager.getKVStore("myStoreId", opt)
        let entries = ArrayList<Entry>()
        for (i in 0..10) {
            let entry = Entry("batch_test_string_key${i}", StringValue("batch_test_string_value"))
            entries.add(entry)
        }
        singleKVStore.putBatch(entries.toArray())
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func restore(String)
    
    
    public open func restore(file: String): Unit

**功能：** 从指定的数据库文件恢复数据库。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
file | String | 是 | - | 指定的数据库文件名称，不能为空且长度不大于MAX_KEY_LENGTH。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[分布式键值数据库错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-distributed_kv_store)。

错误码ID | 错误信息  
---|---  
15100005 | Database or result set already closed.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let kvManager = DistributedKVStore.createKVManager(
            KVManagerConfig(Global.abilityContext, "test_kvstore")) // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let opt = KVOptions(
            KVSecurityLevel.S4,
            createIfMissing: true,
            encrypt: false,
            backup: true,
            autoSync: false,
        )
        let singleKVStore = kvManager.getKVStore("myStoreId", opt)
        singleKVStore.restore("myBackupfile")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func rollback()
    
    
    public open func rollback(): Unit

**功能：** 在SingleKVStore数据库中回滚事务。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[分布式键值数据库错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-distributed_kv_store)。

错误码ID | 错误信息  
---|---  
15100005 | Database or result set already closed.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let kvManager = DistributedKVStore.createKVManager(
            KVManagerConfig(Global.abilityContext, "test_kvstore")) // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let opt = KVOptions(
            KVSecurityLevel.S4,
            createIfMissing: true,
            encrypt: false,
            backup: true,
            autoSync: false,
        )
        let singleKVStore = kvManager.getKVStore("myStoreId", opt)
        singleKVStore.rollback()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func setSyncParam(UInt32)
    
    
    public open func setSyncParam(defaultAllowedDelayMs: UInt32): Unit

**功能：** 设置数据库同步允许的默认延迟。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
defaultAllowedDelayMs | UInt32 | 是 | - | 表示数据库同步允许的默认延迟，以毫秒为单位。  
  
**示例：**
    
    
    // index.cj
    
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let kvManager = DistributedKVStore.createKVManager(
            KVManagerConfig(Global.abilityContext, "test_kvstore")) // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let opt = KVOptions(
            KVSecurityLevel.S4,
            createIfMissing: true,
            encrypt: false,
            backup: true,
            autoSync: false,
        )
        let singleKVStore = kvManager.getKVStore("myStoreId", opt)
        singleKVStore.setSyncParam(500)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func startTransaction()
    
    
    public open func startTransaction(): Unit

**功能：** 启动SingleKVStore数据库中的事务。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[分布式键值数据库错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-distributed_kv_store)和[关系型数据库错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-data-rdb)。

错误码ID | 错误信息  
---|---  
15100005 | Database or result set already closed.  
  
  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[关系型数据库错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-data-rdb)。

错误码ID | 错误信息  
---|---  
14800047 | The WAL file size exceeds the default limit.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ArkData.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let kvManager = DistributedKVStore.createKVManager(
            KVManagerConfig(Global.abilityContext, "test_kvstore")) // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let opt = KVOptions(
            KVSecurityLevel.S4,
            createIfMissing: true,
            encrypt: false,
            backup: true,
            autoSync: false,
        )
        let singleKVStore = kvManager.getKVStore("myStoreId", opt)
        singleKVStore.startTransaction()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### enum KVSecurityLevel
    
    
    public enum KVSecurityLevel {
        | S1
        | S2
        | S3
        | S4
        | ...
    }

**功能：** 数据库的安全级别枚举。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f4/v3/1Kn15FuvQ0KZuoI1VVWCHQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090141Z&HW-CC-Expire=86400&HW-CC-Sign=9AC37A42C77A852A8C4811287F1BA3A86EAC3DE6ECA92B7E340516912C58616D)

在单设备使用场景下，KV数据库支持修改securityLevel参数进行安全等级升级。升级操作需要注意以下几点：

  * 该操作不支持跨设备同步的数据库。不同安全等级的数据库之间不能进行数据同步。若需升级数据库的安全等级，建议重新创建更高安全等级的数据库。
  * 关闭当前数据库后，修改securityLevel参数以重新设置数据库的安全等级，然后重新打开数据库。
  * 该操作仅支持升级，例如从S2到S3，不支持降级，例如从S3到S2。



**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]S1
    
    
    S1

**功能：** 表示数据库的安全级别为低级别，数据的泄露、篡改、破坏、销毁可能会给个人或组织导致有限的不利影响。例如，性别、国籍，用户申请记录等。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]S2
    
    
    S2

**功能：** 表示数据库的安全级别为中级别，数据的泄露、篡改、破坏、销毁可能会给个人或组织导致严重的不利影响。例如，个人详细通信地址，姓名昵称等。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]S3
    
    
    S3

**功能：** 表示数据库的安全级别为高级别，数据的泄露、篡改、破坏、销毁可能会给个人或组织导致严重的不利影响。例如，个人实时精确定位信息、运动轨迹等。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]S4
    
    
    S4

**功能：** 表示数据库的安全级别为关键级别，业界法律法规中定义的特殊数据类型，涉及个人的最私密领域的信息，一旦泄露、篡改、破坏、销毁可能会给个人或组织造成重大不利影响的数据。例如，政治观点、宗教、和哲学信仰、工会成员资格、基因数据、生物信息、健康和性生活状况、性取向、设备认证鉴权、个人的信用卡等财务信息。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### enum KVValueType
    
    
    public enum KVValueType {
        | StringValue(String)
        | Integer(Int32)
        | Float(Float32)
        | ByteArray(Array<Byte>)
        | Boolean(Bool)
        | Double(Float64)
        | ...
    }

**功能：** 数据类型枚举。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]Boolean(Bool)
    
    
    Boolean(Bool)

**功能：** 表示值类型为布尔值。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]ByteArray(Array<Byte>)
    
    
    ByteArray(Array<Byte>)

**功能：** 表示值类型为字节数组。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]Double(Float64)
    
    
    Double(Float64)

**功能：** 表示值类型为双精度浮点数。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]Float(Float32)
    
    
    Float(Float32)

**功能：** 表示值类型为单精度浮点数。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]Integer(Int32)
    
    
    Integer(Int32)

**功能：** 表示值类型为Int32整数。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22

#### [h2]StringValue(String)
    
    
    StringValue(String)

**功能：** 表示值类型为字符串。

**系统能力：** SystemCapability.DistributedDataManager.KVStore.Core

**起始版本：** 22
