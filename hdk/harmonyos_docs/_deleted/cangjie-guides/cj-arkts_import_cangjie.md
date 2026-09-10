---
name: cangjie-guides/cj-arkts_import_cangjie
title: ArkTS 侧使用互操作代码
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-arkts_import_cangjie
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉-ArkTS 互操作 / 互操作用法 / ArkTS 调用仓颉 / ArkTS 侧使用互操作代码
---

# ArkTS 侧使用互操作代码

此章节介绍如何在 ArkTS 中使用互操作代码，有两种方式：

  * 使用 import 语法加载仓颉模块。
  * 使用 loadNativeModule 接口加载仓颉模块。



#### 方式一：使用 import 语法加载仓颉模块

#### [h2]使用 import 语法加载仓颉模块并调用接口

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e1/v3/E7QL3P0uSl2P1qZKPOa7bw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111605Z&HW-CC-Expire=86400&HW-CC-Sign=FD0118E01E033CC4CAC008022104C19D4EA0E4A01B1B49D66423E859CBD0A828)

使用 import 语法加载仓颉模块的方式和使用 import 语法加载 native 模块方式一致，详细介绍请参见：[静态方式加载 native 模块](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-import-native-module)。

下面为使用 import 语法加载仓颉 ohos_app_cangjie_entry 模块并调用 addNumber 接口的示例：

  1. 在 ArkTS 工程中创建仓颉模块，详情请参见[在 ArkTS 工程中添加仓颉模块](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-add_cangjie_module)。

  2. 仓颉侧互操作接口的实现：

     * 实现互操作接口 addNumber：
           
           // entry/src/main/cangjie/index.cj
           
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

     * 在 types->libohos_app_cangjie_entry 文件夹下的 Index.d.ts 文件中，提供 ArkTS 侧接口声明：
           
           // entry/src/main/cangjie/types/libohos_app_cangjie_entry/Index.d.ts
           export declare function addNumber(a: number, b: number): number;

     * 在 types->libohos_app_cangjie_entry 文件夹下的 oh-package.json5 文件中将 Index.d.ts 与仓颉模块对应的 so 库关联起来：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5f/v3/TleTOgb_T0aO8CeZfDVzJA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111605Z&HW-CC-Expire=86400&HW-CC-Sign=16603958857F207A6F16DBB4CA0EA3F38E0087696D36F4DA45A1217D0274C43F)

以下代码无须复制，创建仓颉模块以后在工程中已配置好。
           
           // entry/src/main/cangjie/types/libohos_app_cangjie_entry/oh-package.json5
           {
               "name": "libohos_app_cangjie_entry.so",
               "types": "./Index.d.ts",
               "version": "1.0.0",
               "description": ""
           }

  3. 在 ArkTS 模块内的 oh-package.json5 文件中的 dependencies 字段配置对仓颉模块对应的 so 库的依赖：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c3/v3/uvU4KpKtRaapgLx-gGgZMw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111605Z&HW-CC-Expire=86400&HW-CC-Sign=A75D3F3E7DAF2066C31848B1028038C36BBC29D562EB3E19DD7DC8AFE577C18F)

以下代码无须复制，创建仓颉模块以后在工程中已配置好。
         
         // entry/oh-package.json5
         {
             "dependencies": {
                 // ...
                 "libohos_app_cangjie_entry.so": "file:./src/main/cangjie/types/libohos_app_cangjie_entry"
                 // ...
             }
         }

  4. ArkTS 侧使用 import 语法直接导入仓颉模块，并调用仓颉 addNumber 接口：
         
         // 导入仓颉动态库，该动态库名称为仓颉包名的名称，该名称需要和互操作接口所在的包名一致
         import { addNumber } from "libohos_app_cangjie_entry.so";
         
         // 调用仓颉接口
         let result = addNumber(1, 2);
         console.log(`1 + 2 = ${result}`);




#### [h2]使用 import 语法加载仓颉三方库并调用接口

下面为使用 import 语法加载仓颉三方库 libapplication.so 并调用 addNumber 接口的示例：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/98/v3/WoVZAwE3TUmbwmfpKkZ_TQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111605Z&HW-CC-Expire=86400&HW-CC-Sign=37A2C577581726D1138A7363007B60D7D73A6AC5496C7FC86075F7BD6F22A18E)

