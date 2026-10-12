---
name: document/cn/harmonyos-guides/ide-native-allocation-case
title: 案例：Native内存泄漏分析
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-native-allocation-case
---

# 案例：Native内存泄漏分析

本案例介绍如何判断应用存在Native内存泄漏。

[6.1.0(23) Beta1](https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-610#section174491130173414)以下版本，通过Native Allocation泳道找出Native内存泄漏的原因。

[6.1.0(23) Beta1](https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/overview-610#section174491130173414)及以上版本，通过All Heap泳道找出Native内存泄漏的原因。

## 初步识别内存问题

1. 使用[实时监控功能](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/realtime-monitor)对应用的内存资源进行监控。正常操作应用，观察运行过程中Memory泳道的变化。

   当在一段时间内应用内存没有明显增加或者在内存上涨后又逐渐回落至正常水平，则基本可以排除应用存在内存问题；反之，在一段时间内不断上涨且无回落或者内存占用明显增长超出预期，那么则可初步判断应用可能存在内存问题。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9a/v3/Zz3zYJC1S86Jj35Nx-1kMw/zh-cn_image_0000002701662668.png?HW-CC-KV=V1&HW-CC-Date=20261010T073009Z&HW-CC-Expire=31536000000&HW-CC-Sign=E7910E7437F74266131B2268C8AFCA3921CCFF94FDBDE834B1A4FFC9662ABB63 "点击放大")

2. 当从实时监控页面初步判断应用可能存在内存问题后，通过[深度录制](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/deep-recording)抓取应用内存在问题场景下的详细数据，初步定界问题出现的位置。Memory泳道存在Allocation或Snapshot模板中，使用Allocation或Snapshot模板录制均可。
3. 以Allocation模板为例，创建模板后，将模板中的其余泳道去除勾选，仅录制Memory泳道的数据。

   > 说明
   >
   > 其余泳道会抓取内存分配、内存对象等数据，为避免额外开销和影响分析，建议先排除录制。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a2/v3/3lzGU5I-SNGoorSjaJR5BQ/zh-cn_image_0000002701662662.png?HW-CC-KV=V1&HW-CC-Date=20261010T073009Z&HW-CC-Expire=31536000000&HW-CC-Sign=60650BF7961AC89560801BA19903D903FE27E2235870BB725B5351F0073AD327)

4. 点击三角按钮![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8a/v3/CN_mO91WQr2BlOgmqQcH_A/zh-cn_image_0000002701662664.png?HW-CC-KV=V1&HW-CC-Date=20261010T073009Z&HW-CC-Expire=31536000000&HW-CC-Sign=1C84ECC980DA0061651832F6FC9AC1E7E81A865E76D1AC120EB504A68FA94536 "点击放大")即开始录制。
5. 录制过程中，不断在问题场景操作应用功能，放大问题便于快速定界问题点。
6. 点击下图中方块按钮或者左侧停止按钮结束录制。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/2D6Q-8YaQQuhPIaTcdgDZQ/zh-cn_image_0000002731541859.png?HW-CC-KV=V1&HW-CC-Date=20261010T073009Z&HW-CC-Expire=31536000000&HW-CC-Sign=56CFC7A2EF092583CA72FD878355A28ADC66EBE9091A174747673E5DA47C0AD8 "点击放大")

