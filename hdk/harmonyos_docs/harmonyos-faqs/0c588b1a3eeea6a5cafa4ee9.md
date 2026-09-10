---
name: document/cn/harmonyos-faqs/faqs-app-debugging-23
title: 安装HAP时提示“error: failed to start ability”
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-app-debugging-23
---

# 安装HAP时提示"error: failed to start ability"

问题现象

启动调试或运行应用/服务时，如果安装HAP出错，提示"error: failed to start ability. error: ability visible false deny request"，请检查应用的可见性设置。

![](https://media:101782454416115395)

解决措施

* 在Stage模型工程的module.json5文件中，将abilities字段内的exported设置为true。
* FA模型工程：在config.json文件的abilities字段中，将visible设置为true。  
