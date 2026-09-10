---
name: cangjie-guides/cj-using_arkts_module
title: 仓颉侧调用 ArkTS 模块
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-using_arkts_module
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉-ArkTS 互操作 / 互操作用法 / 仓颉调用 ArkTS / 仓颉侧调用 ArkTS 模块
---

# 仓颉侧调用 ArkTS 模块

以调用 ArkTS 侧的模块"@ohos.file.photoAccessHelper"为例，使用该模块代码示例及解析如下：
    
    
    // 导入互操作库
    import ohos.ark_interop.*
    
    func tryLoadArkTSSo() {
        // 创建新的 ArkTS 运行时
        let runtime = JSRuntime()
        // 获取互操作上下文
        let context = runtime.mainContext
        // 根据 ArkTS 模块名导入对应的模块，模块导入进来是一个 JSValue
        let module = context.requireSystemNativeModule("file.photoAccessHelper")
        // 按照操作 JSValue 的方法使用该 module
        let obj = module.asObject()
        // 通过 callMethod 来调用 photoAccessHelper 的方法
        // obj.callMethod(...)
    }

操作 ArkTS 数据的方法请参考[仓颉使用 ArkTS 数据](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-operating_arkts_data)。
