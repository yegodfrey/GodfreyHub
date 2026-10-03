---
name: cangjie-practices/cangjiecallarkts
title: 加载和调用 ArkTS 模块
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-practices/cangjiecallarkts
nodePath: 实践 / 加载和调用 ArkTS 模块
---

# 加载和调用 ArkTS 模块

#### ���述

本文介绍了使用���颉-ArkTS 基础互操作库ohos.ark_interop加载和调用 ArkTS 模块的基本方法，主要包括以下内容：

  * 互操作基础知识：介绍基础互操作库的核心类型和 ArkTS 类型包装类。
  * 互操作基本流程：介绍互操作的核心步骤，包括互操作环境初始化、模块加载、参数封装和函数调用。
  * 应用示例：演示如何加载和调用 ArkTS 位置管理模块，实现对位置服务状态和设备位置信息的获取。



#### 互操作基础知识

#### [h2]核心类型

仓颉-ArkTS 基础互操作库的核心类型是JSRuntime、JSContext和JSValue。

  * JSRuntime：ArkTS 运行时，提供字节码执行和内存管理等核心能力。

  * JSContext：执行 ArkTS 程序的上下文/容器，管理对应的执行栈和全局对象等。

  * JSValue：ArkTS 数据类型在仓颉语言中的抽象。ArkTS 是动态类型语言，仓颉是静态强类型语言，所以需要一个统一的类型来承接动态值。




#### [h2]ArkTS 类型包装类

为了将JSValue实例转为仓颉特定类型的值，互操作库还提供了一组 ArkTS 类型包装类，如JSNumber、JSBoolean、JSString、JSUndefined等，实现上它们是JSValue的子类，利用多态机制实现动/静类型转换，每种包装类还提供了类型相关的操作接口，保证类型安全和开发效率。

ArkTS 类型 | ArkTS 类型包装类 | 仓颉类型 | 构造 ArkTS 类型包装类实例  
---|---|---|---  
null | JSNull | - | ctx.null()  
undefined | JSUndefined | - | ctx.undefined()  
boolean | JSBoolean | Bool | ctx.boolean(Bool)  
number | JSNumber | Float64 | ctx.number(Float64)  
string | JSString | String | ctx.string(String)  
Object | JSObject | - | ctx.object()  
Array | JSArray | - | ctx.array(Array<JSValue>)  
ArrayBuffer | JSArrayBuffer | Array<Byte> | ctx.arrayBuffer(Array<Byte>)  
  
其中ctx是JSContext实例。此外，还有一些和函数调用相关的 ArkTS 类型包装类：

  * JSFunction：ArkTS 函数的包装类，支持调用并获取执行结果。可以从 ArkTS 侧获取JSFunction实例，也可以基于仓颉函数构造JSFunction实例（一般用于向 ArkTS 侧注册回调函数）

  * JSPromise：ArkTSPromise类型的包装类，用于标识一个异步调用过程。可以向JSPromise注册onFulfilled和onRejected回调函数（JSFunction 类型），以获取异步调用结果或异常信息。

  * JSCallInfo：封装 ArkTS 函数调用信息，包括调用参数。




#### 互操作基本流程

互操作基本流程包括：互操作环境初始化、模块加载（按需）、参数封装和函数调用。

#### [h2]互操作环境初始化

互操作环境初始化步骤如下：

  1. 导入互操作库
  2. 创建JSRuntime实例
  3. 加载 ArkTS 模块（按需）


    
    
    // 导入基础互操作库
    import ohos.ark_interop.*
    
    
    // 初始化核心代码
    let runtime = JSRuntime()
    let context = runtime.mainContext
    let module = context.requireSystemNativeModule(moduleName)

#### [h2]参数封装

仓颉调用 ArkTS 函数时，参数都按JSValue类型传递。因此，作为实参的仓颉类型数据，要先构造对应的 ArkTS 包装类实例，然后转为JSValue实例。

对于基础类型参数，封装操作比较简单：
    
    
    let number = ctx.number(2026.1).toJSValue()
    let text = ctx.string("Cangjie").toJSValue()
    let bool = ctx.boolean(true).toJSValue()

对于对象类型参数，可以先创建一个JSObject实例，然后添加属性，最后转为JSValue实例：
    
    
    let object: JSObject = JSObject()
    
    // 使用索引操作符或 setProperty 函数为对象添加属性
    object["username"] = ctx.string("admin").toJSValue()
    object["password"] = ctx.string("YOUR_PASSWORD_NUMBER").toJSValue()
    object.setProperty("magic", ctx.number(2026.1).toJSValue())
    
    // 转为 JSValue 实例
    let arg = object.toJSValue()

