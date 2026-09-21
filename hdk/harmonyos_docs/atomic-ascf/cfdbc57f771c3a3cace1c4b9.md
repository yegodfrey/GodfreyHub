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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7e/v3/p7MZ4K76Q9iyx7CbLU6EQw/zh-cn_image_0000002763053059.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=152450C1B509D0E27EBD20F1B00A8285FB2314ACB024DA41B59D04981A2333F3 "点击放大")

## 安装使用

在VSCode中，点击"扩展"在应用商店搜索"ASCF Assistant"并选择安装，在侧边栏出现元服务图标![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bc/v3/VNSMOm29T1WFBhc6enm4QA/zh-cn_image_0000002733493532.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=FF12363819FFC26625187FBB726CA05A5C00DC9CA9F23A42892A389AECDD55D9)即安装成功。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/64/v3/n6WGeetFS4WXLsWIYjnHSg/zh-cn_image_0000002762893149.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=70F92BBC6F8126496546F6FD481648D5186F479236141A64AADB5B663462C157)

点击元服务图标![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1e/v3/A_t7HEOzRlq2m8fwIxNJnA/zh-cn_image_0000002733333670.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=C620E2107BC5195C72A0BC111BBCCCDC771CD9005C504ABE71089D32F652C242)即可使用ASCF助手开发。
> 说明
>
> ASCF助手1.0.7版本新增开发者主页功能，点击元服务图标点击元服务图标![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bf/v3/aiPZIWj5RCqsCNfXCvpUuA/zh-cn_image_0000002762893173.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=510CA9EFC729282AE26CD931DA5532D4A2C60C2BCDB18E36201034FB5065AB3B "点击放大")可打开开发者主页，方便开发者开发元服务。详细请参考[开发者主页](#开发者主页)。

## 新建/导入项目

### 新建项目

1. 点击新建项目按钮，打开新建项目页。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/20/v3/seQhi67YRtKCdqpf27aYSA/zh-cn_image_0000002763053061.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=47158C79B6BE4AF94D0C0125EDE0B60343D73FCE996F2E0A446CB50BE49A3C06)
2. 按提示配置项目信息并创建项目。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/92/v3/5re1D-ZsQVKbYwyKQ-ZxFg/zh-cn_image_0000002733493534.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=E8FD80803BC0C1322311BF69FE3BCC84D3B5FB1FD3F9F99427FB82DBFC85C0B4)
3. 可以通过切换左侧的模板类型为行业模板，自行选择对应的行业模板进行体验开发。当前已提供教育、电商、新闻、阅读和外卖模板。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a6/v3/JevG_XcfS5KcaRKd2V9HjQ/zh-cn_image_0000002733333672.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=E27C5FBC05BFAAF5E3F29D43D0E60F026DFCBE3DAF6431F24ABBBE3072FE31F2)
4. 填写项目配置相关信息，点击完成。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f3/v3/yYnFboiURt6wEYO03_p2kg/zh-cn_image_0000002762893175.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=BE4A644A7EBB42079A6CE4C5487600E07C3401EBA7A64EA0A8E3321E4A2B7196 "点击放大")

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
   > ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8a/v3/QgskHd5rRsq_bQ7Ia5jogA/zh-cn_image_0000002763053063.gif?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=43E9CFC32926E4B8B488D48FA46DDE2D1669E18A8587239AB59FF72234370EB7 "点击放大")

### 导入ASCF项目

1. 点击打开ASCF项目按钮。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/43/v3/HuxJu5eQSAeOTuMpZChBNg/zh-cn_image_0000002733493536.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=2E8225B4FAC7AD7B0E7288B21AFCF181E5336F61EC3587129EDAC457B128A039)
2. 通过历史记录右键点击导入ASCF项目。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/fRFFRPkAQk-cVB42BG78MA/zh-cn_image_0000002733333674.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=CBEAB9FBE4DDE2E55830330307B106041C2C4E6C3D5B29968C070460CAB69D59)

## 转换小程序项目为ASCF项目

1. 打开新建的ASCF项目，删除其中的ascf/ascf_src目录。

