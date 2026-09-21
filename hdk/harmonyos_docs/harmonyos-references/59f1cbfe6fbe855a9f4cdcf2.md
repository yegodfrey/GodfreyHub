---
name: document/cn/harmonyos-references/ts-basic-components-containerspan
title: ContainerSpan
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-containerspan
---

# ContainerSpan

> phone 12+ | 2in1 13+ | tablet 12+ | tv 19+ | wearable 18+

[Text](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text)组件的子组件，用于统一管理多个[Span](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-span)、[ImageSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-imagespan)的背景色及圆角弧度，适用于需要为文本片段和图片组合设置统一背景样式的场景。
> 说明
>
> * 该组件从API version 11开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
>
> * 本模块接口仅可在Stage模型下使用。

## 子组件

可以包含[Span](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-span)、[ImageSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-imagespan) 子组件。

## 接口

ContainerSpan()

**元服务API：** 从API version 12开始，该接口支持在元服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 属性

仅支持以下属性：

### textBackgroundStyle

textBackgroundStyle(style: TextBackgroundStyle)

设置文本背景样式。子组件在不设置该属性时，将继承此属性值。未通过该接口设置时，默认背景颜色为Color.Transparent，圆角弧度为0。
> 说明
>
> 从API version 12开始，该接口支持在[attributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifier)中调用。

**元服务API：** 从API version 12开始，该接口支持在元服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

|参数名|类型|必填|说明|
|:----|:------------------------------------------------------------------------------------------------------------------------------------------|:-|:----------------------------------------------------------------------|
|style|[TextBackgroundStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-span#textbackgroundstyle11对象说明)|是|文本背景样式，用于设置ContainerSpan组件内Span和ImageSpan的文本背景颜色和圆角弧度。子组件不设置该属性时将继承此样式。|

### attributeModifier^12+^

attributeModifier(modifier: AttributeModifier<ContainerSpanAttribute>)

设置组件的动态属性。

**元服务API：** 从API version 12开始，该接口支持在元服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

|参数名|类型|必填|说明|
|:-------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-|:----------------------------------------------------------------------------------------------------------------|
|modifier|[AttributeModifier](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-attribute-modifier#attributemodifiert)<ContainerSpanAttribute>|是|动态设置组件的属性。开发者需自定义类继承AttributeModifier接口，在applyNormalAttribute方法中接收ContainerSpanAttribute实例并动态修改ContainerSpan的属性值。|

## 事件

不支持[通用事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events)。

## 示例

### 示例1（设置背景样式）

从API version 11开始，该示例通过[textBackgroundStyle](#textbackgroundstyle)属性展示了文本设置背景样式的效果。

```ts
// xxx.ets
@Component
@Entry
struct Index {
  build() {
    Column() {
      Text() {
        ContainerSpan() {
          // $r('app.media.app_icon')需要替换为开发者所需的图像资源文件。
          ImageSpan($r('app.media.app_icon'))
            .width('40vp')
            .height('40vp')
            .verticalAlign(ImageSpanAlignment.CENTER)
          Span('   Hello World !   ').fontSize('16fp').fontColor(Color.White)
        }
        .textBackgroundStyle({
          color: '#7F007DFF',
          radius: {
            topLeft: 12,
            topRight: 12,
            bottomLeft: 12,
            bottomRight: 12
          }
        })
      }
    }.width('100%').alignItems(HorizontalAlign.Center)
  }
}
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bb/v3/hdqkneXWTTanpc6ixSdUGw/zh-cn_image_0000002762995803.png?HW-CC-KV=V1&HW-CC-Date=20260917T084642Z&HW-CC-Expire=31536000000&HW-CC-Sign=ACDD1FB8FC1B7CF2E4F6B5AD1FA3FC651C6DC3CF122ED28C6355DF5DFD2CDB18)

### 示例2（通过attributeModifier设置背景样式）

从API version 12开始，该示例通过[attributeModifier](#attributemodifier12)属性展示了文本设置背景样式的效果。

```ts
import { ContainerSpanModifier } from '@kit.ArkUI';

class MyContainerSpanModifier extends ContainerSpanModifier {
  applyNormalAttribute(instance: ContainerSpanAttribute): void {
    super.applyNormalAttribute?.(instance);
    this.textBackgroundStyle({ color: '#7F007DFF', radius: '12vp' });
  }
}

@Entry
@Component
struct ContainerSpanModifierExample {
  @State containerSpanModifier: ContainerSpanModifier = new MyContainerSpanModifier();

  build() {
    Column() {
      Text() {
        ContainerSpan() {
          // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。
          ImageSpan($r('app.media.startIcon'))
            .width('40vp')
            .height('40vp')
            .verticalAlign(ImageSpanAlignment.CENTER)
          Span(' I\'m ContainerSpan attributeModifier ').fontSize('16fp').fontColor(Color.White)
        }.attributeModifier(this.containerSpanModifier as MyContainerSpanModifier)
      }
    }.width('100%').alignItems(HorizontalAlign.Center)
  }
}
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d3/v3/twB91ZI5Qmamw-Z6C9T_xA/zh-cn_image_0000002762835917.png?HW-CC-KV=V1&HW-CC-Date=20260917T084642Z&HW-CC-Expire=31536000000&HW-CC-Sign=20338554C0E89B82A78DD3F11D6A98D2FB8CF04B2791F53319D11A2D31861A61)

