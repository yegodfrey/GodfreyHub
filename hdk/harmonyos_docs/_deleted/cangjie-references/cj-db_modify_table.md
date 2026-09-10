---
name: cangjie-references/cj-db_modify_table
title: 删除表、创建表示例
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-db_modify_table
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.database.sql / 示例教程 / 删除表、创建表示例
---

# 删除表、创建表示例
    
    
    import std.database.sql.*
    
    main() {
        // 获取数据库链接示例
        let drv = DriverManager.getDriver("opengauss") ?? return
        let opts = [
            ("cachePrepStmts", "true"),
            ("prepStmtCacheSize", "250"),
            ("prepStmtCacheSqlLimit", "2048")
        ]
    
        let ds = drv.open("opengauss://testuser:testpwd@localhost:5432/testdb", opts)
    
        let conn = ds.connect()
    
        // 删除和创建表
        var stmt = conn.prepareStatement("DROP TABLE IF EXISTS test")
        var ur = stmt.update()
        println("Update Result: ${ur.rowCount} ${ur.lastInsertId}")
        stmt.close()
        stmt = conn.prepareStatement("CREATE TABLE test(id SERIAL PRIMARY KEY, name VARCHAR(20) NOT NULL, age INT)")
        ur = stmt.update()
        println("Update Result: ${ur.rowCount} ${ur.lastInsertId}")
        stmt.close()
    }
