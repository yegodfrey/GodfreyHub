---
name: cangjie-guides/cj-code-debug-breakpoints
title: 使用断点
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-code-debug-breakpoints
nodePath: 编写与调试应用 / 应用调试 / 代码调试 / 使用断点
---

# 使用断点

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/21/v3/5B3fo4zhQYy9CwZqda7HdQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=C328FFE81F333E339ACA0250DE317BB996D3B3E1244D4F93B23091131F40FE7D)

文件路径含中文字符时，不支持设置断点。

在设置的程序断点红点处，单击鼠标右键。然后单击**More** 或按快捷键**Ctrl+Shift+F8** （macOS为**Shift+Command+F8** ），打开断点管理界面。

或者在启动debug、下方出现“Debug”窗口时，点击打开“Debug”窗口，单击**View Breakpoints** 图标![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9e/v3/h1uqWYKoRU-HR4wwvLxQcg/zh-cn_image_0000002701819642.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=C9F6836254493A14B843C73BC0C21E5F51B4C7505259E6F067774B44C0CEFD87)，打开断点管理界面。

开发者可以在断点管理界面查看或更改断点。

  * 勾选 Enable ，使能该断点。
  * 勾选 Suspend execution ，使程序运行到断点时中断。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/83/v3/LCir6N-fQiSe_2tF9Lfyzw/zh-cn_image_0000002731538923.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=842E21F19E532F9E927575B1AAA6EA11266FBF4CEFE931593C8A17D16BD43F85)

#### 条件断点

在断点管理界面，点击需要配置的断点，在右侧的配置中，勾选 Condition ，并设置表达式作为条件，使程序运行到断点且满足设置的条件时才会中断进程。

#### 日志断点

在断点管理界面，点击需要配置的断点，在右侧的配置中，勾选Log中的不同类型，可以使进程运行到断点时在 console 窗口打印相应 log。

  * 勾选“Breakpoint hit”message，程序运行到断点时，打印“Breakpoint reached”
  * 勾选 Stack trace，程序运行到断点时，打印当前线程的堆栈
  * 勾选 Evaluate and log，并添加表达式，程序运行到断点时，打印表达式的值



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4a/v3/Mv-DBWA2TYqZZuf7rdGUMw/zh-cn_image_0000002701659734.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=52100722F81E213E3BE287814381DD3C9199455B5637EDD939EAB4BF6A45ED4A)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a0/v3/CGQqsIpfRwG47suWS4d97A/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=9E2B35D018E7A10CF181C446B46785C70C48CA0B38ABC8700D879A8A9E0BF5ED)

未勾选 Enable 的断点不会打印日志，未勾选 Suspend execution 的断点会打印日志，不满足所设置的 Condition 的断点不会打印日志。

#### 临时断点

在断点管理界面，点击需要配置的断点，在右侧的配置中，勾选 Remove once hit，该断点只生效一次，生效后该断点会被删除。

#### 函数断点

也叫方法断点或符号断点，使用函数名设置断点，当程序运行到对应函数时，中断进程。

在断点管理界面，单击“+”->“Cangjie Function Breakpoints”，在弹出窗口中填写函数名，添加函数断点。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/36/v3/Qdd3TDpcSv6hZ-0SlZHaXw/zh-cn_image_0000002731378949.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=544C03A43E73350FE7A085A67DAC8853F6F1C04A68A39FA466837D336DD8C47B)

#### 数据断点

支持三种类型的数据断点，即变量被读、被写、被读写时中断进程。

在变量列表中对某一个变量右键，在菜单中选择添加数据断点。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/84/v3/1hFZh8_mTiCSjjJSSo2uyg/zh-cn_image_0000002701819644.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=B6062F9836194C19CFF43AAA5D847C864A4CD19945C8D902B5D046483A154D99)

在断点管理界面进行查看和修改。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1b/v3/lT77icgZQPKV4DgtaX8EFA/zh-cn_image_0000002731538925.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=A1105E270D13AC7F9D1BA979F2009C8F893E03C39C43B6D5DDBDEBD75F8A3E78)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a/v3/-YrRB440SRKABLLe-CeISQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=B7DF88140BD2DF39D660C1949966B0E64667A9C8D0C6AD419D2B5639782D91F6)

数据断点支持的类型受硬件限制，支持设置数据断点的变量类型 size 不能超过硬件支持的范围；

受硬件限制，最多同时设置 2 个数据断点；

对局部变量设置的数据断点，需要在离开作用域时手动删除，否则会由于变量地址被重用导致进程中断。
