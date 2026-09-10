---
name: cangjie-faqs/01-api-context
title: 仓颉如何获取和使用UIAbilityContext
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/01-api-context
nodePath: FAQ / HarmonyOS API / 仓颉如何获取和使用UIAbilityContext
---

# 仓颉如何获取和使用UIAbilityContext

在HarmonyOS应用开发中，许多系统API需要通过UIAbilityContext来调用，如文件读写、资源管理、权限申请、数据库操作等。使用仓颉语言在项目中定义Global类是全局存储和访问UIAbilityContext最佳实践之一。

#### 为什么需要Global类

HarmonyOS应用中，以下场景都需要UIAbilityContext：

场景 | 需要的Context属性 | 相关FAQ  
---|---|---  
文件读写 | filesDir（应用沙箱目录） | [文件读写](https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/20-file-io)  
资源访问 | resourceManager | [资源管理](https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/07-api-resource)  
权限申请 | UIAbilityContext | [权限管理](https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/09-api-permission)  
数据库操作 | UIAbilityContext | [初始化关系型数据库](https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/05-api-rdb-init)  
持久化存储 | UIAbilityContext | [持久化存储](https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/10-api-persistent-storage)  
  
由于UIAbilityContext只能在UIAbility的生命周期回调中获取，无法在普通函数中直接访问，因此需要通过Global类将其保存为全局变量。

#### 定义Global类

Global类推荐放在单独的文件global/global.cj中：

**文件路径** : entry/src/main/cangjie/global/global.cj
    
    
    package ohos_app_cangjie_entry.global
    
    import kit.ArkUI.*
    import kit.AbilityKit.*
    
    public class Global {
        public static var _uiAbilityContext: Option<UIAbilityContext> = None
        public static var _windowStage: Option<WindowStage> = None
    
        public static prop uiAbilityContext: UIAbilityContext {
            get() {
                match (_abilityContext) {
                    case Some(context) => context
                    case None => throw Exception("Global.uiAbilityContext is not set")
                }
            }
        }
    
        public static prop windowStage: WindowStage {
            get() {
                match (_windowStage) {
                    case Some(stage) => stage
                    case None => throw Exception("Global.windowStage is not set")
                }
            }
        }
    }

#### 在MainAbility中初始化Global

在main_ability.cj的onWindowStageCreate回调中设置context：
    
    
    package ohos_app_cangjie_entry
    
    import kit.AbilityKit.{UIAbility, Want, LaunchParam, LaunchReason}
    import kit.ArkUI.WindowStage
    import kit.PerformanceAnalysisKit.Hilog
    import ohos_app_cangjie_entry.global.Global
    
    class MainAbility <: UIAbility {
        public override func onCreate(want: Want, launchParam: LaunchParam): Unit {
            Hilog.info(1, "Cangjie", "MainAbility OnCreated")
        }
    
        public override func onWindowStageCreate(windowStage: WindowStage): Unit {
            Hilog.info(1, "Cangjie", "MainAbility onWindowStageCreate")
            // 将 context 和 windowStage 保存到 Global 类中
            Global._abilityContext = Some(this.context)
            Global._windowStage = Some(windowStage)
            windowStage.loadContent("EntryView")
        }
    }

#### 使用Global获取Context

在其他文件中使用Global.uiAbilityContext：
    
    
    import ohos_app_cangjie_entry.global.Global
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testGetFilesDir(): Unit {
        // 获取应用文件目录
        let filesDir = Global.uiAbilityContext.filesDir
        Hilog.info(0, "Cangjie Test", "filesDir: ${filesDir}")
    }
    
    public func testGetResourceManager(): Unit {
        // 获取资源管理器
        let resourceManager = Global.uiAbilityContext.resourceManager
        Hilog.info(0, "Cangjie Test", "resourceManager obtained")
    }
    
    public func testGetApplicationInfo(): Unit {
        // 获取应用信息
        let appInfo = Global.uiAbilityContext.applicationInfo
        Hilog.info(0, "Cangjie Test", "name: ${appInfo.name}")
        Hilog.info(0, "Cangjie Test", "accessTokenId: ${appInfo.accessTokenId}")
    }
    
    public func testGetArea(): Unit {
        // 获取文件加密分区
        let context = Global.uiAbilityContext
        Hilog.info(0, "Cangjie Test", "filesDir: ${context.filesDir}")
        Hilog.info(0, "Cangjie Test", "area: ${context.area}")
    }

调用以上函数，日志输出结果（根据自身项目输出结果可能不同）：
    
    
    filesDir: /data/storage/el2/base/haps/entry/files
    resourceManager obtained
    name: com.example.faqcodecangjie
    accessTokenId: 537643668
    filesDir: /data/storage/el2/base/haps/entry/files
    area: AreaMode.El2

#### Global类的常用属性

通过Global.uiAbilityContext可访问以下属性：

属性 | 类型 | 说明  
---|---|---  
filesDir | String | 文件目录，详情参考[应用沙箱目录](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-sandbox-directory)。  
area | contextConstant.AreaMode | 文件分区信息，按加密等级AreaMode 进行分区。  
resourceManager | resmgr.ResourceManager | 资源管理对象。  
applicationInfo | ApplicationInfo | 当前应用程序的信息。  
... | ... | ...  
  
ApplicationInfo类常用属性：

属性 | 类型 | 说明  
---|---|---  
name | String | 应用包的bundle名称，对应app.json5里面的bundleName。  
accessTokenId | UInt32 | 应用程序的accessTokenId，应用的身份标识，在程序访问控制校验接口中使用。  
codePath | String | 应用程序的安装目录。  
... | ... | ...  
  
#### 最佳实践

  1. **文件位置** ：Global类推荐放在global/global.cj单独文件中，便于管理和导入。
  2. **初始化时机** ：在main_ability.cj的onWindowStageCreate中设置Global，确保Context已创建。
  3. **导入路径** ：使用import ohos_app_cangjie_entry.global.Global导入。
  4. **错误处理** ：使用Global前确保已初始化，否则会抛出异常。
  5. **线程安全** ：Global使用静态变量，多线程访问时需注意同步。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6a/v3/NDsi1ub4R2uL4CeXn9Y4hQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260804T120411Z&HW-CC-Expire=86400&HW-CC-Sign=58448984451F1BA52B99DEC9399CC814955288702A49FB9AE96DC77D469B8B3A)

  1. Global类须为public，且放在独立的global目录下。
  2. 使用Global前须确保onWindowStageCreate已执行，否则会抛出异常。
  3. Context只能在主线程使用，不应在其他线程直接调用。
  4. 在main_ability.cj中需导入Global类并设置context。



更多关于UIAbilityContext的使用，详情请参见[UIAbilityContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability)。
