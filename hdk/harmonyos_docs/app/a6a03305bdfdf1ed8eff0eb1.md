---
name: document/cn/app/agc-help-releaseapkrpk-0000001106463276
title: 发布应用（APK）
uri: https://developer.huawei.com/consumer/cn/doc/app/agc-help-releaseapkrpk-0000001106463276
---

# 发布应用（APK）

当您的应用开发和测试完成后，您可以在[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/)（以下简称AGC）正式提交应用上架申请，华为审核人员审核通过后应用就会变为"已上架"状态，用户可在华为应用市场搜索到您的应用。

## 前提条件

* 您的应用必须满足华为应用市场的审核要求，具体请参见[审核指南](https://developer.huawei.com/consumer/cn/doc/app/50104)。如果您的应用是联运应用，还需满足联运服务要求，具体请参见[联运服务上架前Checklist](https://developer.huawei.com/consumer/cn/doc/distribution/promotion/access-guide-0000001063305339#section121848397366)。
* 您已准备应用的APK软件包，满足如下要求 ：
  * 软件包大小在4GB以内。
  * 应用包名未被已上架的应用占用。
  * 如果创建应用时配置了应用包名，软件包中的应用包名必须与创建应用时配置的应用包名一致。
  * 应用发布中国大陆时，软件包中的简体中文应用名称必须与应用信息中配置的简体中文应用名称一致。
* 您需要提前准备如下信息。

  |准备项|说明|中国大陆应用|非中国大陆应用|
  |:---------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|:------|
  |发布国家和地区|您需要提前确定应用的发布国家和地区。|涉及|涉及|
  |是否为开放式测试版本|如果您想要发布一个开放式测试版本，您需要提前创建测试用户列表，具体请参见[开放式测试指南](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-userlist-introduction-0000001071318960)。|涉及|涉及|
  |应用付费情况|如果您发布的应用为付费应用，您需要提前规划应用的币种和价格。 如您的应用需要设置为"付费"，需同时开通[商户服务](https://developer.huawei.com/consumer/cn/console/setting/merchant)及[签署华为商户服务协议](https://developer.huawei.com/consumer/cn/console/setting/merchant)。|涉及|涉及|
  |是否为绿色应用认证|如果您需要申请成为绿色应用，您的应用需满足《软件绿色联盟应用体验标准5.0》，具体要求请参见[绿色应用认证指南](https://developer.huawei.com/consumer/cn/doc/distribution/app/50124)。|涉及|不涉及|
  |隐私权限|请提前确认您的应用会获取哪些用户隐私信息。|涉及|涉及|
  |隐私政策网址|您需要提前准备一个用于声明隐私政策的网页，说明您的应用涉及收集、处理哪些用户信息。此网页必须保证可通过互联网网址访问。|涉及|涉及|
  |隐私权利网址|您需提交关于您的用户实施其权利的相关网站，如用户删除、修改、导出其个人数据的入口。|涉及|涉及|
  |电子版权证书|请提前准备PDF格式的《App电子版权证书》。|涉及|不涉及|
  |应用版权证书|请按[应用资质审核要求](https://developer.huawei.com/consumer/cn/doc/app/80301)准备应用版权证书或代理证书。|涉及|不涉及|
  |游戏版号|游戏应用需要提前申请网络游戏出版物号或版号批文。|涉及|不涉及|
  |备案信息|您需要提前为应用完成备案，并准备好备案证件信息用于上架时核验。|涉及|不涉及|

## 配置应用基本信息

应用基本信息包含应用的兼容设备、应用在华为应用市场详情页展示的应用名称、应用介绍、应用图标、应用截图、介绍视频等，在发布应用前您需要将应用基本信息补充完整。在应用信息填写过程中，您可随时点击右上角的"保存"，保存已配置的应用信息。

### 配置兼容设备

您可在兼容设备区域选择应用发布后能够兼容的设备类型。例如您在兼容设备中勾选了手机和平板，当您的应用上架后，手机用户、平板用户即可通过华为应用市场下载并使用该应用。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/28/v3/UCvN1aVQTti4fj07z11FBw/zh-cn_image_0000002237064810.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=401C3C30795AE811C2506FB37A409621B3ED46BAC0C646249AC0E9BDA57BF312)

|设备类型|支持配置的兼容设备|
|:---|:--------------------------------------|
|手机|手机、平板、华为手表|
|VR|手机、平板|
|手表|智能表、儿童表|
|大屏|* 兼容设备：智慧屏、荣耀立方、电视盒子 * 支持操作设备：遥控器、手柄、体感|
|路由器|无兼容设备|
|车机|不支持配置兼容设备|

### 配置可本地化基础信息

在"可本地化基础信息"区域，配置应用语言、应用名称、应用介绍等，并上传您准备好的应用素材。

1. 配置应用语言。 默认显示创建应用时设置的默认语言。如需为当前应用添加其他语言，点击"管理语言列表"，在"语言选择"弹窗中勾选语言，点击"确认"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/99/v3/S9wR68lJQ-yFB2xDrAYRVA/zh-cn_image_0000001957522593.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=90801AA0A4E61DC0B01186C050735EF31BD9E10BCF6724D4D48A2804BF7A6B84)

   如配置了多种语言，您需要在"语言"下拉列表中切换已添加的语言，分别为每种语言完善对应的可本地化基础信息。如果您没有为各语言版本添加本地化图片文件，则系统将使用默认语言版本的图片文件。
   * 当某语言的右侧显示绿色对勾图标，则表示该语言的本地化基础信息已填写并保存完毕。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ec/v3/4BIzDyn9RPWlFcAPoci1_Q/zh-cn_image_0000001949531121.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=AC7ABE1947FE3A03C4D5D4253DDB806BC1F30EA006625BA70E77621D280485F7)

   * 如果还有语言对应的本地化基础信息尚未完善，系统会有红色字体提示。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/08/v3/kZhRRFCPQLa-J5JnHhi3cQ/zh-cn_image_0000001921171926.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=79C963BCCECB47BB3D2475497E6DF7D902C65962F525F1E6419DD324F999351A)

