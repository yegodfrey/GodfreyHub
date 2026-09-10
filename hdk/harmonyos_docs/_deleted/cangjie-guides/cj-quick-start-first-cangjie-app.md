---
name: cangjie-guides/cj-quick-start-first-cangjie-app
title: 构建第一个HarmonyOS应用（仓颉）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-quick-start-first-cangjie-app
nodePath: 基础入门 / 快速入门 / 构建第一个HarmonyOS应用（仓颉）
---

# 构建第一个HarmonyOS应用（仓颉）

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dc/v3/mPZXQm3rSxSeCbSBj09ExA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111824Z&HW-CC-Expire=86400&HW-CC-Sign=3E637B8861803873039E5906BB06DA5EC93FA89E82D210821DC8393D987B75A8)

为确保运行效果，本文以使用[最新DevEco Studio版本](https://developer.huawei.com/consumer/cn/download/)为例。

#### 创建仓颉工程

  1. 若首次打开**DevEco Studio** ，请单击**Create Project** 创建工程。如果已经打开了一个工程，请在菜单栏选择**File** > **New** > **Create Project** 来创建一个新工程。

  2. 选择**Application** 应用开发（本文以应用开发为例，仓颉暂不支持元服务开发），选择模板 **[Cangjie] Empty Ability** ，然后单击**Next** 进行下一步配置。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5a/v3/haPoWgPcRyClyaKU6YpdAg/zh-cn_image_0000002701819226.png?HW-CC-KV=V1&HW-CC-Date=20260903T111824Z&HW-CC-Expire=86400&HW-CC-Sign=4C39CA6453AEB026176EC6B4127B69FC59B89C38204A4F0DE0DD994ADFF3566F)

  3. 进入配置工程界面，可以修改工程名称和存储路径等工程的基本信息，也可以保持默认设置。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e9/v3/WQC8kXFtTeSIbu5ryxldfw/zh-cn_image_0000002731538507.png?HW-CC-KV=V1&HW-CC-Date=20260903T111824Z&HW-CC-Expire=86400&HW-CC-Sign=C34FE4FE0CC8A1C1F19E1D9D8FCDF2E40AD3F6B640170C9EFD5A9FC7B667CF3C)

  4. 单击 **Finish** ，完成工程创建，工具会自动生成基础示例代码和相关资源。




#### 仓颉工程目录结构

仓颉工程目录结构如下所示。
    
    
    Project_name
    ├── .hvigor
    ├── .idea
    ├── AppScope
    ├── entry
    │    ├── libs
    │    ├── src
    │    │    ├── main
    │    │    │    ├── cangjie
    │    │    │    │    ├── ability_stage.cj
    │    │    │    │    ├── index.cj
    │    │    │    │    └── main_ability.cj
    │    │    │    ├── resources
    │    │    │    └── module.json5
    │    │    └── ohosTest
    │    ├── build-profile.json5
    │    ├── cjpm.toml
    │    ├── hvigorfile.ts
    │    └── oh-package.json5
    ├── hvigor
    │    └── hvigor-config.json5
    ├── oh_modules
    ├── build-profile.json5
    ├── code-linter.json5
    ├── hvigorfile.ts
    ├── local.properties
    ├── oh-package.json5
    └── oh-package-lock.json5

其中关键文件信息如下：

  * **AppScope > app.json5**：应用的全局配置信息。
  * **entry** ：仓颉工程模块，编译构建生成一个HAP包。
    * **src > main > cangjie**：用于存放仓颉源码。
    * **src > main > resources**：用于存放应用/服务所用到的资源文件，如图形、多媒体、字符串、布局文件等。关于资源文件，请参见[资源分类与访问](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-ide-resource-categories-and-access)。
    * **src > main > module.json5**：stage 模块配置文件，主要包含 HAP 的配置信息、应用在具体设备上的配置信息以及应用的全局配置信息。
    * **build-profile.json5** ：当前的模块信息 、编译信息配置项，包括buildOption、targets配置等。
    * **hvigorfile.ts** ：模块级编译构建任务脚本。
    * **cjpm.toml** ：仓颉的包管理配置文件。
    * **oh-package.json5** ：用来描述包名、版本、入口文件（类型声明文件）和依赖项等信息。
    * **src > ohosTest**：存放仓颉测试源码，用于仓颉Instrument Test。
  * **hvigor** ：用于存放当前工程使用的 hvigor。
    * **hvigor-config.json5** ：指定工程全局使用的 hvigor 以及 hvigor 参数配置。
  * **oh_modules** ：用于存放三方库依赖信息，包含应用/服务所依赖的第三方库文件。
  * **build-profile.json5** ：应用级配置信息，包括签名、产品配置等。
  * **hvigorfile.ts** ：应用级编译构建任务脚本。
  * **oh-package.json5** ：主要用来描述全局配置，如：依赖覆盖（overrides）、依赖关系重写（overrideDependencyMap）和参数化配置（parameterFile）等。



