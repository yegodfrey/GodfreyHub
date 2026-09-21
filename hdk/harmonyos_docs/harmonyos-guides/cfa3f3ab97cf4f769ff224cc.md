---
name: document/cn/harmonyos-guides/arkts-layout-development-linear
title: 线性布局 (Row/Column)
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-linear
---

# 线性布局 (Row/Column)

## 概述

线性布局（LinearLayout）是开发中最常用的布局，通过线性容器[Row](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-row)和[Column](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-column)构建。线性布局是其他布局的基础，其子元素在线性方向上（水平方向和垂直方向）依次排列。线性布局的排列方向由所选容器组件决定，Row容器内子元素按照水平方向排列，Column容器内子元素按照垂直方向排列。根据不同的排列方向，开发者可选择使用Row或Column容器创建线性布局。
> 说明
>
> 在复杂界面中使用多组件嵌套时，若布局组件的嵌套层数过深或嵌套的组件数量过多，将会产生额外开销。建议通过移除冗余节点、利用布局边界减少布局计算、合理采用渲染控制语法及布局组件方法来优化性能。最佳实践请参考[布局优化指导](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-optimization-guidance)。

**图1** Column容器内子元素排列示意图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b2/v3/CM9koIveSCGgklI_MQuEOA/zh-cn_image_0000002733273780.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=7465BEDA27F6109335CBC82EB9443F8ADBFB69FFD8642C32221BB119B0FEA8DD)

**图2** Row容器内子元素排列示意图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/50/v3/YuTUTb8gR3-Z1bR8zS5FPw/zh-cn_image_0000002733433660.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=7B3DE8E40DA40B0DA245283FA03499B73A607DDA25FB5F5527968E391B2677C6)

## 基本概念

* 布局容器：具有布局能力的容器组件，可以承载其他元素作为其子元素，布局容器会对其子元素进行尺寸计算和布局排列。

* 布局子元素：布局容器内部的元素。

