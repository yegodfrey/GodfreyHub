---
name: document/cn/harmonyos-guides/arkts-interaction-development-guide-keyboard
title: 支持键盘输入事件
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-interaction-development-guide-keyboard
---

# 支持键盘输入事件

物理按键产生的按键事件为非指向性事件，与触摸等指向性事件不同，其事件并没有坐标位置信息，所以其会按照一定次序向获焦组件进行派发，大多数文字输入场景下，按键事件都会优先派发给输入法进行处理，以便其处理文字的联想和候选词，应用可以通过[onKeyPreIme](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-key#onkeypreime12)提前感知事件。
> 说明
>
> 一些系统按键产生的事件并不会传递给UI组件，如电源键。

## 按键事件数据流

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/27/v3/xL0raBTrQZSaVXHRjOfjag/zh-cn_image_0000002784582309.png?HW-CC-KV=V1&HW-CC-Date=20261009T092719Z&HW-CC-Expire=31536000000&HW-CC-Sign=FCA03B2BF9270A9C72B87CD88B83ADC7D342C8BDB5F391BDC0C723B4CCF016E7)

按键事件由外设键盘等设备触发，经驱动和多模处理转换后发送给当前获焦的窗口，窗口获取到事件后，会尝试分发三次事件。三次分发的优先顺序如下，一旦事件被消费，则跳过后续分发流程。

