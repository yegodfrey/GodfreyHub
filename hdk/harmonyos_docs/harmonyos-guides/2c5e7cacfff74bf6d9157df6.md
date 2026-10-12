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

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8d/v3/JAUWQNuNTduBFOx1aKABSg/zh-cn_image_0000002784583567.png?HW-CC-KV=V1&HW-CC-Date=20261009T092711Z&HW-CC-Expire=31536000000&HW-CC-Sign=C964D2ECB552AAF1A3B2CA14537588505B3D58F8A3CF8FF3FDD0F44746AB2C03)
4. 参考"申请原因"中的模板，提供申请必需的相关信息，包括应用介绍、使用场景、申请用途，然后点击"提交"按钮。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/SqB4wo3jTOKFMgrewcgnxw/zh-cn_image_0000002784663747.png?HW-CC-KV=V1&HW-CC-Date=20261009T092711Z&HW-CC-Expire=31536000000&HW-CC-Sign=A2332E14F54A7431F214E69E01AB947CA0BECA6B609AE28A42FC83DB4F156D53)

返回"开放能力管理"页面，原"申请"变为"申请中"，1~3个工作日内反馈申请结果，请留意互动中心的"服务开通申请"信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/01/v3/fmymH5uMRGar5HPqU1tv8A/zh-cn_image_0000002755024814.png?HW-CC-KV=V1&HW-CC-Date=20261009T092711Z&HW-CC-Expire=31536000000&HW-CC-Sign=97362B38475603D41DF4D899DA3B33F5D2E73ECF7D655CFA579EAA421183897B)

申请通过后，互动中心会发送通知给您，同时"申请中"会变为置灰显示的"申请"，至此，应用已成功开启室内高精度定位开放能力。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4f/v3/b4BpCWThQrOs7AWih_zFDg/zh-cn_image_0000002755184702.png?HW-CC-KV=V1&HW-CC-Date=20261009T092711Z&HW-CC-Expire=31536000000&HW-CC-Sign=324425CC74D814361613BC7F7CE0FAFEA25FC22DF0CBEF6CF9469C5BDF7069E2)

### 位置语义

为了更好的用户体验，系统侧对位置语义服务功能做了权限保护处理，使用相关接口开发者需先提交"位置语义"能力开关的申请。

若您的鸿蒙应用需感知用户周围的位置语义（如店铺、地铁站等）信息，请在申请通过后，再使用该能力。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，选择"开发与服务"。

2. 在项目列表选择项目，并在应用列表下选择需要申请位置语义功能的应用。

3. 进入"项目设置 > 开放能力管理"页面，选择能力名称为定位服务（HarmonyOS NEXT），然后点击"位置语义"对应的"申请"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/77/v3/hhzB4XqbTqGYzNsOcsj6rQ/zh-cn_image_0000002784583567.png?HW-CC-KV=V1&HW-CC-Date=20261009T092711Z&HW-CC-Expire=31536000000&HW-CC-Sign=CCCCF46983A598DF93C8B9F765E65FFA0C8A4C4DF3B680D83950106D41D95283)
4. 参考"申请原因"中的模板，提供申请必需的相关信息，包括应用介绍、使用场景、申请用途，然后点击"提交"按钮。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4a/v3/Fhuosja2TgmWmn_hEhVKjQ/zh-cn_image_0000002784583569.png?HW-CC-KV=V1&HW-CC-Date=20261009T092711Z&HW-CC-Expire=31536000000&HW-CC-Sign=72995E6C85670647BF2BA5EF7DC441D62B401B626320BAB16284FD21F7174199)

   返回"开放能力管理"页面，原"申请"变为"申请中"，1~3个工作日内反馈申请结果，请留意互动中心的"服务开通申请"信息。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/Cjw61d_WQq2ho_Px2_eGHw/zh-cn_image_0000002784663749.png?HW-CC-KV=V1&HW-CC-Date=20261009T092711Z&HW-CC-Expire=31536000000&HW-CC-Sign=4A00C70F50C232A2EE8B72BE8FAEA8BD5555E62F07279117ABAA197BCE0B076E)

   申请通过后，互动中心会发送通知给您，同时"申请中"会变为置灰显示的"申请"，至此，应用已成功开启位置语义开放能力。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/J8sW89qRS3eNI5dC-KCdzg/zh-cn_image_0000002755024816.png?HW-CC-KV=V1&HW-CC-Date=20261009T092711Z&HW-CC-Expire=31536000000&HW-CC-Sign=6A137DB0CBBF16445B94826AA59CCAA6D856341FF93AB8F3ECB782B949F71CDE)

### 围栏后台唤醒

基于安全考虑，系统侧对围栏后台唤醒功能做了权限保护处理，使用相关接口开发者需先提交"围栏后台唤醒"能力开关的申请。

若您的鸿蒙应用在后台状态下需要接收用户进出围栏的事件通知，请在申请通过后，再使用该能力。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，选择"开发与服务"。

