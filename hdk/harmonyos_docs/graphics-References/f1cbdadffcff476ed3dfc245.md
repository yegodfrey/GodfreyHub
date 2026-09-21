---
name: document/cn/graphics-References/controller_get_controller_status-0000001160045580
title: GetControllerStatus
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/controller_get_controller_status-0000001160045580
---

# GetControllerStatus

获取控制器当前状态。

## Return Values

返回控制器当前连接状态，控制器状态类型ControllerStatus请参考[ControllerStatus](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/controller-status-0000001205803473)。

## Examples

```screen
if (null == controller) {
    Debug.LogError("Controller is null");
} else {
    ControllerStatus status = controller.GetControllerStatus();
    switch (status) {
        case ControllerStatus.ControllerStatusDisconnected:
            Debug.Log("Controller is disconnected");
            break;
        case ControllerStatus.ControllerStatusScanning:
            Debug.Log("Controller is scanning");
            break;
        case ControllerStatus.ControllerStatusConnecting:
            Debug.Log("Controller is connecting");
            break;
        case ControllerStatus.ControllerStatusConnected:
            Debug.Log("Controller is connected");
            break;
        case ControllerStatus.ControllerStatusError:
            Debug.Log("Controller is connect error");
            break;
    }
}
```

