---
name: cangjie-guides/cj-interoperability_lib
title: 仓颉-ArkTS 互操作库
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-interoperability_lib
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉-ArkTS 互操作 / 互操作用法 / ArkTS 调用仓颉 / 仓颉侧实现互操作代码 / 仓颉-ArkTS 互操作库
---

# 仓颉-ArkTS 互操作库

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2b/v3/OTg1ihVrRTWWs_hMV2qDBA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111605Z&HW-CC-Expire=86400&HW-CC-Sign=5A0A551AB703F3A4746858FEF3790504EE9E8D27C2876C675D88D4F095E259FC)

优先推荐使用[声明式互操作宏](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-interoperability_macro)的方式实现ArkTS调用仓颉模块，互操作宏的方式无法满足开发者场景时再使用“仓颉-ArkTS互操作库”的方式。

开发仓颉互操作模块：

  1. 在ArkTS工程中创建仓颉模块，详情请参见[在ArkTS工程中添加仓颉模块](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-add_cangjie_module)。

  2. 在生成的仓颉文件中构造代码，如下代码示例：
         
         // 定义包名，该包名需要和 cjpm.toml 的 package name 保持一致
         package ohos_app_cangjie_entry
         // 导入互操作库
         import ohos.ark_interop.*
         // 定义互操作函数，该函数参数类型必须为(JSContext,JSCallInfo)，返回值类型必须为JSValue
         func addNumber(context: JSContext, callInfo: JSCallInfo): JSValue {
             // 从JSCallInfo获取参数列表
             let arg0: JSValue = callInfo[0]
             let arg1: JSValue = callInfo[1]
             // 把JSValue转换为仓颉类型
         
             let a: Float64 = arg0.toNumber()
             let b: Float64 = arg1.toNumber()
         
             // 实际仓颉函数行为
             let value = a + b
             // 把结果转换为JSValue
         
             let result: JSValue = context.number(value).toJSValue()
         
             // 返回 JSValue
             return result
         }
         // 必须注册该函数到JSModule中
         let EXPORT_MODULE = JSModule.registerModule {
             runtime, exports => exports["addNumber"] = runtime.function(addNumber).toJSValue()
         }

  3. 在 **cangjie- >types->libohos_app_cangjie_entry->Index.d.ts** 文件中，提供互操作的接口声明：
         
         // entry/src/main/cangjie/types/libohos_app_cangjie_entry/Index.d.ts
         export declare function addNumber(a: number, b: number): number;

  4. 在ArkTS调用侧，代码如下所示：
         
         // 导入仓颉动态库，该动态库名称为仓颉包名的名称，该名称需要和互操作接口所在的包名一致
         import { addNumber } from "libohos_app_cangjie_entry.so";
         
         // 调用仓颉接口
         let result = addNumber(1, 2);
         console.log(`1 + 2 = ${result}`);




上述流程中，仓颉侧定义的要导出的函数中通过互操作库使用了最基础的仓颉类型，其他类型可以参照章节[仓颉使用ArkTS数据](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-operating_arkts_data)和[在ArkTS里操作仓颉对象](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-operating_cangjie_objects)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/85/v3/ttniyRwWRS6GiM9A1cQejw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111605Z&HW-CC-Expire=86400&HW-CC-Sign=BD01EF41FC1801F95E0A52F26FFA36A5E37221C31402A9E1643B1091C72BBB0F)

在同一个仓颉模块中（同一个包及其子包中）需遵循如下规则，否则可能出现符号覆盖：

  * 使用 JSModule.registerModule、JSModule.registerClass、JSModule.registerFunc 注册到 JSModule 中的函数、interface、class 不能同名。

错误示例：
        
        func addFloat() {}
        func addInt() {}
        let EXPORT_MODULE = JSModule.registerModule {
           runtime, exports =>
              exports["addNumber"] = runtime.function(addFloat).toJSValue()
              exports["addNumber"] = runtime.function(addInt).toJSValue() // 会覆盖第一次注册的同名函数 addNumber
        }

  * 使用 JSModule.registerModule、JSModule.registerClass、JSModule.registerFunc 注册到 JSModule 中的函数、interface、class 和使用 @Interop 修饰的函数、interface、class 不能同名。

错误示例：
        
        @Interop[ArkTS]
        public func addNumber() : Unit {}
        
        func addFloat() {}
        let EXPORT_MODULE = JSModule.registerModule {
            runtime, exports =>
            exports["addNumber"] = runtime.function(addFloat).toJSValue() // 会覆盖使用 @Interop 修饰的同名函数 addNumber
        }



