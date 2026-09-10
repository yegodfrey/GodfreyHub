---
name: cangjie-guides/cj-insight-arkui
title: ArkUI分析
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-arkui
nodePath: 优化应用性能 / 卡顿丢帧分析 / ArkUI分析
---

# ArkUI分析

ArkUI分析用于定位由于组件耗时、页面布局、状态变量更新导致的卡顿问题。常见场景包含：

场景1：布局嵌套过多引起的性能问题；

场景2：数据结构设计不合理，应用使用一个较大的Object，在更新时，只更新某些属性，导致其他没变化的属性也会更新，产生冗余刷新；

场景3：父组件中的子组件重复绑定同一个状态变量进行更新；

场景4：未正确使用装饰器，如错误使用@Prop传递一个大的对象进行深度拷贝。

#### ArkUI Component 泳道：查看组件绘制耗时

开发者通过ArkUI Component泳道可以直观感知组件绘制频率、耗时等统计情况。

  1. 在时间轴上拖拽鼠标选定要查看的时间段。

  2. 详情区Summary列表给出录制时段内定制组件以及系统组件的绘制统计情况，包括绘制次数（Count）、总耗时（Total Duration）、最小耗时（Min Duration）、平均耗时（Avg Duration）、最大耗时（Max Duration）、耗时标准差（Std Dev Duration）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5a/v3/_AJQCs84TuOR4RdZAogePQ/zh-cn_image_0000002713559108.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=2F1A9FB27021C10066734FC90191A61F78011AD59EFCBD76403A3828EA9F6092)

  3. 详情区Details列表可以查看按照时间线排序的组件详情，同时More区域展示以该组件为根节点的组件树信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3f/v3/R_zcLCdIR3-L7eP5s7RcRw/zh-cn_image_0000002743198021.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=BEBCBF60F48D98F5AEDBA2853575EDD13DA5C2DCFFA599CCD6C0BE6A6A7FF961)

  4. 点选ArkUI Component泳道中的条块，展示Slice Detail数据，Slice Detail中的Name支持跳转至对应Process子泳道并选中泳道中的trace信息，同时More区域展示以该组件为根节点的组件树信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/09/v3/RH6Yiy8kT3SDsMpyiOnODw/zh-cn_image_0000002713399140.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=0A04D7449C9E9D024FBE790E5D612508C896DAD412CA72890F88EB8DD689B07B)




#### ArkUI State 泳道分析

  1. 单击ArkUI模板创建session并启动录制，录制过程中触发组件刷新。

  2. 录制结束等待处理数据完成。单击ArkUI State泳道，可在下方数据区查看录制过程中发生的状态变量变化。Summary区域可查看状态变量名称（Attributes），变化次数（Updates），状态变量类型（Property Type）、所属组件（Owned by Component）和所属类（Owned by Class）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4a/v3/UO6bRiTPRjaq3CyWFjhKcw/zh-cn_image_0000002743078071.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=C374AB406E39D1D2AE5DA99B36F20BB524CB27CE5AA3210F3CC09ED0C03A12FD)

Current Value以时间顺序展示状态变量变化，Current Values列展示变化后的值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ab/v3/bIQbaXM_SD25-MAZ976UqQ/zh-cn_image_0000002713559110.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=7F021883ED43276DF59C6CB4981EE50A0532098D32A7B69D16224CB1B3AFFC96)

  3. 选择Current Value中某一个数据，泳道区域将以虚线展示其时间位置。同时，右侧More区域展示该状态变量影响的组件关联关系。打开页面下方的Delivery Chain开关，该状态变量影响的组件关联关系将以图形展示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3c/v3/9TSxVn1OR9KS-JTadUDszg/zh-cn_image_0000002743198023.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=A1687904C62CFA78809E7A29E3320F230820CF143063575D5A8A5762820654BB)

  4. 定位到可能造成卡顿的状态变量变化时间点，框选对应时间段，选择ArkUI Component泳道查看对应组件刷新时间。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7/v3/J2BgeosfQzG5Whv4_6djwQ/zh-cn_image_0000002713399142.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=E7A6643FD31D25FCD0911DE6B0ABE88B1F467D0209FB3D2BB4AE17A5C945F96A)



