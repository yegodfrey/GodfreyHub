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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/79/v3/l_5nbmY6TtaeRlfnIcElYw/zh-cn_image_0000002670263951.png?HW-CC-KV=V1&HW-CC-Date=20260909T163617Z&HW-CC-Expire=31536000000&HW-CC-Sign=FD4612E63412C040DB0300AE5C8A9A8BF6D9354121AE2B84FD12CB72AB713565)

例子2：控制列表的显示与隐藏

通过点击红色按钮，控制列表属性的显示与隐藏。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/JJSds6pBROeMWmAjM8jezg/zh-cn_image_0000002670104095.png?HW-CC-KV=V1&HW-CC-Date=20260909T163617Z&HW-CC-Expire=31536000000&HW-CC-Sign=29040615604C50DACB3A56B073F27D6594636D10800B77821843C2DA2796DEB7)

步骤：

1、在堆叠组件里放置两个按钮，使其重叠在一起。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/29/v3/WBZxZ8eKT_2nMPvvaPXHtg/zh-cn_image_0000002670263953.png?HW-CC-KV=V1&HW-CC-Date=20260909T163617Z&HW-CC-Expire=31536000000&HW-CC-Sign=02333D61D15ADEA289379FE95BEF775451027E07B902F81721AC3562250FD793)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/11/v3/3Bqy-QZ7RaKb1oN1mLCOjQ/zh-cn_image_0000002640104122.png?HW-CC-KV=V1&HW-CC-Date=20260909T163617Z&HW-CC-Expire=31536000000&HW-CC-Sign=45CF1FAF0ED4663C201938F533C5551903413F921E281FE7517D28F93DBBD362)

2、给"收起"按钮（按钮-0）配置点击事件。

事件链：点击后把"收起"按钮隐藏、把"展开"按钮显示、把列表组件隐藏。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f1/v3/QDGdTU8wR06skImHEDyeuw/zh-cn_image_0000002640104126.png?HW-CC-KV=V1&HW-CC-Date=20260909T163617Z&HW-CC-Expire=31536000000&HW-CC-Sign=A2F5565F3A1E609065B8DAD06E9A42D8153993A7B3BC604BB41874754BF0BAFA)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7b/v3/YJ39etvTS7O2RfeomesDXA/zh-cn_image_0000002670104099.png?HW-CC-KV=V1&HW-CC-Date=20260909T163617Z&HW-CC-Expire=31536000000&HW-CC-Sign=800284A5C8E4B24F9D54F3D3EA0FA424083BAC6402A78D6676242C2A11C4692C)

3、给"展开"按钮（按钮-1）配置事件

事件链：点击后把"展开"按钮隐藏、把"收起"按钮显示、把列表组件显示。再给"展开"按钮配置加载时事件，卡片加载时把"展开"按钮隐藏。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/15/v3/xgrfDUrPTOOF4R8vcqpuuw/zh-cn_image_0000002640104120.png?HW-CC-KV=V1&HW-CC-Date=20260909T163617Z&HW-CC-Expire=31536000000&HW-CC-Sign=7BD24EA3BC863FCEDF8370C3AF64BAF54FDEEE79DC8EDF38723DE88E1BE73380)![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/xPa90Un-QtaWbDSoWe-EHQ/zh-cn_image_0000002640264060.png?HW-CC-KV=V1&HW-CC-Date=20260909T163617Z&HW-CC-Expire=31536000000&HW-CC-Sign=BA4CF0962C9C0EE96706637F35113BCBC206563B979D8BF2CFCB5D739538FE0F)

这样就能实现点击按钮，控制列表显示与隐藏。

