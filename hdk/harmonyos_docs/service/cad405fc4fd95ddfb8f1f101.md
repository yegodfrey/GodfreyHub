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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/79/v3/l_5nbmY6TtaeRlfnIcElYw/zh-cn_image_0000002670263951.png?HW-CC-KV=V1&HW-CC-Date=20261008T173446Z&HW-CC-Expire=31536000000&HW-CC-Sign=F8A1D3D01DABF60F19AB48BA31B320A894A32019153B3D33A5B88706285B920C)

例子2：控制列表的显示与隐藏

通过点击红色按钮，控制列表属性的显示与隐藏。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/JJSds6pBROeMWmAjM8jezg/zh-cn_image_0000002670104095.png?HW-CC-KV=V1&HW-CC-Date=20261008T173446Z&HW-CC-Expire=31536000000&HW-CC-Sign=22DF11C9E2C2F5BE2F4850B90CA33E512604DF7AA0205E76E62ECA2490C50293)

步骤：

1、在堆叠组件里放置两个按钮，使其重叠在一起。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/29/v3/WBZxZ8eKT_2nMPvvaPXHtg/zh-cn_image_0000002670263953.png?HW-CC-KV=V1&HW-CC-Date=20261008T173446Z&HW-CC-Expire=31536000000&HW-CC-Sign=03E9B45837E9082400C649C718316EB733091A9C248D7E9AD0656F16D75B10A9)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/11/v3/3Bqy-QZ7RaKb1oN1mLCOjQ/zh-cn_image_0000002640104122.png?HW-CC-KV=V1&HW-CC-Date=20261008T173446Z&HW-CC-Expire=31536000000&HW-CC-Sign=67FAA7EAAAC4F1A1167DBD83EA37CD06CB5CC2490E9BC1E68D84604996E67C69)

2、给"收起"按钮（按钮-0）配置点击事件。

事件链：点击后把"收起"按钮隐藏、把"展开"按钮显示、把列表组件隐藏。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f1/v3/QDGdTU8wR06skImHEDyeuw/zh-cn_image_0000002640104126.png?HW-CC-KV=V1&HW-CC-Date=20261008T173446Z&HW-CC-Expire=31536000000&HW-CC-Sign=B59DC6524F720077013F5309826567F604C28CE9F4346144747270BA93585D67)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7b/v3/YJ39etvTS7O2RfeomesDXA/zh-cn_image_0000002670104099.png?HW-CC-KV=V1&HW-CC-Date=20261008T173446Z&HW-CC-Expire=31536000000&HW-CC-Sign=526D0ABD2CA75E0E0D0997CC78862FD9F0ED857FADFE05D33C41686B30FB7888)

3、给"展开"按钮（按钮-1）配置事件

事件链：点击后把"展开"按钮隐藏、把"收起"按钮显示、把列表组件显示。再给"展开"按钮配置加载时事件，卡片加载时把"展开"按钮隐藏。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/15/v3/xgrfDUrPTOOF4R8vcqpuuw/zh-cn_image_0000002640104120.png?HW-CC-KV=V1&HW-CC-Date=20261008T173446Z&HW-CC-Expire=31536000000&HW-CC-Sign=7C5B230ECB238E8EA96C92A407CC50FF6D5AEE50553402C2FD38D8C3FC3A6D8B)![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/xPa90Un-QtaWbDSoWe-EHQ/zh-cn_image_0000002640264060.png?HW-CC-KV=V1&HW-CC-Date=20261008T173446Z&HW-CC-Expire=31536000000&HW-CC-Sign=BF87526F0C886B4C8540AAC60F7A625AF7260D686F4ADF587469BF04A38533CC)

这样就能实现点击按钮，控制列表显示与隐藏。

