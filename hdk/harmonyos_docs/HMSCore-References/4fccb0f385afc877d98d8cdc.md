---
name: document/cn/HMSCore-References/vastapplication-0000001150529876
title: VastApplication
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/vastapplication-0000001150529876
---

# VastApplication

|Class Info|
|:----------------------------------|
|public class VastApplication 全局上下文。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:-------------------------------------------------------------------|
|void|[init](#section23660491326)(Context context, boolean test) 初始化全局上下文。|
|Context|[getContext](#section1198912219171)() 获取当前页面的上下文。|

#### Public Methods

#### init

|Method|
|:---------------------------------------------------------------|
|public static void init(Context context, boolean test) 初始化全局上下文。|

Parameters  

|Name|Description|
|:------|:--------------------------|
|context|页面上下文。|
|test|是否为测试广告： * true：是 * false：否|

#### getContext

|Method|
|:---------------------------------------------|
|public static Context getContext() 获取当前页面的上下文。|

Returns  

|Type|Description|
|:------|:----------|
|Context|当前页面的上下文。|

