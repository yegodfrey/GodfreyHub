---
name: document/cn/HiCar-Guides/configure-camera-0000001064941294
title: 配置Camera信息
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-Guides/configure-camera-0000001064941294
---

# 配置Camera信息

## 场景说明

在HiCar SDK初始化时，厂商HMI应用需要上报车辆的Camera信息，当手机与车机建立HiCar连接后，手机会通过HiCar SDK将这些Camera作为手机的虚拟Camera使用。

车机环境中存在两类Camera：

* Android Camera：通过标准Android接口可以使用的Camera。如果希望HiCar SDK能够使用此类Camera，只需按照本章节内容在HiCar SDK初始化时通过setAndroidCamInfos方法，上报对应的Camera信息即可。
* Native Camera：无法通过标准Android接口使用的Camera。如果希望HiCar SDK能够使用此类Camera，厂商需要事前根据HiCar提供的Camera相关接口完成适配，详细适配方法请参见[Camera（Beta）](https://developer.huawei.com/consumer/cn/doc/HiCar-Guides/camera-0000000000030830)。适配完成后在HiCar SDK初始化时通过setNativeCamInfos方法，上报对应的Camera信息。

HiCar SDK仅会使用厂商HMI应用上报的Camera信息，厂商可以根据实际情况选择性上报可被HiCar SDK使用的Camera，例如上报前置Camera信息，不上报倒车影像Camera信息。
> 说明
>
> HiCar SDK会调用标准Android Camera服务读取系统中的Android Camera属性信息，部分厂商系统对Android Camera服务进行了裁剪，此时需要通过SDK提供的ignoreAndroidCamera属性显式通知SDK忽略Android Camera检查，避免SDK调用Camera服务相关接口导致的运行时异常。

## 接口说明

|类|方法|说明|
|:-----------------|:------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|CarConfig|Builder.withCameraCustomDefine|HiCar SDK初始化时设置车机Camera配置信息。|
|CarConfig|Builder.withIgnoreAndroidCamera|HiCar SDK初始化时设置是否忽略Android Camera。|
|CarConfig|updateCameraCustomDefine|更新车机Camera配置信息。|
|CameraCustomDefine|setAndroidCamInfos|设置Android Camera信息。通过Android接口发现和控制的Camera。|
|CameraCustomDefine|setNativeCamInfos|设置Native Camera信息。通过非Android接口发现和控制的Camera，即使用HiCar SDK提供的Camera设备接口适配后的Camera，详情参见[Camera（Beta）](https://developer.huawei.com/consumer/cn/doc/HiCar-Guides/camera-0000000000030830)。|
[**表1**配置Camera自定义信息相关接口]

## 开发步骤

1. 在HiCar SDK初始化时，选择使用的Camera类型，如果厂商系统已经适配支持原生Android Camera，则无需忽略Android Camera，SDK初始化过程中会调用标准Android Camera服务接口查询Camera属性信息并上报给手机侧；如果厂商系统裁剪了Android Camera服务，需要设置忽略Android Camera避免SDK初始化异常。

   ```screen
   //设置车机信息
   CarConfig.Builder builder = new CarConfig.Builder(); 
   //设置是否忽略Android Camera 
   builder.withIgnoreAndroidCamera(true);
   CarConfig carConfig = builder.build(); 
   ```

2. 在HiCar SDK初始化时，如果车机存在可被HiCar SDK使用的Android Camera，则构造CameraCustomDefine对象。

   示例代码如下所示：

   ```screen
   // 摄像头自定义扩展信息
   CameraCustomDefine customDefine = newCameraCustomDefine();
   ```

3. 填充可被HiCar SDK使用的Camera信息。

   例如，车机存在驾驶位Camera，上报给HiCar SDK的示例代码如下所示：

   ```screen
   Map<Integer, CameraExtInfo> androidCamInfos = new HashMap<>();
   CameraExtInfo extCam1 = new CameraExtInfo();
   extCam1.setDesc("Camera At Driver Position");
   extCam1.setLocation(CameraLocation.CAR_DRIVER);
   // 设置只有id为1的安卓摄像头
   androidCamInfos.put(1, extCam1);
   customDefine.setAndroidCamInfos(androidCamInfos);
   carConfig.updateCameraCustomDefine(customDefine);
   ```

