---
name: document/cn/doc-references/idl-syntax-rules-0000001051082780
title: HarmonyOS IDL语法规则
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/idl-syntax-rules-0000001051082780
source: portal
---

# HarmonyOS IDL语法规则

HarmonyOS IDL语法规则（BNF范式描述） | HarmonyOS IDL语法规则（文字描述） | 示例  
---|---|---  
### Programs | - | -  
<*compilation_unit*> ::= <*package_declaration*>? <*type_declarations*>? <*interface_definition*> | 一个HarmonyOS IDL接口定义文件由三部分组成：包名、类型声明、接口定义。 说明： 
    1. IDL接口文件扩展名为*.idl。
    2. 一个文件只能定义一个接口，多个接口需要定义在多个不同的文件中。
    3. 文件名必须和接口名一致。
    4. 自定义类型单独成一个文件，该文件名可以按需定义。
| -  
<*package_declaration*> :: = package <*package_name_with_namespace*> ; | 包名 | package ohos.app;  
<*package_name_with_namespace*> ::= <*namespace*> . <*package_name*> | <*package_name*> | - | -  
<*type_declarations*> ::= <*java_like_type_declarations*> | <*c_like_type_declarations*> | 类型声明 | -  
<*java_like_type_declarations*> ::= <*sequenceable_class_declaration*>? <*package_type_declaration*>? <*interface_declaration*>? | 类Java语言的类型声明，包括：
    * sequenceable类型声明
    * 包类型声明
    * 接口类型声明
| -  
<*sequenceable_class_declaration*> ::= sequenceable <*sequenceable_class_name_with_namespace*> ; | sequenceable类型声明 | sequenceable ohos.content.AbilityInfo;  
<*sequenceable_class_name_with_namespace*> ::= <*namespace*> . <*sequenceable_class_name*> | <*sequenceable_class_name*> | - | -  
<*c_like_type_declarations*> ::= <*package_type_declaration*>? <*custom_type_declaration*>? <*interface_declaration*>? | 类C语言的类型声明，包括
    * 包类型声明
    * 自定义类型声明
    * 接口类型声明
| -  
<*custom_type_file_name_with_namespace*> ::= <*namespace*> . <*custom_type_file_name*> | <*custom_type_file_name*> | - | -  
<*interface_declaration*> ::= interface <*interface_name_with_namespace*> ; | 接口类型声明 | interface ohos.app.IAbilitySliceConnection;  
<*interface_name_with_namespace*> ::= <*namespace*> . <*interface_name*> | <*interface_name*> | - | -  
<*interface_definition*> ::= <*interface_attributes_declaration*>? interface <*interface_name_with_namespace*> <*interface_inheritance_declaration*>? { <*method_declaration*>\+ }; | 接口定义，包括：
    * 接口属性
    * 接口名称
    * 接口继承声明
    * 接口函数
说明：  不能定义空接口。 | interface ohos.app.IAbilityManager { int StartAbility([in] Intent intent); …… };  
<*interface_attributes_declaration*> ::= \\[ <*interface_attributes*> \\] | 接口属性 | -  
<*interface_attributes*> ::= <*interface_attribute*> | <*interface_attributes*> , <*interface_attribute*> | - | -  
<*interface_attribute*> ::= <*java_like_interface_attribute*> | <*c_like_interface_attribute*> | - | -  
<*java_like_interface_attribute*> ::= oneway | 类Java语言的属性支持：oneway | -  
<*c_like_interface_attribute*> ::= <*java_like_interface_attribute*> | callback | full | lite | 类C语言的属性，支持：
    * oneway
    * callback
    * full
    * lite
| -  
<*interface_inheritance_declaration*> ::= extends <*parent_interface_name_with_namespace*> | 接口继承声明 | interface ohos.app.IAbilityManager extends ohos.app.IManager { …… };  
<*parent_interface_name_with_namespace*> ::= <*interface_name_with_namespace*> | 父接口 | -  
<*method_declaration*> ::= <*method_attributes_declaration*>? <*result_type*> <*method_declarator*> ; | 接口函数声明，包括：
    * 函数属性
    * 返回值
    * 函数名称
    * 参数列表
| -  
<*method_attributes_declaration*> ::= \\[ <*method_attributes*> \\] | 函数属性 | -  
<*method_attributes*> ::= <*method_attribute*> | <*method_attributes*> , <*method_attribute*> | - | -  
<*method_attribute*> ::= <*java_like_method_attribute*> | <*c_like_method_attribute*> | - | -  
<*java_like_method_attribute*> ::= oneway | 类Java语言的函数属性支持：oneway | -  
<*c_like_method_attribute*> ::= <*java_like_method_attribute*> | full | lite | 类C语言的函数属性，支持：
    * oneway
    * full
    * lite
