---
name: document/cn/doc-references/simpletimezone-0000001054238597
title: SimpleTimeZone
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/simpletimezone-0000001054238597
source: portal
---

SimpleTimeZone [java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[java.util.TimeZone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599) |---|---java.util.SimpleTimeZone
    
    public class SimpleTimeZone
    extends [TimeZone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599)  
  
---  
SimpleTimeZone is a concrete subclass of TimeZone that represents a time zone for use with a Gregorian calendar. The class holds an offset from GMT, called raw offset, and start and end rules for a daylight saving time schedule. Since it only holds single values for each, it cannot handle historical changes in the offset from GMT and the daylight saving schedule, except that the [setStartYear](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__setStartYear-int-) method can specify the year when the daylight saving time schedule starts in effect.  To construct a SimpleTimeZone with a daylight saving time schedule, the schedule can be described with a set of rules, start-rule and end-rule. A day when daylight saving time starts or ends is specified by a combination of month, day-of-month, and day-of-week values. The month value is represented by a Calendar [Calendar#MONTH](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__MONTH) field value, such as [Calendar#MARCH](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__MARCH). The day-of-week value is represented by a Calendar [Calendar#DAY_OF_WEEK](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__DAY_OF_WEEK) value, such as [Calendar#SUNDAY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__SUNDAY). The meanings of value combinations are as follows. 
    * **Exact day of month** To specify an exact day of month, set the month and day-of-month to an exact value, and day-of-week to zero. For example, to specify March 1, set the month to [Calendar#MARCH](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__MARCH), day-of-month to 1, and day-of-week to 0.
    * **Day of week on or after day of month** To specify a day of week on or after an exact day of month, set the month to an exact month value, day-of-month to the day on or after which the rule is applied, and day-of-week to a negative [Calendar#DAY_OF_WEEK](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__DAY_OF_WEEK) field value. For example, to specify the second Sunday of April, set month to [Calendar#APRIL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__APRIL), day-of-month to 8, and day-of-week to -[Calendar#SUNDAY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__SUNDAY).
    * **Day of week on or before day of month** To specify a day of the week on or before an exact day of the month, set day-of-month and day-of-week to a negative value. For example, to specify the last Wednesday on or before the 21st of March, set month to [Calendar#MARCH](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__MARCH), day-of-month is -21 and day-of-week is -[Calendar#WEDNESDAY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__WEDNESDAY). 
    * **Last day-of-week of month** To specify, the last day-of-week of the month, set day-of-week to a [Calendar#DAY_OF_WEEK](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__DAY_OF_WEEK) value and day-of-month to -1. For example, to specify the last Sunday of October, set month to [Calendar#OCTOBER](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__OCTOBER), day-of-week to [Calendar#SUNDAY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__SUNDAY) and day-of-month to -1. 
The time of the day at which daylight saving time starts or ends is specified by a millisecond value within the day. There are three kinds of modes to specify the time: [WALL_TIME](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__WALL_TIME), [STANDARD_TIME](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__STANDARD_TIME) and [UTC_TIME](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__UTC_TIME). For example, if daylight saving time ends at 2:00 am in the wall clock time, it can be specified by 7200000 milliseconds in the [WALL_TIME](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__WALL_TIME) mode. In this case, the wall clock time for an end-rule means the same thing as the daylight time.  The following are examples of parameters for constructing time zone objects. 
    
    // Base GMT offset: -8:00
          // DST starts:      at 2:00am in standard time
          //                  on the first Sunday in April
          // DST ends:        at 2:00am in daylight time
          //                  on the last Sunday in October
          // Save:            1 hour
          SimpleTimeZone(-28800000,
                         "America/Los_Angeles",
                         Calendar.APRIL, 1, -Calendar.SUNDAY,
                         7200000,
                         Calendar.OCTOBER, -1, Calendar.SUNDAY,
                         7200000,
                         3600000)
    
          // Base GMT offset: +1:00
          // DST starts:      at 1:00am in UTC time
          //                  on the last Sunday in March
          // DST ends:        at 1:00am in UTC time
          //                  on the last Sunday in October
          // Save:            1 hour
          SimpleTimeZone(3600000,
                         "Europe/Paris",
                         Calendar.MARCH, -1, Calendar.SUNDAY,
                         3600000, SimpleTimeZone.UTC_TIME,
                         Calendar.OCTOBER, -1, Calendar.SUNDAY,
                         3600000, SimpleTimeZone.UTC_TIME,
                         3600000)
     

These parameter rules are also applicable to the set rule methods, such as setStartRule.**Since:** 1.1**See Also:** [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877), [GregorianCalendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/gregoriancalendar-0000001054199866), [TimeZone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599), Field Summary Modifier and Type | Field | Description  
---|---|---  
static int | [STANDARD_TIME](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__STANDARD_TIME) |  Constant for a mode of start or end time specified as standard time.   
static int | [UTC_TIME](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__UTC_TIME) |  Constant for a mode of start or end time specified as UTC.   
static int | [WALL_TIME](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__WALL_TIME) |  Constant for a mode of start or end time specified as wall clock time.   
Fields inherited from class java.util.[TimeZone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599)  
---  
[LONG](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599#ZH-CN_TOPIC_0000001054238599__LONG), [SHORT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599#ZH-CN_TOPIC_0000001054238599__SHORT)  
Constructor Summary Constructor | Description  
---|---  
[SimpleTimeZone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__SimpleTimeZone-int-java_lang_String-)​(int rawOffset, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) ID) |  Constructs a SimpleTimeZone with the given base time zone offset from GMT and time zone ID with no daylight saving time schedule.   
[SimpleTimeZone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__SimpleTimeZone-int-java_lang_String-int-int-int-int-int-int-int-int-)​(int rawOffset, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) ID, int startMonth, int startDay, int startDayOfWeek, int startTime, int endMonth, int endDay, int endDayOfWeek, int endTime) |  Constructs a SimpleTimeZone with the given base time zone offset from GMT, time zone ID, and rules for starting and ending the daylight time.   
[SimpleTimeZone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__SimpleTimeZone-int-java_lang_String-int-int-int-int-int-int-int-int-int-)​(int rawOffset, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) ID, int startMonth, int startDay, int startDayOfWeek, int startTime, int endMonth, int endDay, int endDayOfWeek, int endTime, int dstSavings) |  Constructs a SimpleTimeZone with the given base time zone offset from GMT, time zone ID, and rules for starting and ending the daylight time.   
[SimpleTimeZone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__SimpleTimeZone-int-java_lang_String-int-int-int-int-int-int-int-int-int-int-int-)​(int rawOffset, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) ID, int startMonth, int startDay, int startDayOfWeek, int startTime, int startTimeMode, int endMonth, int endDay, int endDayOfWeek, int endTime, int endTimeMode, int dstSavings) |  Constructs a SimpleTimeZone with the given base time zone offset from GMT, time zone ID, and rules for starting and ending the daylight time.   
Method Summary Modifier and Type | Method | Description  
---|---|---  
[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) | [clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__clone--)​() |  Returns a clone of this SimpleTimeZone instance.   
boolean | [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__equals-java_lang_Object-)​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) obj) |  Compares the equality of two SimpleTimeZone objects.   
int | [getDSTSavings](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__getDSTSavings--)​() |  Returns the amount of time in milliseconds that the clock is advanced during daylight saving time.   
int | [getOffset](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__getOffset-int-int-int-int-int-int-)​(int era, int year, int month, int day, int dayOfWeek, int millis) |  Returns the difference in milliseconds between local time and UTC, taking into account both the raw offset and the effect of daylight saving, for the specified date and time.   
int | [getOffset](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__getOffset-long-)​(long date) |  Returns the offset of this time zone from UTC at the given time.   
int | [getRawOffset](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__getRawOffset--)​() |  Gets the GMT offset for this time zone.   
int | [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__hashCode--)​() |  Generates the hash code for the SimpleDateFormat object.   
boolean | [hasSameRules](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__hasSameRules-java_util_TimeZone-)​([TimeZone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599) other) |  Returns true if this zone has the same rules and offset as another zone.   
boolean | [inDaylightTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__inDaylightTime-java_util_Date-)​([Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) date) |  Queries if the given date is in daylight saving time.   
boolean | [observesDaylightTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__observesDaylightTime--)​() |  Returns true if this SimpleTimeZone observes Daylight Saving Time.   
void | [setDSTSavings](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__setDSTSavings-int-)​(int millisSavedDuringDST) |  Sets the amount of time in milliseconds that the clock is advanced during daylight saving time.   
void | [setEndRule](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__setEndRule-int-int-int-)​(int endMonth, int endDay, int endTime) |  Sets the daylight saving time end rule to a fixed date within a month.   
void | [setEndRule](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__setEndRule-int-int-int-int-)​(int endMonth, int endDay, int endDayOfWeek, int endTime) |  Sets the daylight saving time end rule.   
void | [setEndRule](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__setEndRule-int-int-int-int-boolean-)​(int endMonth, int endDay, int endDayOfWeek, int endTime, boolean after) |  Sets the daylight saving time end rule to a weekday before or after the given date within a month, e.g., the first Monday on or after the 8th.   
void | [setRawOffset](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__setRawOffset-int-)​(int offsetMillis) |  Sets the base time zone offset to GMT.   
void | [setStartRule](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__setStartRule-int-int-int-)​(int startMonth, int startDay, int startTime) |  Sets the daylight saving time start rule to a fixed date within a month.   
void | [setStartRule](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__setStartRule-int-int-int-int-)​(int startMonth, int startDay, int startDayOfWeek, int startTime) |  Sets the daylight saving time start rule.   
void | [setStartRule](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__setStartRule-int-int-int-int-boolean-)​(int startMonth, int startDay, int startDayOfWeek, int startTime, boolean after) |  Sets the daylight saving time start rule to a weekday before or after the given date within a month, e.g., the first Monday on or after the 8th.   
void | [setStartYear](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__setStartYear-int-)​(int year) |  Sets the daylight saving time starting year.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__toString--)​() |  Returns a string representation of this time zone.   
boolean | [useDaylightTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__useDaylightTime--)​() |  Queries if this time zone uses daylight saving time.   
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
Methods inherited from class java.util.[TimeZone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599)  
---  
[getAvailableIDs](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599#ZH-CN_TOPIC_0000001054238599__getAvailableIDs--), [getAvailableIDs](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599#ZH-CN_TOPIC_0000001054238599__getAvailableIDs-int-), [getDefault](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599#ZH-CN_TOPIC_0000001054238599__getDefault--), [getDisplayName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599#ZH-CN_TOPIC_0000001054238599__getDisplayName--), [getDisplayName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599#ZH-CN_TOPIC_0000001054238599__getDisplayName-boolean-int-), [getDisplayName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599#ZH-CN_TOPIC_0000001054238599__getDisplayName-boolean-int-java_util_Locale-), [getDisplayName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599#ZH-CN_TOPIC_0000001054238599__getDisplayName-java_util_Locale-), [getID](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599#ZH-CN_TOPIC_0000001054238599__getID--), [getTimeZone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599#ZH-CN_TOPIC_0000001054238599__getTimeZone-java_lang_String-), [getTimeZone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599#ZH-CN_TOPIC_0000001054238599__getTimeZone-java_time_ZoneId-), [setDefault](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599#ZH-CN_TOPIC_0000001054238599__setDefault-java_util_TimeZone-), [setID](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599#ZH-CN_TOPIC_0000001054238599__setID-java_lang_String-), [toZoneId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599#ZH-CN_TOPIC_0000001054238599__toZoneId--)  
Field Detail [h2]STANDARD_TIME public static final int STANDARD_TIME Constant for a mode of start or end time specified as standard time. **Since:** 1.4 **See Also:** [Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__java_util_SimpleTimeZone_STANDARD_TIME) [h2]UTC_TIME public static final int UTC_TIME Constant for a mode of start or end time specified as UTC. European Union rules are specified as UTC time, for example. **Since:** 1.4 **See Also:** [Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__java_util_SimpleTimeZone_UTC_TIME) [h2]WALL_TIME public static final int WALL_TIME Constant for a mode of start or end time specified as wall clock time. Wall clock time is standard time for the onset rule, and daylight time for the end rule. **Since:** 1.4 **See Also:** [Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__java_util_SimpleTimeZone_WALL_TIME) Constructor Detail [h2]SimpleTimeZone public SimpleTimeZone​(int rawOffset, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) ID) Constructs a SimpleTimeZone with the given base time zone offset from GMT and time zone ID with no daylight saving time schedule. **Parameters:** Parameter Name | Parameter Description  
---|---  
rawOffset  |  The base time zone offset in milliseconds to GMT.  
ID  |  The time zone name that is given to this instance.  
[h2]SimpleTimeZone public SimpleTimeZone​(int rawOffset, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) ID, int startMonth, int startDay, int startDayOfWeek, int startTime, int endMonth, int endDay, int endDayOfWeek, int endTime) Constructs a SimpleTimeZone with the given base time zone offset from GMT, time zone ID, and rules for starting and ending the daylight time. Both startTime and endTime are specified to be represented in the wall clock time. The amount of daylight saving is assumed to be 3600000 milliseconds (i.e., one hour). This constructor is equivalent to: 
    
    SimpleTimeZone(rawOffset,
                        ID,
                        startMonth,
                        startDay,
                        startDayOfWeek,
                        startTime,
                        SimpleTimeZone.[WALL_TIME](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__WALL_TIME),
                        endMonth,
                        endDay,
                        endDayOfWeek,
                        endTime,
                        SimpleTimeZone.[WALL_TIME](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__WALL_TIME),
                        3600000)
     

