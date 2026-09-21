---
name: document/cn/harmonyos-guides/ide-clang-tidy
title: Clang-Tidy代码检查
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-clang-tidy
---

# Clang-Tidy代码检查

DevEco Studio支持通过内置的Clang-Tidy和自定义的Clang-Tidy对C/C++代码进行静态检查，以及支持配置检查规则，帮助开发者快速发现C++编码的问题。

## 检查规则配置

当前支持通过三种方式配置检查规则。

### 方式一：在Clang-Tidy Checks中配置

1. 在菜单栏进入**File > Settings...** （macOS系统为**DevEco Studio > Preferences/Settings...** ）> **Languages & Frameworks** > **C/C++** ，勾选**Use clang-tidy via clangd to enable the following checks**选项。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/24/v3/Kppno8rDTHmrGuP8-XCG_g/zh-cn_image_0000002731382587.png?HW-CC-KV=V1&HW-CC-Date=20260915T011703Z&HW-CC-Expire=31536000000&HW-CC-Sign=60E4E1ACA112892DABD2B053E88A1E478CA738C4C9C34B49B80F7DF34173CBAA)

2. 在选项下方添加检查规则，多条规则用英文逗号隔开，检查规则具体请参考[Clang-Tidy Checks网站](https://releases.llvm.org/19.1.0/tools/clang/tools/extra/docs/clang-tidy/checks/list.html)。

   添加检查规则时，可点击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7d/v3/GGdsTaQaTPuWntNDiSHG9g/zh-cn_image_0000002701823284.png?HW-CC-KV=V1&HW-CC-Date=20260915T011703Z&HW-CC-Expire=31536000000&HW-CC-Sign=B0047B2BDFB7DAB9A1DE388A46C7C72AE2D2D2F79ED2C95BF5931BB2C56AD529)按钮展开规则填写框，在不同行添加规则。添加完成后点击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/92/v3/YDuRFLWTSJm-VGtCBcDquw/zh-cn_image_0000002701823288.png?HW-CC-KV=V1&HW-CC-Date=20260915T011703Z&HW-CC-Expire=31536000000&HW-CC-Sign=C3E90C9E8A391A249F18A245E9D79FB8063779A129372966BF38AADAB7335634)按钮，多条规则会自动用英文逗号隔开。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d5/v3/52kqSKzJSrChLNjfcwWbnw/zh-cn_image_0000002731382599.png?HW-CC-KV=V1&HW-CC-Date=20260915T011703Z&HW-CC-Expire=31536000000&HW-CC-Sign=E792392A2436ABB950345E4C4C3D229B2A34E812E556F84F919FCADEB0AD803A)

### 方式二：在 .clang-tidy文件中配置

1. 在工程根目录中或在编辑器中搜索找到并打开 .clang-tidy文件。
2. 在**Checks** 字段中添加检查规则，多条规则使用英文逗号隔开，检查规则具体请参考[Clang-Tidy Checks网站](https://releases.llvm.org/19.1.0/tools/clang/tools/extra/docs/clang-tidy/checks/list.html)。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/32/v3/W1_kf4GiSUGijz1BIFMoyQ/zh-cn_image_0000002701663374.png?HW-CC-KV=V1&HW-CC-Date=20260915T011703Z&HW-CC-Expire=31536000000&HW-CC-Sign=11ADFC3EBDAC29391DAF1E8B77E48CF50E80994CD304DB923E6644967C14FE64)

### 方式三：在Inspection-checks中配置

1. 通过如下两种方法进入Inspect Code。

   * 在工程目录顶部或工程目录中任意文件，单击鼠标右键选择**Inspect Code**...。
   * 在菜单栏点击**Code >** **Inspect Code**...。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b8/v3/BKNq3HJxS_S5g72ebqrEkA/zh-cn_image_0000002701663366.png?HW-CC-KV=V1&HW-CC-Date=20260915T011703Z&HW-CC-Expire=31536000000&HW-CC-Sign=A50E590DC247C44679CF077BC8BB0EC823BEB7E343276FB369D0F43D56392076)

2. 点击**Configure...** **> CPP > clang-tidy** ，在**checks** 中添加检查规则，多条规则使用英文逗号隔开，检查规则具体请参考[Clang-Tidy Checks网站](https://releases.llvm.org/19.1.0/tools/clang/tools/extra/docs/clang-tidy/checks/list.html)。

   添加检查规则时，可点击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b2/v3/j7XkVu9tRfC254AIbDllUA/zh-cn_image_0000002731542561.png?HW-CC-KV=V1&HW-CC-Date=20260915T011703Z&HW-CC-Expire=31536000000&HW-CC-Sign=34597B276392571EF0C93338C79EAC2B69F122788B5CFD06C1F319A27A421AE0)按钮展开规则填写框，在不同行添加规则。添加完成后点击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/57/v3/7-XmeB3yTu-P2hQqUHPtyQ/zh-cn_image_0000002701823294.png?HW-CC-KV=V1&HW-CC-Date=20260915T011703Z&HW-CC-Expire=31536000000&HW-CC-Sign=43F799410F4C0CF660B1B7F00A7F13BD54C60B09D2718A20E9437DEFD7935BD0)按钮，多条规则会自动用英文逗号隔开。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/16/v3/UM3vKzsgQp6bUOJZN96viA/zh-cn_image_0000002731382591.png?HW-CC-KV=V1&HW-CC-Date=20260915T011703Z&HW-CC-Expire=31536000000&HW-CC-Sign=74967676BC1E8998643E488DCE40670F9ABC274A715B247FEBBE3D0E38FF805B)

