---
name: document/cn/HiCar-References/open-camera-0000001059326458
title: OpenCamera
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-References/open-camera-0000001059326458
---

# OpenCamera

|Function|
|:--------------------------------------------------------------------------------|
|int32_t (*OpenCamera)(const DMSDPCameraParam* param)|
|函数指针定义，表示根据指定参数打开Camera设备，开始获取指定格式的图像，南向返回该接口实现函数地址，北向Dvkit根据业务需要调用该函数打开Camera设备。|

**Parameters**

|**Parameter name**|**Parameter type**|Parameter desc|
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------|
|*param|const [DMSDPCameraParam](https://developer.huawei.com/consumer/cn/doc/HiCar-References/dmsdp-camera-param-0000001059166476#ZH-CN_TOPIC_0000001059166476)|打开camera的参数对象。|

**Return**

|Type|Desc|
|:------|:-----------------------------------|
|int32_t|返回结果： * 0：打开Camera成功 * 非0：打开Camera异常|

