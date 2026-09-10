---
name: cangjie-guides/cj-common-event-subscription
title: 动态订阅公共事件
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-common-event-subscription
nodePath: 系统 / 基础功能 / Basic Services Kit（基础服务） / 进程线程通信 / 使用公共事件进行进程间通信 / 动态订阅公共事件
---

# 动态订阅公共事件

#### 场景介绍

动态订阅是指当应用在运行状态时，对某个公共事件进行订阅。在运行期间，如果有订阅的事件发布，那么订阅了这个事件的应用将会收到该事件及其传递的参数。

例如，某应用希望在其运行期间收到电量过低的事件，并根据该事件降低其运行功耗，那么该应用便可动态订阅电量过低事件，收到该事件后关闭一些非必要的任务来降低功耗。

订阅部分系统公共事件需要先[申请权限](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-determine-application-mode)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/56/v3/h_3yLlknR1WlFvLJSrDwUw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111613Z&HW-CC-Expire=86400&HW-CC-Sign=9DC12722B122EC32050DDE290127BE15358BDD69579F9EE5A9C9048249F3FE89)

订阅者对象的生命周期需要接入方管理，不再使用时需主动销毁释放，避免内存泄漏。

#### 接口说明

详细接口见[接口文档](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-common_event_manager)。

接口名 | 接口描述  
---|---  
createSubscriber(subscribeInfo: [CommonEventSubscribeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-common_event_subscribe_info#class-commoneventsubscribeinfo)): [CommonEventSubscriber](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-common_event_subscriber#class-commoneventsubscriber) | 创建订阅者对象。  
subscribe(subscriber: [CommonEventSubscriber](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-common_event_subscriber#class-commoneventsubscriber), callback: ([CommonEventData](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-common_event_data#class-commoneventdata)) -> Unit): Unit | 订阅公共事件。  
  
#### 开发步骤

  1. 导入模块。
         
         import kit.BasicServicesKit.*
         import kit.PerformanceAnalysisKit.Hilog
         import ohos.business_exception.*

  2. 创建订阅者信息，详细的订阅者信息数据类型及包含的参数请见[CommonEventSubscribeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-common_event_subscribe_info#class-commoneventsubscribeinfo)文档介绍。
         
         // 用于保存创建成功的订阅者对象，后续使用其完成订阅及退订的动作
         let subscriber: CommonEventSubscriber
         // 订阅者信息，其中的event字段需要替换为实际的事件名称
         let support1 = Support.COMMON_EVENT_SCREEN_ON
         let events = [support1]
         let subscribeInfo = CommonEventSubscribeInfo(events)

  3. 创建订阅者，保存返回的订阅者对象subscriber，用于执行后续的订阅、退订、接收事件回调等操作。
         
         // 创建订阅者回调
         subscriber = CommonEventManager.createSubscriber(subscribeInfo)

  4. 创建订阅回调函数，订阅回调函数会在接收到事件时触发。订阅回调函数返回的data内包含了公共事件的名称、发布者携带的数据等信息，公共事件数据的详细参数和数据类型请见[CommonEventData](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-common_event_data#class-commoneventdata)文档介绍。
         
         // 订阅公共事件回调
         let callback = {
            a: ?BusinessException, b: ?CommonEventData =>
               Hilog.info(0, "TestCEM", "=======================================")
               Hilog.info(0, "TestCEM", "callback excute success!")
         }
         CommonEventManager.subscribe(subscriber, callback)



