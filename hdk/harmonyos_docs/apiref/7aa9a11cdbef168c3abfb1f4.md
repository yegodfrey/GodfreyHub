---
name: document/cn/apiref/window_8h-0000001055039504
title: window.h
uri: https://developer.huawei.com/consumer/cn/doc/apiref/window_8h-0000001055039504
source: portal
---

# window.h

#### Overview

**Related Modules:**

[Window](https://device.harmonyos.com/cn/docs/develop/apiref/window-0000001055039468)

**Description:**

Declares the **Window** class that provides a drawing canvas for the **RootView** , which represents the root node of a view tree. 

Each window is bound to a **RootView**. For details, see **RootView**. The **Window** class also provides window management capabilities, including creating, destroying, showing, hiding, moving, resizing a window, raising a window to the top, and lowering a window to the bottom.

**Since:**

1.0

**Version:**

1.0

#### Summary

#### [h2]Data Structures

Data Structure Name | Description  
---|---  
[OHOS::WindowConfig](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1windowconfig-0000001054718139) | Sets the attributes for this window.   
[OHOS::Window](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1window-0000001055678106) | Provides a drawing canvas for the **[RootView](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1rootview-0000001054598173)** , which represents the root node of a view tree.   
  
#### [h2]Enumerations

Enumeration Name | Description  
---|---  
[OHOS::WindowPixelFormat](https://device.harmonyos.com/cn/docs/develop/apiref/window-0000001055039468#ZH-CN_TOPIC_0000001055039468__gade9f6a70c1e8547785d266aab3ca5725) { [OHOS::WINDOW_PIXEL_FORMAT_RGB565](https://device.harmonyos.com/cn/docs/develop/apiref/window-0000001055039468#ZH-CN_TOPIC_0000001055039468__ggade9f6a70c1e8547785d266aab3ca5725a23fea82a04292ba974dad96468ae610c) = 101, [OHOS::WINDOW_PIXEL_FORMAT_ARGB1555](https://device.harmonyos.com/cn/docs/develop/apiref/window-0000001055039468#ZH-CN_TOPIC_0000001055039468__ggade9f6a70c1e8547785d266aab3ca5725a4f397aa8d8480b22b8a65594e09fbc9a), [OHOS::WINDOW_PIXEL_FORMAT_RGB888](https://device.harmonyos.com/cn/docs/develop/apiref/window-0000001055039468#ZH-CN_TOPIC_0000001055039468__ggade9f6a70c1e8547785d266aab3ca5725a083e4a4abba5810d7bedb8a65bea23f1), [OHOS::WINDOW_PIXEL_FORMAT_ARGB8888](https://device.harmonyos.com/cn/docs/develop/apiref/window-0000001055039468#ZH-CN_TOPIC_0000001055039468__ggade9f6a70c1e8547785d266aab3ca5725a94212b4cc96d2cb46cec7de114437d26) } | Enumerates the pixel formats of this window. 
