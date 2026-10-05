---
name: document/cn/doc-references/events-0000001061156888
title: Events
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/events-0000001061156888
source: portal
---

# Events

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[ohos.sysappcomponents.calendar.entity.CalendarEntity](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendarentity-0000001060411201) |---|---ohos.sysappcomponents.calendar.entity.Events
    
    public class Events
    extends [CalendarEntity](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendarentity-0000001060411201)
    implements [BaseColumns](https://developer.harmonyos.com/cn/docs/documentation/doc-references/basecolumns-0000001060996908), [SyncColumns](https://developer.harmonyos.com/cn/docs/documentation/doc-references/synccolumns-0000001060519211), [EventsColumns](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106)  
  
---  
Describes a calendar event entity, including the column name of the database table.

**Since:**

3

#### Field Summary

Fields inherited from interface ohos.sysappcomponents.calendar.column.[AccountSyncColumns](https://developer.harmonyos.com/cn/docs/documentation/doc-references/accountsynccolumns-0000001061156886)  
---  
[ACC_SYNC1](https://developer.harmonyos.com/cn/docs/documentation/doc-references/accountsynccolumns-0000001061156886#ZH-CN_TOPIC_0000001061156886__ACC_SYNC1), [ACC_SYNC10](https://developer.harmonyos.com/cn/docs/documentation/doc-references/accountsynccolumns-0000001061156886#ZH-CN_TOPIC_0000001061156886__ACC_SYNC10), [ACC_SYNC2](https://developer.harmonyos.com/cn/docs/documentation/doc-references/accountsynccolumns-0000001061156886#ZH-CN_TOPIC_0000001061156886__ACC_SYNC2), [ACC_SYNC3](https://developer.harmonyos.com/cn/docs/documentation/doc-references/accountsynccolumns-0000001061156886#ZH-CN_TOPIC_0000001061156886__ACC_SYNC3), [ACC_SYNC4](https://developer.harmonyos.com/cn/docs/documentation/doc-references/accountsynccolumns-0000001061156886#ZH-CN_TOPIC_0000001061156886__ACC_SYNC4), [ACC_SYNC5](https://developer.harmonyos.com/cn/docs/documentation/doc-references/accountsynccolumns-0000001061156886#ZH-CN_TOPIC_0000001061156886__ACC_SYNC5), [ACC_SYNC6](https://developer.harmonyos.com/cn/docs/documentation/doc-references/accountsynccolumns-0000001061156886#ZH-CN_TOPIC_0000001061156886__ACC_SYNC6), [ACC_SYNC7](https://developer.harmonyos.com/cn/docs/documentation/doc-references/accountsynccolumns-0000001061156886#ZH-CN_TOPIC_0000001061156886__ACC_SYNC7), [ACC_SYNC8](https://developer.harmonyos.com/cn/docs/documentation/doc-references/accountsynccolumns-0000001061156886#ZH-CN_TOPIC_0000001061156886__ACC_SYNC8), [ACC_SYNC9](https://developer.harmonyos.com/cn/docs/documentation/doc-references/accountsynccolumns-0000001061156886#ZH-CN_TOPIC_0000001061156886__ACC_SYNC9)  
  
Fields inherited from interface ohos.sysappcomponents.calendar.column.[BaseColumns](https://developer.harmonyos.com/cn/docs/documentation/doc-references/basecolumns-0000001060996908)  
---  
[COUNT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/basecolumns-0000001060996908#ZH-CN_TOPIC_0000001060996908__COUNT), [ID](https://developer.harmonyos.com/cn/docs/documentation/doc-references/basecolumns-0000001060996908#ZH-CN_TOPIC_0000001060996908__ID)  
  
Fields inherited from class ohos.sysappcomponents.calendar.entity.[CalendarEntity](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendarentity-0000001060411201)  
---  
[ACC_TYPE_LOCAL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendarentity-0000001060411201#ZH-CN_TOPIC_0000001060411201__ACC_TYPE_LOCAL), [IS_SYNC_ADAPTER](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendarentity-0000001060411201#ZH-CN_TOPIC_0000001060411201__IS_SYNC_ADAPTER)  
  
Fields inherited from interface ohos.sysappcomponents.calendar.column.[EventsColumns](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106)  
---  
[ACC_ID](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__ACC_ID), [AVAILABLE_STATUS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__AVAILABLE_STATUS), [DESCRIPTION](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__DESCRIPTION), [DURATION](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__DURATION), [END_TIMEZONE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__END_TIMEZONE), [EVENT_END_TIME](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__EVENT_END_TIME), [EVENT_POSITION](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__EVENT_POSITION), [EVENT_START_TIME](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__EVENT_START_TIME), [EVENT_STATUS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__EVENT_STATUS), [EVENT_STATUS_CANCELED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__EVENT_STATUS_CANCELED), [EVENT_STATUS_CONFIRMED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__EVENT_STATUS_CONFIRMED), [EVENT_STATUS_TENTATIVE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__EVENT_STATUS_TENTATIVE), [EXTEND_DATA1](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__EXTEND_DATA1), [EXTEND_DATA10](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__EXTEND_DATA10), [EXTEND_DATA2](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__EXTEND_DATA2), [EXTEND_DATA3](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__EXTEND_DATA3), [EXTEND_DATA4](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__EXTEND_DATA4), [EXTEND_DATA5](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__EXTEND_DATA5), [EXTEND_DATA6](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__EXTEND_DATA6), [EXTEND_DATA7](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__EXTEND_DATA7), [EXTEND_DATA8](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__EXTEND_DATA8), [EXTEND_DATA9](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__EXTEND_DATA9), [HAS_ALARM](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__HAS_ALARM), [HAS_ATTENDEE_INFO](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__HAS_ATTENDEE_INFO), [HAS_EXTENDED_ATTRIBUTES](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__HAS_EXTENDED_ATTRIBUTES), [INITIAL_ID](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__INITIAL_ID), [INITIAL_SYNC_ID](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__INITIAL_SYNC_ID), [IS_WHOLE_DAY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__IS_WHOLE_DAY), [ORGANIZER_EMAIL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__ORGANIZER_EMAIL), [OWNER_ATTENDEE_STATUS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__OWNER_ATTENDEE_STATUS), [PERMISSION_CONFIDENTIAL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__PERMISSION_CONFIDENTIAL), [PERMISSION_DEFAULT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__PERMISSION_DEFAULT), [PERMISSION_LEVEL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__PERMISSION_LEVEL), [PERMISSION_PRIVATE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__PERMISSION_PRIVATE), [PERMISSION_PUBLIC](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__PERMISSION_PUBLIC), [RECUR_DATE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__RECUR_DATE), [RECUR_RULE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__RECUR_RULE), [START_TIMEZONE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__START_TIMEZONE), [STATUS_BUSY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__STATUS_BUSY), [STATUS_FREE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__STATUS_FREE), [STATUS_TENTATIVE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__STATUS_TENTATIVE), [TITLE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eventscolumns-0000001060519106#ZH-CN_TOPIC_0000001060519106__TITLE)  
  
Fields inherited from interface ohos.sysappcomponents.calendar.column.[SyncColumns](https://developer.harmonyos.com/cn/docs/documentation/doc-references/synccolumns-0000001060519211)  
---  
[ACC_NAME](https://developer.harmonyos.com/cn/docs/documentation/doc-references/synccolumns-0000001060519211#ZH-CN_TOPIC_0000001060519211__ACC_NAME), [ACC_TYPE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/synccolumns-0000001060519211#ZH-CN_TOPIC_0000001060519211__ACC_TYPE), [CALLING_BUNDLE_NAME](https://developer.harmonyos.com/cn/docs/documentation/doc-references/synccolumns-0000001060519211#ZH-CN_TOPIC_0000001060519211__CALLING_BUNDLE_NAME), [DELETED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/synccolumns-0000001060519211#ZH-CN_TOPIC_0000001060519211__DELETED), [DIRTY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/synccolumns-0000001060519211#ZH-CN_TOPIC_0000001060519211__DIRTY), [SYNC_ID](https://developer.harmonyos.com/cn/docs/documentation/doc-references/synccolumns-0000001060519211#ZH-CN_TOPIC_0000001060519211__SYNC_ID)  
  
#### Constructor Summary

Constructor | Description  
---|---  
[Events](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__Events--)​() |     
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
int | [getAccId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__getAccId--)​() |  Obtains the account ID.   
int | [getAvailableStatus](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__getAvailableStatus--)​() |  Obtains the event status.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getDescription](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__getDescription--)​() |  Obtains the event description.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getDuration](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__getDuration--)​() |  Obtains the event duration.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getEndTimezone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__getEndTimezone--)​() |  Obtains the end time zone of the event.   
int | [getEventColour](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__getEventColour--)​() |  Obtains the event color.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getEventColourIndex](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__getEventColourIndex--)​() |  Obtains the index of the event color.   
long | [getEventEndTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__getEventEndTime--)​() |  Obtains the end time of the event.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getEventPosition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__getEventPosition--)​() |  Obtains the event position.   
long | [getEventStartTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__getEventStartTime--)​() |  Obtains the start time of the event.   
int | [getEventStatus](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__getEventStatus--)​() |  Obtains the event status.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getInitialId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__getInitialId--)​() |  Obtains the initial ID.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getRecurDate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__getRecurDate--)​() |  Obtains the interval at which the event repeats.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getRecurRule](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__getRecurRule--)​() |  Obtains the recurrence rule.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getStartTimezone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__getStartTimezone--)​() |  Obtains the start time zone of the event.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getSyncId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__getSyncId--)​() |  Obtains the synchronization ID.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getTitle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__getTitle--)​() |  Obtains the event title.   
boolean | [hasAlarm](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__hasAlarm--)​() |  Checks whether the alarm clock reminder is enabled.   
boolean | [hasAttendeeInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__hasAttendeeInfo--)​() |  Checks whether participant information is included.   
boolean | [isWholeDay](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__isWholeDay--)​() |  Checks whether this event is a whole-day event.   
void | [setAccId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__setAccId-int-)​(int accId) |  Sets the account ID.   
void | [setAlarm](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__setAlarm-boolean-)​(boolean hasAlarm) |  Enables or disables the alarm clock reminder.   
void | [setAttendeeInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__setAttendeeInfo-boolean-)​(boolean hasAttendeeInfo) |  Sets whether to include participant information.   
void | [setAvailableStatus](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__setAvailableStatus-int-)​(int availableStatus) |  Sets the event status.   
void | [setDescription](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__setDescription-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) description) |  Sets the event description.   
void | [setDuration](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__setDuration-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) duration) |  Sets the event duration.   
void | [setEndTimezone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__setEndTimezone-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) endTimezone) |  Sets the end time zone of the event.   
void | [setEventColour](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__setEventColour-int-)​(int eventColour) |  Sets the event color.   
void | [setEventColourIndex](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__setEventColourIndex-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) eventColourIndex) |  Sets the index of the event color.   
void | [setEventEndTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__setEventEndTime-long-)​(long eventEndTime) |  Sets the end time of the event.   
void | [setEventPosition](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__setEventPosition-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) eventPosition) |  Sets the event position.   
void | [setEventStartTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__setEventStartTime-long-)​(long eventStartTime) |  Sets the start time of the event.   
void | [setEventStatus](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__setEventStatus-int-)​(int eventStatus) |  Sets the event status.   
void | [setInitialId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__setInitialId-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) initialId) |  Sets the initial ID.   
void | [setRecurDate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__setRecurDate-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) recurDate) |  Sets the interval at which the event repeats.   
void | [setRecurRule](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__setRecurRule-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) recurRule) |  Sets the recurrence rule.   
void | [setStartTimezone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__setStartTimezone-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) startTimezone) |  Sets the start time zone of the event.   
void | [setSyncId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__setSyncId-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) syncId) |  Sets the synchronization ID.   
void | [setTitle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__setTitle-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) title) |  Sets the event title.   
void | [setWholeDay](https://developer.harmonyos.com/cn/docs/documentation/doc-references/events-0000001061156888#ZH-CN_TOPIC_0000001061156888__setWholeDay-boolean-)​(boolean wholeDay) |  Sets this event as a whole-day event.   
  
Methods inherited from class ohos.sysappcomponents.calendar.entity.[CalendarEntity](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendarentity-0000001060411201)  
---  
[getId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendarentity-0000001060411201#ZH-CN_TOPIC_0000001060411201__getId--), [setId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendarentity-0000001060411201#ZH-CN_TOPIC_0000001060411201__setId-int-)  
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]Events

public Events​()

#### Method Detail

#### [h2]getSyncId

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getSyncId​()

Obtains the synchronization ID. 

**Returns:**

Returns the synchronization ID.

**Since:**

3

#### [h2]setSyncId

public void setSyncId​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) syncId)

