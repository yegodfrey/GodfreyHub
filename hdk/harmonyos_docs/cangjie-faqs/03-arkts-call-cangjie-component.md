---
name: cangjie-faqs/03-arkts-call-cangjie-component
title: ArkTS与Cangjie混合工程中，如何在ArkTS页面中使用仓颉组件
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/03-arkts-call-cangjie-component
nodePath: FAQ / 跨语言互操作 / ArkTS与Cangjie混合工程中，如何在ArkTS页面中使用仓颉组件
---

# ArkTS与Cangjie混合工程中，如何在ArkTS页面中使用仓颉组件

#### 背景介绍

ArkTS页面可以插入仓颉组件。在混合工程中，所有页面均为ArkTS页面，仓颉UI可作为一个组件被挂载到ArkTS页面上。

#### 实现方式

仓颉侧定义组件，组件用@HybridComponentEntry宏修饰。

ArkTS侧通过CJHybridComponent组件导入仓颉组件，导入时需指定仓颉包名称及组件名称。

#### 操作步骤

  1. 右键单击**src > main > cangjie**目录，选择**New > Cangjie HybridComponent File**，在弹出窗口中填写组件名称，会生成仓颉组件基础架构。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/dPD3A5ytS7O2fM00vsG8Jg/zh-cn_image_0000002689473651.png?HW-CC-KV=V1&HW-CC-Date=20260921T085440Z&HW-CC-Expire=86400&HW-CC-Sign=C7B18A12DCA2C11A5A43653AE04BEABB03DADDA9B9C27B3B7A300F87F4813659)

  2. 创建仓颉组件时可选择是否生成ArkTS封装页面。如果选择生成，将在**src > main > ets > pages**目录下生成封装页面。如果选择不生成，需要手动在其他ArkTS页面中使用CJHybridComponent挂载仓颉组件。

  3. 示例：

仓颉代码
         
         @HybridComponentEntry
         @Component
         class CangjieComponent {
             @State
             var msg: String = "Hello"
         
             public func build() {
                 Column {
                     Text(msg)
                     Button("click to change Text").onClick {
                         => msg = "world"
                     }
                 }
             }
         }

ArkTS代码
         
         import { CJHybridComponent } from '@cangjie/cjhybridcomponent';
         
         @Entry
         @Component
         export struct CangjieComponent {
         
         build() {
             Column() {
                 CJHybridComponent({
                     library: 'ohos_app_cangjie_entry',
                     component: 'CangjieComponent'
                 })
             }
             .height('100%')
             .width('100%')
           }
         }

  4. 调用CangjieComponent组件，点击Click to change Text按钮后，按钮上方文字Hello变为Cangjie




![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f4/v3/LIMyYDleSiWNZESYFlR0rw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085440Z&HW-CC-Expire=86400&HW-CC-Sign=510CEE6DAA06B9835D6B2066345ACFF634BD7E342F88EF766A93D281161F1EEB)

  1. 仓颉与ArkTS的互操作工程创建详情请参见[已有ArkTS语言的项目如何引入仓颉语言](https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/01-cangjie-arkts)
  2. UI互操作内容，详情请参见[混合开发](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-appendix-hybrid)。


