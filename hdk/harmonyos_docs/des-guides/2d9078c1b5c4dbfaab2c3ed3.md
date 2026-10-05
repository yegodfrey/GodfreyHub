---
name: document/cn/des-guides/fonts-0000001053221087
title: 字体
uri: https://developer.huawei.com/consumer/cn/doc/des-guides/fonts-0000001053221087
source: portal
---

# 字体

通过研究用户在不同场景下对智能手表的阅读反馈，秉承以人为中心的设计理念，结合人因研究的分析结论，我们定义了一系列字号、字体与排版的规则，帮助应用在不同场景下给用户提供舒适高效的阅读体验。

#### 内容

     * 字号规范
     * 字体规范
     * 大数字规范
     * 字体排版系统

#### 字号规范

字体系统包含一系列等比例字号大小的集合，可以适应不同产品及内容的排版需求。每种类别的字号都有相应的使用场景，请使用推荐字号作为你的选择。

*[fp：中文全称字体像素，英文为 Font pixels，字体像素大小默认情况下与 vp 相同，但如果开发者在设置中修改了字体显示大小，就会在 vp 的基础上乘以 scale 系数](https://developer.harmonyos.com/cn/docs/design/des-guides/basic-0000001055539104)。

**智能穿戴/轻智能穿戴**

Scale Category | ID | Size-px | size-fp | Font-weight | َ典型使用场景  
---|---|---|---|---|---  
H1 | text_size_headline1 | 140 | 70 | HarmonyOS Sans Condensed-Medium HarmonyOS Sans Condensed-Regular | 一项数据显示：心率单次测量数据、训练状态最大摄氧量数据  
H2 | text_size_headline2 | 104 | 52 | HarmonyOS Sans Condensed-Medium HarmonyOS Sans Condensed-Regular | 运动中一项数据、铁三换项中大数字、锻炼提醒大数字、睡眠时间、秒表、充电、升级数据等  
H3 | text_size_headline3 | 92 | 46 | HarmonyOS Sans Condensed-Medium HarmonyOS Sans Condensed-Regular | 运动中两组数据、心率实时监测顶部数据、活动记录数据  
H4 | text_size_headline4 | 72 | 36 | HarmonyOS SansCondensed-Medium HarmonyOS Sans Condensed-Regular | 运动中三组和四组数据、个人勋章数据、心率值数据、呼吸结果大数字  
H5 | text_size_headline5 | 60 | 30 | HarmonyOS Sans Condensed-Medium HarmonyOS Sans Condensed-Regular | 活动记录首页数据、锻炼提醒小数字  
H6 | text_size_headline6 | 48 | 24 | Medium | 选择器焦点文字、训练压力提醒说明文字  
H7 | text_size_headline7 | 38 | 19 | Medium | 页面顶部标题、选择器非焦点文字、列表标题文字、锻炼记录最大最小值文字  
Subtitle 1 | text_size_subtitle1 | 38 | 19 | Medium | 内容或设置项的分组标题  
Subtitle 2 | text_size_subtitle2 | 30 | 15 | Medium | 纯文本分组标题  
BUTTON 1 | text_size_button1 | 18 | 19 | Medium | 弧形大按钮文本  
BUTTON 2 | text_size_button2 | 30 | 15 | Medium | 胶囊按钮文本  
Body 1 | text_size_body1 | 38 | 19 | Medium | 段落标题  
Body 2 | text_size_body2 | 36 | 18 | Regular | 段落文本  
Body 3 | text_size_body3 | 30 | 15 | Regular | 列表辅助文本、段落小文本  
Caption | text_size_caption | 26 | 13 | Regular | 小辅助文本  
chart | text_size_chart1 | 20 | 10 | Regular | 图表刻度文本：锻炼记录坐标数据、活动记录坐标数据  
OverLine | text_size_overLine | 30 | 15 | Regular | 普通标题下的描述文本  
  
#### [h2]字号使用示例

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612120208.94374189032737058606378961059934:50001231000000:2800:4641E77DD291E8EACE6AD7C0259313144E86A4A2304668C083A36D879E1E6387.png?needInitFileName=true?needInitFileName=true)

#### 字体规范

中文默认字体为 HarmonyOS Sans，西文默认使用 HarmonyOS Sans Condensed；手表上所有字体优先使用窄体属性（Condensed）。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612120209.17277397161710282102205126737465:50001231000000:2800:68CD07B00863F907EAE12DD1F9F56D803747678B661237E8D06C5DE6DF468EB3.png?needInitFileName=true?needInitFileName=true)

#### 大数字规范

智能手表大数字字体，字号大于 30fp 的内容使用 HarmonyOS Sans Condensed，以达到品牌差异及增强传播等目的。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612120209.45521901360882269436749504889379:50001231000000:2800:0846C7315894F74B10A99D0A038DF0B06F3584C78C7B7B279754139F05B78211.png?needInitFileName=true?needInitFileName=true)

#### 字体排版系统

     * **字体行距规则** ：段落文本使用默认行距。
     * **文本对齐规则** ：所有文本都按照居中对齐方式。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612120209.66316186284081078680238850044089:50001231000000:2800:A6EC1F613BAF1DF328056F239907EAF4122AC09E86870FC909D3A4BC5DB26213.png?needInitFileName=true?needInitFileName=true)
