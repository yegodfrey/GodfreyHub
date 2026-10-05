---
name: document/cn/doc-references/overview-0000001054358547
title: Overview
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/overview-0000001054358547
source: portal
---

# Overview  
  
The main API for dates, times, instants, and durations. 

The classes defined here represent the principle date-time concepts, including instants, durations, dates, times, time-zones and periods. They are based on the ISO calendar system, which is the _de facto_ world calendar following the proleptic Gregorian rules. All the classes are immutable and thread-safe. 

Each date time instance is composed of fields that are conveniently made available by the APIs. For lower level access to the fields refer to the java.time.temporal package. Each class includes support for printing and parsing all manner of dates and times. Refer to the java.time.format package for customization options. 

The java.time.chrono package contains the calendar neutral API [ChronoLocalDate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/chronolocaldate-0000001054558573), [ChronoLocalDateTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/chronolocaldatetime-0000001054238571), [ChronoZonedDateTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/chronozoneddatetime-0000001054358560) and [Era](https://developer.harmonyos.com/cn/docs/documentation/doc-references/era-0000001054119901). This is intended for use by applications that need to use localized calendars. It is recommended that applications use the ISO-8601 date and time classes from this package across system boundaries, such as to the database or across the network. The calendar neutral API should be reserved for interactions with users. 

**Dates and Times**

[Instant](https://developer.harmonyos.com/cn/docs/documentation/doc-references/instant-0000001054838522) is essentially a numeric timestamp. The current Instant can be retrieved from a [Clock](https://developer.harmonyos.com/cn/docs/documentation/doc-references/clock-0000001054238567). This is useful for logging and persistence of a point in time and has in the past been associated with storing the result from [System.currentTimeMillis()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/system-0000001054558449#ZH-CN_TOPIC_0000001054558449__currentTimeMillis--). 

[LocalDate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/localdate-0000001054358556) stores a date without a time. This stores a date like '2010-12-03' and could be used to store a birthday. 

[LocalTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/localtime-0000001054119826) stores a time without a date. This stores a time like '11:30' and could be used to store an opening or closing time. 

[LocalDateTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/localdatetime-0000001054119897) stores a date and time. This stores a date-time like '2010-12-03T11:30'. 

[ZonedDateTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/zoneddatetime-0000001054238569) stores a date and time with a time-zone. This is useful if you want to perform accurate calculations of dates and times taking into account the [ZoneId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/zoneid-0000001054678539), such as 'Europe/Paris'. Where possible, it is recommended to use a simpler class without a time-zone. The widespread use of time-zones tends to add considerable complexity to an application. 

**Duration and Period**

Beyond dates and times, the API also allows the storage of periods and durations of time. A [Duration](https://developer.harmonyos.com/cn/docs/documentation/doc-references/duration-0000001054678537) is a simple measure of time along the time-line in nanoseconds. A [Period](https://developer.harmonyos.com/cn/docs/documentation/doc-references/period-0000001054678570) expresses an amount of time in units meaningful to humans, such as years or days. 

**Additional value types**

[Month](https://developer.harmonyos.com/cn/docs/documentation/doc-references/month-0000001054119828) stores a month on its own. This stores a single month-of-year in isolation, such as 'DECEMBER'. 

[DayOfWeek](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dayofweek-0000001054119899) stores a day-of-week on its own. This stores a single day-of-week in isolation, such as 'TUESDAY'. 

[Year](https://developer.harmonyos.com/cn/docs/documentation/doc-references/year-0000001054358549) stores a year on its own. This stores a single year in isolation, such as '2010'. 

[YearMonth](https://developer.harmonyos.com/cn/docs/documentation/doc-references/yearmonth-0000001054558571) stores a year and month without a day or time. This stores a year and month, such as '2010-12' and could be used for a credit card expiry. 

[MonthDay](https://developer.harmonyos.com/cn/docs/documentation/doc-references/monthday-0000001054439855) stores a month and day without a year or time. This stores a month and day-of-month, such as '--12-03' and could be used to store an annual event like a birthday without storing the year. 

[OffsetTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/offsettime-0000001054518582) stores a time and offset from UTC without a date. This stores a date like '11:30+01:00'. The [ZoneOffset](https://developer.harmonyos.com/cn/docs/documentation/doc-references/zoneoffset-0000001054838524) is of the form '+01:00'. 

[OffsetDateTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/offsetdatetime-0000001054199842) stores a date and time and offset from UTC. This stores a date-time like '2010-12-03T11:30+01:00'. This is sometimes found in XML messages and other forms of persistence, but contains less information than a full time-zone. 

**Package specification**

Unless otherwise noted, passing a null argument to a constructor or method in any class or interface in this package will cause a [NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) to be thrown. The Javadoc "@param" definition is used to summarise the null-behavior. The "@throws [NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710)" is not explicitly documented in each method. 

All calculations should check for numeric overflow and throw either an [ArithmeticException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/arithmeticexception-0000001054358429) or a [DateTimeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datetimeexception-0000001054199844). 

**Design notes (non normative)**

The API has been designed to reject null early and to be clear about this behavior. A key exception is any method that takes an object and returns a boolean, for the purpose of checking or validating, will generally return false for null. 

The API is designed to be type-safe where reasonable in the main high-level API. Thus, there are separate classes for the distinct concepts of date, time and date-time, plus variants for offset and time-zone. This can seem like a lot of classes, but most applications can begin with just five date/time types. 

    * [Instant](https://developer.harmonyos.com/cn/docs/documentation/doc-references/instant-0000001054838522) \- a timestamp
    * [LocalDate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/localdate-0000001054358556) \- a date without a time, or any reference to an offset or time-zone
    * [LocalTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/localtime-0000001054119826) \- a time without a date, or any reference to an offset or time-zone
    * [LocalDateTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/localdatetime-0000001054119897) \- combines date and time, but still without any offset or time-zone
    * [ZonedDateTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/zoneddatetime-0000001054238569) \- a "full" date-time with time-zone and resolved offset from UTC/Greenwich

Instant is the closest equivalent class to java.util.Date. ZonedDateTime is the closest equivalent class to java.util.GregorianCalendar. 

Where possible, applications should use LocalDate, LocalTime and LocalDateTime to better model the domain. For example, a birthday should be stored in a code LocalDate. Bear in mind that any use of a [time-zone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/zoneid-0000001054678539), such as 'Europe/Paris', adds considerable complexity to a calculation. Many applications can be written only using LocalDate, LocalTime and Instant, with the time-zone added at the user interface (UI) layer. 

The offset-based date-time types OffsetTime and OffsetDateTime, are intended primarily for use with network protocols and database access. For example, most databases cannot automatically store a time-zone like 'Europe/Paris', but they can store an offset like '+02:00'. 

Classes are also provided for the most important sub-parts of a date, including Month, DayOfWeek, Year, YearMonth and MonthDay. These can be used to model more complex date-time concepts. For example, YearMonth is useful for representing a credit card expiry. 

Note that while there are a large number of classes representing different aspects of dates, there are relatively few dealing with different aspects of time. Following type-safety to its logical conclusion would have resulted in classes for hour-minute, hour-minute-second and hour-minute-second-nanosecond. While logically pure, this was not a practical option as it would have almost tripled the number of classes due to the combinations of date and time. Thus, LocalTime is used for all precisions of time, with zeroes used to imply lower precision. 

Following full type-safety to its ultimate conclusion might also argue for a separate class for each field in date-time, such as a class for HourOfDay and another for DayOfMonth. This approach was tried, but was excessively complicated in the Java language, lacking usability. A similar problem occurs with periods. There is a case for a separate class for each period unit, such as a type for Years and a type for Minutes. However, this yields a lot of classes and a problem of type conversion. Thus, the set of date-time types provided is a compromise between purity and practicality. 

The API has a relatively large surface area in terms of number of methods. This is made manageable through the use of consistent method prefixes. 

    * of - static factory method
    * parse - static factory method focussed on parsing
    * get - gets the value of something
    * is - checks if something is true
    * with - the immutable equivalent of a setter
    * plus - adds an amount to an object
    * minus - subtracts an amount from an object
    * to - converts this object to another type
    * at - combines this object with another, such as date.atTime(time)

Multiple calendar systems is an awkward addition to the design challenges. The first principle is that most users want the standard ISO calendar system. As such, the main classes are ISO-only. The second principle is that most of those that want a non-ISO calendar system want it for user interaction, thus it is a UI localization issue. As such, date and time objects should be held as ISO objects in the data model and persistent storage, only being converted to and from a local calendar for display. The calendar system would be stored separately in the user preferences. 

There are, however, some limited use cases where users believe they need to store and use dates in arbitrary calendar systems throughout the application. This is supported by [ChronoLocalDate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/chronolocaldate-0000001054558573), however it is vital to read all the associated warnings in the Javadoc of that interface before using it. In summary, applications that require general interoperation between multiple calendar systems typically need to be written in a very different way to those only using the ISO calendar, thus most applications should just use ISO and avoid ChronoLocalDate. 

The API is also designed for user extensibility, as there are many ways of calculating time. The [field](https://developer.harmonyos.com/cn/docs/documentation/doc-references/temporalfield-0000001054439865) and [unit](https://developer.harmonyos.com/cn/docs/documentation/doc-references/temporalunit-0000001054518592) API, accessed via [TemporalAccessor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/temporalaccessor-0000001054358566) and [Temporal](https://developer.harmonyos.com/cn/docs/documentation/doc-references/temporal-0000001054838532) provide considerable flexibility to applications. In addition, the [TemporalQuery](https://developer.harmonyos.com/cn/docs/documentation/doc-references/temporalquery-0000001054199852) and [TemporalAdjuster](https://developer.harmonyos.com/cn/docs/documentation/doc-references/temporaladjuster-0000001054119907) interfaces provide day-to-day power, allowing code to read close to business requirements: 
    
    LocalDate customerBirthday = customer.loadBirthdayFromDatabase();
       LocalDate today = LocalDate.now();
       if (customerBirthday.equals(today)) {
         LocalDate specialOfferExpiryDate = today.plusWeeks(2).with(next(FRIDAY));
         customer.sendBirthdaySpecialOffer(specialOfferExpiryDate);
       }
    
     

**Since:**

JDK1.8

#### Class Summary

Class | Description  
---|---  
[Clock](https://developer.harmonyos.com/cn/docs/documentation/doc-references/clock-0000001054238567) | A clock providing access to the current instant, date and time using a time-zone.  
[Duration](https://developer.harmonyos.com/cn/docs/documentation/doc-references/duration-0000001054678537) | A time-based amount of time, such as '34.5 seconds'.  
[Instant](https://developer.harmonyos.com/cn/docs/documentation/doc-references/instant-0000001054838522) | An instantaneous point on the time-line.  
[LocalDate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/localdate-0000001054358556) | A date without a time-zone in the ISO-8601 calendar system, such as 2007-12-03.  
[LocalDateTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/localdatetime-0000001054119897) | A date-time without a time-zone in the ISO-8601 calendar system, such as 2007-12-03T10:15:30.  
[LocalTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/localtime-0000001054119826) | A time without a time-zone in the ISO-8601 calendar system, such as 10:15:30.  
[MonthDay](https://developer.harmonyos.com/cn/docs/documentation/doc-references/monthday-0000001054439855) | A month-day in the ISO-8601 calendar system, such as --12-03.  
[OffsetDateTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/offsetdatetime-0000001054199842) | A date-time with an offset from UTC/Greenwich in the ISO-8601 calendar system, such as 2007-12-03T10:15:30+01:00.  
[OffsetTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/offsettime-0000001054518582) | A time with an offset from UTC/Greenwich in the ISO-8601 calendar system, such as 10:15:30+01:00.  
[Period](https://developer.harmonyos.com/cn/docs/documentation/doc-references/period-0000001054678570) | A date-based amount of time in the ISO-8601 calendar system, such as '2 years, 3 months and 4 days'.  
[Year](https://developer.harmonyos.com/cn/docs/documentation/doc-references/year-0000001054358549) | A year in the ISO-8601 calendar system, such as 2007.  
[YearMonth](https://developer.harmonyos.com/cn/docs/documentation/doc-references/yearmonth-0000001054558571) | A year-month in the ISO-8601 calendar system, such as 2007-12.  
[ZonedDateTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/zoneddatetime-0000001054238569) | A date-time with a time-zone in the ISO-8601 calendar system, such as 2007-12-03T10:15:30+01:00 Europe/Paris.  
[ZoneId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/zoneid-0000001054678539) | A time-zone ID, such as Europe/Paris.  
[ZoneOffset](https://developer.harmonyos.com/cn/docs/documentation/doc-references/zoneoffset-0000001054838524) | A time-zone offset from Greenwich/UTC, such as +02:00.  
  
#### Enum Summary

Enum | Description  
---|---  
[DayOfWeek](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dayofweek-0000001054119899) | A day-of-week, such as 'Tuesday'.  
[Month](https://developer.harmonyos.com/cn/docs/documentation/doc-references/month-0000001054119828) | A month-of-year, such as 'July'.  
  
#### Exception Summary

Exception | Description  
---|---  
[DateTimeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datetimeexception-0000001054199844) | Exception used to indicate a problem while calculating a date-time.
