---
name: cangjie-references/cj-binary_package_overview
title: std.binary
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_overview
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.binary
---

# std.binary

#### 功能介绍

当前 binary 包提供了如下功能：

  * 仓颉数据类型和二进制字节序列间的互相转换接口，分为大端序和小端序两种转换类型。
  * 仓颉数据类型自身大小端序转换的接口。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3f/v3/rE5zS57TSZOdqnjB0uxvcw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090200Z&HW-CC-Expire=86400&HW-CC-Sign=77BA61C88215DB8370AEA40F9F05B1E440596E0A8559786DF85923108E856282)

  * 一般来说，多字节对象被存储为连续的字节序列。存储器或数字通信链路中，字节的排列顺序称为端序（Endianness）。端序又称字节顺序或者尾序。
  * 字节有两种排列方式：将一个多位数的低位存储在内存的低地址端，高位存储在内存的高地址端，称为小端序（Little-endian）；反之称为大端序（Big-endian）。



#### API 列表

#### [h2]接口

接口名 | 功能  
---|---  
[BigEndianOrder<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-bigendianordert) | 大端序字节序列转换接口。  
[LittleEndianOrder<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-littleendianordert) | 小端序字节序列转换接口。  
[SwapEndianOrder<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-swapendianordert) | 反转字节顺序接口。  
  
  * **[接口](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces)**  



