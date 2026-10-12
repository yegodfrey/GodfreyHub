---
name: document/cn/harmonyos-guides/ui-design-hds-tabs-sidebar-alignment-substyle
title: 设置侧边栏半屏居中对齐样式
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-hds-tabs-sidebar-alignment-substyle
---

# 设置侧边栏半屏居中对齐样式

## 场景介绍

从6.0.0(20)版本开始，新增支持设置侧边栏半屏居中对齐样式。

[HdsTabs (底部页签)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdstabs)容器组件侧边栏支持半屏居中对齐布局。横向Tabs时，若没有主动设置TabBar高度，则TabBar默认高度为48vp，纵向TabBar默认宽度为96vp，barHeight设成固定值后，TabBar无法扩展底部安全区。当safeAreaPadding不设置bottom或者bottom设置为0时，可以实现扩展安全区。

* 半屏居中对齐布局

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e0/v3/KUzAy26ZQKS1eNSwJ_HJkA/zh-cn_image_0000002755183938.png?HW-CC-KV=V1&HW-CC-Date=20261009T092713Z&HW-CC-Expire=31536000000&HW-CC-Sign=AF474BBE0D882F3CDB2FCC66035E4C1D16355E2864454AD6F33B3A7C26485649)
* 默认横向和纵向布局

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f9/v3/UstL37ZjRfWjQIUB0EFx5Q/zh-cn_image_0000002784582805.png?HW-CC-KV=V1&HW-CC-Date=20261009T092713Z&HW-CC-Expire=31536000000&HW-CC-Sign=5BCA5EA8A2BFDD90D296324A1F12D1221588398F033A1BE160347EDD4D5821DE)

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2f/v3/HQauyMP-RMqpogXTp-YkCg/zh-cn_image_0000002784662985.png?HW-CC-KV=V1&HW-CC-Date=20261009T092713Z&HW-CC-Expire=31536000000&HW-CC-Sign=90FC356ABA43650C56D9CDEA40C67E38DDC56F25A2A77278E97D97F4E698BD5A)

## 约束条件

1. 依赖页签位于侧边栏，vertical设置为true。

2. 页签使用BottomTabBarStyle样式。

## 开发步骤

1. 导入相关模块。

   ```typescript
   // 从6.0.2(22)版本开始，无需手动导入HdsTabsAttribute。具体请参考HdsTabs的导入模块说明。
   import { HdsTabs, ExtendBarMode, HdsTabsAttribute, HdsBarMode } from '@kit.UIDesignKit';
   ```

2. 创建Hds一级容器组件，设置HdsTabs组件的barMode样式为ExtendBarMode.HALF_SCREEN_FIXED，所有页签总高度之和为HdsTabs组件高度的四分之一，且处在二分之一屏的居中位置。

   ```TypeScript
    @Entry
    @Component
    struct Index {
      @State isVertical: boolean = false;
      @State barMode: HdsBarMode = ExtendBarMode.HALF_SCREEN_FIXED

      build() {
        Column() {
          Column() {
            Row() {
              Button('verticalChange')
                .onClick(() => {
                  this.isVertical = !this.isVertical;
                })
            }
            Row() {
              Button('HALF_SCREEN_FIXED')
                .onClick(() => {
                  this.barMode = ExtendBarMode.HALF_SCREEN_FIXED
                })
              Button('Fixed')
                .onClick(() => {
                  this.barMode = BarMode.Fixed
                })
              Button('Scrollable')
                .onClick(() => {
                  this.barMode = BarMode.Scrollable
                })
            }
          }
          .margin({ top: 20 })
          .width('100%')
          .height('20%')
          HdsTabs({ barPosition: BarPosition.End }) {
            TabContent() {
              Column().width('100%').height('100%').backgroundColor(Color.Yellow)
            }
            .tabBar(new BottomTabBarStyle($r('sys.media.ohos_app_icon'), 'Yellow'))
            TabContent() {
              Column().width('100%').height('100%').backgroundColor(Color.Blue)
            }
            .tabBar(new BottomTabBarStyle($r('sys.media.ohos_app_icon'), 'Blue'))
            TabContent() {
              Column().width('100%').height('100%').backgroundColor(Color.Pink)
            }
            .tabBar(new BottomTabBarStyle($r('sys.media.ohos_app_icon'), 'Pink'))
          }
          .vertical(this.isVertical)
          .barMode(this.barMode)
          .width('100%')
          .height('80%')
        }
        .width('100%')
        .height('100%')
      }
    }
   ```

