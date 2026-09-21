---
name: document/cn/AppGallery-connect-References/frameflowvk-create-0000001791334676
title: FrameFlowVK_Create
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/frameflowvk-create-0000001791334676
---

# FrameFlowVK_Create

|Function Info|
|:---------------------------------------------------------------------------------|
|FFVKInstance FrameFlowVK_Create(FFVKInstanceCreateInfo const *pCreateInfo); 创建库实例。|

**Parameters**

|Name|Description|
|:----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|pCreateInfo|指向[FFVKInstanceCreateInfo](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/ffvkinstancecreateinfo-0000001791494432)结构体的指针，表示创建库实例所需信息。|

**Return**

|Type|Description|
|:---------|:-------------------------------------------------------|
|FFInstance|库实例。 > 说明 > 如果成功，则该函数返回一个库实例对象，否则将返回**FF_NULL_HANDLE** 。|

