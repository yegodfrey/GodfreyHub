---
name: document/cn/harmonyos-faqs/faqs-app-debugging-70
title: 应用开发过程中如何将测试包安装到测试机
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-app-debugging-70
---

# 应用开发过程中如何将测试包安装到测试机

## 问题现象

应用开发过程中，有哪几种方式可以将测试包安装到测试机？

## 解决方案

可以通过以下四种方式将测试包安装到测试机：

* 方式一：通过hdc命令安装到测试机。
  1. 下载[Command Line Tools](https://developer.huawei.com/consumer/cn/download/command-line-tools-for-hmos)。该命令行工具集合了HarmonyOS应用开发所用到的系列工具，包括代码检查codelinter、三方库的包管理Ohpm、命令行解析hstack、编译构建hvigorw。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9b/v3/gobg7eogQuiEoGFG-p1Kew/zh-cn_image_0000002628569322.png?HW-CC-KV=V1&HW-CC-Date=20260916T082508Z&HW-CC-Expire=31536000000&HW-CC-Sign=9377FD63CFC1B8409774D4A9F6D14E67CA91BDFA0545F942F032842BEF43DBF6 "点击放大")
  2. 配置环境变量：下载后的压缩包放到D盘，解压后获得文件夹D:\CommandLine-Tools-windows-x64-5.1.0.828SP1\Command-Line-Tools\SDK\default\OpenHarmony\toolchains，右击此电脑-属性-高级系统设置，把该路径添加到环境变量里，cmd窗口输入where hdc检查是否配置成功。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/88/v3/eTwr29x2Q--8BLu3n_tVVQ/zh-cn_image_0000002658928641.png?HW-CC-KV=V1&HW-CC-Date=20260916T082508Z&HW-CC-Expire=31536000000&HW-CC-Sign=72D061AD5C41896A0F156516AFA01B1DB7F1EAE49D869CCD6CAC0A12B67A1151 "点击放大")

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/57/v3/wr0f89ViS7egxt-WulLamg/zh-cn_image_0000002628409416.png?HW-CC-KV=V1&HW-CC-Date=20260916T082508Z&HW-CC-Expire=31536000000&HW-CC-Sign=27EF61EB6A79FDAA3A1E6F29AA4F5EA98B9955AFAAA4C08C0771FC9101712B7C "点击放大")
  3. 使用hdc命令安装测试包：测试机进入手机系统设置菜单-关于手机，多次点击版本号启用开发者模式，然后进入系统设置菜单-系统-开发者选项，打开USB调试模式，并通过USB将手机连接到电脑，通过cmd使用命令hdc install <测试包路径>来安装hap包。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fc/v3/P0s-frtmQL2h8RRTLi6x6g/zh-cn_image_0000002658808685.png?HW-CC-KV=V1&HW-CC-Date=20260916T082508Z&HW-CC-Expire=31536000000&HW-CC-Sign=46084D95F77F590BA8E2BB58C7E39A1F17ADBF02E6ED7D3D56CBF89B3C6778F6 "点击放大")

* 方式二：通过IDE安装到测试机。
  1. 下载新版[DevEco Studio](https://developer.huawei.com/consumer/cn/download/deveco-studio)，并完成安装。安装过程中，新版本已经集成了Node.js、Ohpm和HarmonyOS SDK，因此不需要单独配置这些组件。
  2. 测试机开启开发者模式，采用[USB连接方式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-run-device#section171436512424)或者[使用无线调试连接方式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-run-device#section9315596477)。
  3. 在DevEco Studio中选择真机，Project Structure（项目结构）-Signing Configs（签名配置）-勾选Automatically generate signature(自动签名)-点击OK完成自动签名，点击"Run"或"Debug"按钮，DevEco Studio自动将hap文件安装到测试机上。具体请参考[使用本地真机运行应用](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-run-device)。

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6d/v3/stm9dREtSA-DREh2_lDvEg/zh-cn_image_0000002628569324.png?HW-CC-KV=V1&HW-CC-Date=20260916T082508Z&HW-CC-Expire=31536000000&HW-CC-Sign=B7679CE2EF2EF0A804A0CB03D93853E41D4BCCAD7B5B6DFD37343B76F863A058 "点击放大")

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d7/v3/wfgXy5lUSfewB7lkr3G46A/zh-cn_image_0000002658928647.png?HW-CC-KV=V1&HW-CC-Date=20260916T082508Z&HW-CC-Expire=31536000000&HW-CC-Sign=E703954CCC609BC07638B32890926B80F915D7AC816F828B890AB95714DF6D07 "点击放大") ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2c/v3/CXaI5cTLRRuK4ovKCfcmQg/zh-cn_image_0000002628409424.png?HW-CC-KV=V1&HW-CC-Date=20260916T082508Z&HW-CC-Expire=31536000000&HW-CC-Sign=2D7E9805D1D27E70DBA62C78E7FCAB5C840C0F837E76ED574FB7924404C24B25 "点击放大")
* 方式三：通过[DevEco Testing](https://developer.huawei.com/consumer/cn/download/deveco-testing)工具安装到测试机。

  测试机开启开发者模式，打开USB调试模式，并通过USB将手机连接到电脑，点击DevEco Testing工具左侧实用工具-设备投屏-开始投屏，点击安装应用，选择安装包路径，点击确定按钮进行安装，安装后可通过执行日志查看安装信息。

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/rudptH3USh2oHAAv-Uf-8w/zh-cn_image_0000002658808695.png?HW-CC-KV=V1&HW-CC-Date=20260916T082508Z&HW-CC-Expire=31536000000&HW-CC-Sign=800B8C06F105CADBFF9792F5BD728594069B46684C51B4EE3BEFC9AF2CB77205 "点击放大")

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ab/v3/W1LOraDQTvmZAT6GeTTjGA/zh-cn_image_0000002628569334.png?HW-CC-KV=V1&HW-CC-Date=20260916T082508Z&HW-CC-Expire=31536000000&HW-CC-Sign=69FB8163480651A6E85C3A2E2516E165FBC0586821854C937F5C25334BB8658E "点击放大")

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a2/v3/e9aY9O9YQzeA7_SU1HY9Mg/zh-cn_image_0000002658928653.png?HW-CC-KV=V1&HW-CC-Date=20260916T082508Z&HW-CC-Expire=31536000000&HW-CC-Sign=27CAB7C003FDAC95160A685FB4FEF6B26E1439CDF300EA1CD403C920FB866AE0 "点击放大")
* **方式四** ：通过[邀请测试和公开测试](https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyos-testapp-0000001873653977)安装到测试机。

  通过AppGallery Connect，在应用正式版本发布之前，可以挑选特定的用户群组来测试HarmonyOS应用/元服务，或向AppGallery用户公开发布测试版本。

