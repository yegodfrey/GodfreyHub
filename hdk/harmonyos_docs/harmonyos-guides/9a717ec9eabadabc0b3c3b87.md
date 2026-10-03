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

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/46/v3/D9H8CCorRMWQIV0FKdn1Mw/zh-cn_image_0000002731382587.png?HW-CC-KV=V1&HW-CC-Date=20260928T063033Z&HW-CC-Expire=31536000000&HW-CC-Sign=991023BA3C3DE9349270DC11BC6C425850C0FCAFB5D9ACEDF73A659F13260ED2)

2. 在选项下方添加检查规则，多条规则用英文逗号隔开，检查规则具体请参考[Clang-Tidy Checks网站](https://releases.llvm.org/19.1.0/tools/clang/tools/extra/docs/clang-tidy/checks/list.html)。

   添加检查规则时，可点击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a2/v3/u3btZrlfSu21JF3VHdQkWA/zh-cn_image_0000002701823284.png?HW-CC-KV=V1&HW-CC-Date=20260928T063033Z&HW-CC-Expire=31536000000&HW-CC-Sign=4C79BA9FFDA8FDF58A1507282250539533EE1B14AAAC9B8E0D35CDBD308A6894)按钮展开规则填写框，在不同行添加规则。添加完成后点击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ee/v3/end9M8oGQlG2xQipJMiE9A/zh-cn_image_0000002701823288.png?HW-CC-KV=V1&HW-CC-Date=20260928T063033Z&HW-CC-Expire=31536000000&HW-CC-Sign=A5211B2AEB749F4464DB5CD74FD5B33A1919A5B1C7F94F9DA43B54E0156D8EE4)按钮，多条规则会自动用英文逗号隔开。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/88/v3/sFTzPP1ARnKKhb5rLQFY3g/zh-cn_image_0000002731382599.png?HW-CC-KV=V1&HW-CC-Date=20260928T063033Z&HW-CC-Expire=31536000000&HW-CC-Sign=5EE0B247784FA47E3B49A96AB6A899A21C1432EF991DE82E3D3AEA7EB79C2FBA)

### 方式二：在 .clang-tidy文件中配置

1. 在工程根目录中或在编辑器中搜索找到并打开 .clang-tidy文件。
2. 在**Checks** 字段中添加检查规则，多条规则使用英文逗号隔开，检查规则具体请参考[Clang-Tidy Checks网站](https://releases.llvm.org/19.1.0/tools/clang/tools/extra/docs/clang-tidy/checks/list.html)。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ad/v3/5OpQ5iLBQa6t6oV0UVVIDw/zh-cn_image_0000002701663374.png?HW-CC-KV=V1&HW-CC-Date=20260928T063033Z&HW-CC-Expire=31536000000&HW-CC-Sign=81CB88452A958E24AE927914965D1E841A3A25AE5C502FF93BC7D9F35AF73F8C)

### 方式三：在Inspection-checks中配置

1. 通过如下两种方法进入Inspect Code。

   * 在工程目录顶部或工程目录中任意文件，单击鼠标右键选择**Inspect Code**...。
   * 在菜单栏点击**Code >** **Inspect Code**...。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4b/v3/JawjBgk-RPqNVMqhYu6lbA/zh-cn_image_0000002701663366.png?HW-CC-KV=V1&HW-CC-Date=20260928T063033Z&HW-CC-Expire=31536000000&HW-CC-Sign=531A622F60AD42FE5033AFA9E75D3BCF7D540A3BAA53B626B04E0B5A43955CCB)

2. 点击**Configure...** **> CPP > clang-tidy** ，在**checks** 中添加检查规则，多条规则使用英文逗号隔开，检查规则具体请参考[Clang-Tidy Checks网站](https://releases.llvm.org/19.1.0/tools/clang/tools/extra/docs/clang-tidy/checks/list.html)。

   添加检查规则时，可点击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e0/v3/9iMfu4fATMm5PBYoQopZEQ/zh-cn_image_0000002731542561.png?HW-CC-KV=V1&HW-CC-Date=20260928T063033Z&HW-CC-Expire=31536000000&HW-CC-Sign=FB99C289F7C4CEE2911AF1786874D84B503F5EAC183601FBAE2C33A0B7364006)按钮展开规则填写框，在不同行添加规则。添加完成后点击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/86/v3/gdgssIWHRmagBH1wtLtVXg/zh-cn_image_0000002701823294.png?HW-CC-KV=V1&HW-CC-Date=20260928T063033Z&HW-CC-Expire=31536000000&HW-CC-Sign=25B694EB1845F8FF2A5C4F68AA57E02A5EB6D004DB31E5368BFD740CF4C37054)按钮，多条规则会自动用英文逗号隔开。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a9/v3/yJsFFTCaQWO7dZGTCfWO4A/zh-cn_image_0000002731382591.png?HW-CC-KV=V1&HW-CC-Date=20260928T063033Z&HW-CC-Expire=31536000000&HW-CC-Sign=F02E78EE2042C796DC1AD42BA863976B5635766F795EA0DD66944A45BB2AE7BC)

