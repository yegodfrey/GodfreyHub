---
name: document/cn/service/intents-kit73-0000002504448462
title: 商家券对接
uri: https://developer.huawei.com/consumer/cn/doc/service/intents-kit73-0000002504448462
---

# 商家券对接

#### 接入商家券后有什么好处？

商家接入商家券后，可以利用华为的公域为商家代发放优惠券，引流到商家的元服务内进行核销使用，提升商家元服务的曝光和获客量。  

#### 怎么在华为的公域申请投放商家券？

可以联系您对应的华为运营，由华为运营配置露出，也可以在[AGC界面上](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/)直接发起申请（构建中），运营经过1-2个工作日审核通过后就直接投放在华为公域了。  

#### 商家券接入需要付费吗？

不需要，商家券是华为为活跃生态而构建的，免费对接。  

#### 商家券的接入指导在哪里？

可参考如下地址：[商家券接入指导](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/payment-merchant-coupons-0000001871681997)  

#### 如何接入商家券Skill?

[下载Skill](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260813114803.52464969467165303551192258820972:20260822161457:2800:FB968B1D1F86C6F203D9DB569836C4815D6DEC209F2FF918D290E662C2137F3B.zip?needInitFileName=true)，具体可查看[接入Skill说明](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/payment-merc-coup-skill-introduction-0000002696288983)，助力更高效完成商家券全链路接入。  

#### 创建券批次时，merchantLogoUrl 是否需要通过专门接口上传图片？

不需要，商户仅需提供公网可访问的 Logo 图片链接，系统会直接使用该链接展示商户标识。  

#### 修改批次预算时，库存（总限额/日限额）的校验规则是什么？

批次总限额（targetMaxCoupons、currentMaxCoupons）：仅支持递增，即新值必须大于当前值；

日限额（targetMaxCouponsByDay、currentMaxCouponsByDay）：支持递减，可按需调低。  

#### 查询用户券列表接口支持哪些过滤条件？券量多时是否一次性返回？

接口支持分页，不会一次性返回全部数据，避免超时。请求体可按券批次号、券状态等条件进行过滤，便于精准查询。  

#### 发券事件回调中coupons 为List 结构，什么情况下会一次推送多张券？

当用户以"券包"形式一键领取多张券时，回调通知会一次性将该批次所有券的领取信息批量推送给商户。  

#### 创建批次时设置的回调地址，与商户号级别的回调地址，哪个优先级更高？

商户维度回调地址优先级高于批次维度。如果商户号已配置回调地址，则会覆盖批次中单独设置的地址。  

#### 发券回调数据是否加密？加密类型能否由商户指定？

当前回调数据不加密，且加密类型不支持商户自定义。  

#### 接入时提示"商户权限不足"，需要如何在商户后台处理？

请首先检查接口请求中是否正确传入商户号。若缺失该参数，会导致权限校验失败，请补全后重试。  

#### 回调接口验签失败，应如何排查？

建议开发人员前往开发者中心查看完整的验签规则：[签名与验签规则](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-signature-rule-0000001538533912#section395172634813)  
