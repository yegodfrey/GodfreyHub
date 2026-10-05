---
name: document/cn/SmartTravel-References/brand-icon-0000001199289933
title: Brand Logo
uri: https://developer.huawei.com/consumer/cn/doc/SmartTravel-References/brand-icon-0000001199289933
source: portal
---

# Brand Logo

#### Data Type

502

#### API Version

1.0

#### API Definition

**Table 1** API for the brand logoParameter | **Mandatory** | Type | **Description**  
---|---|---|---  
brandIconData | Yes | string | Obtains the PNG data of the car brand logo. The field value is "PNG".  
  
#### API Examples

Example: The HiCar app sends the vehicle brand logo to the head unit.
    
    {
        "brandIconData":"PNG"
    }

After receiving the preceding data and obtaining the vehicle brand logo, the head unit returns the PNG data of the image.
