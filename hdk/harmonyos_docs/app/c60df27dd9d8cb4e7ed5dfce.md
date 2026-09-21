---
name: document/cn/app/agc-help-create-app-0000002247955506
title: 创建HarmonyOS应用
uri: https://developer.huawei.com/consumer/cn/doc/app/agc-help-create-app-0000002247955506
---

# 创建HarmonyOS应用

APP ID是应用开发与发布的关键要素，是识别应用的唯一标识。如需在华为应用市场发布应用，或者使用AppGallery Connect提供的各类服务，首先要在AppGallery Connect为您的软件包创建对应的HarmonyOS应用，从而为HarmonyOS应用生成一个唯一的APP ID。

每个软件包需要创建一个HarmonyOS应用。如需将一个软件包分发至多个设备类型，可在配置支持设备时勾选多个设备类型，无需创建多个应用。

## 前提条件

您已[注册华为开发者账号](https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148)并[实名认证](https://developer.huawei.com/consumer/cn/doc/start/itrna-0000001076878172)。

## 操作步骤

**第一步：** **[为HarmonyOS应用创建APP ID](#section16423184171915)**

首先需要为应用生成一个唯一的APP ID。

**第二步：[（可选）为HarmonyOS应用开启华为开放能力](#section1817619495251)**

如果您的HarmonyOS应用需要使用华为开放能力，则必须在AppGallery Connect打开对应能力的开关。

**第三步：[为APP ID关联创建待发布的HarmonyOS应用](#section1502161513011)**

APP ID生成后，您还需为APP ID创建待发布的应用。此步骤完成后，创建的应用才会展示在"APP与元服务"列表内。

### 为HarmonyOS应用创建APP ID

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，选择"证书、APP ID和Profile"。
2. 在左侧导航栏选择"证书、APP ID和Profile > APP ID"，进入"APP ID"页面，点击右上角"新建"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/09/v3/Lh5Q-yZ1RB6EtYss2bEn6g/zh-cn_image_0000002498502530.png?HW-CC-KV=V1&HW-CC-Date=20260909T131925Z&HW-CC-Expire=31536000000&HW-CC-Sign=0FEB8277320844E7F6950B6BA187CECADBF08A5D32EFAC3CB38449576A060C15)
3. 进入"设置应用开发基础信息"页面，填写应用基础信息，完成后点击"下一步"。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bc/v3/abPDiriTSw21FKQkrpam0w/zh-cn_image_0000002726862947.png?HW-CC-KV=V1&HW-CC-Date=20260909T131925Z&HW-CC-Expire=31536000000&HW-CC-Sign=91CB59124BA436BCD093BECF9A4230A337F8D135154929B892D30C4354FB6F14)

   |参数|说明|
   |:---|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   |应用类型|选择"HarmonyOS应用"。|
   |应用名称|应用在华为应用市场详情页展示的名称。 应用名称中不能含有"黄赌毒"等低俗敏感字样，且不能与其他开发者的在架HarmonyOS NEXT应用/元服务相同。如提示名称已被占用，请更换新的名称。如果发现有人侵权盗版，可通过[互动中心](https://developer.huawei.com/consumer/cn/doc/app/agc-help-interaction-center-0000002276985946)提起申诉。 关于应用名称的更多要求，请参考[应用信息审核规范](https://developer.huawei.com/consumer/cn/doc/app/50104#section1729024510210)。|
   |应用包名|> 说明 > * 应用包名必须与您DevEco Studio工程中配置的Bundle name一致。 > * 应用包名设置后不支持修改，请谨慎填写。 HarmonyOS应用包名需遵守如下规范： * 包名必须唯一，不能与其他应用（包括Android应用）包名相同。 * 必须为以点号（.）分隔的字符串，且至少包含三段，每段中仅允许使用英文字母、数字、下划线（_），如"harmony_11.huawei.com"。 首段以英文字母开头，非首段以数字或英文字母开头，每一段以数字或者英文字母结尾，如"harmony99.huawei.11_com"。 不允许多个点号（.）连续出现，如"harmony..huawei.com"。 * 长度为7~128个字符，且不可包含敏感词，不能将保留字符作为独立段呈现。以保留字符harmony为例，包名不能为harmony.huawei.com、com.harmony.huawei、com.huawei.harmony。 保留字符包括如下： * oh * ohos * harmony * harmonyos * openharmony * system * [联运游戏](https://developer.huawei.com/consumer/cn/doc/app/joint-operation-game-0000002024369570)包名必须以.huawei/.HUAWEI结尾。|
   |应用分类|> 说明 > 应用分类设置后不支持修改，请谨慎选择。 选择"应用"或"游戏"。|

4. 在"开放能力接入"页面，为应用选择所属的项目，完成后点击"确认"，应用APP ID即成功创建。
   * 如需将应用添加到已有项目，点击下拉框进行选择。
   * 如需将应用添加到新项目，直接在框中填写新项目名称。

   > 说明
   >
   > 如果系统提示"您所在团队创建的应用数已经达到上限，请清理不需要的应用"，请参考[FAQ](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-common-faq-0000001063210244#section17375195017395)处理。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/13/v3/mwXJq0UHRrWWvNLh3GyepA/zh-cn_image_0000002498503916.png?HW-CC-KV=V1&HW-CC-Date=20260909T131925Z&HW-CC-Expire=31536000000&HW-CC-Sign=13939B1DE6DEF7FF9909B4FF67D1C6C690AA35175161E29460DBC4EF8484938B)

### （可选）为HarmonyOS应用开启华为开放能力

华为为HarmonyOS应用提供了众多开放能力，如果HarmonyOS应用需要使用华为开放能力，则必须在AGC开启对应的能力开关。如无需接入开放能力，直接点击最下方"确认"，返回APP ID页面。

当前开启开放能力有两种方式：

* [直接开启](#ZH-CN_TOPIC_0000002247955506__li2499164993616)：若开放能力支持勾选，表示该能力可直接开启，无需申请。
* [申请开启](#ZH-CN_TOPIC_0000002247955506__li15500194915363)：若开放能力不可勾选，表示该能力暂未完全开放，需要申请通过才可开启。

> 说明
>
> * 开放能力开关分为应用级别和项目级别两种。应用级别的开关仅对当前应用生效，项目级别的开关对当前整个项目生效。
> * 开放能力配置信息会写入Profile，建议您在申请Profile前完成所需开放能力的配置。如果您在申请Profile后修改了开放能力配置，请重新下载Profile。
> * 应用创建完成后，若需新添加或修改开放能力，可前往"APP ID"菜单，点击应用名称，进入"应用详情"页操作。

* **若开放能力支持勾选，表示该能力可直接开启** 。

  在"开放能力"栏勾选您想要开启的开放能力开关（以AI问答联网增强服务为例），点击右上角"保存"即可。支持多选，一次操作（勾选或者取消勾选）的能力开关不得超过10个。

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a8/v3/q6UFHhoDRzG6HY-DRxW8pg/zh-cn_image_0000002583700928.png?HW-CC-KV=V1&HW-CC-Date=20260909T131925Z&HW-CC-Expire=31536000000&HW-CC-Sign=BACB256F79969E966099A793E5CFE5603251439911723503D64E06DE11CCF3C7)

* **若开放能力不可勾选，表示该能力暂未完全开放，需申请通过才可开启。**

  下文以数字盾服务为例，介绍开放能力申请的大致流程。各开放能力申请流程和具体要求可能存在一定差异，请以实际界面为准。
  1. 点击对应能力的"申请"按钮。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/af/v3/qGIfSz3kSEGcBy7YE5Npsw/zh-cn_image_0000002583541250.png?HW-CC-KV=V1&HW-CC-Date=20260909T131925Z&HW-CC-Expire=31536000000&HW-CC-Sign=24F8825109284B0ED93513ED51EDB2FF52030A3280309266E32416F05CF1E1F6)

  2. 如弹出"申请前置条件"提示框，表示当前开放能力存在一定约束限制条件。若确认已满足所有条件，点击"下一步"。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ad/v3/7j2i2ANoScuKf4LQTtAMCQ/zh-cn_image_0000002614221901.png?HW-CC-KV=V1&HW-CC-Date=20260909T131925Z&HW-CC-Expire=31536000000&HW-CC-Sign=9F5F9FA6553978854A382383EAF0BCF74659D69E32F5B12ED005E1D922EC6397)

  3. 在"新建业务申请"窗口填写申请原因，必要时可上传附件，然后点击"提交"。 各能力对申请原因与附件的要求可能存在差异，请按实际界面要求操作。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f4/v3/woC4SqhkQeSP7RznmYmV2g/zh-cn_image_0000002614062341.png?HW-CC-KV=V1&HW-CC-Date=20260909T131925Z&HW-CC-Expire=31536000000&HW-CC-Sign=E60E0B3770C4E5DC490070D0AAB94325CB1FCA3F420BAFAAF1ECB87E7C3CA1DD)


  4. 进入互动中心页面，可看到申请已提交的消息。各能力的审批时长已展示在申请页面，请您耐心等待。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c7/v3/unObxNHRSzmZ091k_61Haw/zh-cn_image_0000002473887150.png?HW-CC-KV=V1&HW-CC-Date=20260909T131925Z&HW-CC-Expire=31536000000&HW-CC-Sign=C392167DA64DD099FCB02E7D1C06FB5CA96025801789D069263CCD1501B209C6)

     申请审批通过后，互动中心会发送通知消息给您，同时您也会收到邮件通知。进入"APP ID"页面，点击应用的"应用名称"链接，在"开放能力"栏，可看到对应能力的申请状态变为"已通过"，同时能力开关会为您自动开启。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f4/v3/Ar7U3kvoQ-2HNhQGyiiQgA/zh-cn_image_0000002614241605.png?HW-CC-KV=V1&HW-CC-Date=20260909T131925Z&HW-CC-Expire=31536000000&HW-CC-Sign=6D01B362DAD2C88D785497945B1AC61916CE6ECC6E545159869D9D9F381CD654)

  > 说明
  > * 后续如需关闭开放能力，可取消勾选对应的能力开关，点击"保存"。一次操作的能力开关不得超过10个。修改能力开关状态后，请务必重新下载Profile。
  > * 若开放能力包含主能力和子能力，需参考以上步骤分别申请主能力和子能力。以华为账号服务为例，"华为账号"为主能力，其下包含"获取收货地址"等多个子能力。当前AGC已默认为应用开启"华为账号"主能力，子能力则需分别自行申请开启。

### 为APP ID关联创建待发布的HarmonyOS应用

APP ID生成后，您还需为其关联创建待发布的应用，完成后应用才会展示在"APP与元服务"列表内。

1. 在"APP ID"页面，找到创建的APP ID，点击"操作"列"发布"前往创建。 说明
   >
   > 在"APP与元服务 > HarmonyOS"页签，点击应用列表右侧"新建发布"，也可以为APP ID关联创建应用。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e/v3/j_ljSk-hRceW3uqv2-1KhQ/zh-cn_image_0000002530264449.png?HW-CC-KV=V1&HW-CC-Date=20260909T131925Z&HW-CC-Expire=31536000000&HW-CC-Sign=CF31456EE371695FFE8092DE0EA1C9546277BC0CFEE4F147415818718179ED94)

