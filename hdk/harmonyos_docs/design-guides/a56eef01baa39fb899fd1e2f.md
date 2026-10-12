---
name: document/cn/design-guides/titlebar-0000001929628982
title: 标题栏
uri: https://developer.huawei.com/consumer/cn/doc/design-guides/titlebar-0000001929628982
---

# 标题栏

标题栏是布局在界面顶部的导航类控件，用于呈现界面名称和操作入口。开发相关描述请参考 [Navigation/Title](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#title) 文档。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b2/v3/3nEMVf2eQ0uiPHsRzwbwQA/zh-cn_image_0000001929652666.jpg?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=6513E943BBE2BE3ABD442CC2A785211360EDFAF863700A1D689D357B2A2DF637 "点击放大")

## 如何使用

**标题栏用于展示当前页面的标题和状态信息。**使用标题栏显示当前界面的名称和操作入口，标题栏的样式会极大影响内容首屏显示的效率，不同类型的界面可以匹配不同的风格，具体可参考下方控件构成相关内容。

**明确当前标题的导航层级，给予用户重要提示。**系统导航的基础逻辑应当明确一级目录的唯一性，非一级页面要有明确返回导航或者关闭操作，防止用户在使用应用的过程中丢失导航路线。

**合理使用右侧可操作区域，适当提供可操作选项。** 放置与当前页面相关的操作按钮，如搜索、分享、设置等，操作按钮应与当前页面内容密切相关，避免提供与应用不相关的操作内容。如果应用的操作项过多，请不要全部展示出来，可以通过展示"更多"图标来提供菜单选项，简化界面复杂度，详情可参考 [menus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-menu) 能力规格。

**标题栏的高度应保持一致，以确保良好的交互体验。**标题栏控件在 HarmonyOS NEXT 上默认单行高度为 56vp，强调型标题栏为 112vp，开发者需要根据自身业务需要选择不同类型的标题栏，可以通过 NavigationTitleMode 来进行配置，其中 Free 样式为动态布局，标题栏会根据手势滑动动态缩小高度，Mini 与 Full 均为固定样式。

**标题栏文本的呈现应简洁明了。**标题的描述应准确反映当前页面的内容和状态，不要用过长的字符串来展示标题信息，标题展示的文本信息应该是当前页面的概述和分类。文本过长不仅影响布局和美观度，也会在阅读体验上产生影响。除此之外，标题文字应使用醒目的字体大小和颜色，与背景形成足够对比，在系统默认风格的标题栏中使用加粗字体来展示其重要性。

## 组件构成

### 一级页标题

标题栏一般由标题和右侧功能图标组成，在一级标题栏下左侧不可以出现返回标题，若在 Mini 样式下默认带上返回图标，需要通过 [hideBackButton](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#hidebackbutton) 隐藏其显示。标题栏的使用通常与系统信号栏的布局相邻，在默认情况下标题栏的背景色会延伸至信号栏区域，通过 [expandSafeArea](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-expand-safe-area#expandsafearea) 接口可以实现安全区的避让。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c2/v3/rjyi2ESFRFK7tn9ZNXhAaw/zh-cn_image_0000001949329218.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=2D55E887DA770F10822BB33392DD94B59344DF5C9F951A5F683F5ABA3DD741C2 "点击放大")

强调型标题栏

主要用于一级界面突出标题区域，在没有特殊要求的情况下，模块的一级界面应该使用强调型标题栏。

支持显示单行标题、双行标题、强调型标题样式。

|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/be/v3/ao2yButYQnOKuWOBee6phQ/zh-cn_image_0000001930085776.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=FA524A6DCFACA4B52B911AE64DE4F53BFEC9F033EB4F5F09EB1B0759E9609379 "点击放大")|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/56/v3/hyO2zkNYQTSpD2nQr90LUg/zh-cn_image_0000001929926376.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=15A99C5A1D074E14F1DDCB1183EC959DBA8286C635CE3F154E06BF5B605F7FA8 "点击放大")|

普通型标题栏

用于不需要突出标题的场景。当界面上方主要区域为图形化展示时，应该使用普通标题栏。

支持单行标题和双行标题两种样式。

|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6d/v3/oKt3xrknR0WqoiB0BbAs4w/zh-cn_image_0000001957085025.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=A2C56C5D33B572EA52253290F3FE9A542E2E3B6A3FB97346C3E39188199010E3 "点击放大")|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/70/v3/6VPl7VfHRSWfba5Jw2mg7Q/zh-cn_image_0000001957165201.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=0BC67E5AA6897ED0AC8E3358F0AEAB094D6287AD572AFE22EFF573890CF84B7B "点击放大")|

