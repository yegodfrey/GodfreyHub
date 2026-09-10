---
name: cangjie-references/cj-scroll-swipe-refresh
title: Refresh
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-refresh
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 滚动与滑动 / Refresh
---

# Refresh

可以进行页面下拉操作并显示刷新动效的容器组件。

#### 导入模块
    
    
    import kit.ArkUI.*

#### 子组件

支持单个子组件。

#### 创建组件

#### [h2]init(?RefreshOptions, () -> Unit)
    
    
    public init(value: ?RefreshOptions, child: () -> Unit)

**功能：** 创建refresh组件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?RefreshOptions | 是 | - | 设置组件刷新时的参数。  
child | () -> Unit | 是 | - | 声明容器子组件。  
  
#### 通用属性/通用事件

通用属性：全部支持。

通用事件：全部支持。

#### 组件事件

#### [h2]func onStateChange(?(RefreshStatus) -> Unit)
    
    
    public func onStateChange(callback: ?(RefreshStatus) -> Unit): This

**功能：** 设置刷新状态变更时，触发回调。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
callback | ?([RefreshStatus](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-refreshstatus))-> Unit | 是 | - | 刷新状态。 初始值：{res: RefreshStatus =>}。  
  
#### [h2]func onRefreshing(?() -> Unit)
    
    
    public func onRefreshing(callback: ?() -> Unit): This

**功能：** 进入刷新状态时触发回调。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
callback | ?()->Unit | 是 | - | 进入刷新状态时触发回调。 初始值：{=>}。  
  
#### 基础类型定义

#### [h2]class RefreshOptions
    
    
    public class RefreshOptions {
        public var refreshing: ?Bool
        public var changeEvent: ?(Bool) -> Unit
        public init(refreshing!: ?Bool)
        public init(refreshing!: ?Bindable<Bool>)
    }

**功能：** 用于设置Refresh组件参数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var refreshing**
    
    
    public var refreshing: ?Bool

**功能：** 当前组件是否正在刷新。

**类型：** ?Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var changeEvent**
    
    
    public var changeEvent: ?(Bool) -> Unit

**功能：** 配合 @Binder 宏使用，用于refreshing属性的双向绑定。

**类型：** ?(Bool) -> Unit

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**init(?Bool)**
    
    
    public init(refreshing!: ?Bool)

**功能：** 创建一个 RefreshOptions 对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
refreshing | ?Bool | 是 | - | **命名参数。** 标识刷新组件当前是否正在刷新。  
  
**init(?Bindable <Bool>)**
    
    
    public init(refreshing!: ?Bindable<Bool>)

**功能：** 根据刷新状态创建一个 RefreshOptions 对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
refreshing | ?[Bindable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-bindablet)<Bool> | 是 | - | **命名参数。** 标识刷新组件当前是否正在刷新。  
  
#### 示例代码

#### [h2]示例1（默认刷新样式）

刷新区域使用默认刷新样式。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import std.collection.*
    import std.time.*
    import std.sync.*
    
    class MyDataSource <: IDataSource<Int64> {
        public MyDataSource(let data_: ArrayList<Int64>) {}
        public var listenerOp: Option<DataChangeListener> = None
        public func getData(index: Int64): Int64 {
            return data_[index]
        }
    
        public func registerDataChangeListener(listener: DataChangeListener): Unit {
            listenerOp = listener
        }
    
        public func unregisterDataChangeListener(listener: DataChangeListener): Unit {
            listenerOp = None
        }
    
        public func totalCount(): Int64 {
            return data_.size
        }
    }
    
    @Entry
    @Component
    class EntryView {
        @State
        var isRefreshing: Bool = false
        let myDataSource: MyDataSource = MyDataSource(ArrayList<Int64>(10, {i => i}))
        @State
        var status: String = "Inactive"
        @State
        var onRefreshStatus: String = "noRefresh"
        @State
        var ratio: Float64 = 1.0
        @State
        var maxRefreshingHeight: Float64 = 100.0
    
        func build() {
            Column() {
                Text(status)
                    .size(width: 50.percent, height: 50.vp)
                    .borderWidth(1)
                    .borderColor(Color.Black)
                    .backgroundColor(0xFFFFFF)
                    .borderRadius(15)
                    .textAlign(TextAlign.Center)
                    .fontSize(30)
                    .margin(top: 20.vp)
                    .id("StatusText")
                Text(onRefreshStatus)
                    .size(width: 50.percent, height: 50.vp)
                    .borderWidth(1)
                    .borderColor(Color.Black)
                    .backgroundColor(0xFFFFFF)
                    .borderRadius(15)
                    .textAlign(TextAlign.Center)
                    .fontSize(30)
                    .margin(top: 20.vp)
                    .id("OnRefreshText")
    
                Refresh(RefreshOptions(refreshing: @Binder(isRefreshing))) {
                    Column {
                        LazyForEach(
                            myDataSource,
                            itemGeneratorFunc: {
                                element: Int64, index: Int64 => Text(element.toString())
                                    .size(width: 50.percent, height: 50.vp)
                                    .borderWidth(1)
                                    .borderColor(Color.Black)
                                    .backgroundColor(0xFFFFFF)
                                    .borderRadius(15)
                                    .textAlign(TextAlign.Center)
                                    .fontSize(30)
                                    .margin(top: 20.vp)
                            }
                        )
                    }
                        .width(100.percent)
                        .backgroundColor(0x89CFF0)
                }
                    .width(100.percent)
                    .height(100.percent)
                    .id("refresh")
                    .onRefreshing(
                        {
                            =>
                                onRefreshStatus = "Refresh"
                                Timer.once(2000 * Duration.millisecond) {
                                    => launch {
                                        this.isRefreshing = false
                                        onRefreshStatus = "NoRefresh"
                                    }
                                }
                        }
                    )
                    .onStateChange({
                        refreshStatus: RefreshStatus => this.status = match (refreshStatus) {
                            case Inactive => "Inactive"
                            case Drag => "Drag"
                            case OverDrag => "OverDrag"
                            case Refresh => "Refresh"
                            case Done => "Done"
                            case _ => ""
                        }
                    })
                    .backgroundColor(0x89CFF0)
            }
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a9/v3/Nu1Yjea7QWqgdZ2mNm7gJw/zh-cn_image_0000002701659636.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111637Z&HW-CC-Expire=86400&HW-CC-Sign=818D229D37E06FFBBF305A55C07F73615FE5027020352914ABF56C95CE2C941A)
