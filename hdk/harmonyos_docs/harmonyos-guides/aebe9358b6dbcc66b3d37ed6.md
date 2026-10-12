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

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/17/v3/vPAyKpd2Qqetsv93fZVJIg/zh-cn_image_0000002784583577.png?HW-CC-KV=V1&HW-CC-Date=20261009T092709Z&HW-CC-Expire=31536000000&HW-CC-Sign=6F348F30FBF6B393223BFD359FF0F25FF21EADD2C1CDD16EF53EBF0044E10086)
2. 选择文件，点击项目结构。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/64/v3/b8Yr1fbBR-GcbUWJOv6jOw/zh-cn_image_0000002784663757.png?HW-CC-KV=V1&HW-CC-Date=20261009T092709Z&HW-CC-Expire=31536000000&HW-CC-Sign=13FB37AEDE0B028864EEF7F6414020B269BCC2CA3FDA5D459B9B36963CBEC954)
3. 进入"Signing Configs"页面，点击"Enable open capabilities"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f/v3/Ho3kEd8OQO6uy_TYL4bvKA/zh-cn_image_0000002755024824.png?HW-CC-KV=V1&HW-CC-Date=20261009T092709Z&HW-CC-Expire=31536000000&HW-CC-Sign=9D7A242B6B009B60D5A0B32D0CF62D2FD9F5E004FC635076B2BABE1DD826F427)
4. 勾选"Map Kit"选项，点击"OK"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/87/v3/d8hzBtWlS4aKXiK0kTC4RQ/zh-cn_image_0000002755184712.png?HW-CC-KV=V1&HW-CC-Date=20261009T092709Z&HW-CC-Expire=31536000000&HW-CC-Sign=0B9B1542F98690C91EA24171EE0D65923B2911BE3278E09AC6E5449D0DE2B828)
5. 选择"Apply"应用地图服务配置，点击"OK"完成地图服务配置。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d6/v3/RWeYFqnJQ2-HZJ5E87PLXw/zh-cn_image_0000002784583579.png?HW-CC-KV=V1&HW-CC-Date=20261009T092709Z&HW-CC-Expire=31536000000&HW-CC-Sign=00CACB827BCB3B877685A2B72283466E1BEB8B40439DFD42A5A7CA993F7C2BCC)

方式二：通过AppGallery Connect网站开通地图服务。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站，选择"开发与服务"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/44/v3/N5j6wkLPSRinw_Qwwm4SUg/zh-cn_image_0000002784663759.png?HW-CC-KV=V1&HW-CC-Date=20261009T092709Z&HW-CC-Expire=31536000000&HW-CC-Sign=8A628253421868EEECCB2B1A99C59D1F74334AF3465E17A012C59A1A05026ADF)
2. 在项目列表中找到您的项目，在项目下的应用列表中选择需要打开"地图服务"的应用。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/47/v3/NLXQgpkwTS-aNXV9S-SdaQ/zh-cn_image_0000002755024826.png?HW-CC-KV=V1&HW-CC-Date=20261009T092709Z&HW-CC-Expire=31536000000&HW-CC-Sign=1145BFCBCF9CEB7A9832D920E5046C1936F704E2B92A8B2D92126744761FFBDF)
3. 选择开放能力管理，找到"地图服务"开关，打开开关。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/27/v3/aKaNw2JRS7es1UWS9wdNdw/zh-cn_image_0000002755184714.png?HW-CC-KV=V1&HW-CC-Date=20261009T092709Z&HW-CC-Expire=31536000000&HW-CC-Sign=193599E9F860EEB94B6E62A388F35738F9A0CC3EB61128FFD2EA9DB39B0D2C8E)
4. 确认已经开启"地图服务"开放能力，并完成签名。

   * 调试阶段必须[申请调试证书](https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-debugcert-0000001914263178)、[注册设备](https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-device-0000002283189937)、开启"地图服务"后重新[申请调试Profile文件](https://developer.huawei.com/consumer/cn/doc/app/agc-help-debug-profile-0000002248181278)，并完成[手动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing-manual)。
   * 发布前请确保开通地图服务，然后请参考[发布应用](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-publish-app)。 说明
     >
     > 若使用原有的Profile文件，请确保在申请Profile文件之前已开启"地图服务"。

