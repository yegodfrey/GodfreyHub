---
name: cangjie-practices/nativesointegration
title: 三方动态链接库集成
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-practices/nativesointegration
nodePath: 实践 / 三方动态链接库集成
---

# 三方动态链接库集成

#### 概述

在实际项目中，业务功能可能由不同“团队/组织”提供，如：团队A开发功能编译生成so库，团队B引用so库进行后续开发。so库可以将项目的不同功能模块化，提升代码的复用性和工程的可维护性。仓颉支持Native侧引用三方so库，下面针对具体场景给出实现方案。

#### 在Native侧引用三方so库

按照实际开发场景可分为两部分：编译生成so库和在Native侧引用so库。

第一部分：开发功能函数，编译生成so库。具体操作可参考：[使用命令行CMake构建NDK工程](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/build-with-ndk-cmake)。

第二部分：在Native侧引用so库调用功能函数。可以采用如下三种方案：

  * 方案一：通过链接动态链接库的方式引用。
  * 方案二：通过调用dlopen的方式引用。
  * 方案三：通过先编译动态链接库后链接的方式引用。



#### [h2]通过链接动态链接库的方式引用

**实现原理**

将so库加入到工程中，在Native侧使用CMake编译动态链接库，通过include引用头文件调用功能函数。

**开发步骤**

以引用一个加法计算so库为例，具体实现步骤如下：

  1. 将第一部分生成的so库文件置于entry/libs对应的架构目录下。

**图1** add动态库存放路径

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/89/v3/6JoDqOKxRui-QtRMNTxyhQ/zh-cn_image_0000002639520994.png?HW-CC-KV=V1&HW-CC-Date=20260903T111746Z&HW-CC-Expire=86400&HW-CC-Sign=6D3BC5D8642058143711D51E5466AAD2598F9AD129DA2EF79221B3E7CFD2609E)

  2. 修改entry目录下cjpm.toml文件配置，指定libadd.so文件的加载路径。
         
         [target.x86_64-linux-ohos.ffi.c.add]
          path = "./libs/x86_64"
         
         [target.aarch64-linux-ohos.ffi.c.add]
          path = "./libs/arm64-v8a"

  3. 在仓颉代码中使用foreign包裹的形式声明与so库中具有等价签名的函数。例如libadd.so是编译C++生成，其C++函数源码为：
         
         // add.h
         extern "C" {
         double add(double a, double b);
         }
         
         // add.cpp
         double add(double a, double b) { return a + b; }

则仓颉代码中对应的函数声明代码为：
         
         // index.cj
         foreign {
             func add(a: Float64, b: Float64): Float64
         }

  4. 在仓颉代码中使用unsafe关键字对add函数进行调用：
         
         // index.cj
         
         foreign {
             func add(a: Float64, b: Float64): Float64
         }
         
         // ...
         
         @Entry
         @Component
         class EntryView {
             // ...
         
             func build() {
                 Navigation() {
                     // ...
         
                     Column() {
                         Button(@r(app.string.native_so_add))
                             .width(90.percent)
                             .margin(top: 20.vp)
                             .onClick ({
                                 _ => if (paramX.isEmpty() || paramY.isEmpty()) {
                                     customToast(resourceManager.getString(@r(app.string.input_alert).id))
                                 } else {
                                     let x = Float64.parse(paramX)
                                     let y = Float64.parse(paramY)
                                     let resOfAdd = unsafe { add(x, y) }
                                     let content = resourceManager.getString(@r(app.string.native_link_so_content).id)
                                     customToast("${content}${resOfAdd}")
                                 }
                             })
                         // ...
                     }
                     // ...
                 }
                 // ...
             }
             // ...
         }

**图2** 在Native侧通过链接动态链接库的方式引用so库完成加法运算效果展示

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5b/v3/wTANQGP0S3OCDlvMK5fVYg/zh-cn_image_0000002669681001.png?HW-CC-KV=V1&HW-CC-Date=20260903T111746Z&HW-CC-Expire=86400&HW-CC-Sign=E61E739A0C9ADD3EE68DC8EAE2DF04A32ADC7D060CD0CBBBB0EB092108F39ADF)




#### [h2]通过调用dlopen的方式引用

**实现原理**

将so库加入到工程中，在仓颉侧使用dlopen解析so库调用功能函数。需要注意的是该方案只能引用C语言编译模式生成的so库，因此用于生成so库的.h头文件需要用extern "C" {}包裹。

