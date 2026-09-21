---
name: cangjie-guides/cj-project-directory-structure
title: 工程目录结构
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-project-directory-structure
nodePath: 开发环境搭建 / 工程创建 / 工程目录结构
---

# 工程目录结构

#### 纯仓颉工程目录结构

支持创建纯仓颉工程，纯仓颉工程支持API Version 12及以上版本，其工程目录结构如下图所示：
    
    
    Project_name
    ├── .hvigor
    ├── .idea
    ├── AppScope
    ├── entry
    │    ├── libs
    │    ├── src
    │    │    ├── main
    │    │    │    ├── cangjie
    │    │    │    │    ├── ability_stage.cj
    │    │    │    │    ├── index.cj
    │    │    │    │    └── main_ability.cj
    │    │    │    ├── resources
    │    │    │    └── module.json5
    │    │    └── ohosTest
    │    ├── build-profile.json5
    │    ├── cjpm.toml
    │    ├── hvigorfile.ts
    │    └── oh-package.json5
    ├── hvigor
    │    └── hvigor-config.json5
    ├── oh_modules
    ├── build-profile.json5
    ├── code-linter.json5
    ├── hvigorfile.ts
    ├── local.properties
    ├── oh-package.json5
    └── oh-package-lock.json5

其中关键文件信息如下：

  * **AppScope > app.json5**：应用的全局配置信息。

  * **entry** ：应用模块，编译构建生成一个HAP。

    * **src > main > cangjie**：用于存放仓颉源码。

    * **src > main > resources**：用于存放应用所用到的资源文件，如图形、多媒体、字符串、布局文件等。关于资源文件的详细说明请参见[资源分类与访问](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-ide-resource-categories-and-access)。

**资源目录** | **资源文件说明**  
---|---  
base > element | 包括字符串、整型数、颜色、样式等资源的json文件。每个资源均由json格式进行定义，例如： \- boolean.json：布尔型。 \- color.json：颜色。 \- float.json：浮点型。 \- intarray.json：整型数组。 \- integer.json：整型。 \- pattern.json：样式。 \- plural.json：复数形式。 \- strarray.json：字符串数组。 \- string.json：字符串值。  
base > media | 多媒体文件，如图形、视频、音频等文件，支持的文件格式包括：.png、.gif、.mp3、.mp4等。  
rawfile | 用于存储任意格式的原始资源文件。rawfile不会根据设备的状态去匹配不同的资源，需要指定文件路径和文件名进行引用。  
  
    * **src > main > module.json5**：Stage 模块配置文件，主要包含 HAP 的配置信息、应用在具体设备上的配置信息以及应用的全局配置信息。

    * **build-profile.json5** ：当前的模块信息、编译信息配置项，包括 buildOption、targets 配置等。

    * **hvigorfile.ts** ：模块级编译构建任务脚本。

    * **cjpm.toml** ：仓颉的包管理配置文件。

    * **oh-package.json5** ：描述三方包的包名、版本、入口文件（类型声明文件）和依赖项等信息。

    * **src > ohosTest**：存放仓颉测试源码，用于仓颉仪器测试。

  * **hvigor** ：用于存放当前工程使用的 hvigor。

    * **hvigor-config.json5** ：指定工程全局使用的 hvigor 以及 hvigor 参数配置。
  * **oh_modules** ：用于存放三方库依赖信息，包含应用所依赖的第三方库文件。

  * **build-profile.json5** ：应用级配置信息，包括签名、产品配置等。

  * **hvigorfile.ts** ：应用级编译构建任务脚本。

  * **oh-package.json5** ：描述全局配置，如：依赖覆盖（overrides）、依赖关系重写（overrideDependencyMap）和参数化配置（parameterFile）等。




#### Cangjie + ArkTS互操作工程目录结构

支持创建Cangjie + ArkTS互操作工程，互操作支持API Version 12及以上版本，其工程目录结构如下图所示：
    
    
    Project_name
    ├── .hvigor
    ├── .idea
    ├── AppScope
    │    └── app.json5
    ├── entry
    │    ├── libs
    │    ├── oh_modules
    │    ├── src
    │    │    ├── main
    │    │    │    ├── cangjie
    │    │    │    │    ├── types
    │    │    │    │    └── index.cj
    │    │    │    ├── ets
    │    │    │    │    ├── entryability
    │    │    │    │    ├── entrybackupability
    │    │    │    │    └── pages
    │    │    │    ├── resources
    │    │    │    └── module.json5
    │    │    ├── mock
    │    │    ├── ohosTest
    │    │    └── test
    │    ├── build-profile.json5
    │    ├── cjpm.toml
    │    ├── hvigorfile.ts
    │    ├── obfuscation-rules.txt
    │    ├── oh-package.json5
    │    └── oh-package-lock.json5
    ├── hvigor
    │    └── hvigor-config.json5
    ├── oh_modules
    ├── build-profile.json5
    ├── code-linter.json5
    ├── hvigorfile.ts
    ├── local.properties
    ├── oh-package.json5
    └── oh-package-lock.json5

  * **AppScope > app.json5**：应用的全局配置信息。

  * **entry** ：应用模块，编译构建生成一个HAP。

    * **src > main > cangjie > loader**：提供加载仓颉so的方法声明，帮助ArkTS调用仓颉中注册的方法。

    * **src > main > cangjie**：用于存放仓颉源码。

    * **src > main > ets**：用于存放ArkTS源码。

    * **src > main > resources**：用于存放应用所用到的资源文件，如图形、多媒体、字符串、布局文件等。关于资源文件的详细说明请参见[资源分类与访问](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-ide-resource-categories-and-access)。

**资源目录** | **资源文件说明**  
---|---  
base > element | 包括字符串、整型数、颜色、样式等资源的json文件。每个资源均由json格式进行定义，例如： \- boolean.json：布尔型。 \- color.json：颜色。 \- float.json：浮点型。 \- intarray.json：整型数组。 \- integer.json：整型。 \- pattern.json：样式。 \- plural.json：复数形式。 \- strarray.json：字符串数组。 \- string.json：字符串值。  
base > media | 多媒体文件，如图形、视频、音频等文件，支持的文件格式包括：.png、.gif、.mp3、.mp4等。  
rawfile | 用于存储任意格式的原始资源文件。rawfile不会根据设备的状态去匹配不同的资源，需要指定文件路径和文件名进行引用。  
  
    * **src > main > module.json5**：Stage 模块配置文件，主要包含 HAP 的配置信息、应用在具体设备上的配置信息以及应用的全局配置信息。

    * **build-profile.json5** ：当前的模块信息、编译信息配置项，包括 buildOption、targets 配置等。

    * **hvigorfile.ts** ：模块级编译构建任务脚本。

    * **cjpm.toml** ：仓颉的包管理配置文件。

    * **oh-package.json5** ：描述三方包的包名、版本、入口文件（类型声明文件）和依赖项等信息。

  * **hvigor** ：用于存放当前工程使用的 hvigor。

    * **hvigor-config.json5** ：指定工程全局使用的 hvigor 以及 hvigor 参数配置。
  * **oh_modules** ：用于存放三方库依赖信息，包含应用所依赖的第三方库文件。

  * **build-profile.json5** ：应用级配置信息，包括签名、产品配置等。

  * **hvigorfile.ts** ：应用级编译构建任务脚本。

  * **oh-package.json5** ：描述全局配置，如：依赖覆盖（overrides）、依赖关系重写（overrideDependencyMap）和参数化配置（parameterFile）等。



