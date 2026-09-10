---
name: cangjie-references/cj-navigation-switching-navigation
title: Navigation
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-navigation
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 导航与切换 / Navigation
---

# Navigation

Navigation组件是路由导航的根视图容器，一般作为Page页面的根容器使用，其内部默认包含了标题栏、内容区和工具栏，其中内容区默认首页显示导航内容（Navigation的子组件）或非首页显示（[NavDestination](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-navdestination)的子组件），首页和非首页通过路由进行切换。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d3/v3/anjK2JlyQAeDa60767yKOQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111638Z&HW-CC-Expire=86400&HW-CC-Sign=06B4ED28E0E8FB9D91DF7528FB80C594EB6EF1971A59441062427290665599F7)

  * Navigation嵌套使用Navigation时，内层Navigation的生命周期不和外层Navigation以及[全模态](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-bindcontentcover)的生命周期进行联动。
  * NavDestination未设置主副标题并且没有返回键时，不显示标题栏。



#### 导入模块
    
    
    import kit.ArkUI.*

#### 子组件

可以包含子组件。

#### 创建组件

#### [h2]init(() -> Unit)
    
    
    public init(child!: () -> Unit = { => })

**功能：** 构造一个包含子组件的Navigation容器。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
child | () -> Unit | 否 | { => } | **命名参数。** Navigation容器的子组件。  
  
#### [h2]init(?NavPathStack, () -> Unit)
    
    
    public init(pathInfos: ?NavPathStack, child!: () -> Unit = { => })

**功能：** 构造一个包含子组件的Navigation容器。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
pathInfos | ?NavPathStack | 是 | - | 绑定到Navigation组件的路由栈。  
child | () -> Unit | 否 | { => } | **命名参数。** Navigation容器的子组件。  
  
#### 通用属性/通用事件

通用属性：全部支持。

通用事件：全部支持。

#### 组件属性

#### [h2]func hideTitleBar(?Bool, ?Bool)
    
    
    public func hideTitleBar(hide: ?Bool, animated!: ?Bool = None): This

**功能：** 设置是否隐藏标题栏。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
hide | ?Bool | 是 | - | 是否隐藏标题栏。初始值：false。  
animated | ?Bool | 否 | None | **命名参数。** 是否使用动画显隐标题栏。初始值：false。  
  
#### [h2]func navDestination(?(String, Any) -> Unit)
    
    
    public func navDestination(builder: ?(String, Any) -> Unit): This

**功能：** 创建NavDestination组件。使用builder函数，基于name构造NavDestination组件。builder下只能有一个根节点。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
builder | ?(String, Any) -> Unit | 是 | - | NavDestination组件。 参数一：NavDestination页面名称。 参数二：开发者设置的NavDestination页面详细参数，当前不支持此参数设置（设置后不生效）。 初始值：{ _: String, _: Any => }。  
  
#### [h2]func title(?CustomBuilder, ?NavigationTitleOptions)
    
    
    public func title(value: ?CustomBuilder, options!: ?NavigationTitleOptions = None): This

**功能：** 设置页面标题。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[CustomBuilder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-custombuilder) | 是 | - | 页面标题。初始值：{ => }。  
options | ?NavigationTitleOptions | 否 | None | **命名参数。** 标题栏选项。  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/73/v3/DEznxMYPQGyHLpWxrY3huA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111638Z&HW-CC-Expire=86400&HW-CC-Sign=D2CE0F6B636640FC2BF2445F0010CD9896ABC4FAD9FBE0F54D22CC21DFD9B582)

传入[CustomBuilder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-custombuilder)类型的参数时，需使用bind管理自定义构建函数的调用，bind使用方式请参见[框架接口](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ui-framework)中的bind函数说明。

#### [h2]func title(?ResourceStr, ?NavigationTitleOptions)
    
    
    public func title(value: ?ResourceStr, options!: ?NavigationTitleOptions = None): This

