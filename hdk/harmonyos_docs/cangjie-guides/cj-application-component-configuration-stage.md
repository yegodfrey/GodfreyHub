---
name: cangjie-guides/cj-application-component-configuration-stage
title: 应用/组件级配置
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-application-component-configuration-stage
nodePath: 应用框架 / Ability Kit（程序框架服务） / Stage模型开发指导 / Stage模型应用组件 / 应用/组件级配置
---

# 应用/组件级配置

在开发应用时，需要配置应用的一些标签，例如应用的包名、图标等标识特征的属性。本文描述了在开发应用需要配置的一些关键标签。

#### 应用包名配置

应用需要在工程的AppScope目录下的[app.json5配置文件](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-app-configuration-file)中配置bundleName标签，该标签用于标识应用的唯一性。推荐采用反域名形式命名（如com.example.demo，建议第一级为域名后缀com，第二级为厂商/个人名，第三级为应用名，也可以多级）。

#### 图标和标签配置

图标和标签通常一起配置，对应[app.json5配置文件](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-app-configuration-file)和[module.json5配置文件](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-configuration-file)中的icon和label。在DevEco Studio 5.0.3.800版本及之后，[module.json5配置文件](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-configuration-file)中的icon和label不再强制要求配置，而[app.json5配置文件](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-app-configuration-file)中的icon和label仍然是必选参数。因此，[module.json5配置文件](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-configuration-file)中的icon和label可以省略。

#### [h2]生成机制

  * HAP中包含UIAbility 
    * 如果在module.json5配置文件的abilities标签中配置了icon和label，且该对应的ability中skills标签下面的entities中包含"entity.system.home"、actions中包含"ohos.want.action.home"或者"action.system.home"，则系统将优先返回module.json5中的icon与label。如果存在多个满足条件的ability，优先返回module.json5中mainElement对应的ability配置的icon和label。
    * 如果在module.json5配置文件的abilities标签中未设置icon和label，系统将返回app.json5中的icon和label。
  * HAP中不包含UIAbility，系统将返回app.json5中的icon和label。



#### [h2]应用场景

  * 用于在应用界面内展示当前应用。例如：在设置应用中展示应用列表，在设置的隐私管理中展示应用申请的权限。
  * 用于在设备桌面上展示当前应用。例如：桌面或者最近任务列表中显示应用。



效果图如下：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/43/v3/Sn8LcIsARMip94lf41Tv7A/zh-cn_image_0000002743197515.png?HW-CC-KV=V1&HW-CC-Date=20260908T090115Z&HW-CC-Expire=86400&HW-CC-Sign=7B86B4810BC81A6DBAE7A89B88718F442B58E8E5E2516109F39E85DD0FCF9533)

#### [h2]配置示例

  * **方式一：配置app.json5（推荐）**
        
        {
          "app": {
            "icon": "$media:app_icon",
            "label": "$string:app_name"
            // ...
          }
        }

  * **方式二：配置module.json5**

如果需要在桌面显示UIAbility图标，除了需要配置icon与label字段，还需要在skills标签下面的entities中添加"entity.system.home"，actions中添加"ohos.want.action.home"。
        
        {
          "module": {
            // ...
            "abilities": [
              {
                "icon": "$media:icon",
                "label": "$string:EntryAbility_label",
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
              }
            ]
          }
        }




#### [h2]管控规则

系统对无图标应用实施严格管控，防止一些恶意应用故意配置无桌面应用图标，导致用户找不到软件所在的位置，无法操作卸载应用，在一定程度上保证用户终端设备的安全。

如果预置应用确需隐藏桌面应用图标，需要配置AllowAppDesktopIconHide应用特权。申请该特权后，应用不会在桌面上显示。除预置应用外，其他应用不支持隐藏桌面图标。

#### 应用版本声明配置

应用版本声明需要在工程的AppScope目录下的[app.json5配置文件](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-app-configuration-file)中配置versionCode标签和versionName标签。versionCode用于标识应用的版本号，该标签值为32位非负整数。此数字仅用于确定某个版本是否比另一个版本更新，数值越大表示版本越高。versionName标签标识版本号的文字描述。

#### Module支持的设备类型配置

Module支持的设备类型需要在[module.json5配置文件](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-configuration-file)中配置[deviceTypes标签](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-configuration-file#devicetypes标签)，如果deviceTypes标签中添加了某种设备，则表明当前的Module支持在该设备上运行。

#### Module权限配置

Module访问系统或其他应用受保护部分所需的权限信息需要在[module.json5配置文件](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-configuration-file)中配置[requestPermissions标签](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-declare-permissions)。该标签用于声明需要申请权限的名称、申请权限的原因以及权限使用的场景。
