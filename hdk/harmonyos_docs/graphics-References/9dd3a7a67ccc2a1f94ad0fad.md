---
name: document/cn/graphics-References/barrier-async-0000001050170839
title: dispatch_barrier_async
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/barrier-async-0000001050170839
---

# dispatch_barrier_async

## 功能描述

异步地提交一个barrier任务到目标队列上。

barrier任务的意义是：如果一个barrier任务提交到并发队列上，那么它会等待前面所有任务都完成了再开始执行，并且所有在它之后提交的任务需要等待它完成再开始。

提交barrier任务的接口有一个约束，必须使用用户创建的concurrent queue，而不能在global concurrent queue中添加barrier任务。如果提交到global concurrent queue或任何serial queue，那么接口的表现和非barrier接口相同，例如dispatch_barrier_async的行为会退化到[dispatch_async](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/async-0000001050168872)。

## 函数原型

```screen
void dispatch_barrier_async(dispatch_queue_t queue, dispatch_block_t block);
```

## 参数

|名称|类型|描述|
|:----|:---------------|:----|
|queue|dispatch_queue_t|目标队列。|
|block|dispatch_block_t|任务。|

## 返回

|类型|描述|
|:---|:-|
|void|-|

