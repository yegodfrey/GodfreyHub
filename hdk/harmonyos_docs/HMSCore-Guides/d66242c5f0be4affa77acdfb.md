---
name: document/cn/HMSCore-Guides/hms-toolkit-0000001102415426
title: HMS Toolkit最佳实践
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/hms-toolkit-0000001102415426
---

# HMS Toolkit最佳实践

HMS Toolkit是一个IDE工具插件，提供一套含应用创建、编码和转换、调测、测试和发布的开发工具。可以帮助您以更低的开发成本和更高的开发效率集成HMS Core服务。

HMS Toolkit的"Configuration Wizard"为您提供配置向导，借助该工具可将"开发准备"中多个模块的手动操作自动化完成。

## Configuration Wizard操作

## 安装工具

**Windows平台：** 打开Android Studio，选择"File > Settings > Plugins > Marketplace"，在搜索框中输入"HMS Toolkit"，然后点击"Install"进行安装。安装完成后，请重启Android Studio。

**MacOS平台：** 打开Android Studio，选择"Preferences > Plugins > Marketplace"，在搜索框中输入"HMS Toolkit"，然后点击"Install"进行安装。安装完成后，请重启Android Studio。

## 配置开发环境

### 配置AppGallery Connect

在开发应用前，您需要在AppGallery Connect中创建应用，并设置应用的相关信息。

1. 使用华为帐号登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)。如未注册，可参见[帐号注册认证](https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148)进行注册。
2. 参见[创建项目](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createproject-0000001100334664)和[创建应用](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createapp-0000001146718717)完成应用的创建。特殊配置：软件包类型选择"APK(Android应用)"。

   配置完成后，无需根据界面向导进行下一步操作，按照[配置HMS Toolkit环境](https://developer.huawei.com/consumer/cn/doc/Tools-Guides/ads-integration-0000001135818731#section181241811102710)进行操作，工具会自动进行设置。

### 配置HMS Toolkit环境

在调用Ads Kit能力前，您还需要进行环境配置。

1. 在Android Studio中，选择菜单栏中的"HMS > Configuration Wizard"。

   > 说明
   >
   > 如果您还未登录AppGallery Connect，工具会自动打开浏览器提示您进行登录和授权。

2. 登录授权后，选择团队名称、对应的工程模块、Integrated Kits（选择Ads Kit），然后点击"Next"。

   > 说明
   >
   > 您在选择团队名称和对应的工程模块之后，HMS Toolkit会自动检测AppGallery Connect上是否有对应的应用。若有以下报错，请根据界面提示点击"Link"到AppGallery Connect上检查是否已创建应用。
   > * 如果没有，请创建新的应用，然后点击"Retry"重试。
   > * 如果已有应用，请根据界面提示检查团队名称和工程模块是否选择正确，然后点击"Retry"重试。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a9/v3/BVUYAA5hQVawwWCuzAd3FA/zh-cn_image_0000001647853177.png?HW-CC-KV=V1&HW-CC-Date=20261012T062830Z&HW-CC-Expire=31536000000&HW-CC-Sign=4BA4F74AEC351A20D7E46C8FCCAFACD675D0BAF608AE9C7FB416718BAED77484)

   报错修复后的界面如下：

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b4/v3/ibXbr8tnRFCKsOw6fyD8dw/zh-cn_image_0000001647455025.png?HW-CC-KV=V1&HW-CC-Date=20261012T062830Z&HW-CC-Expire=31536000000&HW-CC-Sign=71120C881F18ADA343BC32B1736F6993AC2832C96171C65F32846D5CEFD5248C)

   HMS Toolkit会自动对Ads Kit的使用环境进行环境配置检查，包括通用环境配置检查和Kit专用环境配置检查。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4c/v3/rN7wg8_LSN-mxzEJRgAINA/zh-cn_image_0000001598132998.png?HW-CC-KV=V1&HW-CC-Date=20261012T062830Z&HW-CC-Expire=31536000000&HW-CC-Sign=2C4B5BC84D00271E6F14FEEED8B48BFAA36756E851696CB1CF3D87946884C84C)

   HMS Toolkit会自动处理检查项，并逐项检查是否配置正确。全部检查项均通过，则可以点击"Go to coding assistant"调用对应的接口，详细操作请参见[4.5.1-Kit集成向导。](https://developer.huawei.com/consumer/cn/doc/Tools-Guides/coding-assistant-0000001050061057)
   > 说明
   >
   > 在您发布应用前，请将测试广告位替换为正式广告位，点击[这里](https://developer.huawei.com/consumer/cn/doc/distribution/monetize/advantage-0000001051201913)查看正式广告位的申请方法。

## 通过Coding Assistant集成

选择"HMS > Coding Assistant"，然后在Kit列表中点击"Ads Kit"，整个Ads Kit的场景如下图：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a4/v3/nCTMBV1ARCixgKUhlpcqHQ/zh-cn_image_0000001166360639.png?HW-CC-KV=V1&HW-CC-Date=20261012T062830Z&HW-CC-Expire=31536000000&HW-CC-Sign=18654D3EC6486A0CAFFB069D7E2464D01C9C57E059A6D9169B53879DD6222662)

### 拖拽场景卡片补齐业务代码

选择要进行开发的场景卡片，以"Banner Ads"为例，拖拽整个卡片到代码区域生成嵌入Banner Ads的代码。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/17/v3/LXOT9gzIQ4-poL3mknCCHQ/zh-cn_image_0000001119441010.gif?HW-CC-KV=V1&HW-CC-Date=20261012T062830Z&HW-CC-Expire=31536000000&HW-CC-Sign=7E4A8F1C7A555873E31B141EDA60DDA23CAE956208C265C10913F9AE05FC0FA0 "点击放大")

