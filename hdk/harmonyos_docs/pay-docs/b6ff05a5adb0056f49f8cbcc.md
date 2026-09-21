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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d7/v3/Ltt7xA3pQvmHP-KtP8El6g/zh-cn_image_0000002557114811.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=AEB3CE0D4F13917D4AAC3D662E2A4FBA4C578C29C81962EE1287FCCD755D6879 "点击放大")

* **若您的AppID认证主体与本商户号主体一致**

点击【新增关联AppID】按钮，根据页面提示填写相关信息后，勾选《华为支付商户号与APPID授权协议》，提交申请后即完成AppID关联。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5e/v3/6EBthQa7Rkm7EIqSI-ne-g/zh-cn_image_0000002563602367.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=752089AB6B8238CE2F066CD3FE982D934F6399BC0FDD99FD528876E674E4F405 "点击放大")

* **若您的AppID认证主体与本商户号主体不一致**，分为两步：

**第1步：AppID信息填写，申请提交**

点击【新增关联AppID】按钮，根据页面提示填写相关信息后，勾选《华为支付商户号与APPID授权协议》和《联合营运承诺函》，并提交申请。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a4/v3/LAsLWPELS_i-Jzv94qwwKA/zh-cn_image_0000002526154898.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=9D47AED8C25828AF8D5926E9935B1CBBFF469DF995B633BCFE5080CEA73B8963 "点击放大")
> 注意
>
> AppID认证主体与本商户号主体不一致，华为支付商户平台暂不支持直接关联AppID，请联系您的对接人开通权限后再申请。

**第2步：AppID管理员完成授权**

待华为支付系统自动审核通过后刷新页面，根据系统提示语，请AppID管理员可登录[AppGallery Connect 网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，进入【我的项目】，在项目列表找到待查项目，点击项目-.选择待查应用-点击盈利（或者支付与交易）-鸿蒙支付服务-支付服务（非虚拟类）-去开通，查找待绑定商户号，点击去授权，根据页面提示完成授权关联。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4a/v3/3LeDxxekRjmGUidbAdNtRQ/zh-cn_image_0000002526154916.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=4BC3BE0C0AE7C4A47278CA786500D2CA62AD4E2CBBE822AC8F8F814EA5B1A3EE "点击放大")

**图1**若您的应用为元服务   
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6f/v3/wuQUBWU6SVKPB48vlP-Gvw/zh-cn_image_0000002534560210.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=D2E5EDF651990102C38324835C96E538AAD66911059963705A4AB89388885243 "点击放大")

**图2**若您的应用为APP

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2b/v3/FURsKuUIT2CLOxAxVSjo-A/zh-cn_image_0000002525994954.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=3093CB310DDE1D3F91018EDF937ACC5D5C4BACA0FBA57506BC69A37CCB13A8DD "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ef/v3/0tngUXoiQZ-MnO1-NA50PQ/zh-cn_image_0000002534720564.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=1C4254AAC0127D957A2F58C8C0DED1016B11CFA685861ED4F907435ACD1030EA "点击放大")

## 平台类商户AppID关联

若您入网时选择合作身份为平台类商户，AppID关联请查看该指引

请超级管理员登录华为支付商户平台，进入【商户中心】->【产品功能】->【AppID管理】页面进行关联操作。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c3/v3/WxcLwi3ATs2EfyEnttkWbA/zh-cn_image_0000002557234773.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=B5DAA8DBE5103DC456C7E999BBF01E2C5D9E584D253B0836C5C8B601D6AFCD6B "点击放大")

* **若您的AppID认证主体与本商户号主体一致**

点击【新增关联AppID】按钮，根据页面提示填写相关信息后，勾选《华为支付商户号与APPID授权协议》，提交申请后即完成AppID关联。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/49/v3/YUytdlCsRgmCjPv1YwEWyw/zh-cn_image_0000002532762738.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=7983ADF3EECA7F7D024A8BA38E55A22FE6AB047F34074FBA8C668DEF92E7FA7B "点击放大")

* **若您的AppID认证主体与本商户号主体不一致**，分为两步：

**第1步：AppID信息填写，申请提交**

