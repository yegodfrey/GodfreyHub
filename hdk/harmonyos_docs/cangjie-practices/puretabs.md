---
name: cangjie-practices/puretabs
title: Tabs选项卡常见开发场景
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-practices/puretabs
nodePath: 实践 / Tabs选项卡常见开发场景
---

# Tabs选项卡常见开发场景

#### 概述

在日常开发中，开发者经常遇到使用Tabs作为导航的场景，包括多层嵌套的Tabs、自定义Tabs样式、Tabs数据加载和动态变更显示的Tabs等。

开发者在实际开发中往往需要处理多个功能点的配合，以及与其他组件或数据的互动。为了帮助开发者更直观和全面地理解Tabs组件，本文通过将这些场景整合到一个应用首页的具体实例中，展示Tabs组件的各项功能及其协同效果，以及与其他组件或数据的联动。

本文将从以下几个方面进行介绍。

  * Tabs显示排版
  * Tabs滑动
  * Tabs页签加载/更新



#### Tabs显示排版

在Tabs组件的应用场景中，开发者通常会自定义Tabs的布局和样式。本章节将介绍Tabs组件提供的几种常用的布局和样式功能。

#### [h2]Tabs导航样式

常见的应用页签导航效果包括底部导航、顶部导航和侧边导航。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cb/v3/5SxPNfR4Ql-3DVHHf5e70w/zh-cn_image_0000002639520998.png?HW-CC-KV=V1&HW-CC-Date=20260921T111119Z&HW-CC-Expire=86400&HW-CC-Sign=24EF13AB2C72FD603107171790853839F4F47FDF2CE8F14BF7136E851DBFABA8)

底部导航栏通常用于应用的主导航，其标签数量相对固定，不涉及TabBar滑动。作为应用的主导航，开发者通常会自定义TabBar的样式。底部导航栏可通过设置Tabs的barPosition参数来实现，需将barPosition设置为BarPosition.End。
    
    
    Tabs(
      barPosition: BarPosition.End,
      // ...
    ) {
      // ...
    }

顶部导航栏主要用于主栏目的二级导航。由于二级导航可能包含较多的页签项，其TabBar通常设计为可滚动显示，并能动态调整所显示的页签。同样地，顶部导航栏通过将Tabs的barPosition参数设置为BarPosition.Start来实现。
    
    
    Tabs(
      barPosition: BarPosition.Start,
      // ...
    ) {
      // ...
    }

侧边导航栏常见于横屏界面的导航。由于横屏界面尺寸规格的差异，导航条的页签需要适配宽度和高度，以确保更佳的显示效果。侧边导航栏的实现方式有所不同，需要将Tabs的vertical属性设置为true，而Tabs的barPosition参数则用于控制导航栏显示在左侧或右侧。
    
    
    Tabs(
      // ...
    ) {
      // ...
    }
    .vertical(false) // true to make the tab bar in side

详情请参见[选项卡 (Tabs)](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-layout-development-tabs)。

#### [h2]自定义页签

对于底部导航栏，通常用于应用主页面的功能区分。为了更好的用户体验，开发者通常会自定义页签样式。开发者可以使用Tabs组件提供的定制页签样式的API，将页签自定义为图标加文字标题的形式，并且在选中和非选中的状态下，提供不同的样式。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b2/v3/Rhf5u9oxSmaANTSfq3ZlxQ/zh-cn_image_0000002669681005.gif?HW-CC-KV=V1&HW-CC-Date=20260921T111119Z&HW-CC-Expire=86400&HW-CC-Sign=F62FB9D347C9C32D1E2B69581E697B93E602A74CA733842DF667CDF5780704F8)

**实现原理**

