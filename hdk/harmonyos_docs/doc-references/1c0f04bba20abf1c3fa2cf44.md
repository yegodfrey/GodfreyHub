---
name: document/cn/doc-references/relativedatetimeformatter_field-0000001138987483
title: RelativeDateTimeFormatter.Field
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/relativedatetimeformatter_field-0000001138987483
source: portal
---

# RelativeDateTimeFormatter.Field  
  
[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[java.text.AttributedCharacterIterator.Attribute](https://developer.harmonyos.com/cn/docs/documentation/doc-references/attributedcharacteriterator_attribute-0000001054119891) |---|---[java.text.Format.Field](https://developer.harmonyos.com/cn/docs/documentation/doc-references/format_field-0000001054199838) |---|---|---ohos.global.icu.text.RelativeDateTimeFormatter.Field
    
    public static class RelativeDateTimeFormatter.Field
    extends [Format.Field](https://developer.harmonyos.com/cn/docs/documentation/doc-references/format_field-0000001054199838)  
  
---  
Field constants used when accessing field information for relative datetime strings in FormattedValue. 

There is no public constructor to this class; the only instances are the constants defined here. 

#### Field Summary

Modifier and Type | Field | Description  
---|---|---  
static [RelativeDateTimeFormatter.Field](https://developer.harmonyos.com/cn/docs/documentation/doc-references/relativedatetimeformatter_field-0000001138987483) | [LITERAL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/relativedatetimeformatter_field-0000001138987483#ZH-CN_TOPIC_0000001138987483__LITERAL) |  Represents a literal text string, like "tomorrow" or "days ago".   
static [RelativeDateTimeFormatter.Field](https://developer.harmonyos.com/cn/docs/documentation/doc-references/relativedatetimeformatter_field-0000001138987483) | [NUMERIC](https://developer.harmonyos.com/cn/docs/documentation/doc-references/relativedatetimeformatter_field-0000001138987483#ZH-CN_TOPIC_0000001138987483__NUMERIC) |  Represents a number quantity, like "3" in "3 days ago".   
  
Fields inherited from class java.text.[AttributedCharacterIterator.Attribute](https://developer.harmonyos.com/cn/docs/documentation/doc-references/attributedcharacteriterator_attribute-0000001054119891)  
---  
[INPUT_METHOD_SEGMENT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/attributedcharacteriterator_attribute-0000001054119891#ZH-CN_TOPIC_0000001054119891__INPUT_METHOD_SEGMENT), [LANGUAGE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/attributedcharacteriterator_attribute-0000001054119891#ZH-CN_TOPIC_0000001054119891__LANGUAGE), [READING](https://developer.harmonyos.com/cn/docs/documentation/doc-references/attributedcharacteriterator_attribute-0000001054119891#ZH-CN_TOPIC_0000001054119891__READING)  
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
protected [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) | [readResolve](https://developer.harmonyos.com/cn/docs/documentation/doc-references/relativedatetimeformatter_field-0000001138987483#ZH-CN_TOPIC_0000001138987483__readResolve--)​() |  Serizalization method resolve instances to the constant Field values   
  
Methods inherited from class java.text.[AttributedCharacterIterator.Attribute](https://developer.harmonyos.com/cn/docs/documentation/doc-references/attributedcharacteriterator_attribute-0000001054119891)  
---  
[equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/attributedcharacteriterator_attribute-0000001054119891#ZH-CN_TOPIC_0000001054119891__equals-java_lang_Object-), [getName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/attributedcharacteriterator_attribute-0000001054119891#ZH-CN_TOPIC_0000001054119891__getName--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/attributedcharacteriterator_attribute-0000001054119891#ZH-CN_TOPIC_0000001054119891__hashCode--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/attributedcharacteriterator_attribute-0000001054119891#ZH-CN_TOPIC_0000001054119891__toString--)  
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Field Detail

#### [h2]LITERAL

public static final [RelativeDateTimeFormatter.Field](https://developer.harmonyos.com/cn/docs/documentation/doc-references/relativedatetimeformatter_field-0000001138987483) LITERAL

Represents a literal text string, like "tomorrow" or "days ago". 

#### [h2]NUMERIC

public static final [RelativeDateTimeFormatter.Field](https://developer.harmonyos.com/cn/docs/documentation/doc-references/relativedatetimeformatter_field-0000001138987483) NUMERIC

Represents a number quantity, like "3" in "3 days ago". 

#### Method Detail

#### [h2]readResolve

protected [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) readResolve​() throws [InvalidObjectException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/invalidobjectexception-0000001054838392)

Serizalization method resolve instances to the constant Field values 

**Overrides:**

[readResolve](https://developer.harmonyos.com/cn/docs/documentation/doc-references/attributedcharacteriterator_attribute-0000001054119891#ZH-CN_TOPIC_0000001054119891__readResolve--) in class [AttributedCharacterIterator.Attribute](https://developer.harmonyos.com/cn/docs/documentation/doc-references/attributedcharacteriterator_attribute-0000001054119891)

**Returns:**

the resolved Attribute object

**Throws:**

Throw Name | Throw Description  
---|---  
[InvalidObjectException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/invalidobjectexception-0000001054838392) |  if the object to resolve is not an instance of Attribute
