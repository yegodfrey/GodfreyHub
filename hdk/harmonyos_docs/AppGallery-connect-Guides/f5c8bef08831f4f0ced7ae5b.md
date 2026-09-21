---
name: document/cn/AppGallery-connect-Guides/smartperf-tool-collection-0000001543488198
title: 采集性能数据
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/smartperf-tool-collection-0000001543488198
---

# 采集性能数据

## 前提条件

游戏性能调优工具已[设置采集要求](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/smartperf-tool-setting-0000001557100668)。

## 操作步骤

1. 在HiSmartPerf-Editor主界面左侧导航点击"游戏性能测试"。
2. 工具识别到手机设备上安装的应用后，您可以在搜索框内搜索或下拉选择待采集数据的游戏。 说明
   > * 若工具未识别手机安装的游戏，建议点击右上角![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110226.70326342972889709419202391415244:50001231000000:2800:8BEEFBAF92C0BEF6D696AA3DE9BFF7299C2F4076139D948B4B839BEF69B96F0B.png)实时刷新。
   > * HarmonyOS 5.0及以上设备支持点击右下方![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110226.69271109189876030088827752769591:50001231000000:2800:76CA00208E5DA9CCFB16FFA1850918A1CB55111B09C66CA7F313BB946D296064.png)开启手机投屏。

   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110226.87886751464894789743746139920580:50001231000000:2800:BFEFE1490710869D2389637D901E8D55E2A24B791E5A2E53D28FCD913E5337E8.png)
3. 点击"启动"，手机自动启动对应的游戏后，您可以手动进入到特定的游戏场景。

   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110227.38623526897483946585431123572850:50001231000000:2800:AB7685911344FDA347867279A04CBD9AEB8E88DA2B57FC341E7E2427F3020D2D.png)
4. 确保启动状态为"测试中"，点击"![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110227.21059275375867593167129511946499:50001231000000:2800:AE5C5A00A0B4EBC21BD3B5AC86495B0B1FD012AE11443A76E20C5B3ADD5454C5.png)记录数据"即可开始采集游戏数据。如需采集当前运行的不同进程的性能数据，点击进程下拉框，选择不同进程（默认为Main process）即可切换。 说明
   > * 测试过程中如需抓帧，点击"抓帧"按钮即可开始抓取，显示抓帧完成后，可点击"查看帧文件"进行查看及分析。
   > * 查看帧文件需[测试设备连接Graphics Profiler工具](https://developer.huawei.com/consumer/cn/doc/Tools-Guides/frame-capture-0000001050701440#section53031221124)。

   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110227.61219599734322507241882107049808:50001231000000:2800:DB70D8DC3CAECF35AD5888C1B07085208AE625BCB2A2876113AEED3EB7B9474A.png)
5. 采集数据的过程中，您需在手机上进行游戏操作。若想停止采集，请手动点击"![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110227.62270847428185741017942189094453:50001231000000:2800:780BBDC8F52EECADBF9850C589BF163EC8BB7C256B586522C1663A8E07CEB63A.png)保存数据"结束。若想结束测试，请手动点击"测试中"结束。 说明
   > * 在生成测试报告的过程中请保持手机和工具的连接顺畅，否则报告可能会生成失败。
   > * 建议单次采集时长不超过30分钟，否则可能因为数据量过大造成报告生成失败。
   > * 采集实时数据的过程中可监控数据变化，采集后台数据的过程中则无法查看数据变化及其测试报告。
   > * 在测试过程中，您可以随时点击记录数据和保存数据来生成测试报告。

   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110227.01822293506672769707602543931598:50001231000000:2800:0AF975A4E9AE9C42F33AE270F2396396A4CCAD34FE45F7906650CEAB837F488C.png)
6. 若[通用设置](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/smartperf-tool-setting-0000001557100668#section791619411713)的测试报告保存设置为**自动保存** **/自动上传** ，采集到的**数据项** 和**游戏截图** 将自动保存至本地并自动上传至云端。若设置为**询问保存/询问上传** ，您可以在弹出的"保存设置"窗口中决策是否保存至本地或上传至云端。

   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212110227.15846444159281702274275615442623:50001231000000:2800:60FFFB52259C0F49AD0A2B07328D65BCD435EE3BCC5D6B237F9FD8436AB7F839.png)

