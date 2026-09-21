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

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2/v3/0EuRoRK7Qt-jgjaXZ0MJMA/zh-cn_image_0000002762994823.png?HW-CC-KV=V1&HW-CC-Date=20260917T084548Z&HW-CC-Expire=31536000000&HW-CC-Sign=6259F754665D55BEB4E14AF3FF50CDCBE0BA3F74810CAFCB461ACE646F6D8C04)
2. 选择文件，点击项目结构。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/44/v3/TbLIvzFbRc-Nvjc0nLq9ww/zh-cn_image_0000002762834935.png?HW-CC-KV=V1&HW-CC-Date=20260917T084548Z&HW-CC-Expire=31536000000&HW-CC-Sign=BCF6EB6AB84AF36E24760F8D247486FF80F51244932DD426F97E9DB38F41C2BF)
3. 进入"Signing Configs"页面，点击"Enable open capabilities"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/22/v3/qT7k3sfXQNWg6WcF8-VJHg/zh-cn_image_0000002733275420.png?HW-CC-KV=V1&HW-CC-Date=20260917T084548Z&HW-CC-Expire=31536000000&HW-CC-Sign=5113E1A9DA057D9D9F78F8C3506AA282CC05A03019A7015627491617E04196AA)
4. 勾选"Map Kit"选项，点击"OK"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2b/v3/tk9tmfpAQ6CByYgYSA2iSg/zh-cn_image_0000002733435302.png?HW-CC-KV=V1&HW-CC-Date=20260917T084548Z&HW-CC-Expire=31536000000&HW-CC-Sign=56AB1DCBF99A855C3683CD6E25A698BA5F6D90167964EF24ECC15117FEE16D43)
5. 选择"Apply"应用地图服务配置，点击"OK"完成地图服务配置。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/27/v3/OAtigLUaS8-9YjYrrVDUHg/zh-cn_image_0000002762994825.png?HW-CC-KV=V1&HW-CC-Date=20260917T084548Z&HW-CC-Expire=31536000000&HW-CC-Sign=9DEDE256B1E184C68DCAB86DA0EE70DE4FA8DA2EE098F0685A739541044F7486)

方式二：通过AppGallery Connect网站开通地图服务。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站，选择"开发与服务"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ec/v3/bjTITpdnSNeXBvXwBoIIFA/zh-cn_image_0000002762834937.png?HW-CC-KV=V1&HW-CC-Date=20260917T084548Z&HW-CC-Expire=31536000000&HW-CC-Sign=B562534163AF0E24ADDB5110F2BC92F9AAE01589A8DDE994DBD02BC41C9B46FD)
2. 在项目列表中找到您的项目，在项目下的应用列表中选择需要打开"地图服务"的应用。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fd/v3/T90nJgDXQ4S9ANbHs3UeDA/zh-cn_image_0000002733275422.png?HW-CC-KV=V1&HW-CC-Date=20260917T084548Z&HW-CC-Expire=31536000000&HW-CC-Sign=E9C825AC1E1C93D09FD4151117C045FB0A0516B9E59EFF18C3EB735AEE13C4D4)
3. 选择开放能力管理，找到"地图服务"开关，打开开关。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f3/v3/Fo-hWA1GSuSzueAhepnP_A/zh-cn_image_0000002733435304.png?HW-CC-KV=V1&HW-CC-Date=20260917T084548Z&HW-CC-Expire=31536000000&HW-CC-Sign=650894DE24504F24B61FB0E15CC959F2BF5F72592F2302EA83D2D2438388E2A2)
4. 确认已经开启"地图服务"开放能力，并完成签名。

   * 调试阶段必须[申请调试证书](https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-debugcert-0000001914263178)、[注册设备](https://developer.huawei.com/consumer/cn/doc/app/agc-help-add-device-0000002283189937)、开启"地图服务"后重新[申请调试Profile文件](https://developer.huawei.com/consumer/cn/doc/app/agc-help-debug-profile-0000002248181278)，并完成[手动签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing-manual)。
   * 发布前请确保开通地图服务，然后请参考[发布应用](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-publish-app)。 说明
     >
     > 若使用原有的Profile文件，请确保在申请Profile文件之前已开启"地图服务"。

