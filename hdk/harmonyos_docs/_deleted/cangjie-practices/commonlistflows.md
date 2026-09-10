---
name: cangjie-practices/commonlistflows
title: 常见列表流
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-practices/commonlistflows
nodePath: 实践 / 常见列表流
---

# 常见列表流

#### 概述

列表流是采用以“行”为单位进行内容排列的布局形式，每“行”列表项通过文本、图片等不同形式的组合，高效地显示结构化的信息，当列表项内容超过屏幕大小时，可以提供滚动功能。列表流具有排版整齐、重点突出、对比方便、浏览速度快等特点。同时列表流也具有非常广泛的使用场景，例如：应用首页、通讯录、音乐列表、购物清单等。

列表流主要使用[List](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-list)组件，按垂直方向线性排列子组件[ListItemGroup](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-listgroup)或[ListItem](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-listitem)，混合渲染任意数量的图文视图，从而构建列表内容。在实际场景中，一般会根据需要，结合其它基础组件，形成相对复杂的交互功能。

本文将介绍以下列表流场景的实现：

  * 多类型列表项场景
  * Tab吸顶场景
  * 分组吸顶场景
  * 二级联动场景



#### 多类型列表项场景

#### [h2]场景描述

List组件作为整个首页长列表的容器，通过ListItem对不同模块进行视图界面定制，常用于门户首页、商城首页等多类型视图展示的列表信息流场景。

本场景以应用首页为例，将除页面顶部搜索框区域的其它内容，放在List组件内部，进行整体页面的构建。进入页面后，下滑刷新模拟网络请求；滑动页面列表内容，景区标题吸顶；滑动到页面底部，上滑模拟请求添加数据。

**页面整体结构图** | **页面效果图**  
---|---  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f0/v3/dwmPNLKaSpCLrEO1NTbO9Q/zh-cn_image_0000002669560873.png?HW-CC-KV=V1&HW-CC-Date=20260903T111746Z&HW-CC-Expire=86400&HW-CC-Sign=866AD9E5BC690451B92E2D20148FB61636ED9F0FB727DC0B348A7D41B55AB845) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ab/v3/boFIZODxRiyOl8P527ZBJQ/zh-cn_image_0000002639680924.png?HW-CC-KV=V1&HW-CC-Date=20260903T111746Z&HW-CC-Expire=86400&HW-CC-Sign=FA7DA2465989E8A861CE5F040D5C01838454F08463A619DD01C6CAD3A5A45E2B)  
  
#### [h2]实现原理

根据列表内部各部分视图对应数据类型的区别，渲染不同的ListItem子组件。

Refresh组件可以进行页面下拉操作并显示刷新动效，List组件配合使用Swiper、Grid等基础组件用于页面的整体构建，再通过List组件的[sticky](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-list#func-stickystickystyle)属性、[onReachEnd()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-common#func-onreachend---unit)事件和Refresh组件的[onRefreshing()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-refresh#func-onrefreshing---unit)事件，实现下滑模拟刷新、上滑模拟添加数据及列表标题吸顶的效果。

#### [h2]开发步骤

  1. 顶部搜索框区域
         
         Row() {
             Text(@r(app.string.beijing))
                 // ...
             TextInput(placeholder: @r(app.string.want_search))
                 // ...
             Text(@r(app.string.more))
                 // ...
         }

实现效果：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c0/v3/Xwj5NjevSPy2ROLLaH0yQw/zh-cn_image_0000002639520980.png?HW-CC-KV=V1&HW-CC-Date=20260903T111746Z&HW-CC-Expire=86400&HW-CC-Sign=42CF946BD53A06FE8413602A4D33A756CB93A86D576C5A24AB2F4FDABCEB9D5B)

  2. 在List的第一个ListItem分组中，使用Swiper组件构建页面轮播图内容。
         
         List(space: 12) {
             // Swiper
             ListItem() {
                 Swiper() {
                     ForEach(
                         this.swiperContent,
                         itemGeneratorFunc: {
                             item: SwiperType, _: Int => Stack(alignContent: Alignment.BottomStart) {Image(item.pic)}
                         }
                     )
                 }
                     .width(100.percent)
                     .height(184)
                     .autoPlay(true)
                     .duration(1000)
                     .curve(Curve.Linear)
                     .indicator(DotIndicator().selectedColor(Color.White))
                     .itemSpace(10)
                     .borderRadius(this.borderRadiusVal)
             }
         
             // ...
         }

