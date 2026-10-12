---
name: document/cn/pay-docs/hwzf-appidguanli-0000001757041165
title: AppID管理及关联
uri: https://developer.huawei.com/consumer/cn/doc/pay-docs/hwzf-appidguanli-0000001757041165
---

# AppID管理及关联

## 什么是AppID

AppID：由华为AGC生态分配给应用的唯一凭证，包含移动应用、快应用、元服务、H5等载体。

## 如何创建AppID

若您已完成华为支付商户号开通，需使用华为支付提供的各类服务，请先完成AppID创建，您可登录[AppGallery Connect 网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/) ，并参考[创建应用](https://developer.huawei.com/consumer/cn/doc/app/agc-help-createapp-0000001146718717)指引完成应用创建以获取AppID相关信息，AppID查询可登录[AppGallery Connect 网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/) ，选择"我的应用"。在应用列表中找到待查看的应用，点击应用进入信息中心页面，该页面即可[查看应用AppID信息。](https://developer.huawei.com/consumer/cn/doc/app/agc-help-appinfo-0000001100014694)

## 如何查询AppID

您可登录[AppGallery Connect 网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/) ，在项目列表中找到您的项目，点击待查看应用，进入"项目设置 > 常规"页面，可[查看AppID等应用信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-appinfo-0000001100014694)。

## 如何关联AppID

## 直连商户AppID关联

若您入网时选择合作身份为商户，AppID关联请查看该指引。

请超级管理员登录华为支付商户平台，进入【商户中心】->【产品功能】->【AppID管理】页面关联操作。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d7/v3/Ltt7xA3pQvmHP-KtP8El6g/zh-cn_image_0000002557114811.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=F6F20B95E6457182B1951A65C335C33FFFCF0792E54D98A8268D4893F4FAC034 "点击放大")

* **若您的AppID认证主体与本商户号主体一致**

点击【新增关联AppID】按钮，根据页面提示填写相关信息后，勾选《华为支付商户号与APPID授权协议》，提交申请后即完成AppID关联。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5e/v3/6EBthQa7Rkm7EIqSI-ne-g/zh-cn_image_0000002563602367.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=3C1A5418760218A6E5A5B028DFACEA479F60EDC02B352ADC91FAB8C4341BE4A0 "点击放大")

* **若您的AppID认证主体与本商户号主体不一致**，分为两步：

**第1步：AppID信息填写，申请提交**

点击【新增关联AppID】按钮，根据页面提示填写相关信息后，勾选《华为支付商户号与APPID授权协议》和《联合营运承诺函》，并提交申请。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a4/v3/LAsLWPELS_i-Jzv94qwwKA/zh-cn_image_0000002526154898.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=D443202A7DE9FDAD42DE688A1B5A806AC7CC95C47CC6C30693E17C203AA40B5A "点击放大")
> 注意
>
> AppID认证主体与本商户号主体不一致，华为支付商户平台暂不支持直接关联AppID，请联系您的对接人开通权限后再申请。

**第2步：AppID管理员完成授权**

待华为支付系统自动审核通过后刷新页面，根据系统提示语，请AppID管理员可登录[AppGallery Connect 网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，进入【我的项目】，在项目列表找到待查项目，点击项目-.选择待查应用-点击盈利（或者支付与交易）-鸿蒙支付服务-支付服务（非虚拟类）-去开通，查找待绑定商户号，点击去授权，根据页面提示完成授权关联。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4a/v3/3LeDxxekRjmGUidbAdNtRQ/zh-cn_image_0000002526154916.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=895572447ED5D015031A8E415F19780AF42B5BD39DE619B022A4C5B3BD66E6CE "点击放大")

**图1**若您的应用为元服务   
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6f/v3/wuQUBWU6SVKPB48vlP-Gvw/zh-cn_image_0000002534560210.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=885507860B39DED9CD6576D4ADE0494231F732D5613E0FF720541D0E9DBF9CA4 "点击放大")

**图2**若您的应用为APP

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2b/v3/FURsKuUIT2CLOxAxVSjo-A/zh-cn_image_0000002525994954.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=C668A60A65A57C5D6CD81A1304D875A26189AADC3503EFF73343E7B9AE7F7739 "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ef/v3/0tngUXoiQZ-MnO1-NA50PQ/zh-cn_image_0000002534720564.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=4D62D169D47F3096960C648A537F7826513A9BAC39956EC6AA60CC2AED4730E9 "点击放大")

## 平台类商户AppID关联

若您入网时选择合作身份为平台类商户，AppID关联请查看该指引

请超级管理员登录华为支付商户平台，进入【商户中心】->【产品功能】->【AppID管理】页面进行关联操作。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c3/v3/WxcLwi3ATs2EfyEnttkWbA/zh-cn_image_0000002557234773.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=C6215D06B85DD6CA546056DC7BE6FCE3FD3DE73F2206E7EAC72192D99BA869A1 "点击放大")

