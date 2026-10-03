---
name: document/cn/harmonyos-faqs/faqs-arkui-1164
title: 自定义组件添加链式调用导致布局异常
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-1164
---

# 自定义组件添加链式调用导致布局异常

## 问题现象

在使用自定义组件时，发现设置背景色的自定义组件与无背景色的自定义组件在布局定位上存在偏差，导致组件显示位置不一致。

问题代码示例参考如下：

```screen
@Entry
@Component
struct Index {
  build() {
    Stack({ alignContent: Alignment.Center }) {
      ChildComponent({
        x: 0,
        y: 0,
        pointColor: '#0A59F7'
      })
        .backgroundColor('#c7c7cc');// 是否设置背景色
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#eeee')
    .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM]);
  }
}

@Component
struct ChildComponent {
  @Prop x: number;
  @Prop y: number;
  @Prop pointColor: string;

  build() {
    Stack({ alignContent: Alignment.Center }) {
      Circle()
        .width(100)
        .height(100)
        .fill(this.pointColor);
    }
    .width(100)
    .height(100)
    .position({ x: this.x, y: this.y });
  }
}
```

添加背景色：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ac/v3/elImD9WzSY647FtrP4OWEQ/zh-cn_image_0000002658929085.png?HW-CC-KV=V1&HW-CC-Date=20260929T074341Z&HW-CC-Expire=31536000000&HW-CC-Sign=052E2AC33586CB5DF7AF6249EFBB7C337CBE6EBA1EF662E30F33A20E04A73C53 "点击放大")

不添加背景色：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/35/v3/i82O_XLkQQKuR2L32OxlHw/zh-cn_image_0000002658809135.png?HW-CC-KV=V1&HW-CC-Date=20260929T074341Z&HW-CC-Expire=31536000000&HW-CC-Sign=D01D4E6801C18FA8BB304E0721B2ED52DA15866DAFCFA45681198522C6CDF202 "点击放大")

## 背景知识

ArkUI给[自定义组件设置样式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-create-custom-components#自定义组件通用样式)时，相当于给ChildComponent套了一个不可见的容器组件，这些样式是设置在容器组件上，而非直接设置给ChildComponent的Stack组件。

## 问题定位

打开DevEco Studio中的ArkUI Inspector工具，对比设置背景色与无背景色的自定义子组件的节点树。发现设置背景色的自定义子组件外层嵌套了一层容器组件。左图设置背景色，右图无背景色。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/40/v3/8ebDIcMXRW2XULuQAHdbXA/zh-cn_image_0000002628569774.png?HW-CC-KV=V1&HW-CC-Date=20260929T074341Z&HW-CC-Expire=31536000000&HW-CC-Sign=81BFF639BC62C984B41AF0B0F21658A05D45586A89C3CDDBE76EF72860D1B9D0 "点击放大") ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/59/v3/cITGuX2hRGKzV3ruS_h5gQ/zh-cn_image_0000002628409870.png?HW-CC-KV=V1&HW-CC-Date=20260929T074341Z&HW-CC-Expire=31536000000&HW-CC-Sign=999FB19769E9ECEA247155A17B26A7E1E0327B7668DEB7AA7E231088FD91929D "点击放大")

## 分析结论

ArkUI给自定义组件设置样式时，会给子组件嵌套一个不可见的容器组件，这些样式是设置在容器组件上，导致自定义组件在布局定位上存在偏差。

## 修改建议

将width和height设置为auto表示尺寸会自动适应子组件。建议将自定义组件的宽高设置为auto，以实现灵活的自适应布局。若需要给自定义组件设置背景色，建议在封装自定义组件时添加背景色，使背景色跟随子组件。

```screen
@Entry
@Component
struct CustomCompLayoutStyle {
  build() {
    Stack({ alignContent: Alignment.Center }) {
      ChildComponent({
        x: 0,
        y: 0,
        pointColor: '#0A59F7',
        bgcolor: '#c7c7cc' //建议在封装自定义组件时设置背景色
      })
        .height('auto')
        .width('auto');
    }
    .width('100%')
    .height('100%')
    .backgroundColor('#F1F3F5')
    .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM]);
  }
}

@Component
struct ChildComponent {
  @Prop x: number;
  @Prop y: number;
  @Prop w: number = 100;
  @Prop h: number = 100;
  @Prop pointColor: string;
  @Prop bgcolor: ResourceColor = Color.Transparent;

  build() {
    Stack({ alignContent: Alignment.Center }) {
      Circle()
        .width(this.w)
        .height(this.h)
        .fill(this.pointColor);
    }
    .width(this.w)
    .height(this.h)
    .position({ x: this.x, y: this.y })
    .backgroundColor(this.bgcolor); //封装组件时添加背景色
  }
}
```

