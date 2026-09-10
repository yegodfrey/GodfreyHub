---
name: cangjie-faqs/04-cangjie-c__
title: 仓颉项目中如何调用C++库
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/04-cangjie-c__
nodePath: FAQ / 跨语言互操作 / 仓颉项目中如何调用C++库
---

# 仓颉项目中如何调用C++库

仓颉支持与C语言互操作，但是当前还不支持直接与C++互操作，因此无法直接调用C++库。如果需要在仓颉代码中使用已有的C++库，可以将C++接口封装成C风格的接口，然后在仓颉代码中调用封装后的C接口。具体步骤如下：

#### 1 在DevEco Studio中，构建混合工程

  * 创建仓颉模板工程



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3c/v3/yZTr-4VMQU-ndJMnp9vyzA/zh-cn_image_0000002689593461.png?HW-CC-KV=V1&HW-CC-Date=20260804T120405Z&HW-CC-Expire=86400&HW-CC-Sign=25992E973D415452ECB54C391550F8EF826C43593F3DFB6083868F6114F919F4)

  * 引入cpp模块



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4f/v3/2Qn3mpeERKaGPJSme0lwHg/zh-cn_image_0000002659514060.png?HW-CC-KV=V1&HW-CC-Date=20260804T120405Z&HW-CC-Expire=86400&HW-CC-Sign=0AA4EF67A8B174A994E1BE8064156D4DA48C293AD4DBF6C221137BDED0480A95)

  * 工程目录将变为如下图所示：



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a8/v3/z9Abwl8yRw-fhBlEGU2d6w/zh-cn_image_0000002659354126.png?HW-CC-KV=V1&HW-CC-Date=20260804T120405Z&HW-CC-Expire=86400&HW-CC-Sign=42B5D5EBDAA1CC84542B6694ED49843F772A219A97861914B59512442098DB02)
    
    
    ├── entry
    │   └── libs // C++源码编译出的动态库放置在该目录下
    │   └── src
    │       ├── main
    │       │   ├── cangjie // 仓颉源码放置在该目录下
    │       │   │   ├── ability_stage.cj
    │       │   │   ├── index.cj
    │       │   │   └── main_ability.cj
    │       │   ├── cpp // C++源码放置在该目录下
    │       │   │   ├── types
    │       │   │   ├── CMakeLists.txt // C++源码编译配置文件
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

为了让本文开发者能够快速掌握互操作调用，可在windows模拟器运行示例工程，增加了abiFilters配置选项：
    
    
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

oh-package.json5用于存放依赖库的信息，包括所依赖的三方库和共享包。详情请参见[oh-package.json5](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-oh-package-json5)，在增加C++模块后，oh-package.json5会在dependencies选项下自动生成\libentry.so"依赖路径，以帮助工程引入C++库。
    
    
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

#### 3 编写C++代码

本文以使用仓颉调用C++Vector为示例。

  * 在cpp目录下添加FAQ_44.cpp文件，源码如下：


    
    
    #include "FAQ_44.h"
    #include <vector>
    #include <stdexcept>
    
    class IntVector {
    public:
        void push_back(int value) { data.push_back(value); }
        int at(size_t index) const { return data.at(index); }
    private:
        std::vector<int> data;
    };
    
    IntVector* intv_create() {
        try {
            return new IntVector();
        } catch(...) {
            return nullptr;
        }
    }
    
    void intv_destroy(IntVector* iv) {
        delete iv;
    }
    
    int intv_push_back(IntVector* iv, int value) {
        if (!iv) return -1;
        try {
            iv->push_back(value);
            return 0;
        } catch(...) {
            return -1;
        }
    }
    
    int intv_at(const IntVector* iv, size_t index, int* out_value) {
        if (!iv || !out_value) return -1;
        try {
            *out_value = iv->at(index);
            return 0;
        } catch (const std::out_of_range&) {
            return -1;
        } catch (...) {
            return -1;
        }
    }

  * 在cpp目录下添加FAQ_44.h文件，源码如下：


    
    
    #ifndef CANGJIEFAQCODE_FAQ_44_H
    #define CANGJIEFAQCODE_FAQ_44_H
    
    #include <stddef.h>
    
    #ifdef __cplusplus
    
    extern "C" {
    
    #endif
    
    typedef struct IntVector IntVector;
    
    IntVector* intv_create();
    
    void intv_destroy(IntVector* iv);
    
    int intv_push_back(IntVector* iv, int value);
    
    int intv_at(const IntVector* iv, size_t index, int* out_value);
    
    #ifdef __cplusplus
    
    }
    
    #endif
    
    #endif //CANGJIEFAQCODE_FAQ_44_H

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9b/v3/N28SXn7mQgWhYnYd7TbLEg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260804T120405Z&HW-CC-Expire=86400&HW-CC-Sign=90CDEAD0A9FF25A82C6D48454C57B8DAF0DDD5BA82A02D0F04F5CFDED29BD091)

  1. 由于仓颉只能跟C互操作，所以需要被仓颉调用的C++接口需要编写在extern "C"中。被extern "C"修饰的函数或变量应按照C语言的规则进行编译和链接，即不进行名称修饰。与仓颉进行链接时，仓颉编译器才能够找到正确的符号。
  2. #ifdef __cplusplus是一个在C/C++混合编程中非常重要的条件编译预处理指令，它的核心作用是判断当前代码是否正在被C++编译器编译。



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
    add_library(IntVector SHARED FAQ_44.cpp) # 把FAQ_44.cpp添加到IntVector库中，编译器会将FAQ_44.cpp源码编译为libIntVector.so
    
    target_link_libraries(entry PUBLIC libace_napi.z.so) # 无关编译命令可以注释

