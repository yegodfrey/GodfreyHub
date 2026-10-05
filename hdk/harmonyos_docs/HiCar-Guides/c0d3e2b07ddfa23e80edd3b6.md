---
name: document/cn/HiCar-Guides/initialize-sdk-0000000000105632
title: 初始化SDK
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-Guides/initialize-sdk-0000000000105632
---

# 初始化SDK

## 场景说明

厂商HMI应用在初始化SDK时，需要先设置车机的基本信息，例如车机屏幕大小、蓝牙地址、主驾位置、车机类型等信息，然后在合适的时机（一般为用户需要用车时，例如车机系统上电且车机中控屏幕亮屏后）进行SDK初始化。

## 接口说明

|头文件|方法|说明|
|:------|:--------|:---------------------------------------------------------------|
|hicar.h|HiCarInit|厂商HMI应用应该在用户用车时（例如：车机系统点火上电且车机中控屏幕亮屏后）调用HiCarInit进行HiCar SDK初始化。|
[**表1**初始化接口]

## 开发步骤

1. 厂商HMI应用在调用HiCarInit接口初始化SDK前，构造CarConfig结构体，准备设置车机基本信息。

   厂商HMI应用需要在HiCar SDK初始化时提供的车机相关参数信息如[表2](#ZH-CN_TOPIC_0000001050064274__table033116302171)所示。

   |初始化参数||说明|
   |:--------|-----------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------|
   |CarConfig|[CarConnectInfo](https://developer.huawei.com/consumer/cn/doc/HiCar-References/car-connect-info-0000001050123078)|车机连接信息，包括厂商从华为获取的厂商标识、车机蓝牙地址、车机支持的连接方式等。|
   |CarConfig|[CarDeviceInfo](https://developer.huawei.com/consumer/cn/doc/HiCar-References/car-device-info-0000001050166038)|车机设备信息，包括汽车品牌、当前所处的深色/浅色模式、驾驶位位置等。|
   |CarConfig|[CarDisplayCapability](https://developer.huawei.com/consumer/cn/doc/HiCar-References/car-display-capability-0000001050167993)|车机显示信息，包括视频编码格式、帧率、车机屏幕物理尺寸等。|
   |CarConfig|[CarFeatureInfo](https://developer.huawei.com/consumer/cn/doc/HiCar-References/car-feature-info-0000001050166040)|车机特性信息，包括型号、车机OS版本号、车机CPU型号、车机存储大小、车机蓝牙芯片型号、车机Wi-Fi芯片型号等。|
   [**表2**SDK初始化参数]

   更多关于初始化参数的详细信息，请参考《HUAWEI HiCar SDK API参考》。

   ```screen
   CarConfig config;
   ```

2. 设置车机连接信息。示例代码如下所示：

   ```screen
   memcpy_s(&(config.connectInfo.modelId[0]), MODEL_ID_MAX_LEN, "00010001", MODEL_ID_MAX_LEN);
   memset_s(&(config.connectInfo.brMac[0]), BR_MAC_MAX_LEN, 0, BR_MAC_MAX_LEN);
   memcpy_s(&(config.connectInfo.brMac[0]), BR_MAC_MAX_LEN, "00:11:22:33:44:55", 17);

   config.connectInfo.connectAllowType = HICAR_CONNECT_ADVERTISE_USB;
   config.connectInfo.carDeviceId = (char*)malloc(strlen(CAR_DEVICE_ID_STUB) + 1);
   if (config.connectInfo.carDeviceId == NULL) {
   	printf("deviceId malloc fail.\n");
   	return -1;
   }
   /* 设备ID */
   memcpy_s(config.connectInfo.carDeviceId, strlen(CAR_DEVICE_ID_STUB) + 1, CAR_DEVICE_ID_STUB, strlen(CAR_DEVICE_ID_STUB));    
   config.connectInfo.idLen = strlen(config.connectInfo.carDeviceId);
   ```

3. 设置车机设备信息。示例代码如下所示：

   ```screen
   /* 汽车品牌信息 */
   memset_s((void*)&(config.deviceInfo.carBrand[0]), CAR_BRAND_MAX_LEN, 0, CAR_BRAND_MAX_LEN);
   memcpy_s((void*)&(config.deviceInfo.carBrand[0]), CAR_BRAND_MAX_LEN, "HICAR", strlen("HICAR"));
   config.deviceInfo.carBrandLen = strlen("HICAR");
   /* 深浅模式信息 */
   memset_s((void*)&(config.deviceInfo.dayNightInfo[0]), CAR_DAY_NIGHT_MAX_LEN, 0, CAR_DAY_NIGHT_MAX_LEN);
   memcpy_s((void*)&(config.deviceInfo.dayNightInfo[0]), CAR_DAY_NIGHT_MAX_LEN, "pending", strlen("pending"));
   config.deviceInfo.carDayNightLen = strlen("pending");
   /* 驾驶位置信息 */
   config.deviceInfo.steeringWheelPos = 0; // left
   /* 设备类型，参见CarDeviceType */
   config.deviceInfo.deviceType = HICAR_DEVICE_FRONT; // according to CarDeviceType in hicar.h
   /* 设置sdk日志路径 */
   config.deviceInfo.filePath.value = "/log/hicarlog";
   config.deviceInfo.filePath.length = strlen("/log/hicarlog");
   /* 娱乐类应用场景限制 */
   config.deviceInfo.entertainmentAllowType = HICAR_ONLY_PARK_ALLOW;  // 仅停车场景支持娱乐应用，即行驶时禁用娱乐应用
   /* 设置投屏边缘为方角 */ 
   config.deviceInfo.screenCornerType = (uint32_t)HICAR_SCREEN_SQUARE_CORNER;
   ```

4. 设置车机显示信息。

   |参数|数据类型|单位|说明|
   |:-----------|:------|:-|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   |codecs|int32_t|-|视频编码格式： * 1：H264（默认缺省值） * 2：H265，车机支持H265时优先采用H265|
   |fps|int32_t|-|帧率，默认30fps，取值范围20~60。|
   |gop|int32_t|-|投屏的两个I帧之间的间隔帧数： * -1：表示采用IPPP方式编码，缺省默认值 * 30~600：表示固定I帧间隔编码|
   |bitrate|int32_t|-|视频流默认码率、最小码率、最大码率。默认5Mb/s，最小1Mb/s，最大8Mb/s。 在H265视频编码格式下，各分辨率对应的码率设置可参考[表4](#ZH-CN_TOPIC_0000001050064274__table1580512773114)。 > 说明 > minbitrate, bitrate, maxBitrate三者需一同设置，否则可能导致显示异常。|
   |minBitrate|int32_t|-|视频流默认码率、最小码率、最大码率。默认5Mb/s，最小1Mb/s，最大8Mb/s。 在H265视频编码格式下，各分辨率对应的码率设置可参考[表4](#ZH-CN_TOPIC_0000001050064274__table1580512773114)。 > 说明 > minbitrate, bitrate, maxBitrate三者需一同设置，否则可能导致显示异常。|
   |maxBitrate|int32_t|-|视频流默认码率、最小码率、最大码率。默认5Mb/s，最小1Mb/s，最大8Mb/s。 在H265视频编码格式下，各分辨率对应的码率设置可参考[表4](#ZH-CN_TOPIC_0000001050064274__table1580512773114)。 > 说明 > minbitrate, bitrate, maxBitrate三者需一同设置，否则可能导致显示异常。|
   |dpi|int32_t|-|虚拟设备DPI值。关于DPI值的参数策略说明： * 优先根据厂商设置的DPI参数进行显示。 * 如果未设置DPI参数，但设置了屏幕分辨率宽度和高度以及屏幕尺寸大小，则根据上述参数计算DPI值进行显示。 * 如果未设置DPI参数，同时设置的参数不足以计算DPI值，才采用DPI默认值320dpi进行显示。|
   |profile|int32_t|-|（预留字段）视频流层级。可不设置或设置为0。|
   |level|int32_t|-|（预留字段）视频流等级。可不设置或设置为0。|
   |screenWidth|int32_t|毫米|车机屏幕物理尺寸宽度。|
   |screenHeight|int32_t|毫米|车机屏幕物理尺寸高度。|
   |width|int32_t|像素|车机投屏区域宽度。|
   |height|int32_t|像素|车机投屏区域高度。|
   [**表3**投屏参数]

   > 注意
   >
   > 以下表格中的建议设置码率仅为参考值，实际码率设置，需要综合考虑车机侧芯片硬件数据处理能力、数据传输吞吐量等综合情况，使用经过实际测试后的平衡优化值。

   |**分辨率**|**480P** （**640x480**）|**720P** （**1280x720**）|**1080P** （**1920x1080**）|**1440P** （2560x1440）|**2160P** （3840x2160）|
   |:-----------------------------------------------|:----------------------------------------------|:----------------------------------------------|:----------------------------------------------|:------------------------------------------------|:-------------------------------------------------|
   |**低码率**(宽 * 高 * 3) / 2|500Kb/s|1Mb/s|2Mb/s|6Mb/s|12Mb/s|
   |**中码率** (宽 * 高 * 3)|1Mb/s|2Mb/s|4Mb/s|12Mb/s|25Mb/s|
   |**高码率** (宽 * 高 * 3) * 2|2Mb/s|4Mb/s|8Mb/s|22Mb/s|50Mb/s|
   |**极高码率** (宽 * 高 * 3) * 4|4Mb/s|8Mb/s|16Mb/s|45Mb/s|100Mb/s|
   |**最低码率**|500Kb/s|1Mb/s|2Mb/s|6Mb/s|12Mb/s|
   |**建议设置码率：** MinBitrate MaxBitrate DefaultBitrate|1 * 1000 * 1000 4 * 1000 * 1000 2 * 1000 * 1000|4 * 1000 * 1000 8 * 1000 * 1000 5 * 1000 * 1000|4 * 1000 * 1000 8 * 1000 * 1000 5 * 1000 * 1000|6 * 1000 * 1000 22 * 1000 * 1000 12 * 1000 * 1000|12 * 1000 * 1000 50 * 1000 * 1000 25 * 1000 * 1000|
   [**表4**针对H.265编码格式，不同分辨率对应的码率配置参考]

   示例代码如下所示：

   ```screen
   /* 设置显示能力 */
   config.displayCapability.codecs = 1;
   config.displayCapability.fps = 30;
   config.displayCapability.gop = -1;
   config.displayCapability.bitrate = 5*1000*1000;
   config.displayCapability.minBitrate = 3*1000*1000;
   config.displayCapability.maxBitrate = 8*1000*1000; // 注意：[minbitrate, bitrate, maxBitrate]需要一起设置
   config.displayCapability.dpi = 0;
   config.displayCapability.profile = 0;
   config.displayCapability.level = 0;
   config.displayCapability.screenWidth = 1920; // unit: mm
   config.displayCapability.screenHeight = 720;  // unit: mm
   config.displayCapability.width = 1920;
   config.displayCapability.height = 720;
   ```

5. 设置车机特性信息。示例代码如下所示：

   ```screen
   /* 设置车机特征 */
   InitCarFeatureInfo(&config);

   /* 其中InitCarFeatureInfo*/
   int32_t InitCarFeatureInfo(CarConfig *config)
   {
       if (config == NULL) {
           return -1;
       }
       CarFeatureInfo *feature = &config->featureInfo;
       FillDataInfo(&feature->carModel, "XXXX");
       FillDataInfo(&feature->manufacturer, "qcom");
       FillDataInfo(&feature->model, "msm8937_32go");
       FillDataInfo(&feature->os, "8.1.0");
       FillDataInfo(&feature->cpu, "armeabi-v7a");
       FillDataInfo(&feature->ram, "1.81GB");
       FillDataInfo(&feature->rom, "9.68GB");
       FillDataInfo(&feature->screenSize, "12.82");
       FillDataInfo(&feature->screenMetrics, "1920 X 720");
       FillDataInfo(&feature->linuxKernel, "3.18.71");
       FillDataInfo(&feature->btChip, "QCC5120");
       FillDataInfo(&feature->wifiChip, "BCM6338");
       FillDataInfo(&feature->romVersion, "7.0.7.9");
       return 0;
   }
   void FillDataInfo(DataInfo *info, char *content)
   {
       if (info == NULL || content == NULL) {
           return;
       }

       int len = strlen(content);
       if (len == 0) {
           return;
       }

       info->value = (uint8_t *)malloc(sizeof(uint8_t) * (len + 1));
       if (info->value == NULL) {
           return;
       }
       int ret = memset_s(info->value, sizeof(uint8_t) * (len + 1), 0, sizeof(uint8_t) * (len + 1));
       if (ret != EOK) {
           return;
       }
       ret = memcpy_s(info->value, sizeof(uint8_t) * (len + 1), (uint8_t*)content, len);
       if (ret != EOK) {
           return;
       }
       info->length = len;
       return;
   }
   ```

6. 厂商HMI应用调用HiCarInit接口初始化SDK。示例代码如下所示：

   ```screen
   CarLogFuncGroup logGroup;
   logGroup.logD = LogDebug;
   logGroup.logI = LogInfo;
   logGroup.logW = LogWarning;
   logGroup.logE = LogError;

   HiCarInit(&config, &logGroup);
   ```

