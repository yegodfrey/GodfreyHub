---
name: document/cn/HMSCore-Guides/android-live-intro-0000001563098012
title: 业务介绍
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-live-intro-0000001563098012
source: portal
---

# 业务介绍

#### 简介

实况窗是一种帮助用户聚焦正在进行的任务，方便快速查看和即时处理的通知形态。实况窗具有时效性、时段性、变化性的特点。

**时段性** ：该事件或服务需要持续一段时间，有明确的开始和结束，而非单点的提醒或信息。

例：打车、外卖等从事件开始到结束需要经历一段时间，属于实况窗；天气提示、电影票等单点提醒，则不属于实况窗。

**时效性** ：内容为正在进行或即时发生的事件或服务的提醒，在特定时间段内，信息对用户有价值。

例：打车行程中、外卖配送中等正在进行的用户活动，属于实况窗；权限调用、功能待机等系统状态，不属于实况窗；2天后的机票，在刚买时不提醒，而在出发前提示，具体提醒时间根据业务实际情况确定。

**变化性** ：实况窗所展示的内容需要是动态刷新，以确保用户看到的信息是最新的状态。

在展示形态上，实况窗支持在熄屏（AOD）、锁屏、通知中心、状态栏等位置展示，主要有三种展示形式：胶囊态、卡片态、小折叠外屏展示态。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240423090410.06428367027596201988196218550167:50001231000000:2800:D92E6C85B2B3D744806F721CA3701FFAEEFE0D43012AC01342B1A02374920442.png?needInitFileName=true?needInitFileName=true)

#### 支持的范围和场景

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240423090410.83964052228108587343472192640261:50001231000000:2800:E75FADF3DCABBCFF885E91C3645A086D4DED2D2A5E58E8162F4F7947876D1BA3.png?needInitFileName=true?needInitFileName=true)

    * 实况窗目前为Beta测试阶段，优先对**邀请** 适配HarmonyOS NEXT且满足场景准入原则的应用接入。Beta阶段首批受邀应用已陆续接入，后续邀请暂未开放，敬请期待。
    * 实况窗支持HarmonyOS 4.0及以上的所有机型。
    * 小折叠外屏展示态当前仅支持在HUAWEI Pocket 2设备上展示，应用可自行适配。

实况窗场景准入原则：

    * 该活动场景是用户非常关注，且需要反复查看或快捷操作
    * 活动有开始和结束时间，且活动总时长较短
    * 用户对接收到该活动的实况窗通知有明确的预期，通常为用户主动行为触发实况窗通知
    * 需要确保展示内容对用户有足够的价值，且不可用于营销、广告场景

支持对接的场景：

**场景类型** | **EVENT取值** | **场景描述** | **适用范围**  
---|---|---|---  
出行打车 | TAXI | - | 适用于网约车、出租车、拼车、顺风车等场景  
即时配送 | DELIVERY | 指配送员将餐品、商品送达到用户指定地点的业务场景，通常在较短时间内完成配送环节 | 适用于外卖、生鲜配送、同城配送等场景  
航班 | FLIGHT | - | 适用于用户通过航班出行或者主动关注某个航班进展的场景  
高铁/火车 | TRAIN | - | 适用于高铁出行、火车出行的场景  
排队 | QUEUE | 需要通过排队叫号的方式，按顺序为用户提供服务的业务场景 | 适用于办事大厅、医院、银行、餐饮等排队叫号能力场景  
取餐 | PICK_UP | 指的是用户完成餐品/商品下单后，自行取餐或者取件的场景 | 适用于餐饮线下取餐提醒，包括餐品排队情况、制作进度、取餐提醒等  
赛事比分 | SCORE | 展示比赛双方成绩变化情况 | 游戏赛事、体育赛事等展示比分变化情况的场景  
共享租赁 | RENT | 用户使用临时租赁服务时，向用户展示实时租赁时长和费用等租赁状态信息的场景 | 适用于共享单车、共享充电宝、停车场临时停车等场景  
计时 | TIMER | 用户在某个短时间段持续的正计时或任务前的倒计时场景 | 适用于专注时刻、番茄时钟、抢票倒计时提醒场景，仅限于工具类应用申请（当前计时场景仅支持通过端侧创建与更新）  
  
#### 受限说明

    * 实况窗的发送受权益管控，应用接入时，需要根据文档的指导，[申请实况窗权限](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-live-guide-right-0000001562619196#section829617463612)。
    * 原则上，所有实况窗的更新需要通过Push Kit进行刷新，保证实况窗不依赖应用进程的存活。通过Push Kit的更新，实况窗完成在生命周期内正常的刷新和结束。
    * 应用在发送实况窗通知时，每个活动首条的通知消息创建依赖应用进程运行，创建后支持本地更新和通过Push Kit更新两种方式。
    * 单个实况窗通知的生命周期最长不超过8+1小时，超过8小时后，系统会认为通知结束，并对实况窗通知进行存档处理，存档期最长1个小时。
    * 通过Push Kit更新实况窗通知时，单个活动支持每5分钟最多刷新10次，每小时最多刷新60次，超过频次部分将丢弃，不再下发。
    * 为了确保用户看到的内容是新的且有价值的，实况窗通知支持的最长不刷新时间为2小时，超过2小时未更新的实况窗通知，系统会认为通知结束。
    * 通过左滑实况窗通知，点击清除按钮两步操作，用户可以在实况窗通知展示的任何时间点对某一实况窗通知进行删除，删除后，该实况窗通知的更新将不再展示。

#### 使用入门

您需要按照如下流程完成实况窗的开发工作。

开发步骤 | 说明  
---|---  
[开通实况窗服务](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-live-guide-right-0000001562619196) | 开发应用前需要您在[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)中配置实况窗权限。  
依据[设计规范](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-live-design-0000001613258245)设计实况窗通知样式 | 依据实况窗通知的样式模板设计您的实况窗通知范本。  
[构建本地实况窗通知](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-live-guide-local-0000001613377893) | 根据[设计规范](https://developer.huawei.com/consumer/cn/doc/design-guides-V1/livenotification-0000001667114689-V1#section8212612247)完成本地实况窗的开发。  
[通过Push更新实况窗通知](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-live-guide-update-0000001562778484) | 使用[实况窗通知刷新](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/rest-live-0000001562939968)完成内容的刷新。  
  
#### 违规处罚

应用发送的实况窗通知需遵守实况窗[设计规范](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-live-design-0000001613258245)、[推送内容原则](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/detailed-rules-0000001186781074#section1873851265414)，如出现违反实况窗通知设计规范、推送内容原则等行为，将被视为违规。

违规行为及相应的处理措施请参见[违规分类、违规行为及违规处罚标准](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/volation-classification-violation-penalty-criteria-0000001356540133)。
