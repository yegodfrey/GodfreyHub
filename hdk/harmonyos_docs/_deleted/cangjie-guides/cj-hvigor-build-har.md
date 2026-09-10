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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a5/v3/XHaDgvO_RcKWcaP-DeABhA/zh-cn_image_0000002731378903.png?HW-CC-KV=V1&HW-CC-Date=20260903T111622Z&HW-CC-Expire=86400&HW-CC-Sign=F1BB9638E2FC9ACBFA90F18F8CC47105CE4B0EFA83B7D88A5EC2EB25C2F71AC7)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/81/v3/TQzmaftyR9utkfJtkYJEdw/zh-cn_image_0000002701819668.png?HW-CC-KV=V1&HW-CC-Date=20260903T111622Z&HW-CC-Expire=86400&HW-CC-Sign=0A1B52284DE30E51A19A5B24EB98AD3435E81B9573820C79654157E32D9E7F57)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c7/v3/yzpFACUBTNuWYWeeW1M5Bg/zh-cn_image_0000002731538949.png?HW-CC-KV=V1&HW-CC-Date=20260903T111622Z&HW-CC-Expire=86400&HW-CC-Sign=D3EE57BB4E42702173566A1042122B525A3D44B7C0F5682BAF2E9FCC062F8F59)

  3. 构建完成后，build目录下生成HAR包产物。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/9cISA0EDSbOpdiPg5d_LhA/zh-cn_image_0000002701659760.png?HW-CC-KV=V1&HW-CC-Date=20260903T111622Z&HW-CC-Expire=86400&HW-CC-Sign=763D174ECA6121A893D6D7B27F001EF7766A206A7E6E5510D15248BF3EEAFE1B)




#### 构建二进制格式的HAR

编译的默认产物是包含二进制的HAR包，其中包含仓颉cjo文件、so文件、资源文件、配置文件、readme、changelog声明文件、license证书文件，提升发布到ohpm中心仓产物的安全性。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/72/v3/MnO7eALaTH6eSlz7HShB-g/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111622Z&HW-CC-Expire=86400&HW-CC-Sign=D70D529C77A04EE678E25A9379E18AB38942CEC70096A7BA7034DEB6B3BC9469)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/14/v3/zy8tivICRAWHfGCVm84KKg/zh-cn_image_0000002731538949.png?HW-CC-KV=V1&HW-CC-Date=20260903T111622Z&HW-CC-Expire=86400&HW-CC-Sign=4A39E48BF41A0845C6A4FD6580444D6A09CDCF8124F73D9BB1BF1EF13292E7C0)

  4. 构建完成后，build目录下生成HAR包产物。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/86/v3/v11Dhc2MQ1WX3lRPAZqWFQ/zh-cn_image_0000002701659760.png?HW-CC-KV=V1&HW-CC-Date=20260903T111622Z&HW-CC-Expire=86400&HW-CC-Sign=BFC55179969A5F21651A8DE1CD6B876EBA5C517D2174AED61F0322BBD7336B77)

  5. HAR包产物解压后，结构如下：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/10/v3/Lz7Gw_yJSEKHKCNE4ubbMg/zh-cn_image_0000002731378975.png?HW-CC-KV=V1&HW-CC-Date=20260903T111622Z&HW-CC-Expire=86400&HW-CC-Sign=5EB609BD0D456F63CA82DD408B6685FD250C8E7B79C0857A457E5BFF27851B7C)



