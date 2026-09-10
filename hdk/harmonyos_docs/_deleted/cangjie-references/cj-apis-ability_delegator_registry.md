---
name: cangjie-references/cj-apis-ability_delegator_registry
title: ohos.app.ability.ability_delegator_registry（AbilityDelegatorRegistry）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ability_delegator_registry
nodePath: 系统 / 调测调优 / Test Kit（应用测试服务） / 仓颉API / ohos.app.ability.ability_delegator_registry（AbilityDelegatorRegistry）
---

# ohos.app.ability.ability_delegator_registry（AbilityDelegatorRegistry）

ability_delegator_registry模块提供用于存储已注册的AbilityDelegator和AbilityDelegatorArgs对象的全局寄存器的能力，包括获取应用程序的AbilityDelegator对象、获取单元测试参数对象。该模块中的接口只能用于测试框架中。

#### 导入模块
    
    
    import kit.TestKit.*

#### 使用说明

API示例代码使用说明：

  * 若示例代码首行有“// index.cj”注释，表示该示例可在仓颉模板工程的“index.cj”文件中编译运行。
  * 若示例需获取[Context](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-context)应用上下文，需在仓颉模板工程中的“main_ability.cj”文件中进行配置。



上述示例工程及配置模板详见[仓颉示例代码说明](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro#仓颉示例代码说明)。

#### class AbilityDelegator
    
    
    public class AbilityDelegator {}

**功能：** AbilityDelegator用于创建并管理一个AbilityMonitor对象（该对象用于监视指定[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)生命周期状态的变更），包括对AbilityMonitor实例的添加、删除，等待[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)到达OnCreate生命周期、设置等待时间、获取指定Ability的生命周期状态、获取当前应用顶部[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)、启动指定[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)等。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]func addAbilityMonitor(AbilityMonitor)
    
    
    public func addAbilityMonitor(monitor: AbilityMonitor): Unit

**功能：** 添加AbilityMonitor实例。不支持多线程并发调用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
monitor | AbilityMonitor | 是 | - | AbilityMonitor实例。  
  
**异常：**

以下错误码详细介绍请参见[元能力子系统错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-ability)。

错误码ID | 错误信息  
---|---  
16000100 | Calling AddAbilityMonitor failed.  
  
**示例：**
    
    
    // index.cj
    
    import kit.AbilityKit.*
    import kit.TestKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let delegator = AbilityDelegatorRegistry.getAbilityDelegator()
        let monitor = AbilityMonitor(
                "EntryAbility", moduleName: "entry",
                onAbilityCreate: {ability => delegator.print("onAbilityCreate called, abilityName: ${ability.launchWant.abilityName}")}
        )
        delegator.addAbilityMonitor(monitor)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func addAbilityStageMonitor(AbilityStageMonitor)
    
    
    public func addAbilityStageMonitor(monitor: AbilityStageMonitor): Unit

