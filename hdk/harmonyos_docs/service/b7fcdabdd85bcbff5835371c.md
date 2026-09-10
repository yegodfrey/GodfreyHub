---
name: document/cn/service/agent2agent-command-0000002467900460
title: 底部快捷指令说明
uri: https://developer.huawei.com/consumer/cn/doc/service/agent2agent-command-0000002467900460
---

# 底部快捷指令说明

Agent内底部快捷指令用户点击事件上报，需要先在小艺开放平台智能体内配置对应快捷指令：

![](https://media:301785143832400603 "点击放大")

Agent Client请求Agent Server侧的data数据结构定义：

```
"userInputInfo": {
      "statusInfo": [{
   "isSelected": true,
   "statusKey": "Agent开发平台定义的快捷指令的Key",
   "statusValue": "Agent开发平台定义的快捷指令的Value，如联网搜索"
      }]
}
```

UserInputInfo参数说明：  

|字段名称| |类型|是否必填|字段描述|
|:----------|:------------|:-----|:---|:-------------------|
|kind|-|string|是|字段类型，此处固定为"data"。|
|data <br />|-|object|是|数据类型为data类型的结构体定义。|
|data <br />|userInputInfo|string|否|仅在用户点击Agent内快捷指令时必选。|

底部快捷指令手机端展示效果：

![](https://media:301785143832456604 "点击放大")  
