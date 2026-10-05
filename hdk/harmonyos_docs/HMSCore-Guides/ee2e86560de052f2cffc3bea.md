---
name: document/cn/HMSCore-Guides/miniprogram-automatic-user-attribute-0000001152009070
title: 自动采集用户属性
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/miniprogram-automatic-user-attribute-0000001152009070
source: portal
---

# 自动采集用户属性

分析服务自动采集如下用户属性，您无需埋点即可使用。

属性名称 | 属性含义  
---|---  
AAID | 应用匿名标识符。  
应用版本 | 用户安装应用的版本号。  
HASDK名称 | HUAWEI Analytics SDK名称。  
HASDK版本 | HUAWEI Analytics SDK版本号。  
HASDK类型 | HUAWEI Analytics SDK平台类型。  
设备型号 | 用户设备的型号。  
操作系统 | 用户设备安装的操作系统名称。  
操作系统版本 | 用户设备安装的操作系统的版本。  
应用包名 | 用户安装应用的包名。  
屏幕宽度 | 用户设备的屏幕宽度。  
屏幕高度 | 用户设备的屏幕高度。  
系统语言 | 用户设备设置的语种。  
首开事件发生时间 | 首开事件对应的时间戳。  
  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230926115334.99641046578671314920589107944508:50001231000000:2800:C7D2BAEB4ECFC729006594899531DB9BF7EA8A14E836F885072D24144A2A9536.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)

上述表格中AAID不通过[getUserProfiles](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/miniprogram-api-wxanalytics-0000001198293007#section1862412149497)接口获取，通过[getAAID](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/miniprogram-api-wxanalytics-0000001198293007#section993793015410)接口获取。
