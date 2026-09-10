---
name: cangjie-guides/cj-develop-apply-immersive-effects
title: 开发应用沉浸式效果
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-develop-apply-immersive-effects
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 组件布局 / 开发应用沉浸式效果
---

# 开发应用沉浸式效果

#### 概述

典型应用全屏窗口UI元素包括状态栏、应用界面和底部导航条，其中状态栏和导航条，通常在沉浸式布局下称为避让区；避让区之外的区域称为安全区。开发应用沉浸式效果主要指通过调整状态栏、应用界面和导航条的显示效果来减少状态栏导航条等系统界面的突兀感，从而使用户获得最佳的UI体验。

**图1** 界面元素示意图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/83/v3/vALqqLlVRRKiLVn_y2muSg/zh-cn_image_0000002743197633.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=E509812308877B91E389AACD0ACA2BE2395997B96A48A098B88030DFA46A0951)

开发应用沉浸式效果主要要考虑如下两个设计要素：

  * UI元素避让处理：导航条底部区域可以响应点击事件，除此之外的可交互UI元素和应用关键信息不建议放到导航条区域。状态栏显示系统信息，如果与界面元素有冲突，需要考虑避让状态栏。
  * 沉浸式效果处理：将状态栏和导航条颜色与界面元素颜色相匹配，不出现明显的突兀感。



针对上面的设计要求，可以通过如下两种方式实现应用沉浸式效果：

  * 窗口全屏布局方案：调整布局系统为全屏布局，界面元素延伸到状态栏和导航条区域实现沉浸式效果。当不隐藏避让区时，可通过接口查询状态栏和导航条区域进行可交互元素避让处理，并设置状态栏或导航条的颜色等属性与界面元素匹配。当隐藏避让区时，通过对应接口设置全屏布局即可。
  * 组件安全区方案：布局系统保持安全区内布局，然后通过接口延伸绘制内容（如背景色，背景图）到状态栏和导航条区域实现沉浸式效果。



该方案下，界面元素仅做绘制延伸，无法单独布局到状态栏和导航条区域，针对需要单独布局UI元素到状态栏和导航条区域的场景建议使用窗口全屏布局方案处理。

#### 窗口全屏布局方案

窗口全屏布局方案主要涉及应用扩展布局，全屏显示，不隐藏避让区场景。

#### [h2]应用扩展布局，全屏显示，不隐藏避让区

