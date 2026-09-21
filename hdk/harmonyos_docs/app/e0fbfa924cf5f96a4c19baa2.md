---
name: document/cn/app/agc-help-activities-loss-recall-0000001818905097
title: 流失召回
uri: https://developer.huawei.com/consumer/cn/doc/app/agc-help-activities-loss-recall-0000001818905097
---

# 流失召回

为了挽回流失用户，提升用户留存率，您可以创建流失召回活动。在活动期间，针对指定的用户群体直接发放活动奖励，例如标签用户群、私有用户群。奖品信息会通过应用市场或游戏中心推送给用户。
> 说明
>
> 已实名认证的企业开发者才能创建活动。

## 展示效果

流失召回活动通知示例如下。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251107133656.04042612476235612636859079938082:50001231000000:2800:E971CAFBA64F253C0D8E998FE464F06D9540CC493D3ABB572476E77B1BFE34BF.png)

## 接入流程

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251107133656.38725179030167772165629294763036:50001231000000:2800:5CE4FAFC1C58F57BF7128D1F6DCE723E4C7671F1F9484BE75C0BD182A6B11510.png "点击放大")

## 活动准备

* 已成功[创建应用](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createapp-0000001146718717)，且软件包类型为"APK(Android应用)"或者"RPK(快应用)"，支持设备为"手机"。
* 含奖品的活动需提前准备奖品素材，详情请参见[奖品素材](https://developer.huawei.com/consumer/cn/doc/app/agc-help-activities-param-0000001771905420#section953762813448)。
* 提前准备活动素材。

  |活动形式|准备项||说明|
  |:----|:-|-|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  |定向发奖|用户类型||活动投放的用户类型： * 标签用户群：您可以在活动申请页面勾选不同维度的标签。 * 自建私有用户群：不同openId/playerId组成的私有用户群，您需要提前[创建私有用户群](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-pic-analysis-0000001154544228#section2016517582187)。|
  |无奖品H5|活动封面图片||要求宽高分辨率为1280px*720px，且大小不超过200KB的JPG格式图片。 > 说明 > 设计图无需Logo和文字，尽量突出活动主题和元素，更详细要求可参照[活动素材规范](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251107133657.55060937746410063843581081996665:50001231000000:2800:0260B6A17A1D6809BDA3A7D7D4F79A9FF799936FC588CD16DEA3548E9F186ABC.zip?needInitFileName=true)。|

## 配置活动奖品

> 说明
>
> 若创建无奖品活动可跳过该步骤。

通过各类运营活动，为用户提供活动奖励，以不同活动形式向用户发放奖品，需先配置可添加至运营活动的活动奖品，配置活动奖品操作步骤如下。文中具体参数说明请参见[参数说明](https://developer.huawei.com/consumer/cn/doc/app/agc-help-activities-param-0000001771905420#ZH-CN_TOPIC_0000001771905420)。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击"APP与元服务"，在应用列表中选择需要新增奖品的应用。
2. 新增奖品。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251107133657.34945667928797226929829539762022:50001231000000:2800:C18E003377A36032E2F4E197B4AC88C22B60D3CE7A6FD144D20BDBE2B45E20A4.png)


3. 填写奖品信息，完成后点击右上角"提交"提交审核。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251107133657.81007754139834668316009789620301:50001231000000:2800:EAAC7CFFF7D8377F5719F7449A287556FE31089702D05C74EB23AAAA7C7F419B.png)

## 创建活动

配置活动奖品并提交审核后，您可按如下步骤创建流失召回活动。文中具体参数说明请参见[参数说明](https://developer.huawei.com/consumer/cn/doc/app/agc-help-activities-param-0000001771905420#ZH-CN_TOPIC_0000001771905420)。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击"APP与元服务"，在应用列表中选择应用。
2. 新建活动。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251107133657.72597549599179179452111057191081:50001231000000:2800:B0575DBDEE45A2ACDE9F21F349F03EBCACB2355143A37EF362DA91C229942887.png)

3. 配置活动规则。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251107133657.56967555244911007591972950551708:50001231000000:2800:DBA3D9AD3AAAB92FA39F92894C173C99EF9DEFC4DF02BC52224A28FC5A609796.png)

4. 下滑页面至"活动奖品配置"区域配置活动奖品（若"活动形式"选择"无奖品H5"无需配置，不展示该内容）。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251107133657.22112854716628316066573943731110:50001231000000:2800:56D979D9F1711A4033C72F6484D68BE5F0A547E57D3B3013E8C1A5C05B62DC46.png)

5. 配置活动落地页（若"活动形式"选择"定向发奖"无需配置，不展示该内容）。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251107133657.65060943685696251747229527104924:50001231000000:2800:3BC61CA07D4450DB5BCD0B859317A8576C3B0738B8F70787F845693ACB53288C.png)

6. 审核与上架。 点击页面右上角"提交审核"提交审核后，华为工作人员审核活动申请预计需要1~3个工作日，请耐心等待。审核结果可在状态栏查看。

   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251107133657.37098563514885136527415733518937:50001231000000:2800:5A33828DC828CD84D51BCF71DBF425604AA8577311B37805B1C8A5BECCCDB286.png)
   > 说明
   >
   > 若想修改审核中的活动，请先撤销运营活动的申请，重新编辑活动后再提交审核。

