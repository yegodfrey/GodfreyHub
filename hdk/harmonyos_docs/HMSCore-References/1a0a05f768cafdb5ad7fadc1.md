---
name: document/cn/HMSCore-References/createbleconnection-0000001056726830
title: createBLEConnection：与手机蓝牙适配器创建连接
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/createbleconnection-0000001056726830
---

# createBLEConnection：与手机蓝牙适配器创建连接

**接口原型**

public String createBLEConnection(String deviceId)

方法描述：通过指定的设备UUID与手机蓝牙适配器创建连接。

**请求参数**

|参数名称|参数类型|参数描述|可选选项|
|:-------|:-----|:--------------------------|:---|
|deviceId|String|蓝牙设备ID，通过接口getDeviceId()获取。|M|
[**表1**请求参数]

请求示例：

```screen
function() {
       let self = this;
       self.deviceId = window.hilink.getDeviceId();
       this.log.info("deviceId: " + self.deviceId);
       // 连接蓝牙
       window.hilink.createBLEConnection(self.deviceId);
}
```

**响应参数**

|参数名称|参数类型|参数描述|可选选项|
|:------|:-----|:-------------------|:---|
|retCode|Number|错误码：0, 90001, 90009。|M|
[**表2**响应参数]