**开发步骤**

以引用一个减法计算so库为例，具体实现步骤如下：

  1. 将第一部分生成的so库文件置于entry/libs对应的架构目录下。

**图3** sub动态库存放路径

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/21/v3/Cxuw4BNISJqa24rGvXlrVQ/zh-cn_image_0000002669560889.png?HW-CC-KV=V1&HW-CC-Date=20260903T111746Z&HW-CC-Expire=86400&HW-CC-Sign=7BF282F4FA1A6B01FA71A608B46BF09DF9EFECD54C292DBF7F4BC33A0796019A)

  2. 使用仓颉代码编写dlopen调用函数，注意dlopen函数需要使用foreign {}包裹， 且dlopen函数中CString类型参数不可以直接使用仓颉的String类型，而需要调用LibC.mallocCString()进行创建。
         
         // dlopen_utils.cj
         
         package ohos_app_cangjie_entry.utils
         
         foreign {
             func dlopen(path: CString, flag: Int32): CPointer<Unit>
         
             func dlsym(handle: CPointer<Unit>, fname: CString): CPointer<Unit>
         
             func dlclose(handle: CPointer<Unit>): Int32
         }
         
         public func execSubFunc(x: Float64, y: Float64, projDir: String, abi: String): Float64 {
             let funcName = "sub"
             let dlName = "${projDir}/libs/${abi}/libsub.so"
         
             let CdlName = unsafe { LibC.mallocCString(dlName) }
             let dl = unsafe { dlopen(CdlName, 1) }
             unsafe { LibC.free(CdlName) }
         
             let CfuncName = unsafe { LibC.mallocCString(funcName) }
             let f = unsafe { dlsym(dl, CfuncName) }
             unsafe { LibC.free(CfuncName) }
         
             let res = unsafe {
                 CFunc<(Float64, Float64) -> Float64>(f)(x, y)
             }
             unsafe { dlclose(dl) }
             return res
         }

  3. 在仓颉代码中对execSubFunc函数进行调用：
         
         // index.cj
         
         // ...
         
         @Entry
         @Component
         class EntryView {
         // ...
         
             func build() {
                 Navigation() {
                 // ...
                 
                     Column() {
                         Button(@r(app.string.native_so_dlopen_sub))
                         .width(90.percent)
                         .margin(top: 20.vp)
                         .onClick ({
                             _ => if (paramX.isEmpty() || paramY.isEmpty()) {
                                 customToast(resourceManager.getString(@r(app.string.input_alert).id))
                             } else {
                                 let x = Float64.parse(paramX)
                                 let y = Float64.parse(paramY)
                                 let sandBoxDir = "/data/storage/el1/bundle"
                                 let abi = if (DeviceInfo.abiList == "x86_64") {
                                     "x86_64"
                                 } else {
                                     "arm64"
                                 }
                                 let resOfSub = execSubFunc(x, y, sandBoxDir, abi)
                                 let content = resourceManager.getString(@r(app.string.native_so_dlopen_content).id)
                                 customToast("${content}${resOfSub}")
                             }
                         })
         
                         // ...
                     }
                   // ...
                 }
               // ...
             }
         // ...
         }

**图4** 在Native侧通过调用dlopen引用三方so库完成减法运算效果展示

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/08/v3/bgD_fIfsS06tqzMgc9zpsA/zh-cn_image_0000002639680940.png?HW-CC-KV=V1&HW-CC-Date=20260903T111746Z&HW-CC-Expire=86400&HW-CC-Sign=214100E780A18D9DC99D2F2A035C32EEEE74625304D1665F111ECF4A976EBD76)




#### [h2]通过先编译动态链接库后链接的方式引用

**实现原理**

将so库加入到工程中，在仓颉侧直接使用CMake先编译动态链接库，然后链接编译生成的动态链接库，完成对功能函数的调用。

**开发步骤**

以引用一个乘法计算so库为例，具体实现步骤如下：

  1. 创建C/C++ File(Napi)，创建完成后会在src/main/目录下自动生成PathOfAddLibrary

**图5** 创建Napi

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4b/v3/omAGYm1VQb69Gijwxi5FhQ/zh-cn_image_0000002639520996.png?HW-CC-KV=V1&HW-CC-Date=20260903T111746Z&HW-CC-Expire=86400&HW-CC-Sign=45A3B2B261773C2A1587FAD39C5427429112600FF80952BF259AA651C69D6C3C)