* **若您的AppID认证主体与本商户号主体一致**

点击【新增关联AppID】按钮，根据页面提示填写相关信息后，勾选《华为支付商户号与APPID授权协议》，提交申请后即完成AppID关联。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/49/v3/YUytdlCsRgmCjPv1YwEWyw/zh-cn_image_0000002532762738.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=299E783DEA01ADBFBED78BE8F45003FB63A2EB3DD9A84F27ED91FC987B62A92B "点击放大")

* **若您的AppID认证主体与本商户号主体不一致**，分为两步：

**第1步：AppID信息填写，申请提交**

点击【新增关联AppID】按钮，根据页面提示填写相关信息后，勾选《华为支付商户号与APPID授权协议》和《联合营运承诺函》，提交申请。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/17/v3/Q1tHxGpwR0ePy9Sm7xo-fQ/zh-cn_image_0000002557114813.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=4093B8F2863536DC452EC098D4592EB62234F92B31BFCB45B4FC0B7866C212DD "点击放大")
> 注意
>
> AppID认证主体与本商户号主体不一致，华为支付商户平台暂不支持直接关联AppID，请联系您的对接人开通权限后再申请。

**第2步：AppID管理员完成授权**

待华为支付系统自动审核通过后刷新页面，根据系统提示语，请AppID管理员登录[AppGallery Connect 网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，进入【我的项目】，在项目列表找到待查项目，点击项目-.选择待查应用-点击盈利（或者支付与交易）-鸿蒙支付服务-支付服务（非虚拟类）-去开通，查找待绑定商户号，点击去授权，根据页面提示完成授权关联。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a6/v3/JZ9KOEnRQ564U3uPJou5-w/zh-cn_image_0000002526154896.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=F94587AD8E2B2D3FDBA9EA0C93C7D90E410621F459D9F05AF68D7384114198B1 "点击放大")

**图3**若您的应用为APP

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2f/v3/L_Ol22NPTvqUaksG8ACBvg/zh-cn_image_0000002565474839.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=3986E2A128E7D882C718BA41526603745AB9339F5A43A913A209040F4786D86B "点击放大")

**图4**若您的应用为元服务   
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/15/v3/E1Y9pwXMS9Kp7OMx8iBlMQ/zh-cn_image_0000002534555032.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=0FD7EC70454ED344828811F2F6EC4F63169B63F400991EF0D7AAC5308F9D2DC9 "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4f/v3/oE81KVZTR4qEAxgeof6_gw/zh-cn_image_0000002565554949.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=47272BC26A963FEB16CAC56563AAB658B240046EE9AD8B30A8FB1674D2BC6E6A "点击放大")

## 服务商AppID关联

若您入网时选择合作身份为服务商，AppID关联请查看该指引。

请超级管理员登录华为支付商户平台，进入【商户中心】->【产品功能】->【AppID管理】->【服务商绑定的AppID】页面进行关联操作。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b/v3/U_fvFFn8SkyYJ4SXChjLxQ/zh-cn_image_0000002525994956.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=E6D1F0D35BF1824F53DF2C7B7D4AFDAC2337D499DC333BC7A68B5DF0505E53B9 "点击放大")

* **若您的AppID认证主体与本商户号主体一致**

点击【新增关联AppID】按钮，根据页面提示填写相关信息后，勾选《华为支付商户号与APPID授权协议》，提交申请后即完成AppID关联。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e8/v3/NV8GLi2fTHqKt7MA5BLcpg/zh-cn_image_0000002563611347.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=1CCB98BC892ABFF4381B0A45A18D089BF604F327C69E4486D2833CED7C176106 "点击放大")

* **若您的AppID认证主体与本商户号主体不一致**，分为两步：

**第1步：AppID信息填写，申请提交**

点击【新增关联AppID】按钮，根据页面提示填写相关信息后，勾选《华为支付商户号与APPID授权协议》和《联合营运承诺函》，提交申请。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6/v3/bkanl_dkRUSuzYf3eGfecg/zh-cn_image_0000002532611728.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=0722679E43CC119E2BDB239220F19F542F925A0F6619A3B12F006A826ECC8402 "点击放大")
> 注意
>
> AppID认证主体与本商户号主体不一致，华为支付商户平台暂不支持直接关联AppID，请联系您的对接人开通权限后再申请。

**第2步：AppID管理员完成授权**

待华为支付系统自动审核通过后刷新页面，根据系统提示语，请AppID管理员登录[AppGallery Connect 网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，进入【我的项目】，在项目列表找到待查项目，点击项目-.选择待查应用-点击盈利（或者支付与交易）-鸿蒙支付服务-支付服务（非虚拟类）-去开通，查找待绑定商户号，点击去授权，根据页面提示完成授权关联。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ec/v3/TpLdtlqqRCGG30x0VQwCdw/zh-cn_image_0000002534709628.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=BC5B6E22B99E4378147E5FAE3790D2856D33F634CAC5289518A045D7535441DD "点击放大")

