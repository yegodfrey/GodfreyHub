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

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7e/v3/1Coce63MQG2Cyg5PR2veSA/zh-cn_image_0000002778932869.png?HW-CC-KV=V1&HW-CC-Date=20260929T121652Z&HW-CC-Expire=31536000000&HW-CC-Sign=AB5AE2FBC149683D00F2B8A29D553BEB2B4FE0BCD8E5B2019275BAED45708971)
4. 参考"申请原因"中的模板，提供申请必需的相关信息，包括应用介绍、使用场景、申请用途，然后点击"提交"按钮。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9c/v3/IvwL87VvT7iZ0NqGqD-_3A/zh-cn_image_0000002749333788.png?HW-CC-KV=V1&HW-CC-Date=20260929T121652Z&HW-CC-Expire=31536000000&HW-CC-Sign=FEDA05E1A95F18F7D0810A62634AEABFAC2CF1E583EA4599DA4F1A9594B83F80)

返回"开放能力管理"页面，原"申请"变为"申请中"，1~3个工作日内反馈申请结果，请留意互动中心的"服务开通申请"信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/75/v3/J0ZWNGlsSkinFKR3_Pssig/zh-cn_image_0000002749493672.png?HW-CC-KV=V1&HW-CC-Date=20260929T121652Z&HW-CC-Expire=31536000000&HW-CC-Sign=CE37B8B95EBA7EC733B1E1D696F6282BBD1073B9E91AC0478C393A0D5B6CCC08)

申请通过后，互动中心会发送通知给您，同时"申请中"会变为置灰显示的"申请"，至此，应用已成功开启室内高精度定位开放能力。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bc/v3/raJApukdQ6quzOG-7DD5KA/zh-cn_image_0000002779092729.png?HW-CC-KV=V1&HW-CC-Date=20260929T121652Z&HW-CC-Expire=31536000000&HW-CC-Sign=E655329780FA201914B9C1E5D41FEA1D0AE6EB2E260D66A6F6127E1746A8BAFE)

### 位置语义

为了更好的用户体验，系统侧对位置语义服务功能做了权限保护处理，使用相关接口开发者需先提交"位置语义"能力开关的申请。

若您的鸿蒙应用需感知用户周围的位置语义（如店铺、地铁站等）信息，请在申请通过后，再使用该能力。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，选择"开发与服务"。

2. 在项目列表选择项目，并在应用列表下选择需要申请位置语义功能的应用。

3. 进入"项目设置 > 开放能力管理"页面，选择能力名称为定位服务（HarmonyOS NEXT），然后点击"位置语义"对应的"申请"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8d/v3/V0q6nsF9SUCQhN961IUw8A/zh-cn_image_0000002778932869.png?HW-CC-KV=V1&HW-CC-Date=20260929T121652Z&HW-CC-Expire=31536000000&HW-CC-Sign=F9ACE52A1B8558A9A2D519951D3542DD595ABCB9C7479849BCBCB8C28ABB330C)
4. 参考"申请原因"中的模板，提供申请必需的相关信息，包括应用介绍、使用场景、申请用途，然后点击"提交"按钮。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bb/v3/oUx1eJyXTiC0isgPUCBLlw/zh-cn_image_0000002778932871.png?HW-CC-KV=V1&HW-CC-Date=20260929T121652Z&HW-CC-Expire=31536000000&HW-CC-Sign=E172DA00977D805E42422778BB55FC031A4EB242E36E6D170FC744F0BBC759FA)

   返回"开放能力管理"页面，原"申请"变为"申请中"，1~3个工作日内反馈申请结果，请留意互动中心的"服务开通申请"信息。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f8/v3/ufKgHL8DR06s7Xb83KAUjg/zh-cn_image_0000002749333790.png?HW-CC-KV=V1&HW-CC-Date=20260929T121652Z&HW-CC-Expire=31536000000&HW-CC-Sign=AE08765111495C3F019D535F725CF459000F0BFF378795C6FBBDD46204F90D49)

   申请通过后，互动中心会发送通知给您，同时"申请中"会变为置灰显示的"申请"，至此，应用已成功开启位置语义开放能力。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c8/v3/h18_Klx2R_GX762YuyS76g/zh-cn_image_0000002749493674.png?HW-CC-KV=V1&HW-CC-Date=20260929T121652Z&HW-CC-Expire=31536000000&HW-CC-Sign=2A4BBBDC68D5CADD463FA31EBCE8E32AAF99D6C38B99BEA46B261DD18CF680D4)

### 围栏后台唤醒

基于安全考虑，系统侧对围栏后台唤醒功能做了权限保护处理，使用相关接口开发者需先提交"围栏后台唤醒"能力开关的申请。

若您的鸿蒙应用在后台状态下需要接收用户进出围栏的事件通知，请在申请通过后，再使用该能力。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，选择"开发与服务"。