**功能：** 添加一个AbilityStageMonitor对象，用于监视指定[AbilityStage](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ability_stage#class-abilitystage)的生命周期状态更改。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
monitor | AbilityStageMonitor | 是 | - | AbilityStageMonitor实例。  
  
**异常：**

以下错误码详细介绍请参见[元能力子系统错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-ability)。

错误码ID | 错误信息  
---|---  
16000100 | Calling AddAbilityStageMonitor failed.  
  
**示例：**
    
    
    // index.cj
    
    import kit.AbilityKit.*
    import kit.TestKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let delegator = AbilityDelegatorRegistry.getAbilityDelegator()
        let monitor = AbilityStageMonitor("entry", "ohos_app_cangjie_entry.MyAbilityStage")
        delegator.addAbilityStageMonitor(monitor)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func doAbilityBackground(UIAbility)
    
    
    public func doAbilityBackground(ability: UIAbility): Unit

**功能：** 调度指定[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)生命周期状态到Background状态。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
ability | [UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability) | 是 | - | 指定[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)对象。  
  
**异常：**

以下错误码详细介绍请参见[元能力子系统错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-ability)。

错误码ID | 错误信息  
---|---  
16000100 | Calling DoAbilityBackground failed.  
  
**示例：**
    
    
    // index.cj
    
    import kit.AbilityKit.*
    import kit.TestKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let delegator = AbilityDelegatorRegistry.getAbilityDelegator()
        let ability = delegator.getCurrentTopAbility()
        delegator.doAbilityBackground(ability)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func doAbilityForeground(UIAbility)
    
    
    public func doAbilityForeground(ability: UIAbility): Unit

**功能：** 调度指定[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)生命周期状态到Foreground状态。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
ability | [UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability) | 是 | - | 指定[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)对象。  
  
**异常：**

以下错误码详细介绍请参见[元能力子系统错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-ability)。

错误码ID | 错误信息  
---|---  
16000100 | Calling DoAbilityForeground failed.  
  
**示例：**
    
    
    // index.cj
    
    import kit.AbilityKit.*
    import kit.TestKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let delegator = AbilityDelegatorRegistry.getAbilityDelegator()
        let ability = delegator.getCurrentTopAbility()
        delegator.doAbilityForeground(ability)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func executeShellCommand(String, Int64)
    
    
    public func executeShellCommand(cmd: String, timeoutSecs!: Int64 = 0): ShellCmdResult

**功能：** 指定超时时间，并执行指定的shell命令。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
cmd | String | 是 | - | Shell命令字符串。  
timeoutSecs | Int64 | 否 | 0 | **命名参数。** 设定命令超时时间，单位秒（s）。  
  
**返回值：**

类型 | 说明  
---|---  
ShellCmdResult | 返回Shell命令执行结果ShellCmdResult对象。  
  
**示例：**
    
    
    // index.cj
    
    import kit.AbilityKit.*
    import kit.TestKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let delegator = AbilityDelegatorRegistry.getAbilityDelegator()
        let cmd = "cmd"
        delegator.executeShellCommand(cmd, timeoutSecs: 2)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func finishTest(String, Int64)
    
    
    public func finishTest(msg: String, code: Int64): Unit

**功能：** 结束测试并打印日志信息到单元测试终端控制台。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
msg | String | 是 | - | 日志字符串。  
code | Int64 | 是 | - | 日志码。  
  
**示例：**
    
    
    // index.cj
    
    import kit.AbilityKit.*
    import kit.TestKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let delegator = AbilityDelegatorRegistry.getAbilityDelegator()
        let msg = "msg"
        delegator.finishTest(msg, 0)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getAbilityState(UIAbility)
    
    
    public func getAbilityState(ability: UIAbility): AbilityLifecycleState

**功能：** 获取指定ability的生命周期状态。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
ability | [UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability) | 是 | - | 指定[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)对象。  
  
**返回值：**

类型 | 说明  
---|---  
AbilityLifecycleState | 指定ability的生命周期状态。  
  
**示例：**
    
    
    // index.cj
    
    import kit.AbilityKit.*
    import kit.TestKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let delegator = AbilityDelegatorRegistry.getAbilityDelegator()
        let ability = delegator.getCurrentTopAbility()
        delegator.getAbilityState(ability)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getAppContext()
    
    
    public func getAppContext(): Context

**功能：** 获取应用Context。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
[Context](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-context) | 应用Context。  
  
**示例：**
    
    
    // index.cj
    
    import kit.AbilityKit.*
    import kit.TestKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let delegator = AbilityDelegatorRegistry.getAbilityDelegator()
        let context = delegator.getAppContext()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getCurrentTopAbility()
    
    
    public func getCurrentTopAbility(): UIAbility

**功能：** 获取当前应用顶部[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability) | 返回[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)实例。  
  
**异常：**

以下错误码详细介绍请参见[元能力子系统错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-ability)。

错误码ID | 错误信息  
---|---  
16000050 | Internal error.  
16000100 | Calling GetCurrentTopAbility failed.  
  
**示例：**
    
    
    // index.cj
    
    import kit.AbilityKit.*
    import kit.TestKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let delegator = AbilityDelegatorRegistry.getAbilityDelegator()
        let ability = delegator.getCurrentTopAbility()
        delegator.getAbilityState(ability)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func print(String)
    
    
    public func print(msg: String): Unit

**功能：** 打印日志信息到单元测试终端控制台。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
msg | String | 是 | - | 日志字符串。  
  
**示例：**
    
    
    // index.cj
    
    import kit.AbilityKit.*
    import kit.TestKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let delegator = AbilityDelegatorRegistry.getAbilityDelegator()
        let msg = "msg"
        delegator.print(msg)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func removeAbilityMonitor(AbilityMonitor)
    
    
    public func removeAbilityMonitor(monitor: AbilityMonitor): Unit

**功能：** 删除已经添加的AbilityMonitor实例。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
monitor | AbilityMonitor | 是 | - | AbilityMonitor实例。  
  
**异常：**

以下错误码详细介绍请参见[元能力子系统错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-ability)。

错误码ID | 错误信息  
---|---  
16000100 | Calling RemoveAbilityMonitor failed.  
  
**示例：**
    
    
    // index.cj
    
    import kit.AbilityKit.*
    import kit.TestKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let delegator = AbilityDelegatorRegistry.getAbilityDelegator()
        let monitor = AbilityMonitor(
            "EntryAbility", moduleName: "entry",
            onAbilityCreate: {ability => delegator.print("onAbilityCreate called, abilityName: ${ability.launchWant.abilityName}")}
        )
        delegator.removeAbilityMonitor(monitor)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func removeAbilityStageMonitor(AbilityStageMonitor)
    
    
    public func removeAbilityStageMonitor(monitor: AbilityStageMonitor): Unit

**功能：** 从应用程序内存中删除指定的AbilityStageMonitor对象。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
monitor | AbilityStageMonitor | 是 | - | AbilityStageMonitor实例。  
  
**异常：**

以下错误码详细介绍请参见[元能力子系统错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-ability)。

错误码ID | 错误信息  
---|---  
16000100 | Calling RemoveAbilityStageMonitor failed.  
  
**示例：**
    
    
    // index.cj
    
    import kit.AbilityKit.*
    import kit.TestKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let delegator = AbilityDelegatorRegistry.getAbilityDelegator()
        let monitor = AbilityStageMonitor("entry", "ohos_app_cangjie_entry.MyAbilityStage")
        delegator.removeAbilityStageMonitor(monitor)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func startAbility(Want)
    
    
    public func startAbility(want: Want): Unit

**功能：** 启动指定[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
want | [Want](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-want#class-want) | 是 | - | 启动[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)参数。  
  
**异常：**

以下错误码详细介绍请参见[元能力子系统错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-ability)。

错误码ID | 错误信息  
---|---  
16000001 | The specified ability does not exist.  
16000002 | Incorrect ability type.  
16000004 | Cannot start an invisible component.  
16000005 | The specified process does not have the permission.  
16000006 | Cross-user operations are not allowed.  
16000008 | The crowdtesting application expires.  
16000009 | An ability cannot be started or stopped in Wukong mode.  
16000010 | The call with the continuation and prepare continuation flag is forbidden.  
16000011 | The context does not exist.  
16000012 | The application is controlled.  
16000013 | The application is controlled by EDM.  
16000050 | Internal error.  
16000053 | The ability is not on the top of the UI.  
16000055 | Installation-free timed out.  
16200001 | The caller has been released.  
  
**示例：**
    
    
    // index.cj
    
    import kit.AbilityKit.*
    import kit.TestKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let delegator = AbilityDelegatorRegistry.getAbilityDelegator()
        let want = Want(bundleName: "com.example.myapplication", abilityName: "EntryAbility")
        delegator.startAbility(want)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func waitAbilityMonitor(AbilityMonitor, Int64)
    
    
    public func waitAbilityMonitor(monitor: AbilityMonitor, timeout!: Int64 = 5000): UIAbility

**功能：** 设置等待时间，并等待与AbilityMonitor实例匹配的[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)到达[onCreate](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#func-oncreatewant-launchparam)生命周期，并返回[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)实例。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
monitor | AbilityMonitor | 是 | - | AbilityMonitor实例。  
timeout | Int64 | 否 | 5000 | **命名参数。** 最大等待时间，单位毫秒（ms），默认值为5000毫秒。  
  
**返回值：**

类型 | 说明  
---|---  
[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability) | 返回[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)实例。  
  
**异常：**

以下错误码详细介绍请参见[元能力子系统错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-ability)。

错误码ID | 错误信息  
---|---  
16000050 | Internal error.  
16000100 | Calling WaitAbilityMonitor failed.  
  
**示例：**
    
    
    // index.cj
    
    import kit.AbilityKit.*
    import kit.TestKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let delegator = AbilityDelegatorRegistry.getAbilityDelegator()
        let monitor = AbilityMonitor("EntryAbility", moduleName: "entry",
            onAbilityCreate: {ability => delegator.print("call onAbilityCreate success!")}
        )
        spawn {
            let ability = delegator.waitAbilityMonitor(monitor)
        }
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func waitAbilityStageMonitor(AbilityStageMonitor, Int64)
    
    
    public func waitAbilityStageMonitor(monitor: AbilityStageMonitor, timeout!: Int64 = 5000): AbilityStage

**功能：** 在指定的超时最大等待时间内，等待并返回与给定AbilityStageMonitor中设置的条件匹配的[AbilityStage](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ability_stage#class-abilitystage)对象。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
monitor | AbilityStageMonitor | 是 | - | AbilityStageMonitor实例。  
timeout | Int64 | 否 | 5000 | **命名参数。** 超时最大等待时间，单位毫秒（ms），默认值为5000毫秒。  
  
**返回值：**

类型 | 说明  
---|---  
[AbilityStage](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ability_stage#class-abilitystage) | 返回[AbilityStage](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ability_stage#class-abilitystage)对象。  
  
**异常：**

以下错误码详细介绍请参见[元能力子系统错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-ability)。

错误码ID | 错误信息  
---|---  
16000050 | Internal error.  
16000100 | Calling WaitAbilityStageMonitor failed.  
  
**示例：**
    
    
    // index.cj
    
    import kit.AbilityKit.*
    import kit.TestKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let delegator = AbilityDelegatorRegistry.getAbilityDelegator()
        let stageMonitor = AbilityStageMonitor("entry", "ohos_app_cangjie_entry.MyAbilityStage")
        spawn {
            let abilityStage = delegator.waitAbilityStageMonitor(stageMonitor, timeout: 2000)
        }
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class AbilityDelegatorArgs
    
    
    public class AbilityDelegatorArgs {}

**功能：** 测试参数信息。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]prop bundleName
    
    
    public mut prop bundleName: String

**功能：** 当前被测试应用的包名。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]prop parameters
    
    
    public mut prop parameters: HashMap<String,String>

**功能：** 当前启动单元测试的参数。

**类型：** HashMap<String,String>

**读写能力：** 可读写

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]prop testCaseNames
    
    
    public mut prop testCaseNames: String

**功能：** 测试用例名称。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]prop testRunnerClassName
    
    
    public mut prop testRunnerClassName: String

**功能：** 执行测试用例的测试执行器名称。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### class AbilityDelegatorRegistry
    
    
    public class AbilityDelegatorRegistry {}

**功能：** AbilityDelegatorRegistry提供用于存储已注册的AbilityDelegator和AbilityDelegatorArgs对象的全局寄存器的能力。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]static func getAbilityDelegator()
    
    
    public static func getAbilityDelegator(): AbilityDelegator

**功能：** 获取应用程序的AbilityDelegator对象，该对象能够使用调度测试框架的相关功能。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
AbilityDelegator | AbilityDelegator对象。可以用来调度测试框架相关功能。  
  
**示例：**
    
    
    // index.cj
    
    import kit.TestKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let delegator = AbilityDelegatorRegistry.getAbilityDelegator()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func getArguments()
    
    
    public static func getArguments(): AbilityDelegatorArgs

**功能：** 获取单元测试参数AbilityDelegatorArgs对象。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
AbilityDelegatorArgs | AbilityDelegatorArgs对象。可以用来获取测试参数。  
  
**示例：**
    
    
    // index.cj
    
    import kit.TestKit.*
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let args = AbilityDelegatorRegistry.getArguments()
        Hilog.info(0, "test", "args is ${args.bundleName}")
        Hilog.info(0, "test", "args is ${args.testCaseNames}")
        Hilog.info(0, "test", "args is ${args.testRunnerClassName}")
        Hilog.info(0, "test", "args is ${args.parameters}")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class AbilityMonitor
    
    
    public class AbilityMonitor {
        public var abilityName: String
        public var moduleName: String
        public var onAbilityCreate:?(UIAbility) -> Unit
        public var onAbilityForeground:?(UIAbility) -> Unit
        public var onAbilityBackground:?(UIAbility) -> Unit
        public var onAbilityDestroy:?(UIAbility) -> Unit
        public var onWindowStageCreate:?(UIAbility) -> Unit
        public var onWindowStageRestore:?(UIAbility) -> Unit
        public var onWindowStageDestroy:?(UIAbility) -> Unit
        public init(
            abilityName: String,
            moduleName!: String = "",
            onAbilityCreate!: ?(UIAbility) -> Unit = None,
            onAbilityForeground!: ?(UIAbility) -> Unit = None,
            onAbilityBackground!: ?(UIAbility) -> Unit = None,
            onAbilityDestroy!: ?(UIAbility) -> Unit = None,
            onWindowStageCreate!: ?(UIAbility) -> Unit = None,
            onWindowStageRestore!: ?(UIAbility) -> Unit = None,
            onWindowStageDestroy!: ?(UIAbility) -> Unit = None
        )
    }

**功能：** AbilityMonitor模块提供匹配满足指定条件的受监视能力对象的方法的能力，最近匹配的ability对象将保存在AbilityMonitor中。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]var abilityName
    
    
    public var abilityName: String

