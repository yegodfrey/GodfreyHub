---
name: document/cn/SmartTravel-Guides/enable-wireless-connection-0000000000105656
title: Enabling Wireless Connection of the SDK
uri: https://developer.huawei.com/consumer/cn/doc/SmartTravel-Guides/enable-wireless-connection-0000000000105656
source: portal
---

# Enabling Wireless Connection of the SDK

The HMI app can call the relevant API to send the BLE advertising packets and set up a wireless connection only when the wireless connection function of the HiCar SDK is enabled.

The following is the sample code for enabling wireless connection during SDK initialization:
    
    // Set whether to support wireless connection during initialization. For details, please refer to the API Reference.
    CarConfig config;
    Config.connectInfo.connectAllowType = 0x1; // Indicate that only wireless connection is supported.
