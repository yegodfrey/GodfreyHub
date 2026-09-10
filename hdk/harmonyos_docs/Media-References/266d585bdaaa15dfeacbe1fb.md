---
name: document/cn/Media-References/videoai-hveaibodyseg-0000001468047037
title: HVEAIBodySeg
uri: https://developer.huawei.com/consumer/cn/doc/Media-References/videoai-hveaibodyseg-0000001468047037
---

# HVEAIBodySeg

|Class Info|
|:------------------------------------------------------------------------------------------------------------|
|public class HVEAIBodySeg 头部分割算法类。 说明： 1. 支持图片资源，以1080px为主，兼顾4K和720px。 2. 对于视频资源，您需自行处理视频编解码调用图像分割接口生成分割后的视频。|

#### Public Constructor Summary

|Constructor Name|
|:---------------------|
|HVEAIBodySeg() 默认构造方法。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void|[initEngine](#section14365123110151)([HVEAIInitialCallback](https://developer.huawei.com/consumer/cn/doc/Media-References/videoai-hveaiinitialcallback-0000001338949201) callback) 初始化头部分割AI特效算法引擎。|
|void|[process](#section10489174011357)(Bitmap bitmap, [HVEAIProcessCallback](https://developer.huawei.com/consumer/cn/doc/Media-References/videoai-hveaiprocesscallback-0000001293872266)\<byte\[\]\> processCallback) 对图片进行头部分割。|
|void|[releaseEngine](#section087534813512)() 释放头部分割AI特效算法引擎。|

#### Public Constructors

#### HVEAIBodySeg

|Method|
|:--------------------------------|
|public HVEAIBodySeg() 头部分割默认构造方法。|

#### Public Methods

#### initEngine

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void initEngine([HVEAIInitialCallback](https://developer.huawei.com/consumer/cn/doc/Media-References/videoai-hveaiinitialcallback-0000001338949201) callback) 初始化头部分割AI特效算法引擎。|

Parameters  

|Name|Description|
|:-------|:-------------|
|callback|初始化AI特效算法引擎回调。|

#### process

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void process(Bitmap bitmap, [HVEAIProcessCallback](https://developer.huawei.com/consumer/cn/doc/Media-References/videoai-hveaiprocesscallback-0000001293872266)\<byte\[\]\> processCallback) 对图片进行头部分割，返回大小为480\*480的mask数组。|

Parameters  

|Name|Description|
|:--------------|:----------|
|bitmap|需要分割的图片。|
|processCallback|处理回调。|

#### releaseEngine

|Method|
|:------------------------------------------|
|public void releaseEngine() 释放头部分割AI特效算法引擎。|

