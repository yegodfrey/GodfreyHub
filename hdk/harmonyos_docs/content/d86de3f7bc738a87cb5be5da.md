---
name: document/cn/content/watch-face-test-pro-0000001633927113
title: 上表测试
uri: https://developer.huawei.com/consumer/cn/doc/content/watch-face-test-pro-0000001633927113
---

# 上表测试

支持在配对的手表/手环设备上测试您的表盘。

## 开发者模式测试

1. 登录Theme Studio Pro，在工具右上角点击个人头像，下拉显示"我的设备"，点击进去。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b9/v3/q28NH_E6ThShoLYRfltZ2A/zh-cn_image_0000002629785602.png?HW-CC-KV=V1&HW-CC-Date=20260924T094631Z&HW-CC-Expire=31536000000&HW-CC-Sign=395AFFF15549938E2EA1A501FD3C409F4ED9C9E2986B7BE8C5ED64454DFD3D0F "点击放大")

2. 输入设备的类型、自定义名称、测试设备的ODID，确认添加设备。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d2/v3/UOlcbqDIS7a50SgkwpF7sw/zh-cn_image_0000002659945105.png?HW-CC-KV=V1&HW-CC-Date=20260924T094631Z&HW-CC-Expire=31536000000&HW-CC-Sign=152FEAC8DD036EFDD797E8DF5C3737D9B6F083ADC849C9A740A8B7CBBE859477 "点击放大")
   > 说明
   >
   > ODID在华为主题APP里的开发者模式里查看，支持一键复制。

3. 添加完设备后，要绑定设备，设备状态显示"已绑定"才算是激活设备，允许推送表盘。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/2HM5wlggS8Oq-Wt0-iM9ug/zh-cn_image_0000002629689234.png?HW-CC-KV=V1&HW-CC-Date=20260924T094631Z&HW-CC-Expire=31536000000&HW-CC-Sign=F8D0EE42DA6DA8B471C6901BE2B17CC16E61FD40D355F7BEEE02762E64697E00 "点击放大")
   > 说明
   >
   > 成功绑定后的设备，30天内不允许解绑。

4. 通过Theme Studio Pro的本地预览能力推送表盘包到激活的已绑定设备上。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/04/v3/RifRCepxTv-Y-axj3--u6w/zh-cn_image_0000002660173915.png?HW-CC-KV=V1&HW-CC-Date=20260924T094631Z&HW-CC-Expire=31536000000&HW-CC-Sign=F66955E957BC7EF095599BE485B27EA753581086550ED21E33EC12354E44DFFE)

5. 使用具备**"主题认证设计师-表盘权限"**的华为账号登录华为鸿蒙手机的华为主题APP，在"我的"页面进入"开发者模式"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c7/v3/AeYHw9rIQie6nbMtZUu33Q/zh-cn_image_0000002629857296.png?HW-CC-KV=V1&HW-CC-Date=20260924T094631Z&HW-CC-Expire=31536000000&HW-CC-Sign=F42353D31A26FD9D268C26732F2FA14DB94D707EAE47B16CB85A57C993F5E0D2 "点击放大")
   > 说明
   >
   > 1. 登录的华为账号必须符合以上要求，否则不展示"开发者模式"入口，无法上表测试。
   >
   > 2. 如何申请**"主题认证设计师-表盘权限"** ？详见[入驻指导](https://developer.huawei.com/consumer/cn/doc/content/settlement-guidance-0000001056348857)。

6. 开发者模式中表盘包允许应用的前提是，要先绑定支持对应版本号和分辨率的手表/手环，才可以触发应用按钮。安装成功后，在手表上查看、测试表盘效果。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a4/v3/ixs5EWvTR1a5OeYjtoGuqQ/zh-cn_image_0000002660139141.png?HW-CC-KV=V1&HW-CC-Date=20260924T094631Z&HW-CC-Expire=31536000000&HW-CC-Sign=E53B69617673B63FCE207B57DE68F6BE6526C1AF9A0F78BFA6A70D7F36B9D945 "点击放大")

## 上表测试

1. 将制作完成的表盘资源包，保存至手机任一文件夹中。

   > 说明
   >
   > 表盘资源包文件后缀为.hwt（例如：demo.hwt）。资源包名称不能包含中文，只能包含字符、数字。

2. 在应用市场中，下载安装华为运动健康APP。
3. 使用具备**"主题认证设计师-表盘权限"**的华为账号（主账号+团队账号）登录华为运动健康APP。

   > 说明
   >
   > 1. 登录的华为账号必须符合以上要求，否则不展示"添加表盘"入口，无法上表测试。
   >
   > 2. 如何申请**"主题认证设计师-表盘权限"** ？详见[入驻指导](https://developer.huawei.com/consumer/cn/doc/content/settlement-guidance-0000001056348857)。

4. 在华为运动健康APP中，添加配对的手表/手环设备。

   > 说明
   >
   > 表盘资源包只能推送至配对的手表/手环设备上进行测试，详见[分辨率与版本号](https://developer.huawei.com/consumer/cn/doc/content/resolution-version-0000001252603441)。

5. 进入当前设备的"表盘市场"，在"我的"页面点击"添加表盘"。找到手机中的表盘资源包，并将其安装至手表。安装成功后，在手表上查看、测试表盘效果。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/gdQMwJNqR_W7yh6Zcg2wBg/zh-cn_image_0000001791789189.png?HW-CC-KV=V1&HW-CC-Date=20260924T094631Z&HW-CC-Expire=31536000000&HW-CC-Sign=79CFBCBD4DAD5A509E705BA513047FE7505211E88E8D3E096318659CE204BCC0 "点击放大")

> 说明
>
> **如何在手表上更换表盘？**
>
> 测试表盘时：需按照[上表测试](#section94576216174)步骤，进行表盘更换。
>
> 平时使用时：在当前手表设备的表盘市场中找到合适表盘后，将其应用至手表。长按手表屏幕，将显示已应用过的所有表盘的缩略图（左右滑动屏幕切换表盘缩略图），双击缩略图即可应用当前表盘。

## 表盘自检

为确保尽快通过审核，在上传表盘资源包之前，需要您按照[表盘主题测试规范](https://developer.huawei.com/consumer/cn/doc/content/sportwatch-test-0000001057059331)自检自查。

## 表盘上传

参考[表盘上传指南](https://developer.huawei.com/consumer/cn/doc/content/sportwatch-upload-0000001054469759#section12564125619118)，将表盘资源包上传至主题联盟。