可以通过调用窗口强制全屏布局接口[setWindowLayoutFullScreen()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-window#func-setwindowlayoutfullscreenbool)实现界面元素延伸到状态栏和导航条；然后通过接口[getWindowAvoidArea()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-window#func-getwindowavoidareaavoidareatype)和[on(WindowCallbackType, Callback1Argument<AvoidAreaOptions>)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-window#func-onwindowcallbacktype-callback1argumentuint32)获取并动态监听避让区域的变更信息，页面布局根据避让区域信息进行动态调整；设置状态栏或导航条的颜色等属性与界面元素进行匹配。

  1. 调用[setWindowLayoutFullScreen()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-window#func-setwindowlayoutfullscreenbool)接口设置窗口全屏。
         
         // main_ability.cj
         class MainAbility <: UIAbility {
             // ...
             public override func onWindowStageCreate(windowStage:   WindowStage): Unit {
                 let windowClass: Window = windowStage.getMainWindow()
         
                 let isLayoutFullScreen = true
                 windowClass.setWindowLayoutFullScreen(isLayoutFullScreen)
         
                 windowStage.loadContent("EntryView")
             }
         }

  2. 使用[getWindowAvoidArea()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-window#func-getwindowavoidareaavoidareatype)接口获取当前布局遮挡区域（例如状态栏、导航条）。
         
         // main_ability.cj
         // 获取布局避让遮挡的区域
         var avoidAreaType = AvoidAreaType.TypeNavigationIndicator
         var avoidArea = windowClass.getWindowAvoidArea(avoidAreaType)
         var bottomRectHeight = avoidArea.bottomRect.height
         AppStorage.setOrCreate('bottomRectHeight', bottomRectHeight)
         
         avoidAreaType = AvoidAreaType.TypeSystem
         avoidArea = windowClass.getWindowAvoidArea(avoidAreaType)
         var topRectHeight = avoidArea.topRect.height
         AppStorage.setOrCreate('topRectHeight', topRectHeight)

  3. 布局中的UI元素需要避让状态栏和导航条，否则可能产生UI元素重叠等情况。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/IaEY1ZaaTfiI7-tsz0aonA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=76EAF1280668DBBF7884A2323D66EFCAAF96D318A4B9D287CB015E8E021B7F2E)

避让区域存在大小为0的情况，当获取到的避让区域为0时，开发者需注意针对处理适配此时的页面区域和布局，避免贴边、内容裁剪等问题，影响应用界面正显示或美观性。

如下示例中，对控件顶部设置padding（具体数值与状态栏高度一致），实现对状态栏的避让；对底部设置padding（具体数值与底部导航条区域高度一致），实现对底部导航条的避让。如果去掉顶部和底部的padding设置，即不避让状态栏和导航条，UI元素就会发生重叠。具体可见下文步骤中图2和图3的效果对比。
         
         // index.cj
         import kit.ArkUI.*
         import ohos.arkui.state_macro_manage.*
         
         @Entry
         @Component
         class EntryView {
             @StorageProp["topRectHeight"] let topRectHeightProp: UInt32 = 0
             @StorageProp["bottomRectHeight"] let bottomRectHeightProp: UInt32 = 0
         
             func build() {
                 Column() {
                     Row() {
                         Text('Top Content').fontSize(40).textAlign(TextAlign.Center).width(100.percent)
                     }.backgroundColor(0x2786d9)
         
                     Row() {
                         Text('Display Content 2').fontSize(30)
                     }.backgroundColor(Color.White).padding(20).borderRadius(15).width(80.percent)
         
                     Row() {
                         Text('Display Content 3').fontSize(30)
                     }.backgroundColor(Color.White).padding(20).borderRadius(15).width(80.percent)
         
                     Row() {
                         Text('Display Content 4').fontSize(30)
                     }.backgroundColor(Color.White).padding(20).borderRadius(15).width(80.percent)
         
                     Row() {
                         Text('Display Content 5').fontSize(30)
                     }.backgroundColor(Color.White).padding(20).borderRadius(15).width(80.percent)
         
                     Row() {
                         Text('Bottom Content').fontSize(40).textAlign(TextAlign.Center).width(100.percent)
                     }.backgroundColor(0x96dffa)
                 }
                 .width(100.percent).height(100.percent)
                 .alignItems(HorizontalAlign.Center)
                 .backgroundColor(0xd5d5d5)
                 .justifyContent(FlexAlign.SpaceBetween)
                 // top数值与状态栏区域高度保持一致；bottom数值与导航条区域高度保持一致
                 .padding(top: this.getUIContext().px2vp(Int64(this.topRectHeightProp).px).getOrDefault({ => return 0}),
                             bottom: this.getUIContext().px2vp(Int64(this.bottomRectHeightProp).px).getOrDefault({ => return 0}))
             }
         }

  4. 根据实际的UI界面显示或相关UI元素背景颜色等，还可以按需设置状态栏的文字颜色、背景色或设置导航条的显示或隐藏，以使UI界面效果呈现和谐。状态栏默认是透明的，透传的是应用界面的背景色。

此例中UI颜色主要有两种，比较简单，故未对状态栏文字颜色、背景色进行设置。

**图2** 布局避让状态栏和导航条

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c1/v3/wXIwfkeSSWCFy3r0-a_f2w/zh-cn_image_0000002713398752.jpg?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=E3A9D10335BE6E3696BDB072FB64683AE4D429DF3E79860B5C48C9DDD1491690)

**图3** 布局未避让状态栏和导航条，UI元素重叠

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/40/v3/XJ3eYfLSR-STw-KktlOSmg/zh-cn_image_0000002743077683.jpg?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=6F37B405E517BFE0DDF1168BFC764D75C3BEED44613BEB8A999AEC678331325B)




