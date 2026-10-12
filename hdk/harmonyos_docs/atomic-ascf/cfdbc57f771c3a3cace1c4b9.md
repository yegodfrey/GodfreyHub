---
name: document/cn/atomic-ascf/ascf-assistant
title: 使用ASCF助手开发
uri: https://developer.huawei.com/consumer/cn/doc/atomic-ascf/ascf-assistant
---

# 使用ASCF助手开发

为了方便使用VSCode的开发者，ASCF团队开发并维护了VSCode插件------[ASCF开发助手](https://marketplace.visualstudio.com/items?itemName=atomicservice.ascf-plugin-vscode)，提供了一键式项目创建快速转换及调试功能，帮助开发者开发元服务。
> 说明
>
> 在使用VSCode插件前，需要先安装DevEco Studio并配置好环境变量。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7e/v3/p7MZ4K76Q9iyx7CbLU6EQw/zh-cn_image_0000002763053059.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=733EC03715450B8D7717058A51F8BA4CC8868C9DB6F23B4AD68AA0C040A5BB3A "点击放大")

## 安装使用

在VSCode中，点击"扩展"在应用商店搜索"ASCF Assistant"并选择安装，在侧边栏出现元服务图标![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bc/v3/VNSMOm29T1WFBhc6enm4QA/zh-cn_image_0000002733493532.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=B6DD7AFD3FF69C5FC77A9676C9A572B6D49463F4425824FEE1FB30AF2A881C33)即安装成功。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/64/v3/n6WGeetFS4WXLsWIYjnHSg/zh-cn_image_0000002762893149.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=8397B36775F88E77B726FAC0AD72D3440A10E7BB9156248F6FB26B65D47F290E)

点击元服务图标![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1e/v3/A_t7HEOzRlq2m8fwIxNJnA/zh-cn_image_0000002733333670.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=BF4184A130ED10268BBF5DBF9A6E7A02C34261E43AD4303886CBB417D83A4F22)即可使用ASCF助手开发。
> 说明
>
> ASCF助手1.0.7版本新增开发者主页功能，点击元服务图标点击元服务图标![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bf/v3/aiPZIWj5RCqsCNfXCvpUuA/zh-cn_image_0000002762893173.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=444A6683C3E5C4DEA1C9530E19CD1B2B672F76700AF9584317C57A749A25CB5C "点击放大")可打开开发者主页，方便开发者开发元服务。详细请参考[开发者主页](#开发者主页)。

## 新建/导入项目

### 新建项目

1. 点击新建项目按钮，打开新建项目页。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/20/v3/seQhi67YRtKCdqpf27aYSA/zh-cn_image_0000002763053061.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=499DA2E800FF33142F7727EC56A2045C9AC8B4142A8F0F7A7362F862E9CEF6FD)
2. 按提示配置项目信息并创建项目。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/92/v3/5re1D-ZsQVKbYwyKQ-ZxFg/zh-cn_image_0000002733493534.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=1C10430B4716FEFFF6E29EF473EE326D8B3DA9EFE69641F4325A4CAD237D55A4)
3. 可以通过切换左侧的模板类型为行业模板，自行选择对应的行业模板进行体验开发。当前已提供教育、电商、新闻、阅读和外卖模板。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a6/v3/JevG_XcfS5KcaRKd2V9HjQ/zh-cn_image_0000002733333672.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=A11FDF626290657261D4F6DC2DC767AE02F3B71D4B648FB62C7D82ABB194D36F)
4. 填写项目配置相关信息，点击完成。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f3/v3/yYnFboiURt6wEYO03_p2kg/zh-cn_image_0000002762893175.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=C3C4D460A324016075747D099DC3BD8762199B11B91C74D83C1321A37540E52A "点击放大")

   |项目信息|描述|
   |:-----|:--------------------------------------------------------------------------------------------------------------------------------------|
   |App ID|可通过在[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)上，可以通过"我的元服务"选择对应元服务，在"应用信息"可查询元服务的appid。|
   |项目名|创建的该项目的项目名。|
   |项目路径|创建的项目保存的路径，请确保选择的路径文件夹为空。|
   |设备类型|可选择元服务可运行的设备类型，当前支持运行在手机/平板上。|

   > 说明
   >
   > App ID可以通过[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)查询，但是vscode插件目前不支持元服务生成签名，需要开发者将对应App ID的签名配置到新建项目根路径下的build-profile.json5文件signingConfigs字段中。其中签名配置可以使用DevEco Studio项目自动生成或者已有的签名。
   >
   > 例如：
   >
   > ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8a/v3/QgskHd5rRsq_bQ7Ia5jogA/zh-cn_image_0000002763053063.gif?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=FF10E40EAFB1B395C224444C062F729ED3EF14DD06759352E6B53418150CD87C "点击放大")