2. 点击转换按钮，选择小程序项目(微信小程序/支付宝小程序)。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2e/v3/1IJyzwRUTeqS_kYvwm9eXA/zh-cn_image_0000002762893177.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=71FCABC31D3EA855E52965304F113BC9620EF1D0DC5D4070FE7951BAC27F5B19)

   转换成功后，可通过右下角打开转换报告查看转换信息。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/xgioifYoQnKIkBvpWGZfmQ/zh-cn_image_0000002763053065.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=FF6044A8F13B9E577F897E5225D51F8279EE18CD89E1EA9ABF05E9BF4FC6B2B3)

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ad/v3/ZXV4dkLjRv6vV7SuXWK6fA/zh-cn_image_0000002733493538.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=2E70E7B0003286F2678DBC90D4982618712D036D8D5602672BDEA72A86F1C914 "点击放大")

## 开发指导

在开发过程中，ASCF开发助手支持以下特性，能够帮助开发者更便捷、高效地开发元服务。

* ASCF开发助手支持一键创建页面、组件。

  通过在目录文件下右键，选择一键创建页面，即可快速生成页面所需的文件。

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4/v3/LsdqnkTRTweh5DFkWgr7Ag/zh-cn_image_0000002762893161.gif?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=EB3010ECA9AACDA69BA6D141DC193910F407C1F65926947A4670756DB8D95B16 "点击放大")
* 智能联想，接口补全。

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e6/v3/4mi-zB1rReeQcutMF-IqJQ/zh-cn_image_0000002733333676.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=E7906A118D419505D7352151050FD1B3C99F0C93D2DECD81ECD1F8AB43FB4DC2 "点击放大")
* 代码高亮，组件属性自动补全。

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d1/v3/d7sYaJElQuGafiOJ4UrEYQ/zh-cn_image_0000002733493522.gif?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=99A8B55296679D25A548E7BB63FACBFF94E88D5A421180EC1A5BE2B527019189 "点击放大")
* 一键生成元服务图标。

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/72_Cm_rcSVmhNVYC7izemA/zh-cn_image_0000002762893179.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=4B1045EE2CA7AC95E459215043B0585CD96F4203B2D715FB438069ADC83DD525)

  详细请参考[元服务图标生成工具](#元服务图标生成工具)。

## 编译元服务

可以点击VSCode下方运行按钮，编译元服务。如果已连接设备，会自动在已选择设备上运行元服务。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3d/v3/u1vwPZNyT1iJWUakzK5hpQ/zh-cn_image_0000002763053067.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=53AD7371D3B6FAB6256F0C44B5A14926C0EBF3BAFD8E1E5DC6C7791045DAD1C1 "点击放大")

启动构建后，会自动打开ASCF Assistant运行日志面板，可以点击旁边齿轮按钮进行日志级别查看。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/K0cuYk-ZRWaL4J5LxEIKBQ/zh-cn_image_0000002733493540.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=44160568BDDE5B5C58D720CDBE51C8C5BAFD0A96971C1ED4E66E9AB57A8DD905 "点击放大")
> 说明
>
> ASCF助手1.0.8及以上版本，支持HarmonyOS 4及以下设备上投屏功能，启动运行阶段自动开启投屏显示。
>
> 1、Mac OSX系统暂不支持投屏。
>
> 2、需要关闭运行时启动投屏功能，可以在setting > Ascf-plugin: Run And Start Screen Casting配置取消勾选即可。

## 功能按钮介绍

除了编译运行按钮之外，ASCF助手还提供了常用的功能按钮。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/75/v3/7i9JYUigQAiScBq4s1DrWg/zh-cn_image_0000002733333678.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=6A8689574DF6635849EB558179D006ABA272175D923943ECA4C6B19C461E04D9 "点击放大")

### 选择设备

