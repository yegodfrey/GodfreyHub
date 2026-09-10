---
name: cangjie-references/cj-state-rendering-componentstatemanagement
title: 组件级变量的状态管理
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-state-rendering-componentstatemanagement
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 状态管理与渲染控制 / 组件级变量的状态管理
---

# 组件级变量的状态管理

提供ObservedArrayList作为状态管理的数组类型，当其中数组发生变化时，如修改其中一项的值，删除或添加一项，就会触发UI更新。

#### 导入模块
    
    
    import kit.ArkUI.*

#### class ObservedArrayList<T>
    
    
    public class ObservedArrayList<T> <:  CollectionEx<T> {
        public init(initValue: ArrayList<T>)
        public init(initValue: Array<T>)
    }

**功能：** 表示用于进行状态管理的数组列表类型。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**父类型：**

  * [CollectionEx](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-collectionext)<T>



#### [h2]prop size
    
    
    public prop size: Int64

**功能：** 获取状态管理数组列表的大小。

**类型：** Int64

**读写能力：** 只读

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]init(ArrayList<T>)
    
    
    public init(initValue: ArrayList<T>)

**功能：** 定义一个ObservedArrayList类型的数组列表。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
initValue | ArrayList<T> | 是 | - | 状态管理数组列表类型的初始化值。  
  
#### [h2]init(Array<T>)
    
    
    public init(initValue: Array<T>)

**功能：** 定义一个ObservedArrayList类型的数组列表。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
initValue | Array<T> | 是 | - | 状态管理数组列表类型的初始化值。  
  
#### [h2]operator func [Int64](Int64)
    
    
    public operator func [](index: Int64): T

**功能：** 通过索引获取数组列表中的元素。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
index | Int64 | 是 | - | 元素索引。  
  
**返回值：**

类型 | 说明  
---|---  
T | 指定索引位置的元素。  
  
#### [h2]operator func [](Int64, T)
    
    
    public operator func [](index: Int64, value!: T): Unit

**功能：** 通过索引设置数组列表中的元素。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
index | Int64 | 是 | - | 元素索引。  
value | T | 是 | - | **命名参数。** 要设置的元素值。  
  
#### [h2]func isEmpty()
    
    
    public func isEmpty(): Bool

**功能：** 判断状态管理数组列表是否为空。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Bool | 状态管理数组列表是否为空。  
  
#### [h2]func clone()
    
    
    public func clone(): ObservedArrayList<T>

**功能：** 克隆状态管理数组列表。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
ObservedArrayList<T> | 克隆的状态管理数组列表。  
  
#### [h2]func clear()
    
    
    public func clear(): Unit

**功能：** 清空状态管理数组列表。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]func append(T)
    
    
    public func append(element: T): Unit

**功能：** 在状态管理数组列表末尾添加元素。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
element | T | 是 | - | 要添加的元素。  
  
#### [h2]func appendAll(Collection<T>)
    
    
    public func appendAll(elements: Collection<T>): Unit

**功能：** 在状态管理数组列表末尾添加多个元素。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
elements | Collection<T> | 是 | - | 要添加的元素集合。  
  
#### [h2]func insert(Int64, T)
    
    
    public func insert(index: Int64, element: T): Unit

**功能：** 在状态管理数组列表指定位置插入元素。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
index | Int64 | 是 | - | 插入位置的索引。  
element | T | 是 | - | 要插入的元素。  
  
#### [h2]func insertAll(Int64, Collection<T>)
    
    
    public func insertAll(index: Int64, elements: Collection<T>): Unit

**功能：** 在状态管理数组列表指定位置插入多个元素。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
index | Int64 | 是 | - | 插入位置的索引。  
elements | Collection<T> | 是 | - | 要插入的元素集合。  
  
#### [h2]func prepend(T)
    
    
    public func prepend(element: T): Unit

**功能：** 在状态管理数组列表开头添加元素。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
element | T | 是 | - | 要添加的元素。  
  
#### [h2]func prependAll(Collection<T>)
    
    
    public func prependAll(elements: Collection<T>): Unit

**功能：** 在状态管理数组列表开头添加多个元素。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
elements | Collection<T> | 是 | - | 要添加的元素集合。  
  
#### [h2]func remove(Int64)
    
    
    public func remove(index: Int64): T

**功能：** 删除状态管理数组列表指定位置的元素。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
index | Int64 | 是 | - | 要删除元素的索引。  
  
**返回值：**

类型 | 说明  
---|---  
T | 被删除的元素。  
  
#### [h2]func remove(Range<Int64>)
    
    
    public func remove(range: Range<Int64>): Unit

**功能：** 删除状态管理数组列表指定范围的元素。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
range | Range<Int64> | 是 | - | 要删除元素的范围。  
  
#### [h2]func removeIf((T) -> Bool)
    
    
    public func removeIf(predicate: (T) -> Bool): Unit

**功能：** 根据条件删除状态管理数组列表中的元素。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
predicate | (T) -> Bool | 是 | - | 删除条件。  
  
#### 示例代码

状态更新时的注意事项：不允许在spawn表达式中对状态变量进行并发修改，会导致并发安全问题。建议当需要修改状态变量时，采用concurrency包提供的launch方法，将状态更新的步骤放回主线程中运行，以保证并发安全。如下实例演示如何在spawn表达式中更新变量状态：
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        @State
        var text: String = "begin"
    
        func build() {
            Column(space: 30) {
                Button(text).onClick({ evt =>
                    changeText({ p: String =>
                        // 使用launch表达式在主线程中更新状态变量
                        launch {
                            text = p
                        }
                    })
                })
            }.width(100.percent)
        }
    
        private func changeText(callback: (String) -> Unit): Unit {
            spawn {
                while (true) {
                    callback("blink 0")
                    sleep(Duration.millisecond * 100)
                    callback("blink 1")
                    sleep(Duration.millisecond * 100)
                }
            }
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b3/v3/QqHZvCEOQJ2mEYss5mAkAA/zh-cn_image_0000002701659682.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111647Z&HW-CC-Expire=86400&HW-CC-Sign=5F6BE16997A7D2C07F0F1F4997B6AD7CFB535CEA89863A392D79EC6B968D5C42)
