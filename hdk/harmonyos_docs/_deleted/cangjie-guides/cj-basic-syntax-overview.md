---
name: cangjie-guides/cj-basic-syntax-overview
title: 基本语法概述
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-basic-syntax-overview
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 学习UI范式基本语法 / 基本语法概述
---

# 基本语法概述

在初步了解了仓颉语言之后，本节以一个具体的示例来说明仓颉的基本组成。如下图所示，当开发者点击按钮时，文本内容从“Hello World”变为“Hello Cangjie”。

**图1** 示例效果图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8/v3/_Lv_zMnUTDOn9qrjqzDYvQ/zh-cn_image_0000002731378549.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111556Z&HW-CC-Expire=86400&HW-CC-Sign=F5FDB5616647BD582597505721B85B78FE47AAB9F2ABA9E69A6419E4055CA91D)

本示例中，仓颉的基本组成如下所示。

**图2** 仓颉的基本组成

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/oUr23AkvR3-vHl9JDtdxUg/zh-cn_image_0000002701819246.png?HW-CC-KV=V1&HW-CC-Date=20260903T111556Z&HW-CC-Expire=86400&HW-CC-Sign=C24C21F0CBACA655ED736B669E6A632D61BE2498CAA8D77923B3082903FA4A48)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8f/v3/YI1QacaYTree1VpmksMfcg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111556Z&HW-CC-Expire=86400&HW-CC-Sign=51FED19F7517FE604706ED7C16AC30772D5C56AF87E6181D2DB18AD078E49C1E)

自定义变量不能与基础通用属性/事件名重复。

  * 宏：用于修饰类、结构、方法以及变量，并赋予其特殊的含义。如上述示例中@Entry、@Component和@State都是宏，[@Component](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-create-custom-components#component)表示自定义组件，[@Entry](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-create-custom-components#entry)表示该自定义组件为入口组件，[@State](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-macro-state)表示组件中的状态变量，状态变量变化会触发UI刷新。

  * [UI描述](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-declarative-ui-description)：以声明式的方式来描述UI的结构，例如build()方法中的代码块。

  * [自定义组件](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-create-custom-components)：可复用的UI单元，可组合其他组件，如上述被@Component修饰的class EntryView。

  * 系统组件：ArkUI框架中默认内置的基础和容器组件，可直接被开发者调用，比如示例中的Column、Text、Divider、Button。

  * [属性方法](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attributes)：组件可以通过链式调用配置多项属性，如fontSize()、width()、height()、backgroundColor()等。

  * [事件方法](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-events)：组件可以通过链式调用设置多个事件的响应逻辑，如跟随在Button后面的onClick()。




除此之外，仓颉扩展了多种语法范式来使开发更加便捷：

  * [@Builder](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-macro-builder)/[@BuilderParam](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-macro-builderparam)：特殊的封装UI描述的方法，细粒度的封装和复用UI描述。


