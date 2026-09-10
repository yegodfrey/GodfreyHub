---
name: cangjie-guides/cj-modal-overview
title: 绑定模态页面概述
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-modal-overview
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 使用弹窗 / 绑定模态页面 / 绑定模态页面概述
---

# 绑定模态页面概述  
  
模态页面是一种大面板大视图交互式的弹窗。和其他弹窗组件一样，模态页面通常用于在保持当前的上下文环境时，临时展示用户需关注的信息或待处理的操作。相比于其他弹窗组件，模态页面的内容都需要开发者通过自定义组件来填充实现，可展示的视图往往也很大。默认需要用户进行交互才能够退出模态页面。ArkUI当前提供了**半模态** 和**全模态** 两类模态页面组件。

  * **​半模态：** ​开发者可以利用此模态页面实现多形态效果。支持不同宽度设备显示不同样式的半模态页面。允许用户通过侧滑、点击蒙层、点击关闭按钮和下拉等方式来关闭半模态页面。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5e/v3/ICt8KBrVTkCxKVtLmHm9xg/zh-cn_image_0000002731378707.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111601Z&HW-CC-Expire=86400&HW-CC-Sign=4FB040A8C7C4910EDA9E1E84AFAE10CD777AAF4DA5ED6BE58A18F132D77BD46C)

  * **全模态：** ​开发者可以利用此模态页面实现全屏的模态弹窗效果。默认需要侧滑才能关闭。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f4/v3/fXToFXvhTw-bR-rKGinMAw/zh-cn_image_0000002701819404.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111601Z&HW-CC-Expire=86400&HW-CC-Sign=09C402B1FEF14C06A566C0048BF444B9CB7D6C232CF0168500D8572F7707326D)

#### 使用场景

接口 | 使用场景  
---|---  
[bindContentCover](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-contentcover-page) | 用于自定义全屏的模态展示界面，结合转场动画和共享元素动画可实现复杂转场动画效果，如缩略图片点击后查看大图。  
[bindSheet](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-sheet-page) | 用于半模态展示界面，如分享框。