假设仓颉三方库 libapplication.so 已经实现了 addNumber 接口可供 ArkTS 侧调用。

  1. 在 ArkTS 工程中创建仓颉模块，详情请参见[在 ArkTS 工程中添加仓颉模块](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-add_cangjie_module)。

  2. 在 ArkTS 工程新建 libs->arm64-v8a 目录，将仓颉三方库 libapplication.so 拷贝到 ArkTS 工程的 libs->arm64-v8a 目录下。

  3. 在 ArkTS 侧创建仓颉三方库 libapplication.so 接口声明。

     * 在 types->libapplication 文件夹下新建 Index.d.ts 文件，提供 ArkTS 侧接口声明：
           
           // entry/src/main/cangjie/types/libapplication/Index.d.ts
           export declare function addNumber(a: number, b: number): number;

     * 在 types->libapplication 文件夹下新建 oh-package.json5 文件，将 Index.d.ts 与仓颉三方库 libapplication.so 关联起来：
           
           // entry/src/main/cangjie/types/libapplication/oh-package.json5
           {
               "name": "libapplication.so",
               "types": "./Index.d.ts",
               "version": "1.0.0",
               "description": ""
           }

  4. 在 ArkTS 模块内的 oh-package.json5 文件中声明 so 库的根目录路径。
         
         // entry/oh-package.json5
         {
             "dependencies": {
                 // ...
                 "libapplication.so": "file:./src/main/cangjie/types/libapplication"
                 // ...
             }
         }

  5. ArkTS 侧使用 import 语法直接导入仓颉三方库 libapplication.so，并调用仓颉 addNumber 接口：
         
         // 导入仓颉动态库，该动态库名称为仓颉三方库的名称，该名称需要和互操作接口所在的包名一致
         import { addNumber } from "libapplication.so";
         
         // 调用仓颉接口
         let result = addNumber(1, 2);
         console.log(`1 + 2 = ${result}`);




#### [h2]使用 import 语法加载仓颉静态库模块并调用接口

  1. 在 ArkTS 工程中创建仓颉静态库模块 cangjielib，详情请参见[添加仓颉静态库模块](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-add_cangjie_module)。

  2. 仓颉侧互操作接口的实现：

     * 实现互操作接口 addNumber：
           
           // cangjielib/src/main/cangjie/index.cj
           // 包名
           package ohos_app_cangjie_cangjielib
           
           // 导入文件
           internal import ohos.ark_interop.JSModule
           internal import ohos.ark_interop.JSContext
           internal import ohos.ark_interop.JSCallInfo
           internal import ohos.ark_interop.JSValue
           
           // 互操作函数
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
           
           let EXPORT_MODULE = JSModule.registerModule {
               runtime, exports => exports["addNumber"] = runtime.function(addNumber).toJSValue()
           }

     * 在 cangjielib->src->main->cangjie->types->libohos_app_cangjie_cangjielib 文件夹下的 Index.d.ts 文件中，提供 ArkTS 侧接口声明：
           
           // cangjielib/src/main/cangjie/types/libohos_app_cangjie_cangjielib/Index.d.ts
           export declare function addNumber(a: number, b: number): number;

     * 在 cangjielib->src->main->cangjie->types->libohos_app_cangjie_cangjielib 文件夹下的 oh-package.json5 文件中将 Index.d.ts 与仓颉模块对应的 so 库关联起来：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/36/v3/2j0COuYZQxuzvSS76AX69g/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111605Z&HW-CC-Expire=86400&HW-CC-Sign=4A5DCDDB0F14B7365E3612C02DE58FB16F8B808255AA504A945E1EF8E1B1292D)

