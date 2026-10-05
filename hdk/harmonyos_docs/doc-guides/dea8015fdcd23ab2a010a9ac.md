---
name: document/cn/doc-guides/ai-assistant-intention-recognition-overview-0000001050772581
title: 助手类意图识别概述
uri: https://developer.huawei.com/consumer/cn/doc/doc-guides/ai-assistant-intention-recognition-overview-0000001050772581
source: portal
---

# 助手类意图识别概述

随着人机交互越来越普遍，设备需要理解用户下达的各种指令，方便用户的操作。助手类意图识别能够利用机器学习技术，对用户发送给设备的文本消息进行语义分析和意图识别，进而衍生出各种智能的应用场景，使设备更智慧、更智能。

#### 约束与限制

     * 当前只支持中文语境。
     * 助手类意图识别文本限制在50个字符以内，超过字数将返回参数错误。文本要求UTF-8格式，如果格式错误不会引发报错，但将导致分析结果不正确。
     * Engine支持多用户同时接入，但是不支持同一用户并发调用同一特性。若同一特性被同一进程同一时间多次调用，则返回系统忙错误；不同进程调用同一特性，则同一时间只能处理一个进程业务，其他进程进入队列排队。
