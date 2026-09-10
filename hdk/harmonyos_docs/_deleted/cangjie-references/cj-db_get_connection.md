---
name: cangjie-references/cj-db_get_connection
title: 获取数据库连接示例
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-db_get_connection
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.database.sql / 示例教程 / 获取数据库连接示例
---

# 获取数据库连接示例
    
    
    import std.database.sql.*
    
    main(): Unit {
        // 获取已经注册的驱动
        let drv = DriverManager.getDriver("opengauss") ?? return
    
        // 设置打开数据源的选项
        let opts = [
            ("cachePrepStmts", "true"),
            ("prepStmtCacheSize", "250"),
            ("prepStmtCacheSqlLimit", "2048")
        ]
    
        // 通过连接路径和选项打开数据源
        let ds = drv.open("opengauss://testuser:testpwd@localhost:5432/testdb", opts)
    
        // 设置连接选项
        ds.setOption(SqlOption.SSLMode, SqlOption.SSLModeVerifyCA)
        ds.setOption(SqlOption.SSLCA, "ca.crt")
        ds.setOption(SqlOption.SSLCert, "server.crt")
        ds.setOption(SqlOption.SSLKey, "server.key")
        ds.setOption(SqlOption.SSLKeyPassword, "key_password")
        ds.setOption(SqlOption.TlsVersion, "TLSv1.2,TLSv1.3")
    
        // 返回一个可用连接
        ds.connect()
    }
