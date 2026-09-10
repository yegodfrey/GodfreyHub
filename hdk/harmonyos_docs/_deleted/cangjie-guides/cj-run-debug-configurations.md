---
name: cangjie-guides/cj-run-debug-configurations
title: 自定义运行/调试配置
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-run-debug-configurations
nodePath: 编写与调试应用 / 应用调试 / 自定义运行/调试配置
---

# 自定义运行/调试配置

#### 设置调试代码类型

单击**Run > Edit Configurations > Debugger**，选择相应模块，设置Debug type即可。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8/v3/cKewm-r0RyCRxRyLe2L3HA/zh-cn_image_0000002731538913.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=8643286685E8769DAC36076CBD4B3893F563B3B39228AE645C31D17153B9C6E4)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6c/v3/M3LjNGJfQoKqRYKtwQqG8g/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=313071570377F45D1710BB214C8FC7B1BF38761F8AA401E851F86196C89B134C)

DevEco Studio默认勾选“Keep Application Data”。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a4/v3/8-swSZItRM21QtBnOM8jww/zh-cn_image_0000002701659724.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=6D87612757BC68EA2E4BF9B91097C15FD5E899DDCFB59491A06ACB30366C1A1E)

#### [h2]配置自定义调试参数

如果未进行自定义，将按默认配置安装和运行应用。如果开发者需要对应用安装、运行等流程增加参数配置，可在“Installation Options”和“Launch Options”下进行配置。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e/v3/_E__nIPFRHuxm8HerDPzgA/zh-cn_image_0000002731378939.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=6240302175315098C46334911ABE360038054BC9C71F9218CB0EE3798EDEC2DA)

  * Installation Options
    * DebugLine Support：勾选Enable DebugLine表示在build产物中系统组件增加debugline属性，用于开启ArkUI Inspector源码跳转功能，Cangjie暂不支持该功能，ArkTS等请参见[布局分析](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-arkui-inspector)。
    * Install Flags：输入bm install命令相关的选项，请参见[bm 工具](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/bm-tool)。如可以设置“-w 360”，表示将超时等待时间设置为360秒。
  * Launch Options
    * Launch：指定在安装应用后启动的Ability。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1d/v3/KY0BiMVbR5Clzyvmgv3S5Q/zh-cn_image_0000002701819634.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=FF2782BEF78D2EBE1F2271FA6B5A06471B326F2F904E6CB87CE1C07187A18EA3)

      * Nothing：只安装不启动任何Ability。

      * Default Ability：默认的EntryAbility。

        * Stage模型：module.json5文件中配置了“skills”属性的第一个ability；若无配置“skills”属性的ability，则取“mainElement”指定的ability（该ability需存在于“abilities”数组内）；若“mainElement”未指定，则取“abilities”数组内的第一个ability。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/67/v3/x8-irEPSTwGFTZ6XK5R6tQ/zh-cn_image_0000002731538915.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=E1EB03073740B7D2ADE0ADF8C60E2B5DD85C7AFB8EC9BC3F01AEBF6B3CEB3804)

      * Specified Ability：工程中的ExtensionAbility。

开发者可以在工程中添加ExtensionAbility，如需了解开发ExtensionAbility，请参阅[ExtensionAbility开发指导](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/extensionability-overview), 对于WorkSchedulerExtensionAbility开发， 请参阅[WorkSchedulerExtensionAbility开发指南](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/work-scheduler)。

如果工程中包含ExtensionAbility，可以选择Specified Ability，在Ability指定希望调试的ExtensionAbility进行调试。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0d/v3/l2sbx2qgThCt2HxVa2PuXQ/zh-cn_image_0000002701659726.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=E4EF4E0AF02A0C04E0DBFF622A3FED93070E0F223118FBC399BE10AB201B0DD7)

    * Launch Flags：输入aa start命令相关的选项，请参见[aa 工具](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/aa-tool)。




#### [h2]配置环境变量

如果开发者需要配置和管理应用开发环境，以及控制应用程序的行为，可在“Environment Variables”下配置环境变量。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e8/v3/gH-MN5lvToiNMNd7jqmXGw/zh-cn_image_0000002731378941.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=D8C6D50D1BB726E2A7C7283AF93D9C3F2BA13D8CA78E31B9FA4EAC4DC7A5EE6A)