#### 组件安全区方案

应用未使用setWindowLayoutFullScreen()接口设置窗口全屏布局时，默认使能组件安全区布局。

应用在默认情况下窗口背景绘制范围是全屏，但UI元素被限制在安全区内（自动排除状态栏和导航条）进行布局，来避免界面元素被状态栏和导航条遮盖。

**图4** 界面元素自动避让状态栏和导航条示意图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/56/v3/Y3v-koW3SceqEB5Tb3xnkQ/zh-cn_image_0000002713558722.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=63627222628E30AE17F6E593A7DDCAA620AB5A002995FB55B717F41DAB020BD6)

针对状态栏和导航条颜色与界面元素颜色不匹配问题，可以通过如下两种方式实现沉浸式效果：

  * 状态栏和导航条颜色相同场景，可以通过设置窗口的背景色来实现沉浸式效果。窗口背景色可通过[setWindowBackgroundColor()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-window#func-setwindowbackgroundcolorstring)进行设置。
        
        class MainAbility <: UIAbility {
            // ...
            public override func onWindowStageCreate(windowStage: WindowStage): Unit {
                AppLog.info("MainAbility onWindowStageCreate.")
                windowStage.loadContent("EntryView")
                windowStage.getMainWindow().setWindowBackgroundColor("#D5D5D5")
            }
        }

界面状态栏和导航条颜色相同场景。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Row() {
                    Column() {
                        Row() {
                            Text("Top Content").fontSize(40).textAlign(TextAlign.Center).width(100.percent)
                        }.backgroundColor(0X2786d9).padding(20)
        
                        Row() {
                            Text("Display Content 2").fontSize(30)
                        }.backgroundColor(Color.White).padding(20).borderRadius(15).width(80.percent)
        
                        Row() {
                            Text("Display Content 3").fontSize(30)
                        }.backgroundColor(Color.White).padding(20).borderRadius(15).width(80.percent)
        
                        Row() {
                            Text("Display Content 4").fontSize(30)
                        }.backgroundColor(Color.White).padding(20).borderRadius(15).width(80.percent)
        
                        Row() {
                            Text("Display Content 5").fontSize(30)
                        }.backgroundColor(Color.White).padding(20).borderRadius(15).width(80.percent)
        
                        Row() {
                            Text("Bottom Content").fontSize(40).textAlign(TextAlign.Center).width(100.percent)
                        }.backgroundColor(0X96DFFA)
                    }
                    .width(100.percent)
                    .height(100.percent)
                    .alignItems(HorizontalAlign.Center)
                    .justifyContent(FlexAlign.SpaceBetween)
                    .backgroundColor(0XD5D5D5)
                }
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a3/v3/AE-vU6WjTd-p8V-jdDRh3Q/zh-cn_image_0000002743197635.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=15C419EC48DC9D9FC6CAEAD0DC1A2FBA47851C9D2A969C540D536561AA070BA1)

  * 态栏和导航条颜色不同时，可以使用[expandSafeArea](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-expandsafearea#func-expandsafeareaarraysafeareatype-arraysafeareaedge)属性扩展安全区属性进行调整。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Row() {
                    Column() {
                        Row() {
                            Text("Top Content").fontSize(40).textAlign(TextAlign.Center).width(100.percent)
                        }.backgroundColor(0X2786d9).padding(20)
                        .expandSafeArea(types: [SafeAreaType.System], edges: [SafeAreaEdge.Top])
        
                        Row() {
                            Text("Display Content 2").fontSize(30)
                        }.backgroundColor(Color.White).padding(20).borderRadius(15).width(80.percent)
        
                        Row() {
                            Text("Display Content 3").fontSize(30)
                        }.backgroundColor(Color.White).padding(20).borderRadius(15).width(80.percent)
        
                        Row() {
                            Text("Display Content 4").fontSize(30)
                        }.backgroundColor(Color.White).padding(20).borderRadius(15).width(80.percent)
        
                        Row() {
                            Text("Display Content 5").fontSize(30)
                        }.backgroundColor(Color.White).padding(20).borderRadius(15).width(80.percent)
        
                        Row() {
                            Text("Bottom Content").fontSize(40).textAlign(TextAlign.Center).width(100.percent)
                        }.backgroundColor(0X96DFFA)
                        .expandSafeArea(types: [SafeAreaType.System], edges: [SafeAreaEdge.Bottom])
                    }
                    .width(100.percent)
                    .height(100.percent)
                    .alignItems(HorizontalAlign.Center)
                    .justifyContent(FlexAlign.SpaceBetween)
                    .backgroundColor(0XD5D5D5)
                }
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/87/v3/uTPpz0C7R_-5NHi3rYg95A/zh-cn_image_0000002713398754.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=805D1627A43DA19405045D2531225CA49089A5AD06F64A6E78FD27F831801E3A)




