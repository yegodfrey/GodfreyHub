---
name: document/cn/doc-references/rdbpredicates-0000001054120074
title: RdbPredicates
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/rdbpredicates-0000001054120074
source: portal
---

# RdbPredicates

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[ohos.data.rdb.AbsRdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/absrdbpredicates-0000001054238815) |---|---ohos.data.rdb.RdbPredicates
    
    public class RdbPredicates
    extends [AbsRdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/absrdbpredicates-0000001054238815)  
  
---  
Represents predicates of the relational database (RDB). 

This class determines whether the value of conditional expressions in the RDB is true or false.

**Since:**

1

#### Constructor Summary

Constructor | Description  
---|---  
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__RdbPredicates-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) tableName) |  A parameterized constructor used to create an [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) instance for searching RDB objects.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [and](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__and--)​() |  Adds an and condition to the predicate.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [beginsWith](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__beginsWith-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value) |  Configures the predicates to match the field whose data type is String and value starts with a specified string.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [beginWrap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__beginWrap--)​() |  Adds a left parenthesis to the predicate.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [between](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__between-java_lang_String-double-double-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double low, double high) |  Configures the predicates to match the specified field whose data type is double and value is within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [between](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__between-java_lang_String-float-float-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float low, float high) |  Configures the predicates to match the specified field whose data type is float and value is within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [between](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__between-java_lang_String-int-int-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int low, int high) |  Configures the predicates to match the specified field whose data type is int and value is within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [between](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__between-java_lang_String-long-long-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long low, long high) |  Configures the predicates to match the specified field whose data type is long and value is within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [between](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__between-java_lang_String-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) low, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) high) |  Configures the predicates to match the specified field whose data type is [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) and value is within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [between](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__between-java_lang_String-java_sql_Time-java_sql_Time-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) low, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) high) |  Configures the predicates to match the specified field whose data type is [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) and value is within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [between](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__between-java_lang_String-java_sql_Timestamp-java_sql_Timestamp-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) low, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) high) |  Configures the predicates to match the specified field whose data type is [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) and value is within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [between](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__between-java_lang_String-java_util_Calendar-java_util_Calendar-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) low, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) high) |  Configures the predicates to match the specified field whose data type is [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) and value is within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [between](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__between-java_lang_String-java_util_Date-java_util_Date-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) low, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) high) |  Configures the predicates to match the specified field whose data type is [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) and value is within a given range.   
void | [clear](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__clear--)​() |  Clears the search conditions of [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074).   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [contains](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__contains-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value) |  Configures the predicates to match the field whose data type is String and value contains a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [crossJoin](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__crossJoin-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) tableName) |  Adds a cross join condition to a SQL statement.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [distinct](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__distinct--)​() |  Configures the predicates to filter out duplicate records and retain only one of them.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [endsWith](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__endsWith-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value) |  Configures the predicates to match the field whose data type is String and value ends with a specified string.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [endWrap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__endWrap--)​() |  Adds a right parenthesis to the predicate.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [equalTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__equalTo-java_lang_String-boolean-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, boolean value) |  Configures the predicates to match the field whose data type is boolean and value is equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [equalTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__equalTo-java_lang_String-byte-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, byte value) |  Configures the predicates to match the field whose data type is byte and value is equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [equalTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__equalTo-java_lang_String-double-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double value) |  Configures the predicates to match the field whose data type is double and value is equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [equalTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__equalTo-java_lang_String-float-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float value) |  Configures the predicates to match the field whose data type is float and value is equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [equalTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__equalTo-java_lang_String-int-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int value) |  Configures the predicates to match the field whose data type is int and value is equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [equalTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__equalTo-java_lang_String-long-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long value) |  Configures the predicates to match the field whose data type is long and value is equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [equalTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__equalTo-java_lang_String-short-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, short value) |  Configures the predicates to match the field whose data type is short and value is equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [equalTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__equalTo-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value) |  Configures the predicates to match the field whose data type is [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) and value is equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [equalTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__equalTo-java_lang_String-java_sql_Time-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) value) |  Configures the predicates to match the field whose data type is [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) and value is equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [equalTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__equalTo-java_lang_String-java_sql_Timestamp-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) value) |  Configures the predicates to match the field whose data type is [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) and value is equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [equalTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__equalTo-java_lang_String-java_util_Calendar-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) value) |  Configures the predicates to match the field whose data type is [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) and value is equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [equalTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__equalTo-java_lang_String-java_util_Date-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) value) |  Configures the predicates to match the field whose data type is [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) and value is equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [glob](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__glob-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value) |     
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThan-java_lang_String-double-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double value) |  Configures the predicates to match the field whose data type is double and value is greater than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThan-java_lang_String-float-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float value) |  Configures the predicates to match the field whose data type is float and value is greater than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThan-java_lang_String-int-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int value) |  Configures the predicates to match the field whose data type is int and value is greater than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThan-java_lang_String-long-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long value) |  Configures the predicates to match the field whose data type is long and value is greater than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThan-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value) |  Configures the predicates to match the field whose data type is [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) and value is greater than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThan-java_lang_String-java_sql_Time-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) value) |  Configures the predicates to match the field whose data type is [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) and value is greater than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThan-java_lang_String-java_sql_Timestamp-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) value) |  Configures the predicates to match the field whose data type is [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) and value is greater than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThan-java_lang_String-java_util_Calendar-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) value) |  Configures the predicates to match the field whose data type is [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) and value is greater than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThan-java_lang_String-java_util_Date-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) value) |  Configures the predicates to match the field whose data type is [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) and value is greater than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThanOrEqualTo-java_lang_String-double-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double value) |  Configures the predicates to match the field whose data type is double and value is greater than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThanOrEqualTo-java_lang_String-float-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float value) |  Configures the predicates to match the field whose data type is float and value is greater than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThanOrEqualTo-java_lang_String-int-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int value) |  Configures the predicates to match the field whose data type is int and value is greater than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThanOrEqualTo-java_lang_String-long-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long value) |  Configures the predicates to match the field whose data type is long and value is greater than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThanOrEqualTo-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value) |  Configures the predicates to match the field whose data type is [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) and value is greater than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThanOrEqualTo-java_lang_String-java_sql_Time-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) value) |  Configures the predicates to match the field whose data type is [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) and value is greater than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThanOrEqualTo-java_lang_String-java_sql_Timestamp-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) value) |  Configures the predicates to match the field whose data type is [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) and value is greater than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThanOrEqualTo-java_lang_String-java_util_Calendar-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) value) |  Configures the predicates to match the field whose data type is [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) and value is greater than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThanOrEqualTo-java_lang_String-java_util_Date-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) value) |  Configures the predicates to match the field whose data type is [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) and value is greater than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [groupBy](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__groupBy-java_lang_String:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] fields) |  Configures RdbPredicates to group query results by specified columns.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [in](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__in-java_lang_String-double:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double[] values) |  Configures RdbPredicates to match the specified field whose data type is double array and values are within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [in](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__in-java_lang_String-float:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float[] values) |  Configures RdbPredicates to match the specified field whose data type is float array and values are within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [in](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__in-java_lang_String-int:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int[] values) |  Configures RdbPredicates to match the specified field whose data type is int array and values are within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [in](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__in-java_lang_String-long:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long[] values) |  Configures RdbPredicates to match the specified field whose data type is long array and values are within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [in](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__in-java_lang_String-java_lang_String:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] values) |  Configures RdbPredicates to match the specified field whose data type is String array and values are within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [in](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__in-java_lang_String-java_sql_Time:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558)[] values) |  Configures RdbPredicates to match the specified field whose data type is Time array and values are within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [in](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__in-java_lang_String-java_sql_Timestamp:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537)[] values) |  Configures RdbPredicates to match the specified field whose data type is Timestamp array and values are within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [in](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__in-java_lang_String-java_util_Calendar:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877)[] values) |  Configures RdbPredicates to match the specified field whose data type is Calendar array and values are within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [in](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__in-java_lang_String-java_util_Date:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571)[] values) |  Configures RdbPredicates to match the specified field whose data type is Date array and values are within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [indexedBy](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__indexedBy-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) indexName) |  Configures RdbPredicates to specify the index column.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [innerJoin](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__innerJoin-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) tableName) |  Adds an inner join condition to a SQL statement.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [isNotNull](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__isNotNull-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field) |  Configures the predicates to match the specified fields whose value is not null.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [isNull](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__isNull-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field) |  Configures the predicates to match the fields whose value is null.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [leftOuterJoin](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__leftOuterJoin-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) tableName) |  Adds a left outer join condition to a SQL statement.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThan-java_lang_String-double-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double value) |  Configures the predicates to match the field whose data type is double and value is less than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThan-java_lang_String-float-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float value) |  Configures the predicates to match the field whose data type is float and value is less than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThan-java_lang_String-int-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int value) |  Configures the predicates to match the field whose data type is int and value is less than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThan-java_lang_String-long-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long value) |  Configures the predicates to match the field whose data type is long and value is less than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThan-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value) |  Configures the predicates to match the field whose data type is [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) and value is less than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThan-java_lang_String-java_sql_Time-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) value) |  Configures the predicates to match the field whose data type is [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) and value is less than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThan-java_lang_String-java_sql_Timestamp-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) value) |  Configures the predicates to match the field whose data type is [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) and value is less than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThan-java_lang_String-java_util_Calendar-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) value) |  Configures the predicates to match the field whose data type is [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) and value is less than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThan-java_lang_String-java_util_Date-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) value) |  Configures the predicates to match the field whose data type is [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) and value is less than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThanOrEqualTo-java_lang_String-double-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double value) |  Configures the predicates to match the field whose data type is double and value is less than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThanOrEqualTo-java_lang_String-float-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float value) |  Configures the predicates to match the field whose data type is float and value is less than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThanOrEqualTo-java_lang_String-int-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int value) |  Configures the predicates to match the field whose data type is int and value is less than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThanOrEqualTo-java_lang_String-long-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long value) |  Configures the predicates to match the field whose data type is long and value is less than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThanOrEqualTo-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value) |  Configures the predicates to match the field whose data type is [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) and value is less than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThanOrEqualTo-java_lang_String-java_sql_Time-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) value) |  Configures the predicates to match the field whose data type is [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) and value is less than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThanOrEqualTo-java_lang_String-java_sql_Timestamp-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) value) |  Configures the predicates to match the field whose data type is [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) and value is less than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThanOrEqualTo-java_lang_String-java_util_Calendar-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) value) |  Configures the predicates to match the field whose data type is [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) and value is less than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThanOrEqualTo-java_lang_String-java_util_Date-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) value) |  Configures the predicates to match the field whose data type is [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) and value is less than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [like](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__like-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value) |  Configures the predicates to match the fields whose data type is String and value is similar to a specified string.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [limit](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__limit-int-)​(int value) |  Sets the maximum number of data records in the column that match the specified predicates.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notBetween](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notBetween-java_lang_String-double-double-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double low, double high) |  Configures RdbPredicates to match the specified field whose data type is double and value is out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notBetween](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notBetween-java_lang_String-float-float-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float low, float high) |  Configures RdbPredicates to match the specified field whose data type is float and value is out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notBetween](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notBetween-java_lang_String-int-int-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int low, int high) |  Configures RdbPredicates to match the specified field whose data type is int and value is out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notBetween](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notBetween-java_lang_String-long-long-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long low, long high) |  Configures RdbPredicates to match the specified field whose data type is long and value is out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notBetween](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notBetween-java_lang_String-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) low, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) high) |     
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notBetween](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notBetween-java_lang_String-java_sql_Time-java_sql_Time-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) low, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) high) |  Configures RdbPredicates to match the specified field whose data type is Time and value is out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notBetween](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notBetween-java_lang_String-java_sql_Timestamp-java_sql_Timestamp-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) low, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) high) |  Configures RdbPredicates to match the specified field whose data type is Timestamp and value is out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notBetween](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notBetween-java_lang_String-java_util_Calendar-java_util_Calendar-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) low, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) high) |  Configures RdbPredicates to match the specified field whose data type is Calendar and value is out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notBetween](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notBetween-java_lang_String-java_util_Date-java_util_Date-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) low, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) high) |  Configures RdbPredicates to match the specified field whose data type is Date and value is out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notEqualTo-java_lang_String-boolean-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, boolean value) |  Configures the predicates to match the field whose data type is boolean and value is unequal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notEqualTo-java_lang_String-byte-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, byte value) |  Configures the predicates to match the field whose data type is byte and value is unequal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notEqualTo-java_lang_String-double-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double value) |  Configures the predicates to match the field whose data type is double and value is unequal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notEqualTo-java_lang_String-float-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float value) |  Configures the predicates to match the field whose data type is float and value is unequal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notEqualTo-java_lang_String-int-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int value) |  Configures the predicates to match the field whose data type is int and value is unequal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notEqualTo-java_lang_String-long-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long value) |  Configures the predicates to match the field whose data type is long and value is unequal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notEqualTo-java_lang_String-short-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, short value) |  Configures the predicates to match the field whose data type is short and value is unequal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notEqualTo-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value) |  Configures the predicates to match the field whose data type is [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) and value is unequal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notEqualTo-java_lang_String-java_sql_Time-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) value) |  Configures the predicates to match the field whose data type is [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) and value is unequal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notEqualTo-java_lang_String-java_sql_Timestamp-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) value) |  Configures the predicates to match the field whose data type is [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) and value is unequal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notEqualTo-java_lang_String-java_util_Calendar-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) value) |  Configures the predicates to match the field whose data type is [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) and value is unequal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notEqualTo-java_lang_String-java_util_Date-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) value) |  Configures the predicates to match the field whose data type is [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) and value is unequal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notIn](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notIn-java_lang_String-double:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double[] values) |  Configures RdbPredicates to match the specified field whose data type is double array and values are out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notIn](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notIn-java_lang_String-float:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float[] values) |  Configures RdbPredicates to match the specified field whose data type is float array and values are out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notIn](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notIn-java_lang_String-int:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int[] values) |  Configures RdbPredicates to match the specified field whose data type is int array and values are out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notIn](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notIn-java_lang_String-long:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long[] values) |  Configures RdbPredicates to match the specified field whose data type is long array and values are out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notIn](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notIn-java_lang_String-java_lang_String:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] values) |  Configures RdbPredicates to match the specified field whose data type is String array and values are out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notIn](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notIn-java_lang_String-java_sql_Time:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558)[] values) |  Configures RdbPredicates to match the specified field whose data type is Time array and values are out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notIn](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notIn-java_lang_String-java_sql_Timestamp:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537)[] values) |  Configures RdbPredicates to match the specified field whose data type is Timestamp array and values are out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notIn](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notIn-java_lang_String-java_util_Calendar:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877)[] values) |  Configures RdbPredicates to match the specified field whose data type is Calendar array and values are out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notIn](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notIn-java_lang_String-java_util_Date:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571)[] values) |  Configures RdbPredicates to match the specified field whose data type is Date array and values are out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [offset](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__offset-int-)​(int rowOffset) |  Configures RdbPredicates to specify the start position of the returned result.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [on](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__on-java_lang_String___-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)... clauses) |  Adds an on condition to the predicate.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [or](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__or--)​() |  Adds an or condition to the predicate.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [orderByAsc](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__orderByAsc-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field) |  Configures the predicates to match the columns whose values are sorted in ascending order.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [orderByDesc](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__orderByDesc-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field) |  Configures the predicates to match the columns whose values are sorted in descending order.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [using](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__using-java_lang_String___-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)... fields) |  Adds a using condition to the predicate.   
  