**图5**若您的应用为APP

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/64/v3/NCAGYQQJRs6dBjCXbatSIw/zh-cn_image_0000002534556908.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=1CD436F2A6141404D4C854BBE502A16549D5458F7D75C0A61F45FBC56F6E06AC "点击放大")

**图6**若您的应用为元服务   
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cd/v3/BjvuTCbtRMO2O2mQGkVH-w/zh-cn_image_0000002534716842.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=8D77760A69FA258A6B1FAE3B88F158FAAA570A165B2E7CFE32FB46254581018C "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4c/v3/zLx-TcTuQcuN98yb3ij6gg/zh-cn_image_0000002565476711.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=AB86493D1AEE420257FC8D46D975CB4D6A793B11E29F939EB8678E700E85FA8C "点击放大")

## 服务商下特约商户AppID关联

特约商户AppID关联需由服务商发起，AppID关联请查看该指引。

请服务商超级管理员录华为支付商户平台，进入【商户中心】->【产品功能】->【AppID管理】->【特约商户绑定的AppID】页面进行关联操作。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/FERHGtF_Tmi2DluRRECgwQ/zh-cn_image_0000002526154900.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=9A2C099E1FF78E819FF15EDB0EA7FBB6D6F83699F97A61578F2B95B2B081080B "点击放大")

* **若您的AppID认证主体与本商户号主体一致**，分为两步：

**第1步：服务商向特约商户发起绑定申请；**

请服务商超级管理员登录华为支付商户平台，进入【商户中心】->【产品功能】->【AppID管理】->【特约商户绑定的AppID】页面，查询选择特约商户，点击"邀请绑定"，根据页面提示填写相关AppID信息，向该特约商户发起绑定AppID的邀请。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e2/v3/AG39vsRYTTanNLPi9K5TJg/zh-cn_image_0000002557114827.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=1878376B960E7E5BA6F71F1A06538C32052762DFDF5D95FBF243A75EC180BDBA "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3f/v3/mBJC-zz4SiauKQJ2fa_Rsw/zh-cn_image_0000002526154894.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=7349CD7C30D76C1EADE91D0E07311DE254CBA27A27DFF74026067670796717B2 "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f1/v3/M-6AsJmeSCuBSqPB3RYviw/zh-cn_image_0000002532777966.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=0BE28523CB7C8B7260EFB22F5E649086122CF6692E83B662C8C7EDD0CE122BE7 "点击放大")

**第2步：特约商户登录华为支付商户平台确认绑定**

请特约商户超级管理员登录华为支付商户平台，进入【商户中心】->【产品功能】->【AppID管理】页面确认绑定。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/77kvPFuSRaKY8WTS743-HQ/zh-cn_image_0000002557234797.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=0A48858734788D9AE2CCFC735851B1AABD2D01CC022BB8F698172EC79092238F "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/24/v3/nx-_z20LSSqiPUNUcCSPTg/zh-cn_image_0000002563617899.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=A97C02C32E431E0EB97C6D996AD5109E31400597EB11F5CFC36D39C89AF863C4 "点击放大")

* **若您的AppID认证主体与本商户号主体不一致**，分为三步：

**第1步：服务商向特约商户发起绑定申请；**

请服务商超级管理员登录华为支付商户平台，进入【商户中心】->【产品功能】->【AppID管理】->【特约商户绑定的AppID】页面，查询选择特约商户，点击"邀请绑定"，根据页面提示填写相关AppID信息，向该特约商户发起绑定AppID的邀请。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7e/v3/cCMv2nMDSAyS8gJtZduEJQ/zh-cn_image_0000002525994940.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=14CD07D5D8485ABBD16FE69351E32EE835E7DF2E3B9190FAE2142E7D0F473D30 "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/03/v3/d5ADbGImRnS6dxEN84jwPQ/zh-cn_image_0000002525994934.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=44CBC11ABAB3703ABA6566521998970A306C82F60EBA970B8FB8DECCC4207309 "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/D8w0jBrJTYWZaTuOWqyHog/zh-cn_image_0000002532778148.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=608CE38497D30B2BC228B18FD71DA6E2E2A80973CEEA2233964B9A5D43018AD1 "点击放大")

**第2步：特约商户登录华为支付商户平台确认绑定**

