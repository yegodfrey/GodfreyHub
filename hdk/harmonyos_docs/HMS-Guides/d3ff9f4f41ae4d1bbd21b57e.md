---
name: document/cn/HMS-Guides/user_behavior
title: 行为分析
uri: https://developer.huawei.com/consumer/cn/doc/HMS-Guides/user_behavior
source: portal
---

# 功能简介

**行为分析包括事件分析、页面分析、启动分析、会话路径分析、活跃度分析。**

事件分析：对您上报的事件数据进行聚合，支持您查看事件概览和事件分析详情，如事件发生的整体趋势、事件来源的机型分布、事件来源的系统版本分布等。

页面分析：通过分析用户对项目内不同页面的访问趋势、访问深度、停留时长，可帮助您判断各个页面的重要性，为页面优化策略提供数据支撑。

启动分析：通过收集用户的启动事件，查看启动次数与启动时段，配合条件对比与行业对比，了解用户的启动时间与次数。

会话路径分析：展现了用户在应用中的行为路径，对于产品经理和运营同学来说，分析掌握用户进入应用后分别做了哪些动作、如何一步步离开应用的至关重要。

活跃度分析：用户的活跃度是产品粘性和健康度的关键指标，通过活跃度分析，您可以了解用户对您产品的依赖程度。

# **功能详述**  


## **事件分析  
**

**操作流程  
**

1.登录[AppGallery Connect网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，单击“我的项目”图标。

2.选择需要查看分析数据的应用。

3.单击“分析 > 行为分析 > 事件分析”进入报告页面。

您可以在“事件分析”页查看所有的事件列表，包括事件名称、事件ID、日均事件数、日均用户数、人均次数。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200508194957.74676915973497013722739092805624:50510514062314:2800:3D173014541B9EE0B8B71D67C2A3776F4EC2AC3E0D32FA15018EA125A70F4C51.png?needInitFileName=true)

  * 过滤器：您可以从应用类型，应用分类，用户属性，受众4个维度，选择不同的条件筛选您关注的事件。




![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200508195103.10557914116614820351409195191966:50510514062314:2800:2A9C2396346CA27A7DB87CBCEC75FEFA5DBD1A50973FAD5A8911B245F288FA25.png?needInitFileName=true)

  * 日期：您可以按不同的时段筛选您关注的事件。




![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200508195202.77579074890928717057261710815253:50510514062314:2800:BF79F5C3F4E12E224BCF55288A1F378C0764F7849BCD96FF2CD14A0040EFBDD3.png?needInitFileName=true)

**查看事件详情（每天更新）**

单击事件名称，可查看某个事件的分析详情，包括：实时趋势、历史趋势、自定义参数分布、默认指标分析（应用版本分布、机型占比分布、系统版本分布、每次会话事件数）。

除了实时趋势是分钟级更新外，其他各项指标均为每天更新。

您可以使用过滤器控件和日期控件（如下图（1）处，具体使用参考[项目概览](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/3021002#app_overview)），单击事件名称后，移动至事件选择下拉框（如下图（2）处），来快速选择需分析的事件。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200508195602.09899179977798837242643139020781:50510514062314:2800:A07D73A9D8F9016C60CEEC35CA7549121E460D289C47F5AF73CAAFE9A313F441.png?needInitFileName=true)

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200508195616.53909358539433086516600919030826:50510514062314:2800:8AACA1FD7D6AA81B6A73B4DDF31C76FB2B676C6D37F519A6AA587C22A391645A.png?needInitFileName=true)

**实时趋势**

通过实时趋势指标，您可以：

  * 查看近30分钟内每分钟事件数的变化趋势。

  * 对比每分钟事件数与30分钟前事件数的变化情况，如下图中（2）所示。

  * 单击“查看详情”对该事件进行实时分析。详情请参考[实时监控](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/3021002#real_time_analysis)。




![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200508195811.04420659494672038854536142954377:50510514062314:2800:7C091C152746E29CF02E20DD15F49E12029B2502D54CE6A79B1E00B7C6DD3C7B.png?needInitFileName=true)

**历史趋势**

通过历史趋势指标，您可以：

  * 查看您选择的时间段内，日均事件数、日均用户数、人均次数的变化趋势。

  * 查看您选择的时间段内，事件次数、用户数、人均次数几项指标的每日明细。




![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200508195922.07600424632257048686815327905631:50510514062314:2800:F54876DE2680E7F3DFD4E208EADBF321707B269EFED54F55F2E11D2C084EA941.png?needInitFileName=true)

**默认指标分析**

HUAWEI Analytics Kit默认提供了以下几个分析指标，包括：机型分布、系统版本分布、应用分布、每次会话事件数。通过这些指标，您可以快速了解您关注的事件不同受众中的表现。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200508200022.33277373404939258199921954823481:50510514062314:2800:6F2692B2AD7810A58C103EFC11F52334EDD1371331877B91B84462FBA760110C.png?needInitFileName=true)

