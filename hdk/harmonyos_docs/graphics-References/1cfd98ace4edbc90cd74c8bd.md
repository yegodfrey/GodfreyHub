---
name: document/cn/graphics-References/interface-faceview-0000001064620625
title: IArFaceView
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/interface-faceview-0000001064620625
---

# IArFaceView

|Interface Info|
|:-----------------------------------------------------------------|
|public interface IArFaceView AR人脸场景组件，提供实时的人脸相关模型呈现，包括表情驱动与人脸贴纸呈现。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void|[destroy](#section15322141815525)() 销毁[IArFaceView](https://developer.huawei.com/consumer/cn/doc/graphics-References/interface-faceview-0000001064620625)场景，删除模型、关闭相机、清除数据，释放当前场景所有资源，关闭当前场景组件所提供的视图。|
|view|[getView](#section121401241144613)() 获取IArFaceView场景的视图，用于在应用中显示。|
|void|[loadModel](#section978463911403)(String modelUrl, [ModelType](https://developer.huawei.com/consumer/cn/doc/graphics-References/xrkit-enum-faceview-modeltype-0000001064498481) type) 在[IArFaceView](https://developer.huawei.com/consumer/cn/doc/graphics-References/interface-faceview-0000001064620625)场景中加载虚拟模型。|
|void|[pause](#section02910143523)() 暂停[IArFaceView](https://developer.huawei.com/consumer/cn/doc/graphics-References/interface-faceview-0000001064620625)场景。不清除数据，调用后需要使用[resume()](#section141013517509)恢复。|
|void|[removeModel](#section2976419204314)() 在[IArFaceView](https://developer.huawei.com/consumer/cn/doc/graphics-References/interface-faceview-0000001064620625)场景中，删除当前已加载的虚拟模型。|
|void|[resume](#section141013517509)() 开始运行[IArFaceView](https://developer.huawei.com/consumer/cn/doc/graphics-References/interface-faceview-0000001064620625)场景，或是在调用[pause()](#section02910143523)以后恢复[IArFaceView](https://developer.huawei.com/consumer/cn/doc/graphics-References/interface-faceview-0000001064620625)场景的运行状态。|
|void|[setInputFromExternal](#section324111106534)([OnSurfaceReadyListener](https://developer.huawei.com/consumer/cn/doc/graphics-References/interface-ready-listener-0000001064898370) listener, Handler handler) 设置客户端打开相机，获取并向surface对象写入对应的图像流。|
|void|[setInputFromInternal](#section998017221599)() 设置服务端打开相机，相机由服务端管理。|
|void|[setOutputSurface](#section953564212611)(Surface surface, int format, int width, int height) 客户端创建并将Surface传入到XRKit服务端，该场景不支持拍照功能，不支持getView功能。|
|void|[takeScreenshot](#section862173764819)([TakeScreenshotListener](https://developer.huawei.com/consumer/cn/doc/graphics-References/interface-screenshot-listener-0000001064290308) bitmapListener) 通过[TakeScreenshotListener](https://developer.huawei.com/consumer/cn/doc/graphics-References/interface-screenshot-listener-0000001064290308)将服务端当前组件场景的View写入位图后传递给客户端，可用于实现拍照功能。|

#### Public Methods

#### destroy

|Method|
|:-----------------------------------------------------------------------|
|void destroy() 销毁IArFaceView场景，删除模型、关闭相机、清除数据，释放当前场景所有资源，关闭当前场景组件所提供的视图。|

#### getView

|Method|
|:------------------------------------------|
|view getView() 获取IArFaceView场景的视图，用于在应用中显示。|

Returns  

|Type|Description|
|:---|:----------------------------------------------------------------------------------------------------------------------------|
|view|[IArFaceView](https://developer.huawei.com/consumer/cn/doc/graphics-References/interface-faceview-0000001064620625)组件场景提供的视图。|

#### loadModel

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void loadModel(String modelUrl, [ModelType](https://developer.huawei.com/consumer/cn/doc/graphics-References/xrkit-enum-faceview-modeltype-0000001064498481) type) 在IArFaceView场景中加载虚拟模型。|

Parameters  

|Name|Description|
|:-------|:----------|
|modelUrl|模型文件存储路径。|
|type|模型类型。|

#### pause

|Method|
|:----------------------------------------------------------------------------|
|void pause() 暂停IArFaceView场景。不清除数据，调用后需要使用[resume](#section141013517509)()恢复。|

#### removeModel

|Method|
|:-----------------------------------------------|
|void removeModel() 在IArFaceView场景中，删除当前已加载的虚拟模型。|

#### resume

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void resume() 开始运行[IArFaceView](https://developer.huawei.com/consumer/cn/doc/graphics-References/interface-faceview-0000001064620625)场景，或是在调用[pause](#section02910143523)()后恢复[IArFaceView](https://developer.huawei.com/consumer/cn/doc/graphics-References/interface-faceview-0000001064620625)场景的运行状态。|

#### setInputFromExternal

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void setInputFromExternal([OnSurfaceReadyListener](https://developer.huawei.com/consumer/cn/doc/graphics-References/interface-ready-listener-0000001064898370) listener, Handler handler) 设置客户端打开相机，获取并向surface对象写入对应的图像流。|

Parameters  

|Name|Description|
|:-------|:----------------------------------------------------------------------------------------------------------------------------------------------|
|listener|surface准备就绪的监听，服务端surface准备就绪后调用此监听onSurfaceReady方法。|
|handler|处理[OnSurfaceReadyListener](https://developer.huawei.com/consumer/cn/doc/graphics-References/interface-ready-listener-0000001064898370)的handler。|

#### setInputFromInternal

|Method|
|:----------------------------------------------|
|void setInputFromInternal() 设置服务端打开相机，相机由服务端管理。|

#### setOutputSurface

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void setOutputSurface(Surface surface, int format, int width, int height) 客户端创建并将Surface传入到XRKit服务端。 注意： 该接口与[getView](#section121401241144613)()、[takeScreenshot](#section862173764819)([TakeScreenshotListener](https://developer.huawei.com/consumer/cn/doc/graphics-References/interface-screenshot-listener-0000001064290308) bitmapListener)互斥。（补充：ArFaceView有三种方式创建场景，getView()是其中的一种，getView()方式的创建场景中，不能执行拍照功能。）|

Parameters  

|Name|Description|
|:------|:-------------|
|surface|客户端创建的Surface。|
|format|Surface格式。|
|width|Surface的宽。|
|height|Surface的高。|

#### takeScreenshot

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void takeScreenshot([TakeScreenshotListener](https://developer.huawei.com/consumer/cn/doc/graphics-References/interface-screenshot-listener-0000001064290308) bitmapListener) 通过[TakeScreenshotListener](https://developer.huawei.com/consumer/cn/doc/graphics-References/interface-screenshot-listener-0000001064290308)将服务端当前组件场景的View写入位图后传递给客户端，可用于实现拍照功能。|

Parameters  

|Type|Description|
|:-------------|:----------------------------------------------------------------|
|bitmapListener|客户端实现了onSuccess(Bitmap bitmap)与onFailure方法的监听器，用于获取XRKit服务端传递的位图。|

