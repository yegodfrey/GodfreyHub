---
name: document/cn/HMSCore-Guides/glucose-sensor-0000001051004823
title: 血糖仪
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/glucose-sensor-0000001051004823
---

# 血糖仪

为保证良好的用户体验，与运动健康对接的血糖设备应满足以下要求：

* 标准蓝牙血糖设备应支持[GLP](https://www.bluetooth.org/docman/handlers/downloaddoc.ashx?doc_id=248025)协议，符合GLP协议第三章（Glucose Sensor Role Requirements）要求；私有蓝牙协议应实现设备测量 H5 页面开发；非蓝牙设备需要按照插件规则上传三方动态库到华为插件服务器，并实现SDK提供的设备扫描接口并反馈设备信息。

* 用户在第一次连接成功后，血糖设备应该将未上传的数据全部上传，也就是支持历史数据上传。

* 针对蓝牙设备：血糖设备在待机时应停止广播，断开连接；蓝牙广播时应携带Public Device Address；针对非蓝牙设备：血糖设备在待机时应保持连接关闭传输，用户测量时开启连接并进行测量和传输数据。

* 测量结束后，应立即传输数据，并且在数据传输成功后10s内关闭蓝牙并进入待机状态。

* 血糖仪应保证测量结果传输的完整性和原子性。

* 支持保存历史数据的血糖仪，最好支持时钟，以便在脱机状态下能够记录测量时间。

#### 测量协议

GLP（Glucose Sensor Profile）允许用户使用手机从血糖仪获取测量数据。其结构如下：

![](https://media:901788166625642603 "点击放大")  

#### 测量流程

运动健康App 接收到血糖设备蓝牙广播后，主动发起连接。如果连接成功，则开始发现服务流程。接下来发现服务成功之后，血糖设备应至少返回 GLS（UUID：0x1808）这项服务，并设置特征值 GlucoseMeasurement 的 Notification 属性。

![](https://media:901788166625681604 "点击放大")  

#### 特征字段说明

运动健康App 测量血糖时，使用了下列 Service 和 Characteristic。  

|Service / Feature|UUID|Mandatory Field(s)|
|:--------------------------|:-----|:------------------------------------------------|
|Glucose Sensor Service|0x1808|-|
|Glucose Feature|0x2a51|-|
|Record Access Control Point|0x2a52|-|
|Glucose Measurement|0x2a18|Flags + SequenceNumber + Time Stamp +Sensor State|

![](https://media:901788166625713605)  
没有用到 Glucose Measurement Context 特性的原因是运动健康所需要的功能字段已经在 GlucoseMeasurement 特性中被声明，不需要 Glucose Measurement Context 来提供额外的支持字段（比如说 SequenceNumber 等等）。  
