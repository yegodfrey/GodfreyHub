---
name: cangjie-references/cj-reflect_package_overview
title: std.reflect
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_overview
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.reflect
---

# std.reflect

#### 功能介绍

reflect 包提供了反射功能，使得程序在运行时能够获取到各种实例的类型信息，并进行各种读写和调用操作。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6d/v3/HCbJQbbLT6-4LQVrBN2nDA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=B85DE0A80F6D09B4A05BA3B8C4934C7A55EF632B7B4FB136473D44019B2F43F2)

  * 不支持平台：macOS、iOS。
  * 对于全局信息仓颉的反射功能只能访问可见性为 public 的全局变量和全局函数。
  * 对于当前所在包，仓颉的反射功能可以访问所有全局定义的类型，而对于外部导入的包或动态加载的模块，则只能访问其中可见性为 public 的全局定义的类型。
  * 对于成员信息仓颉的反射功能只能访问类型内的可见性为 public 的成员（实例/静态成员变量/属性/函数），使用非 public 修饰符修饰的或缺省修饰符的成员均是不可见的。



#### API 列表

#### [h2]函数

函数名 | 功能  
---|---  
[parseParameterTypes(String)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_funcs#func-parseparametertypesstring) | 将字符串转换为包含具体类型信息的函数签名，以便 getStaticFunction 等函数使用。  
  
#### [h2]类型别名

类型别名 | 功能  
---|---  
[Annotation](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_types#type-annotation--object) | [Object](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_classes#class-object) 的别名。  
  
#### [h2]类

类名 | 功能  
---|---  
[ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo) | 描述 class 类型的类型信息。  
[ConstructorInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-constructorinfo) | 描述构造函数信息。  
[GenericTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-generictypeinfo) | 描述泛型信息。  
[GlobalFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalfunctioninfo) | 描述全局函数信息。  
[GlobalVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalvariableinfo) | 描述全局变量信息。  
[InstanceFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancefunctioninfo) | 描述实例成员函数信息。  
[InstancePropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancepropertyinfo) | 描述实例成员属性信息。  
[InstanceVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancevariableinfo) | 描述实例成员变量信息。  
[InterfaceTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-interfacetypeinfo) | 描述 interface 类型的类型信息。  
[PackageInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-packageinfo) | 描述包信息。  
[ParameterInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-parameterinfo) | 描述函数形参信息。  
[PrimitiveTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-primitivetypeinfo) | 描述原始数据类型的类型信息。  
[StaticFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticfunctioninfo) | 描述静态成员函数信息。  
[StaticPropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticpropertyinfo) | 描述静态成员属性信息。  
[StaticVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticvariableinfo) | 描述静态成员变量信息。  
[StructTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-structtypeinfo) | 描述 struct 类型的类型信息。  
[TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) | TypeInfo 提供了所有数据类型通用的操作接口，支持用户进行反射操作。  
  
#### [h2]枚举

枚举名 | 功能  
---|---  
[ModifierInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_enums#enum-modifierinfo) | 描述修饰符信息。  
  
#### [h2]异常类

异常类名 | 功能  
---|---  
[IllegalSetException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegalsetexception) | 表示对不可变类型进行更改异常。  
[IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) | 表示类型不匹配异常。  
[InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) | 表示无法找到对应信息异常。  
[InvocationTargetException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-invocationtargetexception) | 表示调用函数包装异常。  
[MisMatchException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-mismatchexception) | 表示调用对应函数抛出异常。  
[ReflectException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-reflectexception) | ReflectException 为 Reflect 包的基异常类。  
  
  * **[函数](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_funcs)**  

  * **[类型别名](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_types)**  

  * **[类](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes)**  

  * **[枚举](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_enums)**  

  * **[异常类](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions)**  

  * **[示例教程](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect-samples)**  



