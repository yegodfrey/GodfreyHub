---
name: document/cn/harmonyos-guides/location-apply-open-capability
title: 申请开放能力权限指导
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/location-apply-open-capability
---

# 申请开放能力权限指导

## 开放能力申请准备

请先参考[应用开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-dev-overview)完成基本准备工作，再继续以下开放能力准备项。

### 室内高精度定位

为了更好的用户体验，系统侧对室内高精度定位服务功能做了权限保护处理，使用相关接口开发者需先提交"室内高精度定位"能力开关的申请，请在申请通过后，再使用该能力。

室内高精度定位仅支持商场、高铁站、机场和医院等场所，支持的建筑列表如下。

[支持室内定位建筑列表](https://openlocation-portal-drcn.partner.petalmaps.com/indoormap/index.html#/homePage)

在这些建筑中支持楼层识别，定位精度约10~20米左右。

未开通室内高精度定位服务时Location Kit仍然支持在室内场景进行网络定位获取定位结果。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，选择"开发与服务"。

2. 在项目列表选择项目，并在应用列表下选择需要申请室内高精度定位功能的应用。

3. 进入"项目设置 > 开放能力管理"页面，选择能力名称为定位服务（HarmonyOS NEXT），然后点击"室内高精度定位"对应的"申请"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/89/v3/43lEfCazTEy2mY-1us86LQ/zh-cn_image_0000002762994813.png?HW-CC-KV=V1&HW-CC-Date=20260917T084551Z&HW-CC-Expire=31536000000&HW-CC-Sign=25BBACB5BA97B4D21DFB5F70CCA67F334027B38B3FC35DDA720E3D664C3D4F53)
4. 参考"申请原因"中的模板，提供申请必需的相关信息，包括应用介绍、使用场景、申请用途，然后点击"提交"按钮。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/16/v3/hh9-HA9WTnmCHMFrvlyeYA/zh-cn_image_0000002762834925.png?HW-CC-KV=V1&HW-CC-Date=20260917T084551Z&HW-CC-Expire=31536000000&HW-CC-Sign=91D81473E0237085F861A4F3814D4D3EBA7AA309CFAFADFBC55F8A33BD54E9F6)

返回"开放能力管理"页面，原"申请"变为"申请中"，1~3个工作日内反馈申请结果，请留意互动中心的"服务开通申请"信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a5/v3/TZ72eNXiQOuoQzK7v66ZHA/zh-cn_image_0000002733275410.png?HW-CC-KV=V1&HW-CC-Date=20260917T084551Z&HW-CC-Expire=31536000000&HW-CC-Sign=F92F4BAADAFCBC422FFF82603696933F12836014C01D7328C673D4EAB331EEC1)

申请通过后，互动中心会发送通知给您，同时"申请中"会变为置灰显示的"申请"，至此，应用已成功开启室内高精度定位开放能力。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/44/v3/3AEOuD6KQQ22l_SXYQ6HkQ/zh-cn_image_0000002733435292.png?HW-CC-KV=V1&HW-CC-Date=20260917T084551Z&HW-CC-Expire=31536000000&HW-CC-Sign=3C06094D27B08BF372D6D61F7B7E554F239138BAD9102CB6516B6A4BC3071EDC)

### 位置语义

为了更好的用户体验，系统侧对位置语义服务功能做了权限保护处理，使用相关接口开发者需先提交"位置语义"能力开关的申请。

若您的鸿蒙应用需感知用户周围的位置语义（如店铺、地铁站等）信息，请在申请通过后，再使用该能力。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，选择"开发与服务"。

2. 在项目列表选择项目，并在应用列表下选择需要申请位置语义功能的应用。

3. 进入"项目设置 > 开放能力管理"页面，选择能力名称为定位服务（HarmonyOS NEXT），然后点击"位置语义"对应的"申请"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0d/v3/bVtCmSorTeGH-j09Kn4zqQ/zh-cn_image_0000002762994813.png?HW-CC-KV=V1&HW-CC-Date=20260917T084551Z&HW-CC-Expire=31536000000&HW-CC-Sign=FC8E2B2E05E7507641CCBBA9E02E1D06878092540B1E717C33DEB2F4D45D095B)
4. 参考"申请原因"中的模板，提供申请必需的相关信息，包括应用介绍、使用场景、申请用途，然后点击"提交"按钮。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cf/v3/fe4noR44RXuDf-zQ21Hxfw/zh-cn_image_0000002762994815.png?HW-CC-KV=V1&HW-CC-Date=20260917T084551Z&HW-CC-Expire=31536000000&HW-CC-Sign=22DDE96A524D9DF0DDFDD4607AC4CB740A4C1368ACAE0696711B9A7DF2818C6F)

   返回"开放能力管理"页面，原"申请"变为"申请中"，1~3个工作日内反馈申请结果，请留意互动中心的"服务开通申请"信息。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/82/v3/tw3mQxL0QwuNu3c5rqZStg/zh-cn_image_0000002762834927.png?HW-CC-KV=V1&HW-CC-Date=20260917T084551Z&HW-CC-Expire=31536000000&HW-CC-Sign=5B9E17E8C87276039309EF4B64C6E51825EBF63FE0E1F51490E6ABCF7FC61BD5)

   申请通过后，互动中心会发送通知给您，同时"申请中"会变为置灰显示的"申请"，至此，应用已成功开启位置语义开放能力。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e7/v3/dpTc7UWvQ2mKPha75cgZpQ/zh-cn_image_0000002733275412.png?HW-CC-KV=V1&HW-CC-Date=20260917T084551Z&HW-CC-Expire=31536000000&HW-CC-Sign=927FA1185A9E1525786DCD1C12DBA5E5D20B420A69B5907F214A1AFD806ADE4C)

