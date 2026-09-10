---
name: document/cn/system-References/deviceapplicationmanager-api-0000001053201926
title: DeviceApplicationManager
uri: https://developer.huawei.com/consumer/cn/doc/system-References/deviceapplicationmanager-api-0000001053201926
---

# DeviceApplicationManager

|Class Info|
|:-----------------------------------------------|
|public class DeviceApplicationManager 设备应用程序管理类。|

|术语解释|||||
|:-|-|-|-|-|
|独占应用：是指应用永远显示在桌面，点击返回键也不会退出该应用（涉及接口增加独占应用[addSingleApp](#section344665744211)）。|||||

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void|[addPersistentApp](#section25901291716)(ComponentName admin, List\<String\> packageNames) 添加保持某应用始终运行名单。|
|void|[removePersistentApp](#section74411152152014)(ComponentName admin, List\<String\> packageNames) 删除保持某应用始终运行名单。|
|List\<String\>|[getPersistentApp](#section157540350223)(ComponentName admin) 获取保持某应用始终运行名单。|
|void|[addDisallowedRunningApp](#section19777172243217)(ComponentName admin, List\<String\> packageNames) 添加阻止某应用启动运行名单。|
|void|[removeDisallowedRunningApp](#section53531102383)(ComponentName admin, List\<String\> packageNames) 删除阻止某应用启动运行名单。|
|List\<String\>|[getDisallowedRunningApp](#section5756617154218)(ComponentName admin) 获取阻止某应用启动运行名单。|
|void|[killApplicationProcess](#section51803013458)(ComponentName admin, String packageName) 停止某应用进程。|
|boolean|[addIgnoreFrequentRelaunchAppList](#section1418254874811)(ComponentName admin, ArrayList\<String\> apps) 添加受豁免的第三方桌面名单。|
|boolean|[removeIgnoreFrequentRelaunchAppList](#section15379204539)(ComponentName admin, ArrayList\<String\> apps) 删除受豁免的第三方桌面名单|
|ArrayList\<String\>|[getIgnoreFrequentRelaunchAppList](#section173991816115610)(ComponentName admin) 获取受豁免的第三方桌面名单。|
|boolean|[addInstallPackageBlockList](#section6315132519599)(ComponentName admin, ArrayList\<String\> packageNames) 添加不允许安装应用名单。|
|boolean|[addInstallPackageBlackList](#section17631151612413)(ComponentName admin, ArrayList\<String\> packageNames) EMUI 11.0.0该方法已废弃，请使用boolean [addInstallPackageBlockList](#section6315132519599)(ComponentName admin, ArrayList\<String\> packageNames)。|
|boolean|[removeInstallPackageBlockList](#section1324717352213)(ComponentName admin, ArrayList\<String\> packageNames) 删除不允许安装应用名单。|
|boolean|[removeInstallPackageBlackList](#section1086720223616)(ComponentName admin, ArrayList\<String\> packageNames) EMUI 11.0.0该方法已废弃，请使用boolean [removeInstallPackageBlockList](#section1324717352213)(ComponentName admin, ArrayList\<String\> packageNames)。|
|ArrayList\<String\>|[getInstallPackageBlockList](#section49731826696)(ComponentName admin) 获取不允许安装应用名单。|
|ArrayList\<String\>|[getInstallPackageBlackList](#section122661433198)(ComponentName admin) EMUI 11.0.0该方法已废弃，请使用ArrayList\<String\> [getInstallPackageBlockList](#section49731826696)(ComponentName admin)。|
|void|[addSingleApp](#section344665744211)(ComponentName admin, String packageName) 添加独占应用。|
|boolean|[clearSingleApp](#section44751226124719)(ComponentName admin, String packageName) 清除独占应用。|
|String|[getSingleApp](#section175521914135115)(ComponentName admin) 获取当前独占应用的名字。|
|String|[getTopAppPackageName](#section14664634112814)(ComponentName admin) 获取顶层应用的包名。|
|boolean|[setTaskLockAppList](#section1621811411131)(ComponentName admin, ArrayList\<String\> packageNames) 设置允许应用启动运行名单。|
|ArrayList\<String\>|[getTaskLockAppList](#section107420432131)(ComponentName admin) 获取允许应用启动运行名单。|
|boolean|[addRuntimePermissionFixAppList](#section1216122323517)(ComponentName admin, ArrayList\<String\> packageNames) 添加指定的应用列表到"禁止关闭权限"应用列表中。|
|boolean|[removeRuntimePermissionFixAppList](#section887993804111)(ComponentName admin, ArrayList\<String\> packageNames) 将指定的应用列表从"禁止关闭权限"应用列表中移除。|
|ArrayList\<String\>|[getRuntimePermissionFixAppList](#section14205143220436)(ComponentName admin) 获取"禁止关闭权限"应用列表。|
|boolean|[addUsbAccessAppTrustList](#section113771633121216)(ComponentName admin, ArrayList\<String\> packageNames) 添加可直接访问USB设备的应用列表。|
|boolean|[removeUsbAccessAppFromTrustList](#section738115338125)(ComponentName admin, ArrayList\<String\> packageNames) 移除可直接访问USB设备的应用列表。|
|ArrayList\<String\>|[getUsbAccessAppTrustList](#section1738563331218)(ComponentName admin) 获取可直接访问USB设备的应用列表。|
|boolean|[addLauncherHiddenIconList](#section18871468191)(ComponentName admin, ArrayList\<String\> packageNames) 添加隐藏桌面图标应用白名单。|
|boolean|[removeLauncherHiddenIconList](#section49218461197)(ComponentName admin, ArrayList\<String\> packageNames) 移除隐藏桌面图标应用白名单。|
|ArrayList\<String\>|[getLauncherHiddenIconList](#section09714615195) (ComponentName admin) 获取隐藏桌面图标应用白名单。|
|boolean|[setComponentLaunchedByLauncher](#section981510121127)(ComponentName admin, String launchComponent) 设置开机拉起应用组件名。|
|String|[getComponentLaunchedByLauncher](#section74901402302)(ComponentName admin) 获取开机拉起应用组件名。|
|boolean|[clearComponentLaunchedByLauncher](#section18967164783513)(ComponentName admin) 清除开机拉起应用组件名。|
|void|[clearPackageCacheData](#section15911911404)(ComponentName admin, String packageName) 应用缓存清理。|

#### Public Methods

#### addPersistentApp

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 4.1及以上或HarmonyOS 2.0及以上|
|智慧屏|HarmonyOS 2.0及以上|

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void addPersistentApp(ComponentName admin, List\<String\> packageNames) 添加后，系统不会主动停止清单中的应用（系统资源不足的情况除外）。 注意： 1. 需要申请com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。 2. EMUI 10.1.0及以上或HarmonyOS 2.0及以上的版本APK设置packageNames累计数量总和不能超过10，EMUI 10.0.1及之前不能超过3，否则抛出IllegalArgumentException异常。 3. packageNames不能包含系统应用包名。 4. HarmonyOS3.0及以上版本默认允许开机自启；允许关联启动；用户不可修改。 5. HarmonyOS3.0及以上版本添加白名单后将不允许被电池优化。|

Parameters  

|Name|Description|
|:-----------|:----------------------|
|admin|调用该接口的APK的组件名称，不能为null。|
|packageNames|待添加到名单中的应用包名列表。|

Return  

|Type|Description|
|:---|:----------|
|void|-|

Throws  

|Name|Description|
|:-----------------------|:---------------------------------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。 * 此APK不属于当前用户。|
|IllegalArgumentException|* admin为null。 * packageNames为null或empty。 * packageNames包含无效包名。 * APK设置的packageNames累计包名数量超过限制。|

#### removePersistentApp

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 4.1及以上或HarmonyOS 2.0及以上|
|智慧屏|HarmonyOS 2.0及以上|

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void removePersistentApp(ComponentName admin, List\<String\> packageNames) 通过包名删除保持运行白名单中的应用，删除后，应用可以被停止运行。 注意：需要申请com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。|

Parameters  

|Name|Description|
|:-----------|:----------------------|
|admin|调用该接口的APK的组件名称，不能为null。|
|packageNames|待删除的应用包名列表。|

Return  

|Type|Description|
|:---|:----------|
|void|-|

Throws  

|Name|Description|
|:-----------------------|:--------------------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。 * 此APK不属于当前用户。|
|IllegalArgumentException|* admin为null。 * packageNames为null或empty。 * packageNames包含无效包名。|

#### getPersistentApp

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 4.1及以上或HarmonyOS 2.0及以上|
|智慧屏|HarmonyOS 2.0及以上|

|Method|
|:------------------------------------------------------------------------|
|public List\<String\> getPersistentApp(ComponentName admin) 获取保持运行应用的白名单。|

Parameters  

|Name|Description|
|:----|:---------------------------------------------------------|
|admin|* 非null：调用该接口的APK的组件名称。 * null：输入为null时返回所有APK设置的应用始终运行名单。|

Return  

|Type|Description|
|:-------------|:------------------------------------------------------|
|List\<String\>|* List：获取软件始终运行名单。 * null：无匹配的List或List为empty时，返回为null。|

Throws  

|Name|Description|
|:----------------|:-----------|
|SecurityException|此APK不属于当前用户。|

#### addDisallowedRunningApp

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 4.1及以上或HarmonyOS 2.0及以上|

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void addDisallowedRunningApp(ComponentName admin, List\<String\> packageNames) 添加后，清单中的应用不能打开，正在使用的应用也会被停止运行。 注意： 1. 需要申请com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。 2. 当前APK设置packageNames累计数量总和不能超过200，否则抛出IllegalArgumentException异常。 3. packageNames不能包含系统应用包名。|

Parameters  

|Name|Description|
|:-----------|:----------------------|
|admin|调用该接口的APK的组件名称，不能为null。|
|packageNames|待添加到列表中的应用包名列表。|

Return  

|Type|Description|
|:---|:----------|
|void|-|

Throws  

|Name|Description|
|:-----------------------|:----------------------------------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。 * 此APK不属于当前用户。|
|IllegalArgumentException|* admin为null。 * packageNames为null或empty。 * packageNames包含无效包名。 * APK设置的packageNames累计包名数量超过200。|

#### removeDisallowedRunningApp

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 4.1及以上或HarmonyOS 2.0及以上|

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void removeDisallowedRunningApp(ComponentName admin, List\<String\> packageNames) 通过包名删除应用运行黑名单中的应用，删除后，应用可以正常打开运行。 注意：需要申请com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。|

Parameters  

|Name|Description|
|:-----------|:----------------------|
|admin|调用该接口的APK的组件名称，不能为null。|
|packageNames|待删除的应用包名列表。|

Return  

|Type|Description|
|:---|:----------|
|void|-|

Throws  

|Name|Description|
|:-----------------------|:--------------------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。 * 此APK不属于当前用户。|
|IllegalArgumentException|* admin为null。 * packageNames为null或empty。 * packageNames包含无效包名。|

#### getDisallowedRunningApp

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 4.1及以上或HarmonyOS 2.0及以上|

|Method|
|:------------------------------------------------------------------------------|
|public List\<String\> getDisallowedRunningApp(ComponentName admin) 获取阻止应用运行黑名单。|

Parameters  

|Name|Description|
|:----|:-----------------------------------------------------------|
|admin|* 非null：调用该接口的APK的组件名称。 * null：输入为null时返回所有APK设置的被阻止启动的软件名单。|

Return  

|Type|Description|
|:-------------|:--------------------------------------------------|
|List\<String\>|* List：获取软件列表。 * null：无匹配的List或List为empty时，返回为null。|

Throws  

|Name|Description|
|:----------------|:-----------|
|SecurityException|此APK不属于当前用户。|

#### killApplicationProcess

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 4.1及以上或HarmonyOS 2.0及以上|

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------|
|public void killApplicationProcess(ComponentName admin, String packageName) 通过包名停止应用进程。 注意：需要申请com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。|

Parameters  

|Name|Description|
|:----------|:----------------------|
|admin|调用该接口的APK的组件名称，不能为null。|
|packageName|要停止的进程包名。|

Return  

|Type|Description|
|:---|:----------|
|void|-|

Throws  

|Name|Description|
|:-----------------------|:--------------------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。 * 此APK不属于当前用户。|
|IllegalArgumentException|* admin为null。 * packageName为无效包名或系统应用。|

#### addIgnoreFrequentRelaunchAppList

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 5.1及以上或HarmonyOS 2.0及以上|

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean addIgnoreFrequentRelaunchAppList(ComponentName admin, ArrayList\<String\> apps) 添加第三方桌面豁免名单。豁免名单中的应用，频繁启动时，系统不会弹框提示用户去卸载该应用。 注意：需要申请com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。|

Parameters  

|Name|Description|
|:----|:----------------------|
|admin|调用该接口的APK的组件名称，不能为null。|
|apps|待添加到列表中的应用包名列表。|

Return  

|Type|Description|
|:------|:----------------------------------|
|boolean|* true：配置成功。 <!-- --> * false：配置失败。|

Throws  

|Name|Description|
|:-----------------------|:--------------------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。 * 此APK不属于当前用户。|
|IllegalArgumentException|* admin为null。 <!-- --> * apps为null。 <!-- --> * apps列表为空。|

#### removeIgnoreFrequentRelaunchAppList

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 5.1及以上或HarmonyOS 2.0及以上|

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean removeIgnoreFrequentRelaunchAppList(ComponentName admin, ArrayList\<String\> apps) 删除第三方桌面豁免名单。不在豁免名单中的应用，频繁启动时，系统会弹框提示用户去卸载该应用。 注意：需要申请com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。|

Parameters  

|Name|Description|
|:----|:----------------------|
|admin|调用该接口的APK的组件名称，不能为null。|
|apps|待删除的应用包名列表。|

Return  

|Type|Description|
|:------|:-------------------------|
|boolean|* true：配置成功。 * false：配置失败。|

Throws  

|Name|Description|
|:-----------------------|:--------------------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。 * 此APK不属于当前用户。|
|IllegalArgumentException|* admin为null。 <!-- --> * apps为null。 <!-- --> * apps列表为空。|

#### getIgnoreFrequentRelaunchAppList

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 5.1及以上或HarmonyOS 2.0及以上|

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------|
|public ArrayList\<String\> getIgnoreFrequentRelaunchAppList(ComponentName admin) 查询配置第三方桌面豁免名单。不在豁免名单中的应用，频繁启动时，系统会弹框提示用户去卸载该应用。|

Parameters  

|Name|Description|
|:----|:-----------------------------------|
|admin|调用该接口的组件名称；参数为null时，获取所有应用设置的综合策略结果。|

Return  

|Type|Description|
|:-------------------|:---------------------------------------------------|
|ArrayList \<String\>|ArrayList：获取被豁免的第三方桌面列表。无匹配的List或List为empty时，返回null。|

#### addInstallPackageBlockList

Supported Devices  

|Device Type|OS Version|
|:----------|:-------------------------|
|手机、平板|EMUI 11.0或HarmonyOS 2.0及以上|

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean addInstallPackageBlockList(ComponentName admin, ArrayList\<String\> packageNames) 添加不允许安装应用名单。 注意： 1. 需要申请com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。 2. 不能添加系统应用到黑名单中。|

Parameters  

|Name|Description|
|:-----------|:----------------------|
|admin|调用该接口的APK的组件名称，不能为null。|
|packageNames|待添加到列表中的应用包名列表。|

Return  

|Type|Description|
|:------|:----------------------------------|
|boolean|* true：配置成功。 <!-- --> * false：配置失败。|

Throws  

|Name|Description|
|:----------------|:-----------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。|

#### addInstallPackageBlackList

Supported Devices  

|Device Type|OS Version|
|:----------|:------------------|
|手机、平板|EMUI 5.1\~EMUI 10.1|

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean addInstallPackageBlackList(ComponentName admin, ArrayList\<String\> packageNames) EMUI 11.0.0该方法废弃，请使用[addInstallPackageBlockList](#section6315132519599)。 添加不允许安装应用名单。 注意： 1. 需要申请com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。 2. 不能添加系统应用到黑名单中。|

Parameters  

|Name|Description|
|:-----------|:----------------------|
|admin|调用该接口的APK的组件名称，不能为null。|
|packageNames|待添加到列表中的应用包名列表。|

Return  

|Type|Description|
|:------|:----------------------------------|
|boolean|* true：配置成功。 <!-- --> * false：配置失败。|

Throws  

|Name|Description|
|:----------------|:-----------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。|

#### removeInstallPackageBlockList

Supported Devices  

|Device Type|OS Version|
|:----------|:-------------------------|
|手机、平板|EMUI 11.0或HarmonyOS 2.0及以上|

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean removeInstallPackageBlockList(ComponentName admin, ArrayList\<String\> packageNames) 删除不允许安装应用名单。 注意：需要申请com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。|

Parameters  

|Name|Description|
|:-----------|:----------------------|
|admin|调用该接口的APK的组件名称，不能为null。|
|packageNames|待删除的应用包名列表。|

Return  

|Type|Description|
|:------|:----------------------------------|
|boolean|* true：配置成功。 <!-- --> * false：配置失败。|

Throws  

|Name|Description|
|:----------------|:-----------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。|

#### removeInstallPackageBlackList

Supported Devices  

|Device Type|OS Version|
|:----------|:------------------|
|手机、平板|EMUI 5.1\~EMUI 10.1|

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean removeInstallPackageBlackList(ComponentName admin, ArrayList\<String\> packageNames) EMUI 11.0.0该方法废弃，请使用[removeInstallPackageBlockList](#section1324717352213)。 删除不允许安装应用名单。 注意：需要申请com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。|

Parameters  

|Name|Description|
|:-----------|:----------------------|
|admin|调用该接口的APK的组件名称，不能为null。|
|packageNames|待删除的应用包名列表。|

Return  

|Type|Description|
|:------|:----------------------------------|
|boolean|* true：配置成功。 <!-- --> * false：配置失败。|

Throws  

|Name|Description|
|:----------------|:-----------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。|

#### getInstallPackageBlockList

Supported Devices  

|Device Type|OS Version|
|:----------|:-------------------------|
|手机、平板|EMUI 11.0或HarmonyOS 2.0及以上|

|Method|
|:--------------------------------------------------------------------------------------|
|public ArrayList\<String\> getInstallPackageBlockList(ComponentName admin) 获取不允许安装应用名单。|

Parameters  

|Name|Description|
|:----|:-----------------------------------|
|admin|调用该接口的组件名称；参数为null时，获取所有应用设置的综合策略结果。|

Return  

|Type|Description|
|:-------------------|:----------------------------------------------------|
|ArrayList \<String\>|ArrayList：获取被禁止安装的应用列表。无匹配的List或List为empty 时，返回为null。|

#### getInstallPackageBlackList

Supported Devices  

|Device Type|OS Version|
|:----------|:------------------|
|手机、平板|EMUI 5.1\~EMUI 10.1|

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public ArrayList\<String\> getInstallPackageBlackList(ComponentName admin) EMUI 11.0.0该方法废弃，请使用[getInstallPackageBlockList](#section49731826696)。 获取不允许安装应用名单。|

Parameters  

|Name|Description|
|:----|:-----------------------------------|
|admin|调用该接口的组件名称；参数为null时，获取所有应用设置的综合策略结果。|

Return  

|Type|Description|
|:-------------------|:---------------------------------------------------|
|ArrayList \<String\>|ArrayList：获取被禁止安装的应用列表。无匹配的List或List为empty时，返回为null。|

#### addSingleApp

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 8.0及以上或HarmonyOS 2.0及以上|

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean addSingleApp(ComponentName admin, String packageName) 根据应用名设置一个应用作为独占应用，独占应用永远显示在桌面，点击返回键也不会退出该应用。 注意： 1. 需要申请com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。 2. 建议使用[setTaskLockAppList](#section1621811411131)。 3. 与[setTaskLockAppList](#section1621811411131)接口不可同时使用，会出现冲突场景。|

Parameters  

|Name|Description|
|:----------|:----------------------|
|admin|调用该接口的APK的组件名称，不能为null。|
|packageName|设置的独占应用应用名。|

Return  

|Type|Description|
|:------|:-------------------------|
|boolean|* true：配置成功。 * false：配置失败。|

Throws  

|Name|Description|
|:----------------|:-----------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。|

#### clearSingleApp

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 8.0及以上或HarmonyOS 2.0及以上|

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean clearSingleApp(ComponentName admin, String packageName) 根据应用名将一个已设置的独占应用恢复为普通应用。 注意：需要申请com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。|

Parameters  

|Name|Description|
|:----------|:----------|
|admin|调用该接口的组件名称。|
|packageName|清除的独占应用应用名。|

Return  

|Type|Description|
|:------|:-------------------------|
|boolean|* true：配置成功。 * false：配置失败。|

Throws  

|Name|Description|
|:----------------|:-----------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。|

#### getSingleApp

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 8.0及以上或HarmonyOS 2.0及以上|

|Method|
|:--------------------------------------------------------------|
|public String getSingleApp(ComponentName admin) 获取当前设置的独占应用的名字。|

Parameters  

|Name|Description|
|:----|:----------------------------------------------|
|admin|调用该接口的组件名称，查询该应用配置的策略；参数为null时，获取所有应用设置的综合策略结果。|

Return  

|Type|Description|
|:-----|:-------------------------|
|String|当前设置的独占应用名字；如果没有设置，返回null。|

Throws  

|Name|Description|
|:----------------|:------------|
|SecurityException|此APK未经设备管理激活。|

#### getTopAppPackageName

Supported Devices  

|Device Type|OS Version|
|:----------|:-----------------------------|
|手机、平板|EMUI 9.1.0及以上或HarmonyOS 2.0及以上|

|Method|
|:------------------------------------------------------------------------------------------------------------------------|
|public String getTopAppPackageName(ComponentName admin) 获取顶层应用的包名。 注意：需要申请com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。|

Parameters  

|Name|Description|
|:----|:--------------|
|admin|调用该接口的APK的组件名称。|

Return  

|Type|Description|
|:-----|:----------|
|String|顶层应用的包名。|

Throws  

|Name|Description|
|:-----------------------|:--------------------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。 * 此APK不属于当前用户。|
|IllegalArgumentException|参数admin为null时。|

#### setTaskLockAppList

Supported Devices  

|Device Type|OS Version|
|:----------|:-------------------------|
|手机、平板|EMUI 11.0或HarmonyOS 2.0及以上|

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean setTaskLockAppList(ComponentName admin, ArrayList\<String\> packageNames) 设置允许应用启动运行名单，设置后只允许名单中的应用启动（华为桌面、华为响铃界面、手机管家、权限控制器等部分系统应用除外）。同时在开机之后拉起名单中的第一个应用。允许应用启动运行名单为空或者null时代表清除名单。 注意： 1. 需要申请com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。 2. 与[addSingleApp](#section344665744211)接口不可同时使用，会出现冲突场景。 3. 调试时请注意将调试应用添加到名单中并在调试应用中预留退出的入口（名单为空或者null即可），以便调试时取消策略。|

Parameters  

|Name|Description|
|:-----------|:---------------|
|admin|调用该接口的组件名称，不能为空。|
|packageNames|允许应用启动运行名单。|

Return  

|Type|Description|
|:------|:---------------------------------------------|
|boolean|* true：设置允许应用启动运行名单成功。 * false：设置允许应用启动运行名单失败。|

Throws  

|Name|Description|
|:-----------------------|:-----------------------------------------------------------------|
|IllegalArgumentException|参数admin为null。|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。|

#### getTaskLockAppList

Supported Devices  

|Device Type|OS Version|
|:----------|:-------------------------|
|手机、平板|EMUI 11.0或HarmonyOS 2.0及以上|

|Method|
|:-------------------------------------------------------------------------------|
|public ArrayList\<String\> getTaskLockAppList(ComponentName admin) 获取允许应用启动运行名单。|

Parameters  

|Name|Description|
|:----|:----------|
|admin|调用该接口的组件名称。|

Return  

|Type|Description|
|:------------------|:----------|
|ArrayList\<String\>|允许应用启动运行名单。|

Throws  

|Name|Description|
|:----------------|:------------|
|SecurityException|此APK未经设备管理激活。|

#### addRuntimePermissionFixAppList

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------|
|手机、平板|HarmonyOS 2.0及以上|

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean addRuntimePermissionFixAppList(ComponentName admin, ArrayList\<String\> packageNames) 添加指定的应用列表到"禁止关闭权限"应用列表中。对设置为禁止关闭权限的应用，不允许手动关闭该应用的动态权限和特殊访问权限（读取系统设置、在应用上层显示、悬浮窗）。 注意： 1. 需要申请com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。 2. 需要用户赋予动态权限后，该接口生效。|

Parameters  

|Name|Description|
|:-----------|:---------------|
|admin|调用该接口的组件名称，不能为空。|
|packageNames|待添加的应用列表。|

Return  

|Type|Description|
|:------|:---------------------------------|
|boolean|* true：添加应用列表成功。 * false：添加应用列表失败。|

Throws  

|Name|Description|
|:-----------------------|:-----------------------------------------------------------------|
|IllegalArgumentException|packageNames参数传入的包名不合法。|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。|

#### removeRuntimePermissionFixAppList

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------|
|手机、平板|HarmonyOS 2.0及以上|

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean removeRuntimePermissionFixAppList(ComponentName admin, ArrayList\<String\> packageNames) 将指定的应用列表从"禁止关闭权限"应用列表中移除。 注意：需要申请com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。|

Parameters  

|Name|Description|
|:-----------|:---------------|
|admin|调用该接口的组件名称，不能为空。|
|packageNames|待移除的应用列表。|

Return  

|Type|Description|
|:------|:---------------------------------|
|boolean|* true：移除应用列表成功。 * false：移除应用列表失败。|

Throws  

|Name|Description|
|:-----------------------|:-----------------------------------------------------------------|
|IllegalArgumentException|packageNames参数传入的包名不合法。|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。|

#### getRuntimePermissionFixAppList

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------|
|手机、平板|HarmonyOS 2.0及以上|

|Method|
|:---------------------------------------------------------------------------------------------|
|public ArrayList\<String\> getRuntimePermissionFixAppList(ComponentName admin) 获取"禁止关闭权限"应用列表。|

Parameters  

|Name|Description|
|:----|:----------|
|admin|调用该接口的组件名称。|

Return  

|Type|Description|
|:------------------|:----------|
|ArrayList\<String\>|获取已配置的应用列表。|

#### addUsbAccessAppTrustList

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------|
|手机、平板|HarmonyOS 3.1及以上|

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean addUsbAccessAppTrustList(ComponentName admin, ArrayList\<String\> packageNames) 添加可直接访问USB设备的应用列表。 注意： 1. 需要申请com.huawei.permission.sec.MDM_MANAGE_USB权限。 2. 需要插拔USB，接口才能生效。|

Parameters  

|Name|Description|
|:-----------|:--------------------------------------------------------------------------------------------------------|
|admin|调用该接口的组件名称，不能为null。|
|packageNames|待添加的应用列表。 * packageNames中的每个包名不能为空、不能为未安装应用。 * packageNames不能为空或者size为0。 * 更新后的应用列表包含的记录数量不能超过最大限制数量200个。|

Return  

|Type|Description|
|:------|:---------------------------------|
|boolean|* true：添加应用列表成功。 * false：添加应用列表失败。|

Throws  

|Name|Description|
|:-----------------------|:-------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_MANAGE_USB权限。|
|IllegalArgumentException|* 参数admin为null。 * 参数packageNames不符合要求。|

#### removeUsbAccessAppFromTrustList

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------|
|手机、平板|HarmonyOS 3.1及以上|

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean removeUsbAccessAppFromTrustList(ComponentName admin, ArrayList\<String\> packageNames) 移除可直接访问USB设备的应用列表。 注意：需要申请com.huawei.permission.sec.MDM_MANAGE_USB权限。|

Parameters  

|Name|Description|
|:-----------|:--------------------------------------------------------------|
|admin|调用该接口的组件名称，不能为null。|
|packageNames|待移除的应用列表。 * packageNames中的每个包名不能为空。 * packageNames不能为空或者size为0。|

Return  

|Type|Description|
|:------|:---------------------------------|
|boolean|* true：移除应用列表成功。 * false：移除应用列表失败。|

Throws  

|Name|Description|
|:-----------------------|:-------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_MANAGE_USB权限。|
|IllegalArgumentException|* 参数admin为null。 * 参数packageNames不符合要求。|

#### getUsbAccessAppTrustList

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------|
|手机、平板|HarmonyOS 3.1及以上|

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------|
|public ArrayList\<String\> getUsbAccessAppTrustList(ComponentName admin) 获取可直接访问USB设备的应用列表。 注意：需要申请com.huawei.permission.sec.MDM_MANAGE_USB权限。|

Parameters  

|Name|Description|
|:----|:----------|
|admin|调用该接口的组件名称。|

Return  

|Type|Description|
|:------------------|:----------|
|ArrayList\<String\>|获取已配置的应用列表。|

Throws  

|Name|Description|
|:----------------|:-------------------------------------------------------------------------|
|SecurityException|* 指定的admin未激活。 * 参数admin非法。 * 无com.huawei.permission.sec.MDM_MANAGE_USB权限。|

#### addLauncherHiddenIconList

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------|
|手机、平板|HarmonyOS 3.1及以上|

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean addLauncherHiddenIconList(ComponentName admin, ArrayList\<String\> packageNames) 添加隐藏桌面图标应用白名单。列表包名对应的应用图标，不会在桌面上显示。 注意： 1. 需要申请com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。 2. 只对华为桌面生效。|

Parameters  

|Name|Description|
|:-----------|:--------------------------------------------------------------------------------------------------------|
|admin|调用该接口的组件名称，不能为null。|
|packageNames|待添加的应用列表。 * packageNames中的每个包名不能为空、不能为未安装应用。 * packageNames不能为空或者size为0。 * 更新后的应用列表包含的记录数量不能超过最大限制数量200个。|

Return  

|Type|Description|
|:------|:-------------------------|
|boolean|* true：添加成功。 * false：添加失败。|

Throws  

|Name|Description|
|:-----------------------|:-----------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。|
|IllegalArgumentException|* 参数admin为null。 * 参数packageNames不符合要求。|

#### removeLauncherHiddenIconList

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------|
|手机、平板|HarmonyOS 3.1及以上|

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean removeLauncherHiddenIconList(ComponentName admin, ArrayList\<String\> packageNames) 移除隐藏桌面图标应用白名单。列表中包名对应的应用图标，取消隐藏后会在桌面上显示。 注意： 1. 需要申请com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。 2. 只对华为桌面生效。|

Parameters  

|Name|Description|
|:-----------|:---------------------|
|admin|调用该接口的组件名称，不能为null。|
|packageNames|待移除的应用列表，不能为空或者size为0。|

Return  

|Type|Description|
|:------|:-------------------------|
|boolean|* true：移除成功。 * false：移除失败。|

Throws  

|Name|Description|
|:-----------------------|:-----------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。|
|IllegalArgumentException|* 参数admin为null。 * 参数packageNames不符合要求。|

#### getLauncherHiddenIconList

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------|
|手机、平板|HarmonyOS 3.1及以上|

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------|
|public ArrayList\<String\> getLauncherHiddenIconList(ComponentName admin) 获取隐藏桌面图标应用白名单。 注意：需要申请com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。|

Parameters  

|Name|Description|
|:----|:----------|
|admin|调用该接口的组件名称。|

Return  

|Type|Description|
|:------------------|:--------------|
|ArrayList\<String\>|获取的隐藏桌面图标应用白名单。|

Throws  

|Name|Description|
|:----------------|:-----------------------------------------------------------------------------|
|SecurityException|* 指定的admin未激活。 * 参数admin非法。 * 无com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。|

#### setComponentLaunchedByLauncher

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------|
|手机、平板|HarmonyOS 4.0及以上|

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean setComponentLaunchedByLauncher(ComponentName admin, String launchComponent) 设置开机拉起应用组件名。 注意： 1. 需要申请com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。 2. 此场景需要重启设备生效。|

Parameters  

|Name|Description|
|:--------------|:-----------------------------------------------------------------------------------|
|admin|调用该接口的组件名称，不能为null。|
|launchComponent|被拉起应用的组件名，格式为：包名:类名，注意分隔符为英文输入法下的冒号。该组件需确保声明directBootAware为true，且未解锁情况下拉起该界面可以正常运行。|

Return  

|Type|Description|
|:------|:-------------------------|
|boolean|* true：配置成功。 * false：配置失败。|

Throws  

|Name|Description|
|:-----------------------|:-------------------------------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。|
|IllegalArgumentException|* admin为null。 * launchComponent为空或者为null。 * launchComponent格式不正确。 * launchComponent中包名或类名为空。|

#### getComponentLaunchedByLauncher

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------|
|手机、平板|HarmonyOS 4.0及以上|

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------|
|public String getComponentLaunchedByLauncher(ComponentName admin) 获取开机拉起应用组件名。 注意：需要申请com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。|

Parameters  

|Name|Description|
|:----|:------------------|
|admin|调用该接口的组件名称，不能为null。|

Return  

|Type|Description|
|:-----|:----------------|
|String|返回组件名称。格式为：包名:类名。|

Throws  

|Name|Description|
|:----------------|:-----------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。|

#### clearComponentLaunchedByLauncher

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------|
|手机、平板|HarmonyOS 4.0及以上|

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------|
|public boolean clearComponentLaunchedByLauncher(ComponentName admin) 清除开机拉起应用组件名。 注意：需要申请com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。|

Parameters  

|Name|Description|
|:----|:------------------|
|admin|调用该接口的组件名称，不能为null。|

Return  

|Type|Description|
|:------|:-------------------------|
|boolean|* true：配置成功。 * false：配置失败。|

Throws  

|Name|Description|
|:-----------------------|:-----------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。|
|IllegalArgumentException|admin为null。|

#### clearPackageCacheData

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------|
|手机、平板|HarmonyOS 4.0及以上|

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------|
|public void clearPackageCacheData(ComponentName admin, String packageName) 应用缓存清理。 注意：需要申请com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。|

Parameters  

|Name|Description|
|:----------|:------------------|
|admin|调用该接口的组件名称，不能为null。|
|packageName|被清理的应用包名。|

Return  

|Type|Description|
|:---|:----------|
|void|-|

Throws  

|Name|Description|
|:-----------------------|:-----------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_APP_MANAGEMENT权限。|
|IllegalArgumentException|* admin为null。 * packageName为null或者empty。|

