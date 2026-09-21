---
name: cangjie-faqs/06-arkts-call-cangjie-async-function
title: ArkTS中如何异步调用仓颉方法
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/06-arkts-call-cangjie-async-function
nodePath: FAQ / 跨语言互操作 / ArkTS中如何异步调用仓颉方法
---

# ArkTS中如何异步调用仓颉方法

互操作库提供了JSPromise和JSPromiseCapability类型，用于支持在仓颉侧提供类似ArkTS侧Promise的能力，并支持与ArkTS侧Promise类型对象进行互操作。

在ArkTS侧异步调用仓颉方法具体步骤如下：

  1. 可以在仓颉侧定义互操作方法，该方法中应包括如下内容：

     * 创建JSPromiseCapability实例；
     * 创建仓颉线程处理耗时任务，处理完调用postJSTask回到ArkTS线程，并将结果通过JSPromiseCapability类型的成员方法resolve返回到ArkTS侧；
     * 将JSPromiseCapability实例通过返回值传递到ArkTS侧。
  2. 在ArkTS侧调用该方法，该方法映射到ArkTS侧后，其返回值为Promise类型。




示例如下：

  * 仓颉侧定义互操作方法：
        
        internal import ohos.ark_interop.*
        
        func addNumberAsync(runtime: JSContext, callInfo: JSCallInfo): JSValue {
            let a = callInfo[0].toNumber()
            let b = callInfo[1].toNumber()
            let promise = runtime.promiseCapability()
            spawn {
                // 使用新线程来执行计算密集的任务
                let result = a + b
                runtime.postJSTask {
                    promise.resolve(runtime.number(result).toJSValue())
                }
            }
            promise.toJSValue()
        }

  * 将仓颉方法注册给ArkTS：
        
        // 将仓颉函数注册到JSModule中，供ArkTS侧调用
        let EXPORT_MODULE = JSModule.registerModule {
            runtime, exports => exports["addNumberAsync"] = runtime.function(addNumberAsync).toJSValue()
        }

  * ArkTS声明文件：

声明仓颉包接口对应的ArkTS接口，该文件位于src/main/cangjie/types/index.d.ts：
        
        export declare function addNumberAsync(a: number, b: number): Promise<number>

  * ArkTS侧调用该方法：
        
        export function FAQ42Test(): void {
            addNumberAsync(1,2).then((res)=>hilog.info(0, "Cangjie Test", res.toString()))
        }




![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/78/v3/dvpHfg5OQfi-VxMK8OkSvQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085442Z&HW-CC-Expire=86400&HW-CC-Sign=A0E9A7B7CA47116B8201AD03FA21153A658AFC253E76974AEA43939771196D64)

  * 仓颉与ArkTS的互操作工程创建详情请参见[已有ArkTS语言的项目如何引入仓颉语言](https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/01-cangjie-arkts)。
  * 关于JSPromise、JSPromiseCapability的接口说明，详情请参见[仓颉与ArkTS互操作库](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ark_interop)。