对于数组类型参数，可以从Array<JSValue>创建JSArray实例，或基于空的JSArray实例填充数组元素，最后转为JSValue实例：
    
    
    // 方式1: 基于 Array<JSValue> 构造 JSArray
    let array1 = JSArray([ctx.string("Cangjie").toJSValue(), ctx.number(2026.1).toJSValue()])
    let arg1 = array1.toJSValue()
    
    // 方式2: 创建一个空的 JSArray 实例，然后填充数组元素
    let array2: JSArray = JSArray()
    array2[0] = ctx.number(2026.1).toJSValue()
    array2[1] = ctx.string("Cangjie").toJSValue()
    let arg2 = array2.toJSValue()

#### [h2]函数调用

互操作库支持调用 ArkTS 同步函数和异步函数。首先要获取JSFunction实例，然后通过其成员函数call执行调用。

**同步函数**

调用同步函数，JSFunction.call的返回值就是调用结果对应的JSValue实例。
    
    
    let syncFunc: JSFunction = module[key].asFunction()
    let arg = ctx.boolean(true).toJSValue()
    let result: JSValue = syncFunc.call(arg)

**异步函数**

调用异步函数，JSFunction.call的返回值是Promise类型的JSValue，它标识了这个异步调用过程，先将它转为JSPromise类型实例，然后通过JSPromise.then注册onFulfilled和onRejected回调函数，以获取异步执行结果或异常信息。
    
    
    let asyncFunc: JSFunction = module[key].asFunction()
    let arg = ctx.boolean(true).toJSValue()
    let promise: JSPromise = asyncFunc.call(arg).asPromise()
    promise.then(
        // onFulfilled 回调
        ctx.function { context: JSContext, callInfo: JSCallInfo =>
            let result: JSValue = callInfo[0]  // 异步执行结果
            // ....
        },
        // onRejected 回调
        onRejected: ctx.function { context: JSContext, callInfo: JSCallInfo =>
            let error: JSValue = callInfo[0]  // 异常对象
            // ....
        }
    )

#### 常见问题

#### [h2]如何调用对象的成员函数？

如果要调用 ArkTS 对象的成员函数，可以通过JSObject.callMethod函数实现，传入的第一个参数是成员函数名，后续参数是调用实参。
    
    
    let object: JSObject = module[key].asObject()
    // 调用同步成员函数
    let result: JSValue = object.callMethod("addSync", num1, num2)
    
    // 调用异步成员函数
    let promise: JSPromise = object.callMethod("addAsync", num1, num2).asPromise()
    promise.then(
        // onFulfilled 回调
        ctx.function { context: JSContext, callInfo: JSCallInfo =>
            let result: JSValue = callInfo[0]  // 异步执行结果
            // ....
        },
        // onRejected 回调
        onRejected: ctx.function { context: JSContext, callInfo: JSCallInfo =>
            let error: JSValue = callInfo[0]  // 异常对象
            // ....
        }
    )

#### [h2]如何获取调用结果？

获取调用结果，就是将JSValue实例转为特定类型的包装类，然后取出仓颉类型的数据。一般先调用isXXX()方法判断返回值的类型是否符合预期，然后调用asXXX()方法转换为对应的 ArkTS 类型包装类，最后转换为仓颉数据类型。

基础数据类型：
    
    
    let result: JSValue = syncFunc.call(num1, num2)
    if (result.isNumber()) {
        let number = result.asNumber().toFloat64()
        // ...
    }

Object类型：
    
    
    let result: JSValue = syncFunc.call()
    if (result.isObject()) {
        let response: JSObject = result.asObject()
        if (response["code"].isNumber()) {
            let number = response["code"].asNumber().toFloat64()
            // ...
        }
    }

Array类型：
    
    
    let result: JSValue = syncFunc.call()
    if (result.isArray()) {
        let events: JSArray = result.asArray()
        for (i in 0..events.size) {
            if (events[i].isString()) {
                let event: String = events[i].asString().toString()
                // ...
            }
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b3/v3/6fATRH7oRXaMWQSSYsBO8g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260930T174028Z&HW-CC-Expire=86400&HW-CC-Sign=DFB68C4344D025D10CB426A9286C8D1DFABFB111766D81691E498CEC23DFBE85)

如果是调用异步函数，需要在Promise的onFulfilled回调中通过JSCallInfo取得返回值，然后进行以上类型转换和取值。

#### 应用示例

本应用示例演示了如何加载和调用 ArkTS 位置服务模块[@ohos.geoLocationManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-geolocationmanager)，获取服务状态和位置信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3f/v3/m-fN_jZYQJSuvAfprjlMCg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260930T174028Z&HW-CC-Expire=86400&HW-CC-Sign=745A2C080A175D030282006385BA7EBD0AE537686178351DBCDBEDCBDF80A01E)