Methods inherited from class ohos.data.rdb.[AbsRdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/absrdbpredicates-0000001054238815)  
---  
[getTableName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/absrdbpredicates-0000001054238815#ZH-CN_TOPIC_0000001054238815__getTableName--)  
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]RdbPredicates

public RdbPredicates​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) tableName)

A parameterized constructor used to create an [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) instance for searching RDB objects. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
tableName  |  Indicates the table name of the database.  
  
#### Method Detail

#### [h2]clear

public void clear​()

Clears the search conditions of [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074). 

This method retains only the value of private attribute tableName in [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) and restores other private attributes to their default values.

**Overrides:**

[clear](https://developer.harmonyos.com/cn/docs/documentation/doc-references/absrdbpredicates-0000001054238815#ZH-CN_TOPIC_0000001054238815__clear--) in class [AbsRdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/absrdbpredicates-0000001054238815)

#### [h2]equalTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) equalTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, byte value)

Configures the predicates to match the field whose data type is byte and value is equal to a specified value. 

This method is similar to = of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]equalTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) equalTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, short value)

Configures the predicates to match the field whose data type is short and value is equal to a specified value. 

This method is similar to = of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]equalTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) equalTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int value)

Configures the predicates to match the field whose data type is int and value is equal to a specified value. 

This method is similar to = of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]equalTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) equalTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long value)

