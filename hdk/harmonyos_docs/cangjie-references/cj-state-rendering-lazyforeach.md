---
name: cangjie-references/cj-state-rendering-lazyforeach
title: LazyForEach
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-state-rendering-lazyforeach
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 状态管理与渲染控制 / LazyForEach
---

# LazyForEach

在大量子组件的场景下，LazyForEach与缓存列表项、动态预加载、组件复用等方法配合使用，可以进一步提升滑动帧率并降低应用内存占用。

#### 导入模块
    
    
    import kit.ArkUI.*

#### interface IDataSource<T>
    
    
    public interface IDataSource<T> {
        func totalCount(): Int64
        func getData(index: Int64): T
        func registerDataChangeListener(listener: DataChangeListener): Unit
        func unregisterDataChangeListener(listener: DataChangeListener): Unit
    }

**功能：** LazyForEach数据源，需要开发者实现相关接口。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]func getData(Int64)
    
    
    func getData(index: Int64): T

**功能：** 获取索引值index对应的数据。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
index | Int64 | 是 | - | 数据对应的索引值。  
  
**返回值：**

类型 | 说明  
---|---  
T | 索引值index对应的数据。  
  
#### [h2]func registerDataChangeListener(DataChangeListener)
    
    
    func registerDataChangeListener(listener: DataChangeListener): Unit

**功能：** 注册数据改变的监听器。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
listener | DataChangeListener | 是 | - | 数据变化监听器。  
  
#### [h2]func unregisterDataChangeListener(DataChangeListener)
    
    
    func unregisterDataChangeListener(listener: DataChangeListener): Unit

**功能：** 注销数据改变的监听器。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
listener | DataChangeListener | 是 | - | 数据变化监听器。  
  
#### [h2]func totalCount()
    
    
    func totalCount(): Int64

**功能：** 获得数据总数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Int64 | 数据总数。  
  
#### class DataChangeListener
    
    
    public class DataChangeListener {}

**功能：** 数据变化监听器。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]func onDataAdd(IntNative)
    
    
    public func onDataAdd(index: IntNative): Unit

**功能：** 通知组件index的位置有数据添加。添加数据完成后调用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
index | IntNative | 是 | - | 数据添加位置的索引值。  
  
#### [h2]func onDataChange(IntNative)
    
    
    public func onDataChange(index: IntNative): Unit

**功能：** 通知组件index的位置有数据有变化。改变数据完成后调用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
index | IntNative | 是 | - | 数据变化位置的索引值。  
  
#### [h2]func onDataDelete(IntNative)
    
    
    public func onDataDelete(index: IntNative): Unit

**功能：** 通知组件删除index位置的数据并刷新LazyForEach的展示内容。删除数据完成后调用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
index | IntNative | 是 | - | 数据删除位置的索引值。  
  
#### [h2]func onDataMove(IntNative, IntNative)
    
    
    public func onDataMove(from: IntNative, to: IntNative): Unit

**功能：** 通知组件数据有移动。将from和to位置的数据进行交换。数据移动起始位置与数据移动目标位置交换完成后调用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
from | IntNative | 是 | - | 数据移动起始位置。  
to | IntNative | 是 | - | 数据移动目标位置。  
  
#### [h2]func onDataReloaded()
    
    
    public func onDataReloaded(): Unit

**功能：** 通知组件重新加载所有数据。键值没有变化的数据项会使用原先的子组件，键值发生变化的会重建子组件。重新加载数据完成后调用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### class LazyForEach<T>
    
    
    public class LazyForEach<T> {
        public init(dataSource: IDataSource<T>, itemGenerator!: ItemGeneratorFunc<T>,
            keyGenerator!: ?KeyGeneratorFunc<T> = None)
    }

**功能：** 用于创建LazyForEach组件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]init(IDataSource<T>, ItemGeneratorFunc<T>, ?KeyGeneratorFunc<T>)
    
    
    public init(dataSource: IDataSource<T>, itemGenerator!: ItemGeneratorFunc<T>, keyGenerator!: ?KeyGeneratorFunc<T> = None)

**功能：** 创建LazyForEach组件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
dataSource | IDataSource<T> | 是 | - | LazyForEach数据源，需要开发者实现相关接口。  
itemGenerator | [ItemGeneratorFunc<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-itemgeneratorfunct) | 是 | - | **命名参数。** 子组件生成函数，为数组中的每一个数据项创建一个子组件。lambda函数的第一个泛型参数为数据类型；第二个参数为当前列表项的索引值。  
keyGenerator | ?[KeyGeneratorFunc<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-keygeneratorfunct) | 否 | None | **命名参数。** 匿名函数，用于键值生成，为给定数组项生成唯一且稳定的键值。  
  
#### 示例代码
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import std.collection.*
    
    public class Student {
        public Student(
            let name: String,
            let id: Int64
        ) {}
    }
    
    class StudentDataSource <: IDataSource<Student> {
        public StudentDataSource(let data_: ArrayList<Student>) {}
        public var listenerOp: Option<DataChangeListener> = None
        public func totalCount(): Int64 {
            return data_.size
        }
        public func getData(index: Int64): Student {
            return data_[index]
        }
    
        public func registerDataChangeListener(listener: DataChangeListener): Unit {
            listenerOp = listener
        }
    
        public func unregisterDataChangeListener(listener: DataChangeListener): Unit {
            listenerOp = None
        }
    
        public func notifyChange(): Unit {
            let listener: DataChangeListener = listenerOp.getOrThrow()
            listener.onDataReloaded()
        }
    }
    
    func getDS(): StudentDataSource {
        let data: ArrayList<Student> = ArrayList<Student>()
        for (i in 0..10) {
            data.add(Student("name ${i}", i * i))
        }
        let dataSourceStu: StudentDataSource = StudentDataSource(data)
        return dataSourceStu
    }
    
    let dataSourceStu: StudentDataSource = getDS()
    var changeID: Int64 = 0
    
    @Entry
    @Component
    public class EntryView {
    
        public func build(): Unit {
            Column(space: 30) {
                Column {
                    LazyForEach(dataSourceStu, itemGeneratorFunc: {stu: Student, idx: Int64 =>
                        Column {
                            Text(stu.name)
                        }
                    })
                }
                .height(220.0)
    
                Text("click to notifyChange").onClick({ evt =>
                    if (changeID < dataSourceStu.data_.size) {
                        dataSourceStu.data_.remove(at: changeID)
                        dataSourceStu.data_.add(Student("xiaoming", 10086), at: changeID)
                        dataSourceStu.notifyChange()
                        changeID += 1
                    }
                })
            }
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2f/v3/sfVPgnZtSv-ihD8pri2q_w/zh-cn_image_0000002713398988.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090153Z&HW-CC-Expire=86400&HW-CC-Sign=522835B5330BFA118C1FEC3CF8580A50F985B98B9A904CD94FD177FA775B3809)
