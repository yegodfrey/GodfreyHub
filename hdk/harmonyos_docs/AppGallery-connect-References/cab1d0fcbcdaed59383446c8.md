---
name: document/cn/AppGallery-connect-References/ffinputdescription-vulkan-0000001791337356
title: FFInputDescription
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/ffinputdescription-vulkan-0000001791337356
---

# FFInputDescription

输入描述。

**Structure Declaration**

```screen
typedef struct FFInputDescription {
    FFStructureType sType;
    const void* pNext;
    FFInputDescriptionFlags flags;
} FFInputDescription;
```

**Members**

|Name|Mandatory/Optional|Description|
|:----|:-----------------|:-----------------------------------------------------------|
|sType|Mandatory|此结构体类型必须为**FF_STRUCTURE_TYPE_INPUT_DESCRIPTION**。|
|pNext|Mandatory|指向扩展链中的下一个结构体的指针。如指向FFStencilRemapInfo结构，则应该添加到此扩展链中（以任何顺序）。|
|flags|Mandatory|保留成员，供将来使用，当前须设置为0。|