2. 填写应用名称、应用介绍、应用一句话简介（小编推荐）、新版本特性。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/37/v3/qUwuGDiMS7OEw0wTbxLWDg/zh-cn_image_0000002514506880.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=204F973BEABECF90B44419CF0BA4D7A913252BEF1FDFAD8FCB54D85C5A069354)

   |参数|**说明**|
   |:------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   |应用名称|必填，默认为创建应用时设置的应用名称。 * 若您的应用名称只读显示，表示您的应用名称已被锁定，不可修改。 * 若可以修改应用名称，必须遵循以下条件： * 应用名称必须符合[创建Android应用](https://developer.huawei.com/consumer/cn/doc/app/agc-help-createapk-0000001912873100)时的应用名称设置要求。 * 对于发布地区包含中国大陆的APK应用，如果语言包含简体中文，则简体中文对应的应用名称必须与软件包中的应用名称一致，否则您将无法提交上架申请。 * 当您应用发布地区包含中国大陆，且语言设置为简体中文、繁体中文（中国台湾）或繁体中文（中国香港特别行政区）时，如您创建的应用名称包含敏感词，页面可能会展示红色内容提示，此时您必须重新设置应用名称。 > 说明 > 您的多语言应用仅有"简体中文"语言的应用名称会被锁定，您可以修改其他语言的应用名称。|
   |应用介绍|必填。 简单描述该应用的功能、产品定位等，8000字以内。|
   |应用一句话简介（小编推荐）|必填。 简单介绍该应用，应突出应用的主要特色，以帮助提升应用下载率。要求80字以内，为保证良好的界面展示效果，建议不超过25个字。|
   |新版本特性|选填。 描述新版本的特性，500字以内。 新版本特性将在华为应用市场客户端更新页中展示，认真填写可增加应用的下载量 。|

3. 上传应用素材，包括应用图标、应用截图和视频，素材需满足[应用信息审核规范](https://developer.huawei.com/consumer/cn/doc/app/50104#section1729024510210)与[应用素材规范](https://developer.huawei.com/consumer/cn/doc/app/agc-help-app-material-requirement-0000001146534651)。 说明
   >
   > 如果您提交了可选素材，可以提升应用在华为应用市场客户端的展示效果。

### 设置应用分类

设置应用的二级和三级分类。关于应用分类详细信息，请参见[华为应用市场应用分类示例](https://developer.huawei.com/consumer/cn/doc/50103)。
> 注意
>
> * 请选择最合适的分类，如果您选择的分类和华为应用市场管理规则不一致，华为运营人员可能会予以修改并邮件通知您。如您修改应用分类时发现应用的二、三级分类被锁定，请联系华为运营人员协助处理。
>
>
> * 手表应用仅支持选择二级分类。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/78/v3/X3FZAjN2Q-an9oJmcG8oBA/zh-cn_image_0000001949531125.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=B89EF2DF98BAD91191377CD59C09AD063C580ECE61BB2FB3CABEC2ED93B33F94)

当您创建的是游戏应用时，应用分类界面如下。此时，您还需要选择游戏的类型。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ee/v3/Cot0Z_GrT8yIsMk4gIPj4w/zh-cn_image_0000002432298848.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=2384AEAC922C9B3C6593ADF19BC438DF23DA1F56A2FC529B11280CD3C18CA2EB)

* 休闲游戏：主要指以休闲娱乐为主的游戏，如休闲竞技、体育竞速、塔防、沙盒、模拟经营、动作肉鸽和独立游戏等。
* 网络游戏：包含多人在线实时对战或协作的射击、MOBA、角色扮演、卡牌策略、战争策略（SLG）及二次元题材游戏，具备社交、养成、PVP/PVE等玩法，强调联网互动与持续内容更新。 注意
  >
  > 所有除付费下载模式外的二次元游戏，请选择网络游戏。

### 配置开发者服务信息

您还可以配置您的开发者服务信息，该信息会向您应用发布区域的用户公开，便于用户了解更多应用信息。开发者服务信息包括：

* 只读显示：供应商名称、供应商名称（英文）、开发者名称、开发者名称（英文）
* 选填： 官网（仅支持中国大陆企业/个人开发者、海外企业开发者的非游戏类应用）

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3a/v3/hHY8UIJISQCzOs5h78TRtQ/zh-cn_image_0000001949531149.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=6ED05D7A46C6E18075636B46F13B7E286043DC80D58787190D6750C76618561F)

### 接入华为服务号

中国大陆地区的企业开发者还可以为手机Android应用接入华为服务号。服务号是基于华为终端打造的营销、转化、服务为一体的经营阵地，商家可自定义装修，向用户提供各类服务、传达各类营销/运营活动以及拉动用户活跃。

点击"开始使用服务号"，可进一步了解[服务号功能介绍及接入指导](https://developer.huawei.com/consumer/cn/doc/distribution/service/huawei_business_touch-0000001054309149)或进行服务咨询。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ee/v3/eMV4mlaVTxywm1PNDYSAjw/zh-cn_image_0000001921171958.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=C515BA58D155E5917C0A8F2DC12FAB700755BA42BE24A70E35E3A2AC7B1D8B90)

### 卸载时推荐快应用

> 注意
>
> 仅手机APK应用支持"卸载时推荐快应用"功能。

如您想在用户卸载手机APK应用时向其推荐您开发的快应用，可点击"卸载时推荐快应用"，"开启推荐"选择"是"，然后选择您想推荐的已上架快应用即可。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8c/v3/00zilsskQNKhbsVSlr_aiw/zh-cn_image_0000002563667683.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=A2F5E5374ECCF9C97DEB255DC0612729475B6C5380585713A4FC81BFD99259F3)

## 进入版本信息页面

发布应用时选择发布国家或地区、上传软件包等操作，均在应用的版本信息页面配置，配置您需要进入版本信息页面。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，选择"APP与元服务"。
2. 选择"Android"页签，在应用列表中点击待发布的应用名称，在"分发"页签中选择"版本信息 > 准备提交"，即可进入版本信息页面。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b/v3/wzNfy_OKQPeeH4OxyVHv2A/zh-cn_image_0000002568417649.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=06A331BDE1393186DF6A99600B45AF46CB260DA306768A1D80E75B0D42802D15)

