---
name: document/cn/architecture-guides/dark_mode-0000002403773657
title: 基于深浅色模式配置应用资源
uri: https://developer.huawei.com/consumer/cn/doc/architecture-guides/dark_mode-0000002403773657
---

# 基于深浅色模式配置应用资源

## 场景介绍

基于深浅色模式配置应用资源是各类应用中的高频使用场景之一，如应用需要适应白天、黑夜等不同场景下的视觉需求，提升用户体验。

本示例实现了[应用深浅色适配](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-dark-light-color-adaptation)功能，支持应用根据深色模式或浅色模式的需求，配置与之相对应的主题背景、图标、文字颜色等资源。

## 效果预览

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2f/v3/-iQtmCnnQQaJR9Es3ws7cw/zh-cn_image_0000002517192432.gif?HW-CC-KV=V1&HW-CC-Date=20260916T092100Z&HW-CC-Expire=31536000000&HW-CC-Sign=3AD9EEF9B0FA427CDFB22C943DA6FA0FC1527761807057AF089149D33724FE61 "点击放大")

## 实现思路

1. 通过[ApplicationContext.setColorMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-applicationcontext#applicationcontextsetcolormode11)设置深浅色模式为跟随系统模式（默认）。

   ```ts
   this.context.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_NOT_SET);
   ```

2. 在resources目录下新建深色模式限定词目录（命名为dark）。
3. 在dark目录下新建element目录，存放color.json文件，可配置深色模式颜色资源。
4. 在dark目录下新建media目录，包含图片资源文件，需与浅色资源名称保持一致。
5. 通过[资源访问](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/resource-categories-and-access#资源访问)完成页面开发。

   ```ts
   $r('app.media.coupon'),
   $r('app.string.coupon')
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```ts
├──entry/src/main/ets                          // 代码区
│  ├──components
│  │  ├──AllBusiness.ets                       // 业务组件
│  │  └──ProductList.ets                       // 商品列表
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets    
│  ├──pages
│  │  └──MainPage.ets                          // 主页面    
│  ├──utils
│  │  ├──FileReaderUtils.ets                   //商品信息读取
│  │  └──Logger.ets                            //日志工具
│  └──viewmodel
│     ├──BusinessDetailModel.ets               //业务组件数据模型
│     └──ProductListModel.ets                  //商品列表数据模型
└──entry/src/main/resources                    //应用资源目录
   ├──base                                     //正常模式资源
   │  ├──element                 
   │  ├──media                  
   │  └──profile                      
   └──dark                                     //暗黑模式资源，如果与正常模式资源相同则可省略
      ├──element                               //可放颜色资源
      └──media                                 //可放图片资源
```

## 参考文档

[应用适配深浅色模式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-dark-light-color-adaptation)

[资源分类与访问](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/resource-categories-and-access)

[ApplicationContext（应用级别的上下文）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-applicationcontext)

## 代码下载

[基于深浅色模式配置应用资源示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260626173554.96981019046651679285832517735335:50001231000000:2800:1884CD956410075B331D7956F37CCB4BF968065848D34121DDF474F624AB1368.zip?needInitFileName=true)

