---
name: document/cn/service/start-nodes-0000002471344161
title: 开始节点
uri: https://developer.huawei.com/consumer/cn/doc/service/start-nodes-0000002471344161
---

# 开始节点

开始节点是工作流的起始节点，用于设定启动工作流需要的输入信息。开始节点只有输入参数，没有输出等其他参数。开始节点中默认有一个输入参数USER_INPUT，一个默认的输入参数FILES_INPUT（非必填），和一个默认的输入参数EVENT_INPUT（非必填）。表示用户在本轮对话中输入的原始内容。开发者也可以按需添加其他自定义输入参数。

开始节点配置说明如下：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5c/v3/JV_KI3AdRwW-TMAc9Eex_A/zh-cn_image_0000002640264032.png?HW-CC-KV=V1&HW-CC-Date=20260909T145242Z&HW-CC-Expire=31536000000&HW-CC-Sign=66529B1609F2D24A6E8CA4CB7A2A1D707DB8AE9CF39D574DC725573CB62B51CB "点击放大")

## 输入参数说明

* 自定义参数：开始节点支持添加String、Boolean、Integer、Time、Object类型自定义参数，注意：因无法从用户输入中接收自定义参数内容，所以有自定义输入参数的工作流，不支持在工作流模式的智能体中使用，仅支持试运行工作流。
* USER_INPUT：将工作流添加到智能体中使用时，USER_INPUT将接收用户发送的文本内容。
* EVENT_INPUT：接收触发智能体的事件消息，在动态快捷指令（详解参考[动态快捷指令](https://developer.huawei.com/consumer/cn/doc/service/base-ability-0000002675010323#section56021520127)），或触发器执行工作流任务时使用（详解参考[触发器](https://developer.huawei.com/consumer/cn/doc/service/trigger-0000002437625878)）。
* FILES_INPUT：工作流添加到智能体中使用时，打开智能体"输入文件设置"中支持照片、拍摄或文件按钮，点击上传图片或文件时，FILES_INPUT将接收用户发送的图片或文件。

## 处理非文本请求工作流演示案例

FILES_INPUT是一个Array<string>类型参数，一般图片处理类工具需接收string类型入参，此时我们可以借助[文本处理组件](https://developer.huawei.com/consumer/cn/doc/service/text-processing-node-0000002471264305)取出目标图片或文件链接进行传递。如图所示：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/72/v3/SXXRV9RMQ3aSW21pikeoVQ/zh-cn_image_0000002670263921.png?HW-CC-KV=V1&HW-CC-Date=20260909T145242Z&HW-CC-Expire=31536000000&HW-CC-Sign=5F13053C6FDD054F9A109E2274F70EE9D7F20907529D742348E65029AD751B45 "点击放大")

文本处理组件选择字符串拼接方式，输入引用FILES_INPUT参数，通过${input[0]}取出目标图片或文件链接并传递给后续节点处理，涉及多文件或多图场景，可通过多个文本处理组件分别提取。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c5/v3/ndet8BhXS9KcalWbF3a8sA/zh-cn_image_0000002640104094.png?HW-CC-KV=V1&HW-CC-Date=20260909T145242Z&HW-CC-Expire=31536000000&HW-CC-Sign=D780541E61D956CA25B608A522CDC9FC84C58F90E0A06B417685E22634BB8330 "点击放大")

试运行时，FILES_INPUT输入：["https://xxx.jpg","https:xxx.jpg"](仅示例，实际需替换链接地址）调试，调试完成后上架工作流。将工作流添加到智能体中使用时，直接点击上传文件按钮发送图片或文件即可，多文件时会根据图片发送顺序取出。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/81/v3/Wl0-BO6eSAWJ8lLmkWrWEQ/zh-cn_image_0000002670104067.png?HW-CC-KV=V1&HW-CC-Date=20260909T145242Z&HW-CC-Expire=31536000000&HW-CC-Sign=95D2D04E38DCC2AF6246C9E414D411AE77B3DC9BEBD5FC05C05EBB9620BBF7F0 "点击放大")

