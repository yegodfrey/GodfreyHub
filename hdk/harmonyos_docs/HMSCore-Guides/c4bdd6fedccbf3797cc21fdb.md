---
name: document/cn/HMSCore-Guides/audience-synchronization-management-0000001212142711
title: 受众同步管理
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/audience-synchronization-management-0000001212142711
---

# 受众同步管理

## 功能概述

通过受众同步管理，可将受众同步至应用市场活动管理。受众同步至应用市场活动管理后，可在AppGallery Connect创建活动时（仅针对开通联运服务的应用）选择受众群组发放奖品，用于精准的奖品和消息触达。

## 前提条件

* 请确保您集成的SDK为6.2.0.300或以上版本，集成方法请参见[集成SDK](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/android-integrating-sdk-0000001050161876)。
* 受众同步至应用市场活动管理功能仅适用于Android应用。

## 典型应用场景

指定受众群组同步至应用市场活动管理。

## 功能详述

### 案例

某App希望对近14天购买行为大于2次的用户群组同步至应用市场活动管理，并通过AppGallery Connect创建活动时选择该群组发放奖品。

### 操作指导

1. 登录[AppGallery Connect网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击"我的项目"图标。
2. 选择需要查看分析数据的应用。
3. 受众群组同步至应用市场活动管理，详情请参见[受众同步至应用市场活动管理](#section134711415391)。

### 受众同步至应用市场活动管理

1. 创建受众群组，详情请参见[如何创建受众](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/audience-analysis-new-0000001113372616#section16141458101015)。
2. 同步受众群组至应用市场活动管理。
   1. 创建受众群组后在用户分群页面点击右上角的![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230926115251.64019830744398345320650564853650:50001231000000:2800:63A8195BBB599C7618A1FAEED2C063645AE38D0CD1EAE1355F546514AEEA7340.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)或者选择"华为分析 > 管理 > 受众同步管理"，进入受众同步管理页面。
   2. 选择"应用市场活动管理"页签。

      展示当前应用下所有离线受众群组，您可以在页面右上角下拉框处切换应用。
   3. 打开想要同步至应用市场活动管理的受众群组的"同步开关"。

      同步成功后，应用市场活动管理中可选择该群组进行操作。 说明
      > * 同步开关开启后，当受众发生变化时，会自动同步至应用市场活动管理，如：每天计算的受众每天自动同步、修改受众条件受众计算完成后自动同步。
      > * 如不想再将受众同步至应用市场活动管理，可关闭受众同步开关，应用市场活动管理将自动删除对应受众。

      ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230926115251.49366639116030049332452469676038:50001231000000:2800:451ADBA5B0F74F589BED3755D2ED11304C8ADBDA5A6C028C5EE0F48F9A89FEEC.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true "点击放大")

      受众同步参数说明：

      |**参数**|**说明**|
      |:-----|:--------------------------------------------------------------------------------------------------------------------------------------------------------|
      |受众名称|用户分群页面创建的受众群组名称。|
      |群组描述|用户分群页面创建受众群组时，对受众群组的描述。|
      |群组人数|华为分析服务或预测服务中该群组内的人数，由于id匹配规则等原因，实际同步后的人数，可能会存在差异。|
      |受众来源|受众的来源，包含以下两种： * 分析受众。支持每天计算或只计算一次的离线受众群组的同步，文件方式的受众群组暂不支持同步。 * 预测受众。针对预测生成的细分受众群体支持受众同步。|
      |基本信息|展示计算方式、更新时间和最新同步时间。 * 计算方式：只计算一次或每天计算，为创建受众群组时选择。 * 更新时间：受众群组人数更新的时间。 * 最新同步时间：最近一次成功地同步至应用市场活动管理的时间。对于曾经同步成功的受众，展示上一次同步成功的时间；对于一次都没有同步成功过的受众，同步时间展示"--"。|
      |同步开关|表示是否同步受众群组至应用市场活动管理，打开后同步，关闭时不同步。|
      |同步状态|同步状态有如下四种： * 未同步：同步开关关闭时，显示"未同步"。 * 同步中：同步开关开启后，系统计算受众人群并进行同步，此时的状态显示"同步中"。 * 同步成功：表示此次操作已同步成功，此时应用市场活动管理中可选择该群组进行操作。 * 同步失败：表示此次操作同步失败，系统会自动尝试同步。|

3. 应用市场活动管理中选择该受众群组发放奖品。

   可参考下图红框内容进行操作，关于应用市场活动管理的详情操作请参见AppGallery Connect帮助中心下的[活动管理](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help--management-activities-0000001100159966)。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230926115251.35871600657334162544288731264310:50001231000000:2800:E491D8488197B3523D84C98187AA09445BA45390792C65B90808E4C3D1D61ACD.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true "点击放大")
