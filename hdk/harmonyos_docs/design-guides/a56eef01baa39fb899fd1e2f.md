---
name: document/cn/design-guides/titlebar-0000001929628982
title: 标题栏
uri: https://developer.huawei.com/consumer/cn/doc/design-guides/titlebar-0000001929628982
---

# 标题栏

标题栏是布局在界面顶部的导航类控件，用于呈现界面名称和操作入口。开发相关描述请参考 [Navigation/Title](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#title) 文档。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b2/v3/3nEMVf2eQ0uiPHsRzwbwQA/zh-cn_image_0000001929652666.jpg?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=BFC9D447E575444C6DC4F8C10A66CC1E91C7F2640BED85EC8FEE9487F7342BA1 "点击放大")

## 如何使用

**标题栏用于展示当前页面的标题和状态信息。**使用标题栏显示当前界面的名称和操作入口，标题栏的样式会极大影响内容首屏显示的效率，不同类型的界面可以匹配不同的风格，具体可参考下方控件构成相关内容。

**明确当前标题的导航层级，给予用户重要提示。**系统导航的基础逻辑应当明确一级目录的唯一性，非一级页面要有明确返回导航或者关闭操作，防止用户在使用应用的过程中丢失导航路线。

**合理使用右侧可操作区域，适当提供可操作选项。** 放置与当前页面相关的操作按钮，如搜索、分享、设置等，操作按钮应与当前页面内容密切相关，避免提供与应用不相关的操作内容。如果应用的操作项过多，请不要全部展示出来，可以通过展示"更多"图标来提供菜单选项，简化界面复杂度，详情可参考 [menus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-menu) 能力规格。

**标题栏的高度应保持一致，以确保良好的交互体验。**标题栏控件在 HarmonyOS NEXT 上默认单行高度为 56vp，强调型标题栏为 112vp，开发者需要根据自身业务需要选择不同类型的标题栏，可以通过 NavigationTitleMode 来进行配置，其中 Free 样式为动态布局，标题栏会根据手势滑动动态缩小高度，Mini 与 Full 均为固定样式。

**标题栏文本的呈现应简洁明了。**标题的描述应准确反映当前页面的内容和状态，不要用过长的字符串来展示标题信息，标题展示的文本信息应该是当前页面的概述和分类。文本过长不仅影响布局和美观度，也会在阅读体验上产生影响。除此之外，标题文字应使用醒目的字体大小和颜色，与背景形成足够对比，在系统默认风格的标题栏中使用加粗字体来展示其重要性。

## 组件构成

### 一级页标题

标题栏一般由标题和右侧功能图标组成，在一级标题栏下左侧不可以出现返回标题，若在 Mini 样式下默认带上返回图标，需要通过 [hideBackButton](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#hidebackbutton) 隐藏其显示。标题栏的使用通常与系统信号栏的布局相邻，在默认情况下标题栏的背景色会延伸至信号栏区域，通过 [expandSafeArea](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-expand-safe-area#expandsafearea) 接口可以实现安全区的避让。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c2/v3/rjyi2ESFRFK7tn9ZNXhAaw/zh-cn_image_0000001949329218.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=6AC7BE58E896425F64C573562DE8B9C278C12B3E2EC81915B41124774F5AD2FA "点击放大")

强调型标题栏

主要用于一级界面突出标题区域，在没有特殊要求的情况下，模块的一级界面应该使用强调型标题栏。

支持显示单行标题、双行标题、强调型标题样式。

|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/be/v3/ao2yButYQnOKuWOBee6phQ/zh-cn_image_0000001930085776.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=2C62FE25DBE78C3A47ABF8BC16CC0FF4B4F80A08665456424DA0D8E469D5B7C0 "点击放大")|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/56/v3/hyO2zkNYQTSpD2nQr90LUg/zh-cn_image_0000001929926376.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=F69B9878F485D35C5AF854E4F105AF898767D7F8B7DACC4B2202B10E4FCBA1BF "点击放大")|

普通型标题栏

用于不需要突出标题的场景。当界面上方主要区域为图形化展示时，应该使用普通标题栏。

支持单行标题和双行标题两种样式。

