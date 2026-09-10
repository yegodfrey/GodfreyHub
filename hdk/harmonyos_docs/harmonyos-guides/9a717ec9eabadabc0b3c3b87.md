---
name: document/cn/harmonyos-guides/ide-clang-tidy
title: Clang-Tidy代码检查
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-clang-tidy
---

# Clang-Tidy代码检查

DevEco Studio支持通过内置的Clang-Tidy和自定义的Clang-Tidy对C/C++代码进行静态检查，以及支持配置检查规则，帮助开发者快速发现C++编码的问题。  

#### 检查规则配置

当前支持通过三种方式配置检查规则。  

#### 方式一：在Clang-Tidy Checks中配置

1. 在菜单栏进入File \> Settings...（macOS系统为DevEco Studio \> Preferences/Settings...）\> Languages \& Frameworks \> C/C++，勾选Use clang-tidy via clangd to enable the following checks选项。

   <br />

   ![](https://media:401788752133161749)

   <br />

2. 在选项下方添加检查规则，多条规则用英文逗号隔开，检查规则具体请参考[Clang-Tidy Checks网站](https://releases.llvm.org/19.1.0/tools/clang/tools/extra/docs/clang-tidy/checks/list.html)。

   <br />

   添加检查规则时，可点击![](https://media:401788752133185750)按钮展开规则填写框，在不同行添加规则。添加完成后点击![](https://media:401788752133211751)按钮，多条规则会自动用英文逗号隔开。

   ![](https://media:401788752133260752)

   <br />

#### 方式二：在 .clang-tidy文件中配置

1. 在工程根目录中或在编辑器中搜索找到并打开 .clang-tidy文件。
2. 在Checks字段中添加检查规则，多条规则使用英文逗号隔开，检查规则具体请参考[Clang-Tidy Checks网站](https://releases.llvm.org/19.1.0/tools/clang/tools/extra/docs/clang-tidy/checks/list.html)。

   <br />

   ![](https://media:401788752133303753)

   <br />

#### 方式三：在Inspection-checks中配置

1. 通过如下两种方法进入Inspect Code。

   <br />

   * 在工程目录顶部或工程目录中任意文件，单击鼠标右键选择Inspect Code...。
   * 在菜单栏点击Code \> Inspect Code...。

   ![](https://media:401788752133333754)

   <br />

2. 点击Configure... \> CPP \> clang-tidy，在checks中添加检查规则，多条规则使用英文逗号隔开，检查规则具体请参考[Clang-Tidy Checks网站](https://releases.llvm.org/19.1.0/tools/clang/tools/extra/docs/clang-tidy/checks/list.html)。

   <br />

   添加检查规则时，可点击![](https://media:401788752133360755)按钮展开规则填写框，在不同行添加规则。添加完成后点击![](https://media:401788752133383756)按钮，多条规则会自动用英文逗号隔开。

   ![](https://media:401788752133439757)

   <br />

#### 通过内置Clang-Tidy检查代码

使用内置Clang-Tidy进行代码自动实时检查和手动检查。  

#### 自动实时检查

生效规则

若勾选了live update（show in "Current File"），自动实时检查时，[Clang-Tidy Checks](#section386618116187)、[.clang-tidy文件](#section158716295189)和[Inspection-checks中](#section841663417181)配置的规则均生效；若不勾选live update（show in "Current File"），自动实时检查时，[Clang-Tidy Checks](#section386618116187)和 [.clang-tidy文件](#section158716295189)中配置的规则生效。

![](https://media:401788752133488758)

操作步骤

代码编辑时，工具自动提示语法错误等，将鼠标放置在错误代码处会显示详细的错误信息。  

#### 手动检查

生效规则

手动检查时，仅[Inspection-checks中配置的规则](#section841663417181)生效。

操作步骤

1. 通过如下两种方法，进入手动检查入口。

   <br />

   * 在工程目录顶部或工程目录中任意文件，单击鼠标右键选择Inspect Code...。
   * 在菜单栏点击Code \> Inspect Code...。

   ![](https://media:401788752133522759)

   <br />

2. 指定检查范围，如整个工程、某个模块或者具体文件，单击Analyze按钮执行代码检查。

   <br />

   ![](https://media:401788752133559760)

   <br />

3. 检查完成后在界面左下方可查看告警文件和告警信息，点击告警信息可跳转至具体代码位置，开发者可在界面右下方代码区和上方代码区编辑修改。

   <br />

   ![](https://media:401788752133685761)

   <br />

#### 通过自定义Clang-Tidy检查代码

从26.0.0版本开始，支持使用自定义Clang-Tidy进行代码自动实时检查和手动检查。

生效规则

1. 勾选Prefer .clang-tidy files over IDE settings时，自动实时检查和手动检查时，[.clang-tidy文件中配置的规则](#section158716295189)生效。
2. 不勾选Prefer .clang-tidy files over IDE settings时，自动实时检查和手动检查时，[Inspection-checks中配置的规则](#section841663417181)生效。

操作步骤

1. 在菜单栏进入File \> Settings...（macOS系统为DevEco Studio \> Preferences/Settings...）\> Languages \& Frameworks \> C/C++，勾选Use external Clang-Tidy instead of the built-in one，添加clang-tidy.exe程序文件。

   <br />

   ![](https://media:401788752133723762)  
   ![](https://media:401788752133746763)  
   clang-tidy.exe可从DevEco Studio安装目录中获取。

   <br />

2. 选择生效规则和开启实时检查。

   <br />

   * 进入clang-tidy界面，若勾选Prefer .clang-tidy files over IDE settings， [.clang-tidy文件中配置的规则](#section158716295189)生效；若不勾选Prefer .clang-tidy files over IDE settings，[Inspection-checks中配置的规则](#section841663417181)生效。
   * 若勾选live update（show in "Current File"），会开启自动实时检查；若不勾选，需要手动检查，手动检查操作具体请参考[内置Clang-Tidy的手动检查](#section1395112325376)。

   ![](https://media:401788752133800764)

   <br />