#### [h2]扩展安全区方案

  * 布局阶段按照安全区范围大小进行UI元素布局。
  * 布局完成后查看设置了expandSafeArea的组件边界（不包括margin）是否和安全区边界相交。
  * 如果设置了expandSafeArea的组件和安全区边界相交，根据expandSafeArea传递的属性则进一步扩大组件绘制区域大小覆盖状态栏、导航条这些非安全区域。
  * 上述过程仅改变组件自身绘制大小，不进行二次布局，不影响子节点和兄弟节点的大小和位置。
  * 子节点可以单独设置该属性，只需要自身边界和安全区域重合就可以延伸自身大小至非安全区域内，需要确保父组件未设置clip等裁切属性。
  * 配置expandSafeArea属性组件进行绘制扩展时，需要关注组件不能配置固定宽高尺寸，百分比除外。
  * 组件可以设置通用属性safeAreaPadding，给自身添加组件级安全区域。该属性作为一种特殊边距，在提供布局约束的同时作为安全区可以被一些系统组件利用。 
    * safeAreaPadding位于原有的padding内侧。容器自外向内各层分别为border、padding、safeAreaPadding、内容区。当border和padding确定后，若容器可用空间不足以满足safeAreaPadding的设置，则优先分配给左侧和上侧safeAreaPadding、其次分配给右侧和下侧safeAreaPadding。

safeAreaPadding实际尺寸确定后，余下空间为内容区。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/61/v3/cFPrLL7LRh-lqog4ysMPMw/zh-cn_image_0000002743077685.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=A2DD2ACE15454AAFE6A8E8FA8338310654B5D70B7E15800AD886D7CD76F44F07)

    * 系统组件如Navigation、List、Scroll、Tabs等可以利用外层或容器自身safeAreaPadding实现扩大裁剪范围等能力。



#### [h2]背景图和视频场景

设置背景图、视频控件大小为安全区域大小并配置expandSafeArea属性。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.resource.__GenerateResource__
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Stack() {
                Image(@r(app.media.bg))
                    .height(100.percent)
                    .width(100.percent)
                    .expandSafeArea(types: [SafeAreaType.System], edges: [SafeAreaEdge.Top, SafeAreaEdge.Bottom]) // 图片组件的绘制区域扩展至状态栏和导航条。
            }.height(100.percent).width(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1e/v3/fwiHBqKjQkalgz5KLfE5yA/zh-cn_image_0000002713558724.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=076C77502B73D5DE131432040B5997BC9C3A290C6C7DCE6B63CC24798F9A82F6)

#### [h2]滚动类场景

