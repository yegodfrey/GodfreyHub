---
name: document/cn/harmonyos-guides/ide-ui-generator
title: 应用UI生成
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ui-generator
---

# 应用UI生成

UI Generator用于快速生成可编译、可运行的HarmonyOS UI工程，支持基于已有UI布局文件（XML），快速生成对应的HarmonyOS UI代码，其中包含HarmonyOS基础工程、页面布局、组件及属性和资源文件等。

## 使用约束

建议使用DevEco Studio 5.0.3.700及以上版本。

## 启用插件

1. 在DevEco Studio菜单栏，点击**File > Setting** **s...** （macOS为**DevEco Studio > Preferences** **/Settings** ）**> Plugins** ，在Installed列表中找到UI Generator插件，点击**Enable** 启用。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/OT8IqgL1QtWmjY_spKI6bA/zh-cn_image_0000002731543125.png?HW-CC-KV=V1&HW-CC-Date=20260915T011705Z&HW-CC-Expire=31536000000&HW-CC-Sign=B4DA349F0E82A9195EE854C4A3F5910F0F04F8301E62B91E0F1917A41550CAE2)
2. 单击OK并关闭设置窗口，插件启用成功。

## 开始使用

1. 在DevEco Studio菜单栏点击**Tools > Generate Project From...**打开UI Generator工具，首次使用需要阅读并确认用户协议，确认后可继续使用。
2. 输入待配置项路径，点击**Next** 进入下一步。

   |待配置项|说明|
   |:------------------------|:------------------------------------------|
   |Installation package path|待转换的APK应用包的路径，请提供未混淆的Debug版本应用包。|
   |SDK path|等于或高于编译应用包所使用版本的SDK路径。|
   |Git Bash path|Git Bash工具存放路径。若本地已下载安装Git Bash，插件将自动获取其路径。|

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/18/v3/tvzODZz3TYG0EXKtWlC89w/zh-cn_image_0000002701663926.png?HW-CC-KV=V1&HW-CC-Date=20260915T011705Z&HW-CC-Expire=31536000000&HW-CC-Sign=8A7BEB8B6E456A2BC43F084602F26D562E015635DEBFDE08837EE022228F5458)
3. 选择将要生成的XML页面（可在搜索框进行搜索），勾选后点击向右箭头将选中的XML导入至右侧。点击**Next** 开始生成。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/56/v3/ZL0cvToZQ--Wkrh39FJDNw/zh-cn_image_0000002731383147.png?HW-CC-KV=V1&HW-CC-Date=20260915T011705Z&HW-CC-Expire=31536000000&HW-CC-Sign=BEC904DC502B70A46C551EC3C6750ADFEA28D60862308D70C8AD1A94CEF4FC6B)
4. 配置输出工程待配置项，点击**Finish** 进行生成。

   |待配置项|说明|
   |:---------------|:-----------------------------------------------------|
   |Destination Path|生成新工程的保存路径（默认生成到用户目录下UIGenerationProjects，用户可根据需要自行更改）|
   |Compatible SDK|生成的新工程所使用的SDK版本|

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1d/v3/tTlVz-4qQM6Q44dwmXvwtA/zh-cn_image_0000002701663930.png?HW-CC-KV=V1&HW-CC-Date=20260915T011705Z&HW-CC-Expire=31536000000&HW-CC-Sign=5956F02DDD37E4687D068F229EB72FC7FC5C9A10B6CB5318B45E29A7787700AF)
5. （可选）如果所选XML无有效根节点，需要选择根节点信息。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3b/v3/Lg9smtyLTlKspLapYYXqiQ/zh-cn_image_0000002731383151.png?HW-CC-KV=V1&HW-CC-Date=20260915T011705Z&HW-CC-Expire=31536000000&HW-CC-Sign=32C3648BBB9943D1991FECAFA7AA7D7B8CBBB1492242C0B3CC4D005D947ABA51)

6. 点击**Finish** ，在弹窗中点击确认，打开新工程。

   生成的页面位于entry > src > main > ets > pages目录下，可以点击Previewer查看页面预览效果。不支持生成的组件、属性会以注释的形式给出，方便后续定位修改。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fb/v3/cayNY78FTvaPm4Ye-VzhVw/zh-cn_image_0000002731383153.png?HW-CC-KV=V1&HW-CC-Date=20260915T011705Z&HW-CC-Expire=31536000000&HW-CC-Sign=B61B5552BB01B2B11F03C46A039825998F2FB9C7BF3385DCFFEF63F7BF6F546B)
7. 生成的新工程内的entry > src > main > resources目录包含文本、图像、颜色资源。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3f/v3/qWMt5jDTQ7WujKyvs3tp8g/zh-cn_image_0000002701823850.png?HW-CC-KV=V1&HW-CC-Date=20260915T011705Z&HW-CC-Expire=31536000000&HW-CC-Sign=EC601979E191D4F2E4578E2152424A93068E499912779A19A93A597357A55BDA "点击放大")

   更多操作指导，请参考视频课程：[毕方HarmonyOS UI代码生成工具](https://developer.huawei.com/consumer/cn/training/course/live/C101731322888995220)。
