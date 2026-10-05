---
name: document/cn/doc-references/eventqueue-0000001060157239
title: EventQueue
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/eventqueue-0000001060157239
source: portal
---

# EventQueue

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.eventhandler.EventQueue
    
    public final class EventQueue
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
event queue.

**Since:**

4

#### Constructor Summary

Constructor | Description  
---|---  
[EventQueue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventqueue-0000001060157239#ZH-CN_TOPIC_0000001060157239__EventQueue--)​() |     
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
boolean | [isQueueEmpty](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventqueue-0000001060157239#ZH-CN_TOPIC_0000001060157239__isQueueEmpty--)​() |  Checks whether this event queue is empty.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventqueue-0000001060157239#ZH-CN_TOPIC_0000001060157239__toString--)​() |  Returns a string representation of the object.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]EventQueue

public EventQueue​()

#### Method Detail

#### [h2]isQueueEmpty

public boolean isQueueEmpty​()

Checks whether this event queue is empty. A queue is considered empty if no pending event needs to be processed in this queue. 

**Returns:**

Returns true if this event queue is empty; returns false otherwise.

**Since:**

4

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
