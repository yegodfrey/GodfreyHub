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

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9b/v3/gobg7eogQuiEoGFG-p1Kew/zh-cn_image_0000002628569322.png?HW-CC-KV=V1&HW-CC-Date=20261008T140204Z&HW-CC-Expire=31536000000&HW-CC-Sign=A550200ABC3DCF169063E5900A58C1A40C548C81885BB1D282CCB70781C951FD "点击放大")
  2. 配置环境变量：下载后的压缩包放到D盘，解压后获得文件夹D:\CommandLine-Tools-windows-x64-5.1.0.828SP1\Command-Line-Tools\SDK\default\OpenHarmony\toolchains，右击此电脑-属性-高级系统设置，把该路径添加到环境变量里，cmd窗口输入where hdc检查是否配置成功。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/88/v3/eTwr29x2Q--8BLu3n_tVVQ/zh-cn_image_0000002658928641.png?HW-CC-KV=V1&HW-CC-Date=20261008T140204Z&HW-CC-Expire=31536000000&HW-CC-Sign=743B5D20383028B498F97AE78164E02B15B815E87F443A4AE5B09EF780EC11EB "点击放大")

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/57/v3/wr0f89ViS7egxt-WulLamg/zh-cn_image_0000002628409416.png?HW-CC-KV=V1&HW-CC-Date=20261008T140204Z&HW-CC-Expire=31536000000&HW-CC-Sign=8AD3B8C274F80C47DBD2B5732B700926D5CDDB94B36A0D2EB546F03D64B84BA3 "点击放大")
  3. 使用hdc命令安装测试包：测试机进入手机系统设置菜单-关于手机，多次点击版本号启用开发者模式，然后进入系统设置菜单-系统-开发者选项，打开USB调试模式，并通过USB将手机连接到电脑，通过cmd使用命令hdc install <测试包路径>来安装hap包。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fc/v3/P0s-frtmQL2h8RRTLi6x6g/zh-cn_image_0000002658808685.png?HW-CC-KV=V1&HW-CC-Date=20261008T140204Z&HW-CC-Expire=31536000000&HW-CC-Sign=1FEE344FF1F229BAEFB416E19FA28730E7E8952A82D98CF88C1C33A1F08AEDC7 "点击放大")

* 方式二：通过IDE安装到测试机。
  1. 下载新版[DevEco Studio](https://developer.huawei.com/consumer/cn/download/deveco-studio)，并完成安装。安装过程中，新版本已经集成了Node.js、Ohpm和HarmonyOS SDK，因此不需要单独配置这些组件。
  2. 测试机开启开发者模式，采用[USB连接方式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-run-device#section171436512424)或者[使用无线调试连接方式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-run-device#section9315596477)。
  3. 在DevEco Studio中选择真机，Project Structure（项目结构）-Signing Configs（签名配置）-勾选Automatically generate signature(自动签名)-点击OK完成自动签名，点击"Run"或"Debug"按钮，DevEco Studio自动将hap文件安装到测试机上。具体请参考[使用本地真机运行应用](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-run-device)。

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6d/v3/stm9dREtSA-DREh2_lDvEg/zh-cn_image_0000002628569324.png?HW-CC-KV=V1&HW-CC-Date=20261008T140204Z&HW-CC-Expire=31536000000&HW-CC-Sign=150F02A4B1EA05513454B529181BC308FEC86F4CC542249AEBF76890F747B9AA "点击放大")

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d7/v3/wfgXy5lUSfewB7lkr3G46A/zh-cn_image_0000002658928647.png?HW-CC-KV=V1&HW-CC-Date=20261008T140204Z&HW-CC-Expire=31536000000&HW-CC-Sign=F6F0778D1C8091241383011A4139ADF282133EFE911E1B91580337F091ADA1B2 "点击放大") ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2c/v3/CXaI5cTLRRuK4ovKCfcmQg/zh-cn_image_0000002628409424.png?HW-CC-KV=V1&HW-CC-Date=20261008T140204Z&HW-CC-Expire=31536000000&HW-CC-Sign=2A721F33BC6550EAFCDE29F8D84C275572C5B3C9D7C1717977A8B1AB2AE0F184 "点击放大")
* 方式三：通过[DevEco Testing](https://developer.huawei.com/consumer/cn/download/deveco-testing)工具安装到测试机。

  测试机开启开发者模式，打开USB调试模式，并通过USB将手机连接到电脑，点击DevEco Testing工具左侧实用工具-设备投屏-开始投屏，点击安装应用，选择安装包路径，点击确定按钮进行安装，安装后可通过执行日志查看安装信息。

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/rudptH3USh2oHAAv-Uf-8w/zh-cn_image_0000002658808695.png?HW-CC-KV=V1&HW-CC-Date=20261008T140204Z&HW-CC-Expire=31536000000&HW-CC-Sign=C7B4FC5C5E3428B2ABC2E02045A5031C3E682222C23CBA9D437E1BB70FB5CF3C "点击放大")

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ab/v3/W1LOraDQTvmZAT6GeTTjGA/zh-cn_image_0000002628569334.png?HW-CC-KV=V1&HW-CC-Date=20261008T140204Z&HW-CC-Expire=31536000000&HW-CC-Sign=4DC4AAFA20E97952E3A8C8253620EE445B2186A66D01E176DA6930FF67602A73 "点击放大")

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a2/v3/e9aY9O9YQzeA7_SU1HY9Mg/zh-cn_image_0000002658928653.png?HW-CC-KV=V1&HW-CC-Date=20261008T140204Z&HW-CC-Expire=31536000000&HW-CC-Sign=BD20D7EC20F822A89B03430A4265E83088322748A6A39A5284E404266CAEA6FB "点击放大")
* **方式四** ：通过[邀请测试和公开测试](https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyos-testapp-0000001873653977)安装到测试机。

  通过AppGallery Connect，在应用正式版本发布之前，可以挑选特定的用户群组来测试HarmonyOS应用/元服务，或向AppGallery用户公开发布测试版本。

