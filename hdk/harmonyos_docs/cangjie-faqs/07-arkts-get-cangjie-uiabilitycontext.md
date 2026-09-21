---
name: cangjie-faqs/07-arkts-get-cangjie-uiabilitycontext
title: 仓颉与ArkTS混合开发场景下，如何获取仓颉侧UIAbilityContext
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/07-arkts-get-cangjie-uiabilitycontext
nodePath: FAQ / 跨语言互操作 / 仓颉与ArkTS混合开发场景下，如何获取仓颉侧UIAbilityContext
---

# 仓颉与ArkTS混合开发场景下，如何获取仓颉侧UIAbilityContext

#### 背景介绍

[UIAbilityContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiabilitycontext#uiabilitycontext-1)是一个[UIAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability)的上下文，在一些需要请求资源的系统API中需要将UIAbilityContext实例作为参数传入。

在混合工程中，UIAbility由ArkTS侧定义，因此调用某些仓颉API时，需要将对应的上下文实例从ArkTS侧传入仓颉侧。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f1/v3/BiwZNSWMQI-tqbbCz_VzoA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085442Z&HW-CC-Expire=86400&HW-CC-Sign=2810053120A50ABE5D36BC251C6D4D2F2F393231D4163D493A25ABD710C307C0)

UIAbility的上下文类型在ArkTS侧为[UIAbilityContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiabilitycontext#uiabilitycontext-1)，在仓颉对应的类型即[UIAbilityContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiabilitycontext)。

#### 获取方法

  1. 仓颉侧定义互操作方法，用于接收ArkTS侧传递过来的UIAbilityContext上下文实例，将其转换为仓颉侧UIAbilityContext类型，并保存在全局，供后续调用相关API时使用（转换而来的仓颉侧UIAbilityContext类型仅可用作函数入参传递给仓颉函数，其与UIAbility生命周期，窗口相关的方法不可用）。
  2. 在ArkTS侧UIAbility子类的onCreate方法中调用该仓颉函数，将UIAbilityContext实例传递到仓颉侧。



#### 代码示例

  1. 仓颉侧代码：
         
         import ohos.ark_interop.*
         import ohos.ark_interop_helper.*
         import kit.PerformanceAnalysisKit.Hilog
         import kit.AbilityKit.*
         
         // 定义一个全局的 Context 获取类，方便后续其他业务使用
         public class GlobalUIAbilityContext {
             static var _context: ?UIAbilityContext = None
             public static func setUIAbilityContext(ctx: UIAbilityContext) {
                 _context = ctx
             }
             public static func getUIAbilityContext(): UIAbilityContext {
                 _context ?? throw Exception("GlobalContext not set.")
             }
         }
         
         // 定义一个提供给 ArkTS 去调用的仓颉函数
         func setContext(runtime: JSContext, callInfo: JSCallInfo): JSValue {
             let jsEnv = runtime.getNapiEnv()
             let jsValue = arktsValuetoNapiValue(jsEnv, callInfo[0])
             if (isStageMode(jsEnv, jsValue)) {
                 GlobalUIAbilityContext.setUIAbilityContext(createUIAbilityContextFromJSValue(runtime, callInfo[0]))
                 Hilog.info(0, "Cangjie Test", "Set context successfully.")
             } else {
                 Hilog.error(0, "Cangjie Test", "Set context failed: not in stage mode.")
             }
             return runtime.undefined().toJSValue()
         }
         
         // 将上面的函数注册到 JSModule 中，供 ArkTS 侧调用
         let EXPORT_MODULE = JSModule.registerModule {
             runtime, exports => exports["setContext"] = runtime.function(setContext).toJSValue()
         }

  2. ArkTS声明文件：

声明仓颉包接口对应的ArkTS接口，该文件位于src/main/cangjie/types/index.d.ts：
         
         import { Context } from "@kit.AbilityKit";
         export declare function setContext(context: Context): string

  3. ArkTS调用仓颉函数：

修改EntryAbility.ets里的onCreate方法：
         
         import { setContext } from 'libohos_app_cangjie_entry.so';
         
         export default class EntryAbility extends UIAbility {
             ...
             onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
                 ...
                 // 调用仓颉函数setContext，将UIAbilityContext实例传递到仓颉侧
                 setContext(this.context)
                 ...
             }
             ...
         }

  4. 模拟器运行示例工程，日志输出结果：
         
         Set context successfully.