Sets the synchronization ID. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
syncId  |  Indicates the synchronization ID to set.  
  
**Since:**

3

#### [h2]getAccId

public int getAccId​()

Obtains the account ID. 

**Returns:**

Returns the account ID.

**Since:**

3

#### [h2]setAccId

public void setAccId​(int accId)

Sets the account ID. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
accId  |  Indicates the account ID to set.  
  
**Since:**

3

#### [h2]getTitle

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getTitle​()

Obtains the event title. 

**Returns:**

Returns the title.

**Since:**

3

#### [h2]setTitle

public void setTitle​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) title)

Sets the event title. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
title  |  Indicates the title to set.  
  
**Since:**

3

#### [h2]getDescription

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getDescription​()

Obtains the event description. 

**Returns:**

Returns the description.

**Since:**

3

#### [h2]setDescription

public void setDescription​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) description)

Sets the event description. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
description  |  Indicates the description to set.  
  
**Since:**

3

#### [h2]getEventPosition

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getEventPosition​()

Obtains the event position. 

**Returns:**

Returns the position.

**Since:**

3

#### [h2]setEventPosition

public void setEventPosition​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) eventPosition)

Sets the event position. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
eventPosition  |  Indicates the position to set.  
  
**Since:**

3

#### [h2]getEventColour

