---
name: cangjie-releases/cj-os-new-feature-2600
title: OS新增和增强特性
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-releases/cj-os-new-feature-2600
nodePath: 版本说明 / HarmonyOS 26.0.0-仓颉 / OS平台能力 / OS新增和增强特性
---

# OS新增和增强特性

#### 26.0.0 Release（仓颉Beta2）关键特性

无新增和增强特性

#### 26.0.0 Beta2（仓颉Beta1）关键特性

#### [h2]ArkUI（方舟UI框架）

  * ohos.arkui.ui_context包新增61个API，以支持设置LevelMode实现页面级弹窗。API详情请参见[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-promptaction)。
  * ohos.base包新增AUTO接口，支持部分组件通过AUTO设置长度。API详情请参见[API参考](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#static-let-auto)。



#### [h2]BasicServicesKit （基础服务）

  * DeviceInfo新增prop sdkPatchApiVersion用于获取系统软件Patch API版本。
  * 新增prop sdkMinorApiVersion用户获取系统软件Minor API版本。
  * 新增“func apiAvailable(version: String): Bool”用于检查指定的API版本在当前设备上是否可用。
  * 新增“func apiAvailable(version: Int32): Bool”支持整数版本号，用于检查指定的API版本在当前设备上是否可用。



#### [h2]Cangjie Kit（仓颉）

互操作库JSModule中，新增registerModule接口，用于根据模块名注册模块，防止导入模块冲突。
