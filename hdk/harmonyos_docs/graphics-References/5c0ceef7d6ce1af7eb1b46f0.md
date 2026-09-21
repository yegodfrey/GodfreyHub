---
name: document/cn/graphics-References/hcgetresolution-0000001055136750
title: HcGetResolution
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/hcgetresolution-0000001055136750
---

# HcGetResolution

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[HcErrorCode](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/hcerrorcode-0000001055612806) HcGetResolution(struct [HiCulling](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/hiculling-0000001055695365) *obj, unsigned int &width, unsigned int &height) 获取depth buffer的分辨率。|

**Parameters**

|Name|Description|
|:-----|:---------------------------------------------------------------------------------------------------------------------------------|
|obj|用于执行软件遮挡剔除的[HiCulling](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/hiculling-0000001055695365)对象。|
|width|用于输出depth buffer的宽度（单位：像素）。|
|height|用于输出depth buffer的高度（单位：像素）。|

**Returns**

|Type|Description|
|:-----------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------|
|[HcErrorCode](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/hcerrorcode-0000001055612806)|[错误码](https://developer.huawei.com/consumer/cn/doc/development/graphics-Guides/error-code-0000001061725148)，用于描述错误原因。|