#### 构建第一个页面

  1. 在页面中添加Text组件来显示文本内容。

工程同步完成后，在**Project** 窗口，点击**entry > src > main > cangjie**，打开**index.cj** 文件，使用仓颉语言进行应用页面的编写。针对本文中使用文本/按钮来实现页面跳转/返回的应用场景，页面均使用Row和Column组件为例来组建布局。
         
         entry
         └── src
              └── main
                   ├── cangjie
                   │    ├── ability_stage.cj
                   │    ├── index.cj
                   │    └── main_ability.cj
                   ├── resources
                   └── module.json5

**index.cj** 文件的初始代码如下：
         
         // index.cj
         package ohos_app_cangjie_entry
         
         import kit.ArkUI.*
         import ohos.arkui.state_macro_manage.*
         
         @Entry
         @Component
         class EntryView {
             @State
             var message: String = "Hello World"
             func build() {
                 Row {
                     Column {
                         Text(this.message)
                             .fontSize(50)
                             .fontWeight(FontWeight.Bold)
                             .onClick ({
                                 evt => this.message = "Hello Cangjie"
                             })
                     }.width(100.percent)
                 }.height(100.percent)
             }
         }

  2. 添加按钮，并配置其点击事件处理逻辑。

在默认页面基础上，添加一个Button组件，作为按钮响应用户点击，从而实现跳转到另一个页面。**index.cj** 文件的示例如下：
         
         // index.cj
         package ohos_app_cangjie_entry
         
         import kit.ArkUI.*
         import ohos.arkui.state_macro_manage.*
         
         @Entry
         @Component
         class EntryView {
             @State
             var message: String = "Hello Cangjie"
         
             func build() {
                 Row {
                     Column() {
                         Text(this.message)
                          .fontSize(50)
                          .fontWeight(FontWeight.Bold)
                          .onClick ({
                              evt => this.message = "Hello Cangjie"
                          })
                         // 添加按钮，以响应用户点击
                         Button("Next")
                         .onClick ({
                             evt => Hilog.info(1, "info", "Hello Cangjie")
                         })
                         .fontSize(30)
                         .width(180)
                         .height(50)
                         .margin(top: 20)
                     }.width(100.percent)
                 }.height(100.percent)
             }
         }




#### 构建第二个页面

  1. 创建第二个页面。

在**Project** 页面，进入**entry > src > main > cangjie**目录，右键单击**cangjie** 文件夹，选择**New > Cangjie File**，命名为**second** ，单击**OK** 。文件目录结构如下：
         
         entry
         └── src
              └── main
                   ├── cangjie
                   │    ├── ability_stage.cj
                   │    ├── index.cj
                   │    ├── main_ability.cj
                   │    └── second.cj
                   ├── resources
                   └── module.json5

  2. 添加文本及按钮。

参照第一个页面，在第二个页面添加Text组件和Button组件，并设置其样式。**second.cj** 文件的示例如下：
         
         // second.cj
         package ohos_app_cangjie_entry
         
         import ohos.arkui.state_macro_manage.Entry
         import ohos.arkui.state_macro_manage.Component
         import ohos.arkui.state_macro_manage.State
         import ohos.arkui.state_macro_manage.r
         import ohos.arkui.component.Button
         import ohos.hilog.Hilog
         import kit.ArkUI.*
         
         @Entry
         @Component
         class Second {
             @State
             var message: String = "Hi there"
         
             func build() {
                 Row {
                     Column() {
                         Text(this.message)
                             .fontSize(50)
                             .fontWeight(FontWeight.Bold)
                         Button("Back")
                             .onClick ({
                                 evt => Hilog.info(1, "info", "Hi there")
                             })
                             .fontSize(30)
                             .width(180)
                             .height(50)
                             .margin(top: 20)
                     }.width(100.percent)
                 }.height(100.percent)
             }
         }




