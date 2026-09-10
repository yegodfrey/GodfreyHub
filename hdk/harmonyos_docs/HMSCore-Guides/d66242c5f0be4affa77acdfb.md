---
name: document/cn/HMSCore-Guides/hms-toolkit-0000001102415426
title: HMS Toolkit最佳实践
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/hms-toolkit-0000001102415426
---

# HMS Toolkit最佳实践

HMS Toolkit是一个IDE工具插件，提供一套含应用创建、编码和转换、调测、测试和发布的开发工具。可以帮助您以更低的开发成本和更高的开发效率集成HMS Core服务。

HMS Toolkit的"Configuration Wizard"为您提供配置向导，借助该工具可将"开发准备"中多个模块的手动操作自动化完成。  

#### Configuration Wizard操作


<br />

#### 安装工具

Windows平台：打开Android Studio，选择"File \> Settings \> Plugins \> Marketplace"，在搜索框中输入"HMS Toolkit"，然后点击"Install"进行安装。安装完成后，请重启Android Studio。

MacOS平台：打开Android Studio，选择"Preferences \> Plugins \> Marketplace"，在搜索框中输入"HMS Toolkit"，然后点击"Install"进行安装。安装完成后，请重启Android Studio。  

#### 配置开发环境

#### 配置AppGallery Connect

在开发应用前，您需要在AppGallery Connect中创建应用，并设置应用的相关信息。