抽屉型标题栏

用于展示不同的分类，可以快捷地进行切换、查找。抽屉型在不同尺寸设备上呈现的效果略有差异，手机端为侧边遮罩层，平板端等大屏设备为分栏界面布局。通常效率型、办公类及内容型应用较为常用。抽屉标题栏需要配合 [SideBarContainer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-sidebarcontainer) 结合使用。

|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2c/v3/biouXKs_QHWBEy1wrU0kQw/zh-cn_image_0000001930085780.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=0BAB3F3BB8B8A49142F1B1A37A99F5B3A3D5925B5F9D22CE822BE2BA92EF6455 "点击放大")|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c3/v3/c0Go8LHqRLa9CFqFK4M3iA/zh-cn_image_0000002133457857.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=EC5CA44E11AF336DE1C5DC8BCD4FBE3C8E6568AA10E9D2559813FDFFDC03BAAC "点击放大")|

### 二级页标题

除一级界面、编辑界面和选择界面外，所有其他界面都展示二级页标题。二级标题栏通常使用 [NavDestination](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination) 控件组合使用，NavDestination 是子页面的根容器控件，用于显示 Navigation 的内容区。

|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--|
|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/54/v3/4pANZFMRToS0vj2M519KlQ/zh-cn_image_0000001957085029.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=8592BD79D7690CD89A70218CDE5C1BFB1D7CFB50D9F7A1F19DFDFC2EAF132F6B "点击放大")|  |

编辑界面

当需要对界面内容进行编辑时，使用编辑界面标题栏。详情能力可参考 [EditableTitleBar](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-editabletitlebar) 控件相关能力。

编辑界面标题栏一般使用左侧关闭右侧确认的布局形式，在一些需要大量编辑文本的场景下可以使用返回按钮。

|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3c/v3/K-nf3fM0Tia3wSG4nsRVnA/zh-cn_image_0000001957165205.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=5435338FE7F9D293C3E15E5B8A21BD59EFF926BDBA9C035403892CBFC3742B92 "点击放大")|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/99/v3/CEWJ7TsaQiGmws47SgHaHw/zh-cn_image_0000001930085784.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=A8E7E0133903A95A6583DB32C92F5B8956A5C8FACD85DC8EC6EE0A6A2AC6E450 "点击放大")|

## 视觉规则

### 沉浸光感

组件已提供[沉浸光感](https://developer.huawei.com/consumer/cn/doc/design-guides/immersivelight-0000002612101053)样式，为标题栏组件提供更沉浸的用户界面体验。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6a/v3/9iNXxRNVS3SQknVZFe_Ftw/zh-cn_image_0000002591648659.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=6C15964D0B82AF06A05D1EAF87F6FF2CA08B53EC01A4AE66571C1335E2864DB2 "点击放大")

标题栏中的沉浸光感材质主要应用在可操作的按钮以及与标题栏产生耦合关系组件。可操作按钮：如标题左侧返回按钮，标题右侧更多按钮、搜索按钮、文本按钮等；产生耦合关系组件：指在标题栏内存在的其他组件类型，如标题栏下方搜索框、分段按钮。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/eb/v3/DQ_f0m6iQ2uA8QJUvSBVbg/zh-cn_image_0000002591728685.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=867CC021EE04276D092E29B519F8DADA8B1A09154049E8C0B7EAEC47AE1DA0FD "点击放大")

适配沉浸光感效果通常需要结合渐变模糊增加可读性。渐变模糊视效通过柔和的渐变曲线实现内容层与标题区的分离，该处理方式既保障了标题栏在复杂背景中的可读性，也维持了界面各层级之间的空间连续性。用户首眼所见的不再是相互独立的控件与内容区块，而是一个具有纵深关系、层级分明的整体空间。渐变模糊视效中包含了颜色属性，可通过配置颜色实现不同页面背景色下的协调一致。

渐变模糊层较标题栏最底边高 32 vp（跟手隐藏情况下相同），渐变颜色需与页面背景色保持一致。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/88/v3/dIsID5uqTuCsNqZ34FqnCg/zh-cn_image_0000002591728621.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=89F5ADD9A6798D84C4E154848450A3B7886B2919568B43B29994C8D03CE879E3 "点击放大")