* 主轴：线性布局容器在布局方向上的轴线，子元素默认沿主轴排列。Row容器主轴为水平方向，Column容器主轴为垂直方向（图示可参考弹性布局[基本概念](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-flex-layout#基本概念)中的主轴）。

* 交叉轴：垂直于主轴方向的轴线。Row容器交叉轴为垂直方向，Column容器交叉轴为水平方向（图示可参考弹性布局[基本概念](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-flex-layout#基本概念)中的交叉轴）。

* 间距：布局子元素的间距。

## 布局子元素在排列方向上的间距

在布局容器内，可以通过[Row](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-row)组件的[space](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-row#rowoptions18对象说明)属性或[Column](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-column)组件的[space](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-column#columnoptions18对象说明)属性设置排列方向上子元素的间距，使各子元素在排列方向上有等间距效果。

### Column容器内排列方向上的间距

**图3** Column容器内排列方向的间距图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/64/v3/I5Y3_OKTQI-qtawR7TCZZg/zh-cn_image_0000002762993185.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=0AEAA9FCFAE399DB9080B04E87000E34E778A08A3E694483BFA45B62A1EFD3F0)

```TypeScript
Column({ space: 20 }) {
  Text('space: 20').fontSize(15).fontColor(Color.Gray).width('90%')
  Row().width('90%').height(50).backgroundColor(0xF5DEB3)
  Row().width('90%').height(50).backgroundColor(0xD2B48C)
  Row().width('90%').height(50).backgroundColor(0xF5DEB3)
}.width('100%')
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/af/v3/rjM3S1phQNqobq0hSKaglg/zh-cn_image_0000002762833297.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=3B85EC417D763215CA9133C7DDE8D967A52A63B56481B5F1AD5859A67B48C5AD)

### Row容器内排列方向上的间距

**图4** Row容器内排列方向的间距图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a3/v3/RCzxQ9y3R9imXIGo-yhSpg/zh-cn_image_0000002733273782.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=529ABC0167CB9EE29E769BD7237A91D514B36C0CD58B52E4DF19F4BF8C7E263C)

```TypeScript
Row({ space: 35 }) {
  Text('space: 35').fontSize(15).fontColor(Color.Gray)
  Row().width('10%').height(150).backgroundColor(0xF5DEB3)
  Row().width('10%').height(150).backgroundColor(0xD2B48C)
  Row().width('10%').height(150).backgroundColor(0xF5DEB3)
}.width('90%')
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a9/v3/PJYbzC-BRfWu0B8K3DSFDQ/zh-cn_image_0000002733433662.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=E75A1513963A2CD5F5C3CEC42790BB0CCC418EDB740A0E608FCB92F6FEB4E5E1)

## 布局子元素在主轴上的排列方式

在布局容器内，可以通过[justifyContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-column#justifycontent8)属性设置子元素在容器主轴上的排列方式。可以从主轴起始位置开始排布，也可以从主轴结束位置开始排布，或者均匀分割主轴的空间。

### Column容器内子元素在垂直方向上的排列

**图5** Column容器内子元素在垂直方向上的排列图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7c/v3/h5Io61bZQiKTn2tmxPBDIg/zh-cn_image_0000002762993187.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=CEAA64087B439F09A43FE99CA36A2A07058CA5F442FCE4A43285AA93742F81EC)

* justifyContent(FlexAlign.Start，默认值)：元素在垂直方向首端对齐，第一个元素与行首对齐，同时后续的元素与前一个对齐。

  ```TypeScript
  Column({}) {
    Column() {
    }.width('80%').height(50).backgroundColor(0xF5DEB3)

    Column() {
    }.width('80%').height(50).backgroundColor(0xD2B48C)

    Column() {
    }.width('80%').height(50).backgroundColor(0xF5DEB3)
  }.width('100%').height(300).backgroundColor('rgb(242,242,242)').justifyContent(FlexAlign.Start)
  ```

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/15/v3/LUqrmgw4TZCBBPvzFFyhCQ/zh-cn_image_0000002762833299.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=1D579666C5732830F38EDF0CF42AE7FE5CED321749AE88035C341B7E20A29234)
* justifyContent(FlexAlign.Center)：元素在垂直方向中心对齐，第一个元素与行首的距离与最后一个元素与行尾距离相同。

  ```TypeScript
  Column({}) {
    Column() {
    }.width('80%').height(50).backgroundColor(0xF5DEB3)

    Column() {
    }.width('80%').height(50).backgroundColor(0xD2B48C)

    Column() {
    }.width('80%').height(50).backgroundColor(0xF5DEB3)
  }.width('100%').height(300).backgroundColor('rgb(242,242,242)').justifyContent(FlexAlign.Center)
  ```

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/79/v3/QqEBH9EGTHWB6b_7gx1ufw/zh-cn_image_0000002733273784.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=BEF97E09F70F8897B27B848A51497224EAAE75F653549020F1E2EEEC9EDCA826)
* justifyContent(FlexAlign.End)：元素在垂直方向尾部对齐，最后一个元素与行尾对齐，其他元素与后一个对齐。

  ```TypeScript
  Column({}) {
    Column() {
    }.width('80%').height(50).backgroundColor(0xF5DEB3)

    Column() {
    }.width('80%').height(50).backgroundColor(0xD2B48C)

    Column() {
    }.width('80%').height(50).backgroundColor(0xF5DEB3)
  }.width('100%').height(300).backgroundColor('rgb(242,242,242)').justifyContent(FlexAlign.End)
  ```

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/32/v3/e0NtQJlRSNuFQ-5rfZbC9A/zh-cn_image_0000002733433664.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=3909AEFDFC9CA20DA522AC5F93DFCFB6EFA00E5BDFF771C038535101BB51BC1E)
* justifyContent(FlexAlign.SpaceBetween)：垂直方向均匀分配元素，相邻元素之间距离相同。第一个元素与行首对齐，最后一个元素与行尾对齐。

  ```TypeScript
  Column({}) {
    Column() {
    }.width('80%').height(50).backgroundColor(0xF5DEB3)

    Column() {
    }.width('80%').height(50).backgroundColor(0xD2B48C)

    Column() {
    }.width('80%').height(50).backgroundColor(0xF5DEB3)
  }.width('100%').height(300).backgroundColor('rgb(242,242,242)').justifyContent(FlexAlign.SpaceBetween)
  ```

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7e/v3/OVgegJGNQ-2GPxNL9FCzsg/zh-cn_image_0000002762993189.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=854A791A4129745612BFB5A92D765AD0E0607DF64C84BFB6DB3526AE89EBA985)
* justifyContent(FlexAlign.SpaceAround)：垂直方向均匀分配元素，相邻元素之间距离相同。第一个元素到行首的距离和最后一个元素到行尾的距离是相邻元素之间距离的一半。

  ```TypeScript
  Column({}) {
    Column() {
    }.width('80%').height(50).backgroundColor(0xF5DEB3)

    Column() {
    }.width('80%').height(50).backgroundColor(0xD2B48C)

    Column() {
    }.width('80%').height(50).backgroundColor(0xF5DEB3)
  }.width('100%').height(300).backgroundColor('rgb(242,242,242)').justifyContent(FlexAlign.SpaceAround)
  ```

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e3/v3/Dw6NYd4aSdKTX1d19nUTKw/zh-cn_image_0000002762833301.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=02BC3F1BF88BE3A82C6F8AAD136265EAE71B43056CAA6A88C50B67FC4B3AC88B)
* justifyContent(FlexAlign.SpaceEvenly)：垂直方向均匀分配元素，相邻元素之间的距离、第一个元素与行首的间距、最后一个元素到行尾的间距都完全一样。

  ```TypeScript
  Column({}) {
    Column() {
    }.width('80%').height(50).backgroundColor(0xF5DEB3)

    Column() {
    }.width('80%').height(50).backgroundColor(0xD2B48C)

    Column() {
    }.width('80%').height(50).backgroundColor(0xF5DEB3)
  }.width('100%').height(300).backgroundColor('rgb(242,242,242)').justifyContent(FlexAlign.SpaceEvenly)
  ```

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/19/v3/u70lU8gwTwuH08XbgiDedA/zh-cn_image_0000002733273786.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=FDE1CD893BAA0793F116BEDED4DD807E4A0495C1BA642F318C7EC2F47855EB9F)

