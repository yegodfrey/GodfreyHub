---
name: document/cn/SmartTravel-References/voice-status-0000001153290430
title: Voice State
uri: https://developer.huawei.com/consumer/cn/doc/SmartTravel-References/voice-status-0000001153290430
source: portal
---

# Voice State

#### Scenario Overview

The voice wakeup physical key of the head unit is generally a reused key, offering functions including launching/exiting the voice assistant and answering/ending calls. To enable the head unit to define and reuse the functions of the voice wakeup physical key based on the voice state, the HiCar app sends the current voice state to the head unit when the voice status changes.

#### Data Type

505

#### API Version

1.0

#### API Definition

**Table 1** Voice Status APIParameter | **Mandatory** | Type | **Description**  
---|---|---|---  
voiceState | Yes | int | HiCar voice state:
     * **0** : Idle state, where the voice assistant is not running.
     * **1** : Awake state.  
  
#### API Examples

Example: The HiCar app sends the voice state to the head unit.
    
    When the voice assistant is in awake state:
    {
        "voiceState":1
    }
    When the voice assistant is in idle state:
    {
        "voiceState":0
    }
