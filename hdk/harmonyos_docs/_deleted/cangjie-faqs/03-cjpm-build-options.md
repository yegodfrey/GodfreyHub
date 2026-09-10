---
name: cangjie-faqs/03-cjpm-build-options
title: HarmonyOS仓颉应用cjpm.toml如何配置编译选项
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/03-cjpm-build-options
nodePath: FAQ / 工具链 / HarmonyOS仓颉应用cjpm.toml如何配置编译选项
---

# HarmonyOS仓颉应用cjpm.toml如何配置编译选项

仓颉HarmonyOS应用通过cjpm.toml配置仓颉代码编译选项。HarmonyOS应用的整体构建由**hvigor** 管理，cjpm负责仓颉源码编译。

#### cjpm.toml基本配置

HarmonyOS仓颉应用的cjpm.toml配置示例：
    
    
    [package]
      cjc-version = "1.0.0"
      compile-option = "--dy-std --cfg=\"${COMPILE_CONDITION_ENTRY}\""
      description = "CangjieUI Application"
      link-option = ""
      name = "ohos_app_cangjie_entry"
      output-type = "dynamic"
      src-dir = "./src/main/cangjie"
      target-dir = ""
      version = "1.0.0"

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/12/v3/XxN0s4vMQg2wvIz26ri7ow/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260804T120421Z&HW-CC-Expire=86400&HW-CC-Sign=60B8A9AB5CAA51A7863FF296689C63D48067BC00E783C7EDD1AEF054B321A6B4)

  * output-type = "dynamic"：HarmonyOS应用输出动态库，供ArkTS侧调用
  * src-dir = "./src/main/cangjie"：仓颉源码目录
  * \--dy-std：动态链接标准库



#### HarmonyOS平台配置

为不同HarmonyOS平台配置编译选项：
    
    
    [target.aarch64-linux-ohos]
      compile-option = "-B \"${DEVECO_CANGJIE_HOME}/build-tools/third_party/llvm/bin\" -B \"${DEVECO_OH_NATIVE_HOME}/sysroot/usr/lib/aarch64-linux-ohos\" -L \"${DEVECO_OH_NATIVE_HOME}/sysroot/usr/lib/aarch64-linux-ohos\" --sysroot \"${DEVECO_OH_NATIVE_HOME}/sysroot\""
    
    [target.aarch64-linux-ohos.bin-dependencies]
      path-option = ["${AARCH64_LIBS}", "${AARCH64_KIT_LIBS}"]
      package-option = {}
    
    [target.x86_64-linux-ohos]
      compile-option = "-B \"${DEVECO_CANGJIE_HOME}/build-tools/third_party/llvm/bin\" -B \"${DEVECO_OH_NATIVE_HOME}/sysroot/usr/lib/x86_64-linux-ohos\" -L \"${DEVECO_OH_NATIVE_HOME}/sysroot/usr/lib/x86_64-linux-ohos\" --sysroot \"${DEVECO_OH_NATIVE_HOME}/sysroot\""
    
    [target.x86_64-linux-ohos.bin-dependencies]
      path-option = ["${X86_64_OHOS_LIBS}", "${X86_64_OHOS_KIT_LIBS}"]

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/45/v3/zaJ-iHkySLe4KtnGadwohQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260804T120421Z&HW-CC-Expire=86400&HW-CC-Sign=2A69948A08D74D47F5F5A92F53E7A1130E043D73E1DDBCC4AA3560B4FF5F8B21)

  * aarch64-linux-ohos：ARM64 HarmonyOS平台（真机）
  * x86_64-linux-ohos：x86 HarmonyOS平台（模拟器）
  * bin-dependencies.path-option：指定Kit库路径



#### 自定义编译选项

通过[profile.customized-option]定义调试/发布选项：
    
    
    [profile]
      [profile.build]
        incremental = true
    
      [profile.customized-option]
        debug = "-g -Woff all -Won apilevel-check"
        release = "--fast-math -O2 -s -Woff all -Won apilevel-check"

DevEco Studio构建时自动选择：

  * Debug模式使用debug选项
  * Release模式使用release选项



#### 实际构建流程

HarmonyOS仓颉应用的构建流程：

  1. **DevEco Studio** → 点击Build菜单
  2. **hvigor** → 读取build-profile.json5、hvigorfile.ts
  3. **cjpm** → 编译仓颉源码（根据cjpm.toml）
  4. **打包** → 生成HAP文件


    
    
    # 命令行构建（在工程根目录）
    hvigorw assembleHap

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/91/v3/rz_SKYi7RaSfg10wLSSfEQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260804T120421Z&HW-CC-Expire=86400&HW-CC-Sign=76214551C304214DC3B68A9CE0E478261108AC02E2AC454CC2C1C6D95F3CFC6C)

  1. HarmonyOS应用不直接使用cjpm build，而是通过hvigor调用cjpm。
  2. compile-option中的环境变量由DevEco Studio自动设置。
  3. bin-dependencies.path-option用于指定Kit库（如NetworkKit、ArkData等）路径。
  4. 仓颉源码目录固定为src/main/cangjie。



更多cjpm配置说明，详情请参见[CJPM介绍](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-cjpm_usage)。
