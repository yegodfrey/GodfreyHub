---
name: document/cn/doc-references/dateformatsymbols-0000001054558863
title: DateFormatSymbols
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/dateformatsymbols-0000001054558863
source: portal
---

# DateFormatSymbols

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.global.icu.text.DateFormatSymbols
    
    public class DateFormatSymbols
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)
    implements [Serializable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/serializable-0000001054358416), [Cloneable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cloneable-0000001054358421)  
  
---  
**[icu enhancement]** ICU's replacement for [DateFormatSymbols](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054838518). Methods, fields, and other functionality specific to ICU are labeled '**[icu]** '. 

DateFormatSymbols is a public class for encapsulating localizable date-time formatting data, such as the names of the months, the names of the days of the week, and the time zone data. DateFormat and SimpleDateFormat both use DateFormatSymbols to encapsulate this information. 

Typically you shouldn't use DateFormatSymbols directly. Rather, you are encouraged to create a date-time formatter with the DateFormat class's factory methods: getTimeInstance, getDateInstance, or getDateTimeInstance. These methods automatically create a DateFormatSymbols for the formatter so that you don't have to. After the formatter is created, you may modify its format pattern using the setPattern method. For more information about creating formatters using DateFormat's factory methods, see [DateFormat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformat-0000001054678862). 

If you decide to create a date-time formatter with a specific format pattern for a specific locale, you can do so with: 
    
    new SimpleDateFormat(aPattern, new DateFormatSymbols(aLocale)).
     

DateFormatSymbols objects are clonable. When you obtain a DateFormatSymbols object, feel free to modify the date-time formatting data. For instance, you can replace the localized date-time format pattern characters with the ones that you feel easy to remember. Or you can change the representative cities to your favorite ones. 

New DateFormatSymbols subclasses may be added to support SimpleDateFormat for date-time formatting for additional locales.

**See Also:**

[DateFormat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformat-0000001054678862), [SimpleDateFormat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpledateformat-0000001054518880), ohos.global.icu.util.SimpleTimeZone, 

#### Field Summary

Modifier and Type | Field | Description  
---|---|---  
static int | [ABBREVIATED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__ABBREVIATED) |  **[icu]** Constant for width.   
static int | [FORMAT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__FORMAT) |  **[icu]** Constant for context.   
static int | [NARROW](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__NARROW) |  **[icu]** Constant for width.   
static int | [SHORT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__SHORT) |  **[icu]** Constant for width; only supported for weekdays.   
static int | [STANDALONE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__STANDALONE) |  **[icu]** Constant for context.   
static int | [WIDE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__WIDE) |  **[icu]** Constant for width.   
  
#### Constructor Summary

