---
name: cangjie-guides/cj-quick-start-dts2cj-plugin-usage
title: 仓颉调用ArkTS三方模块
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-quick-start-dts2cj-plugin-usage
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉-ArkTS 互操作 / 互操作使用案例 / 仓颉调用ArkTS三方模块
---

# 仓颉调用ArkTS三方模块

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fe/v3/8OIY9ex9R6STyQ0DkxmWeg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090124Z&HW-CC-Expire=86400&HW-CC-Sign=10250DBE37277BB327D597EBD798F1B72DA91156A578EC606C6D36DCEA23146D)

为确保运行效果，本文以**DevEco Studio 5.0.2 Release** 和 **DevEco Studio-Cangjie Plugin 5.0.9.100 Beta1** 版本为例，单击[此处](https://developer.huawei.com/consumer/cn/download/)获取最新版本的下载链接。

本文档介绍如何使用DevEco Studio仓颉插件，实现在仓颉代码中调用ArkTS三方库的功能。

#### 使用示例

下面以在仓颉代码中调用[lz4js](https://ohpm.openharmony.cn/#/cn/detail/lz4js)三方库为例展示详细的使用步骤。

  1. 创建一个"[Cangjie] Hybrid Ability"工程

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5a/v3/YeoFcO5LSjC0PD5cSWbTYQ/zh-cn_image_0000002743197741.png?HW-CC-KV=V1&HW-CC-Date=20260908T090124Z&HW-CC-Expire=86400&HW-CC-Sign=D20CA6568F4C19005A8EB1CE81E8829E17922C3F74E76EF52247E4C126D392E6)

  2. 配置lz4js三方库依赖

在工程级oh-package.json5中添加lz4js三方库依赖，然后单击Sync Now下载ArkTS三方库。
         
         "dependencies": {
             ...
             "lz4js": "^0.2.0",
             "@types/lz4js": "^0.2.1"
             ...
         },

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a3/v3/ujiguWJpTtSDjQEmNAj9KQ/zh-cn_image_0000002713398860.png?HW-CC-KV=V1&HW-CC-Date=20260908T090124Z&HW-CC-Expire=86400&HW-CC-Sign=F8D8B2A1461AD60046C29FEA3704B43D18B549C4FAF1504889DC811D5ABB0726)

  3. 调用代码生成工具生成仓颉封装层

a. 在oh_modules文件夹下面找到对应的lz4js三方库目录，打开目录下的.d.ts或.d.ets文件，在文件编辑界面中右键选择**Generate... > Cangjie Bindings**，生成仓颉封装层代码。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5c/v3/3moTcEgfSFuDdAwUbdlzxg/zh-cn_image_0000002743077791.png?HW-CC-KV=V1&HW-CC-Date=20260908T090124Z&HW-CC-Expire=86400&HW-CC-Sign=7C7E7DC70BC36924BD51AF524C1D9A214F2B2B673DEC046845CB931D1FB95180)

b. 单击按钮之后会出现一个弹窗，弹框中可以选择范围当前文件或当前文件所在的文件夹，选择**Current Directory** ，生成的仓颉封装层的默认包名为ArkTS三方库名称加上"_cj"后缀，开发者也可以进行手动修改。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/99/v3/fyaHvzGWQEaI4rUSQnfrMw/zh-cn_image_0000002713558830.png?HW-CC-KV=V1&HW-CC-Date=20260908T090124Z&HW-CC-Expire=86400&HW-CC-Sign=743CD83705316039B4C1C9E6CED7BCB1A521604B37FF53B6C1296C442F55E3D7)

c. 单击OK后，会在当前工程中生成一个仓颉模块，模块下的src/main/cangjie目录中则为生成的ArkTS三方库的仓颉封装层代码。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e8/v3/pg-wEq8bTZS69Dc8jw_ryA/zh-cn_image_0000002743197743.png?HW-CC-KV=V1&HW-CC-Date=20260908T090124Z&HW-CC-Expire=86400&HW-CC-Sign=ABAC7124D440A2E66262B30DF338C80CE1D020D68BC1C65848B43D7E83F35A47)

