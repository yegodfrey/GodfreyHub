---
name: document/cn/architecture-guides/later_items-0000002301534190
title: 消息稍后处理
uri: https://developer.huawei.com/consumer/cn/doc/architecture-guides/later_items-0000002301534190
---

# 消息稍后处理

## 场景介绍

消息稍后处理是综合办公类应用中的典型场景之一，如用户收到的任务消息当前不能及时处理时，可将消息标记为稍后处理。

本示例主要基于[bindPopup实现气泡弹窗效果](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-modal-transition#使用bindpopup实现气泡弹窗效果)，实现长按文本后弹出自定义菜单，选择将待办的消息添加到待办进行管理。

## 效果预览

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c3/v3/f4IhWNsEQgKCxTpAcOL_Tg/zh-cn_image_0000002520027640.png?HW-CC-KV=V1&HW-CC-Date=20260921T035900Z&HW-CC-Expire=31536000000&HW-CC-Sign=5FA5D8FB295CAB318988DE5B2DA8B251918CBC3604D5CE3EC8130EA2D555B639 "点击放大")

## 实现思路

* 在HomePage首页提供已处理和未处理的待处理事项的数组状态变量，在ItemComp组件中进行使用，@Provide、@Consume搭配进行动态绑定。

  ```ts
  // HomePage.ets
  @Provide('toDoItems') todoItems: ToDoItem[] = []; // 稍后处理的消息内容
  @Provide('toDoItems_finished') todoItemsFinished: ToDoItem[] = []; // 已完成的稍后处理的消息内容
  // ItemComp.ets
  @Consume('toDoItems') toDoItems: ToDoItem[];
  @Consume('toDoItems_finished') todoItemsFinished: ToDoItem[];
  ```

* 在HomePage的aboutToAppear和aboutToDisappear组件生命周期函数中进行数据读取或本地持久化。

  ```ts
  // HomePage.ets
  aboutToAppear(): void {
    let toDoItemsString: string = preferenceUtils.getChangeItemsPreferences();
    let items: ToDoItem[] = toDoItemsString.length > 0 ? JSON.parse(toDoItemsString) : [];
    for (let item of items) {
      if (!item.isDone) {
        this.todoItems.push(new ToDoItem(item.personId, item.img, item.content, item.time, item.isDone));
      } else {
        this.todoItemsFinished.push(new ToDoItem(item.personId, item.img, item.content, item.time, item.isDone));
      }
    }
  }

  aboutToDisappear(): void {
    let todoItemsAll: ToDoItem[] = [...this.todoItems, ...this.todoItemsFinished];
    preferenceUtils.saveChangeItemsPreferences(JSON.stringify(todoItemsAll));
  }
  ```

* 文本绑定[长按手势](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-gesture-events-single-gesture#长按手势longpressgesture)，实现长按后弹出[气泡弹窗](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-modal-transition#使用bindpopup实现气泡弹窗效果)，在builder中自定义菜单选项。

  ```ts
  Text()
    .bindPopup(this.isPopupShow, {
      builder: this.MenuBuilder(),
      placement: Placement.Top,
      autoCancel: true,
      radius: 16
    })
    .gesture(
      LongPressGesture()
        .onAction(() => {
          this.isPopupShow = true;
        })
    )
  ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```ts
├──entry/src/main/ets                         // 代码区
│  ├─common                      
│  │  └──CommonConstants.ets                  // 常量
│  ├──component                     
│  │  ├──CustomRichEditor.ets                 // 输入框组件
│  │  ├──CustomText.ets                       // 消息文本组件
│  │  └──ItemComp.ets                         // 稍后处理项组件
│  ├──database                                 
│  │  └──PreferenceUtils.ets                  // 首选项工具类
│  ├──entryability                             
│  │  └──EntryAbility.ets                     
│  ├──entrybackupability                       
│  │  └──EntryBackupAbility.ets               
│  ├──model                                    
│  │  └──DataModel.ets                        // 数据结构和数据源的封装
│  ├──pages
│  │  ├──ChatContentPage.ets                  // 聊天页面
│  │  └──HomePage.ets                         // 入口首页
│  └──view                  
│     ├──ChatHomeView.ets                     // 好友界面
│     ├──LaterProcessView.ets                 // 稍后处理界面
│     └──MessageTab.ets                       // 消息tab界面
└──entry/src/main/resources                   // 应用资源目录
```

## 参考文档

[模态转场](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-modal-transition)

[单一手势](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-gesture-events-single-gesture)

## 代码下载

[消息稍后处理示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260626163554.66761489075249267710719382635607:50001231000000:2800:926137F6349FDBF1D77B8E547310B91A1F1F40D79E61A73D465CF528A8ACDAFC.zip?needInitFileName=true)