|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6d/v3/oKt3xrknR0WqoiB0BbAs4w/zh-cn_image_0000001957085025.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=38FD43598F196AC3F349D4AEDE84444882A5F6C89F7CAB62D5D7CF19CDB7F214 "点击放大")|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/70/v3/6VPl7VfHRSWfba5Jw2mg7Q/zh-cn_image_0000001957165201.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=4453A15B6A73DE0CE033A085088F7B40FF5B34AF1DC7DD0BD067997EDC0525FD "点击放大")|

抽屉型标题栏

用于展示不同的分类，可以快捷地进行切换、查找。抽屉型在不同尺寸设备上呈现的效果略有差异，手机端为侧边遮罩层，平板端等大屏设备为分栏界面布局。通常效率型、办公类及内容型应用较为常用。抽屉标题栏需要配合 [SideBarContainer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-sidebarcontainer) 结合使用。

|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2c/v3/biouXKs_QHWBEy1wrU0kQw/zh-cn_image_0000001930085780.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=5987C0983AC6A573DA0CCD17933C65872C31A663C21E1FAFDA3A1E7E599658E8 "点击放大")|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c3/v3/c0Go8LHqRLa9CFqFK4M3iA/zh-cn_image_0000002133457857.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=4309C2955A10F300A880352EE9BE2CB5B94EB0B17B617BCD3E1488C8E9D120EA "点击放大")|

### 二级页标题

除一级界面、编辑界面和选择界面外，所有其他界面都展示二级页标题。二级标题栏通常使用 [NavDestination](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination) 控件组合使用，NavDestination 是子页面的根容器控件，用于显示 Navigation 的内容区。

|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--|
|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/54/v3/4pANZFMRToS0vj2M519KlQ/zh-cn_image_0000001957085029.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=2F045450F7BE5EC08E3FE0FCE3878FD581E3B4BCD84289FDE682899130B7258B "点击放大")|  |

编辑界面

当需要对界面内容进行编辑时，使用编辑界面标题栏。详情能力可参考 [EditableTitleBar](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-editabletitlebar) 控件相关能力。

编辑界面标题栏一般使用左侧关闭右侧确认的布局形式，在一些需要大量编辑文本的场景下可以使用返回按钮。

|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3c/v3/K-nf3fM0Tia3wSG4nsRVnA/zh-cn_image_0000001957165205.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=223C1D3825F9E50C579F6C0B93D81B2C2FCA9C5AD87738BE2334E019FC511DF0 "点击放大")|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/99/v3/CEWJ7TsaQiGmws47SgHaHw/zh-cn_image_0000001930085784.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=E79A2BA3E37FA908B3B5650490294777F136BBC00A26B3451CFA1A576B82982E "点击放大")|

## 视觉规则

### 沉浸光感

组件已提供[沉浸光感](https://developer.huawei.com/consumer/cn/doc/design-guides/immersivelight-0000002612101053)样式，为标题栏组件提供更沉浸的用户界面体验。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6a/v3/9iNXxRNVS3SQknVZFe_Ftw/zh-cn_image_0000002591648659.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=AB0D3535B92F84584E8080D75285811B2CC8B4C1FAE871A2E26A1E32620563A6 "点击放大")

标题栏中的沉浸光感材质主要应用在可操作的按钮以及与标题栏产生耦合关系组件。可操作按钮：如标题左侧返回按钮，标题右侧更多按钮、搜索按钮、文本按钮等；产生耦合关系组件：指在标题栏内存在的其他组件类型，如标题栏下方搜索框、分段按钮。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/eb/v3/DQ_f0m6iQ2uA8QJUvSBVbg/zh-cn_image_0000002591728685.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=FC5B61DFE79E319BF7BEDD97DC6D314076AC716034E887A6BDD407DFA07B7D59 "点击放大")

适配沉浸光感效果通常需要结合渐变模糊增加可读性。渐变模糊视效通过柔和的渐变曲线实现内容层与标题区的分离，该处理方式既保障了标题栏在复杂背景中的可读性，也维持了界面各层级之间的空间连续性。用户首眼所见的不再是相互独立的控件与内容区块，而是一个具有纵深关系、层级分明的整体空间。渐变模糊视效中包含了颜色属性，可通过配置颜色实现不同页面背景色下的协调一致。

