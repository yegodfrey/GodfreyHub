---
name: cangjie-guides/cj-common-event-unsubscription
title: 取消动态订阅公共事件
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-common-event-unsubscription
nodePath: 系统 / 基础功能 / Basic Services Kit（基础服务） / 进程线程通信 / 使用公共事件进行进程间通信 / 取消动态订阅公共事件
---

# 取消动态订阅公共事件

#### 场景介绍

动态订阅者完成业务需求后，应主动取消订阅。通过调用[unsubscribe()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-common_event_manager#static-func-unsubscribecommoneventsubscriber)方法，取消订阅事件。

#### 接口说明

接口名 | 接口描述  
---|---  
unsubscribe(subscriber: [CommonEventSubscriber](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-common_event_subscriber#class-commoneventsubscriber)): Unit | 取消订阅公共事件。  
  
#### 开发步骤

  1. 导入模块。
         
         import kit.BasicServicesKit.*

  2. 根据[动态订阅公共事件](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-common-event-subscription)章节的步骤来订阅某个事件。

  3. 调用CommonEvent中的[unsubscribe()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-common_event_manager#static-func-unsubscribecommoneventsubscriber)方法取消订阅某事件。
         
         // subscriber为订阅事件时创建的订阅者对象
         CommonEventManager.unsubscribe(subscriber)



