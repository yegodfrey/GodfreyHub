---
name: cangjie-guides/cj-one-time-authorization
title: 向用户申请单次授权
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-one-time-authorization
nodePath: 系统 / 安全 / 程序访问控制 / 应用权限管控 / 申请应用权限 / 向用户申请单次授权
---

# 向用户申请单次授权

基于授权最小化的原则，防止应用获取和滥用用户数据，针对部分应用敏感权限，在弹窗向用户申请授权时，新增“允许本次使用”的授权选项。

开发者在开发应用时，无需额外配置，仍然调用requestPermissionsFromUser()[向用户申请授权](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-request-user-authorization)，系统会根据该能力支持的权限，弹出对应的弹窗。

授权弹窗如下图所示：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0/v3/uoKo0v-HRgObi4omc9gOOA/zh-cn_image_0000002713398870.png?HW-CC-KV=V1&HW-CC-Date=20260908T090126Z&HW-CC-Expire=86400&HW-CC-Sign=79363D102070357DCFC54FD82C88B0ADE1D339D055A3808524F4086BC2C488C1)

同时，用户可以在“设置”中修改授权。修改路径：设置 > 隐私 > 权限管理 > 应用 > 目标应用 > 位置信息。

#### 支持范围

当前仅支持下列权限，当应用向用户申请下列权限时，弹窗将会出现“允许本次使用”的授权选项，设置中修改权限将会出现“每次询问”授权选项。

  * 剪切板：["ohos.permission.READ_PASTEBOARD"](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-restricted-permissions#ohospermissionread_pasteboard)
  * 模糊位置：["ohos.permission.APPROXIMATELY_LOCATION"](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-permissions-for-all-user#ohospermissionapproximately_location)
  * 位置：["ohos.permission.LOCATION"](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-permissions-for-all-user#ohospermissionlocation)
  * 后台位置：["ohos.permission.LOCATION_IN_BACKGROUND"](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-permissions-for-all-user#ohospermissionlocation_in_background)



#### 使用限制

  * 当用户点击了“允许本次使用”按钮，将会对应用授予临时的权限。并启动计时器，十秒之后，取消临时权限，想要再次获取，需要重新授予。

  * 当用户在权限设置中选择了“每次询问”按钮，将会对应用授予模糊位置与位置临时权限，取消临时授权同上。



