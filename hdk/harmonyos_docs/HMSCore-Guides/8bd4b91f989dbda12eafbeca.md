---
name: document/cn/HMSCore-Guides/health-scientific-fat-loss-0000001911418338
title: HUAWEI Health数据平台，科学助力减脂塑形目标达⁠成
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/health-scientific-fat-loss-0000001911418338
---

# HUAWEI Health数据平台，科学助力减脂塑形目标达⁠成

俗话说，"管住嘴，迈开腿"，是减脂塑形的两大关键要素。想要高效且健康的减脂，不妨来了解一下，生态合作伙伴如何与华为共同提升减脂塑形服务体验。  

#### 华为运动健康减脂塑形解决方案

减脂塑形是华为运动健康重点关注的八大场景之一，基于全面、精确的卡路里监测技术，记录每天的热量消耗情况，让用户通过减脂塑形界面轻松掌握饮食热量摄入、运动热量消耗、静息热量消耗等数据，量化用户每天的热量缺口达成情况。  

#### 联合生态，共建优秀的减脂塑形体验

生态合作伙伴------超级猩猩是为运动爱好者打造的线上运动社区，其超级猩猩App通过调用华为Health Service Kit和Wear Engine能力实现【控制运动并获取实时运动数据】、【穿戴设备信息查询】、【管理锻炼记录】，提升减脂塑形体验。用户可以通过生态应用，一键联动手表实现开始及结束运动、心率上墙、热量消耗同步，让用户在减脂过程中每一步的蜕变，都抬腕可见。

以超级猩猩为例，双方共建的减脂塑形方案如下图所示：

<br />

![](https://media:901788166603619349 "点击放大")  

#### 控制运动

Health Service Kit服务开放能力提供了开始和结束运动的接口[startSport](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealthdatastore-0000001071549459#ZH-CN_TOPIC_0000001159809813__startSport-android_content_Context-int-com_huawei_hihealth_listener_ResultCallback-)/[stopSport](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealthdatastore-0000001071549459#ZH-CN_TOPIC_0000001159809813__stopSport-android_content_Context-com_huawei_hihealth_listener_ResultCallback-)，具体请参考[控制运动](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/harmonyos-obtaining-real-time-activity-data-0000001199599590)文档。

超级猩猩App调用该接口（如方案图步骤5），隐性控制华为运动健康App中对应运动状态，无需再跳转至华为运动健康App运动界面进行操作。通过绑定华为的穿戴设备，用户在超级猩猩App运动课程中启动/结束运动时，穿戴设备将自动启动/结束运动界面。  
![](https://media:901788166603789350)  
* 目前支持的运动类型包括：户外步行、户外跑步、户外骑行、室内跑步（跑步机）、椭圆机、划船机、室内单车、自由训练。
* 使用Health Service Kit数据前，需完成[申请账号服务](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/apply-id-0000001050747587)与[申请华为运动健康服务](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/apply-kitservice-0000001050707556)。  

#### Wear Engine穿戴设备信息查询

华为Wear Engine能够将手机上的生态应用和服务延展到智能穿戴设备，也将智能穿戴的设备能力开放给手机应用。当前提供[Wear Engine穿戴设备信息查询](https://developer.huawei.com/consumer/cn/doc/connectivity-Guides/device-connection-management-0000001050779152)能力。

当用户在超级猩猩App上点击【开始运动】时，超级猩猩App会调取华为Wear Engine穿戴设备状态管理能力，判断用户的穿戴设备是否正确连接，以及穿戴设备是否支持运动联动。若已连接且具备运动联动能力，则会进一步调用Health Service Kit相应的接口，从而避免直接调用后者的异常场景出现。  

#### 获取实时运动数据

Health Service Kit服务开放能力同时提供了获取实时运动数据和停止获取实时运动数据的接口[registerSportData](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealthdatastore-0000001071549459#ZH-CN_TOPIC_0000001159809813__registerSportData-android_content_Context-com_huawei_hihealthkit_data_store_HiSportDataCallback-)/[unregisterSportData](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealthdatastore-0000001071549459#ZH-CN_TOPIC_0000001159809813__unregisterSportData-android_content_Context-com_huawei_hihealthkit_data_store_HiSportDataCallback-)。具体请参考[控制运动并获取实时运动数据](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/harmonyos-obtaining-real-time-activity-data-0000001199599590)

超级猩猩App通过该接口获取用户运动心率、时长数据，让用户可在超级猩猩App界面实时查看自己的运动情况。在超级猩猩Meta剧幕课或者私教小团课上，还可以将实时心率数据投射到剧幕或私教大屏（方案图步骤7），让数据实时可见。  

#### 管理锻炼记录

Health Service Kit提供[管理锻炼记录](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/activityrecord-develop-0000001050069730#section13811291220)接口和相应的数据权限控制。

超级猩猩App通过Health Service Kit的服务开放能力获取到华为智能穿戴和华为运动健康App产生的运动数据（方案图步骤6）。同时，超级猩猩App将用户的运动记录回传给华为运动健康（方案图步骤9，也可根据需求使用 Health Service Kit生成的运动记录），在华为运动健康App同步展示本次运动记录，这便使得用户运动消耗的卡路里填充减脂计划的热量缺口，让用户感受到减脂塑形过程的数字可视化。

<br />

还想了解更多接入运动健康相关信息？一键直达：[华为运动健康官网](https://developer.huawei.com/consumer/cn/solution/hms/healthandfitness/)。  
