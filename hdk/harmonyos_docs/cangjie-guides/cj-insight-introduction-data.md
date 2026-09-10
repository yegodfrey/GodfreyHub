---
name: cangjie-guides/cj-insight-introduction-data
title: 数据区
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-introduction-data
nodePath: 优化应用性能 / 调优工具简介 / 数据区
---

# 数据区

在数据区域，Profiler提供了对性能数据的可视化呈现结果。每个场景化模板所提供的可视化能力各不相同，本章节主要针对所有模板均通用的可视化能力展开介绍。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d3/v3/PJD2eCTdRbq_vlwmeVSwSQ/zh-cn_image_0000002743078005.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=669905C275B94A9DC46509DF58D9A621D18A30D9838A8165D73ACF9FB7A0BCDE)

整个数据区可以分为五个区域：**①工具控制栏** 、**②时间轴** 、**③标记栏** 、**④泳道区** 、**⑤详情区** 。

  * 工具控制栏：提供标记、收藏、离线符号导入、泳道过滤等辅助功能的管理能力，以及会话状态和时间轴的控制能力。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f3/v3/ryZHbgzgTN66DHDXaV9gPg/zh-cn_image_0000002713559044.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=7061BB106231FFA021425FDA657518B68C0C32EE1D17B31DB53BF6E83633DA39) ：标记列表按钮，单击后可以看到当前已放置的所有标记。可以查看/跳转到标记的描述和时刻，支持修改标记的颜色。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/19/v3/OFDYhaSnQo6IQ7wZLPZlHQ/zh-cn_image_0000002743197957.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=ED1CAE41E1BE1E0699393339408F801D92E29EC3A6D2BD0AF391F46BF8D2AB31)：收藏泳道隐藏/折叠按钮，激活后隐藏/折叠收藏的泳道，置灰时为展示收藏的泳道。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0b/v3/NIQ9nHZWR1CgcKUSIiKwkg/zh-cn_image_0000002713399076.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=C1BD884A08550E50B2B5747E9CED6DA296265623D7BA7EC9076877CD693965E5)：泳道筛选按钮，单击可选择泳道进行过滤。筛选无需录制的泳道，可以降低数据采集本身的开销，但同时会造成数据分析维度的减少。

  * 时间轴：提供横向时间轴，用于显示数据时间戳。

  * 标记栏：用于放置标记，能够帮助开发者标记时间点或时间段。

  * 泳道区：泳道图区域。每个场景化模板都会预置一系列泳道单元（例如上图的“CPU Core”便是一个泳道单元）。泳道单元是整个Profiler工具内，数据组织的最小独立单元，用于剖析应用某一特定维度的运行数据，每个场景化模板均是由一系列泳道单元组成，每个泳道单元都会呈现某一维度的性能数据。开发者可以查看数据随时间变化的特征，发现数据异常的时间段，支持框选时间段后在详情面板查看对应的细节。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/20/v3/rPBUTFEjTamS-kf507wbqw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=A19F604245ECF791CBF7FC9E9753D1B1575BE75F90FF49BB764E9860ADEEB3B2)

    * 每个场景化模板的泳道单元，遵循Top-Down分析原则，越接近顶部的泳道单元，所观测的性能维度越抽象，越顶层；越底部的泳道单元观测的性能维度则越接近于系统底层，建议按照自顶而下的顺序去分析泳道单元呈现的数据内容。
    * 同一个泳道单元中，泳道区中主要展示时间维度的性能变化，帮助开发者首先定位出有问题的时间段；进而通过详情区查看该时段各维度的详细数据，分析具体影响性能的参数或属性。

  * 详情区：展示详细的数据细节。开发者在泳道区域选择数据之后，以各类表格的形式呈现该时间段内各项详细数据。More面板将对左侧详情区中选中数据进行补充描述。




#### 基本操作

#### [h2]开启/关闭会话控制

在数据区，首先可以开启和结束会话的录制，单击工具栏的首个按钮即可。如下图所示，分别对应“开启录制”、“结束录制”、“录制完成状态”，与在会话区域录制的功能效果一致。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/25/v3/UP_ZV4tGRJqiRCQNhXiLzg/zh-cn_image_0000002743078007.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=E970944592D718ECD568C43882A9F7474B3250B36DB7C09AACDB3E3DBCC3BE38) ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/12/v3/qZZCHgLkQ-2Noj8LWY4jNQ/zh-cn_image_0000002713559046.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=2A83E4073B0F0772FBD4434533DF62098089F2C2C54F97AC94FBDD42D0EA4A1E) ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6f/v3/IEfqH9WKSeCIYv4uyDwh6g/zh-cn_image_0000002743197959.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=5B4E01D635C0C3F09EDA734EAD19545911C00BE5ED4CDC3418C7B3C690B7ED2C)

#### [h2]时间轴控制

