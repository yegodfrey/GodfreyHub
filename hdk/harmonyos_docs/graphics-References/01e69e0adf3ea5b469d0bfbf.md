---
name: document/cn/graphics-References/api-arview2-0000001070956174
title: ARView
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/api-arview2-0000001070956174
---

# ARView

|Class Info|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
|public class ARView extends [RenderView](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-renderview-0000001061309635) 提供AR场景渲染能力。|

#### Public Constructor Summary

|Constructor Name|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[ARView](#section1263711501283)(Context context) 构造方法，使用上下文初始化[ARView](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-arview2-0000001070956174)。|
|[ARView](#section20811125981914)(Context context, AttributeSet attrs) 构造方法，使用上下文与属性集初始化[ARView](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-arview2-0000001070956174)。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void|[addOnTapModelEventListener](#section1466945332314)([OnTapModelEventListener](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-arview-ontapmodel-0000001071404652)onTapModelEventListener) 添加模型点击事件监听器。|
|void|[addOnTapPlaneEventListener](#section195891144592)([OnTapPlaneEventListener](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-arview-ontapplane-0000001070726329) onTapPlaneEventListener) 添加平面点击事件监听器。|
|void|[enablePlaneDisplay](#section1081018572239)(boolean enable) 设置是否显示平面。|
|void|[recordARNode](#section12182125619232)([ARNode](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-arnode-0000001071564248) node) 在ARView场景中记录具备AR能力的节点。|

#### Public Constructors

#### ARView(Context context)

|Constructor|
|:---------------------------------------------------------------------------------------------------------------------------------------------------|
|public ARView(Context context) 构造方法，使用上下文初始化[ARView](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-arview2-0000001070956174)。|

Parameters  

|Name|Description|
|:------|:------------|
|context|Android组件上下文。|

#### ARView(Context context, AttributeSet attrs)

|Constructor|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public ARView(Context context, AttributeSet attrs) 构造方法，使用上下文与属性集初始化[ARView](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-arview2-0000001070956174)。|

Parameters  

|Name|Description|
|:------|:------------|
|context|Android组件上下文。|
|attrs|属性集。|

#### Public Methods

#### addOnTapModelEventListener

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void addOnTapModelEventListener([OnTapModelEventListener](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-arview-ontapmodel-0000001071404652) onTapModelEventListener) 添加模型点击事件监听器。|

Parameters  

|Name|Description|
|:----------------------|:----------|
|onTapModelEventListener|模型点击事件监听器。|

#### addOnTapPlaneEventListener

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void addOnTapPlaneEventListener([OnTapPlaneEventListener](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-arview-ontapplane-0000001070726329) onTapPlaneEventListener) 添加平面点击事件监听器。|

Parameters  

|Name|Description|
|:----------------------|:----------|
|onTapPlaneEventListener|平面点击事件监听器。|

#### enablePlaneDisplay

|Method|
|:-------------------------------------------------------|
|public void enablePlaneDisplay(boolean enable) 设置是否显示平面。|

Parameters  

|Name|Description|
|:-----|:----------------------------------|
|enable|是否显示平面。 * true：显示平面。 * false：不显示平面。|

#### recordARNode

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void recordARNode([ARNode](https://developer.huawei.com/consumer/cn/doc/graphics-References/api-arnode-0000001071564248) node) 在ARView场景中记录具备AR能力的节点。|

Parameters  

|Name|Description|
|:---|:----------|
|node|ARNode节点。|

