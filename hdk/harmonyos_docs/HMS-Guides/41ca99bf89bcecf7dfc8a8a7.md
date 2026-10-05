---
name: document/cn/HMS-Guides/wallet-guide-deeplink-carcard
title: 车钥匙
uri: https://developer.huawei.com/consumer/cn/doc/HMS-Guides/wallet-guide-deeplink-carcard
source: portal
---

# 1 概述

车钥匙是华为钱包为用户提供的一种可以用手机模拟实体车钥匙并用手机打开车门的功能。

车钥匙依托华为钱包行业标准卡集成方案，基于华为手机“芯-端-云”一体化的安全能力将园区门禁卡模拟至华为钱包内。用户可通过伙伴App、快应用方式添加卡片操作。

注：此方式当前仅支持中国大陆区域。

# 2 流程概览

接入所需步骤：

步骤| 分类| 动作| 用途说明  
---|---|---|---  
1| 开发准备| [配置AppGallery Connect](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/wallet-preparations-agc)| 配置申请Wallet Kit相关服务。  
2| [安全组件申请](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/wallet-preparations-scret)| 获取加密数据所需的秘钥或证书。  
3| [服务创建](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/wallet-preparations-server)| 创建Wallet Kit服务。  
4| 卡劵接入| 卡劵领取| 用户可以根据指导进行卡劵领取操作。  
卡劵更新| 用户可以根据指导进行卡劵更新操作。  
UI设计| 用户可以根据JSON串映射字段来定制界面显示内容。  
5| 开发后自检| [开发后自检](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/wallet-guide-checktool)| 华为提供对应用自动检查的能力。  
6| 上架申请| [上架申请](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/wallet-guide-apprelease)| 开发完成后需要在AppGallery Connect中将应用信息补充完整并提交上架申请。  
  
# 3 功能实现

## 3.1 卡劵领取

场景| 功能| 实现方法| 步骤  
---|---|---|---  
车钥匙| App应用内领取卡劵注：此方式当前仅支持中国大陆区域| [App应用集成Wallet Kit SDK后推送卡劵包到华为钱包应用](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/guide-app-sdk)| 

  1. 商户通过服务器示例代码生成卡劵包
  2. 推送给华为钱包应用

  
  
3.2 卡劵更新  


更新卡劵请参考“[商户服务器实现接口更新卡劵](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/wallet-guide-pushpass)”方式来实现卡劵更新操作。

# 4 UI设计

![](http://10.116.132.132:8080/idp-edit-service/editor/image/1032914/1_zh-cn_image_0000001050178481.gif)

编号| 名称| JSON串映射字段| 规格| 说明  
---|---|---|---|---  
1| 标题| fields.commonFields[key= title]| 长度：小于256字节| 如果不传则拿取organizationName, Value支持多语言  
2| 卡面logo| fields.commonFields[key= headImg]| 图片规格：90*90px大小：小于等于20kb| Value传入图片URI  
3| 类型| fields.commonFields[key= type]| 长度：小于256字节| Value为家、公司等标记，Value支持多语言  
4| 卡面图片| fields.commonFields[key= CardImg]| 图片规格：1248*780px大小：小于等于40kb|   
  
5| 刷卡图标| fields. commonFields[key = swipeImg]| 图片规格：90*90px大小：小于等于20kb| Value为刷卡图片Url链接，Label支持多语言  
6| 刷卡跳转地址| fields. commonFields[key = swipe]| 长度：小于256字节| Value为点击刷卡后跳转的地址，Label支持多语言  
7| 编辑图标| fields. commonFields[key = editImg]| 图片规格：90*90px大小：小于等于20kb| Value为编辑图片Url链接，Label支持多语言  
8| 编辑地址| fields. commonFields[key = edit]| 长度：小于256字节| Value为点击编辑图标跳转的地址，Label支持多语言  
9| 默认卡图标| fields. commonFields[key = defaultCardImg]| 图片规格：90*90px大小：小于等于20kb| Value为默认图片Url链接，Label支持多语言  
10| 默认卡地址| fields. commonFields[key = defaultCard]| 长度：小于256字节| Value为默认地址，Label支持多语言  
11| 物业缴费| fields. appendFileds[key = propertyCost]| 长度：小于256字节| 跳转物业缴费H5，Label支持多语言  
12| 生活服务| fields. appendFileds[key = lifeCost]| 长度：小于256字节| 跳转生活缴费，Label支持多语言  
13| 邻里分享| fields. appendFileds[key = share]| 长度：小于256字节| 跳转邻里分享，Label支持多语言  
14| 友邻集市| fields. appendFileds[key = market]| 长度：小于256字节| 跳转友邻集市，Label支持多语言  
15| 社区活动| fields. appendFileds[key = communityActivity]| 长度：小于256字节| 跳转社区活动，Label支持多语言  
16| 周边健身房| fields. appendFileds[key = gym]| 长度：小于256字节| 跳转周边健身房，Label支持多语言  
17| 联系客服| fields. appendFileds[key = service]| 长度：小于256字节| 点击跳转拨号界面并自动填写电话  
18| 常见问题| fields. appendFileds[key = commonProblem]| 长度：小于256字节| 点击跳转常见问题界面  
  
  

