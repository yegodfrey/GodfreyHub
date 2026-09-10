---
name: cangjie-faqs/09-api-permission
title: 仓颉如何申请和检查系统权限
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/09-api-permission
nodePath: FAQ / HarmonyOS API / 仓颉如何申请和检查系统权限
---

# 仓颉如何申请和检查系统权限

仓颉语言开发HarmonyOS应用时，须在配置文件中声明所需权限，部分敏感权限还须在运行时向用户申请授权。

#### 在配置文件中声明权限

在module.json5的requestPermissions字段中声明权限：
    
    
    {
      "module": {
        "requestPermissions": [
          {
            "name": "ohos.permission.INTERNET"
          },
          {
            "name": "ohos.permission.CAMERA",
            "reason": "$string:camera_reason",
            "usedScene": {
              "abilities": ["EntryAbility"],
              "when": "inuse"
            }
          }
        ]
      }
    }

#### 运行时申请授权

对于用户授权类权限（如相机、位置等），须通过AbilityAccessCtrl在运行时申请：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/37/v3/DNgTJipKQuaBcx4-00I8MQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260804T120414Z&HW-CC-Expire=86400&HW-CC-Sign=57B629CED524DF599B62C1BFAB9AB146010EAF18A57CDDF64146B214589B268A)

requestPermissionsFromUser需要传入UIAbilityContext。UIAbilityContext的获取，详见[UIAbilityContext使用说明](https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/01-api-context)。
    
    
    import kit.AbilityKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    import ohos_app_cangjie_entry.global.Global
    
    public func testPermissionRequestCamera(): Unit {
        let atManager = AbilityAccessCtrl.createAtManager()
        let permissionList = ["ohos.permission.CAMERA"]
    
        let resultCallback = {
            errorCode: Option<BusinessException>, data: Option<PermissionRequestResult> => match (errorCode) {
                case Some(e) => Hilog.error(0, "Cangjie Test", "Request error: ${e.code}")
                case None => match (data) {
                    case Some(value) => for (i in (0..value.permissions.size)) {
                        if (value.authResults[i] == 0) {
                            Hilog.info(0, "Cangjie Test", "${value.permissions[i]} granted")
                        } else {
                            Hilog.info(0, "Cangjie Test", "${value.permissions[i]} denied")
                        }
                    }
                    case None => Hilog.error(0, "Cangjie Test", "Result is null")
                }
            }
        }
    
        atManager.requestPermissionsFromUser(Global.uiAbilityContext, permissionList, resultCallback) // Global.uiAbilityContext主要用于存储UIAbilityContext。Global在ohos_app_cangjie_entry.global包中定义
    }

调用testPermissionRequestCamera，应用未被授权，日志输出结果：
    
    
    ohos.permission.CAMERA denied

应用已被授权，日志输出结果：
    
    
    ohos.permission.CAMERA granted

#### 检查权限状态

使用checkAccessToken检查应用是否已获授权：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/71/v3/iVZ7-PMLRvyfAuOhCb9bHg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260804T120414Z&HW-CC-Expire=86400&HW-CC-Sign=60774FBD865927CF4081FC789CD0E4B0072B37B76523165D44E51A603E872C11)

须通过UIAbilityContext获取tokenID实例，用于checkAccessToken传参。UIAbilityContext的获取，详见[UIAbilityContext使用说明](https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/01-api-context)。
    
    
    import kit.AbilityKit.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos_app_cangjie_entry.global.Global
    
    public func testPermissionCheckCamera(): Unit {
        let atManager = AbilityAccessCtrl.createAtManager()
        let tokenID = Global.uiAbilityContext.applicationInfo.accessTokenId // Global.uiAbilityContext主要用于存储UIAbilityContext。Global在ohos_app_cangjie_entry.global包中定义
        let status = atManager.checkAccessToken(tokenID, "ohos.permission.CAMERA")
    
        if (status == GrantStatus.PermissionGranted) {
            Hilog.info(0, "Cangjie Test", "Camera permission granted")
        } else {
            Hilog.info(0, "Cangjie Test", "Camera permission denied")
        }
    }

调用testPermissionCheckCamera，应用未被授权，日志输出结果：
    
    
    Camera permission denied

应用已被授权，日志输出结果：
    
    
    Camera permission granted

#### 权限分类

类型 | 说明 | 示例  
---|---|---  
系统授权 | 安装时自动授予 | ohos.permission.INTERNET  
用户授权 | 运行时须用户确认 | ohos.permission.CAMERA  
受限权限 | 仅系统应用可申请 | ohos.permission.SET_TIME  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3/v3/FLH-iDUwSOqBVCfah-UB3g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260804T120414Z&HW-CC-Expire=86400&HW-CC-Sign=13F32A1B778D74649D143FEBE08F65CC0B6C272E126370648661BBE93B06CB62)

  1. 声明权限须在module.json5中配置，未声明的权限无法申请。
  2. 用户授权类权限须在使用对应功能前申请，用户拒绝后应提供无权限的降级方案。
  3. reason字段须提供权限用途说明，帮助用户理解为何需要该权限。
  4. 使用AbilityAccessCtrl.createAtManager()创建AtManager实例。



更多权限管理的使用方法，详情请参见[应用权限管控](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-permission-mgmt)。
