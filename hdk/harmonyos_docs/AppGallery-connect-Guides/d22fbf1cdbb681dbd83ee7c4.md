---
name: document/cn/AppGallery-connect-Guides/agc-crash-locate-ios-0000001055260540
title: 分析崩溃问题
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-crash-locate-ios-0000001055260540
---

# 分析崩溃问题

发生崩溃后，崩溃服务会将崩溃数据上报到AGC，您可以在AGC中查看崩溃问题的详细信息，分析崩溃发生的原因。本章节以测试崩溃时制造的崩溃为样例，介绍分析崩溃问题的基本方法。

## 前提条件

您需要已制造崩溃并上报过崩溃数据，详情请参见[测试崩溃实现](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-crash-test-ios-0000001054941954)。

## 打开崩溃问题详情

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击"开发与服务"。
2. 在项目列表中找到您的项目，在项目下的应用列表中点击您的应用。
3. 点击"质量 > 崩溃"，进入崩溃服务页面。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250704155608.86043843715936370053428172246041:50001231000000:2800:6E771B3A12D91598A253ED38ED4B7D12880D7EE7BC5B7A72B631017328E035BC.png)

4. 在崩溃服务的"统计"页面，您可以通过添加过滤器和设置右上角的时间选择器过滤您的崩溃数据。例如，过去90天内您曾在多个设备上点击按钮测试崩溃，便可以在统计页面上选择浏览过去90天内的崩溃数据，了解您测试时的崩溃是否已经上报。 说明
   > * 如果您开通崩溃服务时间较短，未能查看到数据，由于统计数据有延迟，建议您12小时后再统计查看。
   > * 如果您"数据处理位置"选择了非中国的站点，可能无法查看最近1小时、最近24小时的"应用启动次数"和"崩溃率"数据，建议您间隔24小时后再查看。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250704155608.62874254840793127533537093207021:50001231000000:2800:3FB6EE54659891068683674853F4DB3848CDC77272A4168B43FCC4F53110A794.png)
5. 确认崩溃已经上报后，选择"问题"，通过设置时间选择器查看指定时间范围内该应用累计发生的崩溃问题及崩溃次数。例如，您的崩溃是过去90天内发生的，可以选择浏览"过去90天"的问题。根据崩溃时间和崩溃的次数，您可以找到您测试崩溃时的崩溃问题如下图所示。点击问题名称可进入问题详情页面。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250704155608.49299764321332898780380140538838:50001231000000:2800:53B2C9169067B6BBF936F02BE785171B0454E54BC3174F450CD4319B4DAB270D.png)

## 分析崩溃问题

1. 在问题详情页面，您可以通过图表查看您在不同时间测试崩溃时的实际崩溃次数，崩溃问题出现频率最高的前5位版本、设备和操作系统分布，帮助您分析应用出现崩溃问题的趋势。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250704155608.73221589241810835302112460796501:50001231000000:2800:07A142BEF4E4AE97CB2074B0478A4036EFD30D3057F0C36B346FF608B20CDBDF.png)

2. 在问题"堆栈"信息中，您可以大概了解崩溃发生的原因。 说明
   >
   > 关于崩溃服务页面的更多操作详情，请参见[崩溃问题概览](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-crash-appendix-problems-0000001059262024)。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250704155608.63355927170352427709379234612884:50001231000000:2800:213E4F05A41E194649C37ACCE333F4884C512978B9CE426E69BB4B4A8FBCA677.png)
3. 当对问题的堆栈进行分析，初步得出崩溃原因后，您可以为崩溃问题标注状态和优先级，并提交备注信息。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250704155609.62820206849129316554610823413995:50001231000000:2800:BF3457BD0FC44CD325808C3DE6A57556C81E8F7A1CE2BD8BC92FCBA72700026D.png)

   可标注信息包含以下三种，请结合问题当前状态标注：
   * 状态标注：未解决、已关闭、忽略
   * 优先级标注：高、中、低
   * 备注：您可点击备注区域后在弹出框新增备注信息，点击"提交"完成备注。

## 更多信息

如果常规的崩溃信息无法满足您定位问题的需求，您可以自定义获取更多的崩溃信息：

* 对崩溃报告中的用户标识符、日志、键值对进行自定义，从而对特定用户、日志和关键信息进行定位。详细参见[自定义崩溃报告](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-crash-customreport-ios-0000001055340561)。
* 当代码替换为不可阅读的代码时，您可以通过iOS符号文件获取经过符号化处理后[获取可阅读的崩溃报告](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-crash-mapping-ios-0000001055140559)。