Constructor | Description  
---|---  
[DateFormatSymbols](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__DateFormatSymbols--)​() |  Constructs a DateFormatSymbols object by loading format data from resources for the default FORMAT locale.   
[DateFormatSymbols](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__DateFormatSymbols-java_lang_Class-java_util_Locale-)​([Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<? extends [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054678845)> calendarClass, [Locale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/locale-0000001054119852) locale) |  Variant of DateFormatSymbols(Calendar, Locale) that takes the Calendar class instead of a Calendar instance.   
[DateFormatSymbols](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__DateFormatSymbols-java_lang_Class-ohos_global_icu_util_ULocale-)​([Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<? extends [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054678845)> calendarClass, [ULocale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ulocale-0000001054238879) locale) |  Variant of DateFormatSymbols(Calendar, ULocale) that takes the Calendar class instead of a Calendar instance.   
[DateFormatSymbols](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__DateFormatSymbols-java_util_Locale-)​([Locale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/locale-0000001054119852) locale) |  Constructs a DateFormatSymbols object by loading format data from resources for the given locale.   
[DateFormatSymbols](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__DateFormatSymbols-java_util_ResourceBundle-java_util_Locale-)​([ResourceBundle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610) bundle, [Locale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/locale-0000001054119852) locale) |  Fetches a custom calendar's DateFormatSymbols out of the given resource bundle.   
[DateFormatSymbols](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__DateFormatSymbols-java_util_ResourceBundle-ohos_global_icu_util_ULocale-)​([ResourceBundle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610) bundle, [ULocale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ulocale-0000001054238879) locale) |  Fetches a custom calendar's DateFormatSymbols out of the given resource bundle.   
[DateFormatSymbols](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__DateFormatSymbols-ohos_global_icu_util_Calendar-java_util_Locale-)​([Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054678845) cal, [Locale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/locale-0000001054119852) locale) |  Returns the [DateFormatSymbols](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863) object that should be used to format a calendar system's dates in the given locale.   
[DateFormatSymbols](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__DateFormatSymbols-ohos_global_icu_util_Calendar-ohos_global_icu_util_ULocale-)​([Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054678845) cal, [ULocale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ulocale-0000001054238879) locale) |  Returns the [DateFormatSymbols](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863) object that should be used to format a calendar system's dates in the given locale.   
[DateFormatSymbols](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__DateFormatSymbols-ohos_global_icu_util_ULocale-)​([ULocale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ulocale-0000001054238879) locale) |  **[icu]** Constructs a DateFormatSymbols object by loading format data from resources for the given ulocale.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) | [clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__clone--)​() |  Overrides clone.   
boolean | [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__equals-java_lang_Object-)​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) obj) |  Overrides equals.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] | [getAmPmStrings](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__getAmPmStrings--)​() |  Returns am/pm strings.   
static [Locale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/locale-0000001054119852)[] | [getAvailableLocales](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__getAvailableLocales--)​() |  Returns an array of all locales for which the getInstance methods of this class can return localized instances.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] | [getEraNames](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__getEraNames--)​() |  **[icu]** Returns full era name strings.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] | [getEras](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__getEras--)​() |  Returns abbreviated era strings.   
static [DateFormatSymbols](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863) | [getInstance](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__getInstance--)​() |  Returns a DateFormatSymbols instance for the default locale.   
static [DateFormatSymbols](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863) | [getInstance](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__getInstance-java_util_Locale-)​([Locale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/locale-0000001054119852) locale) |  Returns a DateFormatSymbols instance for the given locale.   
static [DateFormatSymbols](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863) | [getInstance](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__getInstance-ohos_global_icu_util_ULocale-)​([ULocale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ulocale-0000001054238879) locale) |  **[icu]** Returns a DateFormatSymbols instance for the given locale.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getLocalPatternChars](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__getLocalPatternChars--)​() |  Returns localized date-time pattern characters.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] | [getMonths](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__getMonths--)​() |  Returns month strings.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] | [getMonths](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__getMonths-int-int-)​(int context, int width) |  Returns month strings.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] | [getNarrowEras](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__getNarrowEras--)​() |  **[icu]** Returns narrow era name strings.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] | [getQuarters](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__getQuarters-int-int-)​(int context, int width) |  **[icu]** Returns quarter strings.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] | [getShortMonths](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__getShortMonths--)​() |  Returns short month strings.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] | [getShortWeekdays](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__getShortWeekdays--)​() |  Returns abbreviated weekday strings; for example: "Sun", "Mon", etc.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] | [getWeekdays](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__getWeekdays--)​() |  Returns wide weekday strings.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] | [getWeekdays](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__getWeekdays-int-int-)​(int context, int width) |  Returns weekday strings.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] | [getYearNames](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__getYearNames-int-int-)​(int context, int width) |  Returns cyclic year name strings if the calendar has them, for example: "jia-zi", "yi-chou", etc.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] | [getZodiacNames](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__getZodiacNames-int-int-)​(int context, int width) |  Returns calendar zodiac name strings if the calendar has them, for example: "Rat", "Ox", "Tiger", etc.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[][] | [getZoneStrings](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__getZoneStrings--)​() |  Returns time zone strings.   
int | [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__hashCode--)​() |  Override hashCode.   
protected void | [initializeData](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__initializeData-ohos_global_icu_util_ULocale-java_lang_String-)​([ULocale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ulocale-0000001054238879) desiredLocale, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) type) |  Initializes format symbols for the locale and calendar type   
void | [setAmPmStrings](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__setAmPmStrings-java_lang_String:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] newAmpms) |  Sets am/pm strings.   
void | [setEraNames](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__setEraNames-java_lang_String:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] newEraNames) |  **[icu]** Sets full era name strings.   
void | [setEras](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__setEras-java_lang_String:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] newEras) |  Sets abbreviated era strings.   
void | [setLocalPatternChars](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__setLocalPatternChars-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) newLocalPatternChars) |  Sets localized date-time pattern characters.   
void | [setMonths](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__setMonths-java_lang_String:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] newMonths) |  Sets month strings.   
void | [setMonths](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__setMonths-java_lang_String:A-int-int-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] newMonths, int context, int width) |  Sets month strings.   
void | [setNarrowEras](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__setNarrowEras-java_lang_String:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] newNarrowEras) |  **[icu]** Sets narrow era name strings.   
void | [setQuarters](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__setQuarters-java_lang_String:A-int-int-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] newQuarters, int context, int width) |  **[icu]** Sets quarter strings.   
void | [setShortMonths](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__setShortMonths-java_lang_String:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] newShortMonths) |  Sets short month strings.   
void | [setShortWeekdays](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__setShortWeekdays-java_lang_String:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] newAbbrevWeekdays) |  Sets abbreviated weekday strings; for example: "Sun", "Mon", etc.   
void | [setWeekdays](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__setWeekdays-java_lang_String:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] newWeekdays) |  Sets wide weekday strings.   
void | [setWeekdays](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__setWeekdays-java_lang_String:A-int-int-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] newWeekdays, int context, int width) |  Sets weekday strings.   
void | [setYearNames](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__setYearNames-java_lang_String:A-int-int-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] yearNames, int context, int width) |  Sets cyclic year name strings, for example: "jia-zi", "yi-chou", etc.   
void | [setZodiacNames](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__setZodiacNames-java_lang_String:A-int-int-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] zodiacNames, int context, int width) |  Sets calendar zodiac name strings, for example: "Rat", "Ox", "Tiger", etc.   
void | [setZoneStrings](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__setZoneStrings-java_lang_String:A:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[][] newZoneStrings) |  Sets time zone strings.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Field Detail

