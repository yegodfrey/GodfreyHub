---
name: cangjie-guides/cj-hvigor-build-har
title: 构建HAR
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-hvigor-build-har
nodePath: 构建应用 / 配置构建流程 / 构建HAR
---

# 构建HAR

支持构建仓颉HAR，HAR介绍可以参照[模块管理](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-management)。

#### 创建模块

  1. 新建工程时选择API 12及以上，工程创建完成后，新建[Cangjie] Static Library模块。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1/v3/pAWMlR_iTwyn-g_XUZE4fQ/zh-cn_image_0000002713558966.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=28CD0896B4ED69D0C02377CFF3E746D32A11ADBD9DC7FFB74094C17AA08205A3)

  2. 编写代码。



    
    
      library  // HAR根目录
      ├─libs  // 存放用户自定义引用的依赖库，一般为.so文件
      └─src
      │   └─main
      │     ├─cangjie  // 仓颉源码文件夹
      │     │  └─index.cj  // 仓颉源码文件
      │     ├─resources  // 资源目录，用于存放资源文件，如图片、多媒体、字符串等
      │     └─module.json5  // 模块配置文件，包含当前HAR的配置信息
      ├─build-profile.json5  // Hvigor编译构建所需的配置文件，包含编译选项
      ├─cjpm.toml  // 仓颉配置文件
      ├─hvigorfile.ts  // Hvigor构建脚本文件，包含构建当前模块的插件、自定义任务等
      └─oh-package.json5  // HAR的描述文件，定义HAR的基本信息、依赖项等

#### 构建源码格式的HAR

仓颉HAR除了默认不需要打包的文件（build、node_modules、oh_modules、.cxx、.previewer、.hvigor、.gitignore、.ohpmignore）和.gitignore / .ohpmignore中配置的文件，其余文件都会被打进HAR包中。

若部分工程源文件无需构建到HAR包中，可在module目录下新建.ohpmignore文件，配置打包时要忽略的文件，支持正则表达式写法。将无需打包进HAR包的文件/文件夹名称写入.ohpmignore文件中。DevEco Studio构建时将过滤掉.ohpmignore文件中所包含的文件/文件夹。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e4/v3/0F0-t37ER6yGNM_YSk5HcQ/zh-cn_image_0000002743197947.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=1B2C25F80F64A862BE1C269819CDC0842ACF6ADBA045566B578043377EC83CEB)

构建步骤如下：

  1. 在HAR模块的build-profile.json5中，将byteCodeHar设置为false。
         
         {
           "buildOption": {
             "arkOptions": {
               "byteCodeHar": false
             }
           }
         }

  2. 选中HAR模块的根目录，点击Build > Make Module '<module-name>'启动构建。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/96/v3/1rJ4ThW2Q6Wft5iwR8Wzgw/zh-cn_image_0000002713399066.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=B0EAF2CC99F224AAAFC423F89D161AECBA193329D76BCC7F55762F4375A023B9)

  3. 构建完成后，build目录下生成HAR包产物。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/80/v3/Ke5oBGuUTnyRAIVn7qP2IA/zh-cn_image_0000002743077997.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=DE90D7C8E3083A3E4EA9F30BAD6EBBFB3C2A1819BF71F68E3C9500416A6206D6)




#### 构建二进制格式的HAR

编译的默认产物是包含二进制的HAR包，其中包含仓颉cjo文件、so文件、资源文件、配置文件、readme、changelog声明文件、license证书文件，提升发布到ohpm中心仓产物的安全性。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/81/v3/OD_9h232R8CwwKFx07WOgQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=6F5A0DAC6E5245F2F8A0BCD3D935C79B9CA1473ADB8CDC212FB4022CE13BA2B8)

  * 当二进制HAR被集成使用时，那么该工程的build-profile.json5中的useNormalizedOHMUrl必须设置为true。
  * 当二进制HAR被集成使用时，要求该工程使用和编译二进制HAR相同版本的SDK编译。
  * 当模块中有自定义宏并且需要给其他模块使用时，不支持编译成二进制HAR，需要编译成源码HAR给其他模块集成使用。
  * 二进制HAR默认打包仓颉so和cjo产物，并且放在HAR包中libs/arm64-v8a/cjbins/package或libs/x86_64/cjbins/package包目录下；如果需要仓颉so产物平铺在libs/arm64-v8a或libs/x86_64目录下，例如在纯ArkTS HAP依赖二进制格式的仓颉HAR场景下，可以在仓颉HAR模块中设置[flattenLibs配置项](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-build_module_build_profile#buildoption)值为true。



构建步骤如下：

  1. 将工程级build-profile.json5的useNormalizedOHMUrl设置为true。
         
         {
           "app": {
             "products": [
               {
                  "buildOption": {
                    "strictMode": {
                      "useNormalizedOHMUrl": true
                    }
                  }
               }
             ]
           }
         }

  2. 在HAR模块的build-profile.json5中，将byteCodeHar设置为true。
         
         {
           "buildOption": {
             "arkOptions": {
               "byteCodeHar": true
             }
           }
         }

  3. 选中HAR模块的根目录，点击Build > Make Module '<module-name>'启动构建。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/13/v3/SPYSE1kGTeiJaf_VgvKqpA/zh-cn_image_0000002713399066.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=8A2FB55CE27C6476482D1E4CB40797317E7EEE2DB29DF2EBB16354A325D37B19)

  4. 构建完成后，build目录下生成HAR包产物。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7e/v3/41Hx-Z8gS_-MnXJ6FYYaIA/zh-cn_image_0000002743077997.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=D9471981677034A87031D09D0126E610A835CC0569975671614C3E4CCA81666B)

  5. HAR包产物解压后，结构如下：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/13/v3/jXOhVVZpQdK6oD4VCosZ3A/zh-cn_image_0000002713559036.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=535715115E75A29A6F934422CA80E88CBDCA4DC97D9F0ABAB8BE8295CBD5330C)



