---
name: cangjie-references/cj-apis-raw_file_descriptor
title: ohos.raw_file_descriptor
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-raw_file_descriptor
nodePath: 应用框架 / Localization Kit（本地化开发服务） / 仓颉API / ohos.raw_file_descriptor
---

# ohos.raw_file_descriptor

raw_file_descriptor模块表示rawfile的描述符信息。

#### 导入模块
    
    
    import kit.LocalizationKit.*

#### 使用说明

API示例代码使用说明：

  * 若示例代码首行有“// index.cj”注释，表示该示例可在仓颉模板工程的“index.cj”文件中编译运行。
  * 若示例需获取[Context](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-context)应用上下文，需在仓颉模板工程中的“main_ability.cj”文件中进行配置。



上述示例工程及配置模板详见[仓颉示例代码说明](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro#仓颉示例代码说明)。

#### class RawFileDescriptor
    
    
    public class RawFileDescriptor {
        public var fd: Int32
        public var offset: Int64
        public var length: Int64
    }

**功能：** 表示rawfile文件所在HAP的文件描述符（fd）。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]var fd
    
    
    public var fd: Int32

**功能：** 文件描述符。

**类型：** Int32

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]var length
    
    
    public var length: Int64

**功能：** 文件长度。

**类型：** Int64

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本���** 22

#### [h2]var offset
    
    
    public var offset: Int64

**功能：** 起始偏移量。

**类型：** Int64

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22