2. 在项目列表选择项目，并在应用列表下选择需要申请围栏后台唤醒功能的应用。

3. 进入"项目设置 > 开放能力管理"页面，选择能力名称为定位服务（HarmonyOS NEXT），然后点击"围栏后台唤醒"对应的"申请"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d6/v3/XvWdcXFjQwePWsvWBuTgyw/zh-cn_image_0000002778932869.png?HW-CC-KV=V1&HW-CC-Date=20260929T121652Z&HW-CC-Expire=31536000000&HW-CC-Sign=3C189EDA8DDDBCE547E6FD7A9A2BAEFF2ADDA0F2C4CCD8C859EF03B21C857D3C)
4. 参考"申请原因"中的模板，提供申请必需的相关信息，包括应用介绍、使用场景、申请用途，然后点击"提交"按钮。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/92/v3/GmsUxS0BRTeag5WDNMJ3EA/zh-cn_image_0000002779092731.png?HW-CC-KV=V1&HW-CC-Date=20260929T121652Z&HW-CC-Expire=31536000000&HW-CC-Sign=BE8F558B348366E50D4137058FD74158F94EA6778876902E408296A09008257D)

   返回"开放能力管理"页面，原"申请"变为"申请中"，1~3个工作日内反馈申请结果，请留意互动中心的"服务开通申请"信息。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4e/v3/0OHS2dWwRuGlxAay5Zcl6Q/zh-cn_image_0000002778932873.png?HW-CC-KV=V1&HW-CC-Date=20260929T121652Z&HW-CC-Expire=31536000000&HW-CC-Sign=911E3E577C2161BFACDED8923FA9CA541AD7C5DB57251B32CF828D5EC12A74A1)

   申请通过后，互动中心会发送通知给您，同时"申请中"会变为置灰显示的"申请"，至此，应用已成功开启围栏后台唤醒开放能力。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b2/v3/h-kAflPWR028vhQ24O5J4w/zh-cn_image_0000002749333792.png?HW-CC-KV=V1&HW-CC-Date=20260929T121652Z&HW-CC-Expire=31536000000&HW-CC-Sign=53CB7C5C15D3B737803D3A169FDFEC6FC05CA4EEFBDB8FE37FAC53D421F33764)

### 获取蓝牙扫描信息

基于安全考虑，系统侧对获取蓝牙扫描信息功能做了权限保护处理，使用相关接口开发者需先提交"获取蓝牙扫描信息"能力开关的申请。

若您的鸿蒙应用需获取用户周围的蓝牙扫描信息，请在申请通过后，再使用该能力。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，选择"开发与服务"。

2. 在项目列表选择项目，并在应用列表下选择需要申请获取蓝牙扫描信息功能的应用。

3. 进入"项目设置 > 开放能力管理"页面，选择能力名称为定位服务（HarmonyOS NEXT），然后点击"获取蓝牙扫描信息"对应的"申请"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/49/v3/DToLu-QVRCi-Ha-kZiiquQ/zh-cn_image_0000002778932869.png?HW-CC-KV=V1&HW-CC-Date=20260929T121652Z&HW-CC-Expire=31536000000&HW-CC-Sign=72018E0A8D285F3F34119C0E11598CC195E2C1833566B73D6C9EC67CB15ED5BA)
4. 参考"申请原因"中的模板，提供申请必需的相关信息，包括应用介绍、使用场景、申请用途，然后点击"提交"按钮。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/09/v3/DOe52S6zQguEumrSqvs9RQ/zh-cn_image_0000002749493676.png?HW-CC-KV=V1&HW-CC-Date=20260929T121652Z&HW-CC-Expire=31536000000&HW-CC-Sign=F747BA2EBAEF3B58C44A2EC50B668CDC02E6E04834344AAB4FB3E5A6265D33BC)

   返回"开放能力管理"页面，原"申请"变为"申请中"，1~3个工作日内反馈申请结果，请留意互动中心的"服务开通申请"信息。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1d/v3/8reH-Zl_QIyRgeu7QjrwpA/zh-cn_image_0000002779092733.png?HW-CC-KV=V1&HW-CC-Date=20260929T121652Z&HW-CC-Expire=31536000000&HW-CC-Sign=BA7555271C34A467095D7CF6B41EF4FD990EE03D405DBCB54E9D902C95AF84CA)

   申请通过后，互动中心会发送通知给您，同时"申请中"会变为置灰显示的"申请"，至此，应用已成功开启获取蓝牙扫描信息开放能力。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c4/v3/nRNKuZ3oSty0dN8gbm6UPw/zh-cn_image_0000002778932875.png?HW-CC-KV=V1&HW-CC-Date=20260929T121652Z&HW-CC-Expire=31536000000&HW-CC-Sign=7C7E706812BFE0E3C8BE4A353B6AA6FC31F8396B9CCB2BE0EAF036207A079D70)