7. 录制完成后，展开Memory泳道，其中Native Heap表示Native内存，主要是应用使用到的一些涉及Native API所申请的内存以及开发者自己的Native代码所申请使用的堆内存（通常是C/C++），这部分内存需要开发者自行管理申请和释放。

   当Native Heap有明显的上涨，说明Native内存上可能存在内存泄漏，可以使用[Allocation模板](#section776643810160)进行下一步分析。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/idtKRbZ1TDWtY_awEptkHA/zh-cn_image_0000002731381887.png?HW-CC-KV=V1&HW-CC-Date=20261010T073009Z&HW-CC-Expire=31536000000&HW-CC-Sign=8D0F599B14395A56A399AB7B69878EE1CF9D24ADCF0CE65F679D564C79DF9A42 "点击放大")

## 使用Allocation模板分析Native内存问题（DevEco Studio 6.1.0 Beta1及以上版本）

### 录制模板数据

1. 连接设备后，点击应用选择框选择需要录制的应用，选择**Allocation**模板，点击Create Session或双击Allocation图标即可创建一个Allocation的录制模板。
2. 创建模板后，点击三角按钮即开始录制。

   > 说明
   >
   > 如果要分析启动内存，单击Allocation任务后的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1b/v3/rRGStZfaRLyflb3DDBmdfQ/zh-cn_image_0000002731541847.png?HW-CC-KV=V1&HW-CC-Date=20261010T073009Z&HW-CC-Expire=31536000000&HW-CC-Sign=3666502508F8C356D07D31992D35E6691A092CC90517EB15360FB99B11A6A80F "点击放大")按钮。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cc/v3/VVRbQA7kT7W8MhY8tpQRZw/zh-cn_image_0000002731381875.png?HW-CC-KV=V1&HW-CC-Date=20261010T073009Z&HW-CC-Expire=31536000000&HW-CC-Sign=EEB4936C89BB35C6B4323D074E4D51CE525343CC399364AE5BCAF629FBA0E979 "点击放大")

3. 操作应用复现问题场景，并在问题复现完成后，点击下图中方块按钮或者左侧停止按钮结束录制。

   > 说明
   >
   > 默认使用统计模式采集数据。该模式下工具的采集性能更好、负载更低。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/50/v3/ZC40l8ugQnyZP1bA1Q9YXg/zh-cn_image_0000002701662658.png?HW-CC-KV=V1&HW-CC-Date=20261010T073009Z&HW-CC-Expire=31536000000&HW-CC-Sign=07D310E6FEABB5B766240383C2CE2FE612BA2C33AACDB01693AE4F8CB56CD7C6 "点击放大")

### 分析Native数据

1. 框选All Heap中的Native Heap子泳道。


2. 在下方详情区的"Statistics"页签中选择Created & Existing。

   * All Allocations：框选的时间段的所有分配内存信息。
   * Created & Existing：默认选中，在框选范围的起点之后分配的，且在框选范围的终点之前没有释放的内存数据。
   * Created & Released：在框选范围的起点之后分配的，且在框选范围的终点之前已经释放的内存数据。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9d/v3/ymUdwVAkTAKJg_orDoljFg/zh-cn_image_0000002701822576.png?HW-CC-KV=V1&HW-CC-Date=20261010T073009Z&HW-CC-Expire=31536000000&HW-CC-Sign=A79A214EC78C94F665F581D5DD8626533667F282587A39B3757670DE69B2E916 "点击放大")

3. 切换到"Call Trees"页签，该部分数据展示了详细的内存分配栈信息。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6a/v3/s60TzF5eQqWIg3gZU9NghA/zh-cn_image_0000002731381883.png?HW-CC-KV=V1&HW-CC-Date=20261010T073009Z&HW-CC-Expire=31536000000&HW-CC-Sign=57E06F3890E550D818DB723ADA111338F12B42A289AC785B14EB7DBEFBE9B1CE "点击放大")

