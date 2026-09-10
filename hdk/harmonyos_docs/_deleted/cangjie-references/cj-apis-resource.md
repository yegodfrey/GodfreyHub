---
name: cangjie-references/cj-apis-resource
title: ohos.resource
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-resource
nodePath: 应用框架 / Localization Kit（本地化开发服务） / 仓颉API / ohos.resource
---

# ohos.resource

resource模块描述资源类型。

#### 导入模块
    
    
    import kit.LocalizationKit.*

#### 使用说明

API示例代码使用说明：

  * 若示例代码首行有“// index.cj”注释，表示该示例可在仓颉模板工程的“index.cj”文件中编译运行。
  * 若示例需获取[Context](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-context)应用上下文，需在仓颉模板工程中的“main_ability.cj”文件中进行配置。



上述示例工程及配置模板详见[仓颉示例代码说明](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro#仓颉示例代码说明)。

#### class AppResource
    
    
    public class AppResource <: Length & ResourceColor & ResourceStr {
        public var bundleName: String
        public var moduleName: String
        public var id: UInt32
        public var params:?Array<Any>
        public var resType:?Int32
        public init(
            bundleName: String,
            moduleName: String,
            id: UInt32,
            params!: ?Array<Any> = None,
            resType!: ?Int32 = None
        )
    }

**功能：** 提供资源相关信息，包括应用包名、应用模块名、资源id等。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

**父类型：**

  * [Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)
  * [ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor)
  * [ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr)



#### [h2]var bundleName
    
    
    public var bundleName: String

**功能：** 应用的bundle名称。

**类型：** String

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]var id
    
    
    public var id: UInt32

**功能：** 资源的id值。

**类型：** UInt32

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]var moduleName
    
    
    public var moduleName: String

**功能：** 应用的module名称。

**类型：** String

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]var params
    
    
    public var params:?Array<Any>

**功能：** 其他资源参数，包括资源名、格式化接口的替换值、复数接口的量词。

**类型：** ?Array<Any>

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]var resType
    
    
    public var resType:?Int32

**功能：** 资源的类型。

**类型：** ?Int32

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]init(String, String, UInt32, ?Array<Any>, ?Int32)
    
    
    public init(
        bundleName: String,
        moduleName: String,
        id: UInt32,
        params!: ?Array<Any> = None,
        resType!: ?Int32 = None
    )

**功能：** 构造资源类型对象。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
bundleName | String | 是 | - | 应用的bundle名称。  
moduleName | String | 是 | - | 应用的module名称。  
id | UInt32 | 是 | - | 资源的id值。  
params | ?Array<Any> | 否 | None | **命名参数。** 其他资源参数，包括资源名、格式化接口的替换值、复数接口的量词。  
resType | ?Int32 | 否 | None | **命名参数。** 资源的类型。
