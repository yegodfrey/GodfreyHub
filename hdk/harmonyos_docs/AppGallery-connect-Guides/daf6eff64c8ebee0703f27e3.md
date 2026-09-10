---
name: document/cn/AppGallery-connect-Guides/predict-frame-drawframe-vulkan-0000001791483626
title: 绘制预测帧
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/predict-frame-drawframe-vulkan-0000001791483626
---

# 绘制预测帧

在正确初始化（成功创建库实例）并提供所需的全部数据后，则可以进行绘制预测帧工作。  

#### 前提条件

* 已[创建库实例](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/predict-frame-create-instance-vulkan-0000001791483622)。
* 已[设置主要参数](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/predict-frame-set-frame-parameters-vulkan-0000001791323930)。

<!-- -->

* 已[提供每帧数据](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/predict-frame-provideperframedata-vulkan-0000001837963089)。  

#### 开发步骤

调用函数[FrameFlowVK_DrawFrame](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/frameflowvk-drawframe-0000001791334704)绘制预测帧。

```
FFResult FrameFlowVK_DrawFrame(FFVKInstance instance, FFVKDrawFrameInfo const *pDrawInfo);
```

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240314102214.47985466984994221895398052808000:50001231000000:2800:31FAFDA5126A28DEC738F329D6859BA4F5BC3DDB372398BD38A9C4AD15D59D99.png?needInitFileName=true?needInitFileName=true)  
如果绘制预测帧时出现错误，单帧画面可能会出现问题，但已创建的库实例仍保持有效状态，可继续用于预测下一帧。  