### 导入ASCF项目

1. 点击打开ASCF项目按钮。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/43/v3/HuxJu5eQSAeOTuMpZChBNg/zh-cn_image_0000002733493536.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=0DFB67F5014FAE1421EC2E1D78B5550C733732483BEBE4E012C698100CA5BD25)
2. 通过历史记录右键点击导入ASCF项目。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/fRFFRPkAQk-cVB42BG78MA/zh-cn_image_0000002733333674.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=99C49366F9E84ED2D393F137FCFE3D368A67FA1AF26FD41C339F9A918BF8092D)

## 转换小程序项目为ASCF项目

1. 打开新建的ASCF项目，删除其中的ascf/ascf_src目录。

2. 点击转换按钮，选择小程序项目(微信小程序/支付宝小程序)。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2e/v3/1IJyzwRUTeqS_kYvwm9eXA/zh-cn_image_0000002762893177.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=EB3498AE9AC1F3471A19504F72FC568180C06B4D33019085C5B69BD29C823719)

   转换成功后，可通过右下角打开转换报告查看转换信息。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/xgioifYoQnKIkBvpWGZfmQ/zh-cn_image_0000002763053065.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=E2BB2A16CDD0BE1A3E80332C385BD2BF0E291956AB4BBC8648D6D10D90B4538D)

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ad/v3/ZXV4dkLjRv6vV7SuXWK6fA/zh-cn_image_0000002733493538.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=A260465283A61D6D3578FB3074B2A42B12306679C2C0FD26D9B8D1CA66245013 "点击放大")

## 开发指导

在开发过程中，ASCF开发助手支持以下特性，能够帮助开发者更便捷、高效地开发元服务。

* ASCF开发助手支持一键创建页面、组件。

  通过在目录文件下右键，选择一键创建页面，即可快速生成页面所需的文件。

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4/v3/LsdqnkTRTweh5DFkWgr7Ag/zh-cn_image_0000002762893161.gif?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=0BD7AA8817A27AFA2D2536D5B3A38139C516E99D4AADD677A14E2E429E13BB85 "点击放大")
* 智能联想，接口补全。

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e6/v3/4mi-zB1rReeQcutMF-IqJQ/zh-cn_image_0000002733333676.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=D52578743E8513BC3BB7165D769FFFC82D5BC7AD4E98B90181D81479D366E0AA "点击放大")
* 代码高亮，组件属性自动补全。

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d1/v3/d7sYaJElQuGafiOJ4UrEYQ/zh-cn_image_0000002733493522.gif?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=F85B647F1FDE8E60196F04B40246F610AFA0CEFADCD140177C22045E0439EB51 "点击放大")
* 一键生成元服务图标。

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/72_Cm_rcSVmhNVYC7izemA/zh-cn_image_0000002762893179.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=5D0165C7E585A4319AF1642D7514C21390004C79C113C14B965884310C67D63D)

  详细请参考[元服务图标生成工具](#元服务图标生成工具)。

## 编译元服务

可以点击VSCode下方运行按钮，编译元服务。如果已连接设备，会自动在已选择设备上运行元服务。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3d/v3/u1vwPZNyT1iJWUakzK5hpQ/zh-cn_image_0000002763053067.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=75FD83239AEB99B20D5EE2DF899F7250B514383EE11EB187C9929EE2C2A244D1 "点击放大")

启动构建后，会自动打开ASCF Assistant运行日志面板，可以点击旁边齿轮按钮进行日志级别查看。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/K0cuYk-ZRWaL4J5LxEIKBQ/zh-cn_image_0000002733493540.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=F86B583955CA471C208587C270B0673F83D20F79FBD8DB96731CC43B66755FB5 "点击放大")
> 说明
>
> ASCF助手1.0.8及以上版本，支持HarmonyOS 4及以下设备上投屏功能，启动运行阶段自动开启投屏显示。
>
> 1、Mac OSX系统暂不支持投屏。
>
> 2、需要关闭运行时启动投屏功能，可以在setting > Ascf-plugin: Run And Start Screen Casting配置取消勾选即可。