**Parameters:** Parameter Name | Parameter Description  
---|---  
rawOffset  |  The given base time zone offset from GMT.  
ID  |  The time zone ID which is given to this object.  
startMonth  |  The daylight saving time starting month. Month is a [Calendar#MONTH](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__MONTH) field value (0-based. e.g., 0 for January).  
startDay  |  The day of the month on which the daylight saving time starts. See the class description for the special cases of this parameter.  
startDayOfWeek  |  The daylight saving time starting day-of-week. See the class description for the special cases of this parameter.  
startTime  |  The daylight saving time starting time in local wall clock time (in milliseconds within the day), which is local standard time in this case.  
endMonth  |  The daylight saving time ending month. Month is a [Calendar#MONTH](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__MONTH) field value (0-based. e.g., 9 for October).  
endDay  |  The day of the month on which the daylight saving time ends. See the class description for the special cases of this parameter.  
endDayOfWeek  |  The daylight saving time ending day-of-week. See the class description for the special cases of this parameter.  
endTime  |  The daylight saving ending time in local wall clock time, (in milliseconds within the day) which is local daylight time in this case.  
**Throws:** Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if the month, day, dayOfWeek, or time parameters are out of range for the start or end rule  
[h2]SimpleTimeZone public SimpleTimeZone​(int rawOffset, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) ID, int startMonth, int startDay, int startDayOfWeek, int startTime, int endMonth, int endDay, int endDayOfWeek, int endTime, int dstSavings) Constructs a SimpleTimeZone with the given base time zone offset from GMT, time zone ID, and rules for starting and ending the daylight time. Both startTime and endTime are assumed to be represented in the wall clock time. This constructor is equivalent to: 
    
    SimpleTimeZone(rawOffset,
                        ID,
                        startMonth,
                        startDay,
                        startDayOfWeek,
                        startTime,
                        SimpleTimeZone.[WALL_TIME](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__WALL_TIME),
                        endMonth,
                        endDay,
                        endDayOfWeek,
                        endTime,
                        SimpleTimeZone.[WALL_TIME](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__WALL_TIME),
                        dstSavings)
     

**Parameters:** Parameter Name | Parameter Description  
---|---  
rawOffset  |  The given base time zone offset from GMT.  
ID  |  The time zone ID which is given to this object.  
startMonth  |  The daylight saving time starting month. Month is a [Calendar#MONTH](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__MONTH) field value (0-based. e.g., 0 for January).  
startDay  |  The day of the month on which the daylight saving time starts. See the class description for the special cases of this parameter.  
startDayOfWeek  |  The daylight saving time starting day-of-week. See the class description for the special cases of this parameter.  
startTime  |  The daylight saving time starting time in local wall clock time, which is local standard time in this case.  
endMonth  |  The daylight saving time ending month. Month is a [Calendar#MONTH](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__MONTH) field value (0-based. e.g., 9 for October).  
endDay  |  The day of the month on which the daylight saving time ends. See the class description for the special cases of this parameter.  
endDayOfWeek  |  The daylight saving time ending day-of-week. See the class description for the special cases of this parameter.  
endTime  |  The daylight saving ending time in local wall clock time, which is local daylight time in this case.  
dstSavings  |  The amount of time in milliseconds saved during daylight saving time.  
**Throws:** Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if the month, day, dayOfWeek, or time parameters are out of range for the start or end rule  
**Since:** 1.2 [h2]SimpleTimeZone public SimpleTimeZone​(int rawOffset, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) ID, int startMonth, int startDay, int startDayOfWeek, int startTime, int startTimeMode, int endMonth, int endDay, int endDayOfWeek, int endTime, int endTimeMode, int dstSavings) Constructs a SimpleTimeZone with the given base time zone offset from GMT, time zone ID, and rules for starting and ending the daylight time. This constructor takes the full set of the start and end rules parameters, including modes of startTime and endTime. The mode specifies either [wall time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__WALL_TIME) or [standard time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__STANDARD_TIME) or [UTC time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__UTC_TIME). **Parameters:** Parameter Name | Parameter Description  
---|---  
rawOffset  |  The given base time zone offset from GMT.  
ID  |  The time zone ID which is given to this object.  
startMonth  |  The daylight saving time starting month. Month is a [Calendar#MONTH](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__MONTH) field value (0-based. e.g., 0 for January).  
startDay  |  The day of the month on which the daylight saving time starts. See the class description for the special cases of this parameter.  
startDayOfWeek  |  The daylight saving time starting day-of-week. See the class description for the special cases of this parameter.  
startTime  |  The daylight saving time starting time in the time mode specified by startTimeMode.  
startTimeMode  |  The mode of the start time specified by startTime.  
endMonth  |  The daylight saving time ending month. Month is a [Calendar#MONTH](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__MONTH) field value (0-based. e.g., 9 for October).  
endDay  |  The day of the month on which the daylight saving time ends. See the class description for the special cases of this parameter.  
endDayOfWeek  |  The daylight saving time ending day-of-week. See the class description for the special cases of this parameter.  
endTime  |  The daylight saving ending time in time time mode specified by endTimeMode.  
endTimeMode  |  The mode of the end time specified by endTime  
dstSavings  |  The amount of time in milliseconds saved during daylight saving time.  
**Throws:** Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if the month, day, dayOfWeek, time more, or time parameters are out of range for the start or end rule, or if a time mode value is invalid.  
**Since:** 1.4 **See Also:** [WALL_TIME](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__WALL_TIME), [STANDARD_TIME](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__STANDARD_TIME), [UTC_TIME](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__UTC_TIME) Method Detail [h2]setStartYear public void setStartYear​(int year) Sets the daylight saving time starting year. **Parameters:** Parameter Name | Parameter Description  
---|---  
year  |  The daylight saving starting year.  
[h2]setStartRule public void setStartRule​(int startMonth, int startDay, int startDayOfWeek, int startTime) Sets the daylight saving time start rule. For example, if daylight saving time starts on the first Sunday in April at 2 am in local wall clock time, you can set the start rule by calling: 
    
    setStartRule(Calendar.APRIL, 1, Calendar.SUNDAY, 2*60*60*1000);

**Parameters:** Parameter Name | Parameter Description  
---|---  
startMonth  |  The daylight saving time starting month. Month is a [Calendar#MONTH](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__MONTH) field value (0-based. e.g., 0 for January).  
startDay  |  The day of the month on which the daylight saving time starts. See the class description for the special cases of this parameter.  
startDayOfWeek  |  The daylight saving time starting day-of-week. See the class description for the special cases of this parameter.  
startTime  |  The daylight saving time starting time in local wall clock time, which is local standard time in this case.  
**Throws:** Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if the startMonth, startDay, startDayOfWeek, or startTime parameters are out of range  
[h2]setStartRule public void setStartRule​(int startMonth, int startDay, int startTime) Sets the daylight saving time start rule to a fixed date within a month. This method is equivalent to: 
    
    setStartRule(startMonth, startDay, 0, startTime)

**Parameters:** Parameter Name | Parameter Description  
---|---  
startMonth  |  The daylight saving time starting month. Month is a [Calendar#MONTH](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__MONTH) field value (0-based. e.g., 0 for January).  
startDay  |  The day of the month on which the daylight saving time starts.  
startTime  |  The daylight saving time starting time in local wall clock time, which is local standard time in this case. See the class description for the special cases of this parameter.  
**Throws:** Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if the startMonth, startDayOfMonth, or startTime parameters are out of range  
**Since:** 1.2 [h2]setStartRule public void setStartRule​(int startMonth, int startDay, int startDayOfWeek, int startTime, boolean after) Sets the daylight saving time start rule to a weekday before or after the given date within a month, e.g., the first Monday on or after the 8th. **Parameters:** Parameter Name | Parameter Description  
---|---  
startMonth  |  The daylight saving time starting month. Month is a [Calendar#MONTH](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__MONTH) field value (0-based. e.g., 0 for January).  
startDay  |  The day of the month on which the daylight saving time starts.  
startDayOfWeek  |  The daylight saving time starting day-of-week.  
startTime  |  The daylight saving time starting time in local wall clock time, which is local standard time in this case.  
after  |  If true, this rule selects the first dayOfWeek on or after dayOfMonth. If false, this rule selects the last dayOfWeek on or before dayOfMonth.  
**Throws:** Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if the startMonth, startDay, startDayOfWeek, or startTime parameters are out of range  
**Since:** 1.2 [h2]setEndRule public void setEndRule​(int endMonth, int endDay, int endDayOfWeek, int endTime) Sets the daylight saving time end rule. For example, if daylight saving time ends on the last Sunday in October at 2 am in wall clock time, you can set the end rule by calling: setEndRule(Calendar.OCTOBER, -1, Calendar.SUNDAY, 2*60*60*1000); **Parameters:** Parameter Name | Parameter Description  
---|---  
endMonth  |  The daylight saving time ending month. Month is a [Calendar#MONTH](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__MONTH) field value (0-based. e.g., 9 for October).  
endDay  |  The day of the month on which the daylight saving time ends. See the class description for the special cases of this parameter.  
endDayOfWeek  |  The daylight saving time ending day-of-week. See the class description for the special cases of this parameter.  
endTime  |  The daylight saving ending time in local wall clock time, (in milliseconds within the day) which is local daylight time in this case.  
**Throws:** Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if the endMonth, endDay, endDayOfWeek, or endTime parameters are out of range  
[h2]setEndRule public void setEndRule​(int endMonth, int endDay, int endTime) Sets the daylight saving time end rule to a fixed date within a month. This method is equivalent to: 
    
    setEndRule(endMonth, endDay, 0, endTime)

**Parameters:** Parameter Name | Parameter Description  
---|---  
endMonth  |  The daylight saving time ending month. Month is a [Calendar#MONTH](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__MONTH) field value (0-based. e.g., 9 for October).  
endDay  |  The day of the month on which the daylight saving time ends.  
endTime  |  The daylight saving ending time in local wall clock time, (in milliseconds within the day) which is local daylight time in this case.  
**Throws:** Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  the endMonth, endDay, or endTime parameters are out of range  
**Since:** 1.2 [h2]setEndRule public void setEndRule​(int endMonth, int endDay, int endDayOfWeek, int endTime, boolean after) Sets the daylight saving time end rule to a weekday before or after the given date within a month, e.g., the first Monday on or after the 8th. **Parameters:** Parameter Name | Parameter Description  
---|---  
endMonth  |  The daylight saving time ending month. Month is a [Calendar#MONTH](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__MONTH) field value (0-based. e.g., 9 for October).  
endDay  |  The day of the month on which the daylight saving time ends.  
endDayOfWeek  |  The daylight saving time ending day-of-week.  
endTime  |  The daylight saving ending time in local wall clock time, (in milliseconds within the day) which is local daylight time in this case.  
after  |  If true, this rule selects the first endDayOfWeek on or after endDay. If false, this rule selects the last endDayOfWeek on or before endDay of the month.  
**Throws:** Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  the endMonth, endDay, endDayOfWeek, or endTime parameters are out of range  
**Since:** 1.2 [h2]getOffset public int getOffset​(long date) Returns the offset of this time zone from UTC at the given time. If daylight saving time is in effect at the given time, the offset value is adjusted with the amount of daylight saving. **Overrides:** [getOffset](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599#ZH-CN_TOPIC_0000001054238599__getOffset-long-) in class [TimeZone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599) **Parameters:** Parameter Name | Parameter Description  
---|---  
date  |  the time at which the time zone offset is found  
**Returns:** the amount of time in milliseconds to add to UTC to get local time. **Since:** 1.4 **See Also:** [Calendar.ZONE_OFFSET](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__ZONE_OFFSET), [Calendar.DST_OFFSET](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__DST_OFFSET) [h2]getOffset public int getOffset​(int era, int year, int month, int day, int dayOfWeek, int millis) Returns the difference in milliseconds between local time and UTC, taking into account both the raw offset and the effect of daylight saving, for the specified date and time. This method assumes that the start and end month are distinct. It also uses a default [GregorianCalendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/gregoriancalendar-0000001054199866) object as its underlying calendar, such as for determining leap years. Do not use the result of this method with a calendar other than a default GregorianCalendar. Note: In general, clients should use Calendar.get(ZONE_OFFSET) + Calendar.get(DST_OFFSET) instead of calling this method. **Specified by:** [getOffset](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599#ZH-CN_TOPIC_0000001054238599__getOffset-int-int-int-int-int-int-) in class [TimeZone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599) **Parameters:** Parameter Name | Parameter Description  
---|---  
era  |  The era of the given date.  
year  |  The year in the given date.  
month  |  The month in the given date. Month is 0-based. e.g., 0 for January.  
day  |  The day-in-month of the given date.  
dayOfWeek  |  The day-of-week of the given date.  
millis  |  The milliseconds in day in standard local time.  
**Returns:** The milliseconds to add to UTC to get local time. **Throws:** Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  the era, month, day, dayOfWeek, or millis parameters are out of range  
**See Also:** [Calendar.ZONE_OFFSET](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__ZONE_OFFSET), [Calendar.DST_OFFSET](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__DST_OFFSET) [h2]getRawOffset public int getRawOffset​() Gets the GMT offset for this time zone. **Specified by:** [getRawOffset](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599#ZH-CN_TOPIC_0000001054238599__getRawOffset--) in class [TimeZone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599) **Returns:** the GMT offset value in milliseconds **See Also:** [setRawOffset(int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__setRawOffset-int-) [h2]setRawOffset public void setRawOffset​(int offsetMillis) Sets the base time zone offset to GMT. This is the offset to add to UTC to get local time. **Specified by:** [setRawOffset](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599#ZH-CN_TOPIC_0000001054238599__setRawOffset-int-) in class [TimeZone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599) **Parameters:** Parameter Name | Parameter Description  
---|---  
offsetMillis  |  the given base time zone offset to GMT.  
**See Also:** [getRawOffset()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__getRawOffset--) [h2]setDSTSavings public void setDSTSavings​(int millisSavedDuringDST) Sets the amount of time in milliseconds that the clock is advanced during daylight saving time. **Parameters:** Parameter Name | Parameter Description  
---|---  
millisSavedDuringDST  |  the number of milliseconds the time is advanced with respect to standard time when the daylight saving time rules are in effect. A positive number, typically one hour (3600000).  
**Since:** 1.2 **See Also:** [getDSTSavings()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__getDSTSavings--) [h2]getDSTSavings public int getDSTSavings​() Returns the amount of time in milliseconds that the clock is advanced during daylight saving time. **Overrides:** [getDSTSavings](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599#ZH-CN_TOPIC_0000001054238599__getDSTSavings--) in class [TimeZone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599) **Returns:** the number of milliseconds the time is advanced with respect to standard time when the daylight saving rules are in effect, or 0 (zero) if this time zone doesn't observe daylight saving time. **Since:** 1.2 **See Also:** [setDSTSavings(int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__setDSTSavings-int-) [h2]useDaylightTime public boolean useDaylightTime​() Queries if this time zone uses daylight saving time. **Specified by:** [useDaylightTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599#ZH-CN_TOPIC_0000001054238599__useDaylightTime--) in class [TimeZone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599) **Returns:** true if this time zone uses daylight saving time; false otherwise. **See Also:** [TimeZone.inDaylightTime(Date)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599#ZH-CN_TOPIC_0000001054238599__inDaylightTime-java_util_Date-), [Calendar.DST_OFFSET](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__DST_OFFSET) [h2]observesDaylightTime public boolean observesDaylightTime​() Returns true if this SimpleTimeZone observes Daylight Saving Time. This method is equivalent to [useDaylightTime()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/simpletimezone-0000001054238597#ZH-CN_TOPIC_0000001054238597__useDaylightTime--). **Overrides:** [observesDaylightTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599#ZH-CN_TOPIC_0000001054238599__observesDaylightTime--) in class [TimeZone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599) **Returns:** true if this SimpleTimeZone observes Daylight Saving Time; false otherwise. **Since:** 1.7 **See Also:** [TimeZone.useDaylightTime()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599#ZH-CN_TOPIC_0000001054238599__useDaylightTime--), [TimeZone.inDaylightTime(Date)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599#ZH-CN_TOPIC_0000001054238599__inDaylightTime-java_util_Date-), [Calendar.DST_OFFSET](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877#ZH-CN_TOPIC_0000001054439877__DST_OFFSET) [h2]inDaylightTime public boolean inDaylightTime​([Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) date) Queries if the given date is in daylight saving time. **Specified by:** [inDaylightTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599#ZH-CN_TOPIC_0000001054238599__inDaylightTime-java_util_Date-) in class [TimeZone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599) **Parameters:** Parameter Name | Parameter Description  
---|---  
date  |  the given Date.  
**Returns:** true if daylight saving time is in effective at the given date; false otherwise. [h2]clone public [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) clone​() Returns a clone of this SimpleTimeZone instance. **Overrides:** [clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599#ZH-CN_TOPIC_0000001054238599__clone--) in class [TimeZone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599) **Returns:** a clone of this instance. **See Also:** [Cloneable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cloneable-0000001054358421) [h2]hashCode public int hashCode​() Generates the hash code for the SimpleDateFormat object. **Overrides:** [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) **Returns:** the hash code for this object **See Also:** [Object.equals(java.lang.Object)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [System.identityHashCode(java.lang.Object)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/system-0000001054558449#ZH-CN_TOPIC_0000001054558449__identityHashCode-java_lang_Object-) [h2]equals public boolean equals​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) obj) Compares the equality of two SimpleTimeZone objects. **Overrides:** [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) **Parameters:** Parameter Name | Parameter Description  
---|---  
obj  |  The SimpleTimeZone object to be compared with.  
**Returns:** True if the given obj is the same as this SimpleTimeZone object; false otherwise. **See Also:** [Object.hashCode()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [HashMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashmap-0000001054518606) [h2]hasSameRules public boolean hasSameRules​([TimeZone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599) other) Returns true if this zone has the same rules and offset as another zone. **Overrides:** [hasSameRules](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599#ZH-CN_TOPIC_0000001054238599__hasSameRules-java_util_TimeZone-) in class [TimeZone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timezone-0000001054238599) **Parameters:** Parameter Name | Parameter Description  
---|---  
other  |  the TimeZone object to be compared with  
**Returns:** true if the given zone is a SimpleTimeZone and has the same rules and offset as this one **Since:** 1.2 [h2]toString public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) toString​() Returns a string representation of this time zone. **Overrides:** [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) **Returns:** a string representation of this time zone.
