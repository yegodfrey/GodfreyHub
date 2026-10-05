---
name: document/cn/DevicePartner-Guides/connection-specifications-0000002421687668
title: 连接规范
uri: https://developer.huawei.com/consumer/cn/doc/DevicePartner-Guides/connection-specifications-0000002421687668
source: portal
---

# 连接规范

鸿蒙智联套餐包按照连接协议分为 Wi-Fi 、蓝牙BLE、蓝牙Mesh、星闪SLE、PLC、4G/5G蜂窝通信等。该规范主要用于定义鸿蒙智联生态设备连接能力。

#### 优先使用鸿蒙推荐模组

鸿蒙智联设备连设备接入支持优先推荐使用鸿蒙推荐模组接入，通过推荐模组接入可以确保连接稳定性以及接入效率。

#### SDK版本使用最新版本

鸿蒙智联Wi-Fi SDK\BLE SDK\BLE Mesh SDK\PLC SDK 厂商集成采用已经发布最新的SDK 版本。

以下规则主要针对原型机认证：

  * 若设备采用鸿蒙推荐模组，则使用鸿蒙推荐模组默认使用配套版本即可。
  * 若设备采用非鸿蒙推荐模组，在DP平台上接入时选择鸿蒙智联SDK 最新版本。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b4/v3/EKJi0fEDRy6KNdR-eJLeBQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T090858Z&HW-CC-Expire=86400&HW-CC-Sign=F3C7189A71157C3C0A1FEDCAD9EE086DC1E0E3284863B6E9C8F8124FB9D6E9B6)

如果产品定义与认证时间过长，认证阶段版本与鸿蒙智联最新发布版本超过2个版本以上则需要单独审视。

产品升级认证以及系列化认证如果SDK没有重大问题可以继承原鸿蒙SDK 版本。

#### 生态设备配网窗口时长要求

鸿蒙智联生态设备如果有配网需求则默认配网窗口时长为10分钟。设备配网窗口时长为了避免设备被周边用户给接入，如果设备含有Pin 码或者配网过程中需要设备按键操作，则可以不强制要求配网时长为10分钟限制。

例如：摄像头配网需要用户输入设备唯一PIN码或者手动操作，则可以不设置配网时长10分钟，鸿蒙智联软件侧支持厂商设置配网协商时长。

#### 设备支持自动回连

鸿蒙智联设备连接端口后支持自动回连，回连时长小于2秒 。

  * Wi-Fi 连接异常后支持一直尝试自动回连操作，如果网络参数正确回连时长小于2秒。
  * 蓝牙设备断开后发起蓝牙广播报文，支持手机自动回连蓝牙设备。



#### 采用直连云方式接入

鸿蒙智联设备接入采用套餐包方案接入（详情见表1），对应的套餐包主要分为以下几种：

  1. Wi-Fi、Wi-Fi Combo设备采用套餐一接入。
  2. BLE 设备建议采用套餐四接入。
  3. 4G/5G蜂窝通信建议采用套餐五蜂窝通信套餐。
  4. BLE Mesh 设备建议采用套餐六蓝牙Mesh 套餐。
  5. PLC 建议采用套餐九， PLC 通信套餐。



