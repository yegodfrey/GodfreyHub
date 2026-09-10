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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/af/v3/TKy932XlS_25RQZ5OajWTQ/zh-cn_image_0000002731379047.png?HW-CC-KV=V1&HW-CC-Date=20260903T111624Z&HW-CC-Expire=86400&HW-CC-Sign=F18D8F440524AE2F58B207EF2CA7DAFFD822EE1F18DF64E5C2AB191674FE647E)

  3. 详情区Details列表可以查看按照时间线排序的组件详情，同时More区域展示以该组件为根节点的组件树信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/PxGhkNBRR1ys_uC4RZAQgg/zh-cn_image_0000002701819744.png?HW-CC-KV=V1&HW-CC-Date=20260903T111624Z&HW-CC-Expire=86400&HW-CC-Sign=B2E7273B1B717B5F064C72525D28445508648AEBB66117BBD066D982F21EE74E)

  4. 点选ArkUI Component泳道中的条块，展示Slice Detail数据，Slice Detail中的Name支持跳转至对应Process子泳道并选中泳道中的trace信息，同时More区域展示以该组件为根节点的组件树信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/86/v3/KlL_35k2RICd9Thnyw-LTg/zh-cn_image_0000002731539023.png?HW-CC-KV=V1&HW-CC-Date=20260903T111624Z&HW-CC-Expire=86400&HW-CC-Sign=2841A5FA4B61DA626D9F33B56E4CC15EA5FB87F49443280ACAA090C293AC4FF7)




#### ArkUI State 泳道分析

  1. 单击ArkUI模板创建session并启动录制，录制过程中触发组件刷新。

  2. 录制结束等待处理数据完成。单击ArkUI State泳道，可在下方数据区查看录制过程中发生的状态变量变化。Summary区域可查看状态变量名称（Attributes），变化次数（Updates），状态变量类型（Property Type）、所属组件（Owned by Component）和所属类（Owned by Class）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d4/v3/XU_rZvl1SAerap1mcBO5iA/zh-cn_image_0000002701659834.png?HW-CC-KV=V1&HW-CC-Date=20260903T111624Z&HW-CC-Expire=86400&HW-CC-Sign=E86422136EAA176B15CEB14C5A808F00A3ED2930B194AB5B1334D37DA88E749E)

Current Value以时间顺序展示状态变量变化，Current Values列展示变化后的值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/27/v3/12wRq3BZQkiHeFJ3svFYiA/zh-cn_image_0000002731379049.png?HW-CC-KV=V1&HW-CC-Date=20260903T111624Z&HW-CC-Expire=86400&HW-CC-Sign=0875D2AE554F75C4576B9B715BF75E1C47AB48B704D78D9EF83395548E17B7A3)

  3. 选择Current Value中某一个数据，泳道区域将以虚线展示其时间位置。同时，右侧More区域展示该状态变量影响的组件关联关系。打开页面下方的Delivery Chain开关，该状态变量影响的组件关联关系将以图形展示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f4/v3/waGFBL_vT9eZ9odmqnOznw/zh-cn_image_0000002701819746.png?HW-CC-KV=V1&HW-CC-Date=20260903T111624Z&HW-CC-Expire=86400&HW-CC-Sign=932C7D6879114AADF60ABF6CC79EABD356C768E46B386B4DBB04F4C8F8F5DD72)

  4. 定位到可能造成卡顿的状态变量变化时间点，框选对应时间段，选择ArkUI Component泳道查看对应组件刷新时间。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/36/v3/fA4X_FQiR4u5ivdNoT7rBA/zh-cn_image_0000002731539025.png?HW-CC-KV=V1&HW-CC-Date=20260903T111624Z&HW-CC-Expire=86400&HW-CC-Sign=CBF0C10B155A8C010DE442D088211F1F10A1FDD731DD106108678C36444DD51B)



