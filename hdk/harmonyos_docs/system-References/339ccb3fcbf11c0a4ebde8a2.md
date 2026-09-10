---
name: document/cn/system-References/message-ibeaconinfo-0000001463849188
title: IBeaconInfo
uri: https://developer.huawei.com/consumer/cn/doc/system-References/message-ibeaconinfo-0000001463849188
---

# IBeaconInfo

|Class Info|
|:-------------------------------------------------------------------|
|public class IBeaconInfo implements Parcelable Beacon信标设备的iBeacon类型。|

#### Public Field Summary

|Qualifier and Type|Field and Description|
|:----------------------------------------------|:------------------------------------------------------|
|static final Parcelable.Creator\<IBeaconInfo \>|[CREATOR](#section1464813168391) 实现Parcelable接口必须提供的实例。|

#### Public Constructor Summary

|Constructor Name|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[IBeaconInfo](#section6415172653319)(String uuid, boolean isMajor, Short major, boolean isMinor, Short minor) 构造IBeaconInfo实例。传入uuid、major和minor、isMajor、isMinor。|
|[IBeaconInfo](#section4998154523319)(String uuid, Short major, Short minor) 构造IBeaconInfo实例，传入uuid、major和minor。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:-------------------------------------------------------------------|
|final int|[describeContents](#section18673133719503)() 返回当前Parcelable对象描述。|
|boolean|[equals](#section1574185651114)(Object object) 判断其他对象是否与本实例相同。|
|boolean|[getIsMajor](#section10861104335)() 是否存在major。|
|boolean|[getIsMinor](#section568164205815)() 是否存在Minor。|
|String|[getMajor](#section2441103319)() 获取iBeacon Major值。|
|String|[getMinor](#section1569204225812)() 获取iBeacon Minor值。|
|String|[getUuid](#section16492188103315)() 获取iBeacon的UUID值。|
|int|[hashCode](#section12821458111310)() 获取哈希值。|
|String|[toString](#section614111285142)() 把对象转化成可读的字符串。|
|final void|[writeToParcel](#section993185618148)(Parcel dest, int flags) 序列化打包。|

#### Public Fields

#### CREATOR

|Fields|
|:------------------------------------------------------------------------------------|
|public static final Parcelable.Creator\<IBeaconInfo \> CREATOR 实现Parcelable接口必须提供的实例。|

#### Public Constructors

#### IBeaconInfo(String uuid, boolean isMajor, Short major, boolean isMinor, Short minor)

|Constructor|
|:----------------------------------------------------------------------------------------------------------------------------------------------|
|public IBeaconInfo(String uuid, boolean isMajor, Short major, boolean isMinor, Short minor) 构造IBeaconInfo实例。传入uuid、major和minor、isMajor、isMinor。|

Parameters  

|Name|Description|
|:------|:--------------|
|uuid|iBeacon的UUID值。|
|isMajor|是否存在Major。|
|major|iBeacon的Major值。|
|isMinor|是否存在Minor。|
|minor|iBeacon的Minor值。|

#### IBeaconInfo(String uuid, Short major, Short minor)

|Constructor|
|:--------------------------------------------------------------------------------------------|
|public IBeaconInfo(String uuid, Short major, Short minor) 构造IBeaconInfo实例，传入uuid、major和minor。|

Parameters  

|Name|Description|
|:----|:--------------|
|uuid|iBeacon的UUID值。|
|major|iBeacon的Major值。|
|minor|iBeacon的Minor值。|

#### Public Methods

#### describeContents

|Method|
|:------------------------------------------------------|
|public final int describeContents() 返回当前Parcelable对象描述。|

Returns  

|Type|Description|
|:---|:--------------------------------------------------------------------|
|int|当前Parcelable对象描述。返回值如下： * 0：普通Parcelable对象。 * 1：包含文件描述符的Parcelable对象。|

#### equals

|Method|
|:---------------------------------------------------|
|public boolean equals(Object object) 判断其他对象是否与本实例相同。|

Parameters  

|Name|Description|
|:-----|:----------|
|object|其他对象。|

Returns  

|Type|Description|
|:------|:----------------------|
|boolean|* true：相同。 * false：不相同。|

#### getIsMajor

|Method|
|:-------------------------------------|
|public boolean getIsMajor() 是否存在Major。|

Returns  

|Type|Description|
|:------|:----------------------|
|boolean|* true：存在。 * false：不存在。|

#### getIsMinor

|Method|
|:-------------------------------------|
|public boolean getIsMinor() 是否存在Minor。|

Returns  

|Type|Description|
|:------|:----------------------|
|boolean|* true：存在。 * false：不存在。|

#### getMajor

|Method|
|:-----------------------------------------|
|public String getMajor() 获取iBeacon Major值。|

Returns  

|Type|Description|
|:-----|:----------------|
|String|返回iBeacon的Major值。|

#### getMinor

|Method|
|:-----------------------------------------|
|public String getMinor() 获取iBeacon Minor值。|

Returns  

|Type|Description|
|:-----|:----------------|
|String|返回iBeacon的Minor值。|

#### getUuid

|Method|
|:---------------------------------------|
|public String getUuid() 获取iBeacon的UUID值。|

Returns  

|Type|Description|
|:-----|:---------------|
|String|返回iBeacon的UUID值。|

#### hashCode

|Method|
|:---------------------------|
|public int hashCode() 获取哈希值。|

Returns  

|Type|Description|
|:---|:----------|
|int|当前对象的哈希值。|

#### toString

|Method|
|:-------------------------------------|
|public String toString() 把对象转化成可读的字符串。|

Returns  

|Type|Description|
|:-----|:-------------------|
|String|IBeaconInfo对象的可读字符串。|

#### writeToParcel

|Method|
|:------------------------------------------------------------------------|
|public final void writeToParcel(Parcel dest, int flags) 序列化打包，把值写入dest容器。|

Parameters  

|Name|Description|
|:----|:------------------------------------------------------------------|
|dest|对象被写入的Parcel。|
|flags|写入方式，取值如下： * 0。 * PARCELABLE_WRITE_RETURN_VALUE（详情查看Parcelable接口类）。|

