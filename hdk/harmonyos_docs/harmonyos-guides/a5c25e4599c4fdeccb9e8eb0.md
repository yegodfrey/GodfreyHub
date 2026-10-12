---
name: document/cn/harmonyos-guides/screentimeguard-permission-application
title: 受限ACL权限申请
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/screentimeguard-permission-application
---

# 受限ACL权限申请

调用Screen Time Guard Kit相关能力之前，需要检查是否已经获取"ohos.permission.MANAGE_SCREEN_TIME_GUARD"权限。该权限允许应用调用屏幕时间守护相关接口，进行屏幕使用限制、应用访问控制、管控使用时间等操作。该权限为受限ACL权限，需要特别配置和申请，具体操作步骤如下所示。

1. 在 [申请调试Profile](https://developer.huawei.com/consumer/cn/doc/app/agc-help-debug-profile-0000002248181278)和[发布Profile文件](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-profile-0000002248341090)之前，需要[申请相应的ACL权限](https://developer.huawei.com/consumer/cn/doc/app/agc-help-apply-acl-0000002394212138)。

2. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/)，点击"开发与服务"，在项目列表中找到对应的项目，并点击选择您需要申请ACL权限的应用。在"项目设置"页面，选择"ACL权限"页签，开始为应用申请ACL权限。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8b/v3/I92nhQLUTk-OiurBBxo8hA/zh-cn_image_0000002755184882.png?HW-CC-KV=V1&HW-CC-Date=20261009T092711Z&HW-CC-Expire=31536000000&HW-CC-Sign=DC2FEB38D75AEED5E10A73F3570B6BFEFCBBDBE9FA64A5A34DCE1426CDA54843)
3. 在核对注意事项后，在"未获取权限"区域中勾选"我已知晓"。在权限搜索框中输入"ohos.permission.MANAGE_SCREEN_TIME_GUARD"，查找并勾选权限，提交申请。

4. 根据实际业务需求填写使用场景并提交，审批时间为3个工作日。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5b/v3/ZfRcYuXrTN6lqdmih2EFSQ/zh-cn_image_0000002784583749.png?HW-CC-KV=V1&HW-CC-Date=20261009T092711Z&HW-CC-Expire=31536000000&HW-CC-Sign=818766FB625B68C45A736211F741000DA3E46331DC11360E9DD9D9B317E91E89)
5. 权限申请通过后，在申请profile文件时，在"申请权限"栏选中"受限ACL权限（HarmonyOS API9及以上）"选项，点击"查看"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/97/v3/PMA-LIM_RZW9RYPskboT2A/zh-cn_image_0000002784663929.png?HW-CC-KV=V1&HW-CC-Date=20261009T092711Z&HW-CC-Expire=31536000000&HW-CC-Sign=922D8FECFE545925FF9B9F80CBDE20A9D3C5B965D297C36442CACAB54FD43337)
6. 在弹出的"选择受限ACL权限"窗口可以看到已申请的权限，勾选后点击确定。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c0/v3/ssaSPLd4TFyKsNTaQc7qgQ/zh-cn_image_0000002755024996.png?HW-CC-KV=V1&HW-CC-Date=20261009T092711Z&HW-CC-Expire=31536000000&HW-CC-Sign=82D4E6D950883850352B75A3604AE9F429EAE95FB3AD9C5451B13DCAD0924237)
7. 选择权限后点击"添加"生成新的Profile文件，下载后按[手动配置签名信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing-manual)替换profile文件。

8. 在工程中entry模块的module.json5文件中添加"ohos.permission.MANAGE_SCREEN_TIME_GUARD"权限，如下所示：

   ```JSON5
   "requestPermissions": [{
     "name": "ohos.permission.MANAGE_SCREEN_TIME_GUARD"
   }]
   ```