public int getEventColour​()

Obtains the event color. 

**Returns:**

Returns the color.

**Since:**

3

#### [h2]setEventColour

public void setEventColour​(int eventColour)

Sets the event color. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
eventColour  |  Indicates the color to set.  
  
**Since:**

3

#### [h2]getEventColourIndex

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getEventColourIndex​()

Obtains the index of the event color. 

**Returns:**

Returns the index.

**Since:**

3

#### [h2]setEventColourIndex

public void setEventColourIndex​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) eventColourIndex)

Sets the index of the event color. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
eventColourIndex  |  Indicates the index of the event color to set.  
  
**Since:**

3

#### [h2]getEventStatus

public int getEventStatus​()

Obtains the event status. 

**Returns:**

Returns the status.

**Since:**

3

#### [h2]setEventStatus

public void setEventStatus​(int eventStatus)

Sets the event status. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
eventStatus  |  Indicates the status to set.  
  
**Since:**

3

#### [h2]getEventStartTime

public long getEventStartTime​()

Obtains the start time of the event. 

**Returns:**

Returns the start time.

**Since:**

3

#### [h2]setEventStartTime

public void setEventStartTime​(long eventStartTime)

Sets the start time of the event. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
eventStartTime  |  Indicates the start time to set.  
  
**Since:**

