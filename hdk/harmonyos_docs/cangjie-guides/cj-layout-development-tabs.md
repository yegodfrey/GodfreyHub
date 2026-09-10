---
name: cangjie-guides/cj-layout-development-tabs
title: 选项卡（Tabs）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-layout-development-tabs
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 组件布局 / 构建布局 / 选项卡（Tabs）
---

# 选项卡（Tabs）

当页面信息较多时，为了让用户能够聚焦于当前显示的内容，需要对页面内容进行分类，提高页面空间利用率。[Tabs](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-tabs)组件可以在一个页面内快速实现视图内容的切换，一方面提升查找信息的效率，另一方面精简用户单次获取到的信息量。

#### 基本布局

Tabs组件的页面组成包含两个部分，分别是TabContent和TabBar。TabContent是内容页，TabBar是导航页签栏，页面结构如下图所示，根据不同的导航类型，布局会有区别，可以分为底部导航、顶部导航、侧边导航，其导航栏分别位于底部、顶部和侧边。

**图1** Tabs组件布局示意图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f1/v3/ugYU8T1CRFmrC6LZ4O6BCw/zh-cn_image_0000002743197627.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=73E0FF41F98D9AB9CA8705359BE3C987EF855F114E388E6C714117F1A878513E)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c9/v3/m3DGHigtSxa5JLRNt-m-_A/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=95A72AF7702AC092BA14FA45BB768BC37EB0D012FB0F2BE30E3ECC3AE5A76F55)

  * TabContent组件不支持设置通用宽度属性，其宽度默认撑满Tabs父组件。
  * TabContent组件不支持设置通用高度属性，其高度由Tabs父组件高度与TabBar组件高度决定。



Tabs使用花括号包裹TabContent，如图2，其中TabContent显示相应的内容页。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/82/v3/xM_E-A9XQJiBe7n9Ew_yxQ/zh-cn_image_0000002713398746.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=D782CB9B52DB3930BB94F1893647B9DE0A4A841F3B875C9A8A8C958A8E47E730)

每一个TabContent对应的内容需要有一个页签，可以通过TabContent的tabBar属性进行配置。在如下TabContent组件上设置tabBar属性，可以设置其对应页签中的内容，tabBar作为内容的页签。
    
    
     TabContent() {
       Text('首页的内容').fontSize(30)
     }
    .tabBar('首页')

设置多个内容时，需在Tabs内按照顺序放置。
    
    
    Tabs() {
      TabContent() {
        Text('首页的内容').fontSize(30)
      }
      .tabBar('首页')
    
      TabContent() {
        Text('推荐的内容').fontSize(30)
      }
      .tabBar('推荐')
    
      TabContent() {
        Text('发现的内容').fontSize(30)
      }
      .tabBar('发现')
    
      TabContent() {
        Text('我的内容').fontSize(30)
      }
      .tabBar("我的")
    }

#### 底部导航

底部导航是应用中最常见的一种导航方式。底部导航位于应用一级页面的底部，用户打开应用，能够分清整个应用的功能分类，以及页签对应的内容，并且其位于底部更加方便用户单手操作。底部导航一般作为应用的主导航形式存在，其作用是将用户关心的内容按照功能进行分类，迎合用户使用习惯，方便在不同模块间的内容切换。

**图3** 底部导航栏

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/48/v3/YLob2aOyQMC1rkHmIw8-yw/zh-cn_image_0000002743077677.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=75FFE53370C434B928CCE4F7CBF4666A127240D607B656016C9086C4B54A0693)

导航栏位置使用Tabs的barPosition参数进行设置。默认情况下，导航栏位于顶部，此时，barPosition为BarPosition.Start。设置为底部导航时，需要将barPosition设置为BarPosition.End。
    
    
    Tabs(barPosition: BarPosition.End) {
        // TabContent的内容，例如：首页、发现、推荐、我的
        // ...
    }

#### 顶部导航

当内容分类较多，用户对不同内容的浏览概率相差不大，需要经常快速切换时，一般采用顶部导航模式进行设计，作为对底部导航内容的进一步划分，常见一些资讯类应用对内容的分类为关注、视频、数码，或者主题应用中对主题进行进一步划分为图片、视频、字体等。

**图4** 顶部导航栏

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/74/v3/PqCjeCKlQWSquJGUJG18eg/zh-cn_image_0000002713558716.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=B7634409CEACC893A9757CFAD33660C8CC54A3CC4D5FA70AFD5B5CDF9DE6277D)
    
    
    Tabs(barPosition: BarPosition.Start) {
        // TabContent的内容，例如:关注、视频、游戏、数码、科技、体育、影视
        // ...
    }

