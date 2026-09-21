---
name: document/cn/harmonyos-references/network-boost-c-files-boost
title: network_boost.h
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-files-boost
---

# network_boost.h

> phone 6.0.2(22)+ | 2in1 6.0.2(22)+ | tablet 6.0.2(22)+

## 概述

声明用于网络加速的API。提供基本的函数、结构体和const定义。

**引用文件：** <NetworkBoostKit/network_boost.h>

**库：** libnetwork_boost.so

**系统能力：** SystemCapability.Communication.NetworkBoost.Core

**起始版本：** 6.0.2(22)

**相关模块：** [NetworkBoost](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-overview)

## 汇总

## 结构体

|名称|描述|
|:-----------------------------------------------------------------------------------------------------------------------------------|:--------|
|struct [NetworkBoost_SceneDesc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-struct-scene_desc)|业务场景描述信息。|

## 枚举

|名称|描述|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------|
|[NetworkBoost_SceneEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-overview#networkboost_sceneevent){ NB_SCENE_EVENT_ENTER = 0, NB_SCENE_EVENT_UPDATE = 1, NB_SCENE_EVENT_LEAVE = 2 }|业务事件枚举。|

## 函数

|名称|描述|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------|
|int32_t [HMS_NetworkBoost_SetSceneDesc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-overview#hms_networkboost_setscenedesc)([NetworkBoost_SceneDesc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/network-boost-c-struct-scene_desc) sceneDesc)|设置业务场景。|

