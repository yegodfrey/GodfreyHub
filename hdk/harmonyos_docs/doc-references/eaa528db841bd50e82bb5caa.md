---
name: document/cn/doc-references/kvmanager-0000001054238801
title: KvManager
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/kvmanager-0000001054238801
source: portal
---

# KvManager
    
    public interface KvManager  
  
---  
Provides interfaces to manage a KvStore database, including obtaining, closing, and deleting the KvStore.

**Since:**

1

#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
void | [closeKvStore](https://developer.harmonyos.com/cn/docs/documentation/doc-references/kvmanager-0000001054238801#ZH-CN_TOPIC_0000001054238801__closeKvStore-ohos_data_distributed_common_KvStore-)​([KvStore](https://developer.harmonyos.com/cn/docs/documentation/doc-references/kvstore-0000001054678771) kvStore) |  Closes the KvStore database.   
void | [deleteKvStore](https://developer.harmonyos.com/cn/docs/documentation/doc-references/kvmanager-0000001054238801#ZH-CN_TOPIC_0000001054238801__deleteKvStore-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) storeId) |  Deletes the KvStore database identified by storeId.   
[List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)> | [getAllKvStoreId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/kvmanager-0000001054238801#ZH-CN_TOPIC_0000001054238801__getAllKvStoreId--)​() |  Obtains the storeId of all KvStore databases that are created by using the getKvStore method and not deleted by calling the deleteKvStore method.   
[List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[DeviceInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deviceinfo-0000001054678808)> | [getConnectedDevicesInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/kvmanager-0000001054238801#ZH-CN_TOPIC_0000001054238801__getConnectedDevicesInfo-ohos_data_distributed_device_DeviceFilterStrategy-)​([DeviceFilterStrategy](https://developer.harmonyos.com/cn/docs/documentation/doc-references/devicefilterstrategy-0000001054558809) strategy) |  Get all connected devices information, which has distributed capability.   
<KVSTORE extends [KvStore](https://developer.harmonyos.com/cn/docs/documentation/doc-references/kvstore-0000001054678771)>KVSTORE | [getKvStore](https://developer.harmonyos.com/cn/docs/documentation/doc-references/kvmanager-0000001054238801#ZH-CN_TOPIC_0000001054238801__getKvStore-ohos_data_distributed_common_Options-java_lang_String-)​([Options](https://developer.harmonyos.com/cn/docs/documentation/doc-references/options-0000001054238803) options, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) storeId) |  Creates and obtains a KvStore database by specifying Options and storeId.   
[DeviceInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deviceinfo-0000001054678808) | [getLocalDeviceInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/kvmanager-0000001054238801#ZH-CN_TOPIC_0000001054238801__getLocalDeviceInfo--)​() |  Get local device information;   
void | [registerDeviceChangeCallback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/kvmanager-0000001054238801#ZH-CN_TOPIC_0000001054238801__registerDeviceChangeCallback-ohos_data_distributed_device_DeviceChangeCallback-ohos_data_distributed_device_DeviceFilterStrategy-)​([DeviceChangeCallback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/devicechangecallback-0000001054440093) callback, [DeviceFilterStrategy](https://developer.harmonyos.com/cn/docs/documentation/doc-references/devicefilterstrategy-0000001054558809) strategy) |  register DeviceChangeCallback to get notification when device's status changed   
void | [unRegisterDeviceChangeCallback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/kvmanager-0000001054238801#ZH-CN_TOPIC_0000001054238801__unRegisterDeviceChangeCallback-ohos_data_distributed_device_DeviceChangeCallback-)​([DeviceChangeCallback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/devicechangecallback-0000001054440093) callback) |  unRegister DeviceChangeCallback and can not receive notification   
  
#### Method Detail

#### [h2]getKvStore

<KVSTORE extends [KvStore](https://developer.harmonyos.com/cn/docs/documentation/doc-references/kvstore-0000001054678771)> KVSTORE getKvStore​([Options](https://developer.harmonyos.com/cn/docs/documentation/doc-references/options-0000001054238803) options, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) storeId) throws [KvStoreException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/kvstoreexception-0000001054838760)

Creates and obtains a KvStore database by specifying Options and storeId. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
options  |  Indicates the options used for creating and obtaining the KvStore database, including isCreateIfMissing, isEncrypt, and KvStoreType.  
storeId  |  Identifies the KvStore database. The value of this parameter must be unique for the same application, and different applications can share the same value.  
  
**Returns:**

Returns a SingleKvStore, or DeviceKvStore, as specified by KvStoreType.

**Throws:**

Throw Name | Throw Description  
---|---  
[KvStoreException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/kvstoreexception-0000001054838760) |  Throws this exception if any of the following errors occurs: IINVALID_ARGUMENT, SERVER_UNAVAILABLE, PERMISSION_DENIED, and IPC_ERROR, DB_ERROR.  
  
**Since:**

1

#### [h2]closeKvStore

void closeKvStore​([KvStore](https://developer.harmonyos.com/cn/docs/documentation/doc-references/kvstore-0000001054678771) kvStore) throws [KvStoreException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/kvstoreexception-0000001054838760)

Closes the KvStore database. 

Warning: This method is not thread-safe. If you call this method to stop a KvStore database that is running, your thread may crash. 

The KvStore database to close must be an object created by using the getKvStore method. Before using this method, release the resources created for the database, for example, KvStoreResultSet for SingleKvStore, otherwise closing the database will fail. If you are attempting to close a database that is already closed, an error will be returned.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
kvStore  |  Indicates the KvStore database to close.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[KvStoreException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/kvstoreexception-0000001054838760) |  Throws this exception if any of the following errors occurs: INVALID_ARGUMENT, ERVER_UNAVAILABLE, STORE_NOT_OPEN, STORE_NOT_FOUND, DB_ERROR, PERMISSION_DENIED, and IPC_ERROR.  
  
**Since:**

1

#### [h2]deleteKvStore

void deleteKvStore​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) storeId) throws [KvStoreException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/kvstoreexception-0000001054838760)

Deletes the KvStore database identified by storeId. 

Before using this method, close all KvStore instances in use that are identified by the same storeId. 

You can use this method to delete a KvStore database not in use. After the database is deleted, all its data will be lost.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
storeId  |  Identifies the KvStore database to delete.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[KvStoreException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/kvstoreexception-0000001054838760) |  Throws this exception if any of the following errors occurs: INVALID_ARGUMENT, SERVER_UNAVAILABLE, STORE_NOT_FOUND, DB_ERROR, PERMISSION_DENIED, and IPC_ERROR.  
  
**Since:**

1

#### [h2]getAllKvStoreId

[List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)> getAllKvStoreId​() throws [KvStoreException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/kvstoreexception-0000001054838760)

Obtains the storeId of all KvStore databases that are created by using the getKvStore method and not deleted by calling the deleteKvStore method. 

**Returns:**

Returns the storeId of all created KvStore databases.

**Throws:**

Throw Name | Throw Description  
---|---  
[KvStoreException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/kvstoreexception-0000001054838760) |  Throws this exception if any of the following errors occurs: SERVER_UNAVAILABLE, DB_ERROR, PERMISSION_DENIED, and IPC_ERROR.  
  
**Since:**

1

#### [h2]getConnectedDevicesInfo

[List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[DeviceInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deviceinfo-0000001054678808)> getConnectedDevicesInfo​([DeviceFilterStrategy](https://developer.harmonyos.com/cn/docs/documentation/doc-references/devicefilterstrategy-0000001054558809) strategy) throws [KvStoreException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/kvstoreexception-0000001054838760)

Get all connected devices information, which has distributed capability. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
strategy  |  device filter strategy DeviceFilterStrategy  
  
**Returns:**

device information list;

**Throws:**

Throw Name | Throw Description  
---|---  
[KvStoreException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/kvstoreexception-0000001054838760) |  exception maybe occurs.  
  
**Since:**

3

#### [h2]getLocalDeviceInfo

[DeviceInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deviceinfo-0000001054678808) getLocalDeviceInfo​() throws [KvStoreException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/kvstoreexception-0000001054838760)

Get local device information; 

**Returns:**

local device information;

**Throws:**

Throw Name | Throw Description  
---|---  
[KvStoreException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/kvstoreexception-0000001054838760) |  exception maybe occurs.  
  
**Since:**

3

#### [h2]registerDeviceChangeCallback

void registerDeviceChangeCallback​([DeviceChangeCallback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/devicechangecallback-0000001054440093) callback, [DeviceFilterStrategy](https://developer.harmonyos.com/cn/docs/documentation/doc-references/devicefilterstrategy-0000001054558809) strategy) throws [KvStoreException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/kvstoreexception-0000001054838760)

register DeviceChangeCallback to get notification when device's status changed 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
callback  |  device change callback DeviceChangeCallback  
strategy  |  device filter strategy DeviceFilterStrategy  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[KvStoreException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/kvstoreexception-0000001054838760) |  exception maybe occurs.  
  
**Since:**

3

#### [h2]unRegisterDeviceChangeCallback

void unRegisterDeviceChangeCallback​([DeviceChangeCallback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/devicechangecallback-0000001054440093) callback) throws [KvStoreException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/kvstoreexception-0000001054838760)

unRegister DeviceChangeCallback and can not receive notification 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
callback  |  device change callback DeviceChangeCallback which has been registered.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[KvStoreException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/kvstoreexception-0000001054838760) |  exception maybe occurs.  
  
**Since:**

3
