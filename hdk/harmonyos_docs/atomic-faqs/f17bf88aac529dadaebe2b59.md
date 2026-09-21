---
name: document/cn/atomic-faqs/faqs-common-account-26
title: 华为账号登录页面中，匿名手机号下方未展示"华为账号绑定号码"文本
uri: https://developer.huawei.com/consumer/cn/doc/atomic-faqs/faqs-common-account-26
---

# 华为账号登录页面中，匿名手机号下方未展示"华为账号绑定号码"文本

## 问题现象

在华为账号登录页面中使用华为账号登录时，匿名手机号下方理应展示"华为账号绑定号码"，但是未展示"华为账号绑定号码"，与预期不符。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f8/v3/Iq4_Q7zHTreuLbpo6mKi8Q/zh-cn_image_0000002658797705.png?HW-CC-KV=V1&HW-CC-Date=20260910T055430Z&HW-CC-Expire=31536000000&HW-CC-Sign=CD8B819DCF4A2256DABC346974746D9F89EB9DD8EA098B8C8887B8262259341A "点击放大")

## 背景知识

根据[使用规范](https://developer.huawei.com/consumer/cn/doc/design-guides/id-0000001880001344#section149881932316)，调用【华为账号一键登录】按钮时，页面必须包含以下【必选】项。

* 用户匿名手机号：由开发者传入，从华为账号中获取的匿名化手机号。
* "华为账号绑定号码"：由开发者传入，字串固定，不可更改。
* 隐私与用户协议：必须展示《华为账号用户认证协议》，可选择展示其他协议，需支持用户查看详情。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/Qr-lFU7XQ4iRckWFsXX6Cg/zh-cn_image_0000002628558340.png?HW-CC-KV=V1&HW-CC-Date=20260910T055430Z&HW-CC-Expire=31536000000&HW-CC-Sign=53003D237B41CDEA05882C8CBD26EFA6A8910BDA21BE755540B0FC1AF15ECACC)

## 问题定位

查看【华为账号登录】页面的布局设置，发现匿名手机号下方未配置"华为账号绑定号码"文本显示。

```screen
Column() {
 // 展示用户匿名手机号
  Text(this.quickLoginAnonymousPhone)
    .fontSize(36)
    .fontColor($r('sys.color.ohos_id_color_text_primary'))
    .fontFamily($r('sys.string.ohos_id_text_font_family_medium'))
    .fontWeight(FontWeight.Bold)
    .lineHeight(48)
    .textAlign(TextAlign.Center)
    .maxLines(1)
    .constraintSize({ maxWidth: '100%', minHeight: 48 })
}
.margin({
  top: 64
})

// 未展示【华为账号登录】按钮
```

## 分析结论

在【华为账号登录】页面中，匿名手机号下方缺少"华为账号绑定号码"文本展示配置。

## 修改建议

匿名手机号下方设置展示"华为账号绑定号码"文本，详细请参考[华为账号一键登录（获取手机号和UnionID/OpenID）](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-phone-unionid-login)。