应用示例需要访问设备位置信息，因此要向用户申请位置信息授权，相关配置和代码请参看完整示例项目。

#### [h2]效果预览

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ee/v3/84KKHINoT52OYNZEXzwdNQ/zh-cn_image_0000002639680946.png?HW-CC-KV=V1&HW-CC-Date=20260930T174028Z&HW-CC-Expire=86400&HW-CC-Sign=B058D4F1571FCC984D8C5D50DCB5D8B157906283809596F607E8A7247EA3A07F)

#### [h2]互操作实现步骤

src/main/cangjie/service/LocationService.cj中实现了对 ArkTS 位置服务模块@ohos.geoLocationManager的加载和调用。

**初始化互操作环境**

在LocationService.cj中定义了一个名为LocationService的类，它持有用于互操作的JSRuntime实例，为保证JSRuntime实例的唯一性和生命周期安全，这里使用了单例设计模式。

在构造函数中，我们进行如下初始化操作：

  1. 创建JSRuntime实例（ArkTS 运行时）
  2. 将默认执行上下文（mainContext）保存到成员变量jsContext中，便于互操作代码引用。
  3. 调用requireSystemNativeModule函数加载geoLocationManager模块（不用写@ohos前缀），并转为JSObject类型，后面作为对象访问其成员函数或属性。


    
    
    import ohos.ark_interop.*
    
    public class LocationService {
        private let jsRuntime: JSRuntime // ArkTS 运行时
        private let jsContext: JSContext // ArkTS 代码执行上下文
        private let jsModule: JSObject // 位置服务模块
        private static var instance: ?LocationService = None
    
        private init() {
            this.jsRuntime = JSRuntime()
            this.jsContext = jsRuntime.mainContext
            // 加载位置服务模块
            let module: JSValue = jsContext.requireSystemNativeModule("geoLocationManager")
            if (!module.isObject()) {
                throw Exception("Failed to load module: geoLocationManager")
            }
            this.jsModule = module.asObject()
        }
    
        // 单例模式
        public static func getInstance() {
            if (let None <- instance) {
                instance = LocationService()
            }
            return instance.getOrThrow()
        }
    }

**查询位置服务状态**

geoLocationManager模块中的[isLocationEnabled](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-geolocationmanager#geolocationmanagerislocationenabled)函数用于查询位置服务是否开启（用户在控制中心是否点亮了定位图标），这是一个同步函数，返回boolean类型值，调用比较简单：
    
    
    public func isLocationEnabled(): Bool {
       // 调用同步函数，将 JSValue 类型返回值转为 JSBoolean 类型
       let result = jsModule.callMethod("isLocationEnabled").asBoolean()
       return result.toBool()
    }

**查询设备位置信息**

如果位置服务开启且获得了访问设备位置权限，就可以通过geoLocationManager模块中的getCurrentLocation函数获取设备当前位置信息，这是一个异步函数，调用后返回Promise类型值，需要进一步注册then回调函数（onFulfilled和onRejected），以获取查询结果或错误信息。
    
    
    // 这里为避免冗余编码，为 Promise.then 回调函数的共性代码做了简单封装
    private func jsCallback(task: (JSObject) -> Unit) {
        jsContext.function({ context: JSContext, callInfo: JSCallInfo =>
            let arg: JSValue = callInfo[0] // 回调参数
            task(arg.asObject())
            return context.undefined().toJSValue() // 仅用于占位的返回值
        })
    }
    
    public func getCurrentLocation(onSuccess: (Location) -> Unit): Unit {
        let promise: JSPromise = jsModule.callMethod("getCurrentLocation").asPromise()
        promise.then(
            jsCallback { object => Location(object) |> onSuccess }, // onFulfilled 回调函数
            onRejected: jsCallback { error =>
                Hilog.error(1, "LocationService",
                    "Failed to call getCurrentLocation: ${error['message'].asString()}")
            }
        )
    }

其中Location是仓颉侧表示位置信息的数据类型，定义在src/main/cangjie/entity/Location.cj文件中：
    
    
    public class Location  {
        public var latitude: Float64 = 0.0
        public var longitude: Float64 = 0.0
    
        public init(object: JSObject) {
            if (object["latitude"].isNumber()) {
                latitude = object["latitude"].asNumber().toFloat64()
            }
            if (object["longitude"].isNumber()) {
                longitude = object["longitude"].asNumber().toFloat64()
            }
        }
    }

#### [h2]示例代码

[加载和调用 ArkTS 模块示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260728183056.75773670025213053285455433937396:20261002014028:2800:10EF85790A62A8EAAE089FAF3017F369E00D914239B4D18365FDB21A95F3CE65.zip?needInitFileName=true)