开发者可以点击"选择设备"（[功能按钮介绍](#功能按钮介绍)图中的标注①），选择已连接在电脑的设备。如果连接设备发生变化，需要重新选择。开发者可以点击"选择设备"（[功能按钮介绍](#功能按钮介绍)图中的标注①），选择已连接在电脑的设备。如果连接设备发生变化，需要重新选择。支持HarmonyOS 4及以下设备、HarmonyOS 5.0及以上设备上调试运行。在设备选择列表会展示设备名称和系统版本，选择对应的设备进行调试运行。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4f/v3/zn3Xmw0qRGmp69gqA0zzPg/zh-cn_image_0000002762893181.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=1E15448148988F339402528927A4D2F526B31B0E1C18CF2DEC5FD202E5BAF04E "点击放大")
> 注意
>
> 切换连接设备后，需要在运行之前点击"选择设备"按钮切换设备。

### 切换编译环境

开发者可以点击"编译环境"（[功能按钮介绍](#功能按钮介绍)图中的标注②），切换编译环境。

支持调试/发布编译环境。

* 调试环境下使用调试编译，默认不分包，有sourceMap，支持调试。

* 发布环境下使用发布编译环境，将会对代码进行压缩混淆打包。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/26/v3/C-3xZKbcRn-DA7vNZbzdEw/zh-cn_image_0000002763053069.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=17767B6522B6634D95E947517D8718AFBCE3ADE4C5FFCFD93A40F3BB350BB332 "点击放大")

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b5/v3/7goIXAAJQ5SCpEv4ZLSqoQ/zh-cn_image_0000002733493542.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=08E69178F6A528AC7FCB9DA0C0375355A54D3948BB3914092BB2573589EEAF22 "点击放大")
> 注意
>
> HarmonyOS 4及以下设备暂不支持热加载。

### 打开日志

开发者可以点击"打开日志"（[功能按钮介绍](#功能按钮介绍)图中的标注④），开发者可通过日志级别和搜索关键词来筛选日志信息，还可以使用日志导出、折行显示、清空窗口日志等功能。设备连接电脑后可以点击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/73/v3/Sv07RsMZRgagcohvGwrKDA/zh-cn_image_0000002733333680.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=FFCD0A98062FF0B9685AB9DDA2B57E65844C60961FEE3D598454CEFCF2197CA3)启动日志功能。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/64/v3/AcEXsvBkRDiBux9xoVCxGA/zh-cn_image_0000002762893183.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=4760759CAF8D81975AE38A5D6BB179574EF10B278A0F9E005791BB484528C036 "点击放大")

设备连接电脑，启动了ASCF元服务后，可以启动HiLog日志功能，查看对应级别日志。

HiLog日志窗口各个按钮的作用为：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/70/v3/WYfmd4AYSAOlrk0lKBWrTA/zh-cn_image_0000002763053071.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=49792DA33CD3E871DE5DCF8E91C9B0C455473C5C4E4222E4F7884848047FABD2)单击该按钮可开启日志进程。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c9/v3/Jn5zcrGuQV2IdApnH7wVIg/zh-cn_image_0000002733493544.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=14646EFE342A669C7B73CC385BB9C1B7A05CB380631E6E5F8CF1CAB4AED5C0A2)单击该按钮可暂停日志输出。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/31/v3/hCfJ9ezlRl-4DYTYbGqgCA/zh-cn_image_0000002733333682.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=E6283D58EB7C16258BF1CFE2BC5D18BEC4A0FB9AA80B3A1A2BCF0272235C3D47)单击该按钮可恢复日志输出。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bb/v3/I2uckoHLTFyQrRNXD_K3LQ/zh-cn_image_0000002762893185.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=C49F35CBCF771F637393CD9DC1370DFADC6F64B9333AB6338D8D3235007D496F)单击该按钮可以保存日志缓存到指定文件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/15/v3/c1V5DlLYQ7m-TFwwUrt2ww/zh-cn_image_0000002763053073.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=6A3CF54A02717BC7F496773C05CC62BA1BBEF5897EEE593B02A3D8F8362F509D)单击该按钮可以日志自动换行显示，否则日志按行显示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/14/v3/NPRKCpmURmmuL_K8efRr7w/zh-cn_image_0000002733493546.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=1F86DE3CBCC4D06CCF645A1EC8AABFA4802BFC0370B3242B97FAB1089764B52E)单击该按钮可退出日志进程。

