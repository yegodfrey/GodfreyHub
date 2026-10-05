---
name: document/cn/HiCar-References/init-0000001051492092
title: Init
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-References/init-0000001051492092
---

# Init

|Function|
|:---------------------------------------------------|
|int (*Init)(const void *context, const char *ifName)|
|初始化Driver，确保该函数执行完成后，其他驱动接口可用。|

**Parameters**

|**Parameter name**|**Parameter type**|Parameter desc|
|:-----------------|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
|*context|const void|上下文结构，目前参数没有启用，可传NULL。|
|*ifName|const char|Driver名称。 参见driver_adapt.h宏定义： * #define BLE_DRIVER_NAME "ble" * #define BR_DRIVER_NAME "br" * #define WIFI_DRIVER_NAME "wifi" * #define USB_DRIVER_NAME "usb"|

**Return**

|Type|Desc|
|:---|:-------------------|
|int|返回结果： * 0：成功 * 非0：失败|

