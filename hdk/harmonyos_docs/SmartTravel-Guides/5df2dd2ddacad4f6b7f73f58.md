---
name: document/cn/SmartTravel-Guides/call-status-and-focus-0000001051530010
title: Call Status and Focus
uri: https://developer.huawei.com/consumer/cn/doc/SmartTravel-Guides/call-status-and-focus-0000001051530010
source: portal
---

# Call Status and Focus

#### Scenario

By default, HiCar provides the call service. If the head unit also provides the call service, conflicts may occur when they run at the same time. Therefore, the head unit should notify HiCar of the native call service state. When HiCar provides the call service, the head unit needs to report the call/hang-up event based on the call state of HiCar when the user presses the control button. Therefore, the head unit needs to obtain the call status from HiCar.

For details about the related data format, please refer to [Call State](https://developer.huawei.com/consumer/cn/doc/development/SmartTravel-References/call-focus-0000001199330037) in the **APIs Between the HiCar App and Head Unit** section in the API Reference.

If the head unit call conflicts with the HiCar call, the conflict will be resolved using solutions described in Table 1.

**Table 1** Call conflict scenarios  Conflict Scenario | Solution  
---|---  
There is an incoming call for the head unit during a HiCar call. | The mechanism is as follows:
     * If the incoming call for the head unit is a high-priority call, for example, an E-Call, the HiCar call will be released. 
     * If the incoming call for the head unit is a regular call, such as a B-Call, I-Call, or Bluetooth call, when the user answers the call, the HiCar call will be released. When the user declines the call, the HiCar call will not be affected.   
There is an outgoing call from the head unit during a HiCar call. | The HiCar call will be released.  
There is an incoming call for HiCar during a head unit call. | The mechanism is as follows:
     * If the outgoing call from the head unit is a high-priority call, for example, an E-Call, the HiCar call will be released. 
     * If the incoming call for HiCar is a regular call, such as a B-Call, I-Call, or Bluetooth call, the head unit will display the HiCar calling screen or floating window on the head unit screen. When the user answers the call, the head unit call will be released. When the user declines the call, the head unit call will not be affected.   
There is an outgoing call from HiCar during a head unit call. | The head unit call will be maintained or released.  
  
**Table 2** APIs for connecting and releasing HiCar calls  Class | Method | Description  
---|---|---  
HiCarAdapter | sendKeyEvent | Sends a key event. When handling a call conflict scenario, the HMI app can reuse the key event to connect or release a call.
     * **KEYCODE_CALL** (value being **5**): The HiCar call is connected. 
     * **KEYCODE_ENDCALL** (value being **6**): The HiCar call is released.   
  
#### Development Procedure

     1. When a native call starts or ends, the head unit notifies HiCar of the call state through **HiCarAdapter::sendCarData**.
        * This API notifies HiCar that the call state is unavailable when a native call is started. 
        * This API notifies HiCar that the call state is available when a native call ends. 

The head unit sends the following data: 
    
    {
        "isCallAvailable":true
    }

     2. The HiCar app notifies the head unit when the call state changes. The head unit can use the **onDataReceive** method to determine the **dataType** and then obtain the call state. The head unit receives the following data:
            
            {
                "callState":1
            }

     3. For details about how to connect or release a HiCar call by sending a key event, please refer to [Managing Buttons, Knobs, and Touchpads](https://developer.huawei.com/consumer/cn/doc/development/SmartTravel-Guides/physical-key-knob-0000000000030794).