d. 当前仓颉封装层存在生成错误的情况，如果有类型或者声明无法正确生成互操作封装层代码，则需要根据控制台中"Cangjie Bindings Output"中的提示进行手动修改。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e4/v3/kLlE2KZ1RjCgwJvaaHOJsQ/zh-cn_image_0000002713398862.png?HW-CC-KV=V1&HW-CC-Date=20260908T090124Z&HW-CC-Expire=86400&HW-CC-Sign=40CCBAA26E6E02C170B28A9FC949F405749E137710E940F69CF531101F3F24AC)

  4. 在仓颉代码中添加生成的仓颉模块依赖，并调用封装层接口，以调用lz4js中的compress接口为例。

a. 在entry模块中的oh-package.json5文件中添加生成的仓颉模块lz4cj的依赖，然后单击Sync Now自动添加仓颉封装层依赖。
         
         "dependencies": {
             ...
             "lz4cj":"file:../lz4cj"
              ...
         },

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f2/v3/t9rX5DpySByhj7EveDK_gg/zh-cn_image_0000002743077793.png?HW-CC-KV=V1&HW-CC-Date=20260908T090124Z&HW-CC-Expire=86400&HW-CC-Sign=E2E1947AC5F018AC9D36B0CDAF20DCF661D265E65208597B72DEAFD975C2E162)

b. 在仓颉代码中调用仓颉封装库lz4cj的相应接口，以调用lz4js中的compress接口为例，修改**entry > src > main > cangjie > index.cj**文件为：
         
         //index.cj
         import lz4cj.compress // 导入lz4cj库中的compress接口
         
         func testCJ() {
             ...
             var arr: Array<Byte>  = [
             0x04, 0x22, 0x4d, 0x18, 0x64, 0x40, 0xa7, 0x1b,
             0x00, 0x00, 0x80, 0x54, 0x68, 0x65, 0x20, 0x77,
             0x68, 0x6f, 0x6c, 0x65, 0x20, 0x77, 0x6f, 0x72,
             0x6c, 0x64, 0x20, 0x69, 0x73, 0x20, 0x65, 0x6e,
             0x64, 0x69, 0x6e, 0x67, 0x2e, 0x0a, 0x00, 0x00,
             0x00, 0x00, 0xbc, 0xa8, 0x6b, 0xc5
             ]
             let result = compress(arr)
             ...
         }

c. 由于互操作实现的一些限制原因，还需要开发者在ArkTS代码入口（如 Index.ets文件) 中手动传入ArkTS模块对象。
         
         import * as lz4js from "lz4js";
         globalThis.lz4cj = lz4js

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/81/v3/qlJlO5NrQmu7AQMGUkEM3g/zh-cn_image_0000002713558832.png?HW-CC-KV=V1&HW-CC-Date=20260908T090124Z&HW-CC-Expire=86400&HW-CC-Sign=8AE7BE230B3FDAE1BA23437578DC1A6A00178F32A0ABA3D0732C223D39B66F1A)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2c/v3/PR5IV6moSqaSqzKZC7yPvw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090124Z&HW-CC-Expire=86400&HW-CC-Sign=A15781D8F5FAC15D9BD42FE5483AA08F4DD4CB61A55A61789A082B90B956D7E2)

如果还需要调用lz4js/util和lz4js/xxh32模块下的函数，需要导入对应的模块对象，由于模块名中不能包含/，所以这里使用_进行拼接。
         
         import * as lz4js_util from "lz4js/util";
         import * as lz4js_xxh32 from "lz4js/xxh32";
         globalThis.lz4cj_util = lz4js_util
         globalThis.lz4cj_xxh32 = lz4js_xxh32



