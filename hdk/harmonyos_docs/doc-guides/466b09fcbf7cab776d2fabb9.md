---
name: document/cn/doc-guides/ohos-debugging-variables-visualized-0000001263360497
title: 变量可视化调试
uri: https://developer.huawei.com/consumer/cn/doc/doc-guides/ohos-debugging-variables-visualized-0000001263360497
source: portal
---

# 变量可视化调试  
  
在OpenHarmony应用/服务调试过程中，查看变量的变化过程是否符合预期结果是一项常用的调试方法。为此DevEco Studio提供了调试变量的可视化功能，支持c++、JS和eTS语言的基本数据类型、数值类型的集合和表达式可视化调试，并以Plain（树形）、Line（折线图） 、Bar（柱状图）和Table（表格）的形式呈现。开发者可以根据这些图形化界面观察当前值、数据类型以及数值的连续变化，通过查看、比对、分析当前变量的变化过程和逻辑关系，判断出当前值（变量）是否符合预期结果，从而迅速有效的定位问题。变量可视化支持**当前值可视化** 和**连续变化值可视化** 两种方式。

#### 当前值可视化

当前值可视化：通过解析Debugger当前帧的信息，获取指定变量当前栈帧中的值，以Plain（树形）、Line（折线图）、Bar（柱状图）和Table（表格）方式进行可视化展示。当前值可视化每次只能观察一个变量，开发者可以根据需要切换变量进行观察。

**Plain（树形）显示结果示意图**

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113504.80944771611516131467381466378392:50001231000000:2800:36E63128427A921C3DED86157641EE30EFE32E67B73E77A5AA005A9052077599.png?needInitFileName=true?needInitFileName=true)

**Line（折线图）显示结果示意图**

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113504.77380513222584539610211503970444:50001231000000:2800:7B5097D6328CC9B48212219AE0A447F764882C53897494B2046411C7CD137F73.png?needInitFileName=true?needInitFileName=true)

**Bar（柱状图）显示结果示意图**

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113504.61594285382241037478891014278072:50001231000000:2800:8D905D6EC1E200FAC50623CF8709E9241F62038C0CF4CC02D29D364FDAC7C17D.png?needInitFileName=true?needInitFileName=true)

**Table（表格）显示结果示意图**

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113504.99300081440405901765401129095798:50001231000000:2800:EA4856139296DE27DDEAE9946A6D97F1E1AE1F76DCA5A54CDE41C4BFBA5B2F51.png?needInitFileName=true?needInitFileName=true)

支持的数据类型包括基本类型（包括基本数据类型和基本数据类型的包装类）、基本类型的集合和表达式（结果为基本数据类型和基本数据类型的包装类）。其中：

     * C++支持的呈现形式如下表所示： 

数据类型 | 支持的展示类型  
---|---  
数值类型：int、float、double（或者指定大小的类型如int32_t、int64_t）和signed、unsigned、short、long等的组合 | Plain（树形）、Line（折线图）、Bar（柱状图）和Table（表格）  
字符类型：char16_t、char32_t、wchar_t等 | Plain（树形）和Table（表格）  
布尔类型：bool | Plain（树形）和Table（表格）  
包含数值类型的集合List、vector、set等 | Plain（树形）和Table（表格）  
包含数值类型的一维数组 | Plain（树形）、Line（折线图）、Bar（柱状图）和Table（表格）  
一维对象、键值对map和数值/字符/布尔类型的集合或数组 | Plain（树形）和Table（表格）  
其它 | Plain（树形）  
  
C++可视化功能说明：

       * 如果观察的变量在当前断点之后，则会提示“Variable not initialized”。
       * 如果全局静态变量在代码块中未使用，则会提示“error: <user expression 1>:1:1: '{varName}' has unknown... ”。
       * 如果在全局非静态变量和局部变量中存在同名变量名，则在添加C/C++全局非静态变量时，需要以“::变量名”方式添加，才能正常观察其值。
     * JS\eTS支持的呈现形式如下表所示： 

数据类型 | 支持的展示类型  
---|---  
数值类型：number | Plain（树形）、Line（折线图）、Bar（柱状图）和Table（表格）  
字符类型：string | Plain（树形）和Table（表格）  
布尔类型：boolean | Plain（树形）和Table（表格）  
一维数值类型的数组：array | Plain（树形）、Line（折线图）、Bar（柱状图）和Table（表格）  
一维对象、null和undefined | Plain（树形）和Table（表格）  
其它 | Plain（树形）  
  
JS\eTS语法定义变量不区分数据类型，因此，可视化功能会依据数据结果进行智能识别。例如，array集合识别为数值集合，则支持Plain、Line、Bar和Table；如果识别为字符集合，则只支持Plain和Table。

#### 连续变化值可视化

连续变化值可视化：通过坐标图的方式，可以同时显示多个变量的连续变化过程，以及变量之间的关系。连续变化值可视化，只支持基本数值类型的数据可视化。

下面以eTS语言的变量可视化为例进行说明。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113504.64365885287849497324164989288185:50001231000000:2800:037C151C4ECB07ED81CD79FCC9E91E8BEE013B5D89A9534124D336B5A37FC793.png?needInitFileName=true?needInitFileName=true)

在连续变化值可视化中，会呈现所有变量的连续变化结果，其中横坐标为断点命中clock，纵坐标为变量值，从添加观察变量的clock开始记录变量值的连续变化。在图中，圆圈符号表示支持（只有数值类型支持）连续变化值可视化，三角符号表示不支持。在图中如果有多个变量的连续变化图，为方便查看其中指定的变量的变化趋势，避免非观察变量带来的影响，开发者可以单击图形上方的变量名，将其设置为灰色，这样就可以在坐标图中隐藏该变量，再次单击灰色的变量名，则在坐标图中呈现出该变量的连续变化值。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113504.78252749622014479685643814862808:50001231000000:2800:E0DB2C221E7B0FA3A641C42E0E9D6F2C13E09480C2FA5CD2457BCBBD29DB0BB3.png?needInitFileName=true?needInitFileName=true)

横坐标记录范围最大为100，超过100后，则从1开始清除前面的数据。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113504.80367103728937348309475596803705:50001231000000:2800:68137770EC7A120CDD510A494354849D0C29DF5309E1DD48C055479B11CA3EA2.png?needInitFileName=true?needInitFileName=true)

另外，在连续变化值可视化中，可以单击clock节点，会自动跳转到对应值的代码行（断点位置），并且会高亮显示代码行和clock时钟，如下图所示：![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113505.39497253249907587839152492652985:50001231000000:2800:6A3F4CA62FEA9648425A79C69A8F803A5EA4778A6E4C5FE6D077A2576ECD4FDA.png?needInitFileName=true?needInitFileName=true)

#### 变量可视化操作指导

C++、JS、eTS调试变量可视化的操作相同。

     1. 在待调试的源代码中打上断点，并启动调试功能。
     2. 打开变量可视化调试窗口，可通过在编辑器或者调试变量栏窗口中，选中变量，单击鼠标右键，选中“Add to Visual Watches”，自动将该变量添加到可视化窗口中。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113505.13381865207814222698204988816576:50001231000000:2800:B51D654848A8B936A828BC498596DFC82508A2B40F46D95E06993E81E453067B.png?needInitFileName=true?needInitFileName=true)

请注意，变量可视化功能最多同时支持10个变量，如果超过10个变量，请在“Observed Variable”下拉列表中，删除正在显示的变量后添加。

     3. 查看变量的当前值和连续变化值。