**自定义参数分布**

除了默认指标分析，您还可以自行指定需要分析的事件参数（[如何指定分析哪些参数？](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/meta_manage#event_management)），以便对您的用户做更深入的洞察。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200508200100.53602203330034561842995785973170:50510514062314:2800:09CAB15CC0668A2D1A2CB91F13A7A2617975B5D135486F888CAB8C56D0CFD031.png?needInitFileName=true)

通过自定义参数分布报告，您可以：

  * 对于字符串型参数：可查看该参数在选定时间段内各个取值的数量分布情况和用户数分布情况（如图中（1）所示）、按天对比各个取值数量，查看环比增加百分比（如图中（2）所示）、以及查看各个取值的明细数据（如图中（3）所示）。

  * 对于数字型参数：可查看该参数在选定时间段内按天的平均值趋势、总和趋势。




**规格说明**

  * 每个项目最多支持500个事件（含系统预定义事件和自定义事件）。

  * 每个事件最多可以注册25个事件参数。如端侧上报事件A中包含了100个事件参数，那么开发者在事件管理模块，最多可以注册其中的25个事件参数。

  * 每个项目最多可以注册100个事件参数（不包含系统自动采集事件的参数）。

  * 每个项目的每个字符型参数，最多统计500个参数值（历史累计），超出的统一归为其他。

  * 事件ID、参数ID：长度均不能超过256个字符。

  * 事件名称、参数名称：长度均不能超过255个字符。

  * 事件描述：长度不超过1000个字符。




## 页面分析

**操作流程**

1.登录[AppGallery Connect网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，单击“我的项目”图标。

2.选择需要查看分析数据的应用。

3.单击“分析 > 行为分析 > 页面分析”进入报告页面。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200508200700.94970350331506774995580000960047:50510514062314:2800:BF39FC6878EBB116E9C70BF5C77DFE31230F7B25F55593F2BF1F23D31ED9370B.png?needInitFileName=true)

  * 您可通过过滤器和时间选择器，快速筛选分析条件。

  * 页面分析报告采用上图下表的形式展示页面访问情况。您可单击图中（1）处，选择“页面访问次数”或“次均停留时间”来查看用户访问页面趋势。趋势图如图中（2）所示，访问详情数据如图中（4）所示。

  * 单击图中（3）处“下载表格”按钮，可以下载页面访问详情表，满足您的个性化分析。




![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200508200826.41715301388246635689127348639440:50510514062314:2800:0408649A2457A60F0943EB7CBCE690E9F5E0F8BD5F23CEB2BF814A65F23F1BC9.png?needInitFileName=true)

**指标说明** ：

  * 页面访问次数：页面被访问的次数，多次跳转重复访问也会被计入。

  * 访问次数占比：当前页面访问次数/Top10页面访问次数。

  * 次均停留时间：用户访问当前页面的停留时长总和/页面访问次数。

  * 停留时间占比：用户访问当前页面的停留时长总和/用户在Top10页面的停留时长总和。




## 启动分析  


**操作流程**

1.登录[AppGallery Connect网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，单击“我的项目”图标。

2.选择需要查看分析数据的应用。

3.单击“分析 > 行为分析 > 启动分析”进入报告页面。

  * 您可使用过滤器控件和日期控件，快速筛选您需要分析的数据范围。




![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200508201155.29997331487433804936945962142953:50510514062314:2800:45464C6C6DF34FB7375F517B7BEA96E49A46E731F3E7EE42F1CCE4B5CDAE99B2.png?needInitFileName=true)

  * 单击下图（1）处可灵活选择日、周、月维度查看详情，启动次数趋势如图中（2）处。

  * 单击图中（3），（7）处的“下载表格”，可下载明细数据进行个性化分析。

  * 单击下图（4）处可选择查看启动时段分布的绝对值与百分比，但该卡片暂时不支持对比分析。

  * 图（5）处为启动时段，可以查看早上6点到晚上24点的时间段，图（6）为启动时段分布图。




![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200508201223.99282772885378259418963770430533:50510514062314:2800:29980D8242B9EE6B627674A91407EE9D7A5F9984FFBA66B84D3AD4B47C9A9C92.png?needInitFileName=true)

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200508201251.54549276333347573632194707576773:50510514062314:2800:E0CDD5B805C17EEE7A7EE5EB862877F117C71ACA175A9699B4931DB01957F020.png?needInitFileName=true)

4.添加对比分析。

启动次数分析提供针对某个指标进行对比分析的能力，支持应用类型对比、应用对比、用户属性对比、受众对比、行业对比。

比如您可以对比不同设备型号的启动次数趋势，或对行业分类进行下钻分析。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200508201405.98793818941455114560615968374517:50510514062314:2800:954E9A530FFEE937C14637DBE1806875CDAF284B657F4E0C696A2B289E1892DC.png?needInitFileName=true)

