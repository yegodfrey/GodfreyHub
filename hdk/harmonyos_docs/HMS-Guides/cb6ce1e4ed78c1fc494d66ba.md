---
name: document/cn/HMS-Guides/panorama-introduction
title: 业务简介
uri: https://developer.huawei.com/consumer/cn/doc/HMS-Guides/panorama-introduction
source: portal
---

# 1\. 业务简介

Huawei Panorama Kit（华为全景服务）是华为为开发者提供的全景图片浏览和交互服务。开发者通过SDK集成华为全景服务，可以在Android手机上快速将球形展开的全景图片或柱状全景图片在模拟的三维空间中以可交互的方式展示，给用户带来沉浸感与真实感。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20191216105217.23626675136959543315816158000684:50510526120014:2800:1E71CE5DAB68E24E54009098A9305EF5AE4C8FCE94289BC9214D89CF859A3E4D.png?needInitFileName=true)

Huawei Panorama Kit能够协助开发者通过较小的编码代价，快速实现全景图的浏览及交互，且在能耗及响应时间等指标上都达到业界领先水平。

# 2\. 主要功能

1\. 支持球形展开全景、部分球形展开全景、柱状全景图的三维全景展示；  


2\. 支持JPG、JPEG和PNG格式的全景图片解析及三维全景展示；

3\. 支持全景视频的展示与交互。

4\. 支持全景视角的调整，包括在视窗上直接滑动或通过手机传感器的姿态360度的调整视角；

5\. 支持业界主流全景相机拍摄的球状全景图的三维展示和交互；

6\. 额外扩展API开放能力，返回三维全景图层给调用者，让全景服务能被更加灵活的使用，比如可以在应用内的某个区域展示全景信息，而不是应用外的全屏窗口展示。

# 3\. 工作原理

1\. 开发者通过在APP内集成全景服务SDK，向HMS Core（APK）中的Huawei Panorama Kit发送加载平面图片请求，Huawei Panorama Kit将做基础的图片安全检查。

2\. HUAWEI Panorama Kit将响应APP的请求，对平面图片进行解析、解码、纹理渲染等。

3\. HUAWEI Panorama Kit最终将二维的平面图在模拟的三维空间中展示，同时支持用户在视窗上直接滑动或通过手机的姿态360度调整视角。
