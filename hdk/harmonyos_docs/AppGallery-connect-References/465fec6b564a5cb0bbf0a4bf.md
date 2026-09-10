---
name: document/cn/AppGallery-connect-References/ffresolutioninfo2-0000001791494332
title: FFResolutionInfo2
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/ffresolutioninfo2-0000001791494332
---

# FFResolutionInfo2

分辨率信息。  
Structure Declaration

```
typedef struct FFResolutionInfo2 {
    FFStructureType sType;
    const void* pNext;
    FFExtent2D sceneColorResolution;
    FFExtent2D sceneDepthStencilResolution;
    // ...
    FFExtent2D outputResolution;
} FFResolutionInfo2;
```

Members  

|Name|Mandatory/Optional|Description|
|:--------------------------|:-----------------|:----------------------------------------------|
|sType|Mandatory|此结构体类型必须为FF_STRUCTURE_TYPE_RESOLUTION_INFO_2|
|pNext|Optional|指向扩展链中的下一个结构体的指针。扩展参数，可缺省，默认值为NULL。|
|sceneColorResolution|Mandatory|场景颜色图像的分辨率，以像素为单位。|
|sceneDepthStencilResolution|Optional|场景深度/模板图像的分辨率，以像素为单位。如果不使用，或者与场景颜色分辨率相同，可以设置为0。|
|outputResolution|Optional|输出图像的分辨率，以像素为单位。当与场景颜色分辨率相同时，可以设置为0。|

