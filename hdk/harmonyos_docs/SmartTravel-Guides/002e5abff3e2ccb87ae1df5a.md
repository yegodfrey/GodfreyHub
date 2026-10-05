---
name: document/cn/SmartTravel-Guides/config-usb-0000001063680113
title: Configuring USB
uri: https://developer.huawei.com/consumer/cn/doc/SmartTravel-Guides/config-usb-0000001063680113
source: portal
---

# Configuring USB

#### Scenario

The HiCar SDK establishes a wired connection via USB. You need to provide the corresponding USB driver for the HiCar SDK.

#### API Description

You need to implement the **FcDriverAdaptOps** variable (including certain APIs) of the device API (**driver_adapt.h**) in the HiCar SDK package.

Please refer to Table 1 for APIs that must be implemented in the **FcDriverAdaptOps** variable, to configure USB.

**Table 1****FcDriverAdaptOps** structureStructure | Structure Member | Description  
---|---|---  
FcDriverAdaptOps | name | USB driver name.  
desc | Description of the USB device API, which can be customized, for example, **usb driver**.  
Init | USB driver Initialization API. The HiCar SDK calls this API to initialize the USB driver before using other USB APIs.  
Deinit | USB driver deinitialization API. You can deinitialize the USB driver, as required.  
GetParam | The HiCar SDK calls this API to obtain the vendor's **ModelID** , which is allocated by Huawei.  
RegisterChannelCallback | The HiCar SDK registers the callback with the driver. The driver uses this callback to report events to the HiCar SDK.  
  
For details about the implementation of the **FcDriverAdaptOps** variable, see the USB demo code (**driver_usb.c**) in the HiCar SDK. Note that the variable name must be **g_fcDriverUsbOps**.

#### Development Procedure

     1. Implement **Init** , which is the USB driver initialization API.

The following is the sample code:
            
            static int UsbDriverInit(const void *context, const char *ifName)
            {
                if (context == NULL) {
                    return RESULT_RET_ERROR;
                }
            
                UsbParam *usbParam = (UsbParam *)context;
                char ip[STR_IP_LEN + 1] = {0};
                if (strcpy_s(ip, STR_IP_LEN + 1, usbParam->localIp) != EOK) {
                    printf("UsbDriverInit copy ip fail.\n");
                }
            
                int port = usbParam->port;
                printf("UsbDriverInit port is:%d.\n", port);
                return RESULT_RET_OK;
            }

     2. Implement **Deinit** , which is the USB driver deinitialization API.

The following is the sample code:
            
            static int UsbDriverDeinit(const void *context)
            {
                (void)context;
                return RESULT_RET_OK;
            }

     3. Implement **GetParam** , which is the API for obtaining device parameters.

The following is the sample code:
            
            static int UsbGetParam(GetParamsType paramType, void *result)
            {
                if (paramType == GET_MODEL_ID) {
                    DeviceModelId *devModeld = (DeviceModelId *)result;
                    // The following data can be used for debugging:
                    devModeld->subModelFlag = 0x01;
                    devModeld->subModelId = 0x0;
                    unsigned char modelId[] = {0x00, 0x04, 0x09};
                    memcpy_s(devModeld->modelId, DEV_MODEL_ID_LEN, modelId, DEV_MODEL_ID_LEN);
                } else {
                    printf("UsbGetParam unknown paramType:%d.\n", paramType);
                    return RESULT_RET_ERROR;
                }
                return RESULT_RET_OK;
            }

     4. Implement **RegisterChannelCallback**.

The following is the sample code:
            
            static ChannelCallback *g_usbChannelCallback;
            static int UsbRegisterChannelCallback(const ChannelCallback *callback)
            {
                g_usbChannelCallback = (ChannelCallback *)callback;
                return RESULT_RET_OK;
            }