## 设置发布国家或地区

在版本信息页面的"发布国家或地区"栏，勾选应用需要发布的国家或地区。

* 选择"所有国家或地区"：应用将在所有200个国家或地区发布。如果未来新增了其他国家或地区，应用也将自动发布到这些国家或地区。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/df/v3/wBL5FQmUTGSLXp5pnkb-PA/zh-cn_image_0000002545846475.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=0943FC35452F0437CA503DFE10E83343810C48C14B1A7B5C5B6F4695586D1AB5)

* 选择"特定国家或地区"：应用仅在所选国家或地区发布。如您勾选下方的"新国家或区域"，华为应用市场会对未来新增的国家或地区自动发布您的应用。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bd/v3/oz0WoJFKSyqMV6nf3tQaqQ/zh-cn_image_0000002185598784.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=4C6F0797F64815AD634150DC0E1CBD79E6EE041C9B7CAF787FC9ACE69A0A2E23)

> 说明
>
> * 当您选择了"所有国家或地区"，或者"特定国家或地区"中选择了非中国大陆的国家或地区，则需要勾选"同意应用数据出境声明"，如上述截图所示，否则您的应用将无法提交审核。关于声明的具体内容，请查看个人信息出境授权声明。
> * 华为运营人员在审核应用时会检查您的应用是否符合对应国家或地区的政策、宗教文化等要求，如不符合，运营人员会将该国家或地区从分发国家或地区中去除 。应用审核通过后，您可在对应的应用版本信息界面的"发布国家或地区"位置查看最终分发范围。
> * 分发到车机的应用目前支持的分发国家或地区仅为中国大陆。

## 设置是否为开放式测试版本

开放式测试用于邀请指定的测试用户进行版本测试，被邀请的测试用户可以下载该应用进行测试，未被邀请的测试用户该应用不可见。

* 正式发布的版本请选择"否"。
* 如您想发布为开放式测试版本，选择"是"，具体操作请参见[开放式测试指南](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-betatest-introduction-0000001071477284)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/db/v3/UGgijgs-QgShKNQjl_wAEQ/zh-cn_image_0000001141470566.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=3DF31BE630121371AC2D262EB8B0A4629C2009E8E6F1A23D4A94DFA15BC401B6)

## 上传软件包

发布普通APK应用时，支持为该应用上传1个APK软件包，软件包要求请参见[前提条件](#section12761327123615)。
> 说明
>
> * 如果您在创建应用时未指定应用包名，则上传软件包后，AGC将自动从软件包中读取应用包名并写入"应用信息"中。您再次传入的软件包中的应用包名必须与第一次传入的一致。
> * 为了提高您的应用审核通过率，您可以点击"发布版本"后的对应链接对软件包提前进行云测试和云调试，及早发现并解决问题。相关操作请参考[云测试](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-cloudtest-introduction-0000001083002880)和[云调试](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-clouddebug-introduction-0000001057034023)操作指南。

1. 在版本信息页面"软件版本"栏，点击"软件包管理"。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8a/v3/OxvbyEyZSwS6_-93JXGi8A/zh-cn_image_0000001320579074.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=3B1CBA09EF4D515A81E887B5D96561896C65FD13CC5CDA7F518801BAA2A36182)

2. 在"软件包管理"页面点击"上传"，上传应用软件包。上传成功后如为自动选取，则在软件包列表中选中软件包，点击"选取"。 注意
   > * 当您分发APK软件包到手机设备时，请确保您上传的软件包中必须包含64位版本软件包，否则可能会导致应用上架审核提交失败。
   > * 您可以点击"软件包管理"页面操作栏的对应链接对软件包提前进行云测试和云调试，及早发现并解决问题。相关操作请参考[云测试](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-cloudtest-introduction-0000001083002880)和[云调试](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-clouddebug-introduction-0000001057034023)操作指南。
   > * 点击"操作"栏的"删除"，可删除不需要的软件包。仅允许删除与草稿态版本关联的软件包。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/52/v3/ugKHde4fTZuFS9AvVU1krw/zh-cn_image_0000001515350081.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=88F45BF46BCC965B6454BBB7027DE86123C5FC8009A763440166DFF4F1FFD08F)

## 设置应用付费情况

### 付费情况

您可以在"付费情况"栏设置应用是否需要用户付费才能下载。当前手表、大屏、路由器应用只支持设置为"免费"。
> 注意
>
> 应用正式上架后不支持修改"付费情况"，请谨慎选择。

* 如果您选择"免费"，您的应用即为免费应用，用户可以直接从华为应用市场下载安装您的应用。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/81/v3/9Bt8W03dQrGcdOku6j_tBQ/zh-cn_image_0000001186802883.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=4110EA76476D981377EF37503919526A3139728E2E2E29B1798F930ADB904207)

