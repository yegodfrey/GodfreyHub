---
name: document/cn/graphics-References/controller_reset_center-0000001160205582
title: ResetCenter (Not Supported)
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/controller_reset_center-0000001160205582
---

# ResetCenter (Not Supported)

将当前位置和姿态复位到初始位置和姿态。通常用于画面姿态、位置都偏离的情况（重置位置暂不支持）。

## Return Values

调用函数成功返回0，失败返回-1。

## Examples

```screen
if (null == controller) {
    Debug.LogError("Controller is null");
} else {
    controller.ResetCenter();
}
```