### Row容器内子元素在水平方向上的排列

**图6** Row容器内子元素在水平方向上的排列图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/71/v3/eEVcIIHWTKSj0L6566mc1g/zh-cn_image_0000002733433666.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=F2535F5CBA40F64AB74A3D89F9D8578AC9801FE898E3B6127FFF3A5C308F9657)

* justifyContent(FlexAlign.Start，默认值)：元素在水平方向首端对齐，第一个元素与行首对齐，同时后续的元素与前一个对齐。

  ```TypeScript
  Row({}) {
    Column() {
    }.width('20%').height(30).backgroundColor(0xF5DEB3)

    Column() {
    }.width('20%').height(30).backgroundColor(0xD2B48C)

    Column() {
    }.width('20%').height(30).backgroundColor(0xF5DEB3)
  }.width('100%').height(200).backgroundColor('rgb(242,242,242)').justifyContent(FlexAlign.Start)
  ```

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8e/v3/VFQroSEMT_6FYIE8lKfelA/zh-cn_image_0000002762993191.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=4FB1AA5897D9BC2FD66010313E5CE76346757457A59C63478E41EE8E00C3E8A3)
* justifyContent(FlexAlign.Center)：元素在水平方向中心对齐，第一个元素与行首的距离与最后一个元素与行尾距离相同。

  ```TypeScript
  Row({}) {
    Column() {
    }.width('20%').height(30).backgroundColor(0xF5DEB3)

    Column() {
    }.width('20%').height(30).backgroundColor(0xD2B48C)

    Column() {
    }.width('20%').height(30).backgroundColor(0xF5DEB3)
  }.width('100%').height(200).backgroundColor('rgb(242,242,242)').justifyContent(FlexAlign.Center)
  ```

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/01/v3/NQdUSXRwQjmXRBMiOAwt3w/zh-cn_image_0000002762833303.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=011EEC4E2DDBA76E602644090A578D3DB81950F8F8A4DD1815D24E51ED4D8780)
* justifyContent(FlexAlign.End)：元素在水平方向尾部对齐，最后一个元素与行尾对齐，其他元素与后一个对齐。

  ```TypeScript
  Row({}) {
    Column() {
    }.width('20%').height(30).backgroundColor(0xF5DEB3)

    Column() {
    }.width('20%').height(30).backgroundColor(0xD2B48C)

    Column() {
    }.width('20%').height(30).backgroundColor(0xF5DEB3)
  }.width('100%').height(200).backgroundColor('rgb(242,242,242)').justifyContent(FlexAlign.End)
  ```

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f4/v3/_QX1Zv_uQAiqXxGqWnUQ_A/zh-cn_image_0000002733273788.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=482BA1724335357CE9477AEA3D69DAE5D5B6B8769DA32F224DD1BB47F5F5DE00)
* justifyContent(FlexAlign.SpaceBetween)：水平方向均匀分配元素，相邻元素之间距离相同。第一个元素与行首对齐，最后一个元素与行尾对齐。

  ```TypeScript
  Row({}) {
    Column() {
    }.width('20%').height(30).backgroundColor(0xF5DEB3)

    Column() {
    }.width('20%').height(30).backgroundColor(0xD2B48C)

    Column() {
    }.width('20%').height(30).backgroundColor(0xF5DEB3)
  }.width('100%').height(200).backgroundColor('rgb(242,242,242)').justifyContent(FlexAlign.SpaceBetween)
  ```

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ca/v3/r7aJodPBR5CKXodiroBpDg/zh-cn_image_0000002733433668.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=509F64BBC102EFC7E64EF43D987D066152FBE3E4F9C94EFB128E358CBA2F9ADC)
* justifyContent(FlexAlign.SpaceAround)：水平方向均匀分配元素，相邻元素之间距离相同。第一个元素到行首的距离和最后一个元素到行尾的距离是相邻元素之间距离的一半。

  ```TypeScript
  Row({}) {
    Column() {
    }.width('20%').height(30).backgroundColor(0xF5DEB3)

    Column() {
    }.width('20%').height(30).backgroundColor(0xD2B48C)

    Column() {
    }.width('20%').height(30).backgroundColor(0xF5DEB3)
  }.width('100%').height(200).backgroundColor('rgb(242,242,242)').justifyContent(FlexAlign.SpaceAround)
  ```

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a4/v3/VG6TOXIHRhq_YTQk-DvSWw/zh-cn_image_0000002762993193.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=AEB42CBF8C26810770175D8D07548AB40CA8428F1B4A55238A014D8A715BD726)
* justifyContent(FlexAlign.SpaceEvenly)：水平方向均匀分配元素，相邻元素之间的距离、第一个元素与行首的间距、最后一个元素到行尾的间距都完全一样。

  ```TypeScript
  Row({}) {
    Column() {
    }.width('20%').height(30).backgroundColor(0xF5DEB3)

    Column() {
    }.width('20%').height(30).backgroundColor(0xD2B48C)

    Column() {
    }.width('20%').height(30).backgroundColor(0xF5DEB3)
  }.width('100%').height(200).backgroundColor('rgb(242,242,242)').justifyContent(FlexAlign.SpaceEvenly)
  ```

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a3/v3/pDOrqjFnRviwlMzOg2cc9Q/zh-cn_image_0000002762833305.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=FC8E375B37B033F0E97A2B13D506A58B055618D80D80EC5819FD276CDC91E7FE)

