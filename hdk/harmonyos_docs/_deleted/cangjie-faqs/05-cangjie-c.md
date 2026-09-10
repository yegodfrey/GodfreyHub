---
name: cangjie-faqs/05-cangjie-c
title: 仓颉项目中如何调用C库函数
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/05-cangjie-c
nodePath: FAQ / 跨语言互操作 / 仓颉项目中如何调用C库函数
---

# 仓颉项目中如何调用C库函数

仓颉支持与C语言互操作，具体步骤如下：

#### 1 在DevEco Studio中，构建混合工程

  * 创建仓颉模板工程



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/20/v3/gCmeZPITRyChIqvtVT_J1A/zh-cn_image_0000002659354128.png?HW-CC-KV=V1&HW-CC-Date=20260804T120405Z&HW-CC-Expire=86400&HW-CC-Sign=6BF56B1706BDD93CA35655EB3B4AC4C6711FB6E71B0B145A42822392245E93CD)

  * 引入cpp模块，DevEco Studio支持引入C++模块，此处借用该编译构建环境



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/df/v3/hl4Zfb7dQHu2lC6ulkstoQ/zh-cn_image_0000002689473657.png?HW-CC-KV=V1&HW-CC-Date=20260804T120405Z&HW-CC-Expire=86400&HW-CC-Sign=4471E348CEEEF38CB653D4FC3D7496EF52E071F2B578AB6345D30E3454BF0DA2)

  * 工程目录将变为如下图所示：



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b6/v3/2kaBoYsNQgOdnaMfYE1JvQ/zh-cn_image_0000002689593465.png?HW-CC-KV=V1&HW-CC-Date=20260804T120405Z&HW-CC-Expire=86400&HW-CC-Sign=6D3580F6C3C09DA92CE03EE54DC337A23E8A27B86013964A3D447A781C14D758)
    
    
    ├── entry
    │   └── libs // C源码编译出的动态库放置在该目录下
    │   └── src
    │       ├── main
    │       │   ├── cangjie // 仓颉源码放置在该目录下
    │       │   │   ├── ability_stage.cj
    │       │   │   ├── index.cj
    │       │   │   └── main_ability.cj
    │       │   ├── cpp // C源码放置在该目录下
    │       │   │   ├── types
    │       │   │   ├── CMakeLists.txt // C源码编译配置文件
    │       │   │   └── napi_init.cpp
    │       │   ├── resources
    │       │   └── module.json5
    │       ├── .gitignore
    │       ├── build-profile.json5 // 构建配置文件
    │       ├── cjpm.toml // cjpm(仓颉包管理工具)配置文件，引入仓颉模块时自动生成
    │       ├── hivigorfile.ts
    │       ├── obfuscation-rules.txt
    │       ├── oh-package.json5 // 用于存放依赖库的信息，包括所依赖的三方库和共享包
    │       └── oh-package-lock.json5

#### 2 配置文件介绍

#### [h2]build-profile.json5

build-profile.json5中，externalNativeOptions参数是NDK工程C/C++文件编译配置的入口，可以通过path指定CMake脚本路径、arguments配置CMake参数、cppFlags配置C++编译器参数、abiFilters配置编译架构等；cangjieOptions是仓颉工程仓颉文件编译配置的入口，可以通过path指定cjpm配置文件路径，abiFilters配置编译架构等。
    
    
    ...
      "buildOption": {
        "externalNativeOptions": {
          "path": "./src/main/cpp/CMakeLists.txt",
          "arguments": "",
          "cppFlags": "",
        },
        "cangjieOptions": {
          "path": "./cjpm.toml"
        },
        "nativeLib": {
          "filter": {
            "enableOverride": true
          }
        }
      },
    ...

为了让本文开发者快速能够快速掌握互操作调用，可在模拟器运行示例工程，增加了abiFilters配置选项：
    
    
    ...
      "buildOption": {
        "cangjieOptions": {
          "path": "./cjpm.toml",
          "abiFilters": [
            "x86_64",
            "arm64-v8a"
          ]
        },
        "nativeLib": {
          "filter": {
            "enableOverride": true
          }
        },
        "externalNativeOptions": {
          "path": "./src/main/cpp/CMakeLists.txt",
          "arguments": "",
          "cppFlags": "",
          "abiFilters": [
            "x86_64",
            "arm64-v8a"
          ]
        }
      },
    ...

#### [h2]cjpm.toml

cjpm.toml是仓颉模块配置文件用于配置一些基础信息、依赖项、编译选项等内容，cjpm主要通过这个文件进行解析执行。仓颉依赖C库需要在该文件下新增[ffi.c]配置选项，后续会做详细的介绍。

#### [h2]oh-package.json5

oh-package.json5用于存放依赖库的信息，包括所依赖的三方库和共享包。详情请参见[oh-package.json5](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-oh-package-json5)，在增加C++模块后，oh-package.json5会在dependencies选项下自动生成libentry.so依赖路径，以帮助工程引入C++库。
    
    
    {
      "name": "entry",
      "version": "1.0.0",
      "description": "Please describe the basic information.",
      "main": "",
      "author": "",
      "license": "",
      "dependencies": {
        "libentry.so": "file:./src/main/cpp/types/libentry",
      }
    }

#### 3 编写C代码