为了进一步保障标题内容可读性，建议在内容复杂、色彩丰富的页面使用动态反色能力。通常标题栏中的颜色属性由浅色模式和深色模式两种色彩配置方案，动态反色是指在标题栏下方内容与标题栏重叠情况下出现可读性问题时，标题栏中的容器材质、图标、文本等内容颜色在深浅色模式两种色彩方案中进行动态切换，以提高复杂场景中标题栏内容的可读性。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/43/v3/sA_v8xBwSuaCaJUWE5XF5Q/zh-cn_image_0000002561248890.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=0F609A74EE5E70E33A7109E33B8077D5A43B7C34A15CE3CED97A644534DBB7D9 "点击放大")

**光感交互**

光感交互是手指触控位置与视觉效果相结合，模拟真实物理界面中触摸可发光事物的视觉反馈。当用户与标题栏中的按钮产生交互时，指尖位置被定义为动态光源，向周围材质表面投射光晕，同时照亮容器边缘，光照强度随距离衰减。这一交互反馈使操作行为本身成为界面光学环境的变化源，用户通过视觉即可感知交互的进程与状态。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d0/v3/SziALykrSZaY0iTjp19s3g/zh-cn_image_0000002561248878.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=F57AEC6A0D7A692B45679C23488E9BC747317FFF08C4ED53EDB0CD6C86A74F63 "点击放大")

### 模糊材质

标题栏可以通过模糊材质实现更高级的视觉效果，HDS 标题栏控件默认背板带有模糊材质。同时，该控件提供了两种模糊类型。通用模糊：组件对标题栏的背景进行均匀的模糊处理，模糊强度一致，边界清晰，用于强调控件与内容的层级分隔；渐变模糊：模糊效果在空间维度上呈现渐强/渐弱的变化，模糊边界柔和，用于增强页面沉浸感。HDS 标题栏控件开发相关描述请参阅 [HDS Navigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdsnavigation) 文档。

**直接模糊**

在标题栏中，通用模糊作为独立视觉层级存在，与内容层形成悬浮空间关系，适用于页面内容与标题栏产生交叠的场景。

标题栏的通用模糊默认带有提亮压暗属性，能够激发色彩活力，提高背板通透度。同时标题栏支持添加自定义组件，如添加自定义内容，模糊背板会随着标题栏高度变化而变化，分割线始终位于模糊背板下边缘。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2c/v3/Yb-kOq1ARACCPpH4NavRXA/zh-cn_image_0000002411739096.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=B621C445FEEB2202383DE5F52D8537A5B91AE0FB39A6A133FEF87F1FC5E5D000 "点击放大")

为提高内容边界可识别性，避免视觉认知障碍问题，默认情况下，模糊背板下边缘带有一条 1 px 的分割线。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/29/v3/ZZtr-nQuRIyWFaW_YIwzvQ/zh-cn_image_0000002411898952.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=4D7CB8BE4A4C821F8C2EE26045BA1A6B118BC81DDEC2EC5BF45F1FEAC85535B4 "点击放大")

半模态标题栏在满足内容与标题区产生重叠关系时，采用通用模糊类型，提升半模态页面质感。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/46/v3/0E1ERU0OQFax5CG4NJjmbw/zh-cn_image_0000002445418133.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=781986A7531307A9D004EB67184B70CEBB34C7764D0CC072DCBDCD2D8AE180F8 "点击放大")

**渐变模糊**

渐变模糊与页面内容的融合度更高，通过弱化视觉边界，以延展页面空间感。

渐变的颜色蒙层支持自定义修改颜色，在不同场景下，可通过匹配背景颜色增强页面沉浸感。

### 跟手与反馈

直接模糊和渐变模糊类型都具备两种模糊跟手生效的方式：直接生效和过渡生效。

**直接生效**

滑动内容进入/离开标题栏区域过程中，模糊背板和分割线透明渐变出现/消失。此方式适用于非沉浸式场景。

当页面内容进入/离开标题栏区域时，默认触发模糊 & 分割线渐变显示/隐藏，增强触顶操作的心理暗示。

**过渡生效**

滑动前后标题栏内容发生颜色/状态变化，滑动过程中，线性跟手变化。此方式仅适用于沉浸式到非沉浸式相互切换的场景。

**堆叠与模糊材质**

