---
name: document/cn/service/agent2agent-command-0000002467900460
title: 底部快捷指令说明
uri: https://developer.huawei.com/consumer/cn/doc/service/agent2agent-command-0000002467900460
---

# 底部快捷指令说明

Agent内底部快捷指令用户点击事件上报，需要先在小艺开放平台智能体内配置对应快捷指令：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/76/v3/T2ad6CETQeuqAWuWsCIyFw/zh-cn_image_0000002640264018.png?HW-CC-KV=V1&HW-CC-Date=20260909T134906Z&HW-CC-Expire=31536000000&HW-CC-Sign=891B10CF469D8D49CFFB9CE51D0EDAA1D68F580A5278CA8B640A16E5A7AABA19 "点击放大")

Agent Client请求Agent Server侧的data数据结构定义：

```screen
"userInputInfo": {
      "statusInfo": [{
   "isSelected": true,
   "statusKey": "Agent开发平台定义的快捷指令的Key",
   "statusValue": "Agent开发平台定义的快捷指令的Value，如联网搜索"
      }]
}
```

UserInputInfo参数说明：

|**字段名称**|  |类型|是否必填|字段描述|
|:-------|:------------|:-----|:---|:-------------------|
|kind|-|string|是|字段类型，此处固定为"data"。|
|data|-|object|是|数据类型为data类型的结构体定义。|
|data|userInputInfo|string|否|仅在用户点击Agent内快捷指令时必选。|

底部快捷指令手机端展示效果：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6e/v3/b0L6jMUXTCCNfMZxX7b_Bw/zh-cn_image_0000002670263907.png?HW-CC-KV=V1&HW-CC-Date=20260909T134906Z&HW-CC-Expire=31536000000&HW-CC-Sign=6BCF430638C16EA340815E244DC9F6F9C3C18AD331487B53EB3F04536D46A21A "点击放大")