Configures the predicates to match the field whose data type is long and value is equal to a specified value. 

This method is similar to = of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]equalTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) equalTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double value)

Configures the predicates to match the field whose data type is double and value is equal to a specified value. 

This method is similar to = of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]equalTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) equalTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float value)

Configures the predicates to match the field whose data type is float and value is equal to a specified value. 

This method is similar to = of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]equalTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) equalTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, boolean value)

Configures the predicates to match the field whose data type is boolean and value is equal to a specified value. 

This method is similar to = of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]equalTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) equalTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) value)

Configures the predicates to match the field whose data type is [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) and value is equal to a specified value. 

This method is similar to = of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]equalTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) equalTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) value)

Configures the predicates to match the field whose data type is [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) and value is equal to a specified value. 

This method is similar to = of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]equalTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) equalTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) value)

Configures the predicates to match the field whose data type is [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) and value is equal to a specified value. 

This method is similar to = of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]equalTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) equalTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) value)

Configures the predicates to match the field whose data type is [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) and value is equal to a specified value. 

This method is similar to = of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]equalTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) equalTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value)

Configures the predicates to match the field whose data type is [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) and value is equal to a specified value. 

This method is similar to = of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]notEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, byte value)

Configures the predicates to match the field whose data type is byte and value is unequal to a specified value. 

This method is similar to != of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]notEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, short value)

Configures the predicates to match the field whose data type is short and value is unequal to a specified value. 

This method is similar to != of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]notEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int value)

Configures the predicates to match the field whose data type is int and value is unequal to a specified value. 

This method is similar to != of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]notEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long value)

Configures the predicates to match the field whose data type is long and value is unequal to a specified value. 

This method is similar to != of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]notEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double value)

Configures the predicates to match the field whose data type is double and value is unequal to a specified value. 

This method is similar to != of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]notEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float value)

Configures the predicates to match the field whose data type is float and value is unequal to a specified value. 

This method is similar to != of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]notEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, boolean value)

Configures the predicates to match the field whose data type is boolean and value is unequal to a specified value. 

This method is similar to != of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]notEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) value)

Configures the predicates to match the field whose data type is [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) and value is unequal to a specified value. 

This method is similar to != of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]notEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) value)

Configures the predicates to match the field whose data type is [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) and value is unequal to a specified value. 

This method is similar to != of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]notEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) value)

Configures the predicates to match the field whose data type is [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) and value is unequal to a specified value. 

This method is similar to != of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]notEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) value)

Configures the predicates to match the field whose data type is [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) and value is unequal to a specified value. 

This method is similar to != of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]notEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value)

Configures the predicates to match the field whose data type is [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) and value is unequal to a specified value. 

This method is similar to != of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]beginWrap

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) beginWrap​()

Adds a left parenthesis to the predicate. 

This method is similar to ( of the SQL statement and needs to be used together with [endWrap()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__endWrap--).

**Returns:**

Returns the predicate with the left parenthesis.

#### [h2]endWrap

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) endWrap​()

Adds a right parenthesis to the predicate. 

This method is similar to ) of the SQL statement and needs to be used together with [beginWrap()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__beginWrap--).

**Returns:**

Returns the predicate with the right parenthesis.

#### [h2]or

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) or​()

Adds an or condition to the predicate. 

This method is similar to or of the SQL statement.

**Returns:**

Returns the predicate with the or condition.

#### [h2]and

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) and​()

Adds an and condition to the predicate. 

This method is similar to and of the SQL statement.

**Returns:**

Returns the predicate with the and condition.

#### [h2]contains

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) contains​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value)

Configures the predicates to match the field whose data type is String and value contains a specified value. 

This method is similar to contains of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]beginsWith

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) beginsWith​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value)

Configures the predicates to match the field whose data type is String and value starts with a specified string. 

This method is similar to value% of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]endsWith

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) endsWith​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value)

Configures the predicates to match the field whose data type is String and value ends with a specified string. 

This method is similar to %value of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]isNull

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) isNull​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field)

Configures the predicates to match the fields whose value is null. 

This method is similar to is null of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]isNotNull

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) isNotNull​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field)

Configures the predicates to match the specified fields whose value is not null. 

This method is similar to is not null of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]like

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) like​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value)

Configures the predicates to match the fields whose data type is String and value is similar to a specified string. 

This method is similar to like of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates. The percent sign (%) in the value is a wildcard (like * in a regular expression).  
  
**Returns:**# RdbPredicates

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[ohos.data.rdb.AbsRdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/absrdbpredicates-0000001054238815) |---|---ohos.data.rdb.RdbPredicates
    
    public class RdbPredicates
    extends [AbsRdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/absrdbpredicates-0000001054238815)  
  
---  
Represents predicates of the relational database (RDB). 

This class determines whether the value of conditional expressions in the RDB is true or false.

**Since:**

1

#### Constructor Summary

