---
name: cangjie-references/cj-database_sql_package_interfaces
title: 接口
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.database.sql / 接口
---

# 接口

#### interface ColumnInfo
    
    
    public interface ColumnInfo {
        prop name: String
        prop typeName: String
        prop length: Int64
        prop scale: Int64
        prop nullable: Bool
        prop displaySize: Int64
    }

功能：执行 Select/Query 语句返回结果的列信息。

#### [h2]prop displaySize
    
    
    prop displaySize: Int64

功能：获取列值的最大显示长度，如果无限制，则应该返回 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64).Max （仍然受数据库的限制）。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

#### [h2]prop length
    
    
    prop length: Int64

功能：获取列值大小。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4b/v3/HgqySFroRlubiiAVpbMOcg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085303Z&HW-CC-Expire=86400&HW-CC-Sign=9013812A60D5D19C2737748780E08607A9EE53ED3063A460E07E50F90C9A31F9)

  * 对于数值数据，表示最大精度。
  * 对于字符数据，表示以字符为单位的长度。
  * 对于日期时间数据类型，表示字符串表示形式的最大字符长度。
  * 对于二进制数据，表示以字节为单位的长度。
  * 对于 RowID 数据类型，表示以字节为单位的长度。
  * 对于列大小不适用的数据类型，返回 0。



类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

#### [h2]prop name
    
    
    prop name: String

功能：列名或者别名。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### [h2]prop nullable
    
    
    prop nullable: Bool

功能：表示列值是否允许数据库 Null 值。

类型：[Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool)

#### [h2]prop scale
    
    
    prop scale: Int64

功能：获取列值的小数长度，如果无小数部分，返回 0。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

#### [h2]prop typeName
    
    
    prop typeName: String

功能：获取列类型名称，如果在仓颉中有对应数据类型的定义，返回对应类型的 toString 函数的返回值；如果在仓颉中无对应数据类型的定义，由数据库驱动定义。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### interface Connection
    
    
    public interface Connection <: Resource {
        prop state: ConnectionState
        func getMetaData(): Map<String, String>
        func prepareStatement(sql: String): Statement
        func createTransaction(): Transaction
    }

功能：数据库连接接口。

继承该接口的 class、interface、struct 也需要遵守该接口中函数的入参及返回值定义。

父类型：

  * [Resource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-resource)



#### [h2]prop state
    
    
    prop state: ConnectionState

功能：描述与数据源连接的当前状态。

