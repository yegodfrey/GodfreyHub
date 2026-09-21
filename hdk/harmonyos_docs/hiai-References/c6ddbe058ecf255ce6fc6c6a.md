---
name: document/cn/hiai-References/mlsdk-mlanalyzerfactory-0000001264474532
title: MLAnalyzerFactory
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/mlsdk-mlanalyzerfactory-0000001264474532
---

# MLAnalyzerFactory

|Class Info|
|:------------------------------------------------------------------------------------|
|com.huawei.hms.mlsdk.MLAnalyzerFactory 检测器工厂类，负责创建各种类型的检测器，内置默认的检测器配置，也允许指定不同类型检测器配置。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[MLFaceAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlfaceanalyzer-0000001050167440)|[getFaceAnalyzer](#section1160820221105)([MLFaceAnalyzerSetting](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlfaceanalyzersetting-0000001050169395) setting) 创建人脸识别分析器实例。|
|[MLFaceAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlfaceanalyzer-0000001050167440)|[getFaceAnalyzer](#section8744843309)() 按默认配置创建人脸识别分析器实例。|
|[MLImageSegmentationAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlimagesegmentationanalyzer-0000001050169515)|[getImageSegmentationAnalyzer](#section173913516016)([MLImageSegmentationSetting](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlimagesegmentationanalyzers-0000001050167564) setting) 按配置设置端侧图像分割分析器。|
|[MLImageSegmentationAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlimagesegmentationanalyzer-0000001050169515)|[getImageSegmentationAnalyzer](#section1319329812)() 按默认配置设置端侧图像分割分析器。|
|static [MLAnalyzerFactory](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlsdk-mlanalyzerfactory-0000001264474532)|[getInstance](#section66574487313)() 获取当前应用的分析器工厂实例。|
|static [MLAnalyzerFactory](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlsdk-mlanalyzerfactory-0000001264474532)|[getInstance](#section498551012516)([MLApplication](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlapplication-0000001050167420) application) 获取指定应用的分析器工厂实例。|
|[MLImageClassificationAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/imageclassificationanalyzer-0000001050167514)|[getLocalImageClassificationAnalyzer](#section3545151513574)([MLLocalClassificationAnalyzerSetting](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/localclassificationanalyzersetting-0000001050167516) setting) 创建端侧图片分类分析器实例。|
|[MLImageClassificationAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/imageclassificationanalyzer-0000001050167514)|[getLocalImageClassificationAnalyzer](#section53731854165718)() 按默认配置创建端侧图片分类分析器实例。|
|[MLObjectAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlobjectanalyzer-0000001050169461)|[getLocalObjectAnalyzer](#section10803114015816)([MLObjectAnalyzerSetting](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlobjectonalyzersetting-0000001050167508) setting) 创建端侧对象分析器实例。|
|[MLObjectAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlobjectanalyzer-0000001050169461)|[getLocalObjectAnalyzer](#section1316552918594)() 按默认配置创建端侧对象分析器实例。|
|[MLTextAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mltextanalyzer-0000001050167460)|[getLocalTextAnalyzer](#section1297517606)() 按默认配置创建端侧文本分析器实例。|
|[MLTextAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mltextanalyzer-0000001050167460)|[getLocalTextAnalyzer](#section2015275018016)([MLLocalTextSetting](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mllocaltextsetting-0000001050167452) setting) 创建端侧文本分析器实例。|
|[MLDocumentAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mldocumentanalyzer-0000001050167474)|[getRemoteDocumentAnalyzer](#section859620159110)([MLDocumentSetting](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mldocumentsetting-0000001050169429) setting) 创建云侧文档分析器实例。|
|[MLDocumentAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mldocumentanalyzer-0000001050167474)|[getRemoteDocumentAnalyzer](#section10939185119116)() 按默认配置创建云侧文档分析器实例。|
|[MLImageClassificationAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/imageclassificationanalyzer-0000001050167514)|[getRemoteImageClassificationAnalyzer](#section58351626422)([MLRemoteClassificationAnalyzerSetting](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremoteclassificationanalyzers-0000001050167518) setting) 创建云侧图片分类分析器实例。|
|[MLImageClassificationAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/imageclassificationanalyzer-0000001050167514)|[getRemoteImageClassificationAnalyzer](#section1371521531)() 按默认配置创建云侧图片分类分析器实例。|
|[MLRemoteLandmarkAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremotelandmarkanalyzer-0000001050167524)|[getRemoteLandmarkAnalyzer](#section179918348314)() 按默认配置创建地标分析器实例。|
|[MLRemoteLandmarkAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremotelandmarkanalyzer-0000001050167524)|[getRemoteLandmarkAnalyzer](#section1884962410)([MLRemoteLandmarkAnalyzerSetting](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremotelandmarkanalyzers-0000001050169479) setting) 创建地标分析器实例。|
|[MLRemoteProductVisionSearchAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremoteproductvisionsearchanalyzer-0000001050167554)|[getRemoteProductVisionSearchAnalyzer](#section9343534545)([MLRemoteProductVisionSearchAnalyzerSetting](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremoteproductvisionsearchanalyzers-0000001050169509) setting) 创建云侧拍照购分析器实例。|
|[MLTextAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mltextanalyzer-0000001050167460)|[getRemoteTextAnalyzer](#section1213252758)() 按默认配置创建云侧文本分析器实例。|
|[MLTextAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mltextanalyzer-0000001050167460)|[getRemoteTextAnalyzer](#section64006157619)([MLRemoteTextSetting](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremotetextsetting-0000001050167454) setting) 创建云侧文本分析器实例。|
|boolean|[isStatisticsAllowed](#section108731150166)() 判断是否允许统计当前应用信息。|

## Public Methods

### getFaceAnalyzer(MLFaceAnalyzerSetting setting)

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLFaceAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlfaceanalyzer-0000001050167440) getFaceAnalyzer([MLFaceAnalyzerSetting](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlfaceanalyzersetting-0000001050169395) setting) 创建人脸识别分析器实例。|

**Parameters**

|Name|Description|
|:------|:----------|
|setting|人脸分析器配置。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------|:----------|
|[MLFaceAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlfaceanalyzer-0000001050167440)|人脸分析器实例。|

### getFaceAnalyzer()

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLFaceAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlfaceanalyzer-0000001050167440) getFaceAnalyzer() 按默认配置创建人脸识别分析器实例。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------|:----------|
|[MLFaceAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlfaceanalyzer-0000001050167440)|人脸识别分析器实例。|

### getImageSegmentationAnalyzer(MLImageSegmentationSetting setting)

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLImageSegmentationAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlimagesegmentationanalyzer-0000001050169515) getImageSegmentationAnalyzer([MLImageSegmentationSetting](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlimagesegmentationanalyzers-0000001050167564) setting) 按配置设置端侧图像分割分析器。|

**Parameters**

|Name|Description|
|:------|:----------|
|setting|图像分割分析器配置。|

**Returns**

|Type|Description|
|:---------------------------------------------------------------------------------------------------------------------------------------------------|:-----------|
|[MLImageSegmentationAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlimagesegmentationanalyzer-0000001050169515)|端侧图像分割分析器实例。|

### getImageSegmentationAnalyzer()

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLImageSegmentationAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlimagesegmentationanalyzer-0000001050169515) getImageSegmentationAnalyzer() 按默认配置设置端侧图像分割分析器。|

**Returns**

|Type|Description|
|:---------------------------------------------------------------------------------------------------------------------------------------------------|:---------------|
|[MLImageSegmentationAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlimagesegmentationanalyzer-0000001050169515)|端侧默认配置图像分割分析器实例。|

### getInstance()

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static [MLAnalyzerFactory](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlsdk-mlanalyzerfactory-0000001264474532) getInstance() 获取当前应用的分析器工厂实例。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------------------|:--------------|
|[MLAnalyzerFactory](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlsdk-mlanalyzerfactory-0000001264474532)|返回当前应用的分析器工厂实例。|

### getInstance(MLApplication application)

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static [MLAnalyzerFactory](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlsdk-mlanalyzerfactory-0000001264474532) getInstance([MLApplication](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlapplication-0000001050167420) application) 获取指定应用的分析器工厂实例。|

**Parameters**

|Name|Description|
|:----------|:----------|
|application|指定应用。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------------------|:--------------|
|[MLAnalyzerFactory](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlsdk-mlanalyzerfactory-0000001264474532)|返回指定应用的分析器工厂实例。|

### getLocalImageClassificationAnalyzer(MLLocalClassificationAnalyzerSetting setting)

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLImageClassificationAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/imageclassificationanalyzer-0000001050167514) getLocalImageClassificationAnalyzer([MLLocalClassificationAnalyzerSetting](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/localclassificationanalyzersetting-0000001050167516) setting) 创建端侧图片分类分析器实例。|

**Parameters**

|Name|Description|
|:------|:----------|
|setting|图片分类分析器配置。|

**Returns**

|Type|Description|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:-----------|
|[MLImageClassificationAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/imageclassificationanalyzer-0000001050167514)|端侧图片分类分析器实例。|

### getLocalImageClassificationAnalyzer()

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLImageClassificationAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/imageclassificationanalyzer-0000001050167514) getLocalImageClassificationAnalyzer() 按默认配置创建端侧图片分类分析器实例。|

**Returns**

|Type|Description|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:-----------|
|[MLImageClassificationAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/imageclassificationanalyzer-0000001050167514)|端侧图片分类分析器实例。|

### getLocalObjectAnalyzer(MLObjectAnalyzerSetting setting)

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLObjectAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlobjectanalyzer-0000001050169461) getLocalObjectAnalyzer([MLObjectAnalyzerSetting](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlobjectonalyzersetting-0000001050167508) setting) 创建端侧对象分析器实例。|

**Parameters**

|Name|Description|
|:------|:----------|
|setting|对象分析器配置。|

**Returns**

|Type|Description|
|:-----------------------------------------------------------------------------------------------------------------------------|:----------|
|[MLObjectAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlobjectanalyzer-0000001050169461)|端侧对象分析器实例。|

### getLocalObjectAnalyzer()

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLObjectAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlobjectanalyzer-0000001050169461) getLocalObjectAnalyzer() 按默认配置创建端侧对象分析器实例。|

**Returns**

|Type|Description|
|:-----------------------------------------------------------------------------------------------------------------------------|:----------|
|[MLObjectAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlobjectanalyzer-0000001050169461)|端侧对象分析器实例。|

### getLocalTextAnalyzer()

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLTextAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mltextanalyzer-0000001050167460) getLocalTextAnalyzer() 按默认配置创建端侧文本分析器实例。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------|:----------|
|[MLTextAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mltextanalyzer-0000001050167460)|端侧文本分析器实例。|

### getLocalTextAnalyzer(MLLocalTextSetting setting)

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLTextAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mltextanalyzer-0000001050167460) getLocalTextAnalyzer([MLLocalTextSetting](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mllocaltextsetting-0000001050167452) setting) 创建端侧文本分析器实例。|

**Parameters**

|Name|Description|
|:------|:----------|
|setting|文本分析器配置。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------|:----------|
|[MLTextAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mltextanalyzer-0000001050167460)|端侧文本分析器实例。|

### getRemoteDocumentAnalyzer(MLDocumentSetting setting)

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLDocumentAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mldocumentanalyzer-0000001050167474) getRemoteDocumentAnalyzer([MLDocumentSetting](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mldocumentsetting-0000001050169429) setting) 创建云侧文档分析器实例。|

**Parameters**

|Name|Description|
|:------|:----------|
|setting|文档分析器配置。|

**Returns**

|Type|Description|
|:---------------------------------------------------------------------------------------------------------------------------------|:----------|
|[MLDocumentAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mldocumentanalyzer-0000001050167474)|云侧文档分析器实例。|

### getRemoteDocumentAnalyzer()

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLDocumentAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mldocumentanalyzer-0000001050167474) getRemoteDocumentAnalyzer() 按默认配置创建云侧文档分析器实例。|

**Returns**

|Type|Description|
|:---------------------------------------------------------------------------------------------------------------------------------|:----------|
|[MLDocumentAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mldocumentanalyzer-0000001050167474)|云侧文档分析器实例。|

### getRemoteImageClassificationAnalyzer(MLRemoteClassificationAnalyzerSetting setting)

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLImageClassificationAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/imageclassificationanalyzer-0000001050167514) getRemoteImageClassificationAnalyzer([MLRemoteClassificationAnalyzerSetting](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremoteclassificationanalyzers-0000001050167518) setting) 创建云侧图片分类分析器实例。|

**Parameters**

|Name|Description|
|:------|:----------|
|setting|图片分类分析器配置。|

**Returns**

|Type|Description|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:-----------|
|[MLImageClassificationAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/imageclassificationanalyzer-0000001050167514)|云侧图片分类分析器实例。|

### getRemoteImageClassificationAnalyzer()

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLImageClassificationAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/imageclassificationanalyzer-0000001050167514) getRemoteImageClassificationAnalyzer() 按默认配置创建云侧图片分类分析器实例。|

**Returns**

|Type|Description|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:-----------|
|[MLImageClassificationAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/imageclassificationanalyzer-0000001050167514)|云侧图片分类分析器实例。|

### getRemoteLandmarkAnalyzer()

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLRemoteLandmarkAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremotelandmarkanalyzer-0000001050167524) getRemoteLandmarkAnalyzer() 按默认配置创建地标分析器实例。|

**Returns**

|Type|Description|
|:---------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[MLRemoteLandmarkAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremotelandmarkanalyzer-0000001050167524)|地标分析器实例。|

### getRemoteLandmarkAnalyzer(MLRemoteLandmarkAnalyzerSetting setting)

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLRemoteLandmarkAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremotelandmarkanalyzer-0000001050167524) getRemoteLandmarkAnalyzer([MLRemoteLandmarkAnalyzerSetting](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremotelandmarkanalyzers-0000001050169479) setting) 创建地标分析器实例。|

**Parameters**

|Name|Description|
|:------|:----------|
|setting|地标分析器配置。|

**Returns**

|Type|Description|
|:---------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[MLRemoteLandmarkAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremotelandmarkanalyzer-0000001050167524)|地标分析器实例。|

### getRemoteProductVisionSearchAnalyzer(MLRemoteProductVisionSearchAnalyzerSetting setting)

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLRemoteProductVisionSearchAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremoteproductvisionsearchanalyzer-0000001050167554) getRemoteProductVisionSearchAnalyzer([MLRemoteProductVisionSearchAnalyzerSetting](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremoteproductvisionsearchanalyzers-0000001050169509) setting) 创建云侧拍照购分析器实例。|

**Parameters**

|Name|Description|
|:------|:----------|
|setting|云侧拍照购分析器配置。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[MLRemoteProductVisionSearchAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremoteproductvisionsearchanalyzer-0000001050167554)|云侧拍照购分析器实例。|

### getRemoteTextAnalyzer()

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLTextAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mltextanalyzer-0000001050167460) getRemoteTextAnalyzer() 按默认配置创建云侧文本分析器实例。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------|:----------|
|[MLTextAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mltextanalyzer-0000001050167460)|云侧文本分析器实例。|

### getRemoteTextAnalyzer(MLRemoteTextSetting setting)

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [MLTextAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mltextanalyzer-0000001050167460) getRemoteTextAnalyzer([MLRemoteTextSetting](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlremotetextsetting-0000001050167454) setting) 创建云侧文本分析器实例。|

**Parameters**

|Name|Description|
|:------|:----------|
|setting|文本分析器配置。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------|:----------|
|[MLTextAnalyzer](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mltextanalyzer-0000001050167460)|云侧文本分析器实例。|

### isStatisticsAllowed()

|Method|
|:---------------------------------------------------|
|public boolean isStatisticsAllowed() 判断是否允许统计当前应用信息。|

**Returns**

|Type|Description|
|:------|:----------------------|
|boolean|* true：允许。 * false：不允许。|

