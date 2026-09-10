---
name: cangjie-guides/cj-run-debug-configurations
title: 自定义运行/调试配置
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-run-debug-configurations
nodePath: 编写与调试应用 / 应用调试 / 自定义运行/调试配置
---

# 自定义运行/调试配置

#### 设置调试代码类型

单击**Run > Edit Configurations > Debugger**，选择相应模块，设置Debug type即可。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/80/v3/3lD2j5QlSyyEgE98Fxl1Jw/zh-cn_image_0000002713399030.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=3EB981AF83BA9DF84A7ECA7170F3D444D01A36746C87FC5C0F8DC95EE27AF380)

工程调试类型默认为**Detect Automatically** ，关于各调试类型的说明如下表所示：

**调试类型** | **调试代码**  
---|---  
**Detect Automatically** | 新建工程默认调试器选项。根据调试的工程类型，自动启动对应的调试器。  
**ArkTS/JS** | 调试ArkTS代码。  调试JS代码。  
**Native** | 仅调试C/C++代码。  
**Dual(ArkTS/JS + Native)** | 调试C/C++工程的ArkTS/JS和C/C++代码。  
**Cangjie** | 仅调试Cangjie代码。  
**Dual(ArkTS/JS + Cangjie)** | 调试ArkTS/JS+Cangjie工程的ArkTS/JS和Cangjie代码。  
  
#### 设置HAP安装方式

在调试阶段，HAP在设备上的安装方式有2种，可以根据实际需要进行设置。

  * 安装方式一：先卸载应用后，再重新安装，该方式会清除设备上的所有应用缓存数据。
  * 安装方式二：采用覆盖安装方式，不卸载应用，该方式会保留应用的缓存数据。



设置方法如下：

单击**Run > Edit Configurations**，设置指定模块的HAP安装方式，勾选“Keep Application Data”，则表示采用覆盖安装方式，保留应用缓存数据。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8d/v3/yxDIVNz6RHiya3_8VGL19g/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=ECFDA1436C0EC3CEF092C91E20011F75062BCEACC43BF9229F5C6CEDB5901A87)

DevEco Studio默认勾选“Keep Application Data”。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6f/v3/-6byrlVIRgqBBiNuV5IPow/zh-cn_image_0000002743077961.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=CD09ECE335DFE6D005F9F8D73C429F3BAC3556BB0144E2CB07EA458F2B9CE4DF)

#### [h2]配置自定义调试参数

如果未进行自定义，将按默认配置安装和运行应用。如果开发者需要对应用安装、运行等流程增加参数配置，可在“Installation Options”和“Launch Options”下进行配置。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c5/v3/Mv-0Zac8RgSZU0NgOacBkg/zh-cn_image_0000002713559000.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=8F111D8D76872EF53B8CC8C249C77FC19B4AA1F8491EA9BA0F7903B8A37EC9A1)

  * Installation Options
    * DebugLine Support：勾选Enable DebugLine表示在build产物中系统组件增加debugline属性，用于开启ArkUI Inspector源码跳转功能，Cangjie暂不支持该功能，ArkTS等请参见[布局分析](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-arkui-inspector)。
    * Install Flags：输入bm install命令相关的选项，请参见[bm 工具](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/bm-tool)。如可以设置“-w 360”，表示将超时等待时间设置为360秒。
  * Launch Options
    * Launch：指定在安装应用后启动的Ability。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/25/v3/HhRbulI0QNepkxiHEzdVkg/zh-cn_image_0000002743197913.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=0345E379727DF939A25F68970EDA88E8709CCD96A54DE9DBACE4367320920532)

      * Nothing：只安装不启动任何Ability。

      * Default Ability：默认的EntryAbility。

        * Stage模型：module.json5文件中配置了“skills”属性的第一个ability；若无配置“skills”属性的ability，则取“mainElement”指定的ability（该ability需存在于“abilities”数组内）；若“mainElement”未指定，则取“abilities”数组内的第一个ability。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/76/v3/eV-2a10DQTSe08JFEFQYGA/zh-cn_image_0000002713399032.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=9E7E8FBECBDDBF64431F568F5B87EEADFF85C7C981935A92FBC1F84ECB9EDF73)

      * Specified Ability：工程中的ExtensionAbility。

开发者可以在工程中添加ExtensionAbility，如需了解开发ExtensionAbility，请参阅[ExtensionAbility开发指导](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/extensionability-overview), 对于WorkSchedulerExtensionAbility开发， 请参阅[WorkSchedulerExtensionAbility开发指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/work-scheduler)。

