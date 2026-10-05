---
name: document/cn/doc-references/messagepattern_part_type-0000001054678872
title: MessagePattern.Part.Type
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/messagepattern_part_type-0000001054678872
source: portal
---

# MessagePattern.Part.Type

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[java.lang.Enum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398)<[MessagePattern.Part.Type](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872)> |---|---ohos.global.icu.text.MessagePattern.Part.Type
    
    public static enum MessagePattern.Part.Type
    extends [Enum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398)<[MessagePattern.Part.Type](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872)>  
  
---  
Part type constants.

#### Enum Constant Summary

Enum Constant | Description  
---|---  
[ARG_DOUBLE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872#ZH-CN_TOPIC_0000001054678872__ARG_DOUBLE) |  A numeric value, for example the offset or an explicit selector value in a PluralFormat style.   
[ARG_INT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872#ZH-CN_TOPIC_0000001054678872__ARG_INT) |  An integer value, for example the offset or an explicit selector value in a PluralFormat style.   
[ARG_LIMIT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872#ZH-CN_TOPIC_0000001054678872__ARG_LIMIT) |  End of an argument.   
[ARG_NAME](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872#ZH-CN_TOPIC_0000001054678872__ARG_NAME) |  The argument name.   
[ARG_NUMBER](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872#ZH-CN_TOPIC_0000001054678872__ARG_NUMBER) |  The argument number, provided by the value.   
[ARG_SELECTOR](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872#ZH-CN_TOPIC_0000001054678872__ARG_SELECTOR) |  A selector substring in a "complex" argument style.   
[ARG_START](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872#ZH-CN_TOPIC_0000001054678872__ARG_START) |  Start of an argument.   
[ARG_STYLE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872#ZH-CN_TOPIC_0000001054678872__ARG_STYLE) |  The argument style text.   
[ARG_TYPE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872#ZH-CN_TOPIC_0000001054678872__ARG_TYPE) |  The argument type.   
[INSERT_CHAR](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872#ZH-CN_TOPIC_0000001054678872__INSERT_CHAR) |  Indicates that a syntax character needs to be inserted for auto-quoting.   
[MSG_LIMIT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872#ZH-CN_TOPIC_0000001054678872__MSG_LIMIT) |  End of a message pattern (main or nested).   
[MSG_START](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872#ZH-CN_TOPIC_0000001054678872__MSG_START) |  Start of a message pattern (main or nested).   
[REPLACE_NUMBER](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872#ZH-CN_TOPIC_0000001054678872__REPLACE_NUMBER) |  Indicates a syntactic (non-escaped) # symbol in a plural variant.   
[SKIP_SYNTAX](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872#ZH-CN_TOPIC_0000001054678872__SKIP_SYNTAX) |  Indicates a substring of the pattern string which is to be skipped when formatting.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
boolean | [hasNumericValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872#ZH-CN_TOPIC_0000001054678872__hasNumericValue--)​() |  Indicates whether this part has a numeric value.   
static [MessagePattern.Part.Type](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872) | [valueOf](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872#ZH-CN_TOPIC_0000001054678872__valueOf-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) name) |  Returns the enum constant of this type with the specified name.   
static [MessagePattern.Part.Type](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872)[] | [values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872#ZH-CN_TOPIC_0000001054678872__values--)​() |  Returns an array containing the constants of this enum type, in the order they are declared.   
  
Methods inherited from class java.lang.[Enum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__clone--), [compareTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__compareTo-E-), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__finalize--), [getDeclaringClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__getDeclaringClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__hashCode--), [name](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__name--), [ordinal](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__ordinal--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__toString--), [valueOf](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__valueOf-java_lang_Class-java_lang_String-)  
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Enum Constant Detail

#### [h2]MSG_START

public static final [MessagePattern.Part.Type](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872) MSG_START

Start of a message pattern (main or nested). The length is 0 for the top-level message and for a choice argument sub-message, otherwise 1 for the '{'. The value indicates the nesting level, starting with 0 for the main message. 

There is always a later MSG_LIMIT part.

#### [h2]MSG_LIMIT

public static final [MessagePattern.Part.Type](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872) MSG_LIMIT

End of a message pattern (main or nested). The length is 0 for the top-level message and the last sub-message of a choice argument, otherwise 1 for the '}' or (in a choice argument style) the '|'. The value indicates the nesting level, starting with 0 for the main message. 

#### [h2]SKIP_SYNTAX

public static final [MessagePattern.Part.Type](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872) SKIP_SYNTAX

Indicates a substring of the pattern string which is to be skipped when formatting. For example, an apostrophe that begins or ends quoted text would be indicated with such a part. The value is undefined and currently always 0. 

#### [h2]INSERT_CHAR

public static final [MessagePattern.Part.Type](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872) INSERT_CHAR

Indicates that a syntax character needs to be inserted for auto-quoting. The length is 0. The value is the character code of the insertion character. (U+0027=APOSTROPHE) 

#### [h2]REPLACE_NUMBER

public static final [MessagePattern.Part.Type](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872) REPLACE_NUMBER

Indicates a syntactic (non-escaped) # symbol in a plural variant. When formatting, replace this part's substring with the (value-offset) for the plural argument value. The value is undefined and currently always 0. 

#### [h2]ARG_START

public static final [MessagePattern.Part.Type](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872) ARG_START

Start of an argument. The length is 1 for the '{'. The value is the ordinal value of the ArgType. Use getArgType(). 

This part is followed by either an ARG_NUMBER or ARG_NAME, followed by optional argument sub-parts (see ArgType constants) and finally an ARG_LIMIT part.

#### [h2]ARG_LIMIT

public static final [MessagePattern.Part.Type](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872) ARG_LIMIT

End of an argument. The length is 1 for the '}'. The value is the ordinal value of the ArgType. Use getArgType(). 

#### [h2]ARG_NUMBER

public static final [MessagePattern.Part.Type](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872) ARG_NUMBER

The argument number, provided by the value. 

#### [h2]ARG_NAME

public static final [MessagePattern.Part.Type](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872) ARG_NAME

The argument name. The value is undefined and currently always 0. 

#### [h2]ARG_TYPE

public static final [MessagePattern.Part.Type](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872) ARG_TYPE

The argument type. The value is undefined and currently always 0. 

#### [h2]ARG_STYLE

public static final [MessagePattern.Part.Type](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872) ARG_STYLE

The argument style text. The value is undefined and currently always 0. 

#### [h2]ARG_SELECTOR

public static final [MessagePattern.Part.Type](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872) ARG_SELECTOR

A selector substring in a "complex" argument style. The value is undefined and currently always 0. 

#### [h2]ARG_INT

public static final [MessagePattern.Part.Type](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872) ARG_INT

An integer value, for example the offset or an explicit selector value in a PluralFormat style. The part value is the integer value. 

#### [h2]ARG_DOUBLE

public static final [MessagePattern.Part.Type](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872) ARG_DOUBLE

A numeric value, for example the offset or an explicit selector value in a PluralFormat style. The part value is an index into an internal array of numeric values; use getNumericValue(). 

#### Method Detail

#### [h2]values

public static [MessagePattern.Part.Type](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872)[] values​()

Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows: 
    
    for (MessagePattern.Part.Type c : MessagePattern.Part.Type.values())
        System.out.println(c);
    

**Returns:**

an array containing the constants of this enum type, in the order they are declared

#### [h2]valueOf

public static [MessagePattern.Part.Type](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern_part_type-0000001054678872) valueOf​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) name)

Returns the enum constant of this type with the specified name. The string must match _exactly_ an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.) 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
name  |  the name of the enum constant to be returned.  
  
**Returns:**

the enum constant with the specified name

**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if this enum type has no constant with the specified name  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if the argument is null  
  
#### [h2]hasNumericValue

public boolean hasNumericValue​()

Indicates whether this part has a numeric value. If so, then that numeric value can be retrieved via [MessagePattern#getNumericValue(Part)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagepattern-0000001054120122#ZH-CN_TOPIC_0000001054120122__getNumericValue-ohos_global_icu_text_MessagePattern_Part-). 

**Returns:**

true if this part has a numeric value.
