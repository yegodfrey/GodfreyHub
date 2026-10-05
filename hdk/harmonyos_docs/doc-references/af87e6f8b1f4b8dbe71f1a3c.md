---
name: document/cn/doc-references/recommendation-0000001054440115
title: Recommendation
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/recommendation-0000001054440115
source: portal
---

# Recommendation

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.data.search.model.Recommendation
    
    public class Recommendation
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Represents the group search result. 

Each Recommendation instance represents a group. The group search result contains the following parameters: field, value (field value), count (number of indexes in the group), and indexDataList (index data in the group, which is not returned by default).

**Since:**

3

#### Constructor Summary

Constructor | Description  
---|---  
[Recommendation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/recommendation-0000001054440115#ZH-CN_TOPIC_0000001054440115__Recommendation-java_lang_String-java_lang_String-java_util_List-long-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value, [List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[IndexData](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indexdata-0000001054120157)> indexDataList, long count) |  A constructor used to create a Recommendation instance.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
long | [getCount](https://developer.harmonyos.com/cn/docs/documentation/doc-references/recommendation-0000001054440115#ZH-CN_TOPIC_0000001054440115__getCount--)​() |  Obtains the number of indexes in this group.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getField](https://developer.harmonyos.com/cn/docs/documentation/doc-references/recommendation-0000001054440115#ZH-CN_TOPIC_0000001054440115__getField--)​() |  Obtains the field of this group.   
[List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[IndexData](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indexdata-0000001054120157)> | [getIndexDataList](https://developer.harmonyos.com/cn/docs/documentation/doc-references/recommendation-0000001054440115#ZH-CN_TOPIC_0000001054440115__getIndexDataList--)​() |  Obtains the index data in this group.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/recommendation-0000001054440115#ZH-CN_TOPIC_0000001054440115__getValue--)​() |  Obtains the field value of this group.   
void | [setCount](https://developer.harmonyos.com/cn/docs/documentation/doc-references/recommendation-0000001054440115#ZH-CN_TOPIC_0000001054440115__setCount-long-)​(long count) |  Sets the number of indexes in this group.   
void | [setField](https://developer.harmonyos.com/cn/docs/documentation/doc-references/recommendation-0000001054440115#ZH-CN_TOPIC_0000001054440115__setField-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field) |  Sets the field for this group.   
void | [setIndexDataList](https://developer.harmonyos.com/cn/docs/documentation/doc-references/recommendation-0000001054440115#ZH-CN_TOPIC_0000001054440115__setIndexDataList-java_util_List-)​([List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[IndexData](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indexdata-0000001054120157)> indexDataList) |  Sets the index data in this group.   
void | [setValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/recommendation-0000001054440115#ZH-CN_TOPIC_0000001054440115__setValue-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value) |  Sets the field value for this group.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/recommendation-0000001054440115#ZH-CN_TOPIC_0000001054440115__toString--)​() |  Returns a string representation of the object.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]Recommendation

public Recommendation​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value, [List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[IndexData](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indexdata-0000001054120157)> indexDataList, long count)

A constructor used to create a Recommendation instance. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the field of the group.  
value  |  Indicates the field value of the group.  
count  |  Indicates the number of indexes in the group.  
indexDataList  |  Indicates the index data in the group.  
  
**Since:**

3

#### Method Detail

#### [h2]setField

public void setField​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field)

Sets the field for this group. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the field to set.  
  
**Since:**

3

#### [h2]setValue

public void setValue​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value)

Sets the field value for this group. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
value  |  Indicates the field value to set.  
  
**Since:**

3

#### [h2]setIndexDataList

public void setIndexDataList​([List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[IndexData](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indexdata-0000001054120157)> indexDataList)

Sets the index data in this group. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
indexDataList  |  Indicates the index data to set.  
  
**Since:**

3

#### [h2]setCount

public void setCount​(long count)

Sets the number of indexes in this group. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
count  |  Indicates the number of indexes to set.  
  
**Since:**

3

#### [h2]getField

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getField​()

Obtains the field of this group. 

**Returns:**

Returns the field of this group.

**Since:**

3

#### [h2]getValue

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getValue​()

Obtains the field value of this group. 

**Returns:**

Returns the field value of this group.

**Since:**

3

#### [h2]getIndexDataList

public [List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[IndexData](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indexdata-0000001054120157)> getIndexDataList​()

Obtains the index data in this group. 

**Returns:**

Returns the index data in this group.

**Since:**

3

#### [h2]getCount

public long getCount​()

Obtains the number of indexes in this group. 

**Returns:**

Returns the number of indexes in this group.

**Since:**

3

#### [h2]toString

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) toString​()

Description copied from class: [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--)

Returns a string representation of the object. In general, the toString method returns a string that "textually represents" this object. The result should be a concise but informative representation that is easy for a person to read. It is recommended that all subclasses override this method. 

The toString method for class Object returns a string consisting of the name of the class of which the object is an instance, the at-sign character `@', and the unsigned hexadecimal representation of the hash code of the object. In other words, this method returns a string equal to the value of: 
    
    getClass().getName() + '@' + Integer.toHexString(hashCode())
     

**Overrides:**

[toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)

**Returns:**

a string representation of the object.
