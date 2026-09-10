---
name: document/cn/AppGallery-connect-References/frameflow-setcvvzsemantic-0000001838093749
title: FrameFlow_SetCvvZSemantic
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/frameflow-setcvvzsemantic-0000001838093749
---

# FrameFlow_SetCvvZSemantic

|Function Info|
|:----------------------------------------------------------------------------------------------------------|
|FFResult FrameFlow_SetCvvZSemantic(FFInstance instance, FFCvvZSemantic semantic); 设置规则观察体的Z轴可视坐标范围以及深度测试方式。|

Parameters  

|Name|Description|
|:-------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|instance|库实例。|
|semantic|规则观察体的Z轴可视坐标范围（以及深度测试方式），具体请参见[FFCvvZSemantic](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/ffcvvzsemantic-0000001791334664)。 说明： 如未设置，将使用默认值。|

Return  

|Type|Description|
|:-------|:-------------------------------------------------------------------------------------------------------------------------------------------|
|FFResult|返回结果。 成功时返回0，失败则返回错误码，具体请参见[FFResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/ffresult-0000001838093829)。|

