---
name: document/cn/Media-References/mediameta-0000001157012727
title: MediaMeta
uri: https://developer.huawei.com/consumer/cn/doc/Media-References/mediameta-0000001157012727
---

# MediaMeta

|Class Info|
|:------------------------------------------------------|
|public class MediaMeta 用来描述媒体文件的公有元数据类，可根据键值获取和更改对应的数据。|

## Public Constructor Summary

|Constructor Name|
|:-----------------------------------|
|public MediaMeta() 实例化一个MediaMeta对象。|

## Public Constructors

### MediaMeta

|Constructor|
|:-----------------------------------|
|public MediaMeta() 实例化一个MediaMeta对象。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|boolean|[containsKey](#section159318131969)(String key) 查询该元信息里是否存在此键值。|
|int|[size](#section1746102810919)() 获取该元信息中的键值数。|
|void|[setInt32](#section1729312417119)(String key, int value) 写入键值为key的int型数据value。|
|void|[setInt64](#section109943511181)(String key, long value) 写入键值为key的long型数据value。|
|void|[setFloat](#section1848103911188)(String key, float value) 写入键值为key的float型数据value。|
|void|[setDouble](#section10146192195)(String key, double value) 写入键值为key的double型数据value。|
|void|[setString](#section14899836152019)(String key, String value) 写入键值为key的String型数据value。|
|void|[setByteBuffer](#section99474322116)(String key, [ByteBuffer](https://developer.android.google.cn/reference/java/nio/ByteBuffer?hl=en) buffer) 写入键值为key的[ByteBuffer](https://developer.android.google.cn/reference/java/nio/ByteBuffer?hl=en)型数据buffer。|
|int|[getInt32](#section18224053223)(String key) 获取该键对应的int类型的值。|
|long|[getInt64](#section2451239172315)(String key) 获取该键对应的long类型的值。|
|float|[getFloat](#section470843017244)(String key) 获取该键对应的float类型的值。|
|double|[getDouble](#section106195712258)(String key) 获取该键对应的double类型的值。|
|String|[getString](#section66643792513)(String key) 获取该键对应的String类型的值。|
|[ByteBuffer](https://developer.android.google.cn/reference/java/nio/ByteBuffer?hl=en)|[getByteBuffer](#section1791114616266)(String key, int size) 获取该键对应的[ByteBuffer](https://developer.android.google.cn/reference/java/nio/ByteBuffer?hl=en)类型的数据，数据大小为size指定的大小。|

## Public Methods

### containsKey

|Method|
|:-------------------------------------------------------|
|public boolean containsKey(String key) 查询数据里是否存在某个键值的数据。|

**Parameters**

|Name|Description|
|:---|:----------|
|key|键值。|

**Returns**

|Type|Description|
|:------|:---------------------------------------------|
|boolean|* true：meta中包含对应键值的数据。 * false：meta中不包含该键值的数据。|

### size

|Method|
|:-------------------------------|
|public int size() 获取该meta中的键值个数。|

**Returns**

|Type|Description|
|:---|:-----------------|
|int|返回键值个数，每个键值对应一类数据。|

### setInt32

|Method|
|:----------------------------------------------------------------|
|public void setInt32(String key, int value) 写入键值为key的int型数据value。|

**Parameters**

|Name|Description|
|:----|:----------|
|key|键值。|
|value|数据。|

### setInt64

|Method|
|:------------------------------------------------------------------|
|public void setInt64(String key, long value) 写入键值为key的long型数据value。|

**Parameters**

|Name|Description|
|:----|:----------|
|key|键值。|
|value|数据。|

### setFloat

|Method|
|:--------------------------------------------------------------------|
|public void setFloat(String key, float value) 写入键值为key的float型数据value。|

**Parameters**

|Name|Description|
|:----|:----------|
|key|键值。|
|value|数据。|

### setDouble

|Method|
|:-----------------------------------------------------------------------|
|public void setDouble(String key, double value) 写入键值为key的double型数据value。|

**Parameters**

|Name|Description|
|:----|:----------|
|key|键值。|
|value|数据。|

### setString

|Method|
|:-----------------------------------------------------------------------|
|public void setString(String key, String value) 写入键值为key的String型数据value。|

**Parameters**

|Name|Description|
|:----|:----------|
|key|键值。|
|value|数据。|

### setByteBuffer

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setByteBuffer(String key, [ByteBuffer](https://developer.android.google.cn/reference/java/nio/ByteBuffer?hl=en) buffer) 写入键值为key的[ByteBuffer](https://developer.android.google.cn/reference/java/nio/ByteBuffer?hl=en)型数据。|

**Parameters**

|Name|Description|
|:-----|:----------|
|key|键值。|
|buffer|数据。|

### getInt32

|Method|
|:-----------------------------------------------------|
|public int getInt32(String key) 从meta中获取键值为key的int型数据。|

**Parameters**

|Name|Description|
|:---|:----------|
|key|键值。|

**Returns**

|Type|Description|
|:---|:----------|
|int|返回键值对应的数据。|

### getInt64

|Method|
|:-------------------------------------------------------|
|public long getInt64(String key) 从meta中获取键值为key的long型数据。|

**Parameters**

|Name|Description|
|:---|:----------|
|key|键值。|

**Returns**

|Type|Description|
|:---|:----------|
|long|返回键值对应的数据。|

### getFloat

|Method|
|:---------------------------------------------------------|
|public float getFloat(String key) 从meta中获取键值为key的float型数据。|

**Parameters**

|Name|Description|
|:---|:----------|
|key|键值。|

**Returns**

|Type|Description|
|:----|:----------|
|float|返回键值对应的数据。|

### getDouble

|Method|
|:------------------------------------------------------------|
|public double getDouble(String key) 从meta中获取键值为key的double型数据。|

**Parameters**

|Name|Description|
|:---|:----------|
|key|键值。|

**Returns**

|Type|Description|
|:-----|:----------|
|double|返回键值对应的数据。|

### getString

|Method|
|:------------------------------------------------------------|
|public String getString(String key) 从meta中获取键值为key的String型数据。|

**Parameters**

|Name|Description|
|:---|:----------|
|key|键值。|

**Returns**

|Type|Description|
|:-----|:----------|
|String|返回键值对应的数据。|

### getByteBuffer

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [ByteBuffer](https://developer.android.google.cn/reference/java/nio/ByteBuffer?hl=en) getByteBuffer(String key, int size) 从meta中获取键值为key的[ByteBuffer](https://developer.android.google.cn/reference/java/nio/ByteBuffer?hl=en)型数据，数据大小为size指定的大小。|

**Parameters**

|Name|Description|
|:---|:----------|
|key|键值。|

**Returns**

|Type|Description|
|:------------------------------------------------------------------------------------|:----------|
|[ByteBuffer](https://developer.android.google.cn/reference/java/nio/ByteBuffer?hl=en)|返回键值对应的数据。|

