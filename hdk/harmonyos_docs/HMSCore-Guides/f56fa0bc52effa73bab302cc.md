---
name: document/cn/HMSCore-Guides/extended-errocode-0000001053256958
title: 错误码
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/extended-errocode-0000001053256958
---

# 错误码

错误码对应的API接口为**[HiHealthError](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealtherror-0000001071707423)**。

|常量字段|数值|数据定义|典型场景|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----|:-----------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------|
|[SUCCESS](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealtherror-0000001071707423#ZH-CN_TOPIC_0000002516362104__SUCCESS)|0|调用成功|执行正常|
|[FAILED](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealtherror-0000001071707423#ZH-CN_TOPIC_0000002516362104__FAILED)|1|调用失败|1、没有安装华为运动健康App 2、AIDL绑定失败|
|[PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealtherror-0000001071707423#ZH-CN_TOPIC_0000002516362104__PARAM_INVALID)|2|参数异常|入参错误|
|[ERR_API_EXECEPTION](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealtherror-0000001071707423#ZH-CN_TOPIC_0000002516362104__ERR_API_EXECEPTION)|4|API调用异常|与运动健康App通信中断|
|[ERR_DEVICE_EXCEPTION](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealtherror-0000001071707423#ZH-CN_TOPIC_0000002516362104__ERR_DEVICE_EXCEPTION)|5|设备异常|设备数据读取失败或设备不支持功能|
|[ERR_HEALTH_VERSION_IS_NOT_SUPPORTED](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealtherror-0000001071707423#ZH-CN_TOPIC_0000002516362104__ERR_HEALTH_VERSION_IS_NOT_SUPPORTED)|30|运动健康App版本较低|查询体温新类型值时运动健康App版本较低|
|[ERR_HEALTH_SERVICE_DISCONNECTED](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealtherror-0000001071707423#ZH-CN_TOPIC_0000002516362104__ERR_HEALTH_SERVICE_DISCONNECTED)|31|与运动健康App的连接断开|1、注册运动数据回调后，与运动健康App的连接断开 2、订阅日常数据后，与运动健康App的连接断开，提示需要重新订阅|
|[ERR_HMS_UNAVAILABLE_VERSION](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealtherror-0000001071707423#ZH-CN_TOPIC_0000002516362104__ERR_HMS_UNAVAILABLE_VERSION)|32|HMS版本低|HMS华为移动服务版本号小于5.1.0.300，建议升级到最新版本|
|[ERR_REPEAT_EXCEPTION](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealtherror-0000001071707423#ZH-CN_TOPIC_0000002516362104__ERR_REPEAT_EXCEPTION)|101|重复调用|使用相同模型重复订阅日常数据|
|[ERR_LIMIT_EXCEPTION](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealtherror-0000001071707423#ZH-CN_TOPIC_0000002516362104__ERR_LIMIT_EXCEPTION)|102|超出调用阈值|订阅日常数据使用模型数超过10个|
|[ERR_DEVICE_NOT_CONNECTED](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealtherror-0000001071707423#ZH-CN_TOPIC_0000002516362104__ERR_DEVICE_NOT_CONNECTED)|150|设备未连接|未连接设备|
|[ERR_WRONG_DEVICE](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealtherror-0000001071707423#ZH-CN_TOPIC_0000002516362104__ERR_WRONG_DEVICE)|151|用户设备类型选择错误|选择了与运动类型不一致的设备类型|
|[ERR_CANCEL_SELECT_DEVICE](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealtherror-0000001071707423#ZH-CN_TOPIC_0000002516362104__ERR_CANCEL_SELECT_DEVICE)|152|取消选择设备|当开启器械运动时，没有选择设备|
|[ERR_PERMISSION_EXCEPTION](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealtherror-0000001071707423#ZH-CN_TOPIC_0000002516362104__ERR_PERMISSION_EXCEPTION)|1001|隐私权限校验异常|1、用户未授权，需要提醒用户打开相关权限 2、授权过期，建议重新调用silentSignIn授权重试 3、锁屏调用，建议解锁后调用|
|[ERR_PRIVACY_USER_DENIED](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealtherror-0000001071707423#ZH-CN_TOPIC_0000002516362104__ERR_PRIVACY_USER_DENIED)|1003|APP隐私协议未同意异常|用户未在华为运动健康App上同意隐私协议|
|[ERR_NETWORK](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealtherror-0000001071707423#ZH-CN_TOPIC_0000002516362104__ERR_NETWORK)|1004|网络请求失败|测试权限鉴权时网络出现异常|
|[ERR_BLUETOOTH_NOT_ENABLED](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealtherror-0000001071707423#ZH-CN_TOPIC_0000002516362104__ERR_BLUETOOTH_NOT_ENABLED)|1005|蓝牙未开启|连接蓝牙设备时，蓝牙未开启|
|[ERR_LOCATION_PERMISSION_DENIED](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealtherror-0000001071707423#ZH-CN_TOPIC_0000002516362104__ERR_LOCATION_PERMISSION_DENIED)|1006|定位权限未开启|扫描蓝牙设备时，未赋予运动健康App定位权限|
|[ERR_STORAGE_PERMISSION_DENIED](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealtherror-0000001071707423#ZH-CN_TOPIC_0000002516362104__ERR_STORAGE_PERMISSION_DENIED)|1007|存储权限未开启|存储运动轨迹时，未赋予运动健康App存储权限|
|[ERR_BETA_SCOPE_EXCEPTION](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hihealtherror-0000001071707423#ZH-CN_TOPIC_0000002516362104__ERR_BETA_SCOPE_EXCEPTION)|50048|未[申请验证](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/verification-0000001196917670)的应用Beta用户超出了预置数值|使用某测试权限的用户超过100人|

