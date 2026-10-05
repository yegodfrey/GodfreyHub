---
name: document/cn/HMSCore-Guides/harmonyos-js-automatic-user-attribute-0000001204438369
title: 自动采集用户属性
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/harmonyos-js-automatic-user-attribute-0000001204438369
source: portal
---

# 自动采集用户属性  
  
分析服务自动采集如下用户属性，您无需埋点即可使用。

属性名称 | 属性含义  
---|---  
AAID | 应用匿名标识符。  
广告标识符 | 用于个性化广告的非永久性设备标识符。  
个性化广告开关 | 个性化广告是广告商根据用户的偏好进行智能推荐，为用户提供可能感兴趣的广告。  
设备名称 | 用户设备的名称。  
ROM版本号 | 用户设备使用的ROM版本号。  
EMUI版本 | 用户设备使用的EMUI版本号。  
设备型号 | 用户设备的型号。  
应用包名 | 用户安装应用的包名。  
应用版本号 | 用户安装应用的版本号。  
HASDK版本 | HUAWEI Analytics SDK版本号。  
HASDK名称 | HUAWEI Analytics SDK名称。  
HASDK类型 | HUAWEI Analytics SDK平台类型。  
操作系统 | 用户设备安装的操作系统名称。  
操作系统版本 | 用户设备安装的操作系统的版本。  
系统语言 | 用户设备设置的语种。  
厂商 | 用户设备的生产厂商。  
屏幕高度 | 用户设备的屏幕高度。  
屏幕宽度 | 用户设备的屏幕宽度。  
设备形态 | 用户设备的类型，例如手机、平板等。  
总存储空间 | 用户设备的总存储空间。  
剩余存储空间 | 用户设备的剩余存储空间。  
当前电量 | 用户设备的当前剩余电量。  
充电状态 | 用户设备的充电状态。  
总内存 | 用户设备的总内存大小。  
剩余内存 | 用户设备的剩余内存大小。  
首开事件发生时间 | 首开事件对应的时间戳。  
字体大小 | 用户设备系统字体大小。  
userAgent | 用户代理。  
屏幕亮度 | 用户设备的屏幕亮度。  
声音模式 | 用户设备的声音模式，响铃、静音或振动。  
深色模式 | 用户设备的深色模式。  
自动旋转开关 | 用户设备屏幕的自动旋转开关。  
  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230926115316.05633193431933863417945205357008:50001231000000:2800:D01D64A51035228CC7807A8EC6DCE868D61FE5EA1AD1079B0573E75298EF72A0.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)

上述表格中以下字段不通过[getUserProfiles](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/harmonyos-js-api-hianalytics-instance-0000001204763599#section1862412149497)接口获取：

      * AAID通过[getAAID](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/harmonyos-js-api-hianalytics-instance-0000001204763599#section124931637174316)接口获取。 
      * 广告标识符生成方式因各个设备厂商不同存在差异。华为OAID获取方式请参考[获取OAID](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/oaid-0000001050783198#section135051412171515)，其他设备厂商广告标识符获取方式请查看对应设备厂商的相关资料。 