当您直接拖动场景卡片时，工具会自动生成对应的Activity文件和XML布局文件，并在AndroidManifest.xml、项目级的build.gradle和应用级的build.gradle文件中写入配置信息和工程运行所需要的依赖。如果需要打开该Activity，需要您在代码中主动调用该Activity，完成后，您可以直接在设备中运行应用。

## 编译、加载、调试

完成上述代码后，可以使用HMS Toolkit中的Cloud Debugging来进行真机调试，具体可以参见[Cloud Debugging](https://developer.huawei.com/consumer/cn/doc/Tools-Guides/cloud-debugging-0000001051084360)。

对于Ads Kit，使用远程真机可以很好地测试您的代码是否正确集成了流量变现SDK，关于测试广告位的展示可以参见下图：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3f/v3/7P2TNxVsT4iyG9TdivlFsw/zh-cn_image_0000001094943422.gif?HW-CC-KV=V1&HW-CC-Date=20261012T062830Z&HW-CC-Expire=31536000000&HW-CC-Sign=2A7B8B866C3A1BE9C82CF7C3EE95ECF7B5AB785DEBE3142E43BF745D10B02F10 "点击放大")

## 使用云测工具测试APK

1. 在菜单栏中选择"HMS > Cloud Testing"或者在工具栏点击如下图标。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/25/v3/X709v-rdTIKNkiXFTaEUDw/zh-cn_image_0000001051084840.png?HW-CC-KV=V1&HW-CC-Date=20261012T062830Z&HW-CC-Expire=31536000000&HW-CC-Sign=705EBF50003D64EF26963A978284B821E145C434BCB79C3AB7D0BF206D858A9A "点击放大")

2. 在"Cloud Testing"中，点击"New Task"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3/v3/fv_pVnKmTJibMbZ75WIjSw/zh-cn_image_0000001060804892.png?HW-CC-KV=V1&HW-CC-Date=20261012T062830Z&HW-CC-Expire=31536000000&HW-CC-Sign=73AB7C25F61B2A694D60575EBC6882F13232E89A0027ABA48275C893D2F270BB "点击放大")

3. 配置各项任务参数，点击"Confirm"，启动测试任务。

   * Select Category：选择测试类别。测试类别包括"Compatibility Test"（兼容性测试）、"Stability Test"（稳定性测试）、"Performance Test"（性能测试）和"Consumption Test"（功耗测试）。
   * Please Select Apk File：选择需要测试的APK文件。
   * Test Devices：选择用于测试应用的远程真机。测试稳定性（"Stability Test"）时，只能选择一个设备进行测试，其他测试项可以同时选择多个设备。
   * Test Duration：（可选）仅测试类别选择"Stability Test"生效，设置测试周期，范围为10~60分钟。

   * Application Classification：（可选）仅测试类别选择"Performance Test"和"Consumption Test"生效，设置应用分类信息。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/57/v3/RokybTxPS-asXpXeK1RQuA/zh-cn_image_0000001050764903.png?HW-CC-KV=V1&HW-CC-Date=20261012T062830Z&HW-CC-Expire=31536000000&HW-CC-Sign=E92E0FB4E64125FBC4816714A6828DA2BCFB8C0694FB4B84DBB98ED49B8C5362 "点击放大")

