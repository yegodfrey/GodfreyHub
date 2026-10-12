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

1. 在设备选择框中选择调试的设备，并单击Run-》Attach to Process by Name。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a9/v3/vuv8XZfCTceRON-7aJzuQQ/zh-cn_image_0000002628791558.png?HW-CC-KV=V1&HW-CC-Date=20261008T185128Z&HW-CC-Expire=31536000000&HW-CC-Sign=23D05AE734F3B242D0D96755B7257D8E277419D5021D20966E349E96E1B376B9 "点击放大")

2. 在选择调试的工程并将类型选为ArkTS。然后单击Attach，即可将该应用设置为"等待调试模式"。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/06/v3/0EJmcfAYTriYmj0B8mvVPQ/zh-cn_image_0000002658990865.png?HW-CC-KV=V1&HW-CC-Date=20261008T185128Z&HW-CC-Expire=31536000000&HW-CC-Sign=D8A02EFB56E2A739674B0ABBAE00C90C628B1D1EAD39346C7D4338F31E35C63B "点击放大")

3. 确认DevEco Studio底部出现Waiting for debugger进度条后，可以开始调试。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/db/v3/kLlw3xPDSn6WQJYauMjpLg/zh-cn_image_0000002628631654.png?HW-CC-KV=V1&HW-CC-Date=20261008T185128Z&HW-CC-Expire=31536000000&HW-CC-Sign=76B61AE1305274C13F0DDB56217923FBC720C65D6BBFBF5B9581036233DCF429 "点击放大")

4. 在需要调试的代码行的左侧边线设置断点。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/98/v3/3w4PNUJrSrGPOO83GauFVQ/zh-cn_image_0000002658870927.png?HW-CC-KV=V1&HW-CC-Date=20261008T185128Z&HW-CC-Expire=31536000000&HW-CC-Sign=0051D84645E30A700CABF1B87AE2E5D5881B80A52E52C9A03BD2BC7657F27330 "点击放大")

5. 操作应用，当应用运行到代码处，会在代码处停住，并高亮显示。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/83/v3/cWZmvOAjTeSCRkekrNFrug/zh-cn_image_0000002628791560.png?HW-CC-KV=V1&HW-CC-Date=20261008T185128Z&HW-CC-Expire=31536000000&HW-CC-Sign=47E49C89696B2A84684990EC62E942179401EFDF2615F26DF8085B578B73DFC6 "点击放大")

[方式二](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-arkts-extension#section8660163873914)：需要修改IDE的运行配置方式。具体的实现步骤为：

1. 在运行调试窗口，运行配置项Launch Options选择Specified Ability。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/oGpFHfnWRwCycgVCawPGKQ/zh-cn_image_0000002658990869.png?HW-CC-KV=V1&HW-CC-Date=20261008T185128Z&HW-CC-Expire=31536000000&HW-CC-Sign=A15A6305B2E998A8E02F6EB2D05511F362C9C3D406F9F1575F2A5E5C22D3089D "点击放大")

2. 选择需要进行调试的EntryFormAbility。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d2/v3/YoLXFZT3TPaV0ggwu5j3Kg/zh-cn_image_0000002628631658.png?HW-CC-KV=V1&HW-CC-Date=20261008T185128Z&HW-CC-Expire=31536000000&HW-CC-Sign=872B2AAC7937A919EEBA7F70DCEA987B45C04D6FB64C94EDBF53DFE43BBB3776 "点击放大")

3. 点击OK保存配置后，点击调试按钮，启动调试即可命中生命周期函数断点。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3a/v3/kxfZg5a4S9uhGxR5R6UAlg/zh-cn_image_0000002658870929.png?HW-CC-KV=V1&HW-CC-Date=20261008T185128Z&HW-CC-Expire=31536000000&HW-CC-Sign=FEBF7CD85346451D551CE172C442290CA04D2157C3A761F84189D55CEC0C787F "点击放大")

