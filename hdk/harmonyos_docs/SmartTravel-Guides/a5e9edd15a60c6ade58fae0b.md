---
name: document/cn/SmartTravel-Guides/update-head-unit-information-0000000000030706
title: Updating Head Unit Information When the SDK Is Running
uri: https://developer.huawei.com/consumer/cn/doc/SmartTravel-Guides/update-head-unit-information-0000000000030706
source: portal
---

# Updating Head Unit Information When the SDK Is Running

#### Scenario

The HMI app can set the head unit parameters during SDK initialization, or dynamically update head unit parameters when the SDK is running.

     * Parameters that can be updated when the SDK is running include: projection surface object, wireless connectivity, wired connectivity, automatic connectivity, screen resolution width (**VideoWidth**), screen resolution height (**VideoHeight**), head unit camera configurations, and more.
     * Other parameters, such as **ModelID** and Bluetooth MAC address, can be set only during SDK initialization.

#### API Description

**Table 1** APIs for updating head unit information in the running stateClass | Method | Description  
---|---|---  
CarConfig | updateSurface | Updates the projection surface object.  
updateSupportWireless | Updates whether the wireless connection is supported.  
updateSupportUsb | Updates whether the wired connection is supported.  
updateSupportReconnect | Updates whether the automatic connection is supported.  
updateVideoWidth | Updates the width of the projection area.  
updateVideoHeight | Updates the height of the projection area.  
updateCameraCustomDefine | Updates the camera information of the head unit.  
updateDefaultBitrate | Updates the default projection bit rate of the head unit.  
updateAdvPower | Updates the advertising signal strength of the head unit.  
update5gChannels | Updates the list of 5 GHz Wi-Fi channels supported by the head unit.  
updateDpi | Updates the projection DPI.  
updateFps | Updates the projection FPS.  
updateGop | Updates the number of frames between two I-frames.  
updateCodecType | Updates the encoding format of projection video streams.  
updateCodecConfigureFlag | Updates the customized parameters of the head unit decoder.  
  
For details about the preceding APIs, see the following sections in this document.

#### Development Procedure

The following is the sample code for updating the head unit parameters when the SDK is running:
    
    // Update the projection area information.
    carconfig.updateVideoWidth(1024);
    carconfig.updateVideoHeight(768);
    // Update whether automatic connection is supported.
    carconfig.updateSupportReconnect(true);
