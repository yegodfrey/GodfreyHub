---
name: document/cn/AppGallery-connect-Guides/agc-clouddb-sdk-version-change-history-minigame-0000001244353351
title: SDK版本更新说明
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-clouddb-sdk-version-change-history-minigame-0000001244353351
---

# SDK版本更新说明

|版本号|发布时间|更新说明|
|:----|:---------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|1.5.1|2023-07-28|![](https://media:301784775609165632) 修复已知问题。|
|1.3.6|2023-03-30|![](https://media:301784775609194633) * 新增[ServerStatus](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-serverstatus-miniprogram-0000001500063685)类，用于承载查询服务器状态对应信息。 * CloudDBZone类中新增[executeServerStatusQuery()](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzone-miniprogram-0000001199434788#section1324185773018)方法，支持查询服务器状态能力。|
|1.3.5|2022-12-30|修改SDK已知问题。|
|1.3.4|2022-11-30|![](https://media:301784775609229634) * 更新[CloudDBZoneConfig](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzoneconfig-miniprogram-0000001199594760)类中的Constructor，提供日志检索能力。|
|1.3.3|2022-11-20|![](https://media:301784775609265635) * 新增数据公共访问能力，您可以在控制台创建或修改对象类型时，通过为"所有人"角色配置upsert和delete的数据权限，开启该对象类型的公共访问能力。 * SDK包名修改为 @hw-agconnect/database。|
|1.3.2|2022-08-20|![](https://media:301784775609293636) 新增数据类型：IntAutoIncrement和LongAutoIncrement。|
|1.3.1|2022-05-11|![](https://media:301784775609321637) * CloudDBZoneQuery类中新增[and()](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzonequery-miniprogram-0000001244234679#section122902025114015)、[or()](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzonequery-miniprogram-0000001244234679#section1530010332406)、[beginGroup()](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzonequery-miniprogram-0000001244234679#section18841143714400)和[endGroup()](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzonequery-miniprogram-0000001244234679#section759104364011)方法。 ![](https://media:301784775609343638) * 修改AGConnectCloudDB类中的[getInstance(agcRoutePolicy?: AGCRoutePolicy)](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-agconnectclouddb-miniprogram-0000001244514663#section16294717127)方法，支持多数据处理位置。|
|1.3.0|2022-03-21|首次发布云数据库小游戏SDK。|

