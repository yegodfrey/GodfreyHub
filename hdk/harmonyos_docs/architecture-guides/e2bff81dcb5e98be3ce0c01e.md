---
name: document/cn/architecture-guides/appmask-0000002749819583
title: 应用隐私遮罩失效
uri: https://developer.huawei.com/consumer/cn/doc/architecture-guides/appmask-0000002749819583
---

# 应用隐私遮罩失效

## 场景介绍

应用隐私遮罩失效是金融理财类应用的典型场景之一，如用户在查看账户余额时上滑进入多任务界面，应用需自动遮挡敏感内容防止多任务缩略图泄露隐私。

本示例基于[on('windowStageEvent')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-windowstage#onwindowstageevent9)事件监听叠加[UIAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability)前后台生命周期，通过[foregroundBlurStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-foreground-blur-style)声明式属性实时控制蒙层渲染，实现应用切换到多任务或失焦时隐私内容始终被模糊蒙层遮挡的功能。

## 效果预览

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b9/v3/BC6jys2XSu2Fpnpxiw4WzQ/zh-cn_image_0000002750222641.gif?HW-CC-KV=V1&HW-CC-Date=20260924T062300Z&HW-CC-Expire=31536000000&HW-CC-Sign=51B9A8E0DB571951EA4FADBAF4101B3A9CBD90F54A88E28C68713F2D2BCA42F2 "点击放大")

## 实现思路

1. **全局注册windowStageEvent监听。**

   在EntryAbility的onWindowStageCreate中全局注册一次[on('windowStageEvent')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-windowstage#onwindowstageevent9)监听，将最新的[WindowStageEventType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-e#windowstageeventtype9)写入[AppStorage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-state-management#appstorage)。页面通过@StorageProp响应式读取，无需各自重复注册。全局只注册一次可避免页面生命周期与窗口事件错位。

   ```ts
   // EntryAbility.ets
   const DOMAIN: number = 0x0000;
   const TAG: string = 'AppMask';

   onWindowStageCreate(windowStage: window.WindowStage): void {
     AppStorage.setOrCreate<number>('stageEventType', window.WindowStageEventType.ACTIVE);
     AppStorage.setOrCreate<boolean>('isBackground', false);

     try {
       windowStage.on('windowStageEvent', (data: window.WindowStageEventType) => {
         AppStorage.setOrCreate<number>('stageEventType', data);
       });
     } catch (err) {
       hilog.error(DOMAIN, TAG, 'windowStage.on failed: %{public}s', JSON.stringify(err));
     }

     windowStage.loadContent('pages/Index', (err) => {
       if (err.code) {
         hilog.error(DOMAIN, TAG, 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));
         return;
       }
     });
   }
   ```

2. **叠加Ability前后台状态兜底。**

   [UIAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability)的onBackground和onForeground回调比windowStageEvent更稳定。为防止后台期间windowStageEvent可能出现的跳变状态，可以通过isBackground兜底，后台时一律上蒙层。

   ```ts
   // EntryAbility.ets
   onForeground(): void {
     AppStorage.setOrCreate<boolean>('isBackground', false);
   }

   onBackground(): void {
     AppStorage.setOrCreate<boolean>('isBackground', true);
   }
   ```

3. **页面响应式读取并控制蒙层。**

   页面通过@StorageProp响应式读取全局状态，shouldShowMask()方法判断是否上蒙层：isBackground为真时一律上蒙层；前台时仅PAUSED或INACTIVE上蒙层。[foregroundBlurStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-foreground-blur-style)是ArkUI声明式属性，在上滑瞬间触发即渲染，早于系统截取多任务缩略图，多任务中可见模糊蒙层。

   ```ts
   // Index.ets
   @StorageProp('stageEventType') stageEvent: number = window.WindowStageEventType.ACTIVE;
   @StorageProp('isBackground') isBackground: boolean = false;

   private shouldShowMask(): boolean {
     return this.isBackground
       || this.stageEvent === window.WindowStageEventType.PAUSED
       || this.stageEvent === window.WindowStageEventType.INACTIVE;
   }

   build() {
     Stack() {
       Column() {
         // 受保护内容
   // ...
       }
       .foregroundBlurStyle(this.shouldShowMask() ? BlurStyle.Thin : BlurStyle.NONE)

       if (this.shouldShowMask()) {
         Column() {
           Text('隐私保护中')
             .fontSize(19)
             .fontWeight(FontWeight.Bold)
             .fontColor(Color.White)
             .margin({ bottom: 6 })

           Text('您的账户信息已隐藏')
             .fontSize(12)
             .fontColor($r('app.color.mask_subtitle'))
         }
         .width('100%')
         .height('100%')
         .backgroundColor($r('app.color.mask_overlay_bg'))
         .justifyContent(FlexAlign.Center)
         .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM])
       }
     }
   }
   ```

   蒙层覆盖层通过expandSafeArea扩展到系统安全区外，使深色遮罩覆盖顶部状态栏和底部导航栏，整屏色调统一。

## 环境准备

* 本示例基于DevEco Studio 6.1.1 Release版本进行编译运行。
* 本示例基于API Version 24 Release版本进行开发与验证。

## 工程目录

```ts
├──entry/src/main/ets                         // 代码区
│  ├──entryability
│  │  └──EntryAbility.ets                     // 应用入口，全局注册windowStageEvent监听，写入AppStorage
│  └──pages
│     └──Index.ets                            // 单页面，foregroundBlurStyle跟随状态显示/隐藏蒙层
└──entry/src/main/resources                    // 应用资源目录
   ├──base/element
   │  ├──color.json                            // 颜色资源
   │  └──string.json                           // 字符串资源
   ├──base/media                               // 图标与启动图资源
   ├──base/profile
   │  └──main_pages.json                       // 页面路由配置
   └──dark/element
      └──color.json                            // 深色模式颜色资源
```

## 参考文档

[APP退后台在多任务窗口展示时，如何实现模糊效果](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/window-faqs#app退后台在多任务窗口展示时如何实现模糊效果)

[on('windowStageEvent')](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-windowstage#onwindowstageevent9)

[WindowStageEventType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-e#windowstageeventtype9)

[foregroundBlurStyle通用属性](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-foreground-blur-style)

[onBackground](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability#onbackground)

## 常见FAQ

Q：为什么只监听PAUSED会导致蒙层消失？

A：从多任务点击其他应用时，本应用退出PAUSED状态收到的是INACTIVE事件，命中else分支把蒙层移除了，但应用仍在后台导致多任务缩略图裸露内容。

Q：为什么需要叠加isBackground而不能只看windowStageEvent？

A：on('windowStageEvent')无法保证状态切换间的顺序，isBackground来自Ability生命周期，稳定可靠，作为兜底确保后台时蒙层始终不消失。

Q：onBackground回调为什么不能用来遮挡多任务缩略图？

A：onBackground在UI完全消失后才会触发，多任务状态下仍可看到应用内容。

Q：蒙层为什么需要expandSafeArea？

A：不设置expandSafeArea时蒙层只覆盖安全区内，顶部状态栏和底部导航栏区域会露出底层内容，导致上下割裂。设置后深色遮罩扩展到系统安全区外，整屏色调统一。

## 示例代码

[应用隐私遮罩失效示例代码](https://gitcode.com/scenario_samples/AppMask)