如果工程中包含ExtensionAbility，可以选择Specified Ability，在Ability指定希望调试的ExtensionAbility进行调试。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d9/v3/Ja4IV0rrSnqFa7dvJnJWwA/zh-cn_image_0000002743077963.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=683FEC32885CEA8359C5095789DD4C7F46BACDC8F1215B177F9F3D921D551EF8)

    * Launch Flags：输入aa start命令相关的选项，请参见[aa 工具](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/aa-tool)。




#### [h2]配置环境变量

如果开发者需要配置和管理应用开发环境，以及控制应用程序的行为，可在“Environment Variables”下配置环境变量。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a2/v3/ko9c2sRMQc-LfhTKIIDEJw/zh-cn_image_0000002713559002.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=B701D567B9373AC39C5AE6FD7E327E623D499DBA6E34686EB39DD467B3B9F4D8)

单击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9e/v3/GgXdu6qLSamYUah9Xfc_Rg/zh-cn_image_0000002743197915.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=F207335A35E4D81E066B97E73B3CB19D99172CB0D41817FB10296E5B8CCFFAFE)按钮，新增一行配置项。当前支持以下配置项：

  * ASAN_OPTIONS：运行时配置ASan的行为，包括设置检测级别、输出格式、内存错误报告的详细程度等，具体可配置的value请参见[使用ASan检测内存错误-表1](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-asan-detection#table103859310379)。若开发者未配置log_exe_name、log_path、abort_on_error，DevEco Studio将自动填充。ASAN_OPTIONS是应用级别的，只在entry和feature模块中配置生效，HAR/HSP模块配置不生效。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c7/v3/x6WA7WXWQmyK05pFNYa8Bw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=99DFCE5BF4D1065EF983558C40F9A032B48E70796B55F9AC48D428E18A22183E)

当配置Environment Variables后，“Keep Application Data”覆盖安装不生效。

环境变量配置完成后，需确保环境变量已勾选，勾选后单击**Apply** 才可生效。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4b/v3/qz5aKbRMTluHEUnsuj_dmw/zh-cn_image_0000002713399034.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=AB98922E3BA6EAF1B0D0ACDA0651D810F7272D803234230CFF07FA5396BBD4A6)

#### 多模块调试

#### [h2]安装多个模块

如果一个工程中同一个设备存在多个模块（如存在entry和feature模块），且存在模块间的调用时，在调试阶段需要同时安装多个模块的HAP包到设备中。此时，需要在**Deploy Multi Hap** 中选择多个模块，启动调试时，DevEco Studio会将所有的模块都安装到设备上。

设置方法如下：

单击**Run > Edit Configurations**，在**Deploy Multi Hap** 中，勾选**Deploy Multi Hap Packages** ，选择多个模块。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/96/v3/GEambhA5S26ZWUl-1yEE9A/zh-cn_image_0000002743077965.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=588B12BDA147CEBCA9B7156F93765375F279162D49F013834D8BA5C4E8297376)

#### [h2]自动安装依赖

如果一个工程中entry/feature/HSP模块直接依赖其他HAR/HSP模块（如entry模块依赖HSP模块）及间接依赖其他模块（如entry模块依赖HAR模块，HAR又依赖HSP模块）时，在调试阶段需要同时安装模块包及其所有依赖模块的包到设备中。此时，可以设置**Auto Dependencies** ，启动调试时会自动将所有依赖的模块都安装到设备上。

这里有两个设置方法如下：

单击**Run > Edit Configurations**，在**General** 中，勾选**Auto Dependencies** 。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/97/v3/yGpDwJRBRiKy3pbxYJKEHw/zh-cn_image_0000002713559004.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=83C1452AEE4573C5D3189CE5A72135EAAB3851EA6C6DC9944BE4826171C6A015)

在Before launch窗格中，开发者可以单击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/87/v3/ny4lf7h1TyuqbpMiqMwbIA/zh-cn_image_0000002743197915.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=6665216F780E81BA8543E49ED08B243496954FCCE1A3D93A89CF32ECFA0F4BDA)添加应用启动前的任务。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8f/v3/M07qcBIzSoChAJBxp9hqAQ/zh-cn_image_0000002743197917.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=F23C4829F67172BFECABF03D047BB833F9098C290A7E01541494006C79676CBB)

也可以单击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ef/v3/DQkER-tiQ_6x0cQQCFb-ZA/zh-cn_image_0000002713399036.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=8F97BD6372A0E8A427899871BD0ECF0A5AE608D430A8917E1E0ABA2687EA4245)移除任务。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bd/v3/JTdJRMPkRBSZnI7Nex5FwA/zh-cn_image_0000002743077967.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=D9A4BFD333E1AD660E602C1EAE7117D1F951FF8D102C0F393F655E9CBC695C21)

在勾选**Auto Dependencies** 后，可以同时勾选**Deploy Multi Hap Packages** ，从而达到推送所有包的效果。
