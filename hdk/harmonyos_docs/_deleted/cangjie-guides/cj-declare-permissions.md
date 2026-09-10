---
name: cangjie-guides/cj-declare-permissions
title: 声明权限
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-declare-permissions
nodePath: 系统 / 安全 / 程序访问控制 / 应用权限管控 / 申请应用权限 / 声明权限
---

# 声明权限

应用在申请权限时，需要在项目的配置文件中，逐个声明需要的权限，否则应用将无法获取授权，并可能导致应用上架申请被驳回。

#### 在配置文件中声明权限

应用需要在module.json5配置文件的requestPermissions标签中声明权限。

属性 | 含义 | 数据类型 | 取值范围  
---|---|---|---  
name | 需要使用的权限名称。 | 字符串 | **必填** ，需为系统已定义的权限，取值范围请参见[应用权限列表](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-permissions-for-all)。  
reason | 申请权限的原因。 | 字符串 | **可选填写** ，该字段用于应用上架校验，当申请的权限为user_grant权限时必填，并且需要进行多语种适配。 使用string类资源引用。格式为$string: ***。 请参见权限使用理由的文案内容规范。  
usedScene | 权限使用的场景，该字段用于应用上架校验。包括abilities和when两个子项。 \- abilities：使用权限的UIAbility或者ExtensionAbility组件的名称。 \- when：调用时机。 | 对象 | usedScene**必填** 。 \- abilities：**可选填写** ，可以配置为多个UIAbility或者ExtensionAbility名称的字符串数组。 \- when：**可选填写** ，但如果配置此字段，只能填入固定值inuse（使用时）、always（始终），不能为空。 当申请的权限为user_grant权限时建议填写。  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ee/v3/UhPF5D4gRjWI9ypXVKTTuQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111607Z&HW-CC-Expire=86400&HW-CC-Sign=372C5AC76E5D4C9FCB34CF4BFE864FBE2B4777C5AE0BD5103ED83B00376F568E)

已在子模块中申请的权限，无需在主项目重复添加，权限将在整个应用生效。

#### 声明样例

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9a/v3/nFKwfwriTuy0oJiTYaBgnQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111607Z&HW-CC-Expire=86400&HW-CC-Sign=52B24397A9A140D2C3AA3C4CE9F4F429BCA95333F0EB6DF4C1E86F7719F3D8C6)

以下"ohos.permission.PERMISSION1"、"ohos.permission.PERMISSION2"仅为样例示意，不存在该权限。请开发者根据实际需要，参照上表要求填写对应属性。
    
    
    // src/main/resources/base/element/string.json
    {
      "string": [
        // ...
        {
          "name": "reason",
          "value": "reason_for_permission"
        }
      ]
    }
    
    
    // src/main/module.json5
    {
      "module" : {
        // ...
        "requestPermissions":[
          {
            "name" : "ohos.permission.PERMISSION1",
            "reason": "$string:reason",
            "usedScene": {
              "abilities": [
                "EntryAbility"
              ],
              "when":"inuse"
            }
          },
          {
            "name" : "ohos.permission.PERMISSION2",
            "reason": "$string:reason",
            "usedScene": {
              "abilities": [
                "EntryAbility"
              ],
              "when":"always"
            }
          }
        ]
      }
    }

#### 权限使用理由的文案内容规范

当申请的权限为user_grant权限时，字段reason（申请权限的原因）必填。开发者需要在应用配置文件中，配置每一个需要使用的权限。

但在实际向用户弹窗申请授权时，user_grant权限将会以[权限组](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-app-permission-mgmt-overview#权限组和子权限)的形式向用户申请。当前支持的权限组请查看[应用权限组列表](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-app-permission-group-list)。

#### [h2]reason字段的内容写作规范及建议

  1. 权限使用理由应准确告知用户获取权限后用于什么场景/功能。

未明确告知用户实际使用场景/功能、权限使用理由和实际调用权限功能不符合将会导致权限申请被驳回，进而导致应用上架申请被驳回。

**样例** ：以申请相机权限的reason字符串为例。

正例：用于视频通话/拍照。

反例（未明确告知用户实际使用场景/功能）：使用相机；获取相机权限；需要权限。

反例（权限使用理由和实际调用权限功能不符）：录制音频用于语音聊天；获取蓝牙权限用于多设备之间传输文件。

如需了解更多权限使用理由的案例讲解，可参考[隐私合规问题小学堂——未同步告知权限的使用目的](https://developer.huawei.com/consumer/cn/forum/topic/0208158494714878699?fid=0102104600515103427)。

  2. 字串应为直白、具体、易理解的完整短句， 用于向用户说明应用使用敏感权限的理由。句子避免使用被动语态，并以句号结尾。

     * **建议句式** ：用于做某事。

     * **样例** ：以申请相机权限的reason字符串为例。

正例：用于视频通话。

  3. 用途描述的字串建议小于72个字符（即36个中文字符，UI界面显示大约为两行）。不能超过256个字符，以保证多语言适配的体验。

  4. 字串不能为空白字符串，即不能不填，也不能只填空格符。

  5. 如果应用申请的权限用于多个场景，需要确保字串的完整性，让用户了解应用使用此权限的所有场景；多个HAP包内如果申请同一个权限，各个权限Reason字段需要保持场景的完整性和一致性。

**样例：**

应用中有2个HAP包，均需申请使用相机权限，其中HAP1提供功能场景为视频通话、HAP2提供功能场景为视频直播。

正例：HAP1和HAP2中，相机权限的使用理由都填写为“用于视频通话、视频直播功能。”

反例1：HAP1和HAP2中，相机权限的使用理由字段未保持完全一致。如HAP1中填写为“用于视频通话功能。”，HAP2中填写为“用于视频直播功能。”

反例2：HAP1和HAP2中，相机权限的使用理由字段保持完全一致，但是描述不全面，如HAP1和HAP2中，相机权限的使用理由都填写为“用于视频通话功能。”。




#### [h2]权限使用理由展示方式

权限使用理由有两个展示途径：授权弹窗界面和“设置（Settings）”界面。“设置”的具体路径：设置-隐私-权限管理-某应用某权限详情。

  1. 如果是申请“电话、信息、日历、通讯录、通话记录”这五个权限组中的权限，根据工信部要求，将展示具体子权限的内容与用途。

**句式：** 包括子权限A和子权限B，用于某事。

**样例：** 用于获取通话状态和移动网络信息，用于安全运营和统计计费服务。

  2. 如果是申请其他权限组中的权限，系统将使用权限组内当前被申请的第一个子权限的使用理由，作为该权限组的使用理由进行展示。组内的排序，固定按照权限管理内排列的权限组数组顺序。

举例说明：权限组A = {权限A, 权限B, 权限C}；申请传入的权限是{权限C, 权限B}，界面将展示权限B的权限使用理由。



