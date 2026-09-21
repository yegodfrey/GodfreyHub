---
name: document/cn/harmonyos-references/_rcp___credential
title: Rcp_Credential
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_rcp___credential
---

# Rcp_Credential

> phone 5.0.0(12)+ | 2in1 5.0.1(13)+ | tablet 5.0.0(12)+ | tv 5.1.1(19)+ | wearable 5.1.0(18)+

## 概述

服务器身份验证中使用的身份验证凭据，包括用户名和密码。

**起始版本：** 5.0.0(12)

**相关模块：** [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

**所在头文件：** [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

## 汇总

### 成员变量

|名称|描述|
|:---------------------------|:-------------|
|char * [username](#username)|凭据的用户名。默认值为""。|
|char * [password](#password)|凭据的密码。默认值为""。|

## 结构体成员变量说明

### password

```cpp
char* Rcp_Credential::password
```

**描述**

凭据的密码。默认值为""。

### username

```cpp
char* Rcp_Credential::username
```

**描述**

凭据的用户名。默认值为""。

