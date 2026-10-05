---
name: document/cn/HEM/hem_user-guide_equipment_management_shebeitext-0000001480110369
title: 如何设置设备检测
uri: https://developer.huawei.com/consumer/cn/doc/HEM/hem_user-guide_equipment_management_shebeitext-0000001480110369
---

# 如何设置设备检测

![](https://media:201786691200536636)  
目的：

对您管控的设备进行基础检测。

当设备完成管控软件的安装，HEM管理台"设备注册"---"手机\&平板"---"部署状态"为激活成功时，此处会自动发起检测。  
![](https://media:201786691200593637)  
状态什么时候才是"已完成"？

当满足以下2个条件时才会展示，否则为"进行中"。

1、所有部署成功的设备都联网上报。

2、任务详情中4个任务，全部检测完成。

<br />

#### 状态说明

|检测项|说明|
|:--------|:----------------------------------------|
|系统完整性检测|判断App所运行的设备环境是否安全，比如是否被Root或被解锁|
|应用安全检测|判断设备上是否含有恶意应用，您可获得设备恶意应用列表|
|虚假用户检测|判断当前App的交互对象是否为真实用户，您可基于结果判断该用户身份是自然人还是机器|
|恶意Wi-Fi检测|判断当前尝试连接的Wi-Fi是否安全，您可基于结果防范来自恶意Wi-Fi的恶意攻击|
[表1]

更多详情请见：[安全检测服务](https://developer.huawei.com/consumer/cn/hms/huawei-safetydetectkit/)  
