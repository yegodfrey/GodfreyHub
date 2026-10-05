---
name: document/cn/doc-references/dataabilityutils-0000001054518814
title: DataAbilityUtils
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/dataabilityutils-0000001054518814
source: portal
---

# DataAbilityUtils

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.data.dataability.DataAbilityUtils
    
    public class DataAbilityUtils
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
A utility class that provides static methods for database operations. 

This class provides interfaces to create [OrmPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ormpredicates-0000001054120070) and [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) objects from the [DataAbilityPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dataabilitypredicates-0000001054200074) object.

**Since:**

1

#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
static <T extends [OrmObject](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ormobject-0000001054120141)>[OrmPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ormpredicates-0000001054120070) | [createOrmPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dataabilityutils-0000001054518814#ZH-CN_TOPIC_0000001054518814__createOrmPredicates-ohos_data_dataability_DataAbilityPredicates-java_lang_Class-)​([DataAbilityPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dataabilitypredicates-0000001054200074) dataAbilityPredicates, [Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<T> klass) |  Creates an [OrmPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ormpredicates-0000001054120070) object from a [DataAbilityPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dataabilitypredicates-0000001054200074) object.   
static [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [createRdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dataabilityutils-0000001054518814#ZH-CN_TOPIC_0000001054518814__createRdbPredicates-ohos_data_dataability_DataAbilityPredicates-java_lang_String-)​([DataAbilityPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dataabilitypredicates-0000001054200074) dataAbilityPredicates, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) tableName) |  Creates an [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) object from a [DataAbilityPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dataabilitypredicates-0000001054200074) object.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Method Detail

#### [h2]createRdbPredicates

public static [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) createRdbPredicates​([DataAbilityPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dataabilitypredicates-0000001054200074) dataAbilityPredicates, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) tableName)

Creates an [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) object from a [DataAbilityPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dataabilitypredicates-0000001054200074) object. 

The [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) object can be used to perform database operations.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
dataAbilityPredicates  |  Indicates the [DataAbilityPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dataabilitypredicates-0000001054200074) object used to create the [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) object.  
tableName  |  Indicates the table name.  
  
**Returns:**

Returns the [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) object.

**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  Throws this exception if tableName is null or the [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) object cannot be created from the [DataAbilityPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dataabilitypredicates-0000001054200074) object.  
  
**Since:**

1

#### [h2]createOrmPredicates

public static <T extends [OrmObject](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ormobject-0000001054120141)> [OrmPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ormpredicates-0000001054120070) createOrmPredicates​([DataAbilityPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dataabilitypredicates-0000001054200074) dataAbilityPredicates, [Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<T> klass)

Creates an [OrmPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ormpredicates-0000001054120070) object from a [DataAbilityPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dataabilitypredicates-0000001054200074) object. 

The [OrmPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ormpredicates-0000001054120070) object can be used to perform database operations.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
dataAbilityPredicates  |  Indicates the [DataAbilityPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dataabilitypredicates-0000001054200074) object used to create the [OrmPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ormpredicates-0000001054120070) object.  
klass  |  Indicates the class.  
  
**Returns:**

Returns the [OrmPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ormpredicates-0000001054120070) object.

**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  Throws this exception if klass is null or the [OrmPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ormpredicates-0000001054120070) object cannot be created from the [DataAbilityPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dataabilitypredicates-0000001054200074) object.  
  
**Since:**

1
