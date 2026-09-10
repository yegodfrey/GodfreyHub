---
name: cangjie-guides/cj-hvigor-managing-modules
title: 多模块管理
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-hvigor-managing-modules
nodePath: 构建应用 / 配置构建流程 / 多模块管理
---

# 多模块管理

模块是应用的基本功能单元，包含了源代码、资源文件、第三方库及应用配置文件，Hvigor支持工程多模块管理。开发者可在工程下的build-profile.json5配置文件中增加对应模块信息，即可对模块进行工程绑定和管理。同时也支持分模块配置、编译和打包。

#### 多模块配置

build-profile.json5配置文件中"modules"字段，用于记录工程下的模块信息，主要包含模块名称、模块的源码路径以及模块的 target 信息。target信息主要用于定制多目标构建产物，更多详细信息可参见[配置多目标产物](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-hvigor-multi-targets-products)章节。

例如以下目录中存在两个模块目录，开发者可在工程下的build-profile.json5配置文件，添加模块信息，使得模块与工程进行绑定：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/10/v3/7L-tluyHR3qZmx0QN9W-Rw/zh-cn_image_0000002743077993.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=2A8F5991FBD1C67A694BB3EFF4070E89FE03596F849BA29128FF8D556C2CDB03)

其他配置文件：

  * oh-package.json5：应用的三方包依赖配置文件
  * local.properties: 应用本地环境配置文件



工程下的build-profile.json5文件中模块配置示例：
    
    
    {
      "modules": [
        {
          "name": "module1", // 模块的名称，该名称需与module.json5文件中的module.name保持一致
          "srcPath": "./module1" // 模块的源码路径，为模块根目录相对工程根目录的相对路径
        },
        {
          "name": "module2",
          "srcPath": "./module2"
        }
      ]
    }

#### 分模块编译

hvigor支持分模块编译和打包。开发者可以通过以下两种方式进行分模块构建：

  * 在DevEco Studio中，选中需构建的模块目录后，点击Build菜单栏下的Make module 'module1'，其中'module1'根据具体工程模块名称显示；

  * 在DevEco Studio的Terminal中，指定模块进行编译。比如模块类型为entry，目标产物target为default，构建HAP模块，可执行以下命令：
        
        hvigorw --mode module -p product=default -p module=module1@default assembleHap




更多构建命令，可参见[命令行工具](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-commandline)章节。
