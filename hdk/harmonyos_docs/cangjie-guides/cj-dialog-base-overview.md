---
name: cangjie-guides/cj-dialog-base-overview
title: 弹出框概述
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-dialog-base-overview
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 使用弹窗 / 弹出框（Dialog） / 弹出框概述
---

# 弹出框概述  
  
弹出框是一种模态窗口，通常用于在保持当前上下文环境的同时，临时展示用户需关注的信息或待处理的操作。用户需在模态弹出框内完成相关交互任务之后，才能退出模态模式。弹出框可以不与任何组件绑定，其内容通常由多种组件组成，如文本、列表、输入框、图片等，以实现布局。ArkUI当前提供了**固定样式** 和**自定义** 两类弹出框组件。

  * **自定义弹出框：** 开发者需要根据使用场景，传入自定义组件填充在弹出框中实现自定义的弹出框内容。主要包括基础自定义弹出框 (CustomDialog)、不依赖UI组件的自定义弹出框 (openCustomDialog)。

  * **固定样式弹出框：** 开发者可使用固定样式弹出框，指定需要显示的文本内容和按钮操作，完成简单的交互效果。主要包括警告弹窗 (AlertDialog)、列表选择弹窗 (ActionSheet)、对话框 (showDialog)、操作菜单 (showActionMenu)。




#### 使用场景

名称 | 描述  
---|---  
[不依赖UI组件的自定义弹出框 (openCustomDialog)](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-uicontext-custom-dialog) | 当用户需要在自定义弹出框内动态更新弹出框属性时使用。  
[基础自定义弹出框 (CustomDialog)](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-common-components-custom-dialog) | 当用户需要自定义弹出框内的组件和内容时使用。  
[警告弹窗 (AlertDialog)](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-fixes-style-dialog#警告弹窗alertdialog) | 固定样式，通常用来展示用户当前需要或必须关注的信息或操作。如用户操作一个敏感行为时响应一个二次确认的弹出框。  
[列表选择弹窗 (ActionSheet)](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-fixes-style-dialog#列表选择弹窗actionsheet) | 固定样式，当用户需要关注或确认的信息存在列表选择时使用。  
[对话框 (showDialog)](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-fixes-style-dialog#对话框showdialog) | 固定样式，当用户需要处理弹出框响应后的异步返回结果时调用。  
[操作菜单 (showActionMenu)](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-fixes-style-dialog#操作菜单showactionmenu) | 固定样式，当用户需要处理操作菜单响应后的异步返回结果时调用。
