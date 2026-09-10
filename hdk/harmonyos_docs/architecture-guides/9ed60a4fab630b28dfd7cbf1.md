---
name: document/cn/architecture-guides/spread_all_text-0000002297066498
title: 人物介绍展开与收起
uri: https://developer.huawei.com/consumer/cn/doc/architecture-guides/spread_all_text-0000002297066498
---

# 人物介绍展开与收起

#### 场景介绍

人物介绍展开与收起是教育类应用中的典型场景之一，如用户需要查看教师简介内容， 可点击展开或收起。

本示例基于[Text](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text)以及[maxLines](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text#maxlines)属性实现点击相应按钮展开或收起人物介绍的功能，也适用于任何文本内容的展开与收起。  

#### 效果预览

![](https://media:101782462930455071 "点击放大")  

#### 实现思路

当点击"展开"时，更改显示文本为"收起"，将maxLines值修改为-1，使得[Text](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text)组件的maxLines属性失效。 当点击"收起"时，更改显示文本为"展开"，将maxLines值修改为原值。

```
Row() {
  Text(this.isSpread ? $r('app.string.collapseText') : $r('app.string.spreadText'));
}
.justifyContent(FlexAlign.End)
.onClick(() => {
  this.isSpread = !this.isSpread;
  this.maxLine = this.maxLine === -1 ? MAX_LINE : -1;
});
```

#### 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。  

#### 工程目录

```
├──entry/src/main/ets                 // 代码区
│  ├──constants
│  │  └──StyleConstants.ets           // 常量
│  ├──entryability
│  │  └──EntryAbility.ets    
│  └──pages
│     └──TeacherIntroductionPage.ets  // 教师介绍页         
└──entry/src/main/resources           // 应用资源目录
```

#### 参考文档

[Text](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text)  

#### 代码下载

[人物介绍展开与收起示例代码](https://media:101782462930532072)  