**功能：** 设置页面标题。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 是 | - | 页面标题。初始值：""。  
options | ?NavigationTitleOptions | 否 | None | **命名参数。** 标题栏选项。  
  
#### 基础类型定义

#### [h2]class NavigationOptions
    
    
    public class NavigationOptions {
        public var launchMode: ?LaunchMode
        public var animated: ?Bool
        public init(launchMode!: ?LaunchMode = None, animated!: ?Bool = None)
    }

**功能：** 表示栈操作的选项。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var animated**
    
    
    public var animated: ?Bool

**功能：** 是否支持过渡动画。

**类型：** ?Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var launchMode**
    
    
    public var launchMode: ?LaunchMode

**功能：** 导航栈操作模式。

**类型：** ?LaunchMode

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**init(?LaunchMode, ?Bool)**
    
    
    public init(launchMode!: ?LaunchMode = None, animated!: ?Bool = None)

**功能：** NavigationOptions的构造函数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
launchMode | ?LaunchMode | 否 | None | 导航栈操作模式。初始值：LaunchMode.Standard。  
animated | ?Bool | 否 | None | 是否支持过渡动画。初始值：true。  
  
#### [h2]class NavigationTitleOptions
    
    
    public class NavigationTitleOptions {
        public var backgroundColor: ?ResourceColor
        public var backgroundBlurStyle: ?BlurStyle
        public var barStyle: ?BarStyle
        public var paddingStart: ?Length
        public var paddingEnd: ?Length
        public init(backgroundColor!: ?ResourceColor = None, backgroundBlurStyle!: ?BlurStyle = None,
            barStyle!: ?BarStyle = None, paddingStart!: ?Length = None, paddingEnd!: ?Length = None
        )
    }

**功能：** Navigation标题栏的选项。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var backgroundBlurStyle**
    
    
    public var backgroundBlurStyle: ?BlurStyle

**功能：** 标题栏的背景模糊样式。如果未设置此参数，则禁用背景模糊效果。

**类型：** ?[BlurStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-blurstyle)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var backgroundColor**
    
    
    public var backgroundColor: ?ResourceColor

**功能：** 标题栏的背景颜色。如果未设置此参数，则使用默认颜色。

**类型：** ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var barStyle**
    
    
    public var barStyle: ?BarStyle

**功能：** 标题栏的布局样式。

**类型：** ?BarStyle

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var paddingEnd**
    
    
    public var paddingEnd: ?Length

**功能：** 设置标题栏结束边距。

**类型：** ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var paddingStart**
    
    
    public var paddingStart: ?Length

**功能：** 设置标题栏起始边距。

**类型：** ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**init(?ResourceColor, ?BlurStyle, ?BarStyle, ?Length, ?Length)**
    
    
    public init(backgroundColor!: ?ResourceColor = None, backgroundBlurStyle!: ?BlurStyle = None,
        barStyle!: ?BarStyle = None, paddingStart!: ?Length = None, paddingEnd!: ?Length = None)

**功能：** NavigationTitleOptions的构造函数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
backgroundColor | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 否 | None | 标题栏背景颜色。  
backgroundBlurStyle | ?[BlurStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-blurstyle) | 否 | None | 标题栏背景模糊样式。  
barStyle | ?BarStyle | 否 | None | 标题栏布局样式。初始值：BarStyle.Standard。  
paddingStart | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | 标题栏起始边距。  
paddingEnd | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | 标题栏结束边距。  
  
#### [h2]class NavPathInfo
    
    
    public class NavPathInfo {
        public var name: ?String
        public var param: ?String
        public var onPop: ?Callback<PopInfo, Unit> = None
        public init(name!: ?String, param!: ?String, onPop!: ?Callback<PopInfo, Unit> = None)
    }

**功能：** 表示NavDestination的信息。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var name**
    
    
    public var name: ?String

**功能：** 导航目标页面的名称。

**类型：** ?String

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var onPop**
    
    
    public var onPop: ?Callback<PopInfo, Unit> = None

**功能：** 导航目标页面触发pop时的回调函数。