实现效果：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/47/v3/GuhpnMYiRlmCMoaSc1q4dQ/zh-cn_image_0000002669680987.png?HW-CC-KV=V1&HW-CC-Date=20260903T111746Z&HW-CC-Expire=86400&HW-CC-Sign=8A6A284F58FD05D36F826BF9DC134D01DEE65F588F81304A489BB867E7DEC7DB)

  3. 在List的第二个ListItem分组中，使用Grid组件构建页面网格区域。
         
         List(space: 12) {
             // Swiper
             ListItem() {
                 // ...
             }
             // Grid
             Grid() {
                 ForEach(
                     this.gridTitle,
                     itemGeneratorFunc: {
                         item: AppResource, _: Int => GridItem() {
                             Column() {
                                 Image(@r(app.media.pic1))
                                     .width(44)
                                     .height(44)
                                     .objectFit(ImageFit.Fill)
                                     .borderRadius(22)
                                 Text(item)
                                     .fontSize(12)
                                     .padding(top: 4)
                             }
                         }
                     }
                 )
             }
             .rowsGap(16) // Set the line spacing
             .columnsGap(19) // Set the column spacing
             .columnsTemplate("1fr 1fr 1fr 1fr 1fr") // Set the proportion of each column
         }

实现效果：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/12/v3/YEYYkxVJTd6uybdX6INnAg/zh-cn_image_0000002669560875.png?HW-CC-KV=V1&HW-CC-Date=20260903T111746Z&HW-CC-Expire=86400&HW-CC-Sign=55E2C88C1BB61194E2AABA58E0C74EF4F6B96D3C8ACA8C8C07909EA62DDF87C8)

  4. 推荐内容及列表内容的构建。
         
         // Scenic spot list content details.
         @Builder
         func scenicSpotDetailBuilder(title: String) {
             Column() {
                 Image(@r(app.media.pic1))
                     // ...
                 Column() {
                     Text(title)
                         // ...
                     Text() {
                         Span(@r(app.string.group_discount))
                             // ...
                         Span("999￥")
                             // ...
                     }.margin(top: 4, bottom: 4)
                     Text() {
                         Span(@r(app.string.group_discount))
                         Span("1999￥")
                     }
                     // ...
                 }
                 // ...
             }
         }
         
         List(space: 12){
             // Swiper
             ListItem() {
                 // ...
             }
             // Grid
             ListItem() {
                 // ...
             }
             // Customize display area.
             ListItem() {
                 Row() {
                     Image(@r(app.media.pic1))
                         // ...
                     Image(@r(app.media.pic1))
                         // ...
                 }
                 // ...
             }
             // Scenic spot classification list.
             ForEach(
                 this.scenicSpotTitle,
                 itemGeneratorFunc: {
                     item: AppResource, _: Int => ListItemGroup(
                         header: {=> bind(this.scenicSpotHeader, this)(item)}) {
                         ForEach(
                             this.scenicSpotArray,
                             itemGeneratorFunc: {
                                 item2: String, _: Int => ListItem() {
                                     this.scenicSpotDetailBuilder(item2)
                                 }
                             }
                         )
                     }.borderRadius(this.borderRadiusVal)
                 }
             )
             // ...
         }