#### [h2]ABBREVIATED

public static final int ABBREVIATED

**[icu]** Constant for width. 

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_global_icu_text_DateFormatSymbols_ABBREVIATED)

#### [h2]FORMAT

public static final int FORMAT

**[icu]** Constant for context. 

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_global_icu_text_DateFormatSymbols_FORMAT)

#### [h2]NARROW

public static final int NARROW

**[icu]** Constant for width. 

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_global_icu_text_DateFormatSymbols_NARROW)

#### [h2]SHORT

public static final int SHORT

**[icu]** Constant for width; only supported for weekdays. 

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_global_icu_text_DateFormatSymbols_SHORT)

#### [h2]STANDALONE

public static final int STANDALONE

**[icu]** Constant for context. 

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_global_icu_text_DateFormatSymbols_STANDALONE)

#### [h2]WIDE

public static final int WIDE

**[icu]** Constant for width. 

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_global_icu_text_DateFormatSymbols_WIDE)

#### Constructor Detail

#### [h2]DateFormatSymbols

public DateFormatSymbols​()

Constructs a DateFormatSymbols object by loading format data from resources for the default FORMAT locale. 

**Throws:**

Throw Name | Throw Description  
---|---  
[MissingResourceException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/missingresourceexception-0000001054358592) |  if the resources for the default locale cannot be found or cannot be loaded.  
  
**See Also:**

