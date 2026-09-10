---
name: document/cn/hiai-Guides/cannkit-overview-of-ai-framework-operator-0000002122321648
title: AI框架算子适配概述
uri: https://developer.huawei.com/consumer/cn/doc/hiai-Guides/cannkit-overview-of-ai-framework-operator-0000002122321648
---

# AI框架算子适配概述

本章节内容介绍AI框架调用自定义算子的方法。如下图所示，PyTorch和TensorFlow仅支持图模式。

AI框架调用时，除了需要提供DDK框架调用时需要的代码实现文件，还需要进行插件适配开发。下文仅展示通过ONNX框架进行算子适配，TensorFlow框架开发流程与ONNX框架开发流程一致。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260104150619.94441545005602047992761817304965:50001231000000:2800:F7BA790FF293F2EC14693EF1E6995AF9BB948D7DEA72AA9760AC6C0C9812C823.png "点击放大")  
