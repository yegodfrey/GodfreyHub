---
name: cangjie-references/cj-apis-app-ability-ui_ability
title: ohos.app.ability.ui_ability
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability
nodePath: 应用框架 / Ability Kit（程序框架服务） / 仓颉API / ohos.app.ability.ui_ability
---

# ohos.app.ability.ui_ability

ui_ability模块提供UIAbility应用组件的核心API，包括UIAbility生命周期管理、上下文（Context）体系、Ability启动与销毁、以及与ArkTS的互操作能力。通过本模块，开发者可以创建和管理包含UI界面的应用组件，实现组件的创建、销毁、前后台切换等生命周期回调，并通过Context实现获取应用资源、启动其他Ability等能力。

#### 导入模块
    
    
    import kit.AbilityKit.*

#### 权限列表

ohos.permission.DISTRIBUTED_DATASYNC

ohos.permission.PREPARE_APP_TERMINATE

ohos.permission.PRIVACY_WINDOW

#### 使用说明

API示例代码使用说明：

  * 若示例代码首行有“// index.cj”注释，表示该示例可在仓颉模板工程的“index.cj”文件中编译运行。
  * 若示例需获取Context应用上下文，需在仓颉模板工程中的“main_ability.cj”文件中进行配置。



上述示例工程及配置模板详见[仓颉示例代码说明](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro#仓颉示例代码说明)。

#### func createAbilityStageContextFromJSValue(JSContext, JSValue)
    
    
    public func createAbilityStageContextFromJSValue(context: JSContext, input: JSValue): AbilityStageContext

**功能：** 从JSValue转换为AbilityStageContext类型。该转换仅可在函数传递中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
context | [JSContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ark_interop#class-jscontext) | 是 | - | ArkTS互操作上下文。  
input | [JSValue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ark_interop#class-jsvalue) | 是 | - | ArkTS统一类型。  
  
**返回值：**

类型 | 说明  
---|---  
AbilityStageContext | 返回AbilityStageContext类型实例。  
  
**示例：**
    
    
    import ohos.ark_interop.*
    import kit.AbilityKit.*
    
    class MyAbilityStage <: AbilityStage {
        public override func onCreate(): Unit {
            let jsRuntime = JSRuntime()
            let jsContext = jsRuntime.mainContext
            let input = this.context.toJSValue(jsContext)
            let ctx = createAbilityStageContextFromJSValue(jsContext, input)
        }
    }

#### func createApplicationContextFromJSValue(JSContext, JSValue)
    
    
    public func createApplicationContextFromJSValue(context: JSContext, input: JSValue): ApplicationContext

**功能：** 从[JSValue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ark_interop#class-jsvalue)转换为ApplicationContext类型。该转换仅可在函数传递中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
context | [JSContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ark_interop#class-jscontext) | 是 | - | ArkTS互操作上下文。  
input | [JSValue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ark_interop#class-jsvalue) | 是 | - | ArkTS统一类型。  
  
**返回值：**

类型 | 说明  
---|---  
ApplicationContext | 返回 ApplicationContext 类型实例。  
  
**示例：**
    
    
    import ohos.ark_interop.*
    import kit.AbilityKit.*
    import kit.TestKit.*
    
    class MyAbilityStage <: AbilityStage {
        public override func onCreate(): Unit {
            let jsRuntime = JSRuntime()
            let jsContext = jsRuntime.mainContext
            let input = AbilityDelegatorRegistry.getAbilityDelegator().getAppContext().toJSValue(jsContext)
            let ctx = createApplicationContextFromJSValue(jsContext, input)
        }
    }

#### func createContextFromJSValue(JSContext, JSValue)
    
    
    public func createContextFromJSValue(context: JSContext, input: JSValue): Context

**功能：** 从[JSValue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ark_interop#class-jsvalue)转换为Context类型。该转换仅可在函数传递中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
context | [JSContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ark_interop#class-jscontext) | 是 | - | ArkTS互操作上下文。  
input | [JSValue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ark_interop#class-jsvalue) | 是 | - | ArkTS统一类型。  
  
**返回值：**

类型 | 说明  
---|---  
Context | 返回Context类型实例。  
  
**示例：**
    
    
    import ohos.ark_interop.*
    import kit.AbilityKit.*
    
    class MyAbilityStage <: AbilityStage {
        public override func onCreate(): Unit {
            let jsRuntime = JSRuntime()
            let jsContext = jsRuntime.mainContext
            let input = this.context.toJSValue(jsContext)
            let ctx = createContextFromJSValue(jsContext, input)
        }
    }

#### func createUIAbilityContextFromJSValue(JSContext, JSValue)
    
    
    public func createUIAbilityContextFromJSValue(context: JSContext, input: JSValue): UIAbilityContext

**功能：** 从[JSValue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ark_interop#class-jsvalue)转换为UIAbilityContext类型。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
context | [JSContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ark_interop#class-jscontext) | 是 | - | ArkTS互操作上下文。  
input | [JSValue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ark_interop#class-jsvalue) | 是 | - | ArkTS统一类型。  
  
**返回值：**

类型 | 说明  
---|---  
UIAbilityContext | 返回UIAbilityContext类型实例。  
  
**示例：**
    
    
    import ohos.ark_interop.*
    import kit.AbilityKit.*
    
    class MyUIAbility <: UIAbility {
        public override func onCreate(want: Want, launchParam: LaunchParam): Unit {
            let jsRuntime = JSRuntime()
            let jsContext = jsRuntime.mainContext
            let input = this.context.toJSValue(jsContext)
            let ctx = createContextFromJSValue(jsContext, input)
        }
    }

#### interface SystemObjectInteropTypeToJS
    
    
    public interface SystemObjectInteropTypeToJS {
        func toJSValue(context: JSContext): JSValue
    }

**功能：** 系统对象专用的拓展接口，以实现与[JSValue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ark_interop#class-jsvalue)的互转。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]func toJSValue(JSContext)
    
    
    func toJSValue(context: JSContext): JSValue

**功能：** 将仓颉对象转换成[JSValue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ark_interop#class-jsvalue)。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
context | [JSContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ark_interop#class-jscontext) | 是 | - | ArkTS互操作上下文。  
  
**返回值：**

类型 | 说明  
---|---  
[JSValue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ark_interop#class-jsvalue) | ArkTS统一类型。  
  
**示例：**
    
    
    import ohos.ark_interop.*
    import kit.AbilityKit.*
    
    class MyAbilityStage <: AbilityStage {
        public override func onCreate(): Unit {
            let jsRuntime = JSRuntime()
            let jsContext = jsRuntime.mainContext
            let input = this.context.toJSValue(jsContext)
            let ctx = createContextFromJSValue(jsContext, input)
        }
    }

#### class Ability
    
    
    abstract sealed class Ability {}

**功能：** UIAbility和ExtensionAbility的基类，提供系统配置更新回调和系统内存调整回调。不支持开发者直接继承该基类。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**起始版本：** 22

#### class AbilityStageContext
    
    
    public class AbilityStageContext <: Context {
        public var currentHapModuleInfo: HapModuleInfo
    }

**功能：** AbilityStageContext是AbilityStage的上下文环境。

AbilityStageContext提供允许访问特定于abilityStage的资源的能力，包括获取AbilityStage对应的ModuleInfo对象、环境变化对象。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**父类型：**

  * Context



#### [h2]var currentHapModuleInfo
    
    
    public var currentHapModuleInfo: HapModuleInfo

**功能：** AbilityStage对应的ModuleInfo对象。

**类型：** [HapModuleInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-bundle_manager#class-hapmoduleinfo)

**读写能力：** 可读写

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**示例：**
    
    
    import kit.AbilityKit.*
    
    class MyAbilityStage <: AbilityStage {
        public override func onCreate(): Unit {
            let info = this.context.currentHapModuleInfo
        }
    }

#### class ApplicationContext
    
    
    public class ApplicationContext <: Context {}

**功能：** ApplicationContext作为应用上下文，提供了应用生命周期监听、进程管理、应用环境设置等应用级别的管控能力。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**父类型：**

  * Context



#### class Context
    
    
    public open class Context <: BaseContext {}

**功能：** Context为ability或application提供上下文支持能力，包括访问特定应用程序的资源等。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**父类型：**

  * [BaseContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability#class-basecontext)



#### [h2]prop applicationInfo
    
    
    public prop applicationInfo: ApplicationInfo

**功能：** 当前应用程序的信息。

**类型：** [ApplicationInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-bundle_manager#class-applicationinfo)

**读写能力：** 只读

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**示例：**
    
    
    import kit.AbilityKit.*
    
    class MyUIAbility <: UIAbility {
        public override func onCreate(want: Want, launchParam: LaunchParam): Unit {
            let info = this.context.applicationInfo
        }
    }

#### [h2]prop area
    
    
    public mut prop area: AreaMode

**功能：** 文件分区信息，按加密等级[AreaMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-context_constant#enum-areamode) 进行分区。

**类型：** [AreaMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-context_constant#enum-areamode)

**读写能力：** 可读写

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**示例：**
    
    
    import kit.AbilityKit.*
    
    class MyUIAbility <: UIAbility {
        public override func onCreate(want: Want, launchParam: LaunchParam): Unit {
            let area = this.context.area
        }
    }

#### [h2]prop filesDir
    
    
    public prop filesDir: String

**功能：** 文件目录。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**示例：**
    
    
    import kit.AbilityKit.*
    
    class MyUIAbility <: UIAbility {
        public override func onCreate(want: Want, launchParam: LaunchParam): Unit {
            let filesDir = this.context.filesDir
        }
    }

#### [h2]prop resourceManager
    
    
    public prop resourceManager: ResourceManager

**功能：** 资源管理对象。

**类型：** [ResourceManager](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-resource_manager#class-resourcemanager)

**读写能力：** 只读

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**示例：**
    
    
    import kit.AbilityKit.*
    
    class MyUIAbility <: UIAbility {
        public override func onCreate(want: Want, launchParam: LaunchParam): Unit {
            let resourceManager = this.context.resourceManager
        }
    }

#### [h2]func toJSValue(JSContext)
    
    
    public func toJSValue(context: JSContext): JSValue

**功能：** 将仓颉对象转换成[JSValue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ark_interop#class-jsvalue)。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
context | [JSContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ark_interop#class-jscontext) | 是 | - | ArkTS互操作上下文。  
  
**返回值：**

类型 | 说明  
---|---  
[JSValue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ark_interop#class-jsvalue) | ArkTS统一类型。  
  
#### class UIAbility
    
    
    public open class UIAbility <: Ability {}

**功能：** 表示包含UI界面的应用组件，提供组件创建、销毁、前后台切换等生命周期回调，同时也具备后台通信能力。

  * Caller：由startAbilityByCall接口返回，CallerAbility(调用者)可使用Caller与CalleeAbility(被调用者)进行通信。

  * Callee：UIAbility的内部对象，CalleeAbility(被调用者)可以通过Callee与Caller进行通信。




**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**起始版本：** 22

**父类型：**

  * Ability



#### [h2]prop context
    
    
    public mut prop context: UIAbilityContext

**功能：** 提供UIAbility运行所需的上下文环境。

**类型：** UIAbilityContext

**读写能力：** 可读写

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**起始版本：** 22

**示例：**
    
    
    import kit.AbilityKit.*
    
    class MyUIAbility <: UIAbility {
        public override func onCreate(want: Want, launchParam: LaunchParam): Unit {
            let context = this.context
        }
    }

#### [h2]prop lastRequestWant
    
    
    public mut prop lastRequestWant: Want

**功能：** 最近一次拉起UIAbility请求的Want参数。

当UIAbility被首次创建并拉起时，取值为onCreate接收到的Want参数。

当UIAbility被再次拉起时，取值为onNewWant最近一次接收到的Want参数。

**类型：** [Want](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-want#class-want)

**读写能力：** 可读写

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**起始版本：** 22

**示例：**
    
    
    import kit.AbilityKit.*
    
    class MyUIAbility <: UIAbility {
        public override func onCreate(want: Want, launchParam: LaunchParam): Unit {
            let lastRequestWant = this.lastRequestWant
        }
    }

#### [h2]prop launchWant
    
    
    public mut prop launchWant: Want

**功能：** UIAbility冷启动时接收到的Want参数，取值为onCreate接收到的Want参数。

**类型：** [Want](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-want#class-want)

**读写能力：** 可读写

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**起始版本：** 22

**示例：**
    
    
    import kit.AbilityKit.*
    
    class MyUIAbility <: UIAbility {
        public override func onCreate(want: Want, launchParam: LaunchParam): Unit {
            let launchWant = this.launchWant
        }
    }

#### [h2]func onBackground()
    
    
    public open func onBackground(): Unit

**功能：** 当应用从前台转入到后台时，系统触发该回调。开发者可在该回调中实现UI不可见时的资源释放操作，如停止定位功能等。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**起始版本：** 22

**示例：**
    
    
    import kit.AbilityKit.*
    
    class MyUIAbility <: UIAbility {
        public override func onBackground() {
            let launchWant = this.launchWant
        }
    }

#### [h2]func onCreate(Want, LaunchParam)
    
    
    public open func onCreate(want: Want, launchParam: LaunchParam): Unit

**功能：** 当UIAbility实例创建完成时，系统会触发该回调，开发者可在该回调中执行初始化逻辑（如定义变量、加载资源等）。该回调仅会在UIAbility冷启动时触发。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
want | [Want](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-want#class-want) | 是 | - | 当前UIAbility的Want类型信息，包括UIAbility名称、Bundle名称等。  
launchParam | [LaunchParam](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ability_constant#class-launchparam) | 是 | - | 创建 ability、上次异常退出的原因信息。  
  
**示例：**
    
    
    import kit.AbilityKit.*
    
    class MyUIAbility <: UIAbility {
        public override func onCreate(want: Want, launchParam: LaunchParam): Unit {
            let launchWant = this.launchWant
        }
    }

#### [h2]func onDestroy()
    
    
    public open func onDestroy(): Unit

**功能：** 当UIAbility被销毁时，系统触发该回调。开发者可以在该生命周期中执行资源清理、数据保存等相关操作。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/84/v3/8-RKfjtPTkCGyvquq6ynaA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085019Z&HW-CC-Expire=86400&HW-CC-Sign=C05ED03F24D3133FFCC431FEC630293688AF135988D64614C4E1B86A35122D97)

该回调仅在UIAbility正常退出时触发，当UIAbility异常退出（例如低内存终止进程）时，该回调将不被触发。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**起始版本：** 22

**示例：**
    
    
    import kit.AbilityKit.*
    
    class MyUIAbility <: UIAbility {
        public override func onDestroy(): Unit {}
    }

#### [h2]func onForeground()
    
    
    public open func onForeground(): Unit

**功能：** 当应用首次启动到前台或者从后台转入到前台时，系统触发该回调。开发者可在该回调中实现系统所需资源的申请，如应用转到前台时申请定位服务等。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**起始版本：** 22

**示例：**
    
    
    import kit.AbilityKit.*
    
    class MyUIAbility <: UIAbility {
        public override func onForeground(): Unit {}
    }

#### [h2]func onNewWant(Want, LaunchParam)
    
    
    public open func onNewWant(want: Want, launchParam: LaunchParam): Unit

**功能：** 当已经启动的UIAbility实例再次被拉起时，���统会触发该回调。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
want | [Want](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-want#class-want) | 是 | - | 调用方再次拉起该UIAbility时传递的数据。  
launchParam | [LaunchParam](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ability_constant#class-launchparam) | 是 | - | UIAbility启动参数，包含启动原因等。  
  
**示例：**
    
    
    import kit.AbilityKit.*
    
    class MyUIAbility <: UIAbility {
        public override func onNewWant(want: Want, launchParam: LaunchParam): Unit {}
    }

#### [h2]func onWindowStageCreate(WindowStage)
    
    
    public open func onWindowStageCreate(windowStage: WindowStage): Unit

**功能：** 当[WindowStage](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-window#class-windowstage)实例创建完成后，系统会触发该回调。开发者可以在该回调中通过WindowStage加载页面。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
windowStage | [WindowStage](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-window#class-windowstage) | 是 | - | WindowStage实例对象。  
  
**示例：**
    
    
    import kit.AbilityKit.*
    import kit.ArkUI.WindowStage
    
    class MyUIAbility <: UIAbility {
        public override func onWindowStageCreate(windowStage: WindowStage): Unit {}
    }

#### [h2]func onWindowStageDestroy()
    
    
    public open func onWindowStageDestroy(): Unit

**功能：** 当WindowStage销毁后，系统触发该回调。该回调用于通知开发者WindowStage对象已被销毁，不能再继续使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**起始版本：** 22

**示例：**
    
    
    import kit.AbilityKit.*
    
    class MyUIAbility <: UIAbility {
        public override func onWindowStageDestroy(): Unit {}
    }

#### class UIAbilityContext
    
    
    public open class UIAbilityContext <: Context {}

**功能：** UIAbilityContext是UIAbility组件的上下文。

每个UIAbility组件实例化时，系统都会自动创建对应的UIAbilityContext。开发者可以通过UIAbilityContext获取组件信息AbilityInfo、获取应用信息ApplicationInfo、拉起其他UIAbility、连接系统服务、销毁UIAbility等。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**父类型：**

  * Context



#### [h2]func isTerminating()
    
    
    public func isTerminating(): Bool

**功能：** 查询UIAbility是否处于消亡中状态。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Bool | 表示是否处于消亡中状态。true表示处于消亡中状态，false表示不处于消亡中状态。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[元能力子系统错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-ability)。

错误码ID | 错误信息  
---|---  
16000011 | The context does not exist.  
  



**示例：**
    
    
    import kit.AbilityKit.*
    import kit.ArkUI.WindowStage
    
    class MyUIAbility <: UIAbility {
        public override func onWindowStageCreate(windowStage: WindowStage): Unit {
            let isTerminating = this.context.isTerminating()
        }
    }

#### [h2]func requestDialogService(Want, AsyncCallback<RequestResult>)
    
    
    public func requestDialogService(want: Want, result: AsyncCallback<RequestResult>): Unit

**功能：** 启动一个支持模态弹框的ServiceExtensionAbility。ServiceExtensionAbility被启动后，应用弹出模态弹框。仅支持在主线程调用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
want | [Want](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-want#class-want) | 是 | - | 启动ServiceExtensionAbility的Want信息。  
result | [AsyncCallback](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#type-asynccallbackt)<[RequestResult](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-dialog_request#class-requestresult)> | 是 | - | 回调函数，当启动一个支持模态弹框的ServiceExtensionAbility成功，err中code为0，data为模态弹框请求结果；否则err会返回对应的错误码和错误信息。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)和[元能力子系统错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-ability)。

错误码ID | 错误信息  
---|---  
201 | The application does not have permission to call the interface.  
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
    
    
    import kit.AbilityKit.*
    import kit.ArkUI.WindowStage
    import ohos.business_exception.BusinessException
    
    class MyUIAbility <: UIAbility {
        public override func onWindowStageCreate(windowStage: WindowStage): Unit {
            this.context.requestDialogService(Want(), {err: ?BusinessException, data: ?RequestResult =>})
        }
    }

#### [h2]func startAbility(Want, ?StartOptions)
    
    
    public func startAbility(want: Want, options!: ?StartOptions = None): Unit

**功能：** 启动一个UIAbility。仅支持在主线程调用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
want | [Want](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-want#class-want) | 是 | - | 启动UIAbility的必要信息。  
options | ?[StartOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-start_options#class-startoptions) | 否 | None | **命名参数。** 启动UIAbility所携带的参数。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)和[元能力子系统错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-ability)。

错误码ID | 错误信息  
---|---  
201 | The application does not have permission to call the interface.  
801 | Capability not support.  
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
16000018 | Redirection to a third-party application is not allowed in API version greater than 11.  
16000019 | No matching ability is found.  
16000050 | Internal error.  
16000053 | The ability is not on the top of the UI.  
16000055 | Installation-free timed out.  
16000067 | The StartOptions check failed.  
16000068 | The ability is already running.  
16000071 | App clone is not supported.  
16000072 | App clone or multi-instance is not supported.  
16000073 | The app clone index is invalid.  
16000076 | The app instance key is invalid.  
16000077 | The number of app instances reaches the limit.  
16000078 | The multi-instance is not supported.  
16000079 | The APP_INSTANCE_KEY cannot be specified.  
16000080 | Creating a new instance is not supported.  
16200001 | The caller has been released.  
16300003 | The target application is not the current application.  
  



**示例：**
    
    
    import kit.AbilityKit.*
    import kit.ArkUI.WindowStage
    
    class MyUIAbility <: UIAbility {
        public override func onWindowStageCreate(windowStage: WindowStage): Unit {
            this.context.startAbility(Want(bundleName: "com.example.cangjieinsight", abilityName: "testAbility"))
        }
    }

#### [h2]func startAbilityForResult(Want, AsyncCallback<AbilityResult>)
    
    
    public func startAbilityForResult(want: Want, callback: AsyncCallback<AbilityResult>): Unit

**功能：** 启动一个UIAbility，并通过回调函数接收被拉起的UIAbility退出时的返回结果。仅支持在主线程调用。

UIAbility被启动后，有如下情况：

  * 在正常情况下，可以通过调用terminateSelfWithResult接口销毁自身，并将结果返回给调用方。

  * 在异常情况下，如杀死UIAbility，会将异常结果返回给调用方，异常结果中resultCode为-1。




**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
want | [Want](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-want#class-want) | 是 | - | 启动Ability的必要信息。  
callback | [AsyncCallback](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#type-asynccallbackt)<[AbilityResult](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ability-ability_result#class-abilityresult)> | 是 | - | 执行结果回调函数。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)和[元能力子系统错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-ability)。

错误码ID | 错误信息  
---|---  
201 | The application does not have permission to call the interface.  
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
16000018 | Redirection to a third-party application is not allowed in API version greater than 11.  
16000019 | No matching ability is found.  
16000050 | Internal error.  
16000053 | The ability is not on the top of the UI.  
16000055 | Installation-free timed out.  
16000071 | App clone is not supported.  
16000072 | App clone or multi-instance is not supported.  
16000073 | The app clone index is invalid.  
16000076 | The app instance key is invalid.  
16000077 | The number of app instances reaches the limit.  
16000078 | The multi-instance is not supported.  
16000079 | The APP_INSTANCE_KEY cannot be specified.  
16000080 | Creating a new instance is not supported.  
16200001 | The caller has been released.  
  



**示例：**
    
    
    import kit.AbilityKit.*
    import kit.ArkUI.WindowStage
    import ohos.business_exception.BusinessException
    
    class MyUIAbility <: UIAbility {
        public override func onWindowStageCreate(windowStage: WindowStage): Unit {
            this
                .context
                .startAbilityForResult(Want(bundleName: "com.example.cangjieinsight", abilityName: "testAbility"),
                    {err: ?BusinessException, data: ?AbilityResult =>})
        }
    }

#### [h2]func startAbilityForResult(Want, StartOptions, AsyncCallback<AbilityResult>)
    
    
    public func startAbilityForResult(want: Want, options: StartOptions, callback: AsyncCallback<AbilityResult>): Unit

**功能：** 启动一个UIAbility，并通过回调函数接收被拉起的UIAbility退出时的返回结果。仅支持在主线程调用。

UIAbility被启动后，有如下情况：

  * 在正常情况下，可以通过调用terminateSelfWithResult接口销毁自身，并将结果返回给调用方。

  * 在异常情况下，如杀死UIAbility，会将异常结果返回给调用方，异常结果中resultCode为-1。




**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
want | [Want](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-want#class-want) | 是 | - | 启动Ability的必要信息。  
options | [StartOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-start_options#class-startoptions) | 是 | - | 启动Ability所携带的参数。  
callback | [AsyncCallback](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#type-asynccallbackt)<AbilityResult> | 是 | - | 执行结果回调函数。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)和[元能力子系统错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-ability)。

错误码ID | 错误信息  
---|---  
201 | The application does not have permission to call the interface.  
16000001 | The specified ability does not exist.  
16000004 | Cannot start an invisible component.  
16000005 | The specified process does not have the permission.  
16000006 | Cross-user operations are not allowed.  
16000008 | The crowdtesting application expires.  
16000009 | An ability cannot be started or stopped in Wukong mode.  
16000011 | The context does not exist.  
16000012 | The application is controlled.  
16000013 | The application is controlled by EDM.  
16000018 | Redirection to a third-party application is not allowed in API version greater than 11.  
16000019 | No matching ability is found.  
16000050 | Internal error.  
16000053 | The ability is not on the top of the UI.  
16000055 | Installation-free timed out.  
16000071 | App clone is not supported.  
16000072 | App clone or multi-instance is not supported.  
16000073 | The app clone index is invalid.  
16000076 | The app instance key is invalid.  
16000077 | The number of app instances reaches the limit.  
16000078 | The multi-instance is not supported.  
16000079 | The APP_INSTANCE_KEY cannot be specified.  
16000080 | Creating a new instance is not supported.  
16200001 | The caller has been released.  
  



**示例：**
    
    
    import kit.AbilityKit.*
    import kit.ArkUI.WindowStage
    import ohos.business_exception.BusinessException
    
    class MyUIAbility <: UIAbility {
        public override func onWindowStageCreate(windowStage: WindowStage): Unit {
            this
                .context
                .startAbilityForResult(Want(bundleName: "com.example.cangjieinsight", abilityName: "testAbility"),
                    StartOptions(), {err: ?BusinessException, data: ?AbilityResult =>})
        }
    }

#### [h2]func terminateSelf()
    
    
    public func terminateSelf(): Unit

**功能：** 销毁UIAbility自身。仅支持在主线程调用。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e7/v3/S08p_ySbRbO_tsfLdHT3pQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085019Z&HW-CC-Expire=86400&HW-CC-Sign=74AB27C3308F7F17B1B14693B4458604ACF17533C3ABEAA1BF894A687503964A)

调用该接口后，任务中心的任务默认不会被清理。如需清理，请进行配置。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[元能力子系统错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-ability)。

错误码ID | 错误信息  
---|---  
16000009 | An ability cannot be started or stopped in Wukong mode.  
16000011 | The context does not exist.  
16000050 | Internal error.  
  



**示例：**
    
    
    import kit.AbilityKit.*
    import kit.ArkUI.WindowStage
    
    class MyUIAbility <: UIAbility {
        public override func onWindowStageCreate(windowStage: WindowStage): Unit {
            this.context.terminateSelf()
        }
    }

#### [h2]func terminateSelfWithResult(AbilityResult)
    
    
    public func terminateSelfWithResult(parameter: AbilityResult): Unit

**功能：** 销毁UIAbility自身。仅支持在主线程调用。

仅当UIAbility通过startAbilityForResult接口拉起时，调用terminateSelfWithResult接口销毁UIAbility，才会返回结果给调用方。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/12/v3/jGb3BRT7SWKZWcdJW7xFIg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085019Z&HW-CC-Expire=86400&HW-CC-Sign=137C59E6A02B19A1E743B5B948623D93D2E0D7C716D90EDF84BD7DF0220B8C96)

调用该接口后，任务中心的任务默认不会被清理。如需清理，请进行配置。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
parameter | [AbilityResult](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ability-ability_result#class-abilityresult) | 是 | - | 返回给startAbilityForResult 接口调用方的相关信息。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[元能力子系统错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-ability)。

错误码ID | 错误信息  
---|---  
16000009 | An ability cannot be started or stopped in Wukong mode.  
16000011 | The context does not exist.  
16000050 | Internal error.  
  



**示例：**
    
    
    import kit.AbilityKit.*
    import kit.ArkUI.WindowStage
    
    class MyUIAbility <: UIAbility {
        public override func onWindowStageCreate(windowStage: WindowStage): Unit {
            this.context.terminateSelfWithResult(AbilityResult(0))
        }
    }
