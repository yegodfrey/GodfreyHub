---
name: document/cn/graphics-References/update_mode-0000001050164135
title: ARConfigBase.UpdateMode
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/update_mode-0000001050164135
---

# ARConfigBase.UpdateMode

|Enum Info|
|:---------------------------|
|public enum UpdateMode 更新模式。|

#### Enum Value Summary

|Enum Value and Description|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|BLOCKING(0) [ARSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/session-0000001050121459)的[update](https://developer.huawei.com/consumer/cn/doc/graphics-References/session-0000001050121459#section1826912043817)()方法在新的帧可用时才返回。|
|LATEST_CAMERA_IMAGE(1) [ARSession](https://developer.huawei.com/consumer/cn/doc/graphics-References/session-0000001050121459)的[update](https://developer.huawei.com/consumer/cn/doc/graphics-References/session-0000001050121459#section1826912043817)()方法立刻返回（如果没有新的帧，就返回上一帧）。|

