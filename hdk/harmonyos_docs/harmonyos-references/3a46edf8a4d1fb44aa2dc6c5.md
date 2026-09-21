---
name: document/cn/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectdispatcher-set8h
title: OH_AbilityRuntime_ModularObjectDispatcher_Set*
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime-oh-abilityruntime-modularobjectdispatcher-set8h
---

# OH_AbilityRuntime_ModularObjectDispatcher_Set*

> phone 26.0.0+ | 2in1 26.0.0+ | tablet 26.0.0+ | tv 26.0.0+ | wearable 26.0.0+

```c
typedef struct OH_AbilityRuntime_ModularObjectDispatcher_Set* OH_AbilityRuntime_ModObjDispatcher_SetHandle
```

## 概述

集合句柄。

该句柄指向一个不重复元素的无序集合，所有元素类型相同，支持添加元素、删除元素、查询指定元素是否存在、按索引获取元素、查询集合大小和清空操作。

可通过[OH_AbilityRuntime_ModObjDispatcher_SetCreate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-dispatcher-h#oh_abilityruntime_modobjdispatcher_setcreate)创建，使用完毕后需通过[OH_AbilityRuntime_ModObjDispatcher_SetRelease](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-dispatcher-h#oh_abilityruntime_modobjdispatcher_setrelease)释放。

**起始版本：** 26.0.0

**相关模块：** [AbilityRuntime](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-abilityruntime)

**所在头文件：** [modular_object_dispatcher.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-modular-object-dispatcher-h)

