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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/69/v3/eLMyFc1oTsuojsTo3ONEvA/zh-cn_image_0000002749491988.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=1284E6F446C76E905291CFB7987C6A7F6981F1A062002EB5D24B6142DC52C7D0)

**图2** Row容器内子元素排列示意图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a1/v3/D4riSSFGQt2tT60VwAHNkg/zh-cn_image_0000002779091045.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=76E279527904A804924F7C891E6216344E1DA14F8811A75B9BF4912461AD4F11)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b3/v3/9QqnGLWoRfqyYMnnr_nziA/zh-cn_image_0000002778931189.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=4B9A01852EF868F963637767ADDC109CAD38E1C9F70CF284D7A30B7670E0D0FC)

```TypeScript
Column({ space: 20 }) {
  Text('space: 20').fontSize(15).fontColor(Color.Gray).width('90%')
  Row().width('90%').height(50).backgroundColor(0xF5DEB3)
  Row().width('90%').height(50).backgroundColor(0xD2B48C)
  Row().width('90%').height(50).backgroundColor(0xF5DEB3)
}.width('100%')
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9c/v3/m8rLc_5ISJykEu1cyicSEA/zh-cn_image_0000002749332106.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=D7D29AEBEBCEFC08DF600A92E8D660A3E336D8AE5A1943FC3B533B7B4FFF07A5)

### Row容器内排列方向上的间距

**图4** Row容器内排列方向的间距图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a1/v3/ES-bOLxcT7-6vdMfqsjw-A/zh-cn_image_0000002749491990.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=05EE75E242AC06B1B1CD22456CAC5D8756E4D2B3A99CE67369CC8155D26384A8)

```TypeScript
Row({ space: 35 }) {
  Text('space: 35').fontSize(15).fontColor(Color.Gray)
  Row().width('10%').height(150).backgroundColor(0xF5DEB3)
  Row().width('10%').height(150).backgroundColor(0xD2B48C)
  Row().width('10%').height(150).backgroundColor(0xF5DEB3)
}.width('90%')
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f7/v3/cve1_iUpSCCIOx4IoYOGDA/zh-cn_image_0000002779091047.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=0A114929D091354AA5F29B070E6E9F7F5204F59A12CC77EAFDB57FBFEB808E3F)

## 布局子元素在主轴上的排列方式

在布局容器内，可以通过[justifyContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-column#justifycontent8)属性设置子元素在容器主轴上的排列方式。可以从主轴起始位置开始排布，也可以从主轴结束位置开始排布，或者均匀分割主轴的空间。

### Column容器内子元素在垂直方向上的排列

**图5** Column容器内子元素在垂直方向上的排列图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/57/v3/6aKBXfpvRSC2yOVQAebRUA/zh-cn_image_0000002778931191.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=072172371956E5B69E1F01AA95D165E27A85AFA73951E5AFBFC53B634564F1EF)

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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e9/v3/kXFK9SzuSlaiy5tgb3ZwmQ/zh-cn_image_0000002749332108.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=CDC5EFEA61110FE0BE5E041F1221346B73B2C16CB2E8E0D1C0ECF69C38EFF95C)
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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/12/v3/q2Q2DPlzRNqS8XGSo9oDTA/zh-cn_image_0000002749491992.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=850B0467587DDB07C276D5B168DE39A5856781B8E91536D2BB6B60555B00C329)
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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7d/v3/5HU9mVWBRxSoDt6rCUazng/zh-cn_image_0000002779091049.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=397D2E869B8195C63A91FC45DF8DA2FA346E4205F2CCBCBCE4C586A10E68D4C3)
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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2/v3/UVkdw6vsTtKCzqmkt4FXtA/zh-cn_image_0000002778931193.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=DA02F428285D6FD3C4CBD75EC07C16908B2FDEC8F7D21738CAD1C0040AAE04D8)
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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7f/v3/t1UQZNehRPCH5Ru_8K8PMg/zh-cn_image_0000002749332110.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=1F53D62E176E5899DFE4D4A51D873282BE5881AA246E67094D209EB41BD5D284)
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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d1/v3/0YWhlDooQlq_TtHEWeQVQw/zh-cn_image_0000002749491994.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=E833BCB9C2A8DC2ABEA55481BF043A2943102BBC983F4D1A9D649A055065CFCD)

### Row容器内子元素在水平方向上的排列

**图6** Row容器内子元素在水平方向上的排列图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cd/v3/-cOilv2xRNm_0_W29herng/zh-cn_image_0000002779091051.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=1D1FBF98717C5CE39A78008D25D9FB79FEF56E3DB0703B4D2D75936F320726A8)

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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a1/v3/3-C3tuqQRH6Wua3kRqSp2Q/zh-cn_image_0000002778931195.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=D7801D900E030F0B95BB4EC52F9364E50E3F7A638C543AC7FA1CA2B95F0E7268)
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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1a/v3/HIOD8hKTQFKjU7Ua7ZBDsw/zh-cn_image_0000002749332112.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=4A885097249AEA386D862ADC1DEF79BBB484488C14DDC3C0DC586E2F6209DF7A)
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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/60/v3/UVEoVh9ATqSN-nODdlCn7Q/zh-cn_image_0000002749491996.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=3CAE4737BAF1C2861F0A31A5744127056D0088F1FAE8B5AE8D858CA053D9F47A)
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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/eb/v3/mrxKCMRYQvCxtXomse-a1Q/zh-cn_image_0000002779091053.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=60A04623F058B24D89D4EB7F35DB4087A8120B36326D316962CD361408C46E96)
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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6e/v3/Lf0pDcAmQg6FciVCm7G26Q/zh-cn_image_0000002778931197.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=1039DD6526012EC245603F1AD0BA54FC97B719018A2E3AC7EAC57998E392A11A)
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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/72/v3/wpPDyH7mSWqis97Tg0cQMw/zh-cn_image_0000002749332114.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=4A2A3C5C3ED21B492AD1F60A98E942E46A552C4B564C28A7D0C1A8E872F66B68)

