---
name: document/cn/hiai-References/delattr-0000001052248134
title: DelAttr
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/delattr-0000001052248134
---

# DelAttr

## 接口定义

```screen
GraphErrCodeStatus DelAttr(const string& name);
```

## 功能介绍

删除属性。

## 参数

|名称|输入/输出|类型|描述|
|:---|:----|:------------|:----|
|name|输入|const string&|属性名称。|

## 返回

|类型|描述|
|:-----------------|:-----------------------------------|
|GraphErrCodeStatus|成功返回GRAPH_SUCCESS，否则，返回GRAPH_FAILED。|

