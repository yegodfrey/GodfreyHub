---
name: document/cn/graphics-References/async-0000001050170843
title: dispatch_group_async
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/async-0000001050170843
---

# dispatch_group_async

## 功能描述

异步提交一个任务到目标队列上，并且把任务与指定的group关联。

## 函数原型

```screen
void dispatch_group_async(dispatch_group_t group, dispatch_queue_t queue,dispatch_block_t block);
```

## 参数

|名称|类型|描述|
|:----|:---------------|:----------|
|group|dispatch_group_t|需要关联的group。|
|queue|dispatch_queue_t|任务提交的队列。|
|block|dispatch_block_t|任务。|

## 返回

|类型|描述|
|:---|:-|
|void|-|