2. 在项目列表选择项目，并在应用列表下选择需要申请围栏后台唤醒功能的应用。

3. 进入"项目设置 > 开放能力管理"页面，选择能力名称为定位服务（HarmonyOS NEXT），然后点击"围栏后台唤醒"对应的"申请"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5/v3/X6LZ10FASWas4vYblxtHCA/zh-cn_image_0000002784583567.png?HW-CC-KV=V1&HW-CC-Date=20261009T092711Z&HW-CC-Expire=31536000000&HW-CC-Sign=AC9E7A17824CE0D6A72CF260D70AEF962754BC9A14F3B3B468DC05CBA2C344F6)
4. 参考"申请原因"中的模板，提供申请必需的相关信息，包括应用介绍、使用场景、申请用途，然后点击"提交"按钮。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/79/v3/dyNTdp-9RqC9Vk3PaTXLIA/zh-cn_image_0000002755184704.png?HW-CC-KV=V1&HW-CC-Date=20261009T092711Z&HW-CC-Expire=31536000000&HW-CC-Sign=A32EBD27599B098A28C4BB039E2DA06D283892044C22CC620E16C982693271AA)

   返回"开放能力管理"页面，原"申请"变为"申请中"，1~3个工作日内反馈申请结果，请留意互动中心的"服务开通申请"信息。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7f/v3/K3H-JcKsRPiDg6b9ZBoFdw/zh-cn_image_0000002784583571.png?HW-CC-KV=V1&HW-CC-Date=20261009T092711Z&HW-CC-Expire=31536000000&HW-CC-Sign=9DD88045D8BC4E5DC9C6B99A38D21BBC1682DECF05B121D24A5C8BCB9581C1D1)

   申请通过后，互动中心会发送通知给您，同时"申请中"会变为置灰显示的"申请"，至此，应用已成功开启围栏后台唤醒开放能力。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6e/v3/WIDx2skoSjiKU-GA3-4iNw/zh-cn_image_0000002784663751.png?HW-CC-KV=V1&HW-CC-Date=20261009T092711Z&HW-CC-Expire=31536000000&HW-CC-Sign=B2CF19682792CE96A659D887BD58CC211F3D9E53CBC0BF43DCC1F2307D776CB6)

### 获取蓝牙扫描信息

基于安全考虑，系统侧对获取蓝牙扫描信息功能做了权限保护处理，使用相关接口开发者需先提交"获取蓝牙扫描信息"能力开关的申请。

若您的鸿蒙应用需获取用户周围的蓝牙扫描信息，请在申请通过后，再使用该能力。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，选择"开发与服务"。

2. 在项目列表选择项目，并在应用列表下选择需要申请获取蓝牙扫描信息功能的应用。

3. 进入"项目设置 > 开放能力管理"页面，选择能力名称为定位服务（HarmonyOS NEXT），然后点击"获取蓝牙扫描信息"对应的"申请"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0/v3/ChOyBtFuRTaWz6lEgwsu0A/zh-cn_image_0000002784583567.png?HW-CC-KV=V1&HW-CC-Date=20261009T092711Z&HW-CC-Expire=31536000000&HW-CC-Sign=1EB04DA739820BAB9FE70203253A0994AFA99E31FA0EA03362DEF2C30BA8BFFA)
4. 参考"申请原因"中的模板，提供申请必需的相关信息，包括应用介绍、使用场景、申请用途，然后点击"提交"按钮。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f0/v3/tQSkEkxOQhSDjwBMEYWiyQ/zh-cn_image_0000002755024818.png?HW-CC-KV=V1&HW-CC-Date=20261009T092711Z&HW-CC-Expire=31536000000&HW-CC-Sign=B78C3E817854DCDAE7C34156984C7B2A44FF90653057DD5600BF30BD934AF152)

   返回"开放能力管理"页面，原"申请"变为"申请中"，1~3个工作日内反馈申请结果，请留意互动中心的"服务开通申请"信息。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a0/v3/z6ontr76QiiGBP-7sFeotQ/zh-cn_image_0000002755184706.png?HW-CC-KV=V1&HW-CC-Date=20261009T092711Z&HW-CC-Expire=31536000000&HW-CC-Sign=DF5AE1C80D7C3FFFCAAD935D0E50E43CDEE431C7CA2E0231312DF054E148F10E)

   申请通过后，互动中心会发送通知给您，同时"申请中"会变为置灰显示的"申请"，至此，应用已成功开启获取蓝牙扫描信息开放能力。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8a/v3/X0gQd1srRxy7T9ZL0CT4iw/zh-cn_image_0000002784583573.png?HW-CC-KV=V1&HW-CC-Date=20261009T092711Z&HW-CC-Expire=31536000000&HW-CC-Sign=DA8363B4F614A8316327DDBA527B144BBD4041B5EBFC7B7D64BB92636D26209C)

