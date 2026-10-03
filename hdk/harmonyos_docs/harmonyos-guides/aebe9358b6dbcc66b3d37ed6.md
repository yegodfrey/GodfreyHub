---
name: document/cn/harmonyos-guides/map-config-agc
title: 开发准备
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-config-agc
---

# 开发准备

请优先[开通地图服务](#开通地图服务)后，再参考"[应用开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-dev-overview)"完成基本准备工作，然后再继续进行以下开发活动。
> 说明
>
> * 从HarmonyOS 5.0.2(14)版本开始，开发者无需配置公钥指纹和Client ID。
>
> * 从DevEco Studio 6.0.0 Beta5版本开始，支持在DevEco Studio中开通地图服务。

## 开通地图服务

Map Kit提供2种方式开通地图服务：

* 通过DevEco Studio开通地图服务。

* 通过AppGallery Connect网站开通地图服务。

方式一：通过DevEco Studio开通地图服务

1. 登录DevEco Studio应用。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/db/v3/n1N07yokRBe6E_L2_XYk5A/zh-cn_image_0000002778932879.png?HW-CC-KV=V1&HW-CC-Date=20260929T121650Z&HW-CC-Expire=31536000000&HW-CC-Sign=EB490C83575D8A9B3C580E39D08D426836282C7327A8D20F596DAB32753924CB)
2. 选择文件，点击项目结构。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/45/v3/slUu95mIRjyECP4XMYbhZg/zh-cn_image_0000002749333798.png?HW-CC-KV=V1&HW-CC-Date=20260929T121650Z&HW-CC-Expire=31536000000&HW-CC-Sign=D68D6EBD7F8C03DE78D0ACDBB04E6983CF48A8801476F3120E8909558AC2F4D1)
3. 进入"Signing Configs"页面，点击"Enable open capabilities"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/oIbyjmCxRVScjOpO69ktDQ/zh-cn_image_0000002749493682.png?HW-CC-KV=V1&HW-CC-Date=20260929T121650Z&HW-CC-Expire=31536000000&HW-CC-Sign=96FDE005124900C1A14E9EAB1AEC93208FE7F1A70424016CE6191FF32042CEE5)
4. 勾选"Map Kit"选项，点击"OK"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f4/v3/jknB1i-EQQqF5E4E-RHePg/zh-cn_image_0000002779092739.png?HW-CC-KV=V1&HW-CC-Date=20260929T121650Z&HW-CC-Expire=31536000000&HW-CC-Sign=33D2DFDC3E4C0134A5A16BDAA303C62F13C945B6C402475269F1E1F753981489)
5. 选择"Apply"应用地图服务配置，点击"OK"完成地图服务配置。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b3/v3/I13mOZieTWmrNqz0-qHuyQ/zh-cn_image_0000002778932881.png?HW-CC-KV=V1&HW-CC-Date=20260929T121650Z&HW-CC-Expire=31536000000&HW-CC-Sign=8AE19A4D7295DAD8EBF7C902A0D2C6780DA585399642B45B5F61A971F5701510)

方式二：通过AppGallery Connect网站开通地图服务。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站，选择"开发与服务"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f5/v3/MC4m4hOySrypJNxY6Rm_hg/zh-cn_image_0000002749333800.png?HW-CC-KV=V1&HW-CC-Date=20260929T121650Z&HW-CC-Expire=31536000000&HW-CC-Sign=FAE3952A694C35FDA516BCD02544FEB104085FF035C6A5078239CFDB05910165)
2. 在项目列表中找到您的项目，在项目下的应用列表中选择需要打开"地图服务"的应用。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4a/v3/7R0AtQdhT0mXJypZ6GFK0w/zh-cn_image_0000002749493684.png?HW-CC-KV=V1&HW-CC-Date=20260929T121650Z&HW-CC-Expire=31536000000&HW-CC-Sign=C76AD8EBBC7C7989B87F32FDBCC75B18C8908A5A0D338CF75AD7359E841762F7)
3. 选择开放能力管理，找到"地图服务"开关，打开开关。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b4/v3/d_BVaPwOQDW13awkspn_0Q/zh-cn_image_0000002779092741.png?HW-CC-KV=V1&HW-CC-Date=20260929T121650Z&HW-CC-Expire=31536000000&HW-CC-Sign=8D27E4D1282F2E115F2DFEF498322704FFC116358901CAB0BA9982021D8E9560)
4. 确认已经开启"地图服务"开放能力，并完成签名。

   * 调试阶段必须[申请调试证书](https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-debugcert-0000001914263178)、[注册设备](https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-device-0000002283189937)、开启"地图服务"后重新[申请调试Profile文件](https://developer.huawei.com/consumer/cn/doc/app/agc-help-debug-profile-0000002248181278)，并完成[手动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing-manual)。
   * 发布前请确保开通地图服务，然后请参考[发布应用](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-publish-app)。 说明
     >
     > 若使用原有的Profile文件，请确保在申请Profile文件之前已开启"地图服务"。