## 功能按钮介绍

除了编译运行按钮之外，ASCF助手还提供了常用的功能按钮。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/75/v3/7i9JYUigQAiScBq4s1DrWg/zh-cn_image_0000002733333678.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=70D16B026BCB69DA78BC1C29BB5757194E00FD82AB1A178946EC5EB35F7EDE31 "点击放大")

### 选择设备

开发者可以点击"选择设备"（[功能按钮介绍](#功能按钮介绍)图中的标注①），选择已连接在电脑的设备。如果连接设备发生变化，需要重新选择。开发者可以点击"选择设备"（[功能按钮介绍](#功能按钮介绍)图中的标注①），选择已连接在电脑的设备。如果连接设备发生变化，需要重新选择。支持HarmonyOS 4及以下设备、HarmonyOS 5.0及以上设备上调试运行。在设备选择列表会展示设备名称和系统版本，选择对应的设备进行调试运行。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4f/v3/zn3Xmw0qRGmp69gqA0zzPg/zh-cn_image_0000002762893181.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=3D99490BF1C3448356E561FE0B17FC62DF0A92DD8E38B1B6639C109A9476F3F3 "点击放大")
> 注意
>
> 切换连接设备后，需要在运行之前点击"选择设备"按钮切换设备。

### 切换编译环境

开发者可以点击"编译环境"（[功能按钮介绍](#功能按钮介绍)图中的标注②），切换编译环境。

支持调试/发布编译环境。

* 调试环境下使用调试编译，默认不分包，有sourceMap，支持调试。

* 发布环境下使用发布编译环境，将会对代码进行压缩混淆打包。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/26/v3/C-3xZKbcRn-DA7vNZbzdEw/zh-cn_image_0000002763053069.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=B13339B32690CF6296AAAB148026FB1D971AFED0B4D9D5F5960486F5AAECABB3 "点击放大")

选择HarmonyOS 4及以下设备，元服务有以下产物：

* 选择编译环境：调试，不分包，产物为entry\build\default\outputs\default\entry-default-signed.hap；

* 选择编译环境：调试，分包，在ascf\ascf_src目录添加ascf.config.json文件并配置{ "disableSubpackages": false }，产物为ascf\build\name-default.zip；

* 选择编译环境：发布，产物为build\outputs\default\name-default-signed.app。

在HarmonyOS 4及以下系统设备上，需要[下载安装快应用加载器](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/faqs-quickapp-loader-manual-installation)调试运行元服务，可使用adb命令在快应用加载器上运行上述产物。

通过服务器的方式：在上述产物目录下启动服务器，${appid}替换为自己的appid，${app}替换为产物名。

```bash
http-server -p 3000
adb reverse tcp:3000 tcp:3000
adb shell am start -a android.intent.action.VIEW -d hap://app/com.atomicservice.${appid} -p com.huawei.fastapp.dev --es pkgUrl http://127.0.0.1:3000/${app}
```

通过本地推包的方式：path/to/app替换为上述产物的路径，${appid}替换为自己的appid，${app}替换为产物名。

```bash
adb push path/to/app /data/local/tmp/
adb shell am start -a android.intent.action.VIEW -d hap://app/com.atomicservice.${appid} -p com.huawei.fastapp.dev --es pkgUrl file:///data/local/tmp/${app}
```

### 热加载开关

开发者可以点击"热加载"（[功能按钮介绍](#功能按钮介绍)图中的标注③），选择是否开启热加载编译运行。点击运行按钮，即可启动热加载编译运行。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b5/v3/7goIXAAJQ5SCpEv4ZLSqoQ/zh-cn_image_0000002733493542.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=71C15879DA0EFCA7EC2F00C38F74F2747F0B0138E7B5614F30011A64EE170468 "点击放大")
> 注意
>
> HarmonyOS 4及以下设备暂不支持热加载。

### 打开日志

开发者可以点击"打开日志"（[功能按钮介绍](#功能按钮介绍)图中的标注④），开发者可通过日志级别和搜索关键词来筛选日志信息，还可以使用日志导出、折行显示、清空窗口日志等功能。设备连接电脑后可以点击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/73/v3/Sv07RsMZRgagcohvGwrKDA/zh-cn_image_0000002733333680.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=B0D64FF9B95663B8A53841883E933033AD75D7209CBDCDD176912E95DA2D0E24)启动日志功能。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/64/v3/AcEXsvBkRDiBux9xoVCxGA/zh-cn_image_0000002762893183.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=8C3667C8BBF13981449136E378A29378EF524322B4CE33DD5DFC0FC5ABFB85AF "点击放大")

设备连接电脑，启动了ASCF元服务后，可以启动HiLog日志功能，查看对应级别日志。

HiLog日志窗口各个按钮的作用为：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/70/v3/WYfmd4AYSAOlrk0lKBWrTA/zh-cn_image_0000002763053071.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=0585B12DD15E596044D29385CB54E4902490DA06B9260DD9F845A38A87287A0A)单击该按钮可开启日志进程。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c9/v3/Jn5zcrGuQV2IdApnH7wVIg/zh-cn_image_0000002733493544.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=5E0AB60E905C09F6F4C5596F3BAA6668F9B1010F4E345AFED4C8100DE98F15BB)单击该按钮可暂停日志输出。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/31/v3/hCfJ9ezlRl-4DYTYbGqgCA/zh-cn_image_0000002733333682.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=3FBF2F0C8874014205CCC84A0C403C383327F517551F5ACF03451E3F5D0975FF)单击该按钮可恢复日志输出。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bb/v3/I2uckoHLTFyQrRNXD_K3LQ/zh-cn_image_0000002762893185.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=52CB1FCDCC3B580A5E77F98B13D151EC8AC5058FB3FA59F4CBE79B8AF814A214)单击该按钮可以保存日志缓存到指定文件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/15/v3/c1V5DlLYQ7m-TFwwUrt2ww/zh-cn_image_0000002763053073.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=409CF3C09C143138F1DE9957E3DCC86680D4A3D6D361578D8A3D8DB13AC97A64)单击该按钮可以日志自动换行显示，否则日志按行显示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/14/v3/NPRKCpmURmmuL_K8efRr7w/zh-cn_image_0000002733493546.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=ABEE44A855D23FC572DF590FFA0AD63DCCB2A24C0B1E257A735F3752B049CB6B)单击该按钮可退出日志进程。