## 布局子元素在交叉轴上的对齐方式

在布局容器内，可以通过[alignItems](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-column#alignitems)属性设置子元素在交叉轴（排列方向的垂直方向）上的对齐方式，且在各类尺寸屏幕中表现一致。其中，交叉轴为垂直方向时，取值为[VerticalAlign](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#verticalalign)类型，水平方向取值为[HorizontalAlign](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#horizontalalign)类型。

[alignSelf](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-flex-layout#alignself)属性用于控制单个子元素在容器交叉轴上的对齐方式，其优先级高于alignItems属性，如果设置了alignSelf属性，则在单个子元素上会覆盖alignItems属性。

### Column容器内子元素在水平方向上的排列

**图7** Column容器内子元素在水平方向上的排列图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3f/v3/uDFJd-FKT7CT_l683EMnYA/zh-cn_image_0000002733273790.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=7B355554852C43A2F57EF61D0C988DB2DC41265F8029B53A91A1F96D608A5074)

* HorizontalAlign.Start：子元素在水平方向左对齐。

  ```TypeScript
  Column({}) {
    Column() {
    }.width('80%').height(50).backgroundColor(0xF5DEB3)

    Column() {
    }.width('80%').height(50).backgroundColor(0xD2B48C)

    Column() {
    }.width('80%').height(50).backgroundColor(0xF5DEB3)
  }.width('100%').alignItems(HorizontalAlign.Start).backgroundColor('rgb(242,242,242)')
  ```

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/17/v3/Vva_wONXSLm2ksF8tEK-uA/zh-cn_image_0000002733433670.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=6BD3613DF3A2EC411506E6FB2A6EDA413F8897927C6257ECF71740FA13645900)
* HorizontalAlign.Center（默认值）：子元素在水平方向居中对齐。

  ```TypeScript
  Column({}) {
    Column() {
    }.width('80%').height(50).backgroundColor(0xF5DEB3)

    Column() {
    }.width('80%').height(50).backgroundColor(0xD2B48C)

    Column() {
    }.width('80%').height(50).backgroundColor(0xF5DEB3)
  }.width('100%').alignItems(HorizontalAlign.Center).backgroundColor('rgb(242,242,242)')
  ```

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ec/v3/mCEVgcnzRuWmFfZhTu3zIw/zh-cn_image_0000002762993195.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=E79D19760E5E856956C16C39C2302C49F7866A84F5E6674FD7AA809D59A747C9)
* HorizontalAlign.End：子元素在水平方向右对齐。

  ```TypeScript
  Column({}) {
    Column() {
    }.width('80%').height(50).backgroundColor(0xF5DEB3)

    Column() {
    }.width('80%').height(50).backgroundColor(0xD2B48C)

    Column() {
    }.width('80%').height(50).backgroundColor(0xF5DEB3)
  }.width('100%').alignItems(HorizontalAlign.End).backgroundColor('rgb(242,242,242)')
  ```

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/90/v3/ezw3e6qKQfCw1nPcaVT2_g/zh-cn_image_0000002762833307.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=B76B4A43B21D7204CA3A440E2AD14DA0CC6027425527651D76839D898C9EE089)