[ULocale.Category.FORMAT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ulocale_category-0000001054678882#ZH-CN_TOPIC_0000001054678882__FORMAT)

#### [h2]DateFormatSymbols

public DateFormatSymbols​([Locale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/locale-0000001054119852) locale)

Constructs a DateFormatSymbols object by loading format data from resources for the given locale. 

**Throws:**

Throw Name | Throw Description  
---|---  
[MissingResourceException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/missingresourceexception-0000001054358592) |  if the resources for the specified locale cannot be found or cannot be loaded.  
  
#### [h2]DateFormatSymbols

public DateFormatSymbols​([ULocale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ulocale-0000001054238879) locale)

**[icu]** Constructs a DateFormatSymbols object by loading format data from resources for the given ulocale. 

**Throws:**

Throw Name | Throw Description  
---|---  
[MissingResourceException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/missingresourceexception-0000001054358592) |  if the resources for the specified locale cannot be found or cannot be loaded.  
  
#### [h2]DateFormatSymbols

public DateFormatSymbols​([Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054678845) cal, [Locale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/locale-0000001054119852) locale)

Returns the [DateFormatSymbols](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863) object that should be used to format a calendar system's dates in the given locale. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
cal  |  The calendar system whose date format symbols are desired.  
locale  |  The locale whose symbols are desired.  
  
**See Also:**

[DateFormatSymbols(java.util.Locale)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__DateFormatSymbols-java_util_Locale-)

#### [h2]DateFormatSymbols

public DateFormatSymbols​([Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054678845) cal, [ULocale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ulocale-0000001054238879) locale)

Returns the [DateFormatSymbols](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863) object that should be used to format a calendar system's dates in the given locale. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
cal  |  The calendar system whose date format symbols are desired.  
locale  |  The ulocale whose symbols are desired.  
  
**See Also:**

[DateFormatSymbols(java.util.Locale)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__DateFormatSymbols-java_util_Locale-)

#### [h2]DateFormatSymbols

public DateFormatSymbols​([Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<? extends [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054678845)> calendarClass, [Locale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/locale-0000001054119852) locale)

Variant of DateFormatSymbols(Calendar, Locale) that takes the Calendar class instead of a Calendar instance. 

**See Also:**

[DateFormatSymbols(Calendar, Locale)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__DateFormatSymbols-ohos_global_icu_util_Calendar-java_util_Locale-)

#### [h2]DateFormatSymbols

public DateFormatSymbols​([Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<? extends [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054678845)> calendarClass, [ULocale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ulocale-0000001054238879) locale)

Variant of DateFormatSymbols(Calendar, ULocale) that takes the Calendar class instead of a Calendar instance. 

**See Also:**

[DateFormatSymbols(Calendar, Locale)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__DateFormatSymbols-ohos_global_icu_util_Calendar-java_util_Locale-)

#### [h2]DateFormatSymbols

public DateFormatSymbols​([ResourceBundle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610) bundle, [Locale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/locale-0000001054119852) locale)

Fetches a custom calendar's DateFormatSymbols out of the given resource bundle. Symbols that are not overridden are inherited from the default DateFormatSymbols for the locale. 

**See Also:**

[DateFormatSymbols(java.util.Locale)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__DateFormatSymbols-java_util_Locale-)

#### [h2]DateFormatSymbols

public DateFormatSymbols​([ResourceBundle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610) bundle, [ULocale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ulocale-0000001054238879) locale)

Fetches a custom calendar's DateFormatSymbols out of the given resource bundle. Symbols that are not overridden are inherited from the default DateFormatSymbols for the locale. 

**See Also:**

[DateFormatSymbols(java.util.Locale)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863#ZH-CN_TOPIC_0000001054558863__DateFormatSymbols-java_util_Locale-)

#### Method Detail

#### [h2]getInstance

public static [DateFormatSymbols](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863) getInstance​()

Returns a DateFormatSymbols instance for the default locale. **[icu] Note:** Unlike java.text.DateFormatSymbols#getInstance, this method simply returns new ohos.global.icu.text.DateFormatSymbols(). ICU does not support DateFormatSymbolsProvider introduced in Java 6 or its equivalent implementation for now. 

**Returns:**

A DateFormatSymbols instance.

#### [h2]getInstance

public static [DateFormatSymbols](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863) getInstance​([Locale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/locale-0000001054119852) locale)

Returns a DateFormatSymbols instance for the given locale. **[icu] Note:** Unlike java.text.DateFormatSymbols#getInstance, this method simply returns new ohos.global.icu.text.DateFormatSymbols(locale). ICU does not support DateFormatSymbolsProvider introduced in Java 6 or its equivalent implementation for now. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
locale  |  the locale.  
  
**Returns:**

A DateFormatSymbols instance.

#### [h2]getInstance

public static [DateFormatSymbols](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054558863) getInstance​([ULocale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ulocale-0000001054238879) locale)

**[icu]** Returns a DateFormatSymbols instance for the given locale. **[icu] Note:** Unlike java.text.DateFormatSymbols#getInstance, this method simply returns new ohos.global.icu.text.DateFormatSymbols(locale). ICU does not support DateFormatSymbolsProvider introduced in Java 6 or its equivalent implementation for now. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
locale  |  the locale.  
  
**Returns:**

A DateFormatSymbols instance.

#### [h2]getAvailableLocales

public static [Locale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/locale-0000001054119852)[] getAvailableLocales​()

Returns an array of all locales for which the getInstance methods of this class can return localized instances. **[icu] Note:** Unlike java.text.DateFormatSymbols#getAvailableLocales, this method simply returns the array of Locales available in this class. ICU does not support DateFormatSymbolsProvider introduced in Java 6 or its equivalent implementation for now. 

**Returns:**

An array of Locales for which localized DateFormatSymbols instances are available.

#### [h2]getEras

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] getEras​()

Returns abbreviated era strings. For example: "AD" and "BC". 

**Returns:**

the era strings.

#### [h2]setEras

public void setEras​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] newEras)

Sets abbreviated era strings. For example: "AD" and "BC". 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
newEras  |  the new era strings.  
  
#### [h2]getEraNames

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] getEraNames​()

