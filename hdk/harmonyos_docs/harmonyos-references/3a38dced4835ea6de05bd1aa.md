---
name: document/cn/harmonyos-references/capi-codecbase-oh-avdatasourceext
title: OH_AVDataSourceExt
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-codecbase-oh-avdatasourceext
---

# OH_AVDataSourceExt

> phone 20+ | 2in1 20+ | tablet 20+ | tv 20+ | wearable 20+

```c
typedef struct OH_AVDataSourceExt {...} OH_AVDataSourceExt
```

## 概述

用户自定义数据源，回调支持通过userData传递用户自定义数据。

**起始版本：** 20

**相关模块：** [CodecBase](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-codecbase)

**所在头文件：** [native_avcodec_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h)

## 汇总

### 成员变量

|名称|描述|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------|
|int64_t size|数据源的总大小，单位为字节。|
|[OH_AVDataSourceReadAtExt](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#oh_avdatasourcereadatext) readAt|数据源的数据读取回调。|

