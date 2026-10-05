---
name: document/cn/SmartTravel-References/vehicle-mounted-camera-0000001153450250
title: Photographing with the Vehicle-mounted Camera
uri: https://developer.huawei.com/consumer/cn/doc/SmartTravel-References/vehicle-mounted-camera-0000001153450250
source: portal
---

# Photographing with the Vehicle-mounted Camera

#### Scenario Overview

If the head unit supports taking photos with the vehicle-mounted camera, the user can do so using HiCar voice control after the head unit is connected to HiCar.

#### Data Type

522

#### API Version

1.0

#### API Definition

**Table 1** API for taking photos using the vehicle-mounted cameraParameter | **Mandatory** | Type | **Description**  
---|---|---|---  
service | Yes | string | Service type. The value is **photo** for the current service.  
subService | Yes | string | Subservice type. The value is **capability** for the current service.  
command | Yes | int | Instructions:
     * **0** : The HiCar app obtains the photographing capabilities.
     * **1** : The HiCar app delivers a photographing instruction to the head unit.
     * **2** : The head unit proactively reports the photographing result to the HiCar app.  
errorCode | Yes | int | Result code:
     * **100000** : Success.
     * **100004** : Failure.  
data | Yes | object | Parameter. For details, see Table 2.  
  
**Table 2** DataParameter | **Mandatory** | Type | **Description**  
---|---|---|---  
camera | Yes | object | Camera parameters. For details, see Table 3.  
  
**Table 3** CameraParameter | **Mandatory** | Type | **Description**  
---|---|---|---  
isControlSupported | Yes | int | Whether the vehicle-mounted camera supports control (reported based on the bit):
     * bit0: Whether camera operations are supported. **0** : no; **1** : yes.
     * bit1: Whether the front camera is supported. **0** : no; **1** : yes.
     * bit2: Whether the rear camera is supported. **0** : no; **1** : yes.
     * bit3: Whether the left camera is supported. **0** : no; **1** : yes.
     * bit4: Whether the right camera is supported. **0** : no; **1** : yes.
     * bit5: Whether the internal camera is supported. **0** : no; **1** : yes.
     * bit6: Whether the 360° panorama camera is supported. **0** : no; **1** : yes.
Example:
     * **0** : Not supported.
     * **7 (0000111)** : The front and rear cameras are supported.  
position | Yes | int | The vehicle-mounted camera used for photographing is delivered based on the bit:
     * bit0: **1** : Use the camera to take photos.
     * bit1: Whether to use the front camera. **0** : no; **1** : yes.
     * bit2: Whether to use the rear camera. **0** : no; **1** : yes.
     * bit3: Whether to use the left camera. **0** : no; **1** : yes.
     * bit4: Whether to use the right camera. **0** : no; **1** : yes.
     * bit5: Whether to use the internal camera. **0** : no; **1** : yes.
     * bit6: Whether to use the 360° panorama camera. **0** : no; **1** : yes.
Example:
     * **3 (0000011)** : Use the front camera to take photos.
     * **7 (0000111)** : Use the front and rear cameras to take photos.  
  
#### API Examples

     1. Example: Query whether the head unit supports taking photos with the vehicle-mounted cameras via voice commands.
        1. The HiCar app sends a query message to the head unit.
               
               {
                   "service":"photo",
                   "subService":"capability",
                   "command":0
               }

        2. The head unit returns a response to the HiCar app.

(1) The capability is supported, and the camera information is reported:
               
               {
                   "service":"photo",
                   "subService":"capability",
                   "command":0,
                   "errorCode":100000,
                   "data":{
                       "camera":{
                           "isControlSupported":3
                       }
                   }
               }

(2) Not supported:
               
               {
                   "service":"photo",
                   "subService":"capability",
                   "command":0,
                   "errorCode":100004
               }

     2. The user takes photos with vehicle-mounted cameras via voice commands.
        1. The HiCar app sends a photographing instruction message to the head unit.
               
               {
                   "service":"photo",
                   "subService":"capability",
                   "command":1,
                   "data":{
                       "camera":{
                           "position":3
                       }
                   }
               }

        2. The head unit returns a response to the HiCar app.

(1) Successful response:
               
               {
                   "service":"photo",
                   "subService":"capability",
                   "command":1,
                   "errorCode":100000
               }

(2) Failed response:
               
               {
                   "service":"photo",
                   "subService":"capability",
                   "command":1,
                   "errorCode":100004
               }

     3. Example: The head unit proactively reports the photographing. To prevent conflicts between the head unit's own voice functions and HiCar's voice functions, requests from non-HiCar apps need to be proactively reported.

The head unit reports a message to the HiCar app:
            
            {
                "service":"photo",
                "subService":"capability",
                "command":2,
                "data":{
                    "camera":{
                        "position":3
                    }
                }
            }