点击【新增关联AppID】按钮，根据页面提示填写相关信息后，勾选《华为支付商户号与APPID授权协议》和《联合营运承诺函》，提交申请。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/17/v3/Q1tHxGpwR0ePy9Sm7xo-fQ/zh-cn_image_0000002557114813.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=61489272A51D00674B633A499F32E43BF069A3F0179E59EC0499020D74B2B98D "点击放大")
> 注意
>
> AppID认证主体与本商户号主体不一致，华为支付商户平台暂不支持直接关联AppID，请联系您的对接人开通权限后再申请。

**第2步：AppID管理员完成授权**

待华为支付系统自动审核通过后刷新页面，根据系统提示语，请AppID管理员登录[AppGallery Connect 网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，进入【我的项目】，在项目列表找到待查项目，点击项目-.选择待查应用-点击盈利（或者支付与交易）-鸿蒙支付服务-支付服务（非虚拟类）-去开通，查找待绑定商户号，点击去授权，根据页面提示完成授权关联。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a6/v3/JZ9KOEnRQ564U3uPJou5-w/zh-cn_image_0000002526154896.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=3A21D810C2E5B63C5B664AC45E5069214CED32E6658F9903AE21CEAA3FC3933A "点击放大")

**图3**若您的应用为APP

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2f/v3/L_Ol22NPTvqUaksG8ACBvg/zh-cn_image_0000002565474839.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=51BAD946A95A00C3B0CEAB133F24C28E11CFCCC74CC3C423F4A1DDA57B9ADC6E "点击放大")

**图4**若您的应用为元服务   
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/15/v3/E1Y9pwXMS9Kp7OMx8iBlMQ/zh-cn_image_0000002534555032.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=3DEEF0C03CF6C31F5F9ECADD02CD1FA0D64BB7CBDC8983A50C9FD54C6AB2C0DC "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4f/v3/oE81KVZTR4qEAxgeof6_gw/zh-cn_image_0000002565554949.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=B122AB91667B44BD1BE490896BDA9801779C2254F983AC241575E2D608CB8E8F "点击放大")

## 服务商AppID关联

若您入网时选择合作身份为服务商，AppID关联请查看该指引。

请超级管理员登录华为支付商户平台，进入【商户中心】->【产品功能】->【AppID管理】->【服务商绑定的AppID】页面进行关联操作。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b/v3/U_fvFFn8SkyYJ4SXChjLxQ/zh-cn_image_0000002525994956.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=31F8DB470791A3B2E8459766CFDDCD5C505938FC425C73DA3C821BADAF5872A2 "点击放大")

* **若您的AppID认证主体与本商户号主体一致**

点击【新增关联AppID】按钮，根据页面提示填写相关信息后，勾选《华为支付商户号与APPID授权协议》，提交申请后即完成AppID关联。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e8/v3/NV8GLi2fTHqKt7MA5BLcpg/zh-cn_image_0000002563611347.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=B528B87FA76938375D2251D2C32BAEEC593AF4FDE0DE66702B35875FD172A43A "点击放大")

* **若您的AppID认证主体与本商户号主体不一致**，分为两步：

**第1步：AppID信息填写，申请提交**

点击【新增关联AppID】按钮，根据页面提示填写相关信息后，勾选《华为支付商户号与APPID授权协议》和《联合营运承诺函》，提交申请。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6/v3/bkanl_dkRUSuzYf3eGfecg/zh-cn_image_0000002532611728.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=59A290DFF33E497D6496CB0D7CB9D3BF5F98C5DACE91FFFEF29D511BDEFC98BA "点击放大")
> 注意
>
> AppID认证主体与本商户号主体不一致，华为支付商户平台暂不支持直接关联AppID，请联系您的对接人开通权限后再申请。

**第2步：AppID管理员完成授权**