**[icu]** Returns full era name strings. For example: "Anno Domini" and "Before Christ". 

**Returns:**

the era strings.

#### [h2]setEraNames

public void setEraNames​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] newEraNames)

**[icu]** Sets full era name strings. For example: "Anno Domini" and "Before Christ". 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
newEraNames  |  the new era strings.  
  
#### [h2]getNarrowEras

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] getNarrowEras​()

**[icu]** Returns narrow era name strings. For example: "A" and "B". 

**Returns:**

the narrow era strings.

#### [h2]setNarrowEras

public void setNarrowEras​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] newNarrowEras)

**[icu]** Sets narrow era name strings. For example: "A" and "B". 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
newNarrowEras  |  the new narrow era strings.  
  
#### [h2]getMonths

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] getMonths​()

Returns month strings. For example: "January", "February", etc. 

**Returns:**

the month strings.

#### [h2]getMonths

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] getMonths​(int context, int width)

Returns month strings. For example: "January", "February", etc. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
context  |  The month context, FORMAT or STANDALONE.  
width  |  The width or the returned month string, either WIDE, ABBREVIATED, or NARROW.  
  
**Returns:**

the month strings.

#### [h2]setMonths

public void setMonths​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] newMonths)

Sets month strings. For example: "January", "February", etc. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
newMonths  |  the new month strings.  
  
#### [h2]setMonths

public void setMonths​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] newMonths, int context, int width)

Sets month strings. For example: "January", "February", etc. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
newMonths  |  the new month strings.  
context  |  The formatting context, FORMAT or STANDALONE.  
width  |  The width of the month string, either WIDE, ABBREVIATED, or NARROW.  
  
#### [h2]getShortMonths

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] getShortMonths​()

Returns short month strings. For example: "Jan", "Feb", etc. 

**Returns:**

the short month strings.

#### [h2]setShortMonths

public void setShortMonths​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] newShortMonths)

Sets short month strings. For example: "Jan", "Feb", etc. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
newShortMonths  |  the new short month strings.  
  
#### [h2]getWeekdays

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] getWeekdays​()

Returns wide weekday strings. For example: "Sunday", "Monday", etc. 

**Returns:**

the weekday strings. Use Calendar.SUNDAY, Calendar.MONDAY, etc. to index the result array.

#### [h2]getWeekdays

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] getWeekdays​(int context, int width)

Returns weekday strings. For example: "Sunday", "Monday", etc. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
context  |  Formatting context, either FORMAT or STANDALONE.  
width  |  Width of strings to be returned, either WIDE, ABBREVIATED, SHORT, or NARROW  
  
**Returns:**

the weekday strings. Use Calendar.SUNDAY, Calendar.MONDAY, etc. to index the result array.

