---
name: cangjie-references/cj-database_sql_package_overview
title: std.database.sql
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_overview
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.database.sql
---

# std.database.sql

#### 功能介绍

database.sql 包提供仓颉访问数据库的接口。

本包提供 SQL/CLI 的通用接口，配合数据库驱动 Driver 完成对数据库的各项操作。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d4/v3/fX6UcVFzTgK0b9kYTkHD5A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111703Z&HW-CC-Expire=86400&HW-CC-Sign=E7B7A27499EE31E35BEC203EC22568B8FD2AE6D83198895BAC444A7919224840)

当前仅支持 SQL/CLI 接口。

SQL 数据类型和仓颉数据类型对应表如下：

SQL | CDBC/Cangjie | SqlDataType | 说明  
---|---|---|---  
RUNE | String | SqlChar | -  
VARCHAR | String | SqlVarchar | -  
CLOB | io.InputStream | SqlClob | -  
BINARY | Array<Byte> | SqlBinary | -  
VARBINARY | Array<Byte> | SqlVarBinary | -  
BLOB | io.InputStream | SqlBlob | -  
NUMERIC | Decimal | SqlDecimal | -  
DECIMAL | Decimal | SqlDecimal | -  
BOOLEAN | Bool | SqlBool | -  
TINYINT | Int8 | SqlByte | -  
SMALLINT | Int16 | SqlSmallInt | -  
INTEGER | Int32 | SqlInteger | -  
BIGINT | Int64 | SqlBigInt | -  
REAL | Float32 | SqlReal | -  
DOUBLE | Float64 | SqlDouble | -  
DATE | time.DateTime | SqlDate | 值支持 YEAR，MONTH，DAY。  
TIME | time.DateTime | SqlTime | 值支持 HOUR，MINUTE，SECOND（不包括 TIME ZONE）。  
TIMETZ | time.DateTime | SqlTimeTz | 值支持 HOUR，MINUTE，SECOND（包括 TIME ZONE）。  
TIMESTAMP | time.DateTime | SqlTimestamp | 值支持 YEAR，MONTH，DAY，HOUR，MINUTE，SECOND，TIME ZONE。  
INTERVAL | time.Duration | SqlInterval | 年-月间隔或者日-时间隔。  
  
#### API 列表

#### [h2]接口