滚动容器设置expandSafeArea属性生效，但当父组件是滚动容器时，子组件设置expandSafeArea属性不生效。对于滚动容器的子组件，有两种方法实现沉浸式效果：

  1. 设置父组件滚动容器和子组件相同的背景色，给父组件设置expandSafeArea属性扩展安全区。
         
         package ohos_app_cangjie_entry
         
         import kit.ArkUI.*
         import ohos.arkui.state_macro_manage.*
         
         @Entry
         @Component
         class EntryView {
             var scroller: Scroller = Scroller()
             private var arr: Array<Int64> = [1, 2, 3, 4, 5, 6, 7, 8, 9]
         
             func build() {
                 Stack(alignContent: Alignment.TopStart) {
                     Scroll(this.scroller) {
                         Column() {
                             ForEach(this.arr, itemGeneratorFunc: { item: Int64, idx: Int64 =>
                                 Stack() {
                                     Text("Display Content ${item}").fontSize(30)
                                 }
                                 .width(80.percent)
                                 .padding(20)
                                 .borderRadius(15)
                                 .backgroundColor(Color.White)
                                 .margin(top: 30, bottom: 30)
                             }, keyGeneratorFunc: { item: Int64, idx: Int64 => item.toString()})
                         }
                         .width(100.percent)
                         .backgroundColor(0XD5D5D5)
                     }
                     .backgroundColor(0xD5D5D5)
                     .expandSafeArea(types: [SafeAreaType.System], edges: [SafeAreaEdge.Top, SafeAreaEdge.Bottom])
                 }
                 .width(100.percent)
                 .height(100.percent)
                 .expandSafeArea(types: [SafeAreaType.System], edges: [SafeAreaEdge.Top, SafeAreaEdge.Bottom])
             }
         }

**图5** 滚动类容器设置expandSafeArea属性实现沉浸式效果

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f6/v3/0PSt28eoQK-Yu7YljbKhBw/zh-cn_image_0000002743197637.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=0BEDE220B6A25867DCE5FB1886F90DC393046BD23533E83DD1C0B0DAB7A230D5)

  2. 设置父组件滚动容器和子组件相同的背景色，设置滚动容器的内容裁剪属性clipContent(ContentClipMode.SAFE_AREA)，将内容层裁剪区域扩展至避让区。
         
         package ohos_app_cangjie_entry
         
         import kit.ArkUI.*
         import ohos.arkui.state_macro_manage.*
         
         @Entry
         @Component
         class EntryView {
             var scroller: Scroller = Scroller()
             private var arr: Array<Int64> = [1, 2, 3, 4, 5, 6, 7, 8, 9]
         
             func build() {
                 Stack(alignContent: Alignment.TopStart) {
                     Scroll(this.scroller) {
                         Column() {
                             ForEach(this.arr, itemGeneratorFunc: { item: Int64, idx: Int64 =>
                                 Stack() {
                                     Text("Display Content ${item}").fontSize(30)
                                 }
                                 .width(80.percent)
                                 .padding(20)
                                 .borderRadius(15)
                                 .backgroundColor(Color.White)
                                 .margin(top: 30, bottom: 30)
                             }, keyGeneratorFunc: { item: Int64, idx: Int64 => item.toString()})
                         }
                         .width(100.percent)
                         .backgroundColor(0XD5D5D5)
                     }
                     .backgroundColor(0xD5D5D5)
                     .clipContent(ContentClipMode.SafeArea)
                 }
                 .width(100.percent)
                 .height(100.percent)
                 .expandSafeArea(types: [SafeAreaType.System], edges: [SafeAreaEdge.Top, SafeAreaEdge.Bottom])
             }
         }

**图6** 未适配时列表下方被导航条遮盖

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a2/v3/1gUciYsoSUqGoZgq3ffLuA/zh-cn_image_0000002713398756.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=DE74269F34350D3B33C4CAA49A4FB7C39239D77FCB97638B58B64A5D1314222C)




#### [h2]底部页签场景

要求页签背景色能够延伸到导航条区域，但页签内部可操作元素需要在导航条之上。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/81/v3/NrNgB-OXRJ6nxi4yWVcHqw/zh-cn_image_0000002743077687.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=DFD84F1448C9E20C2FFEC8CBF4D27EC1ABEF3444A71C6E53640FF01BB34620B9)

