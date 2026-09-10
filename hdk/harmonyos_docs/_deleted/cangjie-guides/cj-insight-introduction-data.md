---
name: cangjie-guides/cj-insight-introduction-data
title: 数据区
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-introduction-data
nodePath: 优化应用性能 / 调优工具简介 / 数据区
---

# 数据区

在数据区域，Profiler提供了对性能数据的可视化呈现结果。每个场景化模板所提供的可视化能力各不相同，本章节主要针对所有模板均通用的可视化能力展开介绍。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/06/v3/M3nc4OXiQOmnhYj09Ywmdw/zh-cn_image_0000002701659768.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=7F2B4107643B30090EE23AEA10E0DD71844450A2D54778DD9195EB2964987D08)

整个数据区可以分为五个区域：**①工具控制栏** 、**②时间轴** 、**③标记栏** 、**④泳道区** 、**⑤详情区** 。

  * 工具控制栏：提供标记、收藏、离线符号导入、泳道过滤等辅助功能的管理能力，以及会话状态和时间轴的控制能力。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/56/v3/4RG8NNmER7efa9miiVcNzw/zh-cn_image_0000002731378983.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=F5816BA2945B82244A62933C01C31CF6A47712D07186C36D0BE5EC367A308767) ：标记列表按钮，单击后可以看到当前已放置的所有标记。可以查看/跳转到标记的描述和时刻，支持修改标记的颜色。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bb/v3/DTfcmQcnSDKBEg_DTPZgJQ/zh-cn_image_0000002701819678.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=E7D9A7571AC4B8C531BCF493AAF55739BE2BB6F44CE18C577B66C72C689EA60D)：收藏泳道隐藏/折叠按钮，激活后隐藏/折叠收藏的泳道，置灰时为展示收藏的泳道。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/04/v3/jyjTmrQATd6Zq5Ab0bhFJw/zh-cn_image_0000002731538959.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=9E8B182846956333E1AF1B75E443C6357578CEE157AB7FADD69641D0A7423EF1)：泳道筛选按钮，单击可选择泳道进行过滤。筛选无需录制的泳道，可以降低数据采集本身的开销，但同时会造成数据分析维度的减少。

  * 时间轴：提供横向时间轴，用于显示数据时间戳。

  * 标记栏：用于放置标记，能够帮助开发者标记时间点或时间段。

  * 泳道区：泳道图区域。每个场景化模板都会预置一系列泳道单元（例如上图的“CPU Core”便是一个泳道单元）。泳道单元是整个Profiler工具内，数据组织的最小独立单元，用于剖析应用某一特定维度的运行数据，每个场景化模板均是由一系列泳道单元组成，每个泳道单元都会呈现某一维度的性能数据。开发者可以查看数据随时间变化的特征，发现数据异常的时间段，支持框选时间段后在详情面板查看对应的细节。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1c/v3/vfWlCI28QL61LoMmIv4Drg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=FC05E488A48C55BECD5D87C77EA72D55477CD124DC09FFE650699ABC540DCA32)

    * 每个场景化模板的泳道单元，遵循Top-Down分析原则，越接近顶部的泳道单元，所观测的性能维度越抽象，越顶层；越底部的泳道单元观测的性能维度则越接近于系统底层，建议按照自顶而下的顺序去分析泳道单元呈现的数据内容。
    * 同一个泳道单元中，泳道区中主要展示时间维度的性能变化，帮助开发者首先定位出有问题的时间段；进而通过详情区查看该时段各维度的详细数据，分析具体影响性能的参数或属性。

  * 详情区：展示详细的数据细节。开发者在泳道区域选择数据之后，以各类表格的形式呈现该时间段内各项详细数据。More面板将对左侧详情区中选中数据进行补充描述。




#### 基本操作

#### [h2]开启/关闭会话控制

在数据区，首先可以开启和结束会话的录制，单击工具栏的首个按钮即可。如下图所示，分别对应“开启录制”、“结束录制”、“录制完成状态”，与在会话区域录制的功能效果一致。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/99/v3/x2nYIynzQDuztdgLPEK06g/zh-cn_image_0000002701659770.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=32914A8DD5085843D95738C6F775DA7567361F244246717739AFA18ABEFD2316) ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/89/v3/QSjqeFUjQM-Y_Z4yVrgZDw/zh-cn_image_0000002731378985.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=F6C5F4E7739F61402DA0A2D874E93109453DCFDAFEEF59F637E8B615F3D5C74B) ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a9/v3/8__PcvHDTfe75sXH9SZ0ww/zh-cn_image_0000002701819680.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=78327DA731ED075E8D0E58E8536C93EC2AF65A024E82F2FD581E718603EA3AD2)

#### [h2]时间轴控制

