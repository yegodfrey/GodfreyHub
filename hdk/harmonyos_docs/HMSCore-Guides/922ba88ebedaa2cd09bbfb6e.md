---
name: document/cn/HMSCore-Guides/binding-appid-to-merc-0000001889931817
title: 商户号绑定AppID
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/binding-appid-to-merc-0000001889931817
---

# 商户号绑定AppID

> 说明
>
> 商户号绑定AppID的商户需要通过[华为支付商户平台](https://petalpay-merchant.cloud.huawei.com/)入网，详见[商户入网和获取商户号](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/payment-merc-regist-apply-0000002027163093)。通过[华为开发者联盟官网](https://developer.huawei.com/consumer/cn/)开通[商户服务](https://developer.huawei.com/consumer/cn/doc/app/open-0000001959074873)入网的商户暂不支持直接接入华为支付以及绑定AppID操作。

商户（以下所称商户均含所有商户模型）后续支付交易依赖于[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)中[创建应用](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createapp-0000001146718717)生成的AppID与商户号的关联关系。商户在请求预下单接口传递AppID入参，后续可以在[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站上基于应用维度查看交易报表数据。传递AppID入参后，华为支付侧会校验商户号与传递的AppID是否匹配，如不匹配则会直接响应异常。因此，接入华为支付服务前商户需要为商户号绑定AppID，如无商户号则需要先申请，详细介绍参考[商户入网和获取商户号](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/payment-merc-regist-apply-0000002027163093)。

AppID绑定详细可参见[AppID管理及关联](https://developer.huawei.com/consumer/cn/doc/pay-docs/hwzf-appidguanli-0000001757041165)。

## 基本概念

**同主体**：商户号与AppID所关联的营业主体信息一致。

**异主体**：商户号与AppID关联的营业主体信息不一致。

## 绑定AppID说明

1. 暂不支持平台子商户及特约商户发起绑定AppID申请。
2. 商户发起绑定AppID申请，异主体绑定需要商户与华为支付侧沟通申请开通异主体绑定权限（可参考[产品开通操作](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/payment-product-configuration-0000001909450504#section11446135516333)）后才可在[华为支付商户平台](https://petalpay-merchant.cloud.huawei.com/)发起异主体AppID绑定操作。
3. AppID关联的营业主体与特约商户商户号或与服务商商户号关联的营业主体一致，都认为是同主体，可直接发起绑定。
4. 商户发起绑定申请后，商户应用管理员登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站才能对商户号绑定AppID进行授权（提示"主体不一致"可[参见这里](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/faq-0000001535681796#section5132193712124)）。

## 直连商户/平台商户绑定

1. 请登录[华为支付商户平台](https://petalpay-merchant.cloud.huawei.com/)进入"商户中心" > "产品功能" > "AppID管理"> "新增绑定AppID"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ec/v3/469DqX1pTjuy6HjFUcoJYA/zh-cn_image_0000002512200011.png?HW-CC-KV=V1&HW-CC-Date=20261008T144125Z&HW-CC-Expire=31536000000&HW-CC-Sign=41046CA4220E975DAB7EA43F09EEE47605A15E7EF99C15EB8BE0F056465436DE "点击放大")

2. 申请绑定AppID后，应用管理员登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站选择对应的项目后，在左侧导航栏选择"盈利 > 鸿蒙支付服务（可在'全部功能'中搜索服务并固定到导航栏） > 支付服务（非虚拟类）> 待关联商户号"选择对应的商户点击"授权"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/99/v3/xlUdrGoqSFW5tihgsxLm-A/zh-cn_image_0000002512200019.png?HW-CC-KV=V1&HW-CC-Date=20261008T144125Z&HW-CC-Expire=31536000000&HW-CC-Sign=C497904A9795BCCE0DA46906D24DE5F645E80ABE57FDC141C9768DD995ECA5FE "点击放大")

## 服务商绑定

### 服务商自己绑定

1. 服务商登录[华为支付商户平台](https://petalpay-merchant.cloud.huawei.com/)进入"商户中心" > "产品功能" > "AppID管理"，在【服务商绑定的AppID】Tab页内点击"新增绑定AppID"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b7/v3/CB5hNz2tRF2F26JoWsd1Jg/zh-cn_image_0000002480160112.png?HW-CC-KV=V1&HW-CC-Date=20261008T144125Z&HW-CC-Expire=31536000000&HW-CC-Sign=2C3000B87FC2FC6BC18E25CD327F552322CA1D84544D351B7D84DD8A4FD26395 "点击放大")

2. 申请绑定AppID后，应用管理员登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站选择对应的项目后，在左侧导航栏选择"盈利 > 鸿蒙支付服务（可在'全部功能'中搜索服务并固定到导航栏） > 支付服务（非虚拟类）> 待关联商户号"选择对应的商户点击"授权"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/08/v3/rmMSNvS4TrSHg9btlk7dVQ/zh-cn_image_0000002480320086.png?HW-CC-KV=V1&HW-CC-Date=20261008T144125Z&HW-CC-Expire=31536000000&HW-CC-Sign=62262634D74AF861C1833A2F1F23B58C5F2774091EF9DDC5E32F566E35659E2E "点击放大")

### 服务商邀请特约商户绑定

1. 服务商登录[华为支付商户平台](https://petalpay-merchant.cloud.huawei.com/)进入"商户中心" > "产品功能" > "AppID管理"，在【特约商户绑定的AppID】Tab页内根据服务商下的特约商户列表，选择特约商户发起AppID绑定申请邀请。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/20/v3/c4XPifAWSjKzzd28EklfYg/zh-cn_image_0000002480320082.png?HW-CC-KV=V1&HW-CC-Date=20261008T144125Z&HW-CC-Expire=31536000000&HW-CC-Sign=463B7184F0D2C197318DD1E948047D63D069B5DB8AC173F086E05D9CFF3C0598 "点击放大")

2. 特约商户登录[华为支付商户平台](https://petalpay-merchant.cloud.huawei.com/)进入"商户中心" > "产品功能" > "AppID管理"选择"服务商为我绑定的AppID列表"中的数据，点击去确认，对服务商邀请绑定AppID进行确认。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/37/v3/mM55UCw9SiGMdAPzoqYJfw/zh-cn_image_0000002512279991.png?HW-CC-KV=V1&HW-CC-Date=20261008T144125Z&HW-CC-Expire=31536000000&HW-CC-Sign=14331CA7F28B4180FAC6AA76E2B1432917917A74DFA67929CECC2CC2611C20CD "点击放大")

3. 特约商户确认绑定AppID后，应用管理员登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站选择对应的项目后，在左侧导航栏选择"盈利 > 鸿蒙支付服务（可在'全部功能'中搜索服务并固定到导航栏） > 支付服务（非虚拟类）> 待关联商户号"选择对应的商户点击"授权"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5a/v3/GHThLcAMQOa6birUlz5uJA/zh-cn_image_0000002480320094.png?HW-CC-KV=V1&HW-CC-Date=20261008T144125Z&HW-CC-Expire=31536000000&HW-CC-Sign=369CA3B92E173C799B14BEB3716479E1CC9D1B2EDEAAF7053BAB1538953A8734 "点击放大")