### 围栏后台唤醒

基于安全考虑，系统侧对围栏后台唤醒功能做了权限保护处理，使用相关接口开发者需先提交"围栏后台唤醒"能力开关的申请。

若您的鸿蒙应用在后台状态下需要接收用户进出围栏的事件通知，请在申请通过后，再使用该能力。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，选择"开发与服务"。

2. 在项目列表选择项目，并在应用列表下选择需要申请围栏后台唤醒功能的应用。

3. 进入"项目设置 > 开放能力管理"页面，选择能力名称为定位服务（HarmonyOS NEXT），然后点击"围栏后台唤醒"对应的"申请"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ed/v3/_5CDTFssQBy32HRyWT-inQ/zh-cn_image_0000002762994813.png?HW-CC-KV=V1&HW-CC-Date=20260917T084551Z&HW-CC-Expire=31536000000&HW-CC-Sign=30E26D7AB0E5C917441E43F21B6264497231D56DC1E21789E4F248F72249BBFD)
4. 参考"申请原因"中的模板，提供申请必需的相关信息，包括应用介绍、使用场景、申请用途，然后点击"提交"按钮。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a2/v3/MLrqoCadRxiVb9t-zBpA0A/zh-cn_image_0000002733435294.png?HW-CC-KV=V1&HW-CC-Date=20260917T084551Z&HW-CC-Expire=31536000000&HW-CC-Sign=21523BAFAD4C27936FFB312491497A4BDEB2C190B348752B2E031DE1FD77425F)

   返回"开放能力管理"页面，原"申请"变为"申请中"，1~3个工作日内反馈申请结果，请留意互动中心的"服务开通申请"信息。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8c/v3/bYvttnB6Ram0FAgMN9VX8A/zh-cn_image_0000002762994817.png?HW-CC-KV=V1&HW-CC-Date=20260917T084551Z&HW-CC-Expire=31536000000&HW-CC-Sign=EC4EE982956DB0FB99ADE505D7F6404A3B1BE4BF30A101094868C8B20402B574)

   申请通过后，互动中心会发送通知给您，同时"申请中"会变为置灰显示的"申请"，至此，应用已成功开启Beacon围栏后台唤醒开放能力。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8f/v3/tCOEB3Q5T8m0wvlwdklZXg/zh-cn_image_0000002762834929.png?HW-CC-KV=V1&HW-CC-Date=20260917T084551Z&HW-CC-Expire=31536000000&HW-CC-Sign=92DED752765713FE168A24C51A5388BDBFF85A166F74782748E76D584C1AC92A)

### 获取蓝牙扫描信息

基于安全考虑，系统侧对获取蓝牙扫描信息功能做了权限保护处理，使用相关接口开发者需先提交"获取蓝牙扫描信息"能力开关的申请。

若您的鸿蒙应用需获取用户周围的蓝牙扫描信息，请在申请通过后，再使用该能力。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，选择"开发与服务"。

2. 在项目列表选择项目，并在应用列表下选择需要申请获取蓝牙扫描信息功能的应用。

3. 进入"项目设置 > 开放能力管理"页面，选择能力名称为定位服务（HarmonyOS NEXT），然后点击"获取蓝牙扫描信息"对应的"申请"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/13/v3/y_sWSRLpSVGXmc4fo8Ej5Q/zh-cn_image_0000002762994813.png?HW-CC-KV=V1&HW-CC-Date=20260917T084551Z&HW-CC-Expire=31536000000&HW-CC-Sign=FD9F75244DCE50475D042C680826D79B559003A83152B89B584BCFAE5477A4A1)
4. 参考"申请原因"中的模板，提供申请必需的相关信息，包括应用介绍、使用场景、申请用途，然后点击"提交"按钮。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e5/v3/iwQgS2YYT2mWIO2FKt5gBg/zh-cn_image_0000002733275414.png?HW-CC-KV=V1&HW-CC-Date=20260917T084551Z&HW-CC-Expire=31536000000&HW-CC-Sign=4188A54EA7EC9F584BBB833B91BCDF2C375F989B7470F214212392F772607185)

   返回"开放能力管理"页面，原"申请"变为"申请中"，1~3个工作日内反馈申请结果，请留意互动中心的"服务开通申请"信息。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6d/v3/C0BrHzWIRhCfm8iXrUDvmQ/zh-cn_image_0000002733435296.png?HW-CC-KV=V1&HW-CC-Date=20260917T084551Z&HW-CC-Expire=31536000000&HW-CC-Sign=97F7F4C276D05633C61D701501610AFB8C4D711116BFCFA1CD65FDB6EF3C218A)

   申请通过后，互动中心会发送通知给您，同时"申请中"会变为置灰显示的"申请"，至此，应用已成功开启获取蓝牙扫描信息开放能力。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/81/v3/Sg-Hy2WoSVigv188P1465w/zh-cn_image_0000002762994819.png?HW-CC-KV=V1&HW-CC-Date=20260917T084551Z&HW-CC-Expire=31536000000&HW-CC-Sign=E7B7B1C4656D32A96351813F3D7FB2245E2848EAD10E5702CBAA0F422D235702)

