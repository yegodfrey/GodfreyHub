---
name: document/cn/HiCar-References/surface-changed-0000000000030616
title: surfaceChanged
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-References/surface-changed-0000000000030616
---

# surfaceChanged

|Method|
|:----------------------------------------------------------------------------------|
|void surfaceChanged(SurfaceHolder surfaceHolder, int format, int width, int height)|
|surface更新事件通知。|

**Parameters**

|Parameter name|Parameter type|Parameter desc|
|:-------------|:-------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|
|surfaceHolder|SurfaceHolder|surfaceHolder对象。|
|format|int|surface的像素格式，可选项有：PixelFormat.RGBA_8888, PixelFormat.RGBX_8888, PixelFormat.RGBA_F16, PixelFormat.RGBA_1010102, PixelFormat.RGB_888, or PixelFormat.RGB_565。|
|width|int|surface的新宽度，单位：dp。|
|height|int|surface的新高度，单位：dp。|