针对底部的页签部分，Navigation组件和Tabs组件默认实现了页签的延伸处理，开发者只需要保证Navigation和Tabs组件的底部边界和底部导航条重合即可。若开发者显式调用expandSafeArea接口，则安全区效果由expandSafeArea参数指定。

如果未使用上述组件而是采用自定义方式实现页签的场景，可以针对底部元素设置expandSafeArea属性实现底部元素的背景扩展。

**图7** 顶部和底部UI元素未设置和设置expandSafeArea属性效果对比

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/49/v3/HNCfYoLvRv6TDCj936an1Q/zh-cn_image_0000002713558726.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=E4E8578D8A478529E7837AA1F52CF12CED723D276247D195C294E9E02986BBEB)
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Row() {
                Column() {
                    Row() {
                        Text("Top Content").fontSize(40).textAlign(TextAlign.Center).width(100.percent)
                    }.backgroundColor(0X2786d9).padding(20)
                    .expandSafeArea(types: [SafeAreaType.System], edges: [SafeAreaEdge.Top])
    
                    Row() {
                        Text("Display Content 2").fontSize(30)
                    }.backgroundColor(Color.White).padding(20).borderRadius(15).width(80.percent)
    
                    Row() {
                        Text("Display Content 3").fontSize(30)
                    }.backgroundColor(Color.White).padding(20).borderRadius(15).width(80.percent)
    
                    Row() {
                        Text("Display Content 4").fontSize(30)
                    }.backgroundColor(Color.White).padding(20).borderRadius(15).width(80.percent)
    
                    Row() {
                        Text("Display Content 5").fontSize(30)
                    }.backgroundColor(Color.White).padding(20).borderRadius(15).width(80.percent)
    
                    Row() {
                        Text("Bottom Content").fontSize(40).textAlign(TextAlign.Center).width(100.percent)
                    }.backgroundColor(0X96DFFA)
                    .expandSafeArea(types: [SafeAreaType.System], edges: [SafeAreaEdge.Bottom])
                }
                .width(100.percent)
                .height(100.percent)
                .alignItems(HorizontalAlign.Center)
                .justifyContent(FlexAlign.SpaceBetween)
                .backgroundColor(0XD5D5D5)
            }
        }
    }

#### [h2]图文场景

当状态栏元素和底部导航条元素不同时，无法单纯通过窗口背景色或者背景图组件延伸实现，此时需要对顶部元素和底部元素分别配置expandSafeArea属性，顶部元素配置expandSafeArea(types: [SafeAreaType.System], edges: [SafeAreaEdge.Top])，底部元素配置expandSafeArea(types: [SafeAreaType.System], edges: [SafeAreaEdge.Bottom])。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/de/v3/hoQycXA5Rn-Uia2-Bg41Zg/zh-cn_image_0000002743197639.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=D09FBBE4D8B431C95685316E1D22309DC9946CA9898A508AF9560109A84726CD)
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.resource.__GenerateResource__
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Swiper() {
                Column() {
                    Image(@r(app.media.start))
                        .height(50.percent)
                        .width(100.percent)
                        .expandSafeArea(types: [SafeAreaType.System], edges: [SafeAreaEdge.Top])
                    Column() {
                        Text("HarmonyOS-仓颉 第一课")
                            .fontSize(32)
                            .margin(30)
                        Text("通过循序渐进的学习路径，无经验和有经验的开发者都可以掌握仓颉编程语言声明式开发范式，体验更简洁、更友好的HarmonyOS应用开发旅程。")
                            .fontSize(20)
                            .margin(20)
                    }
                    .height(50.percent)
                    .width(100.percent)
                    .backgroundColor(Color.White)
                    .expandSafeArea(types: [SafeAreaType.System], edges: [SafeAreaEdge.Bottom])
                }
            }
            .height(100.percent)
            .width(100.percent)
            .clip(false)
        }
    }