实现效果：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/98/v3/e-AYglgSQROqHAQBljdI0g/zh-cn_image_0000002639680926.png?HW-CC-KV=V1&HW-CC-Date=20260903T111746Z&HW-CC-Expire=86400&HW-CC-Sign=9394AE7D6B7732882BA63013DDF02BAF60C59E3107DE51286EB31AEB652470D8)

  5. 将构建好的页面内容，放在Refresh组件内部，并给List和Refresh组件添加对应的[onReachEnd()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-common#func-onreachend---unit)和[onRefreshing()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-refresh#func-onrefreshing---unit)回调，实现下拉模拟刷新和上滑添加列表数据的效果。
         
         // Top search box.
         Row() {
             // ...
         }
         // ...
         // Pull down refresh component.
         Refresh(RefreshParams(refreshing: this.isRefreshing)) {
             // List as a long list layout.
             List(space: 12) {
                 // Swiper
                 ListItem() {
                     // ...
                 }
                 // Grid
                 ListItem() {
                     // ...
                 }
                 // Customize display area.
                 ListItem() {
                     // ...
                 }
                 // Scenic spot classification list
                 ForEach(
                     this.scenicSpotTitle,
                     itemGeneratorFunc: {
                         // ...
                     }
                 )
                 // Customize bottom loading for more
                 ListItem() {
                     Row() {
                         if (!this.noMoreData) {
                             LoadingProgress()
                                 // ...
                         }
                         Text(if (this.noMoreData) {
                             @r(app.string.no_more_data)
                         } else {
                             @r(app.string.loading_more)
                         })
                     }
                     // ...
                 }
                 // ...
             }
             // ...
             .onReachEnd ({
                 => if (this
                     .scenicSpotArray
                     .size >= 20) {
                     this.noMoreData = true
                 } else {
                     Timer.once(500 * Duration.millisecond, {
                         => this
                             .scenicSpotArray
                             .add("scenic area ${this.scenicSpotArray.size + 1}")
                     })
                 }
             })
         }.onRefreshing ({
             => this.isRefreshing = true
             Timer.once(
                 2000 * Duration.millisecond,
                 {
                     =>
                         this.scenicSpotArray = ArrayList<String>(
                             ["scenic area 1", "scenic area 2", "scenic area 3", "scenic area 4", "scenic area 5"])
                         this.noMoreData = false
                         this.isRefreshing = false
                 }
             )
         })
         // ...

实现效果：

**模拟下拉刷新+标题吸顶效果** | **上滑加载更多效果**  
---|---  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0/v3/XexHAWlNRAG_6VBUPaagwQ/zh-cn_image_0000002639520982.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111746Z&HW-CC-Expire=86400&HW-CC-Sign=AE9B781CA15FAC52F4A2D9F93C5714B0108ADCC156E9B99E7BC33BD9761951A5) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ee/v3/f7YnZjAUQVaskONF-HmeIg/zh-cn_image_0000002669680989.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111746Z&HW-CC-Expire=86400&HW-CC-Sign=99A1DA6F608C312615E4E9013BCC9EABEC766FB40334A9247AE762088551A254)  
  



#### Tab吸顶场景

#### [h2]场景描述

Tabs嵌套List的吸顶效果，常用于新闻、资讯类应用的首页。

本场景以Tabs页签首页内容为例，在首页TabContent的内容区域使用List组件配合其它组件，构建下方列表数据内容。进入页面后，向上滑动内容，中间Tabs页签区域实现吸顶展示的效果。

**页面整体结构图** | **页面效果图**  
---|---  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/89/v3/7HAxYlZ9TVimoG6h6t5E6g/zh-cn_image_0000002669560877.png?HW-CC-KV=V1&HW-CC-Date=20260903T111746Z&HW-CC-Expire=86400&HW-CC-Sign=77F49CCA4954F3FA2F2CE2D40B0787D5A5674B66E49E22AB27F82345D21C24BD) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4e/v3/W61SWtxCSTSNvdqa6AD5Xg/zh-cn_image_0000002639680928.png?HW-CC-KV=V1&HW-CC-Date=20260903T111746Z&HW-CC-Expire=86400&HW-CC-Sign=88AF2895E76C70AEA17B039179FBFE4A19254F39923E12E208CC63B8C1B575F0)  
  
#### [h2]实现原理

Tabs组件可以在页面内快速实现视图内容的切换，让用户能够聚焦于当前显示的内容，并对页面内容进行分类，提高页面空间利用率。