### 按运行中的元服务包名过滤日志

HarmonyOS 5.0及以上设备默认会根据项目的bundleName查询运行中的元服务的进程，查看该进程的日志。如果没有匹配到进程，自动选择"不限制"。如果需要查看启动日志需要先根据"不限制"启动日志，然后再运行元服务。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/49/v3/3RYsrR_hQqOxSB5j7Xjz8A/zh-cn_image_0000002733333684.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=47E6ADF0706C153911A0DD5A251FC26E646D503DBE18DF651ABEAADDBBB850ED "点击放大")

HarmonyOS 4及以下设备默认会查询运行中的元服务的进程，查看该进程的日志。如果没有匹配到进程，自动选择"不限制"。如果需要查看启动日志需要先根据"不限制"启动日志，然后再运行兼容版元服务。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/73/v3/7CiCcX4qQ96MQFnpkbNkpA/zh-cn_image_0000002762893187.jpg?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=318DD720CB8B111CE6DB860A9421BA6C5E9748FB1D0E300A35D93D4C8169F9C4 "点击放大")

### 按关键字过滤日志

支持输入关键字过滤日志。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/31/v3/uuE-9bcDQ1mnq11fxe1oyw/zh-cn_image_0000002763053075.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=9516B457A02C4524FD20340BC435818B3588FC465C8D1EC9BC6E848B3236772B "点击放大")

### 按日志级别过滤日志

支持下拉筛选查看不同级别的日志。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4e/v3/V4ofbGtrRkeqxHBBlu_iCQ/zh-cn_image_0000002733493548.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=1000466B721734C62F459F94713A34DDF493048EFD0515474C72DA76575E4070 "点击放大")

### 按domain过滤日志

支持按domain查看日志。默认为0x006F（表示开发者元服务打印的业务日志）。配置空打印所有日志。支持多个逗号分隔（如：0x006F,0x8BF2）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/84/v3/WCJQFzWuQqOu-V3nsoSbgQ/zh-cn_image_0000002733333686.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=A0E8BFEB75BABA7E67E1B245D579F8DCE880994DB6EED655C6657C247C023165 "点击放大")

### 缓存最大日志数量

