---
name: document/cn/DevicePartner-References/product-information03-0000002583639858
title: 获取设备版本号
uri: https://developer.huawei.com/consumer/cn/doc/DevicePartner-References/product-information03-0000002583639858
source: portal
---

# 获取设备版本号

int getDeviceVersion(char **firmwareVer, char **softwareVer, char **hardwareVer);

SDK使用getDeviceVersion接口，获取设备的固件、软件以及硬件版本号。此版本号将会影响设备详情页上版本信息的展示，如果不填将导致后续OTA流程检测不到新版本。注：此接口仅传递char类型指针，该指针初始值为NULL，请传递常量字符串或者全局变量。

**参数名** | **类型** | **输入/输出** | **描述**  
---|---|---|---  
firmwareVer | char ** | 输入 | 当前固件版本号。  
softwareVer | char ** | 输入 | 当前软件版本号。  
hardwareVer | char ** | 输入 | 当前硬件版本号。  
  
**函数返回值** | **描述**  
---|---  
0 | 获取版本号成功。  
其他值 | 获取版本号失败。  
  
参考实现如下：
    
    
    int getDeviceVersion(char **firmwareVer, char **softwareVer, char **hardwareVer)
    {
        *firmwareVer = "1.0.0";
        *softwareVer = "1.1.0";
        *hardwareVer = "1.1.1";
        return 0;
    }
    
