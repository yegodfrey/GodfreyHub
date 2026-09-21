---
name: document/cn/promotion/guanlian-0000001117283614
title: 关联账号管理
uri: https://developer.huawei.com/consumer/cn/doc/promotion/guanlian-0000001117283614
---

# 关联账号管理

## 概述

广告主可以在PMC、PTC、BC中分别管理待推广的商品。通过将搜索库（包括PMC、PTC、BC）账号与广告账号进行关联，可以授权广告账号选择搜索库中的对应产品进行推广。

搜索库账号与鲸鸿动能广告账号支持多对多关联：一个鲸鸿动能广告账号可关联多个搜索库账号，创建计划时选择对应的搜索库账号；一个搜索库账号可被多个鲸鸿动能广告账号进行投放。

以搜索商品库（PMC）为例：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8c/v3/5IbRNrmETdSeMYxgcyAQxA/zh-cn_image_0000001224436331.png?HW-CC-KV=V1&HW-CC-Date=20260920T074031Z&HW-CC-Expire=31536000000&HW-CC-Sign=7A62D1ED9A5F1B94BACEDB019FFA5327CED86AFEF350B4770FA9F0BB89B21D68)

## 操作流程

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1f/v3/IbVfBWDBTgOJQol4Kmqlew/zh-cn_image_0000001454714741.png?HW-CC-KV=V1&HW-CC-Date=20260920T074031Z&HW-CC-Expire=31536000000&HW-CC-Sign=EE74C305A09D35515AEED89C489634319A3956F1B3629715A63860C8D171326A)

## 操作步骤

1. 在搜索库账号中添加鲸鸿动能广告账户。

   登录相应的搜索库，添加华为账号或者鲸鸿动能广告账户ID进行关联。
   * 华为账号：指的是您注册鲸鸿动能广告账户的邮箱或者手机号。
   * 鲸鸿动能广告账户ID：登录[鲸鸿动能广告平台](https://ads.huawei.com/usermgtportal/home/index.html#/help)，选择右上角的"**账户ID**"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/43/v3/uL7rVtGaRXagY3kG64JLpg/zh-cn_image_0000001224517875.png?HW-CC-KV=V1&HW-CC-Date=20260920T074031Z&HW-CC-Expire=31536000000&HW-CC-Sign=438F29294BDE4FEC89C01B30D36D57B57B8798201D88A479C66A66029A531832)

   |搜索广告类型|搜索库类型|搜索库链接|参考文档|
   |:-----|:-------|:--------------------------------------------------------------------|:------------------------------------------------------------------------|
   |搜索商品广告|搜索商品库PMC|[登录链接](https://unibox.petalsearch.com/shopping/index.html#/site/home)|[商品库文档](https://developer.huawei.com/consumer/cn/doc/20220802?version=V1)|

2. 在鲸鸿动能广告账号中接受邀请。

   添加成功后登录鲸鸿动能广告平台，单击"**工具** "->"**关联账号管理**"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2c/v3/Wxs2bitLTB-EWjjLBYgrqA/zh-cn_image_0000001178956670.png?HW-CC-KV=V1&HW-CC-Date=20260920T074031Z&HW-CC-Expire=31536000000&HW-CC-Sign=4DFD25611DCA11BFD94A2E6E30FF00F77EEF06F3CC6D87DF5D8B5343AA705E79)

   系统将会同步您在搜索库平台申请的关联操作，您需要在鲸鸿动能广告平台选择"**同意** "或者"**拒绝**"。
   * 若同意关联，则单击"**同意**"，同意后账号关联成功，创建搜索广告计划时，可选择该账号搜索库进行投放。
   * 若拒绝关联，则单击"**拒绝** "，拒绝后账号关联失败，账号申请在该列表中删除。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/66/v3/SlkCGIDhTn-N5Vvmc7aqyQ/zh-cn_image_0000001179116614.jpg?HW-CC-KV=V1&HW-CC-Date=20260920T074031Z&HW-CC-Expire=31536000000&HW-CC-Sign=742EF5BB52994BE16B54802F3A1E2B09EE6B57D55F589C8D210BB9ABE3683601)
     > 说明
     > * 如果您开通了鲸鸿动能广告的团队账号功能，您需要使用鲸鸿动能广告的主账号接受关联，团队账号不支持接受关联。
     > * 如果您是服务商，您需要使用子客的账号进行关联。

3. 在鲸鸿动能广告平台中创建广告。
4. 完成搜索库广告投放。

## 关联管理

* **查看关联账号：** 支持查看所有已关联/待关联的账号；列表支持所属账号中心、账号、状态排序；未关联的账号支持选择"**同意** "或者"**拒绝** "，若选择"**拒绝** "，申请账号将不再出现在列表中。

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e5/v3/nzLGR1WDS0et9XRxFDEkZw/zh-cn_image_0000001424060025.png?HW-CC-KV=V1&HW-CC-Date=20260920T074031Z&HW-CC-Expire=31536000000&HW-CC-Sign=1A5FD965C985BFF4D0D45E62E628BA8667E729B1819B60528183E75600FA8C78 "点击放大")
* **解除关联：** 若您的广告投放账号与搜索库账号需要解除绑定，可从搜索库平台操作解除绑定或者在广告投放账号中解除绑定；解除绑定后，该广告账号创建搜索库广告计划将无法选择该搜索库的账号，已创建的广告计划均停止投放；解除关联的账号将不再出现在列表中。

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3c/v3/uT-d_XSwSA-eHBjPvsjP7w/zh-cn_image_0000001424379977.png?HW-CC-KV=V1&HW-CC-Date=20260920T074031Z&HW-CC-Expire=31536000000&HW-CC-Sign=332F316DC3C82DAFF62CFE8707546A3E4B7CC7C3179A5E045C310CD305F61B76 "点击放大")

