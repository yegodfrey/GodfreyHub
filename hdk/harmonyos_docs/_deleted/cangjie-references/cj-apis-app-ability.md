---
name: cangjie-references/cj-apis-app-ability
title: ohos.app.ability
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability
nodePath: 应用框架 / Ability Kit（程序框架服务） / 仓颉API / ohos.app.ability
---

# ohos.app.ability

ability模块提供BaseContext基类，作为所有Context类型的父类，定义了Context的基础能力。BaseContext是Ability上下文体系的基础，为UIAbilityContext、ApplicationContext、AbilityStageContext等具体上下文类提供统一的基类接口，支持判断应用是否采用Stage模型等基础功能。

#### 导入模块
    
    
    import kit.AbilityKit.*

#### 权限列表

ohos.permission.DISTRIBUTED_DATASYNC

ohos.permission.PREPARE_APP_TERMINATE

ohos.permission.PRIVACY_WINDOW

#### 使用说明

API示例代码使用说明：

  * 若示例代码首行有“// index.cj”注释，表示该示例可在仓颉模板工程的“index.cj”文件中编译运行。
  * 若示例需获取[Context](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-context)应用上下文，需在仓颉模板工程中的“main_ability.cj”文件中进行配置。



上述示例工程及配置模板详见[仓颉示例代码说明](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro#仓颉示例代码说明)。

#### class BaseContext
    
    
    public abstract class BaseContext {
        public let stageModel: Bool
    }

**功能：** 所有Context类型的父类。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]let stageModel
    
    
    public let stageModel: Bool

**功能：** 表示是否Stage模型。

**类型：** Bool

**读写能力：** 只读

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**示例：**
    
    
    import kit.AbilityKit.*
    import kit.ArkUI.WindowStage
    
    class MyUIAbility <: UIAbility {
        public override func onWindowStageCreate(windowStage: WindowStage): Unit {
            let isStageMode = this.context.stageModel
        }
    }