### 按运行中的元服务包名过滤日志

HarmonyOS 5.0及以上设备默认会根据项目的bundleName查询运行中的元服务的进程，查看该进程的日志。如果没有匹配到进程，自动选择"不限制"。如果需要查看启动日志需要先根据"不限制"启动日志，然后再运行元服务。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/49/v3/3RYsrR_hQqOxSB5j7Xjz8A/zh-cn_image_0000002733333684.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=B7E963793AC1F17056A00DCA0943201318181CF39CE6105FC12B2852BFE3718F "点击放大")

HarmonyOS 4及以下设备默认会查询运行中的元服务的进程，查看该进程的日志。如果没有匹配到进程，自动选择"不限制"。如果需要查看启动日志需要先根据"不限制"启动日志，然后再运行兼容版元服务。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/73/v3/7CiCcX4qQ96MQFnpkbNkpA/zh-cn_image_0000002762893187.jpg?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=F219E8E4A9B4197C69013DDF141D44AA7E102DB4B77AA97D776EEA7C582062A6 "点击放大")

### 按关键字过滤日志

支持输入关键字过滤日志。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/31/v3/uuE-9bcDQ1mnq11fxe1oyw/zh-cn_image_0000002763053075.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=D14EEE778C0203D634B6553D9E83F6BC341DF3D98629583181916A6C1FE31082 "点击放大")

### 按日志级别过滤日志

支持下拉筛选查看不同级别的日志。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4e/v3/V4ofbGtrRkeqxHBBlu_iCQ/zh-cn_image_0000002733493548.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=4367F5DEE341243419E5E7F3354C68301616145235186489D0C63C08F349AF37 "点击放大")

### 按domain过滤日志

支持按domain查看日志。默认为0x006F（表示开发者元服务打印的业务日志）。配置空打印所有日志。支持多个逗号分隔（如：0x006F,0x8BF2）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/84/v3/WCJQFzWuQqOu-V3nsoSbgQ/zh-cn_image_0000002733333686.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=3C749507674077BEB807145C1CF8510DEB974AFB3914BA49A76C49C09FD2E25B "点击放大")

### 缓存最大日志数量

默认内存缓存日志最大数量为5000。可以按需配置为更大值。
> 注意
>
> * 较多日志数量可能会影响性能，请勿配置太大的值。
>
> * 修改完之后需要重启日志进程才可生效。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e5/v3/fYEjzyA2SKaEaWiNbnmdNQ/zh-cn_image_0000002762893189.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=27CBCFDDEC6D7E64469B842DE46D70CCC88FC06D59D45ABF5812D42278AA2DD2 "点击放大")

### debug调试

开发者可以点击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/18/v3/9gGJJbOuTKm1s6q_X_CW_A/zh-cn_image_0000002763053077.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=A35594E0535862DB01BDF3AAA0BF06B1D693943BB0A508DDCCE4FA0D5D46F3FB)，选择是否开启调试。点击调试按钮，即可启动debug调试。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/df/v3/hpZUS5vpTo-W6P6ZLyZ6Sg/zh-cn_image_0000002733493550.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=9A6D3BD520F53596DFD33F59EC14E2EE3136B26DA6C32023C80AE220316090BA "点击放大")

