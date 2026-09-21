---
name: document/cn/HMSCore-Guides/uninstalls-insight-0000001272424214
title: 卸载洞察
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/uninstalls-insight-0000001272424214
---

# 卸载洞察

## 功能概述

卸载洞察通过分析卸载人群在卸载App前发生的事件详情、行为分析和崩溃分析，洞察人群属性，分析卸载场景。
> 说明
>
> 卸载洞察报告中指标按照设备ID进行统计。

## 前提条件

卸载洞察页面下的分析报告，需满足以下两个条件方可查看：

* 当前项目下包含Android应用。
* 该报告需要开启产品改进功能方可查看，开启产品改进详情请参见[设置产品改进](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/analysis-settings-0000001123423149#section19983301983)。

## 典型应用场景

* 分析卸载事件，洞察卸载人群属性。
* 优化运营措施，预防用户流失。

## 功能详述

### 案例

某游戏类App上线后安卓端卸载人数持续上涨，可通过"卸载分析"分析该人群近30天内在卸载前的行为，定位卸载原因。洞察卸载人群属性，制定相应运营方案，降低流失率。

### 操作流程

1. 登录[AppGallery Connect网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击"我的项目"图标。
2. 选择需要查看分析数据的应用。
3. 选择"华为分析 > 卸载分析 > 卸载洞察"进入报告页面。
4. 查看卸载人群洞察报告，洞察人群属性。详情请参见[查看卸载人群洞察报告](#section10402019361)。
5. 查看卸载流向分析报告，包括卸载前流向分析和卸载后流向分析。详情请参见[查看卸载流向](#section1481518112118)。
6. 查看卸载前行为分析。详情请参见[查看行为分析](#section159711370598)。
7. 查看卸载前崩溃分析。详情请参见[查看崩溃分析](#section177553496221)。

### 查看卸载人群洞察报告

卸载人群洞察报告包括所选时间段内、符合过滤器条件的卸载用户总数及占比情况，渠道、应用版本、位置、操作系统版本、机型与品牌的分布情况，可切换指标卡片查看相应报告，点击各卡片中的"数据导出"可下载明细数据。

以查看渠道分布为例，点击属性分布图中的"渠道"即可查看渠道属性的分布情况。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230926115236.53297589581128961956324736992229:50001231000000:2800:682321A872F18CA0926BEFC8B1D3F36BABBD584DFB886DB38BE2A7FF5A04B5FD.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true "点击放大")

### 查看卸载流向

> 说明
>
> * 该报告仅支持用户设备形态为手机或平板。
> * 为了更好地查看卸载前后全量报表数据，建议您接入分析服务一周后再查看该报告。

卸载流向报告向开发者展示用户卸载其应用前后的流向信息，包括流向的安装应用的名称、安装该应用占比和使用该应用占比，分析其用户安装行为、属性洞察。可查看用户卸载应用前后3天以内、7天以内、14天以内和30天以内的流向信息。如果用户安装了某一应用，然后当天又卸载该应用，则该应用不会被统计到卸载流向报告中。

页面默认展示安装数排名前十的应用，只支持30天内的流向分析。在报告左上角输入框内可输入应用名或者包名设置关注，最多可关注10个应用。如果您想取消关注某个应用，可点击应用名称左侧的蓝色爱心，也可以在左上角输入框内输入应用名或者包名进行取消关注。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230926115236.90442719468040521062423817794612:50001231000000:2800:0D172E943FFD7DF8DE347EC650A718A8C9C7900CA365FF94A97B030287458F76.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true "点击放大")

### 查看行为分析

1. 查看卸载前事件分析卡片。
   1. 点击"Top10事件数"，查看卸载前的Top10事件数。

      该页面展示了过去7日卸载用户发生次数最多的Top10事件。

      ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230926115236.29374703924315975922500781663810:50001231000000:2800:12958F7C216610C89A941D8264662304CB274378D7454BF94D0D255C675C872A.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true "点击放大")

      |指标|指标说明|
      |:----------------|:----------------------------|
      |卸载用户过去七日（含当日）的事件数|卸载用户过去七日（含当日）发生该事件的数量。|
      |当日活跃用户事件数|当日活跃用户发生该事件的数量。|
      |事件率|卸载用户过去七日（含当日）的事件数/当日活跃用户事件数。|
      |卸载用户数|过去七日（含当日）发生该事件的卸载用户数。|
      |用户占比|过去七日（含当日）发生该事件的卸载用户数/当日卸载用户数。|

      * 打开卡片右侧的"过滤自动采集事件"开关，可将华为分析自动采集事件屏蔽展示。
      * 点击"事件名称"列的卸载前某一事件，可查看该事件参数以及参数值详情。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230926115236.23785238921610022076359783389147:50001231000000:2800:5216610ED3CF9EA6B0404DDEDFEE29BF73B8B0CBF8A693C2F81314F73EDB0EAE.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true "点击放大")

   2. 点击"Top10事件率"，查看卸载前的Top10事件数率。
2. 卸载前使用次数、首次打开时间和最后互动时间。

   卸载前使用次数卡片展示卸载用户过去七日（含当日）打开应用的次数。

   首次打开时间展示卸载用户首次打开应用的时间。最后互动时间展示卸载用户最后在应用内发生互动的时间。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230926115236.46965262689927905627451106420022:50001231000000:2800:CF15C2969D08A817A006B70BB3463944AC6F4DC0BB27BDF1EAD15328651D17BD.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true "点击放大")
3. 查看卸载前路径分析。
   1. 点击"页面路径"，查看卸载前的页面路径。 说明
      >
      > 页面路径功能目前仅对部分邀请伙伴开放，您可以通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/)方式申请开通此功能，申请模板请参考[在线提单指导](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/online-application-guide-0000001174952406)，1-2个工作日可获得客服回复。

      ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230926115236.96571265860918334400987723288451:50001231000000:2800:843BD8622B631A11FBE44CA7692FD431A89CDFB1E2798B06D2F4491CE1141FE5.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true "点击放大")
   2. 点击"事件路径"，查看卸载前的事件路径。

      ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230926115236.43029346641586463697979689840099:50001231000000:2800:9021ADF8F7A3ECE3E13AA49CE5EFF4F01FDB30447EABA51B3344A93302405673.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true "点击放大") 说明
      > * 当会话事件数多于5个时，事件路径默认展示最后一次会话的最后五个事件。
      > * 当会话事件数不足5个时，事件序列默认展示所有事件。

### 查看崩溃分析

崩溃分析报告展示卸载用户过去七日（含当日）应用发生的崩溃次数。可根据崩溃发生的次数，衡量应用质量，并及时对崩溃进行监测、追踪崩溃原因，进而提高用户体验，减少用户流失。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230926115236.04528319135164209644713845417644:50001231000000:2800:51D964FED6FDB63F31246F7F28A175C7A18AE771A63B9C82A9947FB56EEC8A59.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true "点击放大")