渐变模糊层较标题栏最底边高 32 vp（跟手隐藏情况下相同），渐变颜色需与页面背景色保持一致。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/88/v3/dIsID5uqTuCsNqZ34FqnCg/zh-cn_image_0000002591728621.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=FFBCD3D0A7BF4AD1E5E6BD960AD36DA69DB10D5DE56B0EAA7E9489A4DCFD74F7 "点击放大")

为了进一步保障标题内容可读性，建议在内容复杂、色彩丰富的页面使用动态反色能力。通常标题栏中的颜色属性由浅色模式和深色模式两种色彩配置方案，动态反色是指在标题栏下方内容与标题栏重叠情况下出现可读性问题时，标题栏中的容器材质、图标、文本等内容颜色在深浅色模式两种色彩方案中进行动态切换，以提高复杂场景中标题栏内容的可读性。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/43/v3/sA_v8xBwSuaCaJUWE5XF5Q/zh-cn_image_0000002561248890.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=305C8977D2A8DA9BEBDE4450587E6F5DEFC2E6135502D4DF024AA5E5937DDEB0 "点击放大")

**光感交互**

光感交互是手指触控位置与视觉效果相结合，模拟真实物理界面中触摸可发光事物的视觉反馈。当用户与标题栏中的按钮产生交互时，指尖位置被定义为动态光源，向周围材质表面投射光晕，同时照亮容器边缘，光照强度随距离衰减。这一交互反馈使操作行为本身成为界面光学环境的变化源，用户通过视觉即可感知交互的进程与状态。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d0/v3/SziALykrSZaY0iTjp19s3g/zh-cn_image_0000002561248878.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=79C546C0114AFE9D9594386B48BF18214D1365ED9C4A7C90B6D2E90898268CAE "点击放大")

### 模糊材质

标题栏可以通过模糊材质实现更高级的视觉效果，HDS 标题栏控件默认背板带有模糊材质。同时，该控件提供了两种模糊类型。通用模糊：组件对标题栏的背景进行均匀的模糊处理，模糊强度一致，边界清晰，用于强调控件与内容的层级分隔；渐变模糊：模糊效果在空间维度上呈现渐强/渐弱的变化，模糊边界柔和，用于增强页面沉浸感。HDS 标题栏控件开发相关描述请参阅 [HDS Navigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdsnavigation) 文档。

**直接模糊**

在标题栏中，通用模糊作为独立视觉层级存在，与内容层形成悬浮空间关系，适用于页面内容与标题栏产生交叠的场景。

标题栏的通用模糊默认带有提亮压暗属性，能够激发色彩活力，提高背板通透度。同时标题栏支持添加自定义组件，如添加自定义内容，模糊背板会随着标题栏高度变化而变化，分割线始终位于模糊背板下边缘。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2c/v3/Yb-kOq1ARACCPpH4NavRXA/zh-cn_image_0000002411739096.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=396383909FD03CC9F6ACC68CB56FACB74A84819AB7D442C311A510F81C1300BB "点击放大")

为提高内容边界可识别性，避免视觉认知障碍问题，默认情况下，模糊背板下边缘带有一条 1 px 的分割线。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/29/v3/ZZtr-nQuRIyWFaW_YIwzvQ/zh-cn_image_0000002411898952.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=8DDF7775DCB20639FAA9F5BD9712D5D110F735A7AA58013598E8683A82DE3803 "点击放大")

半模态标题栏在满足内容与标题区产生重叠关系时，采用通用模糊类型，提升半模态页面质感。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/46/v3/0E1ERU0OQFax5CG4NJjmbw/zh-cn_image_0000002445418133.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=0293E7BED0C4767CB6AD9A6E9B6663822BAC787B3CBF5AB478488094E6360406 "点击放大")

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
|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/77/v3/XrLSH1TNTwC5Wv8ss5MtfA/zh-cn_image_0000002445498217.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=165D1C5DAB2CF72A4B921FBE70D384A16CA50B0C66B7C9E1D5BB0EAEDC887910 "点击放大")|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5b/v3/eeooPwauQBC0Z3LeOmYj6w/zh-cn_image_0000002411739100.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=152C3233C0FB45FBBFD4C9FA21CDEDC8990AF6A7CFAE9171E10721838C507216 "点击放大")|
|普通深浅模式下，模糊按照整个控件区域呈现，可以扩展至信号栏区域。 模糊生效时，在标题栏底部会有一条分割线投影，用于明确区分布局边界。|当模糊效果不生效时，背景色与界面融为一体。需确保模糊材质内的填充色与界面背景色一致。|

