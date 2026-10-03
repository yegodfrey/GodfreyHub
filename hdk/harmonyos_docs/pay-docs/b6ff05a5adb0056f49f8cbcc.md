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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d7/v3/Ltt7xA3pQvmHP-KtP8El6g/zh-cn_image_0000002557114811.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=E28CA83B441164890C219A1A4F35FF4FB55EB9B5D865D6F7806D86E7ABB06307 "点击放大")

* **若您的AppID认证主体与本商户号主体一致**

点击【新增关联AppID】按钮，根据页面提示填写相关信息后，勾选《华为支付商户号与APPID授权协议》，提交申请后即完成AppID关联。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5e/v3/6EBthQa7Rkm7EIqSI-ne-g/zh-cn_image_0000002563602367.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=5E34215DBB3FE8E06F81209F238F34C11DDA347F71309CDE3EBEE385A0EA08BC "点击放大")

* **若您的AppID认证主体与本商户号主体不一致**，分为两步：

**第1步：AppID信息填写，申请提交**

点击【新增关联AppID】按钮，根据页面提示填写相关信息后，勾选《华为支付商户号与APPID授权协议》和《联合营运承诺函》，并提交申请。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a4/v3/LAsLWPELS_i-Jzv94qwwKA/zh-cn_image_0000002526154898.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=BD9EB8000D8493BC9D0679AD7A800C9C8D808B7EEB26F2CFBC49CBFCD0268556 "点击放大")
> 注意
>
> AppID认证主体与本商户号主体不一致，华为支付商户平台暂不支持直接关联AppID，请联系您的对接人开通权限后再申请。

**第2步：AppID管理员完成授权**

待华为支付系统自动审核通过后刷新页面，根据系统提示语，请AppID管理员可登录[AppGallery Connect 网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，进入【我的项目】，在项目列表找到待查项目，点击项目-.选择待查应用-点击盈利（或者支付与交易）-鸿蒙支付服务-支付服务（非虚拟类）-去开通，查找待绑定商户号，点击去授权，根据页面提示完成授权关联。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4a/v3/3LeDxxekRjmGUidbAdNtRQ/zh-cn_image_0000002526154916.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=E43A93A33F9CFDB2231023FC0CFACAA8468D469BFAE29E201B7A3F14B9C1A140 "点击放大")

**图1**若您的应用为元服务   
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6f/v3/wuQUBWU6SVKPB48vlP-Gvw/zh-cn_image_0000002534560210.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=8258A37F8DC08C81FF6452CC9EE703E429790B8A083673F38763DAF98DAD4974 "点击放大")

**图2**若您的应用为APP

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2b/v3/FURsKuUIT2CLOxAxVSjo-A/zh-cn_image_0000002525994954.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=D596F84873EFC1D7BA2A8AC45DF7332C499A570115C1E3C0074AA99B162C2016 "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ef/v3/0tngUXoiQZ-MnO1-NA50PQ/zh-cn_image_0000002534720564.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=DAF570338B49DE12EA8AA10D52405BCEBB113892AA80697960A02A97C024E50E "点击放大")

## 平台类商户AppID关联

若您入网时选择合作身份为平台类商户，AppID关联请查看该指引

请超级管理员登录华为支付商户平台，进入【商户中心】->【产品功能】->【AppID管理】页面进行关联操作。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c3/v3/WxcLwi3ATs2EfyEnttkWbA/zh-cn_image_0000002557234773.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=11306AD6153BAA5DC8C7F5ACFCED754A121F8A193610D3558D0DD5A0914191E3 "点击放大")

* **若您的AppID认证主体与本商户号主体一致**

点击【新增关联AppID】按钮，根据页面提示填写相关信息后，勾选《华为支付商户号与APPID授权协议》，提交申请后即完成AppID关联。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/49/v3/YUytdlCsRgmCjPv1YwEWyw/zh-cn_image_0000002532762738.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=039C29FCA675D3AFA8176F57E56AFB73F8EBCC4ED2FFE7030704435A83445861 "点击放大")

* **若您的AppID认证主体与本商户号主体不一致**，分为两步：