* 如果您选择"付费"，则您的应用即为付费应用，用户在下载应用时将需要支付相应的费用。 说明
  >
  > 如您的应用需要设置为"付费"，需同时开通[商户服务](https://developer.huawei.com/consumer/cn/console/setting/merchant)及[签署华为商户服务协议](https://developer.huawei.com/consumer/cn/console/setting/merchant)。

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c0/v3/XknQWqvdRQS_C-GS7Yss2Q/zh-cn_image_0000001141802904.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=6904797E245FCA8CE787D364C43466A16BDD315947E78631B23725E35C4481E1 "点击放大")

  您可以在"本站默认展示"中设置本站默认展示的币种，再点击"查看编辑"进入"应用价格"页面，编辑应用在各国家/地区的价格，各参数如下表所示。
  > 说明
  >
  > 点击"查看编辑"前需要点击右上角的"保存"保存当前已配置的版本信息。

  |参数|说明|
  |:---------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  |本站默认展示|本站默认展示的币种，默认为您在"付费情况"栏设置的币种。设置后则下方的"汇率换算价格（含税）"输入的价格的币种即为设置的币种。例如"本站默认展示"设置为"中国大陆（CNY）"，则"汇率换算价格（含税）"设置的价格的单位即为"元"。|
  |汇率换算价格（含税）|"本站默认展示"币种的应用价格，仅支持非0整数或两位小数。 当您在设置完价格后并点击"刷新"后，系统会自动根据汇率及相应价格换算规则计算出其他国家/地区的当地价格，并展示在下方的国家/地区价格列表中。具体换算规则请参见[换算规则描述](https://developer.huawei.com/consumer/cn/doc/app/agc-help-conversion-rule-description-0000001146614687)。 您还可以根据应用的价格策略，手动修改应用价格表中指定国家/地区的价格，修改保存后将以此价格作为该国家/地区的最终价格。 > 说明 > 在使用汇率刷新不同国家/地区的应用价格时，如出现币种兑换查无汇率异常场景的警告，则您需要手动填写该国家/地区的应用价格。 > 提交审核前，若有国家/地区币种发生变更，您需根据界面提示重新设置价格，否则将无法保存价格信息。|
  |置顶国家/地区|置顶汇率换算国家或地区，方便您查看或编辑应用价格。设置后该国家或地区将置顶展示在下方的国家/地区列表中。|

* 对于手机/平板Android应用，选择"付费"时还可同时将应用加入AppTouch会员业务。 您可先了解[AppTouch业务详情与使用指导](https://developer.huawei.com/consumer/cn/doc/distribution/app/jieshao-0000001063049556)。如需加入，勾选"同时申请加入AppTouch会员服务"，应用提交审核时将会被同时提交AppTouch会员服务审核。

  点击界面"AppTouch会员服务"链接，可快捷前往AppTouch会员服务菜单查看审核进度与结果。
  > 注意
  >
  > AppTouch会员服务暂不支持中国大陆地区，仅发布到中国大陆区域的应用建议不勾选。

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4d/v3/lf1chIBmQ6Cn2hQAePPU2A/zh-cn_image_0000001550890640.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=670A08B272B114FBA79872A6D4E2D00F6C2A86C617876A99E31B9E5CFB69CD05)

### 应用内资费

选择应用内资费类型，即用户在使用应用过程中的付费类型，如因使用道具、开通会员等进行的付费。支持多选。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/JgWhceCHT9OAAZVvgIE3EA/zh-cn_image_0000001186523071.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=0EE04BA53A348B313F6B09EB680AD4CF212AB3CD95CC59DC1895BAEC698DEAA8)

### 会员游戏

您可以申请加入华为游戏会员服务，积极推动游戏生态在智慧屏阵地的持续发展。当前"会员游戏"仅面向"兼容设备"包含"智慧屏"的APK大屏游戏。申请加入前，您需要开通[商户服务](https://developer.huawei.com/consumer/cn/console/setting/merchant)及[签署华为商户服务协议](https://developer.huawei.com/consumer/cn/console/setting/merchant)。若提供的资质成功通过审核，您可以向最终用户提供专享游戏会员权益。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2d/v3/9WJZBHtOQZa5LVkPj-3OTg/zh-cn_image_0000001432440445.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=6DFA9789A8F1B45FDA55B2CBC2C3F8B3100836814538E9E82A0096640FCA663D)
> 注意
>
> * 游戏正式上架后不支持修改"会员游戏"，请谨慎选择。
> * 成功加入游戏会员服务后，您需要保障至少90天的会员内容在架时间，期间不得擅自退出会员服务范畴或进行游戏下架。

## 设置内容分级

年龄分级作为应用的必填信息，便于开发者向用户说明应用的适用对象。年龄分级作为应用的重要属性在华为应用市场直接展示给用户，帮助用户找到适合其年龄等级的应用，进一步为未成年人用户打造纯净的使用环境。

请根据您的应用参考以下步骤如实填写调查问卷，填写完成后即可得到当前应用的年龄分级结果。

1. 点击"设置"。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/48/v3/7VM1d-5OSjCRkjx597zuPw/zh-cn_image_0000001338811305.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=27DC2521215B7F1B81CFC049509BEACCC0EE706D38C3F876591C3E3AEF29D80A)

2. 在弹出框中点击"填写调查问卷"。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/52/v3/SRAlh0GmTnyRmPfyPWG-cg/zh-cn_image_0000001286251756.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=F8387C318274E9B00D8694AED41BC507483D46FCAB389B59456798C5C38C42C4)

3. 根据实际情况完成问卷填写。如果您在填写完某部分后需要更改所填内容，请点击对应部分，重新作答。如果您已开始填写此调查问卷并想稍后再完成，请点击"保存"。 注意
   >
   > 请务必据实回答年龄分级调查问卷中的问题。对应用内容的虚假陈述可能会导致应用被下架或冻结。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fc/v3/UCnd-eqyQ9KjrAEOXT7s7w/zh-cn_image_0000001286411824.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=E03F70A27C5560F078AE954398DC1D058025A1610BCFA722CBB449BD94A401CA)
4. 填写完问卷中所有的问题后，点击"验证"，查看您应用适用的最低年龄分级结果。 注意
   >
   > 如果点击"验证"后，年龄分级结果显示为"拒绝评级"，请查看页面中拒绝评级的详细原因，并在修改不当内容后重新上传符合规范的应用。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1b/v3/h51C2_cTQEquw45ZHBxsrA/zh-cn_image_0000001286571912.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=72CFA68EEB5191B6A75119EB4CEC58387E78097AD11B7CEF1B2A73748A88C3B2)
5. 基于应用适用的最低年龄分级结果，请结合自身App的需求，选择预期的年龄分级，然后点击"提交"。 说明
   >
   > 如果应用的年龄分级显示为"16+"或更低龄的结果，但您认为其内容更适合18岁以上的用户，则可以在"请重新设置您预期的年龄分级"下方选择"年满18周岁"。在AppGallery上，该应用的年龄分级将显示为"18+"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/24/v3/AVMH4atjSe294kis7SQ1vQ/zh-cn_image_0000002414452645.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=C9D2CCB7CDC2B1A84AB2262670E0894C12F8D19E6958962EF655EF4A46D9C775)

   对于支持儿童分类的应用，如果您最终选择的年龄分级为3、8或者12，点击"提交"后，您还需再次确认您的应用是否仅面向儿童。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f7/v3/vkyJBhmWSxKJ7TsnuDUo5Q/zh-cn_image_0000001518953561.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=B00C47D48D18300047B350BACF2752C806EB52608B7FDF3BCD99CB80DD1E57A3)
   * 如选择"是"，且您的应用分类确实为儿童类，点击"确认"将成功提交分级。
   * 如选择"是"，但您的应用分类不是儿童类，您需修改应用分类为儿童类。点击提示内"应用分类"可直接前往应用信息页面，修改完成后重新提交分级即可。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/67/v3/lyFfOXefQl-C7c4VhJ4uYg/zh-cn_image_0000001468192938.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=DC4AF2A6B5F262015D617B7AC537AD3C59C2C2130D90537A10C3122502014534)

   * 如选择"否"，点击"确认"即可成功提交分级。
