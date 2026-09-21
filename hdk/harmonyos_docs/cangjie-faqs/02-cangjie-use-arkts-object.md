---
name: cangjie-faqs/02-cangjie-use-arkts-object
title: ArkTS非基础类型对象如何传递到仓颉侧
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/02-cangjie-use-arkts-object
nodePath: FAQ / 跨语言互操作 / ArkTS非基础类型对象如何传递到仓颉侧
---

# ArkTS非基础类型对象如何传递到仓颉侧

#### 方式一：使用互操作库JSObject传递ArkTS对象

仓颉侧定义互操作函数，ArkTS侧将复杂对象作为函数参数传递到仓颉侧，仓颉侧取出参数并将其转换为JSObject实例，通过JSObject的成员方法getProperty、callMethod等访问ArkTS对象的数据或调用其成员方法。

示例如下：

  1. ArkTS侧定义类型：
         
         export class ArkTSObject {
             data: string = 'data from ArkTS'
         
             setData(newData: string): void {
                 this.data = newData
             }
         }

  2. 仓颉侧定义互操作方法：
         
         internal import ohos.ark_interop.*
         import kit.PerformanceAnalysisKit.Hilog
         
         public func getArkTSObject(runtime: JSContext, callInfo: JSCallInfo): JSValue {
             let obj = callInfo[0].asObject()
             let oldData = obj.getProperty("data").toString()
             Hilog.info(0, "Cangjie Test", "oldData: ${oldData}")
             obj.callMethod("setData", [runtime.string("data from Cangjie").toJSValue()])
             return runtime.undefined().toJSValue()
         }

  3. 将仓颉方法注册给ArkTS
         
         let EXPORT_MODULE = JSModule.registerModule {
             runtime, exports => exports["getArkTSObject"] = runtime.function(getArkTSObject).toJSValue()
         }

  4. ArkTS侧调用仓颉方法，传入ArkTS类型对象：
         
         import { getArkTSObject } from "libohos_app_cangjie_entry.so"
         
         export function FAQ42Test(): void {
         let obj: ArkTSObject = new ArkTSObject()
         getArkTSObject(obj)
         hilog.info(0, "ArkTS Test", obj.data)
         }

  5. 调用FAQ42Test方法，日志输出结果：
         
         oldData: data from ArkTS
         data from Cangjie




![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/68/v3/OX6kC5ZiRyi2JMyNRO38xw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085440Z&HW-CC-Expire=86400&HW-CC-Sign=723AC9C378BB750A873CC4784E08CD6915792BD2F74358A07F96BF7F5DDC5373)

  * 仓颉与ArkTS的互操作工程创建方法，详情请参见[已有ArkTS语言的项目如何引入仓颉语言](https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/01-cangjie-arkts)
  * 更多仓颉-ArkTS互操作接口介绍，详情请参见[API参考-仓颉与ArkTS互操作库](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-arkts-api)。



#### 方式二：序列化

如果该类型中定义的都是数据，没有方法，可以将其对象在ArkTS侧通过json序列化转换成字符串，传递到仓颉侧后再反序列化成对应的仓颉类型实例。

其中序列化和拷贝的开销在UI线程，反序列化可在仓颉侧异步执行，以减少UI线程耗时。

使用这种方法传递数据时，由于内存不共享，同步数据时需要进行拷贝。