Tabs组件的[tabBar()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-tabcontent#func-tabbarcustombuilder)方法接受联合类型的参数，可以将由@Builder修饰的UI构建函数作为参数传入，以自定义TabBar的样式。因此，开发者可以定义一个UI构建函数tabBuilder()，作为参数传递给[tabBar()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-tabcontent#func-tabbarcustombuilder)方法。由于选中的页签和未选中的页签需要不同的样式，还需定义一个由@State修饰的数值型变量currentIndex，用于在tabBuilder()函数中判断当前页签是否被选中。当currentIndex发生变化时，能够触发tabBar样式的更新。最后，注册Tabs组件的onchange函数，在该函数中更新currentIndex的值。

**开发步骤**

  1. 定义currentIndex属性。
         
         @Component
         public class OutTabsComponent {
         @State
         var currentIndex: Int32 = 0
         //...
         }

  2. 定义@Builder装饰器修饰的自定义样式构建方法tabBuilder()。
         
         @Builder
             public func tabBuilder(index: Int32, name: AppResource) {
                 Column() {
                     Text(name)
                         .margin(top: 4)
                         .fontSize(10)
                         .fontColor(
                             if (this.currentIndex == index) {
                                 @r(app.color.out_tab_bar_font_active_color)
                             } else {
                                 @r(app.color.out_tab_bar_font_inactive_color)
                             })
                 }
                     .justifyContent(FlexAlign.Center)
                     .height(100.percent)
                     .width(100.percent)
                     .padding(bottom: 60)
                     .backgroundColor(@r(app.color.out_tab_bar_background_color))
             }

  3. 将tabBuilder()方法传入Tabs，并在Tabs注册onChange()函数，并在其中更新currentIndex属性。
         
         Tabs(
           // ...
         ) {
           TabContent() {
             InTabsComponent(switchNext: this.switchNext)
         }.tabBar({=> bind(this.tabBuilder, this)(0, @r(app.string.out_bar_text_home))})
           // ...
         }
         // ...
         .onChange({
             index => this.currentIndex = index
         })




#### [h2]Tabs吸顶

在一些二级导航栏页面中，二级页签的内容上方通常会放置一些banner位或其他优先级较高的内容，并且在向上滑动时会退出显示区域。为了提供更好的用户体验，建议在上划的过程中，导航条能够吸附在顶部，便于用户进行内容切换。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/24/v3/ypXAXcfySTu16Yugh3WyJQ/zh-cn_image_0000002669560893.gif?HW-CC-KV=V1&HW-CC-Date=20260921T111119Z&HW-CC-Expire=86400&HW-CC-Sign=1A139D7FAF3117F2641DDE5724AA5401DC0196651AF25E0A6216C3014BCCA9B2)

**实现原理**

