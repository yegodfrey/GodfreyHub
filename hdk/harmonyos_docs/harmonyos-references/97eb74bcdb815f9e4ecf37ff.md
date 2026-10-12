---
name: document/cn/harmonyos-references/_rcp___request_content
title: Rcp_RequestContent
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___request_content
---

# Rcp_RequestContent

> phone 5.0.0(12)+ | 2in1 5.0.1(13)+ | tablet 5.0.0(12)+ | tv 5.1.1(19)+ | wearable 5.1.0(18)+

## 概述

> phone | 2in1 | tablet | tv | wearable

请求的内容。

**起始版本：** 5.0.0(12)

**相关模块：** [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

**所在头文件：** [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

## 汇总

> phone | 2in1 | tablet | tv | wearable

### 成员变量

> phone | 2in1 | tablet | tv | wearable

|名称|描述|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------|
|[Rcp_ContentType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_contenttype) [type](#type)|表示union中使用的数据类型。|
|union { [Rcp_Buffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___buffer) [contentStr](#contentstr); [Rcp_Form](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_form) * [form](#form); [Rcp_MultipartForm](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_multipartform) * [multipartForm](#multipartform); [Rcp_GetDataCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview#rcp_getdatacallback) [getDataCallback](#getdatacallback); } data|contentStr：文本。 form：表单。 multipartForm：多部分表单。 getDataCallback：使用回调函数获取数据。|

## 结构体成员变量说明

> phone | 2in1 | tablet | tv | wearable

### contentStr

> phone 5.0.0(12)+ | 2in1 5.0.1(13)+ | tablet 5.0.0(12)+ | tv 5.1.1(19)+ | wearable 5.1.0(18)+

```cpp
Rcp_Buffer Rcp_RequestContent::contentStr
```

**描述**

字符串内容。

### form

> phone 5.0.0(12)+ | 2in1 5.0.1(13)+ | tablet 5.0.0(12)+ | tv 5.1.1(19)+ | wearable 5.1.0(18)+

```cpp
Rcp_Form* Rcp_RequestContent::form
```

**描述**

表单内容。

### getDataCallback

> phone 5.0.0(12)+ | 2in1 5.0.1(13)+ | tablet 5.0.0(12)+ | tv 5.1.1(19)+ | wearable 5.1.0(18)+

```cpp
Rcp_GetDataCallback Rcp_RequestContent::getDataCallback
```

**描述**

回调函数。

### multipartForm

> phone 5.0.0(12)+ | 2in1 5.0.1(13)+ | tablet 5.0.0(12)+ | tv 5.1.1(19)+ | wearable 5.1.0(18)+

```cpp
Rcp_MultipartForm* Rcp_RequestContent::multipartForm
```

**描述**

多部分表单内容。

### type

> phone 5.0.0(12)+ | 2in1 5.0.1(13)+ | tablet 5.0.0(12)+ | tv 5.1.1(19)+ | wearable 5.1.0(18)+

```cpp
Rcp_ContentType Rcp_RequestContent::type
```

**描述**

表示union中使用的数据类型。

