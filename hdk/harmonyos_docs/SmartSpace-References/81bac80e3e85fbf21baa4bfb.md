---
name: document/cn/SmartSpace-References/status-change-notification-0000001505035017
title: 设备状态变更通知- deviceStatus
uri: https://developer.huawei.com/consumer/cn/doc/SmartSpace-References/status-change-notification-0000001505035017
---

# 设备状态变更通知- deviceStatus

1. 描述：当华为全屋智能平台管理的收到设备上线、离线状态变更时，触发此通知消息。
2. 请求示例：

   ```screen
   [
    {
        "dataType": "deviceStatus",
        "payload":"[{\"projectId\":\"878052642478100096\",\"deviceId\":\"8f7e3fbd-8804-4a48-b3d1-df29f05d823c\",\"status\":\"online\",\"spaceId\":\"878052642478100096\",\"gatewayDeviceId\":\"2908d7b5-ab58-4531-8764-15eadeebd3b6\",\"dataTimeStamp\":\"1655293118529\"},{\"projectId\":\"878052642478100096\",\"deviceId\":\"13d3bb29-01fd-4b11-af7a-70ba87f9ddf2\",\"status\":\"offline\",\"spaceId\":\"878052642478100096\",\"gatewayDeviceId\":\"2908d7b5-ab58-4531-8764-15eadeebd3b6\",\"dataTimeStamp\":\"1655293118529\"}]"
    }
   ]
    
   Payload部分报文格式：
   [
    {
        "projectId": "878052642478100096",
        "deviceId": "8f7e3fbd-8804-4a48-b3d1-df29f05d823c",
        "status": "online",
        "spaceId": "878052642478100096",
        "gatewayDeviceId": "2908d7b5-ab58-4531-8764-15eadeebd3b6",
        "dataTimeStamp": "1655293118529"
    },
    {
        "projectId": "878052642478100096",
        "deviceId": "13d3bb29-01fd-4b11-af7a-70ba87f9ddf2",
        "status": "offline",
        "spaceId": "878052642478100096",
        "gatewayDeviceId": "2908d7b5-ab58-4531-8764-15eadeebd3b6",
        "dataTimeStamp": "1655293118529"
    }
   ]
   ```

3. 参数说明：

|--|---------------|----|------|----|---------------------------------------|
|序号|参数|是否必须|类型|长度|描述|
|1|projectId|必选|String|1-24|项目ID|
|2|deviceId|必选|String|1-36|设备ID，设备唯一标识|
|3|status|必选|枚举|8|设备状态 枚举： online/offline|
|4|spaceId|必选|String|1-24|空间ID|
|5|gatewayDeviceId|必选|String|1-36|中枢/主机的设备ID，针对下挂设备；假如就是中枢/主机值等于deviceId。|
|6|dataTimeStamp|必选|Long|  |产生时间|