Profiler工具提供了各种丰富的时间轴操作功能：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/mM8Nr67OSn2dqghNGdPi4w/zh-cn_image_0000002713399078.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=21CD073846E5540CE4B22565E70C17A505AB3FEDC2E03B3E05DD41A187AA3FAF)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b9/v3/Jr25BTn5SQaIK_fG8eiFQA/zh-cn_image_0000002743078009.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=C63F06BF899D73FBF5259378EF3307DAA85E370398794900BC71C543DC96C44E)：数据全量展示按钮，单击后时间轴尺度自动调整，将展示会话完整时间范围内的数据。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a8/v3/_6VoFKElSoKsx4dZih0YSA/zh-cn_image_0000002713559048.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=F46233C93169EEE08D5641864A21AF51958FB78621047D888366E85C43BACB4A)：时间轴调整按钮（快捷键为W或使用Ctrl+鼠标滚轮），单击后时间轴所展示的时长将变小，更多数据细节会呈现。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/92/v3/Qm0CgVrzSKawYtAuigfs3w/zh-cn_image_0000002743197961.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=963D5EE26A0A22A140E50F4EF2E6575E83EF8CD17789800C98607E5EC4F78903)：时间轴调整按钮（快捷键为S或使用Ctrl+鼠标滚轮），单击后时间轴所展示的时长将变大，更易于观测整体数据趋势。

拖动泳道区域下方的滑条(快捷键为A/D键或使用Shift+鼠标滚轮)，开发者可以调整时间轴所示的时间范围；拖动泳道右侧滑条（或者滑动鼠标滚轮），可以调整泳道单元上下滚动。具体快捷键使用方式请参见[快捷键](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-appendix)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dd/v3/ucJGXeV0Q7uI5cjk_OdYtQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=C6C83FFAC3FE886014C30FCEB122D78AA7E6D28A4883408390928F5DA5B19717)

使用W/A/S/D等纯键盘的快捷键操作，仅在已激活的泳道区域生效。若泳道区域中存在亮蓝色的选中边框，即为激活状态。

#### [h2]查看详情面板

当开发者在泳道区域观察到可疑数据后，便可以通过框选或者点选的方式，将相关详细数据展示到详情面板中。泳道中条块状的数据支持点选查看，在泳道区域鼠标单击拖动再释放完成框选。可以在框选的同时按住Alt键，完成框选后时间轴尺度将会自动适应，整个框选时段会充满整个泳道区域，方便聚焦观察被选择的时段。

由于不同的泳道单元会展示不同维度的数据，因此详情面板展示的数据是来自于泳道区域中被选择的泳道单元。被选中的泳道单元会呈现蓝色，与其他泳道单元有明显差异。此外，当开发者直接选中泳道单元，而未进行框选或点选时，详情面板中会展示整个泳道单元的完整详细数据（效果等同于完整框选该泳道单元）。

#### [h2]添加/编辑标记

为了便于开发者记录分析出的关键时间点，Profiler工具提供了标记功能供开发者使用。

Profiler支持两种时间标记：

  * 单点时间标记：单击需要关注的时间点，添加的时间标记显示为![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cd/v3/ldg8kapZRoiIyfYitReIIQ/zh-cn_image_0000002713399080.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=0CB58CF6758D9736116CE64BAFE6BBB57370FC506C529A604C3FB680F7610660)（快捷键为M，颜色可自定义）。

  * 时间段时间标记：鼠标框选要关注的时间段，单击该时间段右上角的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/06/v3/aaD0I9XdQfe0jqhujsfvfw/zh-cn_image_0000002743078011.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=009BB6C70D3B7F52C57159351E2B15A2A383BF09ECCDED5B19CE612F13FCD673)添加时间段起始标记（快捷键为Shift+M），按钮颜色为未添加时![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9a/v3/LxbI4xsSQE671wQDKNGx6w/zh-cn_image_0000002743078011.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=7D2E4715B657C512BD08D074AFD7A49A3B1D48CC67D916267593DEB88CA77AF1)及已添加时![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1d/v3/bI26VdMYS4SKWZFMHmKjfw/zh-cn_image_0000002713559050.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=C4576AC35CA8D3401C43C39F16B6F95ADF68EB1B4F0941081702B3D2A10CFB05)，时间段标记如下图紫色部分所示（颜色可自定义）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2f/v3/UDxWrqPJR2KAx3sMDoi9Eg/zh-cn_image_0000002743197963.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=29CD6201E55C081CF56F675F4F1BD294499004653995EDCC6F41A2B63C7CB97A)




开发者可以在时间轴下方的标记区域单击放置单个标记，也可以在框选时间段后，单击旗子按钮放置该时间段的标记，如下图所示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2d/v3/QU6Pl-6tT9imv6641qAe2w/zh-cn_image_0000002713399082.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=C635F659A5697666402CBACDA8A88BFBCF348EECD36AF1EF6F1ABC146D687E7C)

支持使用“Ctrl+, ”向前选中单个标记，“Ctrl+. ”向后选中单个标记；“Ctrl+[ ”向前选中时间段的标记，“Ctrl+]”向后选中时间段时间标记。

