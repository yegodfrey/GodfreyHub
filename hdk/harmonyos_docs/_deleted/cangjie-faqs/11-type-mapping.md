---
name: cangjie-faqs/11-type-mapping
title: 仓颉与ArkTS互操作时的类型映射规则是什么
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/11-type-mapping
nodePath: FAQ / 跨语言互操作 / 仓颉与ArkTS互操作时的类型映射规则是什么
---

# 仓颉与ArkTS互操作时的类型映射规则是什么

仓颉与ArkTS互操作时，两种语言的类型系统存在差异，需要遵循特定的类型映射规则。以下分别介绍互操作宏路径和互操作库路径下的类型映射。

#### 互操作宏（@Interop）路径下的类型映射

仓颉类型 | 仓颉互操作库类型 | ArkTS类型  
---|---|---  
Unit | JSUnderdefined | undefined  
无 | JSNull | null  
Bool | JSBoolean | boolean  
Int8\Int16\Int32\Int64 UInt8\UInt16\UInt32\UInt64 Float16\Float32\Float62 | JSNumber | number  
String | JSString | string  
class、interface | JSObject | object  
Array | JSArray | Array  
BigInt | JSBigint | bigint  
func | JSFunction | function  
无 | JSSymbol | symbol  
  
#### 互操作库路径下的类型映射

在互操作库中，所有ArkTS值统一表示为JSValue类型，需通过JSContext的方法进行类型转换：

仓颉侧方法 | 说明  
---|---  
context.number(v) / jsValue.toNumber() | 数值互转  
context.string(v) / jsValue.toString() | 字符串互转  
context.boolean(v) / jsValue.toBool() | 布尔互转  
context.undefined() | 获取undefined  
context.null() | 获取null  
jsValue.asObject() | 转为JSObject  
jsValue.asFunction() | 转为JSFunction  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4c/v3/tNkhQ3YzSSWBBYrbVXgAcg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260804T120408Z&HW-CC-Expire=86400&HW-CC-Sign=157FBF75FF522B47FBF6902F7380DD950CA617DC9D50EB1F7AF5BB205D25B939)

  1. 互操作宏路径下，JSStringEx、JSArrayEx<T>、JSHashMapEx<K,V>只能出现在被@Interop修饰的函数、class、interface中，且不能在异步互操作函数中使用。
  2. Option<T>的?T语法糖在@Interop修饰的函数签名中不支持，须写完整Option<T>。
  3. 使用互操作库时，JSValue是弱类型，需要手动进行类型检查和转换。
  4. 自定义类型（class或interface）作为泛型参数时，必须被@Interop修饰。



更多类型映射的详细规则，详情请参见[仓颉-ArkTS互操作](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-cangjie-arkts)和[仓颉与ArkTS互操作库](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ark_interop)。
