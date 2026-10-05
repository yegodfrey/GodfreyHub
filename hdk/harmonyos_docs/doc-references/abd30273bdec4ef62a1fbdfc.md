---
name: document/cn/doc-references/distributedcallmanager-0000001054518844
title: DistributedCallManager
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/distributedcallmanager-0000001054518844
source: portal
---

# DistributedCallManager

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.dcall.DistributedCallManager
    
    public class DistributedCallManager
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Provides distributed call management. 

Applications can use the methods provided in this class to perform basic call management, including obtaining the current call state, registering and deregistering call components, and manages incoming and outgoing calls. Before managing calls, applications must call [DistributedCallManager#getInstance(Context)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distributedcallmanager-0000001054518844#ZH-CN_TOPIC_0000001054518844__getInstance-ohos_app_Context-) to obtain a DistributedCallManager instance. 

Some methods of this class are permission-protected. If your application is not granted the required permission, access to these protected methods is denied. The required permissions are provided in the description of a specific method.

**Since:**

3

#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
void | [addObserver](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distributedcallmanager-0000001054518844#ZH-CN_TOPIC_0000001054518844__addObserver-ohos_dcall_CallStateObserver-int-)​([CallStateObserver](https://developer.harmonyos.com/cn/docs/documentation/doc-references/callstateobserver-0000001054200104) observer, int mask) |  Adds an observer to monitor call service state changes.   
boolean | [dial](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distributedcallmanager-0000001054518844#ZH-CN_TOPIC_0000001054518844__dial-java_lang_String-boolean-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) number, boolean isVideoCall) |  Makes a call.   
void | [displayCallScreen](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distributedcallmanager-0000001054518844#ZH-CN_TOPIC_0000001054518844__displayCallScreen-boolean-)​(boolean showDialpad) |  Switches the call screen to the foreground.   
int | [getCallState](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distributedcallmanager-0000001054518844#ZH-CN_TOPIC_0000001054518844__getCallState--)​() |  Obtains the call state.   
static [DistributedCallManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distributedcallmanager-0000001054518844) | [getInstance](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distributedcallmanager-0000001054518844#ZH-CN_TOPIC_0000001054518844__getInstance-ohos_app_Context-)​([Context](https://developer.harmonyos.com/cn/docs/documentation/doc-references/context-0000001054440065) context) |  Obtains an instance of DistributedCallManager.   
boolean | [hasCall](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distributedcallmanager-0000001054518844#ZH-CN_TOPIC_0000001054518844__hasCall--)​() |  Checks whether a call is ongoing.   
boolean | [hasVoiceCapability](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distributedcallmanager-0000001054518844#ZH-CN_TOPIC_0000001054518844__hasVoiceCapability--)​() |  Checks whether a device supports voice calls.   
boolean | [isVideoCallingEnabled](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distributedcallmanager-0000001054518844#ZH-CN_TOPIC_0000001054518844__isVideoCallingEnabled--)​() |  Checks whether video calling is enabled on this device.   
void | [removeObserver](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distributedcallmanager-0000001054518844#ZH-CN_TOPIC_0000001054518844__removeObserver-ohos_dcall_CallStateObserver-)​([CallStateObserver](https://developer.harmonyos.com/cn/docs/documentation/doc-references/callstateobserver-0000001054200104) observer) |  Removes an observer to cancel monitoring call service state changes.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Method Detail

#### [h2]getInstance

public static [DistributedCallManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distributedcallmanager-0000001054518844) getInstance​([Context](https://developer.harmonyos.com/cn/docs/documentation/doc-references/context-0000001054440065) context)

Obtains an instance of DistributedCallManager. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
context  |  Indicates the context of the application.  
  
**Returns:**

Returns the instance of DistributedCallManager.

**Since:**

3

#### [h2]hasCall

public boolean hasCall​()

Checks whether a call is ongoing. 

**Returns:**

Returns true if at least one call is not in the [CallStateObserver#CALL_STATE_IDLE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/callstateobserver-0000001054200104#ZH-CN_TOPIC_0000001054200104__CALL_STATE_IDLE) state; returns false otherwise.

#### [h2]dial

public boolean dial​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) number, boolean isVideoCall)

Makes a call. 

Applications must have the [SystemPermission.PLACE_CALL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/systempermission-0000001054238971#ZH-CN_TOPIC_0000001054238971__PLACE_CALL) permission to call this method.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
number  |  Indicates the called number.  
isVideoCall  |  Indicates whether the call to be made is a video call. The value false indicates a voice call.  
  
**Returns:**

Returns true if the call request is successful; returns false otherwise. Note that the value true indicates only the successful processing of the request; it does not mean that the call is or can be connected.

#### [h2]displayCallScreen

public void displayCallScreen​(boolean showDialpad)

Switches the call screen to the foreground. 

The system performs the switching only if there is an ongoing call.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
showDialpad  |  Indicates whether the dialer is displayed on the call screen.  
  
#### [h2]getCallState

public int getCallState​()

Obtains the call state. 

If an incoming call is ringing or waiting, the system returns [CallStateObserver#CALL_STATE_RINGING](https://developer.harmonyos.com/cn/docs/documentation/doc-references/callstateobserver-0000001054200104#ZH-CN_TOPIC_0000001054200104__CALL_STATE_RINGING). If at least one call is in the active, hold, or dialing state, the system returns [CallStateObserver#CALL_STATE_OFFHOOK](https://developer.harmonyos.com/cn/docs/documentation/doc-references/callstateobserver-0000001054200104#ZH-CN_TOPIC_0000001054200104__CALL_STATE_OFFHOOK). In other cases, the system returns [CallStateObserver#CALL_STATE_IDLE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/callstateobserver-0000001054200104#ZH-CN_TOPIC_0000001054200104__CALL_STATE_IDLE).

**Returns:**

Returns the call state.

#### [h2]hasVoiceCapability

public boolean hasVoiceCapability​()

Checks whether a device supports voice calls. 

The system checks whether the device has the capability to initiate a circuit switching (CS) or IP multimedia subsystem domain (IMS) call on a telephone service network. If the device supports only packet switching (even if the device supports OTT calls), false is returned.

**Returns:**

Returns true if the device supports voice calls; returns false otherwise.

**Since:**

4

#### [h2]addObserver

public void addObserver​([CallStateObserver](https://developer.harmonyos.com/cn/docs/documentation/doc-references/callstateobserver-0000001054200104) observer, int mask)

Adds an observer to monitor call service state changes. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
observer  |  Indicates a [CallStateObserver](https://developer.harmonyos.com/cn/docs/documentation/doc-references/callstateobserver-0000001054200104) instance to add.  
mask  |  Indicates the call service state to monitor. The state is indicated by the flag bit or combination starting with [CallStateObserver](https://developer.harmonyos.com/cn/docs/documentation/doc-references/callstateobserver-0000001054200104) OBSERVE_.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[SecurityException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/securityexception-0000001054678454) |  Throws this exception if the application does not have the ohos.permission.GET_TELEPHONY_STATE permission.  
  
#### [h2]removeObserver

public void removeObserver​([CallStateObserver](https://developer.harmonyos.com/cn/docs/documentation/doc-references/callstateobserver-0000001054200104) observer)

Removes an observer to cancel monitoring call service state changes. 

After the observer added by running [addObserver(ohos.dcall.CallStateObserver,int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distributedcallmanager-0000001054518844#ZH-CN_TOPIC_0000001054518844__addObserver-ohos_dcall_CallStateObserver-int-) is deleted, the system no longer receives call service state changes.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
observer  |  Indicates a [CallStateObserver](https://developer.harmonyos.com/cn/docs/documentation/doc-references/callstateobserver-0000001054200104) instance to delete.  
  
#### [h2]isVideoCallingEnabled

public boolean isVideoCallingEnabled​()

Checks whether video calling is enabled on this device. 

**Returns:**

Returns true if video calling is enabled; returns false otherwise.

**Since:**

3