6. 提交分级后，您即可在"内容分级"部分查看年龄分级结果。 注意
   >
   > 年龄分级问卷可能会不定期更新。如果年龄分级问卷内容发生变更，系统会提醒您"问卷已更新，请重新填写调查问卷"，您需重新填写年龄分级问卷，才可以提交应用上架申请。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2f/v3/7h2P717XR06bDFZmKfHTxw/zh-cn_image_0000001286600326.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=22F52F05959DE7777698978D47EE2FF60ED46C5C1776BA30757559547E414A66)

   您可以在 "内容分级"页面上点击"设置"，填写新的调查问卷。
   > 说明
   >
   > 如果更新应用版本会影响到年龄分级调查问卷中所涉问题的答案，您需要在AGC上提交新的年龄分级调查问卷，点击"设置"即可重新作答。如果更新的应用版本不影响您对年龄分级调查问卷中问题的答案，则无需重新作答，系统将继承您之前的年龄分级结果。

如您还有其他疑问，请于华为应用市场[互动中心](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/interactive)咨询。

## 申请绿色应用认证

"绿色应用认证申请"选项需要满足以下几个条件才会展示：

* 您的应用为安卓手机应用。
* 您必须为中国大陆开发者。
* 您的应用所选择的发布国家/地区必须包含中国大陆。

当您上传并选取应用软件包后，您可以选择是否申请绿色应用认证。

如果您选择"申请"，华为将对应用进行兼容性、稳定性、功耗、性能、安全及隐私合规的检测，通过认证后，华为应用市场将会以特殊的绿色标识显示应用，并优先推荐和展示给用户，建议您申请。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/13/v3/Cqii2VBFRES9H6G-ugIYIw/zh-cn_image_0000001186802891.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=9021FADCB43B232FCEF3781C26A21532B1499EF021662FA0E77AF06C41B75309)

华为应用市场展示效果如下：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d6/v3/4r-nF9oiQROr-AVPnXOysw/zh-cn_image_0000001252378017.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=6AD014FAF1D17EC048C948C51650A5639D220BB1CAF71EBA4A8D6798DB4839E7)

## 填写应用隐私权限说明

如果您上传软件包时选取的软件包（仅限分发到手机、VR和路由器设备的APK）涉及获取敏感权限，将会展示"应用隐私权限说明"栏。如您申请了绿色应用认证，则需填写"绿色应用隐私权限说明"。

### 常规应用隐私权限说明

* 绿色应用隐私权限说明：
  1. 在"权限说明"框中参照范例说明敏感权限使用情况。 说明
     >
     > 如您上传的APK应用需要访问后台位置信息访问权限，您需在"权限说明"框中说明无法使用前台位置信息访问权限替代的原因。
  2. 点击"上传"，上传绿色认证审核材料。请参考模板，在审核材料中提供：
     * 隐私权限名称
     * 软件包中涉及到隐私权限的场景描述
     * 调用路径
     * 软件包中涉及到隐私权限的场景截图
  3. 仔细阅读"其他要求"，确认满足自检项要求后，勾选"确认符合上述要求"。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e1/v3/S6X-G3bMRV2YWcUJDsc6Sw/zh-cn_image_0000001141802912.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=C62A3D5D691C4243F51D22030475EAC0813367E409C281DCA0B46B60965E032B)

* 如您未申请绿色应用认证，则需填写"应用隐私权限说明"。在"权限说明"框中参照范例说明敏感权限使用情况。 说明
  >
  > 如您上传的APK应用需要访问后台位置信息访问权限，您需在"权限说明"框中说明无法使用前台位置信息访问权限替代的原因。

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dd/v3/Ak8ZpFneRnG8jFzLWb7n0w/zh-cn_image_0000001186523079.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=77F0854F1608B4E46B26FF88CA4943766D4C187B6CD0730F91CBB9D2476C09AE)

### 专项敏感权限说明

如您的应用软件包涉及获取专项敏感隐私权限，除了填写上述[常规应用隐私权限说明](https://developer.huawei.com/consumer/cn/doc/app/agc-help-releaseapkrpk-0000001106463276#section16150162611118)外，还需填写专项敏感权限声明。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/62/v3/b0fCXuU5QeyKVUurgvN66w/zh-cn_image_0000001252637135.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=A88A4728CFB52DF2146B82FC7E87DA1F9BAC566A1ACC368E17207B17A50BAD50)

* 核心功能：您需要根据实际情况勾选应用涉及的核心功能（必填）。
* 使用场景演示视频：您可以点击"![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cb/v3/xlqY5oC0QgmHi7CvLT1XjQ/zh-cn_image_0000001186523087.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=7274F7F345A5147B2EE2E5792B06C3EA9BB536E1388929E9BE7AF1420A0420CA)"上传mov、mp4格式、大小上限500MB的演示视频（选填），方便审核团队评估。

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1f/v3/kvXbEZWOSlq-wtXkKi2dIQ/zh-cn_image_0000001141483130.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=BCE1FE2B010E12EA30A7DDEC7A8530B5CE74F2580316369A509396B61BB4FDC5)

## 填写隐私声明

