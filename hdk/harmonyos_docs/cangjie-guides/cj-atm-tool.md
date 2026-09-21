---
name: cangjie-guides/cj-atm-tool
title: atm工具
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-atm-tool
nodePath: 系统 / 调测调优 / 调试命令 / atm工具
---

# atm工具

Access Token Manager (程序访问控制管理工具，简称atm工具)，是用于查询应用进程的权限、使用类型等信息的工具，为开发者提供了根据tokenid、包名、进程名等信息进行访问控制管理的能力。

#### 环境说明

在使用本工具前，开发者需要先获取[hdc工具](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-hdc)，执行hdc shell。

#### atm工具命令列表

命令 | 描述  
---|---  
help | 帮助命令，显示atm支持的命令信息。  
dump | 查询命令，用于查询访问控制相关数据信息。  
  
#### 帮助命令
    
    
    # 显示帮助信息
    atm help

#### 查询命令
    
    
    atm dump [-h] [-t [-i <token-id>] [-b <bundle-name>] [-n <process-name>]] [-v [-i <token-id>] [-p <permission-name>]]

下表所列命令中，-t、-v为必选参数，-i、-b、-n、-p为可选参数。对atm dump -v命令，-i和-p参数可以组合使用；对atm dump -v命令，-i和-p参数可以组合使用；对atm dump -t命令，-i、-b、-n参数只能单独使用。

参数 | 参数说明  
---|---  
-h | 帮助信息。  
-t | 必选参数，查询系统中所有应用进程信息。  
-t -i <token-id> | 可选参数，通过应用进程的tokenid，查询该应用的基本信息以及对应的[权限信息](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ability_access_ctrl#enum-grantstatus)。  
-t -b <bundle-name> | 可选参数，通过应用进程的包名bundle-name，查询该应用的基本信息以及对应的[权限信息](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ability_access_ctrl#enum-grantstatus)。  
-t -n <process-name> | 可选参数，通过应用进程的进程名process-name，查询该应用的基本信息以及对应的[权限信息](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ability_access_ctrl#enum-grantstatus)。  
-v | 必选参数，查询系统中所有应用进程的权限使用类型。  
-v -i <token-id> | 可选参数，通过应用进程的tokenid，查询该应用的权限使用类型。  
-v -p <permission-name> | 可选参数，通过权限名，查询该权限的使用类型。  
  
示例：
    
    
    #查询系统中所有的权限定义
    atm dump -d
    
    #按权限名查询权限定义
    atm dump -d -p *********
    # 执行结果
    # {
    #     "permissionName": "ohos.permission.KERNEL_ATM_SELF_USE",
    #     "grantMode": SYSTEM_GRANT,
    #     "availableLevel": SYSTEM_CORE,
    #     "availableType": SYSTEM,
    #     "provisionEnable": true,
    #     "distributedSceneEnable": true,
    #     "isKernelEffect": true,
    #     "hasValue": true,
    # }
    
    #显示atm dump的帮助信息
    atm dump -h
    
    #查询系统中所有应用进程的tokenid和包名
    atm dump -t
    
    #按tokenid查询权限信息
    atm dump -t -i *********
    # 执行结果
    # {
    #   "tokenID": 672078897,
    #   "processName": "samgr",
    #   "apl": 2,
    #   "permStateList": [
    #     {
    #       "permissionName": "ohos.permission.DISTRIBUTED_DATASYNC",
    #       "grantStatus": 0,
    #       "grantFlag": 4,
    #     }
    #   ]
    # }
    
    #按包名查询权限信息
    atm dump -t -b ohos.telephony.resources
    # 执行结果
    # {
    #   "tokenID": 537280686,
    #   "tokenAttr": 1,
    #   "ver": 1,
    #   "userId": 100,
    #   "bundleName": "ohos.telephony.resources",
    #   "instIndex": 0,
    #   "dlpType": 0,
    #   "isRemote": 0,
    #   "isPermDialogForbidden": 0,
    #   "permStateList": [
    #     {
    #       "permissionName": "ohos.permission.DISTRIBUTED_DATASYNC",
    #       "grantStatus": 0,
    #       "grantFlag": 4,
    #     }
    #   ]
    # }
    
    #按进程名查询权限信息
    atm dump -t -n *********
    
    #查询所有应用的权限使用类型
    atm dump -v
    #执行结果
    # {
    #   "tokenId": 537088946,
    #   "permissionName": ohos.permission.GET_INSTALLED_BUNDLE_LIST,
    #   "usedType": 0,
    # }
    
    #按应用tokenid查询权限使用类型
    atm dump -v -i *********
    
    #按权限名查询权限使用类型
    atm dump -v -p ohos.permission.CAMERA
    
    #按应用tokenid和权限名查询权限使用类型
    atm dump -v -i ********* -p ohos.permission.CAMERA