待华为支付系统自动审核通过后刷新页面，根据系统提示语，请AppID管理员登录[AppGallery Connect 网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，进入【我的项目】，在项目列表找到待查项目，点击项目-.选择待查应用-点击盈利（或者支付与交易）-鸿蒙支付服务-支付服务（非虚拟类）-去开通，查找待绑定商户号，点击去授权，根据页面提示完成授权关联。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ec/v3/TpLdtlqqRCGG30x0VQwCdw/zh-cn_image_0000002534709628.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=8DFBCD986B552260193A0C76B5CB64619ED5F788FDA401BCD1317FD6069B9FD5 "点击放大")

**图5**若您的应用为APP

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/64/v3/NCAGYQQJRs6dBjCXbatSIw/zh-cn_image_0000002534556908.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=2FFF414416F109349E26DC7686B97EA58C856540B1E5F970E7122097FE4772E1 "点击放大")

**图6**若您的应用为元服务   
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cd/v3/BjvuTCbtRMO2O2mQGkVH-w/zh-cn_image_0000002534716842.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=DA8B06A2D9082AE5248A3FBFAB37C902A4B4D1F4C76A2061E1CA2FA9EBCBD178 "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4c/v3/zLx-TcTuQcuN98yb3ij6gg/zh-cn_image_0000002565476711.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=8A715B7A5FB879E482ACC58719F0A89B9DD9E379F0EC61A2CB10D3797B7C4B3B "点击放大")

## 服务商下特约商户AppID关联

特约商户AppID关联需由服务商发起，AppID关联请查看该指引。

请服务商超级管理员录华为支付商户平台，进入【商户中心】->【产品功能】->【AppID管理】->【特约商户绑定的AppID】页面进行关联操作。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/FERHGtF_Tmi2DluRRECgwQ/zh-cn_image_0000002526154900.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=EC90A459BC4C5EC889442A12B62CC23D3AE7F8CF8D6204D3DFE4CE514C2F10AB "点击放大")

* **若您的AppID认证主体与本商户号主体一致**，分为两步：

**第1步：服务商向特约商户发起绑定申请；**

请服务商超级管理员登录华为支付商户平台，进入【商户中心】->【产品功能】->【AppID管理】->【特约商户绑定的AppID】页面，查询选择特约商户，点击"邀请绑定"，根据页面提示填写相关AppID信息，向该特约商户发起绑定AppID的邀请。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e2/v3/AG39vsRYTTanNLPi9K5TJg/zh-cn_image_0000002557114827.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=93C3697EB888497DFF29F585F1B80DC9F90875E44249ADFE088970DF2286433E "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3f/v3/mBJC-zz4SiauKQJ2fa_Rsw/zh-cn_image_0000002526154894.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=E948B8D9DC604A512587E63AE6B0CC94C34E5CAEE964F0A205EACC357993618D "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f1/v3/M-6AsJmeSCuBSqPB3RYviw/zh-cn_image_0000002532777966.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=6E1180A98C735D8A230FF9E7762F06C39C077EC1A4B3C5D1E64C664E5741B91F "点击放大")

**第2步：特约商户登录华为支付商户平台确认绑定**

请特约商户超级管理员登录华为支付商户平台，进入【商户中心】->【产品功能】->【AppID管理】页面确认绑定。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/77kvPFuSRaKY8WTS743-HQ/zh-cn_image_0000002557234797.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=38B3F08531D962E03D9CA53FEB8BDB823614A0FCCAD41870490289E18B3061D8 "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/24/v3/nx-_z20LSSqiPUNUcCSPTg/zh-cn_image_0000002563617899.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=44C8D8F0F32DFC95F2B70BD4781C18BD4B430705A54111A565C19F9EFFDE129C "点击放大")

* **若您的AppID认证主体与本商户号主体不一致**，分为三步：

**第1步：服务商向特约商户发起绑定申请；**

请服务商超级管理员登录华为支付商户平台，进入【商户中心】->【产品功能】->【AppID管理】->【特约商户绑定的AppID】页面，查询选择特约商户，点击"邀请绑定"，根据页面提示填写相关AppID信息，向该特约商户发起绑定AppID的邀请。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7e/v3/cCMv2nMDSAyS8gJtZduEJQ/zh-cn_image_0000002525994940.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=983E1527A8E0A90EEDFD3E44035702CDAF16478CE60BA5952292F27C4F4F0D08 "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/03/v3/d5ADbGImRnS6dxEN84jwPQ/zh-cn_image_0000002525994934.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=C6FB20A7C96D43C5AA160B0BB0B0520AFCCFA89D08C5ABBA0A83FF45F0BFC7D4 "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/D8w0jBrJTYWZaTuOWqyHog/zh-cn_image_0000002532778148.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=8803DACD4DDE6F4F58019BEA96711E14B1676A378EC575FA6159DCE40B475C39 "点击放大")

