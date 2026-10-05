---
name: document/cn/des-guides/layout-0000001111593946
title: 布局
uri: https://developer.huawei.com/consumer/cn/doc/des-guides/layout-0000001111593946
source: portal
---

# 布局

布局不是静态固定的，当显示环境发生变化时，如横竖屏切换、调节字体大小、应用分屏时，我们需要及时调整内容的布局方式以适应变化。了解布局的基础概念后，通过自适应布局和响应式布局就可以让你的内容更好地适配显示环境的变化。

#### 布局基础

#### [h2]8vp网格系统

基于 8vp 为网格的基本单位可以对界面上元素的大小、位置、对齐方式进行更好的规划，构建更有层次感、秩序感，以及多设备上一致的布局效果。一些更小的控件（例如图标）大小也可以对齐 4vp 的网格大小。

#### [h2]栅格系统

栅格系统是一个多设备下通用的辅助定位系统，有 Margin，Gutter，Column 三个属性构成。其中 Column 是根据设备的水平宽度自动匹配的（规则见栅格断点系统）。通过栅格系统进行布局，可以达到多设备下布局的一致性。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231020091609.57130671573092126675266197719111:50001231000000:2800:2BB3F1618937C1C9738C16C19FFA9177F093D4B561818D0D3DE3E08767A4C3FE.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

#### [h2]栅格断点系统

根据设备的水平宽度，栅格系统定义了对应 Column 的数量关系。不同的设备根据自身屏幕水平宽度 在不同的断点范围，系统将自动匹配不同数量的栅格。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231020091610.31007600579604861288090720381357:50001231000000:2800:A5F35C4FD0C134DF7E9702E25BC096DBD81A4767CAF3C711A0834EEE30C3E02F.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

#### 自适应布局

自适应布局是通过设定元素与外部容器的相对关系达到的。当外部容器大小、位置等发生变化时，元素即可以根据相对关系自动变化以适应外部环境的变化。

#### [h2]自适应拉伸

文本的显示宽度不是固定值，而是通过相对参照物的方式来确定其显示宽度。当参照物的宽度发生变化时，文本的显示宽度随之发生自适应拉伸。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231020091610.04850469674770913194444830957109:50001231000000:2800:FDE62BFF277FDA7416D43F0CC8ED003B28BC56B126A384D1CFFBB035178828BC.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

#### [h2]自适应缩放

组件的显示大小是固定比例，通过相对参照物的方式来确定其宽或高。当参照物的大小发生变化时，元素的大小随之发生自适应缩放。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231020091610.07027815289596591242757513188611:50001231000000:2800:37CF5CF26E5F13F47E4A51B9D27658A5006C19D49545DEE37A3B61688A93B1B7.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

#### [h2]自适应延伸

组件的数量不是固定的，而是通过相对参照物的方式来确定其显示数量。当参照物的宽度发生变化时，组件随之发生自适应延伸显示更多数量。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231020091610.37755017936165513326321023308809:50001231000000:2800:EB39ACC8ABF5F26444AE83AD0A8176A3B6AC31B0D54E73C000BC50FFFDE40B71.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

#### 响应式布局

当基本的自适应布局无法满足多终端上屏幕的体验要求时，我们需要针对不同终端的屏幕特点进行响应式的布局。常见的响应式布局样式有：分栏布局、重复布局、挪移布局和缩进布局。

#### [h2]分栏布局

利用屏幕的宽度优势，将有上下级层级的界面同时左右显示。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231020091610.13406536106233144987949201162568:50001231000000:2800:950EB29EF7962BFB0F98E6710A0016EFE3748F137728DA7B8944FA79AD9E28A4.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

当栅格为8column或12column时可以响应分栏布局。

#### [h2]重复布局

利用屏幕的宽度优势，将相同属性的组件横向并列排布。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231020091610.17033809162160464600424827274277:50001231000000:2800:9581704837BB9C17E476E3495D75D3F519DDF19AB109EB09314E56AD361B8768.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

当栅格为8column或12column时可以响应重复布局

#### [h2]挪移布局

利用屏幕的宽度优势，将原先的上下布局切换成左右布局。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231020091610.37360703510228918208848728165534:50001231000000:2800:0A88851D432D85BA917A4D0BF12D901061A04BBF89DFE4822EB4EB97DDC5BC75.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

#### [h2]缩进布局

为了在宽屏上内容显示有更好的效果，在不同宽度的设备上进行不同缩进效果。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231020091611.14527906225963176608455286947828:50001231000000:2800:DB56A4425F81B15FCC3A88B7E7C09BBD0F0012FDFB78D2DB948BAA04B5C792E4.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

当栅格为8column或12column时可以响应缩进布局