#### [h2]setWeekdays

public void setWeekdays​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] newWeekdays, int context, int width)

Sets weekday strings. For example: "Sunday", "Monday", etc. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
newWeekdays  |  The new weekday strings.  
context  |  The formatting context, FORMAT or STANDALONE.  
width  |  The width of the strings, either WIDE, ABBREVIATED, SHORT, or NARROW.  
  
#### [h2]setWeekdays

public void setWeekdays​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] newWeekdays)

Sets wide weekday strings. For example: "Sunday", "Monday", etc. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
newWeekdays  |  the new weekday strings. The array should be indexed by Calendar.SUNDAY, Calendar.MONDAY, etc.  
  
#### [h2]getShortWeekdays

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] getShortWeekdays​()

Returns abbreviated weekday strings; for example: "Sun", "Mon", etc. (Note: the method name is misleading; it does not get the CLDR-style "short" weekday strings, e.g. "Su", "Mo", etc.) 

**Returns:**

the abbreviated weekday strings. Use Calendar.SUNDAY, Calendar.MONDAY, etc. to index the result array.

#### [h2]setShortWeekdays

public void setShortWeekdays​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] newAbbrevWeekdays)

Sets abbreviated weekday strings; for example: "Sun", "Mon", etc. (Note: the method name is misleading; it does not set the CLDR-style "short" weekday strings, e.g. "Su", "Mo", etc.) 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
newAbbrevWeekdays  |  the new abbreviated weekday strings. The array should be indexed by Calendar.SUNDAY, Calendar.MONDAY, etc.  
  
#### [h2]getQuarters

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] getQuarters​(int context, int width)

**[icu]** Returns quarter strings. For example: "1st Quarter", "2nd Quarter", etc. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
context  |  The quarter context, FORMAT or STANDALONE.  
width  |  The width or the returned quarter string, either WIDE or ABBREVIATED. There are no NARROW quarters.  
  
**Returns:**

the quarter strings.

#### [h2]setQuarters

public void setQuarters​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] newQuarters, int context, int width)

**[icu]** Sets quarter strings. For example: "1st Quarter", "2nd Quarter", etc. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
newQuarters  |  the new quarter strings.  
context  |  The formatting context, FORMAT or STANDALONE.  
width  |  The width of the quarter string, either WIDE or ABBREVIATED. There are no NARROW quarters.  
  
#### [h2]getYearNames

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] getYearNames​(int context, int width)

Returns cyclic year name strings if the calendar has them, for example: "jia-zi", "yi-chou", etc. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
context  |  The usage context: FORMAT, STANDALONE.  
width  |  The requested name width: WIDE, ABBREVIATED, SHORT, NARROW.  
  
**Returns:**

The year name strings, or null if they are not available for this calendar.

#### [h2]setYearNames

public void setYearNames​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] yearNames, int context, int width)

Sets cyclic year name strings, for example: "jia-zi", "yi-chou", etc. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
yearNames  |  The new cyclic year name strings.  
context  |  The usage context: FORMAT, STANDALONE (currently only FORMAT is supported).  
width  |  The name width: WIDE, ABBREVIATED, NARROW (currently only ABBREVIATED is supported).  
  
#### [h2]getZodiacNames

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] getZodiacNames​(int context, int width)

Returns calendar zodiac name strings if the calendar has them, for example: "Rat", "Ox", "Tiger", etc. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
context  |  The usage context: FORMAT, STANDALONE.  
width  |  The requested name width: WIDE, ABBREVIATED, SHORT, NARROW.  
  
**Returns:**

The zodiac name strings, or null if they are not available for this calendar.

#### [h2]setZodiacNames

public void setZodiacNames​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] zodiacNames, int context, int width)

Sets calendar zodiac name strings, for example: "Rat", "Ox", "Tiger", etc. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
zodiacNames  |  The new zodiac name strings.  
context  |  The usage context: FORMAT, STANDALONE (currently only FORMAT is supported).  
width  |  The name width: WIDE, ABBREVIATED, NARROW (currently only ABBREVIATED is supported).  
  
#### [h2]getAmPmStrings

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] getAmPmStrings​()