单击上图（4）处选择过滤条件，单击图（5）处根据“用户属性”或“行业对比”添加对比分析条件，则（6）处的启动次数趋势图即出现对比趋势，（7）处表格数据展示对比详情，单击图（8）处的清除图标，可清除对比条件。

如果不添加过滤条件，直接添加对比分析条件，则对比趋势图及表格详情为所有用户和对比条件之间的对比情况。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200508201438.05125921814889581239942517272710:50510514062314:2800:0C3DA0037DFF22BD85F08279BEF5285CD86393A1BE49E574BF989AC5AA62D0B3.png?needInitFileName=true)

**指标说明** ：

  * 日启动次数：用户每天打开应用的总次数。

  * 启动次数占比：SUM（当日启动次数）/SUM（所选时间段启动次数）。

  * 周启动次数：用户每周打开应用的总次数。

  * 启动次数占比（周）：SUM（当周启动次数）/SUM（所选时间段启动次数）。

  * 月启动次数：用户每月打开应用的总次数。

  * 启动次数占比（月）：SUM（当月启动次数）/SUM（所选时间段启动次数）。




## 会话路径分析

**操作流程**

1.登录[AppGallery Connect网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，单击“我的项目”图标。

2.选择需要查看分析数据的应用。

3.单击“分析 > 行为分析 > 会话路径分析”进入报告页面。

4.设置查询条件

您可以通过用户属性、受众和时间选择器筛选您想要查询的条件范围。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200508202603.56552871392098896320492228479159:50510514062314:2800:56E5AA8A336B85F44CE2446543DFFD20CE0F74CF85369F72DB1F4C0EA9B1AB67.png?needInitFileName=true)

**查看路径分析报告**

路径分析以会话为维度，针对会话中的路径进行分析。默认展示6个会话步骤，10个节点。

您可通过单击下图（1）处修改每层展示的节点数，单击下图（2）处新增步骤，分析结果如下图（3）所示，以桑基图形式展现，详细展示了每个事件的后续／前置路径、事件的流向。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200508202648.56319547764530850577521179379684:50510514062314:2800:9348C20F80D8095FB7FD52CB0B87413B56B03E72F01D99D3A4A6A29031B57D12.png?needInitFileName=true)

单击想要查看的节点，选择“显示事件路径”，则经过该事件的步骤均会高亮显示；鼠标放在某个事件上，可查看该事件详情，包括事件ID、事件名称、总会话数、占比。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200508202736.55870758424451611204997305993324:50510514062314:2800:A98950E10CA2873CD86D9AC96F770DD68D02D0EA7327548D6AE441F58B904C1F.png?needInitFileName=true)

**将特定行为路径保存至漏斗**

单击您关注的节点，可选择将与该节点相关的路径创建漏斗，以持续观察转化情况。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200508202806.91151116269237717172324224062945:50510514062314:2800:E7C2DC234D89501F9FDAA7FDB83751E262E2A3E1BA9AE82999FBF1BCD9780973.png?needInitFileName=true)

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200508202831.34696231174728948436200583519691:50510514062314:2800:4F334F3AF25E3ECF5BBEAFB64EA74345B120F0EE7338D223267FD4E5E79F5715.png?needInitFileName=true)

说明：

当选择某路径保存为漏斗时，如果选择的步骤<=10，则从第一步开始往后选中；如果选择的步骤>10,从当前步骤往前推10步，默认选中。

路径分析模型将用户行为通过桑基图可视化呈现，帮助分析挖掘用户在应用内的来源与去向，可与其他分析模型配合进行深入分析，洞察用户行为动机，通过产品优化或运营策略引导用户使用最优路径或者产品经理期望的路径。