默认内存缓存日志最大数量为5000。可以按需配置为更大值。
> 注意
>
> * 较多日志数量可能会影响性能，请勿配置太大的值。
>
> * 修改完之后需要重启日志进程才可生效。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e5/v3/fYEjzyA2SKaEaWiNbnmdNQ/zh-cn_image_0000002762893189.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=83A09F8114A9C78867EC14B9F3BF528D9552791209C96C02F95FDA8CC6558A66 "点击放大")

### debug调试

开发者可以点击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/18/v3/9gGJJbOuTKm1s6q_X_CW_A/zh-cn_image_0000002763053077.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=E5E1EC00759409288548A32AED52B59515D91CCE7C0722846D07E78E69AAF9F1)，选择是否开启调试。点击调试按钮，即可启动debug调试。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/df/v3/hpZUS5vpTo-W6P6ZLyZ6Sg/zh-cn_image_0000002733493550.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=27C61CAB3A29DC39904F63E3279A89980751F5469FF60CEFE3DCD0BB75A12BB8 "点击放大")

详细请参考[ASCF助手调试](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/debug-ascf-code#ascf助手调试)。

## 元服务图标生成工具

元服务图标生成工具分为两部分：IDE工具和SDK。

**IDE工具**

和DevEco Studio中[生成元服务图标](https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-service-icon-generation)的方式类似，在ASCF助手中开发也可以直接生成元服务图标。
> 说明
>
> ASCF助手1.0.5及以上版本支持使用元服务图标生成工具。

1. 在安装ASCF助手并打开ASCF项目之后，在项目中右键任意文件夹，点击"生成元服务图标"即可打开元服务图标生成工具，如下图所示。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/31/v3/mMqYQaQ0Teq43vmu-xjTag/zh-cn_image_0000002733333688.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=74057B68FA63B1DB72E9C89FF27723025984EF2B3B09B5E8A3C99483EA197A58 "点击放大")
2. 打开元服务图标生成工具之后，按照提示，点击选择一张图片。图片具体格式参考：[元服务图标设计规范](https://developer.huawei.com/consumer/cn/doc/design-guides/ux-guidelines-overview-0000001900384976)。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cb/v3/eL5Qllb0QMKOjFCl23_L0w/zh-cn_image_0000002762893191.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=4C709F06D055579F10D0D6DDDFFD2527337F79B857C693BE2A6FF55A15392672 "点击放大")
3. 选择外圈颜色，点击按钮即可生成元服务图标。

**SDK**

为了满足服务商使用场景，ASCF提供了SDK版本，帮助服务商集成元服务图标生成能力。

1. 在前端项目中安装SDK。

   ```shell
   npm install @atomicservice/as-icon-generator
   ```

2. 使用SDK。

   ```js
   import { AsIconGenerator } from '@atomicservice/as-icon-generator';
   // 注意：srcImg既可以是url也可以为image对象
   const img = new Image();
   img.src = 'src/assets/test.jpg';
   const asIconGenerator = new AsIconGenerator({ srcImg: img });
   // 获取颜色
   const colors = await asIconGenerator.getColors();
   // 注意：需要界面中展示出来所有可选的颜色，方便用户能够根据颜色来选择合适的颜色
   asIconGenerator.setColor(colors[0]);
   // 生成图片， agc: true 表示同时生成agc中使用的图标
   const result = await asIconGenerator.generate({ agc: true });
   // result.outputImage
   // result.agcImage
   ```

> 说明
>
> 如果选择的图片存在跨域的问题，由源图片的服务器配置支持跨域。

## 开发者主页

开发者主页在ASCF项目中的默认效果如下图所示：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bc/v3/Ag1si5u_T5OG6PLYGYZxCQ/zh-cn_image_0000002763053079.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=150925CB656130C6C483DDC479178BEA6F7C5BBDDC5437CF01FBEEB446542E91 "点击放大")

当未打开ASCF项目时，点击元服务图标，如下图所示。点击图标可以新建、导入ASCF项目或者将小程序项目转换为ASCF项目。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/UTY06w5nQZS4nH1uenmopA/zh-cn_image_0000002733493552.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=4AE6FCA6547742E74B45C48AE0F0420441258D956704AC32AE2534091FB84E6A "点击放大")

**元服务基础信息**

元服务基础信息模块有：元服务图标、AppName、AppID、签名配置、运行时版本五个部分。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/ZhRv8wAiTK-PiQcJQg8mJw/zh-cn_image_0000002733333690.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=90525BA064063C0D7B02DFC8F70BD8039344A67BE39B27F4F6CF341E15F6BA31 "点击放大")

