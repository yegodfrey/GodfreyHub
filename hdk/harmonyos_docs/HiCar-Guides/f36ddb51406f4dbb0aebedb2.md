---
name: document/cn/HiCar-Guides/vehicle-data-0000001052859442
title: 低油/低电/低压状态（Beta）
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-Guides/vehicle-data-0000001052859442
---

# 低油/低电/低压状态（Beta）

## 场景说明

HiCar会为车服务应用提供低油/低电/胎压低压状态数据，用于支撑车服务应用向用户提供推荐服务。

车机需要在HiCar连接成功后主动上报这些车身状态数据，并在后续状态数据发生变化时更新数据状态。

车身数据相关的数据格式说明请参考《HUAWEI HiCar SDK API参考》"HiCar App与车机间接口"中[低油低电低压状态](https://developer.huawei.com/consumer/cn/doc/HiCar-References/low-fuel-battery-voltage-status-0000001199459869)部分。

## 开发步骤

1. 手机和车机成功连接并投屏后，车机需要通过**HiCarSendData**接口向HiCar App上报当前的车身数据。油车请同时上报低油和低压状态，电动汽车请同时上报低电和低压状态。车机发送的数据内容示例如下：

   ```screen
   {
       "isOilEmpty":false,
       "isTpLow":false
   }
   ```

2. 在车机数据状态发生变化后，车机需要主动上报变化后的车身数据状态。只需上报状态发生变化的数据即可。车机发送的数据内容示例如下：

   ```screen
   {
       "isOilEmpty":true
   }
   ```