通过Tabs组件，配合使用Stack、Scroll、Search以及List等基础组件构建完整页面，再使用List组件的[nestedScroll](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-common#func-nestedscrollnestedscrolloptions)属性，实现中间Tabs页签区域吸顶展示的效果。

#### [h2]开发步骤

  1. 构建Tabs的自定义tabBar内容。
         
         @Builder
         func tabBuilder(img: AppResource, title: AppResource, index: Int) {
             Column() {
                 Image(img)
                     // ...
                     .fillColor(if (this.currentIndex == index) {
                         Color(0x0a59f7)
                     } else {
                         Color(0x66000000)
                     })
                 Text(title)
                     // ...
                     .fontColor(if (this.currentIndex == index) {
                         Color(0x0a59f7)
                     } else {
                         Color(0x66000000)
                     })
             }
             // ...
             .onClick ({
                 _ =>
                     this.currentIndex = index
                     this
                         .tabsController
                         .changeIndex(Int32(this.currentIndex))
             })
         }
         
         Tabs(BarPosition.End, this.tabsController) {
             TabContent() {
                 // ...
             }
             .tabBar ({=> bind(this.tabBuilder, this)(@r(app.media.mine), @r(app.string.tabBar1), 0)})
             // ...
         }
         // ...
         .onChange ({
             index: Int32 => this.currentIndex = Int64(index)
         })
         // ...

实现效果：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7f/v3/7HQ9bKEoTCu-g95xpUXsZQ/zh-cn_image_0000002639520984.png?HW-CC-KV=V1&HW-CC-Date=20260903T111746Z&HW-CC-Expire=86400&HW-CC-Sign=708D6297461D2890BD52C86F6F53DD680B557DEC78CA4B9D5B9C9D02A0DA7C12)

  2. 构建顶部搜索区域。
         
         Row() {
             Image(@r(app.media.startIcon))
                 // ...
             Search(placeholder: Global.resourceManager.getString(@r(app.string.want_search).id))
                 .searchButton("search")
                 // ...
             Text(@r(app.string.search))
                 // ...
         }

实现效果：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/26/v3/qi499bvtQ5K4g5u_Cssypw/zh-cn_image_0000002669680991.png?HW-CC-KV=V1&HW-CC-Date=20260903T111746Z&HW-CC-Expire=86400&HW-CC-Sign=C30B23146F8DAA223338AB1E578E5C7774B89FF10E84FC2ADA704E746CE4D1DD)

  3. 图片占位区域、自定义导航内容及列表内容构建。
         
         // Home page content.
         Scroll(this.scrollController) {
             Column() {
                 // Image position-holder area
                 Image(@r(app.media.pic5))
                     // ...
                 Column() {
                     // Customize tabBar
                      Row(space: 16) {
                         ForEach(
                             this.tabArray,
                             itemGeneratorFunc: {
                                 item: AppResource, index: Int => Text(item)
                                     .fontColor(if (this.currentTabIndex == index) {
                                         Color(0x9a59f7)
                                     } else {
                                         Color.Black
                                     })
                                     .onClick ({
                                         _ =>
                                             this
                                                 .contentTabController
                                                 .changeIndex(Int32(index))
                                             this.currentTabIndex = index
                                     })
                             }
                         )
                     }
                     // ...
                     // Tabs
                     Tabs(BarPosition.Start, this.contentTabController) {
                         TabContent() {
                             List(space: 10, scroller: this.listScroller) {
                                 CustomItem(
                                     imgUrl: @r(app.media.pic2),
                                     title: getResourceString(@r(app.string.manager_content))
                                 )
                                 // ...
                             }
                             // ...
                         }
                         .tabBar("follow")
                         // ...
                     }
                     // ...
                 }
                 // ...
             }
         }
         // ...
         .scrollBar(BatState.Off) // Hide the scroll bar