详细请参考[ASCF助手调试](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/debug-ascf-code#ascf助手调试)。

## 元服务图标生成工具

元服务图标生成工具分为两部分：IDE工具和SDK。

**IDE工具**

和DevEco Studio中[生成元服务图标](https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-service-icon-generation)的方式类似，在ASCF助手中开发也可以直接生成元服务图标。
> 说明
>
> ASCF助手1.0.5及以上版本支持使用元服务图标生成工具。

1. 在安装ASCF助手并打开ASCF项目之后，在项目中右键任意文件夹，点击"生成元服务图标"即可打开元服务图标生成工具，如下图所示。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/31/v3/mMqYQaQ0Teq43vmu-xjTag/zh-cn_image_0000002733333688.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=B18D83DA56D854D4476DDC570BF4101F128E89608BF708A59311F2EA7621208A "点击放大")
2. 打开元服务图标生成工具之后，按照提示，点击选择一张图片。图片具体格式参考：[元服务图标设计规范](https://developer.huawei.com/consumer/cn/doc/design-guides/ux-guidelines-overview-0000001900384976)。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cb/v3/eL5Qllb0QMKOjFCl23_L0w/zh-cn_image_0000002762893191.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=FF1A277BBC2A9383BC4721E94B6388D83B5D4B6A4A86AC910024033704AB3B70 "点击放大")
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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bc/v3/Ag1si5u_T5OG6PLYGYZxCQ/zh-cn_image_0000002763053079.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=128BB37DBC22A6830927A5578A20E855D7AA97095D4F356EFF21F2DB7DB69CE6 "点击放大")

当未打开ASCF项目时，点击元服务图标，如下图所示。点击图标可以新建、导入ASCF项目或者将小程序项目转换为ASCF项目。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/UTY06w5nQZS4nH1uenmopA/zh-cn_image_0000002733493552.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=078DF77E99217610CB73DCDCAB2AC66F9C1045236B0BBD72EFDF212A85E2A692 "点击放大")

**元服务基础信息**

元服务基础信息模块有：元服务图标、AppName、AppID、签名配置、运行时版本五个部分。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/ZhRv8wAiTK-PiQcJQg8mJw/zh-cn_image_0000002733333690.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=C42CF4A98EC7E51894D1E759FEA95806336A3D6B9FFDADE16E2546B06D907D66 "点击放大")

1. 元服务图标

   开发者主页左上角图标即为当前元服务项目的图标，点击开发者主页左上角的图标，即可打开[元服务图标生成工具](#元服务图标生成工具)。点击元服务图标生成工具界面以外的地方或者点击工具界面下方的"关闭"按钮，可以关闭该工具。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bb/v3/HvoCo6wmQEm9vufdi8TQ4g/zh-cn_image_0000002762893193.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=F49F23BA09B2BBBBE336DEAC3BD7537B9770B16BA27CAC99D20BA56912BD2B10 "点击放大")
2. 元服务名称

   AppName即为当前元服务项目的名称，点击"编辑名称"按钮，在弹出的对话框中可以修改元服务名称，之后点击保存即可修改元服务名称。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d5/v3/0liagg-BTO6xXV3g_fQ1aw/zh-cn_image_0000002763053081.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=14732EEA9E0454917B516AF71FB04EB1C15D5CB0AA9E647FA1EFBE6C61B9F02F "点击放大")
3. AppID

   当前元服务项目的AppID。
4. 元服务签名配置

   显示当前元服务项目是否配置debug或者release签名。
   > 说明
   >
   > 根据元服务项目根路径下的build-profile.json5的signingConfigs字段来显示签名是否配置，不支持开发者自定义的targets签名配置。

   点击"参考"，即可打开签名配置参考文档。点击"配置"，会打开build-profile.json5文件，开发者修改signingConfigs字段保存之后，开发者主页会自动刷新签名配置状态。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8f/v3/d_RW1KWiSmWB-pVJvJFA9Q/zh-cn_image_0000002733493554.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=07E607B9537DB4650EC693E52FEAD32751B8C345809D3095C237A1FDCDE7C84B "点击放大")
5. 运行时版本

   显示当前项目运行时版本。

**快捷操作**

