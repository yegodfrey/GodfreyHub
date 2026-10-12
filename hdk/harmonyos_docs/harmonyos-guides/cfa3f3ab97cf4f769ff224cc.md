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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/02/v3/iIhIS1jOQYKgjrWqaV4zTQ/zh-cn_image_0000002784662145.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=CFC95C94BF09A2073134ECFB8613D9A2BC64EA3B19B8FEC5A7FB4BC1F60CC231)

**图2** Row容器内子元素排列示意图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3d/v3/YJvDT0AnStOgf2g5SUYTrw/zh-cn_image_0000002755023212.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=75FEB37D9B8CD8F7E88ADC09A07FCE05C01E640BBE9690D5962F4C3C552D7F70)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c3/v3/sjCz3L7fSieL3wCHrvfyqA/zh-cn_image_0000002755183098.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=3DA0F4F592C6B4A614654EDAEABA9F9059E829D6ACC43822FC4020E412A026BC)

```TypeScript
Column({ space: 20 }) {
  Text('space: 20').fontSize(15).fontColor(Color.Gray).width('90%')
  Row().width('90%').height(50).backgroundColor(0xF5DEB3)
  Row().width('90%').height(50).backgroundColor(0xD2B48C)
  Row().width('90%').height(50).backgroundColor(0xF5DEB3)
}.width('100%')
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/56/v3/NPedsV0BSwiBwiwaMzV8YQ/zh-cn_image_0000002784581963.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=0EE7BBC0977FFDD47C01F6CEF774D0F3D1DE6E173289E4BA56D8081722758F13)

### Row容器内排列方向上的间距

**图4** Row容器内排列方向的间距图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/7vPfRXPxQ_moVgdXaVbpBA/zh-cn_image_0000002784662147.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=2BA7FC47979F8996D45278FEB6A4F94306E9DDD77CB792B51045D5F4A95A8D26)

```TypeScript
Row({ space: 35 }) {
  Text('space: 35').fontSize(15).fontColor(Color.Gray)
  Row().width('10%').height(150).backgroundColor(0xF5DEB3)
  Row().width('10%').height(150).backgroundColor(0xD2B48C)
  Row().width('10%').height(150).backgroundColor(0xF5DEB3)
}.width('90%')
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9a/v3/6KjmA0ZrRL-bftrpSKsj0A/zh-cn_image_0000002755023214.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=090B020922B45BBCAAFCB03D9F9FC392B35AE7C794BB2F9ADB84E3622C1333D0)

## 布局子元素在主轴上的排列方式

在布局容器内，可以通过[justifyContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-column#justifycontent8)属性设置子元素在容器主轴上的排列方式。可以从主轴起始位置开始排布，也可以从主轴结束位置开始排布，或者均匀分割主轴的空间。

### Column容器内子元素在垂直方向上的排列

**图5** Column容器内子元素在垂直方向上的排列图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bf/v3/EBzr_1QaSrONUvT3K2s3nQ/zh-cn_image_0000002755183100.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=CBE1EF14FE00DA9B0D9C73C5FA83638DED3C33FF7A98DA81047B32502D87D4D7)

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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8b/v3/msRhDkAaRsa1wq8tJrJtxg/zh-cn_image_0000002784581965.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=19187E2D8084A3C01233D94AA5431058506750D5B0764C7AE21040E647D9C170)
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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4f/v3/p63VW4lZRGSpY4MA8xS0Zw/zh-cn_image_0000002784662149.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=8CD13102837B7190862A64FB311610169CD6A8E23CFCB4281D7E8BBBDBB31313)
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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ac/v3/aEVSbxkdSPux55ehrZ0wMw/zh-cn_image_0000002755023216.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=A629F652DEDE13FBA04266C2DB1DD8E0B42F58A5C08CC4B7C4A3391C06732DD3)
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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/af/v3/vQeQ4ajwRNmQp6gSZmrnJw/zh-cn_image_0000002755183102.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=376B7AF69F8D652415750DAB7366971C732B57CFD4C2A5A17A88A56F39550935)
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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b1/v3/_723rJgqQZK_WVCDFaJ21g/zh-cn_image_0000002784581967.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=87FF209DCE58BB98FA808AC34E0B37EC4DF4C042236B147FCA3C6D5BE59691F5)
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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/86/v3/FDfyRsNgQsCCrB93ULOpPg/zh-cn_image_0000002784662151.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=7F5AF042F9FE167C74B055AE2502CA9EE40B77FB840959AC0BF83A3574CBC0EB)

### Row容器内子元素在水平方向上的排列

**图6** Row容器内子元素在水平方向上的排列图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2b/v3/Ey_MDQqCSby_RKcBmeLoOQ/zh-cn_image_0000002755023218.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=EF706CF88B734DF38E94C05C9BEFBD72EFC10B0159383F71E40D31BA3C4C399C)

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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/35/v3/SGOq7INETTm082z1xpjZ7Q/zh-cn_image_0000002755183104.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=BCE6A3A528E0EE6743FD4148539B32E39B2B3056F6567E8611994C2C0CFEB80F)
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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a3/v3/jMmmH_c6RmG1rrkIFCqTNA/zh-cn_image_0000002784581969.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=0CD0821C23A09B24B76029EF205130B576F45E32FE7146DAE70B14DB7C0AA737)
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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/30/v3/67U2LEICR7umxb8-z__smw/zh-cn_image_0000002784662153.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=765FF204F1C5AB0145F538B4E75B45419914076DFCAA4DB9E9E9AE422DEC2302)
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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/20/v3/DBtCOM6GSQC6s5iMTqrn-A/zh-cn_image_0000002755023220.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=F12F041008806091BBF33DA7EAFEDF53F20751663083DC5C90BB0013849A530A)
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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/40/v3/LzD79GEWQFGYCB1NEc_Xrw/zh-cn_image_0000002755183106.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=64709A5080CF06536DB9F4549947C03F92CBD7AF8317D2CB4D25D9929CD86708)
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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/79/v3/YZ8an-JHTmKUjxJJIsQlkg/zh-cn_image_0000002784581971.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=2078C193F0C825C4BC19FD82ADC8C1DFD8C64A2FF5CDB33B8B7E43B826C81746)