**功能：** 被监听的UIAbility对象名称。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]var moduleName
    
    
    public var moduleName: String

**功能：** 被监听的UIAbility对象所属模块名称。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]var onAbilityBackground
    
    
    public var onAbilityBackground:?(UIAbility) -> Unit

**功能：** UIAbility对象状态变成后台时，触发该回调函数。

**类型：** ?([UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability))->Unit

**读写能力：** 可读写

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]var onAbilityCreate
    
    
    public var onAbilityCreate:?(UIAbility) -> Unit

**功能：** UIAbility对象被创建时，触发该回调函数。

**类型：** ?([UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability))->Unit

**读写能力：** 可读写

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]var onAbilityDestroy
    
    
    public var onAbilityDestroy:?(UIAbility) -> Unit

**功能：** UIAbility对象被销毁前，触发该回调函数。

**类型：** ?([UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability))->Unit

**读写能力：** 可读写

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]var onAbilityForeground
    
    
    public var onAbilityForeground:?(UIAbility) -> Unit

**功能：** UIAbility对象状态变成前台时，触发该回调函数。

**类型：** ?([UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability))->Unit

**读写能力：** 可读写

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]var onWindowStageCreate
    
    
    public var onWindowStageCreate:?(UIAbility) -> Unit

**功能：** 当WindowStage实例被创建时，触发该回调函数。

