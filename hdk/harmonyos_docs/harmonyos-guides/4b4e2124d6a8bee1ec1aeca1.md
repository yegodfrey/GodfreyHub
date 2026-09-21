---
name: document/cn/harmonyos-guides/arkts-advanced-components-arcbutton
title: 弧形按钮 (ArcButton)(圆形屏幕推荐使用)
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-advanced-components-arcbutton
---

# 弧形按钮 (ArcButton)(圆形屏幕推荐使用)

从API version 18开始支持ArcButton。ArcButton是弧形按钮组件，推荐用于圆形屏幕。为用户提供强调、普通、警告等样式按钮。具体用法请参考[ArcButton](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-arcbutton)。

## 创建按钮

ArcButton通过调用以下接口来创建。

```TypeScript
ArcButton({
  options: new ArcButtonOptions({
    label: 'OK',
    position: ArcButtonPosition.TOP_EDGE,
    styleMode: ArcButtonStyleMode.EMPHASIZED_LIGHT,
  // ···
  })
})
```

其中，[label](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-arcbutton#arcbuttonoptions)设置按钮文字，[position](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-arcbutton#arcbuttonoptions)设置按钮类型，[styleMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-arcbutton#arcbuttonoptions)设置按钮样式。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2b/v3/b3hjsO2bSFK-WRNxeEfXgg/zh-cn_image_0000002733433920.png?HW-CC-KV=V1&HW-CC-Date=20260917T084555Z&HW-CC-Expire=31536000000&HW-CC-Sign=2625D4C253D13DAA1B363F9B21A98A02A0B84F2874BD172655FE99C7615A85B3)

## 设置按钮类型

ArcButton有上弧形按钮和下弧形按钮两种类型。使用[position](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-arcbutton#arcbuttonoptions)设置按钮类型。

* 下弧形按钮（默认类型）。

  通过将[position](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-arcbutton#arcbuttonoptions)属性设置为ArcButtonPosition.BOTTOM_EDGE，可以将按钮设置为下弧形按钮。

  ```TypeScript
  ArcButton({
    options: new ArcButtonOptions({
      label: 'OK',
      position: ArcButtonPosition.BOTTOM_EDGE,
      styleMode: ArcButtonStyleMode.EMPHASIZED_LIGHT,
    // ···
    })

  })
  ```

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/43/v3/EeKWrJt_QT65bg6tRTO05A/zh-cn_image_0000002762993443.png?HW-CC-KV=V1&HW-CC-Date=20260917T084555Z&HW-CC-Expire=31536000000&HW-CC-Sign=E49057A2023B7F1FCC35ED20A6FCB343E5608F7958E4B201817C0CA0078B6FD5)
* 上弧形按钮。

  通过将[position](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-arcbutton#arcbuttonoptions)属性设置为ArcButtonPosition.TOP_EDGE，可以将按钮设置为上弧形按钮。

  ```TypeScript
  ArcButton({
    options: new ArcButtonOptions({
      label: 'OK',
      position: ArcButtonPosition.TOP_EDGE,
      styleMode: ArcButtonStyleMode.EMPHASIZED_LIGHT,
    // ···
    })
  })
  ```

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ca/v3/XLtpiJOhTJWGhx5NmdDYRw/zh-cn_image_0000002762833555.png?HW-CC-KV=V1&HW-CC-Date=20260917T084555Z&HW-CC-Expire=31536000000&HW-CC-Sign=83A904BE763598C485C39E1E1A98010D2C14A3F6A717603EFB5EDCBDBAECF4C3)

## 自定义样式

* 设置背景色。

  使用[backgroundColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-arcbutton#arcbuttonoptions)属性设置按钮的背景色。

  ```TypeScript
  ArcButton({
    options: new ArcButtonOptions({
      label: 'OK',
      styleMode: ArcButtonStyleMode.CUSTOM,
      backgroundColor: ColorMetrics.resourceColor('#707070')
    })
  })
  ```

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bb/v3/lbYKkU_IR-iOSq-XnX71Fw/zh-cn_image_0000002733274040.png?HW-CC-KV=V1&HW-CC-Date=20260917T084555Z&HW-CC-Expire=31536000000&HW-CC-Sign=C843C9254DB34030E51631B55F41CABAFA61BE666810CE8E7DF68D2B79207F04)
* 设置文本颜色。

  使用[fontColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-arcbutton#arcbuttonoptions)属性设置按钮的文本颜色。

  ```TypeScript
  ArcButton({
    options: new ArcButtonOptions({
      label: 'OK',
      styleMode: ArcButtonStyleMode.CUSTOM,
      backgroundColor: ColorMetrics.resourceColor('#E84026'),
      fontColor: ColorMetrics.resourceColor('#707070')
    })
  })
  ```

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3d/v3/WsIGf1W0SIGmopc62z-L_g/zh-cn_image_0000002733433922.png?HW-CC-KV=V1&HW-CC-Date=20260917T084555Z&HW-CC-Expire=31536000000&HW-CC-Sign=48C152C95C44121AD3ABBABFA949F64F40F491C7C081588C75B75D14B50B4740)
* 设置阴影颜色。

  使用[shadowEnabled](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-arcbutton#arcbuttonoptions)属性启用按钮阴影，并通过[shadowColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-arcbutton#arcbuttonoptions)属性设置按钮的阴影颜色。

  ```TypeScript
  ArcButton({
    options: new ArcButtonOptions({
      label: 'OK',
      shadowEnabled: true,
      shadowColor: ColorMetrics.resourceColor('#ffec1022')
    })
  })
  ```

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8e/v3/JCXvEMIKQtKEFlC92vqAQQ/zh-cn_image_0000002762993445.png?HW-CC-KV=V1&HW-CC-Date=20260917T084555Z&HW-CC-Expire=31536000000&HW-CC-Sign=A40C268EF9E2B6144B72392962D9A002036BB21FBBFB5450023F5183670B5017)

## 添加事件

* 绑定onClick事件来响应点击操作后的自定义行为。

  ```TypeScript
  ArcButton({
    options: new ArcButtonOptions({
      label: 'OK',
    // ···
      onClick: () => {
        hilog.info(DOMAIN, TAG, 'ArcButton onClick');
      },
    })
  })
  ```

* 绑定onTouch事件来响应触摸操作后的自定义行为。

  ```TypeScript
  ArcButton({
    options: new ArcButtonOptions({
      label: 'OK',
    // ···
      onTouch: (event: TouchEvent) => {
        hilog.info(DOMAIN, TAG, 'ArcButton onTouch');
      }
    })

  })
  ```

## 场景示例

在亮度设置界面，进度条显示当前亮度为30%。点击重置后，亮度值将被重置为默认的50%。

运行该示例推荐在Wearable设备上以获得最佳显示效果，同时支持在其他设备上运行。若要在Wearable设备上运行，在src/main目录下的工程配置文件[module.json5](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-configuration-file)中[deviceTypes标签](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-configuration-file#devicetypes标签)内配置wearable。

```JSON5
"module": {
  // ...
  "deviceTypes": [
    "default",
    "wearable"
  ],
  // ...
}
```

```TypeScript
import { LengthMetrics, LengthUnit, ArcButton, ArcButtonOptions, ArcButtonStyleMode } from '@kit.ArkUI';

const BRIGHT_NESS_VALUE = 30;
const BRIGHT_NESS_VALUE_DEFAULT = 50;

@Entry
@ComponentV2
struct BrightnessPage {
  @Local brightnessValue: number = BRIGHT_NESS_VALUE;
  private defaultBrightnessValue: number = BRIGHT_NESS_VALUE_DEFAULT;

  build() {
    RelativeContainer() {
      // 请将$r('app.string.Brightness')替换为实际资源文件，在本示例中该资源文件的value值为"设置亮度"
      Text($r('app.string.Brightness'))
        .fontColor(Color.White)
        .id('id_brightness_set_text')
        .fontSize(24)
        .margin({ top: 16 })
        .alignRules({
          middle: { anchor: '__container__', align: HorizontalAlign.Center }
        })

      Text(`${this.brightnessValue} %`)
        .fontColor(Color.White)
        .id('id_brightness_min_text')
        .margin({ left: 16 })
        .alignRules({
          start: { anchor: '__container__', align: HorizontalAlign.Start },
          center: { anchor: '__container__', align: VerticalAlign.Center }
        })

      Slider({
        value: this.brightnessValue,
        min: 0,
        max: 100,
        style: SliderStyle.InSet
      })
        .blockColor('#191970')
        .trackColor('#ADD8E6')
        .selectedColor('#4169E1')
        .width(150)
        .id('id_brightness_slider')
        .margin({ left: 16, right: 16 })
        .onChange((value: number, mode: SliderChangeMode) => {
          this.brightnessValue = value;
        })
        .alignRules({
          center: { anchor: 'id_brightness_min_text', align: VerticalAlign.Center },
          start: { anchor: 'id_brightness_min_text', align: HorizontalAlign.End }
        })

      ArcButton({
        options: new ArcButtonOptions({
          // 请将$r('app.string.Reset')替换为实际资源文件，在本示例中该资源文件的value值为"重置"
          label: $r('app.string.Reset'),
          styleMode: ArcButtonStyleMode.EMPHASIZED_LIGHT,
          fontSize: new LengthMetrics(19, LengthUnit.FP),
          onClick: () => {
            this.brightnessValue = this.defaultBrightnessValue;
          }
        })
      })
        .alignRules({
          middle: { anchor: '__container__', align: HorizontalAlign.Center },
          bottom: { anchor: '__container__', align: VerticalAlign.Bottom }
        })
    }
    .height('100%')
    .width('100%')
    .backgroundColor(Color.Black)
  }
}
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9d/v3/CM4iseE7Q--oPoGgXnk98Q/zh-cn_image_0000002762833557.png?HW-CC-KV=V1&HW-CC-Date=20260917T084555Z&HW-CC-Expire=31536000000&HW-CC-Sign=C6E68CE29CA16A1F45E17A312FEE0AE7E087372092A7C2885490B18209976009)

