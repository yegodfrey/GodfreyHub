---
name: cangjie-guides/cj-code-debug-breakpoints
title: 使用断点
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-code-debug-breakpoints
nodePath: 编写与调试应用 / 应用调试 / 代码调试 / 使用断点
---

# 使用断点

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/11/v3/1VU6iynuSqW0zIfvoi1RDg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=636CD202E64AC6DC69C90E773FE0CFA34F2A5346D8A1B080A807007A4D73B95B)

文件路径含中文字符时，不支持设置断点。

在设置的程序断点红点处，单击鼠标右键。然后单击**More** 或按快捷键**Ctrl+Shift+F8** （macOS为**Shift+Command+F8** ），打开断点管理界面。

或者在启动debug、下方出现“Debug”窗口时，点击打开“Debug”窗口，单击**View Breakpoints** 图标![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0d/v3/UAY9ZLSFQTG4h6l5CFGg_Q/zh-cn_image_0000002743197921.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=F5726864C169EF8A4765B8705DCA7F9FE452DCC6BB8B9B736DCB69ADF2E853D8)，打开断点管理界面。

开发者可以在断点管理界面查看或更改断点。

  * 勾选 Enable ，使能该断点。
  * 勾选 Suspend execution ，使程序运行到断点时中断。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bd/v3/vOAe3d6VR0OR7TGyYRHVOg/zh-cn_image_0000002713399040.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=E20C672B4152679567F61467CE8826AB9355312B3D989C40CD7DDBC4FEA7092F)

#### 条件断点

在断点管理界面，点击需要配置的断点，在右侧的配置中，勾选 Condition ，并设置表达式作为条件，使程序运行到断点且满足设置的条件时才会中断进程。

#### 日志断点

在断点管理界面，点击需要配置的断点，在右侧的配置中，勾选Log中的不同类型，可以使进程运行到断点时在 console 窗口打印相应 log。

  * 勾选“Breakpoint hit”message，程序运行到断点时，打印“Breakpoint reached”
  * 勾选 Stack trace，程序运行到断点时，打印当前线程的堆栈
  * 勾选 Evaluate and log，并添加表达式，程序运行到断点时，打印表达式的值



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5f/v3/YNngA-PTTVq81_TiAiKi8g/zh-cn_image_0000002743077971.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=6B913F78960B14EB2D834DA745DA7C1F64ABC0D0EC63A6EE580C7C50F6ADA3BE)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/59/v3/e-j4qvsySW2lidka3xN56w/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=90E33BFA7814491EB3652606B027317138329311B6DAAB1F8723FD0878156B34)

未勾选 Enable 的断点不会打印日志，未勾选 Suspend execution 的断点会打印日志，不满足所设置的 Condition 的断点不会打印日志。

#### 临时断点

在断点管理界面，点击需要配置的断点，在右侧的配置中，勾选 Remove once hit，该断点只生效一次，生效后该断点会被删除。

#### 函数断点

也叫方法断点或符号断点，使用函数名设置断点，当程序运行到对应函数时，中断进程。

在断点管理界面，单击“+”->“Cangjie Function Breakpoints”，在弹出窗口中填写函数名，添加函数断点。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/eb/v3/zGHEyFdKT3usUxqvCPX9GA/zh-cn_image_0000002713559010.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=7E5B7BC532C332ECCCCA16B5D4657776AA4BC2EC8EB61DA5DE41475578741906)

#### 数据断点

支持三种类型的数据断点，即变量被读、被写、被读写时中断进程。

在变量列表中对某一个变量右键，在菜单中选择添加数据断点。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fc/v3/LrbXXkefTwGhDGuGfbmx5A/zh-cn_image_0000002743197923.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=B3F784492C29A0D893C6D36B459E05E935646315073E7A481135451610570F45)

在断点管理界面进行查看和修改。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e1/v3/bL8BklCcSRaID_xOM2V3Vg/zh-cn_image_0000002713399042.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=A3DDD2E24F9A91C521E07FF541A2269582D0BCC78AE522AD39A384420A8BD40F)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a7/v3/iP_4rAaLQz-6Wino5Suthw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=0EDCB18D4AA00C5168DFB0F67DFEC5A2C5FC248559247EC5EF1640124FBDF911)

数据断点支持的类型受硬件限制，支持设置数据断点的变量类型 size 不能超过硬件支持的范围；

受硬件限制，最多同时设置 2 个数据断点；

对局部变量设置的数据断点，需要在离开作用域时手动删除，否则会由于变量地址被重用导致进程中断。