Constructor | Description  
---|---  
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__RdbPredicates-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) tableName) |  A parameterized constructor used to create an [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) instance for searching RDB objects.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [and](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__and--)​() |  Adds an and condition to the predicate.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [beginsWith](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__beginsWith-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value) |  Configures the predicates to match the field whose data type is String and value starts with a specified string.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [beginWrap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__beginWrap--)​() |  Adds a left parenthesis to the predicate.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [between](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__between-java_lang_String-double-double-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double low, double high) |  Configures the predicates to match the specified field whose data type is double and value is within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [between](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__between-java_lang_String-float-float-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float low, float high) |  Configures the predicates to match the specified field whose data type is float and value is within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [between](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__between-java_lang_String-int-int-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int low, int high) |  Configures the predicates to match the specified field whose data type is int and value is within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [between](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__between-java_lang_String-long-long-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long low, long high) |  Configures the predicates to match the specified field whose data type is long and value is within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [between](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__between-java_lang_String-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) low, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) high) |  Configures the predicates to match the specified field whose data type is [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) and value is within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [between](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__between-java_lang_String-java_sql_Time-java_sql_Time-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) low, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) high) |  Configures the predicates to match the specified field whose data type is [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) and value is within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [between](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__between-java_lang_String-java_sql_Timestamp-java_sql_Timestamp-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) low, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) high) |  Configures the predicates to match the specified field whose data type is [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) and value is within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [between](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__between-java_lang_String-java_util_Calendar-java_util_Calendar-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) low, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) high) |  Configures the predicates to match the specified field whose data type is [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) and value is within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [between](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__between-java_lang_String-java_util_Date-java_util_Date-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) low, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) high) |  Configures the predicates to match the specified field whose data type is [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) and value is within a given range.   
void | [clear](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__clear--)​() |  Clears the search conditions of [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074).   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [contains](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__contains-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value) |  Configures the predicates to match the field whose data type is String and value contains a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [crossJoin](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__crossJoin-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) tableName) |  Adds a cross join condition to a SQL statement.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [distinct](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__distinct--)​() |  Configures the predicates to filter out duplicate records and retain only one of them.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [endsWith](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__endsWith-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value) |  Configures the predicates to match the field whose data type is String and value ends with a specified string.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [endWrap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__endWrap--)​() |  Adds a right parenthesis to the predicate.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [equalTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__equalTo-java_lang_String-boolean-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, boolean value) |  Configures the predicates to match the field whose data type is boolean and value is equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [equalTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__equalTo-java_lang_String-byte-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, byte value) |  Configures the predicates to match the field whose data type is byte and value is equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [equalTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__equalTo-java_lang_String-double-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double value) |  Configures the predicates to match the field whose data type is double and value is equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [equalTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__equalTo-java_lang_String-float-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float value) |  Configures the predicates to match the field whose data type is float and value is equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [equalTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__equalTo-java_lang_String-int-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int value) |  Configures the predicates to match the field whose data type is int and value is equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [equalTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__equalTo-java_lang_String-long-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long value) |  Configures the predicates to match the field whose data type is long and value is equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [equalTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__equalTo-java_lang_String-short-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, short value) |  Configures the predicates to match the field whose data type is short and value is equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [equalTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__equalTo-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value) |  Configures the predicates to match the field whose data type is [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) and value is equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [equalTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__equalTo-java_lang_String-java_sql_Time-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) value) |  Configures the predicates to match the field whose data type is [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) and value is equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [equalTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__equalTo-java_lang_String-java_sql_Timestamp-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) value) |  Configures the predicates to match the field whose data type is [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) and value is equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [equalTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__equalTo-java_lang_String-java_util_Calendar-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) value) |  Configures the predicates to match the field whose data type is [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) and value is equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [equalTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__equalTo-java_lang_String-java_util_Date-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) value) |  Configures the predicates to match the field whose data type is [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) and value is equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [glob](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__glob-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value) |     
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThan-java_lang_String-double-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double value) |  Configures the predicates to match the field whose data type is double and value is greater than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThan-java_lang_String-float-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float value) |  Configures the predicates to match the field whose data type is float and value is greater than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThan-java_lang_String-int-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int value) |  Configures the predicates to match the field whose data type is int and value is greater than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThan-java_lang_String-long-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long value) |  Configures the predicates to match the field whose data type is long and value is greater than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThan-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value) |  Configures the predicates to match the field whose data type is [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) and value is greater than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThan-java_lang_String-java_sql_Time-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) value) |  Configures the predicates to match the field whose data type is [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) and value is greater than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThan-java_lang_String-java_sql_Timestamp-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) value) |  Configures the predicates to match the field whose data type is [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) and value is greater than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThan-java_lang_String-java_util_Calendar-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) value) |  Configures the predicates to match the field whose data type is [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) and value is greater than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThan-java_lang_String-java_util_Date-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) value) |  Configures the predicates to match the field whose data type is [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) and value is greater than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThanOrEqualTo-java_lang_String-double-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double value) |  Configures the predicates to match the field whose data type is double and value is greater than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThanOrEqualTo-java_lang_String-float-)Returns the predicates that match the specified field.

#### [h2]glob

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) glob​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value)

#### [h2]between

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) between​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int low, int high) Configures the predicates to match the specified field whose data type is int and value is within a given range. This method is similar to between of the SQL statement. **Parameters:** | Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with the predicates.  
high  |  Indicates the maximum value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]between

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) between​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long low, long high)

Configures the predicates to match the specified field whose data type is long and value is within a given range. 

This method is similar to between of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with the predicates.  
high  |  Indicates the maximum value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]between

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) between​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double low, double high)

Configures the predicates to match the specified field whose data type is double and value is within a given range. 

This method is similar to between of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with the predicates.  
high  |  Indicates the maximum value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]between

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) between​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float low, float high)

Configures the predicates to match the specified field whose data type is float and value is within a given range. 

This method is similar to between of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with the predicates.  
high  |  Indicates the maximum value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]between

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) between​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) low, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) high)

Configures the predicates to match the specified field whose data type is [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) and value is within a given range. 

This method is similar to between of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with the predicates.  
high  |  Indicates the maximum value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]between

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) between​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) low, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) high)

Configures the predicates to match the specified field whose data type is [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) and value is within a given range. 

This method is similar to between of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with the predicates.  
high  |  Indicates the maximum value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]between

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) between​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) low, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) high)

Configures the predicates to match the specified field whose data type is [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) and value is within a given range. 

This method is similar to between of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with the predicates.  
high  |  Indicates the maximum value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]between

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) between​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) low, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) high)

Configures the predicates to match the specified field whose data type is [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) and value is within a given range. 

This method is similar to between of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with the predicates.  
high  |  Indicates the maximum value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]between

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) between​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) low, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) high)

Configures the predicates to match the specified field whose data type is [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) and value is within a given range. 

This method is similar to between of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with the predicates.  
high  |  Indicates the maximum value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]notBetween

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notBetween​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int low, int high)

Configures RdbPredicates to match the specified field whose data type is int and value is out of a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with RdbPredicates.  
high  |  Indicates the maximum value to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]notBetween

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notBetween​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long low, long high)

Configures RdbPredicates to match the specified field whose data type is long and value is out of a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with RdbPredicates.  
high  |  Indicates the maximum value to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]notBetween

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notBetween​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double low, double high)

Configures RdbPredicates to match the specified field whose data type is double and value is out of a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with RdbPredicates.  
high  |  Indicates the maximum value to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]notBetween

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notBetween​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float low, float high)

Configures RdbPredicates to match the specified field whose data type is float and value is out of a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with RdbPredicates.  
high  |  Indicates the maximum value to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]notBetween

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notBetween​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) low, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) high)

Configures RdbPredicates to match the specified field whose data type is Date and value is out of a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with RdbPredicates.  
high  |  Indicates the maximum value to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]notBetween

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notBetween​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) low, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) high)

Configures RdbPredicates to match the specified field whose data type is Time and value is out of a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with RdbPredicates.  
high  |  Indicates the maximum value to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]notBetween

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notBetween​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) low, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) high)