**类型：** ?[Callback](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-callbackt-v)<PopInfo, Unit>

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var param**
    
    
    public var param: ?String

**功能：** 导航目标页面的详细参数。

**类型：** ?String

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**init(?String, ?String, ?Callback <PopInfo, Unit>)**
    
    
    public init(name!: ?String, param!: ?String, onPop!: ?Callback<PopInfo, Unit> = None)

**功能：** NavPathInfo的构造函数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
name | ?String | 是 | - | **命名参数。** NavDestination的名称。初始值：""。  
param | ?String | 是 | - | **命名参数。** NavDestination的详细参数。初始值：""。  
onPop | ?[Callback](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-callbackt-v)<PopInfo, Unit> | 否 | None | **命名参数。** Callback回调，用于页面出栈时触发该回调处理返回结果。仅pop中设置result参数后触发。由于pop函数暂不支持result参数，因此该回调暂无法生效。  
  
#### [h2]class NavPathStack
    
    
    public class NavPathStack {
        public init()
    }

**功能：** 表示NavDestinations的信息。提供控制栈中目标页面的方法。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**init()**
    
    
    public init()

**功能：** 创建NavPathStack的实例。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**func pop(?Bool)**
    
    
    public func pop(animated!: ?Bool = None): ?NavPathInfo

**功能：** 将顶部NavDestination弹出栈。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
animated | ?Bool | 否 | None | **命名参数。** 是否支持过渡动画。初始值：true。  
  
**返回值：**

类型 | 说明  
---|---  
?NavPathInfo | 如果栈不为空则返回顶部NavPathInfo，否则返回None。  
  
**func pushPath(?NavPathInfo, ?NavigationOptions)**
    
    
    public func pushPath(info: ?NavPathInfo, options!: ?NavigationOptions = None): Unit

**功能：** 将指定的NavDestination推入栈中。根据options参数中指定的launchMode，将触发不同的行为。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
info | ?NavPathInfo | 是 | - | 要推入的NavDestination。  
options | ?NavigationOptions | 否 | None | **命名参数。** 导航选项。  
  
**func pushPathByName(?String, ?String, ?Bool)**
    
    
    public func pushPathByName(name: ?String, param: ?String, animated!: ?Bool = None)

**功能：** 将指定的NavDestination推入栈中。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
name | ?String | 是 | - | 要推入的NavDestination的名称。初始值：""。  
param | ?String | 是 | - | 要推入的NavDestination的详细参数。初始值：""。  
animated | ?Bool | 否 | None | **命名参数。** 是否支持过渡动画。  
  
#### [h2]class PopInfo
    
    
    public class PopInfo {
        public let info: NavPathInfo
        public let result: String
    }

**功能：** 表示弹出页面的信息。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**let info**
    
    
    public let info: NavPathInfo

**功能：** 导航路径信息。

**类型：** NavPathInfo

**读写能力：** 只读

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**let result**
    
    
    public let result: String

**功能：** 弹出操作的结果。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]enum BarStyle
    
    
    public enum BarStyle <: Equatable<BarStyle> {
        | Standard
        | Stack
        | ...
    }

**功能：** 标题栏或工具栏的布局样式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**父类型：**

  * Equatable<BarStyle>



**Stack**
    
    
    Stack

**功能：** 在此模式下，标题栏或工具栏在内容区域上层叠加布局。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**Standard**
    
    
    Standard

**功能：** 在此模式下，标题栏或工具栏在内容区域上方布局。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**operator func !=(BarStyle)**
    
    
    public operator func !=(other: BarStyle): Bool

**功能：** 比较两个枚举值是否不相等。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | BarStyle | 是 | - | 待比较的另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果两个枚举值不相等则返回true，否则返回false。  
  
**operator func ==(BarStyle)**
    
    
    public operator func ==(other: BarStyle): Bool

**功能：** 比较两个枚举值是否相等。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | BarStyle | 是 | - | 待比较的另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果两个枚举值相等则返回true，否则返回false。  
  
