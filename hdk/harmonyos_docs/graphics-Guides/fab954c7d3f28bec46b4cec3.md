---
name: document/cn/graphics-Guides/handle-user-guide-0000001144398359
title: 手柄使用指南
uri: https://developer.huawei.com/consumer/cn/doc/graphics-Guides/handle-user-guide-0000001144398359
---

# 手柄使用指南

## 按键功能详细定义

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220727172206.44366990367638890334422815674819:50530727123725:2800:389C50A2E729D2C27364B2F2524DFB3F165267363880295FE72C9917201DD76D.png?needInitFileName=true?needInitFileName=true) ![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220727172206.75875723277225408618017932630297:50530727123725:2800:651DDADAFFC46C75DEE6C189CC6AA65DDEC10BBBFEB5914248E9E027A0D2D6D0.png?needInitFileName=true?needInitFileName=true)

1. 手柄的上半区是触控面板，支持按键Click及滑动操作。滑动可直接调用华为VR SDK中的API进行判断，用于操控界面滑动或人物行走等功能。Click键点击为确定功能，开发者可将应用中的确认及常用功能键定义为此按键，在应用中不能出现"注视点击"操作。
2. 手柄的正前方为扳机键，也称Trigger键，点击为确定功能，开发者可将应用中的确认及常用功能键定义为此按键，在应用中不能出现"注视点击"操作。
3. 手柄触控面板左下方为返回键，默认长按3秒进入主界面。在三方应用中，要求开发者定义此按键单击弹出是否退出应用的提示，允许用户退出应用。
4. 手柄触控面板右下方的圆圈键单击会直接返回主界面，长按进行方向校准，此时画面焦点方向会被作为正前方，手柄指向方向会被作为手柄正前方。
5. 手柄下半区为音量键，系统保留为调节音量功能，开发者不能自定义该键功能。

## 定位跟踪功能

1. HUAWEI VR的体感手柄包含陀螺仪、加速度计、磁力计，能够实现3自由度的手柄朝向跟踪。
2. 3自由度的手柄朝向追踪可以为开发者提供诸多功能性，手柄朝向用做3D指向，配合Trigger键或触摸板按键可用于菜单操作，手柄的挥动也可用做菜单选择，手柄本身可被设计为手枪，飞镖等。
3. 华为VR SDK Unity插件中的手柄预制件提供模拟6自由度功能， 开发者集成后可以获得更加真实的手部体验。