实现效果：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8d/v3/iklfNIFTTy6I3vFy0Ela7g/zh-cn_image_0000002669560879.png?HW-CC-KV=V1&HW-CC-Date=20260903T111746Z&HW-CC-Expire=86400&HW-CC-Sign=ED232CE6D7F9BE6946383EABA02CBBF46F557CBF1ED2DE839143535B2C8F21EC)

  4. 给List组件添加的[nestedScroll](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-common#func-nestedscrollnestedscrolloptions)属性，结合calc计算实现中间自定义Tab页签区域吸顶展示的效果。
         
         Tabs(BarPosition.Start, this.contentTabController) {
             TabContent() {
                 List(space: 10, scroller: this.contentTabScroller) {
                     // ...
                 }
                 // ...
                 // Customize the tabBar to achieve ceiling suction by combining the nestedScroll attribute with Calc to calculate height.
                 .nestedScroll(
                     NestedScrollOptions(NestedScrollMode.ParentFirst,
                         NestedScrollMode.SelfFirst))
             }
             .tabBar("follow")
             // ...
         }
         // ...
         onChange ({
             index: Int32 => this.currentIndex = Int64(index)
         })

实现效果：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f6/v3/VcPFl7UZS6eZCkwMd1zqXA/zh-cn_image_0000002639680930.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111746Z&HW-CC-Expire=86400&HW-CC-Sign=C77D0B94299394CF52660B0DBE66A0A93E9EC0BAE676265483303C9367256C3B)




#### 分组吸顶场景

#### [h2]场景描述

双列表同向联动，右边字母列表用于快速索引，内容列表根据首字母进行分组，常用于通讯录、城市选择、分组选择等页面。

本场景以城市列表页面为例，左侧城市列表数据和右侧字母导航数据通过List组件来展示，并通过Stack组件使两个列表数据分层显示。在进入页面后，通过滑动左侧城市列表数据，列表字母标题吸顶展示，对应右侧字母导航内容高亮显示；点击右侧字母导航内容，左侧城市列表展示对应内容。

**页面整体结构图** | **页面效果图**  
---|---  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/aa/v3/ontjAD9hQLiDtHAfRSAAdw/zh-cn_image_0000002639520986.png?HW-CC-KV=V1&HW-CC-Date=20260903T111746Z&HW-CC-Expire=86400&HW-CC-Sign=5E304DB597CCB1B70B152388CBCEACFBE73E8C2F67F074D26551DA4AA9E5F1C1) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ba/v3/psM7KlbbROO5yyuEp4wGlQ/zh-cn_image_0000002669680993.png?HW-CC-KV=V1&HW-CC-Date=20260903T111746Z&HW-CC-Expire=86400&HW-CC-Sign=AAB03DA63C5B05C7F446457C233FF71CE88D0F6A5745B6013CAC23FFF710C256)  
  
#### [h2]实现原理