以下代码无须复制，创建仓颉模块以后在工程中已配置好。
           
           // cangjielib/src/main/cangjie/types/libohos_app_cangjie_cangjielib/oh-package.json5
           {
               "name": "libohos_app_cangjie_cangjielib.so",
               "types": "./Index.d.ts",
               "version": "1.0.0",
               "description": ""
           }

  3. 在 ArkTS 模块内的 oh-package.json5 文件中的 dependencies 字段配置对仓颉静态库模块的依赖：
         
         // entry/oh-package.json5
         {
             "dependencies": {
                 // ...
                 "cangjielib": "../cangjielib",
                 "libohos_app_cangjie_cangjielib.so": "file:../cangjielib/src/main/cangjie/types/ohos_app_cangjie_cangjielib"
                 // ...
             }
         }

  4. ArkTS 侧使用 import 语法直接导入仓颉模块，并调用仓颉 addNumber 接口：
         
         // 导入仓颉动态库，该动态库名称为仓颉包名的名称，该名称需要和互操作接口所在的包名一致
         import { addNumber } from "libohos_app_cangjie_cangjielib.so";
         
         // 调用仓颉接口
         let result = addNumber(1, 2);
         console.log(`1 + 2 = ${result}`);




#### [h2]使用 import 语法加载本地 HAR 包并调用仓颉接口

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4f/v3/n_NlgcpGS-GVnvWqqFQSvA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111605Z&HW-CC-Expire=86400&HW-CC-Sign=81561312D6A3BC63B4E47B9E087426D8EE95F948319DC68E6707C5733A2AE1D6)

假设有本地 HAR 包 cangjielib.har 中包含 libohos_app_cangjie_cangjielib.so，在该 so 中已经实现了 addNumber 接口可供 ArkTS 侧调用。

  1. 在 ArkTS 工程中创建仓颉模块，详情请参见[在 ArkTS 工程中添加仓颉模块](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-add_cangjie_module)。

  2. 将本地 HAR 包 cangjielib.har 拷贝到 ArkTS 工程的 libs 目录下。

  3. 在 ArkTS 侧创建 libohos_app_cangjie_cangjielib.so 接口声明。

     * 在 types->libohos_app_cangjie_cangjielib 文件夹下新建 Index.d.ts 文件，提供 ArkTS 侧接口声明：
           
           // entry/src/main/cangjie/types/libohos_app_cangjie_cangjielib/Index.d.ts
           export declare function addNumber(a: number, b: number): number;

     * 在 types->libohos_app_cangjie_cangjielib 文件夹下新建 oh-package.json5 文件，将 Index.d.ts 与仓颉库 libohos_app_cangjie_cangjielib.so 关联起来：
           
           // entry/src/main/cangjie/types/libohos_app_cangjie_cangjielib/oh-package.json5
           {
               "name": "libohos_app_cangjie_cangjielib.so",
               "types": "./Index.d.ts",
               "version": "1.0.0",
               "description": ""
           }

  4. 在 ArkTS 模块内的 oh-package.json5 文件中声明 HAR 包和 so 的根目录路径。
         
         // entry/oh-package.json5
         {
             "dependencies": {
                 // ...
                 "cangjielib": "file:libs/cangjielib.har",
                 "libohos_app_cangjie_cangjielib.so": "file:src/main/cangjie/types/ohos_app_cangjie_cangjielib"
                 // ...
             }
         }

  5. ArkTS 侧使用 import 语法直接导入仓颉模块，并调用仓颉 addNumber 接口：
         
         // 导入仓颉动态库，该动态库名称为仓颉包名的名称，该名称需要和互操作接口所在的包名一致
         import { addNumber } from "libohos_app_cangjie_cangjielib.so";
         
         // 调用仓颉接口
         let result = addNumber(1, 2);
         console.log(`1 + 2 = ${result}`);




#### [h2]使用 import 语法加载仓颉三方库 A，且三方库 A 依赖三方库 B

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/S4M7wXIaRH-d2BqiLDqE9g/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111605Z&HW-CC-Expire=86400&HW-CC-Sign=416768B87E27E91E7F05433A29249AAAFC59390E6DD586D20786B6BEAEF234B8)

假设 ArkTS 需要加载仓颉三方库 A 中的 returnA 接口，且三方库 A 中的 returnA 接口依赖三方库 B 的 returnB 接口。

