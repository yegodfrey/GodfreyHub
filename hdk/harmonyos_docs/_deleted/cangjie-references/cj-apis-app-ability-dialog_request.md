---
name: cangjie-references/cj-apis-app-ability-dialog_request
title: ohos.app.ability.dialog_request
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-dialog_request
nodePath: 应用框架 / Ability Kit（程序框架服务） / 仓颉API / ohos.app.ability.dialog_request
---

# ohos.app.ability.dialog_request  
  
dialog_request模块提供处理模态弹框的能力，包括获取RequestInfo（用于绑定模态弹框）、获取RequestCallback（用于设置结果）。

模态弹框是指一个系统弹框，该弹框会拦截弹框之下的页面的鼠标、键盘、触屏等事件。销毁该弹框后，才能对页面进行操作。

#### 导入模块
    
    
    import kit.AbilityKit.*

#### 权限列表

ohos.permission.DISTRIBUTED_DATASYNC

ohos.permission.PREPARE_APP_TERMINATE

ohos.permission.PRIVACY_WINDOW

#### 使用说明

API示例代码使用说明：

  * 若示例代码首行有“// index.cj”注释，表示该示例可在仓颉模板工程的“index.cj”文件中编译运行。
  * 若示例需获取[Context](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-context)应用上下文，需在仓颉模板工程中的“main_ability.cj”文件中进行配置。



上述示例工程及配置模板详见[仓颉示例代码说明](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro#仓颉示例代码说明)。

#### class RequestResult
    
    
    public class RequestResult {
        public var result: ResultCode
        public var want: Want
    }

**功能：** 模态弹框请求结果，包含结果码ResultCode和请求结果Want。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]var result
    
    
    public var result: ResultCode

**功能：** 表示结果码。

**类型：** ResultCode

**读写能力：** 可读写

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]var want
    
    
    public var want: Want

**功能：** 表示Want类型信息，如ability名称，包名等。

**类型：** [Want](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-want#class-want)

**读写能力：** 可读写

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### enum ResultCode
    
    
    public enum ResultCode {
        | ResultOk
        | ResultCancel
        | ...
    }

**功能：** 模态弹框请求结果码。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]ResultCancel
    
    
    ResultCancel

**功能：** 表示失败。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]ResultOk
    
    
    ResultOk

**功能：** 表示成功。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22