左侧List作为城市列表，右侧List为城市首字母快捷导航列表，通过ListItem对对应数据进行渲染展示，并使用Stack堆叠容器组件，字母导航列表覆盖城市列表上方，再给对应List添加[sticky](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-list#func-stickystickystyle)属性和[onScrollIndex()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-list#func-onscrollindexint32-int32-int32---unit)方法，实现两个列表数据间的联动效果。

#### [h2]开发步骤

  1. 城市列表使用ListItemGroup，对“当前城市”“热门城市”“城市数据”进行分组，并通过ListItem展示每个分组中的具体数据。
         
         // List data content
         @Builder
         func textContent(content: String) {
             Text(content)
                 // ...
         }
         
         List(scroller: this.cityScroller) {
             // Current city.
             ListItemGroup(header: {=> bind(this.itemHead, this)(Global.resourceManager.getString(@r(app.string.current_city).id))}) {
                 ListItem() {
                     Text(this.currentCity)
                         .width(100.percent)
                         .height(45)
                         .fontSize(16)
                         .padding(left: 16, top: 12, bottom: 12)
                         .textAlign(TextAlign.Start)
                         .backgroundColor(Color.White)
                 }
             }
             // Popular cities
             ListItemGroup(header: {=> bind(this.itemHead, this)(Global.resourceManager.getString(@r(app.string.popular_cities).id))}) {
                 ForEach(
                     this.hotCities,
                     itemGeneratorFunc: {
                         item: String, _: Int => ListItem() {
                             this.textContent(item)
                         }
                     }
                 )
             }.divider(ListDividerOptions(strokeWidth: 1, color: Color(0xededed), startMargin: 10, endMargin: 45))
             // City data.
             ForEach(
                 this.groupWordList,
                 itemGeneratorFunc: {
                     item: String, _: Int => ListItemGroup(header: {=> bind(this.itemHead, this)(item)}) {
                         ForEach(
                             this.getCitiesWithGroupName(item),
                             itemGeneratorFunc: {
                                 cityItem: CityDataModel, _: Int => ListItem() {
                                     this.textContent(cityItem.name)
                                 }
                             }
                         )
                     }
                 }
             )
         }

  2. 右侧字母导航列表数据，同样通过List组件进行展示。
         
         // Side letter navigation data.
         Column() {
             List(scroller: this.navListScroller) {
                 ForEach(
                     this.groupWorldList,
                     itemGeneratorFunc: { item: String, index: Int => 
                         ListItem() {
                             Text(item)
                                 // ...
                         }
                     }
                 )
             }
         }

  3. 使用堆叠容器组件Stack，将字母导航内容覆盖到城市列表内容上方。
         
         Stack(Alignment.End) {
             // City List Data.
             List(scroller: this.cityScroller) {
                 // ...
             }
             // ...
             
             // Side letter navigation data.
             Column() {
                 List(scroller: this.navListScroller) {
                     // ...
                 }
             }
             // ...
         }

  4. 最后，给城市列表添加[sticky](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-list#func-stickystickystyle)属性实现标题吸顶效果，及添加[onScrollIndex()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-list#func-onscrollindexint32-int32-int32---unit)方法，通过selectNavIndex变量与字母导航列表内容进行关联，控制的对应字母导航内容的选中状态。

在字母导航列表中，添加点击事件，在点击事件中通过城市列表控制器cityScroller的[scrollToIndex()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-scroll#class-scroller)事件，控制城市列表内容的改变，实现二者数据的联动效果。
         
         Stack(Alignment.End) {
             // City List Data.
             List(scroller: this.cityScroller) {
                 // ...
             }
             // ...
             .onScrollIndex { index: Int32, _: Int32 =>
                 // By to.mding the selectNavIndex state variable with index, control the selection status of the navigation list.
                 this.selectNavIndex = Int64(index - 2)
             }
         
             // Side letter navigation data.
             Column() {
                 List(scroller: this.navListScroller) {
                     ForEach(
                         this.groupWordList,
                         itemGeneratorFunc: {item: String, index: Int =>
                             ListItem() {
                                 Text(item)
                                     // ...
                                     .onClick ({
                                         _ =>
                                             this.selectNavIndex = index
                                             this.isClickScroll = true
                                             this
                                                 .cityScroller
                                                 .scrollToIndex(Int32(index + 2), smooth: false,
                                                     align: ScrollAlign.Start)
                                     })
                             }
                         }
                     )
                 }
             }
             // ...
         }

实现效果：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/14/v3/PisvX5njSHeAkjJji_YPoQ/zh-cn_image_0000002669560881.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111746Z&HW-CC-Expire=86400&HW-CC-Sign=3CB929BA5E5609D8E02498012464EC0C17AF3CF39178B2D5D566F932C74BF474)




#### 二级联动场景

#### [h2]场景描述

通过左边一级列表的选择，联动更新右边二级列表的数据，常用于商品分类选择、编辑风格等二级类别选择页面。

本场景以商品分类列表页面为例，分别通过List组件，对左侧分类导航和右侧导航内容进行展示。在进入页面后，点击左侧分类导航，右侧展示对应导航分类详情列表数据；滑动右侧列表内容，列表标题吸顶展示，左侧对应导航内容则高亮显示。

**页面整体结构图** | **页面效果图**  
---|---  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d5/v3/k738z80fS3C_2AJHGPKtRg/zh-cn_image_0000002639680932.png?HW-CC-KV=V1&HW-CC-Date=20260903T111746Z&HW-CC-Expire=86400&HW-CC-Sign=ED1441DD2781BEAD95FDFFB2F8A55CA9A89F2CD5196E752E875579A6A486F594) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fb/v3/Dnl9NqxqSEGHyq7l3jf60Q/zh-cn_image_0000002639520988.png?HW-CC-KV=V1&HW-CC-Date=20260903T111746Z&HW-CC-Expire=86400&HW-CC-Sign=36A4D432D4204B2B016EA8B894910FF826963AA81D74CD61C5B2AAF2BC339C7D)  
  