## 布局子元素在交叉轴上的对齐方式

在布局容器内，可以通过[alignItems](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-column#alignitems)属性设置子元素在交叉轴（排列方向的垂直方向）上的对齐方式，且在各类尺寸屏幕中表现一致。其中，交叉轴为垂直方向时，取值为[VerticalAlign](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#verticalalign)类型，水平方向取值为[HorizontalAlign](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#horizontalalign)类型。

[alignSelf](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-flex-layout#alignself)属性用于控制单个子元素在容器交叉轴上的对齐方式，其优先级高于alignItems属性，如果设置了alignSelf属性，则在单个子元素上会覆盖alignItems属性。

### Column容器内子元素在水平方向上的排列

**图7** Column容器内子元素在水平方向上的排列图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4d/v3/IE3Tqr7XRYCB-Toido0fkQ/zh-cn_image_0000002749491998.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=3762338228DC7A718CC759E1E44B20BF176B2D1D2168AE2CD67F5DF6B9E90C51)

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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ec/v3/ZqX3AymtQriiCg2wgZdtsA/zh-cn_image_0000002779091055.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=8863AFBCC9C0A41E8570A7D1290871CB046C128100100363C30B0A072778A08A)
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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3e/v3/a6AfOhv0QX6j8mvjdk7a5Q/zh-cn_image_0000002778931199.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=F401E23597C2DF8CAB6E63C72F68A88422F0ECEC3A8309A0F2B9041F668B3792)
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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f5/v3/r4QkLOmoQ0WgnKqgXKB8xA/zh-cn_image_0000002749332116.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=9D9DBCA775205F054C0F4F90042275F1A9BDF8FD26A322B4213A61ED8B241698)

### Row容器内子元素在垂直方向上的排列

**图8** Row容器内子元素在垂直方向上的排列图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fb/v3/SPhvQZVvTwSSCE81LdCORw/zh-cn_image_0000002749492000.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=1705CB9983729E67070463D2FEAB56B68E9CC585C5C85CF7C939EEBFA30EBBCF)

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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d8/v3/dJot5rCHTw-cVcfSZk47Cg/zh-cn_image_0000002779091057.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=A18E598E030883D2AECE145FB77DEAF5A1A1EDE5810DAF1601C5B7502A664D43)
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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8f/v3/685JuFX4TnaRNuK1mUidQA/zh-cn_image_0000002778931201.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=D0957CF0D2D77356E160F613601C8394869D89C4627BD64B5FFDF32B98D56E9A)
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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f7/v3/1Yf8AgoEQ8OvVG-_Z2Rl9w/zh-cn_image_0000002749332118.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=98170356847C012F87ADB01901848E171017CE2F5996991F0B49E10BA5BB20AB)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7a/v3/MPr3__fNRouG9jvP4R-CGg/zh-cn_image_0000002749492002.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=F9AA3A97C7D987E73B57F07CB4940AA203EBA1349FDE77E51D084DE1B334BB23)

**图10** 横屏（自适应屏幕宽边）

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/49/v3/hOiNJeRBScmnYZYPkmAXqA/zh-cn_image_0000002779091059.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=44C99BC3911E14D5198A87263496B8EF974D72E99245E39D723EC1D263D4FB4C)

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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d3/v3/n7wcCUToSWKHAyv73X6Utg/zh-cn_image_0000002778931203.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=0A1307ACFC2BE7DD7B3D166AAA54DFC59E58A455A22FF1DE64D84D33DF081A83)

  **图12** 竖屏

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/12/v3/N84EnUKMRPmLmMGStHebSg/zh-cn_image_0000002749332120.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=A8CFE9536D708B7CC87BA731EE8E70F7CF5E537D01949D1F40F3AF064A5BF444)
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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7d/v3/jEyxJmmRQvm4Fcqq5-9VtQ/zh-cn_image_0000002749492004.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=3BA97D4FD36D913E5D30608CE3F9322F698C85F09B48C64854DEC2ADACE1EEE1)

  **图14** 竖屏

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/54/v3/9eFfqsCnRKiBGeSWCGPYMg/zh-cn_image_0000002779091061.png?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=FCDDC8073D4AA7496B29F76DE686C8A5B4DB4A4070B128B1E5D4088C42403C13)

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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ae/v3/DZ4A-D8GTdi8HKwYIbS1Mw/zh-cn_image_0000002778931205.gif?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=CCCB327CCB3C13855672D73F1E4999634778CF79A189D2F529E328CFCB37ABD5)

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

  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c7/v3/Lxpx3vukSqqKZYxgNAOlSw/zh-cn_image_0000002749332122.gif?HW-CC-KV=V1&HW-CC-Date=20260929T121656Z&HW-CC-Expire=31536000000&HW-CC-Sign=B48196C39A1959C7D69755B318D58C4E28B0297BC415975BCB923A5A0D359C1D)

