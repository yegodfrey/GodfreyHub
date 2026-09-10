---
name: document/cn/AppGallery-connect-Guides/smartperf-tool-perf-analysis-0000002269885413
title: 性能分析
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/smartperf-tool-perf-analysis-0000002269885413
---

# 性能分析

#### CPU Counter统计

CPU Counter是CPU硬件内部的计数，其数据项可以用来监控和分析CPU的性能。您可以采集并查看CPU Counter统计数据。  
![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110232.01230643943230414330081014253350:50001231000000:2800:638105475138229A0EBE9F037B9A24AC6F0D51A155E5305D12F491F29206FE15.png)  
当前仅支持HarmonyOS 5.0及以上游戏。

1. 在主界面左侧选择"游戏性能分析 \> CPU Counter统计"，进入CPU Counter统计页面。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110232.66664737756076044241479972233758:50001231000000:2800:3DA220731CA64868199876FF8CF9AE9D46E69A2D476E49581C69D179B99678C0.png)

2. 填写需要采集的进程名称并设置采集时间。
3. 点击"开始测试"，进行采集。
4. 采集完成后界面如下，点击下方"点击跳转目录查看"可打开存放采集结果文件的本地文件夹。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110232.37723033299807395296438990250249:50001231000000:2800:B3E055FE929C921B3DA144B3C9E011B26F4D0F85D0E8A61137A7D42E40CC635A.png)

   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110232.60708161014643458483403571941126:50001231000000:2800:892AD746366CE8078555EE8A3D791E6EAEDAB409FEFD59C3C156D2E8DD04625E.png)

   <br />

#### CPU 火焰图

CPU火焰图展示进程的函数调用情况，您可以单独采集并查看perf数据，进行性能分析。  
![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110232.52642672505260865507385631425046:50001231000000:2800:E3258E1679E05F9B998E8DE2F90780C53589F6305037327260C2AF82B57C0564.png)  
* Mac版本的HiSmartPerf-Editor暂不支持。
* 当前仅Android游戏、HarmonyOS 3.1/4.0及以下游戏支持采集。

1. 在主界面左侧选择"游戏性能分析 \> CPU 火焰图"，进入CPU 火焰图页面。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110232.89317149564298749415880431055996:50001231000000:2800:AB1B1653B6CD776953A0BC9E62375021B87A60F5E819A04FCD2CBB5050912CB5.png)

2. 填写应用包名、地址并设置采集时间。  
   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110232.32358720230066986577581402197456:50001231000000:2800:AFB04847B231CEA40BD4394ECDE01F94F3CA3F219EA0868E93A0B02FB1105031.png)  
   * 需安装Python3，并正确配置环境变量。推荐版本：Python 3.12 。
   * NDK推荐版本：android-ndk-r26d。
3. 点击"开始采集"，进行采集。
4. 采集完成后，点击"查看火焰图"，可打开存放采集结果的本地文件夹进行查看。您可以点击下方"查看火焰图"按钮直接查看，也可以点击"Cpu Cycle拆解"\>"查看Cpu Cycle"查看火焰图拆解后的数据文件。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110232.76936424206228222064978363997404:50001231000000:2800:66ED06E6BB3FAAB38A1C71C84DD2C0EAD64DE6B6E8F52F0239EC87D7383831A2.png)

#### CPU trace

CPU trace展示CPU调度、频点、进程线程时间片、绘帧、perf等数据的性能功耗，展示方式为泳道图，支持图形用户界面GUI操作、分析数据。您可以单独采集并查看CPU trace数据，进行性能分析。

1. 在主界面左侧选择"游戏性能分析 \> CPU Trace"，进入CPU Trace页面。
   * HarmonyOS 5.0及以上游戏 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110232.13208929445249534674011464742502:50001231000000:2800:67F8A8543610714E18C3DEABBA4FFDE3DD9E498D80EC51A0A5820578E30D17F2.png)

   <!-- -->

   * Android游戏、HarmonyOS 3.1/4.0及以下游戏 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110232.58072168889062541476824526722119:50001231000000:2800:3419363362A4487E136A836F9A549F9CEC905115681A18EB15A1512AA560B77E.png)

2. 填写测试文件名称、缓存容量、最大文件大小并自定义配置采集的数据项。
3. 点击"开始采集"，进行采集。
4. 采集完成后，点击查看本地记录，可打开本地文件夹查看trace文件。  
   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110233.57424707587832471350994540407665:50001231000000:2800:E0FE21BCFFA48F2B4347295A73713B2DC4096BDB405CE4EA962C51916F879F9F.png)  
   * 后缀为".trace"的文件，可以点击上方"打开trace工具"，在工具中查看trace页面。
   * 后缀为".htrace"的文件，可以点击文件右侧"查看Trace"按钮直接查看trace页面。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110233.64513194011889911828690796566293:50001231000000:2800:C4BAA2C60F78AB51ABF5F97CF6EEFE290DA844681BAE70AFE101F6BE504D4BFB.png)  
