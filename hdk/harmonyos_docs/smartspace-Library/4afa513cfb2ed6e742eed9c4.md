---
name: document/cn/smartspace-Library/access-flow-0000001455335944
title: 接入流程
uri: https://developer.huawei.com/consumer/cn/doc/smartspace-Library/access-flow-0000001455335944
---

# 接入流程

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230525091414.96717422831121123697768455125082:50001231000000:2800:D3F0738C0D5BA575EF189F73979EF02D32963C327DC96E6DD4FF68E7532D7524.png?needInitFileName=true?needInitFileName=true)

关键流程说明：

1. 配置卡片坑位信息，具体参考 [卡片坑位配置字段说明](https://developer.huawei.com/consumer/cn/doc/development/smartspace-Library/card-pit-description-0000001504975689)
2. 按照UX规范的要求，准备插件中所用到的所有的静态资源；
3. 将前两步配置好的信息和资源文件提供给华为工程师；
4. 华为工程师将配置好相关的静态资源和相关的配置信息，并将静态资源的地址返回
5. 插件若配置了需要开机自启动，则需实现startDaemonTask接口；
6. 插件实现getUiContent接口，用于宿主定期主动获取卡片的最新数据，刷新卡片；（注：返回的格式请参考[各类卡片开放能力参数说明](https://developer.huawei.com/consumer/cn/doc/development/smartspace-Library/card-type-0000001504816041)）
7. 按照项目要求完成插件的业务开发（，插件应用的改造开发请参考《智慧生活Ex插件集成开发指导书》）
   * 若插件需主动通知刷新界面，插件后台业务自行处理，在需要刷新卡片时主动调用宿主setUiContent接口触发刷新；
8. 完成插件功能开发，参考[pluginInfoV2.json配置文件](https://developer.huawei.com/consumer/cn/doc/development/smartspace-Library/plug-in-configuration-file-0000001455016268)配置好pluginInfoV2.json文件，并提交华为OpenLab进行认证测试；
9. 认证测试通过后，启动插件商用上架，上架流程可参考：
   1. 文字指导：[https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-releaseapkrpk-0000001106463276#section107671955173616](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-releaseapkrpk-0000001106463276#section107671955173616)
   2. 视频指导：[https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-video-apprelease-0000001086864684](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-video-apprelease-0000001086864684)
