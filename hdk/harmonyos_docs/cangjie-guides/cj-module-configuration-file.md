---
name: cangjie-guides/cj-module-configuration-file
title: module.json5配置文件
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-configuration-file
nodePath: 基础入门 / 开发基础知识 / 应用配置文件（Stage模型） / module.json5配置文件
---

# module.json5配置文件

#### 配置文件示例

通过一个示例，整体了解module.json5配置文件。
    
    
    {
      "module": {
        "name": "entry",
        "type": "entry",
        "description": "$string:module_desc",
        "srcEntry": "ohos_app_cangjie_entry.MyAbilityStage",
        "mainElement": "EntryAbility",
        "deviceTypes": [
          "default",
          "tablet"
        ],
        "deliveryWithInstall": true,
        "installationFree": false,
        "pages": "$profile:main_pages",
        "virtualMachine": "ark",
        "appStartup": "$profile:app_startup_config",
        "metadata": [
          {
            "name": "string",
            "value": "string",
            "resource": "$profile:distributionFilter_config"
          }
        ],
        "abilities": [
          {
            "name": "EntryAbility",
            "srcEntry": "ohos_app_cangjie_entry.MainAbility",
            "description": "$string:EntryAbility_desc",
            "icon": "$media:layered_image",
            "label": "$string:EntryAbility_label",
            "startWindow": "$profile:start_window",
            "startWindowIcon": "$media:icon",
            "startWindowBackground": "$color:start_window_background",
            "exported": true,
            "skills": [
              {
                "entities": [
                  "entity.system.home"
                ],
                "actions": [
                  "ohos.want.action.home"
                ]
              }
            ],
            "continueType": [
              "continueType1"
            ],
            "continueBundleName": [
              "com.example.myapplication1",
              "com.example.myapplication2"
            ]
          }
        ],
        "requestPermissions": [
          {
            "name": "ohos.abilitydemo.permission.PROVIDER",
            "reason": "$string:reason",
            "usedScene": {
              "abilities": [
                "FormAbility"
              ],
              "when": "inuse"
            }
          }
        ],
        "targetModuleName": "feature",
        "targetPriority": 50,
        "querySchemes": [
          "app1Scheme",
          "app2Scheme"
        ],
        "appEnvironments": [
          {
            "name": "name1",
            "value": "value1"
          }
        ],
        "hnpPackages": [
          {
            "package": "hnpsample.hnp",
            "type": "public"
          }
        ],
        "fileContextMenu": "$profile:menu"
      }
    }

#### 配置文件标签

module.json5配置文件包含以下标签。

**表1** module.json5配置文件标签说明