## 通过内置Clang-Tidy检查代码

使用内置Clang-Tidy进行代码自动实时检查和手动检查。

### 自动实时检查

**生效规则**

若勾选了**live update** **（show in "Current File"）** ，自动实时检查时，[Clang-Tidy Checks](#section386618116187)、[.clang-tidy文件](#section158716295189)和[Inspection-checks中](#section841663417181)配置的规则均生效；若不勾选**live update** **（show in "Current File"）** ，自动实时检查时，[Clang-Tidy Checks](#section386618116187)和 [.clang-tidy文件](#section158716295189)中配置的规则生效。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/46/v3/GgS7nlWiSUiHRNV2i9_rQg/zh-cn_image_0000002701663364.png?HW-CC-KV=V1&HW-CC-Date=20260915T011703Z&HW-CC-Expire=31536000000&HW-CC-Sign=55D550CB521E39CE50BFB700A9C503E634D35C1FAEDAFB5642A70CE40FCB293F)

**操作步骤**

代码编辑时，工具自动提示语法错误等，将鼠标放置在错误代码处会显示详细的错误信息。

### 手动检查

**生效规则**

手动检查时，仅[Inspection-checks中配置的规则](#section841663417181)生效。

**操作步骤**

1. 通过如下两种方法，进入手动检查入口。

   * 在工程目录顶部或工程目录中任意文件，单击鼠标右键选择**Inspect Code**...。
   * 在菜单栏点击**Code >** **Inspect Code**...。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ed/v3/hANn4yPATsCw1gHG_cDxSQ/zh-cn_image_0000002731382589.png?HW-CC-KV=V1&HW-CC-Date=20260915T011703Z&HW-CC-Expire=31536000000&HW-CC-Sign=8A532E978A9CDD06038CCE695B0B637AC0AA225D21DFAE4B6DE0CAC28B571683)

2. 指定检查范围，如整个工程、某个模块或者具体文件，单击**Analyze**按钮执行代码检查。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c6/v3/tv7dwq_kTA6kbkgrePLPUA/zh-cn_image_0000002701823282.png?HW-CC-KV=V1&HW-CC-Date=20260915T011703Z&HW-CC-Expire=31536000000&HW-CC-Sign=0420C688D11FFF5B0A2AAE5A438B9481A9AC1751F5F44F58C7C5B86A7ABA280F)

3. 检查完成后在界面左下方可查看告警文件和告警信息，点击告警信息可跳转至具体代码位置，开发者可在界面右下方代码区和上方代码区编辑修改。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c7/v3/TUcG3TJeQXODGw3GWzM2CA/zh-cn_image_0000002731382595.png?HW-CC-KV=V1&HW-CC-Date=20260915T011703Z&HW-CC-Expire=31536000000&HW-CC-Sign=1DD0C9A444F657C779951F2637B9D109CD7D0A69066ECC144377411B71D4530C)

## 通过自定义Clang-Tidy检查代码

从26.0.0版本开始，支持使用自定义Clang-Tidy进行代码自动实时检查和手动检查。

**生效规则**

1. 勾选Prefer .clang-tidy files over IDE settings时，自动实时检查和手动检查时，[.clang-tidy文件中配置的规则](#section158716295189)生效。
2. 不勾选Prefer .clang-tidy files over IDE settings时，自动实时检查和手动检查时，[Inspection-checks中配置的规则](#section841663417181)生效。

**操作步骤**

1. 在菜单栏进入**File > Settings...** （macOS系统为**DevEco Studio > Preferences/Settings...** ）> **Languages & Frameworks** > **C/C++** ，勾选**Use external Clang-Tidy instead of the built-in one**，添加clang-tidy.exe程序文件。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/21/v3/O2frGftFTie5yBDnTVp_Og/zh-cn_image_0000002731382593.png?HW-CC-KV=V1&HW-CC-Date=20260915T011703Z&HW-CC-Expire=31536000000&HW-CC-Sign=BE24AEFE0BFD4790B3C66FCA48464A3F761D9B4CBC788E4FABC79E2EA3F653E2)
   > 说明
   >
   > clang-tidy.exe可从DevEco Studio安装目录中获取。

2. 选择生效规则和开启实时检查。

   * 进入clang-tidy界面，若勾选**Prefer .clang-tidy files over IDE settings** ， [.clang-tidy文件中配置的规则](#section158716295189)生效；若不勾选**Prefer .clang-tidy files over IDE settings** ，[Inspection-checks中配置的规则](#section841663417181)生效。
   * 若勾选**live update（show in "Current File"）** ，会开启自动实时检查；若不勾选，需要手动检查，手动检查操作具体请参考[内置Clang-Tidy的手动检查](#section1395112325376)。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/df/v3/KYdNJwgSSxOgSRpCjhjzVg/zh-cn_image_0000002731542559.png?HW-CC-KV=V1&HW-CC-Date=20260915T011703Z&HW-CC-Expire=31536000000&HW-CC-Sign=44E83CDE2CA66AFF729062FD554226D699607887303A68370B3E7297F63108CD)