Profiler工具提供了各种丰富的时间轴操作功能：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ef/v3/rHBEQXaHQMS5ZUe-5wudaw/zh-cn_image_0000002731538961.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=CB15E992A5F21DB239E0393AE54D00EAA2A283EEDD7C6F27B55E638DC0F6A13D)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a5/v3/maWQOYZLR2W0oao4fXuNww/zh-cn_image_0000002701659772.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=9C0D341F075C87C75780F375B935F7463CEC5DF672862840DC02F0CA8C9FD3CD)：数据全量展示按钮，单击后时间轴尺度自动调整，将展示会话完整时间范围内的数据。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b1/v3/nXZIgqL3QaK5-PglR6E6AQ/zh-cn_image_0000002731378987.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=E413E19DD6D259544FE1D1C96106A10876107B230A1E81028A4CF08EFACF547E)：时间轴调整按钮（快捷键为W或使用Ctrl+鼠标滚轮），单击后时间轴所展示的时长将变小，更多数据细节会呈现。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5f/v3/ygjmnrR0TGODoeJL9pKN_Q/zh-cn_image_0000002701819682.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=B583D2F7EDA3EF7EEE273807C72719D7956B593E11D16A6A8ACCE7E2C339246F)：时间轴调整按钮（快捷键为S或使用Ctrl+鼠标滚轮），单击后时间轴所展示的时长将变大，更易于观测整体数据趋势。

拖动泳道区域下方的滑条(快捷键为A/D键或使用Shift+鼠标滚轮)，开发者可以调整时间轴所示的时间范围；拖动泳道右侧滑条（或者滑动鼠标滚轮），可以调整泳道单元上下滚动。具体快捷键使用方式请参见[快捷键](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-appendix)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ef/v3/6NyFlOFHRyuLh3HIhTO_BA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=4C93CF1BE3A5F80E73E2F318EEFDE28C93ABCEEAA28C05EB3A8A9F83B16B82C3)

使用W/A/S/D等纯键盘的快捷键操作，仅在已激活的泳道区域生效。若泳道区域中存在亮蓝色的选中边框，即为激活状态。

#### [h2]查看详情面板

当开发者在泳道区域观察到可疑数据后，便可以通过框选或者点选的方式，将相关详细数据展示到详情面板中。泳道中条块状的数据支持点选查看，在泳道区域鼠标单击拖动再释放完成框选。可以在框选的同时按住Alt键，完成框选后时间轴尺度将会自动适应，整个框选时段会充满整个泳道区域，方便聚焦观察被选择的时段。

由于不同的泳道单元会展示不同维度的数据，因此详情面板展示的数据是来自于泳道区域中被选择的泳道单元。被选中的泳道单元会呈现蓝色，与其他泳道单元有明显差异。此外，当开发者直接选中泳道单元，而未进行框选或点选时，详情面板中会展示整个泳道单元的完整详细数据（效果等同于完整框选该泳道单元）。

#### [h2]添加/编辑标记

为了便于开发者记录分析出的关键时间点，Profiler工具提供了标记功能供开发者使用。

Profiler支持两种时间标记：

  * 单点时间标记：单击需要关注的时间点，添加的时间标记显示为![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/85/v3/OHOtJDH1S-e5xXRDiqk17Q/zh-cn_image_0000002731538963.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=206AEA0127FCA376666441D76108DE3C5365137F90A75229FC331C3AE6908EB6)（快捷键为M，颜色可自定义）。

  * 时间段时间标记：鼠标框选要关注的时间段，单击该时间段右上角的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cc/v3/R4yLa4ZMT2aeNRyH4Q_T-w/zh-cn_image_0000002701659774.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=29A2A4885C8D466C4B6539CDB1545E4BA651DEF629F140BED939C8C4C3DEC99D)添加时间段起始标记（快捷键为Shift+M），按钮颜色为未添加时![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/18/v3/7gs2PU4cTJ-lrkO-Eu-WrA/zh-cn_image_0000002701659774.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=55871C4F03CBFC0B92D93AE309865A56C17F50BD98B26E248502AFF0D17B3F33)及已添加时![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c9/v3/Ni633NVHR4ucz72Oma4D1g/zh-cn_image_0000002731378989.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=6624257A89CE76126C2A46FE5F1F931E715C528F522821D19627A85857D6E907)，时间段标记如下图紫色部分所示（颜色可自定义）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d9/v3/n2y9SIAGSxacIHdyNvjmtg/zh-cn_image_0000002701819684.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=EF59E4EEF361142A01B1AF64D9461AC44D467A6A323FC90B021443DAFFEC08E0)




开发者可以在时间轴下方的标记区域单击放置单个标记，也可以在框选时间段后，单击旗子按钮放置该时间段的标记，如下图所示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6e/v3/Ojb_JHRqTG2HMS8bvUeuvg/zh-cn_image_0000002731538965.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=29DBE2899FF72856202ABADA8EACE781E9B8791C6E36DD5DC9C5F288F4170B5E)

支持使用“Ctrl+, ”向前选中单个标记，“Ctrl+. ”向后选中单个标记；“Ctrl+[ ”向前选中时间段的标记，“Ctrl+]”向后选中时间段时间标记。

