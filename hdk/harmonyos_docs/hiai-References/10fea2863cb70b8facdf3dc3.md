---
name: document/cn/hiai-References/mlprominenttransactor-0000001050167434
title: MLProminentTransactor
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/mlprominenttransactor-0000001050167434
---

# MLProminentTransactor

|Class Info|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
|com.huawei.hms.mlsdk.common.MLProminentTransactor 特定目标检测结果处理器抽象类，实现以下功能： * 设定需要跟踪的目标，目标在连续帧中状态发生变化时，自动调用目标跟踪器中的对应处理逻辑。 * 设定连续帧对同一目标的匹配策略，可以设置最大面积，最宽，最高等匹配策略。|

#### Public Constructor Summary

|Constructor Name|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[MLProminentTransactor](#section1032885214201)([MLAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlanalyzer-0000001050169371)\<T\> analyzer, [MLResultTrailer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlresulttrailer-0000001050169389)\<T\> trailer) 实例化ConcentrateTransactor对象。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|boolean|[compare](#section151528130213)(Object target1, Object target2) 设定连续帧对同一分析对象的匹配策略。|
|void|[destroy](#section15513635202116)() 回收处理器使用的资源，调用trailer的completeCallback()方法。|
|int|[getSpecificTarget](#section472964292119)([MLAnalyzer.Result](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlanalyzerresult-0000001050169373)\<T\> result) 在多个分析对象中识别特定特征的对象。|
|void|[transactResult](#section1825724142212)([MLAnalyzer.Result](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlanalyzerresult-0000001050169373)\<T\> result) 对分析器得到的结果进行筛选，识别策略匹配的结果，把匹配结果传递给Trailer中对应方法做进一步处理。|

#### Protected Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:---------------------------------------------------------------------------------------------------------------------|
|void|[setMaxFrameLostCount](#section1487222312225)(int maxFrameLostCount) 设置特定特征对象在视频流中消失的最大帧数，用于推断分析器正在处理的一系列帧中特定特征对象是否消失。|

#### Public Constructors

#### MLProminentTransactor(MLAnalyzer\<T\> analyzer, MLResultTrailer\<T\> trailer)

|Constructor|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public MLProminentTransactor([MLAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlanalyzer-0000001050169371)\<T\> analyzer, [MLResultTrailer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlresulttrailer-0000001050169389)\<T\> trailer) 实例化ConcentrateTransactor对象。|

Parameters  

|Name|Description|
|:-------|:---------------|
|analyzer|分析器（analyzer）实例。|
|trailer|追踪器（trailer）实例。|

#### Public Methods

#### compare(Object target1, Object target2)

|Method|
|:-----------------------------------------------------------------------------------------------------|
|public boolean compare(Object target1, Object target2) 设定连续帧对同一分析对象的匹配策略，默认返回false，开发者可重载此类，实现自己的匹配策略。|

Parameters  

|Name|Description|
|:------|:----------|
|target1|分析对象1。|
|target2|分析对象2。|

Returns  

|Type|Description|
|:------|:-------------------------------|
|boolean|* true：分析对象为同一个。 * false：分析对象不同。|

#### destroy()

|Method|
|:---------------------------------------------------------------|
|public void destroy() 回收处理器使用的资源，调用trailer的completeCallback()方法。|

#### getSpecificTarget(MLAnalyzer.Result\<T\> result)

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public abstract int getSpecificTarget([MLAnalyzer.Result](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlanalyzerresult-0000001050169373)\<T\> result) 在多个分析对象中识别特定特征的对象。|

Parameters  

|Name|Description|
|:-----|:----------|
|result|分析器检测结果。|

Returns  

|Type|Description|
|:---|:-----------------|
|int|特定特征对象在检测结果列表中的次序。|

#### transactResult(MLAnalyzer.Result\<T\> result)

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void transactResult([MLAnalyzer.Result](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlanalyzerresult-0000001050169373)\<T\> result) 对分析器得到的结果进行筛选，识别策略匹配的结果，把匹配结果传递给Trailer中对应方法做进一步处理。|

Parameters  

|Name|Description|
|:-----|:----------|
|result|分析器检测结果。|

#### Protected Methods

#### setMaxFrameLostCount(int maxFrameLostCount)

|Method|
|:-----------------------------------------------------------------------------------------------------------|
|protected void setMaxFrameLostCount(int maxFrameLostCount) 设置特定特征对象在视频流中消失的最大帧数，用于推断分析器正在处理的一系列帧中特定特征对象是否消失。|

Parameters  

|Name|Description|
|:----------------|:----------|
|maxFrameLostCount|最大允许间隔帧数。|

