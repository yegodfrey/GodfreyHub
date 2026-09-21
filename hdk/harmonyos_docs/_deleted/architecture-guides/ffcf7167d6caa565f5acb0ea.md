---
name: document/cn/architecture-guides/app_watermark-0000002353053774
title: 应用背景水印
uri: https://developer.huawei.com/consumer/cn/doc/architecture-guides/app_watermark-0000002353053774
---

# 应用背景水印

## 场景介绍

应用背景水印是综合办公类应用中的高频使用场景之一，当用户查看的内容涉及内部敏感信息时，应用在背景自动生成水印，保证信息安全性。

本示例基于[Canvas](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-canvas)绘制水印图案，并通过设置[浮层](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-overlay)叠加在背景上，实现背景水印功能。

## 效果预览

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a1/v3/LI8u0ms5SUevPPamNXIdmQ/zh-cn_image_0000002517032646.gif?HW-CC-KV=V1&HW-CC-Date=20260916T101400Z&HW-CC-Expire=31536000000&HW-CC-Sign=233CFA34B4B9513EB2F4AA0A367465B26FB2AE663DF30E61E0ADFD27D63FACAB "点击放大")

## 实现思路

1. 在[Canvas](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-canvas)组件上绘制水印图案。

   ```ts
   @Builder
   waterMark() {
     Canvas(this.context)
       .onReady(() => {
         // 设置水印绘制参数
         while (posY < this.context.height) {
           this.context.resetTransform();
           posY = WATERMARK_HEIGHT * row;
           this.context.translate(0, posY);
           this.context.rotate(-30 * DEGREE);
           for (let i = 0; i <= Math.ceil(this.context.width / WATERMARK_WIDTH); i++) {
             this.context.fillText(this.waterMarkText, 0, WATERMARK_HEIGHT / 2);
             this.context.translate(WATERMARK_WIDTH, 0);
             posY -= WATERMARK_WIDTH * Math.sin(30 * DEGREE);
           }
           this.context.rotate(30 * DEGREE);
           row++;
         }
       });
   }
   ```

2. 设置[浮层](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-overlay)属性，将绘制好的水印图案叠加到背景组件上。

   ```ts
   Column()
     .width('100%')
     .layoutWeight(1)
     .overlay(this.waterMark());
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```ts
├──entry/src/main/ets                // 代码区
│  ├──constants
│  │  └──Constants.ets               // 常量类
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  └──ChatFormat.ets              // 消息格式类
│  ├──pages
│  │  └──WatermarkPage.ets           // 水印页面
│  └──utils
│     └──DateUtil.ets                // 日期工具类
└──entry/src/main/resources          // 应用资源目录
```

## 参考文档

[Canvas](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-components-canvas-canvas)

[浮层](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-overlay)

## 代码下载

[应用背景水印示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260626163557.84255519079384546200917477071003:50001231000000:2800:E39FFB119DA9E3F66A61740FE069B3B7EF059901FCA0DFD9CFB9C7555AF40B5D.zip?needInitFileName=true)