**第1步：AppID信息填写，申请提交**

点击【新增关联AppID】按钮，根据页面提示填写相关信息后，勾选《华为支付商户号与APPID授权协议》和《联合营运承诺函》，提交申请。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/17/v3/Q1tHxGpwR0ePy9Sm7xo-fQ/zh-cn_image_0000002557114813.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=8ED923E3E25EFA8CB271901A915158AA4A9CCF81CB3F07044A3259DDD76BD2BD "点击放大")
> 注意
>
> AppID认证主体与本商户号主体不一致，华为支付商户平台暂不支持直接关联AppID，请联系您的对接人开通权限后再申请。

**第2步：AppID管理员完成授权**

待华为支付系统自动审核通过后刷新页面，根据系统提示语，请AppID管理员登录[AppGallery Connect 网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，进入【我的项目】，在项目列表找到待查项目，点击项目-.选择待查应用-点击盈利（或者支付与交易）-鸿蒙支付服务-支付服务（非虚拟类）-去开通，查找待绑定商户号，点击去授权，根据页面提示完成授权关联。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a6/v3/JZ9KOEnRQ564U3uPJou5-w/zh-cn_image_0000002526154896.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=2DC6578527A3B692300F267276614AC6DE83DF1E9B4925B289395433245FF8B2 "点击放大")

**图3**若您的应用为APP

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2f/v3/L_Ol22NPTvqUaksG8ACBvg/zh-cn_image_0000002565474839.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=BB1A381567BAAD16E4DFA3A45F932CAD5B4CABF225180D6247631B90C1FCF4DA "点击放大")

**图4**若您的应用为元服务   
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/15/v3/E1Y9pwXMS9Kp7OMx8iBlMQ/zh-cn_image_0000002534555032.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=1F2B9B395654364E4A09F079A62A96AA724EFCED49902F396DA3C074D758A463 "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4f/v3/oE81KVZTR4qEAxgeof6_gw/zh-cn_image_0000002565554949.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=7F5E102B8755D7A4E11362AF047B69E90887291B3398FF393E10D2376A3BEE4C "点击放大")

## 服务商AppID关联

若您入网时选择合作身份为服务商，AppID关联请查看该指引。

请超级管理员登录华为支付商户平台，进入【商户中心】->【产品功能】->【AppID管理】->【服务商绑定的AppID】页面进行关联操作。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b/v3/U_fvFFn8SkyYJ4SXChjLxQ/zh-cn_image_0000002525994956.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=0A3B9375AED5A189603FEF1ED97099767691CDFFD4757506530AC4CF5BE1714B "点击放大")

* **若您的AppID认证主体与本商户号主体一致**

点击【新增关联AppID】按钮，根据页面提示填写相关信息后，勾选《华为支付商户号与APPID授权协议》，提交申请后即完成AppID关联。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e8/v3/NV8GLi2fTHqKt7MA5BLcpg/zh-cn_image_0000002563611347.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=E65BE840A199EBEA190D34806280B938D7C33490180EBBD8E843B2573D3F67BC "点击放大")

* **若您的AppID认证主体与本商户号主体不一致**，分为两步：

**第1步：AppID信息填写，申请提交**

点击【新增关联AppID】按钮，根据页面提示填写相关信息后，勾选《华为支付商户号与APPID授权协议》和《联合营运承诺函》，提交申请。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6/v3/bkanl_dkRUSuzYf3eGfecg/zh-cn_image_0000002532611728.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=07CCF37BD9E22527D00D9BBA29722FE578F8E1856E8A238656BFAE0653E52FC1 "点击放大")
> 注意
>
> AppID认证主体与本商户号主体不一致，华为支付商户平台暂不支持直接关联AppID，请联系您的对接人开通权限后再申请。

**第2步：AppID管理员完成授权**

待华为支付系统自动审核通过后刷新页面，根据系统提示语，请AppID管理员登录[AppGallery Connect 网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，进入【我的项目】，在项目列表找到待查项目，点击项目-.选择待查应用-点击盈利（或者支付与交易）-鸿蒙支付服务-支付服务（非虚拟类）-去开通，查找待绑定商户号，点击去授权，根据页面提示完成授权关联。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ec/v3/TpLdtlqqRCGG30x0VQwCdw/zh-cn_image_0000002534709628.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=1B76639A0EBAA977D0A35CA25E275A6F933BED439BBF640840E8967700025D91 "点击放大")