| -  
<*result_type*> ::= <*type*> | void | 返回值：
    * 可以没有返回值（void）
    * 返回一个指定类型的值
| -  
<*method_declarator*> ::= <*method_name*> ( <*formal_parameters*>? ) | 接口函数：可以没有参数 | -  
<*formal_parameters*> ::= <*formal_parameter*> | <*formal_parameters*> , <*formal_parameter*> | - | -  
<*formal_parameter*> ::= \\[ <*formal_parameter_attribute*> \\] <*type*> <*formal_parameter_name*> | 每个函数参数由三个部分组成：参数属性、参数类型、参数名称 | -  
<*formal_parameter_attribute*> ::= in | out | inout | 参数属性，支持：
    * in
    * out
    * inout
| -  
### Types | - | -  
<*type*> ::= <*java_like_type*> | <*c_like_type*> | - | -  
<*java_like_type*> ::= <*primitive_type*> | <*string_type*> | <*sequenceable_type*> | <*interface_type*> | <*list_type*> | <*map_type*> | <*array_type*> | 类Java语言的数据类型，包括：
    * 基本类型
    * String类型
    * sequenceable类型
    * 接口类型
    * List容器类型
    * Map容器类型
    * 数组类型
| -  
<*c_like_type*> ::= <*primitive_type*> | <*string_type*> | <*interface_type*> | <*list_type*> | <*array_type*> | <*custom_type*> | 类C语言的数据类型，包括：
    * 基本类型
    * String类型
    * 接口类型
    * List容器类型
    * 数组类型
    * 自定义类型
| -  
<*primitive_type*> ::= <*java_like_primitive_type*> | <*c_like_primitive_type*> | - | -  
<*java_like_primitive_type*> ::= boolean | byte | short | int | long | float | double | 类Java语言的基本类型 | -  
<*c_like_primitive_type*> ::= <*java_like_primitive_type*> | unsigned char | unsigned short | unsigned int | unsigned long | 类C语言的基本类型：除类Java语言的基本类型外，还可以使用无符号类型 | -  
<*string_type*> ::= String | String类型 | -  
<*sequenceable_type*> ::= <*sequenceable_class_name*> | sequenceable类型 | -  
<*interface_type*> ::= <*interface_name*> | interface接口类型 | -  
<*list_type*> ::= List < <*type*> > | List容器类型 | -  
<*map_type*> ::= Map < <*type*> , <*type*> > | Map容器类型 | -  
<*array_type*> ::= <*type*> \\[ \\] | 数组类型 | -  
<*custom_type*> ::= <*enum_type*> | <*struct_type*> | <*union_type*> | 自定义类型，包括：
    * 枚举类型
    * 结构体类型
    * 联合体类型
    * 三种类型的嵌套使用
| -  
<*enum_type*> ::= <*custom_type_attributes_declaration*>? enum <*custom_type_name*> { <*enum_members_declaration*>\+ }; | 枚举类型：
    * 自定义类型属性
    * 类型名
    * 枚举成员
| -  
<*struct_type*> ::= <*custom_type_attributes_declaration*>? struct <*custom_type_name*> { <*custom_type_members_declaration*>\+ }; | 结构体类型：
    * 自定义类型属性
    * 类型名
    * 结构体成员
| -  
<*union_type*> ::= <*custom_type_attributes_declaration*>? union <*custom_type_name*> { <*custom_type_members_declaration*>\+ }; | 联合体类型：
    * 自定义类型属性
    * 类型名
    * 联合体成员
| -  
<*custom_type_attributes_declaration*> ::= \\[ <*custom_type_attributes*> \\] | - | -  
<*custom_type_attributes*> ::= <*custom_type_attribute*> | <*custom_type_attributes*> , <*custom_type_attribute*> | - | -  
<*custom_type_attribute*> ::= full | lite | 自定义类型的属性，支持：
    * full
    * lite
| -  
<*enum_members_declaration*> ::= <*custom_type_attributes_declaration*>? <*enum_member_name*> <*enum_member_value*>? , | 枚举类型成员：
    * 自定义类型属性
    * 枚举成员名
    * 枚举成员值（可选）
| -  
<*enum_member_value*> ::= = <*number_value*> | 枚举成员值 | -  
<*custom_type_members_declaration*> ::= <*primitive_type_member*> | <*list_type_member*> | <*array_type_member*> | <*custom_type_member*> | 自定义类型成员，支持：
    * 基本类型
    * List容器类型
    * 数组类型
    * 自定义类型
