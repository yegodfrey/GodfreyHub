---
name: document/cn/doc-references/hiloglabel-0000001054838842
title: HiLogLabel
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/hiloglabel-0000001054838842
source: portal
---

# HiLogLabel

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.hiviewdfx.HiLogLabel
    
    public final class HiLogLabel
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
An auxiliary class for the HiLog class to define log labels, including the log type, service domain, and tag. 

Each log label includes: 

Log type: the type of logs. 

Service domain: the service domain of logs. This is a hexadecimal integer ranging from 0x0 to 0xFFFFF. You are advised to use the 0xAAABB format, in which AAA indicates a subsystem and BB indicates a module. 

Tag: a string constant used to identify the class or service behavior of a method call.

**Since:**

1

**See Also:**

[HiLog](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hilog-0000001054678857)

#### Constructor Summary

Constructor | Description  
---|---  
[HiLogLabel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hiloglabel-0000001054838842#ZH-CN_TOPIC_0000001054838842__HiLogLabel-int-int-java_lang_String-)​(int type, int domain, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) tag) |  A constructor used to create a HiLogLabel instance.   
  
#### Method Summary

Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]HiLogLabel

public HiLogLabel​(int type, int domain, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) tag)

A constructor used to create a HiLogLabel instance. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
type  |  Indicates the log type, which is defined in [HiLog#LOG_APP](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hilog-0000001054678857#ZH-CN_TOPIC_0000001054678857__LOG_APP).  
domain  |  Indicates the service domain, which is a hexadecimal integer ranging from 0x0 to 0xFFFFF.  
tag  |  Indicates a string constant, which identifies the class or service behavior of a method call.  
  
**Since:**

1

**See Also:**

[HiLog](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hilog-0000001054678857)