使用ark UI的标题栏组件，除了通用的布局规格以外，也提供了可堆叠样式，开发者可以通过 [BarStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#barstyle12枚举说明) 配置其属性为 STACK 来改变标题栏的布局层级。使用了堆叠样式后，界面中的内容便可以穿透到组件下方。在 [NavigationTitleOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#navigationtitleoptions11) 中将标题栏背景色设置为透明度，同时使用 backgroundBlurStyle 属性配置其[模糊样式](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-background#blurstyle9)的枚举，结合堆叠样式和模糊属性实现标题栏的整体模糊效果。

|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/77/v3/XrLSH1TNTwC5Wv8ss5MtfA/zh-cn_image_0000002445498217.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=CE4A2190C73C5B28F62D5F3E7AF2904B7B3BAB3B6A7E758DB454A129377CC180 "点击放大")|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5b/v3/eeooPwauQBC0Z3LeOmYj6w/zh-cn_image_0000002411739100.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=C902AD0EB7B71E3ECC30D5468F5B099DE55C0A858A469752A3E6DDDC9E7BFD67 "点击放大")|
|普通深浅模式下，模糊按照整个控件区域呈现，可以扩展至信号栏区域。 模糊生效时，在标题栏底部会有一条分割线投影，用于明确区分布局边界。|当模糊效果不生效时，背景色与界面融为一体。需确保模糊材质内的填充色与界面背景色一致。|

## 设备差异

### 手机设备

**横屏**

标题栏布局与竖屏一致，右侧图标为竖屏下 Toolbar + Appbar 上所有功能图标的集合。

手机端除 Launcher 模块，信号栏默认不显示，标题栏紧贴屏幕开始显示，高度为 56 vp。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d2/v3/tYQi_2kjRn6hMa0uo6a6aA/zh-cn_image_0000002411898956.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=6B76C18D740A8E11D00DA0DFD9FC0E643793B75D370831BEF1396393D5D572F3 "点击放大")

**分栏**

标题栏在其可用区域内，按照竖屏规则布局。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/35/v3/DJIOzL-ESgOZ0aC2mlWJYg/zh-cn_image_0000002445418137.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=DDED5575D4EBE85853D747CBBA16A1093D2AD20D8BFFCB78765ED1A713427A23 "点击放大")

### 平板设备

**平板竖屏布局**

规则与手机一致，在标题栏使用上没有特殊规则，适配主要以拉伸适配为主，充满整个容器宽度。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e/v3/0VCrcHGpQhaVSiKGc2uWuQ/zh-cn_image_0000002445498221.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=590FDC0EC6C2B698C5BB013F38C8A7903B3827C37E7FA9572FF72D60F554E95B "点击放大")

**平板横屏分栏布局**

在一些效率型应用中，开发者为了呈现更多内容，需要对界面布局进行分栏处理。分栏布局可以通过 [NavigationMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#navigationmode9枚举说明) 接口能力，并配置 Split 样式属性。开发者也可以使用 Auto 属性样式来动态布局分栏规格，当窗口宽度大于等于 600vp 时，采用Split模式显示；窗口宽度小于600vp时，采用Stack模式显示。在 HarmonyOS NEXT 版本中定义了跨设备的断点式布局规格，详情可以阅读视觉规范中布局章节了解详情。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1a/v3/LIPsrJaKTAayXYFqlxvYog/zh-cn_image_0000002411739104.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=6042D1038A216C83EC27952F8961834369A2D7AC07EE0D14CE58ADD491B74BF6 "点击放大")

### 电脑设备

在电脑场景下，标题栏使用更小的字体提高界面信息密度，同时去掉了圆形底板。

**强调型标题栏**

主要用于一级界面突出标题区域

支持显示单行标题、双行标题

|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/16/v3/rxcD7dz3RCi6xco6glWMyw/zh-cn_image_0000001929926384.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=4DC01B35B64FF5DE1566C50067B4FF73E07545FE78A5D28A089712CF3C9E7663 "点击放大") 单行标题|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8a/v3/fsbRaBx-TSmnF9zz1TB2fw/zh-cn_image_0000001957085033.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=79DD76669E8040C10710AA90613D0220190D0F8F54C911D23ADB50D239DE14B7 "点击放大") 双行标题|

**普通型标题栏**

用于不需要突出标题的场景。当界面上方主要区域为图形化展示时，应该使用普通标题栏。

支持单行标题和双行标题两种样式。

|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/05/v3/W6SSuWDLQdi6jhSW0pSm7w/zh-cn_image_0000001957165209.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=39AEFC345A59640C5A18522D8EA165E952D4F4B80CA1797D707F5C04F4E8B647 "点击放大") 单行标题|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/af/v3/vMPaPTJeT_e8V1_-PoFX1A/zh-cn_image_0000001930085788.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=1A96921A8C2BA9C932E824F9302447C11CB8E6FEEDF4B8FCB087070D30B5BE45 "点击放大") 双行标题|

