---
name: document/cn/harmonyos-faqs/faqs-appgallery-78
title: HarmonyOS权限分类、受限权限审批前调试方法及AGC Profile中权限置灰原因说明
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-appgallery-78
---

# HarmonyOS权限分类、受限权限审批前调试方法及AGC Profile中权限置灰原因说明

#### 问题现象

应用开发过程中需要使用各种权限，具体权限的分类是怎样的？如果需要使用特殊的权限是否需要审批？审批通过前能否先获取权限进行调试？  

#### 背景知识

1. 应用在开发和运行过程中需要用到相应的权限，应用在申请权限时，需在项目的配置文件中逐个声明所需权限，否则无法获取授权，并可能导致应用上架申请被驳回。配置方式可参考[声明权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions)。
2. 权限列表可分为开放权限、[受限开放权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restricted-permissions)（也可称为ACL权限）、[企业类应用可用权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-enterprise-apps)和[仅MDM应用可用权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-mdm-apps)。根据授权方式的不同，权限类型可分为[system_grant（系统授权）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-permission-mgmt-overview#system_grant系统授权)、[user_grant（用户授权）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-permission-mgmt-overview#user_grant用户授权)和[manual_settings（手动设置授权）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-permission-mgmt-overview#manual_settings手动设置授权)。
   * 应用申请了system_grant权限后，系统将在用户安装应用时，自动把相应权限授予给应用。
   * 应用申请user_grant的权限，不仅需要在安装包中申请权限，还需要在应用动态运行时，通过发送弹窗的方式请求用户授权。在用户手动允许授权后，应用才会真正获取相应权限，从而成功访问操作目标对象。
   * 从API 21开始，新增支持manual_settings权限。该类型权限需在安装包中申请，无法通过弹窗请求用户授权，只能由用户在系统设置应用中授权。当用户手动设置授权后，应用才能获取相应权限，从而成功访问目标对象。

<!-- -->

3. [受限开放权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restricted-permissions)仅适用于少量符合特殊场景的应用，需要在通过审批后，才能使用受限权限。在申请前，请审视是否符合受限权限的使用场景。为避免应用的上架申请被驳回，开发者应优先使用Picker/控件等替代方案。[受限开放权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restricted-permissions)列表展示了所有可以申请的权限名称，申请场景，权限级别，授权方式和起始版本。申请方式参考[申请ACL权限](https://developer.huawei.com/consumer/cn/doc/app/agc-help-apply-acl-0000002394212138)。

![](https://media:201788250538800067)  
部分ACL权限只对受邀应用开放，非受邀应用在AGC上无法申请该权限。  

#### 解决方案

申请Profile文件时可以关联受限权限，应用上架必须使用发布Profile，如果受限权限未审批，应用无法上架。但是本地可以使用调试Profile提前获取相关受限权限进行应用调试。提供两种方案：

1. 通过DevEco Studio自动签名完成申请。在自动签名的过程中，将由DevEco Studio完成向AGC申请受限权限的步骤，开发者可直接使用。
   * 在module.json5配置文件的requestPermissions标签中声明需要申请的ACL权限。具体操作可参考[声明权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions)。
   * 使用真机设备连接开发工具DevEco Studio后，进入File \> Project Structure... \> Project \> Signing Configs界面，勾选"Automatically generate signature"即可完成签名。如果未登录，请先单击Sign In进行登录，然后自动完成签名。申请了受限权限页面也会弹窗提示： ![](https://media:201788250538850068 "点击放大")

   * 签名完成后，将鼠标悬停在Provisioning Profile: DevEco Managed Profile后![](https://media:201788250538884069)，也可查看申请的ACL权限信息：

     ![](https://media:201788250538962070 "点击放大")  
     ![](https://media:201788250538996071)  
     只有在[自动签名支持的ACL权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing#section5301916183411)权限列表的权限才可以通过自动签名申请。

<!-- -->

2. 在AGC[创建试用调试Profile](https://developer.huawei.com/consumer/cn/doc/app/agc-help-apply-acl-0000002394212138#section1443958124819)，完成[申请ACL权限](https://developer.huawei.com/consumer/cn/doc/app/agc-help-apply-acl-0000002394212138)后，在审核等待期间，还可以创建试用调试Profile来提前试用您申请的这些权限。试用调试Profile有效期为5天，到期即失效。具体操作指导如下：
   * 在提交ACL权限申请后弹出的提示框中，点击"Profile页面"链接。
   * ![](https://media:201788250539058072)
   * 进入"添加试用调试Profile"页面，配置Profile信息。 ![](https://media:201788250539104073 "点击放大")

   * 添加ACL权限到Profile。 ![](https://media:201788250539160074 "点击放大")

   * 核对Profile信息无误后，点击右上角"添加"，试用调试Profile创建成功。点击"下载"，将生成的Profile保存至本地，供后续签名使用。 ![](https://media:201788250539197075 "点击放大")

     ![](https://media:201788250539229076)  
必须先提交ACL权限申请，才能创建试用调试Profile。不支持直接创建试用调试Profile。  

#### 常见FAQ

Q：一个应用可以创建多少个试用调试Profile？

A：一个应用或元服务最多支持创建5个试用调试Profile。

Q：企业类应用可用权限是什么意思，权限是否需要申请后使用？

A：企业类应用包括企业普通应用和MDM（Mobile Device Management）设备管理应用。企业类应用仅在企业定制设备上运行，不会在普通消费者设备上运行；分发类型分别为enterprise_normal（企业普通应用）和enterprise_mdm（MDM应用）；不会上架华为应用市场。

Q：企业类应用可用权限和仅MDM应用可用权限是否支持自动签名？

A：不支持自动签名，因此在调试和发布阶段，均需参照[手动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing#section297715173233)的步骤，完成手动签名。

Q：在AGC自助ACL权限申请页面搜索不到企业类应用权限（如GET_RUNNING_INFO）怎么办？

A：企业类应用权限（如GET_RUNNING_INFO，ENTERPRISE_NORMAL级）对企业普通应用开放，具体权限列表可参考[企业类应用可用权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-enterprise-apps#ohospermissionget_running_info)。企业类应用权限不在自助ACL列表中，需要先申请企业发布证书，然后才能申请对应的企业ACL权限，具体可参考[申请企业发布证书](https://developer.huawei.com/consumer/cn/doc/app/agc-help-enterprise-cert-0000002248177978#section55531120183018)。

Q：企业类应用权限申请获批后如何配置到Profile中？

A：在申请发布Profile的"添加Profile页面"时，申请使用相应权限即可，具体可参考[添加Profile](https://developer.huawei.com/consumer/cn/doc/architecture-guides/tools-v1_2-ts_127-0000002367462462)。

Q：在AGC添加Profile时，部分权限置灰无法选择是什么原因？

A：权限置灰通常是因为该权限属于企业类应用权限或仅MDM应用可用权限，不在自助ACL权限列表中。需要先申请企业发布证书，然后才能申请对应的企业ACL权限。具体可参考[申请企业发布证书](https://developer.huawei.com/consumer/cn/doc/app/agc-help-enterprise-cert-0000002248177978#section55531120183018)。

Q：在AGC的ACL权限中搜索不到仅MDM应用可用权限（如ENTERPRISE_GET_ALL_BUNDLE_INFO）怎么办？

A：仅MDM应用可用权限（如ohos.permission.ENTERPRISE_GET_ALL_BUNDLE_INFO）不在自助ACL权限列表中，具体权限列表可参考[仅MDM应用可用权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-mdm-apps)。需要先成功申请企业发布证书后，才能申请对应权限，具体可参考[申请企业发布证书](https://developer.huawei.com/consumer/cn/doc/app/agc-help-enterprise-cert-0000002248177978#section55531120183018)。

Q：使用DevEco Studio自动签名时提示受限权限不在支持范围内，签名失败怎么办？

A：并非所有受限权限都支持自动签名，只有[自动签名支持的ACL权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing#section5301916183411)列表中的权限才可以通过自动签名申请。如果声明的受限权限不在该列表中（如ALLOW_USE_JITFORT_INTERFACE），自动签名会失败。建议参照[手动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing#section297715173233)完成签名。

Q：BYOD项目权限申请是否支持所有MDM权限？

A：是的，MDM KIT的权限是开放申请的，权限没有区别。

Q：PC访问用户账号目录需要什么权限？

A：需要申请ohos.permission.READ_WRITE_USER_FILE权限，该权限属于[受限开放权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/restricted-permissions#ohospermissionread_write_user_file)（ACL受限权限），允许应用访问并修改用户目录下的文件。当前仅PC/2in1设备应用可申请此权限，需要在AGC上完成审批后才能使用。  