**类型：** ?([UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability))->Unit

**读写能力：** 可读写

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]var onWindowStageDestroy
    
    
    public var onWindowStageDestroy:?(UIAbility) -> Unit

**功能：** 当WindowStage被销毁前，触发该回调函数。

**类型：** ?([UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability))->Unit

**读写能力：** 可读写

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]var onWindowStageRestore
    
    
    public var onWindowStageRestore:?(UIAbility) -> Unit

**功能：** 当UIAbility跨端迁移时，目标端UIAbility恢复页面栈时，触发该回调函数。

**类型：** ?([UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability))->Unit

**读写能力：** 可读写

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]init(String, String, ?(UIAbility) -> Unit, ?(UIAbility) -> Unit, ?(UIAbility) -> Unit, ?(UIAbility) -> Unit, ?(UIAbility) -> Unit, ?(UIAbility) -> Unit, ?(UIAbility) -> Unit)
    
    
    public init(
        abilityName: String,
        moduleName!: String = "",
        onAbilityCreate!: ?(UIAbility) -> Unit = None,
        onAbilityForeground!: ?(UIAbility) -> Unit = None,
        onAbilityBackground!: ?(UIAbility) -> Unit = None,
        onAbilityDestroy!: ?(UIAbility) -> Unit = None,
        onWindowStageCreate!: ?(UIAbility) -> Unit = None,
        onWindowStageRestore!: ?(UIAbility) -> Unit = None,
        onWindowStageDestroy!: ?(UIAbility) -> Unit = None
    )