Configures RdbPredicates to match the specified field whose data type is Timestamp and value is out of a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float value) |  Configures the predicates to match the field whose data type is float and value is greater than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThanOrEqualTo-java_lang_String-int-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int value) |  Configures the predicates to match the field whose data type is int and value is greater than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThanOrEqualTo-java_lang_String-long-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long value) |  Configures the predicates to match the field whose data type is long and value is greater than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThanOrEqualTo-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value) |  Configures the predicates to match the field whose data type is [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) and value is greater than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThanOrEqualTo-java_lang_String-java_sql_Time-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) value) |  Configures the predicates to match the field whose data type is [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) and value is greater than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThanOrEqualTo-java_lang_String-java_sql_Timestamp-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) value) |  Configures the predicates to match the field whose data type is [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) and value is greater than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThanOrEqualTo-java_lang_String-java_util_Calendar-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) value) |  Configures the predicates to match the field whose data type is [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) and value is greater than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [greaterThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__greaterThanOrEqualTo-java_lang_String-java_util_Date-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) value) |  Configures the predicates to match the field whose data type is [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) and value is greater than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [groupBy](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__groupBy-java_lang_String:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] fields) |  Configures RdbPredicates to group query results by specified columns.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [in](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__in-java_lang_String-double:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double[] values) |  Configures RdbPredicates to match the specified field whose data type is double array and values are within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [in](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__in-java_lang_String-float:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float[] values) |  Configures RdbPredicates to match the specified field whose data type is float array and values are within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [in](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__in-java_lang_String-int:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int[] values) |  Configures RdbPredicates to match the specified field whose data type is int array and values are within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [in](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__in-java_lang_String-long:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long[] values) |  Configures RdbPredicates to match the specified field whose data type is long array and values are within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [in](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__in-java_lang_String-java_lang_String:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] values) |  Configures RdbPredicates to match the specified field whose data type is String array and values are within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [in](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__in-java_lang_String-java_sql_Time:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558)[] values) |  Configures RdbPredicates to match the specified field whose data type is Time array and values are within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [in](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__in-java_lang_String-java_sql_Timestamp:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537)[] values) |  Configures RdbPredicates to match the specified field whose data type is Timestamp array and values are within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [in](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__in-java_lang_String-java_util_Calendar:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877)[] values) |  Configures RdbPredicates to match the specified field whose data type is Calendar array and values are within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [in](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__in-java_lang_String-java_util_Date:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571)[] values) |  Configures RdbPredicates to match the specified field whose data type is Date array and values are within a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [indexedBy](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__indexedBy-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) indexName) |  Configures RdbPredicates to specify the index column.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [innerJoin](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__innerJoin-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) tableName) |  Adds an inner join condition to a SQL statement.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [isNotNull](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__isNotNull-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field) |  Configures the predicates to match the specified fields whose value is not null.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [isNull](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__isNull-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field) |  Configures the predicates to match the fields whose value is null.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [leftOuterJoin](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__leftOuterJoin-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) tableName) |  Adds a left outer join condition to a SQL statement.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThan-java_lang_String-double-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double value) |  Configures the predicates to match the field whose data type is double and value is less than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThan-java_lang_String-float-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float value) |  Configures the predicates to match the field whose data type is float and value is less than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThan-java_lang_String-int-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int value) |  Configures the predicates to match the field whose data type is int and value is less than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThan-java_lang_String-long-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long value) |  Configures the predicates to match the field whose data type is long and value is less than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThan-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value) |  Configures the predicates to match the field whose data type is [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) and value is less than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThan-java_lang_String-java_sql_Time-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) value) |  Configures the predicates to match the field whose data type is [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) and value is less than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThan-java_lang_String-java_sql_Timestamp-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) value) |  Configures the predicates to match the field whose data type is [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) and value is less than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThan-java_lang_String-java_util_Calendar-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) value) |  Configures the predicates to match the field whose data type is [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) and value is less than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThan](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThan-java_lang_String-java_util_Date-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) value) |  Configures the predicates to match the field whose data type is [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) and value is less than a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThanOrEqualTo-java_lang_String-double-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double value) |  Configures the predicates to match the field whose data type is double and value is less than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThanOrEqualTo-java_lang_String-float-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float value) |  Configures the predicates to match the field whose data type is float and value is less than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThanOrEqualTo-java_lang_String-int-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int value) |  Configures the predicates to match the field whose data type is int and value is less than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThanOrEqualTo-java_lang_String-long-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long value) |  Configures the predicates to match the field whose data type is long and value is less than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThanOrEqualTo-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value) |  Configures the predicates to match the field whose data type is [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) and value is less than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThanOrEqualTo-java_lang_String-java_sql_Time-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) value) |  Configures the predicates to match the field whose data type is [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) and value is less than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThanOrEqualTo-java_lang_String-java_sql_Timestamp-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) value) |  Configures the predicates to match the field whose data type is [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) and value is less than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThanOrEqualTo-java_lang_String-java_util_Calendar-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) value) |  Configures the predicates to match the field whose data type is [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) and value is less than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [lessThanOrEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__lessThanOrEqualTo-java_lang_String-java_util_Date-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) value) |  Configures the predicates to match the field whose data type is [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) and value is less than or equal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [like](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__like-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value) |  Configures the predicates to match the fields whose data type is String and value is similar to a specified string.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [limit](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__limit-int-)​(int value) |  Sets the maximum number of data records in the column that match the specified predicates.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notBetween](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notBetween-java_lang_String-double-double-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double low, double high) |  Configures RdbPredicates to match the specified field whose data type is double and value is out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notBetween](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notBetween-java_lang_String-float-float-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float low, float high) |  Configures RdbPredicates to match the specified field whose data type is float and value is out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notBetween](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notBetween-java_lang_String-int-int-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int low, int high) |  Configures RdbPredicates to match the specified field whose data type is int and value is out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notBetween](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notBetween-java_lang_String-long-long-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long low, long high) |  Configures RdbPredicates to match the specified field whose data type is long and value is out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notBetween](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notBetween-java_lang_String-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) low, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) high) |     
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notBetween](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notBetween-java_lang_String-java_sql_Time-java_sql_Time-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) low, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) high) |  Configures RdbPredicates to match the specified field whose data type is Time and value is out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notBetween](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notBetween-java_lang_String-java_sql_Timestamp-java_sql_Timestamp-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) low, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) high) |  Configures RdbPredicates to match the specified field whose data type is Timestamp and value is out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with RdbPredicates.  
high  |  Indicates the maximum value to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]notBetween

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notBetween​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) low, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) high)

Configures RdbPredicates to match the specified field whose data type is Calendar and value is out of a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with RdbPredicates.  
high  |  Indicates the maximum value to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]notBetween

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notBetween​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) low, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) high)

#### [h2]greaterThan

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) greaterThan​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int value)

Configures the predicates to match the field whose data type is int and value is greater than a specified value. 

This method is similar to > of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]greaterThan

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) greaterThan​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long value)

Configures the predicates to match the field whose data type is long and value is greater than a specified value. 

This method is similar to > of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]greaterThan

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) greaterThan​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double value)

Configures the predicates to match the field whose data type is double and value is greater than a specified value. 

This method is similar to > of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]greaterThan

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) greaterThan​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float value)

Configures the predicates to match the field whose data type is float and value is greater than a specified value. 

This method is similar to > of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]greaterThan

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) greaterThan​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) value)

Configures the predicates to match the field whose data type is [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) and value is greater than a specified value. 

This method is similar to > of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]greaterThan

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) greaterThan​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) value)

Configures the predicates to match the field whose data type is [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) and value is greater than a specified value. 

This method is similar to > of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]greaterThan

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) greaterThan​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) value)

Configures the predicates to match the field whose data type is [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) and value is greater than a specified value. 

This method is similar to > of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]greaterThan

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) greaterThan​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) value)

Configures the predicates to match the field whose data type is [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) and value is greater than a specified value. 

This method is similar to > of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]greaterThan

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) greaterThan​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value)

Configures the predicates to match the field whose data type is [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) and value is greater than a specified value. 

[notBetween](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notBetween-java_lang_String-java_util_Calendar-java_util_Calendar-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) low, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) high)

Configures RdbPredicates to match the specified field whose data type is Calendar and value is out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notBetween](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notBetween-java_lang_String-java_util_Date-java_util_Date-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) low, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) high) |  Configures RdbPredicates to match the specified field whose data type is Date and value is out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notEqualTo-java_lang_String-boolean-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, boolean value) |  Configures the predicates to match the field whose data type is boolean and value is unequal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notEqualTo-java_lang_String-byte-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, byte value) |  Configures the predicates to match the field whose data type is byte and value is unequal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notEqualTo-java_lang_String-double-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double value) |  Configures the predicates to match the field whose data type is double and value is unequal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notEqualTo-java_lang_String-float-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float value) |  Configures the predicates to match the field whose data type is float and value is unequal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notEqualTo-java_lang_String-int-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int value) |  Configures the predicates to match the field whose data type is int and value is unequal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notEqualTo-java_lang_String-long-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long value) |  Configures the predicates to match the field whose data type is long and value is unequal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notEqualTo-java_lang_String-short-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, short value) |  Configures the predicates to match the field whose data type is short and value is unequal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notEqualTo-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value) |  Configures the predicates to match the field whose data type is [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) and value is unequal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notEqualTo-java_lang_String-java_sql_Time-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) value) |  Configures the predicates to match the field whose data type is [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) and value is unequal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notEqualTo-java_lang_String-java_sql_Timestamp-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) value) |  Configures the predicates to match the field whose data type is [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) and value is unequal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notEqualTo-java_lang_String-java_util_Calendar-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) value) |  Configures the predicates to match the field whose data type is [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) and value is unequal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notEqualTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notEqualTo-java_lang_String-java_util_Date-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) value) |  Configures the predicates to match the field whose data type is [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) and value is unequal to a specified value.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notIn](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notIn-java_lang_String-double:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double[] values) |  Configures RdbPredicates to match the specified field whose data type is double array and values are out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notIn](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notIn-java_lang_String-float:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float[] values) |  Configures RdbPredicates to match the specified field whose data type is float array and values are out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notIn](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notIn-java_lang_String-int:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int[] values) |  Configures RdbPredicates to match the specified field whose data type is int array and values are out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notIn](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notIn-java_lang_String-long:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long[] values) |  Configures RdbPredicates to match the specified field whose data type is long array and values are out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notIn](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notIn-java_lang_String-java_lang_String:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] values) |  Configures RdbPredicates to match the specified field whose data type is String array and values are out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notIn](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notIn-java_lang_String-java_sql_Time:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558)[] values) |  Configures RdbPredicates to match the specified field whose data type is Time array and values are out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notIn](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notIn-java_lang_String-java_sql_Timestamp:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537)[] values) |  Configures RdbPredicates to match the specified field whose data type is Timestamp array and values are out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notIn](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notIn-java_lang_String-java_util_Calendar:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877)[] values) |  Configures RdbPredicates to match the specified field whose data type is Calendar array and values are out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [notIn](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__notIn-java_lang_String-java_util_Date:A-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571)[] values) |  Configures RdbPredicates to match the specified field whose data type is Date array and values are out of a given range.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [offset](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__offset-int-)​(int rowOffset) |  Configures RdbPredicates to specify the start position of the returned result.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [on](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__on-java_lang_String___-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)... clauses) |  Adds an on condition to the predicate.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [or](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__or--)​() |  Adds an or condition to the predicate.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [orderByAsc](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__orderByAsc-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field) |  Configures the predicates to match the columns whose values are sorted in ascending order.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [orderByDesc](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__orderByDesc-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field) |  Configures the predicates to match the columns whose values are sorted in descending order.   
[RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) | [using](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__using-java_lang_String___-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)... fields) |  Adds a using condition to the predicate.   
  
