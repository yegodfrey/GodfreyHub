---
name: document/cn/doc-references/holder-0000001060519112
title: Holder
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/holder-0000001060519112
source: portal
---

# Holder

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.sysappcomponents.contact.entity.Holder
    
    public class Holder
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Represents a contact holder. The holder is the social media account of the contact or a specified application. Each social media account or application contains at least one contact holder.

**Since:**

3

#### Constructor Summary

Constructor | Description  
---|---  
[Holder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/holder-0000001060519112#ZH-CN_TOPIC_0000001060519112__Holder-long-)​(long holderId) |  A constructor used to create a Holder instance with a holder ID.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getBundleName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/holder-0000001060519112#ZH-CN_TOPIC_0000001060519112__getBundleName--)​() |  Obtains the bundle name of a contact holder.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getDisplayName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/holder-0000001060519112#ZH-CN_TOPIC_0000001060519112__getDisplayName--)​() |  Obtains the displayed name of a contact holder.   
long | [getHolderId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/holder-0000001060519112#ZH-CN_TOPIC_0000001060519112__getHolderId--)​() |  Obtains the holder ID.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]Holder

public Holder​(long holderId)

A constructor used to create a Holder instance with a holder ID. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
holderId  |  Indicates the holder ID.  
  
**Since:**

3

#### Method Detail

#### [h2]getHolderId

public long getHolderId​()

Obtains the holder ID. 

**Returns:**

Returns the holder ID.

**Since:**

3

#### [h2]getBundleName

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getBundleName​()

Obtains the bundle name of a contact holder. 

**Returns:**

Returns the bundle name.

**Since:**

3

#### [h2]getDisplayName

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getDisplayName​()

Obtains the displayed name of a contact holder. 

**Returns:**

Returns the displayed name.

**Since:**

3
