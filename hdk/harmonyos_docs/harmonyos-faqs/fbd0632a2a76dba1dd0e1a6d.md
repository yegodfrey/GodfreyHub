---
name: document/cn/harmonyos-faqs/faqs-camera-13
title: 如何开关闪光灯
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-camera-13
---

# 如何开关闪光灯

使用[isFlashModeSupported](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-flashquery#isflashmodesupported11)方法检测设备是否支持需要设置的闪光灯模式后，使用[setFlashMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-flash#setflashmode11)设置闪光灯模式。

参考代码：

```ts
setFlash(captureSession: camera.PhotoSession,flashMode: camera.FlashMode) {
  if (captureSession != null) {
    let focusModeStatus: boolean = captureSession?.isFlashModeSupported(flashMode);
    if (focusModeStatus) {
      captureSession.setFlashMode(flashMode);
    }
  }
}
```

