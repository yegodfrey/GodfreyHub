---
name: cangjie-references/cj-development-intro
title: 开发说明
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro
nodePath: API参考概述 / 开发说明
---

# 开发说明

API参考主要用于开发者查阅应用开发相关的各类API说明。为了方便开发者使用API文档，对文档描述中的常用字段进行说明。

#### 版本说明

对于组件或接口开始支持的版本号，会在对应的描述信息中进行说明，如：**起始版本：** 22。

#### 系统能力说明

系统能力（SystemCapability，简称SysCap），指操作系统中每一个相对独立的特性。不同的设备对应不同的系统能力集，每个系统能力对应多个接口。开发者可根据系统能力来判断是否可以使用某接口。具体可参考[系统能力SystemCapability使用指南](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-syscap)。

文档在每一个接口描述中说明了接口的系统能力，如：**系统能力：** SystemCapability.xxx.xxx

  * 通过系统能力SystemCapability列表，可以速查具体能力集支持的设备，如[手机](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-phone-syscap-list)。
  * 同时，系统提供了canIUse接口，可用于[判断API是否可以使用](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-syscap#判断api是否可以使用)。
  * 相同的系统能力，在不同的设备下，也会有能力的差异。开发者可以进行[不同设备相同能力的差异检查](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-syscap#不同设备相同能力的差异检查)。
  * 在某具体的设备型号上，能力可能超出工程默认设备定义的能力集范围，如果需要使用此部分能力，需要额外配置自定义的syscap。请参考[加入自定义syscap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-syscap#加入自定义syscap)。



#### 接口使用说明

HarmonyOS-仓颉 SDK提供的开放能力（接口）需要在导入声明后使用。SDK对同一个Kit下的接口模块进行了封装，开发者在示例代码中可通过导入Kit的方式来使用Kit所包含的接口能力。其中，Kit封装的接口模块可查看SDK目录下Kit子目录中各Kit的定义。

#### 仓颉示例代码说明

各kit中的仓颉示例，并非完整程序，而是对应API的主要代码，仅供开发者参考。如果开发者希望编译运行代码，需要将示例拷贝到仓颉工程模板中。参考步骤如下：

  1. 创建一个仓颉模板工程。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/86/v3/NG_NETeYSV6pLVuSdpC6pg/zh-cn_image_0000002701659596.png?HW-CC-KV=V1&HW-CC-Date=20260903T111625Z&HW-CC-Expire=86400&HW-CC-Sign=0A92CCE78FCDC657F965B0101001FB7E453B1F0C313CCDE7F5B36F3F5D73FD67)

  2. 创建完成后，会生成模板文件：“index.cj”、“main_ability.cj”、“ability_stage.cj”。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a1/v3/lnyyidA0RQCwU4BbcYsCtQ/zh-cn_image_0000002731378811.png?HW-CC-KV=V1&HW-CC-Date=20260903T111625Z&HW-CC-Expire=86400&HW-CC-Sign=ADD92333066E5D42BB3850D4308F054E35DEFD52D9620FA72A4FBF4E3CB87EE7)

  3. 在“index.cj”对应位置添加示例代码。
         
         // index.cj
         
         // 此处导入所涉及的包
         package ohos_app_cangjie_entry
         
         import kit.ArkUI.LengthProp
         import kit.ArkUI.Column
         import kit.ArkUI.Row
         import kit.ArkUI.Text
         import kit.ArkUI.CustomView
         import kit.ArkUI.CJEntry
         import kit.ArkUI.loadNativeView
         import kit.ArkUI.FontWeight
         import kit.ArkUI.SubscriberManager
         import kit.ArkUI.ObservedProperty
         import kit.ArkUI.LocalStorage
         import ohos.arkui.state_macro_manage.Entry
         import ohos.arkui.state_macro_manage.Component
         import ohos.arkui.state_macro_manage.State
         
         // 此处定义所需要的依赖项如class、func等
         
         @Entry
         @Component
         class EntryView {
             @State
             var message: String = "Hello World"
         
             func build() {
                 Row {
                     Column {
                         Text(this.message).fontSize(50).fontWeight(FontWeight.Bold).onClick({
                             evt => this.message = "Hello Cangjie"
                         })
                     }.width(100.percent)
                 }.height(100.percent)
             }
         }

  4. 若示例代码中涉及[Context](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-context)对象，需要在仓颉模板工程的“main_ability.cj”文件中定义Global类并对其赋值，“main_ability.cj”内容如下：
         
         import kit.AbilityKit.*
         internal import kit.AbilityKit.UIAbilityContext
         internal import kit.AbilityKit.AbilityStage
         internal import kit.ArkUI.WindowStage
         import kit.PerformanceAnalysisKit.Hilog
         
         class MainAbility <: UIAbility {
             public init() {
                 super()
                 registerSelf()
             }
         
             public override func onCreate(want: Want, launchParam: LaunchParam): Unit {
                 Hilog.info(0, "system", "MainAbility OnCreated.${want.abilityName}")
                 match (launchParam.launchReason) {
                     case LaunchReason.StartAbility => Hilog.info(0, "AppLogCj", "START_ABILITY")
                     case _ => ()
                 }
             }
         
             public override func onWindowStageCreate(windowStage: WindowStage): Unit {
                 Hilog.info(0, "system", "MainAbility onWindowStageCreate.")
                 Global._abilityContext = Some(this.context)
                 Global._windowStage = Some(windowStage)
                 windowStage.loadContent("EntryView")
             }
         }
         
         // 定义Global类
         public class Global {
             public static var _abilityContext: Option<UIAbilityContext> = None
             public static var _windowStage: Option<WindowStage> = None
             public static prop abilityContext: UIAbilityContext {
                 get() {
                     match (_abilityContext) {
                         case Some(context) => context
                         case None => throw Exception("Global.abilityContext is not set")
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




#### 权限说明

默认情况下，应用只能访问有限的系统资源。但某些情况下，应用为了扩展功能的诉求，需要访问额外的系统或其他应用的数据（包括用户个人数据）、功能。具体可参考[应用权限管控概述](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-app-permission-mgmt-overview)。

当调用接口访问这些资源时，需要申请对应的权限。申请方式可参考[访问控制开发指导](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-determine-application-mode)。

  * 如果应用需要具备某个权限才能调用该接口，会在具体的接口描述中说明：**需要权限：** ohos.permission.xxxx
  * 如果应用不需要任何权限即可调用该接口，则不做特殊说明。



#### 应用模型说明

随着系统的演进发展，先后提供了两种应用模型，FA模型和Stage模型。

目前仓颉API仅可在Stage模型下使用。

#### 废弃接口说明

废弃接口会使用上标“deprecated”标注，表示该接口不再推荐使用。

从废弃版本起的5个API level仍可以兼容使用，但不推荐此行为。

  * 对于有标注替代接口的，建议开发者查看新接口的文档，尽早适配。
  * 如果没有替代接口，建议开发者参考废弃说明和变更说明（changelog）更换实现方式。


