---
name: document/cn/HMSCore-References/instreamadloader-builder-0000001058222271
title: InstreamAdLoader.Builder
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/instreamadloader-builder-0000001058222271
---

# InstreamAdLoader.Builder

|Class Info|
|:--------------------------------------------------------|
|public static class InstreamAdLoader.Builder 贴片广告加载器的构造器。|

#### Public Constructor Summary

|Constructor Name|
|:--------------------------------------------------------------------------|
|[Builder](#section22921117771)(Context context, String adId) 生成贴片广告加载器构造方法。|

#### Public Method Summary

|Qualifier and Type|Class Name and Description|
|:--------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[InstreamAdLoader](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/instreamadloader-0000001058104175)|[build](#section12436202622312)() 构造InstreamAdLoader对象。|
|InstreamAdLoader.Builder|[setInstreamAdLoadListener](#section19456172215232)([InstreamAdLoadListener](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/instreamadloadlistener-0000001057956181) adLoadListener) 设置贴片广告加载监听器。|
|InstreamAdLoader.Builder|[setMaxCount](#section521414184231)(int maxCount) 设置贴片广告最大数量。|
|InstreamAdLoader.Builder|[setTotalDuration](#section39531130239)(int totalDuration) 设置贴片广告最大时长。|

#### Public Constructors

#### Builder

|Constructor|
|:----------------------------------------------------------|
|public Builder(Context context, String adId) 生成贴片广告加载器构造方法。|

Parameters  

|Name|Description|
|:------|:----------|
|context|上下文。|
|adId|广告位ID。|

#### Public Methods

#### build

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [InstreamAdLoader](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/instreamadloader-0000001058104175) build() 构建[InstreamAdLoader](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/instreamadloader-0000001058104175)对象。|

Returns  

|Type|Description|
|:--------------------------------------------------------------------------------------------------------------------|:----------|
|[InstreamAdLoader](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/instreamadloader-0000001058104175)|贴片广告加载器。|

#### setInstreamAdLoadListener

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public InstreamAdLoader.Builder setInstreamAdLoadListener([InstreamAdLoadListener](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/instreamadloadlistener-0000001057956181) adLoadListener) 设置贴片广告加载监听器。|

Parameters  

|Name|Description|
|:-------------|:----------|
|adLoadListener|贴片广告加载监听器。|

Returns  

|Type|Description|
|:-----------------------|:----------|
|InstreamAdLoader.Builder|当前对象。|

#### setMaxCount

|Method|
|:--------------------------------------------------------------------|
|public InstreamAdLoader.Builder setMaxCount(int maxCount) 设置贴片广告最大数量。|

Parameters  

|Name|Description|
|:-------|:----------|
|maxCount|贴片广告最大数量。|

Returns  

|Type|Description|
|:-----------------------|:----------|
|InstreamAdLoader.Builder|当前对象。|

#### setTotalDuration

|Method|
|:------------------------------------------------------------------------------|
|public InstreamAdLoader.Builder setTotalDuration(int totalDuration) 设置贴片广告最大时长。|

Parameters  

|Name|Description|
|:------------|:-------------|
|totalDuration|贴片广告最大时长，单位：秒。|

Returns  

|Type|Description|
|:-----------------------|:----------|
|InstreamAdLoader.Builder|当前对象。|

