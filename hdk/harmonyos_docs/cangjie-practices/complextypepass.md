---
name: cangjie-practices/complextypepass
title: 跨C语言调用复杂参数传递
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-practices/complextypepass
nodePath: 实践 / 跨C语言调用复杂参数传递
---

# 跨C语言调用复杂参数传递

#### 概述

开发者为了提高程序运行效率，通常需要将一些运算量较大的内容放在C++环境中运行，因此经常需要进行仓颉与C++之间的数据传递。注意仓颉目前仅支持C格式的跨语言调用，所以需要在C++处标注extern "C"。本文以常见的四种数据类型：Array, Pointer, Struct, Function为例，向开发者介绍如何进行复杂参数的跨语言传递。

注意，本示例通过链接C++动态库的方式实现仓颉对C++的调用，这需要在cjpm.toml文件中进行如下设置：
    
    
    [target.aarch64-linux-ohos.ffi.c.entry]
      path = "./build/default/intermediates/cmake/default/obj/arm64-v8a"
    [target.x86_64-linux-ohos.ffi.c.entry]
      path = "./build/default/intermediates/cmake/default/obj/x86_64"

#### 场景案例

#### [h2]Struct类型数据交互

本节以简单的Struct传递场景为例，在仓颉侧输入一个Struct，传递到C++侧，再构造一个Struct，并返回仓颉侧。

**开发步骤**

  1. 在C++侧定义结构体，并编写相关测试函数，注意需要标注extern "C"。
         
         extern "C" {
         struct MyStruct {
             int x;
             int y;
         };
         
         int add(MyStruct a) { return a.x + a.y; }
         
         MyStruct newStruct(int x, int y) { return MyStruct{.x = x, .y = y}; }
         // ...
         }

  2. 在仓颉侧定义结构体，使用@C表示此结构体用于和C++交互；使用foreign关键字声明相应测试函数，注意C++侧int对应仓颉侧Int32。
         
         @C
         struct MyStruct {
             var x: Int32 = 0
             var y: Int32 = 0
             func toString(): String {
                 return "MyStruct { x: ${x}, y: ${y} }"
             }
         }
         
         foreign {
             func add(a: MyStruct): Int32
             func newStruct(x: Int32, y: Int32): MyStruct
         }
         // ...

  3. 在仓颉侧使用unsafe代码块调用相应的函数。
         
         // ...
         let result = unsafe { add(myStruct) }
         this.printStr = "passed to C, ${myStruct.x} + ${myStruct.y} = ${result}"
         // ...
         this.printStr = unsafe { newStruct(x, y) }.toString()




**实现效果：**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b3/v3/DRgIDp0qSYO1xgOzDkXrdw/zh-cn_image_0000002669560883.png?HW-CC-KV=V1&HW-CC-Date=20260908T090226Z&HW-CC-Expire=86400&HW-CC-Sign=E4B7F7F43B531C98EE4ABB4BD73AE7A84DD5BC1C068EF1D0AF49C51878002DF0) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e2/v3/9F9-ib76SlaTzOUkEZhnjA/zh-cn_image_0000002639680934.png?HW-CC-KV=V1&HW-CC-Date=20260908T090226Z&HW-CC-Expire=86400&HW-CC-Sign=EDAA0C95D8379EC762EAB8D7A441ACDF9E9D337D9E2DCE09A0CB27864F7BDC1B)  
---|---  
  
#### [h2]Pointer类型数据交互

本节以简单的Pointer传递场景为例，在C++侧构建Pointer，传递到仓颉侧，再将此Pointer传递到C++侧。

**开发步骤**

  1. 在C++侧定义包含Pointer类型的结构体与测试函数，注意需要标注extern "C"。 其中函数newList用于创建一个长度为size的链表；函数deleteList用于销毁以node为起始节点的链表。
         
         extern "C" {
         struct Node {
             int value;
             Node *next;
             Node(int value, Node *next) : value(value), next(next) {}
         };
         
         Node *newList(int size) {
             Node *head = new Node(0, nullptr);
             Node *now = head;
             for (int i = 1; i < size; i++) {
                 now->next = new Node(i, nullptr);
                 now = now->next;
             }
             return head;
         }
         
         int deleteList(Node *node) {
             Node *now = node;
             Node *next;
             int deleted = 0;
             while (now != nullptr) {
                 next = now->next;
                 delete now;
                 now = next;
                 deleted++;
             }
             return deleted;
         }
         }

  2. 在仓颉侧，定义与C++侧对应的结构体（其中toString方法是仓颉侧方法，用于打印整个链表），使用@C表示此结构体用于和C++交互；使用foreign关键字声明相应测试函数newList和deleteList。Node*在仓颉侧对应CPointer<Node>类型。
         
         @C
         struct Node {
             var value: Int32 = 0
             var next: CPointer<Node> = CPointer<Node>()
             func toString(): String {
                 return if (next.isNull()) {
                     value.toString()
                 } else {
                     "${value} -> ${unsafe { next.read() }.toString()}"
                 }
             }
         }
         
         foreign {
             func newList(size: Int32): CPointer<Node>
             func deleteList(list: CPointer<Node>): Int32
         }

  3. 在仓颉侧，使用unsafe代码块调用测试函数。
         
         // ...
         list = unsafe { newList(size) }
         let result = unsafe { list.read() }
         // ...
         this.printStr = if (!list.isNull()) {
             let r = "deleted last, size was: ${unsafe { deleteList(list) }}. "
             list = CPointer<Node>()
             r
         } else {
             "last is now a nullptr"
         }




