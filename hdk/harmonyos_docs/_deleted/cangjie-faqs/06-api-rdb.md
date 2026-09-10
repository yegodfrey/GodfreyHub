---
name: cangjie-faqs/06-api-rdb
title: 仓颉如何使用关系型数据库增删改查
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/06-api-rdb
nodePath: FAQ / HarmonyOS API / 仓颉如何使用关系型数据库增删改查
---

# 仓颉如何使用关系型数据库增删改查

仓颉语言通过kit.ArkData提供关系型数据库（RDB）操作能力。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/65/v3/LC1ACEgmTQurw5Wk3ERDKQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260804T120414Z&HW-CC-Expire=86400&HW-CC-Sign=D83DA98A60C3F8E57A142B053307B55D65C083AD53E7696C8256A58497D9D749)

使用关系型数据库（RDB）之前，须先初始化数据库（详见 [初始化关系型数据库](https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/05-api-rdb-init)），再进行增删改查操作。

#### 插入数据

使用insert方法插入数据：
    
    
    import kit.ArkData.*
    import std.collection.HashMap
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testRdbInsert(): Unit {
        let store = rdbStore.getOrThrow() // rdbStore在初始化数据库时定义，用于获取数据库实例
        var values = HashMap<String, RelationalStoreValueType>()
        values.add("name", RelationalStoreValueType.StringValue("Alice"))
        values.add("age", RelationalStoreValueType.Integer(25))
        let rowId = store.insert("users", values)
        Hilog.info(0, "Cangjie Test", "Inserted rowId: ${rowId}")
    }

调用testRdbInsert，日志输出结果：
    
    
    Inserted rowId: 1

#### 查询数据

使用query方法查询数据，须检查rowCount后再遍历：
    
    
    import kit.ArkData.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos.business_exception.BusinessException
    
    public func testRdbQuery(): Unit {
        let store = rdbStore.getOrThrow() // rdbStore在初始化数据库时定义，用于获取数据库实例
        let predicates = RdbPredicates("users")
        predicates.equalTo("name", RelationalStoreValueType.StringValue("Alice"))
        let resultSet = store.query(predicates, columns: ["id", "name", "age"])
    
        try {
            if (resultSet.rowCount > 0) {
                while (resultSet.goToNextRow()) {
                    let id = resultSet.getLong(resultSet.getColumnIndex("id"))
                    let name = resultSet.getString(resultSet.getColumnIndex("name"))
                    let age = resultSet.getLong(resultSet.getColumnIndex("age"))
                    Hilog.info(0, "Cangjie Test", "id=${id}, name=${name}, age=${age}")
                }
            } else {
                Hilog.info(0, "Cangjie Test", "No data found")
            }
        } catch (e: BusinessException) {
            Hilog.error(0, "Cangjie Test", "Query error: ${e.message}")
        }
        resultSet.close()
    }

调用testRdbQuery（有数据时），日志输出结果（复现该结果需基于插入数据章节）：
    
    
    id=1, name=Alice, age=25
    Query error: ResultSet goToNextRow failed: Row out of bounds.

#### 更新数据

使用update方法更新数据：
    
    
    import kit.ArkData.*
    import std.collection.HashMap
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testRdbUpdate(): Unit {
        let store = rdbStore.getOrThrow() // rdbStore在初始化数据库时定义，用于获取数据库实例
        var values = HashMap<String, RelationalStoreValueType>()
        values.add("age", RelationalStoreValueType.Integer(26))
        let predicates = RdbPredicates("users")
        predicates.equalTo("name", RelationalStoreValueType.StringValue("Alice"))
        let updatedRows = store.update(values, predicates)
        Hilog.info(0, "Cangjie Test", "Updated rows: ${updatedRows}")
    }

调用testRdbUpdate，日志输出结果（复现该结果需基于插入数据章节）：
    
    
    Updated rows: 1

#### 删除数据

使用delete方法删除数据：
    
    
    import kit.ArkData.*
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testRdbDelete(): Unit {
        let store = rdbStore.getOrThrow() // rdbStore在初始化数据库时定义，用于获取数据库实例
        let predicates = RdbPredicates("users")
        predicates.equalTo("name", RelationalStoreValueType.StringValue("Alice"))
        let deletedRows = store.delete(predicates)
        Hilog.info(0, "Cangjie Test", "Deleted rows: ${deletedRows}")
    }

调用testRdbDelete，日志输出结果（复现该结果需基于插入数据章节）：
    
    
    Deleted rows: 1

#### RdbPredicates查询条件

RdbPredicates支持多种查询条件：

方法 | 说明  
---|---  
equalTo(field, value) | 等于  
notEqualTo(field, value) | 不等于  
greaterThan(field, value) | 大于  
lessThan(field, value) | 小于  
between(field, low, high) | 区间  
like(field, pattern) | 模糊匹配  
orderByAsc(field) | 升序排序  
orderByDesc(field) | 降序排序  
limit(count) | 限制结果数量  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4c/v3/Xxh3Nby1RSSjWvH4SQWekQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260804T120414Z&HW-CC-Expire=86400&HW-CC-Sign=EEA5D20E111A841C464F3CDA3A1176F5C9E2AC1E668B0433CD5C6F44B889B0C9)

  1. **须先初始化数据库** ，详见 [初始化关系型数据库](https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/05-api-rdb-init)。
  2. **goToNextRow在空结果集上会抛出异常** ，应先检查resultSet.rowCount > 0再遍历。
  3. 查询返回的ResultSet使用完毕后须调用close()释放资源。
  4. 数据值类型使用RelationalStoreValueType枚举（Integer/StringValue/Double/Boolean）。
  5. rdbStore.getOrThrow()获取已初始化的数据库实例，未初始化会抛出异常。
  6. ResultSet实例不会实时刷新，数据库变更后需重新查询。



更多关系型数据库API的使用方法，详情请参见[kit.ArkData.relationalStore](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-relational_store)。