#### 实现页面间的跳转

页面间的导航可以通过页面路由router来实现。router根据页面url找到目标页面，从而实现跳转。使用页面路由请导入router模块。

  1. 第一个页面跳转到第二个页面。

在第一个页面中，跳转按钮绑定onClick事件，单击按钮时跳转到第二页。**index.cj** 文件的示例如下：
         
         // index.cj
         package ohos_app_cangjie_entry
         
         import kit.ArkUI.*
         import ohos.arkui.state_macro_manage.*
         
         @Entry
         @Component
         class EntryView {
             @State
             var message: String = "Hello Cangjie"
         
             func build() {
                 Row {
                     Column() {
                         Text(this.message)
                          .fontSize(50)
                          .fontWeight(FontWeight.Bold)
                          .onClick ({
                              evt => this.message = "Hello Cangjie"
                          })
                         // 添加按钮，以响应用户点击
                         Button("Next")
                         .onClick ({
                             evt => getUIContext().getRouter().pushUrl(url: "Second") // 实现到第二页的跳转
                         })
                         .fontSize(30)
                         .width(180)
                         .height(50)
                         .margin(top: 20)
                     }.width(100.percent)
                 }.height(100.percent)
             }
         }

  2. 从第二个页面返回到第一个页面。

在第二个页面中，返回按钮绑定onClick事件，单击时返回到第一页。**second.cj** 文件的示例如下：
         
         // second.cj
         package ohos_app_cangjie_entry
         
         import ohos.arkui.state_macro_manage.Entry
         import ohos.arkui.state_macro_manage.Component
         import ohos.arkui.state_macro_manage.State
         import ohos.arkui.state_macro_manage.r
         import ohos.arkui.ui_context.* // 导入页面路由模块
         import ohos.hilog.Hilog
         import kit.ArkUI.*
         
         @Entry
         @Component
         class Second {
             @State
             var message: String = "Hi there"
         
             func build() {
                 Row {
                     Column() {
                         Text(this.message)
                             .fontSize(50)
                             .fontWeight(FontWeight.Bold)
                         Button("Back")
                             .onClick ({
                                 evt => getUIContext().getRouter().back(url: "EntryView") // 实现返回第一页
                             })
                             .fontSize(30)
                             .width(180)
                             .height(50)
                             .margin(top: 20)
                     }.width(100.percent)
                 }.height(100.percent)
             }
         }




#### 使用真机或模拟器运行应用

#### [h2]使用真机运行应用

  1. 将搭载HarmonyOS系统的真机与电脑连接。

  2. 真机连接成功后，进入**File > Project Structure > Project > Signing Configs**界面勾选**Automatically generate signature** ，单击界面提示的**Sign In** ，使用用户账号登录。等待自动签名完成后，单击**OK** 即可。如下图所示：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a3/v3/mqAMI0qPQmK3nkvFsgoy3Q/zh-cn_image_0000002701659316.png?HW-CC-KV=V1&HW-CC-Date=20260903T111824Z&HW-CC-Expire=86400&HW-CC-Sign=BFA784A26035E8E4F0B45D83CE5B3D08F9B5DB556F0EEE7D56B1F489211824AC)

  3. 在编辑窗口右上角的工具栏，单击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/47/v3/_oW-G_NIRFS-vnp10AjjQg/zh-cn_image_0000002731378531.png?HW-CC-KV=V1&HW-CC-Date=20260903T111824Z&HW-CC-Expire=86400&HW-CC-Sign=877871AF8832E53903602CB07C3712455E8A4CA2D561C82CEB1062377394BC39)按钮运行。效果如下图所示：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/90/v3/2xr6QeGLRcueI_EiEhnL6g/zh-cn_image_0000002731378529.png?HW-CC-KV=V1&HW-CC-Date=20260903T111824Z&HW-CC-Expire=86400&HW-CC-Sign=349BF2327F9D232B177658E290C77FED2D3D1CF8D366BE61CAF7EA3DC909D669)




