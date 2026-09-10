---
name: cangjie-guides/cj-insight-allocation-data-filtering
title: 分析数据筛选
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-allocation-data-filtering
nodePath: 优化应用性能 / Native内存泄漏分析：Allocation分析 / 分析数据筛选
---

# 分析数据筛选

Allocation分析过程提供多种数据筛选方式，方便开发者缩小分析范围，更精确地定位问题。

#### 通过内存状态筛选

在Allocation分析过程中，对“Native Allocation”泳道的内存状态信息进行过滤，便于开发者定位内存问题。

在“Native Allocation”泳道的“Details”区域左下方的下拉框中，可以选择过滤内存状态：

  * All Allocations：详情区域展示当前框选时间段内的所有内存分配信息。
  * Created & Existing：详情区域展示当前框选时间段内分配未释放的内存。
  * Created & Released：详情区域展示当前框选时间段内分配已释放的内存。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/66/v3/-hVa82oNS2OMMVrUxfS75A/zh-cn_image_0000002731538989.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=058C8442C24F160E058D8E43EB80CA4C244B46A7FF9D43AC45FC3B7F137294A2)

#### 通过统计方式筛选

在“Native Allocation”泳道的“Statistics”页签中，可以打开“Native Size”选择统计方式以过滤统计数据：

  * Native Size：详情区域按照对象的原生内存进行展示。
  * Native Library：详情区域按照对象的so库进行展示。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5e/v3/5L9hZXEWS-qmWesMd1E1fw/zh-cn_image_0000002701659800.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=348E8B1F800A092563AFF480D779895C0B840FA86DB0EB842F33156E027A964D)

#### 通过so库名筛选

在“Native Allocation”泳道的“Allocations List”页签中，可以单击“Click to choose”选择要筛选的so库以过滤出与目标so库相关的数据：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bc/v3/VJUfjiA6RgyB6Jgg9KS32Q/zh-cn_image_0000002731379015.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=76FA3CC0267E8F0FC58401CC9B82704A9395D3B39F84595D0F56AC134EF671C6)

#### 通过搜索筛选

在**Native Allocation** 泳道的页签中， 根据界面提示信息输入需要搜索的项目，可定位到相关内容位置，使用搜索框的<、>按键可依次显示搜索结果的详细内容。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b2/v3/ZDhYq4gaSo-XTMRSHH2BxA/zh-cn_image_0000002701819712.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=AAD8D38B1FD61949004608BBF7C46797689E77BA8E0ED8105E5716BC7E0EA834)

#### 筛选内存分配堆栈

在Native Allocation泳道的Call Trees页签中，可以通过底部的“Call Trees”和“Constraints”选择框来过筛选和过滤内存分配栈。

Call Trees选择框包含两种过滤条件：

  * Separate by Allocated Size：在内存分配栈完全相同的情况下，会按照每次分配栈申请的内存大小将栈分开；
  * Hide System Libraries：隐藏内存分配栈中的系统堆栈。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b9/v3/evNYHxC5SXSa8b7Y71jyTg/zh-cn_image_0000002731538991.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=F7F395B3180A6DAB420FFC9FA48B8ABDDCBA83647FB1950584C6110A5EAFA3E3)

Constraints选择框也包含了两种过滤条件：

  * Count：根据指定的内存申请次数过滤内存分配栈信息；
  * Bytes：根据指定的内存申请大小过滤内存分配栈信息。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/44/v3/XsV_cwb7R16w7NHUn_u9ig/zh-cn_image_0000002701659802.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=8E8618B94B01F2F7A59CE0E6EC20BEE60C0CAA291F383F0470D0B85F16C2E5F5)

在Call Trees页签的More区域，单击“Heaviest Stack”旁的隐藏按钮可以单独控制是否显示More区域最大内存分配栈中的系统堆栈。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5f/v3/3cn-2IbKQuaFCdPZrCERcA/zh-cn_image_0000002731379017.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=9CA0C518C313BB9B9942BE1DC541B865AE3CF38DA04ADE34BFD1EC504A5BAD2E)

在Call Trees页签，可以通过底部的“Flame Chart”切换到火焰图视图。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8c/v3/fmVFIKPTRAiZtHstFc23EA/zh-cn_image_0000002701819714.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=98BD2E0BB8A8A81C3366433B8935B4FFA755A265A635AD8F72EA4D8A493E5570)
