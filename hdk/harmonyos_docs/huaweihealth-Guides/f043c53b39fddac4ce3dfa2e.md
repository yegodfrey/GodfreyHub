---
name: document/cn/huaweihealth-Guides/connect-device-0000002624549015
title: 连接设备
uri: https://developer.huawei.com/consumer/cn/doc/huaweihealth-Guides/connect-device-0000002624549015
---

# 连接设备

行业App调用此接口连接穿戴设备。  
![](https://media:301785133828223195)  
* 连接新设备时，如果已有设备处于已连接状态，该设备会自动断开连接。
* 行业APP更换不同账号，如果穿戴设备未恢复出厂设置，行业App连接穿戴设备，穿戴设备会有"恢复出厂"弹窗，穿戴设备需恢复出厂后才能添加穿戴设备，且回复出厂后需要到"设置 \> 蓝牙"中找到该设备，点击右侧的"i"图标，然后选择"忽略此设备"。

1. 导入相关模块。
2. 调用[IndustryService](https://developer.huawei.com/consumer/cn/doc/health-References/industry_service_ios-0000002624668977)对象的[getDeviceManager](https://developer.huawei.com/consumer/cn/doc/health-References/industry_service_ios-0000002624668977#section232815255518)方法获取[DeviceManager](https://developer.huawei.com/consumer/cn/doc/health-References/industry_service_ios-0000002624668977#section162022615492)对象。
3. 调用扫描接口[scanDevice](https://developer.huawei.com/consumer/cn/doc/health-References/industry_service_ios-0000002624668977#section3753115173613)获取穿戴设备列表或调用[getDeviceList](https://developer.huawei.com/consumer/cn/doc/health-References/industry_service_ios-0000002624668977#section1275193634915)方法获取系统已连接的穿戴设备列表，并从设备列表中选定需要操作的设备。
4. 调用[Device](https://developer.huawei.com/consumer/cn/doc/health-References/industry_service_ios-0000002624668977#section15492171716504)对象的[connect](https://developer.huawei.com/consumer/cn/doc/health-References/industry_service_ios-0000002624668977#section10173244192617)方法连接设备。

   <br />

   ```
   import IndustrySDK

   let deviceManager = IndustryService.getDeviceManager()
   Task {
       do {
           // 构造扫描过滤参数
           let scanFilter = ScanFilter(type: .noFiltering, matcher: "")
           try await deviceManager.scanDevice(scanFilter: scanFilter) { device in
               // 连接指定设备
               try await device.connect()
           }
       } catch let err as IndustryError {
           print("Failed to scan device. Code: \(err.code), message: \(err.message)")
       }
   }
   ```

   <br />