1. 元服务图标

   开发者主页左上角图标即为当前元服务项目的图标，点击开发者主页左上角的图标，即可打开[元服务图标生成工具](#元服务图标生成工具)。点击元服务图标生成工具界面以外的地方或者点击工具界面下方的"关闭"按钮，可以关闭该工具。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bb/v3/HvoCo6wmQEm9vufdi8TQ4g/zh-cn_image_0000002762893193.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=5D40324F047B034B345FE18389D95856EC54D7588CEF54F07A35D3A242B51E16 "点击放大")
2. 元服务名称

   AppName即为当前元服务项目的名称，点击"编辑名称"按钮，在弹出的对话框中可以修改元服务名称，之后点击保存即可修改元服务名称。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d5/v3/0liagg-BTO6xXV3g_fQ1aw/zh-cn_image_0000002763053081.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=1FDBC6F9C96D70F2E35BA6293D734530B116D69946A54AC0AA32F19E000BA583 "点击放大")
3. AppID

   当前元服务项目的AppID。
4. 元服务签名配置

   显示当前元服务项目是否配置debug或者release签名。
   > 说明
   >
   > 根据元服务项目根路径下的build-profile.json5的signingConfigs字段来显示签名是否配置，不支持开发者自定义的targets签名配置。

   点击"参考"，即可打开签名配置参考文档。点击"配置"，会打开build-profile.json5文件，开发者修改signingConfigs字段保存之后，开发者主页会自动刷新签名配置状态。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8f/v3/d_RW1KWiSmWB-pVJvJFA9Q/zh-cn_image_0000002733493554.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=246DD771A4DC7F25C6BDEC4BCB78F1E6ABADED4D192A7F057299CABFD53E7299 "点击放大")
5. 运行时版本

   显示当前项目运行时版本。

**快捷操作**

1. 权限配置

   点击"权限配置"，即可打开权限配置窗口。
   > 说明
   >
   > 修改、申请权限弹窗中的申请原因和调用时机都不是必填项，具体使用参考：[声明权限-申请应用权限-应用权限管控-程序访问控制-安全-系统 - 华为HarmonyOS开发者](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions)

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/20/v3/0n5L5z15RbmF8OidfZ2m_w/zh-cn_image_0000002733333692.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=1B497C44DA17ECDC5937BC37D79CC50E7D16A345314AEA1E00AA464D65AAB030 "点击放大")

   勾选下方"未获取权限"列表中的权限，然后点击"申请权限"按钮，在弹出的界面中输入申请原因和调用时机，点击"保存"按钮后即可添加权限申请配置。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c3/v3/gajxm1E2STG9qxfSJAegMw/zh-cn_image_0000002762893195.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=8D0EDE36C1019C310BA265FE48FFB19166FDCF4C8641CCD260A39111D2EE3F34 "点击放大")

   勾选上方"已获取权限"列表中的权限，然后点击"修改权限"按钮，在弹出的界面中修改申请原因和调用时机，点击"保存"按钮后即可修改权限申请配置。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fc/v3/4MnhOIpER9Wdgoicg-ncnw/zh-cn_image_0000002763053083.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=EDCAD5CE982ED2BA7721AD8F389104B2D972FBC9F0321F288E36FFC6A7C6E4D8 "点击放大")

   在勾选权限之后，点击"删除权限"，可以删除不要的权限配置信息

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b5/v3/kmze7GZQRVWkriTDBDyJRA/zh-cn_image_0000002733493556.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=268A7589462EB100612B1582E7DFE19F52C1B60EFAE52140D7667D987744AB5F "点击放大")
2. 分析包大小

   > 说明
   >
   > 使用分析包大小功能之前，请确保项目是可以正常编译的。

   点击"分析包大小"按钮，即可开始对当前项目的包进行多种维度的分析。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/91/v3/2mSARz8TRnOV-dNWVztSSQ/zh-cn_image_0000002733333694.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=F685A4C1C2803EE03F47E31D8015FD840D91C431056C43141B15CA0E589B27AE "点击放大")

   点击"关闭服务"，即可关闭包大小分析。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/CqXepqd8Q3Kay3yv-y9XhQ/zh-cn_image_0000002762893197.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=8F0BC8A3789EE0460BEDBE10723558283206DCFC9E9E04A63774990C2F8FDCE3 "点击放大")

**基础配置**