## 设备差异

### 手机设备

**横屏**

标题栏布局与竖屏一致，右侧图标为竖屏下 Toolbar + Appbar 上所有功能图标的集合。

手机端除 Launcher 模块，信号栏默认不显示，标题栏紧贴屏幕开始显示，高度为 56 vp。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d2/v3/tYQi_2kjRn6hMa0uo6a6aA/zh-cn_image_0000002411898956.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=A6D40995D597FC3E6D1FD22A686ECA6DDDEDBA97ED175CB1A4B01B98D0A29539 "点击放大")

**分栏**

标题栏在其可用区域内，按照竖屏规则布局。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/35/v3/DJIOzL-ESgOZ0aC2mlWJYg/zh-cn_image_0000002445418137.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=9EA38003FF24A1B89805F383AF9E4FAFAA339FEB5630ACA61EF84A3C6CB59C26 "点击放大")

### 平板设备

**平板竖屏布局**

规则与手机一致，在标题栏使用上没有特殊规则，适配主要以拉伸适配为主，充满整个容器宽度。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e/v3/0VCrcHGpQhaVSiKGc2uWuQ/zh-cn_image_0000002445498221.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=C65E969C508C8523B5A3748250FB1DB513AE61781EF3F78EC63E0801D74EE6E2 "点击放大")

**平板横屏分栏布局**

在一些效率型应用中，开发者为了呈现更多内容，需要对界面布局进行分栏处理。分栏布局可以通过 [NavigationMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#navigationmode9枚举说明) 接口能力，并配置 Split 样式属性。开发者也可以使用 Auto 属性样式来动态布局分栏规格，当窗口宽度大于等于 600vp 时，采用Split模式显示；窗口宽度小于600vp时，采用Stack模式显示。在 HarmonyOS NEXT 版本中定义了跨设备的断点式布局规格，详情可以阅读视觉规范中布局章节了解详情。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1a/v3/LIPsrJaKTAayXYFqlxvYog/zh-cn_image_0000002411739104.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=B53E94523D6E83716BE5B2777352E545D2751AFAF7F657AB54D9CEAF971DBCB1 "点击放大")

### 电脑设备

在电脑场景下，标题栏使用更小的字体提高界面信息密度，同时去掉了圆形底板。

**强调型标题栏**

主要用于一级界面突出标题区域

支持显示单行标题、双行标题

|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/16/v3/rxcD7dz3RCi6xco6glWMyw/zh-cn_image_0000001929926384.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=A68E96B5B0E8801195ECDB968D6A815893530D434FCA898238D47DA53B565E7F "点击放大") 单行标题|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8a/v3/fsbRaBx-TSmnF9zz1TB2fw/zh-cn_image_0000001957085033.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=24AD70543F09E9A960CE5926391AB6C3C81119B90EF1278168BF1E2CF5671D19 "点击放大") 双行标题|

**普通型标题栏**

用于不需要突出标题的场景。当界面上方主要区域为图形化展示时，应该使用普通标题栏。

支持单行标题和双行标题两种样式。

|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/05/v3/W6SSuWDLQdi6jhSW0pSm7w/zh-cn_image_0000001957165209.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=6B897D2A28DDA082A3D68CD9AA2A1A1915D3ADF48DF35077589AA736D75F51C9 "点击放大") 单行标题|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/af/v3/vMPaPTJeT_e8V1_-PoFX1A/zh-cn_image_0000001930085788.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=FCACB28B3E4CBD7394C60BAB8DF428B2D554294284D34AE099B1FC5582F09765 "点击放大") 双行标题|

|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|**抽屉型标题栏** 用于展示不同的分类，可以快捷地进行切换、查找。抽屉型在不同尺寸设备上呈现的效果略有差异，手机端为侧边遮罩层，平板端等大屏设备为分栏界面布局。通常效率型、办公类及内容型应用较为常用。|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/74/v3/R6q6HhL0RTm4UJfuXKumrA/zh-cn_image_0000001929926388.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=22A65853036BBDFCB364E39B46AA158C273E8439B0199F1B9AEB0B5CAF9A4001 "点击放大")|
|**二级页标题** 除一级界面、编辑界面和选择界面外，所有其他界面都展示二级页标题。|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/53/v3/ZDoO_9zRT16adJvL5hJOVQ/zh-cn_image_0000001957085037.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=F6183754A0BD618E396775454205E13835591A50170A80D87FF6BEBE72804D19 "点击放大")|
|**编辑界面** 当需要对界面内容进行编辑时，使用编辑界面标题栏。|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c5/v3/ZwuZ3LgATuCZMue7vsMadQ/zh-cn_image_0000001957165213.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=BE7A6C2EABD10E57C4329F90945BE36812304C3A6899AC0E866369D8D2916537 "点击放大")|

