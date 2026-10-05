---
name: document/cn/doc-references/dateformat-0000001218076487
title: DateFormat
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/dateformat-0000001218076487
source: portal
---

# DateFormat

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.agp.text.DateFormat
    
    public class DateFormat
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Provides a utility class to format the date text.

**Since:**

7

#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
static [CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) | [format](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformat-0000001218076487#ZH-CN_TOPIC_0000001218076487__format-long-)​(long date) |  Formats the date text based on the default format of the current [Locale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/locale-0000001054119852).   
static [CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) | [format](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformat-0000001218076487#ZH-CN_TOPIC_0000001218076487__format-long-java_lang_CharSequence-)​(long date, [CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) format) |  Formats the date text in the specified format and the current [Locale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/locale-0000001054119852).   
static [CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) | [format](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformat-0000001218076487#ZH-CN_TOPIC_0000001218076487__format-long-java_lang_CharSequence-java_lang_String-)​(long date, [CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) format, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) locale) |  Formats the date text in the specified format and locale.   
static [CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) | [format](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformat-0000001218076487#ZH-CN_TOPIC_0000001218076487__format-java_lang_String-java_lang_CharSequence-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) date, [CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) format, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) parseFormat) |  Formats the specified date text in the given format and the current [Locale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/locale-0000001054119852).   
static [CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) | [format](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformat-0000001218076487#ZH-CN_TOPIC_0000001218076487__format-java_lang_String-java_lang_CharSequence-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) date, [CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) format, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) parseFormat, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) locale) |  Formats the specified date text in the given format and locale.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Method Detail

#### [h2]format

public static [CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) format​(long date)

Formats the date text based on the default format of the current [Locale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/locale-0000001054119852). For example, if the current [Locale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/locale-0000001054119852) is US, the formatted string is similar to the following: "Thursday, April 22, 2021 at 3:45:01 PM Central Standard Time". 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
date  |  Indicates the number of milliseconds elapsed since the Unix epoch (00:00:00 UTC on January 1, 1970).  
  
**Returns:**

Returns the formatted date and time string.

**Since:**

7

#### [h2]format

public static [CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) format​(long date, [CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) format)

Formats the date text in the specified format and the current [Locale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/locale-0000001054119852). In the specified format, the keyword y indicates the year, M indicates the month, and d indicates the day. You can also add text in '' format, for example, 'Today'. For details about the format keywords that can be entered, see the UDateFormatField keyword at the ICU website: 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
date  |  Indicates the number of milliseconds elapsed since the Unix epoch (00:00:00 UTC on January 1, 1970).  
format  |  Indicates the format to be specified.  
  
**Returns:**

Returns the formatted date and time string.

**Since:**

7

**See Also:**

[unicode](https://unicode-org.github.io/icu-docs/apidoc/released/icu4c/index.html) Note: When format is null, the date text will be formatted in the default format of the current java.util.LocaleLocale.

#### [h2]format

public static [CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) format​(long date, [CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) format, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) locale)

Formats the date text in the specified format and locale. In the specified format, the keyword y indicates the year, M indicates the month, and d indicates the day. You can also add text in '' format, for example, 'Today'. For details about the format keywords that can be entered, see the UDateFormatField keyword at the ICU website: 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
date  |  Indicates the number of milliseconds elapsed since the Unix epoch (00:00:00 UTC on January 1, 1970).  
format  |  Indicates the format to be specified.  
locale  |  Indicates the [Locale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/locale-0000001054119852) to be specified. The value must be a valid character string representing [Locale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/locale-0000001054119852), for example, "en_US", or null.  
  
**Returns:**

Returns the formatted date and time string.

**Since:**

7

**See Also:**

[unicode](https://unicode-org.github.io/icu-docs/apidoc/released/icu4c/index.html) Note: If locale is null, the current java.util.LocaleLocale will be used. If format is null, the date text will be formatted in the default format of the specified locale.

#### [h2]format

public static [CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) format​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) date, [CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) format, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) parseFormat)

Formats the specified date text in the given format and the current [Locale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/locale-0000001054119852). This method cannot automatically identify the date format of the specified date string. You must use the parseFormat parameter to declare the date format. In the specified format, the keyword y indicates the year, M indicates the month, and d indicates the day. You can also add text in '' format, for example, 'Today'. For details about the format keywords that can be entered, see the UDateFormatField keyword at the ICU website: 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
date  |  Indicates the date string to be formatted.  
format  |  Indicates the format to be specified.  
parseFormat  |  Indicates the format in which the date string is to be parsed. For example, if the specified date text is "20210405", the parseFormat value is "yyyyMMdd".  
  
**Returns:**

Returns the formatted date and time string.

**Since:**

7

**See Also:**

[unicode](https://unicode-org.github.io/icu-docs/apidoc/released/icu4c/index.html) Note: If any input parameter is set to null, date will be returned without formatting.

#### [h2]format

public static [CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) format​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) date, [CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) format, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) parseFormat, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) locale)

Formats the specified date text in the given format and locale. This method cannot automatically identify the date format of the specified date string. You must use the parseFormat parameter to declare the date format. In the specified format, the keyword y indicates the year, M indicates the month, and d indicates the day. You can also add text in '' format, for example, 'Today'. For details about the format keywords that can be entered, see the UDateFormatField keyword at the ICU website: 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
date  |  Indicates the date string to be formatted.  
format  |  Indicates the format to be specified.  
parseFormat  |  Indicates the format in which the date string is to be parsed. For example, if the specified date text is "20210405", the parseFormat value is "yyyyMMdd".  
locale  |  Indicates the [Locale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/locale-0000001054119852) to be specified. The value must be a valid character string representing [Locale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/locale-0000001054119852), for example, "en_US", or null.  
  
**Returns:**

Returns the formatted date and time string.

**Since:**

7

**See Also:**

[unicode](https://unicode-org.github.io/icu-docs/apidoc/released/icu4c/index.html) Note: If locale is null, the current java.util.LocaleLocale will be used. If any input parameter except locale is set to null, date will be returned without formatting.