1. 元服务域名管理

   点击"编辑域名"按钮，会在浏览器跳转打开华为开发者官网[配置服务器域名](https://developer.huawei.com/consumer/cn/doc/atomic-guides/agc-help-harmonyos-server-domain)指南页面，方便查看配置指南文档。
2. 开发能力

   点击"前往配置"按钮，会在浏览器跳转打开华为开发者官网[为HarmonyOS应用开启华为开放能力](https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-app-0000002247955506#section1817619495251)指南页面，方便查看配置指南文档。

**资源中心**

点击"开发者文档"、"接口文档"、"服务商文档"、"鸿蒙小助手"、"元服务社区"这几个按钮，将在浏览器打开华为开发者官网相应的指导文档，方便查看相应的指导文档。

## VSCode顶部搜索框命令

如图所示，可以执行ASCF相关的命令。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f2/v3/LHr5uDKwRzaUvbaWGHiWvA/zh-cn_image_0000002763053085.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=A14347EE694F94A9179969BAFF60C00A843E6BB1DB3BE57D01764ECBF541097B "点击放大")

### 插件内置命令

|ID|标题|描述|
|:---------------------------------|:-------------------------|:----------|
|ascf-plugin.addProject|Create ASCF Project|创建ASCF项目|
|ascf-plugin.ascfBuild|Build ASCF|构建ASCF|
|ascf-plugin.ascfBuild.clean|Clean|清除|
|ascf-plugin.ascfBuild.install|Install dependencies|安装依赖|
|ascf-plugin.ascfBuild.stop|Stop build ASCF|停止构建|
|ascf-plugin.ascfBuild.sync|Sync|同步|
|ascf-plugin.ascfBuildAndDebug|Build and debug ASCF|构建并调试ASCF|
|ascf-plugin.ascfBuildAndDebug.stop|Stop build ASCF|停止构建|
|ascf-plugin.ascfBuildApp|Build ASCF App|构建ASCF App|
|ascf-plugin.ascfDebugger.start|Start Debugger|启动调试|
|ascf-plugin.ascfDebugger.stop|Stop Debugger|关闭调试|
|ascf-plugin.chooseDevice|Choose device|选择设备|
|ascf-plugin.createAscfComponent|New ASCF Component|创建ASCF组件|
|ascf-plugin.createAscfPage|New ASCF Page|创建ASCF页面|
|ascf-plugin.createServiceWidget|New ASCF Service Widget|创建ASCF服务卡片|
|ascf-plugin.deleteRecentProject|Remove recent ASCF project|移除最近的ASCF项目|
|ascf-plugin.hilog|Hilog|Hilog|
|ascf-plugin.hilog.stop|Stop Hilog|停止Hilog|
|ascf-plugin.importProject|Import miniprogram|转换小程序资源|
|ascf-plugin.initTypings|Init typings|初始化typings|
|ascf-plugin.openProject|Open ASCF project|导入ASCF项目|
|ascf-plugin.openSelectProject|Open ASCF project|导入ASCF项目|
|ascf-plugin.showConvertReport|Show convert report|显示转换报告|
|ascf-plugin.startAbility|Start ability|启动|
|ascf-plugin.startScreenCast|Start ScreenCast|启动投屏|

## 插件配置

ASCF助手插件支持设置运行配置，可通过VSCode左下角齿轮按钮![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/71/v3/GfVGO76-TX2rIUtDHsu1FA/zh-cn_image_0000002733493558.png?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=0F3C4978917E414138E062837635D4B3FC646153B84696349D421BC1AE27403A)打开"管理"菜单 -> 选择"设置" -> 在搜索设置中输入ascf-plugin，可设置ASCF助手插件的行为。

|ID|描述|默认值|
|:-------------------------|:-----------|:-------|
|ascf-plugin.devecoSdkHome|DEVECO SDK位置|""|
|ascf-plugin.forceNewWindow|以新窗口打开新建项目|false|
|ascf-plugin.hilogDomains|Hilog关键字|"0x006F"|

如何配置插件请参考：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/17/v3/IKbPyGJiRsmdsPoIwDo8LA/zh-cn_image_0000002733333696.gif?HW-CC-KV=V1&HW-CC-Date=20261008T145638Z&HW-CC-Expire=31536000000&HW-CC-Sign=6CD5B3D52788F89EE21D3C916A8F99A6FBA3DE0871D1D5C8FB1CD805EBE3FA1B "点击放大")