本文以C语言函数实现在字符串前添加"Hello "功能，并被仓颉语言函数调用为示例。

  * 在cpp目录下添加FAQ_45.c文件，源码如下：


    
    
    #include <stdio.h>
    #include <stdlib.h>
    #include <string.h>
    
    char *hello(const char *name) {
        if (!name) name = "";
        size_t nameLen = strlen(name);
        char* result = (char*)malloc(6 + nameLen + 1);
        
        if (!result) {
            return NULL;
        }
        
        strncpy(result, "Hello ", 6);
        result[6] = '\0';
        strncat(result, name, nameLen);
        
        return result;
    }

  * 在cpp目录下添加FAQ_45.h文件，源码如下：


    
    
    #ifndef CANGJIEINTEROPFAQCODE_FAQ_45_H
    #define CANGJIEINTEROPFAQCODE_FAQ_45_H
    
    char *hello(const char *name);
    
    #endif //CANGJIEINTEROPFAQCODE_FAQ_45_H

  * 在cpp目录下CMakeLists.txt文件中，添加编译命令：


    
    
    cmake_minimum_required(VERSION 3.5.0)
    project(CangjieInteropFAQCode)
    
    set(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})
    
    if(DEFINED PACKAGE_FIND_FILE)
        include(${PACKAGE_FIND_FILE})
    endif()
    
    include_directories(${NATIVERENDER_ROOT_PATH}
                        ${NATIVERENDER_ROOT_PATH}/include)
    
    add_library(entry SHARED napi_init.cpp) # 无关编译命令可以注释
    add_library(Hello SHARED FAQ_45.c) # 把FAQ_45.c添加到Hello库中，编译器会将FAQ_45.c源码编译为libHello.so
    
    target_link_libraries(entry PUBLIC libace_napi.z.so) # 无关编译命令可以注释

#### 编译C++代码

  * DevEco Studio菜单栏 ——> Build ——> Make Module 'entry'



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f4/v3/mCzGH-_xTXqpL-5yTPC7Lg/zh-cn_image_0000002659514064.png?HW-CC-KV=V1&HW-CC-Date=20260804T120405Z&HW-CC-Expire=86400&HW-CC-Sign=9C02531736523F53E3CD3953E1204C833BBFDF2EA764A212C061557FF87BB436)

  * entry ——> build ——> intermediates ——> libs目录下会生成arm64-v8a和x86_64目录，可以找到libHello.so文件



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/42/v3/cI9UGctnQTWQ0cMTvWpCxw/zh-cn_image_0000002659354130.png?HW-CC-KV=V1&HW-CC-Date=20260804T120405Z&HW-CC-Expire=86400&HW-CC-Sign=B252BDB88D3C9DE63B532F6F1F8618BE43023CD56F52A2B5356A12150B0E52C1)

#### 仓颉依赖C库配置

  * 将上述编译出的动态库分别复制到entry ——> libs目录下的arm64-v8a和x86_64目录



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/87/v3/oVPHK91FSy2FdkC4IpoBNg/zh-cn_image_0000002689473659.png?HW-CC-KV=V1&HW-CC-Date=20260804T120405Z&HW-CC-Expire=86400&HW-CC-Sign=D4B6D8F492EF831C43EDE552D3FACFC3E641FAC6A15D98EC64FA18201D25EF7E)

  * 在cjpm.toml文件下配置依赖项


    
    
    [ffi]
        [ffi.c]
            [ffi.c.Hello] # Hello 为动态库名称
                path = "./libs/${ABI}/" # 编译器会根据目标平台自动链接arm64-v8a或x86_64

#### 编写仓颉互操作代码

  * 在cangjie目录下添加FAQ_45.cj文件，内容为：


    
    
    foreign func hello(name: CString): CString
    
    public func FAQ45Test(name: String): String {
        unsafe {
            let nameCS = LibC.mallocCString(name)
            let helloCS = hello(nameCS)
            let result = helloCS.toString()
            LibC.free(helloCS)
            LibC.free(nameCS)
            return result
        }
    }

  * 在index.cj中调用FAQ45Test：


    
    
    internal import ohos.base.*
    internal import ohos.component.*
    internal import ohos.state_manage.*
    import ohos.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        @State
        var message: String = "Hello World"
    
        func build() {
            Row {
                Column {
                    Text(this.message)
                        .fontSize(50)
                        .fontWeight(FontWeight.Bold)
                        .onClick {
                            evt => this.message = FAQ45Test("Cangjie")
                        }
                }.width(100.percent)
            }.height(100.percent)
        }
    }

  * 在模拟器中运行示例工程，点击Hello World，文字变为Hello Cangjie



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8d/v3/17Ab1iBFQdKUHDIhU5ujdA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260804T120405Z&HW-CC-Expire=86400&HW-CC-Sign=F7D7A9E69D711086607CE24AF89747760FAD874609AB97B09DAC812A861395D1)

  1. 仓颉只需要声明需要调用的C接口，即可通过动态库调用C接口。仓颉声明的接口名称、参数类型、返回值类型与C接口要一一对应，并且需要被foreign修饰，以提示编译器，该接口来自C库。调用C接口时，需要声明unsafe，以提醒开发者，对于内存安全进行管控。
  2. 更多仓颉与C互操作用法，详情请参见[仓颉-C互操作](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-cangjie-c)章节。


