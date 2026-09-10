---
name: cangjie-guides/cj-permissions-for-all-user
title: 开放权限（用户授权）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-permissions-for-all-user
nodePath: 系统 / 安全 / 程序访问控制 / 应用权限管控 / 应用权限列表 / 开放权限（用户授权）
---

# 开放权限（用户授权）

此列表内所有权限均为用户授权（user_grant）的开放权限，面向所有应用开放。

该类型权限不仅需要在安装包中申请权限，还需要在应用动态运行时，通过发送弹窗的方式请求用户授权。在用户手动允许授权后，应用才会真正获取相应权限，从而成功访问操作目标对象。

#### 申请方式

以下权限的授权方式均为[user_grant（用户授权）](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-app-permission-mgmt-overview#user_grant用户授权)，申请方式请参见[声明权限](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-declare-permissions) > [向用户申请授权](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-request-user-authorization) 。

#### 权限列表

#### [h2]ohos.permission.ACCESS_BLUETOOTH

允许应用接入蓝牙并使用蓝牙能力，例如配对、连接外围设备等。

**权限级别：** normal

**授权方式：** 用户授权（user_grant）

**起始版本：** 12

#### [h2]ohos.permission.MEDIA_LOCATION

允许应用访问用户媒体文件中的地理位置信息。

**权限级别：** normal

**授权方式：** 用户授权（user_grant）

**起始版本：** 12

#### [h2]ohos.permission.APP_TRACKING_CONSENT

允许应用读取开放匿名设备标识符。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/54/v3/3rNkdEb5QNK6oimC5z80hw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090126Z&HW-CC-Expire=86400&HW-CC-Sign=5CB32C144CBF55ED8E413A54DB311B25F79D2041BD65A97B80DE1DDFBAA39476)

在申请此权限时，是否弹窗向用户请求授权，取决于“要求应用请求关联”的开关状态。

  * 如果开关关闭，当应用请求权限时，系统不会弹窗，默认授予应用权限。
  * 如果开关开启，当应用请求权限时，系统将弹窗，需要用户确认才能授予应用权限。



“要求应用请求关联”的开关状态可在“设置 > 隐私与安全 > 跨应用关联”页面中查看。

**权限级别：** normal

**授权方式：** 用户授权（user_grant）

**起始版本：** 12

#### [h2]ohos.permission.ACTIVITY_MOTION

允许应用读取用户的运动状态。

**权限级别：** normal

**授权方式：** 用户授权（user_grant）

**起始版本：** 12

#### [h2]ohos.permission.CAMERA

允许应用使用相机。

**权限级别：** normal

**授权方式：** 用户授权（user_grant）

**起始版本：** 12

#### [h2]ohos.permission.DISTRIBUTED_DATASYNC

允许不同设备间的数据交换。

**权限级别：** normal

**授权方式：** 用户授权（user_grant）

**起始版本：** 12

#### [h2]ohos.permission.LOCATION_IN_BACKGROUND

允许应用在后台运行时获取设备位置信息。

由于安全隐私要求，应用不能通过弹窗的形式被授予后台位置权限，应用如果需要使用后台位置权限，需要引导用户到设置界面手动授予。

**申请流程：**

  1. 在“module.json5”配置文件中[声明权限](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-declare-permissions)。

由于在申请后台权限前，必须先申请前台位置权限，因此开发者在配置时，应同时配置后台位置权限ohos.permission.LOCATION_IN_BACKGROUND和前台位置权限。前台位置权限的申请有两种允许情况：

     * 申请前台模糊位置权限：ohos.permission.APPROXIMATELY_LOCATION。
     * 申请前台精确位置权限：ohos.permission.APPROXIMATELY_LOCATION和ohos.permission.LOCATION。
  2. 应用需通过弹窗向用户申请对应的前台位置权限。

  3. 当用户点击弹窗授予前台位置权限后，应用应通过弹窗、提示窗等形式告知用户前往设置界面授予后台位置权限。

  4. 用户在设置界面中的选择“始终允许”应用访问位置信息权限，完成手动授予。

设置路径：



  * 路径一：设置 > 隐私与安全 > 位置 > 具体应用
    * 路径二：设置 > 应用和元服务 > 具体应用 > 位置



**权限级别：** normal

**授权方式：** 用户授权（user_grant）

**起始版本：** 12

#### [h2]ohos.permission.LOCATION

允许应用获取设备位置信息。

**申请条件：** 需要与模糊位置权限ohos.permission.APPROXIMATELY_LOCATION一起，才可申请此权限。

**权限级别：** normal

**授权方式：** 用户授权（user_grant）

**起始版本：** 12

#### [h2]ohos.permission.APPROXIMATELY_LOCATION

允许应用获取设备模糊位置信息。

**权限级别：** normal

**授权方式：** 用户授权（user_grant）

**起始版本：** 12

#### [h2]ohos.permission.MICROPHONE

允许应用使用麦克风。

**权限级别：** normal

**授权方式：** 用户授权（user_grant）

**起始版本：** 12

#### [h2]ohos.permission.READ_CALENDAR

允许应用读取日历信息。

**权限级别：** normal

**授权方式：** 用户授权（user_grant）

**起始版本：** 12

#### [h2]ohos.permission.WRITE_CALENDAR

允许应用添加、移除或更改日历活动。

**权限级别：** normal

**授权方式：** 用户授权（user_grant）

**起始版本：** 12

#### [h2]ohos.permission.READ_HEALTH_DATA

允许应用读取用户的健康数据。

**权限级别：** normal

**授权方式：** 用户授权（user_grant）

**起始版本：** 12

#### [h2]ohos.permission.ACCESS_NEARLINK

允许应用接入星闪并使用星闪能力，例如配对、连接外围设备等。

**权限级别：** normal

**授权方式：** 用户授权（user_grant）

**起始版本：** 12

#### [h2]ohos.permission.READ_WRITE_DOWNLOAD_DIRECTORY

允许应用访问公共目录下Download目录及子目录。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f6/v3/rI1kwpmBS3iU4nETQWYD0A/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090126Z&HW-CC-Expire=86400&HW-CC-Sign=D003925138299986049ABA96702DBA70724C2309A8973E16797D550591D30CAF)

该权限级别发生变更，为保证兼容性，在当前版本请继续采用[受限权限申请方式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions-in-acl)申请使用该权限。

**权限级别：** normal

**授权方式：** 用户授权（user_grant）

**支持设备：** Tablet

**起始版本：** 12

#### [h2]ohos.permission.READ_WRITE_DOCUMENTS_DIRECTORY

允许应用访问公共目录下的Documents目录及子目录。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e0/v3/YQT38oZFRdmJGy3ATa2rwA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090126Z&HW-CC-Expire=86400&HW-CC-Sign=9F5EEF0B44F13A0FDB8507FB5ABF9F61E3807BF4482A98C6F37C3426AF8F2F15)

该权限级别发生变更，为保证兼容性，在当前版本请继续采用[受限权限申请方式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions-in-acl)申请使用该权限。

**权限级别：** normal。

**授权方式：** 用户授权（user_grant）

**支持设备：** Tablet

**起始版本：** 12

#### ohos.permission.CUSTOM_SCREEN_CAPTURE

允许应用获取屏幕图像。

应用获取此权限后，可进行截屏等操作。

**权限级别：** system_basic

**授权方式：** 用户授权（user_grant）

**支持设备：** Tablet

**起始版本：** 12