单击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2b/v3/bGxuoRIjRkixdY0ucdGIWw/zh-cn_image_0000002701819636.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=36D6DBDEB8C581D586777FD4800DAB5E6B6EDD756E6B7D0706DA7E82FE95FA8A)按钮，新增一行配置项。当前支持以下配置项：

  * ASAN_OPTIONS：运行时配置ASan的行为，包括设置检测级别、输出格式、内存错误报告的详细程度等，具体可配置的value请参见[使用ASan检测内存错误-表1](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-asan-detection#table103859310379)。若开发者未配置log_exe_name、log_path、abort_on_error，DevEco Studio将自动填充。ASAN_OPTIONS是应用级别的，只在entry和feature模块中配置生效，HAR/HSP模块配置不生效。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/Jjs3fQqATImCT8_OKeCqEw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=8F77C9743900E09F7D5697C48B8F4875C9870181C07167A2A547558E676888E5)

当配置Environment Variables后，“Keep Application Data”覆盖安装不生效。

环境变量配置完成后，需确保环境变量已勾选，勾选后单击**Apply** 才可生效。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1b/v3/glxohA5cQDGqpq4uJIg00A/zh-cn_image_0000002731538917.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=53CAB87B64CD766F2E4F48CA64651E23E4F333B479CE111F1C3DDD0B4E43EEA8)

#### 多模块调试

#### [h2]安装多个模块

如果一个工程中同一个设备存在多个模块（如存在entry和feature模块），且存在模块间的调用时，在调试阶段需要同时安装多个模块的HAP包到设备中。此时，需要在**Deploy Multi Hap** 中选择多个模块，启动调试时，DevEco Studio会将所有的模块都安装到设备上。

设置方法如下：

单击**Run > Edit Configurations**，在**Deploy Multi Hap** 中，勾选**Deploy Multi Hap Packages** ，选择多个模块。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8/v3/Z5vwdL7rRBeyjgGgcKJkrQ/zh-cn_image_0000002701659728.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=0E7C57C3FB8E860B5FDE1F898F21A7E0BEDC3B0BF72847EBCF60EEF1286BDC1E)

#### [h2]自动安装依赖

如果一个工程中entry/feature/HSP模块直接依赖其他HAR/HSP模块（如entry模块依赖HSP模块）及间接依赖其他模块（如entry模块依赖HAR模块，HAR又依赖HSP模块）时，在调试阶段需要同时安装模块包及其所有依赖模块的包到设备中。此时，可以设置**Auto Dependencies** ，启动调试时会自动将所有依赖的模块都安装到设备上。

这里有两个设置方法如下：

单击**Run > Edit Configurations**，在**General** 中，勾选**Auto Dependencies** 。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c0/v3/s4ujKf3WT1eSJvmZOHsdjg/zh-cn_image_0000002731378943.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=3D9A5EEDD8A366BA4669032182F684C9127A0894B0AEB24B62C65ACA0A977383)

在Before launch窗格中，开发者可以单击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1e/v3/nQ8K2ncpThW8PvNNW7km5w/zh-cn_image_0000002701819636.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=FF29BFF565292271F157F504F21068976E4B1B36AEACE55FD60A509CD10DA665)添加应用启动前的任务。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f5/v3/UXSqsqmSSvW6IKOBR6yNww/zh-cn_image_0000002701819638.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=ECB552BCE906D8477192499D317F49B9A2CE4ED3A85F5FDFE8FE2DB30B376712)

也可以单击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7f/v3/YJHMfYOyRICKGNvVar_urQ/zh-cn_image_0000002731538919.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=AE19965D99CDAFDBB5E58E5D305CE54A186BDD1F3A60667306CB727DA225E2DA)移除任务。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dc/v3/XxC2b-OTSySOQPP_4jpmwQ/zh-cn_image_0000002701659730.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=4512859030333D16A17416C5C7526B185FB773A88DC5781A90BD300887BF56DF)

在勾选**Auto Dependencies** 后，可以同时勾选**Deploy Multi Hap Packages** ，从而达到推送所有包的效果。
