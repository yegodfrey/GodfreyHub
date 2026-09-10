---
name: cangjie-references/cj-apis-metadata
title: ohos.metadata
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-metadata
nodePath: 应用框架 / Ability Kit（程序框架服务） / 仓颉API / ohos.metadata
---

# ohos.metadata

metadata模块描述元数据信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7a/v3/-YIHp-L_T8e6ufjek7W-5Q/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111627Z&HW-CC-Expire=86400&HW-CC-Sign=B30848C60F85151F90BFE1E5D9602A55BB3A73F7B46FA2CC4DBFB3A2DBB543D6)

描述的module、UIAbility、ExtensionAbility配置信息，标签值为数组类型，该标签下的配置只对当前module、UIAbility或ExtensionAbility生效。

#### 导入模块
    
    
    import kit.AbilityKit.*

#### 使用说明

API示例代码使用说明：

  * 若示例代码首行有“// index.cj”注释，表示该示例可在仓颉模板工程的“index.cj”文件中编译运行。
  * 若示例需获取[Context](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-context)应用上下文，需在仓颉模板工程中的“main_ability.cj”文件中进行配置。



上述示例工程及配置模板详见[仓颉示例代码说明](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro#仓颉示例代码说明)。

#### class Metadata
    
    
    public class Metadata {
        public var name: String
        public var value: String
        public var resource: String
    }

**功能：** 元数据信息。通过调用[getBundleInfoForSelf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-bundle_manager#static-func-getbundleinfoforselfint32)接口获取，bundleFlags参数传入GET_BUNDLE_INFO_WITH_HAP_MODULE、GET_BUNDLE_INFO_WITH_ABILITY和GET_BUNDLE_INFO_WITH_METADATA的值。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

**起始版本：** 22

#### [h2]var name
    
    
    public var name: String

**功能：** 元数据名称。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

**起始版本：** 22

#### [h2]var resource
    
    
    public var resource: String

**功能：** 元数据资源描述符，参考示例$profile:config_file，表示profile目录下配置了config_file.json文件。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

**起始版本：** 22

#### [h2]var value
    
    
    public var value: String

**功能：** 元数据值。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

**起始版本：** 22
