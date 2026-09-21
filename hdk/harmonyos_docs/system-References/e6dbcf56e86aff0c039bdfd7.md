---
name: document/cn/system-References/discovery-policy-0000001050132587
title: Policy
uri: https://developer.huawei.com/consumer/cn/doc/system-References/discovery-policy-0000001050132587
---

# Policy

|Class Info|
|:--------------------------------------------------------------------------------|
|public final class Policy implements Parcelable 广播、扫描过程所需端到端连接策略信息，不同策略对应不同的网络拓扑。|

## Public Field Summary

|Qualifier and Type|Field and Description|
|:--------------------------------------|:--------------------------------------------------------------|
|static final Parcelable.Creator<Policy>|[CREATOR](#section296210172711) Policy对象的构造器。|
|static final Policy|[POLICY_MESH](#section5781511220) 端到端连接策略，支持M对N的连接拓扑。当前暂不支持此策略。|
|static final Policy|[POLICY_P2P](#section1628820301409) 端到端连接策略，支持一对一的连接拓扑。|
|static final Policy|[POLICY_STAR](#section098230122218) 端到端连接策略，支持1对N的连接拓扑。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:------------------------------------------------------------------------------|
|int|[describeContents](#section18673133719503)() 返回当前Parcelable对象描述。|
|boolean|[equals](#section01661133125913)(Object other) 判断其他对象是否与本对象相同。|
|int|[hashCode](#section1143911511016)() 获取哈希值。|
|String|[toString](#section103421313311)() 把策略类型转化成可读的字符串。|
|void|[writeToParcel](#section871814812119)(Parcel dest, int flags) 序列化打包，把值写入dest容器。|

## Public Fields

### CREATOR

|Fields|
|:-------------------------------------------------------------------|
|public static final Parcelable.Creator<Policy> CREATOR Policy对象的构造器。|

### POLICY_MESH

|Fields|
|:-----------------------------------------------------------------------------------------|
|public static final Policy POLICY_MESH 端到端连接策略，支持M对N的连接拓扑。当前暂不支持此策略。 Constant Value："MESH"|

### POLICY_P2P

|Fields|
|:-----------------------------------------------------------------------------|
|public static final Policy POLICY_P2P 端到端连接策略，支持1对1的连接拓扑。 Constant Value："P2P"|

### POLICY_STAR

|Fields|
|:-------------------------------------------------------------------------------|
|public static final Policy POLICY_STAR 端到端连接策略，支持1对N的连接拓扑。 Constant Value："STAR"|

## Public Methods

### describeContents

|Method|
|:------------------------------------------------|
|public int describeContents() 返回当前Parcelable对象描述。|

**Returns**

|Type|Description|
|:---|:--------------------------------------------------------------------|
|int|当前Parcelable对象描述。返回值如下： * 0：普通Parcelable对象。 * 1：包含文件描述符的Parcelable对象。|

### equals

|Method|
|:--------------------------------------------------|
|public boolean equals(Object other) 判断其他对象是否与本对象相同。|

**Parameters**

|Name|Description|
|:----|:----------|
|other|其他对象。|

**Returns**

|Type|Description|
|:------|:----------------------|
|boolean|* true：相同。 * false：不相同。|

### hashCode

|Method|
|:---------------------------|
|public int hashCode() 获取哈希值。|

**Returns**

|Type|Description|
|:---|:----------|
|int|当前对象的哈希值。|

### toString

|Method|
|:-------------------------------------|
|public String toString() 把策略转化成可读的字符串。|

**Returns**

|Type|Description|
|:-----|:-----------|
|String|策略转化成的可读字符串。|

### writeToParcel

|Method|
|:------------------------------------------------------------------|
|public void writeToParcel(Parcel dest, int flags) 序列化打包，把值写入dest容器。|

**Parameters**

|Name|Description|
|:----|:------------------------------------------------------------------|
|dest|对象被写入的Parcel。|
|flags|写入方式，取值如下： * 0。 * PARCELABLE_WRITE_RETURN_VALUE（详情查看Parcelable接口类）。|