#### [h2]使用模拟器

仓颉语言编写的HarmonyOS应用/服务，支持在DevEco Studio提供的模拟器（Emulator）上运行。

  1. 创建一个类型为Phone的模拟器设备，并在DevEco Studio右上角的设备列表中，选中该设备。

  2. 仓颉工程默认编译架构为**arm64-v8a** ，因此在使用**x86模拟器** 时（即，当前开发环境为**Windows/x86_64** 或**MacOS/x86_64** 时），仓颉工程及三方库需要编译出x86_64版本的so，请在仓颉模块的**build-profile.json5** 配置文件中，为**cangjieOptions/abiFilters** 的值增加“**x86_64** ”，具体编译配置如下：
         
         "buildOption": {      // 配置项目在构建过程中使用的相关配置
           "cangjieOptions": { // 仓颉相关配置
             "path": "./cjpm.toml", // cjpm配置文件路径，提供仓颉构建配置
             "abiFilters": ["arm64-v8a", "x86_64"]   // 自定义仓颉编译架构，默认编译架构为arm64-v8a
           }
         }

  3. 在编辑窗口右上角的工具栏，单击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/96/v3/S-jWPjRQRMmZgfQdOrNKuQ/zh-cn_image_0000002731378531.png?HW-CC-KV=V1&HW-CC-Date=20260903T111824Z&HW-CC-Expire=86400&HW-CC-Sign=5F8A7C0F2FE8DE527D1C71D5347F5A5667276B382A2AB019238645F87118E250)按钮运行。效果同使用真机运行。




您已经成功构建第一个仓颉应用。

#### 示例代码

#### [h2]示例1

仓颉入门示例，通过点击按键实现页面跳转。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3d/v3/GCzGng72QU271A8dQshBrQ/zh-cn_image_0000002701819228.png?HW-CC-KV=V1&HW-CC-Date=20260903T111824Z&HW-CC-Expire=86400&HW-CC-Sign=9B95552E09728DCC1F8ECB87D58EF038B550305B1E56F21BA95491620B46DFC9)

点击下载[仓颉入门示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260828154946.75615122880724853420152981438889:20260904191824:2800:68E4465473D7815196B5ABC0EECF8187167505B17928105908DB4A531333485B.zip?needInitFileName=true)。

#### [h2]示例2

造字的仓颉示例，通过滑动生成随机文字。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c9/v3/K8VHaXt3Tuaj4-KT550JIw/zh-cn_image_0000002731538509.png?HW-CC-KV=V1&HW-CC-Date=20260903T111824Z&HW-CC-Expire=86400&HW-CC-Sign=EFB44110215F43FEB3B1C831AD621CBCC2F3F20F4F362459349E34F65FBFDC00)

点击下载[造字的仓颉示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260828154946.60804748479302149190425142292355:20260904191824:2800:0D5C0550A32570A4629BD4BF874E20255550080717246AA78C5207502EB007BF.zip?needInitFileName=true)。

#### [h2]示例3

仓颉魔方示例，综合应用仓颉语言的基础特性，实现三阶魔方的 Model、View 和 Controller，可以在控制台中模拟魔方操作，并验证魔方相关的数学规律。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/48/v3/TXEaTgylR2q-97u9nIcLqQ/zh-cn_image_0000002701659318.png?HW-CC-KV=V1&HW-CC-Date=20260903T111824Z&HW-CC-Expire=86400&HW-CC-Sign=C6FF4AE1F0ACC2D42AFB392A027C10BA9656BCEFC3891D3FE6B348F91B896878)

点击下载[仓颉魔方示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260828154946.81345547436772525729620532351859:20260904191824:2800:5D5DBFB7DC29690AB8D1AD309BB61F2C172ACB1A7C10824A3263341B319B0FD8.zip?needInitFileName=true)。