**图5**若您的应用为APP

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/64/v3/NCAGYQQJRs6dBjCXbatSIw/zh-cn_image_0000002534556908.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=7EDEBE2542E9C38EAA4337CF79567D873F61D4C7C07CD941B13EB353CF65FD46 "点击放大")

**图6**若您的应用为元服务   
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cd/v3/BjvuTCbtRMO2O2mQGkVH-w/zh-cn_image_0000002534716842.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=0C1B707C3366164EE6A4841F4A236BFFA8115F07BCAECA199C96ABE9934AD3E8 "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4c/v3/zLx-TcTuQcuN98yb3ij6gg/zh-cn_image_0000002565476711.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=965AD1A32399FCCF8A3B6DD682FCA2F6868F50CA9301D0A4DE1F5FC43473B0A4 "点击放大")

## 服务商下特约商户AppID关联

特约商户AppID关联需由服务商发起，AppID关联请查看该指引。

请服务商超级管理员录华为支付商户平台，进入【商户中心】->【产品功能】->【AppID管理】->【特约商户绑定的AppID】页面进行关联操作。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/FERHGtF_Tmi2DluRRECgwQ/zh-cn_image_0000002526154900.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=29190507C2191704750D7B2B4DFBED449FA9485150EEC959545C10FEE2EF5FEF "点击放大")

* **若您的AppID认证主体与本商户号主体一致**，分为两步：

**第1步：服务商向特约商户发起绑定申请；**

请服务商超级管理员登录华为支付商户平台，进入【商户中心】->【产品功能】->【AppID管理】->【特约商户绑定的AppID】页面，查询选择特约商户，点击"邀请绑定"，根据页面提示填写相关AppID信息，向该特约商户发起绑定AppID的邀请。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e2/v3/AG39vsRYTTanNLPi9K5TJg/zh-cn_image_0000002557114827.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=9F6B9D6AA4B481999DD18BD0369EE0C239BC8ADFC6167C32F8D70763D5721BE1 "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3f/v3/mBJC-zz4SiauKQJ2fa_Rsw/zh-cn_image_0000002526154894.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=6FFFA84ECB90E56E5A9B277D1F832B41B8749C3EBAF1F0F65D8C4D8CE7BC6224 "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f1/v3/M-6AsJmeSCuBSqPB3RYviw/zh-cn_image_0000002532777966.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=198C8FE72035E06C3BD0B641FBD46CA8C2D70AF3C6273212110A8A9120A1BE51 "点击放大")

**第2步：特约商户登录华为支付商户平台确认绑定**

请特约商户超级管理员登录华为支付商户平台，进入【商户中心】->【产品功能】->【AppID管理】页面确认绑定。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/77kvPFuSRaKY8WTS743-HQ/zh-cn_image_0000002557234797.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=CA08906F2DFA43170EAA5198CD8B00B010635F543A80AFB883DC0FE38ADA6273 "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/24/v3/nx-_z20LSSqiPUNUcCSPTg/zh-cn_image_0000002563617899.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=D19DB8FE2F4614A093DD2BBF5305D4D853DF5A43E66923D4036284FB0CC52F50 "点击放大")

* **若您的AppID认证主体与本商户号主体不一致**，分为三步：

**第1步：服务商向特约商户发起绑定申请；**

请服务商超级管理员登录华为支付商户平台，进入【商户中心】->【产品功能】->【AppID管理】->【特约商户绑定的AppID】页面，查询选择特约商户，点击"邀请绑定"，根据页面提示填写相关AppID信息，向该特约商户发起绑定AppID的邀请。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7e/v3/cCMv2nMDSAyS8gJtZduEJQ/zh-cn_image_0000002525994940.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=2920D80C764819FB539D44E1B1979AF3AEAEDD1E53C9B2443746F9A41F718CFD "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/03/v3/d5ADbGImRnS6dxEN84jwPQ/zh-cn_image_0000002525994934.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=C48A6AE387B4144F6C67EB8DBB09D4038D164094ADB84E8962C9CC44B3BEAC96 "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/D8w0jBrJTYWZaTuOWqyHog/zh-cn_image_0000002532778148.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=3C31AC3F864A7F71D0FAB484273D969116F0BE98102B0FAE05D483116993AA20 "点击放大")