**功能：** 构造一个AbilityMonitor对象。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
abilityName | String | 是 | - | 被监听的UIAbility对象名称。  
moduleName | String | 否 | "" | **命名参数。** 被监听的UIAbility对象所属模块名称。  
onAbilityCreate | ?([UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)) -> Unit | 否 | None | **命名参数。** UIAbility对象被创建时，触发该回调函数。  
onAbilityForeground | ?([UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)) -> Unit | 否 | None | **命名参数。** UIAbility对象状态变成前台时，触发该回调函数。  
onAbilityBackground | ?([UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)) -> Unit | 否 | None | **命名参数。** UIAbility对象状态变成后台时，触发该回调函数。  
onAbilityDestroy | ?([UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)) -> Unit | 否 | None | **命名参数。** UIAbility对象被销毁前，触发该回调函数。  
onWindowStageCreate | ?([UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)) -> Unit | 否 | None | **命名参数。** 当WindowStage实例被创建时，触发该回调函数。  
onWindowStageRestore | ?([UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)) -> Unit | 否 | None | **命名参数。** 当UIAbility跨端迁移时，目标端UIAbility恢复页面栈时，触发该回调函数。  
onWindowStageDestroy | ?([UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)) -> Unit | 否 | None | **命名参数。** 当WindowStage被销毁前，触发该回调函数。  
  
