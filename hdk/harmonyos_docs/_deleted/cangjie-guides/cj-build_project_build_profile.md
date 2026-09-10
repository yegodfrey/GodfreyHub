---
name: cangjie-guides/cj-build_project_build_profile
title: 工程级build-profile.json5文件
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-build_project_build_profile
nodePath: 构建应用 / 配置文件 / 工程级build-profile.json5文件
---

# 工程级build-profile.json5文件

仓颉工程级build-profile.json5配置参照[工程级build-profile.json5](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile-app)，本节介绍仓颉增加的相关配置。

#### buildOption

仓颉工程级buildOption如下表所示：

**配置项** | **类型** | **是否必填** | **说明**  
---|---|---|---  
cangjieOptions | object | 否 | 仓颉相关配置  
path | string | 否 | cjpm配置文件路径，提供仓颉构建配置  
abiFilters | array | 否 | 本机的ABI编译环境，包括： arm64-v8a x86_64 如不配置该参数，编译时默认为arm64-v8a，windows模拟器需要增加x86_64  
strictCheckDependencies | boolean | 否 | 是否对依赖下载做严格校验。 true（默认值）：严格校验依赖，如果有依赖未下载时，编译报错。 false：不做依赖检验，有依赖未下载时，编译不报错。  
arguments | string/array | 否 | cjpm build编译参数。 **说明：** 默认编译命令中已经传递--target、--target-dir、--debug（debug模式条件编译选项）、--release（release模式条件编译选项）编译选项，当出现arguments自定义的编译选项与默认编译选项冲突时，arguments自定义的编译选项优先级高于默认传递的编译选项。  
collectSDKLibs | boolean | 否 | 是否打包使用到的runtime库、系统库、标准库到应用里。 false（默认值）：不打包使用到的仓颉SDK里的runtime库、系统库、标准库到应用里。 true：打包使用到的仓颉SDK里的runtime库、系统库、标准库到应用里。  
checkDeviceTypes | boolean | 否 | 是否检验**module.json5** 中**deviceTypes** 配置的设备类型。 true（默认值）：校验配置的设备类型。 false：不校验配置的设备类型。  
  
#### 配置文件结构

仓颉工程级build-profile.json5的示例如下所示：
    
    
    {
      "app": {
        // 工程的签名信息，可包含多个签名信息
        "signingConfigs": [
          {
            "name": "default",  // 标识签名方案的名称，用户可自定义
            "type": "HarmonyOS",  // 标识 HarmonyOS 应用
            // 该方案的签名材料
            "material": {
              "certpath": "D:\\SigningConfig\\debug_hos.cer",  // 调试或发布证书文件，格式为.cer
              "storePassword": "******",  // 密钥库密码，以密文形式呈现
              "keyAlias": "debugKey",  // 密钥别名信息
              "keyPassword": "******",  // 密钥密码，以密文形式呈现
              "profile": "D:\\SigningConfig\\debug_hos.p7b",  // 调试或发布证书 Profile文件，格式为.p7b
              "signAlg": "SHA256withECDSA",  // 密钥库signAlg参数
              "storeFile": "D:\\SigningConfig\\debug_hos.p12"  // 密钥库文件，格式为.p12
            }
          }
        ],
        // 定义构建的产品品类，如通用默认版、付费版、免费版等
        "products": [
          {
            "name": "default",  // 定义产品的名称，支持定制多product目标产物
            "signingConfig": "default",  // 指定当前产品品类对应的签名信息，签名信息需要在signingConfigs中进行定义
            "targetSdkVersion": "6.0.2(22)",  // 指定应用运行所需目标SDK版本
            "compatibleSdkVersion": "6.0.2(22)",  // 指定应用兼容的最低版本
            "runtimeOS": "HarmonyOS"  // 指定为HarmonyOS
          }
        ],
        // 构建模式的集合,每个构建模式是指在执行不同target任务时使用何种构建配置的一套方案，默认打包hap时使用debug，打包app时使用release
        "buildModeSet": [
          {
            "name": "debug",   // 定义构建模式的类型名称，系统默认给出test、debug和release，用户也可以自定义
            "buildOption": {   // 配置项目在构建过程中使用的相关配置
              "cangjieOptions": {   // 仓颉相关配置
                "path": "./cjpm.toml",   // cjpm配置文件路径，提供仓颉构建配置
                "abiFilters": ["arm64-v8a", "x86_64"],   // 自定义仓颉编译架构，默认编译架构为arm64-v8a，开发者请根据实际情况配置
                "strictCheckDependencies": true,   // 严格校验依赖，如果有依赖未下载时，编译报错
                "arguments": [],   // 传递给cjpm build的可选编译参数
                "collectSDKLibs": false,   // 默认不打包使用到的仓颉SDK里的runtime库、系统库、标准库到应用里
                "checkDeviceTypes": true   // 默认检验配置的设备类型
              }
            }
          }
        ]
      },
      "modules": [
        {
          "name": "entry",  // 模块名称，须与模块中module.json5文件中的module.name保持一致
          "srcPath": "./entry",  // 标明模块根目录相对工程根目录的相对路径
          "targets": [  // 定义构建的APP产物，由product和各模块定义的targets共同定义
            {
              "name": "default",  // target名称，由各个模块的build-profile.json5中的targets字段定义
              "applyToProducts": [
                "default"   // 表示将该模块下的"default" Target打包到"default" Product中
              ]
            }
          ]
        }
      ]
    }
