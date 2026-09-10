---
name: cangjie-guides/cj-common-event-publish
title: 发布公共事件
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-common-event-publish
nodePath: 系统 / 基础功能 / Basic Services Kit（基础服务） / 进程线程通信 / 使用公共事件进行进程间通信 / 发布公共事件
---

# 发布公共事件

#### 场景介绍

当需要发布某个自定义公共事件时，可以通过[publish()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-common_event_manager#static-func-publishstring-commoneventpublishdata)方法发布事件。发布的公共事件可以携带数据，供订阅者解析并进行下一步处理。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d1/v3/ggeM3yl0R_6BbheoigqX0A/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111613Z&HW-CC-Expire=86400&HW-CC-Sign=EAC209152A19F2827BB4D1309FA59015DF6029F38E76723D75E6F5BFDEE7FABE)

已发出的粘性公共事件后来订阅者也可以接收到，其他公共事件都需要先订阅再接收，订阅参考[公共事件订阅章节](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-common-event-subscription)。

#### 接口说明

详细接口请参见[接口文档](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-common_event_manager#static-func-publishstring-commoneventpublishdata)。

接口名 | 接口描述  
---|---  
publish(event: String, options!: CommonEventPublishData = CommonEventPublishData()): Unit | 指定发布信息并发布公共事件。  
  
#### 发布不携带信息的公共事件

不携带信息的公共事件，只能发布无序公共事件。

  1. 导入模块。
         
         import kit.BasicServicesKit.*

  2. 传入需要发布的事件名称和回调函数，发布事件。
         
         // 发布公共事件，其中的event字段需要替换为实际的事件名称。
         let support1 = Support.COMMON_EVENT_SCREEN_ON
         CommonEventManager.publish(support1)




#### 发布携带信息的公共事件

携带信息的公共事件，可以发布为无序公共事件、有序公共事件和粘性事件，可以通过参数[CommonEventPublishData](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-common_event_publish_data#class-commoneventpublishdata)的isOrdered、isSticky的字段进行设置。

  1. 导入模块。
         
         import kit.BasicServicesKit.*
         import std.collection.HashMap

  2. 构建需要发布的公共事件信息。
         
         // 公共事件相关信息
         let pData = CommonEventPublishData(
            bundleName: "com.example.myapplication",
            data: "newbee",
            code: 123321,
            subscriberPermissions: Array<String>(),
            isOrdered: false,
            isSticky: false,
            parameters: HashMap<String, CommonEventValueType>()
         )

  3. 传入需要发布的事件名称、需要发布的指定信息和回调函数，发布事件。
         
         // 发布公共事件，其中的event字段需要替换为实际的事件名称
         let support1 = Support.COMMON_EVENT_SCREEN_ON
         CommonEventManager.publish(support1, options: pData)



