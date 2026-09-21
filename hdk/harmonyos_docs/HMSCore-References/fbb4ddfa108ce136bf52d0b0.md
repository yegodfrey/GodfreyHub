---
name: document/cn/HMSCore-References/get-save-healthdata-0000001058135265
title: 数据查询及存储
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/get-save-healthdata-0000001058135265
---

# 数据查询及存储

三方通过BLE交互类API完成测量后，解析出测量结果；使用封装后的JS接口，按照约定的数据格式将测量结果存储到运动健康App。三方还可以查询历史测量结果以及用户的个人信息。

|接口|说明|
|:------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------|
|[getUserInfo](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/getuserinfo-0000001057566849)|获取当前用户的个人信息。|
|[getHealthData](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/gethealthdata-0000001057686853)|查询设备历史数据。当前支持查询体温、血氧、体重、血糖、血压数据。|
|[saveHealthData](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/savehealthdata-0000001056726832)|将设备测量数据存储到运动健康平台。当前支持将体温、血氧、体重、血糖、血压数据存储到运动健康。|
|[saveMultipleHealthData](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/savemultiplehealthdata-0000001057695282)|将多条设备测量数据存储到运动健康平台。当前支持将体温、血氧、血糖、体重、血压数据存储到运动健康。|
|[deleteMultipleHealthData](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/deletemultiplehealthdata-0000001072493244)|将多条设备测量数据从运动健康平台删除。当前支持JS删除血糖和跳绳数据。|
|[startScanCode](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/startscancode-0000001063282061)|启动扫码界面，通过扫描设备的SN码获取SN码信息。|
|[syncCloud](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/synccloud-0000001063800434)|将本地数据与云端同步。|
|[bindDevice](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/binddevice-0000001063642398)|将设备与数据中心和云端绑定。|

