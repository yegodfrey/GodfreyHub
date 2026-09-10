---
name: cangjie-guides/cj-gwpasan-detect
title: 使用GWP-Asan检测内存错误
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-gwpasan-detect
nodePath: 编写与调试应用 / 日志与故障分析 / 故障分析 / 使用GWP-Asan检测内存错误
---

# 使用GWP-Asan检测内存错误

在仓颉与C代码进行互操作的过程中，C代码可能对仓颉堆内存错误操作导致非法行为。当前在系统上定位内存的一些非法行为时，可以开启Asan版本来定位此类问题。然而，Asan开启会对性能和内存产生较大影响，因此不适合部署到正式生产环境中。GWP-Asan可以在性能影响很小的情况下检查部分内存使用的非法行为，因此可以部署到正式环境中，避免在正式环境中出现内存问题时再使用Asan版本进行二次复现。

#### 原理概述

仓颉GWP-Asan提供了一种内存安全检测功能。它可以在仓颉程序运行过程中检测代码是否存在仓颉堆内存安全问题。GWP-Asan通过对仓颉语言标准库提供的acquireArrayRawData和releaseArrayRawData接口（接口详情请参见《仓颉编程语言库API文档》）进行采样，并记录对比采样对象前后内存的Canary数据，从而检测仓颉与C语言互操作过程中是否出现了仓颉堆内存安全问题。

仓颉GWP-Asan是一种基于采样的检测工具，可以通过设置不同的值来调整采样频率，以平衡性能影响和检测覆盖率。在默认或更低采样频率下，CPU性能损失和额外的内存占用极低。

#### 使用约束

  * ASan、GWP-Asan不能同时启用，只能启用其中一个。
  * 仓颉GWP-Asan是一种基于采样的内存检查工具，内存越界问题可能无法完全检出。
  * 仓颉GWP-Asan对仓颉堆内存的越界检测范围有限，无法检测内存读越界访问，仅能检测部分写越界访问：向前写越界8字节以内；向后写越界到尾部的填充区域（根据数组对象长度的不同，填充区域可能为0-7字节）。



#### 使能GWP-Asan

使能仓颉GWP-Asan功能的操作步骤如下：

  1. 在工程目录下的AppScope/app.json5文件中添加仓颉GWP-Asan配置开关。将环境变量 cjEnableGwpAsan 设置为 1、true 或者 TRUE 。

配置参考如下：
         
         "appEnvironments": [
           {
             "name": "cjEnableGwpAsan",
             "value": "true"
           }
         ]

  2. 在仓颉GWP-Asan内存安全检测功能开启状态下，通过环境变量 cjGwpAsanSampleRate 设置采样频率。cjGwpAsanSampleRate 支持设置为32位整形数值范围内的正整数，即 $(0, 2^{31} - 1]$ 。默认值为5000，即每5000次acquireArrayRawData接口调用，进行一次采样。配置参考如下：
         
         "appEnvironments": [
           {
             "name": "cjEnableGwpAsan",
             "value": "true"
           },
           {
             "name": "cjGwpAsanSampleRate",
             "value": "1000",
           }
         ]




![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c5/v3/Icwx9rNvSWayC211poYzig/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=998E09672D962AB4EB5C9657FF61D5B79D583B8499DB036E5FE9EDDD92CCC482)

仓颉GWP-Asan内存安全检测中，采样会影响性能。采样率越高，对性能影响越大，能检出更多的问题；采样率越低，其对性能影响越小，能检出更少的问题。请根据实际情况设置采样率。

使能仓颉GWP-Asan功能，采样频率为1000的配置参考为：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/15/v3/yjcnoNaiQteR2QfoUkaxjw/zh-cn_image_0000002713399052.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=A639CDD46137A005F06DA854C01D709F6BF3E93635028C6E96BA3D0994D1F15F)

#### 仓颉GWP-Asan异常检测类型

**堆内存写越界**

堆内存写越界指的是，指针实际访问的内存长度超过了数组申请的长度，造成仓颉堆内存写越界。

  * 向前越界

向前越界数组时，runtime会报告Head canary检测失败，使用 array[-1] 表示，例如如下代码片段：
        
        unsafe {
              let array = Array<UInt8>(4, item: 0)
              let cp = acquireArrayRawData(array)
        
              // array数组实际可访问的范围是[0, 4)，而下述写操作访问了第-2个字节，导致仓颉堆内存向前溢出2个字节。错误报告中使用array[-1]表示该向前越界行为。
              cp.pointer.write(-2, 1)
              releaseArrayRawData(array)
          }

对应的错误报告如下：
        
        2025-05-22 10:57:13.432786 41217 F Gwp-Asan sanity check failed on raw array addr 0x7f7c887368
        2025-05-22 10:57:13.432863 41217 F Head canary (array[-1]) mismatch: expect: 0x2, actual: 0x200000000000002
        2025-05-22 10:57:13.432878 41217 F Gwp-Asan Aborted.

  * 向后越界

向后越界数组时，runtime会报告Tail canary检测失败，并给出相对该数组（array）的位置，例如如下代码片段：
        
        unsafe {
            let array = Array<UInt8>(4, item: 0)
            let cp = acquireArrayRawData(array)
        
            // array数组实际可访问的范围是[0, 4)，而下述写操作访问了第6个字节，导致仓颉堆内存向前溢出2个字节。错误报告中使用array[size+1]表示该向后越界行为。
            cp.pointer.write(5, 1)
            releaseArrayRawData(array)
        }

对应的错误报告如下：
        
        2025-05-22 10:53:09.564580 37872 F Gwp-Asan sanity check failed on raw array addr 0x7f6278a368
        2025-05-22 10:53:09.564761 37872 F Tail canary (array[size+1]) mismatch: expect: 0x6, actual: 0x2
        2025-05-22 10:53:09.564788 37872 F Gwp-Asan Aborted.



