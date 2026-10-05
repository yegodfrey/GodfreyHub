---
name: document/cn/doc-references/iabilitymanager-0000001054518792
title: IAbilityManager
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/iabilitymanager-0000001054518792
source: portal
---

# IAbilityManager
    
    public interface IAbilityManager  
  
---  
Obtains running process and memory information about an application.

**Since:**

1

#### Field Summary

Modifier and Type | Field | Description  
---|---|---  
static int | [DEFAULT_DENSITY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iabilitymanager-0000001054518792#ZH-CN_TOPIC_0000001054518792__DEFAULT_DENSITY) |  Indicates the default density.   
static int | [DEFAULT_HEAPSIZE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iabilitymanager-0000001054518792#ZH-CN_TOPIC_0000001054518792__DEFAULT_HEAPSIZE) |  Indicates the basic memory size.   
static int | [DEFAULT_ICONSIZE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iabilitymanager-0000001054518792#ZH-CN_TOPIC_0000001054518792__DEFAULT_ICONSIZE) |  Indicates the default icon size, in pixels.   
static int | [LOCK_MISSION_MODE_LOCKED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iabilitymanager-0000001054518792#ZH-CN_TOPIC_0000001054518792__LOCK_MISSION_MODE_LOCKED) |  Indicates that the full mission lock mode is enabled.   
static int | [LOCK_MISSION_MODE_NULL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iabilitymanager-0000001054518792#ZH-CN_TOPIC_0000001054518792__LOCK_MISSION_MODE_NULL) |  Indicates that the lock mission mode is disabled.   
static int | [LOCK_MISSION_MODE_PINNED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iabilitymanager-0000001054518792#ZH-CN_TOPIC_0000001054518792__LOCK_MISSION_MODE_PINNED) |  Indicates that the mission lock mode is enabled.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
boolean | [canAbilityStartOnDisplay](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iabilitymanager-0000001054518792#ZH-CN_TOPIC_0000001054518792__canAbilityStartOnDisplay-ohos_app_Context-int-ohos_aafwk_content_Intent-)​([Context](https://developer.harmonyos.com/cn/docs/documentation/doc-references/context-0000001054440065) context, int displayId, [Intent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intent-0000001054120019) intent) |  Checks whether an ability can be started on a specified display when there are multiple physical display devices.   
boolean | [clearUpApplicationData](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iabilitymanager-0000001054518792#ZH-CN_TOPIC_0000001054518792__clearUpApplicationData--)​() |  Clears user data of the application, which is equivalent to initializing the application.   
[List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[RunningProcessInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/runningprocessinfo-0000001054678651)> | [getAllRunningProcesses](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iabilitymanager-0000001054518792#ZH-CN_TOPIC_0000001054518792__getAllRunningProcesses--)​() |  Obtains information about application processes that are running on the device.   
int | [getAppLargeMemory](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iabilitymanager-0000001054518792#ZH-CN_TOPIC_0000001054518792__getAppLargeMemory--)​() |  Obtains the maximum memory that can be used by an application on the current device.   
int | [getAppMemory](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iabilitymanager-0000001054518792#ZH-CN_TOPIC_0000001054518792__getAppMemory--)​() |  Obtains the memory that can be used by an application on the current device.   
[DeviceConfigInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deviceconfiginfo-0000001054120009) | [getDeviceConfigInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iabilitymanager-0000001054518792#ZH-CN_TOPIC_0000001054518792__getDeviceConfigInfo--)​() |  Obtains configuration information about the device, such as its touch type, keyboard type, and navigation device.   
int | [getHomeScreenIconDensity](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iabilitymanager-0000001054518792#ZH-CN_TOPIC_0000001054518792__getHomeScreenIconDensity--)​() |  Obtains the density of icons on the home screen.   
int | [getHomeScreenIconSize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iabilitymanager-0000001054518792#ZH-CN_TOPIC_0000001054518792__getHomeScreenIconSize--)​() |  Obtains the size of icons on the home screen.   
int | [getMissionLockModeState](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iabilitymanager-0000001054518792#ZH-CN_TOPIC_0000001054518792__getMissionLockModeState--)​() |  Obtains the current state of the lock mission mode.   
void | [getMyProcessMemoryInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iabilitymanager-0000001054518792#ZH-CN_TOPIC_0000001054518792__getMyProcessMemoryInfo-ohos_aafwk_ability_RunningProcessInfo-)​([RunningProcessInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/runningprocessinfo-0000001054678651) outState) |  Obtains memory information about the calling process, helping you learn the memory usage of the process running for the current application.   
[List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[ProcessErrorInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/processerrorinfo-0000001054238681)> | [getProcessesErrorInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iabilitymanager-0000001054518792#ZH-CN_TOPIC_0000001054518792__getProcessesErrorInfo--)​() |  Obtains a list of process error info.   
[MemoryInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/memoryinfo-0000001054678682)[] | [getProcessMemoryInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iabilitymanager-0000001054518792#ZH-CN_TOPIC_0000001054518792__getProcessMemoryInfo-int:A-)​(int[] pids) |  Obtains the memory usage of specified processes.   
void | [getSystemMemoryInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iabilitymanager-0000001054518792#ZH-CN_TOPIC_0000001054518792__getSystemMemoryInfo-ohos_aafwk_ability_SystemMemoryInfo-)​([SystemMemoryInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/systemmemoryinfo-0000001054838636) outInfo) |  Obtains system memory information, including the total system memory, available system memory, and whether the system memory is low.   
boolean | [isBackgroundRunningRestricted](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iabilitymanager-0000001054518792#ZH-CN_TOPIC_0000001054518792__isBackgroundRunningRestricted--)​() |  Checks whether the process of this application is forbidden to run in the background.   
boolean | [isLowRamDevice](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iabilitymanager-0000001054518792#ZH-CN_TOPIC_0000001054518792__isLowRamDevice--)​() |  Checks whether the current device is a low-RAM device.   
boolean | [isUserKingKong](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iabilitymanager-0000001054518792#ZH-CN_TOPIC_0000001054518792__isUserKingKong--)​() |  ask that is user kingkong test   
void | [killProcessesByBundleName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iabilitymanager-0000001054518792#ZH-CN_TOPIC_0000001054518792__killProcessesByBundleName-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) bundleName) |  Kills all background processes associated with a specified package.   
[List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[AbilityMissionInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abilitymissioninfo-0000001060411157)> | [queryRecentAbilityMissionInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iabilitymanager-0000001054518792#ZH-CN_TOPIC_0000001054518792__queryRecentAbilityMissionInfo-int-int-)​(int maxMissionNum, int flag) |  Query recent Ability Mission info.   
[List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[AbilityMissionInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abilitymissioninfo-0000001060411157)> | [queryRunningAbilityMissionInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iabilitymanager-0000001054518792#ZH-CN_TOPIC_0000001054518792__queryRunningAbilityMissionInfo-int-)​(int maxMissionNum) |  Query running Ability Mission info.   
void | [updateDeviceLocale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iabilitymanager-0000001054518792#ZH-CN_TOPIC_0000001054518792__updateDeviceLocale-ohos_global_configuration_LocaleProfile-)​([LocaleProfile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/localeprofile-0000001054838802) localeProfile) |  Updates the current locale for the device.   
  
#### Field Detail

#### [h2]DEFAULT_DENSITY

static final int DEFAULT_DENSITY

Indicates the default density. 

**Since:**

3

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_app_IAbilityManager_DEFAULT_DENSITY)

#### [h2]DEFAULT_HEAPSIZE

static final int DEFAULT_HEAPSIZE

Indicates the basic memory size. 

**Since:**

3

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_app_IAbilityManager_DEFAULT_HEAPSIZE)

#### [h2]DEFAULT_ICONSIZE

static final int DEFAULT_ICONSIZE

Indicates the default icon size, in pixels. 

**Since:**

3

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_app_IAbilityManager_DEFAULT_ICONSIZE)

#### [h2]LOCK_MISSION_MODE_LOCKED

static final int LOCK_MISSION_MODE_LOCKED

Indicates that the full mission lock mode is enabled. 

The constant value is 0x00000001. Applications in this mode are locked, with the Home key and Recent key disabled.

**Since:**

3

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_app_IAbilityManager_LOCK_MISSION_MODE_LOCKED)

#### [h2]LOCK_MISSION_MODE_NULL

static final int LOCK_MISSION_MODE_NULL

Indicates that the lock mission mode is disabled. 

The constant value is 0x00000000.

**Since:**

3

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_app_IAbilityManager_LOCK_MISSION_MODE_NULL)

#### [h2]LOCK_MISSION_MODE_PINNED

static final int LOCK_MISSION_MODE_PINNED

Indicates that the mission lock mode is enabled. 

The constant value is 0x00000002. Applications in this mode are locked, but with the Return key, Home key, and Recent key enabled.

**Since:**

3

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_app_IAbilityManager_LOCK_MISSION_MODE_PINNED)

#### Method Detail

#### [h2]getProcessMemoryInfo

[MemoryInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/memoryinfo-0000001054678682)[] getProcessMemoryInfo​(int[] pids)

Obtains the memory usage of specified processes. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
pids  |  Indicates the PIDs of the processes whose memory usage is to be queried.  
  
**Returns:**

Returns the memory usage of each requested process.

**Since:**

1

#### [h2]getProcessesErrorInfo

[List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[ProcessErrorInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/processerrorinfo-0000001054238681)> getProcessesErrorInfo​()

Obtains a list of process error info. 

**Returns:**

Returns a list of process error info, or null if there are no current error conditions

**Since:**

3

#### [h2]getAllRunningProcesses

[List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[RunningProcessInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/runningprocessinfo-0000001054678651)> getAllRunningProcesses​()

Obtains information about application processes that are running on the device. 

**Returns:**

Returns a list of running processes.

**Since:**

1

#### [h2]getAppLargeMemory

int getAppLargeMemory​()

Obtains the maximum memory that can be used by an application on the current device. 

It is not recommended that the maximum memory size returned by this method be used as the memory usage standard for your application. Instead, use the value returned by [getAppMemory()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iabilitymanager-0000001054518792#ZH-CN_TOPIC_0000001054518792__getAppMemory--) for reference.

**Returns:**

Returns the maximum memory size that can be used by an application, in MB.

**Since:**

3

#### [h2]getAppMemory

int getAppMemory​()

Obtains the memory that can be used by an application on the current device. 

You can use the memory size returned by this method as a standard to determine how to optimize memory usage in your application.

**Returns:**

Returns the memory size that can be used by an application, in MB.

**Since:**

3

#### [h2]getSystemMemoryInfo

void getSystemMemoryInfo​([SystemMemoryInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/systemmemoryinfo-0000001054838636) outInfo)

Obtains system memory information, including the total system memory, available system memory, and whether the system memory is low. 

You can use this method during application debugging to learn and optimize the memory usage of the current system.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
outInfo  |  Indicates the object storing system memory information.  
  
**Since:**

3

#### [h2]getMyProcessMemoryInfo

void getMyProcessMemoryInfo​([RunningProcessInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/runningprocessinfo-0000001054678651) outState)

Obtains memory information about the calling process, helping you learn the memory usage of the process running for the current application. The information that will be filled in the [RunningProcessInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/runningprocessinfo-0000001054678651) object includes the PID, UID, last trim level, importance level and importance reason. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
outState  |  Indicates the object storing memory information for the calling process.  
  
**Since:**

3

#### [h2]isLowRamDevice

boolean isLowRamDevice​()

Checks whether the current device is a low-RAM device. 

This method helps you determine whether to optimize your application, for example, to disable some RAM-consuming features, so that it can run properly on a low-RAM device.

**Returns:**

Returns true if the current device is a low-RAM device; returns false otherwise.

**Since:**

3

#### [h2]clearUpApplicationData

boolean clearUpApplicationData​()

Clears user data of the application, which is equivalent to initializing the application. 

This method deletes all dynamic data and notifications related to the application and revokes all permissions the user has granted to it, but does not delete its core files. Exercise caution when using this method.

**Returns:**

Returns true if the application's user data is successfully cleared; returns false otherwise.

**Since:**

3

#### [h2]killProcessesByBundleName

void killProcessesByBundleName​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) bundleName)

Kills all background processes associated with a specified package. 

This method does not permanently kill these background processes. The system will restart them as required. 

To use this method, you need to request the ohos.permission.CLEAN_BACKGROUND_PROCESSES permission from the system. The ohos.permission.CLEAN_BACKGROUND_PROCESSES permission is of the normal level.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
bundleName  |  Indicates the name of the package whose processes are to be killed.  
  
**Since:**

3

#### [h2]getDeviceConfigInfo

[DeviceConfigInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deviceconfiginfo-0000001054120009) getDeviceConfigInfo​()

Obtains configuration information about the device, such as its touch type, keyboard type, and navigation device. 

**Returns:**

Returns the DeviceConfigInfo object containing the device configuration information.

**Since:**

3

#### [h2]getHomeScreenIconDensity

int getHomeScreenIconDensity​()

Obtains the density of icons on the home screen. 

This information is used when you create icons or shortcuts for your application.

**Returns:**

Returns the density of icons on the home screen.

**Since:**

3

#### [h2]getHomeScreenIconSize

int getHomeScreenIconSize​()

Obtains the size of icons on the home screen. 

This information is used when you create icons or shortcuts for your application.

**Returns:**

Returns the size of icons on the home screen, in pixels.

**Since:**

3

#### [h2]isUserKingKong

boolean isUserKingKong​()

ask that is user kingkong test 

**Returns:**

whether user is kingkong.

#### [h2]canAbilityStartOnDisplay

boolean canAbilityStartOnDisplay​([Context](https://developer.harmonyos.com/cn/docs/documentation/doc-references/context-0000001054440065) context, int displayId, [Intent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intent-0000001054120019) intent)

Checks whether an ability can be started on a specified display when there are multiple physical display devices. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
context  |  Indicates the context from which the ability will be started. This parameter cannot be null.  
displayId  |  Indicates the ID of the target display on which the ability will be started.  
intent  |  Indicates the Intent for starting the ability. This parameter cannot be null.  
  
**Returns:**

Returns true if the ability can be started on the specified display; returns false otherwise.

**Since:**

4

#### [h2]getMissionLockModeState

int getMissionLockModeState​()

Obtains the current state of the lock mission mode. 

You can call [Context.lockMission()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/context-0000001054440065#ZH-CN_TOPIC_0000001054440065__lockMission--) to enable the lock mission mode, and call [Context.unlockMission()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/context-0000001054440065#ZH-CN_TOPIC_0000001054440065__unlockMission--) to disable it.

**Returns:**

Returns the current state of the lock mission mode, which can be [LOCK_MISSION_MODE_NULL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iabilitymanager-0000001054518792#ZH-CN_TOPIC_0000001054518792__LOCK_MISSION_MODE_NULL), [LOCK_MISSION_MODE_LOCKED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iabilitymanager-0000001054518792#ZH-CN_TOPIC_0000001054518792__LOCK_MISSION_MODE_LOCKED), or [LOCK_MISSION_MODE_PINNED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/iabilitymanager-0000001054518792#ZH-CN_TOPIC_0000001054518792__LOCK_MISSION_MODE_PINNED).

**Since:**

4

#### [h2]updateDeviceLocale

void updateDeviceLocale​([LocaleProfile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/localeprofile-0000001054838802) localeProfile)

Updates the current locale for the device. To use this method, you need to request the ohos.permission.UPDATE_CONFIGURATION and ohos.permission.MODIFY_SETTINGS permissions from the system. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
localeProfile  |  Indicates the [LocaleProfile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/localeprofile-0000001054838802) object containing the new locale.  
  
**Since:**

3

#### [h2]queryRunningAbilityMissionInfo

[List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[AbilityMissionInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abilitymissioninfo-0000001060411157)> queryRunningAbilityMissionInfo​(int maxMissionNum)

Query running Ability Mission info. Developer could get self's AbilityMissionInfo or using system app with ohos.permission.ACCESS_MISSIONS permission to get all running apps AbilityMissionInfo. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
maxMissionNum  |  Indicate the Max number of the return list.  
  
**Returns:**

Returns the AbilityMissionInfos.

**Since:**

4

#### [h2]queryRecentAbilityMissionInfo

[List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[AbilityMissionInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/abilitymissioninfo-0000001060411157)> queryRecentAbilityMissionInfo​(int maxMissionNum, int flag)

Query recent Ability Mission info. Developer could get self's AbilityMissionInfo or using system app with ohos.permission.ACCESS_MISSIONS permission to get all recent apps AbilityMissionInfo. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
maxMissionNum  |  Indicate the Max number of the return list.  
flag  |  Indicates the flag using to query ability infos, 1 indicate to get all recent apps, otherwise return infos whithout missions that are unavailable to user.  
  
**Returns:**

Returns the AbilityMissionInfos.

**Since:**

4

#### [h2]isBackgroundRunningRestricted

boolean isBackgroundRunningRestricted​()

Checks whether the process of this application is forbidden to run in the background. 

**Returns:**

Returns true if this application is not allowed to run in the background; returns false otherwise.

**Since:**

4