### Row容器内子元素在垂直方向上的排列

**图8** Row容器内子元素在垂直方向上的排列图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cc/v3/r3DjwadHQIORXlt1UmsH3Q/zh-cn_image_0000002733273792.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=4C5D3D54CED822A58F4F341010BFF50F8356BCE362E2102E6DE91FEEE7545531)

* VerticalAlign.Top：子元素在垂直方向顶部对齐。

  ```TypeScript
  Row({}) {
    Column() {
    }.width('20%').height(30).backgroundColor(0xF5DEB3)

    Column() {
    }.width('20%').height(30).backgroundColor(0xD2B48C)

    Column() {
    }.width('20%').height(30).backgroundColor(0xF5DEB3)
  }.width('100%').height(200).alignItems(VerticalAlign.Top).backgroundColor('rgb(242,242,242)')
  ```

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6e/v3/_ul9Z8QmRGqdBtyDP95D3g/zh-cn_image_0000002733433672.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=00BBB777C532D2D3682B26DE8698497F49729768D4F3F1E6376BA6E71D860069)
* VerticalAlign.Center（默认值）：子元素在垂直方向居中对齐。

  ```TypeScript
  Row({}) {
    Column() {
    }.width('20%').height(30).backgroundColor(0xF5DEB3)

    Column() {
    }.width('20%').height(30).backgroundColor(0xD2B48C)

    Column() {
    }.width('20%').height(30).backgroundColor(0xF5DEB3)
  }.width('100%').height(200).alignItems(VerticalAlign.Center).backgroundColor('rgb(242,242,242)')
  ```

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d2/v3/KPej10Z3RBK8Gmk7RaxMzw/zh-cn_image_0000002762993197.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=99C79D8D533318974517B9AB091E44C262D73AC57D86780A8E9F560181820AE7)
* VerticalAlign.Bottom：子元素在垂直方向底部对齐。

  ```TypeScript
  Row({}) {
    Column() {
    }.width('20%').height(30).backgroundColor(0xF5DEB3)

    Column() {
    }.width('20%').height(30).backgroundColor(0xD2B48C)

    Column() {
    }.width('20%').height(30).backgroundColor(0xF5DEB3)
  }.width('100%').height(200).alignItems(VerticalAlign.Bottom).backgroundColor('rgb(242,242,242)')
  ```

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f0/v3/C9Uy9XzcSqqzEto1xL0-bg/zh-cn_image_0000002762833309.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=C6420C33536F0659C7048B107488E451C5E2E88C360B6E660A5861BCF2348C14)

## 自适应拉伸

