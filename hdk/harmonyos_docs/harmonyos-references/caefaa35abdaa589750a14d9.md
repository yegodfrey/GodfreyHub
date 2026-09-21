---
name: document/cn/harmonyos-references/capi-windowmanager-windowmanager-mainwindowinfo
title: WindowManager_MainWindowInfo
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-windowmanager-windowmanager-mainwindowinfo
---

# WindowManager_MainWindowInfo

> phone 21+ | 2in1 21+ | tablet 21+ | tv 21+ | wearable 21+

```c
typedef struct {...} WindowManager_MainWindowInfo
```

## 概述

主窗口信息。

**起始版本：** 21

**相关模块：** [WindowManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-windowmanager)

**所在头文件：** [oh_window_comm.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-window-comm-h)

## 汇总

### 成员变量

|名称|描述|
|:-----------------|:-------------------------------------|
|uint64_t displayId|主窗口所在的屏幕ID。|
|int32_t windowId|主窗口ID。|
|bool showing|主窗口的前后台状态。true表示主窗口在前台，false表示主窗口不在前台。|
|const char* label|主窗口任务名称。|