属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---  
name |  标识当前Module的名称，确保该名称在整个应用中唯一。命名规则如下 ： \- 由字母、数字和下划线组成，且必须以字母开头。 \- 最大长度31字节。 | 字符串 | 该标签不可缺省。  
type |  标识当前Module的类型。支持的取值如下： \- entry：应用的主模块。 \- feature：应用的动态特性模块。 \- har：静态共享包模块。 \- shared：动态共享包模块。 | 字符串 | 该标签不可缺省。  
srcEntry | 标识当前Module所对应入口UIAbility或者ExtensionAbility的类路径，需要和mainElement字段指向同一个UIAbility或者ExtensionAbility，取值为长度不超过127字节的字符串。 | 字符串 | 该标签可缺省，缺省值为空。  
description | 标识当前Module的描述信息，开发者可以通过该字段描述当前模块的功能与作用，取值为长度不超过255字节的字符串，可以采用字符串资源索引格式。 | 字符串 | 该标签可缺省，缺省值为空。  
mainElement | 标识当前Module的入口UIAbility名称或者ExtensionAbility名称，需要和srcEntry字段指向同一个UIAbility或者ExtensionAbility，取值为长度不超过255字节的字符串。 | 字符串 | 该标签可缺省，缺省值为空。  
deviceTypes |  标识当前Module可以运行在哪类设备上。 **说明：** 当存在多个模块时，各模块的配置可以不同，但都必须包含将要安装的设备类型，以确保正常运行。 | 字符串数组 | 该标签不可缺省。  
deliveryWithInstall |  标识当前Module是否在用户主动安装的时候安装，即该Module对应的HAP是否跟随应用一起安装。 \- true：跟随应用一起安装。 \- false：不跟随应用一起安装。 | 布尔值 | 该标签不可缺省。  
installationFree |  标识当前Module是否支持免安装特性。 \- true：表示支持免安装特性，且符合免安装约束。 \- false：表示不支持免安装特性。 **说明：** 当[bundleType](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-app-configuration-file#配置文件标签)为原子化服务时，该字段需要配置为true。反之，该字段需要配置为false。 | 布尔值 | 该标签不可缺省。  
pages | 标识当前Module的profile资源，用于列举每个页面信息，取值为长度不超过255字节的字符串。 | 字符串 | 在有UIAbility的场景下，该标签不可缺省。  
metadata | 标识当前Module的自定义元信息，可通过资源引用的方式配置distributionFilter、shortcuts等信息。只对当前Module、UIAbility、ExtensionAbility生效。 | 对象数组 | 该标签可缺省，缺省值为空。  
abilities | 标识当前Module中UIAbility的配置信息，只对当前UIAbility生效。 | 对象数组 | 该标签可缺省，缺省值为空。  
extensionAbilities | 标识当前Module中ExtensionAbility的配置信息，只对当前ExtensionAbility生效。 | 对象数组 | 该标签可缺省，缺省值为空。  
[requestPermissions](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-declare-permissions#在配置文件中声明权限) | 标识当前应用运行时需向系统申请的权限集合。 | 对象数组 | 该标签可缺省，缺省值为空。  
testRunner | 标识用于测试当前Module的测试框架的配置。 | 对象 | 该标签可缺省，缺省值为空。  
dependencies | 标识当前模块运行时依赖的共享库列表。 | 对象数组 | 该标签可缺省，缺省值为空。  
proxyData | 标识当前Module提供的数据代理列表。 | 对象数组 | 该标签可缺省，缺省值为空。  
isolationMode |  标识当前Module的多进程配置项。支持的取值如下： \- nonisolationFirst：优先在非独立进程中运行。 \- isolationFirst：优先在独立进程中运行。 \- isolationOnly：只在独立进程中运行。 \- nonisolationOnly：只在非独立进程中运行。 **说明：** 1.仅2in1和tablet设备支持将当前Module设置为独立进程。 2.该字段仅对HAP生效。 | 字符串 | 该标签可缺省，缺省值为nonisolationFirst。  
generateBuildHash |  标识当前HAP是否由打包工具生成哈希值。当配置为true时，如果系统OTA升级时应用versionCode保持不变，可根据哈希值判断应用是否需要升级。 该字段仅在[app.json5文件](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-app-configuration-file)中的generateBuildHash字段为false时使能。 **说明：** 该字段仅对预置应用生效。 | 布尔值 | 该标签可缺省，缺省值为false。  
compressNativeLibs |  在打包hap时，该字段标识libs库是否以压缩存储的方式打包到HAP。 \- true：libs库以压缩方式存储。 \- false：libs库以不压缩方式存储。 | 布尔值 | 该标签可缺省，在打包hap时缺省值为false。  
libIsolation |  在libs目录下是否生成模块名称目录存储so，用于区分同一应用中不同HAP的.so文件，以防止.so文件冲突。 \- true：当前HAP的.so文件会储存在libs目录中以Module名命名的路径下。 \- false：当前HAP的.so文件会直接储存在libs目录中。 | 布尔值 | 该标签可缺省，缺省值为false。  
fileContextMenu |  标识当前HAP的右键菜单配置项。取值为长度不超过255字节的字符串。 **说明：** 仅在PC/2in1设备上生效。 | 字符串 | 该标签可缺省，缺省值为空。  
querySchemes | 标识允许当前应用进行跳转查询的URL schemes，只允许entry类型模块配置，最多50个，每个字符串取值不超过128字节。 | 字符串数组 | 该标签可缺省，缺省值为空。  
appEnvironments | 标识当前模块配置的应用环境变量，只允许entry和feature模块配置。 | 对象数组 | 该标签可缺省，缺省值为空。  
appStartup | 标识当前Module启动框架配置路径，在Entry类型的HAP、HAR中生效。 | 字符串 | 该标签可缺省，缺省值为空。  
hnpPackages | 标识当前应用包含的Native软件包信息。只允许entry类型模块配置。 | 对象数组 | 该标签可缺省，缺省值为空。  
abilitySrcEntryDelegator |  标识当前Module需要重定向到的UIAbility的名称，与abilityStageSrcEntryDelegator字段组合使用，共同指定重定向的目标对象。 **说明：** 1.从API version 17开始，支持该字段。 2.不支持在HAR的配置文件中配置该字段，也不支持重定向到HAR的UIAbility。 | 字符串 | 该标签可缺省，缺省值为空。  
abilityStageSrcEntryDelegator |  标识当前Module需要重定向到的UIAbility对应的Module名称（不可为当前Module名称），与abilitySrcEntryDelegator字段组合使用，共同指定重定向的目标对象。 **说明：** 1.从API version 17开始，支持该字段。 2.不支持在HAR的配置文件中配置该字段，也不支持重定向到HAR的UIAbility。 | 字符串 | 该标签可缺省，缺省值为空。  
  
#### deviceTypes标签

**表2** deviceTypes标签说明

设备类型 | 枚举值 | 说明  
---|---|---  
手机 | phone | -  
平板 | tablet | -  
默认设备 | default | 配置为default类型的应用，虽然可以正常编译构建，但是不支持发布上架。建议使用phone替代。  
  
deviceTypes示例：
    
    
    {
      "module": {
        "name": "myHapName",
        "type": "feature",
        "deviceTypes" : [
           "tablet"
        ]
      }
    }

#### pages标签

该标签是一个profile文件资源，用于指定描述页面信息的配置文件。
    
    
    {
      "module": {
        // ...
        "pages": "$profile:main_pages", // 通过profile下的资源文件配置
      }
    }

在开发视图的resources/base/profile下面定义配置文件main_pages.json，其中文件名"main_pages"可自定义，需要和pages标签指定的信息对应。配置文件中列举了当前应用组件中的页面信息，包含页面的路由信息和显示窗口相关的配置。

**表3** pages标签说明

属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---  
src | 标识当前Module中所有页面的路由信息，包括页面路径和页面名称。其中，页面路径是以当前Module的src/main/cangjie为基准。该标签取值为一个字符串数组，其中每个元素表示一个页面。 | 字符串数组 | 该标签不可缺省。  
window | 标识用于定义与显示窗口相关的配置。 | 对象 | 该标签可缺省，缺省值为空。  
  
**表4** window标签说明

属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---  
designWidth | 标识页面设计基准宽度。以此为基准，根据实际设备宽度来缩放元素大小。 | 数值 | 可缺省，缺省值为720.px。  
autoDesignWidth | 标识页面设计基准宽度是否自动计算。当配置为true时，designWidth将会被忽略，设计基准宽度由设备宽度与屏幕密度计算得出。当配置为false时，设计基准宽度为designWidth。 | 布尔值 | 可缺省，缺省值为false。  
      
    
    {
      "src": [
        "pages/index/mainPage",
        "pages/second/payment",
        "pages/third/shopping_cart",
        "pages/four/owner"
      ],
      "window": {
        "designWidth": 720,
        "autoDesignWidth": false
      }
    }

#### metadata标签

该标签标识HAP的自定义元信息，标签值为数组类型，包含name、value、resource三个子标签。

**表5** metadata标签说明

属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---  
name | 标识数据项的名称，取值为长度不超过255字节的字符串。 | 字符串 | 该标签可缺省，缺省值为空。  
value | 标识数据项的值，取值为长度不超过255字节的字符串。 | 字符串 | 该标签可缺省，缺省值为空。  
resource | 标识了用户自定义数据，取值为长度不超过255字节的字符串，内容为该数据的资源索引，例如配置成$profile:shortcuts_config，表示指向了/resources/base/profile/shortcuts_config.json配置文件。 | 字符串 | 该标签可缺省，缺省值为空。  
  
下面给出两种metadata标签的使用场景及示例，开发者也可以根据实际需求自定义设置。

  1. 使用metadata标签配置主窗口的默认大小和位置（单位为vp）。其中name取值及对应含义如下：

     * name取值为ohos.ability.window.height表示主窗口的默认高度，value表示高度大小。
     * name取值为ohos.ability.window.width表示主窗口的默认宽度，value表示宽度大小。
     * name取值为ohos.ability.window.left表示主窗口默认左边的位置。value表示配置格式，取值：对齐方式 +/- 偏移量。对齐方式包括center、left和right，默认值为left；当偏移量为0时可以省略。
     * name取值为ohos.ability.window.top表示主窗口顶部的位置。value表示配置格式，取值：对齐方式 +/- 偏移量。对齐方式包括center、top和bottom，默认值为top。如果对齐方式和偏移量同时省略，则按照系统默认的层叠规格处理。
  2. 使用metadata标签配置是否移除启动页。配置项为：name取值为enable.remove.starting.window，value取值为true或false，取值为true表示移除启动页、取值为false表示不移除启动页，未配置时默认为false。



    
    
    {
      "module": {
        "metadata": [{
          "name": "module_metadata",
          "value": "a test demo for module metadata",
          "resource": "$profile:shortcuts_config"
        }],
    
        "abilities": [{
          "metadata": [{
            "name": "ability_metadata",
            "value": "a test demo for ability",
            "resource": "$profile:config_file"
          },
          {
            "name": "ability_metadata_2",
            "value": "a string test",
            "resource": "$profile:config_file"
          },
          {
            "name": "ohos.ability.window.height",
            "value": "987"
          },
          {
            "name": "ohos.ability.window.width",
            "value": "1300"
          },
          {
            "name": "ohos.ability.window.left",
            "value": "right-50"
          },
          {
            "name": "ohos.ability.window.top",
            "value": "center+50"
          },
          {
            "name": "enable.remove.starting.window",
            "value": "true"
          }],
        }],
    
        "extensionAbilities": [{
          "metadata": [{
            "name": "extensionAbility_metadata",
            "value": "a test for extensionAbility",
            "resource": "$profile:config_file"
          },
          {
            "name": "extensionAbility_metadata_2",
            "value": "a string test",
            "resource": "$profile:config_file"
          }],
        }]
      }
    }

#### abilities标签

abilities标签描述UIAbility组件的配置信息，标签值为数组类型，该标签下的配置只对当前UIAbility生效。

**表6** abilities标签说明

属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---  
srcEntry | 标识入口UIAbility的类路径，取值为长度不超过127字节的字符串。 | 字符串 | 该标签不可缺省。  
[launchType](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-uiability-launch-type) |  标识当前UIAbility组件的启动模式，支持的取值如下： \- multiton：多实例模式，每次启动创建一个新实例。 \- singleton：单实例模式，仅第一次启动创建新实例。 \- specified：指定实例模式，运行时由开发者决定是否创建新实例。 \- standard：multiton的曾用名，效果与多实例模式一致。 | 字符串 | 该标签可缺省，该标签缺省为“singleton”。  
description | 标识当前UIAbility组件的描述信息，开发者可以通过该字段描述当前组件的功能与作用，取值为长度不超过255字节的字符串。要求采用描述信息的资源索引，以支持多语言。 | 字符串 | 该标签可缺省，缺省值为空。  
icon | 标识当前UIAbility组件的[图标](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-application-component-configuration-stage#生成机制)，取值为图标资源文件的索引。 | 字符串 | 该标签可缺省，缺省值为空。  
label | 标识当前UIAbility组件对用户显示的[名称](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-application-component-configuration-stage#生成机制)，要求采用该名称的资源索引，以支持多语言。取值为长度不超过255字节的字符串。 | 字符串 | 该标签可缺省，缺省值为空。  
permissions |  标识当前UIAbility组件自定义的权限信息。其他应用访问该UIAbility时，需要申请相应的权限信息。 一个数组元素为一个权限名称，权限名称采用反向域名格式（不超过255字节），取值为系统预定义的权限。 | 字符串数组 | 该标签可缺省，缺省值为空。  
metadata | 标识当前UIAbility组件的元信息。 | 对象数组 | 该标签可缺省，缺省值为空。  
exported |  标识当前UIAbility组件是否可以被其他应用拉起。 \- true：表示可以被其他应用拉起。 \- false：表示不可以被其他应用拉起，只能由同应用或者具有ohos.permission.START_INVISIBLE_ABILITY权限（该权限仅系统应用支持申请）的应用拉起。 例如，配置为false时，桌面具备该权限，桌面点击应用图标、快捷方式或push通知消息可以拉起当前UIAbility组件，但aa命令行工具没有权限无法拉起。 | 布尔值 | 该标签可缺省，缺省值为false。  
continuable |  标识当前UIAbility组件是否支持跨端迁移。 \- true：表示支持迁移。 \- false：表示不支持迁移。 | 布尔值 | 该标签可缺省，缺省值为false。  
skills |  标识当前UIAbility组件能够接收的[Want](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-want-overview)特征集，为数组格式。 配置规则： \- 对于Entry类型的HAP，应用可以配置多个具有入口能力的skills标签（即配置了ohos.want.action.home和entity.system.home）。 \- 对于Feature类型的HAP，只有应用可以配置具有入口能力的skills标签，服务不允许配置。 | 对象数组 | 该标签可缺省，缺省值为空。  
backgroundModes |  标识当前UIAbility组件的长时任务集合，指定用于满足特定类型的长时任务。 长时任务类型有如下： \- dataTransfer：通过网络/对端设备进行数据下载、备份、分享、传输等。 \- audioPlayback：音频播放。 \- audioRecording：录音。 \- location：定位、导航。 \- bluetoothInteraction：蓝牙扫描、连接、传输（穿戴）。 \- multiDeviceConnection：多设备互联。 \- taskKeeping：计算。 | 字符串数组 | 该标签可缺省，缺省值为空。  
startWindow |  标识当前UIAbility组件启动页面profile资源，取值为长度不超过255字节的字符串，如果配置了该字段，startWindowIcon和startWindowBackground字段均不生效。 **说明：** 从API version 18开始，支持该字段。 | 字符串 | 该标签可缺省，缺省值为空。  
startWindowIcon | 标识当前UIAbility组件启动页面图标资源文件的索引，取值为长度不超过255字节的字符串。 | 字符串 | 该标签不可缺省。  
startWindowBackground |  标识当前UIAbility组件启动页面背景颜色资源文件的索引，取值为长度不超过255字节的字符串。 取值示例：$color:red。 | 字符串 | 该标签不可缺省。  
removeMissionAfterTerminate |  标识当前UIAbility组件销毁后，是否从任务列表中移除任务。 \- true表示销毁后移除任务。 \- false表示销毁后不移除任务。 | 布尔值 | 该标签可缺省，缺省值为false。  
orientation |  标识当前UIAbility组件启动时的方向，支持配置枚举，或启动方向资源索引。 **启动方向枚举支持的取值如下：** \- unspecified：未指定方向，由系统自动判断显示方向。 \- landscape：横屏。 \- portrait：竖屏。 \- follow_recent：跟随背景窗口的旋转模式。 \- landscape_inverted：反向横屏。 \- portrait_inverted：反向竖屏。 \- auto_rotation：随传感器旋转。 \- auto_rotation_landscape：传感器横屏旋转，包括横屏和反向横屏。 \- auto_rotation_portrait：传感器竖屏旋转，包括竖屏和反向竖屏。 \- auto_rotation_restricted：传感器开关打开，方向可随传感器旋转。 \- auto_rotation_landscape_restricted：传感器开关打开，方向可随传感器旋转为横屏， 包括横屏和反向横屏。 \- auto_rotation_portrait_restricted：传感器开关打开，方向可随传感器旋转为竖屏， 包括竖屏和反向竖屏。 \- locked：传感器开关关闭，方向锁定。 \- auto_rotation_unspecified：受开关控制和由系统判定的自动旋转模式。 \- follow_desktop：跟随桌面的旋转模式。 **配置启动方向的资源索引时** ，取值为长度不超过255字节的字符串，配置示例：$string:orientation。 **说明：** \- 从API version 14开始，支持配置启动方向资源索引。 | 字符串 | 该标签可缺省，缺省值为unspecified。  
supportWindowMode |  标识当前UIAbility组件所支持的窗口模式。支持的取值如下： \- fullscreen：全屏模式。 \- split：分屏模式。 \- floating：悬浮窗模式。 | 字符串数组 |  该标签可缺省，缺省值为 ["fullscreen", "split", "floating"]。  
maxWindowRatio | 标识当前UIAbility组件支持的最大的宽高比。该标签最小取值为0。 | 数值 | 该标签可缺省，缺省值为平台支持的最大的宽高比。  
minWindowRatio | 标识当前UIAbility组件支持的最小的宽高比。该标签最小取值为0。 | 数值 | 该标签可缺省，缺省值为平台支持的最小的宽高比。  
maxWindowWidth |  标识当前UIAbility组件支持的最大的窗口宽度，宽度单位为vp。 最小取值为minWindowWidth，最大取值为平台支持的最大窗口宽度。 | 数值 | 该标签可缺省，缺省值为平台支持的最大的窗口宽度。  
minWindowWidth |  标识当前UIAbility组件支持的最小的窗口宽度， 宽度单位为vp。 最小取值为平台支持的最小窗口宽度，最大取值为maxWindowWidth。 | 数值 | 该标签可缺省，缺省值为平台支持的最小的窗口宽度。  
maxWindowHeight |  标识当前UIAbility组件支持的最大的窗口高度， 高度单位为vp。 最小取值为minWindowHeight，最大取值为平台支持的最大窗口高度。 | 数值 | 该标签可缺省，缺省值为平台支持的最大的窗口高度。  
minWindowHeight |  标识当前UIAbility组件支持的最小的窗口高度， 高度单位为vp。 最小取值为平台支持的最小窗口高度，最大取值为maxWindowHeight。 | 数值 | 该标签可缺省，缺省值为平台支持的最小的窗口高度。  
recoverable |  标识当前UIAbility组件是否支持在检测到应用故障后，恢复到应用原界面。 \- true：支持检测到出现故障后，恢复到原界面。 \- false：不支持检测到出现故障后，恢复到原界面。 | 布尔值 | 该标签可缺省，缺省值为false。  
isolationProcess |  标识组件能否运行在独立的进程中。 \- true：表示能运行在独立的进程中。 \- false：表示不能运行在独立的进程中。 **说明：** 仅2in1和tablet设备支持将UIAbility设置为独立进程。 | 布尔值 | 该标签可缺省，缺省值为false。  
excludeFromDock |  标识当前UIAbility组件是否支持从dock区域隐藏图标。 \- true：表示在dock区域隐藏。 \- false：表示不能在dock区域隐藏。 | 布尔值 | 该标签可缺省，缺省值为false。  
preferMultiWindowOrientation |  标识当前UIAbility组件多窗布局方向： \- default：缺省值，参数不配置默认值，建议其他应用类配置。 \- portrait：多窗布局方向为竖向，建议竖向游戏类应用配置。 \- landscape：多窗布局方向为横向，配置后支持横屏悬浮窗和上下分屏，建议横向游戏类应用配置。 \- landscape_auto：多窗布局动态可变为横向，需要配合API enableLandScapeMultiWindow/disableLandScapeMultiWindow使用，建议视频类应用配置。 | 字符串 | 该标签可缺省，缺省值为default。  
continueType | 标识当前UIAbility组件的跨端迁移类型。 | 字符串数组 | 该标签可缺省，缺省值为当前组件的名称。  
continueBundleName |  标识当前应用支持跨端迁移的其它应用名称列表。 **说明：** 不能配置为本应用包名，仅为了做异包名迁移使用。 从API version 13开始，支持该字段。 | 字符串数组 | 该标签可缺省，缺省值为空。  
process |  标识组件的进程标签。 **说明：** 仅在[2in1](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-configuration-file#devicetypes标签)设备上生效，UIAbility组件和type为embeddedUI的ExtensionAbility组件标签一致时运行在同一个进程中。从API version 14开始，支持该字段。 | 字符串 | 该标签可缺省，缺省值为空。  
  
abilities示例：
    
    
    {
      "abilities": [{
        "name": "EntryAbility",
        "srcEntry": "ohos_app_cangjie_entry.MainAbility",
        "launchType":"singleton",
        "description": "$string:description_main_ability",
        "icon": "$media:layered_image",
        "label": "Login",
        "permissions": [],
        "metadata": [],
        "exported": true,
        "continuable": true,
        "skills": [{
          "actions": ["ohos.want.action.home"],
          "entities": ["entity.system.home"],
          "uris": []
        }],
        "backgroundModes": [
          "dataTransfer",
          "audioPlayback",
          "audioRecording",
          "location",
          "bluetoothInteraction",
          "multiDeviceConnection",
          "wifiInteraction",
          "voip",
          "taskKeeping"
        ],
        "startWindow": "$profile:start_window",
        "startWindowIcon": "$media:icon",
        "startWindowBackground": "$color:red",
        "removeMissionAfterTerminate": true,
        "orientation": "$string:orientation",
        "supportWindowMode": ["fullscreen", "split", "floating"],
        "maxWindowRatio": 3.5,
        "minWindowRatio": 0.5,
        "maxWindowWidth": 2560,
        "minWindowWidth": 1400,
        "maxWindowHeight": 300,
        "minWindowHeight": 200,
        "excludeFromMissions": false,
        "unclearableMission": false,
        "excludeFromDock": false,
        "preferMultiWindowOrientation": "default",
        "isolationProcess": false,
        "continueType": [
          "continueType1",
          "continueType2"
        ],
        "continueBundleName": [
          "com.example.myapplication1",
          "com.example.myapplication2"
        ],
        "process": ":processTag"
      }]
    }

#### skills标签

该标签标识UIAbility组件或者ExtensionAbility组件能够接收的[Want](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-want-overview)的特征。

**表7** skills标签说明

属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---  
actions |  标识能够接收的Action值集合，取值通常为系统预定义的action值，也允许自定义。 一个skill中不建议配置多个action，否则可能导致无法匹配预期场景。 | 字符串数组 | 该标签可缺省，缺省值为空。  
entities |  标识能够接收的Entity值的集合。 一个skill中不建议配置多个entity，否则可能导致无法匹配预期场景。 | 字符串数组 | 该标签可缺省，缺省值为空。  
uris | 标识与Want中URI（Uniform Resource Identifier）相匹配的集合。数组允许的最大数量为512。 | 对象数组 | 该标签可缺省，缺省值为空。  
permissions |  标识当前UIAbility组件自定义的权限信息。其他应用访问该UIAbility时，需要申请相应的权限信息。 一个数组元素为一个权限名称，权限名称采用反向域名格式（不超过255字节），取值为系统预定义的权限。 | 字符串数组 | 该标签可缺省，缺省值为空。  
domainVerify |  标识是否开启域名校验。 \- true：表示开启域名校验。 \- false：表示不开启域名校验。 | 布尔值 | 该标签可缺省，缺省值为false。  
  
**表8** uris标签说明

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/69/v3/8jF9ixyqQRWO-KRDpOSM6Q/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090110Z&HW-CC-Expire=86400&HW-CC-Sign=B6A44C3957349805080DBCD95CACCE1640F2D5C1F1887678041E804623341BA9)

以下字符串类型的字段不支持使用资源索引的方式（$string）配置。

属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---  
scheme |  标识URI的协议名部分，常见的有http、https、file、ftp等。 **说明：** 从API 18开始，该字段在参与隐式Want匹配时不区分大小写。 | 字符串 | uris中仅配置type时可以缺省，缺省值为空，否则不可缺省。  
host |  标识URI的主机地址部分，该字段只有当scheme配置时才生效。常见的方式： \- 域名方式，如example.com。 \- IP地址方式，如10.10.10.1。 **说明：** 从API 18开始，该字段在参与隐式Want匹配时不区分大小写。 | 字符串 | 该标签可缺省，缺省值为空。  
port | 标识URI的端口部分。如http默认端口为80，https默认端口是443，ftp默认端口是21。该字段只有当scheme和host都配置时才生效。 | 字符串 | 该标签可缺省，缺省值为空。  
path | pathStartWith | pathRegex | 标识URI的路径部分，path、pathStartWith和pathRegex配置时三选一。path标识URI与want中的路径部分全匹配，pathStartWith标识URI与want中的路径部分允许前缀匹配，pathRegex标识URI与want中的路径部分允许正则匹配。该字段只有当scheme和host都配置时才生效。 | 字符串 | 该标签可缺省，缺省值为空。  
type | 标识与Want相匹配的数据类型，使用MIME（Multipurpose Internet Mail Extensions）类型规范。可以与scheme同时配置，也可以单独配置。 | 字符串 | 该标签可缺省，缺省值为空。  
utd | 适用于分享等场景。 | 字符串 | 该标签可缺省，缺省值为空。  
maxFileSupported | 对于指定类型的文件，标识一次能接收或打开的最大数量，适用于分享等场景，需要与utd配合使用。 | 整数 | 该标签可缺省，缺省值为0。  
  
skills示例：
    
    
    {
      "abilities": [
        {
          "skills": [
            {
              "actions": [
                "ohos.want.action.home"
              ],
              "entities": [
                "entity.system.home"
              ],
              "uris": [
                {
                  "scheme":"http",
                  "host":"example.com",
                  "port":"80",
                  "path":"path",
                  "type": "text/*",
                  "linkFeature": "Login"
                }
              ],
              "permissions": [],
              "domainVerify": false
            }
          ]
        }
      ]
    }

#### extensionAbilities标签

描述extensionAbilities的配置信息，标签值为数组类型，该标签下的配置只对当前extensionAbilities生效。

**表9** extensionAbilities标签说明

属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---  
name | 标识当前ExtensionAbility组件的名称，确保该名称在整个应用中唯一，取值为长度不超过127字节的字符串。 | 字符串 | 该标签不可缺省。  
srcEntry | 标识当前ExtensionAbility组件所对应的类路径，取值为长度不超过127字节的字符串。 | 字符串 | 该标签不可缺省。  
description | 标识当前ExtensionAbility组件的描述，开发者可以通过该字段描述当前组件的功能与作用，取值为长度不超过255字节的字符串，可以是对描述内容的资源索引，用于支持多语言。 | 字符串 | 该标签可缺省，缺省值为空。  
icon | 标识当前ExtensionAbility组件的图标，取值为资源文件的索引。如果ExtensionAbility组件被配置为mainElement，该标签必须配置。 | 字符串 | 该标签可缺省，缺省值为空。  
label | 标识当前ExtensionAbility组件对用户显示的名称，取值为该名称的资源索引，以支持多语言，字符串长度不超过255字节。如果ExtensionAbility被配置当前Module的mainElement时，该标签必须配置，且要确保应用内唯一。 | 字符串 | 该标签可缺省，缺省值为空。  
type |  标识当前ExtensionAbility组件的类型，支持的取值如下： \- form：卡片的ExtensionAbility。 \- workScheduler：延时任务的ExtensionAbility。 \- inputMethod：输入法的ExtensionAbility。 \- accessibility：辅助能力的ExtensionAbility。 \- staticSubscriber：静态广播的ExtensionAbility。 \- wallpaper：壁纸的ExtensionAbility。 \- backup：数据备份的ExtensionAbility。 \- window：该ExtensionAbility会在启动过程中创建一个window，为开发者提供界面开发。开发者开发出来的界面将通过UIExtensionComponent控件组合到其他应用的窗口中。 \- thumbnail：获取文件缩略图的ExtensionAbility，开发者可以对自定义文件类型的文件提供缩略。 \- preview：该ExtensionAbility会将文件解析后在一个窗口中显示，开发者可以通过将此窗口组合到其他应用窗口中。 \- print：打印框架的ExtensionAbility。 \- push：推送的ExtensionAbility。 \- driver：驱动框架的ExtensionAbility。应用配置了driver类型的ExtensionAbility后会被视为驱动应用，驱动应用在安装、卸载和恢复时不会区分用户，且创建新用户时也会安装设备上已有的驱动应用。例如，创建子用户时会默认安装主用户已有的驱动应用，在子用户上卸载驱动应用时，主用户上对应的驱动应用也会同时被卸载。 \- remoteNotification：远程通知的ExtensionAbility。 \- remoteLocation：远程定位的ExtensionAbility。 \- voip：网络音视频通话的ExtensionAbility。 \- action：自定义操作业务模板的ExtensionAbility，为开发者提供基于UIExtension的自定义操作业务模板。 \- embeddedUI：嵌入式UI扩展能力，提供跨进程界面嵌入的能力。 \- insightIntentUI：为开发者提供能被小艺意图调用，以窗口形态呈现内容的扩展能力。 \- ads：广告业务的ExtensionAbility，与AdComponent控件组合使用，将广告页面展示到其他应用中。仅支持设备厂商使用。 \- photoEditor：图片编辑业务的ExtensionAbility，为开发者提供基于UIExtension的图片编辑业务模板。 \- appAccountAuthorization：应用账号授权扩展能力的ExtensionAbility，用于处理账号授权请求，比如账号登录授权。 \- autoFill/password：用于账号和密码自动填充业务的ExtensionAbility，支持数据的保存、填充能力。 \- hms/account：应用账号管理能力的ExtensionAbility。 \- autoFill/smart：用于情景化场景自动填充业务的ExtensionAbility，支持数据的保存、填充能力。 \- uiService：弹窗服务组件，在启动过程中会创建window，并支持双向通信。 \- statusBarView：一步直达的ExtensionAbility。 \- recentPhoto：最近照片推荐的ExtensionAbility。 | 字符串 | 该标签不可缺省。  
permissions |  标识当前ExtensionAbility组件自定义的权限信息。当其他应用访问该ExtensionAbility时，需要申请相应的权限信息。 一个数组元素为一个权限名称。通常采用反向域名格式（最大255字节），取值为[系统预定义的权限](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-app-permissions)。 | 字符串数组 | 该标签可缺省，缺省值为空。  
readPermission | 标识读取当前ExtensionAbility组件数据所需的权限，取值为长度不超过255字节的字符串。仅当ExtensionAbility组件的type为dataShare时支持配置该标签。 | 字符串 | 该标签可缺省，缺省值为空。  
writePermission | 标识向当前ExtensionAbility组件写数据所需的权限，取值为长度不超过255字节的字符串。仅当ExtensionAbility组件的type为dataShare时支持配置该标签。 | 字符串 | 该标签可缺省，缺省值为空。  
uri |  标识当前ExtensionAbility组件提供的数据URI，取值为长度不超过255字节的字符数组，用反向域名的格式表示。 **说明：** 该标签在type为dataShare类型的ExtensionAbility时，不可缺省。 | 字符串 | 该标签可缺省，缺省值为空。  
skills |  标识当前ExtensionAbility组件能够接收的[Want](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-want-overview)的特征集。 配置规则：entry包可以配置多个具有入口能力的skills标签（配置了ohos.want.action.home和entity.system.home）的ExtensionAbility，其中第一个配置了skills标签的ExtensionAbility中的label和icon作为服务或应用的label和icon。 **说明：** 服务的Feature包不支持配置具有入口能力的skills标签。 应用的Feature包支持配置具有入口能力的skills标签。 | 数组 | 该标签可缺省，缺省值为空。  
metadata |  标识当前ExtensionAbility组件的元信息。 **说明：** 该标签在type为form时，不可缺省，且必须存在一个name为ohos.extension.form的对象值，其对应的resource值不能缺省，为服务卡片的二级资源引用。 | 对象数组 | 该标签可缺省，缺省值为空。  
exported |  标识当前ExtensionAbility组件是否可以被其他应用调用。 \- true：表示可以被其他应用调用。 \- false：表示不可以被其他应用调用，包括无法被aa工具命令拉起应用。 | 布尔值 | 该标签可缺省，缺省值为false。  
extensionProcessMode |  标识当前ExtensionAbility组件的多进程实例模型,当前只对UIExtensionAbility以及从UIExtensionAbility扩展的ExtensionAbility生效。 \- instance：表示该ExtensionAbility每个实例一个进程。 \- type：表示该ExtensionAbility实例都运行在同一个进程里，与其他ExtensionAbility分离进程。 \- bundle：表示该ExtensionAbility实例都运行在应用统一进程里，与其他配置了bundle模型的ExtensionAbility共进程。 \- runWithMainProcess：表示该ExtensionAbility和应用主进程共进程，只有一步直达的ExtensionAbility可以配置runWithMainProcess。 | 字符串 | 该标签可缺省，缺省值为空。  
dataGroupIds |  标识当前ExtensionAbility组件的dataGroupId集合。如果当前ExtensionAbility组件所在的应用在应用市场申请的证书里groupIds也申请了某个dataGroupId，那么当前ExtensionAbility组件可以和应用共享这一个dataGroupId生成的目录，所以ExtensionAbility组件的dataGroupId需要是应用的签名证书中groupIds字段里配置的才能生效。 且该字段仅在当前ExtensionAbility组件存在独立的沙箱目录时生效。**说明：** 不能配置为本应用包名，仅为了做异包名迁移使用。 | 字符串数组 | 该标签可缺省，缺省值为空。  
process |  标识组件的进程标签，只有type为embeddedUI时可以配置该字段。 **说明：** 仅在[2in1](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-configuration-file#devicetypes标签)设备上生效，UIAbility组件和ExtensionAbility组件标签一致时运行在同一个进程中。从API version 14开始，支持该字段。 | 字符串 | 该标签可缺省，缺省值为空。  
  
extensionAbilities示例：
    
    
    {
      "extensionAbilities": [
        {
          "name": "FormName",
          "srcEntry": "ohos_app_cangjie_entry.MainAbility",
          "icon": "$media:icon",
          "label" : "$string:extension_name",
          "description": "$string:form_description",
          "type": "form",
          "permissions": ["ohos.abilitydemo.permission.PROVIDER"],
          "readPermission": "",
          "writePermission": "",
          "exported": true,
          "uri":"scheme://authority/path/query",
          "skills": [{
            "actions": [],
            "entities": [],
            "uris": [],
            "permissions": []
          }],
          "metadata": [
            {
              "name": "ohos.extension.form",
              "resource": "$profile:form_config",
            }
          ],
          "extensionProcessMode": "instance",
          "dataGroupIds": [
            "testGroupId1"
          ]
        }
      ]
    }

#### shortcuts标签

shortcuts标识应用的快捷方式信息。标签值为数组，包含四个子标签shortcutId、label、icon、wants。

metadata中指定shortcut信息，其中：

  * name：指定shortcuts的名称，使用ohos.ability.shortcuts作为shortcuts信息的标识。

  * resource：指定shortcuts信息的资源位置。




**表10** shortcuts标签说明

属性名称 | 含义 | 类型 | 是否可缺省  
---|---|---|---  
shortcutId | 标识快捷方式的ID，取值为长度不超过63字节的字符串。**不支持通过资源索引的方式（$string）配置该字段。** | 字符串 | 该标签不可缺省。  
label | 标识快捷方式的标签信息，即快捷方式对外显示的文字描述信息。取值为长度不超过255字节的字符串，可以是描述性内容，也可以是标识label的资源索引。 | 字符串 | 该标签可缺省，缺省值为空。  
icon | 标识快捷方式的图标，取值为资源文件的索引。 | 字符串 | 该标签可缺省，缺省值为空。  
wants | 标识快捷方式内定义的目标wants信息集合，在调用launcherBundleManager的startShortcut接口时，会拉起wants标签里的第一个目标组件，推荐只配置一个wants元素。 | 对象 | 该标签可缺省，缺省为空。  
  
  1. 在/resources/base/profile/目录下配置shortcuts_config.json配置文件。
         
         {
           "shortcuts": [
             {
               "shortcutId": "id_test1",
               "label": "$string:shortcut",
               "icon": "$media:aa_icon",
               "wants": [
                 {
                   "bundleName": "com.ohos.hello",
                   "moduleName": "entry",
                   "abilityName": "EntryAbility",
                   "parameters": {
                     "testKey": "testValue"
                   }
                 }
               ]
             }
           ]
         }

  2. 在module.json5配置文件的abilities标签中，针对需要添加快捷方式的UIAbility进行配置metadata标签，使shortcut配置文件对该UIAbility生效。
         
         {
           "module": {
             // ...
             "abilities": [
               {
                 "name": "EntryAbility",
                 "srcEntry": "ohos_app_cangjie_entry.MainAbility",
                 // ...
                 "skills": [
                   {
                     "entities": [
                       "entity.system.home"
                     ],
                     "actions": [
                       "ohos.want.action.home"
                     ]
                   }
                 ],
                 "metadata": [
                   {
                     "name": "ohos.ability.shortcuts",
                     "resource": "$profile:shortcuts_config"
                   }
                 ]
               }
             ]
           }
         }




#### [h2]wants标签

此标签用于标识快捷方式内定义的目标wants信息集合。

**表11** wants标签说明

属性名称 | 含义 | 类型 | 是否可缺省  
---|---|---|---  
bundleName | 表示快捷方式的目标包名。 | 字符串 | 该标签不可缺省。  
moduleName | 表示快捷方式的目标模块名。 | 字符串 | 该标签可缺省。  
abilityName | 表示快捷方式的目标组件名。 | 字符串 | 该标签不可缺省。  
parameters | 表示拉起快捷方式时的自定义数据，仅支持配置字符串类型的数据。其中键值均最大支持1024长度的字符串。 | 对象 | 该标签可缺省。  
  
data标签示例：
    
    
    {
      "wants": [
        {
          "bundleName": "com.ohos.hello",
          "moduleName": "entry",
          "abilityName": "EntryAbility",
          "parameters": {
            "testKey": "testValue"
          }
        }
      ]
    }

#### distributionFilter标签

该标签用于定义HAP对应的细分设备规格的分发策略，以便在应用市场进行云端分发应用包时做精准匹配。

  * **适用场景：** 当一个工程中存在多个Entry，且多个Entry配置的deviceTypes存在交集时，则需要通过该标签进行区分。比如下面的两个Entry都支持tablet类型，就需要通过该标签进行区分。
        
        // entry1支持的设备类型
        {
          "module": {
            "name": "entry1",
            "type": "entry",
            "deviceTypes" : [
              "2in1",
              "tablet"
            ]
          }
        }
        
        // entry2支持的设备类型
        {
          "module": {
            "name": "entry2",
            "type": "entry",
            "deviceTypes" : [
              "tablet"
            ]
          }
        }

  * **配置规则：** 该标签支持配置四个属性，包括屏幕形状(screenShape)、窗口分辨率(screenWindow)、屏幕像素密度(screenDensity )、设备所在国家与地区(countryCode)。详见下表。

在分发应用包时，通过deviceTypes与这四个属性的匹配关系，唯一确定一个用于分发到设备的HAP。

    * 如果需要配置该标签，则至少包含一个属性。
    * 如果一个Entry中配置了任意一个或多个属性，则其他Entry也必须包含相同的属性。
    * screenShape和screenWindow属性仅适用于轻量级智能穿戴设备。
  * **配置方式：** 该标签需要配置在/resources/base/profile资源目录下，并在metadata的resource字段中引用。




**表12** distributionFilter标签配置说明

属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---  
screenShape | 标识屏幕形状的支持策略。 | 对象数组 | 该标签可缺省，缺省值为空。  
screenWindow | 标识应用运行时的窗口分辨率的支持策略。 | 对象数组 | 该标签可缺省，缺省值为空。  
screenDensity | 标识屏幕的像素密度（dpi：Dot Per Inch）的支持策略。 | 对象数组 | 该标签可缺省，缺省值为空。  
countryCode | 标识国家与地区的支持策略，取值参考ISO-3166-1标准。支持多个国家和地区枚举定义。 | 对象数组 | 该标签可缺省，缺省值为空。  
  
#### [h2]screenShape标签

**表13** screenShape标签说明

属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---  
policy |  标识条件属性的过滤规则。 \- exclude：表示需要排除的value属性。 \- include：表示需要包含的value属性。 | 字符串 | 该标签不可缺省。  
value | 支持的取值为circle（圆形）、rect（矩形）。例如，针对智能穿戴设备，可为圆形表盘和矩形表盘分别提供不同的HAP。 | 字符串数组 | 该标签不可缺省。  
  
#### [h2]screenWindow标签

**表14** screenWindow标签说明

属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---  
policy |  标识条件属性的过滤规则。当前取值仅支持“include”。 \- include：表示需要包含的value属性。 | 字符串 | 该标签不可缺省。  
value | 单个字符串的取值格式为“宽 * 高”，取值为整数像素值，例如“454 * 454”。 | 字符串数组 | 该标签不可缺省。  
  
#### [h2]screenDensity标签

**表15** screenDensity标签说明

属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---  
policy |  标识条件属性的过滤规则。 \- exclude：表示需要排除的value属性。 \- include：表示需要包含的value属性。 | 字符串 | 该标签不可缺省。  
value |  标识屏幕的像素密度（dpi :Dot Per Inch）。支持的取值如下： \- sdpi：表示小规模的屏幕密度（Small-scale Dots per Inch），适用于dpi取值为(0,120]的设备。 \- mdpi：表示中规模的屏幕密度（Medium-scale Dots Per Inch），适用于dpi取值为(120,160]的设备。 \- ldpi：表示大规模的屏幕密度（Large-scale Dots Per Inch），适用于dpi取值为(160,240]的设备。 \- xldpi：表示大规模的屏幕密度（Extra Large-scale Dots Per Inch），适用于dpi取值为(240,320]的设备。 \- xxldpi：表示大规模的屏幕密度（Extra Extra Large-scale Dots Per Inch），适用于dpi取值为(320，480]的设备。 \- xxxldpi：表示大规模的屏幕密度（Extra Extra Extra Large-scale Dots Per Inch），适用于dpi取值为(480, 640]的设备。 | 字符串数组 | 该标签不可缺省。  
  
#### [h2]countryCode标签

**表16** countryCode标签说明

属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---  
policy |  标识条件属性的过滤规则。 \- exclude：表示需要排除的value属性。 \- include：表示需要包含的value属性。 | 字符串 | 该标签不可缺省。  
value | 标识应用需要分发的国家地区码。 | 字符串数组 | 该标签不可缺省。  
  
示例如下：

  1. 在开发视图的resources/base/profile下定义配置文件，文件名为distributionFilter_config.json，文件名可以自定义。
         
         {
           "distributionFilter": {
             "screenShape": {
               "policy": "include",
               "value": [
                 "circle",
                 "rect"
               ]
             },
             "screenWindow": {
               "policy": "include",
               "value": [
                 "454*454",
                 "466*466"
               ]
             },
             "screenDensity": {
               "policy": "exclude",
               "value": [
                 "ldpi",
                 "xldpi"
               ]
             },
             "countryCode": { // 支持在中国分发
               "policy": "include",
               "value": [
                 "CN"
               ]
             }
           }
         }

  2. 在module.json5配置文件的module标签中定义metadata信息。
         
         {
           "module": {
             // ...
             "metadata": [
               {
                 "name": "ohos.module.distribution",
                 "resource": "$profile:distributionFilter_config",
               }
             ]
           }
         }




#### testRunner标签

此标签用于支持对测试框架的配置。

**表17** testRunner标签说明

属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---  
name | 标识测试框架对象名称，取值为长度不超过255字节的字符串。 | 字符串 | 不可缺省。  
srcPath | 标识测试框架代码路径，取值为长度不超过255字节的字符串。 | 字符串 | 不可缺省。  
  
testRunner标签示例：
    
    
    {
      "module": {
        // ...
        "testRunner": {
          "name": "myTestRunnerName",
          "srcPath": "etc/test/TestRunner.ts"
        }
      }
    }

#### dependencies标签

此标签标识模块运行时依赖的共享库列表。

**表18** dependencies标签说明

属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---  
bundleName | 标识当前模块依赖的共享包包名。取值为长度7~128字节的字符串。 | 字符串 | 该标签可缺省，缺省值为空。  
moduleName | 标识当前模块依赖的共享包模块名。取值为长度不超过31字节的字符串。 | 字符串 | 该标签不可缺省。  
versionCode | 标识当前模块依赖的共享包的版本号。取值范围为0~2147483647。 | 数值 | 该标签可缺省，缺省值为空。  
  
dependencies标签示例：
    
    
    {
      "module": {
        "dependencies": [
          {
            "bundleName":"com.share.library",
            "moduleName": "library",
            "versionCode": 10001
          }
        ]
      }
    }

#### proxyData标签

此标签标识模块提供的数据代理列表，仅限entry和feature配置。

**表19** proxyData标签说明

属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---  
uri | 标识用于访问该数据代理的URI，不同的数据代理配置的URI不可重复，且需要满足datashareproxy://当前应用包名/xxx的格式。取值为长度不超过255字节的字符串。 | 字符串 | 该标签不可缺省。  
requiredReadPermission | 标识从该数据代理中读取数据所需要的权限。若不配置，则其他应用无法使用该代理。非系统应用配置的权限的等级需为system_basic或system_core，系统应用配置的权限的等级没有限制。权限等级可以参考[权限列表](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-app-permissions)。取值为长度不超过255字节的字符串。 | 字符串 | 该标签可缺省，缺省值为空。  
requiredWritePermission | 标识向该数据代理中写入数据所需要的权限。若不配置，则其他应用无法使用该代理。非系统应用配置的权限的等级需为system_basic或system_core，系统应用配置的权限的等级没有限制。权限等级可以参考[权限列表](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-app-permissions)。取值为长度不超过255字节的字符串。 | 字符串 | 该标签可缺省，缺省值为空。  
metadata | 标识该数据代理的元信息，只支持配置name和resource字段。 | 对象 | 该标签可缺省，缺省值为空。  
  
proxyData标签示例：
    
    
    {
      "module": {
        "proxyData": [
          {
            "uri":"datashareproxy://com.ohos.datashare/event/Meeting",
            "requiredReadPermission": "ohos.permission.GET_BUNDLE_INFO",
            "requiredWritePermission": "ohos.permission.GET_BUNDLE_INFO",
            "metadata": {
              "name": "datashare_metadata",
              "resource": "$profile:datashare"
            }
          }
        ]
      }
    }

#### appEnvironments标签

此标签标识模块配置的应用环境变量。

**表20** appEnvironments标签说明

属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---  
name | 标识环境变量的变量名称。取值为长度不超过4096字节的字符串。 | 字符串 | 该标签可缺省，缺省值为空。  
value | 标识环境变量的值。取值为长度不超过4096字节的字符串。 | 字符串 | 该标签可缺省，缺省值为空。  
  
appEnvironments标签示例：
    
    
    {
      "module": {
        "appEnvironments": [
          {
            "name":"name1",
            "value": "value1"
          }
        ]
      }
    }

#### hnpPackages标签

该标签标识应用包含的Native软件包信息。

**表21** hnpPackages标签说明

属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---  
package | 标识Native软件包名称。 | 字符串 | 该标签不可缺省。  
type |  标识Native软件包类型。支持的取值如下： \- public：公有类型。 \- private：私有类型。 | 字符串 | 该标签不可缺省。  
  
hnpPackages示例：
    
    
    {
      "module" : {
        "hnpPackages": [
          {
            "package": "hnpsample.hnp",
            "type": "public"
          }
        ]
      }
    }

#### fileContextMenu标签

该标签标识当前HAP的右键菜单配置项，是一个profile文件资源，用于指定描述应用注册右键菜单配置文件。仅在PC/2in1设备上生效。

fileContextMenu标签示例
    
    
    {
      "module": {
        // ...
        "fileContextMenu": "$profile:menu" // 通过profile下的资源文件配置
      }
    }

在开发视图的resources/base/profile下面定义配置文件menu.json，其中文件名“menu.json”可自定义，需要和fileContextMenu标签指定的信息对应。配置文件中描述了当前应用注册的右键菜单的项目和响应行为。

配置文件根节点名称为fileContextMenu，为对象数组，标识当前module注册右键菜单的数量。（单模块和单应用注册数量不能超过5个，配置超过数量当前只解析随机5个）

**表22** fileContextMenu标签配置说明

属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---  
abilityName | 表示当前右键菜单对应的需要拉起的ability名称。 | 字符串 | 不可缺省。  
menuItem |  右键菜单显示的信息。命名建议： 原则一：[动作]+[应用名]，中文示例：用{App}打开、用{App} ({Plugin}插件) 打开；英文示例：Open with {App}、Open with {App} ({Plugin})。 原则二：[动作]+[目的]，示例：压缩为{文件名}、压缩至{路径}、用{App}转换为{格式}。 | 资源id | 不可缺省。  
menuHandler | 一个ability可以创建多个右键菜单， 用该字段来区分用户拉起的不同右键菜单项。该字段在用户点击右键菜单执行时，会作为参数传递给右键菜单应用。 | 字符串 | 不可缺省。  
menuContext | 定义展示该菜单项需要的上下文，可以支持多种情况，类型为数组。 | 对象数组 | 不可缺省。  
  
**表23** menuContext标签配置说明

属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---  
menuKind |  表示单击如下类型时会触发右键菜单。取值范围如下： \- 0：空白处 \- 1：文件 \- 2：文件夹 \- 3：文件和文件夹 | 数值 | 不可缺省。  
menuRule |  表示采用什么方式选择文件或文件夹时，会触发右键菜单。取值范围如下： \- single：单选 \- multi：多选 \- both：单选或多选 | 字符串 | 仅当menuKind为1或2时，才会读取该字段，此时不可缺省。  
fileSupportType |  表示当选中的文件列表里包含指定的文件类型时，显示右键菜单。 当该字段取值为["*"]时，将会读取fileNotSupportType字段。 当该字段取值为[]时，将不做任何处理。 | 字符串数组 | 仅当menuKind为1时，才会读取该字段，此时不可缺省。  
fileNotSupportType |  表示当选中的文件列表里包含这些文件类型时，不显示该右键菜单。 仅当menuKind为1、且fileSupportType为["*"]时，才会读取该字段。 | 字符串数组 | 可缺省，缺省值为空。  
  
resources/base/profile路径下的menu.json资源文件示例如下：
    
    
    {
      "fileContextMenu": [
        {
          "abilityName": "EntryAbility",
          "menuItem": "$string:module_desc",
          "menuHandler": "openCompress",
          "menuContext": [
            {
              "menuKind": 0
            },
            {
              "menuKind": 1,
              "menuRule": "both",
              "fileSupportType": [
                ".rar",
                ".zip"
              ],
              "fileNotSupportType": [
                ""
              ]
            },
            {
              "menuKind": 2,
              "menuRule": "single"
            },
            {
              "menuKind": 3
            }
          ]
        }
      ]
    }

**响应行为**

应用进行右键扩展菜单注册后，在文件管理器通过右键操作拉起菜单，该菜单中会有“更多”选项。单击“更多”选项后，会出现注册后的menuItem列表，单击任意一个选项后，文件管理器默认通过startAbility的方式拉起三方应用，除了指定三方应用的包名和ability名之外，want中的parameter中，也会传入如下字段：

**表24** want中parameter字段说明

参数名 | 值 | 类型  
---|---|---  
menuHandler | 对应注册配置文件中menuHandler的值。 | 字符串  
uriList | 用户在具体文件上触发右键的uri值，如果空白处响应，此值为空，单个文件响应，数组长度1，多个文件响应则传入对应所有文件的uri值。 | 字符串数组  
  
#### startWindow标签

该标签指向一个profile文件资源，用于指定UIAbility组件启动页面的配置文件，在开发视图的resources/base/profile下面定义配置文件start_window.json，如果配置了该字段，startWindowIcon和startWindowBackground字段将不生效。从API version 18开始，支持该字段。

**表25** startWindow标签配置说明

属性名称 | 含义 | 数据类型 | 是否可缺省  
---|---|---|---  
startWindowAppIcon | 标识当前UIAbility组件启动页面图标资源文件的索引，取值为长度不超过255字节的字符串。 | 字符串 | 可缺省，缺省值为空。  
startWindowIllustration | 标识当前UIAbility组件启动页面插画资源文件的索引，取值为长度不超过255字节的字符串。 | 字符串 | 可缺省，缺省值为空。  
startWindowBrandingImage | 标识当前UIAbility组件启动页面品牌标识资源文件的索引，取值为长度不超过255字节的字符串。 | 字符串 | 可缺省，缺省值为空。  
startWindowBackgroundColor | 标识当前UIAbility组件启动页面背景颜色资源文件的索引，取值为长度不超过255字节的字符串。 | 字符串 | 不可缺省。  
startWindowBackgroundImage | 标识当前UIAbility组件启动页面背景图片资源文件的索引，取值为长度不超过255字节的字符串。 | 字符串 | 可缺省，缺省值为空。  
startWindowBackgroundImageFit |  标识当前UIAbility组件启动页面背景图像适应方式，支持的取值如下： \- Contain：按照宽高比进行缩小或放大，图片完全显示在显示边界内。 \- Cover：按照宽高比进行缩小或放大，图片两边都大于或等于显示边界。 \- Auto：自适应显示。 \- Fill：不按照宽高比进行放大或缩小，图片充满显示边界。 \- ScaleDown：按照宽高比显示，图片缩小或保持不变。 \- None：保持原有尺寸显示。 | 字符串 | 可缺省，缺省值为Cover。  
  
resources/base/profile路径下的start_window.json资源文件示例如下：
    
    
    {
      "startWindowAppIcon": "$media:start_window_app_icon",
      "startWindowIllustration": "$media:start_window_illustration",
      "startWindowBrandingImage": "$media:start_window_branding_image",
      "startWindowBackgroundColor": "$color:start_window_back_ground_color",
      "startWindowBackgroundImage": "$media:start_window_back_ground_image",
      "startWindowBackgroundImageFit": "Cover"
    }