**方案一：通过cjpm.toml 配置三方库依赖**

  1. 在 ArkTS 工程中新建 package_a 和 package_b 目录，在 package_a 目录下创建 a.cj 和 cjpm.toml 文件，在 package_b 目录下创建 b.cj 和 cjpm.toml 文件。

     * a.cj 文件
           
           // package_a/a.cj
           package package_a
           // 导入互操作库
           import ohos.ark_interop.JSModule
           import ohos.ark_interop.JSContext
           import ohos.ark_interop.JSCallInfo
           import ohos.ark_interop.JSValue
           // 导入三方库 B
           import package_b.returnB
           
           // 定义三方库 A 中的 returnA 接口
           public func returnA(context: JSContext, callInfo: JSCallInfo): JSValue {
               let result = "A " + returnB()
               return context.string(result).toJSValue()
           }
           
           // 注册该函数到JSModule中
           let EXPORT_MODULE = JSModule.registerModule {
               runtime, exports => exports["returnA"] = runtime.function(returnA).toJSValue()
           }

     * b.cj 文件
           
           // package_b/b.cj
           package package_b
           
           public func returnB(): String {
               return "B"
           }

     * 在三方库 A 的 cjpm.toml 的 dependencies 字段添加对三方库 B 的依赖：
           
           # package_a/cjpm.toml
           [dependencies]
             [dependencies.package_b]
               path = "../package_b"

  2. 在 ArkTS 工程中创建仓颉模块，详情请参见[在 ArkTS 工程中添加仓颉模块](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-add_cangjie_module)。

  3. 在 ArkTS 侧创建仓颉三方库 A 接口声明。

     * 在 types->libpackage_a 文件夹下新建 Index.d.ts 文件，提供 ArkTS 侧接口声明：
           
           // entry/src/main/cangjie/types/libpackage_a/Index.d.ts
           export declare function returnA(): string;

     * 在 types->libpackage_a 文件夹下新建 oh-package.json5 文件，将 Index.d.ts 与仓颉三方库 A 关联起来。
           
           // entry/src/main/cangjie/types/libpackage_a/oh-package.json5
           {
               "name": "libpackage_a.so",
               "types": "./Index.d.ts",
               "version": "1.0.0",
               "description": ""
           }

  4. 在 ArkTS 模块内的 oh-package.json5 文件中声明仓颉三方库 A 的根目录路径：
         
         // entry/oh-package.json5
         {
             "dependencies": {
                 // ...
                 "libpackage_a.so": "file:./src/main/cangjie/types/libpackage_a"
                 // ...
             }
         }

  5. 在 entry 模块内的 cjpm.toml 文件中的 dependencies 字段声明仓颉三方库 A 的路径：
         
         # entry/cjpm.toml
         [dependencies]
           [dependencies.package_a]
             path = "../package_a"

  6. ArkTS 侧使用 import 语法直接导入仓颉三方库 A，并调用仓颉 returnA 接口：
         
         // 导入仓颉动态库，该动态库名称为仓颉三方库的名称，该名称需要和互操作接口所在的包名一致
         import { returnA } from "libpackage_a.so";
         
         // 调用仓颉接口
         let result = returnA();
         console.log(${result});




