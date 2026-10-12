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

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/-ymUNyWzSte4wVJyuQfu_g/zh-cn_image_0000002731382587.png?HW-CC-KV=V1&HW-CC-Date=20261010T073010Z&HW-CC-Expire=31536000000&HW-CC-Sign=26A150515D5826EA06FFD22FB60D4DCAFD04EA0F732C32AD8A46123EB7330278)

2. 在选项下方添加检查规则，多条规则用英文逗号隔开，检查规则具体请参考[Clang-Tidy Checks网站](https://releases.llvm.org/19.1.0/tools/clang/tools/extra/docs/clang-tidy/checks/list.html)。

   添加检查规则时，可点击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a4/v3/iN0cm3ZqQPCJFYqapLnjCQ/zh-cn_image_0000002701823284.png?HW-CC-KV=V1&HW-CC-Date=20261010T073010Z&HW-CC-Expire=31536000000&HW-CC-Sign=5A13DA999B657A035B46122B46429937FE24AF9A0984B075F9EE6AC30369116B)按钮展开规则填写框，在不同行添加规则。添加完成后点击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dc/v3/dS-0m922TLiPn7gtaEvOKw/zh-cn_image_0000002701823288.png?HW-CC-KV=V1&HW-CC-Date=20261010T073010Z&HW-CC-Expire=31536000000&HW-CC-Sign=7EDB90197BECA86D05CAC758EB9C601CF1BB3641956B4ED76D11E4963C6A3C49)按钮，多条规则会自动用英文逗号隔开。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0/v3/Z7iyF8WOS9WGRv2WP6P0-Q/zh-cn_image_0000002731382599.png?HW-CC-KV=V1&HW-CC-Date=20261010T073010Z&HW-CC-Expire=31536000000&HW-CC-Sign=4059B7E05F6D68CA0004EA47ABE7B3D493F6454F09B302FB7AB5868237CA6DF8)

### 方式二：在 .clang-tidy文件中配置

1. 在工程根目录中或在编辑器中搜索找到并打开 .clang-tidy文件。
2. 在**Checks** 字段中添加检查规则，多条规则使用英文逗号隔开，检查规则具体请参考[Clang-Tidy Checks网站](https://releases.llvm.org/19.1.0/tools/clang/tools/extra/docs/clang-tidy/checks/list.html)。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4c/v3/t51ToDS1QgCkNe2cOctJLQ/zh-cn_image_0000002701663374.png?HW-CC-KV=V1&HW-CC-Date=20261010T073010Z&HW-CC-Expire=31536000000&HW-CC-Sign=B69537622BDCF4B1B683EC986C1B048B593696FEA93E61FD9C97A763A39EBE0A)

### 方式三：在Inspection-checks中配置

1. 通过如下两种方法进入Inspect Code。

   * 在工程目录顶部或工程目录中任意文件，单击鼠标右键选择**Inspect Code**...。
   * 在菜单栏点击**Code >** **Inspect Code**...。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d2/v3/RITc3he9SxSFyfcmWoeqGw/zh-cn_image_0000002701663366.png?HW-CC-KV=V1&HW-CC-Date=20261010T073010Z&HW-CC-Expire=31536000000&HW-CC-Sign=951A374CEB55C2EAFFF6F4A40B202995E8DB2A51813C82A3C8A768E4EC02C685)

2. 点击**Configure...** **> CPP > clang-tidy** ，在**checks** 中添加检查规则，多条规则使用英文逗号隔开，检查规则具体请参考[Clang-Tidy Checks网站](https://releases.llvm.org/19.1.0/tools/clang/tools/extra/docs/clang-tidy/checks/list.html)。

   添加检查规则时，可点击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/27/v3/Eeaide6cRBytLVFSCui5PA/zh-cn_image_0000002731542561.png?HW-CC-KV=V1&HW-CC-Date=20261010T073010Z&HW-CC-Expire=31536000000&HW-CC-Sign=D402E1B093EEB8CDAF36EC25AC758F862C2EAA61C47F90549DDA7304C9691293)按钮展开规则填写框，在不同行添加规则。添加完成后点击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bf/v3/cUfX3ePzRRyQDYa_e3YJbw/zh-cn_image_0000002701823294.png?HW-CC-KV=V1&HW-CC-Date=20261010T073010Z&HW-CC-Expire=31536000000&HW-CC-Sign=15337988A2E5D7B15173AC9C9DA822ACFC276D9E5A10E63F9C6C6B5A0D466C3C)按钮，多条规则会自动用英文逗号隔开。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ec/v3/4SHVxIHbSRmyP4iwyzBvuw/zh-cn_image_0000002731382591.png?HW-CC-KV=V1&HW-CC-Date=20261010T073010Z&HW-CC-Expire=31536000000&HW-CC-Sign=D495DFC98829B035D14CB3419E7CCD6B14768DEC52B8DD997FACC28EDC1DF688)

## 通过内置Clang-Tidy检查代码

使用内置Clang-Tidy进行代码自动实时检查和手动检查。