Returns am/pm strings. For example: "AM" and "PM". 

**Returns:**

the weekday strings.

#### [h2]setAmPmStrings

public void setAmPmStrings​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] newAmpms)

Sets am/pm strings. For example: "AM" and "PM". 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
newAmpms  |  the new ampm strings.  
  
#### [h2]getZoneStrings

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[][] getZoneStrings​()

Returns time zone strings. 

The array returned by this API is a two dimensional String array and each row contains at least following strings: 

    * ZoneStrings[n][0] - System time zone ID 
    * ZoneStrings[n][1] - Long standard time display name 
    * ZoneStrings[n][2] - Short standard time display name 
    * ZoneStrings[n][3] - Long daylight saving time display name 
    * ZoneStrings[n][4] - Short daylight saving time display name 
When a localized display name is not available, the corresponding array element will be null. 

**Note** : ICU implements the time zone display name formatting algorithm specified by [UTS#35 Unicode Locale Data Markup Language(LDML)](http://www.unicode.org/reports/tr35/). The algorithm supports historic display name changes and various different types of names not available in [DateFormatSymbols.getZoneStrings()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dateformatsymbols-0000001054838518#ZH-CN_TOPIC_0000001054838518__getZoneStrings--). For accessing the full set of time zone string data used by ICU implementation, you should use [TimeZoneNames](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezonenames-0000001054558869) APIs instead.

**Returns:**

the time zone strings.

#### [h2]setZoneStrings

public void setZoneStrings​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[][] newZoneStrings)

Sets time zone strings. 

**Note** : [SimpleDateFormat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpledateformat-0000001054518880) no longer uses the zone strings stored in a DateFormatSymbols. Therefore, the time zone strings set by this method have no effects in an instance of SimpleDateFormat for formatting time zones. If you want to customize time zone display names formatted by SimpleDateFormat, you should customize [TimeZoneFormat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezoneformat-0000001054358847) and set the instance by [SimpleDateFormat#setTimeZoneFormat(TimeZoneFormat)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpledateformat-0000001054518880#ZH-CN_TOPIC_0000001054518880__setTimeZoneFormat-ohos_global_icu_text_TimeZoneFormat-) instead.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
newZoneStrings  |  the new time zone strings.  
  
#### [h2]getLocalPatternChars

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getLocalPatternChars​()

Returns localized date-time pattern characters. For example: 'u', 't', etc. 

Note: ICU no longer provides localized date-time pattern characters for a locale starting ICU 3.8. This method returns the non-localized date-time pattern characters unless user defined localized data is set by setLocalPatternChars.

**Returns:**

the localized date-time pattern characters.

#### [h2]setLocalPatternChars

public void setLocalPatternChars​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) newLocalPatternChars)

Sets localized date-time pattern characters. For example: 'u', 't', etc. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
newLocalPatternChars  |  the new localized date-time pattern characters.  
  
#### [h2]clone

public [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) clone​()

Overrides clone. 

**Overrides:**

[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)

**Returns:**

a clone of this instance.

**See Also:**

[Cloneable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cloneable-0000001054358421)

#### [h2]hashCode

public int hashCode​()

Override hashCode. Generates a hash code for the DateFormatSymbols object. 

**Overrides:**

[hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)

**Returns:**

a hash code value for this object.

**See Also:**

[Object.equals(java.lang.Object)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [System.identityHashCode(java.lang.Object)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/system-0000001054558449#ZH-CN_TOPIC_0000001054558449__identityHashCode-java_lang_Object-)

#### [h2]equals

public boolean equals​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) obj)

Overrides equals. 

**Overrides:**

[equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
obj  |  the reference object with which to compare.  
  
**Returns:**

true if this object is the same as the obj argument; false otherwise.

**See Also:**

[Object.hashCode()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [HashMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashmap-0000001054518606)

#### [h2]initializeData

protected void initializeData​([ULocale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ulocale-0000001054238879) desiredLocale, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) type)

Initializes format symbols for the locale and calendar type 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
desiredLocale  |  The locale whose symbols are desired.  
type  |  The calendar type whose date format symbols are desired.