**方案二：三方库 B 作为三方库 A 的子包**

  1. 在 ArkTS 工程中新建 package_a 和 package_a->package_b 目录，在 package_a 目录下创建 a.cj 和 cjpm.toml 文件，在 package_b 目录下创建 b.cj 文件。

     * a.cj 文件
           
           // package_a/a.cj
           package package_a
           // 导入互操作库
           import ohos.ark_interop.JSModule
           import ohos.ark_interop.JSContext
           import ohos.ark_interop.JSCallInfo
           import ohos.ark_interop.JSValue
           // 导入子包 B
           import package_a.package_b.returnB
           
           // 定义三方库 A 中的 returnA 接口
           public func returnA(context: JSContext, callInfo: JSCallInfo): JSValue {
               let result = "A " + returnB()
               return context.string(result).toJSValue()
           }
           
           // 注册该函数到JSModule中
           let EXPORT_MODULE = JSModule.registerModule {
               runtime, exports => exports["returnA"] = runtime.function(returnA).toJSValue()
           }

     * b.cj 文件
           
           // package_a/package_b/b.cj
           package package_a.package_b
           
           public func returnB(): String {
               return "B"
           }

  2. 在 ArkTS 工程中创建仓颉模块，详情请参见[在 ArkTS 工程中添加仓颉模块](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-add_cangjie_module)。

  3. 在 ArkTS 侧创建仓颉三方库 A 接口声明。

     * 在 types->libpackage_a 文件夹下新建 Index.d.ts 文件，提供 ArkTS 侧接口声明：
           
           // entry/src/main/cangjie/types/libpackage_a/Index.d.ts
           export declare function returnA(): string;

     * 在 types->libpackage_a 文件夹下新建 oh-package.json5 文件，将 Index.d.ts 与仓颉三方库 A 关联起来。
           
           // entry/src/main/cangjie/types/libpackage_a/oh-package.json5
           {
               "name": "libpackage_a.so",
               "types": "./Index.d.ts",
               "version": "1.0.0",
               "description": ""
           }

  4. 在 ArkTS 模块内的 oh-package.json5 文件中声明仓颉三方库 A 的根目录路径：
         
         // entry/oh-package.json5
         {
             "dependencies": {
                 // ...
                 "libpackage_a.so": "file:./src/main/cangjie/types/libpackage_a"
                 // ...
             }
         }

  5. 在 entry 模块内的 cjpm.toml 文件中的 dependencies 字段声明仓颉三方库 A 的路径：
         
         # entry/cjpm.toml
         [dependencies]
           [dependencies.package_a]
             path = "../package_a"

  6. ArkTS 侧使用 import 语法直接导入仓颉三方库 A，并调用仓颉 returnA 接口：
         
         // 导入仓颉动态库，该动态库名称为仓颉三方库的名称，该名称需要和互操作接口所在的包名一致
         import { returnA } from "libpackage_a.so";
         
         // 调用仓颉接口
         let result = returnA();
         console.log(${result});




**方案三：三方库 B 作为一个模块，编译成 har 包**

  1. 在 ArkTS 工程中创建仓颉静态库模块 package_b，详情请参见[添加仓颉静态库模块](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-add_cangjie_module)。在模块 package_b 下声明 returnB 接口：
         
         // package_b/src/main/cangjie/index.cj
         package ohos_app_cangjie_package_b
         
         public func returnB(): String {
             return "B"
         }

  2. 在 ArkTS 模块内的 oh-package.json5 文件中的 dependencies 字段配置对仓颉静态库模块 package_b 的依赖：
         
         // entry/oh-package.json5
         {
             "dependencies": {
                 // ...
                 "package_b": "../package_b",
                 // ...
             }
         }

  3. 在 ArkTS 工程中创建仓颉模块，详情请参见[在 ArkTS 工程中添加仓颉模块](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-add_cangjie_module)。

  4. 在 cangjie 文件夹下新建 package_a 目录，在 package_a 目录下新建 src->a.cj 文件 和 cjpm.toml 文件。

     * a.cj
           
           // entry/src/main/cangjie/package_a/src/a.cj
           
           package package_a
           // 导入互操作库
           import ohos.ark_interop.JSModule
           import ohos.ark_interop.JSContext
           import ohos.ark_interop.JSCallInfo
           import ohos.ark_interop.JSValue
           // 导入三方库 B
           import ohos_app_cangjie_package_b.returnB
           
           // 定义三方库 A 中的 returnA 接口
           public func returnA(context: JSContext, callInfo: JSCallInfo): JSValue {
               let result = "A " + returnB()
               return context.string(result).toJSValue()
           }
           
           // 注册该函数到JSModule中
           let EXPORT_MODULE = JSModule.registerModule {
               runtime, exports => exports["returnA"] = runtime.function(returnA).toJSValue()
           }

     * 在三方库 A 的 cjpm.toml 的 dependencies 字段添加对三方库 B 的依赖：
           
           # entry/src/main/cangjie/package_a/cjpm.toml
           [dependencies]
             [dependencies.ohos_app_cangjie_package_b]
               path = ${package_b}

  5. 在 ArkTS 侧创建仓颉三方库 A 接口声明。

     * 在 types->libpackage_a 文件夹下新建 Index.d.ts 文件，提供 ArkTS 侧接口声明：
           
           // entry/src/main/cangjie/types/libpackage_a/Index.d.ts
           export declare function returnA(): string;

     * 在 types->libpackage_a 文件夹下新建 oh-package.json5 文件，将 Index.d.ts 与仓颉三方库 A 关联起来。
           
           // entry/src/main/cangjie/types/libpackage_a/oh-package.json5
           {
               "name": "libpackage_a.so",
               "types": "./Index.d.ts",
               "version": "1.0.0",
               "description": ""
           }

  6. 在 ArkTS 模块内的 oh-package.json5 文件中声明仓颉三方库 A 和静态库模块 package_b 的路径：
         
         // entry/oh-package.json5
         {
             "dependencies": {
                 // ...
                 "package_b": "../package_b",
                 "libpackage_a.so": "file:./src/main/cangjie/types/libpackage_a"
                 // ...
             }
         }

  7. 在 entry 模块内的 cjpm.toml 文件中的 dependencies 字段声明仓颉三方库 A 的路径：
         
         # entry/cjpm.toml
         [dependencies]
           [dependencies.package_a]
             path = "../package_a"

  8. ArkTS 侧使用 import 语法直接导入仓颉三方库 A，并调用仓颉 returnA 接口：
         
         // 导入仓颉动态库，该动态库名称为仓颉三方库的名称，该名称需要和互操作接口所在的包名一致
         import { returnA } from "libpackage_a.so";
         
         // 调用仓颉接口
         let result = returnA();
         console.log(${result});