Methods inherited from class ohos.data.rdb.[AbsRdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/absrdbpredicates-0000001054238815)  
---  
[getTableName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/absrdbpredicates-0000001054238815#ZH-CN_TOPIC_0000001054238815__getTableName--)  
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]RdbPredicates

public RdbPredicates​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) tableName)

A parameterized constructor used to create an [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) instance for searching RDB objects. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
tableName  |  Indicates the table name of the database.  
  
#### Method Detail

#### [h2]clear

public void clear​()

Clears the search conditions of [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074). 

This method retains only the value of private attribute tableName in [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) and restores other private attributes to their default values.

**Overrides:**

[clear](https://developer.harmonyos.com/cn/docs/documentation/doc-references/absrdbpredicates-0000001054238815#ZH-CN_TOPIC_0000001054238815__clear--) in class [AbsRdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/absrdbpredicates-0000001054238815)

#### [h2]equalTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) equalTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, byte value)

Configures the predicates to match the field whose data type is byte and value is equal to a specified value. 

This method is similar to = of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]equalTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) equalTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, short value)

Configures the predicates to match the field whose data type is short and value is equal to a specified value. 

This method is similar to = of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]equalTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) equalTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int value)

Configures the predicates to match the field whose data type is int and value is equal to a specified value. 

This method is similar to = of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]equalTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) equalTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long value)

Configures the predicates to match the field whose data type is long and value is equal to a specified value. 

This method is similar to = of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]equalTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) equalTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double value)

Configures the predicates to match the field whose data type is double and value is equal to a specified value. 

This method is similar to = of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]equalTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) equalTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float value)

Configures the predicates to match the field whose data type is float and value is equal to a specified value. 

This method is similar to = of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.This method is similar to   
  
> of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]lessThan

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) lessThan​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int value)

Configures the predicates to match the field whose data type is int and value is less than a specified value. 

This method is similar to < of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]lessThan

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) lessThan​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long value)

Configures the predicates to match the field whose data type is long and value is less than a specified value. 

This method is similar to < of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]lessThan

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) lessThan​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double value)

Configures the predicates to match the field whose data type is double and value is less than a specified value. 

This method is similar to < of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]lessThan

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) lessThan​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float value)

Configures the predicates to match the field whose data type is float and value is less than a specified value. 

This method is similar to < of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]lessThan

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) lessThan​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) value)

Configures the predicates to match the field whose data type is [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) and value is less than a specified value. 

This method is similar to < of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]lessThan

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) lessThan​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) value)

Configures the predicates to match the field whose data type is [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) and value is less than a specified value. 

This method is similar to < of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]lessThan

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) lessThan​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) value)

Configures the predicates to match the field whose data type is [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) and value is less than a specified value. 

This method is similar to < of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]lessThan

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) lessThan​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) value)

Configures the predicates to match the field whose data type is [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) and value is less than a specified value. 

This method is similar to < of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]lessThan

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) lessThan​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value)

Configures the predicates to match the field whose data type is [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) and value is less than a specified value. 

This method is similar to < of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]greaterThanOrEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) greaterThanOrEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int value)

Configures the predicates to match the field whose data type is int and value is greater than or equal to a specified value. 

This method is similar to >= of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]greaterThanOrEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) greaterThanOrEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long value)

Configures the predicates to match the field whose data type is long and value is greater than or equal to a specified value. 

This method is similar to >= of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]greaterThanOrEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) greaterThanOrEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double value)

Configures the predicates to match the field whose data type is double and value is greater than or equal to a specified value. 

This method is similar to >= of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]greaterThanOrEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) greaterThanOrEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float value)

Configures the predicates to match the field whose data type is float and value is greater than or equal to a specified value. 

This method is similar to >= of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]greaterThanOrEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) greaterThanOrEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) value)

Configures the predicates to match the field whose data type is [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) and value is greater than or equal to a specified value. 

This method is similar to >= of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]greaterThanOrEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) greaterThanOrEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) value)

Configures the predicates to match the field whose data type is [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) and value is greater than or equal to a specified value. 

This method is similar to >= of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]greaterThanOrEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) greaterThanOrEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) value)

Configures the predicates to match the field whose data type is [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) and value is greater than or equal to a specified value. 

This method is similar to >= of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:****Returns:**

Returns the predicates that match the specified field.

#### [h2]equalTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) equalTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, boolean value)

Configures the predicates to match the field whose data type is boolean and value is equal to a specified value. 

This method is similar to = of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]equalTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) equalTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) value)

Configures the predicates to match the field whose data type is [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) and value is equal to a specified value. 

This method is similar to = of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]equalTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) equalTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) value)

Configures the predicates to match the field whose data type is [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) and value is equal to a specified value. 

This method is similar to = of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]equalTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) equalTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) value)

Configures the predicates to match the field whose data type is [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) and value is equal to a specified value. 

This method is similar to = of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]equalTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) equalTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) value)

Configures the predicates to match the field whose data type is [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) and value is equal to a specified value. 

This method is similar to = of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]equalTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) equalTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value)

Configures the predicates to match the field whose data type is [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) and value is equal to a specified value. 

This method is similar to = of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]notEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, byte value)

Configures the predicates to match the field whose data type is byte and value is unequal to a specified value. 

This method is similar to != of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]notEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, short value)

Configures the predicates to match the field whose data type is short and value is unequal to a specified value. 

This method is similar to != of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]notEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int value)

Configures the predicates to match the field whose data type is int and value is unequal to a specified value. 

This method is similar to != of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]notEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long value)

Configures the predicates to match the field whose data type is long and value is unequal to a specified value. 

This method is similar to != of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]notEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double value)

Configures the predicates to match the field whose data type is double and value is unequal to a specified value. 

This method is similar to != of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]notEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float value)

Configures the predicates to match the field whose data type is float and value is unequal to a specified value. 

This method is similar to != of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]notEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, boolean value)

Configures the predicates to match the field whose data type is boolean and value is unequal to a specified value. 

This method is similar to != of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]notEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) value)

Configures the predicates to match the field whose data type is [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) and value is unequal to a specified value. 

This method is similar to != of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]notEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) value)

Configures the predicates to match the field whose data type is [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) and value is unequal to a specified value. 

This method is similar to != of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]notEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) value)

Configures the predicates to match the field whose data type is [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) and value is unequal to a specified value. 

This method is similar to != of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]notEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) value)

Configures the predicates to match the field whose data type is [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) and value is unequal to a specified value. 

This method is similar to != of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]notEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value)

Configures the predicates to match the field whose data type is [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) and value is unequal to a specified value. 

This method is similar to != of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
Returns the predicates that match the specified field.

#### [h2]greaterThanOrEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) greaterThanOrEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) value)