请您填写下方隐私相关链接，供应用上架审核。您可以查看[华为应用市场审核指南-用户隐私](https://developer.huawei.com/consumer/cn/doc/app/50104#section599875815368)，了解如何保护用户隐私。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2c/v3/d1OjZhgMQNGvte84Yk5OFQ/zh-cn_image_0000001154897330.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=C386A89D401BD659717CC1977B92864AA1BF87D5521D188BA7CCABBCCA160616)

对于中国大陆开发者，如应用发布地区包含中国大陆，您还需参考[APP常见个人信息保护问题FAQs](https://developer.huawei.com/consumer/cn/doc/FAQ-faq)了解隐私政策URL规范。如希望快速通过审核，推荐使用[云托管](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-cloudhosting-introductions-0000001057944575)服务托管隐私政策内容。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/aa/v3/yJ0XX0qGTAOv2g9_gz1dIw/zh-cn_image_0000001465931841.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=5BFD30335465A19395C02C5A73B48EF13E1AB2F50A44D0CA70CC52736B74656B)

* 隐私政策网址（必填）：如果您的应用涉及收集、处理用户信息，请提供隐私政策声明的网页链接地址。该网址会在应用的详情页面添加隐私政策跳转，可帮助用户清楚地了解您如何处理敏感的用户数据和设备数据。 隐私政策必须完整说明您的应用如何收集、使用和分享用户数据，包含但不限于如下情况建议提供：

  * 面向儿童的App。
  * 包含账户注册或需要访问用户的现有账户，或由法律另行规定。
  * 对于收集用户或设备相关数据的App。
* 隐私权利网址（选填）：您需提交关于您的用户实施其权利的相关网站，如用户删除、修改、导出其个人数据的入口。

## 录入隐私标签信息

> 说明
>
> 用户的华为应用市场客户端必须为11.2.2.300以上版本，隐私标签数据项才会在华为应用市场客户端展示。

您可根据应用是否收集用户的信息数据选择是否在华为应用市场的用详情页展示隐私标签，告知用户您的应用如何使用个人数据。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/06/v3/XVdbwP_OQQGAyXdd1kgewg/zh-cn_image_0000001425971937.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=5299F4DC18C716CD081F89509338508BBEA5F9AC0D72A7F4BD5609C468B82516)

* 如您的应用不涉及收集用户的信息数据，请在"是否涉及个人信息收集"项中选择"否"。
* 如您的应用涉及收集用户的信息数据，请在"是否涉及个人信息收集"项中选择"是"，您可以参考以下步骤录入隐私标签信息： 说明
  > * 业务场景和相关数据项信息请参考[AppGallery隐私标签服务说明](https://developer.huawei.com/consumer/cn/doc/distribution/app/privacy-label)。
  > * 如果您的应用中不涉及广告与营销的相关内容，请勿在业务场景中勾选"广告与营销"。
  1. 在"是否涉及个人信息收集"项中选择"是"。
  2. 在"选择业务场景"项中，根据用户个人信息数据的使用场景进行对应选择，最多支持同时勾选六种业务场景 。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ae/v3/hI9uMoMmS8KFxWCV0y2opg/zh-cn_image_0000001437227653.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=E7613A7E1D34150EDCFD6857A7418C486ED344BAD7012E0867097301F424997A)

  3. 在您勾选的业务场景的对应页签下，点击左下角的"+添加"。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c8/v3/k5QbVjqjTxKhATAmo6DyCg/zh-cn_image_0000001386588454.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=BEC932F827C38624DBF247D4475CA22BAB34F75ED7A5870731F214A94A70D006)

  4. 勾选对应的数据项后，点击"确定"。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/79/v3/3LPYuqK8QB-xgpcly2Paqg/zh-cn_image_0000001186802913.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=41B09F4C27188412FF67E4273AF620250AF04F9BEF472663885D2DB068EE4CA7)

  5. 逐一完成每个场景下的数据项补充后，您可在"关联到用户数据汇总"页签下查看您勾选的全部数据项。 说明
     >
     > 数据项不可为空，如您有尚未补充数据项的业务场景，相关场景页签的左上角会有红点提示，此时请您补充缺失的数据项。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1a/v3/40yMZHtfRy6fSkp94E3fSA/zh-cn_image_0000001386748154.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=F29805427864E8E585BE0D03076132927A9952C4C3B8C21A203F97BF595BC43A)
  6. （可选）如您想删除某个业务场景下的数据项，您需点击对应的场景页签，点击相关数据项后的"删除"按钮即可删除该数据项。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/13/v3/JKa89oJxRfa3M8ESEGWK5w/zh-cn_image_0000001387067778.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=1123799B17A0B25A38BC393730885F47B50C0E174716A9AF3945251786F4A426)

## 填写AI功能声明

按照法律法规要求，应用程序在上架或上架审核时，应用程序服务提供者应说明是否提供人工智能生成合成服务。详细内容参见[人工智能生成合成内容标识常见问题](https://developer.huawei.com/consumer/cn/doc/app/50111-10)。

* 如果软件包中不包含人工智能生成合成内容，"AI生成合成服务"选择"不涉及"，配置结束。
* 如果软件包中包含人工智能生成合成内容，"AI生成合成服务"选择"涉及"，继续配置，选择涉及的AI生成合成服务类型并前往"版权信息 > 授权书及其他材料"上传AI生成标识材料和相关资质文件。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c3/v3/mO6lyVC3RI6B0qfl38ZQYQ/zh-cn_image_0000002514861288.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=B2E58BDEC46CE9B50742BA9C4EDBCDE47EFB515E3BB56A244E50E77F66B7A42B)

## 填写版权、版号信息

### 版权信息

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4d/v3/F3mMiDfFSbWfGykeXa1UsA/zh-cn_image_0000001424109610.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=17613E036482D9E9C79F0C3D657A9BF41E4776B1A422B87767246CB5D8BCC2B4)

版权信息根据应用的类型和应用的发布区域要求略有不同。

* 应用发布范围包含中国大陆：
  * 电子版权证书：可选。可上传应用或游戏的PDF格式"电子版权证书"，大小不超过5MB。如果您上传了非PDF格式的文件或是将非PDF格式的文件的扩展名改为PDF，均会弹出错误提示。
  * 应用版权证书或代理证书：手机应用必选。支持JPG、PNG、BMP格式，默认展示五个图片上传框，您可点击虚线框内的"+"号继续添加。最多添加10张图片，每张图片不超过15MB。
