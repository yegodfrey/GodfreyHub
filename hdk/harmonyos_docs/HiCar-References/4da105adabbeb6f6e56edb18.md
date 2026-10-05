---
name: document/cn/HiCar-References/call-focus-0000001153460174
title: 通话状态
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-References/call-focus-0000001153460174
---

# 通话状态

## 场景说明

HiCar App默认提供通话服务，可能与车机之间存在通话冲突场景。为解决冲突，车机需要将本地通话服务状态通知到HiCar App。

通话冲突场景解决方案：

* HiCar App在手机侧通话状态发生变化时向车机发送当前通话状态。
* 车机启动进行本地通话时通知HiCar App通话状态不可用，结束通话时通知HiCar App通话状态可用。

## Data Type

504

## 接口版本

1.0

## 接口定义

|参数名称|必选/可选|类型|说明|
|:--------------|:----|:------|:--------------------------------------------------------------------------------------------------------------------|
|callState|必选|int|HiCar App向车机发送的HiCar通话状态： * 0：IDLE，空闲态 * 1：RINGING，来电态 * 2：OFFHOOK，摘机态，拨号或通话中 * 3：WECHAT_ACTIVE，微信通话或拨号中（仅鸿蒙4.x及以下系统）|
|isCallAvailable|必选|boolean|车机向HiCar App发送通话状态是否可用： * true：HiCar通话状态可用 * false：HiCar通话状态不可用|
[**表1**通话状态接口]

## 接口示例

HiCar App在通话状态变化时向车机发送通话状态示例：

```screen
{
    "callState":1
}
```

车机在本地通话结束后向HiCar App发送通话状态可用示例：

```screen
{
    "isCallAvailable":true
}
```

