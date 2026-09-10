---
name: cangjie-guides/cj-mirroring-display
title: 使用镜像能力
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-mirroring-display
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 使用镜像能力
---

# 使用镜像能力

#### 概述

为满足不同用户的阅读习惯，ArkUI提供了镜像能力。在特定情况下将显示内容在X轴上进行镜像反转，由从左向右显示变成从右向左显示。

**镜像前** | **镜像后**  
---|---  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/15/v3/Sml2OGr1T-OjreBMPXfHoQ/zh-cn_image_0000002743077771.png?HW-CC-KV=V1&HW-CC-Date=20260908T090122Z&HW-CC-Expire=86400&HW-CC-Sign=90056C7E0695BA1C770D39CE142A46BF06BCC83B645EF7D07AE04B4F392491BE) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/63/v3/RUaWbVHvTXS3EU3hgpF9tw/zh-cn_image_0000002713558810.png?HW-CC-KV=V1&HW-CC-Date=20260908T090122Z&HW-CC-Expire=86400&HW-CC-Sign=6011BF4C2F370038EAB454D3D18E0B3080F4B76E3C1EDC50ABC1606635BA7524)  
  
当组件满足以下任意条件时，镜像能力生效：

  1. 组件的direction属性设置为Direction.Rtl。

  2. 组件的direction属性设置为Direction.Auto，且当前的系统语言（如维吾尔语）的阅读习惯是从右向左。




#### 基本概念

  * LTR：顺序为从左向右。
  * RTL：顺序为从右向左。



#### 使用约束

ArkUI如下能力已默认适配镜像：

**类别** | **名称**  
---|---  
基础组件 | [Swiper](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-swiper)、[Tabs](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-tabs)、[List](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-list)、[Progress](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-information-display-progress)、[TextPicker](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-button-picker-textpicker)、[DatePicker](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-button-picker-datepicker)、[Grid](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-grid)、[Scroll](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-scroll)、[ScrollBar](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-scrollbar)、[AlphabetIndexer](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-information-display-alphabetindexer)、[Stepper](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-stepper)、[SideBarContainer](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-grid-layout-sidebar)、[Navigation](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-navigation)、[Rating](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-button-picker-rating)、[Slider](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-button-picker-slider)、[Toggle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-button-picker-toggle)、[Badge](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-information-display-badge)、[TextInput](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-textinput)、[TextArea](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-textarea)、[Search](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-search)、[Stack](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-stack)、[GridRow](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-grid-layout-gridrow)、[Text](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-text)、[Select](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-button-picker-select)、[Row](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-row)、[Column](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-column)、[Flex](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-flex)、[RelativeContainer](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-relativecontainer)、[ListItemGroup](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-listgroup)  
高级组件 | [Popup](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-popup-and-menu-components-popup)、[Dialog](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-dialog-base-overview)  
通用属性 | [position](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-position)、[markAnchor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-location#func-markanchorlength-length)、[offset](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-layout-development-grid-layout#offset)、[alignRules](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-location#func-alignrulesalignruleoption)、[borderWidth](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-border#func-borderwidthedgewidths)、[borderColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-border#func-bordercolorresourcecolor)、[padding](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-size#func-paddinglength)、[margin](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-size#func-marginlength)  
接口 | [showDialog](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-fixes-style-dialog#对话框showdialog)  
  
但如下三种场景还需要进行适配：

  1. 界面布局、边框设置：关于方向类的通用属性，如果需要支持镜像能力，使用泛化的方向指示词 start/end入参类型替换 left/right、x/y等绝对方向指示词的入参类型，来表示自适应镜像能力。

  2. Canvas组件只有限支持文本绘制的镜像能力。



