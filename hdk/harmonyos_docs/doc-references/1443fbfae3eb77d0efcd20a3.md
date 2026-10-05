---
name: document/cn/doc-references/unicodesetspanner_countmethod-0000001054678843
title: UnicodeSetSpanner.CountMethod
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/unicodesetspanner_countmethod-0000001054678843
source: portal
---

UnicodeSetSpanner.CountMethod [java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[java.lang.Enum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398)<[UnicodeSetSpanner.CountMethod](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unicodesetspanner_countmethod-0000001054678843)> |---|---ohos.global.icu.text.UnicodeSetSpanner.CountMethod
    
    public static enum UnicodeSetSpanner.CountMethod
    extends [Enum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398)<[UnicodeSetSpanner.CountMethod](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unicodesetspanner_countmethod-0000001054678843)>  
  
---  
Options for replaceFrom and countIn to control how to treat each matched span. It is similar to whether one is replacing [abc] by x, or [abc]* by x.Enum Constant Summary Enum Constant | Description  
---|---  
[MIN_ELEMENTS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unicodesetspanner_countmethod-0000001054678843#ZH-CN_TOPIC_0000001054678843__MIN_ELEMENTS) |  Use the smallest number of elements in the spanned range for counting and modification, based on the [UnicodeSet.SpanCondition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unicodeset_spancondition-0000001054238873).   
[WHOLE_SPAN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unicodesetspanner_countmethod-0000001054678843#ZH-CN_TOPIC_0000001054678843__WHOLE_SPAN) |  Collapse spans.   
Method Summary Modifier and Type | Method | Description  
---|---|---  
static [UnicodeSetSpanner.CountMethod](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unicodesetspanner_countmethod-0000001054678843) | [valueOf](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unicodesetspanner_countmethod-0000001054678843#ZH-CN_TOPIC_0000001054678843__valueOf-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) name) |  Returns the enum constant of this type with the specified name.   
static [UnicodeSetSpanner.CountMethod](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unicodesetspanner_countmethod-0000001054678843)[] | [values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unicodesetspanner_countmethod-0000001054678843#ZH-CN_TOPIC_0000001054678843__values--)​() |  Returns an array containing the constants of this enum type, in the order they are declared.   
Methods inherited from class java.lang.[Enum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__clone--), [compareTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__compareTo-E-), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__finalize--), [getDeclaringClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__getDeclaringClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__hashCode--), [name](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__name--), [ordinal](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__ordinal--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__toString--), [valueOf](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__valueOf-java_lang_Class-java_lang_String-)  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
Enum Constant Detail [h2]WHOLE_SPAN public static final [UnicodeSetSpanner.CountMethod](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unicodesetspanner_countmethod-0000001054678843) WHOLE_SPAN Collapse spans. That is, modify/count the entire matching span as a single item, instead of separate set elements.  [h2]MIN_ELEMENTS public static final [UnicodeSetSpanner.CountMethod](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unicodesetspanner_countmethod-0000001054678843) MIN_ELEMENTS Use the smallest number of elements in the spanned range for counting and modification, based on the [UnicodeSet.SpanCondition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unicodeset_spancondition-0000001054238873). If the set has no strings, this will be the same as the number of spanned code points. For example, in the string "abab" with SpanCondition.SIMPLE: 
    * spanning with [ab] will count four MIN_ELEMENTS.
    * spanning with [{ab}] will count two MIN_ELEMENTS.
    * spanning with [ab{ab}] will also count two MIN_ELEMENTS.
Method Detail [h2]values public static [UnicodeSetSpanner.CountMethod](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unicodesetspanner_countmethod-0000001054678843)[] values​() Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows: 
    
    for (UnicodeSetSpanner.CountMethod c : UnicodeSetSpanner.CountMethod.values())
        System.out.println(c);
    

**Returns:** an array containing the constants of this enum type, in the order they are declared [h2]valueOf public static [UnicodeSetSpanner.CountMethod](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unicodesetspanner_countmethod-0000001054678843) valueOf​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) name) Returns the enum constant of this type with the specified name. The string must match _exactly_ an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.) **Parameters:** Parameter Name | Parameter Description  
---|---  
name  |  the name of the enum constant to be returned.  
**Returns:** the enum constant with the specified name **Throws:** Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if this enum type has no constant with the specified name  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if the argument is null