#### 方式二：使用 loadNativeModule 接口加载仓颉模块

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6b/v3/f7zpTwroQrqrzLxSEk5YLw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111605Z&HW-CC-Expire=86400&HW-CC-Sign=9DDFDA057D2FF17AB00CAA0C0FF10FD07B27BC25EB309793BAE5026F1259D816)

loadNativeModule 接口详细介绍请参考：[同步方式动态加载 native 模块](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/js-apis-load-native-module)

下面为使用 loadNativeModule 接口加载仓颉 ohos_app_cangjie_entry 模块并调用 addNumber 函数的示例：

  1. 在 ArkTS 工程中创建仓颉模块，详情请参见[在 ArkTS 工程中添加仓颉模块](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-add_cangjie_module)。

  2. 仓颉侧互操作接口的实现：

     * 实现互操作接口 addNumber：
           
           // entry/src/main/cangjie/index.cj
           
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

     * 在 types->libohos_app_cangjie_entry 文件夹下的 Index.d.ts 文件中，提供 ArkTS 侧接口声明：
           
           // entry/src/main/cangjie/types/libohos_app_cangjie_entry/Index.d.ts
           export declare function addNumber(a: number, b: number): number;

     * 在 types->libohos_app_cangjie_entry 文件夹下的 oh-package.json5 文件中将 Index.d.ts 与仓颉模块对应的 so 库关联起来：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e1/v3/IMIzlcREQ1qy7H1enfgNqg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111605Z&HW-CC-Expire=86400&HW-CC-Sign=A6FA99D154A4490B0E9A5CB249961E7154A968013A90C425F36AE78EFF634FD4)

以下代码无须复制，创建仓颉模块以后在工程中已配置好。
           
           // entry/src/main/cangjie/types/libohos_app_cangjie_entry/oh-package.json5
           {
               "name": "libohos_app_cangjie_entry.so",
               "types": "./Index.d.ts",
               "version": "1.0.0",
               "description": ""
           }

  3. 在 ArkTS 模块内的 oh-package.json5 文件中的 dependencies 字段配置对仓颉模块对应的 so 库的依赖：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f4/v3/OdEjepeeSdaV1E9bIzD9ag/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111605Z&HW-CC-Expire=86400&HW-CC-Sign=A323DC64666D96DB964E4E4466955EEB28A217878629B739B5C48BC14398F4C2)

以下代码无须复制，创建仓颉模块以后在工程中已配置好。
         
         // entry/oh-package.json5
         {
             "dependencies": {
                 // ...
                 "libohos_app_cangjie_entry.so": "file:./src/main/cangjie/types/libohos_app_cangjie_entry"
                 // ...
             }
         }

  4. ArkTS 侧使用 loadNativeModule 加载 libohos_app_cangjie_entry.so，调用仓颉 addNumber 接口：
         
         // 使用 loadNativeModule 接口加载仓颉动态库
         let module: ESObject = loadNativeModule("libohos_app_cangjie_entry.so");
         
         // 调用仓颉接口
         let result: number = module.addNumber(1, 2);
         console.log(`1 + 2 = ${result}`);