2. 在弹出的"发布HarmonyOS Next应用/元服务"窗口，将应用信息补充完整。点击"确认"，进入"应用信息"界面。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/epd5PwShQtq_qDetvSa0TQ/zh-cn_image_0000002318927813.png?HW-CC-KV=V1&HW-CC-Date=20260909T131925Z&HW-CC-Expire=31536000000&HW-CC-Sign=2738C9111E8F215515A4A6F47A36ADF4D7A5B5FFBA3F55843D8A256028886C82)![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b6/v3/e-m1_UH0SRWPyW9L0ybjUg/zh-cn_image_0000002284335702.png?HW-CC-KV=V1&HW-CC-Date=20260909T131925Z&HW-CC-Expire=31536000000&HW-CC-Sign=E83A447297D84DD75563008B63737B5286A33E4E20C4D9A9B364828FCE403AB8)

   |参数|说明|
   |:---|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   |应用包名|自动填充您创建的应用包名。|
   |应用名称|自动填充您创建的应用名称，支持修改，但需满足如下条件： * 不能与本账号下、同一语言、同一设备类型的HarmonyOS NEXT应用的名称相同。 * 不能与其他开发者名下、同一语言的HarmonyOS NEXT应用/元服务的名称相同。 > 说明 > 应用名称属于知识产权范畴，重名可能导致侵权纠纷，给您带来不必要的法律风险。请选择独特且具有辨识度的名称，既能体现应用的特色，又能避免侵权风险。如提示名称已被占用，请更换新的名称。如果发现有人侵权盗版，可通过[互动中心](https://developer.huawei.com/consumer/cn/doc/app/agc-help-interaction-center-0000002276985946)提起申诉。|
   |支持设备|选择应用发布后运行的设备。 * 应用分发至中国大陆地区时： * 支持选择手机、平板、PC/2in1、智慧屏、手表设备。其中，"手表"指代运动手表和/或智能手表。若勾选"手表"，应用创建完成后，应用信息页面"支持设备"栏将默认勾选智能手表，您可继续添加或切换成运动手表，详见[配置支持设备](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-app-devicetype-0000002271592112)。 * 在应用提交上架前，您可随时[在应用信息页面修改支持设备](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-app-devicetype-0000002271592112)，支持由单设备改为多设备，或多设备改为单设备。但是应用一旦发布，升级版本只支持增加设备，无法删除已选择的设备。 * 应用分发至中国大陆以外的国家或地区时： * 当前仅智能手表和运动手表应用支持分发至中国大陆以外的国家或地区，因此请勾选"手表"。应用创建完成后，应用信息页面"支持设备"栏将默认勾选智能手表，您可继续添加或切换成运动手表，详见[配置支持设备](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-app-devicetype-0000002271592112)。 * 在应用提交上架前，您可随时[在应用信息页面修改支持设备](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-app-devicetype-0000002271592112)，支持由单设备改为多设备，或多设备改为单设备。但是应用一旦发布，升级版本只支持增加设备，无法删除已选择的设备。|
   |默认语言|华为应用市场客户端应用详情页中应用相关描述的默认语言，请您根据实际情况选择。如果该应用没有提供本地化语言的应用信息，则应用信息将以默认语言显示。|

3. 点击"确认"，进入"应用信息"界面。您可点击顶部"APP与元服务"页签，返回应用列表。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b4/v3/xf1ZZdP9Rb2H0r0AqTfgDQ/zh-cn_image_0000002537414182.png?HW-CC-KV=V1&HW-CC-Date=20260909T131925Z&HW-CC-Expire=31536000000&HW-CC-Sign=87937E5D2323C31F68C90A52956C53FEFA6AE7E5DBB9E96C3CD85C74EDD3771A)

4. 在应用列表"HarmonyOS"页签，可查看已创建的应用。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/84/v3/UmnxokLiRLK__J7bmC1duQ/zh-cn_image_0000002568415005.png?HW-CC-KV=V1&HW-CC-Date=20260909T131925Z&HW-CC-Expire=31536000000&HW-CC-Sign=5276611B3575A3A1350548BD8E0A65C050F10D29F54CB61E06353E05270F8B52)