在线性布局下，常用空白填充组件[Blank](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-blank)，在容器主轴方向自动填充空白空间，达到自适应拉伸效果。Row和Column作为容器，只需要添加宽高为百分比，当屏幕宽高发生变化时，会产生自适应效果。

```TypeScript
@Entry
@Component
struct BlankExample {
  build() {
    Column() {
      Row() {
        Text('Bluetooth').fontSize(18)
        Blank()
        Toggle({ type: ToggleType.Switch, isOn: true })
      }.backgroundColor(0xFFFFFF).borderRadius(15).padding({ left: 12 }).width('100%')
    }.backgroundColor(0xEFEFEF).padding(20).width('100%')
  }
}
```

**图9** 竖屏（自适应屏幕窄边）

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a6/v3/64alyVOoTP6ctK5u4_PLXQ/zh-cn_image_0000002733273794.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=6925C6A0BC68F8E211CCD51A5FA2D110234FFF1D6221593E4A95EECDBD1113CC)

**图10** 横屏（自适应屏幕宽边）

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/89/v3/f1sB24SwQt-i0REdJxFMMA/zh-cn_image_0000002733433674.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=64ED2AA47FD18D12E21D6398AC1B29DEABD64E54BB9143124A4557D5331BE3C2 "点击放大")

## 自适应缩放

自适应缩放是指子元素随容器尺寸的变化而按照预设的比例自动调整尺寸，适应各种不同大小的设备。在线性布局中，可以使用以下两种方法实现自适应缩放。

* 父容器尺寸确定时，使用[layoutWeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-size#layoutweight)属性设置子元素和兄弟元素在主轴上的权重，忽略元素本身尺寸设置，使它们在任意尺寸的设备下自适应占满剩余空间。

  ```TypeScript
  @Entry
  @Component
  struct LayoutWeightExample {
    build() {
      Column() {
        Text('1:2:3').width('100%')
        Row() {
          Column() {
            Text('layoutWeight(1)')
              .textAlign(TextAlign.Center)
          }.layoutWeight(1).backgroundColor(0xF5DEB3).height('100%')

          Column() {
            Text('layoutWeight(2)')
              .textAlign(TextAlign.Center)
          }.layoutWeight(2).backgroundColor(0xD2B48C).height('100%')

          Column() {
            Text('layoutWeight(3)')
              .textAlign(TextAlign.Center)
          }.layoutWeight(3).backgroundColor(0xF5DEB3).height('100%')

        }.backgroundColor(0xffd306).height('30%')

        Text('2:5:3').width('100%')
        Row() {
          Column() {
            Text('layoutWeight(2)')
              .textAlign(TextAlign.Center)
          }.layoutWeight(2).backgroundColor(0xF5DEB3).height('100%')

          Column() {
            Text('layoutWeight(5)')
              .textAlign(TextAlign.Center)
          }.layoutWeight(5).backgroundColor(0xD2B48C).height('100%')

          Column() {
            Text('layoutWeight(3)')
              .textAlign(TextAlign.Center)
          }.layoutWeight(3).backgroundColor(0xF5DEB3).height('100%')
        }.backgroundColor(0xffd306).height('30%')
      }
    }
  }
  ```

  **图11** 横屏

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/nK49YVEkQxuopp-7erz0GQ/zh-cn_image_0000002762993199.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=F012A58B5496BD7E417E618BC96D23A94193029706FC80BA5693716C5B787E3B)

  **图12** 竖屏

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/35/v3/fjqeBXfDQpSRJ9lU1YFP0Q/zh-cn_image_0000002762833311.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=421319FA08CB5E2C5FDC1E7C14E4BAA87607838EBCD963EFA053CA3C966E41CA "点击放大")
* 父容器尺寸确定时，使用百分比设置子元素和兄弟元素的宽度，使它们在任意尺寸的设备下保持固定的自适应占比。

  ```TypeScript
  @Entry
  @Component
  struct WidthExample {
    build() {
      Column() {
        Row() {
          Column() {
            Text('left width 20%')
              .textAlign(TextAlign.Center)
          }.width('20%').backgroundColor(0xF5DEB3).height('100%')

          Column() {
            Text('center width 50%')
              .textAlign(TextAlign.Center)
          }.width('50%').backgroundColor(0xD2B48C).height('100%')

          Column() {
            Text('right width 30%')
              .textAlign(TextAlign.Center)
          }.width('30%').backgroundColor(0xF5DEB3).height('100%')
        }.backgroundColor(0xffd306).height('30%')
      }
    }
  }
  ```

  **图13** 横屏

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4d/v3/WCycTwrfRAmS5ezM2h8ulA/zh-cn_image_0000002733273796.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=496E36C5DB891DFA29A24062BA7BEEFA4A41B690B0164A685D18115388620CDB "点击放大")

  **图14** 竖屏

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/55/v3/YcmUQ3GGQGug5EKX6zCLhw/zh-cn_image_0000002733433676.png?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=361431806AD092FF74A78A9184909783AF272107C943895885F9FBA62E198B48)