**第2步：特约商户登录华为支付商户平台确认绑定**

请特约商户超级管理员登录华为支付商户平台，进入【商户中心】->【产品功能】->【AppID管理】页面确认绑定。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dd/v3/qfPdXts1RbavIHmvgXbYBg/zh-cn_image_0000002557234783.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=B45D9CCABC9AF99319EC2925A61A6D63C3AA8ED0063234490C287CF462DB30F6 "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/zPp-zk2qRBWnV0GyhDWONg/zh-cn_image_0000002532778366.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=C80931FFBA241E1448208B74B47DB4B31BD9726B9722FD4ADE622F5F763D5E5D "点击放大")

**第3步：AppID管理员登录** [AppGallery Connect 网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)**授权**

待华为支付系统自动审核通过后刷新页面，根据系统提示语，请AppID管理员登录[AppGallery Connect 网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，进入【我的项目】，在项目列表找到待查项目，点击项目-选择待查应用-点击盈利（或者支付与交易）-鸿蒙支付服务-支付服务（非虚拟类）-去开通，查找待绑定商户号，点击去授权，根据页面提示完成授权关联。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c2/v3/3swyTEpFRKqBq5FeoeYJlQ/zh-cn_image_0000002526154914.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=96D1977B8BC140431739D34EBAE1943082D1B7413716E50A8B66AAC260C9A4C2 "点击放大")

**图7**若您的应用为APP

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9d/v3/fhaNQWmyRLK9Ru8kUkI8hA/zh-cn_image_0000002534558644.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=7BF8D438EA11DE79C12CDD0DA75B18F623F33A3799B18587CAFBFF669B0C2F23 "点击放大")

**图8**若您的应用为元服务   
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/83/v3/nbiBWMPlRkOZHybwjeSbWg/zh-cn_image_0000002534718594.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=E136D2C6C533A277461D78453F74A3CF9A3635BCC26728D8BAF54220D7383425 "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/aa/v3/fTLFakUdQ9OPFp6B3K4SDw/zh-cn_image_0000002565478463.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=611A45E02FED00E81B34BE98A94549B422835AE5D6FF074F73711A6685580009 "点击放大")
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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a3/v3/t5x_5Wi8R8i7_Vbwe2XaMA/zh-cn_image_0000002525994960.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=D047A66A4041281C8B3CC5FC4AFAEBBA44C99F06436163477A745EEC94985341 "点击放大")

**图9**若您的应用为元服务   
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b1/v3/IGj003hwRJCiI6gMuD0xtg/zh-cn_image_0000002565473279.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=8067779C573310551C15227D604FFDF45CA62454D00B409B0215CD72973544C8 "点击放大")

**图10**若您的应用为APP

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8e/v3/UqwvMbR7SIixBi-SJ1ydrg/zh-cn_image_0000002526154904.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=061DE3243F339DAA8768D51540B2ED3F378894388EAC2BFAC73AA247508962C3 "点击放大")

## 找不到"支付服务（非虚拟类）"菜单或AppID关联授权的页面怎么处理？

登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站选择对应的项目后，在'全部功能'中搜索"鸿蒙支付服务"并固定到菜单导航栏中。在"支付服务（非虚拟类）> 待关联商户号"选择对应的商户点击"授权"即可。可参考下图所示：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a2/v3/UgMxbr78QzWpD0NBNhOy3A/zh-cn_image_0000002557234767.png?HW-CC-KV=V1&HW-CC-Date=20260921T064300Z&HW-CC-Expire=31536000000&HW-CC-Sign=C3DE6718CB5ACEA5D5CCCC4768CB114A98DD2A82688246D39A9964A729BE5669 "点击放大")

