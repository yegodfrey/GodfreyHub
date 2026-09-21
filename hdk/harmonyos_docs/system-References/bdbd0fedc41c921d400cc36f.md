---
name: document/cn/system-References/network-common-headers-0000001075725150
title: Headers
uri: https://developer.huawei.com/consumer/cn/doc/system-References/network-common-headers-0000001075725150
---

# Headers

|Class Info|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public final class Headers 消息头信息。使用[Headers.Builder](https://developer.huawei.com/consumer/cn/doc/system-References/network-common-headersbuilder-0000001076347050)对象的[build](https://developer.huawei.com/consumer/cn/doc/system-References/network-common-headersbuilder-0000001076347050#section8884734127)方法创建Headers对象。|

## Nested Class Summary

|Qualifier and Type|Class Name and Description|
|:------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------|
|public static final class|[Headers.Builder](https://developer.huawei.com/consumer/cn/doc/system-References/network-common-headersbuilder-0000001076347050) Headers的构造器。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:--------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public long|[byteCount](#section6682103715237)() 获取所有消息头数据的字节总长度。|
|public boolean|[equals](#section56278328117)(Object other) 比较other实例是否也为Headers对象，且与当前对象的保存的值相等。|
|public String|[get](#section20703182720552)(String name) 获取消息头中指定名称对应的"value"值。|
|public String|[name](#section131915311914)(int index) 获取消息头中对应索引位置的名称。|
|public Set<String>|[names](#section322717617113)() 返回所有消息头的名称。|
|public [Headers.Builder](https://developer.huawei.com/consumer/cn/doc/system-References/network-common-headersbuilder-0000001076347050)|[newBuilder](#section967115267185)() 使用当前对象创建一个包含已有配置信息的、可修改的[Builder](https://developer.huawei.com/consumer/cn/doc/system-References/network-common-headersbuilder-0000001076347050)构造器。|
|public static Headers|[of](#section579561021612)(String... namesAndValues) 将传入的字符串组转化成Headers。|
|public static Headers|[of](#section16251428184710)(Map<String, List<String>> headers) 将map形式的消息头信息转化成Headers。|
|public int|[size](#section12828192019478)() 获取消息头数量。|
|public Map<String, List<String>>|[toMultimap](#section339394855617)() 返回map形式的消息头信息，区分大小写，例如："name"和"Name"表示不同值。|
|public String|[value](#section178322401194)(int index) 获取对应索引位置的"value"值。|
|public List<String>|[values](#section552754319355)(String name) 返回指定消息头名称的所有"value"值。|

## Public Methods

### byteCount

|Method|
|:---------------------------------------|
|public long byteCount() 获取所有消息头数据的字节总长度。|

**Returns**

|Type|Description|
|:---|:-------------|
|long|所有消息头数据的字节总长度。|

### equals

|Method|
|:------------------------------------------------------------------------|
|public boolean equals(Object other) 比较other实例是否也为Headers对象，且与当前对象的保存的值相等。|

**Parameters**

|Name|Description|
|:----|:----------|
|other|待比较的对象。|

**Returns**

|Type|Description|
|:------|:------------------------------------------------------------------------------------------------------|
|boolean|待比较对象是否与当前对象相等。 * true：other实例是Headers对象，且保存的值与当前对象保存的值相等。 * false：other实例不是Headers对象，或保存的值与当前对象保存的值不等。|

### get

|Method|
|:----------------------------------------------------|
|public String get(String name) 获取消息头中指定名称对应的"value"值。|

**Parameters**

|Name|Description|
|:---|:-------------------|
|name|待获取对应"value"值的消息头名称。|

**Returns**

|Type|Description|
|:-----|:------------------|
|String|指定消息头名称对应的"value"值。|

### name

|Method|
|:----------------------------------------------|
|public String name(int index) 获取消息头中对应索引位置的的名称。|

**Parameters**

|Name|Description|
|:----|:----------|
|index|消息头中的索引位置。|

**Returns**

|Type|Description|
|:-----|:-------------|
|String|消息头中对应索引位置的名称。|

### names

|Method|
|:-------------------------------------|
|public Set<String> names() 返回所有消息头的名称。|

**Returns**

|Type|Description|
|:----------|:----------|
|Set<String>|消息头中所有的名称。|

### newBuilder

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [Headers.Builder](https://developer.huawei.com/consumer/cn/doc/system-References/network-common-headersbuilder-0000001076347050) newBuilder() 使用当前对象创建一个包含已有配置信息的、可修改的[Builder](https://developer.huawei.com/consumer/cn/doc/system-References/network-common-headersbuilder-0000001076347050)构造器。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|
|[Headers.Builder](https://developer.huawei.com/consumer/cn/doc/system-References/network-common-headersbuilder-0000001076347050)|返回创建的包含已有配置信息的、可修改的Builder构造器。|

### of(String... namesAndValues)

|Method|
|:---------------------------------------------------------------------|
|public static Headers of(String... namesAndValues) 将传入的字符串组转化成Headers。|

**Parameters**

|Name|Description|
|:-------------|:--------------------------------------------------------------------------------------------------------|
|namesAndValues|待转化的消息头字符串组（多个字符串对象或字符串数组）。字符串组的数量必须为偶数，且信息头的名称和值必须交替，且不含空值，不含换行符。例如：["name1","value1","name2","value2"]。|

**Returns**

|Type|Description|
|:------|:-------------|
|Headers|转化后的Headers实例。|

### of(Map<String, List<String>> headers)

|Method|
|:----------------------------------------------------------------------------------|
|public static Headers of(Map<String, List<String>> headers) 将map形式的消息头信息转化成Headers。|

**Parameters**

|Name|Description|
|:------|:---------------------------------------------------------------------|
|headers|待转化的消息头信息map。headers对象不可为null，headers中元素不可存在空值（字符串长度为0或对象为空），也不可含有换行符。|

**Returns**

|Type|Description|
|:------|:-------------|
|Headers|转化后的Headers实例。|

### size

|Method|
|:-------------------------|
|public int size() 获取消息头数量。|

**Returns**

|Type|Description|
|:---|:-----------|
|int|消息头信息中键值对数量。|

### toMultimap

|Method|
|:---------------------------------------------------------------------------------------|
|public Map<String, List<String>> toMultimap() 返回map形式的消息头信息，区分大小写，例如："name"和"Name"表示不同值。|

**Returns**

|Type|Description|
|:------------------------|:-----------------|
|Map<String, List<String>>|消息头信息的map形式，区分大小写。|

### value

|Method|
|:----------------------------------------------------|
|public String value(int index) 获取消息头中对应索引位置的"value"值。|

**Parameters**

|Name|Description|
|:----|:----------|
|index|消息头中的位置。|

**Returns**

|Type|Description|
|:-----|:----------|
|String|消息头中指定位置的值。|

### values

|Method|
|:------------------------------------------------------------|
|public List<String> values(String name) 返回指定消息头名称的所有"value"值。|

**Parameters**

|Name|Description|
|:---|:-----------|
|name|待检索的指定消息头名称。|

**Returns**

|Type|Description|
|:-----------|:------------|
|List<String>|消息头中指定名字对应的值。|

```screen
//  Licensed to the Apache Software Foundation (ASF) under one or morz
//  contributor license agreements.  See the NOTICE file distributed with
//  this work for additional information regarding copyright ownership.
//  The ASF licenses this file to You under the Apache License, Version 2.0
//  (the "License"); you may not use this file except in compliance with
//   the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
```

