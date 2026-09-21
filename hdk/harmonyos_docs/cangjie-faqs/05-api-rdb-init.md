---
name: cangjie-faqs/05-api-rdb-init
title: 仓颉如何初始化关系型数据库
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/05-api-rdb-init
nodePath: FAQ / HarmonyOS API / 仓颉如何初始化关系型数据库
---

# 仓颉如何初始化关系型数据库

仓颉语言通过kit.ArkData提供关系型数据库（RDB）操作能力。使用前须先通过getRdbStore获取数据库实例并创建表结构。

#### 配置数据库

使用StoreConfig配置数据库名称和安全级别：
    
    
    import kit.ArkData.*
    
    let storeConfig = StoreConfig(
        RelationalStoreSecurityLevel.S3,
        name: "mydb.db"
    )

安全级别说明：

级别 | 说明  
---|---  
S1 | 表示数据库的安全级别为低级别，当数据泄露时会产生较低影响。  
S2 | 表示数据库的安全级别为中级别，当数据泄露时会产生较大影响。  
S3 | 表示数据库的安全级别为高级别，当数据泄露时会产生重大影响。  
S4 | 表示数据库的安全级别为关键级别，当数据泄露时会产生严重影响。  
  
#### 初始化数据库

完整的初始化代码应放在单独的文件中：
    
    
    package ohos_app_cangjie_entry.api
    
    import kit.ArkData.*
    import kit.AbilityKit.UIAbilityContext
    import kit.PerformanceAnalysisKit.Hilog
    
    let storeConfig = StoreConfig(
        RelationalStoreSecurityLevel.S3,
        name: "mydb.db"
    )
    const SQL_CREATE_TABLE = "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INTEGER)"
    var rdbStore: Option<RdbStore> = Option<RdbStore>.None
    
    public func initRdbStoreWithTable(context: UIAbilityContext): Unit {
        let store = getRdbStore(context, storeConfig)
        store.executeSql(SQL_CREATE_TABLE)
        rdbStore = store
        Hilog.info(0, "Cangjie Test", "Database and table initialized")
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4d/v3/hTwUPO8xQCy0IlJggUC0qQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085445Z&HW-CC-Expire=86400&HW-CC-Sign=F0EAD89D6B92897BADF1B7A635E4881D1D0584BB58E55FBDDC179D94EE0B12BF)

initRdbStoreWithTable函数内部已调用getRdbStore，只需调用一次即可完成数据库实例获取和建表操作。

#### 在MainAbility中初始化

数据库初始化应在main_ability.cj的onWindowStageCreate中调用：
    
    
    package ohos_app_cangjie_entry
    
    import kit.PerformanceAnalysisKit.Hilog
    import kit.AbilityKit.{Want, UIAbility, LaunchParam, LaunchReason}
    import kit.ArkUI.WindowStage
    import ohos_app_cangjie_entry.api.initRdbStoreWithTable
    
    class MainAbility <: UIAbility {
        public init() {
            super()
            registerSelf()
        }
    
        public override func onCreate(want: Want, launchParam: LaunchParam): Unit {
            Hilog.info(1, "Cangjie", "MainAbility OnCreated.${want.abilityName}")
            match (launchParam.launchReason) {
                case LaunchReason.StartAbility => Hilog.info(1, "Cangjie", "START_ABILITY")
                case _ => ()
            }
        }
    
        public override func onWindowStageCreate(windowStage: WindowStage): Unit {
            Hilog.info(1, "Cangjie", "MainAbility onWindowStageCreate.")
            windowStage.loadContent("EntryView")
            initRdbStoreWithTable(this.context)
        }
    }

应用启动，日志输出结果：
    
    
    Database and table initialized

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e2/v3/7ZBmX0m-QEG7ksYehzLWPw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085445Z&HW-CC-Expire=86400&HW-CC-Sign=B11D31760FD55DE75B9CD0192F88CBFCCD0CF27742958A2134828B662C7E6B5F)

  1. **初始化时机** ：应在main_ability.cj的onWindowStageCreate中调用。
  2. executeSql可执行任意SQL语句，包括建表、索引创建等。
  3. rdbStore变量供其他模块通过rdbStore.getOrThrow()获取数据库实例。
  4. 数据库文件默认存储在应用沙箱目录，随应用卸载而删除。



增删改查操作请参见 [关系型数据库增删改查](https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/06-api-rdb)。
