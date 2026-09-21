---
name: document/cn/harmonyos-guides/ui-design-custom-symbol-res-register
title: 应用加载自定义Symbol
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-custom-symbol-res-register
---

# 应用加载自定义Symbol

## 场景介绍

从5.1.1 (19)版本开始，新增支持资源注册。

适用于需要快速定制应用内[Symbol图标](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-symbolregister)，不想强依赖于系统版本中预制的系统Symbol图标资源。

## 约束条件

资源注册支持Phone、Tablet、PC/2in1设备。

## 开发步骤

1. 将Symbol图标资源（TTF文件，设计规范参见[图标设计文档](https://developer.huawei.com/consumer/cn/doc/design-guides/system-icons-0000001929854962#section26702397263)）与动效参数资源（JSON文件）放入entry/src/main/resources/rawfile目录下，可在此目录下新建子目录。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/26/v3/eCO7Cp9KT9OdWho-vLK1UQ/zh-cn_image_0000002733434514.png?HW-CC-KV=V1&HW-CC-Date=20260917T084553Z&HW-CC-Expire=31536000000&HW-CC-Sign=935CDC75C0EE1F8FBD0768AF1484E14DD4830581E00BD737E558C822780F3ED3)
2. 多语言场景，在entry/src/main/resources目录中对应语言目录下的string.json文件中配置对应的Symbol图标Unicode值。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ef/v3/53IS5EiJQCuvczMexzSlhA/zh-cn_image_0000002762994037.png?HW-CC-KV=V1&HW-CC-Date=20260917T084553Z&HW-CC-Expire=31536000000&HW-CC-Sign=8C7CC4DEC2A8A9512315B89027B7979C53A17FE39E22E86473E4A1DA18E8AF06)

   ```json
   {
     "string": [
       {
         "name": "symbol_custom_phone_fill_1",
         "value": "0x100016"
       }
     ]
   }
   ```

3. 导入相关模块。

   ```TypeScript
   import { symbolRegister } from '@kit.UIDesignKit'
   import { BusinessError } from '@kit.BasicServicesKit'
   ```

4. 在通过SymbolGlyph/SymbolSpan组件展示自定义Symbol图标前，需要注册加载图标资源与动效参数资源。在需要展示自定义Symbol图标的页面通过SymbolGlyph/SymbolSpan组件展示该图标。

   ```TypeScript
   @Entry
   @Component
   struct Index {
     aboutToAppear(): void {
       try {
         let result = symbolRegister.registerSymbol($rawfile("symbol/symbol_register.ttf"), $rawfile("symbol/symbol_register.json"));
       } catch (error) {
         let err = error as BusinessError;
         console.error("errCode: " + err.code)
         console.error("error: " + err.message);
       }
     }
     build() {
       Column(){
         SymbolGlyph($r('app.string.symbol_custom_phone_fill_1'))
       }
       .width('100%')
       .height('100%')
     }
   }
   ```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bb/v3/UOXP0X_BSSyM-iN5uMzqiA/zh-cn_image_0000002762834153.png?HW-CC-KV=V1&HW-CC-Date=20260917T084553Z&HW-CC-Expire=31536000000&HW-CC-Sign=AA71C61DC35D5018E12C5F44348F647016381571B16AD2190C0F49F57B95216F)

