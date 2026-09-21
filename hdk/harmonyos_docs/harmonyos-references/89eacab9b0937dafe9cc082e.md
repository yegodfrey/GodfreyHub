---
name: document/cn/harmonyos-references/capi-neuralnetworkruntime-oh-nn-memory
title: OH_NN_Memory
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-neuralnetworkruntime-oh-nn-memory
---

# OH_NN_Memory

> phone 12+ | 2in1 13+ | tablet 12+ | tv 19+

```c
typedef struct OH_NN_Memory {...} OH_NN_Memory
```

## 概述

内存结构体。

**起始版本：** 9

**废弃版本：** 11

**替代接口：** [NN_Tensor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-neuralnetworkruntime-nn-tensor)

**相关模块：** [NeuralNetworkRuntime](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-neuralnetworkruntime)

**所在头文件：** [neural_network_runtime_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-neural-network-runtime-type-h)

## 汇总

### 成员变量

|名称|描述|
|:------------------|:--------------------------|
|void * const data|指向共享内存的指针，该共享内存通常由底层硬件驱动申请。|
|const size_t length|记录共享内存的字节长度。|