## 布局子元素在交叉轴上的对齐方式

在布局容器内，可以通过[alignItems](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-column#alignitems)属性设置子元素在交叉轴（排列方向的垂直方向）上的对齐方式，且在各类尺寸屏幕中表现一致。其中，交叉轴为垂直方向时，取值为[VerticalAlign](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#verticalalign)类型，水平方向取值为[HorizontalAlign](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#horizontalalign)类型。

[alignSelf](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-flex-layout#alignself)属性用于控制单个子元素在容器交叉轴上的对齐方式，其优先级高于alignItems属性，如果设置了alignSelf属性，则在单个子元素上会覆盖alignItems属性。

### Column容器内子元素在水平方向上的排列

**图7** Column容器内子元素在水平方向上的排列图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/32/v3/992CqiW3SR62ufTDOO5TUg/zh-cn_image_0000002784662155.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=8F0A9D4C755C3DC2F38202D326625F5FF8DAF2917D6E45AE458A7ED644679245)

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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bb/v3/KuH1yIeXTF-ZM31h3LmeYQ/zh-cn_image_0000002755023222.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=97D2286C24711C225159126DCDF69E0FE0A59E9D3614AA25CD3636D48C213CAE)
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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a5/v3/I73YVieZSlKFQTto3_UBig/zh-cn_image_0000002755183108.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=3E82DA3F33FB33184E46A3B74BE6F3E7B2EF0719DC90EA8CF53D5CAFC394E703)
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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/40/v3/l9Xrj4QFSSeGeJ9Y9wfFRg/zh-cn_image_0000002784581973.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=70EA72B77EE76C92245FA74DA6208EFA8CC59EF970166C4421E50087862637AD)

### Row容器内子元素在垂直方向上的排列

**图8** Row容器内子元素在垂直方向上的排列图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cf/v3/ZFf6MrZtQrumQTG1--cgwA/zh-cn_image_0000002784662157.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=419D95D76A43423147B575AC94A7DD4E051DE2D45BCD82E07FE4932D1E93D2F5)

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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e0/v3/KdhtUw4pTlOLyaSqxo4rJw/zh-cn_image_0000002755023224.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=EB0BCDECC014328F69B2723252ABD511D1873EA313D412C9EE2D3E0C4EDC7EB3)
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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/58/v3/2li8XXIxRnexdI6d_5Zmrg/zh-cn_image_0000002755183110.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=827E04CCB34AF5E6EF13F99EEC03F4BDBC1BD32AD4FC5A5107059F0F8C7F10D4)
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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9f/v3/F-jIwPJuT7OlLDO-zps-Xg/zh-cn_image_0000002784581975.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=27A7D7045A106E1967BAAD46FE8CAABE045E66F6F63A1A231506DF509507D405)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c2/v3/ayRa98L3ReuQYI-sw6KglA/zh-cn_image_0000002784662159.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=64C083D86AF3B526B8BFE7BADC314814D38C14E98EB2B4F816B13128EE5BDC2F)

**图10** 横屏（自适应屏幕宽边）

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a9/v3/XVoBY6hqS-aIwNXAxTOVjw/zh-cn_image_0000002755023226.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=67E48293AE5B9BC44086CEFAE6257AFB28FE730355105B58396D9AC06A292DA0)

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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ec/v3/_VU2SkrvTbK9W7gvh-bT-g/zh-cn_image_0000002755183112.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=29EEC9DB1519DA8CDC331B484FA9B42847AC0D2EEC8DB26424471831B155242A)

  **图12** 竖屏

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/70/v3/WyhQA5CMSs2jsaPokSrX-A/zh-cn_image_0000002784581977.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=0F39965E8CA2395E68B2AECA9EC6989581DE32D92680A56BFEF0805433E90862)
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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a4/v3/m-WhQhxMRxu0KtWr2qsQbg/zh-cn_image_0000002784662161.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=9951AA76A3B4E3C7815EA402C7270374E5626DAA7CE891257978BCB4A997489D)

  **图14** 竖屏

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b6/v3/p95auLQdQH6xtcJLYYoYtw/zh-cn_image_0000002755023228.png?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=95711BBE578CF502B9F808B13FF712239C5415082F85600B5E95D3F86D102B6A)

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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/aa/v3/39W8BmuJTM-jd9uxQMgl3g/zh-cn_image_0000002755183114.gif?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=B0D71FC327AD3FD53B6B67B2D3FAE49F3445AFBCB914259D412F0473A7F0D89B)

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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c3/v3/OOKKIiSkRRabBbrxEvZ6zQ/zh-cn_image_0000002784581979.gif?HW-CC-KV=V1&HW-CC-Date=20261009T092718Z&HW-CC-Expire=31536000000&HW-CC-Sign=5C9DB6DC438F36C4D3507E972A926FF98AFCC1AD13CCD044AF126EA55DE68746)

