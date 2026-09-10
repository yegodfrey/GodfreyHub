---
name: cangjie-references/cj-api-callback_invoke
title: ohos.callback_invoke（通用回调信息）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-callback_invoke
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉与ArkTS互操作库 / 互操作API / ohos.callback_invoke（通用回调信息）
---

# ohos.callback_invoke（通用回调信息）

#### 导入模块
    
    
    import ohos.callback_invoke.*

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/de/v3/_Y2ObKOGQQas4w6c_I7kkQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090215Z&HW-CC-Expire=86400&HW-CC-Sign=23246CB5B1210811496EBF6C8BAE4CA45D55795D9BD6990AB9A0CF5896F57237)

当前暂不支持Kit化的导入方式，预计在下个版本支持。

#### class Callback0Argument
    
    
    public abstract class Callback0Argument <: CallbackObject {}

**功能：** 无参数回调函数的抽象类。

**起始版本：** 22

**父类型：**

  * CallbackObject



#### [h2]func invoke(?BusinessException)
    
    
    public open func invoke(err: ?BusinessException): Unit

**功能：** 要求实现回调方法的抽象类约束。

**起始版本：** 22

**参数：**

参数 | 类型 | 必填 | 说明  
---|---|---|---  
err | ?BusinessException | 是 | 异常信息。  
  
#### class Callback1Argument<A>
    
    
    public abstract class Callback1Argument<A> <: CallbackObject {}

**功能：** 带一个参数的回调函数抽象类。

**起始版本：** 22

**父类型：**

  * CallbackObject



#### [h2]func invoke(?BusinessException, A)
    
    
    public open func invoke(err: ?BusinessException, arg: A): Unit

**功能：** 要求实现单参数回调方法的抽象类约束。

**起始版本：** 22

**参数：**

参数 | 类型 | 必填 | 说明  
---|---|---|---  
err | ?BusinessException | 是 | 异常信息。  
arg | A | 是 | 回调函数需要的参数。  
  
#### class Callback1ArgumentWithReturn<A, B>
    
    
    public abstract class Callback1ArgumentWithReturn<A, B> <: CallbackObject {}

**功能：** 带一个参数且有返回值的回调函数抽象类。

**起始版本：** 22

**父类型：**

  * CallbackObject



#### [h2]func invoke(?BusinessException, A)
    
    
    public open func invoke(err: ?BusinessException, arg1: A): B

**功能：** 要求实现单参数回调方法的抽象类约束。

**起始版本：** 22

**参数：**

参数 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
err | ?BusinessException | 是 | - | 异常信息。  
arg1 | A | 是 | - | 回调函数需要的参数。  
  
**返回值：**

类型 | 说明  
---|---  
B | 回调函数返回值。  
  
#### class Callback2Argument<A, B>
    
    
    public abstract class Callback2Argument<A, B> <: CallbackObject {}

**功能：** 带两个参数的回调函数抽象类。

**起始版本：** 22

**父类型：**

  * CallbackObject



#### [h2]func invoke(?BusinessException, A, B)
    
    
    public open func invoke(err: ?BusinessException, arg1: A, arg2: B): Unit

**功能：** 要求实现双参数回调方法的抽象类约束。

**起始版本：** 22

**参数：**

参数 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
err | ?BusinessException | 是 | - | 异常信息。  
arg1 | A | 是 | - | 回调函数所需的第一个参数。  
arg2 | B | 是 | - | 回调函数所需的第二个参数。  
  
#### class Callback3ArgumentWithReturn<A, B, C, D>
    
    
    public abstract class Callback3ArgumentWithReturn<A, B, C, D> <: CallbackObject {}

**功能：** 带三个参数且有返回值的回调函数抽象类。

**起始版本：** 22

**父类型：**

  * CallbackObject



#### [h2]func invoke(?BusinessException, A, B, C)
    
    
    public open func invoke(err: ?BusinessException, arg1: A, arg2: B, arg3: C): D

**功能：** 要求实现带三个参数的回调方法的抽象类约束。

**起始版本：** 22

**参数：**

参数 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
err | ?BusinessException | 是 | - | 异常信息。  
arg1 | A | 是 | - | 回调函数所需的第一个参数。  
arg2 | B | 是 | - | 回调函数所需的第二个参数。  
arg3 | C | 是 | - | 回调函数所需的第三个参数。  
  
**返回值：**

类型 | 说明  
---|---  
D | 回调函数的返回值。  
  
#### class CallbackObject
    
    
    public abstract class CallbackObject {}

**功能：** 回调函数的抽象基类。

**起始版本：** 22

#### class CallbackWithReturn<A>
    
    
    public abstract class CallbackWithReturn<A> <: CallbackObject {}

**功能：** 带返回值的回调函数抽象类。

**起始版本：** 22

**父类型：**

  * CallbackObject



#### [h2]func invoke(?BusinessException)
    
    
    public open func invoke(err: ?BusinessException): A

**功能：** 要求实现回调方法的抽象类约束。

**起始版本：** 22

**参数：**

参数 | 类型 | 必填 | 说明  
---|---|---|---  
err | ?BusinessException | 是 | 异常信息。  
  
**返回值：**

类型 | 说明  
---|---  
A | 回调函数的返回值。  
  
#### type Callback<T>
    
    
    public type Callback<T> = (arg: T) -> Unit

**功能：** 回调函数类型。