#### 侧边导航

侧边导航是应用较为少见的一种导航模式，更多适用于横屏界面，用于对应用进行导航操作，由于用户的视觉习惯是从左到右，侧边导航栏默认为左侧侧边栏。

**图5** 侧边导航栏

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ed/v3/p6nG7bFHR_mNqhHtIcI4fQ/zh-cn_image_0000002743197629.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=363045E4C81593EAAF74CB70B96385AED5DDA4CF21082D457BC6369D1667DB05)

实现侧边导航栏需要将Tabs的vertical属性设置为true，vertical默认值为false，表明内容页和导航栏垂直方向排列。
    
    
    Tabs(barPosition: BarPosition.Start) {
        // TabContent的内容，例如：首页、发现、推荐、我的
        // ...
    }
    .vertical(true)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a3/v3/-ZtG-07oQlCRYgf8YW98Vw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=EF8450D4023EFF4097833327E27A8D1A65D765ADE6F4BF6F5179334F5567F299)

  * vertical为false时，tabbar的宽度默认为撑满屏幕的宽度，需要设置barWidth为合适值。
  * vertical为true时，tabbar的高度默认为实际内容的高度，需要设置barHeight为合适值。



#### 限制导航栏的滑动切换

默认情况下，导航栏都支持滑动切换，在一些内容信息量需要进行多级分类的页面，如支持底部导航+顶部导航组合的情况下，底部导航栏的滑动效果与顶部导航出现冲突，此时需要限制底部导航的滑动，避免引起不好的用户体验。

**图6** 限制底部导航栏滑动

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7e/v3/9k_XzWxgSY2rRyOdVPBfPw/zh-cn_image_0000002713398748.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=C82ECA5F150E721A03FC78B04D2F7B10D89918974A670DFA4BB8A3F35FCC3043)

控制滑动切换的属性为scrollable，默认值为true，表示可以滑动，若要限制滑动切换页签则需要设置为false。
    
    
    Tabs(barPosition: BarPosition.End) {
        TabContent() {
            Column() {
                Tabs() {
                    // 顶部导航栏的内容
                    // ...
                }
            }
            .backgroundColor(0XFF08A8F1)
            .width(100.percent)
        }
        .tabBar("首页")
    
        // 其他TabContent内容，例如：发现、推荐、我的
        // ...
    }
    .scrollable(false)

#### 固定导航栏

当内容分类较为固定且不具有拓展性时，例如底部导航内容分类一般固定，分类数量一般在3-5个，此时使用固定导航栏。固定导航栏不可滚动，无法被拖拽滚动，内容均分tabBar的宽度。

**图7** 固定导航栏

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/lscJLm1NSOKR3AXyc-AxfA/zh-cn_image_0000002743077679.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=65C37D14EB29515E78C81E7EF84861D70D16903481B4F0B22E67C4E6B6860430)

Tabs的barMode属性用于控制导航栏是否可以滚动，默认值为BarMode.Fixed。
    
    
    Tabs(barPosition: BarPosition.End) {
        // TabContent的内容，例如：首页、发现、推荐、我的
        // ...
    }
    .barMode(BarMode.Fixed)

#### 滚动导航栏

滚动导航栏可以用于顶部导航栏或者侧边导航栏的设置，内容分类较多，屏幕宽度无法容纳所有分类页签的情况下，需要使用可滚动的导航栏，支持用户点击和滑动来加载隐藏的页签内容。

**图8** 可滚动导航栏

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/46/v3/6wElIWeMTkGh6KgEwpAykw/zh-cn_image_0000002713558718.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=27C82BDD8FFA00C00C2D8BB10C1A5AA58414F324C89FBD95A17F3723F1988A6B)

滚动导航栏需要设置Tabs组件的barMode属性，默认值为BarMode.Fixed表示为固定导航栏，BarMode.Scrollable表示可滚动导航栏
    
    
    Tabs(barPosition: BarPosition.Start) {
        // TabContent的内容，例如：首页、发现、推荐、我的
        // ...
    }
    .barMode(BarMode.Scrollable)

#### 自定义导航栏

对于底部导航栏，一般作为应用主页面功能区分，为了更好的用户体验，会组合文字以及对应语义图标表示页签内容，这种情况下，需要自定义导航页签的样式。

**图9** 自定义导航栏

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/18/v3/2zbJ4tDlRJenLsAykWkzBg/zh-cn_image_0000002743197631.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=4440D80642BFAB596B6290D0ABFD3AFC74E351FEA2979ECB05CF0BFC902B1F32)

