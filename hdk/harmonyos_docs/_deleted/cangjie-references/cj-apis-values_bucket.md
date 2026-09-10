---
name: cangjie-references/cj-apis-values_bucket
title: ohos.data.values_bucket（数据集）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-values_bucket
nodePath: 应用框架 / ArkData（方舟数据管理） / 仓颉API / ohos.data.values_bucket（数据集）
---

# ohos.data.values_bucket（数据集）

数据集（ValuesBucket）是开发者向数据库插入的一组键值对形式的数据，用于传输数据。

#### 导入模块
    
    
    import kit.ArkData.*

#### enum VBValueType
    
    
    public enum VBValueType {
        | Integer(Int64)
        | Double(Float64)
        | StringValue(String)
        | Boolean(Bool)
        | ...
    }

**功能：** 该类型用于表示数据库允许的数据字段类型。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**起始版本：** 22

#### [h2]Boolean(Bool)
    
    
    Boolean(Bool)

**功能：** 表示字段类型为布尔值。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**起始版本：** 22

#### [h2]Double(Float64)
    
    
    Double(Float64)

**功能：** 表示字段类型为浮点数。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**起始版本：** 22

#### [h2]Integer(Int64)
    
    
    Integer(Int64)

**功能：** 表示字段类型为整型数。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**起始版本：** 22

#### [h2]StringValue(String)
    
    
    StringValue(String)

**功能：** 表示字段类型为字符串。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Core

**起始版本：** 22
