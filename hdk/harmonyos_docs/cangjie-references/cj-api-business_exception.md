---
name: cangjie-references/cj-api-business_exception
title: ohos.business_exception（通用异常信息）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉与ArkTS互操作库 / 互操作API / ohos.business_exception（通用异常信息）
---

# ohos.business_exception（通用异常信息）

本模块定义了接口调用过程中出现的常见异常信息。

#### 导入模块
    
    
    import ohos.business_exception.*

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a8/v3/0-tUrApASSuIRYZu-b98Gg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090215Z&HW-CC-Expire=86400&HW-CC-Sign=A23B79D673F6D541847A6488EEF39A588FB527CF4F85AC9088B8A4A7CEE8775E)

当前暂不支持Kit化的导入方式，预计在下个版本支持。

#### class BusinessException
    
    
    public class BusinessException <: Exception {
        public let code: Int32
    }

**功能：** 业务异常类，继承自Exception类。

**起始版本：** 22

**父类型：**

  * Exception



#### [h2]let code
    
    
    public let code: Int32

**功能：** 错误码。

**类型：** Int32

**读写能力：** 只读

**起始版本：** 22

#### [h2]func getData<T>()
    
    
    public func getData<T>(): ?T

**功能：** 获取异常中携带的自定义数据信息。

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
?T | 额外补充的异常信息。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 获取错误信息字符串。

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 错误信息。  
  
#### type AsyncCallback<T>
    
    
    public type AsyncCallback<T> = (Option<BusinessException>, Option<T>) -> Unit

**功能：** 定义了异步回调类型。
