---
name: document/cn/harmonyos-faqs/faqs-form-15
title: 如何对服务卡片进行调试
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-form-15
---

# 如何对服务卡片进行调试

## 问题现象

因为卡片事件是从应用的form进程发起，正常情况下使用debug模式运行后会导致走不到断点；另外卡片交互冷启动应用的场景也无法正常使用debug模式进行断点调试。

## 背景知识

* [Form Kit（卡片开发框架）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/formkit-overview)提供了一种在桌面、锁屏等系统入口上嵌入显示应用信息的开发框架和API，可以将应用内用户关注的重要信息或常用操作抽取到服务卡片（简称"卡片"）上，通过将卡片添加到桌面、锁屏等系统入口上，以达到信息展示、服务直达的便捷体验效果。
* 开发者可以通过将某个应用设置为["等待调试模式"](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-arkts-attach-to-process)，然后当开发者需要对应用进行调试时，拉起应用即可快速进入调试。

## 解决方案

开发者可通过[两种方式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-arkts-extension)对EntryFormAbility生命周期函数进行调试。

* 应用安装到设备上后，通过等待调试方式进行调试。
* 修改运行调试配置项，指定当前运行或调试的Ability为Extension Ability。

[方式一](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-arkts-extension#section14388152112818)：需要使用IDE的"等待调试"能力进行卡片交互调试。具体的实现步骤为：

1. 在设备选择框中选择调试的设备，并单击Run-》Attach to Process by Name。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a9/v3/vuv8XZfCTceRON-7aJzuQQ/zh-cn_image_0000002628791558.png?HW-CC-KV=V1&HW-CC-Date=20260929T074333Z&HW-CC-Expire=31536000000&HW-CC-Sign=277DA01E55335279B518DFC3C40740D1E6341BA14AFF23BF194FEDB3C20F657B "点击放大")

2. 在选择调试的工程并将类型选为ArkTS。然后单击Attach，即可将该应用设置为"等待调试模式"。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/06/v3/0EJmcfAYTriYmj0B8mvVPQ/zh-cn_image_0000002658990865.png?HW-CC-KV=V1&HW-CC-Date=20260929T074333Z&HW-CC-Expire=31536000000&HW-CC-Sign=E92F48C79E2D52F0CDD988C85DA95FDDC9D744D7FFF8EAE40267A79D04B0C764 "点击放大")

3. 确认DevEco Studio底部出现Waiting for debugger进度条后，可以开始调试。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/db/v3/kLlw3xPDSn6WQJYauMjpLg/zh-cn_image_0000002628631654.png?HW-CC-KV=V1&HW-CC-Date=20260929T074333Z&HW-CC-Expire=31536000000&HW-CC-Sign=2BF2BF891CBB4B91D912ABD8F4ED6F238EE78B6969F7C3CE60E16725DD2EC7CF "点击放大")

4. 在需要调试的代码行的左侧边线设置断点。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/98/v3/3w4PNUJrSrGPOO83GauFVQ/zh-cn_image_0000002658870927.png?HW-CC-KV=V1&HW-CC-Date=20260929T074333Z&HW-CC-Expire=31536000000&HW-CC-Sign=BD63DB42452B50C3B2F66179A32E2A443F6FD24E470B9385D7A5BDC1164E7D15 "点击放大")

5. 操作应用，当应用运行到代码处，会在代码处停住，并高亮显示。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/83/v3/cWZmvOAjTeSCRkekrNFrug/zh-cn_image_0000002628791560.png?HW-CC-KV=V1&HW-CC-Date=20260929T074333Z&HW-CC-Expire=31536000000&HW-CC-Sign=E4665604362ED13F6423D38CE57E220CCD0801657DDCEB039A26637432C0F797 "点击放大")

[方式二](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-arkts-extension#section8660163873914)：需要修改IDE的运行配置方式。具体的实现步骤为：

1. 在运行调试窗口，运行配置项Launch Options选择Specified Ability。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/oGpFHfnWRwCycgVCawPGKQ/zh-cn_image_0000002658990869.png?HW-CC-KV=V1&HW-CC-Date=20260929T074333Z&HW-CC-Expire=31536000000&HW-CC-Sign=D534957FBE0A0D1C8172C9F5D73669FFF1BBABB0F415E5285A1F9405B9E1F0EE "点击放大")

2. 选择需要进行调试的EntryFormAbility。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d2/v3/YoLXFZT3TPaV0ggwu5j3Kg/zh-cn_image_0000002628631658.png?HW-CC-KV=V1&HW-CC-Date=20260929T074333Z&HW-CC-Expire=31536000000&HW-CC-Sign=AC07FDD2988CB51EE8F2973F6E6CF8416B2C4662D26FDF6A2204913AF2CBD861 "点击放大")

3. 点击OK保存配置后，点击调试按钮，启动调试即可命中生命周期函数断点。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3a/v3/kxfZg5a4S9uhGxR5R6UAlg/zh-cn_image_0000002658870929.png?HW-CC-KV=V1&HW-CC-Date=20260929T074333Z&HW-CC-Expire=31536000000&HW-CC-Sign=5C564C2AEFC30994069143F3A019DB4383B53565D41351914DE0B8EA11E1DF00 "点击放大")