4. 优先在内存分配栈信息中寻找与业务代码强相关的Symbol Name，即Category中为亮色。从上图中看，主要泄漏点在业务代码侧，需要结合业务代码进行分析。

   > 说明
   > * Category中亮色代表开发者调用栈，灰色代表系统调用栈。
   > * 栈帧中主要为Native栈，为便于开发者分析Native的函数热点，工具提供了符号导入的能力，若需要查看这部分信息，需要导入相应版本的带符号的so库（具体参考[离线符号解析](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-profiler-data#section11376118192614)）。

## 使用Allocation模板分析Native内存问题（DevEco Studio 6.1.0 Beta1以下版本）

### 录制Allocation模板数据

1. 连接设备后，点击应用选择框选择需要录制的应用，选择**Allocation**模板，点击Create Session或双击Allocation图标即可创建一个Allocation的录制模板。
2. 创建模板后，点击三角按钮即开始录制。

   > 说明
   >
   > 如果要分析启动内存，单击Allocation任务后的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/45/v3/xrc9Jd8kQl2CLNGSBMW1HQ/zh-cn_image_0000002731381877.png?HW-CC-KV=V1&HW-CC-Date=20261010T073009Z&HW-CC-Expire=31536000000&HW-CC-Sign=604D765E64AAB68C475E483881EA2104FC15A49027EAB20C3A4C17F65D3ED8FE "点击放大")按钮。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/mOLsaFJKR1mlp2gURsM4Xg/zh-cn_image_0000002701822572.png?HW-CC-KV=V1&HW-CC-Date=20261010T073009Z&HW-CC-Expire=31536000000&HW-CC-Sign=571695E03931909BE70AA805947A50B52E42D2960C1DD51DC74B94B17726D3B7 "点击放大")

3. 操作应用复现问题场景，并在问题复现完成后，点击下图中方块按钮或者左侧停止按钮结束录制。

   > 说明
   >
   > 默认使用统计模式采集数据。该模式下工具的采集性能更好、负载更低。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/49/v3/WE96UV87Qi63TQSJLo4Z5A/zh-cn_image_0000002731381881.png?HW-CC-KV=V1&HW-CC-Date=20261010T073009Z&HW-CC-Expire=31536000000&HW-CC-Sign=1715EDD7DCA69406245CEF20C4671A9CB3A4F7365D97768F93FECAD3B8E42C74 "点击放大")

### 分析Native数据

1. 框选Native Allocation泳道或子泳道。两个子泳道All Heap和All Anonymous VM分别代表使用malloc和mmap函数分配的内存情况。


2. 在下方详情区的"Statistics"页签中选择Created & Existing。

   * All Allocations：框选的时间段的所有分配内存信息。
   * Created & Existing：在框选范围的起点之后分配的，且在框选范围的终点之前没有释放的内存数据。
   * Created & Released：在框选范围的起点之后分配的，且在框选范围的终点之前已经释放的内存数据。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/65/v3/I8bcXHn3TEGxyKLpl_KJQg/zh-cn_image_0000002701822580.png?HW-CC-KV=V1&HW-CC-Date=20261010T073009Z&HW-CC-Expire=31536000000&HW-CC-Sign=0822288EF043E23A42DF7C92D09E1D07DE33B04F14AF33AE96E1B0FAEBFBF9E7 "点击放大")

3. 切换到"Call Trees"页签，该部分数据展示了详细的内存分配栈信息，同样需要选择Created & Existing。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8a/v3/xVtdANjRQ82AbkcMnPHDAA/zh-cn_image_0000002731541855.png?HW-CC-KV=V1&HW-CC-Date=20261010T073009Z&HW-CC-Expire=31536000000&HW-CC-Sign=E24A1BB6390879317CABD60D0BECF2E4738B4CDB90D501B74D171FFF6B2CCBD8 "点击放大")

4. 优先在内存分配栈信息中寻找与业务代码强相关的Symbol Name，即Category中为亮色。从上图中看，主要泄漏点在业务代码侧，需要结合业务代码进行分析。

   > 说明
   > * Category中亮色代表开发者调用栈，灰色代表系统调用栈。
   > * 栈帧中主要为 Native 栈，除了应用本身编译的一些so及带有部分接口信息的so信息外，其他系统库部分仅展示so库与函数偏移信息，若需要查看这部分信息，需要导入相应版本的带符号的 so 库（具体参考[离线符号解析](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-profiler-data#section11376118192614)）。