|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|**抽屉型标题栏** 用于展示不同的分类，可以快捷地进行切换、查找。抽屉型在不同尺寸设备上呈现的效果略有差异，手机端为侧边遮罩层，平板端等大屏设备为分栏界面布局。通常效率型、办公类及内容型应用较为常用。|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/74/v3/R6q6HhL0RTm4UJfuXKumrA/zh-cn_image_0000001929926388.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=4A74D7FF367537359DD2041FC040820B7B6762115944110D14C330DB70454EE9 "点击放大")|
|**二级页标题** 除一级界面、编辑界面和选择界面外，所有其他界面都展示二级页标题。|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/53/v3/ZDoO_9zRT16adJvL5hJOVQ/zh-cn_image_0000001957085037.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=E71C77DC37960AB99437C829CA12BB642C4A995CDB054AB42C52D3B9A3B32BEF "点击放大")|
|**编辑界面** 当需要对界面内容进行编辑时，使用编辑界面标题栏。|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c5/v3/ZwuZ3LgATuCZMue7vsMadQ/zh-cn_image_0000001957165213.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=04161C239BFC7FD2ADBA3678B7E43C3147957197353C80D9673E0FA4FC2C980E "点击放大")|

**普通标题栏：左侧元素**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ae/v3/PfA_LumZR5m108leSiFDyA/zh-cn_image_0000002411898960.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=04CA2E4599DC20C0EF3BD0A2B9A4EB13C4DFAE427C3D41127412DF52BFDC5375 "点击放大")

**普通标题栏：右侧元素**

最多同时支持 3 个图标 (含菜单)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f9/v3/AO3SPTJ3RSC0dCxS_slTMg/zh-cn_image_0000002445418141.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=9B355CF4EDEBE040698D6F1F564935DCEC79D4D9E22EBB2914DB4048C7E81676 "点击放大")

**普通标题栏：中间元素**

支持放置工具栏、分段按钮等控件

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/62/v3/u6R1-9G3SraLlEogHWrWFA/zh-cn_image_0000002445498225.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=EAC12C465878727C05EDC286034DDAA3536424C868996781BBDA414D6FE3E065 "点击放大")

**强调型标题栏**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/63/v3/e0nRpetAQDKvFj9R99DVBg/zh-cn_image_0000002411739112.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=86F95BDA19223C78F21CD4A7BFE14688C59851C4FE62F4EE994945737EDC6C6D "点击放大")

### 穿戴设备

标题栏用于指示当前页面的位置。在方表上，标题栏存在如一/二级标题栏的区分。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/76/v3/RYxTXZqFSli4WioBP47Mng/zh-cn_image_0000002313556010.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=D305438350F830486299370115A296AC8E3F4F1C1201C3DEC7C0E86BEC885470 "点击放大")

**圆形表**

**单行标题**：文字19vp，可换2行（特殊场景可不换行或换更多行），放不下则缩小字号至 18vp、15vp，还放不下则用"..."截断。

**双行标题：**文字19vp，不支持换行，文本超长则先缩小字号至18vp、15vp，最后考虑最大区域内跑马灯显示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f6/v3/xYnxF3ujQT6V0s4nbdZYOw/zh-cn_image_0000002352772937.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=9929056C17B52BA9C7A0D816621E8C22AF2A85D4C7691FA05A32461ED4191DFF "点击放大")

**方形表**

**通用型标题：**

一级标题栏： 适用于界面内容宽松的界面，左右侧可增加快捷入口/按钮。文字19vp，可换3行（特殊场景可不换行或换更多行），放不下则缩小字号至 16vp、15vp，还放不下则用跑马灯。

二级标题栏：除一级界面外，所有其他界面都展示二级页标题，右侧可增加快捷入口/按钮。文字19vp，可换3行（有辅助文本可换3行），放不下则缩小字号至 15vp还放不下则用跑马灯。

**紧凑型标题：**

紧凑型时效标题栏：适用于具有时效性的界面，如当前生理数据情况。文字15vp，不可换行，放不下则缩小字号至 13vp，还放不下跑马灯显示。

紧凑无时效标题栏：适用于界面内容紧凑且左右侧无元素的界面。文字19vp，不可换行，放不下则缩小字号至 15vp，还放不下跑马灯显示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/65/v3/qMH4EQjzQbKd04K9Jsy6BA/zh-cn_image_0000002318851662.png?HW-CC-KV=V1&HW-CC-Date=20261008T145515Z&HW-CC-Expire=31536000000&HW-CC-Sign=FD6A9BCAA90C573F48AE679E3233F2FA2D12B889B363424693F6331407572FE5 "点击放大")

## 开发文档

[Navigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)

[HdsNavigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdsnavigation)

[NavDestination](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination)

[HdsNavDestination](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdsnavdestination)

[SideBarContainer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-sidebarcontainer)

[HdsSideBar](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdssidebar)

[EditableTitleBar](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-editabletitlebar)