Configures the predicates to match the field whose data type is [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) and value is greater than or equal to a specified value. 

This method is similar to >= of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]greaterThanOrEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) greaterThanOrEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value)

Configures the predicates to match the field whose data type is [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) and value is greater than or equal to a specified value. 

This method is similar to >= of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]lessThanOrEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) lessThanOrEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int value)

Configures the predicates to match the field whose data type is int and value is less than or equal to a specified value. 

This method is similar to <= of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]lessThanOrEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) lessThanOrEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long value)

Configures the predicates to match the field whose data type is long and value is less than or equal to a specified value. 

This method is similar to <= of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]lessThanOrEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) lessThanOrEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double value)

Configures the predicates to match the field whose data type is double and value is less than or equal to a specified value. 

This method is similar to <= of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]lessThanOrEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) lessThanOrEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float value)

Configures the predicates to match the field whose data type is float and value is less than or equal to a specified value. 

This method is similar to <= of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]lessThanOrEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) lessThanOrEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) value)

Configures the predicates to match the field whose data type is [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) and value is less than or equal to a specified value. 

This method is similar to <= of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]lessThanOrEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) lessThanOrEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) value)

Configures the predicates to match the field whose data type is [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) and value is less than or equal to a specified value. 

This method is similar to <= of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]lessThanOrEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) lessThanOrEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) value)

Configures the predicates to match the field whose data type is [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) and value is less than or equal to a specified value. 

This method is similar to <= of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]lessThanOrEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) lessThanOrEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) value)

Configures the predicates to match the field whose data type is [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) and value is less than or equal to a specified value. 

This method is similar to <= of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]lessThanOrEqualTo

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) lessThanOrEqualTo​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value)

Configures the predicates to match the field whose data type is [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) and value is less than or equal to a specified value. 

This method is similar to <= of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]orderByAsc

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) orderByAsc​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field)

Configures the predicates to match the columns whose values are sorted in ascending order. 

This method is similar to order by field asc of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
  
**Returns:**

Returns the predicates that match the specified columns.

#### [h2]orderByDesc

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) orderByDesc​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field)

Configures the predicates to match the columns whose values are sorted in descending order. 

This method is similar to order by field desc of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
  
**Returns:**

Returns the predicates that match the specified columns.

#### [h2]distinct

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) distinct​()

Configures the predicates to filter out duplicate records and retain only one of them. 

This method is similar to distinct of the SQL statement.

**Returns:**

Returns the predicates that can be used to filter out duplicate records.

#### [h2]limit

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) limit​(int value)

Sets the maximum number of data records in the column that match the specified predicates. 

This method is similar to limit of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
value  |  Indicates the maximum number of data records.  
  
**Returns:**

Returns the predicates that can be used to set the maximum number of data records.

#### [h2]offset

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) offset​(int rowOffset)

Configures RdbPredicates to specify the start position of the returned result. 

Use this method together with [RdbPredicates#limit(int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__limit-int-).

**Parameters:**

Parameter Name | Parameter Description  
---|---  
rowOffset  |  Indicates the start position of the returned result. The value is a positive integer.  
  
**Returns:**

Returns RdbPredicates with the specified start position of the returned result.

**Since:**

3

**See Also:**

[limit(int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__limit-int-)

#### [h2]groupBy

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) groupBy​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] fields)

Configures RdbPredicates to group query results by specified columns. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]beginWrap

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) beginWrap​()

Adds a left parenthesis to the predicate. 

This method is similar to ( of the SQL statement and needs to be used together with [endWrap()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__endWrap--).

**Returns:**

Returns the predicate with the left parenthesis.

#### [h2]endWrap

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) endWrap​()

Adds a right parenthesis to the predicate. 

This method is similar to ) of the SQL statement and needs to be used together with [beginWrap()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__beginWrap--).

**Returns:**

Returns the predicate with the right parenthesis.

#### [h2]or

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) or​()

Adds an or condition to the predicate. 

This method is similar to or of the SQL statement.

**Returns:**

Returns the predicate with the or condition.

#### [h2]and

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) and​()

Adds an and condition to the predicate. 

This method is similar to and of the SQL statement.

**Returns:**

Returns the predicate with the and condition.

#### [h2]contains

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) contains​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value)

Configures the predicates to match the field whose data type is String and value contains a specified value. 

This method is similar to contains of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]beginsWith

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) beginsWith​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value)

Configures the predicates to match the field whose data type is String and value starts with a specified string. 

This method is similar to value% of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]endsWith

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) endsWith​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value)

Configures the predicates to match the field whose data type is String and value ends with a specified string. 

This method is similar to %value of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]isNull

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) isNull​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field)

Configures the predicates to match the fields whose value is null. 

This method is similar to is null of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]isNotNull

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) isNotNull​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field)

Configures the predicates to match the specified fields whose value is not null. 

This method is similar to is not null of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]like

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) like​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value)

Configures the predicates to match the fields whose data type is String and value is similar to a specified string. 

This method is similar to like of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates. The percent sign (%) in the value is a wildcard (like * in a regular expression).  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]glob

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) glob​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value)

#### [h2]between

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) between​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int low, int high)

Configures the predicates to match the specified field whose data type is int and value is within a given range. 

This method is similar to between of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with the predicates.  
high  |  Indicates the maximum value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]between

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) between​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long low, long high)

Configures the predicates to match the specified field whose data type is long and value is within a given range. 

This method is similar to between of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with the predicates.  
high  |  Indicates the maximum value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]between

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) between​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double low, double high)

Configures the predicates to match the specified field whose data type is double and value is within a given range. 

This method is similar to between of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with the predicates.  
high  |  Indicates the maximum value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]between

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) between​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float low, float high)

Configures the predicates to match the specified field whose data type is float and value is within a given range. 

This method is similar to between of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with the predicates.  
high  |  Indicates the maximum value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]between

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) between​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) low, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) high)

Configures the predicates to match the specified field whose data type is [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) and value is within a given range. 

This method is similar to between of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with the predicates.  
high  |  Indicates the maximum value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]between

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) between​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) low, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) high)

Configures the predicates to match the specified field whose data type is [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) and value is within a given range. 

This method is similar to between of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with the predicates.  
high  |  Indicates the maximum value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]between

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) between​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) low, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) high)

Configures the predicates to match the specified field whose data type is [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) and value is within a given range. 

This method is similar to between of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with the predicates.  
high  |  Indicates the maximum value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]between

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) between​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) low, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) high)

Configures the predicates to match the specified field whose data type is [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) and value is within a given range. 

This method is similar to between of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with the predicates.  
high  |  Indicates the maximum value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]between

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) between​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) low, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) high)

Configures the predicates to match the specified field whose data type is [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) and value is within a given range. 

This method is similar to between of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description| fields  |  Indicates the specified columns by which query results are grouped.  
---|---|---|---  
  
**Returns:**

Returns RdbPredicates with the specified columns by which query results are grouped.

**Since:**

3

#### [h2]indexedBy

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) indexedBy​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) indexName)

Configures RdbPredicates to specify the index column. 

before using this method, you need to create an index column.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
indexName  |  Indicates the name of the index column.  
  
**Returns:**

Returns RdbPredicates with the specified index column.

**Since:**

3

#### [h2]in

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) in​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int[] values)

Configures RdbPredicates to match the specified field whose data type is int array and values are within a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
values  |  Indicates the values to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]in

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) in​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long[] values)

Configures RdbPredicates to match the specified field whose data type is long array and values are within a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
values  |  Indicates the values to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]in

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) in​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double[] values)

Configures RdbPredicates to match the specified field whose data type is double array and values are within a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
values  |  Indicates the values to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]in

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) in​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float[] values)

Configures RdbPredicates to match the specified field whose data type is float array and values are within a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
values  |  Indicates the values to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]in

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) in​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571)[] values)

Configures RdbPredicates to match the specified field whose data type is Date array and values are within a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
values  |  Indicates the values to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]in

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) in​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558)[] values)

Configures RdbPredicates to match the specified field whose data type is Time array and values are within a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
values  |  Indicates the values to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]in

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) in​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537)[] values)