**普通标题栏：左侧元素**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ae/v3/PfA_LumZR5m108leSiFDyA/zh-cn_image_0000002411898960.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=DD21F4F9DE6A75E7A94B1CDF104CECD3F0683B432A2620B6E262E8EFFC945875 "点击放大")

**普通标题栏：右侧元素**

最多同时支持 3 个图标 (含菜单)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f9/v3/AO3SPTJ3RSC0dCxS_slTMg/zh-cn_image_0000002445418141.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=63A0822049DB28C028D3E6ABF0746F43678AD9E0F469882CC8E639A811513FD8 "点击放大")

**普通标题栏：中间元素**

支持放置工具栏、分段按钮等控件

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/62/v3/u6R1-9G3SraLlEogHWrWFA/zh-cn_image_0000002445498225.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=0680AFFEC5B0139A1B9B697861448E2EB644D2B50021428A174F648D1A10BEDD "点击放大")

**强调型标题栏**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/63/v3/e0nRpetAQDKvFj9R99DVBg/zh-cn_image_0000002411739112.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=CFFD21D1D7172E4F8CA6989B5444B8B31155C323D41063F0670E470814A563CA "点击放大")

### 穿戴设备

标题栏用于指示当前页面的位置。在方表上，标题栏存在如一/二级标题栏的区分。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/76/v3/RYxTXZqFSli4WioBP47Mng/zh-cn_image_0000002313556010.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=549DF98C49A8A5B3059418301D9CB8F1DD4B06492CDB2319DF3F4EF8C9D3C36F "点击放大")

**圆形表**

**单行标题**：文字19vp，可换2行（特殊场景可不换行或换更多行），放不下则缩小字号至 18vp、15vp，还放不下则用"..."截断。

**双行标题：**文字19vp，不支持换行，文本超长则先缩小字号至18vp、15vp，最后考虑最大区域内跑马灯显示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f6/v3/xYnxF3ujQT6V0s4nbdZYOw/zh-cn_image_0000002352772937.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=46F72385B9BC6870AB2AA8ECCC8B159AD3076E1724E27535BB772DC3F153BB93 "点击放大")

**方形表**

**通用型标题：**

一级标题栏： 适用于界面内容宽松的界面，左右侧可增加快捷入口/按钮。文字19vp，可换3行（特殊场景可不换行或换更多行），放不下则缩小字号至 16vp、15vp，还放不下则用跑马灯。

二级标题栏：除一级界面外，所有其他界面都展示二级页标题，右侧可增加快捷入口/按钮。文字19vp，可换3行（有辅助文本可换3行），放不下则缩小字号至 15vp还放不下则用跑马灯。

**紧凑型标题：**

紧凑型时效标题栏：适用于具有时效性的界面，如当前生理数据情况。文字15vp，不可换行，放不下则缩小字号至 13vp，还放不下跑马灯显示。

紧凑无时效标题栏：适用于界面内容紧凑且左右侧无元素的界面。文字19vp，不可换行，放不下则缩小字号至 15vp，还放不下跑马灯显示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/65/v3/qMH4EQjzQbKd04K9Jsy6BA/zh-cn_image_0000002318851662.png?HW-CC-KV=V1&HW-CC-Date=20260920T033430Z&HW-CC-Expire=31536000000&HW-CC-Sign=51DDADC4D08A21D67EF7C4282497D03B74C03375BAC9567A12B89B7CE2A14709 "点击放大")

## 开发文档

[Navigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)

[HdsNavigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdsnavigation)

[NavDestination](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination)

[HdsNavDestination](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdsnavdestination)

[SideBarContainer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-sidebarcontainer)

[HdsSideBar](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-hdssidebar)

[EditableTitleBar](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-editabletitlebar)

