---
name: cangjie-references/cj-apis-ability_access_ctrl
title: ohos.ability_access_ctrl（程序访问控制管理）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ability_access_ctrl
nodePath: 应用框架 / Ability Kit（程序框架服务） / 仓颉API / ohos.ability_access_ctrl（程序访问控制管理）
---

# ohos.ability_access_ctrl（程序访问控制管理）

程序访问控制管理模块提供程序的权限管理能力，包括鉴权、授权和取消授权等。

#### 导入模块
    
    
    import kit.AbilityKit.*

#### 使用说明

API示例代码使用说明：

  * 若示例代码首行有“// index.cj”注释，表示该示例可在仓颉模板工程的“index.cj”文件中编译运行。
  * 若示例需获取[Context](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-context)应用上下文，需在仓颉模板工程中的“main_ability.cj”文件中进行配置。



上述示例工程及配置模板详见[仓颉示例代码说明](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro#仓颉示例代码说明)。

#### class AbilityAccessCtrl
    
    
    public class AbilityAccessCtrl {}

**功能：** 此类用于创建AtManager，AtManager为管理访问控制模块的实例。

**系统能力：** SystemCapability.Security.AccessToken

**起始版本：** 22

#### [h2]static func createAtManager()
    
    
    public static func createAtManager(): AtManager

**功能：** 创建程序管理访问控制模块的实例对象。

**系统能力：** SystemCapability.Security.AccessToken

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
AtManager | 管理访问控制模块的实例。  
  
**示例：**
    
    
    // index.cj
    
    import kit.AbilityKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let atManager: AtManager = AbilityAccessCtrl.createAtManager()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class AtManager
    
    
    public class AtManager {}

**功能：** 管理访问控制模块的实例。

**系统能力：** SystemCapability.Security.AccessToken

**起始版本：** 22

#### [h2]func checkAccessToken(UInt32, Permissions)
    
    
    public func checkAccessToken(tokenID: UInt32, permissionName: Permissions): GrantStatus

**功能：** 校验应用是否授予权限。

**系统能力：** SystemCapability.Security.AccessToken

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
tokenID | UInt32 | 是 | - | 要校验的目标应用的身份标识。可通过应用的[ApplicationInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-bundle_manager#class-applicationinfo)的accessTokenId字段获得。  
permissionName | Permissions | 是 | - | 需要校验的权限名称，合法的权限名取值可在[应用权限列表](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-app-permissions)中查询。  
  
**返回值：**

类型 | 说明  
---|---  
GrantStatus | 返回授权状态结果。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[访问控制错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-access-token)。

错误码ID | 错误信息  
---|---  
12100001 | Invalid parameter. The tokenID is 0, or the permissionName exceeds 256 characters.  
  



**示例：**
    
    
    // index.cj
    
    import kit.AbilityKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let atManager = AbilityAccessCtrl.createAtManager()
        let tokenID : UInt32 = 1 // tokenID系统应用可以通过bundleManager.getApplicationInfo获取，普通应用可以通过bundleManager.getBundleInfoForSelf获取
        let status = atManager.checkAccessToken(tokenID, "ohos.permission.READ_CONTACTS")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func requestPermissionsFromUser(UIAbilityContext, Array<Permissions>, AsyncCallback<PermissionRequestResult>)
    
    
    public func requestPermissionsFromUser(context: UIAbilityContext, permissionList: Array<Permissions>,
        requestCallback: AsyncCallback<PermissionRequestResult>): Unit

**功能：** 用于拉起弹框请求用户授权。

如果用户拒绝授权，将无法再次拉起弹框，需要用户在系统应用“设置”的界面中，手动授予权限。

**系统能力：** SystemCapability.Security.AccessToken

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
context | [UIAbilityContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiabilitycontext) | 是 | - | 请求权限的UIAbility的Context。  
permissionList | Array<Permissions> | 是 | - | 权限名列表，合法的权限名取值可在[应用权限列表](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-app-permissions)中查询。  
requestCallback | AsyncCallback<[PermissionRequestResult](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-sercurity-permission_request_result#class-permissionrequestresult)> | 是 | - | 回调函数，返回接口调用是否成功的结果。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[访问控制错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-access-token)。

错误码ID | 错误信息  
---|---  
12100009 | Common inner error. An error occurs when creating the pop-up window or obtaining user operation results.  
  



**示例：**
    
    
    // index.cj
    
    import kit.AbilityKit.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos.business_exception.*
    import ohos.business_exception.BusinessException
    
    try {
        // 此处代码可添加在依赖项定义中
        var resultCallback = {
            errorCode: Option<BusinessException>, data: Option<PermissionRequestResult> => match (errorCode) {
                case Some(e) => Hilog.error(0, "AppLogCj", "permissionResultCallBack request error: errcode is ${e.code}")
                case _ =>
                    match (data) {
                        case Some(value) =>
                            for (i in (0..value.permissions.size)) {
                                Hilog.info(0, "AppLogCj", "CallBack: ${value.permissions[i]} - ${value.authResults[i]}")
                            }
                        case _ => Hilog.error(0, "AppLogCj", "permissionResultCallBack request error: data is null")
                    }
            }
        }
    
        let ctx = Global.abilityContext // 此处需手动配置模板，获取Context上下文。上下文获取方式请参见使用说明。
        let atManager = AbilityAccessCtrl.createAtManager()
        let permissionList = ["ohos.permission.READ_CONTACTS", "ohos.permission.CAMERA"]
        atManager.requestPermissionsFromUser(ctx, permissionList, resultCallback)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### enum GrantStatus
    
    
    public enum GrantStatus <: Equatable<GrantStatus> & ToString {
        | PermissionDenied
        | PermissionGranted
        | ...
    }

**功能：** 表示授权状态的枚举。

**系统能力：** SystemCapability.Security.AccessToken

**起始版本：** 22

**父类型：**

  * Equatable<GrantStatus>
  * ToString



#### [h2]PermissionDenied
    
    
    PermissionDenied

**功能：** 表示未授权。

**系统能力：** SystemCapability.Security.AccessToken

**起始版本：** 22

#### [h2]PermissionGranted
    
    
    PermissionGranted

**功能：** 表示已授权。

**系统能力：** SystemCapability.Security.AccessToken

**起始版本：** 22

#### [h2]func !=(GrantStatus)
    
    
    public operator func !=(other: GrantStatus): Bool

**功能：** 对授权状态进行判不等。

**系统能力：** SystemCapability.Security.AccessToken

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | GrantStatus | 是 | - | 授权状态。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果授权状态不同，返回true，否则返回false。  
  
#### [h2]func ==(GrantStatus)
    
    
    public operator func ==(other: GrantStatus): Bool

**功能：** 对授权状态进行判等。

**系统能力：** SystemCapability.Security.AccessToken

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | GrantStatus | 是 | - | 授权状态。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果授权状态相同，返回true，否则返回false。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 返回授权状态的字符串表示。

**系统能力：** SystemCapability.Security.AccessToken

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 授权状态的字符串表示。  
  
#### type Permissions
    
    
    public type Permissions = String

**功能：** 表示权限名称，是String类型的别名。
