---
name: document/cn/app/agc-help-activities-increase-payment-0000001771905416
title: 提升付费
uri: https://developer.huawei.com/consumer/cn/doc/app/agc-help-activities-increase-payment-0000001771905416
---

# 提升付费

为了提升用户付费，增加收益，您可以创建提升付费活动。活动期间，在应用内充值到达指定金额的用户有机会获得奖励。
> 说明
>
> 已实名认证的企业开发者才能创建活动。

## 展示效果

提升付费活动落地页以及活动通知展示效果如下。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251107133655.44193620074922664047928006036417:50001231000000:2800:27F92AB7E82B15C624FF37BDC0AFDE99FA36A271CDD6987EA6FD2A7E1C386F2D.png)

## 接入流程

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251107133655.81633927573281716010569263481098:50001231000000:2800:0077BA3BE55241787B3F11B596D8B1E26C0E95103E0DAB881D522889503F0EAC.png "点击放大")

## 活动准备

* 已成功[创建应用](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createapp-0000001146718717)，且软件包类型为"APK(Android应用)"或者"RPK(快应用)"，支持设备为"手机"。
* 含奖品的活动需提前准备奖品素材，详情请参见[奖品素材](https://developer.huawei.com/consumer/cn/doc/app/agc-help-activities-param-0000001771905420#section953762813448)。
* 提前准备活动落地页素材。

  |准备项||说明|
  |:-|-|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  |活动封面图片||要求宽高分辨率为1280px*720px，且大小不超过200KB的JPG格式图片。 > 说明 > * 设计图无需Logo和文字，尽量突出活动主题和元素，详细要求请参考[活动素材规范](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251107133656.10646953012653088280411030378254:50001231000000:2800:4ECEF3D1C214EE511D42F7C88A55CE212E49C0256FAF72FF417F268A6567F25E.zip?needInitFileName=true)。 > * 活动形式为"直接发奖"且落地页选择"活动详情页"时还需要准备一份同一设计图，尺寸为357px*264px，大小不超过150KB的JPG格式图片。|

## 配置活动奖品

> 说明
>
> 若创建无奖品活动可跳过该步骤。

通过各类运营活动，为用户提供活动奖励，以不同活动形式向用户发放奖品，需先配置可添加至运营活动的活动奖品，配置活动奖品操作步骤如下。文中具体参数说明请参见[参数说明](https://developer.huawei.com/consumer/cn/doc/app/agc-help-activities-param-0000001771905420#ZH-CN_TOPIC_0000001771905420)。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击"APP与元服务"，在应用列表中选择需要新增奖品的应用。
2. 新增奖品。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251107133656.88084563435385069123043460197587:50001231000000:2800:6C49BCBF8C23A6EB32200B3A839DD2BAB667FB63767817B8FE59AFC06BF422CA.png)


3. 填写奖品信息，完成后点击右上角"提交"提交审核。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251107133656.40100961923190648644260522280958:50001231000000:2800:E349F1942F30751DEDF7AAA6D5B0388AF0FA75CE051C39EC66F874A6035DB09F.png)

## 创建活动

配置活动奖品并提交审核后，您可按如下步骤创建提升付费活动。文中具体参数说明请参见[参数说明](https://developer.huawei.com/consumer/cn/doc/app/agc-help-activities-param-0000001771905420#ZH-CN_TOPIC_0000001771905420)。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击"APP与元服务"，在应用列表中选择应用。
2. 新建活动。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251107133656.66566492335495274415658270267531:50001231000000:2800:54FA697AB4E3987F349BE552EDB397D6E778CE7A6737FF9FB985BF9B3757410C.png)

3. 配置活动规则。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251107133656.21630937347217736423814320977410:50001231000000:2800:7BDC90C0B2C5D9D2D2D5006D5D87EEA988194A6DA52E6CA6805819A0EF67D527.jpg)

4. 下滑页面至"活动奖品配置"区域配置活动奖品（若"活动形式"选择"无奖品H5"无需配置，不展示该内容）。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251107133656.32417457257559636507346822020233:50001231000000:2800:DCA064BE9FA04B62B90A989CDC258CFD349991AE5578B530EC11DC6F5C801345.png)

5. 配置活动落地页及其它信息。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251107133656.13791120183599253330372116860958:50001231000000:2800:4EAF14C247375D8FEE3F367F5E3FF5B42BD865CDA6DEAC45946412F7EA2E00E9.png)

6. 审核与上架。 点击页面右上角"提交审核"提交审核后，华为工作人员审核活动申请预计需要1~3个工作日，请耐心等待。审核结果可在状态栏查看。

   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251107133656.79897662029677170120743375739686:50001231000000:2800:9A96812821A6D8B296A10CB251E519E259AF97D407B60A7A7BF2D828E2957E86.png)
   > 说明
   >
   > 若想修改审核中的活动，请先撤销运营活动的申请，重新编辑活动后再提交审核。

