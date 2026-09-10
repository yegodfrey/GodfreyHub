---
name: document/cn/graphics-References/framegraph-0000001346845202
title: FrameGraph
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/framegraph-0000001346845202
---

# FrameGraph

|Class Info|
|:--------------------------------------------|
|class FrameGraph FrameGraph类，用于组织Pass和管理渲染资源。|

#### Public Constructor Summary

|Constructor Name|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[FrameGraph](#section6228mcpsimp)([GraphicsRenderer](https://developer.huawei.com/consumer/cn/doc/graphics-References/graphicsrenderer-0000001296995761)\* graphicsRenderer) 构造函数。|

#### Public Destructor Summary

|Destructor Name|
|:------------------------------------------|
|[\~FrameGraph](#section6295mcpsimp)() 析构函数。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[PassExecuter](https://developer.huawei.com/consumer/cn/doc/graphics-References/passexecuter-0000001397445037)\<PassData, Executer\>\&|template\<typename PassData, typename Setup, typename Executer\> [AddPass](#section95681324141311)(const char\* name, Setup setup, Executer\&\& execute, [PassType](https://developer.huawei.com/consumer/cn/doc/graphics-References/passtype-0000001404258109) passType= PassType::GRAPHICS_PASS); 添加Pass节点。|
|[FGHandle](https://developer.huawei.com/consumer/cn/doc/graphics-References/fghandle-0000001397244665)\<ResourceType\>|template \<typename ResourceType\> [Import](#section11935165013462)(const char\* const name, const ResourceType\& resource, typename ResourceType::Descriptor const\& desc) 导入外部资源。|
|void|[Compile](#section1356834712213)() 编译FrameGraph，用于计算resources的生命周期，以便于更高效地创建和释放。|
|void|[Execute](#section10751154692417)() 按照声明顺序执行FrameGraph中的render passes，并在每一个render pass执行前后恰当地创建和释放resources。|
|void|[Begin](#section843765852415)(const std::vector\<[CommandBuffer](https://developer.huawei.com/consumer/cn/doc/graphics-References/commandbuffer-0000001304795501)\*\>\& commandBuffer) 填充CommandBuffer。|
|void|[End](#section11597599242)() 置空CommandBuffer。|

#### Public Constructors

#### FrameGraph

|Constructor|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------|
|FrameGraph([GraphicsRenderer](https://developer.huawei.com/consumer/cn/doc/graphics-References/graphicsrenderer-0000001296995761)\* graphicsRenderer) 构造函数。|

Parameters  

|Name|Description|
|:---------------|:----------|
|graphicsRenderer|图形渲染器。|

#### Public Destructors

#### \~FrameGraph

|Destructor|
|:-------------------|
|\~FrameGraph() 析构函数。|

#### Public Methods

#### AddPass

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|template\<typename PassData, typename Setup, typename Executer\> [PassExecuter](https://developer.huawei.com/consumer/cn/doc/graphics-References/passexecuter-0000001397445037)\<PassData, Executer\>\& AddPass(const char\* name, Setup setup, Executer\&\& execute, [PassType](https://developer.huawei.com/consumer/cn/doc/graphics-References/passtype-0000001404258109) passType= PassType::GRAPHICS_PASS) 添加Pass节点。|

Parameters  

|Name|Description|
|:-------|:----------|
|name|Pass的名称。|
|setup|设置资源配置的回调。|
|execute|Pass执行体的回调。|
|passType|Pass的类型。|

Returns  

|Type|Description|
|:-----------------------------------------------------------------------------------------------------------------------------------|:-----------|
|[PassExecuter](https://developer.huawei.com/consumer/cn/doc/graphics-References/passexecuter-0000001397445037)\<PassData, Executer\>|返回该Pass的执行器。|

#### Import

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|template \<typename ResourceType\> [FGHandle](https://developer.huawei.com/consumer/cn/doc/graphics-References/fghandle-0000001397244665)\<ResourceType\> Import(const char\* const name, const ResourceType\& resource, typename ResourceType::Descriptor const\& desc) 导入外部资源。|

Parameters  

|Name|Description|
|:-------|:----------|
|name|资源的名称。|
|resource|外部资源。|
|desc|对资源的描述。|

Returns  

|Type|Description|
|:---------------------------------------------------------------------------------------------------------------------|:----------|
|[FGHandle](https://developer.huawei.com/consumer/cn/doc/graphics-References/fghandle-0000001397244665)\<ResourceType\>|返回资源索引。|

#### Compile

|Method|
|:---------------------------------------------------------------|
|void Compile() 编译FrameGraph，此步骤任务：计算resources的生命周期，以便于更高效地创建和释放。|

#### Execute

|Method|
|:--------------------------------------------------------------------------------------|
|void Execute() 按照声明顺序执行FrameGraph中的render passes，并在每一个render pass执行前后恰当地创建和释放resources。|

#### Begin

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void Begin(const std::vector\<[CommandBuffer](https://developer.huawei.com/consumer/cn/doc/graphics-References/commandbuffer-0000001304795501)\*\>\& commandBuffer) 填充CommandBuffer。|

Parameters  

|Name|Description|
|:------------|:---------------|
|commandBuffer|CommandBuffer列表。|

#### End

|Method|
|:--------------------------|
|void End() 置空CommandBuffer。|

