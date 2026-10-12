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

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dc/v3/ALcCCz3ISvSPHTqM_2vrZg/zh-cn_image_0000002731543125.png?HW-CC-KV=V1&HW-CC-Date=20261010T073008Z&HW-CC-Expire=31536000000&HW-CC-Sign=60E75FC903F9F2B4027CB08C9EF6DD2B9B719C535E1ED65D18E8C451D17A550F)
2. 单击OK并关闭设置窗口，插件启用成功。

## 开始使用

1. 在DevEco Studio菜单栏点击**Tools > Generate Project From...**打开UI Generator工具，首次使用需要阅读并确认用户协议，确认后可继续使用。
2. 输入待配置项路径，点击**Next** 进入下一步。

   |待配置项|说明|
   |:------------------------|:------------------------------------------|
   |Installation package path|待转换的APK应用包的路径，请提供未混淆的Debug版本应用包。|
   |SDK path|等于或高于编译应用包所使用版本的SDK路径。|
   |Git Bash path|Git Bash工具存放路径。若本地已下载安装Git Bash，插件将自动获取其路径。|

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e0/v3/IFMxyViEQbKLP5zPTElE_g/zh-cn_image_0000002701663926.png?HW-CC-KV=V1&HW-CC-Date=20261010T073008Z&HW-CC-Expire=31536000000&HW-CC-Sign=ED99599AF43DFDC3F1D1125FBBC5DD7EBAD1CE59C7FBB4AA32B9CBB5B874D16E)
3. 选择将要生成的XML页面（可在搜索框进行搜索），勾选后点击向右箭头将选中的XML导入至右侧。点击**Next** 开始生成。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ef/v3/HI5W5xksSZ6k_UgTePcdQg/zh-cn_image_0000002731383147.png?HW-CC-KV=V1&HW-CC-Date=20261010T073008Z&HW-CC-Expire=31536000000&HW-CC-Sign=46F9C3F24D3D52B6F1FA6997C9B63196C3839266BC6BD7273FCC66322797556C)
4. 配置输出工程待配置项，点击**Finish** 进行生成。

   |待配置项|说明|
   |:---------------|:-----------------------------------------------------|
   |Destination Path|生成新工程的保存路径（默认生成到用户目录下UIGenerationProjects，用户可根据需要自行更改）|
   |Compatible SDK|生成的新工程所使用的SDK版本|

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ab/v3/_fGXdfomRM20F0aoff_cIg/zh-cn_image_0000002701663930.png?HW-CC-KV=V1&HW-CC-Date=20261010T073008Z&HW-CC-Expire=31536000000&HW-CC-Sign=6BDC7D9FBB123607D35FD79C42340059022F055950828DEB66C8D12671F03394)
5. （可选）如果所选XML无有效根节点，需要选择根节点信息。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c4/v3/ReDFJfcdQ-y57cGT4lX5eQ/zh-cn_image_0000002731383151.png?HW-CC-KV=V1&HW-CC-Date=20261010T073008Z&HW-CC-Expire=31536000000&HW-CC-Sign=D6B2D608A48896F297D84E64540835333AA08ADA22E31085F0DA20208C8DCF2E)

6. 点击**Finish** ，在弹窗中点击确认，打开新工程。

   生成的页面位于entry > src > main > ets > pages目录下，可以点击Previewer查看页面预览效果。不支持生成的组件、属性会以注释的形式给出，方便后续定位修改。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fb/v3/5Qo81rsHRJ6OdYBVCMBGpg/zh-cn_image_0000002731383153.png?HW-CC-KV=V1&HW-CC-Date=20261010T073008Z&HW-CC-Expire=31536000000&HW-CC-Sign=07350258D71B53329FD814EB62C15D6EAA2059742AE8D17AC54A094389E332F6)
7. 生成的新工程内的entry > src > main > resources目录包含文本、图像、颜色资源。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3/v3/r27yet-TTLeNw6JE1Zc-Zw/zh-cn_image_0000002701823850.png?HW-CC-KV=V1&HW-CC-Date=20261010T073008Z&HW-CC-Expire=31536000000&HW-CC-Sign=F2B03018E181AEBD3E1ABD69093E226470A8D47BD2A5D52250A7D5F56BF36395 "点击放大")

   更多操作指导，请参考视频课程：[毕方HarmonyOS UI代码生成工具](https://developer.huawei.com/consumer/cn/training/course/live/C101731322888995220)。