3

#### [h2]getEventEndTime

public long getEventEndTime​()

Obtains the end time of the event. 

**Returns:**

Returns the end time.

**Since:**

3

#### [h2]setEventEndTime

public void setEventEndTime​(long eventEndTime)

Sets the end time of the event. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
eventEndTime  |  Indicates the end time to set.  
  
**Since:**

3

#### [h2]getDuration

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getDuration​()

Obtains the event duration. 

**Returns:**

Returns the duration.

**Since:**

3

#### [h2]setDuration

public void setDuration​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) duration)

Sets the event duration. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
duration  |  Indicates the duration to set.  
  
**Since:**

3

#### [h2]getStartTimezone

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getStartTimezone​()

Obtains the start time zone of the event. 

**Returns:**

Returns the start time zone.

**Since:**

3

#### [h2]setStartTimezone

public void setStartTimezone​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) startTimezone)

Sets the start time zone of the event. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
startTimezone  |  Indicates the start time zone to set.  
  
**Since:**

3

#### [h2]getEndTimezone

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getEndTimezone​()

Obtains the end time zone of the event. 

**Returns:**

Returns the end time zone.

**Since:**

3

#### [h2]setEndTimezone

public void setEndTimezone​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) endTimezone)

Sets the end time zone of the event. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
endTimezone  |  Indicates the end time zone to set.  
  
