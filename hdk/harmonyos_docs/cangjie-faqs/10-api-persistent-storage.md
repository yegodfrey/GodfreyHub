---
name: cangjie-faqs/10-api-persistent-storage
title: 仓颉如何使用持久化数据存储API
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/10-api-persistent-storage
nodePath: FAQ / HarmonyOS API / 仓颉如何使用持久化数据存储API
---

# 仓颉如何使用持久化数据存储API

仓颉语言提供多种持久化数据存储方式，根据数据特点和场景选择合适的方案。

#### 用户首选项（Preferences）

适用于轻量级Key-Value数据存储，如用户个性化设置：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c8/v3/cNgo8fEuTjSzgOMeU4WS2Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085446Z&HW-CC-Expire=86400&HW-CC-Sign=2577018FAB0C3427CC31C136C360691332E1B4E31D64D86C7532B7A6D64B345F)

须通过UIAbilityContext获取Preferences实例。UIAbilityContext的获取，详见[UIAbilityContext使用说明](https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/01-api-context)。
    
    
    import kit.ArkData.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos.business_exception.BusinessException
    import ohos_app_cangjie_entry.global.Global
    
    public func testPreferencesStore(): Unit {
        try {
            let preferences = Preferences.getPreferences(Global.uiAbilityContext, PreferencesOptions("my_prefs")) // Global.uiAbilityContext主要用于存储UIAbilityContext。Global在ohos_app_cangjie_entry.global包中定义
    
            preferences.put("username", PreferencesValueType.StringData("Cangjie"))
            preferences.put("launchCount", PreferencesValueType.Integer(1))
            preferences.flush()
    
            let usernameValue = preferences.get("username", PreferencesValueType.StringData(""))
            let countValue = preferences.get("launchCount", PreferencesValueType.Integer(0))
    
            match (usernameValue) {
                case PreferencesValueType.StringData(s) => Hilog.info(0, "Cangjie Test", "username=${s}")
                case _ => ()
            }
            match (countValue) {
                case PreferencesValueType.Integer(n) => Hilog.info(0, "Cangjie Test", "count=${n}")
                case _ => ()
            }
        } catch (e: BusinessException) {
            Hilog.error(0, "Cangjie Test", "Error: ${e.message}")
        }
    }

调用testPreferencesStore，日志输出结果：
    
    
    username=Cangjie
    count=1

更多用户首选项的说明请参见[用户首选项数据互通](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-app-data-persistence)。

#### 关系型数据库（RDB）

适用于结构化数据存储，支持SQL查询。

数据库初始化和增删改查操作请参见：

  * [初始化关系型数据库](https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/05-api-rdb-init)
  * [关系型数据库增删改查](https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/06-api-rdb)



#### 方案选择

存储方式 | 适用场景 | 数据量 | 特点  
---|---|---|---  
Preferences | 轻量级键值对 | 数KB | 简单易用，不支持多进程  
关系型数据库 | 结构化数据 | 数MB~数GB | 支持SQL，事务，多进程  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/48/v3/ZfScpBunRk-FBmCVSohh2g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085446Z&HW-CC-Expire=86400&HW-CC-Sign=95DD8DF8E197F859925CC5422D98E43B36C5FBA98D8463D19CF63DC57F11D7F4)

  1. Preferences的flush()方法将内存数据持久化到文件，须显式调用。
  2. 使用PreferencesValueType.StringData(...) / PreferencesValueType.Integer(...)等封装数据值。
  3. get()返回PreferencesValueType枚举，需使用match解析具体值。



更多持久化存储API的使用方法，详情请参见[ohos.data.preferences（用户首选项）](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-preferences)。
