---
name: document/cn/service/modify-component-properties-0000002452394064
title: 修改组件属性
uri: https://developer.huawei.com/consumer/cn/doc/service/modify-component-properties-0000002452394064
---

# 修改组件属性

提供以下组件，可修改其部分属性

布局组件：横向、纵向、动态列表、堆叠。

基础组件：图片、文本、标签、图标、按钮、开关。

例子1：新增执行条件功能，当传入的数据为"red"时，标签的字体颜色就会变为设置的颜色"#f33c20"。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/79/v3/l_5nbmY6TtaeRlfnIcElYw/zh-cn_image_0000002670263951.png?HW-CC-KV=V1&HW-CC-Date=20260924T081231Z&HW-CC-Expire=31536000000&HW-CC-Sign=E8495B9CF4B0394DED129BD2B135974E23CAC9F0A31D661E34A83DDEFFEE135F)

例子2：控制列表的显示与隐藏

通过点击红色按钮，控制列表属性的显示与隐藏。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/JJSds6pBROeMWmAjM8jezg/zh-cn_image_0000002670104095.png?HW-CC-KV=V1&HW-CC-Date=20260924T081231Z&HW-CC-Expire=31536000000&HW-CC-Sign=B609EFB0C2E25991C0F9D26470B72F0117C81569EF6E39CFE5A7A36BA9FC0B2B)

步骤：

1、在堆叠组件里放置两个按钮，使其重叠在一起。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/29/v3/WBZxZ8eKT_2nMPvvaPXHtg/zh-cn_image_0000002670263953.png?HW-CC-KV=V1&HW-CC-Date=20260924T081231Z&HW-CC-Expire=31536000000&HW-CC-Sign=A3B525E558EF1570771D2D959751B20CAB85018EAD636DB2715AB54F07A31F52)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/11/v3/3Bqy-QZ7RaKb1oN1mLCOjQ/zh-cn_image_0000002640104122.png?HW-CC-KV=V1&HW-CC-Date=20260924T081231Z&HW-CC-Expire=31536000000&HW-CC-Sign=0FF7914D88897F3E78BBA1724D004E17206955336575D99585A281B7DB898439)

2、给"收起"按钮（按钮-0）配置点击事件。

事件链：点击后把"收起"按钮隐藏、把"展开"按钮显示、把列表组件隐藏。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f1/v3/QDGdTU8wR06skImHEDyeuw/zh-cn_image_0000002640104126.png?HW-CC-KV=V1&HW-CC-Date=20260924T081231Z&HW-CC-Expire=31536000000&HW-CC-Sign=BC2108BB7ACC6816B30D0C8B28AD7634DC4F337292F16A5FA96BEE8DE2BE8B3F)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7b/v3/YJ39etvTS7O2RfeomesDXA/zh-cn_image_0000002670104099.png?HW-CC-KV=V1&HW-CC-Date=20260924T081231Z&HW-CC-Expire=31536000000&HW-CC-Sign=F47C05609A7B304BBA6534DE0D4DCE82405CB9A95A8CAD18A43FFD14F0EE50E7)

3、给"展开"按钮（按钮-1）配置事件

事件链：点击后把"展开"按钮隐藏、把"收起"按钮显示、把列表组件显示。再给"展开"按钮配置加载时事件，卡片加载时把"展开"按钮隐藏。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/15/v3/xgrfDUrPTOOF4R8vcqpuuw/zh-cn_image_0000002640104120.png?HW-CC-KV=V1&HW-CC-Date=20260924T081231Z&HW-CC-Expire=31536000000&HW-CC-Sign=9A474214C727B816C734569965E1A3B96275B097C3109F56D4EDFCABCFEA6E01)![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/xPa90Un-QtaWbDSoWe-EHQ/zh-cn_image_0000002640264060.png?HW-CC-KV=V1&HW-CC-Date=20260924T081231Z&HW-CC-Expire=31536000000&HW-CC-Sign=ACB4EC80625A6D34F4B2D68EE319B4DE7CEEFBB22E4008B5211BDBFCCA532B8F)

这样就能实现点击按钮，控制列表显示与隐藏。

