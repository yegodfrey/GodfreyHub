---
name: cangjie-guides/cj-app-permission-group-list
title: 应用权限组列表
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-app-permission-group-list
nodePath: 系统 / 安全 / 程序访问控制 / 应用权限管控 / 应用权限组列表
---

# 应用权限组列表

#### 使用须知

  * 在申请目标权限前，建议开发者先阅读[应用权限管控概述-权限组和子权限](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-app-permission-mgmt-overview#权限组和子权限)，了解相关概念，再合理申请对应的权限组。

  * 当应用请求权限时，同一个权限组的权限将会在一个弹窗内一起请求用户授权，用户同意授权后，权限组内权限将被统一授权。地理位置、通讯录、通话记录、电话、信息、日历权限组除外。

以位置信息和相机权限组举例说明：

    * 当应用只申请了权限ohos.permission.APPROXIMATELY_LOCATION（属于位置信息权限组）时，应用用户将收到一个请求位置信息的弹窗，包含单个权限的申请。
    * 当应用同时申请权限ohos.permission.APPROXIMATELY_LOCATION和ohos.permission.LOCATION（均属于位置信息权限组）时，应用用户将收到一个请求位置信息的弹窗，包含两个权限的申请。
    * 当应用同时申请权限ohos.permission.APPROXIMATELY_LOCATION（属于位置信息权限组）和ohos.permission.CAMERA（属于相机权限组）时，应用用户将收到请求位置信息、请求使用相机的两个弹窗。
  * 当前系统支持的权限组如下所示，各子权限的含义请查阅[应用权限列表](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-permissions-for-all-user)。




#### 位置信息

  * [ohos.permission.LOCATION_IN_BACKGROUND](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-permissions-for-all-user#ohospermissionlocation_in_background)
  * [ohos.permission.LOCATION](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-permissions-for-all-user#ohospermissionlocation)
  * [ohos.permission.APPROXIMATELY_LOCATION](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-permissions-for-all-user#ohospermissionapproximately_location)



#### 相机

  * [ohos.permission.CAMERA](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-permissions-for-all-user#ohospermissioncamera)



#### 麦克风

  * [ohos.permission.MICROPHONE](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-permissions-for-all-user#ohospermissionmicrophone)



#### 通讯录

  * [ohos.permission.READ_CONTACTS](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-restricted-permissions#ohospermissionread_contacts)
  * [ohos.permission.WRITE_CONTACTS](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-restricted-permissions#ohospermissionwrite_contacts)



#### 日历

  * [ohos.permission.READ_CALENDAR](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-permissions-for-all-user#ohospermissionread_calendar)
  * [ohos.permission.WRITE_CALENDAR](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-permissions-for-all-user#ohospermissionwrite_calendar)



#### 运动数据

  * [ohos.permission.ACTIVITY_MOTION](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-permissions-for-all-user#ohospermissionactivity_motion)



#### 身体传感器

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d6/v3/EMXEKsE7R5ejvELxx5Ir9w/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090126Z&HW-CC-Expire=86400&HW-CC-Sign=102713643EFA368456CBABE039B4B9E282000758C21D2FD284467FBB5C770247)

仅穿戴设备可申请。

  * [ohos.permission.READ_HEALTH_DATA](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-permissions-for-all-user#ohospermissionread_health_data)



#### 图片和视频

  * [ohos.permission.WRITE_IMAGEVIDEO](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-restricted-permissions#ohospermissionwrite_imagevideo)
  * [ohos.permission.READ_IMAGEVIDEO](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-restricted-permissions#ohospermissionread_imagevideo)
  * [ohos.permission.MEDIA_LOCATION](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-permissions-for-all-user#ohospermissionmedia_location)



#### 音乐和音频

  * [ohos.permission.WRITE_AUDIO](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-restricted-permissions#ohospermissionwrite_audio)
  * [ohos.permission.READ_AUDIO](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-restricted-permissions#ohospermissionread_audio)



#### 跨应用关联

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a9/v3/i4j7Yp9uTnGgGlzdXeGFNw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090126Z&HW-CC-Expire=86400&HW-CC-Sign=D9D818A0748D2019F192B24D8C54AEE72532D875408CBCB2B2F65B7733346352)

在申请此权限时，是否弹窗向用户请求授权，取决于“要求应用请求关联”的开关状态。

  * 如果开关关闭，当应用请求权限时，系统不会弹窗，默认授予应用权限。
  * 如果开关开启，当应用请求权限时，系统将弹窗，需要用户确认才能授予应用权限。



“要求应用请求关联”的开关状态可在“设置 > 隐私与安全 > 跨应用关联”页面中查看。

  * [ohos.permission.APP_TRACKING_CONSENT](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-permissions-for-all-user#ohospermissionapp_tracking_consent)



#### 设备发现和连接

  * [ohos.permission.ACCESS_BLUETOOTH](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-permissions-for-all-user#ohospermissionaccess_bluetooth)
  * [ohos.permission.ACCESS_NEARLINK](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-permissions-for-all-user#ohospermissionaccess_nearlink)
  * [ohos.permission.DISTRIBUTED_DATASYNC](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-permissions-for-all-user#ohospermissiondistributed_datasync)



#### 剪切板

  * [ohos.permission.READ_PASTEBOARD](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-restricted-permissions#ohospermissionread_pasteboard)



#### 截屏

  * [ohos.permission.CUSTOM_SCREEN_CAPTURE](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-permissions-for-all-user#ohospermissioncustom_screen_capture)



#### 文件

  * 读取媒体库音频文件：

申请受限权限[ohos.permission.READ_AUDIO](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-restricted-permissions#ohospermissionread_audio)或[ohos.permission.WRITE_AUDIO](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-restricted-permissions#ohospermissionwrite_audio)读写媒体库的音频文件。