1. 权限配置

   点击"权限配置"，即可打开权限配置窗口。
   > 说明
   >
   > 修改、申请权限弹窗中的申请原因和调用时机都不是必填项，具体使用参考：[声明权限-申请应用权限-应用权限管控-程序访问控制-安全-系统 - 华为HarmonyOS开发者](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions)

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/20/v3/0n5L5z15RbmF8OidfZ2m_w/zh-cn_image_0000002733333692.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=4C7DCE8B3E660198E19D489E155A809F4BCB984E8C9D677DFA197F63B88C82DA "点击放大")

   勾选下方"未获取权限"列表中的权限，然后点击"申请权限"按钮，在弹出的界面中输入申请原因和调用时机，点击"保存"按钮后即可添加权限申请配置。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c3/v3/gajxm1E2STG9qxfSJAegMw/zh-cn_image_0000002762893195.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=54768ACF270C1E9027C02C3BD12698A9B05233B62DCF5F0A524F57ABDB9538CB "点击放大")

   勾选上方"已获取权限"列表中的权限，然后点击"修改权限"按钮，在弹出的界面中修改申请原因和调用时机，点击"保存"按钮后即可修改权限申请配置。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fc/v3/4MnhOIpER9Wdgoicg-ncnw/zh-cn_image_0000002763053083.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=52540E90B6FAD52A323F3FCFD5AC98F00D722BB399F4AA6ABF8F937148D51E4D "点击放大")

   在勾选权限之后，点击"删除权限"，可以删除不要的权限配置信息

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b5/v3/kmze7GZQRVWkriTDBDyJRA/zh-cn_image_0000002733493556.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=5CBA181B18709BFB4A36970FDA2D3D117F116CA305A4FEA33F06900B6E53FBD2 "点击放大")
2. 分析包大小

   > 说明
   >
   > 使用分析包大小功能之前，请确保项目是可以正常编译的。

   点击"分析包大小"按钮，即可开始对当前项目的包进行多种维度的分析。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/91/v3/2mSARz8TRnOV-dNWVztSSQ/zh-cn_image_0000002733333694.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=E6DAC8FA196BC25C77BA27B15851516318AF095A07906424008B304C7FF768FF "点击放大")

   点击"关闭服务"，即可关闭包大小分析。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/CqXepqd8Q3Kay3yv-y9XhQ/zh-cn_image_0000002762893197.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=5DE948FC9FD98FD973F798928ECE6AC093F5C0B4720F93FBCC3471413441BE0B "点击放大")

**基础配置**

1. 元服务域名管理

   点击"编辑域名"按钮，会在浏览器跳转打开华为开发者官网[配置服务器域名](https://developer.huawei.com/consumer/cn/doc/atomic-guides/agc-help-harmonyos-server-domain)指南页面，方便查看配置指南文档。
2. 开发能力

   点击"前往配置"按钮，会在浏览器跳转打开华为开发者官网[为HarmonyOS应用开启华为开放能力](https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-app-0000002247955506#section1817619495251)指南页面，方便查看配置指南文档。

**资源中心**

点击"开发者文档"、"接口文档"、"服务商文档"、"鸿蒙小助手"、"元服务社区"这几个按钮，将在浏览器打开华为开发者官网相应的指导文档，方便查看相应的指导文档。

## VSCode顶部搜索框命令

如图所示，可以执行ASCF相关的命令。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f2/v3/LHr5uDKwRzaUvbaWGHiWvA/zh-cn_image_0000002763053085.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=C246A398C166261A878B9F0F0C9B5E913DE39B67AF035F7C226A21CA24F3A630 "点击放大")

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

ASCF助手插件支持设置运行配置，可通过VSCode左下角齿轮按钮![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/71/v3/GfVGO76-TX2rIUtDHsu1FA/zh-cn_image_0000002733493558.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=774876B561F6C8C6CF59E46856D45B6F17420355494CA51DDF33A2B301356A79)打开"管理"菜单 -> 选择"设置" -> 在搜索设置中输入ascf-plugin，可设置ASCF助手插件的行为。

|ID|描述|默认值|
|:-------------------------|:-----------|:-------|
|ascf-plugin.devecoSdkHome|DEVECO SDK位置|""|
|ascf-plugin.forceNewWindow|以新窗口打开新建项目|false|
|ascf-plugin.hilogDomains|Hilog关键字|"0x006F"|

如何配置插件请参考：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/17/v3/IKbPyGJiRsmdsPoIwDo8LA/zh-cn_image_0000002733333696.gif?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=D21241E578C2B40500E3BC30767928A82DA8288E7DE518B85BE7FEDC71C5DE57 "点击放大")

