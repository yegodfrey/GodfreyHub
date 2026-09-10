---
name: cangjie-guides/cj-navigation-navigation
title: 组件导航（Navigation）（推荐）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-navigation-navigation
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 设置组件导航和页面路由 / 组件导航（Navigation）（推荐）
---

# 组件导航（Navigation）（推荐）

组件导航（Navigation）主要用于实现页面间以及组件内部的页面跳转，支持在不同组件间传递跳转参数，提供灵活的跳转栈操作，从而更便捷地实现对不同页面的访问和复用。本文将从组件导航（Navigation）的路由操作、子页面管理以及跳转动效等几个方面进行详细介绍。

[Navigation](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-navigation)是路由导航的根视图容器，一般作为页面（@Entry）的根容器。Navigation组件适用于模块内的路由切换，通过组件级路由能力实现更加自然流畅的转场体验，并提供多种标题栏样式来呈现更好的标题和内容联动效果。一次开发，多端部署场景下，Navigation组件能够自动适配窗口显示大小，在窗口较大的场景下自动切换分栏展示效果。

Navigation组件主要包含​导航页和子页。导航页由标题栏（包含菜单栏）、内容区和工具栏组成。导航页不存在页面栈中。导航页与子页，以及子页之间，可以通过路由操作进行切换。

推荐使用[NavPathStack](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-navigation#class-navpathstack)实现页面路由。

#### 路由操作

Navigation路由相关的操作都是基于页面栈[NavPathStack](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-navigation#class-navpathstack)提供的方法进行，每个Navigation都需要创建并传入一个NavPathStack对象，用于管理页面。主要涉及页面跳转、页面返回等功能。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1/v3/VY5Z_erXSaqPgXYZw76MzQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090118Z&HW-CC-Expire=86400&HW-CC-Sign=398D8151D20B9866D14A3C361970AB0B23077F5D022E9E166393C5F41DDE9721)

不建议开发者通过监听生命周期的方式管理自己的页面栈。
    
    
    @Entry
    @Component
    class EntryView {
        // 创建一个页面栈对象并传入Navigation
        var pageStack: NavPathStack = NavPathStack()
        func build() {
            Navigation(this.pageStack) {
    
            }
        }
    }

#### [h2]页面跳转

NavPathStack通过Push相关的接口去实现页面跳转的功能，主要通过页面的name去跳转，并可以携带param。
    
    
    this.pageStack.pushPath(NavPathInfo(name: 'PageOne', param: 'PageOne Param'))

#### [h2]页面返回

NavPathStack通过Pop相关接口去实现页面返回功能。
    
    
    // 返回到上一页
    this.pageStack.pop()

#### 子页面

[NavDestination](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-navdestination)是Navigation子页面的根容器，用于承载子页面的一些特殊属性以及生命周期等。

#### 页面转场

Navigation默认提供了页面切换的转场动画，通过页面栈操作时，会触发不同的转场效果，Navigation也提供了关闭系统转场、自定义转场以及共享元素转场的能力。

#### [h2]共享元素转场

NavDestination之间切换时可以通过[geometryTransition](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-animation-geometrytransition#func-geometrytransitionstring-bool)实现共享元素转场。配置了共享元素转场的页面同时需要关闭系统默认的转场动画。

  1. 为需要实现共享元素转场的组件添加geometryTransition属性，id参数必须在两个NavDestination之间保持一致。
         
         // 起始页配置共享元素id
         // ...
         @Component
         class PageOne {
             func build() {
                 NavDestination() {
                     Column() {
                         // ...
                         Image(@r(app.media.startIcon))
                             .geometryTransition('sharedId')
                             .width(200)
                             .height(200)
                     }
                 }
             }
         }
         
         // 目的页配置共享元素id
         // ...
         @Component
         class PageTwo {
             func build() {
                 NavDestination() {
                     Column() {
                         // ...
                         Image(@r(app.media.startIcon))
                             .geometryTransition('sharedId')
                             .width(200)
                             .height(200)
                     }
                 }
             }
         }

  2. 将页面路由的操作，放到animateTo动画闭包中，配置对应的动画参数。
         
         @Component
         class PageOne {
             func build() {
                 NavDestination() {
                     Column() {
                         Button('跳转目的页')
                         .width(80.percent)
                         .height(40)
                         .margin(20)
                         .onClick({ => animateTo(AnimateParam(duration: 1200),
                             { => this.pageStack.pushPath(NavPathInfo(name: "PageTwo", param: "information"))})
                         })
                     }
                 }
             }
         }



