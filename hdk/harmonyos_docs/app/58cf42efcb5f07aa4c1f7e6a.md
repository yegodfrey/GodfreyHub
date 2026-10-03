---
name: document/cn/app/promotion-non-subscription-0000001931836332
title: 消耗型/非消耗型/非续期订阅商品
uri: https://developer.huawei.com/consumer/cn/doc/app/promotion-non-subscription-0000001931836332
---

# 消耗型/非消耗型/非续期订阅商品

在HarmonyOS应用数字商品服务中，针对消耗型/非消耗型/非续期订阅商品，支持您设置两种订阅优惠类型，包含自定义人群促销、设置商品的临时价格调整计划。

**自定义人群促销：** 请提前在商品管理系统中针对商品设置自定义人群促销价格，由您自行根据用户画像判断用户是否满足促销优惠条件。在发起购买前，通过调用查询商品信息接口，获取[promotionalOffers](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/iap-iap#section446812293465)，查询该商品的优惠活动信息；在最终发起购买时，通过将优惠活动信息（[promotionalOfferId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/iap-iap#section1340120344598)）传递到华为IAP Kit，最终将优惠活动信息展示给用户。

自定义人群促销规则：

每个商品最多可设置10个有效的自定义促销价格（与设置的优惠标识一一对应），由您自行决定每一位用户可使用的次数（非消耗型商品购买后终身有效，用户只能购买和享受一次促销）。

**设置商品的临时价格调整计划**：如果想在一段时间内针对特定国家/地区的所有用户展示统一的促销价格，可设置该商品的临时价格调整计划，设置开始和结束日期以及对应国家/地区后，该促销价格届时将对该国家/地区的所有用户展示和生效。

## **设置促销价格**

支持开发者自定义人群并设置促销优惠，一个商品可以设置不同的促销价格。

1、登录AppGallery Connect，选择"APP与元服务"。

2、在应用列表中点击需要设置促销价格的应用。

3、在"运营"页签下的左侧导航栏中，选择"产品运营 > 商品管理"。

4、在商品列表中，点击待设置订阅优惠的非自动续期订阅商品对应"操作"列的"编辑"。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/66/v3/SLj1zvW3TcGCVCR1k-7o4Q/zh-cn_image_0000002478462832.png?HW-CC-KV=V1&HW-CC-Date=20260929T062030Z&HW-CC-Expire=31536000000&HW-CC-Sign=9987875A539737F591270C7206F5069B9D1D0998CBA912FF614F865A8A1015AB)

5、在商品编辑页面，选择"查看编辑"选项。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9d/v3/L3YymMpCTLyZH9ffjNh7Qw/zh-cn_image_0000002405568609.png?HW-CC-KV=V1&HW-CC-Date=20260929T062030Z&HW-CC-Expire=31536000000&HW-CC-Sign=E43E03A08C38456D5670E1A1172FFD16F45C3CBF1DFB911E58F980581462AD1F "点击放大")

6、在商品价格页面，点击"设置促销优惠"。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/74/v3/lf-CcJWnQrKwPzben9Obyg/zh-cn_image_0000002366323296.png?HW-CC-KV=V1&HW-CC-Date=20260929T062030Z&HW-CC-Expire=31536000000&HW-CC-Sign=D2B0313035EE47A3652500C2ACDBFBDFC12404F9BD48A4E18D708ACF01851059 "点击放大")

7、看到如下弹窗，请继续点击"设置促销优惠"。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/74/v3/3v_5bofwRn-0BEJtE8dHWQ/zh-cn_image_0000002366483272.png?HW-CC-KV=V1&HW-CC-Date=20260929T062030Z&HW-CC-Expire=31536000000&HW-CC-Sign=46F626B4EEA1D9F77F0116D932BA6708A8B65122526CFF719E44AA3DD7E047DF "点击放大")

8、继续设置促销活动名称、促销优惠标识符以及开始/结束时间，完成后请点击"下一步"。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7b/v3/IHXhpm0uQHSUChylbM1qCQ/zh-cn_image_0000002366483460.png?HW-CC-KV=V1&HW-CC-Date=20260929T062030Z&HW-CC-Expire=31536000000&HW-CC-Sign=96AECB6CFD00AB184FEAFEE6B6B872200DC511F073E6F4B75C66926E749C5015 "点击放大")
> 说明
>
> * 最多支持设置10个有效优惠标识符。
> * 同一国家/地区在同一时间段可以设置不同促销价。
> * 优惠标识符用于区分不同优惠促销，且在当前商品下唯一，最大长度64个字符，需满足[0-9a-zA-Z]，可包含特殊字符。

9、设置参与促销活动的国家/地区，设置完成后点击"下一步"。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/76/v3/t_bLC4fES9u7jFhqxCvPRQ/zh-cn_image_0000002399966761.png?HW-CC-KV=V1&HW-CC-Date=20260929T062030Z&HW-CC-Expire=31536000000&HW-CC-Sign=8077CE0A3C681EAC8106DE9107C7EE293031D863C0457F07382D220F4474889F "点击放大")

10、可对所有区域的价格进行确认或修改，确认后点击"完成"。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f7/v3/zxwo8YUXR8yvHQUpKcd5tA/zh-cn_image_0000002405570077.png?HW-CC-KV=V1&HW-CC-Date=20260929T062030Z&HW-CC-Expire=31536000000&HW-CC-Sign=40AF6E8CBACB52F49ABEA56887EA8F3E6D71FDA3C626E7B0DC9BF869DA6F6527 "点击放大")

> 注意
>
> 设置促销价和调整价格时，促销价需低于原价。

11、点击"完成"后，跳转回活动列表页。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e9/v3/9OPguDuVRz6Abem4Pm7Vtg/zh-cn_image_0000002405690281.png?HW-CC-KV=V1&HW-CC-Date=20260929T062030Z&HW-CC-Expire=31536000000&HW-CC-Sign=56490B5F0878FD7FAB30E5D2E4D11AA11C054851D9ACF76EE9783A1AE0C2F47A "点击放大")

12、可查看促销详情信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/74/v3/pU-FVXWzShCYsdRIwBa7jg/zh-cn_image_0000002405570981.png?HW-CC-KV=V1&HW-CC-Date=20260929T062030Z&HW-CC-Expire=31536000000&HW-CC-Sign=53021F65BEB25DDD5A44E321F3D4164F729786257F3FE87CE99D7A0C87C4EEC4 "点击放大")

13、如需结束促销活动，点击"立即结束"按钮，弹出确认结束弹窗，点击"确认"即可结束商品促销活动。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a1/v3/bZMVJAtlQBWyDZ--NW_R5A/zh-cn_image_0000002405571849.png?HW-CC-KV=V1&HW-CC-Date=20260929T062030Z&HW-CC-Expire=31536000000&HW-CC-Sign=59F23559794ECD1DF4587F68D05E98D7F4B046EB9CA7EA53D77843F313074F58 "点击放大")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a9/v3/EMjCmTwOQXOfD-nNYy2ERA/zh-cn_image_0000002372012544.png?HW-CC-KV=V1&HW-CC-Date=20260929T062030Z&HW-CC-Expire=31536000000&HW-CC-Sign=FBDA998BA2C6ADAC354E790C344903097DCD8684CE135907D7FC354B5A9252E1)
> 注意
>
> 如有冲突时间段、国家、价格，可通过修改促销价或删除冲突的未来价格调整计划。