**实现效果：**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9c/v3/vjWkQNQaSV6D5XHvmd8TEw/zh-cn_image_0000002639520990.png?HW-CC-KV=V1&HW-CC-Date=20260908T090226Z&HW-CC-Expire=86400&HW-CC-Sign=8D2B99E9A71C794D1EEC91B918F72298B5392642BD37A1E4C887C966CB8D0188) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/44/v3/RwEdS7rsTqSSTz1_b650FA/zh-cn_image_0000002669680997.png?HW-CC-KV=V1&HW-CC-Date=20260908T090226Z&HW-CC-Expire=86400&HW-CC-Sign=869FA23F5C5FBC6FCCB46F223BE95785897201FA47100A4576B84F88319A7CBC)  
---|---  
  
#### [h2]Array类型数据交互

Array类型的数据在仓颉侧对应VArray<Type, $Num>。只能从仓颉侧传入，需要在调用时添加inout关键字。

**开发步骤**

  1. 在C++侧定义测试函数，注意需要标注extern "C"。arrayToC函数入参为int类型数组并返回该数组的前3个元素之和。
         
         extern "C" {
         int arrayToC(int array[3]) { return array[0] + array[1] + array[2]; }
         }

  2. 在仓颉侧，使用unsafe代码块调用测试函数。int [3]类型在仓颉侧对应VArray<Int32, $3>类型。
         
         foreign {
             func arrayToC(array: VArray<Int32, $3>): Int32
         }
         // ...
         var varray: VArray<Int32, $3> = [cjArray[0], cjArray[1], cjArray[2]]
         this.printStr = "varray to C, the sum is ${unsafe { arrayToC(inout varray) }}"




**实现效果：**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f/v3/0b_ebg1DTd2EFeGx7tKw4w/zh-cn_image_0000002669560885.png?HW-CC-KV=V1&HW-CC-Date=20260908T090226Z&HW-CC-Expire=86400&HW-CC-Sign=5AAF06C4DE20A9B84DD8BA9C8104AE689BB36B84D1AE943327905A757665FBFF)

#### [h2]Function类型数据交互

Function类型的数据在仓颉侧对应 CFunc<Type>。 仓颉侧CFunc指可以被C语言代码调用的函数，有以下三种形式：

  1. @C修饰的foreign函数
  2. @C修饰的仓颉函数
  3. 类型为CFunc的lambda表达式，与普通的lambda表达式不同，CFunc lambda不能捕获变量。



**开发步骤**

  1. 在C++侧定义测试函数，注意需要标注extern "C"。其中functionToC函数从仓颉侧向C++侧传递了函数指针。functionFromC从C++侧返回了函数指针。int (*)(int, int)在仓颉侧对应类型为CFunc<(Int32, Int32) -> Int32>。
         
         int myAdd(int a, int b) {
             return a + b;
         }
         extern "C" {
         int functionToC(int x, int y, int (*f)(int, int)) { return f(x, y); }
         typedef int (*addFunc)(int, int);
         addFunc functionFromC() { return myAdd; }
         }

  2. 在仓颉侧，使用unsafe代码块调用测试函数。
         
         // ...
         let cFunc: CFunc<(Int32, Int32) -> Int32> = {
             x, y => x + y
         }
         this.printStr = "callback from C: sum is ${unsafe { functionToC(x, y, cFunc) }}"
         // ...
         this.printStr = "function from C: sum is ${unsafe { functionFromC()(x, y) }}"




**实现效果：**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/626fAbdiQ_aE7Zcb6cxIHg/zh-cn_image_0000002639680936.png?HW-CC-KV=V1&HW-CC-Date=20260908T090226Z&HW-CC-Expire=86400&HW-CC-Sign=9221FD5224C917689F4E7F5E8142E1B5CEB452C2F53C58B423C433E2022FD385) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/84/v3/iOlXj-PqRH-F921KYybxqg/zh-cn_image_0000002639520992.png?HW-CC-KV=V1&HW-CC-Date=20260908T090226Z&HW-CC-Expire=86400&HW-CC-Sign=C0F5DE8C3E2137FDF376B6CDAAA090AE11B2ED197D1AEF34739252086AA0746C)  
---|---  
  
#### 示例代码

[跨C语言调用复杂参数传递示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260728183054.66970644386081601971103323083626:20260909170226:2800:EE298F5D5AA5A13AAFA9D020FFA25D5F9B4B808489C8A4E679E2CD704ADE2C0E.zip?needInitFileName=true)