* 应用发布范围不包含中国大陆：
  * 电子版权证书：可选。可上传应用或游戏的PDF格式"电子版权证书"，大小不超过5MB。如果您上传了非PDF格式的文件或是将非PDF格式的文件的扩展名改为PDF，均会弹出错误提示。
  * 应用版权证书或代理证书：可选。支持JPG、PNG、BMP格式，默认展示五个图片上传框，您可点击虚线框内的"+"号继续添加。最多添加10张图片，每张图片不超过15MB。

> 说明
>
> 关于版权资质文件的具体要求，请参考[应用资质审核要求](https://developer.huawei.com/consumer/cn/doc/app/80301)。
>
> 如您的版权资质图片超过了最大支持数量，建议您将图片进行拼接后再上传。

如您还需要提供授权书或其他资质文件，可在"授权书及其他材料"栏上传。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/de/v3/0LJMAV28Q36Ikw-Cqd2BwA/zh-cn_image_0000002253465205.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=660B1AF4A16B207B7C58ADC3245DCDDCDADEA1CBCD8F415E359825B42CE718A9)

仅支持上传zip格式的压缩包文件，大小不能超过200MB。并且压缩包只能包含JPG、JPEG、BMP格式图片，文件夹层级最多三层，累计不能超过200张图片。压缩包文件上传后会进行文件安全校验，请耐心等待1-3分钟至文件校验完毕。

如校验过程中出现如下错误提示，请参考对应解决方案修改文件后重新上传。

|错误提示|解决方案|
|:--------------|:-------------------------------------------------------------|
|压缩包内图片数量超过上限|压缩包内图片数量超过200张，请适当删减图片再重新上传。|
|压缩包大小超过上限|压缩包大小超过200MB，请适当缩减压缩包体积后再重新上传。|
|压缩包解压后的文件大小超过上限|压缩包解压后整体文件大小超过1GB上限。请适当删减图片后再重新上传。|
|压缩包内文件格式错误|压缩包内存在非指定格式（JPG、JPEG、BMP）的文件。请删除非指定格式文件后再重新上传。|
|压缩包内文件层级超过上限|压缩包内文件夹层级超出3层上限。请合理安排文件夹层级目录，使其符合要求后再重新上传。|
|压缩包解析失败|请排查压缩包内是否存在其他格式文件（如Mac系统打包产生的部分缓存文件），请使用Windows系统打包或者手动删除非法文件。|

文件上传后，如需更新材料，点击"更新"；如需下载材料，点击"查看"；如需删除材料，则点击"删除"。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b/v3/GyednN2jTLOQLH31bvznkQ/zh-cn_image_0000002218345490.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=99A7D642D081222990B51317F862DE52B1CFC8E20D27DA960D7046FFFFE48A39)

### 版号（仅针对游戏类应用）

当您的应用满足如下条件，将展示"版号"栏，您需按要求填写游戏版号信息。

* 您的应用类型为"游戏"。
* 您的应用支持设备为手机、车机、路由器或VR。
* 您的应用发布范围包含中国大陆。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bb/v3/2WG5NJmHTSqHDRL-VwuYJQ/zh-cn_image_0000001407371820.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=2CA35ECA2164770CB07E7F090F8A9256A6AF99A8CDD9F0810C3079DAF7871106)

* 版号信息：必选，您需要向相关单位申请游戏版号，并在此处填写。
* 版号证明：必选，需上传"版号批文"或"版号授权书"，图片格式支持JPG、JPEG、PNG、PDF。默认展示三个图片上传框，您可点击虚线框内的"+"号继续添加。最多添加5张图片，每张图片不超过4MB。若您在"版号授权书"中上传了版号授权书，您还需填写"授权书有效期"。

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/47/v3/m0tmzBw-QUuj2IFYZAZ15A/zh-cn_image_0000001186523107.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=32202FFDE8EB0C03E28403FB503A29E25BFD02E9811B77C60FE52BCCBE4E0DAD) 说明
  >
  > 关于版号文件的具体要求，请参考[应用资质审核要求](https://developer.huawei.com/consumer/cn/doc/app/80301)。
  >
  > 如您的版号资质图片超过了最大支持数量，建议您将图片进行拼接后再上传。

## 填写备案信息

根据[《工业和信息化部关于开展移动互联网应用程序备案工作的通知》](https://www.miit.gov.cn/zwgk/zcwj/wjfb/tz/art/2023/art_920db564162e4312916a01bed6540ad8.html)要求，APP主办者应当依照[《中华人民共和国反电信网络诈骗法》](https://www.miit.gov.cn/jgsj/zfs/fl/art/2022/art_d30139b442a141f48f05775d8c0b3cee.html)第二十三条"设立移动互联网应用程序应当按照国家有关规定向电信主管部门办理许可或者备案手续"相关规定履行备案手续。未履行备案手续的，不得从事APP互联网信息服务。

请您参考[APP核准（APP备案）指引](https://developer.huawei.com/consumer/cn/doc/app/50130)，填写应用在工信部认证的备案信息。审核人员会对您填写的备案信息进行核验，核验通过后才允许上架，请如实填写。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b8/v3/bTlZkwrpSyO8tgkoybMdOw/zh-cn_image_0000002205043476.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=8687CF1E7C18E5FAD6BBBE75630159D14DFD601AF327E4FE61BEA159666AFC39)

## 完善版本其他信息

### 应用审核信息

当您的应用支持的设备为手机、车机、路由器或VR时，界面将展示"应用审核信息"栏，供您填写应用审核相关的备注信息。如审核过程涉及登录，还需提供测试账号供华为审核人员完成应用中登录、查看、购买等功能的审核。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8b/v3/qDsi0OPaT-e8P2hqsUVV8Q/zh-cn_image_0000001141483150.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=1A183BF815AC0B842C35E04B2DC5AEE0B1D492E6DB1676DCEB5D607D1D4AFD1A)

当您的应用支持的设备为大屏或手表时，您可以在"上架"栏填写一个10-300字以内的上架说明，供审核人员查看。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/58/v3/swkabc47QqSCLmORhCY36g/zh-cn_image_0000001426171725.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=0FBC6C6B3BAA7EA3354B09434835DB96CF7E60FBF4F90DC23EB89BF44DAE6957)

### 联系方式

当您的账号归属地为中国大陆地区，您需预留应用负责人的联系方式，以便于华为审核人员与您联系沟通。

* 手机号码：如果您有审核问题需要沟通，审核人员将致电该号码。
* 邮箱：用于接收上架审核结果，应用整改或下架通知。
* 姓名：用于沟通核实负责人身份。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d7/v3/NMZ2-u8sScmIf6Oz-sSlZQ/zh-cn_image_0000002521196588.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=7B5AC7DFA5995816FCC3955BE8488B3D9FEB9490D9B12FD45001921DE6B64359)

