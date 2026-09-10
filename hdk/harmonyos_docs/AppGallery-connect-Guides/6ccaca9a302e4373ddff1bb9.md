---
name: document/cn/AppGallery-connect-Guides/predict-frame-main-concepts-0000001706430018
title: 相关概念
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/predict-frame-main-concepts-0000001706430018
---

# 相关概念

#### 后处理

在现代游戏应用程序中，可能存在复杂的管道，这些管道在渲染3D场景和渲染2D UI元素之间执行额外的步骤，这些额外的步骤通常被称为"后处理"。在这种情况下，场景颜色是否应包含它们可能还不清楚，具体您可参考下表。  

|后处理|建议|
|:-----------------------------------|:------------------------|
|色调映射（Tone mapping）|包括在场景颜色中。|
|高光溢出（Bloom）|包括在场景颜色中。|
|镜头眩光（Lens flare）|包括在场景颜色中。|
|倒影（Reflections）|包括在场景颜色中。|
|环境光遮蔽（Ambient occlusion）|包括在场景颜色中。|
|放大和时间性抗锯齿（Upscaling and TAA）|包括在场景颜色中。|
|景深（Depth of field）|包括在场景颜色中。当作用范围较大时，建议关闭预测。|
|运动模糊（Motion blur）|包括在场景颜色中。当作用范围较大时，建议关闭预测。|
|图像失真（Image distortions）|包括在场景颜色中。当作用范围较大时，建议关闭预测。|
|2D效果、叠加、UI（2D effects, overlays, UI）|从场景颜色中排除。可能包括在最终颜色和蒙版中。|

上述后处理效果和预测一起使用时，可能会降低质量，因此还必须检查对预测的影响，并在预测给出不良结果时禁用预测。  

#### 内存占用

库将在初始化和激活时分配内存。由于大部分将用于内部GL资源（如纹理），因此确切的内存使用情况将取决于设备和驱动程序。根据经验来看，内存占用空间与原始帧像素计数一般成正比：  

|预测算法|原始帧的每像素字节数|
|:------------------------------------------------|:---------|
|FF_PREDICTION_ALGORITHM_HYDRA|每像素32字节|
|FF_PREDICTION_ALGORITHM_GRIDWARP|每像素35字节|
|FF_PREDICTION_ALGORITHM_IMAGE_ONLY_INTERPOLATION|每像素27字节|
|FF_PREDICTION_ALGORITHM_MESH_REPROJ_EXTRAPOLATION|每像素32字节|

例如，针对1744x808分辨率和FF_PREDICTION_ALGORITHM_GRIDWARP算法，我们将获得1744 \* 808 \* 35 = 49320320字节，约为47MB。当多个类似纹理的资源具有不同的分辨率时，请选择较大的值进行此计算。这些值仅是粗略的估计，但对于大多数设备来说，它们应该是大致符合的。如需获取精确值，您应在设备上进行精准测量。  
