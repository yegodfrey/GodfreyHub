---
name: document/cn/SmartTravel-Guides/permission-suggestions-0000001416037829
title: Suggestions on Handling Sensitive Permissions
uri: https://developer.huawei.com/consumer/cn/doc/SmartTravel-Guides/permission-suggestions-0000001416037829
source: portal
---

# Suggestions on Handling Sensitive Permissions  
  
#### Scenario

To implement all HiCar features, you will have to use sensitive permissions of the intelligent cockpit such as the location permission and the camera permission, when integrating the HiCar SDK to develop your HMI app. According to relevant laws and regulations, users should be notified through the interface or voice when an app accesses sensitive permissions of the intelligent cockpit, and should be able to cancel the authorization through a unified permission control switch or button. After a permission is disabled, it can only be re-enabled manually by the user and cannot be re-enabled automatically.

It is recommended that you properly handle the logic related to sensitive permissions when integrating the HiCar SDK to develop an HMI app.

#### Requirements for Handling Sensitive Permissions

You will need to apply for the following sensitive permissions when integrating the HiCar SDK to develop an HMI app:

     * Microphone permission
     * Location permission
     * Camera permission

To ensure compliance with relevant laws and regulations, it is recommended that you add the feature of app permission management during HiCar integration.

     * If such permission management feature is available on the head unit system, add the HMI app integrated with the HiCar SDK to the permission management list, and provide the features of enabling/disabling the app to obtain the microphone, location, and camera permissions.
     * If such permission management feature is not available on the head unit system, it is strongly recommended that you first add this feature to the head unit system, and provide the features of enabling/disabling the HMI app integrated with the HiCar SDK to obtain the microphone, location, and camera permissions.

#### Rules for Handling Sensitive Permissions

It is recommended that you properly implement the logic of processing permission applications on the user interface and notifying users of permission changes, in compliance with the rules listed below.

**Table 1** When permissions are disabledService Scenario | Permission | Permission Status | Handling Rules  
---|---|---|---  
The user starts the HiCar HMI app for the first time or switches the HiCar HMI app to the foreground | Microphone | Disabled | A prompt is displayed requesting the microphone permission. If the user does not agree with the authorization, another prompt is displayed, indicating that HiCar will be unavailable without the microphone permission. At the same time, the app forcibly exits.  
Location | Disabled | A prompt is displayed requesting the location permission. If the user does not agree with the authorization, another prompt is displayed, indicating that some HiCar features will be unavailable without the location permission, but the user can continue using HiCar.  
Camera | Disabled | A prompt is displayed requesting the camera permission. If the user does not agree with the authorization, another prompt is displayed, indicating that some HiCar features will be unavailable without the camera permission, but the user can continue using HiCar.  
  
**Table 2** When the permission status is changed with the HiCar connection establishedService Scenario | Permission | Permission Status | Handling Rule  
---|---|---|---  
HiCar connection is established, but the permission status changes | Microphone | Enabled and then disabled | A prompt is displayed, indicating that HiCar will be unavailable as the microphone permission has been disabled, and advising the user to enable the microphone permission. If the permission is not enabled, the app will forcibly exit.  
Disabled and then enabled | N/A. When the microphone permission is disabled, the app will exit due to restrictions by other rules. In this case, the head unit cannot connect to HiCar.  
Location | Enabled and then disabled | A prompt is displayed, indicating that some HiCar features will be affected as the location permission has been disabled, and advising the user to enable the location permission.  
Disabled and then enabled | No prompt is required.  
Camera | Enabled and then disabled | A prompt is displayed, indicating that some HiCar features will be affected as the camera permission has been disabled, and advising the user to enable the camera permission.  
Disabled and then enabled | No prompt is required.  
  
**Table 3** When the permission status is changed without HiCar connection, with HiCar running in the backgroundService Scenario | Permission | Permission Status | Handling Rule  
---|---|---|---  
HiCar connection is not established and HiCar runs in the background, but the permission status changes | Microphone | Enabled and then disabled | No prompt is required.  
Disabled and then enabled | No prompt is required.  
Location | Enabled and then disabled | No prompt is required.  
Disabled and then enabled | No prompt is required.  
Camera | Enabled and then disabled | No prompt is required.  
Disabled and then enabled | No prompt is required.