### 其他

当您的应用支持的设备为路由器时，您可以配置您的应用是否"必须联网才能使用"。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/55/v3/LJxxn8PjSPWh6Azf1paaHw/zh-cn_image_0000001186802927.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=57A8C6CD4DC2A4C726087F72C5D70F4375EF58B7580FEF5124D2944417C7CF45)

当您的应用支持的设备为手表应用时，您可以配置应用的"官方APK下载地址"，您还可以允许华为应用市场自动从该页面抓取新版本。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/57/v3/oK5mjRCOTQCngnkNc1sSXg/zh-cn_image_0000001141802946.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=E54AA30E99678675D85B3AE7F8F24E06E03E8EFE919DEB4D31BAEFF10D73E16E)

### 家人共享

当您的应用发布区域包含中国大陆时，界面将展示"家人共享"栏。启用"家人共享"后，最多6位家庭成员可以免费使用此应用。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/03/v3/xjVsJaOKQFK6un9i7mQ_mA/zh-cn_image_0000001186523113.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=C026AE8EFCBBE93D22740F86A834A4B1A070FD4967E0332DADCD694739AFC05A)

## 设置应用上架时间

当您的应用支持的设备为手机、车机、VR或路由器时，您可以指定应用的上架时间，支持"审核通过立即上架"或"指定时间"上架，时间精确到秒。

指定时间是您的本地时间，在您设置时间之后，系统会自动转换成UTC标准时间并显示在后面。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9c/v3/5CwalIZ7TWqEhd7jY3DNAA/zh-cn_image_0000001141483158.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=603946923EC0F4B36BB9BFA58D3FB62D0C3BF446F34D6E8C5C9967A9A9F29BB7)

## 提交审核

1. 所有信息确认无误后，点击右上角"提交审核"。 说明
   > * 如果您的APK包过大，在您点击"提交审核"后可能会弹出"系统正在处理，请稍后操作"的提示框，此时说明AGC尚未完成对您软件包的解析。请您耐心等待，稍后再试。
   > * 如您提交审核的应用名称包含敏感词或特殊字符，系统可能会弹出提示框，此时您必须回到"应用信息"界面重新设置应用名称。
2. 确认版本号无误后，点击"确认"。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/18/v3/wDXSvlVKSF-2OgFA5o0noQ/zh-cn_image_0000001141802952.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=4C1918431507AA8399238D3E5896F185E4ED32319513B1EE50B543BE98CA6822)

   提交成功后，在"状态"中可查看审核状态。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2b/v3/O-nCkkXETw2-5IlHvMuuqw/zh-cn_image_0000001188946427.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=61245C2BB21960EB1902F66BE54E0C9F52801D2F8A33A14E25BA7723F7FC4197)

   华为应用市场将在1-3个工作日内完成审核。如果您的应用被驳回，我们将会发送邮件至联系人邮箱进行通知，请注意查收。
   > 说明
   > * 发布到中国大陆的大屏应用需要通过华为应用市场审核和国家广电总局检测，才能在华为应用市场上架，可能导致较长的审核时间，请您耐心等待。
   > * 针对Android手机应用，如果您是中国大陆的开发者且应用发布地区包含中国大陆，当您提交应用审核后，华为将对您的应用进行隐私合规检测。检测不通过可能会导致您的应用上架审批被驳回，请您及时关注版本信息界面的检测结果，并根据相关提示进行隐私整改。
   > * 您无法更改处于审核状态下的应用版本的相关信息，您必须先撤销审核，然后才能进行相关操作。具体内容参见[催促/撤销审核](https://developer.huawei.com/consumer/cn/doc/app/agc-help-cancel-review-0000001110334194)。
   > * 应用发布成功后，版本会变为"已上架"状态。
   >   * 如果您仅需更新当前在架版本的应用详情信息（应用名称、应用介绍等），请参考[更新在架应用详情](https://developer.huawei.com/consumer/cn/doc/app/agc-help-updateappinfo-0000001100156682)选择合适的更新方式。
   >   * 如果您需要修改应用的分发国家、修改软件包、发布开放式测试版本等，建议您发布一个新的应用版本具体请参见[升级应用版本](https://developer.huawei.com/consumer/cn/doc/app/agc-help-update-version-0000001146436549)。

## 修改预上架时间

审核通过后，如您的应用尚未到达生效时间，您依然可以更改上架时间：修改指定时间，点击"提交变更"，在弹出的提示对话框内点击"确认"即可。更改上架时间的操作无需再次经过人工审核。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/97/v3/uwBuNzbZRl2nQFcGQ8sjVg/zh-cn_image_0000001141483164.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=1FAFA348A4D44F5980C8AFCA8CC4BC9385DFA6FBCDC1292810DA28B2850C1CF1)

## 手动发布待上架应用

对于指定时间上架的应用，审核通过之后、指定上架时间到达之前，您可随时手动发布版本上线：在版本信息页面右上角点击"手动发布"，在确认提示框点击"确定"即可。手动发布一般在几分钟内生效。
> 注意
>
> 手动发布目前支持应用设备类型为手机、车机、路由器或VR的应用。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/32/v3/IzmibCH-S7Cu1N1_8DSmYQ/zh-cn_image_0000001186802941.png?HW-CC-KV=V1&HW-CC-Date=20260916T030830Z&HW-CC-Expire=31536000000&HW-CC-Sign=4971A1AFD63393D3D1708F4D9E6763E899972148413905EE8213CFC1CEFCC1E1)

