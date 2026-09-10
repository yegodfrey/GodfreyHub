---
name: cangjie-faqs/07-api-resource
title: 仓颉如何访问应用资源（@r机制）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/07-api-resource
nodePath: FAQ / HarmonyOS API / 仓颉如何访问应用资源（@r机制）
---

# 仓颉如何访问应用资源（@r机制）

仓颉语言通过@r语法访问应用的资源文件，包括字符串、图片、颜色等资源。资源文件存放在resources目录下，按设备限定词组织。

#### 资源目录结构
    
    
    resources/
    ├── base/                    # 默认资源
    │   ├── element/
    │   │   └── string.json      # 字符串资源
    │   ├── media/
    │   │   └── foreground.png   # 图片资源
    │   └── profile/
    │       └── main_page.json   # 配置资源
    ├── en_US/                   # 英文资源
    │   └── element/
    │       └── string.json
    └── zh_CN/                   # 中文资源
        └── element/
            └── string.json

#### @r语法格式

@r(app.type.name)，其中：

  * app表示应用资源（也可使用sys表示系统资源）
  * type为资源类型：string、media、color、boolean、profile等
  * name为资源名称，对应资源文件中的key



#### 在UI组件中使用资源
    
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.resource.__GenerateResource__
    
    @Component
    class ResourceDemo {
        func build() {
            Column {
                Text(@r(app.string.module_desc))
                Image(@r(app.media.icon))
                    .width(100)
                    .height(100)
            }
        }
    }

#### 在代码中访问资源

使用ResourceManager获取资源内容：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7a/v3/Vl3lF0z_SdeyJLwKVFtXDQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260804T120414Z&HW-CC-Expire=86400&HW-CC-Sign=075853265A79F2185C7992CDB1FC97D5F9E890828B2DDE0A4A8DB8FE2E0E9AB8)

获取ResourceManager需通过Global.uiAbilityContext.resourceManager，详见[UIAbilityContext使用说明](https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/01-api-context)。
    
    
    import kit.LocalizationKit.*
    import ohos.arkui.state_macro_manage.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    import ohos_app_cangjie_entry.global.Global
    
    public func testResourceGetString(): Unit {
        try {
            let resourceManager = Global.uiAbilityContext.resourceManager // Global.uiAbilityContext主要用于存储UIAbilityContext。Global在ohos_app_cangjie_entry.global包中定义
            let resource = @r(app.string.module_desc)
            let value = resourceManager.getString(resource.id)
            Hilog.info(0, "Cangjie Test", "module_desc=${value}")
        } catch (e: BusinessException) {
            Hilog.error(0, "Cangjie Test", "Error: ${e.message}")
        }
    }

调用testResourceGetString，日志输出结果：
    
    
    module_desc=module description

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/37/v3/3C-yUfQwSLeXwJVXJQPKvw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260804T120414Z&HW-CC-Expire=86400&HW-CC-Sign=09164EAC4DF692EB7CE6EF5849855C7194DF317F98DCFF821460A254C1BA51D3)

  1. @r语法在编译时检查资源是否存在，若资源不存在会编译报错。
  2. 资源限定词目录（如en_US、zh_CN）用于实现多语言和设备适配。
  3. 使用@r(...).id获取资源ID后调用getString、getBoolean等方法。
  4. 资源访问可能抛出BusinessException，建议使用try-catch处理异常。



更多应用资源的访问方法，详情请参见[资源分类与访问](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-ide-resource-categories-and-access)。
