---
name: document/cn/harmonyos-references/capi-transienttask-transienttask-transienttaskinfo
title: TransientTask_TransientTaskInfo
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-transienttask-transienttask-transienttaskinfo
---

# TransientTask_TransientTaskInfo

> phone 20+ | 2in1 20+ | tablet 20+ | tv 20+ | wearable 20+

```c
typedef struct TransientTask_TransientTaskInfo {...} TransientTask_TransientTaskInfo
```

## 概述

定义所有短时任务信息结构体。用于返回当日剩余总配额和已申请的所有短时任务信息。

**起始版本：** 20

**相关模块：** [TransientTask](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-transienttask)

**所在头文件：** [transient_task_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-transient-task-type-h)

## 汇总

### 成员变量

|名称|描述|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------|
|int32_t remainingQuota|当日剩余总配额。单位：毫秒。|
|[TransientTask_DelaySuspendInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-transienttask-transienttask-delaysuspendinfo) transientTasks[[TRANSIENT_TASK_MAX_NUM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-transient-task-type-h#宏定义)]|已申请的所有短时任务信息。包括短时任务请求ID、剩余时间（单位：毫秒）。|

