---
name: document/cn/HMS-Guides/location-description-rn-v4
title: 华为定位服务场景介绍(React Native)
uri: https://developer.huawei.com/consumer/cn/doc/HMS-Guides/location-description-rn-v4
source: portal
---

# 1\. 开发场景

  * 请求位置更新

如果您的应用需要请求设备位置信息，您可以为您的应用申请位置权限，然后调用华为移动服务的请求位置更新接口(requestLocationUpdates())，设置不同的请求（LocationRequest)参数，根据您的需要指定定位方式，获取持续的位置信息回调。 如果您获取位置信息后，想取消位置信息回调，可以调用移除位置更新接口(removeLocationUpdates())，达到取消回调的目的。

  * 位置语义

如果您希望应用在获取位置信息的同时将位置信息转换为地址信息，那么你可以将LocationRequest参数中的isNeedAddress字段设置为true，同时设置语言和国家码，那么在调用请求位置更新接口时，就会将地址信息同时返回给您。

  * 活动识别

如果您的应用需要获取设备的运动状态，例如：步行、跑步、骑自行车等，或者你的应用需要检测用户的运动状态变化，那么您可以为您的应用申请活动状态识别权限，通过调用活动状态识别更新接口(createActivityIdentificationUpdates())获取当前用户的活动状态，移除活动识别更新只需要调用deleteActivityIdentificationUpdates()接口即可。 如果您需要检测用户的运动状态变化，那么您可以调用活动状态转换接口(createActivityConversionUpdates())，通过此接口您可以监听当前设备的活动状态转；移除监听时，只需要调用deleteActivityConversionUpdates()接口即可。

  * 地理围栏

如果您对某些地点比较关注，您可以根据关注地点的位置，创建地理围栏createGeofenceList(), 地理围栏可以感知当前设备所在位置和您的关注目标之间的距离，当用户进入围栏区域时，会向应用发起通知。 同时，您可以检测用户在围栏内的停留时间，当用户在围栏内停留一段时间之后，再发起通知。  





  


# 2\. 开发流程

开发流程如下图，详细操作步骤参见后文。

  


![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191122173903.29997753289808081780220944820610:50510414041837:2800:30337DED10C468F1DFE56FCED1E01E548E13527AA59DA306833C917268DC8AEF.png)

  

