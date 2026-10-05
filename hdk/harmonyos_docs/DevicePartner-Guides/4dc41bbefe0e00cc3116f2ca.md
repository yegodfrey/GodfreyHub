---
name: document/cn/DevicePartner-Guides/device-development-ble-specifications-overview-0000001299505952
title: 概述
uri: https://developer.huawei.com/consumer/cn/doc/DevicePartner-Guides/device-development-ble-specifications-overview-0000001299505952
source: portal
---

# 概述  
  
合作伙伴在开发蓝牙BLE设备时，需要严格遵循该规范，以确保设备能够顺利接入HarmonyOS Connect生态。

如无特殊说明，本规范中的“设备”特指蓝牙BLE设备。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/27/v3/1wI46NjqT6mXoImFg71IrA/notice_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T090859Z&HW-CC-Expire=86400&HW-CC-Sign=3ECBE60B2A25EDEB066132BDE6475CC53C8263D42BAF634C9A0543DA916AE7B9)

  * 本规范适用于采用“HarmonyOS Connect极小硬件方案（BLE）”的场景。
  * 本规范中未规定的内容，与标准蓝牙协议规范一致。



#### 网络架构

蓝牙BLE设备支持通过直连模式与网关模式两种方式实现连接控制，如图1所示。

  * **直连模式** （必选）：手机等设备的智慧生活App可以直接连接蓝牙BLE设备，并将获取到的设备信息注册到HarmonyOS Connect云。直连模式只能在一定范围内对蓝牙BLE设备进行连接和控制，不支持远程控制与多设备联动。
  * **网关模式** （可选）：如果希望实现蓝牙BLE设备的远程控制与场景联动，则需要通过蓝牙BLE网关将设备接入网络。此时，用户可以通过手机应用（比如智慧生活App），发送控制指令，经过路由器，再经过网关，控制家中的设备。



**图1** 网络架构示意图  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7b/v3/Fp8jilNuS9S2sYPUA-6FNw/zh-cn_image_0000001528525737.png?HW-CC-KV=V1&HW-CC-Date=20261005T090859Z&HW-CC-Expire=86400&HW-CC-Sign=FD8F5E328B18A4D3969B777F0A45640D18E6A92C782FF2EF207EEFB2B011951E)

如果同时支持上述两种模式，必须确保在不同场景下直连模式与网关模式能够平滑切换，避免对用户体验的影响。例如：

  * 当蓝牙BLE设备通过智慧生活App完成连接和代理注册后，如果家中新增接入蓝牙BLE网关，设备需要支持从直连模式自动切换至网关模式，无需用户恢复出厂设置。
  * 当蓝牙BLE设备接入蓝牙BLE网关后，如果网关下电，设备需要支持从网关模式自动切换至直连模式，重新恢复与手机的连接。



#### 整体流程

设备接入流程主要包括设备发现、设备连接与注册、设备控制等阶段，如图2所示。其中，主控设备可以表示手机（或平板）、蓝牙Mesh网关等设备。

设备升级流程在[升级流程](https://device.harmonyos.com/cn/docs/devicepartner/DevicePartner-Guides/device-development-ble-specifications-upgrade-0000001484661108#section380743212116)中展开详细介绍。

  1. 设备发现：支持通过**蓝牙靠近发现** 、**蓝牙碰一碰、或NFC碰一碰** 的方式来发现设备。
     * 蓝牙靠近发现：遵循[蓝牙广播规范](https://device.harmonyos.com/cn/docs/devicepartner/DevicePartner-Guides/device-development-ble-specifications-advertising-0000001352545729)。
     * 蓝牙碰一碰：遵循[蓝牙广播规范](https://device.harmonyos.com/cn/docs/devicepartner/DevicePartner-Guides/device-development-ble-specifications-advertising-0000001352545729)。
     * NFC碰一碰：遵循[NFC标签认证](https://device.harmonyos.com/cn/docs/devicepartner/DevicePartner-Guides/tag-management-0000001115228042)要求。
  2. 设备连接与注册、以及设备控制：遵循[设备连接控制规范](https://device.harmonyos.com/cn/docs/devicepartner/DevicePartner-Guides/device-development-ble-specifications-control-0000001482432154)。
  3. 设备升级：遵循[设备升级规范](https://device.harmonyos.com/cn/docs/devicepartner/DevicePartner-Guides/device-development-ble-specifications-upgrade-0000001484661108)。



**图2** 设备接入流程  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/91/v3/LhAOD4wJTRCaaSEje2ewUg/zh-cn_image_0000001542890117.png?HW-CC-KV=V1&HW-CC-Date=20261005T090859Z&HW-CC-Expire=86400&HW-CC-Sign=6333BE67FCFC0E024A519C3D21254CE70BC725BD067FD4EE5711286E64B1F1D1)