## 自适应延伸

自适应延伸是指在不同尺寸设备下，当页面的内容超出屏幕大小而无法完全显示时，可以通过滚动条进行拖动展示。对于线性布局，这种方法适用于容器中内容无法一屏展示的场景。通常有以下两种实现方式。

* [在List中添加滚动条](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-create-list#添加滚动条)：当List子项过多一屏放不下时，可以将每一项子元素放置在不同的组件中，通过滚动条进行拖动展示。可以通过[scrollBar](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll#scrollbar)属性设置滚动条的常驻状态，[edgeEffect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll#edgeeffect)属性设置拖动到内容最末端的回弹效果。

* 使用[Scroll](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-scroll)组件：在线性布局中，开发者可以进行垂直方向或者水平方向的布局。当一屏无法完全显示时，可以在Column或Row组件的外层包裹一个可滚动的容器组件Scroll来实现可滑动的线性布局。

  垂直方向布局中使用Scroll组件：

  ```TypeScript
  @Entry
  @Component
  struct ScrollVerticalExample {
    scroller: Scroller = new Scroller();
    private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    build() {
      Scroll(this.scroller) {
        Column() {
          ForEach(this.arr, (item?:number|undefined) => {
            if(item != undefined){
              Text(item.toString())
                .width('90%')
                .height(150)
                .backgroundColor(0xFFFFFF)
                .borderRadius(15)
                .fontSize(16)
                .textAlign(TextAlign.Center)
                .margin({ top: 10 })
            }
          }, (item:number) => item.toString())
        }.width('100%')
      }
      .backgroundColor(0xDCDCDC)
      .scrollable(ScrollDirection.Vertical) // 滚动方向为垂直方向
      .scrollBar(BarState.On) // 滚动条常驻显示
      .scrollBarColor(Color.Gray) // 滚动条颜色
      .scrollBarWidth(10) // 滚动条宽度
      .edgeEffect(EdgeEffect.Spring) // 滚动到边沿后回弹
    }
  }
  ```

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/58/v3/CajMCinTRDm7DOXWWM2JJA/zh-cn_image_0000002762993201.gif?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=802222D2031C21765F534F2B31F01F6765D5D2ED56761CFEA1629890142BBBAB)

  水平方向布局中使用Scroll组件：

  ```TypeScript
  @Entry
  @Component
  struct ScrollHorizontalExample {
    scroller: Scroller = new Scroller();
    private arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    build() {
      Scroll(this.scroller) {
        Row() {
          ForEach(this.arr, (item?:number|undefined) => {
            if(item != undefined){
              Text(item.toString())
                .height('90%')
                .width(150)
                .backgroundColor(0xFFFFFF)
                .borderRadius(15)
                .fontSize(16)
                .textAlign(TextAlign.Center)
                .margin({ left: 10 })
            }
          })
        }.height('100%')
      }
      .backgroundColor(0xDCDCDC)
      .scrollable(ScrollDirection.Horizontal) // 滚动方向为水平方向
      .scrollBar(BarState.On) // 滚动条常驻显示
      .scrollBarColor(Color.Gray) // 滚动条颜色
      .scrollBarWidth(10) // 滚动条宽度
      .edgeEffect(EdgeEffect.Spring) // 滚动到边沿后回弹
    }
  }
  ```

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8e/v3/DCszaURySO-njzF52k91ww/zh-cn_image_0000002762833313.gif?HW-CC-KV=V1&HW-CC-Date=20260917T084557Z&HW-CC-Expire=31536000000&HW-CC-Sign=DC15CEAB6DD6E4C1B34E0C1EFB08678AC0F018AF056FF4A35DD82D0AA5579942)