套餐类型 | 套餐包 | 解决方案描述  
---|---|---  
直连云套餐 | HarmonyOS Connect WiFi直连套餐 | 基于HarmonyOS Connect服务包、OpenHarmony操作系统、Wi-Fi/Wi-Fi+BLE Combo /Wi-Fi+BLE+SLE Combo模组进行产品开发，并通过Wi-Fi直连实现全场景设备间的互联互通,支持无WIFI连接自动切换BLE连接的双连双控能力。让消费者畅享极简连接、万能卡片、极简交互的超级终端体验。  
HarmonyOS Connect WiFi透传套餐 | 基于HarmonyOS Connect基础包、Wi-Fi/Combo模组进行产品开发，并通过Wi-Fi直连实现全场景设备间的互联互通。让消费者畅享极简连接、万能卡片、极简交互的超级终端体验。  
HarmonyOS Connect 蓝牙套餐 | 基于华为蓝牙\星闪应用层开放协议规范，蓝牙BLE芯片、SLE芯片、BLE+SLE模组进行产品开发。通常用于设备通过手机进行代理注册，支持设备本地控制的场景。  
HarmonyOS Connect 蜂窝通信套餐 | 基于HarmonyOS Connect服务包、OpenHarmony操作系统、Wi-Fi/Combo模组进行产品开发，并通过Wi-Fi直连实现全场景设备间的互联互通。让消费者畅享万能卡片、极简交互的超级终端体验。  
HarmonyOS Connect 蓝牙Mesh套餐 | 基于华为BLE Mesh协议规范、非OpenHarmony操作系统、蓝牙BLE芯片进行产品开发。通常用于BLE Mesh设备内存较小（256KB以下）、无法安装操作系统的场景。  
HarmonyOS Connect PLC通信套餐 | 基于华为PLC协议规范、非OpenHarmony操作系统、PLC芯片进行产品开发。需要和PLC网关配合使用，由网关主动扫描添加，并通过网关连接和管理设备。  
云云对接套餐 | HarmonyOS Connect 云云对接套餐 | 【注意】该方案无法取得鸿蒙智联认证。配网通过厂商三方APP完成，并注册到三方云，通过华为账号和厂商三方账号绑定，完成云侧数据对接，设备注册信息通过云云通道同步到华为云，完成设备在华为云设备注册，并加载到智慧生活，可进行设备状态查询和控制。  
  
#### 配网按键定义

智能家居的设备形态十分丰富，无法以一个唯一的配网按键方案进行约束。通过统计分析当前已有的设备形态以及配网方案，对鸿蒙智联生态的产品的配网触发方式进行规范化，使鸿蒙智联的产品体验趋于一致。如果不遵循该规范需要联系华为侧产品经理进行例外评审。

#### [h2]**桌面及落地型的设备**

定义：使用单独的联网按键，且按键需要在面板表面(正面、顶面、两侧)。

按键操作：按下按键，触发配网。长按按键5秒，可以重新配网(和Reset按键不冲突)。

按键大小：按键大小根据ID可以自行设计，但建议小于其他功能按键。

提示方式：LED灯提示，LED灯的定义详见后续章节；若产品同时带有发声装置，则在1.5秒内均匀响三声，每次响声0.25秒。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a1/v3/UZ3VNi65T6ueDf23v8wOQA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T090858Z&HW-CC-Expire=86400&HW-CC-Sign=F062DDD0595028D505CE47A2DCF5ED886B7897AB7946AE4DC42427DDC52A35E6)

设备伸手可接触的到，体积足以放下按键。

#### [h2]**遥控类器类**

定义：使用单独的联网按键。

按键操作：按下按键，触发配网。长按按键3秒，可以重新配网(和Reset按键不冲突)。

按键大小：按键大小根据ID可以自行设计，但建议小于其他功能按键。

提示方式：遥控器上LED灯提示，LED灯的定义详见后续章节；若产品同时带有发声装置，则在1.5秒内均匀响三声，每次响声0.25秒。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/85/v3/BHhSXE0VS1mj1sOSg-GDZw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T090858Z&HW-CC-Expire=86400&HW-CC-Sign=AE639AA05153DE9ADDE2929DDE2E884910E76CCED2BE0C79DC3CB6524BA8555B)

仅壁挂类的产品(如空调)，桌面及落地型产品不使用遥控器触发配网。

#### [h2]**挂顶非接触类的设备**

定义：使用开关的次数组合来触发配网。

开关操作定义：10秒内连续按开关5次，每次开和关的时间为1~2秒，第5次开的时候，触发配网。

提示方式：照明灯闪烁2次，闪烁的频率为1Hz。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/87/v3/AxAUS9ImTu21gSlpQLaiBA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T090858Z&HW-CC-Expire=86400&HW-CC-Sign=FBA018DDF209F326F4CE63E17EB6E679749D61F894FED229332E758849EB6C95)

灯带、顶灯等伸手无法接触到且无遥控器的设备。

#### [h2]**传感器类**

体积太小，仅能放下孔式Reset按键的产品。

方案：重新拔插电池触发设备重新配网。

#### [h2]**入墙类产品**

  * 方案一（推荐）

