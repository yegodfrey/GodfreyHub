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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/52/v3/MWq8-xxMQim1BCWGm4dZpg/zh-cn_image_0000002713399106.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=784F8A521FD78D79715FACD864F5FA23F6104E612141207AB90B46318EA28E50)

#### 通过统计方式筛选

在“Native Allocation”泳道的“Statistics”页签中，可以打开“Native Size”选择统计方式以过滤统计数据：

  * Native Size：详情区域按照对象的原生内存进行展示。
  * Native Library：详情区域按照对象的so库进行展示。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/50/v3/C5It3Yr3TDmL84NkexlLVg/zh-cn_image_0000002743078037.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=9EEF01B217A490266B2D08331167DF093661D90CDBB91F61313A1610096FEF24)

#### 通过so库名筛选

在“Native Allocation”泳道的“Allocations List”页签中，可以单击“Click to choose”选择要筛选的so库以过滤出与目标so库相关的数据：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6e/v3/sMeFWqcaTieM3KRClFhbvw/zh-cn_image_0000002713559076.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=42931A896100AC20C4B74AA2571857E893A0684ABF327F0BCF54546C34B35BCC)

#### 通过搜索筛选

在**Native Allocation** 泳道的页签中， 根据界面提示信息输入需要搜索的项目，可定位到相关内容位置，使用搜索框的<、>按键可依次显示搜索结果的详细内容。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b0/v3/ZIrYLP4SSPGy3WcIUDLIoA/zh-cn_image_0000002743197989.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=B5D963A65EA7CBB610CEBA8DEB8DD828EECF9B7E9363945935A1FC5A9EEBD1A3)

#### 筛选内存分配堆栈

在Native Allocation泳道的Call Trees页签中，可以通过底部的“Call Trees”和“Constraints”选择框来过筛选和过滤内存分配栈。

Call Trees选择框包含两种过滤条件：

  * Separate by Allocated Size：在内存分配栈完全相同的情况下，会按照每次分配栈申请的内存大小将栈分开；
  * Hide System Libraries：隐藏内存分配栈中的系统堆栈。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d6/v3/AaccVcqgRHugL0cz_5u-5w/zh-cn_image_0000002713399108.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=27BA699E4A20B915BD61959F8C6B112542F59872FEEF0F419F3AC4C0AC922E8A)

Constraints选择框也包含了两种过滤条件：

  * Count：根据指定的内存申请次数过滤内存分配栈信息；
  * Bytes：根据指定的内存申请大小过滤内存分配栈信息。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d5/v3/Oqta1H0fQ3WvyBOsx0we2w/zh-cn_image_0000002743078039.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=D928BF3342FFB98FC737C7947F12683FB9E390300CD1EC33ED94E3F6476A0B08)

在Call Trees页签的More区域，单击“Heaviest Stack”旁的隐藏按钮可以单独控制是否显示More区域最大内存分配栈中的系统堆栈。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0b/v3/iBDnVr7kS2Wl-_byHFTc9g/zh-cn_image_0000002713559078.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=9516000491F7E05D8D17EF6BC4EBCA40DD706D72E9EB355BE56B4019EC6906EB)

在Call Trees页签，可以通过底部的“Flame Chart”切换到火焰图视图。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/68/v3/2sbo8baQTvmjf5Ii38KgFw/zh-cn_image_0000002743197991.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=4C23FE1A3C7B2EE6BBAE103D489B5AD803C89BBFD06000083E3863754C92BA8F)