#### 编译C++代码

  * DevEco Studio菜单栏 ——> Build ——> Make Module 'entry'



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c3/v3/9qPnvm0NQYeJCC6HzbxCag/zh-cn_image_0000002689473655.png?HW-CC-KV=V1&HW-CC-Date=20260804T120405Z&HW-CC-Expire=86400&HW-CC-Sign=5102611E0401F3379EED94BFD5F03F0E677A693DF313B27D88EE5F73FDF6A875)

  * entry ——> build ——> intermediates ——> libs目录下会生成arm64-v8a和x86_64目录，可以找到libIntVector.so文件



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/32/v3/YwCDFd-5Si67RxB3viKI3A/zh-cn_image_0000002689593463.png?HW-CC-KV=V1&HW-CC-Date=20260804T120405Z&HW-CC-Expire=86400&HW-CC-Sign=8EC947E7F1E6728685A3E82184E337889EC7CC0A8C097155CFB12CD3C6174016)

#### 仓颉依赖C库配置

  * 将上述编译出的动态库分别复制到entry ——> libs目录下的arm64-v8a和x86_64目录



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3a/v3/Et_wdLGrRC-OykSMd5SNLA/zh-cn_image_0000002659514062.png?HW-CC-KV=V1&HW-CC-Date=20260804T120405Z&HW-CC-Expire=86400&HW-CC-Sign=6D019049A99DC3F06CBB01CCFA6F45B226D0C1CD1F5669A491966FBEE139AFF8)

  * 在cjpm.toml文件下配置依赖项


    
    
    [ffi]
        [ffi.c]
            [ffi.c.IntVector] # IntVector 为动态库名称
                path = "./libs/${ABI}/" # 编译器会根据目标平台自动链接arm64-v8a或x86_64

#### 编写仓颉互操作代码

  * 在cangjie目录下添加FAQ_44.cj文件，内容为：


    
    
    import kit.PerformanceAnalysisKit.Hilog
    
    type IntVector = CPointer<Unit>
    
    foreign {
        func intv_create(): IntVector
    
        func intv_destroy(iv: IntVector): Unit
    
        func intv_push_back(iv: IntVector, index: IntNative): IntNative
    
        func intv_at(iv: IntVector, index: UIntNative, out_value: CPointer<IntNative>): IntNative
    }
    
    func FAQ44Test(): Unit {
        unsafe {
            // 调用 c 函数
            let v = intv_create()
            intv_push_back(v, 10)
            intv_push_back(v, 20)
            intv_push_back(v, 30)
            var out = IntNative(0)
            intv_at(v, 1, inout out)
            Hilog.info(0, "Cangjie Test", out.toString())
            intv_destroy(v)
        }
    }

调用FAQ44Test，日志输出结果：
    
    
    20

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1f/v3/faXujCO1Ri-E6EA2ZxlDJQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260804T120405Z&HW-CC-Expire=86400&HW-CC-Sign=094C840D058774FE15BE3D822348190C33CFD81F431F9B302051DE3EF643DF85)

  1. 仓颉只需要声明需要调用的C接口，即可通过动态库调用C接口。仓颉声明的接口名称、参数类型、返回值类型与C接口要一一对应，并且需要被foreign修饰，以提示编译器，该接口来自C库。调用C接口时，需要声明unsafe，以提醒开发者，对于内存安全进行管控。
  2. 更多仓颉与C互操作用法，详情请参见[仓颉-C互操作](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-cangjie-c)章节。