定义：使用单独的联网按键，且按键需要在面板表面(正面、顶面、两侧)。

按键操作：按下按键，触发配网。长按按键5秒，可以重新配网(和Reset按键不冲突)。

按键大小：按键大小根据ID可以自行设计，但建议小于其他功能按键。

提示方式：LED灯提示，LED灯的定义详见后续章节；若产品同时带有发声装置，则在1.5秒内均匀响三声，每次响声0.25秒。

  * 方案二

定义：使用单独的联网按键，按键需要揭开面板，揭开面板后采用隐藏式按键触发配网。

按键操作：按下按键，触发配网。长按按键5秒，可以重新配网(和Reset按键不冲突)。

提示方式：LED灯提示，LED灯的定义详见后续章节；若产品同时带有发声装置，则在1.5秒内均匀响三声，每次响声0.25秒。

  * 方案三



定义：10秒内连续按开关5次，每次开和关的时间为1~2秒，第5次开的时候，触发配网。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/25/v3/9dfREjwCRYepx9V5jNOUpQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T090858Z&HW-CC-Expire=86400&HW-CC-Sign=64D2461C8BA0B691AA618A2249E541199D3A7517B7D38305ADB23A538CC4E78E)

开关、插座等，为了美观，没有在面板上放置按键，需要揭开面板。

#### [h2]**门锁类**

  * 方案一

定义：使用组合的按键，按照一定的顺序触发配网状态。

按键操作：有一个独立的设置按钮，按设置按钮后，输入密码进行验证；验证成功后，连续按9，9进入配网状态。

提示方式：LED灯提示，LED灯的定义详见后续章节；若产品同时带有发声装置，则在1.5秒内均匀响三声，每次响声0.25秒。

  * 方案二



定义：解锁后进去门锁触屏界面，在设置栏点击进入配网状态。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/78/v3/ja4rzgzsThuvsdyS_V_cOQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T090858Z&HW-CC-Expire=86400&HW-CC-Sign=2CFBCD876C998297E60F556B267EFB12E975E17F1123D279B5FE5D4AD9835C32)

需要验证密码后，通过按键顺序触发配网，不同的厂商配网的按键顺序也不同。

#### [h2]设备配网触发不依赖其他设备或者工具

设备触发配网遵循简单易操作原则，支持用户同设备交互完成，不依赖第三方工具或者设备。

例如：设备依赖充电器插入才能触发配网，该需求依赖充电器，不建议采用该设计。

#### [h2]设备闪灯规范

智能家居设备和传统家电设备的重要区别就在于可以联网，因此设备的联网状态指示很重要。为了让全屋智能生态产品有统一的体验，此处对各种状态的LED显示进行定义。

该条规则对鸿蒙智联产品为强制。

双色灯（建议使用双色灯）：建议橙红色指示灯和白色指示灯。

状态 | LED显示  
---|---  
启动过程 | 灯灭  
待配置网状态 | 橙色灯闪烁（建议采用亮0.5s，灭0.5s）  
配网关闭状态 | 灯灭  
配网过程中 | 白色灯闪烁（建议采用亮0.25s，灭0.25s）  
联网成功状态/在线状态 | 白色灯长亮  
离线状态 | 橙色灯长亮  
  
单色灯

状态 | LED显示  
---|---  
启动过程 | 灯灭  
待配置网状态 | 慢闪（建议亮0.5s，灭0.5s）  
配网关闭状态 | 灯灭  
配网过程中 | 快闪(建议亮0.25s，灭0.25s)  
联网成功状态/在线状态 | 长亮  
离线状态 | 慢闪（建议亮0.5s，灭0.5s）  
  
单色灯建议为白色。

#### 支持NFC碰一碰配网

鸿蒙智联生态设备支持NFC 碰一碰配网，默认不需要用户任何操作即可发起配网，不需要手动触发进入配网状态即让设备进入配网状态。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4c/v3/djSnQE0HRL-PJzv5cTNbcQ/notice_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T090858Z&HW-CC-Expire=86400&HW-CC-Sign=14A5AD52E6151797D7C5915F8BF48BB618F68A8E571A2B756CDFA4A44C691D67)

该方案依赖设备采用蓝牙+WiFi Combo模组才支持。
