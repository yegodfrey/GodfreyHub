---
name: document/cn/HiCar-Guides/navigation-hop-0000002380251385
title: 导航流转（Beta）
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-Guides/navigation-hop-0000002380251385
---

# 导航流转（Beta）

## 场景说明

HiCar通过开放导航流转的方式，将导航地址的数据传递到车机，车机在正确获取到相关数据后，可以用于车机导航。

导航流转相关的数据格式说明请参考《HUAWEI HiCar SDK API参考》"HiCar App与车机间接口"中[导航流转](https://developer.huawei.com/consumer/cn/doc/HiCar-References/navigation-hop-0000002354948500)部分。

## HiCar支持的导航流转

摇一摇导航流转：在支持地址流转的应用界面，摇一摇手机，识别到当前地址名称后发送给车机。

地图导航流转：在手机地图发起导航后，将目的地信息发送给车机。

剪贴板复制导航流转：将地址复制到手机剪贴板后，将地址信息发送给车机。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/42/v3/wTvJqCEoSnKg5k97F2u4hg/zh-cn_image_0000002380336525.png?HW-CC-KV=V1&HW-CC-Date=20260909T135540Z&HW-CC-Expire=31536000000&HW-CC-Sign=F01FE47661D89CE58BF15A873BD1969B0A9CCBBA67FED3B0B8B3196A6E8AC3F7)

## 开发步骤

1. HiCar App在识别到目的地数据时，向车机发送导航流转数据报文（dataType=542）。手机发送的数据内容示例如下：

   ```screen
   {
       "address":"华为研究所"
       "latitude":30.505311
       "longitude":114.402329
       "hopType":1 // 1: 地图导航 2: 摇一摇导航 3: 剪切板复制导航
       "mapName":1 // 0: 未知 1: 高德 2: 百度 3: 花瓣
       "coordinateType":0 // 0: GCJ02国内坐标编码 1: WGS84国际坐标编码
   }
   ```

2. 车机通过**onDataReceive**接口收到上述数据后，向HiCar App发送响应消息，发送的内容示例如下所示：

   如果车机需要拉起原车导航则回复支持：

   ```screen
   {
       "errorCode":100000
   }
   ```

   如果不需要则回复不支持：

   ```screen
   {
       "errorCode":100003
   }
   ```

> 说明
>
> * 如果车机回复支持，HiCar App将不会再拉起导航应用。
> * 只有地图类型应用导航流转时才会发送经纬度，其他类型应用只会发送地址名称。

