---
name: document/cn/hiai-References/mlanalyzer-mltransactor-0000001159656216
title: MLAnalyzer.MLTransactor
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/mlanalyzer-mltransactor-0000001159656216
---

# MLAnalyzer.MLTransactor

|Interface Info|
|:-----------------------------------------------------------------------------|
|com.huawei.hms.mlsdk.common.MLAnalyzer.MLTransactor 检测结果处理器需要实现的通用接口，用于处理检测结果。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void|[destroy](#section0896145817611)() 回收处理器使用的资源。|
|void|[transactResult](#section7411382071)([MLAnalyzer.Result](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlanalyzerresult-0000001050169373)\<T\> result) 接收分析器封装的检测结果（Analyzer.Result），对结果进行处理。|

#### Public Methods

#### destroy()

|Method|
|:--------------------------------|
|public void destroy() 回收处理器使用的资源。|

#### transactResult(MLAnalyzer.Result\<T\> result)

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void transactResult([MLAnalyzer.Result](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlanalyzerresult-0000001050169373)\<T\> result) 接收分析器封装的检测结果（Analyzer.Result），对结果进行处理。|

Parameters  

|Name|Description|
|:-----|:----------|
|result|检测结果。|

