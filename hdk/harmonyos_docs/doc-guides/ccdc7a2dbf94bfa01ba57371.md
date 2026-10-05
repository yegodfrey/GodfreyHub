---
name: document/cn/doc-guides/ets-get-started-0000001412054073
title: 初识ArkTS语言
uri: https://developer.huawei.com/consumer/cn/doc/doc-guides/ets-get-started-0000001412054073
source: portal
---

# 初识ArkTS语言

ArkTS是HarmonyOS优选的主力应用开发语言。ArkTS基于[TypeScript](https://docs.microsoft.com/zh-cn/learn/modules/typescript-get-started/)（简称TS）语言扩展而来，是TS的超集。

     * ArkTS继承了TS的所有特性。
     * 当前，ArkTS在TS基础上主要扩展了[声明式UI](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/ets-basic-ui-description-0000001366633884)能力，让开发者以更简洁、更自然的方式开发高性能应用。

当前扩展的声明式UI包括如下特性。
       * [基本UI描述](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/ets-basic-ui-description-0000001366633884)：ArkTS定义了各种装饰器、自定义组件、UI描述机制，再配合UI开发框架中的UI内置组件、事件方法、属性方法等共同构成了UI开发的主体。
       * [状态管理](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/ets-state-mgmt-concepts-0000001169868220)：ArkTS提供了多维度的状态管理机制，在UI开发框架中，和UI相关联的数据，不仅可以在组件内使用，还可以在不同组件层级间传递，比如父子组件之间、爷孙组件之间，也可以是全局范围内的传递，还可以是跨设备传递。另外，从数据的传递形式来看，可分为只读的单向传递和可变更的双向传递。开发者可以灵活的利用这些能力来实现数据和 UI 的联动。
       * [动态构建UI元素](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/ets-dynamic-ui-element-building-0000001366154244)：ArkTS提供了动态构建UI元素的能力，不仅可自定义组件内部的UI结构，还可复用组件样式，扩展原生组件。
       * [渲染控制](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/ets-rendering-control-0000001149698611)：ArkTS提供了渲染控制的能力。条件渲染可根据应用的不同状态，渲染对应状态下的部分内容。循环渲染可从数据源中迭代获取数据，并在每次迭代过程中创建相应的组件。
       * [使用限制与扩展](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/ets-restriction-and-extension-0000001417392049)：ArkTS在使用过程中存在限制与约束，同时也扩展了双向绑定等能力。

     * 未来，ArkTS会结合应用开发/运行的需求持续演进，逐步提供并行和并发能力增强、类型系统增强、分布式开发范式等更多特性。

下面我们以一个具体的示例来说明ArkTS的基本组成。如下图所示的代码示例，UI界面包含两段文本、一条分割线和一个按钮，当开发者点击按钮时，文本内容会从'Hello World'变为‘Hello ArkUI’。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113907.47536502436016487113469132954611:50001231000000:2800:6AF5CCB4F010F1CEB420C46D0A3A2F816C786E62CF2AA01C881745FF5AA657C1.png?needInitFileName=true?needInitFileName=true)

这个示例中所包含的ArkTS声明式开发范式的基本组成说明如下：

     * 装饰器：用来装饰类、结构体、方法以及变量，赋予其特殊的含义，如上述示例中 @Entry 、 @Component 、 @State 都是装饰器。具体而言， @Component 表示这是个自定义组件； @Entry 则表示这是个入口组件； @State 表示组件中的状态变量，这个状态变化会引起 UI 变更。
     * 自定义组件：可复用的 UI 单元，可组合其它组件，如上述被 @Component 装饰的 struct Hello。
     * UI描述：声明式的方法来描述UI的结构，例如build()方法中的代码块。
     * 内置组件：ArkTS中默认内置的基本组件和布局组件，开发者可以直接调用，如Column、Text、Divider、Button等。
     * 属性方法：用于组件属性的配置，统一通过属性方法进行设置，如fontSize()、width()、height()、color() 等，可通过链式调用的方式设置多项属性。
     * 事件方法：用于添加组件对事件的响应逻辑，统一通过事件方法进行设置，如跟随在Button后面的onClick()。
