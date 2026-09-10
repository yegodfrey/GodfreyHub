---
name: document/cn/architecture-guides/car_maintenance-0000002404899097
title: 车主信息智能填充
uri: https://developer.huawei.com/consumer/cn/doc/architecture-guides/car_maintenance-0000002404899097
---

# 车主信息智能填充

#### 场景介绍

车主信息智能填充是汽车类应用的高频使用场景之一，如养车时需绑定爱车的车主信息，可直接拉取历史或者华为账号下的个人信息进行自动填充。

本示例基于融合场景服务的[智能填充](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-introduction-to-smart-fill)实现自动填充车主信息，并自动更新华为账号下的历史表单。  

#### 效果预览

![](https://media:201787026020589147 "点击放大")  

#### 具体实现

1. 根据业务需求给TextInput组件配上对应contentType属性，在填表单时即可自动激活智能填充服务。

   ```
   TextInput({ placeholder: $r('app.string.name_placeholder'), text: $$this.userInfo.userName })
   .contentType(ContentType.PERSON_FULL_NAME)
   ```

2. 绑定车主信息时，也可以手动保存历史表单到华为账号下，如果表单已存在还可以自动更新内容。

   ```
   autoFillManager.requestAutoSave(this.getUIContext())
   ```

#### 环境准备

* 本示例基于DevEco Studio 6.1.1 Release版本进行编译运行。
* 本示例基于API Version 24 Release版本进行开发与验证。  

#### 工程目录

```
├──entry/src/main/ets
│  ├──components
│  │  ├──LicensePlateComponent.ets              // 车牌号输入组件
│  │  ├──OwnerInfo.ets                          // 车主信息组件
│  │  └──TitleBar.ets                           // 标题栏组件
│  ├──constants
│  │  └──StyleConstants.ets                     // 样式常量
│  ├──entryability
│  │  └──EntryAbility.ets                       // 样式常量
│  ├──model
│  │  └──OwnerInfoModel.ets                     // 车主信息对象类
│  └──pages
│     └──MainPage.ets                           // 首页
├──entry/src/main/resources                     // 应用资源目录
├──features/vehicleKeyboard/src/main/ets    
│  ├──components
│  │  ├──Keyboard.ets                           // 自定义键盘UI
│  │  └──VehicleInput.ets                       // 车牌输入组件
│  └──constants
│     └──KeyboardConstant.ets                   // 定义键盘常量
└──features/vehicleKeyboard/src/main/resources  // 应用资源目录 
```

#### 参考文档

[智能填充](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-introduction-to-smart-fill)

[TextInput](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-textinput)  

#### 代码下载

[车主信息智能填充示例代码](https://media:201787026020657148)  
