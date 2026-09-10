---
name: cj-docs/zh/1.1.3/libs/std/database_sql/database_sql_package_api/database_sql_package_exceptions
title: 异常类
uri: https://cj-docs.gitcode.com/zh/1.1.3/libs/std/database_sql/database_sql_package_api/database_sql_package_exceptions.html
category: libs
---

# 异常类

## class SqlException

```
public open class SqlException <: Exception {
    public init()
    public init(message: String, sqlState: String, errorCode: Int64)
    public init(message: String)
}
```

功能：用于处理 sql 相关的异常。

父类型：

- [Exception](./../../core/core_package_api/core_package_exceptions.html#class-exception)

### prop errorCode

```
public prop errorCode: Int64
```

功能：数据库供应商返回的整数错误代码。

类型：[Int64](./../../core/core_package_api/core_package_intrinsics.html#int64)

示例：

```
import std.database.sql.*

main() {
    // 创建一个SqlException实例
    let exception = SqlException("Error message", "SQLST", 12345i64)

    // 访问errorCode属性
    let errorCode = exception.errorCode
    println("Error code: ${errorCode}")
}
```

运行结果：

```
Error code: 12345
```

### prop message

```
public override prop message: String
```

功能：获取异常信息字符串。

类型：[String](./../../core/core_package_api/core_package_structs.html#struct-string)

示例：

```
import std.database.sql.*

main() {
    // 创建一个SqlException实例
    let exception = SqlException("Error message", "SQLST", 12345i64)

    // 访问message属性
    let message = exception.message
    println("Error message: ${message}")
}
```

运行结果：

```
Error message: Error message, SqlState: SQLST, errorCode: 12345
```

### prop sqlState

```
public prop sqlState: String
```

功能：长度为五个字符的字符串，是数据库系统返回的最后执行的 sql 语句状态。

类型：[String](./../../core/core_package_api/core_package_structs.html#struct-string)

示例：

```
import std.database.sql.*

main() {
    // 创建一个SqlException实例
    let exception = SqlException("Error message", "SQLST", 12345i64)

    // 访问sqlState属性
    let sqlState = exception.sqlState
    println("SQL state: ${sqlState}")
}
```

运行结果：

```
SQL state: SQLST
```

### init()

```
public init()
```

功能：无参构造函数。

示例：

```
import std.database.sql.*

main() {
    // 使用无参构造函数创建SqlException实例
    let exception = SqlException()

    // 打印异常信息
    println("Exception message: ${exception.message}")
    println("SQL state: ${exception.sqlState}")
    println("Error code: ${exception.errorCode}")
}
```

运行结果：

```
Exception message: errorCode: 0
SQL state: 
Error code: 0
```

### init(String)

```
public init(message: String)
```

功能：根据异常信息创建 [SqlException](./database_sql_package_exceptions.html#class-sqlexception) 实例。

参数：

- message: [String](./../../core/core_package_api/core_package_structs.html#struct-string) - 异常信息。

示例：

```
import std.database.sql.*

main() {
    // 使用带消息参数的构造函数创建SqlException实例
    let exception = SqlException("Database connection failed")

    // 打印异常信息
    println("Exception message: ${exception.message}")
    println("SQL state: ${exception.sqlState}")
    println("Error code: ${exception.errorCode}")
}
```

运行结果：

```
Exception message: Database connection failed, errorCode: 0
SQL state: 
Error code: 0
```

### init(String, String, Int64)

```
public init(message: String, sqlState: String, errorCode: Int64)
```

功能：根据异常信息、SQL 语句状态、错误码信息，创建 [SqlException](./database_sql_package_exceptions.html#class-sqlexception) 实例。

参数：

- message: [String](./../../core/core_package_api/core_package_structs.html#struct-string) - 异常信息。
- sqlState: [String](./../../core/core_package_api/core_package_structs.html#struct-string) - 长度为五个字符的字符串，是数据库系统返回的最后执行的 sql 语句状态。
- errorCode: [Int64](./../../core/core_package_api/core_package_intrinsics.html#int64) - 数据库供应商返回的整数错误代码。

示例：

```
import std.database.sql.*

main() {
    // 使用带所有参数的构造函数创建SqlException实例
    let exception = SqlException("Database connection failed", "SQLST", 12345i64)

    // 打印异常信息
    println("Exception message: ${exception.message}")
    println("SQL state: ${exception.sqlState}")
    println("Error code: ${exception.errorCode}")
}
```

运行结果：

```
Exception message: Database connection failed, SqlState: SQLST, errorCode: 12345
SQL state: SQLST
Error code: 12345
```