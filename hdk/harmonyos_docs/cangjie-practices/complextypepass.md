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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b3/v3/DRgIDp0qSYO1xgOzDkXrdw/zh-cn_image_0000002669560883.png?HW-CC-KV=V1&HW-CC-Date=20260921T085428Z&HW-CC-Expire=86400&HW-CC-Sign=6B124A4430BF2D044E37DF9A7E2AE362998834FCC4011B286F8D556450EC49DA) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e2/v3/9F9-ib76SlaTzOUkEZhnjA/zh-cn_image_0000002639680934.png?HW-CC-KV=V1&HW-CC-Date=20260921T085428Z&HW-CC-Expire=86400&HW-CC-Sign=1E2AF4F29148AF6C978C1892C5F71CD56BFAA26BCAD654E0522543137582E4E2)  
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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9c/v3/vjWkQNQaSV6D5XHvmd8TEw/zh-cn_image_0000002639520990.png?HW-CC-KV=V1&HW-CC-Date=20260921T085428Z&HW-CC-Expire=86400&HW-CC-Sign=DBF3487ACBF3BC7DB6A0F56CD7CBBC2E5D16AE025D0A2EAE1A1277A041B35309) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/44/v3/RwEdS7rsTqSSTz1_b650FA/zh-cn_image_0000002669680997.png?HW-CC-KV=V1&HW-CC-Date=20260921T085428Z&HW-CC-Expire=86400&HW-CC-Sign=65BA1BAF1A3692DC9514DA0BEEDD1DA27E385205F5B4EA39BA0D171D91A80A9A)  
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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f/v3/0b_ebg1DTd2EFeGx7tKw4w/zh-cn_image_0000002669560885.png?HW-CC-KV=V1&HW-CC-Date=20260921T085428Z&HW-CC-Expire=86400&HW-CC-Sign=579007F585C6D940E38A395E23AE510991DD9FD22CCCBA641D375D7984C11494)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/626fAbdiQ_aE7Zcb6cxIHg/zh-cn_image_0000002639680936.png?HW-CC-KV=V1&HW-CC-Date=20260921T085428Z&HW-CC-Expire=86400&HW-CC-Sign=AC5471DDFCEA2284E3C0FFEBD59138DAC8F3F5125308AEF231FC0EDC2C456F9D) | ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/84/v3/iOlXj-PqRH-F921KYybxqg/zh-cn_image_0000002639520992.png?HW-CC-KV=V1&HW-CC-Date=20260921T085428Z&HW-CC-Expire=86400&HW-CC-Sign=B1D27B701AC34B5126252601F4CE8FB4A38DD0DD952A05FB35D3C30E3CDC483A)  
---|---  
  
#### 示例代码

[跨C语言调用复杂参数传递示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260728183054.66970644386081601971103323083626:20260922165428:2800:AB69A723A947354C569CE5A99726AE8BFCCBD58D194EAEE1E7CE3F7D34730022.zip?needInitFileName=true)