#### [h2]实现原理

左右各用一个List实现，分别设置其[onScrollIndex()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-list#func-onscrollindexint32-int32-int32---unit)事件，左侧List在回调中判断数据项切换时，调用右侧List滚动到相应类别的对应位置，右侧同理。

#### [h2]开发步骤

  1. 分别通过List组件构建左侧分类导航数据和右侧分类内容数据。
         
         List(scroller: this.navTitleScroller) {
             ForEach(
                 this.categoryList,
                 itemGeneratorFunc: { item: NavTitleModel, index: Int =>
                     ListItem() {
                         Text(item.titleName)
                             // ...
                     }
                 }
             )
         }
         // ...
         // Display of List Content on the Right.
         List(scroller: this.goodsListScroller) {
             ForEach(
                 this.categoryList,
                 itemGeneratorFunc: {
                     item: NavTitleModel, _: Int => ListItemGroup(space: 12,
                             header: {=> bind(this.goodsHeaderBuilder, this)(item.titleName)}) {
                         ForEach(
                             item.goodsList,
                             itemGeneratorFunc: {
                                 goodsItem: GoodsDataModel, _: Int => ListItem() {
                                     Row() {
                                         Image(goodsItem.imgUrl)
                                             // ...
                                         Column() {
                                             Text(goodsItem.goodsName)
                                                 // ...
                                             Text("￥${goodsItem.price}")
                                                 // ...
                                         }
                                             // ...
                                     }
                                         // ...
                                 }
                             }
                         )
                     }
                 }
             )
         }

  2. 给左侧导航列表添加点击事件，右侧分类详情列表添加[onScrollIndex()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-list#func-onscrollindexint32-int32-int32---unit)事件，并调用自定义事件listChange方法，在listChange方法内部根据isGoods变量的值，调用对应列表控制器的[scrollToIndex()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-scroll#class-scroller)事件，实现导航列表和分类详情数据的联动效果。
         
         // List sliding event
         func listChange(index: Int, isGoods: Bool) {
             if (this.currentTitleId != index) {
                 this.currentTitleId = index
                 if (isGoods) {
                     this
                         .goodsListScroller
                         .scrollToIndex(Int32(index))
                 } else {
                     this
                         .navTitleScroller
                         .scrollToIndex(Int32(index))
                 }
             }
         }
         
         // Left List Data Display
         List(scroller: this.navTitleScroller) {
             ForEach(
                 this.categoryList,
                 itemGeneratorFunc: { item: NavTitleModel, index: Int =>
                     ListItem() {
                         Text(item.titleName)
                             // ...
                             .onClick ({
                                 _ => this.listChange(index, true)
                             })
                     }
                 }
             )
         }
         // ...
         
         // Display of List Content on the Right.
         List(scroller: this.goodsListScroller) {
             // ...
         }
         // ...
         .onScrollIndex ({
             index: Int32, _: Int32, _: Int32 => this.listChange(Int64(index), false)
         })

实现效果：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3e/v3/dbBARXFtSU2-nL2XZ68hgg/zh-cn_image_0000002669680995.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111746Z&HW-CC-Expire=86400&HW-CC-Sign=390C527850603C9B15E03E140FD7C06FE1091CF3F6788308C6D3EF912D9A6E49)




#### 示例代码

[常见列表流示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260728183053.52193959736842610810992682515602:20260904191746:2800:F36E8558331B1B5613E872F2A2EE816F1C5A2C36571E2D41AA4D7001EAF451B6.zip?needInitFileName=true)