开发者可以通过设置滑动组件的属性[nestedScroll](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-common#func-nestedscrollnestedscrolloptions)来控制父子组件的滑动顺序，从而实现吸顶效果。具体而言，需确保TabContent内容是可滑动的，并且Tabs的上层父组件也必须是可滑动的。为内容组件添加[nestedScroll](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-common#func-nestedscrollnestedscrolloptions)属性，设置为当向上滑动时父组件先动，而向下滑动时自己先动，从而实现滑动吸顶效果。

**开发步骤**

在Tabs父组件上嵌套Scroll组件，TabContent中的List组件显示内容，List组件本身是可滑动的，仅需设置其滑动触发行为即可。
    
    
    Scroll() {
        Column() {
            BannerComponent()
    
            Stack(alignContent: Alignment.TopEnd) {
                // ...
                Column() {
                    Tabs(
                        // ...
                    ) {
                        ForEach(
                            this.selectTabsViewModel.selectedTabs,
                            itemGeneratorFunc: {
                                tab: TabItemViewModel, index: Int64 => TabContent() {
                                    List(space: 10) {
                                        // ...
                                    }
                                         // ...
                                         // set the sliding behavior to move up parent first, and move down self first
                                        .nestedScroll(
                                            NestedScrollOptions(NestedScrollMode.ParentFirst,
                                                NestedScrollMode.SelfFirst))
                                }
                                    // ...
    
                            },
                            keyGeneratorFunc: {
                                tab: TabItemViewModel, index: Int64 => tab.toString() + index.toString()
                            }
                        )
                    }
                    //...
                }
                    .width(100.percent)
                    .height(100.percent)
                    .backgroundColor(@r(app.color.out_tab_bar_background_color))
            }
        }
    }

#### Tabs滑动

Tabs组件在用户交互方面提供了丰富的特性，其中与滑动动作相关的交互尤为常见。下文将介绍几种与Tabs和滑动动作相关的特性。

#### [h2]禁用TabContent左右滑动

默认情况下，导航栏支持滑动切换。当存在多级导航栏嵌套或导航栏中的其他组件需要占用滑动动作时，为避免滑动响应冲突，开发者可选择禁用Tabs组件的滑动切换功能。通过将Tabs组件的[scrollable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-tabs#func-scrollablebool)属性设置为false，可以禁止通过滑动TabContent来切换页签。

示例代码：
    
    
    func build() {
      Tabs(
        // ...
      ) {
        // ...
      }
      // ...
      .scrollable(true) // false to disable scroll to switch
    }

#### Tabs页签加载/更新

在使用Tabs组件进行开发时，特别是当Tabs组件作为二级导航使用时，业务需求往往需要对Tabs的标签页进行更精细的控制。下文将介绍几种定制标签页显示逻辑的场景。

#### [h2]增删Tabs页签

在日常的应用开发中，经常需要实现用户自定义选择频道的功能。通常，这些自定义选择的频道会通过Tabs组件来展示，因此需要动态地更新Tabs的页签。本示例设计了一对父子组件来演示这一功能。父组件负责显示页签及其内容，并在页签栏的最右侧设置一个“更多”按钮。点击此按钮会弹出一个窗口，供用户选择需要显示的页签。该弹窗内容由子组件提供，关闭弹窗后，父组件的页签将被更新。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/98/v3/BvRX4KmqQ2C-i6RKVaET9Q/zh-cn_image_0000002639680944.gif?HW-CC-KV=V1&HW-CC-Date=20260921T111119Z&HW-CC-Expire=86400&HW-CC-Sign=9550B85502C53019F0868488DFC6DC4E42DD892591A1E5903FA7F9ADEFEF52FF)

**实现原理**

定义selectTabsViewModel对象，其中的数组allTabs表示所有可选择页签，数组selectedTabs表示选中的需要显示的页签，并通过[@Link](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-macro-link)绑定到父组件InTabComponent和子组件SelectTabsComponent中。子组件SelectTabsComponent作为一个弹窗用于选择需要显示的页签。选择完成后，关闭弹窗并更新selectTabsViewModel对象中的选中页签数组selectedTabs，以触发父组件InTabComponent的页签更新。

**开发步骤**

  1. 定义SelectTabsViewModel类，包含所有可选择页签数组allTabs属性，和需要显示的页签数组selectedTabs属性，及更新显示页签数组的方法updateSelectedTabs()。
         
         @Observed
         public class SelectTabsViewModel {
             @Publish
             public var allTabs: ArrayList<TabItemViewModel> = ArrayList<TabItemViewModel>()
             @Publish
             public var selectedTabs: ArrayList<TabItemViewModel> = ArrayList<TabItemViewModel>()
             // ...
         
             public func loadTabs() {
                 // ...
             }
         
             public func updateSelectedTabs() {
                 let tempTabs: ArrayList<TabItemViewModel> = ArrayList<TabItemViewModel>()
                 for (tab in this.allTabs) {
                     if (tab.isChecked) {
                         tempTabs.add(tab)
                     }
                 }
                 this.selectedTabs = tempTabs
             }
         }

  2. 在InTabsComponent中定义selectTabsViewModel属性，并且在aboutToAppear()方法中初始化。
         
         @Component
         public class InTabsComponent {
             @State
             var selectTabsViewModel: SelectTabsViewModel = SelectTabsViewModel()
             // ...
             
             public func aboutToAppear() {
                 // ...
               
                 this.selectTabsViewModel.loadTabs()
                 // ...
             }
           }

  3. 利用ForEach组件将selectTabsViewModel.selectedTabs属性绑定到Tabs的页签上。
         
         Tabs(
             // ...
         ) {
             ForEach(
                 this.selectTabsViewModel.selectedTabs,
                 itemGeneratorFunc: {
                     tab: TabItemViewModel, index: Int64 => TabContent() {
                         // ...
                     }
                     .tabBar({=> bind(this.tabBuilder, this)(Int32(index), tab)})
                       // ...
                 },
                 keyGeneratorFunc: {
                     tab: TabItemViewModel, index: Int64 => tab.toString() + index.toString()
                 }
             )
         }

  4. 在更多按钮的弹窗中初始化SelectTabsComponent，并将selectTabsViewModel属性作为双向绑定属性传入。在关闭弹窗处理函数中调用selectTabsViewModel.updateSelectedTabs()方法，更新需要显示的组件。
         
         @Builder
         func sheetBuilder() {
            //select tabs to show
             SelectTabsComponent(selectTabsViewModel: this.selectTabsViewModel)
         }
         func build() {
             Scroll() {
                 Column() {
                     BannerComponent()
                     
                     Stack(alignContent: Alignment.TopEnd) {
                         Row() {
                             Image(@r(app.media.more))
                                 // ...
                                 .onClick({
                                     temp => this.showSelectTabsComponent = !this.showSelectTabsComponent
                                 })
                         }
                             // ...
                             .zIndex(1)
                             .bindSheet(
                                 this.showSelectTabsComponent,
                                 this.sheetBuilder,
                                 options: SheetOptions(
                                     detents: [SheetSize.Medium, SheetSize.Medium, SheetSize.FitContent],
                                     preferType: SheetType.Bottom,
                                     title: {=> Text( @r("app.string.bind_sheet_title"))},
                                     onWillDismiss: {
                                         dismissSheetAction: DismissSheetAction =>
                                         this.selectTabsViewModel.updateSelectedTabs()
                                         if (this.selectTabsViewModel.selectedTabs.size > 0) {
                                             this.subsController.changeIndex(0)
                                         }
                                         dismissSheetAction.dismiss()
                                     }
                                 )
                             )
                             // ...
                     }
                 }
             }
                 // ...
         }

  5. 在SelectTabsComponent中将selectTabsViewModel.allTabs属性渲染成toggle组件，并且注册toggle组件的切换处理函数onChange()，在其中修改该页签的选择状态isChecked属性，供更新显示页签方法selectTabsViewModel.updateSelectedTabs()使用。
         
         @Component
         public class SelectTabsComponent {
             @State
             var checkedChange: Bool = false
             @Link
             var selectTabsViewModel: SelectTabsViewModel
         
             func build() {
                 Grid() {
                     ForEach(
                         this.selectTabsViewModel.allTabs,
                         itemGeneratorFunc: {
                             tab: TabItemViewModel, index: Int64 => GridItem() {
                                 Row() {
                                     Toggle(ToggleType.Button, tab.isChecked) {
                                         // ...
                                     }
                                         // ...
                                         .onChange(
                                             {
                                                 isOn: Bool =>
                                                 tab.isChecked = isOn
                                                 this.checkedChange = !this.checkedChange
                                             }
                                         )
                                 }
                             }
                         }
                     )
                 }.columnsTemplate(('1fr 1fr 1fr 1fr') as String).height(100.percent)
             }
         }




#### [h2]常见问题

**如何实现页面懒加载效果**

Tabs页面不支持懒加载。 若要实现页面懒加载效果，可以通过自定义TabBar与[Swiper](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-layout-development-create-looping)组件结合[LazyForEach](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-rendering-control-lazyforeach)来实现页面的懒加载和释放。在使用Tabs组件时，仅保留TabBar，TabContent部分留空，用Swiper组件替代TabContent以显示内容。定义一个数值属性currentIndex，利用[TabsController](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-tabs#class-tabscontroller)、[SwiperController](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-swiper#class-swipercontroller)及onchange函数，使其同时绑定Tabs组件和Swiper组件，从而实现联动。这是因为Swiper组件内支持LazyForEach组件，而原生Tabs组件不支持。在Swiper中利用LazyForEach显示内容，以实现Tabs的懒加载效果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5/v3/31X4HzynSUaOmwQq4Of0rw/zh-cn_image_0000002639521000.png?HW-CC-KV=V1&HW-CC-Date=20260921T111119Z&HW-CC-Expire=86400&HW-CC-Sign=F5BA739C4B1299C35CDF8F10F10DC8FD72FED7E11DE089273305707C2D71088D)

详情请参见[页面懒加载和释放](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-tabs#示例2页面懒加载和释放)。

#### [h2]示例代码

[Tabs选项卡常见开发场景示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260728183056.31295614463226676777628007001456:20260922191119:2800:7D4578695C0444D39B9E4FC7102247AFABD0E5674529D547FAA851A161BAF5C3.zip?needInitFileName=true)