**示例：**
    
    
    // index.cj
    
    import kit.TestKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let delegator = AbilityDelegatorRegistry.getAbilityDelegator()
        let monitor = AbilityMonitor(
            "EntryAbility", moduleName: "entry",
            onAbilityCreate: {ability => delegator.print("onAbilityCreate called, abilityName: ${ability.launchWant.abilityName}")}
        )
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class AbilityStageMonitor
    
    
    public class AbilityStageMonitor {
        public var moduleName: String
        public var srcEntrance: String
        public init(
            moduleName: String,
            srcEntrance: String
        )
    }

**功能：** AbilityStageMonitor模块提供用于匹配满足指定条件的受监视的[AbilityStage](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ability_stage#class-abilitystage)对象的方法。最近匹配的[AbilityStage](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ability_stage#class-abilitystage)对象将保存在AbilityStageMonitor中。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]var moduleName
    
    
    public var moduleName: String

**功能：** 要监视的abilityStage的模块名。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]var srcEntrance
    
    
    public var srcEntrance: String

**功能：** 要监视的abilityStage的源路径。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]init(String, String)
    
    
    public init(
        moduleName: String,
        srcEntrance: String
    )

**功能：** 构造一个AbilityStageMonitor对象。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
moduleName | String | 是 | - | 要监视的abilityStage的模块名。  
srcEntrance | String | 是 | - | 要监视的abilityStage的源路径。  
  
**示例：**
    
    
    // index.cj
    
    import kit.AbilityKit.*
    import kit.TestKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let delegator = AbilityDelegatorRegistry.getAbilityDelegator()
        let monitor = AbilityStageMonitor("entry", "ohos_app_cangjie_entry.MyAbilityStage")
        delegator.addAbilityStageMonitor(monitor)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class ShellCmdResult
    
    
    public class ShellCmdResult {}

**功能：** Shell命令执行结果。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]prop exitCode
    
    
    public mut prop exitCode: Int32

**功能：** Shell命令的结果码。

**类型：** Int32

**读写能力：** 可读写

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]prop stdResult
    
    
    public mut prop stdResult: String

**功能：** Shell命令的标准输出内容。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### enum AbilityLifecycleState
    
    
    public enum AbilityLifecycleState <: Equatable<AbilityLifecycleState> & ToString {
        | Uninitialized
        | Create
        | Foreground
        | Background
        | Destroy
        | ...
    }

**功能：** [UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)生命周期状态，该类型为枚举，可配合AbilityDelegator的getAbilityState方法返回不同ability生命周期。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**父类型：**

  * Equatable<AbilityLifecycleState>
  * ToString



#### [h2]Background
    
    
    Background

**功能：** 表示[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)处于后台状态。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]Create
    
    
    Create

**功能：** 表示[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)处于已创建状态。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]Destroy
    
    
    Destroy

**功能：** 表示[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)处于已销毁状态。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]Foreground
    
    
    Foreground

**功能：** 表示[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)处于前台状态。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]Uninitialized
    
    
    Uninitialized

**功能：** 表示[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)处于无效状态。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]func !=(AbilityLifecycleState)
    
    
    public operator func !=(other: AbilityLifecycleState): Bool

**功能：** 判断两个枚举值是否不等。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | AbilityLifecycleState | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值不等返回true，否则返回false。  
  
#### [h2]func ==(AbilityLifecycleState)
    
    
    public operator func ==(other: AbilityLifecycleState): Bool

**功能：** 判断两个枚举值是否相等。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | AbilityLifecycleState | 是 | - | 另一个枚举值。  
  
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
