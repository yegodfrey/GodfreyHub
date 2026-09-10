---
name: cangjie-guides/cj-common-events-distribute
title: 事件分发
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-common-events-distribute
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 支持交互事件 / 使用通用事件 / 事件分发
---

# 事件分发

#### 概述

事件分发是指ArkUI收到用户操作生成的触控事件，通过触摸测试，将触控事件分发至各个组件形成事件的过程。

触控事件是触摸测试的输入，根据用户操作方式的不同，可以划分为Touch类触控事件和Mouse类触控事件。

  * Touch类触控事件指触摸生成的触控事件，输入源包含：finger（手指在屏幕滑动）、pen（手写笔在屏幕滑动）、mouse（鼠标操作）、touchpad（触控板操作），可以触发触摸事件、点击事件、拖拽事件和手势事件。

  * Mouse类触控事件指鼠标操作生成的触控事件，输入源包含：mouse（鼠标操作）、touchpad（触控板操作）、joystick（手柄操作），可以触发触摸事件、点击事件、拖拽事件、手势事件和鼠标事件。




不论是Touch类触控事件还是Mouse类触控事件，最后触发的事件均是通过触摸测试决定最终所分发到的组件。触摸测试决定了ArkUI事件响应链生成、触控事件分发以及组件绑定事件的触发。

#### 触摸测试

触摸测试是指当ArkUI收到了Touch类触控事件或者Mouse类触控事件的起始事件（如手指或者鼠标光标按下时生成的事件），基于所收到的事件的坐标，进行组件响应区域的测试判定并收集事件响应链的过程。

开发者可以通过设置以下属性影响触摸测试流程：

  * hitTestBehavior：触摸测试控制

  * interceptTouch：事件自定义拦截

  * responseRegion：触摸热区设置

  * enabled：禁用控制

  * 安全组件

  * 其他属性设置：透明度/组件下线




#### [h2]触摸测试基本流程

触摸测试的基本流程如下：接收到起始事件后，系统将自上而下、自右向左遍历组件树，收集每个组件上绑定的手势和事件，然后将这些信息逐级向上冒泡至父组件进行整合，最终构建完整的事件响应链。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b6/v3/wLIsU4sqRyKa2A6dpLn05w/zh-cn_image_0000002743197691.png?HW-CC-KV=V1&HW-CC-Date=20260908T090121Z&HW-CC-Expire=86400&HW-CC-Sign=94C180F923C092F6C26777B1958E1B0A41554257954F98B958F56653F39EB95D)

如图所示，当起始事件被分发至组件时，组件会收集自身绑定的手势与事件，随后将收集结果传递给父组件，直至达到根节点。若组件透明、已从组件树中移除，或事件坐标不在组件响应热区范围内，将不会触发收集过程，父组件接收的反馈为空。除此之外，所有组件均会执行手势与事件的收集，并将结果反馈给父组件。

#### [h2]触摸测试控制

开发者可以通过配置触摸测试控制，来实现阻塞组件自身或其他组件的触摸测试。

  * HitTestMode.Default：默认不配hitTestBehavior属性的效果，自身如果命中会阻塞兄弟组件，但是不阻塞子组件。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/25/v3/TxfBgFERTlONWPfuA6dOWQ/zh-cn_image_0000002713398810.png?HW-CC-KV=V1&HW-CC-Date=20260908T090121Z&HW-CC-Expire=86400&HW-CC-Sign=0C56C2653B1BBCE70F706CF2E012968FE81DA62063D8B6F18B419615F5DF9643)

  * HitTestMode.None：自身不接收事件，但不会阻塞兄弟组件/子组件继续做触摸测试。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9/v3/RkE4XEA2R5KpL4hHNfLmMg/zh-cn_image_0000002743077741.png?HW-CC-KV=V1&HW-CC-Date=20260908T090121Z&HW-CC-Expire=86400&HW-CC-Sign=50A03444265D8BE1846D3921BBCC832DC4E5D586B8442A93710784156999CCFE)

  * HitTestMode.Block：阻塞子组件的触摸测试，如果自身触摸测试命中，会阻塞兄弟组件及父组件的触摸测试。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/de/v3/yb5o_LuTQoCN-9U44Se-Cw/zh-cn_image_0000002713558780.png?HW-CC-KV=V1&HW-CC-Date=20260908T090121Z&HW-CC-Expire=86400&HW-CC-Sign=FCE4D2AD10A940D57EEEEC08A9080F47357BF71B0F4A857A5028A1FE237F959F)

  * HitTestMode.Transparent：自身进行触摸测试，同时不阻塞兄弟组件及父组件。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3/v3/gVXB5zfYSJO8MsWsESgBjQ/zh-cn_image_0000002743197693.png?HW-CC-KV=V1&HW-CC-Date=20260908T090121Z&HW-CC-Expire=86400&HW-CC-Sign=F6221E0C6261933C08CB015ABD12C854106C7B9EEAF8FA12B3CD6618AEF1F11C)

#### [h2]禁用控制

设置了[禁用控制](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-enable)的组件，组件自身和其子组件不会发起触摸测试过程，会直接返回组件的父组件继续触摸测试。

#### [h2]触摸热区设置

[触摸热区设置](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-touchtarget)会影响触屏/鼠标类的触摸测试。根据触摸测试的基本流程，仅当事件的坐标命中组件的触摸热区时，该组件绑定的手势和事件才会被收集并进入事件响应链。开发者可以通过调整组件的触摸热区来控制触摸测试流程。若触摸热区被设置为0，或定义为不可触控区域，事件将直接回传给父节点，以进行后续的触摸测试。

#### [h2]安全组件

安全组件当前对触摸测试影响：如果有组件的[z序](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-layout-development-stack-layout#z序控制)比安全组件的z序靠前，且遮盖安全组件，则安全组件事件直接返回到父节点继续触摸测试。

#### 事件响应链的收集

事件响应链为触摸测试的结果。ArkUI事件响应链收集，遵循右子树（按组件布局的先后层级）优先的后序遍历。伪代码实现为：
    
    
    ForEach(item,itemGeneratorFunc: {
            node.rbegin(), node.rend() =>
            item.TouchTest()
            })
    node.collectEvent()

事件响应链收集举例：按下图的组件树，hitTestBehavior属性均为默认，用户点按的动作如果发生在组件5上，则最终收集到的响应链，以及先后关系是5，3，1。

因为组件3的hitTestBehavior属性为Default，收集到事件后会阻塞兄弟节点，所以没有收集组件1的左子树。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c9/v3/nZoYLvmqTtarmxRQY64gWQ/zh-cn_image_0000002713398812.png?HW-CC-KV=V1&HW-CC-Date=20260908T090121Z&HW-CC-Expire=86400&HW-CC-Sign=9138526F9E29DC68E42C125C3EE51E4B551BFDE5FFED4FBE644CEA2336C6A7AA)
