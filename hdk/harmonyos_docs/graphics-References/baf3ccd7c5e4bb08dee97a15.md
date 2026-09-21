---
name: document/cn/graphics-References/meshrenderer-0000001050181223
title: MeshRenderer
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/meshrenderer-0000001050181223
---

# MeshRenderer

|Class Info|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|class MeshRenderer : public [Renderable](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/renderable-0000001050421125) 网格渲染类，主要对网格进行渲染。配置当前网格的所有子网格的模型矩阵、材质参数。|

## Public Constructor Summary

|Constructor Name|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[MeshRenderer](#section182071921299)([SceneObject](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/sceneobject-0000001050179052)* pSceneObject= nullptr) 构造函数。|

## Public Destructor Summary

|Destructor Name|
|:---------------------------------------------------|
|virtual [~MeshRenderer](#section52137110313)() 析构函数。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|virtual void|[Render](#section10807mcpsimp)([Camera](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/camera-0000001050179056)* camera, const [Matrix4](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/matrix4-0000001050734007)& transMat) override 渲染网格，配置当前网格的所有子网格的模型矩阵、材质参数，并将其加入渲染队列。|
|bool|[Resume](#section188292185010)() 应用程序从后台切到前台时，完成网格渲染资源的重建。|
|void|[Pause](#section1253112245012)() 应用程序从前台切到后台时，完成网格渲染资源的销毁。|
|virtual void|[Update](#section18856115319313)([f32](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604) deltaTime) override 对所有材质实例执行更新操作。|
|virtual void|[AddLightIndices](#section1365391112332)([Camera](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/camera-0000001050179056)* camera, std::vector<[u32](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/type-alias-summary-0000001050286906)>& lightIndices) 添加光源索引。 > 注意 > 该接口已废弃。|

## Public Constructors

### MeshRenderer

|Constructor|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|MeshRenderer([SceneObject](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/sceneobject-0000001050179052)* pSceneObject= nullptr) 构造函数。|

**Parameters**

|Name|Description|
|:-----------|:----------|
|pSceneObject|指定初始化的场景对象。|

## Public Destructors

### ~MeshRenderer

|Destructor|
|:----------------------------|
|virtual ~MeshRenderer() 析构函数。|

## Public Methods

### Render

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|virtual void Render([Camera](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/camera-0000001050179056)* camera, const [Matrix4](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/matrix4-0000001050734007)& transMat) override 渲染网格，配置当前网格的所有子网格的模型矩阵、材质参数，并将其加入渲染队列。|

**Parameters**

|Name|Description|
|:-------|:-------------------------------------------------------------------------------------------------------------------------------|
|camera|[Camera](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/camera-0000001050179056)相机类型，用于设置用到的相机类型。|
|transMat|[Matrix4](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/matrix4-0000001050734007)类型转换矩阵，用于设置模型矩阵。|

### Resume

|Method|
|:--------------------------------------|
|bool Resume() 应用程序从后台切到前台时，完成网格渲染资源的重建。|

**Returns**

|Type|Description|
|:---|:-----------------------------|
|bool|* true：资源重建成功。 * false：资源重建失败。|

### Pause

|Method|
|:-------------------------------------|
|void Pause() 应用程序从前台切到后台时，完成网格渲染资源的销毁。|

### Update

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|virtual void Update([f32](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604) deltaTime) override 对所有材质实例执行更新操作。|

**Parameters**

|Name|Description|
|:--------|:----------|
|deltaTime|帧间隔时间，单位：秒。|

### AddLightIndices

> 注意
>
> 该接口已废弃。

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void AddLightIndices([Camera](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/camera-0000001050179056)* camera, std::vector<[u32](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/type-alias-summary-0000001050286906)>& lightIndices) 针对指定的相机，添加光源索引的集合。|

**Parameters**

|Name|Description|
|:-----------|:----------------------|
|camera|Camera相机类型，用于设置用到的相机类型。|
|lightIndices|光源索引的集合。|

