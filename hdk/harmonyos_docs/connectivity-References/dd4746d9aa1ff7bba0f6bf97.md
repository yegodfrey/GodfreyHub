---
name: document/cn/connectivity-References/virtual-device-0000001052587340
title: VirtualDevice
uri: https://developer.huawei.com/consumer/cn/doc/connectivity-References/virtual-device-0000001052587340
---

# VirtualDevice

|Class Info|
|:--------------------------------------------------------------------------------|
|public class VirtualDeviceManager extends VirtualManager 该类为设备的信息定义类，提供设备的相关信息接口。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:----------------------------------------------------------------------------------------|
|String|[getDeviceId](#section31311151115214)() 获取设备的设备ID。|
|String|[getDeviceType](#section187422195319)() 获取设备的设备类型。|
|String|[getDeviceName](#section19186111675315)() 获取设备的设备名称。|
|Enum Capability|[getDeviceCapability](#section3506183745317)() 获取设备的支持能力。|
|String|[getData](#section2031445355318)(String propName) 根据属性名，获取设备属性。|
|int|[setData](#section20627177548)(String configName, Map\<String, Object\> params) 下发设备配置参数。|

#### Public Methods

#### getDeviceId

|Method|
|:-------------------------------------|
|public String getDeviceId() 获取设备的设备ID。|

Return  

|Type|Description|
|:-----|:----------|
|String|设备ID。|

#### getDeviceType

|Method|
|:---------------------------------------|
|public String getDeviceType() 获取设备的设备类型。|

Return  

|Type|Description|
|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------|
|String|设备类型： DEVICE_TYPE_UNKNOWN="000"; DEVICE_TYPE_TV="02E"; DEVICE_TYPE_CAMERA="008"; DEVICE_TYPE_VOICEBOX="00A"; DEVICE_TYPE_HIWEAR="00C"; 参见DeviceType。|

#### getDeviceName

|Method|
|:---------------------------------------|
|public String getDeviceName() 获取设备的设备名称。|

Return  

|Type|Description|
|:-----|:----------|
|String|设备名称。|

#### getDeviceCapability

|Method|
|:-----------------------------------------------------------|
|public Enum getDeviceCapability() 取设备的支持能力，如是否支持camera、MIC等。|

Return  

|Type|Description|
|:------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|EnumSet|获取设备的支持能力，如是否支持camera、MIC等，定义如下： Capability.CAMERA Capability.MIC Capability.SPEAKER Capability.DISPLAY Capability.VIBRATE Capability.SENSOR Capability.NOTIFICATION 参见Enum Capability。|

#### getData

|Method|
|:-----------------------------------------------------------------------------|
|public String getData(String propName) 根据属性名，获取设备属性，比如获取camera设备对应Android设备ID。|

Parameters  

|Name|Description|
|:-------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|propName|获取设备属性字符串。 Constants.ANDROID_CAMERAID_FRONT Constants.ANDROID_CAMERAID_BACK Constants.ANDROID_CAMERAID_CAR_LEFT Constants.ANDROID_CAMERAID_CAR_RIGHT Constants.ANDROID_CAMERAID_CAR_DRIVER Constants.ANDROID_CAMERAID_CAR_CODRIVER Constants.ANDROID_CAMERAID_CAR_REARSEAT_LEFT Constants.ANDROID_CAMERAID_CAR_REARSEAT_RIGHT Constants.ANDROID_CAMERAID_ALL|

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220513105005.83828154605170557933224534792197:50530512064512:2800:568E738511B0FE5223B3D632B2DF06B01907FCF97EBBA5C1B4AF36D30B50AB0C.png?needInitFileName=true?needInitFileName=true)  
1. 只有当设备capability等于Capability.CAMERA时有效, 其中当属性名为ANDROID_CAMERAID_ALL时，则返回camera设备对应的所有的Android设备ID。

2. String ANDROID_CAMERAID_LIST = "android.cameraid.list"作为保留参数，请使用ANDROID_CAMERAID_ALL替代。

Return  

|Type|Description|
|:-----|:----------|
|String|设备属性信息。|

#### setData

|Method|
|:----------------------------------------------------------------------------------------------------------------|
|public int setData(String configName, Map\<String, Object\> params) 下发设备配置参数，比如下发camera配置参数，控制camera是否开启旋转、镜像等功能。|

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220513105005.19839054765244659839728523063524:50530512064512:2800:AD0C082AFE2BB316FF53B48C25C5984CC2F17CA9852918F2E28D71929D085CAF.png?needInitFileName=true?needInitFileName=true)  
本能力需要DV Engine版本在1.0.3.300及以上才支持。

Parameters  

|Name|Description|
|:---------|:--------------------------------|
|configName|配置参数类型名称。 Constants.CAMERA_CONFIG|
|params|需要下发的配置参数列表，取值范围说明参见下表。|

|key值（配置项）|value值（配置数据）|
|:---------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Constants.CAMERA_POSITION 表示向指定方位的camera下发配置，在配置camera参数时，该配置项为必选项。 该配置项只在配置参数类型为Constants.CAMERA_CONFIG时有效。|Constants.ANDROID_CAMERAID_FRONT Constants.ANDROID_CAMERAID_BACK Constants.ANDROID_CAMERAID_CAR_LEFT Constants.ANDROID_CAMERAID_CAR_RIGHT Constants.ANDROID_CAMERAID_CAR_DRIVER Constants.ANDROID_CAMERAID_CAR_CODRIVER Constants.ANDROID_CAMERAID_CAR_REARSEAT_LEFT Constants.ANDROID_CAMERAID_CAR_REARSEAT_RIGHT Constants.ANDROID_CAMERAID_ALL|
|Constants.AUTO_ORIENTATION 表示是否开启camera自动旋转，在设备转动时，保持图像始终正向显示，初始状态为不开启。 该配置项只在配置参数类型为Constants.CAMERA_CONFIG时有效。|Constants.AUTO_ORIENTATION_ENABLE Constants.AUTO_ORIENTATION_DISABLE|
|Constants.DO_MIRROR 表示是否开启camera镜像，初始状态为不开启。 该配置项只在配置参数类型为Constants.CAMERA_CONFIG时有效。|Constants.DO_MIRROR_ENABLE Constants.DO_MIRROR_DISABLE|

Return  

|Type|Description|
|:---|:------------------------------------------------------------------------------------------------------------------------------------------------|
|int|0表示调用成功，非0表示调用失败，参见[ReturnCode](https://developer.huawei.com/consumer/cn/doc/development/connectivity-References/return-code-0000001052468665)说明。|

