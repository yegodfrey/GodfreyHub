---
name: cangjie-practices/textexpand
title: 文本展开与折叠
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-practices/textexpand
nodePath: 实践 / 文本展开与折叠
---

# 文本展开与折叠

#### 概述

列表中的博文、评论等复合型内容组件，在文本行数超过预设阈值时，触发“展开”、“收起”的功能。内容收起时，如果有用“图片”展示“表情”的功能场景，由于图片出现的位置和大小都不固定，在收起展开时，截止到文字结尾的位置不好判断。

本文将介绍解决这一问题的基本逻辑和解决方案，帮助开发者使用系统自带模块，更简洁地解决问题。

#### 场景描述

在示例列表中显示纯文本展开和收起功能，文本与按钮的显示变化。

  1. 文本中只有文字。
  2. 超出2行要能显示"...展开"，展开后显示收起。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a8/v3/QXvQ7HdSRdaGcFh0sEtfxw/zh-cn_image_0000002669681007.png?HW-CC-KV=V1&HW-CC-Date=20260930T174028Z&HW-CC-Expire=86400&HW-CC-Sign=A25EBFED53EE7F82E7B2FB1DA8954C8F97D013A3E1627E55AE19B5C264FEF47A)

#### 实现原理

需要计算出“...”前最后一个文字的索引和显示行高，以确定“收起”、“展开”按钮的位置，其原理如图所示：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b0/v3/mNB2XuYBSIi3Yikz1Ykmwg/zh-cn_image_0000002669560895.png?HW-CC-KV=V1&HW-CC-Date=20260930T174028Z&HW-CC-Expire=86400&HW-CC-Sign=B60C2794426F1C2D2A5A162A416BACCA930B8F5C892FDECE157B9AE77049DDB7)

计算文本高度，结合按钮和“...”的宽度，计算收起文本最后一个文字的坐标，换算为对应内容索引，截断显示相应的内容。

分别添加“收起”和“展开”按钮及交互，进行文本截断内容和全部内容展示的切换。

#### 开发步骤

  1. 计算原始文本高度。

使用[measureTextSize()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-measureutils#func-measuretextsizemeasureoptions)方法来判断总体文字的高度。
         
         func getIsExpanded() {
             let titleSize = getUIContext().getMeasureUtils().measureTextSize(
                 MeasureOptions(
                     textContent: this
                         .textSectionAttribute
                         .title, //The text content is calculated
                     lineHeight: this
                         .textSectionAttribute
                         .lineHeight,
                     constraintWidth: this
                         .textSectionAttribute
                         .constraintWidth, //The text layout width is calculated
                     fontSize: this
                         .textSectionAttribute
                         .fontSize //The text font size is calculated
                 )
             )
             let height = titleSize.height.value.px.value
             if (height <= this
                 .textSectionAttribute
                 .lineHeight
                 .value * 2.0) {
                 this
                     .textModifier
                     .needProcess = false
                 this
                     .textModifier
                     .title = this
                     .textSectionAttribute
                     .title
                 return
             } else {
                 this
                     .textModifier
                     .needProcess = true
             }
             if (this.expanded) {
                 Hilog.debug(0, "TextExpandView", "expanded")
                 collapseText()
             } else {
                 Hilog.debug(0, "TextExpandView", "!expanded")
                 expandText()
             }
         }

  2. 计算文本收起高度（示例代码与步骤3同源）。

使用measureTextSize()方法来判断两行文字的高度，当前为两行文字的高度。
         
         let minLinesTextSize = measureUtils.measureTextSize(
             MeasureOptions(
                 textContent: text,
                 fontSize: textSectionAttribute.fontSize,
                 maxLines: UInt32(textSectionAttribute.maxLines),
                 wordBreak: WordBreak.BreakAll,
                 constraintWidth: textSectionAttribute.constraintWidth
             )
         )
         let minHeight = minLinesTextSize.height

  3. 获取收起文本，显示收起展开按钮。

减少接收文字字符数。当接收文字高度小于指定行数高度时，使文字显示两行收起。
         
         const suffix: String = "... "
         
         public func getShortText(measureUtils: MeasureUtils, textSectionAttribute: TextSectionAttribute, lastSpan: String): String {
             let text = textSectionAttribute.title
             let minLinesTextSize = measureUtils.measureTextSize(
                 MeasureOptions(
                     textContent: text,
                     fontSize: textSectionAttribute.fontSize,
                     maxLines: UInt32(textSectionAttribute.maxLines),
                     wordBreak: WordBreak.BreakAll,
                     constraintWidth: textSectionAttribute.constraintWidth
                 )
             )
             let minHeight = minLinesTextSize.height
             // Use the dichotomy to find strings that are exactly two lines in length
             let textStr: Array<String> = text.split("", -1) //Split the string to avoid special characters and inconsistent sizes
             var leftCursor: Int = 0
             var rightCursor: Int = textStr.size
             var cursor: Int = rightCursor / 2
             var tempTitle = ""
             while (true) {
                 tempTitle = String.join(textStr[0..cursor]) + suffix + lastSpan
                 let currentLinesTextSize = measureUtils.measureTextSize(
                     MeasureOptions(
                         textContent: tempTitle,
                         fontSize: textSectionAttribute.fontSize,
                         wordBreak: WordBreak.BreakAll,
                         constraintWidth: textSectionAttribute.constraintWidth
                     )
                 )
                 let currentLineHeight = currentLinesTextSize.height
                 if (currentLineHeight.value > minHeight.value) {
                     // The current character has exceeded two lines, continue to look to the left
                     rightCursor = cursor
                     cursor = leftCursor + ((cursor - leftCursor) / 2)
                 } else {
                     // The current character is less than two lines, it may be OK, but you still need to look to the right
                     leftCursor = cursor
                     cursor += ((rightCursor - cursor) / 2)
                 }
                 if (abs(rightCursor - leftCursor) <= 1) {
                     // The two pointers basically coincide, which means that they have been found
                     break
                 }
             }
             return String.join(textStr[0..cursor]) + suffix
         }




#### 示例代码

[文本展开与折叠示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260728183056.22398658171552924597452870735306:20261002014028:2800:EF7CEA5DE1012AC8D090E4DEF9817CD0D2D2F847A335FC3577D59F970B6EDAA8.zip?needInitFileName=true)