| -  
<*primitive_type_member*> ::= <*custom_type_attributes_declaration*>? <*c_like_primitive_type*> <*custom_type_member_name*> ; | 基本类型成员：
    * 自定义类型属性
    * 数据类型
    * 自定义成员变量名
| -  
<*list_type_member*> ::= <*custom_type_attributes_declaration*>? <*custom_list_type*> <*custom_type_member_name*> ; | List容器类型成员：
    * 自定义类型属性
    * 数据类型
    * 自定义成员变量名
| -  
<*array_type_member*> ::= <*custom_type_attributes_declaration*>? <*custom_array_type*> <*custom_type_member_name*> ; | 数组类型成员：
    * 自定义类型属性
    * 数据类型
    * 自定义成员变量名
| -  
<*custom_type_member*> ::= <*custom_type_attributes_declaration*>? <*custom_type*> <*custom_type_member_name*> ; | 自定义类型成员：
    * 自定义类型属性
    * 数据类型
    * 自定义成员变量名
| -  
<*custom_list_type*> ::= List < <*custom_member_type*> > | 自定义类型中使用的List容器类型 | -  
<*custom_array_type*> ::= <*custom_member_type*> \\[ \\] | 自定义类型中使用的数组类型 | -  
<*custom_member_type*> ::= <*c_like_primitive_type*> | <*string_type*> | <*custom_type*> | 自定义成员类型：
    * 类C语言的基本类型
    * 字符串类型
    * 自定义类型
不支持接口类型、Map容器类型等 | -  
### Tokens | - | -  
<*package_name*> ::= <*identifier*> | 包名 | -  
<*custom_type_file_name*> ::= <*identifier*> | 自定义类型所在的文件名 | -  
<*namespace*> ::= <*identifier*> | <*namespace*> . <*identifier*> | 命名空间 | -  
<*sequenceable_class_name*> ::= <*identifier*> | sequenceable类名 | -  
<*interface_name*> ::= <*identifier*> | 接口名 | -  
<*method_name*> ::= <*identifier*> | 接口函数名 | -  
<*formal_parameter_name*> ::= <*identifier*> | 参数名 | -  
<*custom_type_name*> ::= <*identifier*> | 自定义类型名 | -  
<*enum_member_name*> ::= <*enum_letter*>+ | 枚举成员名 | -  
<*custom_type_member_name*> ::= <*identifier*> | 自定义类型成员名 | -  
### identifier | - | -  
<*identifier*> ::= <*letter*>\+ | <*letter_number*> | 标识符由字母和数字组成，第一个字符不能使用数字 | -  
<*letter*> ::= _ | <*upper_case*> | <*lower_case*> | 字符，包括：
    * 下滑线
    * 大写字母
    * 小写字母
| -  
<*letter_number*> ::= <*letter*>\+ | <*letter_number*> <*letter*> | <*letter_number*> <*number*> | - | -  
<*upper_case*> ::= A|B|C|D|E|F|G|H|I|J …… | - | -  
<*lower_case*> ::= a|b|c|d|e|f|g|h|i|j …… | - | -  
<*number*> ::= <*dec_number*> | - | -  
<*dec_number*> ::= <*oct_number*> | 8 | 9 | 十进制数字 | -  
<*oct_number*> ::= 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 八进制数字 | -  
<*number_value*> ::= <*hex_prefix*> <*hex_value*> | <*dec_value*> | 0 <*oct_value*> | 数值：枚举类型成员的值 | -  
<*hex_prefix*> ::= 0x | 0X | - | -  
<*hex_value*> ::= <*hex_number*>+ | - | -  
<*dec_value*> ::= <*dec_number*>+ | - | -  
<*oct_value*> ::= <*oct_number*>+ | - | -  
<*hex_number*> ::= <*dec_number*> | A | B | C | D | E | F | a | b | c | d | e | f | 十六进制数字 | -  
<*enum_letter*> ::= _ | <*upper_case*> | 枚举类型成名的命名，可以使用：
    * 下滑线
    * 大写字母
| -  
  
![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220808214628.32102518191913045137739243453471:50530808041136:2800:8F3398320B294C03B7CE2DC7B614D339C199EDAC101DB8EC5BA6F0B4CBDF0DBB.png?needInitFileName=true?needInitFileName=true)

本文档使用的规则如下：

尖括号 < > 内包含的为必选项；

竖线 | 表示在其左右两边任选一项，相当于"OR"的含义；

::= 是“被定义为”的含义；

? 操作符左边的符号是可选项（可以出现0到多次）；

\+ 1次或多次；

\\[或\\]是左右中括号字符本身。
