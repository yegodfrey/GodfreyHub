---
name: document/cn/graphics-References/dis-auto-enable-0000001050421651
title: dispatch_autostat_enable
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/dis-auto-enable-0000001050421651
---

# dispatch_autostat_enable

## 功能描述

打开multithread-lib自动统计的功能。此功能通过接受JNI环境指针，反射获得Java运行环境统计multithread-lib的使用情况和错误情况。自动统计的信息将反馈到华为。

如果在已经使能的情况下继续调用此接口，则不产生作用。建议在应用第一次使用multithread-lib的其它接口前，调用此接口使能自动统计功能。如果应用场景中无法获得JNI环境，那么请不要使用此接口。

## 函数原型

```screen
void dispatch_autostat_enable(JNIEnv *env);
```

## 参数

|名称|类型|描述|
|:--|:-------|:---------------------------------------------------------|
|env|JNIEnv *|Android Native代码中获得的JNIEnv *参数，用于此函数内部获得Java虚拟机并调用Java中的类。|

## 返回

|类型|描述|
|:---|:-|
|void|-|

