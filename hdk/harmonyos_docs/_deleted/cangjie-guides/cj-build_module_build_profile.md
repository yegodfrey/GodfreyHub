---
name: cangjie-guides/cj-build_module_build_profile
title: 模块级build-profile.json5文件
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-build_module_build_profile
nodePath: 构建应用 / 配置文件 / 模块级build-profile.json5文件
---

# 模块级build-profile.json5文件

仓颉模块级build-profile.json5配置参照[模块级build-profile.json5](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile)，本节介绍仓颉增加的相关配置。

#### buildOption

仓颉模块级buildOption如下表所示：

**配置项** | **类型** | **是否必填** | **说明**  
---|---|---|---  
cangjieOptions | object | 否 | 仓颉相关配置  
path | string | 否 | cjpm配置文件路径，提供仓颉构建配置  
abiFilters | array | 否 | 本机的ABI编译环境，包括： arm64-v8a x86_64 如不配置该参数，编译时默认为arm64-v8a，windows模拟器需要增加x86_64  
strictCheckDependencies | boolean | 否 | 是否对依赖下载做严格校验。 true（默认值）：严格校验依赖，如果有依赖未下载时，编译报错。 false：不做依赖检验，有依赖未下载时，编译不报错。  
arguments | string/array | 否 | cjpm build编译参数。 **说明：** 默认编译命令中已经传递--target、--target-dir、--debug（debug模式条件编译选项）、--release（release模式条件编译选项）编译选项，当出现arguments自定义的编译选项与默认编译选项冲突时，arguments自定义的编译选项优先级高于默认传递的编译选项。  
flattenLibs | boolean | 否 | 二进制格式har包中仓颉源码编译产物so是否平铺，仅在HAR模块中配置后生效。 false（默认值）：二进制格式har会打包仓颉so和cjo产物，并放在libs/arm64-v8a/cjbins/package或libs/x86_64/cjbins/package包目录下。 true：二进制格式har不打包cjo，只打包so，并且so平铺在libs/arm64-v8a或libs/x86_64目录下。  
collectSDKLibs | boolean | 否 | 是否打包使用到的runtime库、系统库、标准库到应用里。 false（默认值）：不打包使用到的仓颉SDK里的runtime库、系统库、标准库到应用里。 true：打包使用到的仓颉SDK里的runtime库、系统库、标准库到应用里。  
checkDeviceTypes | boolean | 否 | 是否检验**module.json5** 中**deviceTypes** 配置的设备类型。 true（默认值）：校验配置的设备类型。 false：不校验配置的设备类型。  
  
#### 配置文件结构

仓颉模块级build-profile.json5的示例如下所示：
    
    
    {
      "apiType": "stageMode",  // API类型，仓颉只支持Stage(stageMode)模型
      "buildOption": {  // 配置项目在构建过程中使用的相关配置
        "cangjieOptions": {   // 仓颉相关配置
          "path": "./cjpm.toml",   // cjpm配置文件路径，提供仓颉构建配置
          "abiFilters": ["arm64-v8a", "x86_64"],   // 自定义仓颉编译架构，默认编译架构为arm64-v8a，开发者请根据实际情况配置
          "strictCheckDependencies": true,   // 严格校验依赖，如果有依赖未下载时，编译报错
          "arguments": [],   // 传递给cjpm build的可选编译参数
          "flattenLibs": true,   // 二进制格式har默认打包so和cjo，并放在libs/arm64-v8a/cjbins/package或libs/x86_64/cjbins/package包目录下
          "collectSDKLibs": false,   // 默认不打包使用到的仓颉SDK里的runtime库、系统库、标准库到应用里
          "checkDeviceTypes": true   // 默认检验配置的设备类型
        }
      },
      "buildOptionSet": [  // buildOption的集合
        {
          "name": "release",  // 定义buildOption的名字，取值有default、debug 和 release，也可自定义
          "cangjieOptions": {   // 仓颉相关配置
            "path": "./cjpm.toml",   // cjpm配置文件路径，提供仓颉构建配置
            "abiFilters": ["arm64-v8a", "x86_64"],   // 自定义仓颉编译架构，默认编译架构为arm64-v8a，开发者请根据实际情况配置
            "strictCheckDependencies": true,   // 严格校验依赖，如果有依赖未下载时，编译报错
            "arguments": [],   // 传递给cjpm build的可选编译参数
            "flattenLibs": true,   // 二进制格式har默认打包so和cjo，并放在libs/arm64-v8a/cjbins/package或libs/x86_64/cjbins/package包目录下
            "collectSDKLibs": false,   // 默认不打包使用到的仓颉SDK里的runtime库、系统库、标准库到应用里
            "checkDeviceTypes": true   // 默认检验配置的设备类型
          }
        }
      ],
      "targets": [  // 定义的target，开发者可以定制不同的target，具体请参考配置多目标构建产物章节
        {
          "name": "default"
        }
      ]
    }