**规格说明**

路径分析桑基图最多支持15个会话步骤，20个节点。

## 活跃度分析

**操作流程**

1.登录[AppGallery Connect网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，单击“我的项目”图标。

2.选择需要查看分析数据的应用。

3.单击“分析 > 行为分析 > 活跃度分析”进入报告页面。

您可以使用过滤器控件和日期控件（具体使用参考[项目概览](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/3021002#app_overview)）来快速筛选数据。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200514101252.44192369910765670056011839359990:50510514062314:2800:28C7EF3747E6CB1FC6789AE0E039611AED3A7A2522F588EE0BB997DC134F8841.png?needInitFileName=true)

**查看默认指标**  


  * 点击图中（1）处“默认指标”按钮，可以查看我们为您准备的默认活跃指标，包括：活跃间隔、启动次数、会话次数、页面访问深度、访问时长。

  * 点击图中（2）处指标图标，可以查看各项指标在所选时段内的变化趋势，如图（3）处。 




![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200514102514.01368873479960346087377502262627:50510514062314:2800:FD9EFFD523876CCAD2A5548C618D940B18DD6BA0080039171114D4A1C4C9CF81.png?needInitFileName=true)

  * 图中（4）处展示了指标明细数据，点击图中（5）处可下载明细数据进行个性化分析。

  * 查看指标明细

选定某个指标，趋势图的下方将展示该指标的明细数据。您可单击右下角的“下载表格”，将明细数据下载至本地进行个性化分析。




![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200514103837.98118248545639406381061136514265:50510514062314:2800:B9B358D677FF2D2F376B10ECE6E8CE105B570D5C966DE1D90C7E79E5AD8A6D56.png?needInitFileName=true)

**查看自定义指标**

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200122145844.14453130219565497970648405208085:50510514062314:2800:D36394E09317F3871FBCDEF5BD05C631FE94DB8D86F4484170270BEBEA4B11F1.png?needInitFileName=true)

  * 点击“自定义指标”按钮，可以查看您自定义的活跃指标。

  * 点击“新增自定义指标”，可以创建新的自定义指标，如下图所示。  
![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200122145844.09347491276533610620773350260724:50510514062314:2800:4A28D37EF30FA8EB04C87D44E4EFF31D2C73E5340A4CFFFC40AB7E3B939E5A09.png?needInitFileName=true)




参数填写说明如下：

  * 指标名称：填写便于您记忆和理解的名称。

  * 指标说明：填写您创建此指标的目的、口径等信息。

  * 指标条件：基于系统预置事件及您的自定义事件发生次数、事件参数来定义。




不同类型的参数支持的运算符如下表所示：

**参数**| **支持的运算符**| **备注**  
---|---|---  
计数| 大于| 指事件发生的次数  
数值型参数| 等于，小于，大于，大于等于，小于等于，不等于| /  
字符串型参数| 完全匹配| /  
  
指标计算方式：根据设置的指标条件类型，可以指定不同的指标计算方式，如下表所示：

**条件类型**| **可选的指标计算方式**  
---|---  
使用事件次数构造指标条件| 用户数，用户占比。  
使用字符串型参数构造指标条件| 用户数，用户占比。  
使用数值型参数构造指标条件| 用户数，用户占比，累计求和，累计平均。  
  
几种指标计算方式的口径如下表所示：

**指标计算方式**| **计算口径**  
---|---  
用户数| 统计符合条件的去重用户数  
用户占比| 统计符合条件的去重用户数/指定时间段内总去重用户数  
累计求和| 符合条件所有事件中，取指定字段求和  
累计平均| 累计求和/用户数  
  
  * 如果存在多个自定义指标，可以点击卡片查看该指标的变化趋势。趋势图将在上图所示的（5）处展示。

  * 如果您需要修改或删除某个自定义指标，可将鼠标悬浮于该自定义指标卡片上，点击![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200122145844.95340464645002758156876918505471:50510514062314:2800:1E295444033752DECE3D6CD8784382A28DD46BCF379C412D9FE8AE342CE43DA8.png?needInitFileName=true)修改指标定义或点击![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200122145844.68313465568742220601307692619301:50510514062314:2800:495AC5303C76A2D3F78CD1742502049F1443AF4F67EF0E87E1BA38F84E1E0762.png?needInitFileName=true)删除该指标，如上图（4）处所示。




**规格说明**

  * 新增或修改的自定义活跃度指标，次日生效。

  * 每个项目最多定义3个自定义活跃度指标。




##   

