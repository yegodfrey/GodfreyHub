---
name: document/cn/graphics-References/fgtexture-0000001347004862
title: FGTexture
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/fgtexture-0000001347004862
---

# FGTexture

|Class Info|
|:------------------------------------------------|
|class FGTexture FGTexture类，FrameGraph对Texture的封装。|

## Public Constructor Summary

|Constructor Name|
|:---------------------------------------|
|[FGTexture](#section20284403518)() 构造函数。|

## Public Destructor Summary

|Destructor Name|
|:-----------------------------------------|
|[~FGTexture](#section152111051710)() 析构函数。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:----------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void|[SetGraphicsRenderer](#section956012214199)([GraphicsRenderer](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/graphicsrenderer-0000001296995761)* graphicsRenderer) 设置图形渲染器。|
|const [Texture](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/texture-0000001238732140)*|[GetBackendTexture](#section1073381211113)() const 返回[Texture](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/texture-0000001238732140)。|
|void|[ImportTexture](#section417315951217)([Texture](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/texture-0000001238732140)* texture) 导入外部Texture。|
|void|[Create](#section124430171415)(const [Descriptor](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/descriptor-fgtexture-0000001411457653)& descriptor, [ResourceUsage](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/resourceusage-0000001353778262) usage) 创建Texture。|
|void|[Destroy](#section656341861712)() 销毁纹理。|

## Public Constructors

### FGTexture

|Constructor|
|:----------------|
|FGTexture() 构造函数。|

## Public Destructors

### ~FGTexture

|Destructor|
|:-----------------|
|~FGTexture() 析构函数。|

## Public Methods

### SetGraphicsRenderer

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void SetGraphicsRenderer([GraphicsRenderer](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/graphicsrenderer-0000001296995761)* graphicsRenderer) 设置图形渲染器。|

**Parameters**

|Name|Description|
|:---------------|:----------|
|graphicsRenderer|图形渲染器句柄。|

### GetBackendTexture

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|const [Texture](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/texture-0000001238732140)* GetBackendTexture() const 返回[Texture](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/texture-0000001238732140)。|

**Returns**

|Type|Description|
|:----------------------------------------------------------------------------------------------------------------------|:-----------|
|const [Texture](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/texture-0000001238732140)*|返回纹理Texture。|

### ImportTexture

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
|void ImportTexture([Texture](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/texture-0000001238732140)* texture) 导入外部Texture。|

**Parameters**

|Name|Description|
|:------|:-------------|
|texture|外部纹理Texture句柄。|

### Create

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void Create(const [Descriptor](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/descriptor-fgtexture-0000001411457653)& descriptor, [ResourceUsage](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/resourceusage-0000001353778262) usage) 创建Texture。|

**Parameters**

|Name|Description|
|:---------|:----------|
|descriptor|纹理的描述信息。|
|usage|纹理的用途。|

### Destroy

|Method|
|:-------------------|
|void Destroy() 销毁纹理。|

