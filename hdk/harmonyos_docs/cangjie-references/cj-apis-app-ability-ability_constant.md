---
name: cangjie-references/cj-apis-app-ability-ability_constant
title: ohos.app.ability.ability_constant
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ability_constant
nodePath: 应用框架 / Ability Kit（程序框架服务） / 仓颉API / ohos.app.ability.ability_constant
---

# ohos.app.ability.ability_constant

ability_constant模块提供Ability相关的枚举，包括应用启动原因LaunchReason、上次退出原因LastExitReason、迁移结果OnContinueResult等。

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

#### class LaunchParam
    
    
    public class LaunchParam {
        public var launchReason: LaunchReason
        public var lastExitReason: LastExitReason
    }

**功能：** 启动参数，主要包括Ability启动原因以及上次退出原因。Ability启动时由系统自动传入，开发者无需修改。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]var lastExitReason
    
    
    public var lastExitReason: LastExitReason

**功能：** 枚举类型，表示Ability上次退出原因。

**类型：** LastExitReason

**读写能力：** 可读写

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]var launchReason
    
    
    public var launchReason: LaunchReason

**功能：** 枚举类型，表示Ability启动原因（如故障恢复拉起、意图调用拉起、原子化服务分享拉起等），详见LaunchReason。

**类型：** LaunchReason

**读写能力：** 可读写

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### enum LastExitReason
    
    
    public enum LastExitReason {
        | Unknown
        | Normal
        | CppCrash
        | AppFreeze
        | ...
    }

**功能：** Ability上次退出原因，该类型为枚举，可配合UIAbility的[onCreate(want, launchParam)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#func-oncreatewant-launchparam)方法根据launchParam.lastExitReason的不同类型执行相应操作。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]AppFreeze
    
    
    AppFreeze

**功能：** 应用冻屏导致的应用程序退出。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]CppCrash
    
    
    CppCrash

**功能：** 进程崩溃导致的应用程序退出。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]Normal
    
    
    Normal

**功能：** 用户主动关闭，应用程序正常退出。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4c/v3/nmOeIe21S3uXI3N607012Q/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090140Z&HW-CC-Expire=86400&HW-CC-Sign=5AF7C080156D6332AA15B9E77E5AC33B77AAB40B85CC15281483EA0F8A6DDDDF)

当开发者直接调用内核kill命令等非Ability Kit提供的能力强制退出应用进程时，也会返回Normal。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]Unknown
    
    
    Unknown

**功能：** 未知原因。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### enum LaunchReason
    
    
    public enum LaunchReason {
        | Unknown
        | StartAbility
        | Call
        | Continuation
        | AppRecovery
        | ...
    }

**功能：** Ability启动原因，该类型为枚举，可配合UIAbility的[onCreate(want, launchParam)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#func-oncreatewant-launchparam)方法根据launchParam.launchReason的不同类型执行相应操作。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]AppRecovery
    
    
    AppRecovery

**功能：** 设置应用恢复后，应用故障时自动恢复启动Ability。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]Call
    
    
    Call

**功能：** 调用启动。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]Continuation
    
    
    Continuation

**功能：** 跨端迁移启动Ability。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]StartAbility
    
    
    StartAbility

**功能：** 通过[startAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#func-startabilitywant-startoptions)接口启动Ability。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]Unknown
    
    
    Unknown

**功能：** 未知原因。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### enum MemoryLevel
    
    
    public enum MemoryLevel <: Equatable<MemoryLevel> & ToString {
        | MemoryLevelModerate
        | MemoryLevelLow
        | MemoryLevelCritical
        | ...
    }

**功能：** 整机可用内存级别，该类型为枚举。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**父类型：**

  * Equatable<MemoryLevel>
  * ToString



#### [h2]MemoryLevelCritical
    
    
    MemoryLevelCritical

**功能：** 整机可用内存极低。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]MemoryLevelLow
    
    
    MemoryLevelLow

**功能：** 整机可用内存低。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]MemoryLevelModerate
    
    
    MemoryLevelModerate

**功能：** 整机可用内存适中。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]func !=(MemoryLevel)
    
    
    public operator func !=(other: MemoryLevel): Bool

**功能：** 判断两个枚举值是否不相等。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | MemoryLevel | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值不相等返回true，否则返回false。  
  
#### [h2]func ==(MemoryLevel)
    
    
    public operator func ==(other: MemoryLevel): Bool

**功能：** 判断两个枚举值是否相等。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | MemoryLevel | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值相等返回true，否则返回false。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 获取当前枚举的字符串表示。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 当前枚举的字符串表示。  
  
#### enum OnContinueResult
    
    
    public enum OnContinueResult {
        | Agree
        | Reject
        | Mismatch
        | ...
    }

**功能：** Ability迁移结果，该类型为枚举。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]Agree
    
    
    Agree

**功能：** 表示同意。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]Mismatch
    
    
    Mismatch

**功能：** 表示版本不匹配。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]Reject
    
    
    Reject

**功能：** 表示拒绝。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### enum WindowMode
    
    
    public enum WindowMode {
        | WindowModeFullscreen
        | WindowModeSplitPrimary
        | WindowModeSplitSecondary
        | ...
    }

**功能：** 启动UIAbility时窗口的创建模式，类型为枚举。可配合[startAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#func-startabilitywant-startoptions)方法使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]WindowModeFullscreen
    
    
    WindowModeFullscreen

**功能：** 全屏模式。仅在Tablet设备上生效。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]WindowModeSplitPrimary
    
    
    WindowModeSplitPrimary

**功能：** 支持应用内拉起Ability时设置为分屏，左侧分屏。仅在折叠屏和Tablet设备上生效。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]WindowModeSplitSecondary
    
    
    WindowModeSplitSecondary

**功能：** 支持应用内拉起Ability时设置为分屏，右侧分屏。仅在折叠屏和Tablet设备上生效。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22
