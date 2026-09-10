---
name: document/cn/system-References/message-overview-0000001050130660
title: Overview
uri: https://developer.huawei.com/consumer/cn/doc/system-References/message-overview-0000001050130660
---

# Overview

#### Class Summary

|Class|Description|
|:-------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[BeaconId](https://developer.huawei.com/consumer/cn/doc/development/system-References/beaconid-0000001050130662)|信标设备的ID（通过BLE对外广播，有iBeacon和Eddystone两种格式）。|
|[BeaconId.Builder](https://developer.huawei.com/consumer/cn/doc/development/system-References/beaconid-builder-0000001050130664)|[BeaconId](https://developer.huawei.com/consumer/cn/doc/development/system-References/beaconid-0000001050130662)的构造类。|
|[GetCallback](https://developer.huawei.com/consumer/cn/doc/development/system-References/getcallback-0000001050132635)|影响信标消息获取[get](https://developer.huawei.com/consumer/cn/doc/development/system-References/messageengine-0000001050130686#ZH-CN_TOPIC_0000001245914897__p5732mcpsimp)过程的关键事件回调函数。|
|[GetOption](https://developer.huawei.com/consumer/cn/doc/development/system-References/getoption-0000001050130682)|信标消息获取[get](https://developer.huawei.com/consumer/cn/doc/development/system-References/messageengine-0000001050130686#ZH-CN_TOPIC_0000001245914897__p5732mcpsimp)过程的自定义参数选项。它包含消息获取策略（[Policy](https://developer.huawei.com/consumer/cn/doc/development/system-References/message-policy-0000001050132625)）、消息过滤条件（[MessagePicker](https://developer.huawei.com/consumer/cn/doc/development/system-References/messagepicker-0000001050130666)）、[get](https://developer.huawei.com/consumer/cn/doc/development/system-References/messageengine-0000001050130686#ZH-CN_TOPIC_0000001245914897__p5732mcpsimp)的关键事件回调（[GetCallback](https://developer.huawei.com/consumer/cn/doc/development/system-References/getcallback-0000001050132635)）。|
|[GetOption.Builder](https://developer.huawei.com/consumer/cn/doc/development/system-References/get-builder-0000001050130684)|[GetOption](https://developer.huawei.com/consumer/cn/doc/development/system-References/getoption-0000001050130682)的构造类。|
|[IBeaconInfo](https://developer.huawei.com/consumer/cn/doc/development/system-References/message-ibeaconinfo-0000001463849188)|Beacon信标设备的iBeacon类型。|
|[Message](https://developer.huawei.com/consumer/cn/doc/development/system-References/message-message-0000001050132615)|近场设备间共享的消息类。一条消息由类型、命名空间和消息内容组成。|
|[MessageEngine](https://developer.huawei.com/consumer/cn/doc/development/system-References/messageengine-0000001050130686)|Nearby Message功能的API接口类。可以给您的应用提供近场设备间消息发布、消息获取和信标设备的发现及其附件消息获取功能。|
|[MessageHandler](https://developer.huawei.com/consumer/cn/doc/development/system-References/messagehandler-0000001050132619)|目标消息的回调处理类。在目标消息发现、目标消息丢失及目标消息关联设备的蓝牙信号发生变化或距离发生变化时触发。|
|[MessageOption](https://developer.huawei.com/consumer/cn/doc/development/system-References/messageoption-0000001050130670)|Nearby Message API的参数配置类。|
|[MessageOption.Builder](https://developer.huawei.com/consumer/cn/doc/development/system-References/mesoption-builder-0000001050130672)|[MessageOption](https://developer.huawei.com/consumer/cn/doc/development/system-References/messageoption-0000001050130670)的构造类。|
|[MessagePicker](https://developer.huawei.com/consumer/cn/doc/development/system-References/messagepicker-0000001050130666)|定义消息过滤条件，在获取消息[get](https://developer.huawei.com/consumer/cn/doc/development/system-References/messageengine-0000001050130686#ZH-CN_TOPIC_0000001245914897__p5732mcpsimp)过程中，只有符合此条件定义的目标消息会触发[MessageHandler](https://developer.huawei.com/consumer/cn/doc/development/system-References/messagehandler-0000001050132619)中的函数回调。|
|[MessagePicker.Builder](https://developer.huawei.com/consumer/cn/doc/development/system-References/mespicker-builder-0000001050130668)|[MessagePicker](https://developer.huawei.com/consumer/cn/doc/development/system-References/messagepicker-0000001050130666)的构造类。|
|[NamespaceType](https://developer.huawei.com/consumer/cn/doc/development/system-References/message-namespacetype-0000001514688613)|消息过滤条件的域名和类型。|
|[Policy](https://developer.huawei.com/consumer/cn/doc/development/system-References/message-policy-0000001050132625)|定义了一系列消息发布[put](https://developer.huawei.com/consumer/cn/doc/development/system-References/messageengine-0000001050130686#ZH-CN_TOPIC_0000001245914897__p5691mcpsimp)或消息获取[get](https://developer.huawei.com/consumer/cn/doc/development/system-References/messageengine-0000001050130686#ZH-CN_TOPIC_0000001245914897__p5732mcpsimp)的策略。策略由发现模式（FindingMode）和生存时间值（TTL，Time To Live）等组成。|
|[Policy.Builder](https://developer.huawei.com/consumer/cn/doc/development/system-References/policy-builder-0000001050132627)|[Policy](https://developer.huawei.com/consumer/cn/doc/development/system-References/message-policy-0000001050132625)的构造类。|
|[PutCallback](https://developer.huawei.com/consumer/cn/doc/development/system-References/putcallback-0000001050132631)|影响消息发布[put](https://developer.huawei.com/consumer/cn/doc/development/system-References/messageengine-0000001050130686#ZH-CN_TOPIC_0000001245914897__p5691mcpsimp)过程的关键事件回调函数。|
|[PutOption](https://developer.huawei.com/consumer/cn/doc/development/system-References/putoption-0000001050130678)|消息发布[put](https://developer.huawei.com/consumer/cn/doc/development/system-References/messageengine-0000001050130686#ZH-CN_TOPIC_0000001245914897__p5691mcpsimp)过程的自定义参数选项。它包含消息发布策略（[Policy](https://developer.huawei.com/consumer/cn/doc/development/system-References/message-policy-0000001050132625)）、[put](https://developer.huawei.com/consumer/cn/doc/development/system-References/messageengine-0000001050130686#ZH-CN_TOPIC_0000001245914897__p5691mcpsimp)关键事件回调（[PutCallback](https://developer.huawei.com/consumer/cn/doc/development/system-References/putcallback-0000001050132631)）。|
|[PutOption.Builder](https://developer.huawei.com/consumer/cn/doc/development/system-References/putoption-builder-0000001050130680)|[PutOption](https://developer.huawei.com/consumer/cn/doc/development/system-References/putoption-0000001050130678)的构造类。|
|[StatusCallback](https://developer.huawei.com/consumer/cn/doc/development/system-References/statuscallback-0000001050130674)|Nearby Message API运行环境条件状态变化时的回调处理类。在使用Nearby Message API所需运行环境条件（如蓝牙开关、网络连接状态）变化时回调。|
|[UidInstance](https://developer.huawei.com/consumer/cn/doc/development/system-References/message--0000001514568705)|Beacon信标设备的Eddystone类型。|

#### Annotation Summary

|Annotation|Description|
|:-------------------------------------------------------------------------------------------------------------------|:-----------------------------|
|[Permission](https://developer.huawei.com/consumer/cn/doc/development/system-References/permission-0000001050132623)|定义使用Nearby Message API需要的权限类型。|

