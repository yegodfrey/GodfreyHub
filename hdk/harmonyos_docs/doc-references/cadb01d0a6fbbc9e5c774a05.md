---
name: document/cn/doc-references/selectdevicelistlistener-0000001091930948
title: SelectDeviceListListener
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/selectdevicelistlistener-0000001091930948
source: portal
---

SelectDeviceListListener
    
    public interface SelectDeviceListListener  
  
---  
Provides callbacks that can be invoked when a device is selected. Before calling [DeviceManager#selectDeviceList(String, Map, SelectDeviceListListener)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/devicemanager-0000001091771016#ZH-CN_TOPIC_0000001091771016__selectDeviceList-java_lang_String-java_util_Map-ohos_distributedhardware_devicemanager_SelectDeviceListListener-) to register the device selection callback, you must first create a class to implement this interface and override the {@link ohos.distributedhardware.devicemanager.SelectDeviceListListener#onGetDeviceList(List SelectDeviceListListener#onGetDeviceList(List} method.  When the user selects a device, {@link ohos.distributedhardware.devicemanager.SelectDeviceListListener#onGetDeviceList(List SelectDeviceListListener#onGetDeviceList(List} will be called to notify your application of the selected device and its status. **Since:** 4**See Also:** [DeviceManager.selectDeviceList(String, Map, SelectDeviceListListener)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/devicemanager-0000001091771016#ZH-CN_TOPIC_0000001091771016__selectDeviceList-java_lang_String-java_util_Map-ohos_distributedhardware_devicemanager_SelectDeviceListListener-)Method Summary Modifier and Type | Method | Description  
---|---|---  
void | [onGetDeviceList](https://developer.harmonyos.com/cn/docs/documentation/doc-references/selectdevicelistlistener-0000001091930948#ZH-CN_TOPIC_0000001091930948__onGetDeviceList-java_util_List-int-)​([List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[DeviceInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deviceinfo-0000001091611346)> deviceList, int status) |  Called when a device is selected.   
Method Detail [h2]onGetDeviceList void onGetDeviceList​([List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[DeviceInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deviceinfo-0000001091611346)> deviceList, int status) Called when a device is selected. If your application needs to be notified when a device is selected, you must implement the [SelectDeviceListListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/selectdevicelistlistener-0000001091930948) interface, override this callback, and then call [DeviceManager#selectDeviceList(String, Map, SelectDeviceListListener)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/devicemanager-0000001091771016#ZH-CN_TOPIC_0000001091771016__selectDeviceList-java_lang_String-java_util_Map-ohos_distributedhardware_devicemanager_SelectDeviceListListener-)