**第2步：特约商户登录华为支付商户平台确认绑定**

请特约商户超级管理员登录华为支付商户平台，进入【商户中心】->【产品功能】->【AppID管理】页面确认绑定。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dd/v3/qfPdXts1RbavIHmvgXbYBg/zh-cn_image_0000002557234783.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=1E542EBBFAF3CFD44042D954C763C1B09DB92D981494BBCC23EFFFF987DB7E37 "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/zPp-zk2qRBWnV0GyhDWONg/zh-cn_image_0000002532778366.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=7DEBFC090D4D402F15094F05DF14D3C5A2C5474313C30A604EB77CA5913588C8 "点击放大")

**第3步：AppID管理员登录** [AppGallery Connect 网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)**授权**

待华为支付系统自动审核通过后刷新页面，根据系统提示语，请AppID管理员登录[AppGallery Connect 网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，进入【我的项目】，在项目列表找到待查项目，点击项目-选择待查应用-点击盈利（或者支付与交易）-鸿蒙支付服务-支付服务（非虚拟类）-去开通，查找待绑定商户号，点击去授权，根据页面提示完成授权关联。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c2/v3/3swyTEpFRKqBq5FeoeYJlQ/zh-cn_image_0000002526154914.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=662C4FD06086D5B8871A074CBD627D0844491BC98A01DABCFFAA034192EF3243 "点击放大")

**图7**若您的应用为APP

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9d/v3/fhaNQWmyRLK9Ru8kUkI8hA/zh-cn_image_0000002534558644.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=86C27CD041213754B43EE5CF0206F562A850BFEFB7130E13CD3788281DC821EB "点击放大")

**图8**若您的应用为元服务   
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/83/v3/nbiBWMPlRkOZHybwjeSbWg/zh-cn_image_0000002534718594.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=E8BF81FE6EFA473597E55E14649FCA8E584F9B4F409A7DE33F06BFF63A1F0D0C "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/aa/v3/fTLFakUdQ9OPFp6B3K4SDw/zh-cn_image_0000002565478463.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=571E674C6BBD73AD40D283851C70C6F093101AB1241D91E56966A39A9B9EC363 "点击放大")
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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a3/v3/t5x_5Wi8R8i7_Vbwe2XaMA/zh-cn_image_0000002525994960.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=0AD0E503807B1542C6369CDC4F23B5354835A0A82DB68C3C9B174D94E3464D2F "点击放大")

**图9**若您的应用为元服务   
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b1/v3/IGj003hwRJCiI6gMuD0xtg/zh-cn_image_0000002565473279.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=193DF16C5D545EE5C82B1A85F614B86450E76923C5AF6CD55C941461796F5811 "点击放大")

**图10**若您的应用为APP

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8e/v3/UqwvMbR7SIixBi-SJ1ydrg/zh-cn_image_0000002526154904.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=2A8825FABE3706CDC6E19E4AC8BC636F9AEB33017B60ABE30A7685590CBD71FD "点击放大")

## 找不到"支付服务（非虚拟类）"菜单或AppID关联授权的页面怎么处理？

登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站选择对应的项目后，在'全部功能'中搜索"鸿蒙支付服务"并固定到菜单导航栏中。在"支付服务（非虚拟类）> 待关联商户号"选择对应的商户点击"授权"即可。可参考下图所示：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a2/v3/UgMxbr78QzWpD0NBNhOy3A/zh-cn_image_0000002557234767.png?HW-CC-KV=V1&HW-CC-Date=20260924T101900Z&HW-CC-Expire=31536000000&HW-CC-Sign=F1FD4FC47E7E036853608FF4374A8081FF1EDA137DAEEE5BC82A29A0D493D9B0 "点击放大")