**图6** 生成cpp目录

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/40/v3/a9d6wQwCQgCmAW9tVQz_2Q/zh-cn_image_0000002669681003.png?HW-CC-KV=V1&HW-CC-Date=20260903T111746Z&HW-CC-Expire=86400&HW-CC-Sign=6133EABD867DD3E5CB42FD36BB0D98EB281880878A1450236AC23BC232BA239C)

  2. 在cpp目录中增加mul.cpp和mul.h文件内容，同时将napi_init.cpp文件删除。
         
         // mul.cpp
         
         #include "mul.h"
         
         double mul(double a, double b) {return a * b;}
         
         // mul.h
         
         #ifndef MUL_H
         #define MUL_H
         
         extern "C" {
             double mul(double, double);
         }
         
         #endif //MUL_H

**图7** cpp目录增加mul文件

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/10/v3/judLwNecQn-2qRJCmIe8jg/zh-cn_image_0000002669560891.png?HW-CC-KV=V1&HW-CC-Date=20260903T111746Z&HW-CC-Expire=86400&HW-CC-Sign=B4E564A1E2E188482C5F0088CA04ACFB618B889895FD8B77139E343880F9E006)

  3. 修改src/main/cpp目录下CMakeLists.txt内容，以生成并链接libmul.so动态库。
         
         # the minimum version of CMake.
         cmake_minimum_required(VERSION 3.5.0)
         project(NativeSoIntegration)
         
         set(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})
         
         if(DEFINED PACKAGE_FIND_FILE)
             include(${PACKAGE_FIND_FILE})
         endif()
         
         include_directories(${NATIVERENDER_ROOT_PATH}
                            ${NATIVERENDER_ROOT_PATH}/include)
         
         add_library(mul SHARED mul.cpp)
         target_link_libraries(mul PUBLIC libace_napi.z.so)

  4. 修改entry目录下cjpm.toml文件配置，指定libmul.so文件的加载路径。
         
         [target.aarch64-linux-ohos.ffi.c.mul]
             path = "./build/default/intermediates/cmake/default/obj/arm64-v8a"
          
         [target.x86_64-linux-ohos.ffi.c.mul]
             path = "./build/default/intermediates/cmake/default/obj/x86_64"

  5. 在仓颉代码中使用foreign包裹的形式声明与so库中具有等价签名的函数。例如C++侧mul函数源码为：
         
         // mul.h
         extern "C" {
         double mul(double a, double b);
         }
         
         // mul.cpp
         double mul(double a, double b) { return a * b; }

则仓颉代码中对应的函数声明代码为：
         
         // index.cj
         foreign {
             func mul(a: Float64, b: Float64): Float64
         }

  6. 在仓颉代码中使用unsafe关键字对mul函数进行调用：
         
         // index.cj
         
         foreign {
             func mul(a: Float64, b: Float64): Float64
         }
         
         // ...
         
         @Entry
         @Component
         class EntryView {
             // ...
         
             func build() {
                 Navigation() {
                     // ...
         
                     Column() {
                         Button(@r(app.string.cangjie_so_multiply))
                         .width(90.percent)
                         .margin(top: 20.vp)
                         .onClick ({
                             _ => if (paramX.isEmpty() || paramY.isEmpty()) {
                                 customToast(resourceManager.getString(@r(app.string.input_alert).id))
                             } else {
                                 let x = Float64.parse(paramX)
                                 let y = Float64.parse(paramY)
                                 let resOfMul = unsafe { mul(x, y) }
                                 let content = resourceManager.getString(@r(app.string.native_compile_and_link_so_content).id)
                                 customToast("${content}${resOfMul}")
                             }
                         })
                     }
                     // ...
                 }
                 // ...
             }
             // ...
         }

**图8** 在Native侧通过先编译后链接动态库的方式完成乘法运算效果展示

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fc/v3/WHXpwN12Tzai58Tx3MINpw/zh-cn_image_0000002639680942.png?HW-CC-KV=V1&HW-CC-Date=20260903T111746Z&HW-CC-Expire=86400&HW-CC-Sign=C8788F5924D3E6B2181E4D1318089CD3D77CBBDEC0F438B68BA8E88F21089511)




#### 示例代码

[三方动态链接库集成示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260728183055.41916984853541813974893589221085:20260904191746:2800:253BA7928CF3B44A81BCE6B930A8F1FA63AB313FC442BFA56FF87E2582BDBBC4.zip?needInitFileName=true)
