---
name: document/cn/SmartTravel-References/on-data-receive-0000001057607421
title: onDataReceive
uri: https://developer.huawei.com/consumer/cn/doc/SmartTravel-References/on-data-receive-0000001057607421
source: portal
---

# onDataReceive  
  
Function  
---  
void onDataReceive(string deviceId, int dataType, byte[] data)  
The HiCar SDK receives data from the remote device and sends it to the HMI app.  
  
**Parameters**

**Parameter Name** | **Parameter Type** | **Parameter Description**  
---|---|---  
deviceId | string | Remote device identifier.  
dataType | int | The data type is defined by HiCar and the value range is 500 to 599. The HMI app processes data based on the data type. More data types will be included.  
data | byte[] | Content of received data.