1. 使用华为帐号登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)。如未注册，可参见[帐号注册认证](https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148)进行注册。
2. 参见[创建项目](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createproject-0000001100334664)和[创建应用](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createapp-0000001146718717)完成应用的创建。特殊配置：软件包类型选择"APK(Android应用)"。

   <br />

   配置完成后，无需根据界面向导进行下一步操作，按照[配置HMS Toolkit环境](https://developer.huawei.com/consumer/cn/doc/Tools-Guides/ads-integration-0000001135818731#section181241811102710)进行操作，工具会自动进行设置。

   <br />

#### 配置HMS Toolkit环境

在调用Ads Kit能力前，您还需要进行环境配置。

1. 在Android Studio中，选择菜单栏中的"HMS \> Configuration Wizard"。

   <br />

   ![](https://media:201785910041841783)  
   如果您还未登录AppGallery Connect，工具会自动打开浏览器提示您进行登录和授权。

   <br />

2. 登录授权后，选择团队名称、对应的工程模块、Integrated Kits（选择Ads Kit），然后点击"Next"。

   <br />

   ![](https://media:201785910041871784)  
   您在选择团队名称和对应的工程模块之后，HMS Toolkit会自动检测AppGallery Connect上是否有对应的应用。若有以下报错，请根据界面提示点击"Link"到AppGallery Connect上检查是否已创建应用。
   * 如果没有，请创建新的应用，然后点击"Retry"重试。
   * 如果已有应用，请根据界面提示检查团队名称和工程模块是否选择正确，然后点击"Retry"重试。

   ![](https://media:201785910041902785)

   报错修复后的界面如下：

   ![](https://media:201785910041936786)

   HMS Toolkit会自动对Ads Kit的使用环境进行环境配置检查，包括通用环境配置检查和Kit专用环境配置检查。

   ![](https://media:201785910041964787)

   HMS Toolkit会自动处理检查项，并逐项检查是否配置正确。全部检查项均通过，则可以点击"Go to coding assistant"调用对应的接口，详细操作请参见[4.5.1-Kit集成向导。](https://developer.huawei.com/consumer/cn/doc/Tools-Guides/coding-assistant-0000001050061057)  
   ![](https://media:201785910041989788)  
   在您发布应用前，请将测试广告位替换为正式广告位，点击[这里](https://developer.huawei.com/consumer/cn/doc/distribution/monetize/advantage-0000001051201913)查看正式广告位的申请方法。

   <br />

#### 通过Coding Assistant集成

选择"HMS \> Coding Assistant"，然后在Kit列表中点击"Ads Kit"，整个Ads Kit的场景如下图：

![](https://media:201785910042021789)  

#### 拖拽场景卡片补齐业务代码

选择要进行开发的场景卡片，以"Banner Ads"为例，拖拽整个卡片到代码区域生成嵌入Banner Ads的代码。

![](https://media:201785910042066790 "点击放大")

当您直接拖动场景卡片时，工具会自动生成对应的Activity文件和XML布局文件，并在AndroidManifest.xml、项目级的build.gradle和应用级的build.gradle文件中写入配置信息和工程运行所需要的依赖。如果需要打开该Activity，需要您在代码中主动调用该Activity，完成后，您可以直接在设备中运行应用。  

#### 编译、加载、调试

完成上述代码后，可以使用HMS Toolkit中的Cloud Debugging来进行真机调试，具体可以参见[Cloud Debugging](https://developer.huawei.com/consumer/cn/doc/Tools-Guides/cloud-debugging-0000001051084360)。

对于Ads Kit，使用远程真机可以很好地测试您的代码是否正确集成了流量变现SDK，关于测试广告位的展示可以参见下图：

![](https://media:201785910042149791 "点击放大")  

#### 使用云测工具测试APK

1. 在菜单栏中选择"HMS \> Cloud Testing"或者在工具栏点击如下图标。

   <br />

   ![](https://media:201785910042176792 "点击放大")

   <br />

2. 在"Cloud Testing"中，点击"New Task"。

   <br />

   ![](https://media:201785910042211793 "点击放大")

   <br />

3. 配置各项任务参数，点击"Confirm"，启动测试任务。

   <br />

   * Select Category：选择测试类别。测试类别包括"Compatibility Test"（兼容性测试）、"Stability Test"（稳定性测试）、"Performance Test"（性能测试）和"Consumption Test"（功耗测试）。
   * Please Select Apk File：选择需要测试的APK文件。
   * Test Devices：选择用于测试应用的远程真机。测试稳定性（"Stability Test"）时，只能选择一个设备进行测试，其他测试项可以同时选择多个设备。
   * Test Duration：（可选）仅测试类别选择"Stability Test"生效，设置测试周期，范围为10\~60分钟。

   * Application Classification：（可选）仅测试类别选择"Performance Test"和"Consumption Test"生效，设置应用分类信息。

     ![](https://media:201785910042240794 "点击放大")

   <br />

4. 等待测试任务完成后，点击![](https://media:201785910042264795)查看测试报告。

   <br />

   ![](https://media:201785910042450796 "点击放大")

   点击"Download report"，可以将测试报告下载到本地，点击![](https://media:201785910042475797)，可以查看测试详情。各测试项的报告说明请参见[云测试指南](https://developer.huawei.com/consumer/cn/doc/development/Tools-Guides/prerequisites-0000001073333658)。

   ![](https://media:201785910042619798 "点击放大")

   <br />

#### Publish to AppGallery Connect

您的应用程序开发、调试完成后，可以直接通过HMS Core提供的Publish to AppGallery Connect功能，将您的应用程序APK文件发布到华为应用市场。

1. 在HMS菜单中，点击"Publish to AppGallery Connect"。
2. 选择团队名称和要发布的APK文件（最大不超过1GB），点击"Upload"完成上传。

   <br />

   ![](https://media:201785910042643799)  
   上传APK文件会有如下两个检验，如有报错，请修改后重新上传。
   * APK文件的格式必须是release。生成方法请参见[如何在项目工程中生成release.apk文件](https://developer.huawei.com/consumer/cn/doc/Tools-Guides/faq-0000001050061059#section9273037134510)。
   * 获取SHA256证书指纹且已经配置到AGC的应用中。操作步骤：在cmd中输入以下命令来读取APK文件的信息值，然后从信息值里获取SHA256证书指纹，再将SHA256证书指纹填写到对应的应用中。

     ```
     >keytool -printcert -jarfile 工程目录下的app-release.apk路径
     ```

     "工程目录下的app-release.apk路径"请根据实际路径进行替换。

   ![](https://media:201785910042680800 "点击放大")

   <br />

3. 上传完成后，点击"RELEASE"，进入"应用上架 \> 准备提交"页面。

   <br />

   ![](https://media:201785910042719801 "点击放大")

   <br />

4. 填写应用上架的相关信息并提交审核。

   <br />

   ![](https://media:201785910042759802 "点击放大")

   <br />

