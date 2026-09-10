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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ce/v3/lqklGj6gQxWf_PyOMSY2og/zh-cn_image_0000002701819412.png?HW-CC-KV=V1&HW-CC-Date=20260903T111602Z&HW-CC-Expire=86400&HW-CC-Sign=FCC5B1D7CCC6439122A49375B8F9C96B867EEE06B6C9C9973678DB06EFB39860)

如图所示，当起始事件被分发至组件时，组件会收集自身绑定的手势与事件，随后将收集结果传递给父组件，直至达到根节点。若组件透明、已从组件树中移除，或事件坐标不在组件响应热区范围内，将不会触发收集过程，父组件接收的反馈为空。除此之外，所有组件均会执行手势与事件的收集，并将结果反馈给父组件。

#### [h2]触摸测试控制

开发者可以通过配置触摸测试控制，来实现阻塞组件自身或其他组件的触摸测试。

  * HitTestMode.Default：默认不配hitTestBehavior属性的效果，自身如果命中会阻塞兄弟组件，但是不阻塞子组件。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dd/v3/lJ3yDNK3RyCsXogtYzyh5Q/zh-cn_image_0000002731538693.png?HW-CC-KV=V1&HW-CC-Date=20260903T111602Z&HW-CC-Expire=86400&HW-CC-Sign=9B15656804F16B28E3F7C180B1690DE95D5963D534489E2C04D0B8989BEF2070)

  * HitTestMode.None：自身不接收事件，但不会阻塞兄弟组件/子组件继续做触摸测试。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/19/v3/ZkhNHF2rShiOPYFet6OyLA/zh-cn_image_0000002701659502.png?HW-CC-KV=V1&HW-CC-Date=20260903T111602Z&HW-CC-Expire=86400&HW-CC-Sign=C0F8E773211F66ECFF64D7D969D419291DA69D74C3D482B17C9936ABE9CFBAB6)

  * HitTestMode.Block：阻塞子组件的触摸测试，如果自身触摸测试命中，会阻塞兄弟组件及父组件的触摸测试。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a3/v3/6BSq-U9rQce42nw7ugGN_A/zh-cn_image_0000002731378717.png?HW-CC-KV=V1&HW-CC-Date=20260903T111602Z&HW-CC-Expire=86400&HW-CC-Sign=A918FFE5C489E94155147B476C07E87613BAE4A20479DD8EA20644A0B4E13F40)

  * HitTestMode.Transparent：自身进行触摸测试，同时不阻塞兄弟组件及父组件。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8b/v3/QihHNbH7Tnq7fwYiJPo5dg/zh-cn_image_0000002701819414.png?HW-CC-KV=V1&HW-CC-Date=20260903T111602Z&HW-CC-Expire=86400&HW-CC-Sign=47CB58418BC9A46A36121817F71F8870BC0C0FE2492592EFE165769B63447829)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/86/v3/gn5FnzyuSfm3pxf9AHdUwQ/zh-cn_image_0000002731538695.png?HW-CC-KV=V1&HW-CC-Date=20260903T111602Z&HW-CC-Expire=86400&HW-CC-Sign=605D2910AE46F3B7025BF59EC82C436A642C22DFD6E10CA90908B3446D4115C5)
