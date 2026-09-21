---
name: document/cn/harmonyos-references/_f_i_d_o2___capability
title: FIDO2_Capability
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_f_i_d_o2___capability
---

# FIDO2_Capability

> phone 6.0.0(20)+ | 2in1 6.0.0(20)+ | tablet 6.0.0(20)+

## 概述

通行密钥能力的结构体。

**起始版本：** 6.0.0(20)

**相关模块：** [FIDO2（通行密钥服务）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey)

**所在头文件：** [fido2_api.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/onlineauthentication_capi_header_fido2)

## 汇总

### 成员变量

|名称|描述|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|
|[FIDO2_ClientCapability](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/passkey#fido2_clientcapability-1) [capability](#capability)|通行密钥的能力。|
|bool [isSupported](#issupported)|是否支持。如果为true表示支持，false表示不支持。|

## 结构体成员变量说明

### capability

```cpp
FIDO2_ClientCapability FIDO2_Capability::capability
```

**描述**

通行密钥的能力。

### isSupported

```cpp
bool FIDO2_Capability::isSupported
```

**描述**

是否支持。如果为true表示支持，false表示不支持。