#### [h2]enum LaunchMode
    
    
    public enum LaunchMode <: Equatable<LaunchMode> {
        | Standard
        | MoveToTopSingleTon
        | PopToSingleTon
        | NewInstance
        | ...
    }

**功能：** 定义栈操作的模式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**父类型：**

  * Equatable<LaunchMode>



**MoveToTopSingleTon**
    
    
    MoveToTopSingleTon

**功能：** 当具有指定名称的NavDestination存在时，将其移到栈顶，否则行为与Standard模式一致。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**NewInstance**
    
    
    NewInstance

**功能：** 此模式创建NavDestination实例。与Standard相比，此模式不会重用栈中同名实例。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**PopToSingleTon**
    
    
    PopToSingleTon

**功能：** 当具有指定名称的NavDestination存在时，栈将弹出直到该NavDestination，否则行为与Standard模式一致。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**Standard**
    
    
    Standard

**功能：** 默认导航栈操作模式。在此模式下，push操作将指定的NavDestination页面添加到栈中；replace操作替换当前顶部的NavDestination页面。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**operator func !=(LaunchMode)**
    
    
    public operator func !=(other: LaunchMode): Bool

**功能：** 比较两个枚举值是否不相等。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | LaunchMode | 是 | - | 待比较的另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果两个枚举值不相等则返回true，否则返回false。  
  
**operator func ==(LaunchMode)**
    
    
    public operator func ==(other: LaunchMode): Bool

**功能：** 比较两个枚举值是否相等。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | LaunchMode | 是 | - | 待比较的另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果两个枚举值相等则返回true，否则返回false。  
  
#### 示例代码

Navigation组件是路由导航的根视图容器。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Builder
    func pageMap(name: String, param: Any) {
        if (name == "pageOne") {
            PageOne()
        } else {
            PageTwo()
        }
    }
    
    @Entry
    @Component
    class EntryView {
        @Provide
        var stack: NavPathStack = NavPathStack()
    
        func build() {
            Navigation(this.stack) {
                Stack(alignContent: Alignment.Center) {
                    Button("push PageOne", ButtonOptions(shape: ButtonType.Capsule))
                    .width(80.percent)
                    .height(40)
                    .onClick({ evt =>
                        this.stack.pushPath(NavPathInfo(name: "pageOne", param: "pageOne test"))
                    })
                }
                    .width(100.percent)
                    .height(50.percent)
            }
                .title("PageHome")
                .navDestination(bind(pageMap, this))
        }
    }
    
    @Component
    class PageOne {
        @Consume
        var stack: NavPathStack
    
        func build() {
            NavDestination() {
                Stack(alignContent: Alignment.Center) {
                    Button("push PageTwo", ButtonOptions(shape: ButtonType.Capsule))
                    .width(80.percent)
                    .height(40)
                    .onClick({ evt =>
                        this.stack.pushPathByName("pageTwo", "pageOne test")
                    })
                }
                    .width(100.percent)
                    .height(50.percent)
            }.title("PageOne")
        }
    }
    
    @Component
    class PageTwo {
        private var pathStack: NavPathStack = NavPathStack()
    
        func build() {
            NavDestination() {
                Stack(alignContent: Alignment.Center) {
                    Button("pop PageOne", ButtonOptions(shape: ButtonType.Capsule))
                    .width(80.percent)
                    .height(40)
                    .onClick({ evt =>
                        this.pathStack.pop()
                    })
                }
                    .width(100.percent)
                    .height(50.percent)
            }
            .title("PageTwo")
            .onReady({ context =>
                this.pathStack = context.pathStack
            })
            .onBackPressed({ =>
                this.pathStack.pop()
                return true
            })
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ff/v3/NZFTcjgMRYybGUFwo21aqg/zh-cn_image_0000002731378851.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111638Z&HW-CC-Expire=86400&HW-CC-Sign=004AC79973C00E29A2EA760030FC4611E0F926ED6B512DCC59C8C99AEF187FFA)