请特约商户超级管理员登录华为支付商户平台，进入【商户中心】->【产品功能】->【AppID管理】页面确认绑定。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dd/v3/qfPdXts1RbavIHmvgXbYBg/zh-cn_image_0000002557234783.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=773163D3381F485AA7BCE93164229C6F208CCD2CF75803B5EEBF0F9A62E31848 "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/zPp-zk2qRBWnV0GyhDWONg/zh-cn_image_0000002532778366.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=8CFA47B07718650D6B82D8EA0D5E523E275F5A55886AF16E4C7B5D175E791751 "点击放大")

**第3步：AppID管理员登录** [AppGallery Connect 网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)**授权**

待华为支付系统自动审核通过后刷新页面，根据系统提示语，请AppID管理员登录[AppGallery Connect 网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，进入【我的项目】，在项目列表找到待查项目，点击项目-选择待查应用-点击盈利（或者支付与交易）-鸿蒙支付服务-支付服务（非虚拟类）-去开通，查找待绑定商户号，点击去授权，根据页面提示完成授权关联。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c2/v3/3swyTEpFRKqBq5FeoeYJlQ/zh-cn_image_0000002526154914.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=315B76BAF8C98EDD8C02F3DD20101848E9B5A58F354071CB75D2D4E853A43E80 "点击放大")

**图7**若您的应用为APP

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9d/v3/fhaNQWmyRLK9Ru8kUkI8hA/zh-cn_image_0000002534558644.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=CDED949E9587ABD961A0803DF6AC4BF3CC2F17D143B9C7BAED04A8F79E3BD0C1 "点击放大")

**图8**若您的应用为元服务   
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/83/v3/nbiBWMPlRkOZHybwjeSbWg/zh-cn_image_0000002534718594.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=8CEA1D9ADCF5855D30BD234382DE6A741A5FA16425398AC5AEF5F1E10896B0E1 "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/aa/v3/fTLFakUdQ9OPFp6B3K4SDw/zh-cn_image_0000002565478463.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=E2A8FABF718D572A9A2D15598968758949B8DEE03D2F69DEC0A50CCAF5A2D717 "点击放大")
> 注意
>
> 1.商户主体类型为个人的特约商户不支持绑定AppID
>
> 2.商户号状态异常的特约商户不支持邀请绑定
>
> 3.若AppID认证主体与特约商户主体不一致，华为支付商户平台不支持直接关联AppID，请联系您的对接人开通权限后再申请。

## AppID关联常见问题

## AppID关联状态查询

您可以登录华为支付商户平台后，进入【商户中心】->【产品功能】->【AppID管理】AppID关联列表中查询AppID的关联状态。

## 页面提示AppID与入网主体不一致

请您核实AppId主体营业执照信息是否与入网主体营业执照信息一致

若信息不一致但仍需关联，请联系您的对接人开通权限后，再根据页面提示填写相关信息，勾选相关授权协议，提交申请。

若信息一致，请登录联盟官网进入开发者信息页面核实企业证件号信息（即：营业执照号）是否为最新且正确填写，若非上述情况请补充完整最新正确的信息后提交审核，待审核通过后再进行AppID关联。

## 如何登录HUAWEI AppGallery Connect完成授权关联

请AppID管理员登录[AppGallery Connect 网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，进入【我的项目】，在项目列表找到待查项目，点击项目-.选择待查应用-点击盈利（或者支付与交易）-鸿蒙支付服务-支付服务（非虚拟类）-去开通，查找待绑定商户号，点击去授权，根据页面提示完成授权关联。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a3/v3/t5x_5Wi8R8i7_Vbwe2XaMA/zh-cn_image_0000002525994960.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=E3AB8C8A51024544B1BA096118C4D4001253D49DBC7BB6115394D93625F6D258 "点击放大")

**图9**若您的应用为元服务   
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b1/v3/IGj003hwRJCiI6gMuD0xtg/zh-cn_image_0000002565473279.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=159EB1051388D4B582CD3F78CD2313C59BD832DC212F65A42349FA3AAE9A5948 "点击放大")

**图10**若您的应用为APP

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8e/v3/UqwvMbR7SIixBi-SJ1ydrg/zh-cn_image_0000002526154904.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=38E503B2047491477D9972C58806D122163E1CD1ACE0A2C84C42F163F58059C0 "点击放大")

## 找不到"支付服务（非虚拟类）"菜单或AppID关联授权的页面怎么处理？

登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站选择对应的项目后，在'全部功能'中搜索"鸿蒙支付服务"并固定到菜单导航栏中。在"支付服务（非虚拟类）> 待关联商户号"选择对应的商户点击"授权"即可。可参考下图所示：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a2/v3/UgMxbr78QzWpD0NBNhOy3A/zh-cn_image_0000002557234767.png?HW-CC-KV=V1&HW-CC-Date=20261008T190309Z&HW-CC-Expire=31536000000&HW-CC-Sign=E7AD19171CB067E7941AA3CA754BA0057A7F4BB62634AD154AF7F951F8835B93 "点击放大")