类型：[ConnectionState](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_enums#enum-connectionstate)

#### [h2]func createTransaction()
    
    
    func createTransaction(): Transaction

功能：创建事务对象。

返回值：

  * [Transaction](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#interface-transaction) \- 事务对象。



异常：

  * [SqlException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_exceptions#class-sqlexception) \- 当已经处于事务状态，不支持并行事务时，抛出异常。



#### [h2]func getMetaData()
    
    
    func getMetaData(): Map<String, String>

功能：返回连接到的数据源元数据。

返回值：

  * [Map](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-mapk-v)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string), [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)> \- 数据源元数据。



#### [h2]func prepareStatement(String)
    
    
    func prepareStatement(sql: String): Statement

功能：通过传入的 sql 语句，返回一个预执行的 [Statement](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#interface-statement) 对象实例。

参数：

  * sql: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 预执行的 sql 语句，sql 语句的参数只支持 ? 符号占位符。



返回值：

  * [Statement](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#interface-statement) \- 一个可以执行 sql 语句的实例对象。



异常：

  * [SqlException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_exceptions#class-sqlexception) \- 当 sql 语句包含不认识的字符时，抛出异常。



#### interface Datasource
    
    
    public interface Datasource <: Resource {
        func setOption(key: String, value: String): Unit
        func connect(): Connection
    }

功能：数据源接口。

继承该接口的 class、interface、struct 也需要遵守该接口中函数的入参及返回值定义。

父类型：

  * [Resource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-resource)



#### [h2]func connect()
    
    
    func connect(): Connection

功能：返回一个可用的连接。

返回值：

  * [Connection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#interface-connection) \- 数据库连接实例。



#### [h2]func setOption(String, String)
    
    
    func setOption(key: String, value: String): Unit

功能：设置连接选项。

参数：

  * key: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 连接选项名称。
  * value: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 连接选项的值。



#### interface Driver
    
    
    public interface Driver {
        prop name: String
        prop version: String
        prop preferredPooling: Bool
        func open(connectionString: String, opts: Array<(String, String)>): Datasource
    }

功能：数据库驱动接口。

继承该接口的 class、interface、struct 也需要遵守该接口中函数的入参及返回值定义。

#### [h2]prop name
    
    
    prop name: String

功能：驱动名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### [h2]prop preferredPooling
    
    
    prop preferredPooling: Bool

功能：指示驱动程序是否与连接池亲和。

当该属性为 false 时，不建议使用连接池进行管理。例如，对于某些数据库驱动（如 SQLite），连接池化的收益不明显，因此不建议使用连接池。

类型：[Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool)

#### [h2]prop version
    
    
    prop version: String

功能：驱动版本。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### [h2]func open(String, Array<(String, String)>)
    
    
    func open(connectionString: String, opts: Array<(String, String)>): Datasource

功能：通过 connectionString 和选项打开数据源。

参数：

  * connectionString: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 数据库连接字符串。
  * opts: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<([String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string), [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string))> \- key，value 的 tuple 数组，打开数据源的选项。



返回值：

  * [Datasource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#interface-datasource) \- 数据源实例。



#### interface QueryResult
    
    
    public interface QueryResult <: Resource {
        prop columnInfos: Array<ColumnInfo>
        func next(values: Array<SqlDbType>): Bool
        func next(): Bool
        func get<T>(index: Int64): T
        func getOrNull<T>(index: Int64): ?T
    }

功能：执行 Select 语句产生的结果接口。

继承该接口的 class、interface、struct 也需要遵守该接口中函数的入参及返回值定义。

父类型：

  * [Resource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-resource)



#### [h2]prop columnInfos
    
    
    prop columnInfos: Array<ColumnInfo>

功能：返回结果集的列信息，比如列名，列类型，列长度，是否允许数据库 Null 值等。

类型：[Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[ColumnInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#interface-columninfo)>

#### [h2]func get<T>(Int64)
    
    
    func get<T>(index: Int64): T

功能：从结果集的当前行检索指定列的值。

参数：

  * index: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 指定列。



返回值：

  * T - T 类型的实例。



#### [h2]func getOrNull<T>(Int64)
    
    
    func getOrNull<T>(index: Int64): ?T

功能：从结果集的当前行检索指定列的值，数据库列允许 SQL NULL。

参数：

  * index: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 指定列。



返回值：

  * ?T - T 类型的实例，如果为空，返回 None。



异常：

  * [SqlException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_exceptions#class-sqlexception) \- 索引超出列范围，或者行数据未准备好时，抛出异常。



#### [h2]func next()
    
    
    func next(): Bool

功能：向后移动一行，必须先调用一次 next() 才能移动到第一行，第二次调用移动到第二行，依此类推。当返回 true 时，驱动会在结果集的当前行填入数据，当返回 false 时结束，且不会修改结果集当前行的内容。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 下一行存在数据则返回 true，否则返回 false。



#### [h2]func next(Array<SqlDbType>) (deprecated)
    
    
    func next(values: Array<SqlDbType>): Bool

��能：向后移动一行，必须���调用一次 next 才能移动到第一行，第二次调用移动到第二行，依此类推。当返回 true 时，驱动会在 values 中填入行数据；当返回 false 时结束，且不会修改 values 的内容。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b9/v3/dld75zGyRby3xjoPaFKYPg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085303Z&HW-CC-Expire=86400&HW-CC-Sign=F648096B8BE709C96490DCD73E555AF541E74FB310272E2F7D9042FB0F99E5D3)

未来版本即将废弃，可使用 [next()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#func-next) 替代。

参数：

  * values: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[SqlDbType (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#interface-sqldbtype-deprecated)> \- sql 数据类型的数据列表。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 下一行存在数据则返回 true，否则返回 false。



#### interface SqlDbType (deprecated)
    
    
    public interface SqlDbType {
        prop name: String
    }

功能：所有 sql 数据类型的父类。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9a/v3/ukeoTKvJR-m_KPaI30ethQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085303Z&HW-CC-Expire=86400&HW-CC-Sign=74E64A57C91D70635672765F241B8A61907BB5B85C2A4CF1BC8B5B7E893C871A)

未来版本即将废弃。

要扩展用户定义的类型，请继承 [SqlDbType (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#interface-sqldbtype-deprecated) 或 [SqlNullableDbType (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#interface-sqlnullabledbtype-deprecated)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b7/v3/7fefz4IxQPOZa24pwPaKmQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085303Z&HW-CC-Expire=86400&HW-CC-Sign=EE9D018BE57AB876258FD339A14A094B33D480C79FEBD62D5801D418A1B6DAAF)

[SqlDbType (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#interface-sqldbtype-deprecated) 接口所有实现类型都必须具有公共 value 属性。每种 sql 数据类型实现类，同时满足以下条件：

  * 只有一个参数的构造函数，参数类型为 T（T 为仓颉语言支持的类型）。
  * public 修饰的 value 属性，其类型必须上一条中使用的参数类型一致，其值为对应仓颉类型的值。
  * 如果数据类型允许 null 值，继承 [SqlNullableDbType (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#interface-sqlnullabledbtype-deprecated)，null 值时，value 字段的值为 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<T>.None。



#### [h2]prop name
    
    
    prop name: String

功能：获取类型名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### interface SqlNullableDbType (deprecated)
    
    
    public interface SqlNullableDbType <: SqlDbType {}

功能：允许 null 值的 sql 数据类型父类。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/44/v3/rj_H2pgATziXjRsj5zXmtQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085303Z&HW-CC-Expire=86400&HW-CC-Sign=8F654587594DA774C59F67E2D2415D9906CF4594DAA157CD2B67B744B5B3973B)

未来版本即将废弃。

如果为 null 值，value 属性值为 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont).None。

父类型：

  * SqlDbType (deprecated)



#### interface Statement
    
    
    public interface Statement <: Resource {
        prop parameterColumnInfos: Array<ColumnInfo>
        func setOption(key: String, value: String): Unit
        func update(params: Array<SqlDbType>): UpdateResult
        func query(params: Array<SqlDbType>): QueryResult
        func set<T>(index: Int64, value: T): Unit
        func setNull(index: Int64): Unit
        func update(): UpdateResult
        func query(): QueryResult
    }

功能：sql 语句预执行接口。

[Statement](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#interface-statement) 绑定了一个 [Connection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#interface-connection) ，继承该接口的 class、interface、struct 也需要遵守该接口中函数的入参及返回值定义。

父类型：

  * [Resource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-resource)



#### [h2]prop parameterColumnInfos
    
    
    prop parameterColumnInfos: Array<ColumnInfo>

功能：预执行 sql 语句中，占位参数的列信息，比如列名，列类型，列长度，是否允许数据库 Null 值等。

类型：[Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[ColumnInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#interface-columninfo)>

#### [h2]func query()
    
    
    func query(): QueryResult

功能：执行 sql 语句，得到查询结果。

返回值：

  * [QueryResult](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#interface-queryresult) \- 查询结果。



异常：

  * [SqlException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_exceptions#class-sqlexception) \- 当执行过程中发生了异常情况，比如网络中断，服务器超时，参数个数不正确时，抛出异常。



#### [h2]func query(Array<SqlDbType>) (deprecated)
    
    
    func query(params: Array<SqlDbType>): QueryResult

功能：执行 sql 语句，得到查询结果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2a/v3/aDTEcSzuSDmpzRL6rxaZ1g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085303Z&HW-CC-Expire=86400&HW-CC-Sign=021B97A5C2676686FCD096D17AB881846CE7F556585A574E1D9768C0AD65FF7D)

未来版本即将废弃，可使用 query() 替代。

参数：

  * params: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[SqlDbType (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#interface-sqldbtype-deprecated)> \- sql 数据类型的数据列表，用于替换 sql 语句中的 ? 占位符。



返回值：

  * [QueryResult](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#interface-queryresult) \- 查询结果。



异常：

  * [SqlException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_exceptions#class-sqlexception) \- 当执行过程中发生了异常情况，比如网络中断，服务器超时，参数个数不正确时，抛出异常。



#### [h2]func set<T>(Int64, T)
    
    
    func set<T>(index: Int64, value: T): Unit

功能：设置 sql 参数，将仓颉的数据类型转成数据库的数据类型。

参数：

  * index: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 参数所在序列。
  * value: T - 参数值。



#### [h2]func setNull(Int64)
    
    
    func setNull(index: Int64): Unit

功能：将指定位置处的语句参数设置为 SQL NULL。

参数：

  * index: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 参数所在序列。



#### [h2]func setOption(String, String)
    
    
    func setOption(key: String, value: String): Unit

功能：设置预执行 sql 语句选项。

参数：

  * key: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 连接选项名称。
  * value: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 连接选项的值。



#### [h2]func update()
    
    
    func update(): UpdateResult

功能：执行 sql 语句，得到更新结果。

返回值：

  * [UpdateResult](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#interface-updateresult) \- 更新结果。



异常：

  * [SqlException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_exceptions#class-sqlexception) \- 当执行过程中发生了异常情况，比如网络中断，服务器超时，参数个数不正确时，抛出异常。



#### [h2]func update(Array<SqlDbType>) (deprecated)
    
    
    func update(params: Array<SqlDbType>): UpdateResult

功能：执行 sql 语句，得到更新结果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/47/v3/on8zEjSiQV6eGN1WmZaVOw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085303Z&HW-CC-Expire=86400&HW-CC-Sign=5C3433C63955D988F0F627EC5C84CDD0C764BEB1ADE89BE36AC331EF474EA018)

未来版本即将废弃，可使用 update() 替代。

参数：

  * params: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[SqlDbType (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#interface-sqldbtype-deprecated)> \- sql 数据类型的数据列表，用于替换 sql 语句中的 ? 占位符。



返回值：

  * [UpdateResult](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_interfaces#interface-updateresult) \- 更新结果。



异常：

  * [SqlException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_exceptions#class-sqlexception) \- 当执行过程中发生了异常情况，比如网络中断、服务器超时，参数个数不正确时，抛出异常。



#### interface Transaction
    
    
    public interface Transaction {
        mut prop isoLevel: TransactionIsoLevel
        mut prop accessMode: TransactionAccessMode
        mut prop deferrableMode: TransactionDeferrableMode
        func begin(): Unit
        func commit(): Unit
        func rollback(): Unit
        func rollback(savePointName: String): Unit
        func save(savePointName: String): Unit
        func release(savePointName: String): Unit
    }

功能：定义数据库事务的核心行为。

继承该接口的 class、interface、struct 也需要遵守该接口中函数的入参及返回值定义。

#### [h2]prop accessMode
    
    
    mut prop accessMode: TransactionAccessMode

功能：获取数据库事务访问模式。

类型：[TransactionAccessMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_enums#enum-transactionaccessmode)

#### [h2]prop deferrableMode
    
    
    mut prop deferrableMode: TransactionDeferrableMode

功能：获取数据库事务延迟模式。

类型：[TransactionDeferrableMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_enums#enum-transactiondeferrablemode)

#### [h2]prop isoLevel
    
    
    mut prop isoLevel: TransactionIsoLevel

功能：获取数据库事务隔离级别。

类型：[TransactionIsoLevel](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_enums#enum-transactionisolevel)

#### [h2]func begin()
    
    
    func begin(): Unit

功能：开始数据库事务。

异常：

  * [SqlException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_exceptions#class-sqlexception) \- 当提交事务时服务器端发生错误，以及当事务已提交或回滚或连接已断开时，抛出异常。



#### [h2]func commit()
    
    
    func commit(): Unit

功能：提交数据库事务。

异常：

  * [SqlException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_exceptions#class-sqlexception) \- 当提交事务时服务器端发生错误，以及当事务已提交或回滚或连接已断开时，抛出异常。



#### [h2]func release(String)
    
    
    func release(savePointName: String): Unit

功能：销毁先前在当前事务中定义的保存点。这允许系统在事务结束之前回收一些资源。

参数：

  * savePointName: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 保存点名称。



异常：

  * [SqlException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_exceptions#class-sqlexception) \- 当提交事务时服务器端发生错误，以及当事务已提交或回滚或连接已断开时，抛出异常。



#### [h2]func rollback()
    
    
    func rollback(): Unit

功能：从挂起状态回滚事务。

异常：

  * [SqlException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_exceptions#class-sqlexception) \- 当提交事务时服务器端发生错误，以及当事务已提交或回滚或连接已断开时，抛出异常。



#### [h2]func rollback(String)
    
    
    func rollback(savePointName: String): Unit

功能：回滚事务至指定保存点名称。

参数：

  * savePointName: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 保存点名称。



异常：

  * [SqlException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_exceptions#class-sqlexception) \- 当提交事务时服务器端发生错误，以及当事务已提交或回滚或连接已断开时，抛出异常。



#### [h2]func save(String)
    
    
    func save(savePointName: String): Unit

功能：在事务中创建一个指定名称的保存点，可用于回滚此保存点之后的事务。

参数：

  * savePointName: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 保存点名称。



异常：

  * [SqlException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-database_sql_package_exceptions#class-sqlexception) \- 当提交事务时服务器端发生错误，以及当事务已提交或回滚或连接已断开时，抛出异常。



#### interface UpdateResult
    
    
    public interface UpdateResult {
        prop rowCount: Int64
        prop lastInsertId: Int64
    }

功能：执行 Insert、Update、Delete 语句产生的结果接口。

继承该接口的 class、interface、struct 也需要遵守该接口中函数的入参及返回值定义。

#### [h2]prop lastInsertId
    
    
    prop lastInsertId: Int64

功能：执行 Insert 语句自动生成的最后 row ID ，如果不支持则 row ID 为 0。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

#### [h2]prop rowCount
    
    
    prop rowCount: Int64

功能：执行 Insert、Update、Delete 语句影响的行数。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)