### 自动实时检查

**生效规则**

若勾选了**live update** **（show in "Current File"）** ，自动实时检查时，[Clang-Tidy Checks](#section386618116187)、[.clang-tidy文件](#section158716295189)和[Inspection-checks中](#section841663417181)配置的规则均生效；若不勾选**live update** **（show in "Current File"）** ，自动实时检查时，[Clang-Tidy Checks](#section386618116187)和 [.clang-tidy文件](#section158716295189)中配置的规则生效。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7c/v3/W4UZfO4ZSd6VJrbytiJ07w/zh-cn_image_0000002701663364.png?HW-CC-KV=V1&HW-CC-Date=20261010T073010Z&HW-CC-Expire=31536000000&HW-CC-Sign=2FFCC5F008114A76C616233346D50D73EA39D868042DAEF0F788375D5E22B719)

**操作步骤**

代码编辑时，工具自动提示语法错误等，将鼠标放置在错误代码处会显示详细的错误信息。

### 手动检查

**生效规则**

手动检查时，仅[Inspection-checks中配置的规则](#section841663417181)生效。

**操作步骤**

1. 通过如下两种方法，进入手动检查入口。

   * 在工程目录顶部或工程目录中任意文件，单击鼠标右键选择**Inspect Code**...。
   * 在菜单栏点击**Code >** **Inspect Code**...。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/vN2JN29fRpSRjBNlvuaFLg/zh-cn_image_0000002731382589.png?HW-CC-KV=V1&HW-CC-Date=20261010T073010Z&HW-CC-Expire=31536000000&HW-CC-Sign=CA6C6D102C51E9AC63097A6C4B7B06A3B7A652E82216B6A687F59618D7933514)

2. 指定检查范围，如整个工程、某个模块或者具体文件，单击**Analyze**按钮执行代码检查。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/37/v3/TEZUa1j2SFyuuZQCDzChEw/zh-cn_image_0000002701823282.png?HW-CC-KV=V1&HW-CC-Date=20261010T073010Z&HW-CC-Expire=31536000000&HW-CC-Sign=E7FA4E88DC4C4E801F5C8F7A7A5BFC235B9CFAAC5AC08535F1893F8E3E4B8601)

3. 检查完成后在界面左下方可查看告警文件和告警信息，点击告警信息可跳转至具体代码位置，开发者可在界面右下方代码区和上方代码区编辑修改。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f9/v3/OH2jkt_dR3KQDqdZ4DbMLA/zh-cn_image_0000002731382595.png?HW-CC-KV=V1&HW-CC-Date=20261010T073010Z&HW-CC-Expire=31536000000&HW-CC-Sign=1A14AA013D2F94E0BA477B50DE0CBAF2DB8BCFFE7370CED442382CA09D7A6CBE)

## 通过自定义Clang-Tidy检查代码

从26.0.0版本开始，支持使用自定义Clang-Tidy进行代码自动实时检查和手动检查。

**生效规则**

1. 勾选Prefer .clang-tidy files over IDE settings时，自动实时检查和手动检查时，[.clang-tidy文件中配置的规则](#section158716295189)生效。
2. 不勾选Prefer .clang-tidy files over IDE settings时，自动实时检查和手动检查时，[Inspection-checks中配置的规则](#section841663417181)生效。

**操作步骤**

1. 在菜单栏进入**File > Settings...** （macOS系统为**DevEco Studio > Preferences/Settings...** ）> **Languages & Frameworks** > **C/C++** ，勾选**Use external Clang-Tidy instead of the built-in one**，添加clang-tidy.exe程序文件。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cd/v3/36XO8OO8Sw2x0WkECprOIg/zh-cn_image_0000002731382593.png?HW-CC-KV=V1&HW-CC-Date=20261010T073010Z&HW-CC-Expire=31536000000&HW-CC-Sign=A89B385AB7DB11497ACA58A803C16CAA83B3E325C51430BEB915BEE3B326F8FB)
   > 说明
   >
   > clang-tidy.exe可从DevEco Studio安装目录中获取。

2. 选择生效规则和开启实时检查。

   * 进入clang-tidy界面，若勾选**Prefer .clang-tidy files over IDE settings** ， [.clang-tidy文件中配置的规则](#section158716295189)生效；若不勾选**Prefer .clang-tidy files over IDE settings** ，[Inspection-checks中配置的规则](#section841663417181)生效。
   * 若勾选**live update（show in "Current File"）** ，会开启自动实时检查；若不勾选，需要手动检查，手动检查操作具体请参考[内置Clang-Tidy的手动检查](#section1395112325376)。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/83/v3/KC7kYqTfTymjEhpJtgvO5w/zh-cn_image_0000002731542559.png?HW-CC-KV=V1&HW-CC-Date=20261010T073010Z&HW-CC-Expire=31536000000&HW-CC-Sign=1CDB6A35875A2F733511FCEA8239ABD3ADD7FD827FA3ADB720EBDE6FDBFF4C99)