1. 首先分发给ArkUI框架用于触发获焦组件绑定的[onKeyPreIme](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-key#onkeypreime12)回调和页面快捷键。
2. 再向输入法分发，输入法会消费按键用作输入。
3. 再次将事件发给ArkUI框架，用于响应[onKeyEventDispatch](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-key#onkeyeventdispatch15)事件、获焦组件绑定的[onKeyEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-key#onkeyevent)回调以及走焦。

因此，当某输入框组件获焦，且打开了输入法，此时大部分按键事件均会被输入法消费。例如字母键会被输入法用来往输入框中输入对应字母字符、方向键会被输入法用来切换选中备选词。如果在此基础上给输入框组件绑定了快捷键，那么快捷键会优先响应事件，事件也不再会被输入法消费。

按键事件到ArkUI框架之后，会先找到完整的节点获焦链。从叶子节点到根节点，逐一发送按键事件，若有子组件可以处理则优先给子组件处理，若子组件无法处理，则进行冒泡寻找父组件进行处理。

Web组件的KeyEvent流程与上述过程有所不同。在[onKeyPreIme](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-key#onkeypreime12)返回false时，Web组件不会匹配快捷键。而在第三次按键派发过程中，Web组件会将未消费的[KeyEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-key#keyevent对象说明)重新派发回ArkUI，在重新派发过程中再执行匹配快捷键等操作。

## onKeyEvent、onKeyPreIme和onKeyEventDispatch

```ts
onKeyEvent(event: (event: KeyEvent) => void): T
onKeyEvent(event: Callback<KeyEvent, boolean>): T
onKeyPreIme(event: Callback<KeyEvent, boolean>): T
onKeyEventDispatch(event: Callback<KeyEvent, boolean>): T
```

上述四种方法的区别仅在于触发的时机（见[按键事件数据流](#按键事件数据流)）。其中onKeyPreIme的返回值决定了该按键事件后续是否会被继续分发给页面快捷键、输入法、onKeyEventDispatch和onKeyEvent。

当绑定方法的组件处于获焦状态下，外设键盘的按键事件会触发该方法，回调参数为[KeyEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-events-key#keyevent对象说明)，可由该参数获得当前按键事件的按键行为（[KeyType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#keytype)）、键码（[KeyCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-keycode#keycode)）、按键英文名称（keyText）、事件来源设备类型（[KeySource](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#keysource)）、事件来源设备id（deviceId）、元键按压状态（metaKey）、时间戳（timestamp）、阻止冒泡设置（stopPropagation）。

```TypeScript
@Entry
@Component
struct KeyEventExample {
  @State buttonText: string = '';
  @State buttonType: string = '';
  @State columnText: string = '';
  @State columnType: string = '';

  build() {
    Column() {
      Button('onKeyEvent')
        .defaultFocus(true)
        .width(140).height(70)
        .onKeyEvent((event?: KeyEvent) => { // 给Button设置onKeyEvent事件
          if (event) {
            if (event.type === KeyType.Down) {
              this.buttonType = 'Down';
            }
            if (event.type === KeyType.Up) {
              this.buttonType = 'Up';
            }
            this.buttonText = 'Button: \n' +
              'KeyType:' + this.buttonType + '\n' +
              'KeyCode:' + event.keyCode + '\n' +
              'KeyText:' + event.keyText;
          }
        })

      Divider()
      Text(this.buttonText).fontColor(Color.Green)

      Divider()
      Text(this.columnText).fontColor(Color.Red)
    }.width('100%').height('100%').justifyContent(FlexAlign.Center)
    .onKeyEvent((event?: KeyEvent) => { // 给父组件Column设置onKeyEvent事件
      if (event) {
        if (event.type === KeyType.Down) {
          this.columnType = 'Down';
        }
        if (event.type === KeyType.Up) {
          this.columnType = 'Up';
        }
        this.columnText = 'Column: \n' +
          'KeyType:' + this.columnType + '\n' +
          'KeyCode:' + event.keyCode + '\n' +
          'KeyText:' + event.keyText;
      }
    })
  }
}
```

上述示例中给组件Button和其父容器Column绑定onKeyEvent。应用打开页面加载后，组件树上第一个可获焦的非容器组件自动获焦，设置Button为当前页面的默认焦点，由于Button是Column的子节点，Button获焦也同时意味着Column获焦。获焦机制见[支持焦点处理](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-events-focus-event)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f9/v3/LSN-ksrbQcCkME-Tn79oNQ/zh-cn_image_0000002784662489.gif?HW-CC-KV=V1&HW-CC-Date=20261009T092719Z&HW-CC-Expire=31536000000&HW-CC-Sign=5C65634FD57AA040B1171F1040A1B1E4C46EA7D854FEF84C1B5F3D2FEB7FC1A7)

打开应用后，依次在键盘上按这些按键：空格、回车、左Ctrl、左Shift、字母A、字母Z。

1. 由于onKeyEvent事件默认是冒泡的，所以Button和Column的onKeyEvent都可以响应。

2. 每个按键都有2次回调，分别对应KeyType.Down和KeyType.Up，表示按键被按下，然后抬起。

如果要阻止冒泡，即仅Button响应键盘事件，Column不响应，在Button的onKeyEvent回调中加入event.stopPropagation()方法即可，如下：

```TypeScript
@Entry
@Component
struct KeyEventPreventBubble {
  @State buttonText: string = '';
  @State buttonType: string = '';
  @State columnText: string = '';
  @State columnType: string = '';

  build() {
    Column() {
      Button('onKeyEvent')
        .defaultFocus(true)
        .width(140).height(70)
        .onKeyEvent((event?: KeyEvent) => {
          // 通过stopPropagation阻止事件冒泡
          if (event) {
            if (event.stopPropagation) {
              event.stopPropagation();
            }
            if (event.type === KeyType.Down) {
              this.buttonType = 'Down';
            }
            if (event.type === KeyType.Up) {
              this.buttonType = 'Up';
            }
            this.buttonText = 'Button: \n' +
              'KeyType:' + this.buttonType + '\n' +
              'KeyCode:' + event.keyCode + '\n' +
              'KeyText:' + event.keyText;
          }
        })

      Divider()
      Text(this.buttonText).fontColor(Color.Green)

      Divider()
      Text(this.columnText).fontColor(Color.Red)
    }.width('100%').height('100%').justifyContent(FlexAlign.Center)
    .onKeyEvent((event?: KeyEvent) => { // 给父组件Column设置onKeyEvent事件
      if (event) {
        if (event.type === KeyType.Down) {
          this.columnType = 'Down';
        }
        if (event.type === KeyType.Up) {
          this.columnType = 'Up';
        }
        this.columnText = 'Column: \n' +
          'KeyType:' + this.columnType + '\n' +
          'KeyCode:' + event.keyCode + '\n' +
          'KeyText:' + event.keyText;
      }
    })
  }
}
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/79/v3/PMFgRiQSS_iBAwvgdYYR9A/zh-cn_image_0000002755023556.gif?HW-CC-KV=V1&HW-CC-Date=20261009T092719Z&HW-CC-Expire=31536000000&HW-CC-Sign=501828D6E4E016B222C969AFBFD509147195105DD745C62F2AC566C601610767)

使用onKeyPreIme屏蔽在输入框中使用方向左键。

```TypeScript
import { KeyCode } from '@kit.InputKit';

@Entry
@Component
struct PreImeEventExample {
  @State buttonText: string = '';
  @State buttonType: string = '';
  @State columnText: string = '';
  @State columnType: string = '';

  build() {
    Column() {
      Search({
        placeholder: 'Search...'
      })
        .width('80%')
        .height('40vp')
        .border({ radius: '20vp' })
        .onKeyPreIme((event: KeyEvent) => {
          if (event.keyCode == KeyCode.KEYCODE_DPAD_LEFT) {
            return true;
          }
          return false;
        })
    }
  }
}
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7a/v3/MvzH7Q9VSHemO-uZc9Ohjg/zh-cn_image_0000002755183442.gif?HW-CC-KV=V1&HW-CC-Date=20261009T092719Z&HW-CC-Expire=31536000000&HW-CC-Sign=F9AE3F2A7F32AD5576126CF819DD9F4D7E59D1C0392E42B09AA8CE3AFCBA3FDF)

使用onKeyEventDispatch分发按键事件到子组件，子组件使用onKeyEvent。

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG = '[Sample_Eventproject]';
const DOMAIN = 0xF811;
const BUNDLE = 'Eventproject_';

@Entry
@Component
struct Index {
  build() {
    Row() {
      Row() {
        Button('button1')
          .id('button1')
          .margin({ left: 70, right: 30 })
          .onKeyEvent((event) => {
            hilog.info(DOMAIN, TAG, BUNDLE + 'button1');
            return true;
          })
        Button('button2')
          .id('button2')
          .onKeyEvent((event) => {
            hilog.info(DOMAIN, TAG, BUNDLE + 'button2');
            return true;
          })
      }
      .width('100%')
      .height('100%')
      .id('Row1')
      .onKeyEventDispatch((event) => {
        let context = this.getUIContext();
        context.getFocusController().requestFocus('button1');
        return context.dispatchKeyEvent('button1', event);
      })

    }
    .height('100%')
    .width('100%')
    .onKeyEventDispatch((event) => {
      if (event.type == KeyType.Down) {
        let context = this.getUIContext();
        context.getFocusController().requestFocus('Row1');
        return context.dispatchKeyEvent('Row1', event);
      }
      return true;
    })
  }
}
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c6/v3/sH6UvloCQoGUvudbVobOxQ/zh-cn_image_0000002784582311.png?HW-CC-KV=V1&HW-CC-Date=20261009T092719Z&HW-CC-Expire=31536000000&HW-CC-Sign=24483ADF8C22219744A55151163009C5E87B24B9E85C91E80A5F32F9AC993179)

使用onKeyPreIme实现回车提交（建议使用物理键盘）。

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';
import { KeyCode } from '@kit.InputKit';

const TAG = '[Sample_Eventproject]';
const DOMAIN = 0xF811;
const BUNDLE = 'Eventproject_';

@Entry
@Component
struct TextAreaDemo {
  @State content: string = '';
  @State text: string = '';
  controller: TextAreaController = new TextAreaController();

  build() {
    Column() {
      Text('Submissions: ' + this.content)
      TextArea({ controller: this.controller, text: this.text })
        .onKeyPreIme((event: KeyEvent) => {
          hilog.info(DOMAIN, TAG, `${BUNDLE + JSON.stringify(event)}`);
          if (event.keyCode === KeyCode.KEYCODE_ENTER && event.type === KeyType.Down) { // 回车键物理码
            const hasCtrl = event?.getModifierKeyState?.(['Ctrl']);
            if (hasCtrl) {
              hilog.info(DOMAIN, TAG, BUNDLE + 'Line break');
            } else {
              hilog.info(DOMAIN, TAG, BUNDLE + 'Submissions：' + this.text);
              this.content = this.text;
              this.text = '';
              event.stopPropagation();
            }
            return true;
          }
          return false;
        })
        .onChange((value: string) => {
          this.text = value;
        })
    }
  }
}
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6/v3/-15EPuOhS8u52bP5du9gVQ/zh-cn_image_0000002784662491.png?HW-CC-KV=V1&HW-CC-Date=20261009T092719Z&HW-CC-Expire=31536000000&HW-CC-Sign=8C18267510EAEA1037772B0CEF79DC82CD419173CB5A1F7AE7F08A96A1C26C57)

在输入框中输入内容后回车。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3e/v3/DSukfLH6RMivVm83RZ3YTQ/zh-cn_image_0000002755023558.png?HW-CC-KV=V1&HW-CC-Date=20261009T092719Z&HW-CC-Expire=31536000000&HW-CC-Sign=C8DB0F58EC876F583AA1A0B1C3D3FED9283F4A470E854E8C7E7C469B8DA86F05)

