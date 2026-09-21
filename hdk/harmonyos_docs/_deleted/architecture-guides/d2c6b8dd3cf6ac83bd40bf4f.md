---
name: document/cn/architecture-guides/wifi_scan-0000002330272949
title: 扫描二维码连接WiFi
uri: https://developer.huawei.com/consumer/cn/doc/architecture-guides/wifi_scan-0000002330272949
---

# 扫描二维码连接WiFi

## 场景介绍

扫描二维码连接WiFi是实用工具类应用中的典型场景之一。

本示例基于[scanBarcode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scan-scanbarcode-api)和[@ohos.wifiManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-wifimanager)实现扫描二维码获取WiFi信息后，成功连接WiFi的效果。

## 效果预览

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/86/v3/vk8LUaAqRDmYRzhAWtwTOw/zh-cn_image_0000002661389781.png?HW-CC-KV=V1&HW-CC-Date=20260916T101401Z&HW-CC-Expire=31536000000&HW-CC-Sign=35053F7C392D6EEA025C4785E71C287615272D30787DC8A2C4799AE19BC18134 "点击放大")

## 实现思路

1. 通过配置[scanBarcode.startScanForResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scan-scanbarcode-api#startscanforresult)参数调用默认界面扫描二维码，获取WiFi信息。

   ```ts
   scanBarcode.startScanForResult(context.getHostContext(), Scan.options).then((result: scanBarcode.ScanResult) => {
     // 获得扫码信息        
   })
   ```

2. 通过[WifiDeviceConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-wifimanager#wifideviceconfig)储存扫码所获得的信息。

   ```ts
   let config: wifiManager.WifiDeviceConfig = {
     // 存入扫码信息
   }
   ```

3. 根据获得的信息，通过[wifiManager.connectToCandidateConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-wifimanager#wifimanagerconnecttocandidateconfig)连接WiFi。

   ```ts
   wifiManager.addCandidateConfig(config).then(result => {
     wifiManager.connectToCandidateConfig(result);
   })
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 权限说明

* 配置Wi-Fi设备权限：[ohos.permission.SET_WIFI_INFO](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all#ohospermissionset_wifi_info)。
* 获取Wi-Fi信息权限：[ohos.permission.GET_WIFI_INFO](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all#ohospermissionget_wifi_info)。

## 工程目录

```ts
├──entry/src/main/ets               // 代码区
│  ├──common
│  │  └──Constants.ets              // 常量         
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  └──MainPage.ets               // 主页
│  └──utils
│     └──Scan.ets                   // 扫码实现
└──entry/src/main/resources         // 应用资源目录
```

## 参考文档

[scanBarcode（默认界面扫码）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scan-scanbarcode-api)

[@ohos.wifiManager(WLAN)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-wifimanager)

## 代码下载

[扫描二维码连接WiFi示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260812115201.35216865753861284802955728516428:50001231000000:2800:D92235D680BC9967ABB1DC759D5443FB1F5D0964C7C8E75C11CF344E2D2DE8A4.zip?needInitFileName=true)