**Since:**

3

#### [h2]isWholeDay

public boolean isWholeDay​()

Checks whether this event is a whole-day event. 

**Returns:**

Returns true if the event is a whole-day event; returns false otherwise.

**Since:**

3

#### [h2]setWholeDay

public void setWholeDay​(boolean wholeDay)

Sets this event as a whole-day event. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
wholeDay  |  Specifies whether to set the event as a whole-day event. The value true means to set the event as a whole-day event, and false means the opposite.  
  
**Since:**

3

#### [h2]getAvailableStatus

public int getAvailableStatus​()

Obtains the event status. 

**Returns:**

Returns the status.

**Since:**

3

#### [h2]setAvailableStatus

public void setAvailableStatus​(int availableStatus)

Sets the event status. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
availableStatus  |  Indicates the status to set.  
  
**Since:**

3

#### [h2]hasAlarm

public boolean hasAlarm​()

Checks whether the alarm clock reminder is enabled. 

**Returns:**

Returns true if the alarm clock reminder is enabled; returns false otherwise.

**Since:**

3

#### [h2]setAlarm

public void setAlarm​(boolean hasAlarm)

Enables or disables the alarm clock reminder. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
hasAlarm  |  Specifies whether to enable the alarm clock reminder. The value true means to enable the alarm clock reminder, and false means the opposite.  
  
**Since:**

3

#### [h2]getRecurRule

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getRecurRule​()

Obtains the recurrence rule. 

**Returns:**

Returns the recurrence rule.

**Since:**

3

#### [h2]setRecurRule

public void setRecurRule​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) recurRule)

Sets the recurrence rule. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
recurRule  |  Indicates the recurrence rule to set.  
  
**Since:**

3

#### [h2]getRecurDate

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getRecurDate​()

Obtains the interval at which the event repeats. 

**Returns:**

Returns the interval.

**Since:**

3

#### [h2]setRecurDate

public void setRecurDate​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) recurDate)

Sets the interval at which the event repeats. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
recurDate  |  Indicates the interval to set.  
  
**Since:**

3

#### [h2]getInitialId

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getInitialId​()

Obtains the initial ID. 

**Returns:**

Returns the initial ID.

**Since:**

3

#### [h2]setInitialId

public void setInitialId​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) initialId)

Sets the initial ID. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
initialId  |  Indicates the initial ID to set.  
  
**Since:**

3

#### [h2]hasAttendeeInfo

public boolean hasAttendeeInfo​()

Checks whether participant information is included. 

**Returns:**

Returns true if the participant information is included; returns false otherwise.

**Since:**

3

#### [h2]setAttendeeInfo

public void setAttendeeInfo​(boolean hasAttendeeInfo)

Sets whether to include participant information. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
hasAttendeeInfo  |  Specifies whether to include participant information. The value true means to include the participant information, and false means the opposite.  
  
**Since:**

3