标记放置完成后，可以通过双击标记按钮，在弹出的标记属性框中修改标记的描述和颜色信息，或者删除标记。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a7/v3/d9ZUUKosQR-0LeztgL-Ktw/zh-cn_image_0000002701659776.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=0C9E43571CC51FA78E48C5EC774E83601195FF9E9CF14AFBEE5BA892B9F568C3)

此外，工具还提供了查看不同标记之间时间差的能力，只需要先选中一个标记，再鼠标悬浮在其他标记点上，便可在面板右下角![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/67/v3/Hc-jD5RrQYGRj-m-gyTE2w/zh-cn_image_0000002731378991.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=EBD5146F172FECB5F5D9DA68843EF51851E5164A65681E444DE059E4DF78D6E9)后看到被悬浮的标记点和被选择的标记点的时间差。借助这个能力，开发者能够快速获知一些特定时刻的时间差，这对于分析时间敏感的性能问题尤其有用。

#### [h2]收藏泳道单元

在使用工具分析，可能会遇到泳道单元过多，导致想分析的泳道单元间隔过远、分析低效的情况，使用收藏功能，可以帮助开发者将关注的泳道单元提拉到泳道区域的顶端。将鼠标悬停在想要收藏的泳道单元之上，出现收藏图标![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8d/v3/Zh7-1P3WRv-ux2efSMqDoA/zh-cn_image_0000002701819688.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=17191A157C115E9406E92A588915E220878975D222F2EA3E3D4A36BA7E44DAB6)，单击该按钮即可完成收藏。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b9/v3/_Fd1GXk1TGau1tJ5MKc-0A/zh-cn_image_0000002731538967.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=2E1F639C1BCCB07C90E076E2EF830326B429D160EEDD2A58F8C920755A5775C5)

再次单击该按钮则取消收藏。此外，由于顶部区域空间有限，工具还提供了压缩泳道的能力，单击泳道中![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6d/v3/DD3rMc08QYiXt2Tnab-n8w/zh-cn_image_0000002701659778.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=04A46FDAA474E44B7376FD60D136DFE47AE10EE6420E3AD670F314A1C465EBE8)图标，可以将收藏的泳道单元进行折叠。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/70/v3/Yx9bG5qPSMqyxwkIuu67FA/zh-cn_image_0000002731378993.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=FDE6CE161952A0661FB5C739E57DC89F6D79EAEE9626ABED41465BC6A00715AD)

如果泳道展示不完整，当鼠标悬浮到泳道标题区，会提示该泳道的泳道信息。

如果收藏的是子泳道，当鼠标悬浮到收藏的子泳道标题区，会提示该泳道的父泳道信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3/v3/P4NLkvnERTKRk2OSHzOoXQ/zh-cn_image_0000002701819690.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=4E23F9A9B138D0A7259AA24101410830AF8B0AD43CC331FE02A65EBCF81F5597)

#### [h2]展开/折叠子泳道

工具提供了两种方式展开/折叠子泳道：

  * 单击父泳道左边小三角符号![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/88/v3/af-Hu3Z2QqG971gyOmf1FQ/zh-cn_image_0000002731538969.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=A0BF376E0A5D832E9574351E8A89C4A8570809E92F0129130700163ADFD86524)。

  * 双击父泳道表头区展开泳道。




#### [h2]全局搜索

为了帮助开发者迅速查找关心的性能数据，Profiler工具提供了全局搜索功能。

  1. 在搜索框选项区可选择搜索类型，支持搜索泳道和搜索泳道数据，默认搜索泳道数据。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/67/v3/SOGZwgtTQvmZ2grtnEJdCQ/zh-cn_image_0000002701659780.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=C2676213615112A591B47EF32E56D09F4E169AC7ED5B7764AAAFE0C717D4EBB5)

  2. 如需搜索泳道数据，在输入内容前或搜索到结果后希望进一步确认搜索范围，可以选择在全时段内搜索或者在框选的时间范围内搜索；也可以选择在所有泳道内搜索还是在选择的泳道范围内搜索。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/91/v3/Onx_7xjeQKWFqCteNwTRUQ/zh-cn_image_0000002731378995.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=58B9AE47E9B569477E95097C864794AE5A16738B88CEE302B9D9EFD1E672C508)

  3. 可以单击Cc按钮，设置输入的关键字是否忽略大小写，默认为忽略大小写，单击时可自动重新触发搜索，搜索结果数量会显示在搜索栏右侧。有搜索结果的关键字会自动被记录到历史记录中，开发者可以通过单击“<”或者“>”按钮，向前向后查看搜索结果，泳道区域会自动跳转到对应的结果位置并为开发者选中该结果，详情面板中会自动刷新出相应详细数据。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/28/v3/JsMm0rGZTfq75TaS2otHqA/zh-cn_image_0000002701819692.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=7340D65A170C5E8CB896FA2E766534797FDD1843856BA640BC31C6D4228FE18F)



