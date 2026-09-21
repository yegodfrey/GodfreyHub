---
name: cangjie-references/cj-apis-value_type
title: ohos.value_type
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-value_type
nodePath: 系统 / 基础功能 / Basic Services Kit（基础服务） / 仓颉API / 其他 / ohos.value_type
---

# ohos.value_type

value_type模块含公共事件附加信息。

#### 导入模块
    
    
    import kit.BasicServicesKit.*

#### 使用说明

API示例代码使用说明：

  * 若示例代码首行有“// index.cj”注释，表示该示例可在仓颉模板工程的“index.cj”文件中编译运行。
  * 若示例需获取[Context](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-context)应用上下文，需在仓颉模板工程中的“main_ability.cj”文件中进行配置。



上述示例工程及配置模板详见[仓颉示例代码说明](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro#仓颉示例代码说明)。

#### enum CommonEventValueType
    
    
    public enum CommonEventValueType {
        | Int32Value(Int32)
        | Float64Value(Float64)
        | StringValue(String)
        | BoolValue(Bool)
        | FD(Int32)
        | ArrayString(Array<String>)
        | ArrayInt32(Array<Int32>)
        | ArrayInt64(Array<Int64>)
        | ArrayBool(Array<Bool>)
        | ArrayFloat64(Array<Float64>)
        | ArrayFD(Array<Int32>)
        | ...
    }

**功能：** 包含公共事件附加信息的类型取值。

**系统能力：** SystemCapability.Notification.CommonEvent

**起始版本：** 22

#### [h2]ArrayBool(Array<Bool>)
    
    
    ArrayBool(Array<Bool>)

**功能：** 表示Bool数组类型数据。

**系统能力：** SystemCapability.Notification.CommonEvent

**起始版本：** 22

#### [h2]ArrayFD(Array<Int32>)
    
    
    ArrayFD(Array<Int32>)

**功能：** 表示文件描述符数组数据。

**系统能力：** SystemCapability.Notification.CommonEvent

**起始版本：** 22

#### [h2]ArrayFloat64(Array<Float64>)
    
    
    ArrayFloat64(Array<Float64>)

**功能：** 表示Float64数组类型数据。

**系统能力：** SystemCapability.Notification.CommonEvent

**起始版本：** 22

#### [h2]ArrayInt32(Array<Int32>)
    
    
    ArrayInt32(Array<Int32>)

**功能：** 表示Int32数组类型数据。

**系统能力：** SystemCapability.Notification.CommonEvent

**起始版本：** 22

#### [h2]ArrayInt64(Array<Int64>)
    
    
    ArrayInt64(Array<Int64>)

**功能：** 表示Int64数组类型数据。

**系统能力：** SystemCapability.Notification.CommonEvent

**起始版本：** 22

#### [h2]ArrayString(Array<String>)
    
    
    ArrayString(Array<String>)

**功能：** 表示String数组类型数据。

**系统能力：** SystemCapability.Notification.CommonEvent

**起始版本：** 22

#### [h2]BoolValue(Bool)
    
    
    BoolValue(Bool)

**功能：** 表示Bool类型数据。

**系统能力：** SystemCapability.Notification.CommonEvent

**起始版本：** 22

#### [h2]FD(Int32)
    
    
    FD(Int32)

**功能：** 表示文件描述符数据。

**系统能力：** SystemCapability.Notification.CommonEvent

**起始版本：** 22

#### [h2]Float64Value(Float64)
    
    
    Float64Value(Float64)

**功能：** 表示Float64类型数据。

**系统能力：** SystemCapability.Notification.CommonEvent

**起始版本：** 22

#### [h2]Int32Value(Int32)
    
    
    Int32Value(Int32)

**功能：** 表示Int32类型数据。

**系统能力：** SystemCapability.Notification.CommonEvent

**起始版本：** 22

#### [h2]StringValue(String)
    
    
    StringValue(String)

**功能：** 表示String类型数据。

**系统能力：** SystemCapability.Notification.CommonEvent

**起始版本：** 22