## 通过内置Clang-Tidy检查代码

使用内置Clang-Tidy进行代码自动实时检查和手动检查。

### 自动实时检查

**生效规则**

若勾选了**live update** **（show in "Current File"）** ，自动实时检查时，[Clang-Tidy Checks](#section386618116187)、[.clang-tidy文件](#section158716295189)和[Inspection-checks中](#section841663417181)配置的规则均生效；若不勾选**live update** **（show in "Current File"）** ，自动实时检查时，[Clang-Tidy Checks](#section386618116187)和 [.clang-tidy文件](#section158716295189)中配置的规则生效。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/02/v3/IzPPsWkcQLyO6Uk2lYi2IQ/zh-cn_image_0000002701663364.png?HW-CC-KV=V1&HW-CC-Date=20260928T063033Z&HW-CC-Expire=31536000000&HW-CC-Sign=94CC895DC350CD4289FFC52D599F3C9CF9D1D11B46E69411C9A17D6C81B60DD2)

**操作步骤**

代码编辑时，工具自动提示语法错误等，将鼠标放置在错误代码处会显示详细的错误信息。

### 手动检查

**生效规则**

手动检查时，仅[Inspection-checks中配置的规则](#section841663417181)生效。

**操作步骤**

1. 通过如下两种方法，进入手动检查入口。

   * 在工程目录顶部或工程目录中任意文件，单击鼠标右键选择**Inspect Code**...。
   * 在菜单栏点击**Code >** **Inspect Code**...。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8a/v3/KmNAs-04QFWUIws0l4f8hg/zh-cn_image_0000002731382589.png?HW-CC-KV=V1&HW-CC-Date=20260928T063033Z&HW-CC-Expire=31536000000&HW-CC-Sign=95A39D91A35B58CF742CA93670A1449B033AE602890BE9E2BE74A154DE4E64DA)

2. 指定检查范围，如整个工程、某个模块或者具体文件，单击**Analyze**按钮执行代码检查。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/96/v3/nSd5kjY3RmKvAUWxfm1EPA/zh-cn_image_0000002701823282.png?HW-CC-KV=V1&HW-CC-Date=20260928T063033Z&HW-CC-Expire=31536000000&HW-CC-Sign=235EEBABF6DE198375EDF5588E2B0A371F929157DA7A341A8CACD15F4796A9B6)

3. 检查完成后在界面左下方可查看告警文件和告警信息，点击告警信息可跳转至具体代码位置，开发者可在界面右下方代码区和上方代码区编辑修改。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a6/v3/PgJUcfZkQSKNf-qUXpbC0w/zh-cn_image_0000002731382595.png?HW-CC-KV=V1&HW-CC-Date=20260928T063033Z&HW-CC-Expire=31536000000&HW-CC-Sign=F622AEA0F625453B00C81943BAB87C9BD79AA204BAFC85316F76FF2D911A21FB)

## 通过自定义Clang-Tidy检查代码

从26.0.0版本开始，支持使用自定义Clang-Tidy进行代码自动实时检查和手动检查。

**生效规则**

1. 勾选Prefer .clang-tidy files over IDE settings时，自动实时检查和手动检查时，[.clang-tidy文件中配置的规则](#section158716295189)生效。
2. 不勾选Prefer .clang-tidy files over IDE settings时，自动实时检查和手动检查时，[Inspection-checks中配置的规则](#section841663417181)生效。

**操作步骤**

1. 在菜单栏进入**File > Settings...** （macOS系统为**DevEco Studio > Preferences/Settings...** ）> **Languages & Frameworks** > **C/C++** ，勾选**Use external Clang-Tidy instead of the built-in one**，添加clang-tidy.exe程序文件。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/67/v3/DCoOVKsZTbSS01cNlbujPw/zh-cn_image_0000002731382593.png?HW-CC-KV=V1&HW-CC-Date=20260928T063033Z&HW-CC-Expire=31536000000&HW-CC-Sign=4D58C75212E703EF2BB52EDF4AEA48CABEA71FDD6F33C85DCA75A05FD86B0165)
   > 说明
   >
   > clang-tidy.exe可从DevEco Studio安装目录中获取。

2. 选择生效规则和开启实时检查。

   * 进入clang-tidy界面，若勾选**Prefer .clang-tidy files over IDE settings** ， [.clang-tidy文件中配置的规则](#section158716295189)生效；若不勾选**Prefer .clang-tidy files over IDE settings** ，[Inspection-checks中配置的规则](#section841663417181)生效。
   * 若勾选**live update（show in "Current File"）** ，会开启自动实时检查；若不勾选，需要手动检查，手动检查操作具体请参考[内置Clang-Tidy的手动检查](#section1395112325376)。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/9bKAy6JAQMaDiQgjwWrSqg/zh-cn_image_0000002731542559.png?HW-CC-KV=V1&HW-CC-Date=20260928T063033Z&HW-CC-Expire=31536000000&HW-CC-Sign=C8CCBE403D014163F40B18A125486426EF8CD8869D04AB6AEAAB36676610EB2C)

