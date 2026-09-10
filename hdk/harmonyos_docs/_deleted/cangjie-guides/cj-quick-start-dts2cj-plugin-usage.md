---
name: cangjie-guides/cj-quick-start-dts2cj-plugin-usage
title: 仓颉调用ArkTS三方模块
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-quick-start-dts2cj-plugin-usage
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉-ArkTS 互操作 / 互操作使用案例 / 仓颉调用ArkTS三方模块
---

# 仓颉调用ArkTS三方模块

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ab/v3/zFKnsgtlQyWqOKa7tJa_iQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111606Z&HW-CC-Expire=86400&HW-CC-Sign=10842AC96D654225A4C043DBFD6F487AA04E58445984ADD5F58DD843BAF3D261)

为确保运行效果，本文以**DevEco Studio 5.0.2 Release** 和 **DevEco Studio-Cangjie Plugin 5.0.9.100 Beta1** 版本为例，单击[此处](https://developer.huawei.com/consumer/cn/download/)获取最新版本的下载链接。

本文档介绍如何使用DevEco Studio仓颉插件，实现在仓颉代码中调用ArkTS三方库的功能。

#### 使用示例

下面以在仓颉代码中调用[lz4js](https://ohpm.openharmony.cn/#/cn/detail/lz4js)三方库为例展示详细的使用步骤。

  1. 创建一个"[Cangjie] Hybrid Ability"工程

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/82/v3/4ADxIAwLQrqI5ojMt9C27A/zh-cn_image_0000002701819462.png?HW-CC-KV=V1&HW-CC-Date=20260903T111606Z&HW-CC-Expire=86400&HW-CC-Sign=24AE6ECDF375A23EA32C7B4E4FF780773ED89430B405C09CABF7F5BC29E9B7C8)

  2. 配置lz4js三方库依赖

在工程级oh-package.json5中添加lz4js三方库依赖，然后单击Sync Now下载ArkTS三方库。
         
         "dependencies": {
             ...
             "lz4js": "^0.2.0",
             "@types/lz4js": "^0.2.1"
             ...
         },

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ae/v3/wloWnf_6S96v4zkdPrNfNQ/zh-cn_image_0000002731538743.png?HW-CC-KV=V1&HW-CC-Date=20260903T111606Z&HW-CC-Expire=86400&HW-CC-Sign=78368DCAE9666446A57C260F20D33AC2DE64371EAE01AFC38EF7DFDC0CECF833)

  3. 调用代码生成工具生成仓颉封装层

a. 在oh_modules文件夹下面找到对应的lz4js三方库目录，打开目录下的.d.ts或.d.ets文件，在文件编辑界面中右键选择**Generate... > Cangjie Bindings**，生成仓颉封装层代码。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f3/v3/jI0s4BF7Rum-g9-mafADLA/zh-cn_image_0000002701659552.png?HW-CC-KV=V1&HW-CC-Date=20260903T111606Z&HW-CC-Expire=86400&HW-CC-Sign=2200DA1B36B812C04492A4AD3231CA2E1A30061F035522F5E6AC4A5A7A4B1D0F)

b. 单击按钮之后会出现一个弹窗，弹框中可以选择范围当前文件或当前文件所在的文件夹，选择**Current Directory** ，生成的仓颉封装层的默认包名为ArkTS三方库名称加上"_cj"后缀，开发者也可以进行手动修改。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e5/v3/JIkZPe9XSSujRQOJ3e9_EA/zh-cn_image_0000002731378767.png?HW-CC-KV=V1&HW-CC-Date=20260903T111606Z&HW-CC-Expire=86400&HW-CC-Sign=6ED1F6E956F511C51F1FA1BFD4BDCC3033917B248A0661ED78970E903FBACA03)

c. 单击OK后，会在当前工程中生成一个仓颉模块，模块下的src/main/cangjie目录中则为生成的ArkTS三方库的仓颉封装层代码。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9f/v3/pGvXWCIsQU6vRZSU-Yterw/zh-cn_image_0000002701819464.png?HW-CC-KV=V1&HW-CC-Date=20260903T111606Z&HW-CC-Expire=86400&HW-CC-Sign=9250932D39AD97260E3517DAF6BBAC3080BD63FAEEF2356287F80047FC2026C5)

d. 当前仓颉封装层存在生成错误的情况，如果有类型或者声明无法正确生成互操作封装层代码，则需要根据控制台中"Cangjie Bindings Output"中的提示进行手动修改。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/76/v3/CVK8Is9pRLi0i397jC6mkg/zh-cn_image_0000002731538745.png?HW-CC-KV=V1&HW-CC-Date=20260903T111606Z&HW-CC-Expire=86400&HW-CC-Sign=D7B922D3D5BDE9F2782D126EA686BBF2EDA79A0EA154EC6E095A9001674EB599)

  4. 在仓颉代码中添加生成的仓颉模块依赖，并调用封装层接口，以调用lz4js中的compress接口为例。

a. 在entry模块中的oh-package.json5文件中添加生成的仓颉模块lz4cj的依赖，然后单击Sync Now自动添加仓颉封装层依赖。
         
         "dependencies": {
             ...
             "lz4cj":"file:../lz4cj"
              ...
         },

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1b/v3/Q-XLejVWR7CEh00umYQmXA/zh-cn_image_0000002701659554.png?HW-CC-KV=V1&HW-CC-Date=20260903T111606Z&HW-CC-Expire=86400&HW-CC-Sign=D40B1AA70B6759346594C35A1B18C53FC105CE8CDEA3EE2E518DAABDA8B67ED3)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3c/v3/BtVC4Y4XSlGiQQMrWK4mPw/zh-cn_image_0000002731378769.png?HW-CC-KV=V1&HW-CC-Date=20260903T111606Z&HW-CC-Expire=86400&HW-CC-Sign=52ED461626B4989AA004F319EAB187648169784D9ADA1C59674D0224E84819EF)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d5/v3/LU6M8B29S2-HAHjCoWVEDw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111606Z&HW-CC-Expire=86400&HW-CC-Sign=C06C46C4923104A510B06D620964E014D274D0BF43EA306D0949514B1A69281C)

如果还需要调用lz4js/util和lz4js/xxh32模块下的函数，需要导入对应的模块对象，由于模块名中不能包含/，所以这里使用_进行拼接。
         
         import * as lz4js_util from "lz4js/util";
         import * as lz4js_xxh32 from "lz4js/xxh32";
         globalThis.lz4cj_util = lz4js_util
         globalThis.lz4cj_xxh32 = lz4js_xxh32



