---
name: cangjie-guides/cj-module-bind-arkts
title: 仓颉引入ArkTS三方模块
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-bind-arkts
nodePath: 开发环境搭建 / 工程创建 / 模块管理 / 仓颉引入ArkTS三方模块
---

# 仓颉引入ArkTS三方模块

仓颉语言支持与ArkTS的高效跨语言互操作，允许开发者在仓颉代码中调用ArkTS的第三方库。通过解析ArkTS的类型声明文件（.d.ts或者.d.ets文件），生成仓颉语言调用ArkTS语言的互操作封装层代码。仓颉代码中即可直接调用这些封装层代码实现调用ArkTS三方库的功能，从而实现仓颉与ArkTS的高效互通。具体的使用示例请参见：[仓颉调用ArkTS三方模块](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-quick-start-dts2cj-plugin-usage)。生成仓颉语言调用ArkTS语言的互操作胶水代码的转换规则请参见：[ArkTS三方模块生成仓颉胶水代码的规则](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-dts2cj-translation-rules)。

目前使用DevEco Studio开发仓颉HarmonyOS应用时的约束和限制如下：

约束限制描述 | 类型 | 影响或措施  
---|---|---  
只能在 **[Cangjie] Hybrid Ability** 工程中使用。 | 应用形态 | 在 **[Cangjie] Empty Ability** 工程中使用会发生异常。  
用户在代码生成之后，需要在ArkTS应用入口手动传入ArkTS对象。 | 功能限制 | 如果不传入ArkTS对象会发生异常。  
  
#### 使用步骤

  1. 创建 **[Cangjie] Hybrid Ability** 工程（如已有工程则可跳过此步）

详细创建步骤请参照[创建一个工程](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-project-create-new-project)。

  2. 配置ArkTS三方库依赖

可以使用包管理工具ohpm直接下载想要调用的ArkTS三方库，或者在oh-package.json5文件中的dependencies（生产依赖）/devDependencies（开发依赖）字段中添加想要安装的ArkTS三方库依赖，然后单击Sync Now自动安装ArkTS三方库，三方库会存储在对应模块的oh_modules目录下。

详细示例可以参照[添加依赖项](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-dependencies)。

  3. 调用代码生成工具生成仓颉封装层

a. 在oh_modules文件夹下面找到对应的ArkTS三方库目录，打开目录下的.d.ts或.d.ets文件，在文件编辑界面中右键选择**Generate... > Cangjie Bindings**，生成仓颉封装层代码。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/37/v3/1XLrBmilQgGW5I8bK9kbdw/zh-cn_image_0000002701659552.png?HW-CC-KV=V1&HW-CC-Date=20260903T111619Z&HW-CC-Expire=86400&HW-CC-Sign=E0505CA87260AC1BA83734BEF9FE94D28761F70F6ED941BF42B93CE52B98BDB8)

b. 单击按钮之后会出现一个弹窗，弹框中可以选择范围当前文件或当前文件所在的文件夹，显示生成的仓颉封装层的默认包名为ArkTS三方库名称加上"_cj"后缀，用户也可以进行手动修改。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/57/v3/3Kn7e0AbQ1CraidNuU4mwg/zh-cn_image_0000002731378767.png?HW-CC-KV=V1&HW-CC-Date=20260903T111619Z&HW-CC-Expire=86400&HW-CC-Sign=685EAA9B7685CE332F3D75D79AF74FD7E8691379568244DCC5EE46BABD848536)

c. 单击OK后，会在当前工程中生成一个仓颉模块，模块下的src/main/cangjie目录中则为生成的ArkTS三方库的仓颉封装层代码。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2a/v3/fPk1oduRTGiafXTlqANYOg/zh-cn_image_0000002701819464.png?HW-CC-KV=V1&HW-CC-Date=20260903T111619Z&HW-CC-Expire=86400&HW-CC-Sign=DA112B3E03630AFF404A353850A19C4F2C0D0FAD16CDE6EEED286D95E313CEF2)

d. 当前仓颉封装层存在生成错误的情况，如果有类型或者声明无法正确生成互操作封装层代码（当前支持转换的类型以及声明请参照[工具的转换规则](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-dts2cj-translation-rules)），则需要根据控制台中**Cangjie Bindings Output** 中的提示进行手动修改。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c4/v3/84zp3vqqSSWYBgFqJb5UBg/zh-cn_image_0000002731538745.png?HW-CC-KV=V1&HW-CC-Date=20260903T111619Z&HW-CC-Expire=86400&HW-CC-Sign=DE139BD8B33BC8EBA518CD383D984A6D3D925AB7FA6C361CF2C57647CF7E167D)

  4. 在仓颉代码中添加生成的仓颉模块依赖，并调用封装层接口

a. 在entry模块中的oh-package.json5文件中添加生成的仓颉模块lz4cj的依赖，然后单击Sync Now自动添加仓颉封装层依赖。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/50/v3/8SDI0j1JQ36ijrCExKokRA/zh-cn_image_0000002701659554.png?HW-CC-KV=V1&HW-CC-Date=20260903T111619Z&HW-CC-Expire=86400&HW-CC-Sign=D2BE19363D04B7A8C976E467B7182B6B6E620DFAF17B3756B7DA421E6603F192)

b. 在仓颉代码中调用仓颉封装库的相应接口，与ArkTS类型以及声明的映射关系可以参照[工具的转换规则](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-dts2cj-translation-rules)章节。

c. 由于仓颉与ArkTS互操作机制当前的限制，还需要在ArkTS代码应用入口处（如 Index.ets文件）中手动导入ArkTS模块对象。

示例如下：
         
         import * as <module-name> from "<module-name>";
         globalThis.<module-name> = <module-name>



