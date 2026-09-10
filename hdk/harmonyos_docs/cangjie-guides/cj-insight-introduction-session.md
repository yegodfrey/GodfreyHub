---
name: cangjie-guides/cj-insight-introduction-session
title: 会话区
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-introduction-session
nodePath: 优化应用性能 / 调优工具简介 / 会话区
---

# 会话区

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cb/v3/mS4JpyRWQj6KWb6jx1t8pg/zh-cn_image_0000002743078001.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=50D555DC0BCAC9D3BFA914BC51D4BA4DFE56A240E11B84D89DF5A9B1B6B63C3B)

DevEco Profiler左侧为会话区，可以分为三个部分：**①调优目标选择区域** 、**②会话列表区域** 、**③场景化模板选择区域** 。

  * 调优目标选择区域：选择设备及要分析的应用和进程。

选定被调优的设备、应用包及应用进程作为后续调优会话的分析对象。依次单击设备、应用、进程列表完成选择。选择完成后，若目标正在运行，将自动开启实时监控进行指标的观测。

  * 会话列表区域：显示当前已创建的调优分析会话。

单击列表中的会话后，界面右侧数据区将显示其数据内容。选择设备应用和进程后，此处默认显示“Realtime Monitor”任务。

会话区将记录当前所有的会话。每一个会话都会包含：会话的名称(图例中的"CPU")、会话当前状态(图例中的"Recorded")、会话对应的录制时长信息(图例中的"4s 103ms")。会话支持拖拽方式调整顺序。

**录制/删除会话** ：通过鼠标悬停在名称后方的信息图标![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8e/v3/n56nTaXNR6unhmHnZIDFNA/zh-cn_image_0000002713559040.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=73AF472DD14251419D52BD121524E4838B90D02099E0D03EB43D2B4326C6C3A6)上，会话所要观测的调优对象的基本信息将会以Tooltip的形式展示。单击会话的右侧的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d7/v3/GeRSj9yZRF6OHnHgd1u7zA/zh-cn_image_0000002743197953.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=DB2052B21D19B7067FA42A006D4DE40A218148657E8030080ACD0F757FB73358) / ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/af/v3/CP5u64hfS_WMQ19u-TR8vQ/zh-cn_image_0000002713399072.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=741AA92BC4C06D40BBA72F6FEC691EAFBDABC8935FEE554CD9D7209FB855521E)按钮，开启/停止会话录制，此时工具开始抓取性能数据，开发者可以操作应用复现性能劣化场景。单击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/75/v3/_1ui9B30Q7aaIAE-gMWBOA/zh-cn_image_0000002743078003.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=09713477273B2EB7989CCED36738BE62F877335093AF38D564292B6A0E3C493D)将删除该会话。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/14/v3/pSfqVgANSpCPl546kzXJug/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=6D09355B87AA2E066FA9CEA2E9936AC811EE346191F23A0560ABAEA6E3638CBC)

    * 会话区存在两种会话类型：活跃会话和历史会话。活跃会话可在此区域内直接看到，历史会话需要单击界面下方**View Successesful Sessions** 前往查看。开发者主动选择新的调优目标后，活跃会话会清空，相关会话进入历史会话。

    * 仅成功录制或导入的session可长期存留在任务列表中；录制失败或未启动录制的session，在设备/应用切换时自动从任务列表中清除。

    * 会话录制完成出现![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3b/v3/lHCJkwMIQhO5U7-He-rPAQ/zh-cn_image_0000002713559042.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=2529EAFCC929EA26ECA9356B676E2EA83E6FAD707ED5A7759DC66530A8F6DDEF)图标，表示数据处于解析状态，请耐心等待解析完成。

**数据导出** ：待数据解析完成后，会话便会进入数据展示状态，将数据可视化的展示到右侧的数据区中。此时可以单击会话面板中出现的数据导出按钮![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7f/v3/Kpp2hGELSK6ZSn3Ao8voLw/zh-cn_image_0000002743197955.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=B521B69454D67CF9E0A1A329BB59B77E8D4F47E40DC8371261DECBAFF7B5B451)，将录制到的数据导出到本地进行保存，借助这个能力，开发者可以方便的在团队内共享录制到的性能数据，也可以防止采集到的性能数据丢失。

  * 场景化模板选择区域：新建会话的入口，Profiler提供[CPU](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-cpu)场景化分析模板，提供对不同性能问题场景的数据分析方案。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/63/v3/0HALB2gaSoOiteEO4Vn7GA/zh-cn_image_0000002713399074.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=31F7D227B39E7749F3B17CFCD7D459D8EB05D5D434F324DAF8A62D0D70D86913)：CPU调度场景化模板。

选中任意模板图标，单击下方Create Session按钮，即可创建出一个全新的会话。

**数据导入** ：在③场景化模板选择区域，单击Open File按钮，即可选择数据进行导入。当前支持.insight、.htrace、.ftrace、.heapsnapshot、.sys、.perfdata和.nas（包含Native Allocation数据的.htrace文件）文件的导入。