标记放置完成后，可以通过双击标记按钮，在弹出的标记属性框中修改标记的描述和颜色信息，或者删除标记。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4f/v3/0nCTcHpdQMmzmQncz0qDuQ/zh-cn_image_0000002743078013.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=D593EF1A52A1DF81412B9ECCDB2648AE1DFFD8C3CEFC36EB0DFD9F634FCA1AE6)

此外，工具还提供了查看不同标记之间时间差的能力，只需要先选中一个标记，再鼠标悬浮在其他标记点上，便可在面板右下角![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/28/v3/7spDbedHQRuRxSikWZ6T2g/zh-cn_image_0000002713559052.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=917C2A78B9D29576C184A4DF1598B6A380E3EFB273EDC9867B0A1AAE1634F360)后看到被悬浮的标记点和被选择的标记点的时间差。借助这个能力，开发者能够快速获知一些特定时刻的时间差，这对于分析时间敏感的性能问题尤其有用。

#### [h2]收藏泳道单元

在使用工具分析，可能会遇到泳道单元过多，导致想分析的泳道单元间隔过远、分析低效的情况，使用收藏功能，可以帮助开发者将关注的泳道单元提拉到泳道区域的顶端。将鼠标悬停在想要收藏的泳道单元之上，出现收藏图标![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4c/v3/AwYCTnvsQMOJuAIAWrBj0g/zh-cn_image_0000002743197965.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=0F9F1E6285105C2BA459F8AFA05DF12867696AE3A3E58398C87F3624AB8A158B)，单击该按钮即可完成收藏。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/93/v3/Uy3Hu3rrSdq0gLRvdX_luw/zh-cn_image_0000002713399084.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=7B45BDBEE9ECAF54C9A581524E054D1074A569D28837BF0F38F106FA2E3883CA)

再次单击该按钮则取消收藏。此外，由于顶部区域空间有限，工具还提供了压缩泳道的能力，单击泳道中![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c0/v3/RvWHF1-mRBG1YER_7S5HsQ/zh-cn_image_0000002743078015.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=0CDF9AC60D37623B4A2AAB28F2DB1B7DB5F1260BF9B0208D50A4E644720997CD)图标，可以将收藏的泳道单元进行折叠。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/46/v3/EMyiyrZJTbOcOAll271JDw/zh-cn_image_0000002713559054.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=40042EFECBF1B56E4A0B60476386B2B72C570B09FFF2A4A7A69F375B7DAA06D1)

如果泳道展示不完整，当鼠标悬浮到泳道标题区，会提示该泳道的泳道信息。

如果收藏的是子泳道，当鼠标悬浮到收藏的子泳道标题区，会提示该泳道的父泳道信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c/v3/SM35M44VSVmOCk15Dsa8AQ/zh-cn_image_0000002743197967.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=8DCFDFB7870FA3C823FC23E3FA24B8C51FCDF2D3A9A17F0B10C99278400DA93D)

#### [h2]展开/折叠子泳道

工具提供了两种方式展开/折叠子泳道：

  * 单击父泳道左边小三角符号![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/21/v3/ypcmdJ0KS0a-_dCGgyuT5Q/zh-cn_image_0000002713399086.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=8976D56CE3056AE5E76C35C61EE03AA2E11B9E7B2978306916F42B83D99F82F3)。

  * 双击父泳道表头区展开泳道。




#### [h2]全局搜索

为了帮助开发者迅速查找关心的性能数据，Profiler工具提供了全局搜索功能。

  1. 在搜索框选项区可选择搜索类型，支持搜索泳道和搜索泳道数据，默认搜索泳道数据。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b8/v3/g62Fb-OsTaSmWwyzPy_ifQ/zh-cn_image_0000002743078017.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=16340619363ABF6F99885ADB811CACF60B1212FD4264ED7D0F45DD15B5A92F98)

  2. 如需搜索泳道数据，在输入内容前或搜索到结果后希望进一步确认搜索范围，可以选择在全时段内搜索或者在框选的时间范围内搜索；也可以选择在所有泳道内搜索还是在选择的泳道范围内搜索。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d5/v3/f-1RmgdjTxuKUvL_QBTRgw/zh-cn_image_0000002713559056.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=A568EC690329487C1F3B2A3C3A5163B985E97A81677FF027071BF330B373B91D)

  3. 可以单击Cc按钮，设置输入的关键字是否忽略大小写，默认为忽略大小写，单击时可自动重新触发搜索，搜索结果数量会显示在搜索栏右侧。有搜索结果的关键字会自动被记录到历史记录中，开发者可以通过单击“<”或者“>”按钮，向前向后查看搜索结果，泳道区域会自动跳转到对应的结果位置并为开发者选中该结果，详情面板中会自动刷新出相应详细数据。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6a/v3/VZJZ6rLxQIGKy0GJlZ-KKw/zh-cn_image_0000002743197969.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=778265C380353C2211F362294AAF7BB45335B549EEF2FAF2A0ECCC0B6CB214A7)