Configures RdbPredicates to match the specified field whose data type is Timestamp array and values are within a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
values  |  Indicates the values to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]in

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) in​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877)[] values)

Configures RdbPredicates to match the specified field whose data type is Calendar array and values are within a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
values  |  Indicates the values to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]in

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) in​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] values)

Configures RdbPredicates to match the specified field whose data type is String array and values are within a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
values  |  Indicates the values to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]notIn

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notIn​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int[] values)

Configures RdbPredicates to match the specified field whose data type is int array and values are out of a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
values  |  Indicates the values to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]notIn

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notIn​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long[] values)

Configures RdbPredicates to match the specified field whose data type is long array and values are out of a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
values  |  Indicates the values to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]notIn

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notIn​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double[] values)

Configures RdbPredicates to match the specified field whose data type is double array and values are out of a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
values  |  Indicates the values to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]notIn

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notIn​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float[] values)

Configures RdbPredicates to match the specified field whose data type is float array and values are out of a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
values  |  Indicates the values to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]notIn

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notIn​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571)[] values)

Configures RdbPredicates to match the specified field whose data type is Date array and values are out of a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
values  |  Indicates the values to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]notIn

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notIn​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558)[] values)

Configures RdbPredicates to match the specified field whose data type is Time array and values are out of a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
values  |  Indicates the values to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]notIn

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notIn​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537)[] values)

Configures RdbPredicates to match the specified field whose data type is Timestamp array and values are out of a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with the predicates.  
high  |  Indicates the maximum value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]notBetween

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notBetween​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int low, int high)

Configures RdbPredicates to match the specified field whose data type is int and value is out of a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with RdbPredicates.  
high  |  Indicates the maximum value to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]notBetween

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notBetween​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long low, long high)

Configures RdbPredicates to match the specified field whose data type is long and value is out of a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with RdbPredicates.  
high  |  Indicates the maximum value to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]notBetween

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notBetween​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double low, double high)

Configures RdbPredicates to match the specified field whose data type is double and value is out of a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with RdbPredicates.  
high  |  Indicates the maximum value to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]notBetween

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notBetween​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float low, float high)

Configures RdbPredicates to match the specified field whose data type is float and value is out of a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with RdbPredicates.  
high  |  Indicates the maximum value to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]notBetween

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notBetween​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) low, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) high)

Configures RdbPredicates to match the specified field whose data type is Date and value is out of a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with RdbPredicates.  
high  |  Indicates the maximum value to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]notBetween

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notBetween​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) low, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) high)

Configures RdbPredicates to match the specified field whose data type is Time and value is out of a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with RdbPredicates.  
high  |  Indicates the maximum value to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]notBetween

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notBetween​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) low, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) high)

Configures RdbPredicates to match the specified field whose data type is Timestamp and value is out of a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with RdbPredicates.  
high  |  Indicates the maximum value to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]notBetween

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notBetween​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) low, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) high)

Configures RdbPredicates to match the specified field whose data type is Calendar and value is out of a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
low  |  Indicates the minimum value to match with RdbPredicates.  
high  |  Indicates the maximum value to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]notBetween

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notBetween​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) low, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) high)

#### [h2]greaterThan

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) greaterThan​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, int value)

Configures the predicates to match the field whose data type is int and value is greater than a specified value. 

This method is similar to > of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]greaterThan

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) greaterThan​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, long value)

Configures the predicates to match the field whose data type is long and value is greater than a specified value. 

This method is similar to > of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]greaterThan

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) greaterThan​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, double value)

Configures the predicates to match the field whose data type is double and value is greater than a specified value. 

This method is similar to > of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]greaterThan

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) greaterThan​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, float value)

Configures the predicates to match the field whose data type is float and value is greater than a specified value. 

This method is similar to > of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]greaterThan

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) greaterThan​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) value)

Configures the predicates to match the field whose data type is [Date](https://developer.harmonyos.com/cn/docs/documentation/doc-references/date-0000001054358571) and value is greater than a specified value. 

This method is similar to > of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]greaterThan

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) greaterThan​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) value)

Configures the predicates to match the field whose data type is [Time](https://developer.harmonyos.com/cn/docs/documentation/doc-references/time-0000001054678558) and value is greater than a specified value. 

This method is similar to > of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]greaterThan

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) greaterThan​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) value)

Configures the predicates to match the field whose data type is [Timestamp](https://developer.harmonyos.com/cn/docs/documentation/doc-references/timestamp-0000001054358537) and value is greater than a specified value. 

This method is similar to > of the SQL statement.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
value  |  Indicates the value to match with the predicates.  
  
**Returns:**

Returns the predicates that match the specified field.

#### [h2]greaterThan

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) greaterThan​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) value)

Configures the predicates to match the field whose data type is [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877) and value is greater than a specified value. 

This method is similar to > of the SQL statement.

**Parameters:**

Parameter Name field  |  Indicates the column name in the database table.  
---|---  
values  |  Indicates the values to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]notIn

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notIn​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [Calendar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/calendar-0000001054439877)[] values)

Configures RdbPredicates to match the specified field whose data type is Calendar array and values are out of a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
values  |  Indicates the values to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]notIn

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) notIn​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) field, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] values)

Configures RdbPredicates to match the specified field whose data type is String array and values are out of a given range. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
field  |  Indicates the column name in the database table.  
values  |  Indicates the values to match with RdbPredicates.  
  
**Returns:**

Returns RdbPredicates that matches the specified field.

**Since:**

3

#### [h2]crossJoin

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) crossJoin​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) tableName)

Adds a cross join condition to a SQL statement. 

In SQLite, you can use cross joins to associate two unrelated tables. The cross join joins every row from the first table with every row from the second table, and the result set is the product of rows in both tables. Exercise caution when using cross joins during application development because they will exert heavy load on memory and subsequent data processing.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
tableName  |  Indicates the names of the tables to join.  
  
**Returns:**

Returns the predicate with the cross join condition.

#### [h2]innerJoin

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) innerJoin​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) tableName)

Adds an inner join condition to a SQL statement. 

In SQLite, you can use inner joins to query data from two related tables. The inner join selects all the rows to display in the result set from the related tables only if both tables meet the conditions specified in the ON clause. The inner joins are syntactically equivalent to the cross joins. Note that inner joins must be used together with [RdbPredicates#on(String...)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__on-java_lang_String___-). Otherwise, use [RdbPredicates#crossJoin(String)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__crossJoin-java_lang_String-) instead.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
tableName  |  Indicates the names of the tables to join.  
  
**Returns:**

Returns the predicate with the inner join condition.

#### [h2]leftOuterJoin

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) leftOuterJoin​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) tableName)

Adds a left outer join condition to a SQL statement. 

The left join or left outer join allows you to query data from tables A and B and returns the inner joins between A and B and the unmatched rows of A. A is the first join defined in the clause, and is therefore left join.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
tableName  |  Indicates the names of the tables to join.  
  
**Returns:**

Returns the predicate with the left outer join condition.

#### [h2]using

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) using​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)... fields)

Adds a using condition to the predicate. This method is similar to using of the SQL statement. 

using is the abbreviation of the specified join condition in the left join [RdbPredicates#leftOuterJoin](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__leftOuterJoin-java_lang_String-) or inner join [RdbPredicates#innerJoin](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__innerJoin-java_lang_String-). When adding the using condition, ensure that the specified columns exist in both tables.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
fields  |  Indicates the column names in the database table.  
  
**Returns:**

Returns the predicate with the using condition.

#### [h2]on

public [RdbPredicates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074) on​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)... clauses)

Adds an on condition to the predicate. 

on is used to set the join conditions of multiple tables when obtaining the join type. It is used with the left join [RdbPredicates#leftOuterJoin](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__leftOuterJoin-java_lang_String-) or inner join [RdbPredicates#innerJoin](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rdbpredicates-0000001054120074#ZH-CN_TOPIC_0000001054120074__innerJoin-java_lang_String-).

**Parameters:**

Parameter Name | Parameter Description  
---|---  
clauses  |  Indicates the conditions of the join clauses.  
  
**Returns:**

Returns the predicate with the on condition.