4. 等待测试任务完成后，点击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fb/v3/Flt4A_-sQXSC99NQBgqkYQ/zh-cn_image_0000001051012709.png?HW-CC-KV=V1&HW-CC-Date=20261012T062830Z&HW-CC-Expire=31536000000&HW-CC-Sign=B5A5B6488433269F50B7D049BCAD15AAE8C1974C0C256CB41320FB2830E111E2)查看测试报告。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f9/v3/Re7QtxfjQ_e297DFkL_F0Q/zh-cn_image_0000001050765903.png?HW-CC-KV=V1&HW-CC-Date=20261012T062830Z&HW-CC-Expire=31536000000&HW-CC-Sign=DEC53FCD230A0BEE7A2D7973E4C9B642DC58C362122E47646F71B54EC2914626 "点击放大")

   点击"Download report"，可以将测试报告下载到本地，点击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/36/v3/mFHWw2FtRseeZOlRKfPGjA/zh-cn_image_0000001165687551.png?HW-CC-KV=V1&HW-CC-Date=20261012T062830Z&HW-CC-Expire=31536000000&HW-CC-Sign=B0153B3A2D7DB6CDC18694322217AF5401F37735AF401DD84F8B8A51AA2E693A)，可以查看测试详情。各测试项的报告说明请参见[云测试指南](https://developer.huawei.com/consumer/cn/doc/development/Tools-Guides/prerequisites-0000001073333658)。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/91/v3/BfONcu8xRuq523Aa1pk-Tg/zh-cn_image_0000001051005925.png?HW-CC-KV=V1&HW-CC-Date=20261012T062830Z&HW-CC-Expire=31536000000&HW-CC-Sign=69D8ECAF5C58E73F6978EAE161FCBE327A433B57352A9AB0478725ADA6DA14A1 "点击放大")

## Publish to AppGallery Connect

您的应用程序开发、调试完成后，可以直接通过HMS Core提供的Publish to AppGallery Connect功能，将您的应用程序APK文件发布到华为应用市场。

1. 在HMS菜单中，点击"Publish to AppGallery Connect"。
2. 选择团队名称和要发布的APK文件（最大不超过1GB），点击"Upload"完成上传。

   > 说明
   >
   > 上传APK文件会有如下两个检验，如有报错，请修改后重新上传。
   > * APK文件的格式必须是release。生成方法请参见[如何在项目工程中生成release.apk文件](https://developer.huawei.com/consumer/cn/doc/Tools-Guides/faq-0000001050061059#section9273037134510)。
   > * 获取SHA256证书指纹且已经配置到AGC的应用中。操作步骤：在cmd中输入以下命令来读取APK文件的信息值，然后从信息值里获取SHA256证书指纹，再将SHA256证书指纹填写到对应的应用中。
   >
   >   ```screen
   >   >keytool -printcert -jarfile 工程目录下的app-release.apk路径
   >   ```
   >
   >   "工程目录下的app-release.apk路径"请根据实际路径进行替换。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4e/v3/viccE7gLTGypp6YwYAguww/zh-cn_image_0000001077756710.png?HW-CC-KV=V1&HW-CC-Date=20261012T062830Z&HW-CC-Expire=31536000000&HW-CC-Sign=B1608A8B6503F99D755988D343C5B16AF67BEB46112E5EB4FE47779216C35D2C "点击放大")

3. 上传完成后，点击"RELEASE"，进入"应用上架 > 准备提交"页面。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/22/v3/EKUH3d6ZSzaDMGhJWPWuzQ/zh-cn_image_0000001090264815.png?HW-CC-KV=V1&HW-CC-Date=20261012T062830Z&HW-CC-Expire=31536000000&HW-CC-Sign=4900A982309EDE03530ABDBAE96605EC3E50B08FC185033161EC6875DBAE127B "点击放大")

4. 填写应用上架的相关信息并提交审核。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2f/v3/Set-vfLCTyalMMTsrjILNA/zh-cn_image_0000001071000089.png?HW-CC-KV=V1&HW-CC-Date=20261012T062830Z&HW-CC-Expire=31536000000&HW-CC-Sign=70C76448A51A8192012491FE655EB522F232CB72205242104CE210AC7937F7FB "点击放大")