接口名 | 功能  
---|---  
[ColumnInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#interface-columninfo) | 执行 Select/Query 语句返回结果的列信息。  
[Connection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#interface-connection) | 数据库连接接口。  
[Datasource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#interface-datasource) | 数据源接口。  
[Driver](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#interface-driver) | 数据库驱动接口。  
[QueryResult](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#interface-queryresult) | 执行 Select 语句产生的结果接口。  
[SqlDbType (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#interface-sqldbtype-deprecated) | 所有 sql 数据类型的父类。  
[SqlNullableDbType (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#interface-sqlnullabledbtype-deprecated) | 允许 null 值的 sql 数据类型父类。  
[Statement](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#interface-statement) | sql 语句预执行接口。  
[Transaction](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#interface-transaction) | 定义数据库事务的核心行为。  
[UpdateResult](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#interface-updateresult) | 执行 Insert、Update、Delete 语句产生的结果接口。  
  
#### [h2]类

类名 | 功能  
---|---  
[DriverManager](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-drivermanager) | 支持运行时根据驱动名获取数据库驱动实例。  
[PooledDatasource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-pooleddatasource) | 数据库连接池类，提供数据库连接池能力。  
[SqlOption](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqloption) | 预定义的 sql 选项名称和值。  
[SqlBigInt (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlbigint-deprecated) | 大整数，对应仓颉 Int64 类型。  
[SqlBinary (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlbinary-deprecated) | 定长二进制字符串，对应仓颉 Array<Byte> 类型。  
[SqlBlob (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlblob-deprecated) | 变长超大二进制字符串（BINARY LARGE OBJECT），对应仓颉 InputStream 类型。  
[SqlBool (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlbool-deprecated) | 布尔类型，对应仓颉 Bool 类型。  
[SqlByte (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlbyte-deprecated) | 字节，对应仓颉 Int8 类型。  
[SqlChar (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlchar-deprecated) | 定长字符串，对应仓颉 String 类型。  
[SqlClob (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlclob-deprecated) | 变长超大字符串（RUNE LARGE OBJECT），对应仓颉 InputStream 类型。  
[SqlDate (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqldate-deprecated) | 日期，仅年月日有效，对应仓颉 DateTime 类型。  
[SqlDecimal (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqldecimal-deprecated) | 高精度数，对应仓颉 Decimal 类型。  
[SqlDouble (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqldouble-deprecated) | 双精度数，对应仓颉 Float64 类型。  
[SqlInteger (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlinteger-deprecated) | 中整数，对应仓颉 Int32 类型。  
[SqlInterval (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlinterval-deprecated) | 时间间隔，对应仓颉 Duration 类型。  
[SqlReal (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlreal-deprecated) | 浮点数，对应仓颉 Float32 类型。  
[SqlSmallInt (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlsmallint-deprecated) | 小整数，对应仓颉 Int16 类型。  
[SqlTime (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqltime-deprecated) | 时间，仅时分秒毫秒有效，对应仓颉 DateTime 类型。  
[SqlTimestamp (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqltimestamp-deprecated) | 时间戳，对应仓颉 DateTime 类型。  
[SqlTimeTz (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqltimetz-deprecated) | 带时区的时间，仅时分秒毫秒时区有效，对应仓颉 DateTime 类型。  
[SqlVarBinary (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlvarbinary-deprecated) | 变长二进制字符串，对应仓颉 Array<Byte> 类型。  
[SqlVarchar (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlvarchar-deprecated) | 变长字符串，对应仓颉 String 类型。  
[SqlNullableBigInt (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlnullablebigint-deprecated) | 大整数，对应仓颉 Int64 类型，可为数据库 Null 值。  
[SqlNullableBinary (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlnullablebinary-deprecated) | 定长二进制字符串，对应仓颉 Array<Byte> 类型，可为数据库 Null 值。  
[SqlNullableBlob (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlnullableblob-deprecated) | 变长超大二进制字符串（BINARY LARGE OBJECT），对应仓颉 InputStream 类型，可为数据库 Null 值。  
[SqlNullableBool (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlnullablebool-deprecated) | 布尔类型，对应仓颉 Bool 类型，可为数据库 Null 值。  
[SqlNullableByte (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlnullablebyte-deprecated) | 字节，对应仓颉 Int8 类型，可为数据库 Null 值。  
[SqlNullableChar (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlnullablechar-deprecated) | 定长二进制字符串，对应仓颉 String 类型，可为数据库 Null 值。  
[SqlNullableClob (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlnullableclob-deprecated) | 变长超大字符串（RUNE LARGE OBJECT），对应仓颉 InputStream 类型，可为数据库 Null 值。  
[SqlNullableDate (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlnullabledate-deprecated) | 日期，仅年月日有效，对应仓颉 DateTime 类型，可为数据库 Null 值。  
[SqlNullableDecimal (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlnullabledecimal-deprecated) | 高精度数，对应仓颉 Decimal 类型，可为数据库 Null 值。  
[SqlNullableDouble (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlnullabledouble-deprecated) | 双精度数，对应仓颉 Float64 类型，可为数据库 Null 值。  
[SqlNullableInteger (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlnullableinteger-deprecated) | 中整数，对应仓颉 Int32 类型，可为数据库 Null 值。  
[SqlNullableInterval (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlnullableinterval-deprecated) | 时间间隔，对应仓颉 Duration 类型，可为数据库 Null 值。  
[SqlNullableReal (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlnullablereal-deprecated) | 浮点数，对应仓颉 Float32 类型，可为数据库 Null 值。  
[SqlNullableSmallInt (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlnullablesmallint-deprecated) | 小整数，对应仓颉 Int16 类型，可为数据库 Null 值。  
[SqlNullableTime (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlnullabletime-deprecated) | 时间，仅时分秒毫秒有效，对应仓颉 DateTime 类型，可为数据库 Null 值。  
[SqlNullableTimestamp (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlnullabletimestamp-deprecated) | 时间戳，对应仓颉 DateTime 类型，可为数据库 Null 值。  
[SqlNullableTimeTz (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlnullabletimetz-deprecated) | 带时区的时间，仅时分秒毫秒时区有效，对应仓颉 DateTime 类型，可为数据库 Null 值。  
[SqlNullableVarBinary (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlnullablevarbinary-deprecated) | 变长二进制字符串，对应仓颉 Array<Byte> 类型，可为数据库 Null 值。  
[SqlNullableVarchar (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes#class-sqlnullablevarchar-deprecated) | 变长字符串，对应仓颉 String 类型，可为数据库 Null 值。  
  
#### [h2]枚举

枚举名 | 功能  
---|---  
[ConnectionState](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_enums#enum-connectionstate) | 描述与数据源连接的当前状态。  
[TransactionAccessMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_enums#enum-transactionaccessmode) | 事务的读写模式。  
[TransactionDeferrableMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_enums#enum-transactiondeferrablemode) | 事务的延迟模式。  
[TransactionIsoLevel](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_enums#enum-transactionisolevel) | 定义了数据库系统中，一个事务中操作的结果在何时以何种方式对其他并发事务操作可见。  
  
#### [h2]异常类

异常类名 | 功能  
---|---  
[SqlException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_exceptions#class-sqlexception) | 用于处理 sql 相关的异常。  
  
  * **[接口](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces)**  

  * **[类](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_classes)**  

  * **[枚举](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_enums)**  

  * **[异常类](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_exceptions)**  

  * **[示例教程](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database-sql-samples)**  