系统默认情况下采用了下划线标志当前活跃的页签，而自定义导航栏需要自行实现相应的样式，用于区分当前活跃页签和未活跃页签。

设置自定义导航栏需要使用tabBar的参数，以其支持的CustomBuilder的方式传入自定义的函数组件样式。例如这里声明tabBuilder的自定义函数组件，传入参数包括页签文字title，对应位置index，以及选中状态和未选中状态的图片资源。通过当前活跃的currentIndex和页签对应的targetIndex匹配与否，决定UI显示的样式。
    
    
    @State
    var currentIndex: Int32 = 0
    
    @Builder
    func tabBuilder(title: String, targetIndex: Int32, imgs: Array<AppResource>) {
        Column() {
            if (this.currentIndex != targetIndex) {
                Image(imgs[0]).size(width: 25, height: 25)
                Text(title).fontColor(0X1698CE)
            } else {
                Image(imgs[1]).size(width: 25, height: 25)
                Text(title).fontColor(0X6B6B6B)
            }
        }
            .width(100.percent)
            .height(50)
            .justifyContent(FlexAlign.Center)
    }

在TabContent对应tabBar属性中传入自定义函数组件，并传递相应的参数。
    
    
    TabContent(){
      Text("我的内容").fontSize(30)
    }.tabBar({ =>
      bind(this.tabBuilder, this)("我的", 0, [@r(app.media.mine_normal), @r(app.media.mine_selected)])
    })

#### 切换至指定页签

在不使用自定义导航栏时，默认的Tabs会实现切换逻辑。在使用了自定义导航栏后，默认的Tabs仅实现滑动内容页和点击页签时内容页的切换逻辑，页签切换逻辑需要自行实现。即用户滑动内容页和点击页签时，页签栏需要同步切换至内容页对应的页签。

**图10** 内容页和页签不联动

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7f/v3/gnAG4E2cStGOnz-VOUxgdA/zh-cn_image_0000002713398750.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=1A99621341912C5A84EB367249EF451493D30F9FC883FC745C1161F2CDD3995D)

此时需要使用Tabs提供的onChange事件方法，监听索引index的变化，并将当前活跃的index值传递给currentIndex，实现页签的切换。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import std.collection.ArrayList
    
    @Entry
    @Component
    public class EntryView {
        @State
        var currentIndex: Int32 = 2
    
        @Builder
        func tabBuilder(title: String, targetIndex: Int32) {
            Column() {
                Text(title).fontColor(if (this.currentIndex == targetIndex) {
                    0X1698CE
                } else {
                    0X6B6B6B
                })
            }
        }
    
        func build() {
            Column() {
                Tabs(barPosition: BarPosition.End) {
                    TabContent() {
                        // ...
                    }
                        .tabBar({
                            => bind(this.tabBuilder, this)("首页", 0)
                        })
                        .backgroundColor(Color.Green)
                    TabContent() {
                        // ...
                    }
                        .tabBar({
                            => bind(this.tabBuilder, this)("发现", 1)
                        })
                        .backgroundColor(Color(0xFFFF00))
                    TabContent() {
                        // ...
                    }
                        .tabBar({
                            => bind(this.tabBuilder, this)("推荐", 2)
                        })
                        .backgroundColor(0xFEC0CD)
                    TabContent() {
                        // ...
                    }
                        .tabBar({
                            => bind(this.tabBuilder, this)("我的", 3)
                        })
                        .backgroundColor(Color.Blue)
                }
                    .animationDuration(0.0)
                    .backgroundColor(0xF1F3F5)
                    .onChange({
                        index => this.currentIndex = index
                    })
            }.width(100.percent)
        }
    }

**图11** 内容页和页签联动

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c1/v3/w_C6xLpdRNGMnAxQaTJiig/zh-cn_image_0000002743077681.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=1FF483C99628CA73CC081E5ED0C59AA8AA1155FBD0F9CD6A05609808F4400153)

若希望不滑动内容页和点击页签也能实现内容页和页签的切换，可以将currentIndex传给Tabs的index参数，通过改变currentIndex来实现跳转至指定索引值对应的TabContent内容。也可以使用TabsController，TabsController是Tabs组件的控制器，用于控制Tabs组件进行内容页切换。通过TabsController的changeIndex方法来实现跳转至指定索引值对应的TabContent内容。

**图12** 切换指定页签

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b4/v3/SZicKF33SVi4KstJ6fgA5w/zh-cn_image_0000002713558720.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=5AAF408F7005E85FEDD83B8F2D8710B46BD17894F7789C8EEB80A6C23BE303E3)
