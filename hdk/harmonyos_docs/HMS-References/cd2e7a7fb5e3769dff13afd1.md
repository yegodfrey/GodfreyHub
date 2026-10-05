---
name: document/cn/HMS-References/bledeviceinfo-0000001050091721
title: BleDeviceInfo
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/bledeviceinfo-0000001050091721
source: portal
---

# BleDeviceInfo

**CLASS info**  
---  
public class BleDeviceInfo implements Parcelable  
描述蓝牙低功耗设备的信息，包含蓝牙GATT协议信息，设备地址，设备名称  
  
#### Public Constructor Summary

**Constructor name**  
---  
public BleDeviceInfo(Parcel in) BleDeviceInfo的序列化构造方法  
public BleDeviceInfo() BleDeviceInfo的构造方法  
public BleDeviceInfo(String deviceAddress, String deviceName, List<String> profiles, List<DataType> dataTypeList) BleDeviceInfo的构造方法  
  
#### Public Method Summary

**Return** | **Method**  
---|---  
String | getDeviceAddress() 获取BLE设备MAC地址  
String | getDeviceName() 获取BLE设备名称  
List<DataType> | getDataTypes() 获取数据类型  
List<String> | getAvailableProfiles() 获取支持的配置  
void | setDeviceAddress(String deviceAddress) 设置设备的地址  
void | setDeviceName(String deviceName) 设置设备名称  
void | setAvailableProfiles(List<String> availableProfiles) 设置支持的配置  
void | setDataTypes(List<DataType> dataTypes) 设置数据类型  
boolean | equals(Object obj)  
int | hashCode()  
String | toString  
int | describeContents()  
void | writeToParcel(Parcel dest, int flags)  
  
#### Inherited Method Summary

#### [h2]equals(Object obj)/ hashCode()/toString()

**From class** | **Return type** | **Method name**  
---|---|---  
java.lang.Object | void | public boolean equals(Object obj)  
Void | public int hashCode()  
String | public String toString()  
  
#### [h2]describeContents()/writeToParcel(Parcel arg0, int arg1)

**From class** | **Return type** | **Method name**  
---|---|---  
android.os.Parcelable | int | describeContents()  
void | writeToParcel(Parcel arg0, int arg1)  
  
#### Public Constructors

#### [h2]BleDeviceInfo()

**Constructor name**  
---  
public BleDeviceInfo()  
BleDeviceInfo无参构造方法  
  
#### [h2]BleDeviceInfo(Parcel in)

**Constructor name**  
---  
public BleDeviceInfo(Parcel in)  
BleDeviceInfo序列化构造方法  
  
**Parameters**

**Parameter name** | **Parameter desc**  
---|---  
in | Parcel包  
  
#### [h2]BleDeviceInfo(String address, String deviceName, List<String> profiles, List<DataType> dataTypeList)

**Constructor name**  
---  
public BleDeviceInfo(String deviceAddress, String deviceName, List<String> profiles, List<DataType> dataTypeList)  
BleDeviceInfo构造方法  
  
**Parameters**

**Parameter name** | **Parameter desc**  
---|---  
deviceAddress | String: 设备地址  
deviceName | String: 设备名称  
profiles | List: 设备配置信息  
dataTypeList | List: 数据类型列表  
  
#### Public Methods

#### [h2]getDeviceAddress()

**Method**  
---  
public String getDeviceAddress()  
获取BLE设备的地址  
  
**Return**

**Type** | **Return** **desc**  
---|---  
String | 设备地址  
  
#### [h2]getDeviceName()

**Method**  
---  
public String getDeviceName()  
获取BLE设备的名称  
  
**Return**

**Type** | **Return** **desc**  
---|---  
String | 设备名称  
  
#### [h2]getDataTypes()

**Method**  
---  
public List<DataType> getDataTypes()  
返回支持的所有数据类型  
  
**Return**

**Type** | **Return** **desc**  
---|---  
List<DataType> | 数据类型  
  
#### [h2]getAvailableProfiles()

**Method**  
---  
public List<String> getAvailableProfiles()  
获取支持的协议  
  
**Return**

**Type** | **Return** **desc**  
---|---  
List<String> | GATT协议信息  
  
#### [h2]setDeviceAddress(String deviceAddress)

**Method**  
---  
public void setDeviceAddress(String deviceAddress)  
设置设备地址  
  
**Parameters**

**Parameter name** | **Parameter desc**  
---|---  
deviceAddress | 设备地址  
  
#### [h2]setDeviceName(String deviceName)

**Method**  
---  
public void setDeviceName(String deviceName)  
设置设备名称  
  
**Parameters**

**Parameter name** | **Parameter desc**  
---|---  
deviceName | 设备名称  
  
#### [h2]setAvailableProfiles(List<String> availableProfiles)

**Method**  
---  
public void setAvailableProfiles(List<String> availableProfiles)  
设置平台与设备支持的GATT协议信息  
  
**Parameters**

**Parameter name** | **Parameter desc**  
---|---  
availableProfiles | GATT协议信息  
  
#### [h2]setDataTypes(List<DataType> dataTypes)

**Method**  
---  
public void setDataTypes(List<DataType> dataTypes)  
设置数据类型值  
  
**Parameters**

**Parameter name** | **Parameter desc**  
---|---  
dataTypes | 数据类型  
  
#### [h2]equals(Object obj)

**Method**  
---  
public boolean equals(Object obj)  
  
#### [h2]hashCode()

**Method**  
---  
public int hashCode()  
  
#### [h2]toString()

**Method**  
---  
public String toString()  
  
#### [h2]describeContents()

**Method**  
---  
public final int describeContents()  
  
#### [h2]writeToParcel(Parcel destParcel, int writeFlags)

**Method**  
---  
public void writeToParcel(Parcel destParcel, int writeFlags)
